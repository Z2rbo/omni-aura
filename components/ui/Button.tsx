"use client";

import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "solid" | "secondary" | "invert" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  iconTrailing?: ReactNode;
  children?: ReactNode;
  className?: string;
};

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps | "href"> & {
    href?: undefined;
  };

type AnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

type Props = ButtonProps | AnchorProps;

const base =
  "group relative inline-flex items-center justify-center gap-2 font-semibold tracking-tight whitespace-nowrap rounded-full transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-grad-aurora-solid shadow-glow-sm hover:-translate-y-0.5 hover:shadow-glow-lg active:translate-y-0 active:scale-[0.98]",
  solid:
    "text-white bg-grad-aurora-solid shadow-glow-sm hover:-translate-y-0.5 hover:shadow-glow-lg active:translate-y-0 active:scale-[0.98]",
  secondary:
    "text-ink bg-white border border-ink/10 hover:bg-brand-50 hover:border-brand-500/25",
  invert:
    "text-ink bg-white hover:bg-brand-50 shadow-hairline",
  ghost:
    "text-ink/80 hover:text-ink hover:bg-ink/5",
};

function resolveTrailing(iconTrailing: ReactNode, variant: Variant): ReactNode {
  if (iconTrailing !== undefined) return iconTrailing;
  if (variant === "primary" || variant === "solid")
    return (
      <ArrowUpRight className="h-4 w-4 opacity-90 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    );
  return null;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  (
    { className, variant = "primary", size = "md", iconTrailing, children, ...props },
    ref
  ) => {
    const cls = cn(base, sizes[size], variants[variant], className);
    const trailing = resolveTrailing(iconTrailing, variant);
    const content = (
      <>
        <span className="relative flex items-center gap-2">{children}</span>
        {trailing}
      </>
    );

    if ("href" in props && props.href) {
      const { href, ...rest } = props as AnchorProps;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={cls}
          {...rest}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cls}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);
Button.displayName = "Button";
