import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "380px",
      },
      colors: {
        cream: {
          DEFAULT: "#F7F6F0",
          deep: "#EFEDE2",
        },
        ink: {
          DEFAULT: "#17151F",
          soft: "#3A3540",
        },
        gray: {
          DEFAULT: "#878383",
          line: "#D8D5CC",
        },
        brand: {
          50: "#F1EDFF",
          100: "#E6E1F5",
          300: "#B8A1FF",
          500: "#8156FF",
          700: "#5B2FD1",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "ui-serif", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.02em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        hairline: "0 1px 0 rgba(23,21,31,0.05)",
        soft: "0 10px 24px -16px rgba(23,21,31,0.15)",
        float: "0 24px 60px -30px rgba(23,21,31,0.22)",
        glow: "0 40px 80px -40px rgba(129,86,255,0.40)",
        "glow-sm": "0 12px 32px -12px rgba(129,86,255,0.45)",
        "glow-lg": "0 20px 44px -14px rgba(129,86,255,0.55)",
        "inner-stroke": "inset 0 0 0 1px rgba(255,255,255,0.5)",
      },
      backgroundImage: {
        "grad-aurora-white":
          "linear-gradient(110deg, #B8A1FF 0%, #8156FF 29%, #FFFFFF 76%)",
        "grad-aurora-solid":
          "linear-gradient(110deg, #B8A1FF 0%, #8156FF 45%, #5B2FD1 100%)",
        "grad-aurora-soft":
          "linear-gradient(110deg, #B8A1FF 0%, #E6E1F5 55%)",
        "grad-surface":
          "linear-gradient(160deg, #E6E1F5 0%, #F7F6F0 100%)",
        "grad-hero":
          "radial-gradient(1200px 600px at 20% 0%, rgba(184,161,255,0.35) 0%, transparent 60%), linear-gradient(180deg, #F7F6F0 0%, #EFEDE2 100%)",
        "grad-phone-reflection":
          "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 30%)",
        "grad-photo-warm":
          "linear-gradient(180deg, #E6C8A8 0%, #C39B7B 50%, #7A5A45 100%)",
        "grad-photo-pool":
          "linear-gradient(160deg, #3D5F6B 0%, #1F2C36 100%)",
        "grad-photo-gym":
          "linear-gradient(170deg, #2B2530 0%, #4A3F55 100%)",
        "grad-photo-cardio":
          "linear-gradient(165deg, #D2AFDF 0%, #9F7BCB 50%, #5A3D8A 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "aurora-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "aurora-pan": "aurora-pan 12s ease-in-out infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
