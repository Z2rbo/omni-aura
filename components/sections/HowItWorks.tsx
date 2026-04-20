"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneFrame } from "@/components/phone/PhoneFrame";
import {
  GoalScreen,
  GenderScreen,
  BodyPartsScreen,
  HomeScreen,
} from "@/components/phone/screens";

const steps = [
  {
    n: 1,
    title: "Расскажи о цели",
    body: "Выбери, что движет тобой — внешность, здоровье, уверенность. Никакой оценки, просто честно.",
    screen: <GoalScreen />,
  },
  {
    n: 2,
    title: "Укажи пол и параметры",
    body: "Рост, вес, возраст. Мы учитываем физиологию: девушкам и парням — разные прогрессии и нагрузки.",
    screen: <GenderScreen />,
  },
  {
    n: 3,
    title: "Выбери проработку",
    body: "Всё тело, руки, пресс, ноги — или комбинация. Программа подстроится под твой фокус.",
    screen: <BodyPartsScreen />,
  },
  {
    n: 4,
    title: "Живи с ИИ-коучем",
    body: "Персональный дашборд, чат 24/7, напоминания, CV-разбор. Всё в одном приложении.",
    screen: <HomeScreen />,
  },
];

export function HowItWorks() {
  return (
    <Section
      id="how"
      eyebrow="Как это работает"
      title={
        <>
          Онбординг за{" "}
          <span className="font-serif italic font-normal text-ink-soft">
            4 шага
          </span>
          . Дальше — твоя жизнь.
        </>
      }
      lead="Никаких анкет на 40 вопросов. Через 3 минуты у тебя готовый план на неделю и ИИ, который знает, что тебе надо."
      className="relative overflow-hidden bg-cream-deep"
    >
      <div className="relative space-y-20 md:space-y-28">
        {/* Vertical connector */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-10 hidden h-[calc(100%-80px)] w-[2px] -translate-x-1/2 bg-[linear-gradient(180deg,#B8A1FF,#8156FF_50%,#E6E1F5)] opacity-50 md:block"
        />

        {steps.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <Reveal
              key={s.n}
              className={`relative grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Copy side */}
              <div className={`relative ${reverse ? "md:pl-16" : "md:pr-16"}`}>
                <div className="inline-flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-grad-aurora-solid text-xl font-extrabold text-white shadow-glow-sm">
                    {s.n}
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-700 shadow-hairline">
                    Шаг {s.n} / 4
                  </span>
                </div>
                <h3 className="mt-5 text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-md text-pretty text-lg text-ink-soft">
                  {s.body}
                </p>
              </div>

              {/* Phone side */}
              <div className="relative mx-auto">
                <div className="relative">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(184,161,255,0.35),transparent_70%)] blur-2xl"
                  />
                  <PhoneFrame glowTint="none">{s.screen}</PhoneFrame>
                </div>
              </div>

              {/* Midpoint dot */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-grad-aurora-solid ring-4 ring-cream-deep md:block"
              />
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
