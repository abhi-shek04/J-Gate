---
Task ID: M-B
Agent: full-stack-developer
Task: Build Blogs, Contact, Auth/Brochure dedicated pages (3 dedicated Next.js App Router pages for the J-Gate multi-page site)

Work Log:
- Read worklog.md (Tasks 1–7 + M-A) for full project context. Reviewed existing infrastructure:
  • i18n system at @/lib/i18n (useI18n → { lang, t, tx }) — t() uses global dictionary, tx() for inline bilingual content.
  • PageHero at @/components/jgate/page-hero — dark midnight hero with torii watermark, used for /blogs and /contact.
  • Photo + useLightbox + LightboxProvider at @/components/jgate/photo — for gallery with gradient fallbacks.
  • Shared Reveal + Eyebrow at @/components/jgate/shared.
  • BrochureModal pattern at @/components/jgate/brochure-modal — reused GoogleIcon SVG and country-code selector pattern.
  • Design tokens: bg-ivory, bg-ivory-warm, bg-navy, bg-midnight, bg-pearl, text-ink, text-crimson, text-saffron, text-slate, text-mist, glass-dark, glass-frost, shadow-card, lift-card, section-pad, container-jg, pattern-asanoha-dark, pattern-asanoha-navy, text-gradient-saffron, btn-shine, animate-ping.
  • Existing /api/brochure/submit route (Prisma + admin email) reused for auth/brochure submission.
  • Layout.tsx already wraps with I18nProvider + BrochureProvider + LightboxProvider; Navbar already handles /auth/brochure as transparent-overlay page.
- Created 3 new page directories: src/app/blogs/, src/app/contact/, src/app/auth/brochure/.

- Built /blogs (src/app/blogs/page.tsx):
  • PageHero with bilingual title "Insights & Life / at J-Gate" + "J-Gateの日常" (saffron gradient).
  • Tab Switcher: pill toggle, role=tablist, role=tab, aria-selected. Two tabs: "Industry Insights" + "Life & Culture" using existing i18n keys blogs.tab1 / blogs.tab2.
  • Tab 1 — Industry Insights: 6 article cards (2 rows × 3 cols on lg, 2 cols on md, 1 col on mobile).
    Articles covered (with proper business Japanese):
    1. Career Guide — "Why Indian Engineers Thrive in Japanese Enterprises" (uses existing i18n blogs.b1.* keys)
    2. JLPT Prep — "JLPT N2 in 18 Months: A Realistic Roadmap" (uses existing blogs.b2.* keys)
    3. Tech in Tokyo — "Tech in Tokyo: What Indian Engineers Need to Know" (uses existing blogs.b3.* keys)
    4. Visa Updates — "Visa Updates 2026: The Engineer Visa Guide" (inline bilingual; JP uses 技術・人文知識・国際業務 visa name + COE)
    5. Business Culture — "Business Japanese: 報連相 (Hōrensō) for Engineers" (inline bilingual; explains 報告・連絡・相談)
    6. Engineering — "From Hyderabad to Tokyo: A Success Story" (inline bilingual)
    Each card: gradient header w/ numeric watermark + pattern dots, category pill with icon (Bookmark/FileText/TrendingUp/Plane/Sparkles), read-time with clock icon, title (hover→crimson), excerpt, "Read More" with arrow.
  • Tab 2 — Life & Culture Gallery: 8-photo masonry (alternating heights h-72/h-48/h-56/h-72) with Photo component, gradient fallbacks (grad-office-main, grad-office-desks, grad-canteen-main, grad-office-meeting, grad-inauguration, grad-event, grad-canteen-japanese), bilingual hover label overlay + camera icon hint.
  • useLightbox().open(items, index) opens gallery — passes array of 8 PhotoItem with i18n labels (blogs.g1..g8).
  • Photo IDs exactly per spec: photo-blog-1..photo-blog-8.
  • Newsletter CTA strip (sm:flex-row, links to /auth/brochure).
  • Closing CTA section (bg-ivory) with Sparkles icon, 2 links (Download Brochure / Talk to Our Team).

- Built /contact (src/app/contact/page.tsx):
  • PageHero with bilingual title "Connect With / J-Gate" + "J-Gateに / 繋がる" (saffron gradient).
  • Two-column layout on bg-navy (lg:grid-cols-2):
    LEFT column:
    • 2 office cards (glass-dark, lift-card, hover border color):
      - Tokyo Office (crimson accent, JP flag, address 1-2-3 Marunouchi Chiyoda City Tokyo 100-0005 Japan, tokyo@j-gate.com, +81 3-1234-5678, Mon-Fri 09:00-18:00 JST).
      - Hyderabad Office (saffron accent, IN flag, address Cyber Gateway Hitech City Hyderabad Telangana 500081 India, hyderabad@j-gate.com, +91 40-1234-5678, Mon-Sat 09:30-18:30 IST).
      Each card: HQ badge, flag with shadow, name + city, address/email/phone/hours with accent icons; email + phone are mailto:/tel: links.
    • Contact form (glass-dark card): Name + Email (2-col row), Subject, Message, Submit (gradient crimson). Bilingual validation (name/email/message required). On submit → 600ms simulated network → success state with CheckCircle icon + "Thank you! We'll respond within 24 hours." + "Send another" button (resets form). Bilingual support footer.
    RIGHT column:
    • CSS map placeholder (grad-map bg + grid pattern + 4 roads as SVG lines + connecting arc between Tokyo & Hyderabad pins).
    • Tokyo pin (top-left): pulsing crimson dot with ping animation, building icon, "Tokyo Office" label + 🇯🇵 phone.
    • Hyderabad pin (bottom-right): pulsing saffron dot with ping animation, building icon, "Hyderabad Office" label + 🇮🇳 phone.
    • Center: "Japan–India Corridor" label with Plane icon + ~7,500km / 3.5h time-diff note.
    • Bottom-left chip: "Tokyo & Hyderabad" / "Two offices, one corridor".
    • Top-right compass "N" widget.
  • Response-time guarantee strip (bg-ivory-warm, 3 stat cards: 24h response / 2 offices / 100% human-answered).
  • Closing CTA (bg-ivory): "Prefer to Read First?" with 2 links (Download Brochure / Explore Services).

- Built /auth/brochure (src/app/auth/brochure/page.tsx) — full-page dark layout (NOT a modal):
  • Full-page bg-midnight with asanoha-dark pattern + radial ambient gradient + large ToriiWatermark.
  • Top: "Back to Home" link (ArrowLeft icon) — placed at pt-24 to clear the fixed navbar.
  • Centered card (max-w-lg, glass-dark, rounded-2xl, shadow-2xl, animate-in on mount).
  • Card header (gradient crimson→navy): JGateLogo + Brochure tag, H1 title + subtitle, trust row (Lock/Shield/FileText with bilingual labels "Encrypted" / "Never shared" / "PDF · 12 pages").
  • Google OAuth button (white bg with Google G SVG icon — full multicolor paths: #FFC107/#FF3D00/#4CAF50/#1976D2). On click: sets google-loading state for 1s, then prefills name/email fields + auto-checks consent. Bilingual "Connecting to Google..." loading state.
  • Divider: "Or register details manually" with bilingual divider text.
  • Manual form (noValidate, 6 fields):
    - Full Name (required) — error "お名前は必須です" / "Name is required"
    - Organization / University (required)
    - Corporate / Work Email (required, regex validation)
    - Contact / Phone (required) with country-code dropdown selector — 8 codes per spec: JP +81, IN +91, US +1, UK +44, SG +65, AU +61, DE +49, FR +33. Select has custom chevron SVG bg image.
    - Questions / Inquiries (optional textarea) — bilingual placeholder "If you have any specific questions, let us know..."
    - Privacy Policy checkbox (required) — accent-crimson
  • Validation: bilingual errors below each field if invalid (uses i18n brochure.err* keys + aria-invalid).
  • Submit: POST to /api/brochure/submit with { fullName, organization, email, phone (with country code prefixed), questions, consent, authMethod: "manual" }.
  • Loading state: spinner + "Processing..." (bilingual).
  • Error state: red banner with AlertCircle icon if API fails (errors.form).
  • Success state: CheckCircle icon (with glow ring), "Thank you! Your download is starting..." (bilingual), auto-download PDF via hidden anchor click after 500ms, "Download again" link (gradient button), 2-link row: "Register another" + "Back to Home" (links to /), and a saffron-bordered "Next step" callout suggesting reply-to-email for free 30-min consultation.
  • Card footer bar (border-top): bilingual note about unsubscribing.
  • Bottom helper text: "Operated by Indobox India Pvt. Ltd. · © 2026 J-Gate" + "Need help? Email tokyo@j-gate.com".

- Bilingual content: all visible text uses tx({ EN, JP }) inline bilingual helper for page-specific content (article excerpts, office hours, form labels/placeholders/errors, button labels, success messages, info chips). Reuses global i18n dictionary keys where they exist (nav.*, contact.*, brochure.*, blogs.*). Japanese is proper business Japanese — uses 技術・人文知識・国際業務ビザ, 報連相（ほうれんそう）, 報告・連絡・相談, 在留資格認定書（COE）, 暗号化済み, 外部共有なし, 随時更新情報, 配信停止.

- Verified all 3 pages return HTTP 200:
  • /blogs → 200 (compile 639ms)
  • /contact → 200 (compile 477ms)
  • /auth/brochure → 200 (compile 579ms)
- Verified content via curl grep — all 6 article titles render on /blogs; "Tokyo Office" + "Hyderabad Office" + "Send a Message" + "Japan–India Corridor" + "Marunouchi" render on /contact; "Continue with Google" + "Download the J-Gate Brochure" + "Or register details manually" + "Privacy Policy" + "Back to Home" render on /auth/brochure.
- bun run lint: 0 errors, 0 warnings (clean).
- dev.log shows successful compiles and renders for all 3 new routes, no runtime errors.

Stage Summary:
- Deliverable: 3 dedicated, premium, bilingual (JP/EN) page routes — Blogs, Contact, Auth/Brochure — for the J-Gate multi-page Next.js 16 application.
- Each page is a single "use client" page.tsx file exporting a default function:
  • /blogs uses PageHero + dual-tab pill switcher (Insights / Culture). Tab 1: 6 article cards in 2×3 grid with gradient headers, category pills with icons, read-times, bilingual titles/excerpts, hover lift-card. Tab 2: 8-photo masonry (alternating heights) with hover label + camera hint + click-to-open lightbox.
  • /contact uses PageHero + 2-column layout. Left: 2 office cards (Tokyo crimson / Hyderabad saffron) + glass-dark form card with bilingual validation + success state. Right: CSS map placeholder with grid pattern, roads, pulsing Tokyo (crimson) + Hyderabad (saffron) pins, connecting arc, corridor label. Plus 3-stat response-time strip + closing CTA.
  • /auth/brochure uses full-page bg-midnight layout with asanoha pattern + torii watermark (NO PageHero). Centered max-w-lg glass-dark card: Google OAuth button with multicolor G SVG, divider, 6-field manual form with country-code selector + bilingual validation, submit → /api/brochure/submit, success state with CheckCircle + auto-download PDF + "Register another" + "Back to Home" links + next-step callout.
- All pages integrate cleanly with existing Navbar (already had /blogs + /contact + transparent overlay handling for /auth/brochure), Footer, layout.tsx providers (I18nProvider, BrochureProvider, LightboxProvider), and existing /api/brochure/submit endpoint (Prisma + admin email).
- Design language consistency: section-pad + container-jg for rhythm, Reveal with delays for scroll animations, lift-card for hover effects, alternating bg-ivory/bg-ivory-warm light sections + bg-navy/bg-midnight dark sections with pattern-asanoha-* textures, glass-dark for dark-mode cards, text-gradient-saffron for hero highlights, btn-shine + shadow-crimp for crimson CTAs.
- All text bilingual via tx({ EN, JP }) — proper business Japanese (報連相, 在留資格認定書, 暗号化済み, 配信停止, 時差3.5時間, 二つのオフィス一つの回廊, etc.), not machine-translated.
- Fully responsive: mobile-first, sm/md/lg/xl breakpoints, touch-friendly 44px+ targets, 1-col mobile / 2-col tablet / 3-col desktop article grid, single-column form on mobile / 2-col on sm+.
- Accessibility: semantic HTML (section, article, figure, figcaption, form, label, fieldset-style grouped inputs), ARIA roles (tablist, tab, alert, dialog), aria-selected, aria-invalid, aria-label on icon-only buttons, alt text on all images, keyboard-navigable Photo component (Tab + Enter/Space opens lightbox).
- Artifacts: src/app/blogs/page.tsx (NEW), src/app/contact/page.tsx (NEW), src/app/auth/brochure/page.tsx (NEW).
- Work record written to /agent-ctx/M-B-full-stack-developer.md.
