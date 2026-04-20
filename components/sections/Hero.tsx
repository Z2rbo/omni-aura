"use client";

import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { PhoneFrame } from "@/components/phone/PhoneFrame";
import { ChatScreen, HomeScreen, GoalScreen } from "@/components/phone/screens";
import { Sparkles, Eye, Cpu, Star } from "lucide-react";
import { useLeadModal } from "@/components/ui/LeadModalProvider";

const d = (delay: number): CSSProperties => ({ ["--delay" as never]: `${delay}ms` });

export function Hero() {
  const { open } = useLeadModal();

  return (
    <section className="relative isolate overflow-hidden pt-32 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grad-hero"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[600px] w-[1100px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(184,161,255,0.45),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(rgba(23,21,31,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(23,21,31,0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,#000_30%,transparent_70%)]"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-7">
            <div
              style={d(0)}
              className="anim-rise inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-3 py-1.5 text-[12px] font-semibold text-ink-soft shadow-hairline backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5 text-brand-500" />
              <span className="text-brand-700">Early stage · 2026</span>
              <span className="h-1 w-1 rounded-full bg-gray" />
              <span>MVP в разработке</span>
            </div>

            <h1
              style={d(100)}
              className="anim-rise-md mt-6 text-balance text-[44px] font-extrabold leading-[1.02] tracking-tighter text-ink md:text-[72px] lg:text-[88px]"
            >
              Твой личный{" "}
              <span className="relative inline-block">
                <span className="aurora-text">ИИ-помощник</span>
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  className="absolute -bottom-1 left-0 h-2 w-full text-brand-300"
                >
                  <path
                    d="M2 6 Q75 1 150 6 T298 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              в зале и{" "}
              <span className="font-serif italic font-normal text-ink-soft">
                дома
              </span>
              .
            </h1>

            <p
              style={d(250)}
              className="anim-rise mt-7 max-w-xl text-pretty text-lg text-ink-soft md:text-xl"
            >
              Computer vision разберёт твою технику в реальном времени, ИИ
              соберёт план под твои цели и БЖУ. Без осуждения. Без дорогих
              тренеров.
            </p>

            <div
              style={d(400)}
              className="anim-rise mt-9 flex flex-wrap items-center gap-3"
            >
              <Button
                size="lg"
                onClick={() => open({ variant: "signup", source: "hero" })}
              >
                Начни сейчас
              </Button>
              <Button
                size="lg"
                variant="secondary"
                iconTrailing={null}
                href="#screens"
              >
                Посмотреть демо
              </Button>
            </div>

            <div
              style={d(600)}
              className="anim-rise mt-10 flex flex-wrap items-center gap-6 text-[13px] text-ink-soft"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[
                    "from-brand-300 to-brand-500",
                    "from-brand-500 to-brand-700",
                    "from-brand-100 to-brand-300",
                    "from-brand-700 to-brand-500",
                  ].map((g, i) => (
                    <span
                      key={i}
                      className={`grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br ${g} ring-2 ring-cream`}
                    >
                      <span className="text-[11px] font-bold text-white">
                        {"ADКЛ"[i]}
                      </span>
                    </span>
                  ))}
                </div>
                <span className="font-semibold text-ink">50+ </span>
                <span>в раннем доступе</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex text-brand-500">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-ink">4.6</span>
                <span>из 52 бета-тестов</span>
              </div>
            </div>

            <ul
              style={d(700)}
              className="anim-rise mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-ink-soft"
            >
              {[
                { icon: Eye, label: "CV-разбор техники" },
                { icon: Cpu, label: "ИИ план тренировок" },
                { icon: Sparkles, label: "БЖУ + рацион" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-1.5">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-50 text-brand-700">
                    <Icon className="h-3 w-3" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Phone stack */}
          <div
            style={d(200)}
            className="anim-rise-lg relative mx-auto lg:col-span-5"
          >
            <div className="relative mx-auto grid h-[620px] w-[320px] place-items-center md:w-[420px] lg:w-[440px]">
              <div className="absolute left-1/2 top-10 hidden -translate-x-[115%] rotate-[-10deg] md:block">
                <PhoneFrame>
                  <GoalScreen />
                </PhoneFrame>
              </div>
              <div className="absolute left-1/2 top-4 z-20 -translate-x-1/2">
                <PhoneFrame>
                  <HomeScreen />
                </PhoneFrame>
              </div>
              <div className="absolute left-1/2 top-10 hidden translate-x-[15%] rotate-[10deg] md:block">
                <PhoneFrame>
                  <ChatScreen />
                </PhoneFrame>
              </div>
            </div>

            <div
              style={d(900)}
              className="anim-rise absolute -left-4 top-20 hidden rounded-2xl bg-white p-3 shadow-float md:block"
            >
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-grad-aurora-solid">
                  <Eye className="h-4 w-4 text-white" />
                </span>
                <div>
                  <p className="text-[11px] font-bold">Техника OK</p>
                  <p className="text-[10px] text-ink-soft">присед 12/12</p>
                </div>
              </div>
            </div>
            <div
              style={d(1050)}
              className="anim-rise absolute -right-2 bottom-24 hidden rounded-2xl bg-ink p-3 text-white shadow-float md:block"
            >
              <p className="text-[11px] font-bold">+320 ккал</p>
              <p className="text-[10px] text-white/60">сегодня</p>
            </div>
          </div>
        </div>

        {/* Tech stack */}
        <div className="mt-28">
          <div className="mx-auto max-w-5xl rounded-[28px] bg-white/50 px-6 py-7 shadow-hairline ring-1 ring-ink/5 backdrop-blur-sm md:px-10 md:py-8">
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft">
              Технологический стек
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
              {[
                { t: "MediaPipe Pose", s: "on-device CV" },
                { t: "YandexGPT", s: "ИИ-чат" },
                { t: "Yandex SpeechKit", s: "голос" },
                { t: "Supabase", s: "self-hosted DB" },
                { t: "YooKassa", s: "платежи РФ" },
                { t: "Telegram Bot API", s: "бот-канал" },
              ].map((x) => (
                <span
                  key={x.t}
                  className="group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3.5 py-2 text-[13px] font-bold tracking-tight text-ink shadow-hairline transition-colors hover:border-brand-500/25 hover:bg-brand-50"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-grad-aurora-solid" />
                  {x.t}
                  <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-gray">
                    · {x.s}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
