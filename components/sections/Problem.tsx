"use client";

import { AlertTriangle, Clock, Heart, ShieldAlert } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: 52, label: "отсутствие времени", color: "brand-500" },
  { value: 21, label: "отсутствие мотивации", color: "brand-300" },
  { value: 15, label: "боязнь осуждения", color: "brand-700" },
  { value: 12, label: "другое", color: "gray" },
];

const quotes = [
  {
    icon: ShieldAlert,
    title: "Страх техники",
    body: "«Боюсь сделать неправильно, получить травму или выглядеть смешно».",
  },
  {
    icon: Clock,
    title: "Отсутствие плана",
    body: "«Прихожу в зал и не знаю, что делать, — просто хожу по кругу».",
  },
  {
    icon: Heart,
    title: "Барьер с тренером",
    body: "«Тренер критикует или считает деньги. Мне нужна подсказка, а не лекция. И я интроверт».",
  },
];

export function Problem() {
  return (
    <Section
      id="problem"
      eyebrow="Проблема"
      title={
        <>
          Новички бросают{" "}
          <span className="aurora-text">тренировки</span> в первый месяц.
        </>
      }
      lead="Мы опросили 210 человек 16–30 лет. Три барьера повторялись у 88% респондентов — и никто не нашёл решения, которое бы их закрывало вместе."
      className="bg-cream"
    >
      <div className="grid gap-16 lg:grid-cols-12">
        {/* Donut stats */}
        <div className="lg:col-span-5">
          <div className="relative rounded-4xl bg-white p-8 shadow-soft ring-1 ring-ink/5">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray">
                  Опрос
                </p>
                <p className="text-xl font-bold tracking-tight">
                  Почему люди не ходят в зал
                </p>
              </div>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-[12px] font-semibold text-brand-700">
                n = 210
              </span>
            </div>
            <DonutChart stats={stats} />
            <ul className="mt-6 space-y-2.5">
              {stats.map((s) => (
                <li key={s.label} className="flex items-center justify-between text-[14px]">
                  <span className="flex items-center gap-2 text-ink-soft">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: tokenColor(s.color) }}
                    />
                    {s.label}
                  </span>
                  <span className="font-bold tabular-nums text-ink">
                    {s.value}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quotes */}
        <div className="lg:col-span-7">
          <div className="flex flex-col gap-5">
            {quotes.map((q, i) => (
              <Reveal key={q.title} delay={i * 80}>
                <article className="group relative flex items-start gap-5 rounded-4xl bg-white p-6 shadow-soft ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:shadow-float md:p-8">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-grad-aurora-soft text-brand-700 shadow-inner-stroke">
                    <q.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                      {q.title}
                    </h3>
                    <p className="mt-2 text-pretty font-serif text-[18px] italic leading-[1.45] text-ink-soft md:text-[20px]">
                      {q.body}
                    </p>
                  </div>
                  <AlertTriangle className="absolute right-6 top-6 h-4 w-4 text-brand-300 opacity-0 transition-opacity group-hover:opacity-100" />
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-dashed border-brand-500/30 bg-brand-50/60 p-6">
            <p className="font-serif text-[20px] italic leading-snug text-ink md:text-[22px]">
              «Людям нужен личный ИИ-помощник, который не осудит, подскажет
              технику и составит план».
            </p>
            <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-700">
              — Главный инсайт исследования
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function tokenColor(t: string) {
  const map: Record<string, string> = {
    "brand-500": "#8156FF",
    "brand-300": "#B8A1FF",
    "brand-700": "#5B2FD1",
    gray: "#878383",
  };
  return map[t] ?? "#8156FF";
}

type StatItem = { value: number; label: string; color: string };

function DonutChart({ stats }: { stats: StatItem[] }) {
  const total = stats.reduce((a, s) => a + s.value, 0);
  const size = 220;
  const radius = 86;
  const stroke = 28;
  const circ = 2 * Math.PI * radius;
  let acc = 0;

  return (
    <div className="relative mx-auto flex h-[220px] w-[220px] items-center justify-center">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 -rotate-90"
        aria-hidden
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#EFEDE2"
          strokeWidth={stroke}
          fill="none"
        />
        {stats.map((s, i) => {
          const pct = s.value / total;
          const len = pct * circ;
          const offset = circ - acc;
          acc += len;
          return (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={tokenColor(s.color)}
              strokeWidth={stroke}
              fill="none"
              strokeDasharray={`${len} ${circ - len}`}
              strokeDashoffset={offset}
              strokeLinecap="butt"
            />
          );
        })}
      </svg>
      <div className="relative text-center">
        <p className="text-[44px] font-extrabold leading-none tracking-tighter">
          88<span className="text-brand-500">%</span>
        </p>
        <p className="mt-1 text-[12px] font-semibold text-ink-soft">
          названы 3 барьера
        </p>
      </div>
    </div>
  );
}

