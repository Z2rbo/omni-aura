"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { PhoneFrame } from "@/components/phone/PhoneFrame";
import {
  HomeScreen,
  ChatScreen,
  GoalScreen,
  GenderScreen,
  BodyPartsScreen,
  LoginScreen,
} from "@/components/phone/screens";

const tabs = [
  { key: "home", label: "Главный", screen: <HomeScreen /> },
  { key: "chat", label: "ИИ-чат", screen: <ChatScreen /> },
  { key: "goal", label: "Цель", screen: <GoalScreen /> },
  { key: "gender", label: "Пол", screen: <GenderScreen /> },
  { key: "body", label: "Проработка", screen: <BodyPartsScreen /> },
  { key: "login", label: "Вход", screen: <LoginScreen /> },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export function ScreensGallery() {
  const [active, setActive] = useState<TabKey>("home");

  return (
    <Section
      id="screens"
      eyebrow="UI / UX"
      title={
        <>
          Каждый экран — {" "}
          <span className="font-serif italic font-normal text-ink-soft">
            отдельная
          </span>{" "}
          забота о пользователе.
        </>
      }
      lead="Интровертам спокойно, новичкам — понятно, тренирующимся регулярно — быстро. Мы отработали каждый сценарий в Figma и собрали в работающем прототипе."
      className="relative overflow-hidden bg-cream"
    >
      <div className="grid items-center gap-14 lg:grid-cols-12">
        {/* Phone preview — stacked screens, opacity toggle (без unmount) */}
        <div className="relative mx-auto lg:col-span-5">
          <div className="relative h-[600px] w-[280px]">
            {tabs.map((t) => (
              <div
                key={t.key}
                aria-hidden={active !== t.key}
                className={`absolute inset-0 transition-opacity duration-300 ease-out ${
                  active === t.key ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <PhoneFrame>{t.screen}</PhoneFrame>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs + description */}
        <div className="lg:col-span-7">
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`rounded-full px-5 py-2.5 text-[14px] font-semibold transition-colors duration-200 ${
                  active === t.key
                    ? "bg-grad-aurora-solid text-white shadow-glow-sm"
                    : "bg-white text-ink-soft ring-1 ring-ink/5 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Detail
              num="01"
              title="Дружелюбный онбординг"
              body="3 минуты на цели, пол и проработку. Без 40-вопросных анкет, без занудства."
            />
            <Detail
              num="02"
              title="Живой ИИ-чат"
              body="Ответит голосом или текстом. Не спит, не торопит, помнит твою историю."
            />
            <Detail
              num="03"
              title="Прогрессбары и достижения"
              body="Видно, что ты растёшь. Маленькие победы каждую неделю."
            />
            <Detail
              num="04"
              title="Единый стиль"
              body="Cream canvas + aurora-purple. Меньше глазного шума — больше фокуса."
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Detail({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-hairline ring-1 ring-ink/5">
      <span className="font-serif text-3xl italic text-brand-500/70">{num}</span>
      <p className="mt-1 text-[16px] font-bold tracking-tight">{title}</p>
      <p className="mt-1 text-[13px] text-ink-soft">{body}</p>
    </div>
  );
}
