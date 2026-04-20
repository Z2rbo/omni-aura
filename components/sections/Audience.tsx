"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Wallet, Users2, HeartHandshake, BookOpenCheck } from "lucide-react";

const personas = [
  {
    icon: "🎓",
    age: "16–22",
    title: "Студент",
    desc: "Хочет форму к лету, бюджет 1000₽/мес, живёт с родителями.",
  },
  {
    icon: "💻",
    age: "23–30",
    title: "Айтишник-интроверт",
    desc: "Сидячая работа, не любит разговоры с тренером, хочет план и результат.",
  },
  {
    icon: "👧",
    age: "18–26",
    title: "Девушка-новичок",
    desc: "Боится зала и осуждения, ищет безопасную технику и постепенный вход.",
  },
  {
    icon: "🌆",
    age: "25–30",
    title: "Карьерист",
    desc: "Нет времени на тренера, нужен гибкий график, готов платить за качество.",
  },
];

const values = [
  {
    icon: Wallet,
    title: "Цена подписки",
    body: "От 390₽/мес вместо 3 000₽ за одну тренировку.",
  },
  {
    icon: HeartHandshake,
    title: "Без осуждения",
    body: "ИИ не смеётся, не торопит, не продаёт протеин.",
  },
  {
    icon: BookOpenCheck,
    title: "Структурированный план",
    body: "Знаешь, что делать каждый день. Прогресс адаптируется.",
  },
  {
    icon: Users2,
    title: "Приватность",
    body: "Твои видео остаются на устройстве. Анализ — локально.",
  },
];

export function Audience() {
  return (
    <Section
      id="audience"
      eyebrow="Целевая аудитория"
      title={
        <>
          Для тех, кто{" "}
          <span className="aurora-text">готов</span>, но ещё не решился.
        </>
      }
      lead="16–30 лет, начальный или нулевой уровень. Мотивация есть, денег на тренера — нет, а YouTube-ролики и Nike Training не дают обратной связи."
    >
      <div className="grid gap-10 lg:grid-cols-12">
        {/* Personas */}
        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {personas.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-float">
                  <div className="flex items-start justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-grad-aurora-soft text-2xl">
                      {p.icon}
                    </span>
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-bold text-brand-700">
                      {p.age}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-ink-soft">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Stats row */}
          <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-3xl bg-ink text-cream">
            {[
              { v: "27M", l: "россиян 16–30" },
              { v: "$24B", l: "глобальный fitness-tech" },
              { v: "4.8x", l: "рост ИИ-fitness 2024→28" },
            ].map((s) => (
              <div
                key={s.l}
                className="flex flex-col items-start justify-between gap-2 border-r border-white/10 p-6 last:border-r-0 md:p-8"
              >
                <p className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                  {s.v}
                </p>
                <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-white/60">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Value props */}
        <div className="lg:col-span-5">
          <div className="rounded-4xl bg-grad-surface p-8 shadow-float ring-1 ring-white/40">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-brand-700">
              Почему выберут нас
            </p>
            <h3 className="mt-3 text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
              Быстрее. Дешевле. Без неловкости.
            </h3>
            <ul className="mt-8 space-y-5">
              {values.map((v) => (
                <li key={v.title} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-700 shadow-hairline">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold text-ink">{v.title}</p>
                    <p className="mt-0.5 text-[14px] text-ink-soft">{v.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
