import {
  Camera,
  Mic,
  ClipboardList,
  Salad,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  {
    icon: Camera,
    title: "Computer Vision для техники",
    body: "Камера смартфона трекает 33 точки скелета (MediaPipe Pose). ИИ видит ошибку в реальном времени — и подсвечивает её до того, как ты получил травму.",
    highlight: "реальное время",
    size: "lg",
  },
  {
    icon: Mic,
    title: "Голосовой коуч",
    body: "Подсказки голосом во время подхода — не нужно смотреть в экран. Работает в наушниках и в режиме громкой связи.",
  },
  {
    icon: ClipboardList,
    title: "Персональный план",
    body: "ИИ генерирует программу под цель: похудение, масса, выносливость, рельеф. Адаптируется каждую неделю по твоему прогрессу.",
  },
  {
    icon: Salad,
    title: "БЖУ и рацион",
    body: "Калькулятор нутриентов + готовое меню из российских продуктов. Подстраивается под бюджет и аллергии.",
  },
  {
    icon: MessageSquare,
    title: "ИИ-чат без осуждения",
    body: "Спроси что угодно — про боль в спине, технику, отдых. Ответит спокойно, с опорой на ACSM-гайдлайны. Для интровертов мечта.",
  },
  {
    icon: TrendingUp,
    title: "Прогресс визуально",
    body: "Видео-сравнения «до/после», графики силы, рейтинг техники. Мотивация встроена, а не склеена скотчем.",
  },
];

export function Solution() {
  return (
    <Section
      id="solution"
      eyebrow="Решение"
      title={
        <>
          Первый ИИ-коуч, который{" "}
          <span className="aurora-text">видит</span>, слышит и ведёт.
        </>
      }
      lead="OMNI AURA закрывает все три барьера одним приложением: смотрит на технику через камеру, строит план под тебя, общается как друг — не как тренер с секундомером."
      className="relative overflow-hidden bg-cream"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(184,161,255,0.25),transparent_70%)] blur-3xl"
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => {
          const large = i === 0;
          return (
            <Reveal
              key={f.title}
              delay={i * 60}
              className={
                large
                  ? "md:col-span-2 lg:col-span-2 lg:row-span-2"
                  : undefined
              }
            >
            <article
              className={`group relative overflow-hidden rounded-4xl p-7 ring-1 ring-ink/5 transition-all hover:-translate-y-1 ${
                large
                  ? "h-full bg-grad-surface shadow-float"
                  : "bg-white shadow-soft hover:shadow-float"
              }`}
            >
              {/* Decorative gradient blob — только для large чтобы не плодить слои blur */}
              {large && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-500/30 blur-3xl"
                />
              )}

              <div className="relative flex flex-col gap-5">
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl shadow-inner-stroke ${
                    large
                      ? "bg-grad-aurora-solid text-white shadow-glow-sm"
                      : "bg-brand-50 text-brand-700"
                  }`}
                >
                  <f.icon className="h-6 w-6" />
                </span>

                <div>
                  <h3
                    className={`font-extrabold tracking-tight ${
                      large ? "text-3xl md:text-4xl" : "text-xl"
                    }`}
                  >
                    {f.title}
                  </h3>
                  <p
                    className={`mt-3 text-pretty text-ink-soft ${
                      large ? "text-lg" : "text-[15px]"
                    }`}
                  >
                    {f.body}
                  </p>
                </div>

                {large && <CVPreview />}
              </div>
            </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function CVPreview() {
  return (
    <div className="relative mt-6 overflow-hidden rounded-3xl bg-ink p-4 shadow-inner-stroke">
      <div className="flex items-center justify-between text-[11px] text-white/60">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
          LIVE CAM
        </span>
        <span className="tabular-nums">34 FPS · 33 joints</span>
      </div>

      <div className="relative mt-3 aspect-[16/10] overflow-hidden rounded-2xl bg-[linear-gradient(145deg,#1E1A2A,#17151F)]">
        {/* Fake pose skeleton */}
        <svg
          viewBox="0 0 320 200"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id="bone" x1="0" x2="1">
              <stop offset="0%" stopColor="#B8A1FF" />
              <stop offset="100%" stopColor="#8156FF" />
            </linearGradient>
          </defs>
          {/* bones */}
          {[
            [160, 40, 160, 80],
            [160, 80, 130, 120],
            [160, 80, 190, 120],
            [130, 120, 110, 150],
            [190, 120, 210, 150],
            [160, 80, 160, 140],
            [160, 140, 140, 180],
            [160, 140, 180, 180],
          ].map((b, i) => (
            <line
              key={i}
              x1={b[0]}
              y1={b[1]}
              x2={b[2]}
              y2={b[3]}
              stroke="url(#bone)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          ))}
          {[
            [160, 40, 8],
            [160, 80, 4],
            [130, 120, 4],
            [190, 120, 4],
            [110, 150, 4],
            [210, 150, 4],
            [160, 140, 4],
            [140, 180, 4],
            [180, 180, 4],
          ].map((p, i) => (
            <circle key={i} cx={p[0]} cy={p[1]} r={p[2]} fill="#F7F6F0" />
          ))}
        </svg>

        {/* Overlay rating */}
        <div className="absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur">
          Техника 94/100
        </div>

        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-grad-aurora-solid px-3 py-1 text-[11px] font-bold text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          держи спину прямо
        </div>
      </div>
    </div>
  );
}
