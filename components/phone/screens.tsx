import Image from "next/image";
import { PhoneStatusBar } from "./PhoneFrame";
import {
  MapPin,
  Home,
  User2,
  Send,
  Mic,
  Flame,
  Heart,
  Trophy,
  Sparkles,
  Zap,
  Shield,
  Eye,
  Bell,
  Dribbble,
  Map as MapIcon,
} from "lucide-react";

/* ============================================================ *
 * 1. HOME — точно по Figma-референсу (Russia Baikal, cyborg, WEIGHT circle, pool, 3 photo-cards, purple program strip)
 * ============================================================ */
export function HomeScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-cream">
      <PhoneStatusBar />

      {/* Header: Your location + 20°C + bell + avatar */}
      <div className="flex items-start justify-between px-3.5 pt-1.5">
        <div className="flex items-start gap-1.5">
          <MapPin className="mt-[2px] h-2.5 w-2.5 text-ink-soft" />
          <div className="leading-[1.1]">
            <p className="text-[7px] font-medium text-ink-soft">Your location</p>
            <p className="text-[10px] font-bold text-ink">Russia, Baikal</p>
          </div>
          <span className="ml-1 rounded-md bg-grad-aurora-soft px-1.5 py-[2px] text-[9px] font-bold text-brand-700">
            20°C
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="grid h-6 w-6 place-items-center rounded-lg bg-grad-aurora-soft text-brand-700">
            <Bell className="h-3 w-3" />
          </span>
          <span className="grid h-6 w-6 place-items-center overflow-hidden rounded-lg bg-[linear-gradient(145deg,#9B8BC2,#3B2E5C)]">
            <AvatarSvg />
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="px-3.5 pt-2">
        <h3 className="text-[13px] font-extrabold leading-[1.1] tracking-tight text-ink">
          I&apos;m your personal{" "}
          <span className="aurora-text">AI-coach</span>
        </h3>
        <p className="mt-0.5 text-[9px] font-medium text-ink-soft">
          I&apos;ll help you, chat with me
        </p>
      </div>

      {/* Hero card with cyborg + TAP TO CHAT */}
      <div className="relative mx-3.5 mt-2 h-[80px] overflow-hidden rounded-[14px] bg-[linear-gradient(110deg,#3B2A5E_0%,#231839_60%,#1A1328_100%)] shadow-inner-stroke">
        <CyborgFullSvg />
        <button className="absolute right-2 top-1/2 h-7 -translate-y-1/2 rounded-full bg-white px-3 text-[9px] font-extrabold tracking-tight text-brand-700 shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
          TAP TO CHAT
        </button>
      </div>

      {/* WEIGHT circle + Pool rectangle */}
      <div className="mx-3.5 mt-2 flex items-center gap-2">
        <div className="relative grid h-[70px] w-[70px] shrink-0 place-items-center rounded-full bg-[linear-gradient(145deg,#3B2E5C_0%,#1A1328_100%)] text-white shadow-inner-stroke">
          <div className="text-center leading-tight">
            <p className="text-[7px] font-bold tracking-wider text-white/70">
              WEIGHT
            </p>
            <p className="text-[14px] font-extrabold tracking-tight">89 KG</p>
          </div>
        </div>
        <div className="relative h-[70px] flex-1 overflow-hidden rounded-[14px] bg-grad-photo-pool shadow-inner-stroke">
          <PoolPhotoSvg />
          <div className="absolute inset-0 flex flex-col justify-end p-2">
            <p className="text-[8px] font-medium text-white/80">
              15th August, 2026
            </p>
            <p className="text-[11px] font-extrabold tracking-tight text-white">
              Swimming pool
            </p>
          </div>
        </div>
      </div>

      {/* 3 photo-cards with scores */}
      <div className="mx-3.5 mt-2 grid grid-cols-3 gap-1.5">
        <ExerciseCard score="7/100" label="pull-ups" variant="pullups" />
        <ExerciseCard score="98/100" label="push-ups" variant="pushups" />
        <ExerciseCard score="43/100" label="squats" variant="squats" />
      </div>

      {/* Bottom purple program block with nav */}
      <div className="mx-3.5 mb-2 mt-auto overflow-hidden rounded-[16px] bg-grad-aurora-solid p-2 shadow-glow-sm">
        <p className="px-1 text-[10px] font-bold text-white">
          You can choose your program
        </p>
        <div className="mt-1.5 rounded-[12px] bg-white/15 px-2 py-1.5 backdrop-blur">
          <p className="text-center text-[8px] font-medium text-white/90">
            wait you...
          </p>
        </div>
        {/* Inner bottom nav */}
        <div className="mt-1.5 flex items-center justify-between rounded-[12px] bg-white/90 px-1.5 py-1 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-white shadow-hairline ring-1 ring-ink/5">
            <Home className="h-3.5 w-3.5 text-ink" />
          </span>
          <Dribbble className="h-3.5 w-3.5 text-ink-soft" />
          <MapIcon className="h-3.5 w-3.5 text-ink-soft" />
          <User2 className="h-3.5 w-3.5 text-ink-soft" />
        </div>
      </div>
    </div>
  );
}

/* ============================================================ *
 * SVG illustrations для HomeScreen
 * ============================================================ */

function AvatarSvg() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="av-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8C8A8" />
          <stop offset="100%" stopColor="#9B7756" />
        </linearGradient>
      </defs>
      {/* Hair */}
      <path d="M5 10 Q6 4 12 4 Q18 4 19 10 L19 14 Q17 11 12 11 Q7 11 5 14 Z" fill="#1A0F0A" />
      {/* Face */}
      <ellipse cx="12" cy="13" rx="5" ry="5.5" fill="url(#av-skin)" />
      {/* Beard shadow */}
      <path d="M7 14 Q12 19 17 14 Q17 18 12 19 Q7 18 7 14 Z" fill="#4A2E1A" opacity="0.5" />
      {/* Eyes */}
      <circle cx="10" cy="12.5" r="0.6" fill="#1A0F0A" />
      <circle cx="14" cy="12.5" r="0.6" fill="#1A0F0A" />
      {/* Neck/shoulders */}
      <path d="M6 24 Q6 19 10 18 L14 18 Q18 19 18 24 Z" fill="#1A0F0A" />
    </svg>
  );
}

function CyborgFullSvg() {
  return (
    <svg
      viewBox="0 0 260 80"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="cy-bg" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#3B2A5E" />
          <stop offset="100%" stopColor="#0F0B1A" />
        </linearGradient>
        <linearGradient id="cy-metal" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#E8E4F0" />
          <stop offset="60%" stopColor="#9B8FB8" />
          <stop offset="100%" stopColor="#3B2E5C" />
        </linearGradient>
        <radialGradient id="cy-visor" cx="0.3" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="#17151F" />
          <stop offset="100%" stopColor="#000" />
        </radialGradient>
        <radialGradient id="cy-eye-g" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#DCD0FF" />
          <stop offset="40%" stopColor="#8156FF" />
          <stop offset="100%" stopColor="#2E1A5A" />
        </radialGradient>
      </defs>
      {/* Gym background */}
      <rect width="260" height="80" fill="url(#cy-bg)" />
      {/* Gym equipment silhouettes */}
      <rect x="140" y="30" width="40" height="3" fill="#0A0612" opacity="0.6" />
      <rect x="150" y="20" width="2" height="40" fill="#0A0612" opacity="0.5" />
      <rect x="170" y="25" width="2" height="35" fill="#0A0612" opacity="0.5" />
      <rect x="200" y="10" width="60" height="70" fill="#0A0612" opacity="0.3" />
      {/* Cyborg head (left side, big) */}
      <g transform="translate(10, 8)">
        {/* Back neck */}
        <rect x="30" y="50" width="18" height="22" rx="3" fill="#2E2538" />
        {/* Head base */}
        <ellipse cx="38" cy="34" rx="26" ry="28" fill="url(#cy-metal)" />
        {/* Metallic plates */}
        <path d="M14 30 Q38 12 62 30 L60 22 Q38 6 16 22 Z" fill="#5D4F76" />
        <path d="M18 26 L22 24 L22 38 L18 40 Z" fill="#3A3540" />
        <path d="M54 26 L58 24 L58 38 L54 40 Z" fill="#3A3540" />
        {/* Forehead bolts */}
        <circle cx="24" cy="22" r="1.2" fill="#1A1324" />
        <circle cx="34" cy="18" r="1.2" fill="#1A1324" />
        <circle cx="44" cy="18" r="1.2" fill="#1A1324" />
        <circle cx="54" cy="22" r="1.2" fill="#1A1324" />
        {/* Visor band */}
        <rect x="16" y="28" width="44" height="14" rx="6" fill="url(#cy-visor)" />
        {/* Eyes glow */}
        <circle cx="28" cy="35" r="3.2" fill="url(#cy-eye-g)" />
        <circle cx="48" cy="35" r="3.2" fill="url(#cy-eye-g)" />
        <circle cx="28" cy="35" r="1" fill="#fff" opacity="0.9" />
        <circle cx="48" cy="35" r="1" fill="#fff" opacity="0.9" />
        {/* Jaw plate */}
        <path d="M18 46 Q38 58 58 46 Q54 56 38 58 Q22 56 18 46 Z" fill="#5D4F76" />
        <rect x="30" y="50" width="16" height="3" rx="1" fill="#3A3540" />
        <rect x="32" y="54" width="12" height="2" rx="1" fill="#2E2538" />
        {/* Cheek vents */}
        <path d="M14 40 L16 42 L14 44 Z M62 40 L60 42 L62 44 Z" fill="#2E2538" />
      </g>
      {/* Glow overlay */}
      <rect width="260" height="80" fill="url(#cy-bg)" opacity="0.15" />
    </svg>
  );
}

function ExerciseCard({
  score,
  label,
  variant,
}: {
  score: string;
  label: string;
  variant: "pullups" | "pushups" | "squats";
}) {
  return (
    <div
      className={`relative aspect-[3/3.6] overflow-hidden rounded-[12px] shadow-inner-stroke ${
        variant === "pullups"
          ? "bg-[linear-gradient(170deg,#2B1F45,#100919)]"
          : variant === "pushups"
          ? "bg-[linear-gradient(170deg,#5D4A85,#2B1F45)]"
          : "bg-[linear-gradient(170deg,#3B2E5C,#140A24)]"
      }`}
    >
      <ExerciseSilhouette variant={variant} />
      <span className="absolute right-1 top-1 rounded-md bg-black/40 px-1 py-[1px] text-[7px] font-bold text-white backdrop-blur">
        {score}
      </span>
      <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.65))] px-1.5 pb-1 pt-3">
        <p className="text-[7.5px] font-medium text-white/70">What about</p>
        <p className="text-[9px] font-extrabold leading-tight text-white">
          {label}?
        </p>
      </div>
    </div>
  );
}

function ExerciseSilhouette({
  variant,
}: {
  variant: "pullups" | "pushups" | "squats";
}) {
  if (variant === "pullups") {
    return (
      <svg viewBox="0 0 60 72" className="absolute inset-0 h-full w-full" aria-hidden>
        {/* Bar */}
        <rect x="6" y="14" width="48" height="2" rx="1" fill="#fff" opacity="0.3" />
        {/* Body hanging */}
        <circle cx="30" cy="22" r="4" fill="#fff" opacity="0.6" />
        <path d="M30 26 L30 42 L26 52 L24 66 M30 42 L34 52 L36 66" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" fill="none" />
        {/* Arms up */}
        <path d="M26 22 L22 16 M34 22 L38 16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      </svg>
    );
  }
  if (variant === "pushups") {
    return (
      <svg viewBox="0 0 60 72" className="absolute inset-0 h-full w-full" aria-hidden>
        {/* Floor */}
        <line x1="4" x2="56" y1="58" y2="58" stroke="#fff" strokeOpacity="0.2" />
        {/* Body horizontal */}
        <circle cx="14" cy="38" r="4" fill="#fff" opacity="0.65" />
        <path d="M18 38 L46 48" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        {/* Arms */}
        <path d="M18 38 L14 52" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        {/* Legs */}
        <path d="M46 48 L52 56" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
        <path d="M46 48 L50 58" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    );
  }
  // squats
  return (
    <svg viewBox="0 0 60 72" className="absolute inset-0 h-full w-full" aria-hidden>
      {/* Barbell */}
      <rect x="4" y="16" width="52" height="2" rx="1" fill="#fff" opacity="0.35" />
      <rect x="2" y="12" width="6" height="10" rx="1" fill="#fff" opacity="0.25" />
      <rect x="52" y="12" width="6" height="10" rx="1" fill="#fff" opacity="0.25" />
      {/* Head + body */}
      <circle cx="30" cy="26" r="4" fill="#fff" opacity="0.65" />
      <path d="M30 30 L30 46" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      {/* Squat legs */}
      <path d="M30 46 L22 54 L22 66 M30 46 L38 54 L38 66" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" fill="none" />
    </svg>
  );
}

function PoolPhotoSvg() {
  return (
    <svg
      viewBox="0 0 120 80"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4C7E92" />
          <stop offset="100%" stopColor="#1F2C36" />
        </linearGradient>
      </defs>
      <rect width="120" height="80" fill="url(#water)" />
      {/* lane lines */}
      {[20, 40, 60].map((y) => (
        <line
          key={y}
          x1="0"
          x2="120"
          y1={y}
          y2={y}
          stroke="#D4E4EC"
          strokeOpacity="0.25"
          strokeDasharray="6 4"
        />
      ))}
      {/* highlight */}
      <path
        d="M0 8 Q30 20 60 10 T120 14 L120 0 L0 0 Z"
        fill="#FFFFFF"
        fillOpacity="0.08"
      />
    </svg>
  );
}

/* ============================================================ *
 * 2. CHAT — bear coach
 * ============================================================ */
export function ChatScreen() {
  return (
    <div className="flex h-full w-full flex-col">
      <PhoneStatusBar />
      {/* Video card */}
      <div className="mx-4 mt-2 overflow-hidden rounded-2xl bg-ink">
        <div className="relative aspect-[4/3] w-full bg-[linear-gradient(145deg,#3A3540,#17151F)]">
          <div className="absolute inset-0 grid place-items-center">
            <svg viewBox="0 0 64 64" className="h-16 w-16 text-brand-300/80">
              <circle cx="32" cy="24" r="10" fill="currentColor" opacity="0.6" />
              <rect x="20" y="34" width="24" height="22" rx="6" fill="currentColor" opacity="0.8" />
              <rect x="12" y="18" width="40" height="6" rx="3" fill="currentColor" />
            </svg>
          </div>
          <span className="absolute bottom-2 left-2 grid h-6 w-6 place-items-center rounded-full bg-black/40 text-white">
            <Mic className="h-3 w-3" />
          </span>
        </div>
      </div>

      {/* Chat bubbles */}
      <div className="mx-4 mt-3 space-y-2">
        <div className="flex items-start gap-1.5">
          <div className="h-5 w-5 shrink-0 rounded-full bg-grad-aurora-solid" />
          <div className="rounded-2xl rounded-tl-sm bg-brand-300/50 px-2.5 py-1.5 text-[9px] text-ink">
            <p className="font-bold">Даша</p>
            <p className="mt-0.5 leading-snug">
              Напиши советы по приседу со штангой
            </p>
          </div>
        </div>

        <div className="rounded-2xl rounded-tr-sm bg-grad-aurora-soft px-2.5 py-2 text-[9px] leading-snug text-ink">
          <p>
            Привет! Конечно, читай внимательно: при приседании со штангой
            фиксируй гриф на трапециях и держи спину прямой в протяжении
            всего движения.
          </p>
          <p className="mt-1.5">
            Опускайся на счёт &ldquo;раз-два&rdquo; так, как будто садишься на стул,
            а бёдра параллельны полу или чуть ниже.
          </p>
          <p className="mt-1.5">
            Колени должны двигаться в направлении носков, в том же
            направлении.
          </p>
        </div>

        <div className="flex items-center justify-end gap-1">
          <div className="rounded-2xl rounded-tr-sm bg-ink px-2.5 py-1.5 text-[9px] text-white">
            Понял, спасибо
          </div>
        </div>
      </div>

      <div className="mt-auto" />
      {/* Input */}
      <div className="mx-4 mb-3 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 shadow-hairline">
        <input
          className="flex-1 border-0 bg-transparent text-[9px] text-ink outline-none placeholder:text-gray"
          placeholder="Введите текст..."
          readOnly
        />
        <button className="grid h-6 w-6 place-items-center rounded-full bg-grad-aurora-solid text-white">
          <Send className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}

/* ============================================================ *
 * 3. ONBOARDING — Цель
 * ============================================================ */
export function GoalScreen() {
  const goals = [
    { icon: Heart, title: "Внешность", sub: "Хочу быть красивым и нравиться себе" },
    { icon: Trophy, title: "Спорт", sub: "Хочу регулярно заниматься спортом" },
    { icon: Flame, title: "Здоровье", sub: "Хочу стать сильнее и здоровее" },
    { icon: Sparkles, title: "Уверенность", sub: "Уверенность в разных ситуациях", active: true },
    { icon: Zap, title: "Стресс", sub: "Хочу чувствовать меньше стресса" },
    { icon: Shield, title: "Дисциплина", sub: "Хочу добиться своих целей" },
  ];
  return (
    <div className="flex h-full w-full flex-col">
      <PhoneStatusBar />
      <OnboardingHeader title="Цель" step={1} total={5} />

      <div className="px-4 pb-1 pt-2">
        <p className="text-center text-[10px] font-bold text-ink">
          Что движет вами?
        </p>
      </div>

      <div className="flex-1 space-y-1.5 overflow-hidden px-4 pt-2">
        {goals.map(({ icon: Icon, title, sub, active }, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 rounded-2xl px-2.5 py-1.5 ${
              active
                ? "bg-grad-aurora-soft ring-1 ring-brand-500/40"
                : "bg-white shadow-hairline"
            }`}
          >
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-100 text-brand-700">
              <Icon className="h-3.5 w-3.5" />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-bold leading-tight text-ink">{title}</p>
              <p className="truncate text-[8px] leading-tight text-ink-soft">
                {sub}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 pb-4 pt-2">
        <button className="h-9 w-full rounded-full bg-grad-aurora-solid text-[11px] font-bold text-white shadow-glow-sm">
          Далее
        </button>
      </div>
    </div>
  );
}

/* ============================================================ *
 * 4. ONBOARDING — Пол
 * ============================================================ */
export function GenderScreen() {
  return (
    <div className="flex h-full w-full flex-col">
      <PhoneStatusBar />
      <OnboardingHeader title="Ваш пол" step={2} total={5} />

      <p className="mt-3 text-center text-[10px] font-bold text-ink">
        Какого вы пола?
      </p>

      <div className="mt-2 flex flex-1 items-end justify-center gap-2 px-4 pb-4">
        <Silhouette variant="male" />
        <Silhouette variant="female" />
      </div>

      <div className="flex items-center justify-center gap-2 pb-2">
        <button className="rounded-full bg-grad-aurora-soft px-3 py-1 text-[10px] font-bold text-brand-700">
          Мужчина
        </button>
        <button className="rounded-full bg-ink/90 px-3 py-1 text-[10px] font-bold text-white">
          Женщина
        </button>
      </div>

      <div className="px-4 pb-4">
        <button className="h-9 w-full rounded-full bg-grad-aurora-solid text-[11px] font-bold text-white shadow-glow-sm">
          Далее
        </button>
      </div>
    </div>
  );
}

/* ============================================================ *
 * 5. ONBOARDING — Проработка
 * ============================================================ */
export function BodyPartsScreen() {
  const parts = [
    { label: "Всё тело", active: true },
    { label: "Руки" },
    { label: "Грудь" },
    { label: "Пресс" },
    { label: "Ноги" },
  ];
  return (
    <div className="flex h-full w-full flex-col">
      <PhoneStatusBar />
      <OnboardingHeader title="Проработка" step={3} total={5} />
      <p className="mt-3 px-4 text-center text-[10px] font-bold text-ink">
        Что именно нужно привести в форму?
      </p>

      <div className="mt-4 flex flex-1 flex-col items-center gap-1.5 px-4">
        {parts.map(({ label, active }) => (
          <button
            key={label}
            className={`h-8 w-[70%] rounded-full text-[11px] font-bold transition-colors ${
              active
                ? "bg-grad-aurora-solid text-white shadow-glow-sm"
                : "bg-grad-aurora-soft text-ink"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="px-4 pb-4">
        <button className="h-9 w-full rounded-full bg-grad-aurora-solid text-[11px] font-bold text-white shadow-glow-sm">
          Далее
        </button>
      </div>
    </div>
  );
}

/* ============================================================ *
 * 6. LOGIN — Figma-accurate (cream bg, aurora-white button)
 * ============================================================ */
export function LoginScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-[linear-gradient(180deg,#F1EDFF_0%,#F7F6F0_55%,#EFEDE2_100%)]">
      <PhoneStatusBar />
      <div className="flex-1 px-5 pt-4">
        {/* Logo header с aurora-подложкой */}
        <div className="flex items-center gap-1.5">
          <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-grad-aurora-solid shadow-glow-sm">
            <Image
              src="/logo.png"
              alt="OMNI AURA"
              width={20}
              height={20}
              className="object-contain"
              style={{ width: "92%", height: "92%" }}
            />
          </div>
          <span className="text-[11px] font-extrabold tracking-tight text-ink">
            OMNI AURA
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-[26px] font-extrabold leading-none tracking-tight text-ink">
          Вход
        </h3>
        <p className="mt-1.5 text-[9px] leading-snug text-ink-soft">
          Не успели заполнить наши анкеты? Ничего!<br />
          Мы всё помним, нажимайте кнопку и вперёд :)
        </p>

        {/* Inputs */}
        <div className="mt-4 space-y-2">
          <FakeInput placeholder="Почта" />
          <FakeInput placeholder="Пароль" showToggle />
        </div>

        <button className="mt-3 h-10 w-full rounded-full bg-grad-aurora-solid text-[12px] font-extrabold text-white shadow-glow-sm">
          Вход
        </button>

        {/* Divider */}
        <p className="mt-4 text-center text-[8px] font-medium text-gray">
          или войдите через
        </p>

        <div className="mt-2 space-y-1.5">
          <SocialButton label="Продолжить с Google" kind="google" />
          <SocialButton label="Продолжить с Telegram" kind="telegram" />
        </div>
      </div>

      <p className="pb-4 text-center text-[8px] text-gray">
        Нет аккаунта?{" "}
        <span className="font-extrabold text-brand-700">Регистрируйся</span>
      </p>
    </div>
  );
}

/* ------------------------------------------------------------ *
 *                         sub-components
 * ------------------------------------------------------------ */
function OnboardingHeader({
  title,
  step,
  total,
}: {
  title: string;
  step: number;
  total: number;
}) {
  const percent = Math.round((step / total) * 100);
  return (
    <div className="px-4 pt-2">
      <div className="flex items-center justify-between">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-100 text-brand-700 text-[9px]">
          ‹
        </span>
        <span className="rounded-full bg-grad-aurora-soft px-2.5 py-0.5 text-[9px] font-bold text-ink">
          {title}
        </span>
        <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-100 text-brand-700 text-[9px]">
          ›
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-ink-soft">
          Шаг {step} из {total}
        </span>
        <span className="text-[8px] font-bold tabular-nums text-ink">
          {percent}%
        </span>
      </div>
      <div className="mt-1 h-1 w-full rounded-full bg-brand-100">
        <div
          className="h-full rounded-full bg-grad-aurora-solid transition-[width] duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function Silhouette({ variant }: { variant: "male" | "female" }) {
  return (
    <svg viewBox="0 0 60 140" className="h-[60%] w-auto fill-ink">
      {variant === "male" ? (
        <>
          <circle cx="30" cy="18" r="12" />
          <path d="M12 34 h36 l-4 52 h-8 l-2 52 h-8 l-2-52 h-8 z" />
        </>
      ) : (
        <>
          <circle cx="30" cy="18" r="11" />
          <path d="M16 34 h28 l-4 40 l4 20 l-4 40 h-6 l-2-36 h-4 l-2 36 h-6 l-4-40 l4-20 z" />
        </>
      )}
    </svg>
  );
}

function FakeInput({
  placeholder,
  showToggle,
}: {
  placeholder: string;
  showToggle?: boolean;
}) {
  return (
    <div className="flex h-9 w-full items-center gap-2 rounded-xl border border-ink/5 bg-white px-3 shadow-[0_1px_2px_rgba(23,21,31,0.04)]">
      <Eye className="h-3 w-3 text-gray" />
      <span className="text-[9.5px] text-gray">{placeholder}</span>
      {showToggle && <Eye className="ml-auto h-3 w-3 text-gray" />}
    </div>
  );
}

function SocialButton({
  label,
  kind,
}: {
  label: string;
  kind: "google" | "telegram";
}) {
  return (
    <div className="flex h-9 w-full items-center justify-between rounded-full border border-ink/5 bg-white px-3 text-[10px] font-semibold text-ink shadow-[0_1px_2px_rgba(23,21,31,0.04)]">
      <span className="flex items-center gap-2">
        {kind === "google" ? <GoogleIcon /> : <TelegramIcon />}
        {label}
      </span>
      <span className="text-[11px] text-brand-700">›</span>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.75h3.57c2.08-1.92 3.28-4.74 3.28-8.07Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.75c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#26A5E4" />
      <path
        d="M17.8 7.7 15.7 17.3c-.2.7-.6.9-1.2.6l-3.3-2.4-1.6 1.5c-.2.2-.3.3-.6.3l.2-3.3 6-5.4c.3-.2-.1-.4-.4-.2l-7.4 4.7-3.2-1c-.7-.2-.7-.7.1-1L16.7 7c.6-.2 1.1.1.9.7Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
