"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Check, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

export type LeadModalProps = {
  open: boolean;
  onClose: () => void;
  /** Источник/варианта формы */
  variant?: "signup" | "waitlist";
  source?: string;
};

const goals = [
  "Похудеть",
  "Набрать массу",
  "Держать форму",
  "Выносливость",
  "Исправить технику",
];

const levels = ["Новичок", "Средний", "Продвинутый"];

export function LeadModal({
  open,
  onClose,
  variant = "signup",
  source = "landing",
}: LeadModalProps) {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState<string | null>(null);
  const [level, setLevel] = useState<string | null>(null);
  const [consent, setConsent] = useState(true);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => setMounted(true), []);

  // Lock scroll + ESC to close
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    // Focus первый инпут
    const t = setTimeout(() => firstFieldRef.current?.focus(), 60);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          type: variant,
          name: name.trim(),
          email: email.trim(),
          goal: goal ?? undefined,
          level: level ?? undefined,
          consent,
          source,
        }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        setStatus("error");
        setErrorMsg(body?.error ?? "Не удалось отправить. Попробуй ещё раз.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Нет связи с сервером. Попробуй позже.");
    }
  }

  const isSignup = variant === "signup";

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end justify-center px-3 py-4 sm:items-center sm:px-6 sm:py-10">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Закрыть"
        onClick={onClose}
        className="absolute inset-0 bg-ink/45 backdrop-blur-sm animate-[fade-in_200ms_ease-out]"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={isSignup ? "Анкета" : "В waitlist"}
        className="relative z-10 w-full max-w-[540px] overflow-hidden rounded-[28px] bg-cream shadow-float ring-1 ring-ink/5 animate-[pop-in_240ms_cubic-bezier(0.16,1,0.3,1)]"
      >
        {/* Aurora header strip */}
        <div className="relative overflow-hidden bg-grad-aurora-solid px-6 py-5 text-white md:px-8">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/15 blur-3xl" />
          <button
            type="button"
            aria-label="Закрыть"
            onClick={onClose}
            className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white/85">
            <Sparkles className="h-3.5 w-3.5" />
            {isSignup ? "Ранний доступ" : "Waitlist"}
          </div>
          <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
            {isSignup
              ? "Заполни за 40 секунд"
              : "Забронируй место в списке"}
          </h2>
          <p className="mt-1.5 max-w-sm text-[13px] text-white/80">
            {isSignup
              ? "Персональный план + 31 день Premium бесплатно. Напишем лично, как откроемся."
              : "Пришлём инвайт в первой волне. Никакого спама — только доступ."}
          </p>
        </div>

        {/* Body */}
        <div className="max-h-[min(78vh,720px)] overflow-y-auto px-5 py-6 md:px-8 md:py-7">
          {status === "success" ? (
            <SuccessPanel email={email} onClose={onClose} variant={variant} />
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                {isSignup && (
                  <FieldWrap label="Как тебя зовут" htmlFor="f-name">
                    <input
                      id="f-name"
                      ref={firstFieldRef}
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Имя"
                      className="lead-input"
                    />
                  </FieldWrap>
                )}

                <FieldWrap
                  label="Email"
                  htmlFor="f-email"
                  className={!isSignup ? "md:col-span-2" : undefined}
                >
                  <input
                    id="f-email"
                    ref={!isSignup ? firstFieldRef : undefined}
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ivan@mail.ru"
                    className="lead-input"
                  />
                </FieldWrap>
              </div>

              {isSignup && (
                <>
                  <FieldWrap label="Главная цель">
                    <div className="flex flex-wrap gap-2">
                      {goals.map((g) => (
                        <Chip
                          key={g}
                          label={g}
                          active={goal === g}
                          onClick={() => setGoal(g === goal ? null : g)}
                        />
                      ))}
                    </div>
                  </FieldWrap>

                  <FieldWrap label="Твой уровень">
                    <div className="flex flex-wrap gap-2">
                      {levels.map((l) => (
                        <Chip
                          key={l}
                          label={l}
                          active={level === l}
                          onClick={() => setLevel(l === level ? null : l)}
                        />
                      ))}
                    </div>
                  </FieldWrap>
                </>
              )}

              <label className="flex items-start gap-3 text-[13px] text-ink-soft">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 accent-brand-500"
                />
                <span>
                  Согласен получить инвайт и материалы о бете. Никакого спама,
                  никаких 3-х писем в день — обещаем.
                </span>
              </label>

              {status === "error" && (
                <p className="rounded-xl bg-red-50 px-4 py-2.5 text-[13px] font-semibold text-red-700">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting" || !email}
                className={cn(
                  "group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-grad-aurora-solid px-6 text-[15px] font-bold text-white shadow-glow-sm transition-all",
                  "hover:shadow-glow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]",
                  "disabled:opacity-60 disabled:pointer-events-none"
                )}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Отправляем…
                  </>
                ) : isSignup ? (
                  "Получить ранний доступ"
                ) : (
                  "Встать в очередь"
                )}
              </button>

              <p className="text-center text-[11px] text-gray">
                Нажимая кнопку, ты соглашаешься с обработкой данных по 152-ФЗ.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

function FieldWrap({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string;
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] text-ink-soft"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-[13px] font-semibold transition-all",
        active
          ? "border-transparent bg-grad-aurora-solid text-white shadow-glow-sm"
          : "border-ink/10 bg-white text-ink hover:border-brand-500/40 hover:bg-brand-50"
      )}
    >
      {label}
    </button>
  );
}

function SuccessPanel({
  email,
  onClose,
  variant,
}: {
  email: string;
  onClose: () => void;
  variant: "signup" | "waitlist";
}) {
  return (
    <div className="flex flex-col items-center gap-5 py-4 text-center">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-grad-aurora-solid text-white shadow-glow-sm animate-[pop-in_420ms_cubic-bezier(0.16,1,0.3,1)]">
        <Check className="h-8 w-8" strokeWidth={3} />
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-extrabold tracking-tight text-ink">
          Записали!
        </h3>
        <p className="text-[14px] text-ink-soft">
          {variant === "signup"
            ? "Уже готовим тебе персональный план. Напишем на "
            : "Сообщим на "}
          <span className="font-bold text-ink">{email}</span>
          {variant === "signup"
            ? " — как только откроемся в беете."
            : ", как придёт твоя очередь."}
        </p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="h-11 rounded-full bg-ink px-6 text-[14px] font-bold text-white transition-colors hover:bg-ink/90"
      >
        Отлично
      </button>
    </div>
  );
}
