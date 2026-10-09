# Project Guidance

## User Preferences

- White background with dark navy text and subtle blue accents
- Clean typography and generous spacing
- Simple, professional English
- No invented work experience, qualifications, achievements or technical skills
- Show location only as Pune, Maharashtra
- No placeholder text, empty sections, broken links, or unnecessary animations

## Verified Commands

- **typecheck**: `pnpm typecheck`
- **fix**: `pnpm fix`
- **build**: `pnpm build`

## Learnings

- Motoko has no triple-quoted string literals: """ parses as an empty string followed by a new string (M0097). Author multi-line text as concatenated single-line literals with \n escapes.
- A mixin with no state takes no parameters: `mixin () { ... }`, included as `include ApiDocMixin();`. Never bind a static Markdown literal to a top-level let (that becomes stable state and traps at runtime).
- example.com is a reserved placeholder domain; never use it for a required contact email. When a required value (email, LinkedIn URL, resume PDF) was never supplied, omit it rather than fabricating or pointing a CTA at a non-download target.
- pnpm fix (biome check --write) resolves organizeImports and format errors that pnpm check reports; run it before re-checking. Biome enforces single-line JSX for short elements.
- IntersectionObserver with rootMargin '-45% 0px -50% 0px' gives reliable scroll-spy active-section highlighting for a single-page anchor nav.
- The Section wrapper (id/title/eyebrow/description/tone) renders the H2 plus a scroll-mt-24 anchor target; section bodies are passed as children.
