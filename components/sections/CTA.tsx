"use client";

import { Button } from "@/components/ui/Button";
import { PhoneFrame } from "@/components/phone/PhoneFrame";
import { LoginScreen } from "@/components/phone/screens";
import { Reveal } from "@/components/ui/Reveal";
import { useLeadModal } from "@/components/ui/LeadModalProvider";

export function CTA() {
  const { open } = useLeadModal();
  return (
    <section id="cta" className="relative overflow-hidden px-5 pb-20 sm:px-6 md:px-10 md:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[32px] bg-ink p-7 text-white sm:rounded-[44px] sm:p-10 md:grid-cols-12 md:p-16 lg:p-20">
        {/* Aurora decoration */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(184,161,255,0.45),transparent_70%)] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -bottom-20 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(129,86,255,0.35),transparent_70%)] blur-3xl"
        />

        <Reveal className="relative md:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
            Первые 500 пользователей — Premium на год в подарок
          </span>

          <h2 className="mt-6 text-balance text-[36px] font-extrabold leading-[1.05] tracking-tight sm:text-5xl sm:leading-[1.02] sm:tracking-tighter md:text-6xl lg:text-7xl">
            Готов поменять{" "}
            <span className="bg-[linear-gradient(110deg,#B8A1FF,#FFFFFF)] bg-clip-text text-transparent">
              отношение к телу?
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-[15px] text-white/70 sm:text-base md:mt-6 md:text-xl">
            Скачай OMNI AURA, пройди онбординг за 3 минуты и получи 31 день
            Premium бесплатно. Без карточки. Без уловок.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              variant="invert"
              onClick={() => open({ variant: "signup", source: "cta-section" })}
            >
              Попробовать бесплатно
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white/80 hover:bg-white/10 hover:text-white"
              href="mailto:team@omni-aura.app?subject=Pitch-deck%20request"
            >
              Питч-дек для инвесторов
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 text-[13px] text-white/60">
            <span>✓ Без кредитной карты</span>
            <span>✓ Данные в России</span>
            <span>✓ Отмена в один клик</span>
          </div>
        </Reveal>

        <Reveal scale delay={80} className="relative mx-auto md:col-span-5">
          <PhoneFrame glowTint="none">
            <LoginScreen />
          </PhoneFrame>
        </Reveal>
      </div>
    </section>
  );
}
