---
Task ID: EN-1
Agent: Z.ai Code (main)
Task: Execute 7 enhancement tasks on the J-Gate multi-page Next.js 16 application — add photo backgrounds, dominant grid photos, taller team photos, inauguration section, cost savings callout, and Japan Desk callout.

Work Log:
- Read /home/z/my-project/worklog.md (Tasks 1 → FX-2) for full project context. Reviewed all 7 target files plus photo.tsx and shared.tsx to confirm existing imports and structures.

1. Home page — pillar cards photo backgrounds (`src/app/page.tsx`)
   - Added a subtle background photo slot INSIDE each pillar article, BEFORE the relative content div.
   - Each photo slot uses `<Photo>` with id `photo-pillar-${p.num}` (01, 02, 03) and gradient fallbacks grad-office-main / grad-office-desks / grad-office-meeting matching the pillar number.
   - Wrapper div uses `absolute inset-0 overflow-hidden rounded-lg opacity-10 pointer-events-none` so the photo sits behind text at 10% opacity without intercepting clicks.
   - Photo component already imported from `@/components/jgate/photo`. No new imports needed.

2. Office tour grid — dominant first photo + View All button (`src/components/jgate/office-tour.tsx`)
   - Changed grid rows from `md:grid-rows-[260px_260px_260px]` to `md:grid-rows-[300px_300px_280px]` — first two rows taller for stronger editorial hierarchy.
   - Changed GALLERY[0] (the hero main workspace photo, col-span-7 row-span-2) aspect from `h-[260px]` to `h-[280px]` — making the dominant photo physically larger on mobile/tablet.
   - Added a "View All Photos" button between the photo grid and the caption paragraph. Uses crimson border + Camera icon + hover translateY(-0.5) + bg-crimson/5 tint. Camera icon was already imported.

3. Team page — taller advisory photos + gradient overlay (`src/app/team/page.tsx`)
   - Confirmed prior agent (A2) already set AdvisorCard Photo height to `h-[300px] w-full sm:h-[320px]` — matches spec, no change needed.
   - Confirmed Photo container already wrapped in `<div className="relative mx-auto w-full max-w-[240px]">` — matches spec.
   - Confirmed gradient overlay already present after Photo. Adjusted opacity from `from-midnight/50` to `from-midnight/40` per exact spec.

4. Team page — ops card height (`src/app/team/page.tsx`)
   - Confirmed prior agent (A2) already set ops Photo to `lg:h-[560px]`, content padding to `lg:p-12`, quote block to `border-l-[4px] border-crimson` — all match spec, no changes needed.

5. About page — inauguration photo section (`src/app/about/page.tsx`)
   - Added the requested NEW inauguration section right BEFORE the Mission & Vision section (after the India Map section closes). The new section is dark midnight themed with:
     • Eyebrow "A HISTORIC MOMENT" + H2 "June 22, 2026 — The Launch" + description with EN/JP bilingual copy.
     • 2-photo hero row (md:grid-cols-2) with rounded-xl Photo containers + bottom gradient labels (Official Inauguration + JETRO Senior Director Keynote).
     • 3-photo row (md:grid-cols-3) with Daifuku Mochi + 50+ Guests + MoU Signing labels.
     • 7-event mini timeline (sm:grid-cols-2 lg:grid-cols-4) with emoji icons + EN/JP titles + descriptions: June 22 2026, 50+ Guests, JETRO Keynote, Omotenashi, MoU Signed, Advisory Council, 2 Founding Members.
   - Photo, Reveal, Eyebrow, useI18n (tx) were all already imported.
   - Note: an existing older inauguration section (5-photo masonry grid) remains in place AFTER Mission & Vision. Per literal task instruction "Add a new section", the new section was added without removing the existing one. The user can review and decide if cleanup is needed.

6. Why J-Gate — cost savings callout before table (`src/app/why-jgate/page.tsx`)
   - Added the requested NEW cost savings callout INSIDE the comparison table section (Section 1), right AFTER the Legend and BEFORE the existing CostSavings component. The new callout is a flex-row layout with:
     • "Typical Annual Expat Cost" label + ¥15M–¥20M (strikethrough, crimson decoration).
     • ArrowDown icon (saffron, rotated -90deg on sm+ for horizontal flow).
     • "J-Gate Membership From" label + ¥324K/yr (crimson).
     • Description text in EN/JP explaining the cost replacement argument.
   - Wrapper uses `mb-10 mx-auto max-w-3xl rounded-lg border border-saffron/25 bg-saffron/[0.04] p-5 sm:p-6`.
   - ArrowDown was already imported from lucide-react. tx was already imported from useI18n.
   - Note: an existing CostSavings component (3-column before/arrow/after layout with savings strip) remains rendered immediately after the new callout. Per literal task instruction "Add" the new callout, the existing one was not removed.

7. Services page — Japan Desk callout (`src/app/services/page.tsx`)
   - Added the requested NEW Japan Desk callout section right BEFORE the Facility Features section (Section 4). The new section uses:
     • Section wrapper `bg-ivory-warm` + max-w-4xl card with crimson/20 border + pearl bg + shadow-card.
     • 2-column grid (md:grid-cols-[1fr_2fr]) — left crimson gradient accent panel with large 日 kanji watermark + KEY DIFFERENTIATOR label + "The Japan Desk" / "ジャパンデスク" title + "何でも相談 — Ask anything, in Japanese" subtitle.
     • Right features panel with full description + 4-bullet list (multi-topic consultation, no appointment, legal/HR/tax coverage, Hyderabad now/Gurgaon soon). Each bullet has a small crimson MessageSquare icon.
   - MessageSquare was already imported from lucide-react. Photo (not needed), Reveal, Eyebrow (not used), tx were all available.
   - Note: an existing older Japan Desk callout (glass-dark card with Headset icon, between Indobox Academy and Hybrid Operating Model) remains in place. Per literal task instruction "Add" the new section, the existing one was not removed.

Verification:
- `bun run lint` → 0 errors, 0 warnings (clean exit code 0).
- All 8 routes return HTTP 200 (verified via dev.log): /, /about, /why-jgate, /services, /team, /pricing, /blogs, /contact. No runtime errors after the changes. The earlier i18n.tsx Fast Refresh warnings are pre-existing expected behavior from prior agents' i18n edits (full reload is normal) and not related to EN-1 changes.
- Verified all 7 enhancements applied:
  • Pillar photo backgrounds: Photo components with photo-pillar-01/02/03 IDs added inside each pillar card with opacity-10 wrapper.
  • Office tour: grid-rows-[300px_300px_280px], GALLERY[0] aspect h-[280px], View All Photos button with Camera icon.
  • Team advisory: h-[300px] sm:h-[320px], relative wrapper, gradient overlay from-midnight/40.
  • Team ops: lg:h-[560px], lg:p-12, border-l-[4px].
  • About inauguration: full new section with 5 photos + 7-event timeline + bilingual copy.
  • Why-J-Gate cost callout: full new callout with ¥15M-¥20M → ¥324K + bilingual description.
  • Services Japan Desk: full new section with 2-col crimson accent + features list.

Artifacts modified:
- src/app/page.tsx (1 edit — pillar photo backgrounds)
- src/components/jgate/office-tour.tsx (3 edits — grid rows, GALLERY[0] aspect, View All button)
- src/app/team/page.tsx (1 edit — advisory gradient opacity /50 → /40)
- src/app/about/page.tsx (1 edit — new inauguration section inserted before Mission & Vision)
- src/app/why-jgate/page.tsx (1 edit — new cost savings callout inserted before existing CostSavings)
- src/app/services/page.tsx (1 edit — new Japan Desk callout section inserted before Facility Features)

Notes for next agent:
- About page now has TWO inauguration sections (new one before M&V, old masonry one after M&V). The old one uses icons (Sparkles, Users, Mic, Coffee, FileText) that would become unused if removed.
- Why-J-Gate page now has TWO cost savings visuals stacked (new callout + existing CostSavings component). The existing CostSavings function definition is still in place and used.
- Services page now has TWO Japan Desk callouts (existing one between Academy and Hybrid Model, new one before Facility Features). Different designs — the existing one uses Headset icon and dark glass card; the new one uses crimson gradient panel + MessageSquare bullets.
- User may want a future cleanup task to consolidate duplicate sections if visual redundancy is undesirable.
