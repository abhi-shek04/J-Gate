# Task C-B: Update Services/Team/Pricing/Contact with real PDF content

**Agent**: full-stack-developer
**Task ID**: C-B
**Date**: 2026-08-11

## Objective
Update 4 pages of the J-Gate multi-page Next.js 16 application with REAL content from the client's PDF (Slides 4, 5, 6, 9, 12, 13). This includes rebuilding Services, Team, Contact pages AND creating a NEW Pricing/Membership page.

## Real PDF Content Mapped

### Slide 4 → Services page Section 1 + 2 (Business Expansion Support + Indobox Academy)
- Header: 「Indoboxならではの包括的進出支援・人材育成」 / "Indobox's Unique Comprehensive Market Entry Support & Talent Development"
- 5 Business Expansion services (Corporate Registration, Talent/Payroll, Sales/Marketing, Interpretation/Back-office, End-to-End)
- Indobox Academy (lecturer Tomio Isogai, facilitator Daisuke Tanji, online 60min, 1-2 months)

### Slide 5 → Services page Section 3 (Indo-Japan Hybrid Management)
- Header: 「[ハイデラバード] 日印ハイブリッドの強力な運営体制」
- Indobox responsibilities (4 items)
- Genesys responsibilities (4 items)
- Living Support Services (4 items: housing, FRRO, hotels, daily support)

### Slide 6 → Services page Section 4 (Facility Features)
- Header: 「ビジネスを加速させる充実の設備とインフラ」
- 6 facility cards: Workspace, Infrastructure, Meeting Rooms, Cafeteria, 24/7 Access, Security

### Slide 9 → NEW Pricing page
- Header: 「[ハイデラバード] メンバーシップ料金プラン」
- Context: ¥15M–¥20M annual cost vs J-Gate membership
- 3 Plans: Satellite (15,000 INR), Standard (50,000 INR — MOST POPULAR), Advance (120,000 INR — FLAGSHIP)
- Notes: base fees only, INR billing with JPY settlement, GST excluded

### Slide 12 → Team page Section 3 + 4 (Board of Advisory + Ecosystem Partners)
- 5 Advisors: Srinivas Rao Mahankali (MSR), Sujit Jagirdar, Dr. Uday B. Desai, Dr. Viinay Sarikonda, Tomio Isogai
- 6 Ecosystem Partners: Kodryx.ai, YANC, Daakia, FINGERPRINT FILMS, MXC, Hyderabad Japan Club

### Slide 13 → Team page Section 1 + 2 + Contact page
- Header: 「インドとの連携で、貴社のビジネスに新たな可能性を。」
- 4 Operations Team: Daisuke TANJI (Director), Mariko HANAOKA (Director), Dheeraj YANNETI (Community Manager), Abhishek BUDURU (Intern/Tech)
- Contact: contact@indobox.co.jp + phones (+91-9910360648 Tanji, +91-98498 11543 Dheeraj)

## Implementation

### i18n Dictionary Updates (src/lib/i18n.tsx)
- Added `nav.pricing` key ("Pricing" / "料金プラン")
- Updated `services.eyebrow` → "Services" / "サービス"
- Updated `services.title` → "Indobox's Unique Comprehensive Market Entry Support & Talent Development" (full bilingual)
- Updated `services.subtitle` → end-to-end operating system messaging
- Updated `team.eyebrow` → "Team" / "チーム"
- Updated `team.title` → "The Minds Behind J-Gate" / "J-Gateを支える人々"
- Updated `team.subtitle` → "Unlocking new possibilities..." bilingual catchphrase
- Updated `contact.eyebrow` → "Contact" / "お問い合わせ"
- Updated `contact.title` → "Connect With J-Gate" (kept)
- Updated `contact.subtitle` → catchphrase + J-Gate operations team reference
- Updated `contact.form.title` → "Direct Inquiry" / "直接お問い合わせ"
- Updated `contact.form.success` → "...in Japanese." / "...日本語でご返信します。"
- Added `pricing.eyebrow`, `pricing.title`, `pricing.subtitle` keys (new section)

### Navbar + Footer Updates
- Added `/pricing` link to NAV_LINKS in navbar.tsx (between /team and /blogs)
- Added `pricing` entry to NAV_LINKS in footer.tsx
- Updated footer contact info: email → contact@indobox.co.jp, phone → +91-9910360648 (Tanji), address → Cyber Gateway, Hitech City, Hyderabad

### Services Page (src/app/services/page.tsx) — REBUILT
4 sections using unique layouts:
1. **Business Expansion Support** (bg-ivory) — vertical staggered list with alternating left/right reveal, large numeral watermarks (8rem), alternating crimson/saffron accent gradients, 5 service cards with icon + JP accent label + description + accent bottom bar. End-to-end callout box (dashed border) at bottom.
2. **Indobox Academy** (bg-midnight + asanoha-dark pattern) — center header + 4-tile info grid (Format/Duration/Frequency/Curriculum) + 2 large cards side-by-side: Lecturer (Tomio Isogai, saffron accent, 磯貝 富雄 氏) and Facilitator (Daisuke Tanji, crimson accent, 丹治 大佑), each with bio.
3. **Indo-Japan Hybrid Management** (bg-ivory-warm) — 2-column responsibility cards (Indobox crimson / Genesys saffron) each with header chip + bio + 4-item checklist + Living Support strip below (4 small cards: housing, FRRO, hotels, daily support).
4. **Facility Features** (bg-ivory) — 3-col grid of 6 facility cards, alternating crimson/saffron accents, large opacity-numeral watermark top-right, icon badge, JP accent label below EN title, hover gradient blob, accent bottom bar. Bottom callout box (saffron tinted) explaining "Enterprise-grade infrastructure, included — not invoiced separately."
5. **Closing CTA** (bg-navy) — Sparkles icon, "Build Your India Base With Indobox", 2-link CTA (Contact Us / View Membership Plans), quick contact strip with email + phone.

### Team Page (src/app/team/page.tsx) — REBUILT
5 sections:
1. **Header Message band** (bg-navy) — Sparkles icon + "Unlocking new possibilities..." bilingual catchphrase + attribution.
2. **J-Gate Operations Team** (bg-ivory) — 4-card grid (sm:2 lg:4) with circular Photos, country flags (🇯🇵/🇮🇳), name (e.g., "Daisuke TANJI"), JP accent (e.g., "丹治 大佑"), role badge (crimson/saffron alternating), bio description. Alternating accent top-bar (crimson/saffron).
3. **Board of Advisory** (bg-ivory-warm) — 5 advisor cards + 1 decorative closure card (6 total in 3-col grid). Each advisor card has gold top-border accent (from-saffron via-saffron-light to-[#c9881a]), circular Photo, name, JP accent name, role (uppercase saffron), bio description, footer icon chip with advisor index. Closure card has tri-color top bar + Sparkles icon + "Five advisors. One mandate: rigour." message.
4. **Ecosystem Partners** (bg-navy) — 6 partner tiles in 3-col grid on glass-dark, each with icon badge, partner name (e.g., "Kodryx.ai"), JP accent (e.g., "コドリクス・エーアイ"), uppercase tag (e.g., "DATA INTELLIGENCE"), description. Alternating saffron/crimson accents. Hover-reveal bottom accent bar.
5. **Closing CTA** (bg-ivory) — Building2 icon + "Talk to the Team That Builds the Bridge" + 2-link CTA (Contact Us / Explore Services).

### Pricing Page (src/app/pricing/page.tsx) — NEW
4 sections:
1. **Context Banner** (bg-ivory) — TrendingDown icon + "Why These Plans, Why Now" eyebrow + "Designed as a high cost-performance strategic investment" + 2-tile cost comparison strip: ¥15M–¥20M (strike-through crimson) vs 15,000 INR/mo (saffron highlighted). Decorative gradient blob.
2. **3 Pricing Cards** (bg-ivory-warm) — lg:grid-cols-3 with Standard plan centered + elevated (lg:-translate-y-4 lg:scale-[1.03] lg:shadow-[0_20px_60px_rgba(188,26,44,0.18)]).
   - Satellite Plan: slate accent border, Building2 icon, 15,000 INR, 3 features checklist (✓), border-only CTA.
   - Standard Plan: crimson accent border, Star icon, "MOST POPULAR" badge top-right, 50,000 INR, 5 features (Workspace unlimited up to 4, full infra, Yorozu consultation, study sessions, network introductions), gradient-filled CTA.
   - Advance Plan: saffron accent border, Crown icon, "FLAGSHIP" badge, 120,000 INR, 5 features (Everything in Standard + early-phase consulting + monthly business meeting accompaniment + priority invitations + detailed partner matching), gradient-filled CTA.
   - Below cards: 3-stat comparison strip (People per plan / Service depth / Best for).
3. **Notes section** (bg-ivory) — AlertCircle icon header + "Read Before You Subscribe" + 3 detailed note items with saffron circular icons: base fees only (Banknote icon), INR billing/JPY settlement (¥ icon), GST excluded (GST text icon). Each with bold "label. " prefix + detailed bilingual explanation.
4. **Closing CTA** (bg-midnight + asanoha-dark) — Satellite icon + "Ready to Choose Your Plan?" + 2-link CTA (Contact Us / Compare Services) + quick contact strip (email + phone).

### Contact Page (src/app/contact/page.tsx) — REBUILT
5 sections:
1. **Header Message band** (bg-navy) — Sparkles icon + "Unlocking new possibilities..." bilingual catchphrase + "From the J-Gate Operations Team, Hyderabad" attribution.
2. **Two-column: Contact cards + Form | Map** (bg-midnight) — Left: 2 contact cards (Email crimson with note about Japanese support; Phone saffron with sub-lines for Tanji +91-9910360648 and Dheeraj +91-98498 11543) + Direct Inquiry form (Name/Email/Subject/Message + validation + success state). Right: CSS map with grid pattern, roads, Tokyo pin (small, crimson), Hyderabad pin (large pulsing saffron, primary base), corridor arc, compass, "Japan-India Corridor" label with 7,500km/3.5h info, bottom-left info chip showing Hyderabad primary base launched June 2026.
3. **Operations Team strip** (bg-ivory-warm) — 4-card grid linking to /team with names, JP accents, roles, phone numbers where applicable. "Meet the full team →" link at bottom.
4. **Response-time guarantee strip** (bg-ivory) — 3-stat strip (24h response / JP all responses / 100% human).
5. **Closing CTA** (bg-ivory-warm) — "Prefer to Read First?" + 2-link CTA (Download Brochure / View Pricing Plans).

## Design Compliance
- Every section uses a UNIQUE layout (vertical staggered list / glass-dark cards on midnight / 2-column responsibility / 3-col facility grid / 4-card ops team / 6-card partners grid / 3-card pricing with elevated center / context banner with cost comparison / 2-col contact form with map).
- section-pad + container-jg rhythm throughout.
- Reveal with delays + variant="left"/"right" for directionality on key cards.
- lift-card hover effects on all interactive cards.
- Alternating bg-ivory / bg-ivory-warm / bg-navy / bg-midnight sections for visual rhythm.
- All text bilingual via tx({EN, JP}) inline helper — proper business Japanese throughout (法人登記・登録住所・名義人ディレクター, 人材育成・派遣・給与管理, 営業・マーケティング支援, 通訳支援・バックオフィス代行, 法人設立から日常実務まで一貫支援, インドビジネスに豊富な経験を持つ専門家, 日印ハイブリッドの強力な運営体制, 諮問委員会, エコシステムパートナー, メンバーシップ料金プラン, 戦略的投資, 法人設立代行手数料, 人材紹介紹介手数料, インドルピー, 物品サービス税, etc.).
- Premium Japanese corporate minimalism preserved.
- Mobile-first responsive (sm/md/lg/xl breakpoints), touch-friendly (≥44px touch targets), semantic HTML (article/section/h2/h3/ul/li), ARIA labels, alt text.

## Verification
- `bun run lint`: 0 errors, 0 warnings (clean).
- All 4 routes returned 200 (services, team, pricing, contact) — verified via curl.
- Content verified via curl grep:
  - /services: 24/7 Access, Daisuke Tanji, Dedicated Workspace, End-to-End Support, Genesys, Hybrid Operating Structure, Indobox, Indobox Academy, Living Support, Talent Development Dispatching, Tomio Isogai.
  - /team: Abhishek BUDURU, Board of Advisory, Daakia, Daisuke TANJI, Dheeraj YANNETI, Ecosystem Partners, FINGERPRINT FILMS, Hyderabad Japan Club, Kodryx, MXC, Mariko HANAOKA, Srinivas Rao Mahankali, Sujit Jagirdar, Tomio Isogai, Uday B. Desai, Viinay Sarikonda, YANC.
  - /pricing: 120,000, 15,000, 15M, 20M, 50,000, Advance Plan, FLAGSHIP, GST, INR, JPY, MOST POPULAR, Satellite Plan, Standard Plan, Yorozu.
  - /contact: 98498, 9910360648, Abhishek, Connect With J-Gate, Cyber Gateway, Dheeraj, Direct Inquiry, Mariko, Tanji, contact@indobox.co.jp, Unlocking new possibilities for your business through collaboration with India.
- No runtime errors in dev.log.

## Stage Summary
- Deliverable: Updated i18n dictionary + rebuilt 3 pages (Services, Team, Contact) + 1 NEW page (Pricing) with REAL PDF content from Slides 4, 5, 6, 9, 12, 13.
- Pricing page is a new route added to navbar (/pricing) and footer nav links.
- All 4 pages maintain premium Japanese corporate minimalism with unique section layouts (no repetitive grids), alternating bg colors, Reveal animations with directional variants, lift-card hovers, and fully bilingual content via tx() inline helper.
- Real PDF content faithfully preserved: 5 expansion services, Academy with lecturer/facilitator, Indobox vs Genesys responsibilities + Living Support, 6 facility cards, 3 pricing plans with exact INR prices + Yorozu consultation + business meeting accompaniment, 5 advisors with exact credentials, 6 ecosystem partners, 4 operations team members with exact phone numbers + email.
- Artifacts: src/lib/i18n.tsx (UPDATED — added nav.pricing + pricing.* + updated services/team/contact keys), src/components/jgate/navbar.tsx (UPDATED — added /pricing link), src/components/jgate/footer.tsx (UPDATED — added pricing link + real contact info), src/app/services/page.tsx (REBUILT — 4 sections + CTA), src/app/team/page.tsx (REBUILT — 5 sections including new catchphrase band), src/app/pricing/page.tsx (NEW — 4 sections), src/app/contact/page.tsx (REBUILT — 5 sections including new catchphrase band + operations team strip).
- Work record written to /agent-ctx/C-B-full-stack-developer.md.
