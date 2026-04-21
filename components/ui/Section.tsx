import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  innerClassName?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      innerClassName,
      eyebrow,
      title,
      lead,
      align = "left",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn("relative py-16 md:py-24 lg:py-32", className)}
        {...props}
      >
        <div
          className={cn(
            "mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10",
            innerClassName
          )}
        >
          {(eyebrow || title || lead) && (
            <header
              className={cn(
                "mb-10 md:mb-14 lg:mb-20 max-w-3xl",
                align === "center" && "mx-auto text-center"
              )}
            >
              {eyebrow && (
                <div
                  className={cn(
                    "mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-700",
                    align === "center" && "mx-auto"
                  )}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  {eyebrow}
                </div>
              )}
              {title && (
                <h2 className="text-balance text-[30px] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-6xl">
                  {title}
                </h2>
              )}
              {lead && (
                <p className="mt-4 max-w-2xl text-pretty text-[15px] text-ink-soft sm:text-base md:mt-5 md:text-xl">
                  {lead}
                </p>
              )}
            </header>
          )}
          {children}
        </div>
      </section>
    );
  }
);
Section.displayName = "Section";
