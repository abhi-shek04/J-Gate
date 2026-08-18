---
Task ID: TEAM-FIX
Agent: Z.ai Code (main)
Task: Rebuild the J-Gate Team page (`src/app/team/page.tsx`) with neat, structured, professional card layouts — replacing the oversized editorial cards (480px photos, alternating left/right full-width splits) with COMPACT horizontal ops cards (2×2 grid, 96px circular photos) and COMPACT vertical advisory cards (5-column grid, 80px circular photos, no long bios).

Work Log:
- Read `/home/z/my-project/worklog.md` to understand full project context (J-Gate multi-page Next.js 16 app, crimson + warm ivory brand palette, photo-ready system, i18n `useI18n()` returning `{ t, tx }`, design tokens `bg-pearl`, `bg-midnight`, `glass-dark`, `shadow-card`, `lift-card`, `section-pad`, `container-jg`).
- Read existing `/src/app/team/page.tsx` (657 lines, v3.0 oversized editorial cards), `/src/components/jgate/photo.tsx` (Photo component API), `/src/components/jgate/shared.tsx` (Reveal, Eyebrow, variant types), `/src/components/jgate/page-hero.tsx` (PageHero props), `/src/components/jgate/icons.tsx` (LinkedInIcon export), `/src/lib/i18n.tsx` (useI18n + tx inline bilingual helper), `/src/app/globals.css` (design tokens — confirmed Tailwind v4 has built-in `line-clamp-*`).

### Rebuilt `src/app/team/page.tsx` (v4.0 Compact Redesign)

**Section 1 — PageHero (kept as-is)**
- Same PageHero with `eyebrowKey="team.eyebrow"`, bilingual title node ("Leadership & Team" / "J-Gateを支える人々"), `subtitleKey="team.title"`.

**Section 2 — Hero header band (navy, kept)**
- Same navy section with asanoha-navy pattern + radial saffron glow + Sparkles icon + tagline ("Unlocking new possibilities for your business..." EN/JP) + attribution ("— The J-Gate Operations Team").

**Section 3 — Operations Team: NEW COMPACT 2×2 grid**
- Layout: `grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5` — 1 col mobile / 2×2 desktop.
- Each `OpsCard` is horizontal flex (`flex flex-col sm:flex-row`): photo left (96px circular `h-24 w-24`), content right.
- Card: `bg-pearl rounded-lg p-5 shadow-card lift-card h-full` — ALL cards SAME HEIGHT via `h-full` + `items-stretch`.
- Photo has flag badge bottom-right (`absolute bottom-0 right-0 h-7 w-7 rounded-full bg-white shadow-md ring-2 ring-pearl`).
- Content stack:
  - Name: `text-lg font-bold font-serif-jp text-ink`
  - JP name: `text-xs font-medium font-sans-jp text-mist`
  - Role badge: crimson pill (`bg-crimson/10 text-crimson rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em]`)
  - Bio: `text-[13px] leading-relaxed text-slate line-clamp-2` — exactly 2 lines max
  - Contact row: phone (`tel:` link with Phone icon) + email (`mailto:` link with Mail icon) + LinkedIn (`LinkedInIcon` from `@/components/jgate/icons`, `#` placeholder href with `e.preventDefault()`). Phone/email shown conditionally when data present; LinkedIn always shown.
- Real bios (bilingual EN/JP via `tx()`):
  1. Daisuke TANJI (丹治 大佑) — Director 🇯🇵 — "Representative of Indobox India. Leads J-Gate with a decade of India bridging experience." — phone +91-9910360648 — photo-team-tanji/grad-founder-tanji/DT
  2. Mariko HANAOKA (花岡 真理子) — Director 🇯🇵 — "Oversees client relationships, program delivery, and Japan-facing bilateral handoff." — email contact@indobox.co.jp — photo-team-hanaoka/grad-team/MH
  3. Dheeraj YANNETI (ディラジ・ヤンネティ) — Community Manager 🇮🇳 — "Daily heartbeat of J-Gate Hyderabad — tenant relations and cultural bridge." — phone +91-98498 11543 — photo-team-dheeraj/grad-team/DY
  4. Abhishek BUDURU (アブシェーク・ブドゥル) — Intern / Tech 🇮🇳 — "Powers the technical layer — workspace infrastructure and digital systems." — photo-team-abhishek/grad-team/AB
- Staggered Reveal delays: 0, 70, 140, 210ms (per `i * 70`).
- `mt-auto` on contact row to pin to bottom for visual alignment across equal-height cards.

**Section 4 — Advisory Board: NEW COMPACT 5-column grid**
- Layout: `grid items-stretch gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5` — 1 col mobile / 3 col tablet / 5 col desktop.
- Each `AdvisorCard` is vertical (`flex flex-col items-center`): photo top (80px circular `h-20 w-20`), name + JP name + former title below.
- Card: `glass-dark lift-card rounded-lg border-t-2 border-saffron p-4 text-center h-full` — gold top border (border-t-2 border-saffron), same height via `h-full`.
- Content (NO long bios):
  - Name: `text-sm font-bold font-serif-jp text-white`
  - JP name: `text-[11px] text-mist font-sans-jp`
  - Former title: `text-[12px] font-semibold text-saffron font-inter`
- 5 advisors with bilingual data:
  1. Srinivas Rao Mahankali — Former CEO, T-Hub — photo-advisory-mahankali/grad-advisory-j/SM
  2. Sujit Jagirdar — Former CIO, T-Hub — photo-advisory-jagirdar/grad-advisory-j/SJ
  3. Dr. Uday B. Desai — Founding Director, IIT Hyderabad — photo-advisory-desai/grad-advisory-j/UD
  4. Dr. Viinay Sarikonda — CEO, Genesys Info X — photo-advisory-sarikonda/grad-advisory-s/VS
  5. Tomio Isogai (磯貝 富雄) — Indobox Advisor · Former MD, Sharp India — photo-advisory-isogai/grad-advisory-j/TI
- Staggered Reveal delays: 0, 70, 140, 210, 280ms.

**Section 5 — Ecosystem Partners (kept as-is)**
- 12-tile compact grid (`grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4`).
- Each tile: white bg, shadow-sm, 12px radius, hover translateY(-4px), icon badge + name (text-[15px] bold) + category tag (text-[12px] mist uppercase).
- Same 12 partners as v3.0 (Kodryx.ai, YANC, Daakia, Fingerprint Films, MXC, Hyderabad Japan Club, JETRO, T-Hub, Woxsen University, Genesys Info X, DMI, DATA INTELLIGENCE).

**Section 6 — Closing CTA (kept)**
- Same ivory-warm CTA: Building2 icon in crimson circle, headline "Talk to the Team That Builds the Bridge", body, "Contact Us" (crimson gradient button) + "Explore Services" (crimson outline button).

### Cleanups & imports
- Removed unused imports: `Linkedin` (lucide-react) — replaced with `LinkedInIcon` from `@/components/jgate/icons`; `Quote as QuoteIcon` (no more quote blocks); `Lightbulb` (was advisor.icon for Isogai, no longer needed).
- Kept imports actually used: ArrowRight, Sparkles, Award, Users, Cpu, FlaskConical, Briefcase, Building2, Heart, Globe2, Phone, Mail, Network (all used in PARTNERS array or contact row or CTA).
- Switched from `as const` advisor array with `icon` field to plain `{ photoId, fallback, initials, name, jpName, formerTitle }` tuples — simpler data, no unused fields.

### Design rules honored
- ALL cards SAME HEIGHT within each row (via `h-full` on article + `items-stretch` on grid).
- Cards COMPACT (96px / 80px photos, not 480px; 2-line bios, not full essays; p-5 / p-4 padding).
- Layout NEAT and STRUCTURED — clean 2×2 and 5-column grids, no alternating split-card chaos.
- Staggered Reveal delays (0, 70, 140, 210ms — and 280ms for 5th advisor).
- All text bilingual EN/JP via `tx()`.
- Fully responsive (mobile-first `sm:`/`lg:` breakpoints; ops card stacks vertically on mobile via `flex-col sm:flex-row`, photo centers on mobile via `self-center sm:self-start`).
- Kept PageHero, hero header band, closing CTA exactly as v3.0.

### Verification
- `cd /home/z/my-project && bun run lint` → clean (zero errors, zero warnings).
- Dev server: `GET /team 200 in 218ms` (compile 69ms, render 148ms) — successful compile, no errors.
- File: 1 modified (`src/app/team/page.tsx` — full rewrite from 657 lines editorial to compact structured layout).

Stage Summary:
- Deliverable: Team page rebuilt with COMPACT, NEAT, STRUCTURED card layouts — 2×2 ops grid with horizontal 96px-photo cards + 5-column advisory grid with vertical 80px-photo cards (no long bios). Same-height rows. Fully responsive. Bilingual. Lint clean. Dev server compiles successfully.
