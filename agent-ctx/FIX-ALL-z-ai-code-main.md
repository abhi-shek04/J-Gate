# FIX-ALL — Z.ai Code (main)

## Task
Fix multiple issues on the J-Gate multi-page Next.js 16 application:
1. Remove ALL Gurgaon references (only Hyderabad exists)
2. Reduce oversized text/font sizes on home page
3. Reduce card sizes and spacing
4. Fix company marquee placement
5. Clean up home page structure to standard premium co-working landing page flow

## Work performed

### Issue 1 — Gurgaon removal (full coverage)
- **`src/lib/i18n.tsx`**: Removed 7 `about.gurgaon.*` keys; rewrote `about.locations.title`/`subtitle`/`eyebrow` to single-city messaging.
- **`src/app/page.tsx`**: Removed Gurgaon floating glass badge from hero (kept Hyderabad + Indobox operator). Removed entire Gurgaon location card. Fixed Ecosystem preview first card desc. Converted Locations section to single centered max-w-3xl Hyderabad card. Updated architecture comments.
- **`src/app/about/page.tsx`**: Removed entire Gurgaon reversed 2-col location card. Removed Gurgaon dot, label, dashed connecting line from IndiaMap SVG. Fixed vision text ("Two cities" → "One city", "Gurgaon, or anywhere in between" → "anywhere in India"). Updated India Map section subtitle, sidebar (renamed "Active Corridor" → "Our Base"), legend (removed Gurgaon entry). Centered Hyderabad card with max-w-4xl. Removed now-unused `MapPin` import.

### Issue 2 — Text size reductions
- **page-hero.tsx** H1: `clamp(2.25rem, 5vw, 3.75rem)` → `clamp(1.25rem, 2.5vw, 1.75rem)` (max 28px).
- **page.tsx**:
  - Hero H1: `clamp(3rem, 7vw, 6.5rem)` → `clamp(1.75rem, 4vw, 2.5rem)` (max 40px).
  - Stats number: `clamp(2.75rem, 5vw, 4rem)` → `clamp(1.5rem, 2.5vw, 2rem)` (max 32px).
  - All section H2s → `clamp(1.125rem, 2vw, 1.5rem)` (max 24px).
  - Workspace feature card titles → `text-[15px]` (15px).
- **about/page.tsx**: All 5 H2s reduced to `clamp(1.125rem, 2vw, 1.5rem)`. All section subtitles reduced to `clamp(0.85rem, 1.4vw, 0.95rem)`. Card titles `text-2xl`/`text-lg` → responsive clamps.

### Issue 3 — Card sizes and spacing reductions
- **page.tsx**:
  - Workspace feature cards padding: `p-7` → `p-5`. Icon badge `h-12 w-12` → `h-11 w-11`.
  - Stats cards padding: `p-6 sm:p-8` → `p-4 sm:p-5`.
  - Location card photo: `h-56` → `h-40`. Content padding: `p-7` → `p-5 sm:p-6`.
  - Pillar cards padding: `p-8` → `p-5`. Faded numeral `96px` → `72px`.
  - Ecosystem preview cards padding: `p-7` → `p-5`.
  - Card grid gaps: `gap-5`/`gap-6` → `gap-4`.
  - Trust strip padding: `py-14` → `py-8`.
- **about/page.tsx**: Hyderabad card padding: `p-8 lg:p-10` → `p-5 sm:p-6 lg:p-7`. Section heading top margins `mt-4` → `mt-2` throughout.
- Did NOT touch `section-pad` (globals.css) — 64px desktop padding is fine.

### Issue 4 — Company marquee placement
- Searched codebase: no `CompanyMarquee`/`company-marquee.tsx` exists. The trust-strip function is served by `LogoMarquee` (two-row scrolling partner logo wall — Japanese enterprises + ecosystem partners).
- Per task instructions ("If there's already a LogoMarquee component there... pick one"), kept LogoMarquee as the single trust-strip implementation.
- Verified LogoMarquee is imported once and rendered once in page.tsx — no duplicates.
- Positioned immediately after the hero as the standard premium co-working trust strip (WeWork/Industrious/Second Home pattern).

### Issue 5 — Home page structure (now exactly 8 sections, in order)
1. Hero (midnight, particles, Torii watermark, headline, 2 CTAs, 2 floating glass badges, scroll cue)
2. Company logo marquee (trust strip — ONE instance, py-8 compact)
3. Stats (4 animated counters, crimson max 32px)
4. **NEW** Workspace Features (6 cards on ivory-warm bg — Premium Workspace, Enterprise Fiber, Meeting Rooms, Legal Guidance, Bilingual Talent Pipeline, India Market Intelligence)
5. Core Pillars (3 navy glass cards — Opportunity Creation / Talent Development / Business Collaboration)
6. Hyderabad Location (single centered max-w-3xl card — LIVE badge, 3 bullets, visit link)
7. Ecosystem Preview (3 cards → /about, /why-jgate, /services)
8. CTA Banner ("Ready to Bridge Your Future?" midnight bg, download brochure)

## Verification
- `bun run lint`: clean (no errors, no warnings).
- `grep -rn "Gurgaon|gurgaon|グルガオン" src/app/ src/components/ src/lib/i18n.tsx --include="*.tsx" --include="*.ts" | grep -v node_modules`: zero matches.
- `curl http://localhost:3000/` → 200 OK.
- `curl http://localhost:3000/about` → 200 OK.
- Dev server compiled successfully.

## Design rules honored
- Kept bilingual content (every visible string has EN+JP via `t()` / `tx()`).
- Kept the dark premium aesthetic (midnight hero, navy pillars, ivory body, crimson+saffron accents).
- Fully responsive (mobile-first `sm:`/`md:`/`lg:` breakpoints throughout).
- All text sizes now feel COMPACT and PROFESSIONAL, not oversized.

## Files modified
- `src/lib/i18n.tsx`
- `src/components/jgate/page-hero.tsx`
- `src/app/page.tsx` (full rewrite)
- `src/app/about/page.tsx`
