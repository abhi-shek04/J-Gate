# V3-B — Rebuild Services & Team Pages

## Task ID: V3-B
## Agent: Z.ai Code (main)

## Summary
Rebuilt 2 pages (Services, Team) of the J-Gate multi-page Next.js 16 application per the v3.0 definitive redesign spec.

## Work Done

### 1. Services Page (`src/app/services/page.tsx`) — ~590 lines
- **PageHero**: "Indobox Comprehensive / Expansion Support" (EN) / "Indoboxの包括的 / 進出支援・人材育成" (JP) with saffron-gradient second line.
- **Section 1 — 5 Service Cards** (bg-ivory): Editorial cards with ALTERNATING photo sides (left/right via `photoLeft = i % 2 === 0`). Each card: grid lg:grid-cols-[45%_55%] with top accent bar, Photo (h-72 sm:h-80 lg:h-[420px]) with faded number overlay (text-7xl/8xl opacity-30), content side with icon badge + "Service Line 0X" eyebrow + H3 title + description + 3 sub-bullets with ✓ checkmarks. Services: 01 Corporate Registration (crimson), 02 Talent Development (saffron), 03 Sales & Marketing (crimson), 04 Interpretation & Back-Office (saffron), 05 End-to-End Support (crimson).
- **Section 2 — Indobox Academy** (bg-midnight + asanoha-dark): H2 "Practical India Business Lectures" + 4 metric cards in glass-dark (Online / 60min / 1-2 months / 日本語 — saffron Video/Clock/CalendarDays/Globe icons). 2 featured people: Lecturer Tomio Isogai (photo-academy-isogai, grad-advisory-s, saffron border, expanded bio about Sharp India MD experience) + Facilitator Daisuke Tanji (photo-academy-tanji, grad-founder-tanji, crimson border, bio about decade in India bridging).
- **Section 3 — Hybrid Operating Model** (bg-ivory-warm): 2-col grid lg:grid-cols-2 with absolute-positioned center "×" divider (hidden on mobile, 12×12 ivory-warm circle with serif-jp 2xl "×"). Indobox (crimson, Handshake icon, 4 duties) vs Genesys (saffron, Building2 icon, 4 duties). Below: Living Support strip — Home icon + 4-item grid with emoji icons 🏠/📋/🏨/🛟 (Apartment search / FRRO / Long-stay hotel / Daily-life support).
- **Section 4 — Facility Features** (bg-ivory): 6-card grid sm:2 lg:3 (3×2). Each card: Photo top 200px (photo-facility-workspace/wifi/meeting/cafeteria/access/security) + icon badge overlay top-right + JP name (saffron serif-jp 18px) + EN name (ink inter 12px uppercase) + description. Real "TASTY FOOD JUNCTION" name for cafeteria with description mentioning Indian snacks, classic curries, biryani, Indian-Chinese cuisine. Hover: translateY(-1.5).
- **Section 5 — Note strip**: Single callout max-w-3xl with Banknote icon + "All infrastructure included — " bold ink + "Wi-Fi, printers, lockers, meeting rooms, security, and 24/7 smart-key access — all standard, not invoiced separately."
- **Section 6 — Closing CTA** (bg-navy): Sparkles icon + "Build Your India Base With Indobox" + 2-link CTA + compact contact strip (mailto + tel for Tanji).

### 2. Team Page (`src/app/team/page.tsx`) — ~480 lines — THE MOST IMPORTANT PAGE
- **PageHero**: "Leadership & / Team" (EN) / "J-Gateを / 支える人々" (JP).
- **Section 1 — Hero header message band** (bg-navy): Sparkles icon + bilingual tagline "Unlocking new possibilities for your business through collaboration with India." + "— The J-Gate Operations Team" attribution.
- **Section 2 — Operations Team** (bg-ivory): 4 HERO editorial cards with ALTERNATING photo sides. Each: grid lg:grid-cols-[45%_55%] with top accent bar. Photo side: Photo (h-72 sm:h-80 lg:h-[480px]) + flag badge overlay (top-4 left-4, black/40 backdrop-blur pill with flag emoji + JP/IN code) + lg:order swap. Content side: role badge (inline-flex w-fit pill) + name (Noto Serif JP clamp 1.75-2.75rem) + JP name (font-sans-jp 17px slate) + thin crimson/saffron divider (h-px w-16) + FULL bio (Inter 15/16px leading-[1.8] — REAL expanded emotional bios) + Quote block (border-l-[3px] border-crimson pl-5 with QuoteIcon + serif-jp italic quote text — REAL quotes) + Contact row (phone/email pills + LinkedIn icon button). 4 members: Daisuke TANJI (🇯🇵 Director crimson, full Tanji 2013 arrival bio + "right answer to expanding into India" quote + phone +91-9910360648 + email + LinkedIn) / Mariko HANAOKA (🇯🇵 Director saffron, full bilingual excellence bio + "Tokyo expectations Hyderabad reality" quote + email) / Dheeraj YANNETI (🇮🇳 Community Manager crimson, full Omotenashi heartbeat bio + "Omotenashi is not a service level" quote + phone +91-98498 11543) / Abhishek BUDURU (🇮🇳 Intern/Tech saffron, full technical layer bio + "premium workspace deserves digital experience" quote).
- **Section 3 — Advisory Board** (bg-midnight + asanoha-dark): 5 cards in 3+2 grid (top 3 in lg:grid-cols-3, bottom 2 in max-w-4xl lg:grid-cols-2 centered). AdvisorCard component: glass-dark + 3px solid saffron top-border + portrait Photo (240×280) + name + JP name + role (saffron) + former title (mist) + short bio + credential icon at bottom. 5 advisors: Srinivas Rao Mahankali (Former CEO T-Hub) / Sujit Jagirdar (Former CIO T-Hub) / Dr. Uday B. Desai (Founding Director IIT Hyderabad) / Dr. Viinay Sarikonda (CEO Genesys Info X · MoU Partner) / Tomio Isogai (Indobox Advisor · Former MD Sharp India).
- **Section 4 — Ecosystem Partners** (bg-ivory): 12-tile clean grid sm:2 lg:4. Each: white bg + shadow-sm + 12px radius + 10×10 slate-100 icon badge (group-hover crimson tint) + name (Inter 700 15px ink) + category (Inter 400 12px mist uppercase). Hover: translateY(-4px). 12 partners: Kodryx.ai, YANC, Daakia, Fingerprint Films, MXC, Hyderabad Japan Club, JETRO, T-Hub, Woxsen University, Genesys Info X, DMI, DATA INTELLIGENCE.
- **Section 5 — Closing CTA** (bg-ivory-warm): Building2 icon + "Talk to the Team That Builds the Bridge" + 2-link CTA.

## Verification
- `bun run lint`: 0 errors, 0 warnings (clean).
- Both routes return HTTP 200 (verified via curl): `/services`, `/team`.
- All required content strings verified present via curl grep.
- Dev log: `/services` compiled in 280ms, `/team` compiled in 553ms — no runtime errors after my changes.

## Design Compliance
- Premium editorial standard — luxury hotel brand website feel.
- Team members feel like real humans with stories (REAL expanded emotional bios with character + REAL quotes in crimson left-border blockquotes).
- `section-pad` (80/56/40px) + `container-jg` (1280px max) rhythm throughout.
- `Reveal` with staggered delays (60-120ms) + `variant="left"/"right"` for alternating layouts.
- `lift-card` hover (translateY -4px + shadow-hover) on interactive cards.
- Photo zoom scale(1.04) on hover via existing jg-photo-wrap CSS (inherited from Photo component).
- All text bilingual via `tx({ EN, JP })` inline helper using REAL brand content from spec.
- Fully responsive (mobile-first): cards stack vertically with photo top on mobile (lg:grid-cols-[45%_55%] only on lg), metric cards 1→2→4 cols, people 1→2 cols, hybrid model 1→2 cols (center "×" hidden on mobile), facility features 1→2→3 cols, ops team hero cards stack vertically on mobile, advisory board 1→2→3 + bottom 1→2, ecosystem partners 1→2→4.
- Color tokens: bg-ivory/ivory-warm/pearl (light), bg-navy/midnight (dark), text-ink/crimson/saffron/slate/mist, glass-dark on dark sections, crimson-deep + saffron-light for gradient depth.
- Icons from lucide-react.

## Files Modified
- `src/app/services/page.tsx` — REBUILT (~590 lines)
- `src/app/team/page.tsx` — REBUILT (~480 lines with AdvisorCard sub-component)
