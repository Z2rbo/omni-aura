# Design System — OMNI AURA

Personal AI coach app. Cream canvas, aurora-purple accents, soft rounded cards, warm minimalism.

## 1. Visual Theme & Atmosphere

- **Mood**: calm, supportive, modern, slightly premium. «AI-друг», а не «AI-терминатор».
- **Density**: airy — много воздуха, крупная типографика, щедрые отступы.
- **Design philosophy**: warm cream canvas + soft aurora-purple gradients. Rounded-everything (radius 20–32px). No hard black, no neon, no clinical white. Feels like a paper workbook that knows ML.
- **Signature element**: aurora gradient (B8A1FF → 8156FF → WHITE) as button fill that literally dissolves into the cream background — creates the "glow" edge.

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `cream` | `#F7F6F0` | Primary background (page canvas) |
| `cream-deep` | `#EFEDE2` | Secondary surface / section alt |
| `ink` | `#17151F` | Primary text (near-black, never pure #000) |
| `ink-soft` | `#3A3540` | Secondary text / subheads |
| `gray` | `#878383` | Captions, hints, disabled |
| `gray-line` | `#D8D5CC` | Hairline borders on cream |
| `purple-500` | `#8156FF` | Primary brand purple (CTA core) |
| `purple-300` | `#B8A1FF` | Light purple (gradient start) |
| `purple-100` | `#E6E1F5` | Pale lavender (NOT-WHITE gradient end) |
| `purple-50` | `#F1EDFF` | Purple-tinted surface |
| `purple-700` | `#5B2FD1` | Deep purple (hover / pressed) |
| `white` | `#FFFFFF` | Card fill on cream, gradient end-stop |

### Gradient tokens

- **`grad-aurora-white`** (button on cream): `linear-gradient(110deg, #B8A1FF 0%, #8156FF 29%, #FFFFFF 76%)` — the signature button that fades to white on the right edge.
- **`grad-aurora-soft`** (button on purple surface): `linear-gradient(110deg, #B8A1FF 0%, #E6E1F5 55%)`.
- **`grad-surface`** (card/panel fill): `linear-gradient(160deg, #E6E1F5 0%, #F7F6F0 100%)`.
- **`grad-hero`** (hero backdrop): `radial-gradient(1200px 600px at 20% 0%, #B8A1FF33 0%, transparent 60%), linear-gradient(180deg, #F7F6F0, #EFEDE2)`.

## 3. Typography Rules

- **Display / headings**: `Manrope`, weight 700/800, tracking -0.02em.
- **Body**: `Manrope`, weight 400/500, tracking 0.
- **Editorial accent**: `Instrument Serif` (italic optional) for the one-off elegant phrase (hero subline, testimonial).
- **Numbers / metrics**: `Manrope` 800, tabular nums.

| Scale | Size / Line | Weight | Use |
|------|-------------|--------|-----|
| `display-xl` | 96–128 / 0.95 | 800 | Hero headline |
| `display-l` | 64–80 / 1.02 | 800 | Section hero |
| `display-m` | 48 / 1.05 | 800 | Section titles |
| `h1` | 36 / 1.15 | 700 | Card hero |
| `h2` | 28 / 1.2 | 700 | Subsection |
| `h3` | 20 / 1.3 | 700 | Feature title |
| `body-l` | 20 / 1.5 | 400 | Hero sub |
| `body` | 16 / 1.6 | 400 | Default |
| `caption` | 13 / 1.4 | 500 | Labels, UI meta |
| `eyebrow` | 12 / 1 | 600, tracking 0.12em, UPPERCASE | Section eyebrow |

## 4. Component Stylings

### Button — primary (on cream)
- Fill: `grad-aurora-white`, text `#FFFFFF`, radius `9999px`, padding `18px 32px`, font 16/600.
- Shadow: `0 12px 32px -12px rgba(129,86,255,0.45)`.
- Hover: translateY(-2px), shadow intensifies to `0 20px 44px -14px rgba(129,86,255,0.55)`.
- Active: scale(0.98).

### Button — secondary
- Fill: `#FFFFFF`, 1px border `rgba(23,21,31,0.08)`, text `ink`, radius `9999px`.
- Hover: bg `#F1EDFF`, border `rgba(129,86,255,0.25)`.

### Button — ghost
- Fill: transparent, text `ink`, underline on hover.

### Card — feature (on cream)
- Fill: `#FFFFFF`, radius `28px`, padding `28px`, shadow `0 1px 0 rgba(23,21,31,0.04), 0 20px 40px -24px rgba(23,21,31,0.12)`.
- Border: 1px `rgba(23,21,31,0.04)`.

### Card — glow (hero / pricing hero)
- Fill: `grad-surface`, radius `32px`, inner stroke `rgba(255,255,255,0.5)`.
- Outer shadow: `0 40px 80px -40px rgba(129,86,255,0.35)`.

### Card — phone mockup frame
- Outer: `#17151F` body, radius `44px`, padding `10px`.
- Inner screen: `cream` fill, radius `36px`.
- Reflection: faint top gradient `linear-gradient(180deg, rgba(255,255,255,0.15), transparent 30%)`.

### Input
- Fill: `#FFFFFF`, border `rgba(23,21,31,0.08)`, radius `16px`, padding `16px 20px`, font 16/500.
- Focus: border `purple-500`, ring `rgba(129,86,255,0.2)`.

### Pill / badge
- Fill: `purple-50`, text `purple-700`, radius `9999px`, padding `6px 12px`, font 12/600, tracking 0.05em.

### Navigation
- Fixed top, bg `rgba(247,246,240,0.72)` with `backdrop-filter: blur(16px)`, bottom-border `rgba(23,21,31,0.06)`.
- Links: 14/500, hover underline `purple-500`.

## 5. Layout Principles

- **Spacing scale**: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- **Section vertical rhythm**: 96px mobile, 128px desktop.
- **Container**: max-width 1200px, horizontal padding 24/32/48 (sm/md/lg).
- **Grid**: 12-col desktop, 6-col tablet, 4-col mobile.
- **Whitespace philosophy**: "breathing room over chrome". Never crowd. One idea per screen-fold.
- **Alignment**: left-align long-form, center hero. Mix is OK but never center body copy paragraphs.

## 6. Depth & Elevation

| Elevation | Shadow | Used on |
|-----------|--------|---------|
| 0 (flat) | none | Navigation, plain surface |
| 1 (hairline) | `0 1px 0 rgba(23,21,31,0.05)` | Cards on cream |
| 2 (soft) | `0 10px 24px -16px rgba(23,21,31,0.15)` | Feature cards |
| 3 (float) | `0 24px 60px -30px rgba(23,21,31,0.22)` | Phone mockup, featured pricing |
| 4 (glow) | `0 40px 80px -40px rgba(129,86,255,0.4)` | Hero card, primary pricing |

Layer hierarchy: canvas (cream) → surface (white / purple-tint) → glow card → phone mockup (dark chrome) → overlays.

## 7. Do's and Don'ts

**Do**
- Use aurora-white gradient buttons on cream — it's the brand signature.
- Keep headings tight (tracking -0.02em), weight 700–800.
- Use `Instrument Serif` for max one editorial callout per section.
- Render phone mockups as dark chrome (`#17151F`) so the cream screen glows.
- Prefer rounded 20–32px corners everywhere.

**Don't**
- Never use pure black `#000` or pure white `#FFFFFF` as background.
- Don't layer gradient-on-gradient — gradient button belongs on solid cream/white.
- Avoid neon. Purple must stay in the B8A1FF–5B2FD1 range.
- No sharp 4px corners, no flat rectangle buttons.
- No dark mode by default — cream is the identity.

## 8. Responsive Behavior

- **Breakpoints**: `sm 640` / `md 768` / `lg 1024` / `xl 1280` / `2xl 1536`.
- **Touch target**: minimum 44×44.
- **Hero display**: 128px desktop → 72px tablet → 56px mobile.
- **Grid**: 3-col feature row collapses to 1-col < md with stacked cards.
- **Phone mockup**: 320×660 desktop → 280×580 mobile (or hide 2nd/3rd phone, keep one).
- **Navigation**: full links ≥ md, hamburger < md.

## 9. Agent Prompt Guide

Paste this into an AI agent prompt:

```
Use DESIGN.md for styling. Canvas is always cream #F7F6F0. 
Primary button is grad-aurora-white (B8A1FF → 8156FF → WHITE), 
rounded-full, white text. Typography is Manrope, tight tracking, 
weights 400/500/700/800. Use Instrument Serif sparingly for editorial 
italics. Cards are white on cream with 28px radius and soft shadow. 
Phone mockups have dark-chrome body (#17151F) around cream screens. 
Purple accents only in the B8A1FF → 5B2FD1 range. No pure black, 
no pure white, no neon, no 4px corners.
```

### Quick palette reference

- Cream canvas: `#F7F6F0`
- Brand purple: `#8156FF`
- Light purple: `#B8A1FF`
- Pale lavender: `#E6E1F5`
- Ink: `#17151F`
- Gray: `#878383`
