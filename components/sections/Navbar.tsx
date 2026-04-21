"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LogoWordmark } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { useLeadModal } from "@/components/ui/LeadModalProvider";
import { cn } from "@/lib/cn";

const links = [
  { href: "#problem", label: "Проблема" },
  { href: "#impact", label: "Impact" },
  { href: "#architecture", label: "Технология" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#team", label: "Команда" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const rafRef = useRef<number | null>(null);
  const { open: openLead } = useLeadModal();

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 16);
      rafRef.current = null;
    };
    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 transition-all duration-500 md:px-6",
          scrolled
            ? "bg-cream/75 shadow-hairline backdrop-blur-xl ring-1 ring-ink/5 py-2.5"
            : "bg-transparent py-2.5"
        )}
      >
        <Link href="/" className="shrink-0">
          <LogoWordmark />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-[14px] font-medium text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:inline-flex"
            onClick={() => openLead({ variant: "signup", source: "nav-login" })}
          >
            Войти
          </Button>
          <Button
            size="sm"
            className="hidden xs:inline-flex"
            onClick={() => openLead({ variant: "signup", source: "nav-cta" })}
          >
            Начни сейчас
          </Button>
          <button
            aria-label="Меню"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-hairline md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-7xl px-4 md:hidden">
          <div className="rounded-3xl bg-white p-3 shadow-float ring-1 ring-ink/5">
            <nav className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-[15px] font-medium text-ink hover:bg-brand-50"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <Button
              className="mt-2 w-full xs:hidden"
              size="sm"
              onClick={() => {
                setOpen(false);
                openLead({ variant: "signup", source: "nav-mobile-cta" });
              }}
            >
              Начни сейчас
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
