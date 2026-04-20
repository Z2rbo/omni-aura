import { NextResponse } from "next/server";

/**
 * POST /api/lead
 *
 * Единая точка приёма заявок. Принимает:
 *   - type: "waitlist" | "signup"
 *   - email: string
 *   - name?: string
 *   - goal?: string
 *   - level?: string
 *   - consent?: boolean
 *
 * Куда шлём:
 *   1) Telegram (через BotFather) — если задан TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID
 *   2) Webhook (любой сервис: Formspree / Getform / Google Apps Script / Make.com) — если задан LEAD_WEBHOOK_URL
 *   3) Файл /data/leads.jsonl (только локально / Netlify Functions writable tmp — fallback для демо)
 *
 * Переменные окружения:
 *   TELEGRAM_BOT_TOKEN  — токен бота, полученный у @BotFather
 *   TELEGRAM_CHAT_ID    — ID чата или канала, куда шлём
 *   LEAD_WEBHOOK_URL    — опционально, дополнительный webhook
 *
 * В .env.example есть пример. Без ENV запрос вернёт 200 но зальёт только в лог.
 */

export const runtime = "nodejs";

type LeadPayload = {
  type?: "waitlist" | "signup";
  email?: string;
  name?: string;
  goal?: string;
  level?: string;
  consent?: boolean;
  source?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "invalid_email" },
      { status: 422 }
    );
  }

  const payload = {
    type: body.type ?? "waitlist",
    email,
    name: body.name?.trim() || null,
    goal: body.goal?.trim() || null,
    level: body.level?.trim() || null,
    consent: Boolean(body.consent),
    source: body.source?.trim() || "landing",
    ip:
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      null,
    userAgent: req.headers.get("user-agent") || null,
    at: new Date().toISOString(),
  };

  const results: Record<string, "sent" | "skipped" | "failed"> = {
    telegram: "skipped",
    webhook: "skipped",
  };

  // 1. Telegram
  const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChat = process.env.TELEGRAM_CHAT_ID;
  if (tgToken && tgChat) {
    try {
      const text = formatTelegramMessage(payload);
      const r = await fetch(
        `https://api.telegram.org/bot${tgToken}/sendMessage`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            chat_id: tgChat,
            text,
            parse_mode: "HTML",
            disable_web_page_preview: true,
          }),
        }
      );
      results.telegram = r.ok ? "sent" : "failed";
    } catch {
      results.telegram = "failed";
    }
  }

  // 2. Доп. webhook
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const r = await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      results.webhook = r.ok ? "sent" : "failed";
    } catch {
      results.webhook = "failed";
    }
  }

  // 3. Fallback: серверный лог (видно в консоли разработчика)
  if (results.telegram !== "sent" && results.webhook !== "sent") {
    console.log("[lead] fallback log:", JSON.stringify(payload));
  }

  return NextResponse.json({ ok: true, results });
}

function formatTelegramMessage(p: Record<string, unknown>): string {
  const icon = p.type === "signup" ? "🚀" : "📝";
  const title =
    p.type === "signup" ? "Новая заявка в Early Access" : "Waitlist подписка";
  return [
    `${icon} <b>${escapeHtml(title)}</b>`,
    "",
    `<b>Email:</b> ${escapeHtml(String(p.email))}`,
    p.name ? `<b>Имя:</b> ${escapeHtml(String(p.name))}` : null,
    p.goal ? `<b>Цель:</b> ${escapeHtml(String(p.goal))}` : null,
    p.level ? `<b>Уровень:</b> ${escapeHtml(String(p.level))}` : null,
    p.consent ? `<b>Согласие:</b> ✅` : null,
    "",
    `<i>Источник:</i> ${escapeHtml(String(p.source))}`,
    p.userAgent
      ? `<i>UA:</i> <code>${escapeHtml(String(p.userAgent).slice(0, 120))}</code>`
      : null,
    `<i>Время:</i> ${escapeHtml(String(p.at))}`,
  ]
    .filter(Boolean)
    .join("\n");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
