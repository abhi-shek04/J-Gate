# Task ID: FX-1 — Typography & Copy Fixer

**Agent:** Z.ai Code (main)
**Scope:** Fix oversized headlines, text walls, and oversized cards across the J-Gate multi-page Next.js 16 application.

## Summary of Changes

### 1. PageHero component (`src/components/jgate/page-hero.tsx`)
- H1 clamp: `clamp(2.25rem, 5vw, 3.75rem)` → `clamp(1.75rem, 3.5vw, 2.5rem)`
- Subtitle clamp: `clamp(1rem, 1.8vw, 1.125rem)` → `clamp(0.875rem, 1.4vw, 1rem)`
- Section min-height: `min-h-[44vh]` → `min-h-[36vh]`
- Section padding: `pt-20 pb-12` → `pt-24 pb-10`

### 2. Home page (`src/app/page.tsx`)
- Hero H1 clamp: `clamp(3rem, 7vw, 6.5rem)` → `clamp(2.25rem, 5vw, 4rem)` (MAIN fix)
- Hero subtitle clamp: `clamp(1rem, 1.6vw, 1.125rem)` → `clamp(0.875rem, 1.5vw, 1.0625rem)`
- Stats numbers clamp: `clamp(2.75rem, 5vw, 4rem)` → `clamp(2rem, 3.5vw, 2.75rem)`
- 3 section H2s reduced to `clamp(1.5rem, 3vw, 2rem)` (Pillars / Locations / CTA)
- 3 ecosystem card descriptions condensed (bilingual EN+JP)

### 3. About page (`src/app/about/page.tsx`)
- All 7 H2 clamps reduced to `clamp(1.5rem, 3vw, 2rem)`
- MISSION body and VISION body condensed to 1 sentence each
- India-map subtitle condensed to 1 sentence
- Mission/Vision, Core Values, Inauguration, Closing CTA subtitles condensed
- Inauguration footer note condensed

### 4. Why J-Gate page (`src/app/why-jgate/page.tsx`)
- All 4 H2 clamps reduced to `clamp(1.5rem, 3vw, 2rem)`
- 3 testimonials condensed to max 2 sentences each (EN + JP)

### 5. Services page (`src/app/services/page.tsx`)
- All 5 H2 clamps reduced to `clamp(1.5rem, 3vw, 2rem)`
- Tomio Isogai bio and Daisuke Tanji bio condensed to 2 sentences each
- 3 section subtitles condensed

### 6. Team page (`src/app/team/page.tsx`)
- Section 1 hero tagline paragraph clamp reduced to `clamp(1.5rem, 3vw, 2rem)`
- All 4 H2 clamps reduced to `clamp(1.5rem, 3vw, 2rem)`
- Operations team member names: `clamp(1.75rem, 3.6vw, 2.75rem)` → `text-2xl`
- 4 bios condensed (Tanji 4→3, Hanaoka 3→2, Dheeraj tightened, Abhishek tightened)
- 1 quote condensed (Tanji 3→2 sentences)
- 2 section subtitles condensed

### 7. Pricing page (`src/app/pricing/page.tsx`)
- Both H2 clamps reduced to `clamp(1.5rem, 3vw, 2rem)`
- 3 Billing Note card descriptions condensed
- 2 subtitles condensed

### 8. Blogs page (`src/app/blogs/page.tsx`)
- All 3 H2 clamps reduced to `clamp(1.5rem, 3vw, 2rem)`
- Article b1 excerpt condensed to 1 sentence
- Section intro subtitle condensed

### 9. Contact page (`src/app/contact/page.tsx`)
- 3 H2 clamps reduced to `clamp(1.5rem, 3vw, 2rem)`
- 2 subtitles condensed

### 10. globals.css (`src/app/globals.css`)
- `.section-pad` desktop padding: `80px` → `64px` (mobile 40px and tablet 56px unchanged)

### 11. i18n dictionary (`src/lib/i18n.tsx`)
- about.hyderabad.desc condensed (3 → 1 sentence)
- about.gurgaon.desc condensed (3 → 1 sentence)
- services.s1.desc condensed (3 → 2 sentences)
- services.s4.desc condensed (3 → 2 sentences)

## Verification
- `bun run lint` → 0 errors, 0 warnings (clean exit).
- All 8 routes return HTTP 200 (verified via dev.log): `/`, `/about`, `/why-jgate`, `/services`, `/team`, `/pricing`, `/blogs`, `/contact`.
- No remaining clamp values with max > 2rem on rendered section H2s (PageHero H1 uses 2.5rem max per explicit spec; home hero H1 uses 4rem max per explicit spec).
- All bilingual content preserved as `tx({EN, JP})` — both EN and JP condensed together for consistency.
- No sections removed — only typography values reduced and copy condensed.
- Design tokens and color palette untouched.
EOF
echo "Agent context file written"