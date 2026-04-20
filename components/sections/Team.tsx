import { Linkedin, Github, Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

type Member = {
  initials: string;
  name: string;
  role: string;
  bio: string;
  gradient: string;
  tags: string[];
};

const team: Member[] = [
  {
    initials: "OA",
    name: "Основатель",
    role: "Product · Engineering",
    bio: "Продуктовое видение, архитектура, разработка mobile и CV-pipeline. Лидит техническую часть MVP.",
    gradient: "from-brand-300 via-brand-500 to-brand-700",
    tags: ["React Native", "CV", "System design"],
  },
  {
    initials: "ML",
    name: "ML · CV",
    role: "Computer Vision",
    bio: "Отвечает за pose-estimation, тюнинг MediaPipe Pose и метрики оценки техники на устройстве.",
    gradient: "from-brand-500 via-brand-700 to-brand-500",
    tags: ["MediaPipe", "PyTorch", "Metrics"],
  },
  {
    initials: "DS",
    name: "Дизайн",
    role: "Visual · Motion",
    bio: "Визуальная идентичность, моушн, Figma-прототипы. Всё, что ты видишь на экране.",
    gradient: "from-brand-100 via-brand-300 to-brand-500",
    tags: ["Figma", "Motion", "Brand"],
  },
  {
    initials: "GR",
    name: "Рост",
    role: "Growth · Partnerships",
    bio: "Связь с залами-партнёрами, фитнес-клубами, pricing и unit-экономика подписки.",
    gradient: "from-brand-700 via-brand-500 to-brand-300",
    tags: ["GTM", "Partnerships", "Pricing"],
  },
];

export function Team() {
  return (
    <Section
      id="team"
      eyebrow="Команда"
      title={
        <>
          Люди, которые{" "}
          <span className="aurora-text">это делают</span>.
        </>
      }
      lead="Небольшая кросс-функциональная команда: продукт, ML, дизайн, бизнес-развитие."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 90}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] bg-white p-6 shadow-soft ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:shadow-float">
              {/* avatar */}
              <div className="relative mb-5 h-28 overflow-hidden rounded-2xl">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${m.gradient}`}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-40 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.7), transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.35), transparent 50%)",
                  }}
                />
                <span className="absolute inset-0 flex items-center justify-center font-sans text-5xl font-extrabold tracking-tighter text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
                  {m.initials}
                </span>
              </div>

              <div className="flex flex-col">
                <p className="text-[17px] font-extrabold tracking-tight text-ink">
                  {m.name}
                </p>
                <p className="mt-0.5 text-[12px] font-bold uppercase tracking-[0.08em] text-brand-700">
                  {m.role}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
                  {m.bio}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-cream-deep/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social row */}
              <div className="mt-5 flex items-center gap-1.5 border-t border-ink/5 pt-4">
                <SocialIcon icon={Linkedin} />
                <SocialIcon icon={Github} />
                <SocialIcon icon={Mail} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* MVP strip */}
      <Reveal delay={450}>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 rounded-[28px] bg-gradient-to-r from-cream-deep/80 via-white to-cream-deep/80 px-8 py-6 text-center shadow-hairline ring-1 ring-ink/5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-grad-aurora-solid text-white shadow-glow-sm">
              <span className="text-[11px] font-extrabold tracking-tight">
                MVP
              </span>
            </span>
            <div className="text-left">
              <p className="text-[14px] font-bold text-ink">
                Ранняя команда · небольшой костяк
              </p>
              <p className="text-[12px] text-ink-soft">
                Open to join · 2026
              </p>
            </div>
          </div>
          <div className="hidden h-8 w-px bg-ink/10 md:block" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
            <span className="text-brand-700">В разработке</span> · конкурс стартапов 2026
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function SocialIcon({
  icon: Icon,
}: {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <span className="grid h-8 w-8 place-items-center rounded-full bg-cream-deep/50 text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700">
      <Icon className="h-3.5 w-3.5" />
    </span>
  );
}
