"use client";

import { Check, Flag, Rocket, Target, Globe2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type Milestone = { date: string; title: string; sub?: string };

type Phase = {
  n: string;
  name: string;
  period: string;
  status: "done" | "current" | "upcoming";
  icon: typeof Flag;
  pitch: string;
  items: Milestone[];
};

const phases: Phase[] = [
  {
    n: "01",
    name: "Research & Ideation",
    period: "Окт 2025 — Янв 2026",
    status: "done",
    icon: Target,
    pitch: "Поняли боль ЦА, выбрали концепцию, проанализировали рынок.",
    items: [
      { date: "Окт 2025", title: "Погружение в тему", sub: "Лекции, вебинары, база знаний" },
      { date: "Ноя 2025", title: "Формирование идеи", sub: "Выбор самой перспективной концепции" },
      { date: "Янв 2026", title: "Проработка основы", sub: "Анализ рынка, конкурентов, ЦА" },
    ],
  },
  {
    n: "02",
    name: "Build & Defend",
    period: "Фев — Апр 2026",
    status: "done",
    icon: Flag,
    pitch: "Собрали MVP, прошли экспертизу, защитили проект на финале СТАРТ+.",
    items: [
      { date: "Фев 2026", title: "Разработка MVP", sub: "Прототип, Telegram-бот, презентация" },
      { date: "Мар 2026", title: "Встреча с экспертом", sub: "Фидбек и доработка слабых мест" },
      { date: "Апр 2026", title: "Защита проекта", sub: "Финал СТАРТ+ ФТМИ ИТМО" },
    ],
  },
  {
    n: "03",
    name: "Launch",
    period: "Май — Июл 2026",
    status: "current",
    icon: Rocket,
    pitch: "Полируем продукт, выходим на рынок, собираем первую тысячу.",
    items: [
      { date: "Май 2026", title: "Финальная подготовка", sub: "Полировка продукта и сторов" },
      { date: "Июл 2026", title: "Выход на рынок", sub: "Первые пользователи и тесты в бою" },
    ],
  },
  {
    n: "04",
    name: "Scale",
    period: "2027 — 2028",
    status: "upcoming",
    icon: Globe2,
    pitch: "Масштабируем функционал, запускаем франшизу, идём в СНГ и Азию.",
    items: [
      { date: "Июн 2027", title: "Развитие продукта", sub: "Функционал и масштабирование" },
      { date: "Сен 2028", title: "Расширение", sub: "Франшиза, новые рынки" },
    ],
  },
];

const statusStyle: Record<Phase["status"], { pill: string; label: string; dot: string }> = {
  done: {
    pill: "bg-brand-50 text-brand-700",
    label: "Готово",
    dot: "bg-brand-500",
  },
  current: {
    pill: "bg-grad-aurora-solid text-white shadow-glow-sm",
    label: "Сейчас",
    dot: "bg-white ring-4 ring-brand-500/40",
  },
  upcoming: {
    pill: "bg-ink/5 text-ink-soft",
    label: "Впереди",
    dot: "bg-ink/20",
  },
};

export function Roadmap() {
  return (
    <Section
      id="roadmap"
      eyebrow="Roadmap"
      title={
        <>
          От идеи — к{" "}
          <span className="aurora-text">миллиону</span> пользователей.
        </>
      }
      lead="Путь проекта разбит на четыре фазы. Мы внутри третьей: защиту СТАРТ+ прошли, MVP в сторе, ведём выход на рынок."
      className="relative overflow-hidden bg-cream-deep"
    >
      {/* Top rail with phase markers */}
      <div className="relative hidden md:block">
        <div className="relative flex items-center justify-between">
          {/* Rail line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[linear-gradient(90deg,transparent_0,rgba(23,21,31,0.15)_10%,rgba(23,21,31,0.15)_90%,transparent_100%)]"
          />
          {/* Progress overlay — динамически до середины текущей фазы */}
          <div
            aria-hidden
            className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-grad-aurora-solid"
            style={{
              width: (() => {
                const currentIdx = phases.findIndex((p) => p.status === "current");
                const doneCount =
                  currentIdx === -1
                    ? phases.filter((p) => p.status === "done").length
                    : currentIdx;
                const extra = currentIdx === -1 ? 0 : 0.5;
                return `${((doneCount + extra) / phases.length) * 100}%`;
              })(),
            }}
          />
          {phases.map((p, i) => {
            const style = statusStyle[p.status];
            return (
              <div
                key={p.n}
                className="relative z-10 flex flex-col items-center"
                style={{ width: `${100 / phases.length}%` }}
              >
                <Reveal delay={i * 80} scale translateY={0}>
                  <span
                    className={cn(
                      "grid h-12 w-12 place-items-center rounded-full ring-4 ring-cream-deep",
                      p.status === "done"
                        ? "bg-grad-aurora-solid text-white"
                        : p.status === "current"
                        ? "bg-grad-aurora-solid text-white shadow-glow"
                        : "bg-white text-ink-soft shadow-hairline"
                    )}
                  >
                    {p.status === "done" ? (
                      <Check className="h-5 w-5" strokeWidth={3} />
                    ) : (
                      <p.icon className="h-5 w-5" />
                    )}
                  </span>
                </Reveal>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft">
                  Фаза {p.n}
                </p>
                <p className="text-[11px] font-semibold text-brand-700">
                  {style.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Phase cards */}
      <div className="mt-14 grid gap-5 lg:grid-cols-4">
        {phases.map((p, i) => {
          const style = statusStyle[p.status];
          return (
            <Reveal key={p.n} delay={i * 80}>
            <article
              className={cn(
                "relative flex h-full flex-col rounded-4xl p-7 ring-1 transition-transform hover:-translate-y-1",
                p.status === "current"
                  ? "bg-grad-surface ring-white/50 shadow-glow"
                  : "bg-white ring-ink/5 shadow-soft"
              )}
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-4xl font-normal italic leading-none text-brand-500/60">
                  {p.n}
                </span>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em]",
                    style.pill
                  )}
                >
                  {style.label}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-extrabold leading-tight tracking-tight">
                {p.name}
              </h3>
              <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-brand-700">
                {p.period}
              </p>
              <p className="mt-3 text-[14px] text-ink-soft">{p.pitch}</p>

              <ul className="mt-5 space-y-3 border-t border-ink/5 pt-5">
                {p.items.map((m, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span
                      className={cn(
                        "mt-1.5 h-2 w-2 shrink-0 rounded-full",
                        p.status === "done"
                          ? "bg-brand-500"
                          : p.status === "current" && j === 0
                          ? "bg-brand-500 ring-4 ring-brand-500/25"
                          : "bg-ink/20"
                      )}
                    />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-ink-soft">
                        {m.date}
                      </p>
                      <p className="text-[14px] font-bold text-ink">{m.title}</p>
                      {m.sub && (
                        <p className="mt-0.5 text-[12.5px] leading-snug text-ink-soft">
                          {m.sub}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
