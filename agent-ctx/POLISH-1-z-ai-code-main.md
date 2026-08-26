# Task: POLISH-1 — Typography & Layout Polish (oversized text → tight, clean, professional)

**Agent:** Z.ai Code (main)
**Scope:** Tighten oversized typography clamps across the J-Gate multi-page Next.js 16 app.

## Problem
1. Hero H1 was 90px (`clamp(3rem, 7vw, 6.5rem)`) — way too large.
2. PageHero H1 was 60px (`clamp(2.25rem, 5vw, 3.75rem)`) — too large.
3. Section H2s ranged 36–40px (`clamp(*, *, 2.25rem–2.75rem)`) — too large.
4. Team member names were 44px (`clamp(1.75rem, 3.6vw, 2.75rem)`) on H3 — way too large.
5. Pricing plan price numbers reached 44px (`text-4xl sm:text-[2.75rem]`).

## Typography Standard Applied

### Hero H1 (home page only)
`clamp(3rem, 7vw, 6.5rem)` → `clamp(2rem, 4.5vw, 3rem)` — max 48px ✓

### PageHero H1 (all sub-pages)
`clamp(2.25rem, 5vw, 3.75rem)` → `clamp(1.5rem, 3vw, 2.25rem)` — max 36px ✓
Subtitle `clamp(1rem, 1.8vw, 1.125rem)` → `clamp(0.875rem, 1.4vw, 1rem)` ✓

### Section H2 reductions
- `clamp(1.875rem,4vw,2.5rem)` → `clamp(1.375rem,2.5vw,1.75rem)` — max 28px
- `clamp(1.75rem,4vw,2.5rem)` → `clamp(1.375rem,2.5vw,1.75rem)` — max 28px
- `clamp(1.75rem,3.8vw,2.25rem)` → `clamp(1.25rem,2.2vw,1.625rem)` — max 26px
- `clamp(1.75rem,3.5vw,2.25rem)` → `clamp(1.25rem,2.2vw,1.625rem)` — max 26px
- `clamp(1.625rem,3.6vw,2.25rem)` → `clamp(1.25rem,2.2vw,1.625rem)` — max 26px
- `clamp(1.625rem,3.5vw,2rem)` → `clamp(1.25rem,2.2vw,1.625rem)`
- `clamp(1.625rem,3.5vw,2.125rem)` → `clamp(1.25rem,2.2vw,1.625rem)`
- `clamp(1.75rem, 3.6vw, 2.375rem)` → `clamp(1.25rem, 2.2vw, 1.625rem)` (blogs page with spaces)

### Team message band paragraph (large decorative H2)
`clamp(1.5rem,3.5vw,2.25rem)` → `clamp(1.25rem,2.2vw,1.625rem)`

### Team member names (H3)
`style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)" }}` removed and `text-xl` (20px) Tailwind class added to `<h3>` className.

### Hero stat counter (home page)
`clamp(2.75rem,5vw,4rem)` → `clamp(1.75rem, 3vw, 2.5rem)` — max 40px

### Hero JP tagline + subtitle (home page)
- `clamp(1rem,1.6vw,1.25rem)` (JP tagline, no spaces) → `clamp(0.875rem,1.5vw,1.0625rem)` — max 17px
- `clamp(1rem, 1.6vw, 1.125rem)` (hero subtitle, with spaces) → `clamp(0.875rem, 1.5vw, 1.0625rem)` — max 17px

### Home H3 reductions (smaller headings under H2)
- `clamp(1.375rem,3vw,1.75rem)` → `clamp(1.125rem,2vw,1.375rem)` — max 22px (trust strip H2)
- `clamp(1.125rem,2vw,1.375rem)` → `clamp(0.9rem,1.5vw,1.0625rem)` — max 17px (pillar H3 titles)

### Pricing page price numbers
- `text-4xl sm:text-[2.75rem]` (44px max) → `text-2xl sm:text-[1.75rem]` (28px max) — plan big price
- Other comparison prices (`text-2xl sm:text-3xl` = 30px) kept — within 40px stat-number ceiling

## Files Modified
1. `src/components/jgate/page-hero.tsx` — H1 + subtitle clamp reduction (Edit tool)
2. `src/app/page.tsx` — Hero H1, JP tagline, body subtitle, stat counter, all section H2s, trust strip H2, pillar H3 (sed bulk + targeted Edit for cascade-collision on trust strip H2)
3. `src/app/about/page.tsx` — 7 H2 clamp reductions
4. `src/app/why-jgate/page.tsx` — 4 H2 clamp reductions
5. `src/app/services/page.tsx` — 5 H2 clamp reductions (4 with max 2.5rem, 1 with max 2.25rem)
6. `src/app/team/page.tsx` — message band H2 + 3 section H2s reduced; member name H3 changed from clamp(1.75rem, 3.6vw, 2.75rem) → `text-xl` Tailwind class (style attribute removed)
7. `src/app/pricing/page.tsx` — 2 H2 reductions + plan price number `text-4xl sm:text-[2.75rem]` → `text-2xl sm:text-[1.75rem]`
8. `src/app/blogs/page.tsx` — 3 H2 reductions (2 with spaces in clamp args required targeted fix beyond sed)
9. `src/app/contact/page.tsx` — 4 H2 reductions (3 max 2.25rem + 1 max 2rem)

## Implementation Notes
- Used `sed -i` with multiple `-e` patterns for bulk replacements across all 7 sub-page files in a single command.
- Spotted a cascade-collision: the home page sed applied both `clamp(1.375rem,3vw,1.75rem) → clamp(1.125rem,2vw,1.375rem)` (H2 pattern) AND `clamp(1.125rem,2vw,1.375rem) → clamp(0.9rem,1.5vw,1.0625rem)` (H3 pattern) in sequence — this incorrectly cascaded the trust strip H2 down to body-text size. Fixed by re-editing the trust strip H2 back to `clamp(1.125rem,2vw,1.375rem)` so only the originally-H3 pillar title gets the smaller H3 size.
- Spaces inside clamp args (`clamp(1.75rem, 3.5vw, 2.25rem)` vs `clamp(1.75rem,3.5vw,2.25rem)`) caused some sed patterns to miss a couple of clamps in blogs/page.tsx and contact/page.tsx — caught and fixed via targeted Edit calls.
- Team member name H3 needed a structural change (remove `style` attribute, add `text-xl` Tailwind class), not a clamp swap — handled with Edit, not sed.
- Decorative oversized watermarks intentionally left alone: `text-7xl sm:text-8xl` faded service numerals in services page (opacity-30), `text-[2.75rem]` faded article numbers in blogs page (text-white/30).
- Did NOT touch colors, layout structure, components, bilingual content, or section structure — only font-size values.
- Did NOT modify the unused `SectionHeading` component in `src/components/jgate/shared.tsx` (it has `clamp(1.875rem,4vw,2.75rem)` but is not imported by any active page).

## Verification
- `bun run lint`: exit 0 — 0 errors, 0 warnings ✓
- dev.log: all 8 routes (`/`, `/about`, `/why-jgate`, `/services`, `/team`, `/pricing`, `/blogs`, `/contact`) return 200 with clean compiles (180–1015ms) ✓
- No runtime errors after changes ✓
- Text now feels TIGHT, CLEAN, PROFESSIONAL — not oversized.

## Result
- Hero H1: 90px → 48px (max) — properly proportioned for hero impact without overwhelming.
- PageHero H1: 60px → 36px (max) — sub-page heroes now match section rhythm.
- Section H2s: 36–40px → 26–28px (max) — consistent, readable hierarchy.
- Team member names: 44px → 20px (text-xl) — names are now refined, not billboard.
- Pricing plan price numbers: 44px → 28px (max) — premium, restrained.
- All bilingual content (JP/EN) and section structures preserved.
