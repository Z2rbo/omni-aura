"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  translateY?: number;
  scale?: boolean;
  className?: string;
  style?: CSSProperties;
};

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export function Reveal({
  children,
  delay = 0,
  duration = 560,
  translateY = 14,
  scale = false,
  className,
  style,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const vh = window.innerHeight || document.documentElement.clientHeight;
    const rect = el.getBoundingClientRect();
    if (rect.top < vh * 0.95 && rect.bottom > 0) {
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const transform = shown
    ? `translate3d(0,0,0)${scale ? " scale(1)" : ""}`
    : `translate3d(0,${translateY}px,0)${scale ? " scale(0.98)" : ""}`;

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        transform,
        opacity: shown ? 1 : 0,
        transition: `opacity ${duration}ms ${EASE}, transform ${duration}ms ${EASE}`,
        transitionDelay: `${delay}ms`,
        willChange: shown ? undefined : "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
