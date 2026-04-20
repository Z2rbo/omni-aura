import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Stats } from "@/components/sections/Stats";
import { Solution } from "@/components/sections/Solution";
import { TechArchitecture } from "@/components/sections/TechArchitecture";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ScreensGallery } from "@/components/sections/ScreensGallery";
import { Audience } from "@/components/sections/Audience";
import { Competitors } from "@/components/sections/Competitors";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Roadmap } from "@/components/sections/Roadmap";
import { Team } from "@/components/sections/Team";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Problem />
        <Stats />
        <Solution />
        <TechArchitecture />
        <HowItWorks />
        <ScreensGallery />
        <Audience />
        <Competitors />
        <Testimonials />
        <Pricing />
        <Roadmap />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
