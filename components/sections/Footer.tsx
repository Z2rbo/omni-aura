"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { LogoWordmark } from "@/components/Logo";

type NavLink = { label: string; href: string; external?: boolean };
type NavCol = { title: string; links: NavLink[] };
type Status = "idle" | "submitting" | "success" | "error";

/**
 * Колонки — только рабочие ссылки. Никаких "href=#" в никуда.
 * Каждый линк ведёт либо на существующий якорь страницы, либо наружу.
 */
const cols: NavCol[] = [
  {
    title: "Продукт",
    links: [
      { label: "Решение", href: "#solution" },
      { label: "Как это работает", href: "#how" },
      { label: "Экраны", href: "#screens" },
      { label: "Тарифы", href: "#pricing" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    title: "Команда",
    links: [
      {
        label: "Связаться",
        href: "mailto:team@omni-aura.app",
        external: true,
      },
      {
        label: "Питч-дек",
        href: "mailto:team@omni-aura.app?subject=Pitch-deck%20request",
        external: true,
      },
    ],
  },
  {
    title: "Материалы",
    links: [
      { label: "Исследование ЦА", href: "#problem" },
      { label: "Конкуренты", href: "#competitors" },
      { label: "Аудитория", href: "#audience" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [err, setErr] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErr("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          type: "waitlist",
          email,
          source: "footer-waitlist",
          consent: true,
        }),
      });
      if (!res.ok) {
        const b = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setStatus("error");
        setErr(b?.error ?? "Не удалось отправить. Попробуй ещё раз.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setErr("Нет связи с сервером. Попробуй позже.");
    }
  }

  return (
    <footer className="relative border-t border-ink/5 bg-cream py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 xs:px-5 sm:px-6 md:px-10">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <LogoWordmark />
            <p className="mt-5 max-w-sm text-pretty text-[15px] text-ink-soft">
              Первый русскоязычный ИИ-коуч с computer vision. MVP
              в разработке — 2026.
            </p>

            {status === "success" ? (
              <div
                id="waitlist"
                className="mt-6 flex max-w-md items-center gap-3 rounded-full bg-white p-2 pr-5 shadow-hairline ring-1 ring-brand-500/30"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-grad-aurora-solid text-white shadow-glow-sm">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-bold text-ink">
                    Записали: {email}
                  </p>
                  <p className="text-[11px] text-ink-soft">
                    Пришлём инвайт первой волне.
                  </p>
                </div>
              </div>
            ) : (
              <form
                id="waitlist"
                onSubmit={submit}
                className="mt-6 flex max-w-md items-center gap-2 rounded-full bg-white p-1.5 shadow-hairline ring-1 ring-ink/5"
              >
                <label htmlFor="waitlist-email" className="sr-only">
                  Email для waitlist
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  disabled={status === "submitting"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="твой@email.ru"
                  aria-label="Email для waitlist"
                  className="flex-1 bg-transparent px-4 py-2 text-[14px] text-ink outline-none placeholder:text-gray disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={status === "submitting" || !email}
                  className="inline-flex items-center gap-1.5 rounded-full bg-grad-aurora-solid px-5 py-2 text-[13px] font-bold text-white shadow-glow-sm transition hover:shadow-glow-lg disabled:pointer-events-none disabled:opacity-60"
                >
                  {status === "submitting" && (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  )}
                  В waitlist
                </button>
              </form>
            )}
            {status === "error" && err && (
              <p className="mt-2 max-w-md text-[12px] font-semibold text-red-600">
                {err}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:col-span-7">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink">
                  {c.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        target={l.external ? "_blank" : undefined}
                        rel={l.external ? "noreferrer" : undefined}
                        className="text-[14px] text-ink-soft transition-colors hover:text-brand-700"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-ink/5 pt-8 text-[12px] text-gray md:mt-12">
          <p>© 2026 OMNI AURA</p>
          <div className="flex items-center gap-4">
            <Link
              href="mailto:team@omni-aura.app"
              className="transition-colors hover:text-ink"
            >
              team@omni-aura.app
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
