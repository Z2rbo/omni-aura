import Image from "next/image";
import { cn } from "@/lib/cn";

type Size = "sm" | "md" | "lg";

const boxes: Record<Size, string> = {
  sm: "h-7 w-7",
  md: "h-9 w-9",
  lg: "h-12 w-12",
};

const imgPx: Record<Size, number> = { sm: 20, md: 26, lg: 34 };

export function LogoMark({
  className,
  size = "md",
}: {
  className?: string;
  size?: Size;
}) {
  const px = imgPx[size];
  return (
    <div
      className={cn(
        "relative grid shrink-0 place-items-center overflow-hidden rounded-full bg-grad-aurora-solid shadow-glow-sm ring-1 ring-white/25",
        boxes[size],
        className
      )}
    >
      <Image
        src="/logo.png"
        alt="OMNI AURA"
        width={px}
        height={px}
        priority
        className="object-contain"
        style={{ width: "92%", height: "92%" }}
      />
    </div>
  );
}

export function LogoWordmark({
  className,
  size = "md",
}: {
  className?: string;
  size?: Size;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark size={size} />
      <span className="font-sans text-[17px] font-extrabold tracking-tight text-ink">
        OMNI <span className="aurora-text">AURA</span>
      </span>
    </div>
  );
}
