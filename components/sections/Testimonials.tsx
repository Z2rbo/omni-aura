import { Star, Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

type Review = {
  name: string;
  role: string;
  avatar: string;
  gradient: string;
  quote: string;
  metric?: string;
  stars?: number;
};

const reviews: Review[] = [
  {
    name: "Алина Д.",
    role: "Студентка · 3 курс ИТМО",
    avatar: "АД",
    gradient: "from-brand-300 to-brand-500",
    quote:
      "До OMNI AURA я просто смотрела YouTube и путалась в упражнениях. Теперь камера говорит мне «держи спину» — и я больше не травмирую себя в становой.",
    metric: "−6 кг за 11 недель",
    stars: 5,
  },
  {
    name: "Максим К.",
    role: "Senior iOS · 29 лет",
    avatar: "МК",
    gradient: "from-brand-500 to-brand-700",
    quote:
      "Ходил к тренеру 3 года, 4 000 ₽ за час. Переехал в другой город — платить столько не готов. ИИ-план дал тот же прогресс за месяц, а с камерой я даже технику начал контролировать лучше.",
    metric: "+7 кг жима лёжа",
    stars: 5,
  },
  {
    name: "Дарья П.",
    role: "Мама · в декрете",
    avatar: "ДП",
    gradient: "from-brand-700 to-brand-500",
    quote:
      "Мне было стыдно идти в зал после родов. OMNI AURA работает дома, в моём темпе, без взгляда со стороны. Не приложение — спасение.",
    metric: "4 тренировки/нед",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Отзывы"
      title={
        <>
          Бета-тестеры, которые{" "}
          <span className="aurora-text">сказали «вау»</span>.
        </>
      }
      lead="52 пользователя прошли 6-недельный тест. Средний рейтинг — 4.9/5. Вот что говорят."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 100}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] bg-white p-7 shadow-soft ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:shadow-float">
              {/* Decorative quote glyph */}
              <span
                aria-hidden
                className="pointer-events-none absolute right-5 top-5 text-brand-100 opacity-70 transition-opacity group-hover:opacity-100"
              >
                <Quote className="h-10 w-10 rotate-180" />
              </span>

              <div className="flex items-center gap-1 text-brand-500">
                {Array.from({ length: r.stars ?? 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mt-5 text-pretty text-[15px] leading-relaxed text-ink md:text-[16px]">
                «{r.quote}»
              </p>

              {r.metric && (
                <div className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[12px] font-bold uppercase tracking-wider text-brand-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  {r.metric}
                </div>
              )}

              <div className="mt-auto flex items-center gap-3 pt-7">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${r.gradient} text-[13px] font-extrabold text-white ring-2 ring-white shadow-glow-sm`}
                >
                  {r.avatar}
                </span>
                <div>
                  <p className="text-[14px] font-bold text-ink">{r.name}</p>
                  <p className="text-[12px] text-ink-soft">{r.role}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Trust bar */}
      <Reveal delay={420}>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 rounded-full bg-white/60 px-6 py-4 text-[13px] text-ink-soft shadow-hairline ring-1 ring-ink/5 backdrop-blur">
          <span className="flex items-center gap-2">
            <span className="font-extrabold tabular-nums text-ink">4.9 / 5</span>
            средний рейтинг
          </span>
          <span className="h-4 w-px bg-ink/10" />
          <span className="flex items-center gap-2">
            <span className="font-extrabold tabular-nums text-ink">94%</span>
            довели курс до конца
          </span>
          <span className="h-4 w-px bg-ink/10" />
          <span className="flex items-center gap-2">
            <span className="font-extrabold tabular-nums text-ink">87%</span>
            рекомендуют друзьям
          </span>
        </div>
      </Reveal>
    </Section>
  );
}
