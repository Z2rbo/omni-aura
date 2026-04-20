import type { Metadata, Viewport } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { LeadModalProvider } from "@/components/ui/LeadModalProvider";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omni-aura.app"),
  title: {
    default: "OMNI AURA — Твой личный ИИ-помощник для тренировок",
    template: "%s · OMNI AURA",
  },
  description:
    "OMNI AURA — приложение-тренер нового поколения. Компьютерное зрение разбирает технику в реальном времени, ИИ составляет план тренировок и питания. Без осуждения, без дорогих тренеров.",
  keywords: [
    "OMNI AURA",
    "ИИ тренер",
    "фитнес приложение",
    "компьютерное зрение",
    "AI coach",
    "план тренировок",
    "ИТМО",
  ],
  authors: [{ name: "OMNI AURA Team" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "OMNI AURA — Твой личный ИИ-помощник",
    description:
      "ИИ-коуч с computer vision: разбирает технику, подбирает план, считает БЖУ.",
    siteName: "OMNI AURA",
  },
  twitter: {
    card: "summary_large_image",
    title: "OMNI AURA",
    description: "Твой личный ИИ-помощник для тренировок",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F6F0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${instrumentSerif.variable}`}>
      <body className="bg-cream text-ink antialiased selection:bg-brand-300/30">
        <LeadModalProvider>{children}</LeadModalProvider>
      </body>
    </html>
  );
}
