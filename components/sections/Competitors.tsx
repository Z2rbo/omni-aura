import { Check, X, Minus } from "lucide-react";
import { Section } from "@/components/ui/Section";

type Cell = "yes" | "no" | "partial";

const rows: {
  label: string;
  omni: Cell;
  trainer: Cell;
  nike: Cell;
  fitnessai: Cell;
  youtube: Cell;
}[] = [
  { label: "Разбор техники в реальном времени", omni: "yes", trainer: "yes", nike: "no", fitnessai: "no", youtube: "no" },
  { label: "Персональный план под цели",         omni: "yes", trainer: "yes", nike: "partial", fitnessai: "yes", youtube: "no" },
  { label: "Адаптация под прогресс",               omni: "yes", trainer: "partial", nike: "no", fitnessai: "yes", youtube: "no" },
  { label: "Расчёт БЖУ и рацион",                  omni: "yes", trainer: "partial", nike: "no", fitnessai: "no", youtube: "no" },
  { label: "Без осуждения / для интровертов",      omni: "yes", trainer: "no", nike: "yes", fitnessai: "yes", youtube: "yes" },
  { label: "Русская локализация и оплата",         omni: "yes", trainer: "yes", nike: "partial", fitnessai: "no", youtube: "yes" },
  { label: "Цена ≤ 500₽/мес",                      omni: "yes", trainer: "no", nike: "yes", fitnessai: "no", youtube: "yes" },
];

const columns: { key: keyof (typeof rows)[0]; label: string; sub?: string }[] = [
  { key: "omni", label: "OMNI AURA", sub: "ИИ + CV" },
  { key: "trainer", label: "Тренер", sub: "в зале" },
  { key: "fitnessai", label: "FitnessAI", sub: "зарубеж." },
  { key: "nike", label: "Nike Training", sub: "базовое" },
  { key: "youtube", label: "YouTube", sub: "хаос" },
];

export function Competitors() {
  return (
    <Section
      id="competitors"
      eyebrow="Конкуренты"
      title={
        <>
          Мы не конкурируем — мы{" "}
          <span className="aurora-text">закрываем пробелы</span>.
        </>
      }
      lead="Сравнение с живым тренером и четырьмя самыми популярными альтернативами в нише."
    >
      <div className="-mx-6 overflow-x-auto rounded-4xl bg-white shadow-soft ring-1 ring-ink/5 md:mx-0">
        <div className="min-w-[720px]">
        {/* Header */}
        <div className="grid grid-cols-[minmax(0,2.4fr)_repeat(5,minmax(0,1fr))] items-center border-b border-ink/5 bg-cream-deep/60 px-4 py-5 md:px-6">
          <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-ink-soft">
            Критерий
          </div>
          {columns.map((c, i) => (
            <div
              key={c.key}
              className={`text-center ${
                i === 0
                  ? "rounded-2xl bg-grad-aurora-solid py-2 text-white shadow-glow-sm"
                  : ""
              }`}
            >
              <p
                className={`text-[13px] font-extrabold leading-tight md:text-[14px] ${
                  i === 0 ? "text-white" : "text-ink"
                }`}
              >
                {c.label}
              </p>
              {c.sub && (
                <p
                  className={`text-[10px] font-semibold uppercase tracking-[0.08em] ${
                    i === 0 ? "text-white/80" : "text-gray"
                  }`}
                >
                  {c.sub}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Rows */}
        <div className="divide-y divide-ink/5">
          {rows.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-[minmax(0,2.4fr)_repeat(5,minmax(0,1fr))] items-center px-4 py-4 transition-colors hover:bg-cream/50 md:px-6"
            >
              <div className="text-[14px] font-medium text-ink md:text-[15px]">
                {r.label}
              </div>
              {columns.map((c) => (
                <CellBadge key={c.key} value={r[c.key] as Cell} highlight={c.key === "omni"} />
              ))}
            </div>
          ))}
        </div>
        </div>
      </div>

      <p className="mt-6 max-w-3xl text-[14px] text-ink-soft">
        Тренеры точны в моменте, но дорогие и часто демотивируют. Приложения
        дают программу, но не исправляют технику. YouTube — это хаос. OMNI
        AURA объединяет сильные стороны всех трёх.
      </p>
    </Section>
  );
}

function CellBadge({ value, highlight }: { value: Cell; highlight?: boolean }) {
  const map = {
    yes: {
      icon: Check,
      cls: highlight
        ? "bg-white text-brand-700 shadow-glow-sm"
        : "bg-brand-50 text-brand-700",
    },
    no: { icon: X, cls: "bg-ink/5 text-ink/50" },
    partial: { icon: Minus, cls: "bg-amber-100 text-amber-700" },
  };
  const Icon = map[value].icon;
  return (
    <div className="flex justify-center">
      <span className={`grid h-9 w-9 place-items-center rounded-xl ${map[value].cls}`}>
        <Icon className="h-4 w-4" strokeWidth={2.5} />
      </span>
    </div>
  );
}
