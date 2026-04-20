"use client";

import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useLeadModal } from "@/components/ui/LeadModalProvider";
import { cn } from "@/lib/cn";

const tiers = [
  {
    key: "trial",
    name: "Trial",
    icon: Zap,
    price: "0",
    perks: "31 день бесплатно",
    desc: "Пощупать ИИ-коуча и понять, подходит ли.",
    features: [
      "5 запросов к ИИ-ассистенту",
      "Доступ к составлению программы",
      "Расчёт БЖУ",
      "Базовые уведомления",
    ],
    cta: "Начать бесплатно",
    highlight: false,
  },
  {
    key: "pro",
    name: "Pro",
    icon: Sparkles,
    price: "390",
    perks: "₽ / месяц",
    desc: "Для тех, кто тренируется регулярно.",
    features: [
      "200 запросов к ИИ-чату",
      "Голосовой ИИ-коуч",
      "Персональные программы",
      "Трекеры упражнений",
      "Расчёт БЖУ + дневник",
    ],
    cta: "Оформить Pro",
    highlight: true,
  },
  {
    key: "premium",
    name: "Premium",
    icon: Crown,
    price: "890",
    perks: "₽ / месяц",
    desc: "Максимум от ИИ и доступ к эксклюзивам.",
    features: [
      "Неограниченный ИИ-чат",
      "Computer Vision разбор техники",
      "Персональный план питания и диета",
      "Создание своего ИИ-ассистента",
      "Расширенная аналитика прогресса",
      "Приоритет поддержки",
    ],
    cta: "Оформить Premium",
    highlight: false,
  },
];

export function Pricing() {
  const { open } = useLeadModal();
  return (
    <Section
      id="pricing"
      eyebrow="Монетизация"
      title={
        <>
          Три тарифа. Стоит{" "}
          <span className="font-serif italic font-normal text-ink-soft">
            дешевле
          </span>{" "}
          одной тренировки.
        </>
      }
      lead="Месяц с живым тренером — 12 000₽. Год OMNI AURA Premium — 10 680₽. Математика сама делает выбор."
      align="center"
      className="relative overflow-hidden bg-cream"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-40 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(184,161,255,0.35),transparent_70%)] blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        {tiers.map((t, i) => (
          <Reveal key={t.key} delay={i * 80} className="h-full">
          <article
            className={cn(
              "relative flex h-full flex-col rounded-4xl p-8 ring-1 transition-all hover:-translate-y-1",
              t.highlight
                ? "bg-grad-surface ring-white/40 shadow-glow md:scale-[1.04] md:py-10"
                : "bg-white ring-ink/5 shadow-soft hover:shadow-float"
            )}
          >
            {t.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-grad-aurora-solid px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-glow-sm">
                Популярный
              </span>
            )}

            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "grid h-12 w-12 place-items-center rounded-2xl",
                  t.highlight
                    ? "bg-grad-aurora-solid text-white shadow-glow-sm"
                    : "bg-brand-50 text-brand-700"
                )}
              >
                <t.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xl font-extrabold tracking-tight">{t.name}</p>
                <p className="text-[12px] font-semibold text-ink-soft">{t.desc}</p>
              </div>
            </div>

            <div className="mt-8 flex items-end gap-2">
              <span className="text-5xl font-extrabold tracking-tighter md:text-6xl">
                {t.price}
              </span>
              <span className="mb-2 text-[13px] font-semibold text-ink-soft">
                {t.perks}
              </span>
            </div>

            <Button
              className="mt-7"
              variant={t.highlight ? "solid" : "secondary"}
              iconTrailing={null}
              onClick={() =>
                open({ variant: "signup", source: `pricing-${t.key}` })
              }
            >
              {t.cta}
            </Button>

            <ul className="mt-8 space-y-3 text-[14px]">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span
                    className={cn(
                      "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                      t.highlight
                        ? "bg-grad-aurora-solid text-white"
                        : "bg-brand-50 text-brand-700"
                    )}
                  >
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-ink-soft">{f}</span>
                </li>
              ))}
            </ul>
          </article>
          </Reveal>
        ))}
      </div>

      {/* Extra revenue streams */}
      <div className="mx-auto mt-16 max-w-5xl rounded-4xl bg-ink p-8 text-cream md:p-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-300">
          Дополнительные потоки
        </p>
        <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          Подписка — это только база.
        </h3>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {[
            { t: "Планы питания", b: "Отдельная покупка или внутри Premium" },
            { t: "Marketplace", b: "Программы от сертифицированных тренеров" },
            { t: "B2B", b: "Корпоративные wellness-лицензии" },
            { t: "Партнёрства", b: "Спортпит, экипировка, студии" },
          ].map((x) => (
            <div key={x.t}>
              <p className="text-[15px] font-bold text-white">{x.t}</p>
              <p className="mt-1 text-[13px] text-white/60">{x.b}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
