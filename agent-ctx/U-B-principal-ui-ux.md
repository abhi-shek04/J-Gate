# Task ID: U-B — principal-ui-ux

## Task
Redesign 4 pages (Services, Team, Pricing, Contact) of the J-Gate Next.js 16 app with CLEAN, PROFESSIONAL, NON-MESSY Bento-Grid / Multi-Card architecture. Zero context mixing per card, high scannability, modular containers, 12px radius subtle borders.

## Pre-flight context review
- Read `/home/z/my-project/worklog.md` (Tasks 1–7 + M-A + M-B + M-C + C-A + C-B + C-C + C-D + U-A) for full project context.
- Reviewed existing infrastructure used by these pages:
  - i18n system at `@/lib/i18n` — `useI18n()` returns `{ t, tx }`; bilingual via `tx({EN, JP})`.
  - `PageHero` at `@/components/jgate/page-hero` (props: `eyebrowKey`, `titleNode`, `subtitleKey`).
  - `Reveal`/`Eyebrow` from `@/components/jgate/shared`.
  - `Photo` from `@/components/jgate/photo` — `<Photo id="..." alt="..." fallback="grad-team" initials="XX" rounded="rounded-full" className="..." />`.
  - Design tokens (verified in globals.css): `bg-ivory / bg-ivory-warm / bg-pearl / bg-navy / bg-midnight`, `text-ink / text-crimson / text-saffron / text-slate / text-mist`, `glass-dark`, `shadow-card`, `lift-card`, `section-pad` (80/56/40px), `container-jg` (1280px max), `pattern-asanoha-dark / pattern-asanoha-navy`, `text-gradient-saffron`, `btn-shine`.
  - Color tokens confirmed: `--color-crimson:#dc2626`, `--color-crimson-deep:#b91c1c`, `--color-saffron:#d97706`, `--color-saffron-light:#f59e0b`, `--color-ivory:#ffffff`, `--color-ivory-warm:#f8fafc`, `--color-pearl:#ffffff`, `--color-slate:#64748b`, `--color-mist:#94a3b8`, `--color-success:#059669`. `--radius-lg: 12px` (so `rounded-lg` = 12px).

## Services page (`src/app/services/page.tsx`) — REBUILT
PageHero + 4 clean modular sections + CTA. Each section has ONE domain only.

- **PageHero**: "Indobox Comprehensive Expansion Support" with saffron gradient on second line; subtitleKey=`services.title`.
- **Section 1 — Business Expansion Support (bg-ivory)**: Center header (eyebrow + H2 "Five Integrated Service Lines" + subtitle). CLEAN 5-card responsive grid (`sm:grid-cols-2 lg:grid-cols-3`). Each card: top accent bar (alternating crimson/saffron), icon badge + faded large numeral, H3 title, 1-line desc. 6th cell = closure card "One partner. Five services. Zero hand-off gaps." (kept grid balanced — no more vertical staggered list with 8rem numeral watermarks and offset alternation which was visually busy). NO Academy / Facilities content in this section.
- **Section 2 — Indobox Academy (bg-midnight + asanoha-dark + dual radial)**: Center header. CLEAN 3-card metric badge row (Format: Online / Duration: 60 min/session / Frequency: Once/1–2 months) — each with saffron icon chip + label + value, side-by-side compact. Below: 2 clean cards side-by-side — Lecturer (Tomio Isogai / 磯貝 富雄 氏, saffron accent + UserCog avatar + 1-line role) and Facilitator (Daisuke Tanji / 丹治 大佑, crimson accent + Briefcase avatar + 1-line role). NO expanded bio paragraphs (was context mixing with "decades of operational leadership" prose). NO 4-tile info grid (was duplicating the curriculum info now consolidated to 3 metric badges).
- **Section 3 — Indo-Japan Hybrid Operating Model (bg-ivory-warm)**: Center header. CLEAN 2-col responsibility matrix — Indobox card (crimson accent, Handshake icon, "Japan-side Operator" label, 4-item checklist with crimson ✓ marks) vs Genesys card (saffron accent, Building2 icon, "India-side Operator" label, 4-item checklist with saffron ✓ marks). Below: Living Support strip — single bordered card with crimson Home icon header + 4 small items (Apartment search / FRRO registration / Long-stay hotel arrangements / Daily-life support) in a clean 4-col grid. NO mixing with other content.
- **Section 4 — Facility Features (bg-ivory)**: Center header. CLEAN 6-card bento grid (`sm:grid-cols-2 lg:grid-cols-3`). Each card: top accent bar (alternating crimson/saffron), icon badge, H3 title, 1-line desc. Below: single small callout "Included — not invoiced separately. Wi-Fi, printers, lockers, meeting rooms, security, 24/7 smart-key access — all part of every plan." NO mixing.
- **Closing CTA (bg-navy + asanoha-navy + saffron radial)**: Single focused block — Sparkles icon + H2 "Build Your India Base With Indobox" + subtitle + 2-link CTA (Contact Us crimson gradient / View Membership Plans saffron outline) + compact contact strip (email + phone).

Removed: large 8rem numeral watermarks, alternating staggered left/right Reveal animations on services, the end-to-end dashed-border callout (replaced with cleaner 6th-tile closure card), the 4-tile academy info grid (consolidated to 3 metric badges), the bottom Banknote callout on facilities section (replaced with cleaner single-line note). All Removed unused imports (GraduationCap, MapPin, Globe2, Star).

## Team page (`src/app/team/page.tsx`) — REBUILT
PageHero + 4 clean tiered sections + CTA.

- **PageHero**: titleNode "Leadership & / Team" (EN) or "J-Gateを / 支える人々" (JP) with saffron gradient on second line; subtitleKey=`team.title`.
- **Section 1 — Header Message (bg-navy + asanoha-navy + saffron radial)**: Sparkles icon + bilingual catchphrase "Unlocking new possibilities for your business through collaboration with India." + attribution "— The J-Gate Operations Team". Clean focused band, NO mixing.
- **Section 2 — J-Gate Operations Team (bg-ivory)**: Header (eyebrow + H2 "Four People, One Operating Engine" + 1-line subtitle). CLEAN 4-card grid (`sm:grid-cols-2 lg:grid-cols-4`). Each card: top accent bar (alternating crimson/saffron), circular Photo (h-24 w-24 sm:h-28 sm:w-28), country flag, name (Roman), JP accent name, role badge (rounded-full chip with accent color), 1-line bio. 4 members: Daisuke TANJI (Director, 🇯🇵) / Mariko HANAOKA (Director, 🇯🇵) / Dheeraj YANNETI (Community Manager, 🇮🇳) / Abhishek BUDURU (Intern/Tech, 🇮🇳). NO advisor content here.
- **Section 3 — Board of Advisory (bg-ivory-warm)**: Header (eyebrow + H2 "Five Voices That Set the Standard" + 1-line subtitle). CLEAN 5-card grid in 3+2 layout (5 advisors + 1 closure card = 6-tile grid, `sm:grid-cols-2 lg:grid-cols-3`). Each advisor card: gold top-border accent (from-saffron via-saffron-light to-[#c9881a]), circular Photo (h-16 w-16 sm:h-20 sm:w-20), name (Roman), JP accent name, gold former-position badge with icon (Award/CPU/FlaskConical/Briefcase/Lightbulb) showing "Former CEO" / "Former CIO" / "Founding Director" / "CEO" / "Former MD, Sharp India" + role text below. Closure card: tri-color top bar + Sparkles icon + "Five advisors. One mandate: rigour." Removed: long 4-line advisor bio descriptions (was context-mixing), bottom icon chip "Advisor X of 5" (redundant with badge). 
- **Section 4 — Ecosystem Partners (bg-navy + asanoha-navy + dual radial)**: Header. CLEAN 6-tile partner grid (`sm:grid-cols-2 lg:grid-cols-3`). Each tile: glass-dark, horizontal layout — left icon chip (alternating saffron/crimson), partner name (Kodryx.ai / YANC / Daakia / Fingerprint Films / MXC / Hyderabad Japan Club), uppercase tag chip (DATA INTELLIGENCE / YOUNG MINDS NETWORKING / BRIDGING DISTANCE / CREATIVE STUDIO / TECHNOLOGY PARTNER / COMMUNITY). Hover-reveal bottom accent bar. Removed: long partner descriptions (was context-mixing — left side tile was getting text-walls), JP accent label (kept just name + tag for cleanest scan).
- **Closing CTA (bg-ivory)**: Building2 icon + H2 "Talk to the Team That Builds the Bridge" + subtitle + 2-link CTA (Contact Us crimson gradient + Explore Services outline).

## Pricing page (`src/app/pricing/page.tsx`) — REBUILT
PageHero + 3 clean sections + CTA. CLEANEST 3-tier structured grid.

- **PageHero**: titleNode "Membership Fee Plans / — Hyderabad" (EN) or "メンバーシップ / 料金プラン" (JP) with saffron gradient; subtitleKey=`pricing.title`.
- **Section 1 — Context Banner (bg-ivory)**: Single bordered card. Header row: TrendingDown gradient icon + Eyebrow "Strategic Cost-Performance". Bilingual H2 (1 line, no clutter) — "Designed as a high cost-performance strategic investment — replacing typical India expansion costs of ¥15M–¥20M annually per expat." Below: 2-tile comparison strip — ¥15M–¥20M (line-through, crimson, "Typical Annual Expat Cost · per expat + setup fees") vs 15,000 INR/mo (saffron highlighted, "J-Gate Membership From · excl. GST · ~¥27k/mo"). NO decorative blob, NO 2-col layout (was bloated).
- **Section 2 — 3 Pricing Cards (bg-ivory-warm)**: Center header (eyebrow + H2 "Choose the Plan That Matches Your India Stage"). CLEAN 3-card grid (`lg:grid-cols-3 lg:items-stretch`). Standard plan centered + elevated (`lg:-translate-y-3`). Each card: top accent bar (1.5px), optional badge (top-right), icon chip, EN plan name + JP accent name, big price (4xl → 2.75rem), INR unit + /mo, "excl. GST" note, Target section (uppercase label + 1-line), clean checklist (✓) with accent-colored check circles, CTA button.
  - Satellite (slate accent `border-slate-200`): Building2 icon, ₹15,000 INR/mo, target = "Companies with an existing India entity", 3 features, outline CTA.
  - Standard (crimson accent `border-crimson/40`, MOST POPULAR badge): Star icon, ₹50,000 INR/mo, target = "SMEs and startups entering India", 5 features, gradient crimson CTA.
  - Advance (saffron accent `border-saffron/40`, FLAGSHIP badge): Crown icon, ₹120,000 INR/mo, target = "Enterprises, regional banks, local governments", 5 features, gradient saffron CTA.
  - Removed: 3-stat comparison strip below cards (was redundant — comparison data is already visible in cards themselves).
- **Section 3 — Notes (bg-ivory)**: Single bordered card with header (AlertCircle icon + Eyebrow "Important Notes" + H3 "Read Before You Subscribe"). CLEAN 3-card note grid (`sm:grid-cols-3`). Each note card: icon + bold label + 1-paragraph desc:
  - Base fees only (Banknote icon)
  - INR billed · JPY supported (Banknote icon)
  - GST excluded (AlertCircle icon)
  - Removed: long sentence-form bullet list (replaced with cleaner card grid).
- **Closing CTA (bg-midnight + asanoha-dark + saffron radial)**: Satellite icon + H2 "Ready to Choose Your Plan?" + subtitle + 2-link CTA (Contact Us crimson + Compare Services outline) + compact contact strip (email + phone).

Removed unused import `Sparkles` (was imported but unused in CTA).

## Contact page (`src/app/contact/page.tsx`) — REBUILT
PageHero + 4 clean sections + CTA. CLEAN focused layout.

- **PageHero**: titleNode "Connect With / J-Gate" (EN) or "J-Gateに / 繋がる" (JP) with saffron gradient; subtitleKey=`contact.title`.
- **Section 1 — Header Message (bg-navy + asanoha-navy + saffron radial)**: Sparkles icon + bilingual executive tagline "Unlocking new possibilities for your business through collaboration with India." + attribution. Clean focused band, NO mixing.
- **Section 2 — Direct Channels (bg-ivory)**: Center header (eyebrow + H2 "Reach Us Directly" + 1-line subtitle). CLEAN 2-card grid (`md:grid-cols-2`, max-w-4xl).
  - Email card (crimson accent, top bar): Mail gradient icon + uppercase "Email" label + `contact@indobox.co.jp` (clickable mailto). Below: dashed-border note with MessageCircle icon "Feel free to consult about anything; support is provided in Japanese."
  - Phone card (saffron accent, top bar): Phone gradient icon + uppercase "Phone" label + `+91-9910360648` (clickable tel). Below: 2-item list of direct lines — Tanji (Director) +91-9910360648 and Dheeraj (Community Manager) +91-98498 11543, both clickable tel links. Each row in its own bordered chip.
- **Section 3 — Direct Inquiry Form (bg-ivory-warm)**: Center header (eyebrow + H2 "Send Us a Message" + 1-line subtitle "We respond to every inquiry within 24 hours — in Japanese."). CLEAN form card on glass-dark (max-w-3xl). 2-col grid for Name + Email (both required, *). Below: Subject (optional). Below: Message textarea (5 rows, required). Submit button (full-width crimson gradient with btn-shine). Footer note "Bilingual support available in English & 日本語". Form validation: name required, email regex, message required. Submit simulates 600ms delay then shows success state with CheckCircle2 (success-green) + thank-you message + "Send another" button.
- **Section 4 — Map (bg-midnight + asanoha-dark)**: Header (eyebrow + H2 "Tokyo ↔ Hyderabad"). Map placeholder preserved (grad-map bg + 32px SVG grid pattern + 4 road lines + dashed arc from Tokyo → Hyderabad + 2 pins):
  - Tokyo pin (smaller, crimson, top-left, secondary base) — labeled "Tokyo (Indobox HQ) · 🇯🇵 Japan" with pulsing animation.
  - Hyderabad pin (larger, saffron, bottom-right, PRIMARY base) — labeled "Hyderabad · J-Gate Base · 🇮🇳 Cyber Gateway, Hitech City" with pulsing animation.
  - Centered corridor label "Japan–India Corridor · ~7,500 km · 3.5 hour time difference" with Plane icon.
  - Bottom-left chip "📍 Hyderabad — Primary Base · Launched June 2026 · Cyber Gateway".
  - Top-right compass "N".
- **Closing CTA (bg-ivory)**: H2 "Prefer to Read First?" + subtitle + 2-link CTA (Download Brochure crimson gradient + View Pricing Plans outline).

Removed: Operations Team strip (was duplicating team page content here), Response-time guarantee strip (3-stat grid was context-mixing with contact cards). Contact page now strictly: Header Message → Direct Channels (Email/Phone) → Form → Map → CTA.

## Design compliance
1. **Zero context mixing** — Each section card carries ONLY its domain data. Verified:
   - Services S1: 5 expansion services only (no Academy / Facilities mixed in).
   - Services S2: Academy info + lecturer/facilitator only (no expansion / facility content).
   - Services S3: Hybrid model + Living Support strip only (no expansion / facility).
   - Services S4: 6 facility cards only (no expansion / academy).
   - Team S2: 4 operations members only (no advisors).
   - Team S3: 5 advisors only (no ops team).
   - Team S4: 6 ecosystem partners only.
   - Pricing S2: 3 pricing cards only.
   - Pricing S3: 3 notes only.
   - Contact S2: Email + Phone channels only.
   - Contact S3: Form only.
   - Contact S4: Map only.
2. **Clean bento-grid** — All cards use `rounded-lg` (=12px per `--radius-lg` token), subtle borders (`border-slate-200` / `border-crimson/15` / `border-crimson/20` / `border-crimson/40` / `border-saffron/15` / `border-saffron/40` / `border-white/10`), white bg (`bg-pearl`) on light sections, `glass-dark` on dark sections. `lift-card` hover effect on all interactive cards (translateY -4px + shadow).
3. **High scannability** — Bullet points (✓ checklists), metric badges (Academy Online/60min/1-2mo + Pricing 15K/50K/120K + cost comparison ¥15M-20M vs 15K INR/mo), clean tables (Indobox vs Genesys 2-col matrix). NO text walls — bios limited to 1 line for ops team, advisors have role+credential only (no bio paragraphs), partners have name+tag only (no descriptions).
4. **Typography** — H1 (`clamp(2.25rem,5vw,3.75rem)`) bold bilingual with saffron gradient on second line. H2 (`clamp(1.75rem,3.5vw,2.25rem)`) semibold. Body 12-14px regular with `leading-relaxed` / `leading-snug`.
5. **Bilingual** — All content JP+EN via `tx()` inline helper using REAL PDF content: 法人登記・登録住所・名義人ディレクター, 人材育成・派遣・給与管理, 営業・マーケティング支援, 通訳支援・バックオフィス代行, 法人設立から日常実務まで一貫支援, インドビジネスの実践講座, 磯貝 富雄 氏, 丹治 大佑, 日印ハイブリッド運営体制, 現地パートナーの詳細紹介・マッチング, 商談同席, 法人登記代行手数料, 人材紹介手数料, インドルピー, 日本円決済, 物品サービス税, 諮問委員会, etc. No machine-translation artifacts.
6. **Professional** — No emojis in headers (only on photo tiles for flags 🇯🇵🇮🇳 which are informational). Consistent spacing via `section-pad` (80/56/40px) + `container-jg` (1280px max). Alternating bg-ivory / bg-ivory-warm / bg-navy / bg-midnight section rhythm.

## Verification
- `bun run lint`: ✅ clean (0 errors, 0 warnings) — no output beyond "$ eslint ." means no issues reported.
- All 4 routes return HTTP 200 (verified via curl):
  - `/services` → 200 (compiled in 30ms, rendered in 67ms)
  - `/team` → 200 (compiled in 34ms, rendered in 52ms)
  - `/pricing` → 200 (compiled in 30ms, rendered in 49ms)
  - `/contact` → 200 (compiled in 101ms, rendered in 137ms)
- Content verification via curl grep:
  - `/services`: Indobox Comprehensive ✓, Tomio Isogai ✓, Daisuke Tanji ✓, Genesys ✓, Hybrid Operating Model ✓, Living Support ✓, Talent Development ✓, End-to-End ✓, Dedicated Workspace ✓, 24/7 ✓, FRRO ✓, Cafeteria ✓.
  - `/team`: Daisuke TANJI ✓, Mariko HANAOKA ✓, Dheeraj YANNETI ✓, Abhishek BUDURU ✓, Srinivas Rao Mahankali ✓, Sujit Jagirdar ✓, Uday B. Desai ✓, Viinay Sarikonda ✓, Tomio Isogai ✓, Kodryx ✓, YANC ✓, Daakia ✓, Fingerprint Films ✓, MXC ✓, Hyderabad Japan Club ✓, T-Hub ✓, Advisory ✓, Ecosystem Partners ✓.
  - `/pricing`: Satellite Plan ✓, Standard Plan ✓, Advance Plan ✓, 15,000 ✓, 50,000 ✓, 120,000 ✓, MOST POPULAR ✓, FLAGSHIP ✓, Yorozu ✓, GST ✓, INR ✓, JPY ✓, 15M ✓, 20M ✓.
  - `/contact`: contact@indobox.co.jp ✓, 9910360648 ✓, 98498 ✓, Tanji ✓, Dheeraj ✓, Connect With J-Gate ✓, Direct Inquiry ✓, Cyber Gateway ✓, Unlocking new possibilities ✓.

## Artifacts modified
- `src/app/services/page.tsx` — REBUILT (880 → ~570 lines). Removed unused imports (GraduationCap, MapPin, Globe2, Star).
- `src/app/team/page.tsx` — REBUILT (644 → ~380 lines). Removed unused imports (none — kept all needed).
- `src/app/pricing/page.tsx` — REBUILT (571 → ~330 lines). Removed unused import (Sparkles).
- `src/app/contact/page.tsx` — REBUILT (783 → ~470 lines). Removed unused imports (User, JapanFlag, IndiaFlag, Clock — none of which were used in the simplified layout).

## Stage summary
- Deliverable: 4 redesigned pages (Services, Team, Pricing, Contact) with CLEAN, PROFESSIONAL, NON-MESSY Bento-Grid / Multi-Card architecture. Zero context mixing — each card contains ONLY its domain data.
- Services: PageHero → 5-card expansion grid (with closure 6th tile) → Academy (3 metric badges + 2 lecturer/facilitator cards on midnight) → Hybrid model (2-col Indobox vs Genesys matrix + Living Support 4-item strip) → 6-card facility bento grid → CTA.
- Team: PageHero → Header Message band → 4-card ops team grid → 5-card advisory board (3+2 with closure) → 6-tile ecosystem partner grid → CTA.
- Pricing: PageHero → Context Banner (1 line + 2-tile cost comparison) → 3 side-by-side pricing cards (Satellite slate / Standard crimson MOST POPULAR elevated / Advance saffron FLAGSHIP) → 3-card notes grid → CTA.
- Contact: PageHero → Header Message band → 2 clean contact cards (Email crimson + Phone saffron with 2 direct lines) → Direct Inquiry Form (with success state) → Map placeholder (Tokyo + Hyderabad pins) → CTA.
- All 4 routes return 200. `bun run lint` clean. Real PDF content (Slides 4, 5, 6, 9, 12, 13) faithfully preserved across all 4 pages.
