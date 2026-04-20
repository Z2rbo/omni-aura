import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ScreensGallery } from "@/components/sections/ScreensGallery";
import { Audience } from "@/components/sections/Audience";
import { Competitors } from "@/components/sections/Competitors";
import { Pricing } from "@/components/sections/Pricing";
import { Roadmap } from "@/components/sections/Roadmap";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <ScreensGallery />
        <Audience />
        <Competitors />
        <Pricing />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
