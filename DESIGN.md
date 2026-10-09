# Design Brief

## Direction

Navy & Paper — a restrained, editorial single-page resume that reads like a well-set document, not a marketing site.

## Tone

Refined minimalism with an academic-press feel: white paper, deep navy ink, one quiet blue accent, and generous air.

## Differentiation

A precise editorial grid with a signature navy vertical rule and soft-blue radial glow behind the hero — calm, credible, and clearly personal.

## Color Palette

| Token      | OKLCH         | Role                                       |
| ---------- | ------------- | ------------------------------------------ |
| background | 1 0 0         | Pure white page canvas                     |
| foreground | 0.245 0.045 258 | Deep navy ink for headings and body      |
| card       | 1 0 0         | White cards, differentiated by border/shadow |
| primary    | 0.3 0.07 258  | Navy for buttons, nav, footer              |
| accent     | 0.55 0.16 254 | Subtle blue for links, active state, glow  |
| muted      | 0.965 0.008 258 | Alternating section wash and skill chips |

## Typography

- Display: Space Grotesk — hero name, section headings, nav wordmark
- Body: DM Sans — paragraphs, labels, navigation, UI text
- Mono: JetBrains Mono — small uppercase section labels and year markers
- Scale: hero `text-4xl md:text-6xl font-bold tracking-tight`, h2 `text-3xl md:text-4xl font-bold tracking-tight`, label `text-xs font-semibold tracking-[0.2em] uppercase`, body `text-base md:text-lg`

## Elevation & Depth

Flat white surfaces separated by hairline borders; cards lift only slightly with `shadow-subtle`/`shadow-elevated` and never float.

## Structural Zones

| Zone    | Background            | Border            | Notes                                        |
| ------- | --------------------- | ----------------- | -------------------------------------------- |
| Header  | `bg-background/85` backdrop-blur | `border-b` | Sticky, navy wordmark, blue active link      |
| Content | `bg-background`       | —                 | Alternate `bg-muted/40` every other section  |
| Footer  | `bg-primary`          | —                 | Navy band, light text, quick links, copyright |

## Spacing & Rhythm

Sections use `py-20 md:py-28` with a `max-w-5xl` container; content groups separated by `space-y-6`/`gap-6`, micro-spacing `gap-2`–`gap-3`.

## Component Patterns

- Buttons: `rounded-md`, navy solid primary + outlined secondary, subtle shadow on hover
- Cards: `rounded-lg`, white, `border`, `shadow-subtle`, hover `shadow-elevated`
- Badges: `rounded-full` chips on `bg-muted` with navy text and hairline border

## Motion

- Entrance: none — content is present immediately for a professional, non-distracting read
- Hover: 0.3s color/shadow `transition-smooth` on links, buttons, and cards only
- Decorative: static soft-blue radial gradient behind hero; no looping animation

## Constraints

- White background, dark navy text, subtle blue accents only
- No invented content; only the supplied resume facts
- No placeholder text, broken links, or unnecessary animation

## Signature Detail

A thin navy vertical rule running beside each section label, echoing a printed résumé margin — the quiet mark that makes the page feel authored.
