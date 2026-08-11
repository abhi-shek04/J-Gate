# Task C-A: Update i18n + Home/About/Why pages with real PDF content

**Agent**: full-stack-developer
**Task ID**: C-A
**Date**: 2026-08-11

## Objective
Update the i18n dictionary and rebuild 3 pages (Home, About, Why J-Gate) with the REAL official content extracted from the client's PDF (Slides 1, 2, 3, 10, 11).

## Real PDF Content Mapped

### Slide 1 (Cover Page) → Home Hero + i18n hero.* keys
- Organization: Indobox India
- Brand: J-Gate
- Main Title JP: 「日本企業専用のワーキングハブ誕生」
- Main Title EN: "Birth of a Dedicated Working Hub for Japanese Companies in Hyderabad"
- Catchphrase JP: 「インド進出の『正解』を、ここから。」
- Catchphrase EN: "The 'right answer' to expanding into India starts here."
- Map: Hyderabad as hub, with New Delhi, Ahmedabad, Mumbai, Bengaluru, Chennai

### Slide 2 (Core Purpose & Vision) → About page Section 1 + i18n about.pillar1-3.* keys
- Header: 「インド展開のきっかけ作りから、インド担当者の育成まで」
- 3 Pillars: きっかけ作り (Opportunity Creation) / 人材育成 (Talent Development) / ビジネス連携 (Business Collaboration)

### Slide 3 (Strategic Locations) → About page Section 2 + i18n about.hyderabad.* / about.gurgaon.* keys
- Hyderabad — Main Base (Launched June 2026, "Next Bangalore", IT/Pharma/Biotech)
- Gurgaon — Sub Base (In Preparation, Delhi NCR, largest Japanese-company community)

### Slide 10 (Competitive Comparison) → Why J-Gate page Section 1 + i18n why.compare.* / why.row1-9.* keys
- 4 columns × 9 rows: J-Gate / Major Japanese Consulting Firms / Local Coworking / Public Support Orgs
- Items: Target Audience, Monthly Cost, Physical Base, Resident Japanese Expert, Hands-on Support, Japanese Language Support, Hiring Support, Network, Cost Assessment
- Symbols: ◎ / △ preserved exactly as PDF

### Slide 11 (7 Core Value Pillars) → Why J-Gate page Section 2 + i18n why.p1-7.* keys
1. Workspace Access (2-4 persons/company)
2. Infrastructure Utilization (Cabinets, Wi-Fi, meeting rooms, cafeteria)
3. Japan Desk Consultations (Japanese-language multi-topic advisory)
4. End-to-End Company Setup (corporate entity establishment)
5. Expert Networking Events (business authorities + local experts)
6. India Study Sessions (ongoing specialized India market seminars)
7. Talent Hiring Support & Local Services (payroll, outsourcing, direct hiring, translation/interpretation, meal delivery — Italian/Chinese/Japanese-style)

## Implementation Summary

### 1. i18n Dictionary (src/lib/i18n.tsx)
- Updated hero.title1, hero.title2, hero.subtitle, hero.jptag, hero.entag with REAL PDF content
- Updated hero.badge1-3 (Dedicated Japan Desk / Strategic Hyderabad Base / End-to-End India Setup)
- Added 30+ new keys: about.purpose.*, about.pillar1-3.*, about.locations.*, about.hyderabad.*, about.gurgaon.*
- Added 50+ new keys: why.compare.*, why.row1-9.* (9 rows × 5 cells), why.pillars.*, why.p1-7.*
- Updated about.title to be Indobox India subtitle
- Updated why.title to "The Strategic Investment Advantage" / 「戦略的投資としての優位性」
- Removed old why.p1-4 keys (Bilingual & Bicultural Fluency / End-to-End Onboarding / Vetted Technical Talent / Direct Enterprise Network) — replaced by new 7 pillars

### 2. Home Page (src/app/page.tsx) — REBUILT
- Hero: new title1 + title2 (saffron gradient line 2); alternate-language accent tag (jptag in EN, entag in JP); subtitle = catchphrase
- Stats: updated to working-hub positioning (50K+ INR/mo / 7 Pillars / 2 Bases / 100+ Network Partners)
- Added NEW IndiaMapMini SVG component: India silhouette + 6 cities, Hyderabad as glowing hub with pulse animation
- Two-column stats+map split layout (4 stat cards left, India map card right with glass-dark frame)
- Kept: LogoMarquee, Executive Overview (3 preview cards), CTA Banner

### 3. About Page (src/app/about/page.tsx) — REBUILT
- PageHero: "From India Entry Spark / to Talent Development" or 「インド展開の / きっかけ作りから育成まで」
- Section 1 — Core Purpose & Vision (NEW): 3 horizontal pillar cards with large numeral watermarks (01/02/03), alternating crimson/saffron accent, gradient icon badges (Rocket/GraduationCap/HandHeart)
- Section 2 — Strategic Locations (NEW): 2 glass-dark cards on midnight bg. Hyderabad (saffron, Main Base, Launched June 2026, "Next Bangalore", 3 features). Gurgaon (crimson, Sub Base, In Preparation, Delhi NCR Business Core, 3 features). Legend below.
- Section 3 — Company Story: numbered side index (01 Origin / 02 Inauguration / 03 Today) on desktop, paragraph markers on mobile; 3 paragraphs + Tanji pull-quote
- Section 4 — Mission & Vision: two cards (crimson/saffron top borders), updated bodies for new positioning
- Section 5 — Core Values: 4-card grid with vertical accent bars on left
- Removed old Milestones Timeline section (not in spec)

### 4. Why J-Gate Page (src/app/why-jgate/page.tsx) — REBUILT
- PageHero: "The Strategic / Investment Advantage" or 「戦略的投資としての / 優位性」
- Section 1 — Competitive Comparison Table (NEW): REAL 4-col × 9-row table from Slide 10. Built CellType system (check/cross/good/warn/text) with lucide icons (Check/X/CircleDot/Triangle). J-Gate column highlighted with crimson accent border, gradient bg tint, "Recommended" badge. Responsive: desktop = 5-col grid (label + 4 cells); mobile = horizontal-scroll with sticky first column + scroll hint.
- Section 2 — 7 Core Value Pillars (NEW): vertical staggered list (not grid) with alternating left/right reveals. Each pillar = glass-dark card with large opacity-10 numeral watermark + gradient icon badge with small numeral chip overlay + title + description. 7 pillars cover all of Slide 11. Summary card below with 2-4 persons/company · 7 pillars total · 100% JP-language support.
- Section 3 — Corporate Testimonials (kept): 3 glass-dark cards on midnight with 5-star saffron ratings
- Closing CTA (kept): "Experience the J-Gate Membership Difference" with Download Brochure + Explore Services links

## Design Compliance
- Every section uses a UNIQUE layout (no repetitive card grids across sections):
  - Home: split stats+map layout
  - About Section 1: horizontal pillar cards with numeral watermarks
  - About Section 2: two-column glass-dark cards with side legend
  - About Section 3: numbered side index narrative
  - About Section 5: 4-card grid with vertical accent bars
  - Why Section 1: 5-column comparison table
  - Why Section 2: vertical staggered list with alternating direction
  - Why Section 3: 3-column testimonial cards
- section-pad + container-jg rhythm throughout
- Alternating backgrounds: bg-ivory / bg-ivory-warm / bg-navy / bg-midnight
- Reveal with delays + variant="left"/"right" for directionality
- lift-card hover effects on interactive cards
- Fully responsive (mobile-first, sm/md/lg breakpoints)
- ✓/✗/◎/△ symbols preserved exactly from PDF

## Verification
- `bun run lint` — clean (0 errors, 0 warnings)
- All 3 routes return 200:
  - `/` → 60ms render
  - `/about` → 72ms render
  - `/why-jgate` → 85ms render
- Content verified via curl grep:
  - Home: "Birth of a Dedicated" + "Working Hub for Japanese Companies" + 「日本企業専用のワーキングハブ誕生」 + "right answer" + "Indobox India" + "Cyber Gateway"
  - About: "きっかけ作り" + "人材育成" + "ビジネス連携" + "Strategic Locations" + "Opportunity Creation" + "Hyderabad" + "Gurgaon" + "Next Bangalore" + "In Preparation"
  - Why: "J-Gate vs The Alternatives" + "50,000 INR" + "¥500,000" + "Workspace Access" + "Japan Desk Consultations" + "End-to-End Company Setup" + "7 Core Value" + ◎ + △ markers

## Artifacts Updated/Created
- `src/lib/i18n.tsx` — UPDATED (hero keys + 80+ new about/why keys, removed old why.p1-4)
- `src/app/page.tsx` — REBUILT (new hero + India map + updated stats)
- `src/app/about/page.tsx` — REBUILT (new 6-section structure)
- `src/app/why-jgate/page.tsx` — REBUILT (comparison table + 7 pillars + testimonials)

## Bilingual Quality
All Japanese content uses proper business Japanese (not machine translation):
- きっかけ作り, 人材育成, ビジネス連携 (Slide 2 pillars)
- 戦略的ロケーション, 主拠点, サブ拠点, 準備中, 「ネクスト・バンガロール」 (Slide 3)
- 比較一覧表, 対象顧客, 月額費用, 物理拠点, 常駐日本語専門家, 実務サポート, 日本語サポート, 採用支援, ネットワーク, 費用評価 (Slide 10)
- 戦略投資として最適, 非常に高額, 極めて低額 (Slide 10 ◎/△ markers)
- ワークスペースアクセス, インフラ利用, ジャパンデスク相談, エンドツーエンド設立支援, 専門家ネットワーキング, インド勉強会, 採用支援・現地サービス (Slide 11)
- 給与計算・アウトソーシング・直接採用・翻訳通訳・食事手配（イタリアン・中華・和食） (Slide 11 pillar 7 detail)
- インド進出の「正解」を、ここから (Slide 1 catchphrase)
- 「日本企業専用のワーキングハブ誕生」 (Slide 1 main title)
