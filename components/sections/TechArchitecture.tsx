import {
  Camera,
  Cpu,
  Database,
  CreditCard,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Smartphone,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

type Node = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  sub: string;
  badge?: string;
  tone?: "aurora" | "dark" | "light";
};

const layers: { label: string; nodes: Node[] }[] = [
  {
    label: "Клиент",
    nodes: [
      {
        icon: Smartphone,
        title: "iOS · Android",
        sub: "React Native + Expo",
        badge: "offline-first",
        tone: "light",
      },
      {
        icon: Camera,
        title: "On-device CV",
        sub: "MediaPipe Pose · 33 точки",
        badge: "60 FPS",
        tone: "aurora",
      },
    ],
  },
  {
    label: "Интеллект",
    nodes: [
      {
        icon: Cpu,
        title: "YandexGPT 4 Pro",
        sub: "персонализация плана",
        tone: "dark",
      },
      {
        icon: MessagesSquare,
        title: "SpeechKit",
        sub: "голос·STT·TTS",
        tone: "dark",
      },
      {
        icon: Sparkles,
        title: "Rule-engine",
        sub: "ACSM-гайдлайны",
        tone: "dark",
      },
    ],
  },
  {
    label: "Инфра",
    nodes: [
      {
        icon: Database,
        title: "Supabase",
        sub: "self-hosted · РФ",
        tone: "light",
      },
      {
        icon: CreditCard,
        title: "YooKassa",
        sub: "подписка · карты РФ",
        tone: "light",
      },
      {
        icon: ShieldCheck,
        title: "ФЗ-152",
        sub: "ПДн не покидают РФ",
        tone: "light",
      },
    ],
  },
];

export function TechArchitecture() {
  return (
    <Section
      id="architecture"
      eyebrow="Технология"
      title={
        <>
          Архитектура{" "}
          <span className="aurora-text">на российском стеке</span>.
        </>
      }
      lead="Весь critical path — локально и в РФ: CV на устройстве, ИИ через YandexGPT, данные в Supabase, платежи через YooKassa."
    >
      <div className="relative grid gap-6 md:grid-cols-3">
        {/* Decorative aurora glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(184,161,255,0.25),transparent_70%)] blur-3xl"
        />

        {layers.map((layer, li) => (
          <Reveal key={layer.label} delay={li * 120}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-50 text-[11px] font-extrabold text-brand-700">
                  {li + 1}
                </span>
                <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                  {layer.label}
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {layer.nodes.map((n) => (
                  <NodeCard key={n.title} node={n} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Bottom call-out strip */}
      <Reveal delay={500}>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-[28px] bg-ink px-6 py-5 text-white md:px-8">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-grad-aurora-solid shadow-glow-sm">
              <ShieldCheck className="h-4 w-4 text-white" />
            </span>
            <p className="text-[14px] font-semibold md:text-[15px]">
              Всё работает без VPN, без западных API — даже если закроют GitHub
              Copilot завтра.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
            compliance by design
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function NodeCard({ node }: { node: Node }) {
  const Icon = node.icon;
  const base =
    "relative overflow-hidden rounded-2xl p-4 ring-1 transition-all hover:-translate-y-0.5";
  const tones = {
    aurora:
      "bg-grad-aurora-solid text-white ring-white/10 shadow-glow-sm",
    dark: "bg-ink text-white ring-white/10",
    light: "bg-white text-ink ring-ink/5 shadow-soft hover:shadow-float",
  } as const;

  return (
    <div className={`${base} ${tones[node.tone ?? "light"]}`}>
      <div className="flex items-start gap-3">
        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
            node.tone === "light"
              ? "bg-brand-50 text-brand-700"
              : "bg-white/10 text-white backdrop-blur"
          }`}
        >
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="truncate text-[15px] font-bold">{node.title}</p>
            {node.badge && (
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                  node.tone === "light"
                    ? "bg-brand-50 text-brand-700"
                    : "bg-white/15 text-white"
                }`}
              >
                {node.badge}
              </span>
            )}
          </div>
          <p
            className={`mt-0.5 text-[12px] ${
              node.tone === "light" ? "text-ink-soft" : "text-white/70"
            }`}
          >
            {node.sub}
          </p>
        </div>
      </div>
    </div>
  );
}
