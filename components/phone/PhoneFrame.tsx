import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
  /** Rotation in degrees applied to the entire phone */
  rotate?: number;
  /** Tint of the floor shadow glow under phone */
  glowTint?: "purple" | "none";
}

export function PhoneFrame({
  children,
  className,
  rotate = 0,
  glowTint = "purple",
}: PhoneFrameProps) {
  return (
    <div
      className={cn("relative", className)}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      {glowTint === "purple" && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(129,86,255,0.35),transparent_70%)] blur-2xl"
        />
      )}
      <div className="relative aspect-[9/19] w-[280px] rounded-[44px] bg-ink p-[10px] shadow-float ring-1 ring-white/5">
        {/* Side buttons */}
        <span className="absolute -left-[3px] top-[120px] h-10 w-[3px] rounded-l-full bg-ink/80" />
        <span className="absolute -left-[3px] top-[170px] h-16 w-[3px] rounded-l-full bg-ink/80" />
        <span className="absolute -right-[3px] top-[150px] h-20 w-[3px] rounded-r-full bg-ink/80" />

        <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-cream">
          {/* Top reflection */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-grad-phone-reflection"
          />
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-2.5 z-20 h-[22px] w-[80px] -translate-x-1/2 rounded-full bg-ink" />
          {children}
        </div>
      </div>
    </div>
  );
}

export function PhoneStatusBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative z-10 flex items-center justify-between px-5 pb-1 pt-3 text-[11px] font-semibold text-ink",
        className
      )}
    >
      <span>9:41</span>
      <span className="h-[22px] w-[80px]" />
      <span className="flex items-center gap-1">
        <svg viewBox="0 0 18 12" className="h-3 w-4 fill-current">
          <path d="M1 8h2v4H1zM5 6h2v6H5zM9 4h2v8H9zM13 2h2v10h-2z" />
        </svg>
        <svg viewBox="0 0 24 12" className="h-3 w-6 fill-current">
          <rect x="0" y="2" width="20" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
          <rect x="2" y="4" width="12" height="4" rx="1" />
          <rect x="21" y="4" width="1.5" height="4" rx="0.5" />
        </svg>
      </span>
    </div>
  );
}
