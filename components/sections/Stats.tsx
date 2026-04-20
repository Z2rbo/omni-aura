"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/Section";
import {
  Activity,
  Cpu,
  Users,
  Target,
  Timer,
  Zap,
} from "lucide-react";

type Stat = {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sub: string;
  accent?: boolean;
};

const stats: Stat[] = [
  {
    icon: Activity,
    value: 33,
    label: "точки скелета",
    sub: "MediaPipe Pose · в реальном времени",
    accent: true,
  },
  {
    icon: Timer,
    value: 30,
    suffix: " FPS",
    label: "on-device трекинг",
    sub: "без отправки видео на сервер",
  },
  {
    icon: Target,
    value: 100,
    suffix: "%",
    label: "данные в РФ",
    sub: "ФЗ-152 · self-hosted Supabase",
  },
  {
    icon: Cpu,
    value: 12,
    suffix: "+",
    label: "упражнений в MVP",
    sub: "с эталонной техникой · расширяем",
  },
  {
    icon: Users,
    value: 52,
    label: "бета-тестера",
    sub: "прошли пилотный прогон",
  },
  {
    icon: Zap,
    value: 13,
    suffix: "×",
    label: "дешевле тренера",
    sub: "890 ₽/мес Premium vs ~12 000 ₽",
  },
];

export function Stats() {
  return (
    <Section
      id="impact"
      eyebrow="Impact"
      title={
        <>
          Цифры, за которые{" "}
          <span className="aurora-text">не стыдно</span>.
        </>
      }
      lead="Результаты замеров MVP: точность CV, производительность на телефоне, экономика для пользователя."
      className="bg-cream-deep/50"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s, i) => (
          <StatCard key={s.label} stat={s} delay={i * 70} />
        ))}
      </div>
    </Section>
  );
}

function StatCard({ stat, delay }: { stat: Stat; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          const start = performance.now();
          const duration = 1400;
          const from = 0;
          const to = stat.value;
          const ease = (t: number) => 1 - Math.pow(1 - t, 3);
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            setDisplay(Math.round(from + (to - from) * ease(t)));
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stat.value]);

  const Icon = stat.icon;
  return (
    <div
      ref={ref}
      style={{
        transform: revealed ? "translateY(0)" : "translateY(14px)",
        opacity: revealed ? 1 : 0,
        transition:
          "opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: `${delay}ms`,
      }}
      className={`group relative overflow-hidden rounded-[28px] p-7 ring-1 ring-ink/5 transition-all hover:-translate-y-1 ${
        stat.accent
          ? "bg-grad-aurora-solid text-white shadow-glow-sm"
          : "bg-white text-ink shadow-soft hover:shadow-float"
      }`}
    >
      {stat.accent && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl"
        />
      )}
      <div className="relative flex flex-col gap-5">
        <span
          className={`grid h-12 w-12 place-items-center rounded-2xl ${
            stat.accent
              ? "bg-white/15 text-white shadow-inner-stroke backdrop-blur"
              : "bg-brand-50 text-brand-700"
          }`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p
            className={`font-extrabold tabular-nums tracking-tight ${
              stat.accent ? "text-white" : "text-ink"
            } text-5xl md:text-6xl`}
          >
            {stat.prefix}
            {display.toLocaleString("ru-RU")}
            {stat.suffix}
          </p>
          <p
            className={`mt-2 text-[15px] font-semibold ${
              stat.accent ? "text-white" : "text-ink"
            }`}
          >
            {stat.label}
          </p>
          <p
            className={`mt-1 text-[13px] ${
              stat.accent ? "text-white/75" : "text-ink-soft"
            }`}
          >
            {stat.sub}
          </p>
        </div>
      </div>
    </div>
  );
}
