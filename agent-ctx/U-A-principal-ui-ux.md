---
Task ID: U-A
Agent: principal-ui-ux
Task: Redesign Home, About, Why J-Gate pages with CLEAN, PROFESSIONAL, NON-MESSY Bento-Grid / Multi-Card layouts. Zero context mixing per card, high scannability, bold anchor keywords, metric badges, tables not text walls.

Work Log:
- Read /home/z/my-project/worklog.md (Tasks 1–7 + M-A + M-B + M-C + C-A + C-B + C-C + C-D) for full project context.
- Reviewed existing infrastructure:
  - i18n system at @/lib/i18n (useI18n → { lang, t, tx, toggle }) with all PDF-real content keys (about.purpose.*, about.hyderabad.*, about.gurgaon.*, why.compare.*, why.row1-9.*, why.p1-7.*).
  - PageHero at @/components/jgate/page-hero (eyebrowKey/titleNode/subtitleKey props, dark hero 44vh).
  - shared Reveal/Eyebrow/SectionHeading at @/components/jgate/shared.
  - LogoMarquee at @/components/jgate/logo-marquee (light/dark variant, infinite scroll).
  - JGateLogo from @/components/jgate/icons — size="lg" h-24 / "md" h-16 / "sm" h-12.
  - Design tokens (bg-ivory/bg-ivory-warm/bg-navy/bg-midnight/bg-pearl, text-ink/crimson/saffron/slate/mist, glass-dark, shadow-card, lift-card, section-pad 80/56/40px, container-jg, pattern-asanoha-*, font-serif-jp, font-inter, btn-shine, text-gradient-saffron).
  - Existing /about and /why-jgate pages reviewed — confirmed cluttered Company Story section + vertical staggered 7-pillar list (mixing layouts) need to be tightened into clean bento grids.
- Rebuilt Home page (src/app/page.tsx):
  • Hero: bg-midnight with torii watermark + particles + Hyderabad skyline silhouette. Centered stack: JGateLogo size="lg" → bilingual title (line 1 + saffron gradient line 2) → alternate-language accent tag → catchphrase subtitle → 2 CTA buttons (Download Brochure + Explore Services). Removed: 3 floating glass badges + extra info row (cluttered). Hyderabad/Gurgaon focus shown as a clean location pill row beneath CTAs.
  • Compact Logo Wall: bg-ivory, py-12 (tighter), single Reveal heading + LogoMarquee variant="light". Removed verbose subtitle.
  • Quick Stats: bg-navy + asanoha-navy pattern + dual radial gradient. 4 clean metric badges in a row (sm:grid-cols-2 lg:grid-cols-4): 100+ Partners, 500+ Engineers, 94% JLPT, 92% Retention. Each card: glass-dark, large saffron-gradient numeral, uppercase mist label, lift-card hover. NO India map sidebar (was context-mixing). Pure data-only section.
  • Executive Overview: bg-ivory-warm. 3 clean cards (md:grid-cols-3): Core Purpose & Locations (/about), Strategic Advantage (/why-jgate), Service Verticals (/services). Each card: gradient icon badge, H3 title, 1-line desc, "Learn More →" link. lift-card hover.
  • CTA Banner: bg-midnight + asanoha-dark + crimson radial. Single centered CTA: H2 + subtitle + crimson gradient button → /auth/brochure.
- Rebuilt About page (src/app/about/page.tsx):
  • PageHero: eyebrowKey=about.eyebrow ("About J-Gate"); titleNode = "From India Entry Spark / to Talent Development" (EN) or "インド展開の / きっかけ作りから育成まで" (JP) with saffron gradient on line 2; subtitleKey=about.title.
  • Section 1 — Core Purpose (bg-ivory): Header (eyebrow + H2 + subtitle). 3-col bento grid of pillar cards. Each card: gradient icon badge (Rocket crimson / GraduationCap saffron / HandHeart crimson), tag label "Pillar 01/02/03" (uppercase crimson or saffron), JP accent label, EN/JP title, 1-line description. NO mixing. Removed: large numeral watermarks + alternating accent (was scattered).
  • Section 2 — Strategic Locations (bg-midnight + asanoha-dark + dual radial): Header. 2 clean cards side-by-side (lg:grid-cols-2). Hyderabad card: saffron accent top border, Building2 icon, "Main Base" tag, "Launched June 2026" status badge, "Next Bangalore" nickname, description, 3-bullet feature list with CheckCircle2 saffron icons. Gurgaon card: crimson accent top border, Building2 icon, "Sub Base" tag, "In Preparation" status badge, Delhi NCR Business Core nickname, description, 3-bullet feature list with CheckCircle2 crimson icons. Below: 2-item legend (saffron dot + Hyderabad Main Base, crimson dot + Gurgaon Sub Base). NO other content in this section.
  • Section 3 — Mission & Vision (bg-ivory-warm): Header. 2 clean cards side-by-side (md:grid-cols-2). Mission card: crimson accent top border, Target icon, "Our Mission" title, 2-sentence body, "What we do today" footer label. Vision card: saffron accent top border, Eye icon, "Our Vision" title, 2-sentence body, "What we build toward" footer label. NO mixing.
  • Section 4 — Core Values (bg-ivory): Header. 4-card grid (sm:grid-cols-2 lg:grid-cols-4). Each card: vertical accent bar on left (alternating crimson/saffron), gradient icon badge, title (Integrity/Cultural Fluency/Technical Excellence/Long-Term Partnership), 1-line description. NO mixing. Tight padding p-7.
  • Closing CTA: bg-ivory, Sparkles icon, H2 + subtitle, 2-link CTA (Why J-Gate crimson gradient button, Explore Services outline button).
  • REMOVED: Company Story section (3-paragraph narrative with side index + pull quote) — was context-mixing with core purpose; About now strictly groups: Purpose → Locations → Mission/Vision → Values → CTA.
- Rebuilt Why J-Gate page (src/app/why-jgate/page.tsx):
  • PageHero: eyebrowKey=why.eyebrow; titleNode = "The Strategic / Investment Advantage" (EN) or "戦略的投資としての / 優位性" (JP) with saffron gradient on line 2; subtitleKey=why.subtitle.
  • Section 1 — Competitive Superiority Matrix (bg-ivory): Header. Clean 5-column grid table (label + 4 data columns). J-Gate column highlighted with crimson top border, crimson tinted bg, "Recommended" badge. Header row has uppercase column caps. 9 data rows with colored symbols:
    - ✓ = green check (success color) — J-Gate physical base, J-Gate resident JP expert, J-Gate hands-on support, etc.
    - ✗ = red cross (crimson color) — Consulting no base, Coworking no JP expert, etc.
    - ◎ = gold circle-dot (saffron color) — J-Gate optimal cost assessment, Public orgs very cheap
    - △ = slate triangle warn — Consulting high cost JP support, Coworking no business support
    Symbol + text in each cell for high scannability. Mobile: horizontal-scroll wrapper with sticky first column, scroll hint.
  • Section 2 — 7 Core Value Pillars (bg-navy + asanoha-navy + dual radial): Header. Clean grid layout (sm:grid-cols-2 lg:grid-cols-4) with 7 cards in a 4+3 arrangement (4 on top row, 3 on bottom row centered via lg:col-start offset or simple wrap). Each card: glass-dark, gradient icon badge with small numeral chip overlay (-right-1.5 -top-1.5), H3 title, 1-line description. NO mixing with testimonials or other content. Below: "Pillars in numbers" summary strip (2-4 persons/company · 7 pillars · 100% JP support).
    - Replaced vertical staggered list (was mixing alternating left/right reveal + large numerals) with clean uniform grid.
  • Section 3 — Corporate Testimonials (bg-midnight + asanoha-dark + saffron radial): Header. 3 clean testimonial cards (lg:grid-cols-3). Each card: glass-dark, QuoteMark in top-right, 5 saffron stars, italic quote body, divider, gradient avatar circle with initials, name + role. NO mixing.
  • Closing CTA (bg-ivory): ShieldCheck icon, H2 + subtitle, 2-link CTA (Download Brochure crimson gradient + Explore Services outline).

Stage Summary:
- Deliverable: 3 redesigned pages (Home, About, Why J-Gate) with CLEAN, PROFESSIONAL, NON-MESSY Bento-Grid / Multi-Card architecture. Zero context mixing — each card contains ONLY its domain data.
- Home: Hero (logo + dual title + 2 CTAs + Hyderabad/Gurgaon focus) → Compact Logo Wall → Quick Stats (4 clean metric badges: 100+ / 500+ / 94% / 92%) → Executive Overview (3 cards linking /about, /why-jgate, /services) → CTA Banner.
- About: PageHero → Section 1 Core Purpose (3-pillar bento grid, no mixing) → Section 2 Strategic Locations (2 cards: Hyderabad saffron Main Base + Gurgaon crimson Sub Base, no other content) → Section 3 Mission & Vision (2 cards, no mixing) → Section 4 Core Values (4-card grid, no mixing) → CTA.
- Why J-Gate: PageHero → Section 1 Competitive Superiority Matrix (4-col table, crimson J-Gate column with Recommended badge, ✓/✗/◎/△ colored symbols, mobile horizontal scroll with sticky first col) → Section 2 7 Core Value Pillars (clean 4+3 grid, no mixing) → Section 3 Testimonials (3 cards, no mixing) → CTA.
- Design compliance:
  • Every section is tightly grouped by domain — no card carries content outside its core purpose.
  • Card radius 12px (rounded-lg), subtle borders (border-crimson/8 or border-slate-200), white bg (bg-pearl/bg-ivory), lift-card hover (translateY -4px + shadow-hover).
  • H1 32px+ bold bilingual, H2 20px semibold, body 14px regular with high line-height.
  • section-pad (80/56/40px) + container-jg (1280px max) rhythm throughout.
  • Bilingual JP+EN via tx() inline helper using REAL PDF content (きっかけ作り/人材育成/ビジネス連携, Hyderabad/Gurgaon, ◎/△ markers preserved, 7 pillars exact titles).
  • Mobile-first responsive (sm/md/lg breakpoints); comparison table sticky first column on mobile; pillar grid 1→2→4 cols.
  • Bold anchor keywords (Main Base / Sub Base / Recommended / Pillar 01/02/03 / etc.) via uppercase tracking labels.
  • Metric badges (100+ / 500+ / 94% / 92%) with saffron-gradient numerals + uppercase mist labels — high scannability, zero text walls.
- Verification: bun run lint clean (0 errors, 0 warnings). All 3 routes return 200.
- Artifacts: src/app/page.tsx (REBUILT), src/app/about/page.tsx (REBUILT), src/app/why-jgate/page.tsx (REBUILT).
- Work record written to /agent-ctx/U-A-principal-ui-ux.md.
