# Task ANIM-1 — J-Gate Home Page Animation Enhancements

**Agent**: Z.ai Code (main)
**Task ID**: ANIM-1
**Date**: 2026-08-13
**Target File(s)**:
- `/home/z/my-project/src/app/globals.css` (CSS additions)
- `/home/z/my-project/src/components/jgate/company-marquee.tsx` (NEW component)
- `/home/z/my-project/src/app/page.tsx` (Home page rewrite)

## Summary

Enhanced the J-Gate home page with creative animations and premium co-working space content per Task ANIM-1 spec. All work was completed by the main agent directly (no subagents delegated).

## What Was Built

### 1. NEW CSS utilities (globals.css)
- `.jg-gradient-shift` keyframe + utility class — 9s ease-in-out infinite `background-position` shift (0% → 100% → 0%) for the animated crimson→saffron→crimson gradient line.
- `.feature-card` + `.feature-icon-wrap` — hover transition (translateY -6px + saffron border + saffron glow box-shadow + icon scale 1.1) for workspace feature cards.
- `.jg-divider` + `.jg-divider-torii` — positioning wrappers for the asanoha section dividers with centered torii gate icon.

### 2. NEW Component: CompanyMarquee
**File**: `/home/z/my-project/src/components/jgate/company-marquee.tsx`

Premium "ticker tape" of company names as large stylized text:
- 2 rows scrolling in opposite directions (top → 38s LEFT, bottom → 42s RIGHT).
- ENTERPRISE_NAMES: Toyota, Sony, Hitachi, NTT, Mitsubishi, Prodrone.
- ECOSYSTEM_NAMES: JETRO, T-Hub, Woxsen, Genesys Info X, DMI, Indobox India.
- Names: font-serif-jp font-black, `clamp(1.5rem, 5vw, 3rem)`, opacity 0.2 (ghost text effect).
- Alternating colors per name (crimson/saffron).
- Diamond ◆ separator in saffron/50 between names.
- Triple-duplicated arrays for seamless infinite scroll on wide viewports.
- Edge fade gradients (w-24 sm:w-40, from-navy to-transparent).
- Pause on hover via existing `.marquee-track:hover .animate-marquee` rule.
- Container: bg-navy py-8 with pattern-asanoha-navy opacity-30 overlay + soft top/bottom vignette.
- Hover on individual name bumps opacity to 100%.
- Optional "Trusted Across the Japan–India Corridor" label.

### 3. Home Page Enhancements (page.tsx)

**New helper components**:
- `FloatingWorkspacePill` — small glass-dark rounded-full pill with emoji + uppercase label, `animate-float` with inline `animationDelay`, 3 accent variants.
- `AnimatedGradientLine` — h-[3px] full-width strip on bg-midnight, inner div with linear-gradient(90deg, #bc1a2c, #e8a01a, #bc1a2c) + `.jg-gradient-shift` class.
- `SectionDivider` — h-14 strip with `pattern-asanoha-navy` (or `-dark`) background, edge fades, centered `.jg-divider-torii` with ToriiGate icon (h-7 w-7 text-saffron, opacity 0.35), role="separator".
- `WorkspaceFeatureCard` — glass-dark rounded-lg with `.feature-card` hover class + `.feature-icon-wrap` 12×12 gradient circle (from-crimson to-saffron), title (font-serif-jp text-[15px] font-bold), description (font-inter text-[12px] text-mist line-clamp-2).

**Hero section additions**:
- 5 FloatingWorkspacePills below the 3 GlassBadges (Reveal delay=520):
  - 🏢 Premium Workspace (crimson)
  - 🍽 TASTY FOOD JUNCTION (saffron)
  - 🔑 24/7 Access (default)
  - 🛡 Enterprise Security (default)
  - 🤝 Japan Desk (saffron)
- Staggered animationDelay 0/0.6/1.2/1.8/2.4s for gentle float drift.
- Updated subtitle: added "complete workspace solution" + "dedicated working hub" emphasis.

**New sections inserted**:
1. `AnimatedGradientLine` between Hero and Trust Strip.
2. `CompanyMarquee` between Stats and Workspace Showcase.
3. **Workspace Feature Showcase** (NEW, bg-midnight + asanoha-dark + dual radial):
   - Eyebrow with Sparkles icon: "Premium Co-Working".
   - H2: "Everything Your Business Needs" / 「ビジネスに必要なすべて」.
   - Subtitle: "complete workspace solution… every facility in one premium hub".
   - 3×2 grid (sm:grid-cols-2 lg:grid-cols-3) of 6 WorkspaceFeatureCards with staggered delays (0/80/160/240/320/400ms):
     1. 🏢 Building2 — Dedicated Workspace
     2. 📡 Wifi — High-Speed Infrastructure
     3. 🤝 Users — Meeting Rooms
     4. 🍽 UtensilsCrossed — TASTY FOOD JUNCTION
     5. 🔑 KeyRound — 24/7 Smart Access
     6. 🛡 ShieldCheck — Enterprise Security
4. `SectionDivider(variant="navy")` between Workspace Showcase and 3 Pillars.
5. `SectionDivider(variant="midnight")` between Ecosystem Preview and CTA Banner.

**Copy updates** (all bilingual via `tx({EN, JP})`):
- Hero subtitle: emphasized dedicated working hub + complete workspace solution.
- Stats subtitle: "Real outcomes from our co-working ecosystem".
- Ecosystem Preview subtitle + 3 card descriptions: workspace/facilities/business support focus.
- CTA Banner title: "Experience J-Gate's Premium Workspace" + new subtitle.

## Final Home Page Architecture (12 elements)
1. Hero (midnight, Torii watermark, 18 particles, 3 GlassBadges + 5 FloatingWorkspacePills, scroll cue)
2. AnimatedGradientLine (NEW)
3. Trust Strip (LogoMarquee on ivory)
4. Stats (4 useCounter cards + updated subtitle)
5. CompanyMarquee (NEW)
6. Workspace Feature Showcase (NEW — 3×2 animated grid)
7. SectionDivider navy (NEW — asanoha + torii icon)
8. 3 Pillars (navy glass cards)
9. Locations (2 editorial cards)
10. Ecosystem Preview (updated copy)
11. SectionDivider midnight (NEW — asanoha + torii icon)
12. CTA Banner (updated "Experience J-Gate's Premium Workspace")

## Verification
- `bun run lint`: exit 0, 0 errors, 0 warnings (clean).
- curl `/` returns HTTP 200 (236ms), no runtime errors.
- All 9 routes return HTTP 200: /, /about, /why-jgate, /services, /team, /pricing, /blogs, /contact, /auth/brochure.
- Content verified via curl grep:
  - "Everything Your Business Needs", "ビジネスに必要なすべて"
  - "TASTY FOOD JUNCTION", "Premium Workspace", "Dedicated Workspace"
  - "Enterprise Security", "24/7 Smart Access", "Experience J-Gate"
  - "Toyota", "Sony", "Hitachi", "Prodrone", "JETRO", "T-Hub", "Woxsen", "Genesys", "Indobox"
  - "Trusted Across the Japan"
  - "complete workspace solution", "dedicated working hub"
  - "Real outcomes from our co-working"
- CSS classes verified rendered: `jg-gradient-shift`, `feature-card`, `jg-divider`, `pattern-asanoha-navy`, `pattern-asanoha-dark`, `animate-float`.
- Dev log: 3 clean compiles (354ms / 680ms / 764ms) after edits, zero runtime errors.

## Design Compliance
- Premium dark aesthetic preserved (navy/midnight + asanoha textures, glass-dark cards, crimson/saffron accents).
- Motion smooth + subtle (cubic-bezier(0.4, 0, 0.2, 1) easing, 36–42s marquee, 9s gradient shift, gentle float).
- Performance: pure CSS animations (no JS animation loops), IntersectionObserver-driven Reveal for staggered scroll-in.
- Fully responsive: marquee names use clamp(1.5rem, 5vw, 3rem), pills wrap on mobile, feature grid 1→2→3 cols.
- All text bilingual EN/JP via tx() inline helper.
- Accessible: aria-hidden on decorative separators, role="separator" on dividers, line-clamp-2 on feature descriptions, focus-visible outlines preserved.

## Files Modified
1. `/home/z/my-project/src/app/globals.css` — 3 new utility classes + 1 new keyframe (jg-gradient-shift, feature-card, feature-icon-wrap, jg-divider, jg-divider-torii).
2. `/home/z/my-project/src/components/jgate/company-marquee.tsx` — NEW (~150 lines).
3. `/home/z/my-project/src/app/page.tsx` — REWRITTEN (~870 lines with 4 new helper components + 4 new sections + 5 floating pills + updated copy).

## Coordination Notes for Other Agents
- This task did NOT modify i18n.tsx — all copy updates were done inline via `tx({EN, JP})` in page.tsx to keep changes contained.
- The legacy `src/components/jgate/hero.tsx` file still references `t("hero.subtitle")` with the original copy. It is NOT imported by any active route, so this is safe.
- The existing `animate-marquee` keyframe (36s) is reused for the CompanyMarquee with inline `animationDuration: '38s'` and `animationDuration: '42s'` overrides + `animationDirection: 'reverse'` for the bottom row.
- New CSS classes added to globals.css: `jg-gradient-shift`, `feature-card`, `feature-icon-wrap`, `jg-divider`, `jg-divider-torii` — these are namespaced and won't conflict with other components.
- If other agents want to reuse `CompanyMarquee`, `SectionDivider`, `AnimatedGradientLine`, or `WorkspaceFeatureCard` components, they are defined locally in `page.tsx` and `company-marquee.tsx`. Could be extracted to shared modules if needed.
