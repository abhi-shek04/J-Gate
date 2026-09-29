# Task FX-GT — Gurgaon Removal + India Map Rebuild + Team Page Compact Redesign

**Task ID:** FX-GT
**Agent:** Z.ai Code (main)
**Goal:** Fix three major issues on the J-Gate multi-page Next.js 16 application:
1. Remove ALL Gurgaon references (J-Gate's only location is Hyderabad)
2. Rebuild India map to show full India outline with Hyderabad highlighted
3. Rebuild Team page Operations section with a compact, neat, professional layout

## Project Context

J-Gate is a co-working space for Japanese companies entering India, with its single main base in Hyderabad (Cyber Gateway, Hitech City). The previous site incorrectly advertised a "Gurgaon — Sub Base (In Prep)" second location. All Gurgaon references had to be removed and the site re-focused on the single Hyderabad hub.

The India map was previously a vague blob with two pulsing dots (Hyderabad + Gurgaon). It needed to show a clearer full-India outline with Hyderabad as the sole focal point.

The Operations Team section previously used oversized editorial split-layout cards (560px tall photos, alternating left/right, full bio paragraphs, large quote blocks) that wasted space and felt unprofessional. It needed a clean, compact, 2×2 grid.

## Work Log

### Issue 1 — Remove ALL Gurgaon references

#### 1a. `src/lib/i18n.tsx`
- `hero.badge2`: was "🏢 Gurgaon — Sub Base (In Prep)" → "🏛 Indobox India Pvt. Ltd."
- `hero.badge3`: was "🏛 Indobox India Pvt. Ltd." → "🗓 Est. June 2026" (new third badge to fill the 3-badge layout)
- `about.locations.title`: was "Strategic Locations: Hyderabad & Gurgaon" → "Strategic Location: Hyderabad"
- `about.locations.subtitle`: rewrote from "Two cities, two roles..." → "A single main base in India's rising tech capital — Cyber Gateway, Hitech City..."
- Removed 7 `about.gurgaon.*` keys entirely (tag, title, status, nick, desc, f1, f2, f3)
- `about.vision.body`: was "...expanding into Hyderabad, Gurgaon, or anywhere between." → "...expanding into Hyderabad, or anywhere in India."

#### 1b. `src/components/jgate/hero.tsx`
- Updated hero badge emoji array to match new badge keys: `[📍, 🏛, 🗓]`

#### 1c. `src/app/page.tsx` (Home page)
- Removed the Gurgaon editorial card entirely (the second card in the Locations section)
- Removed the "🏢 Gurgaon — Sub Base (In Prep)" GlassBadge from the hero
- Repositioned the hero badge set: Hyderabad (saffron), Indobox India (slate), Est. June 2026 / Cyber Gateway (crimson)
- Fixed pillar subtitle: "Three pillars, two cities — anchored in Hyderabad and Gurgaon" → "Three pillars, one bridge — anchored in Hyderabad."
- Restructured Locations section to a single centered max-w-3xl Hyderabad card with a 2-col grid (photo on left, content on right) — looks balanced with one card
- Removed unused `MapPin` import
- Updated file-header comment to reflect "1 editorial card — Hyderabad LIVE"

#### 1d. `src/app/about/page.tsx`
- Removed the entire Gurgaon location section (the reversed 2-col card with photo-about-gurgaon, Gurgaon title, "In Preparation" status, 3 features, single right-side photo)
- Rebuilt the India map `IndiaMap()` component:
  - Removed Gurgaon city dot from the cities array
  - Removed the Gurgaon ↔ Hyderabad dashed connecting line
  - Removed the `ggn` lookup variable
  - Removed the conditional `c.name === "Gurgaon"` text-anchor logic
  - Kept only Hyderabad as the J-Gate hub
- Fixed vision text (VISION.body constant): removed "Gurgaon, or anywhere between" → "Hyderabad, or anywhere in India"
- Updated section comment header to remove "Gurgaon (reversed)" reference
- Updated India Map section:
  - Title: "Two Cities. One Bridge." → "One Hub. One Bridge."
  - Subtitle: "Hyderabad leads as our main base; Gurgaon follows as the sub base." → "Hyderabad is our single main base — anchored at Cyber Gateway, Hitech City, in the heart of India's rising tech capital."
  - Removed Gurgaon legend entry
  - Kept Hyderabad ("J-Gate Hub · LIVE") + "Other major cities (reference)" legend entries
  - Updated sidebar summary text from "Direct line from Gurgaon (Delhi NCR) to Hyderabad..." → "Hyderabad anchors J-Gate at India's geographic center — within easy reach of every major Japanese business hub across the country."
  - Renamed sidebar card title from "Active Corridor" → "Strategic Hub"

#### 1e. `src/app/services/page.tsx`
- Japan Desk callout: "Available in Hyderabad now; Gurgaon soon" → "Available in Hyderabad at Cyber Gateway"

#### 1f. `src/app/contact/page.tsx`
- Verified: NO Gurgaon references existed (the "Two Cities" text in contact refers to Tokyo ↔ Hyderabad Japan-India corridor — correct and retained)

### Issue 2 — Rebuild India map SVG with full India outline

Rewrote the `IndiaMap()` component in `src/app/about/page.tsx`:
- **Full India outline**: Replaced the previous lumpy blob path with a more recognizable India coastline path tracing Kashmir → Ladakh → Nepal → Bengal → Bangladesh → East coast → Kanyakumari → West coast → Gujarat (Kutch) → Punjab → J&K → back to Kashmir
- **Sri Lanka**: Added a small triangle south of India for proper geographic context
- **Outline styling**: Soft crimson fill (`rgba(188,26,44,0.06)`) + saffron stroke (`rgba(232,160,26,0.55)`, 1.4px) — gives India a clear visible shape against the dark section background
- **Hyderabad hub**: LARGE pulsing crimson dot — outer r=14 with `animate` element pulsing r 10→20→10 + opacity 0.40→0→0.40 over 2.4s; inner solid r=7 crimson dot; r=3 white highlight center for premium look
- **Hyderabad label**: Crimson pill rect (86×24, rx=4, `rgba(188,26,44,0.92)`) with bold "J-GATE HUB" white text + "Hyderabad" label below in crimson
- **Other reference cities** (New Delhi, Ahmedabad, Mumbai, Bengaluru, Chennai): small grey dots (r=3.5, fill #8892a4) with light grey labels (9.5px, #a8b1c2)
- Removed Gurgaon dot entirely
- Map gives clear geographic context showing where Hyderabad sits within India

### Issue 3 — Rebuild Team page with compact layout

Completely rewrote `src/app/team/page.tsx` (was 663 lines, now ~470 lines):

#### Operations Team (Section 2) — COMPACT 2×2 grid
- **Grid**: `md:grid-cols-2` on desktop, 1-column on mobile (was alternating full-width split layouts)
- **Card layout**: Horizontal flex (photo left, content right) — was vertical split
- **Photo**: 96px circular (`w-24 h-24 rounded-full`) — was 560px tall full-height
- **Card padding**: `p-5 sm:p-6` — was `p-12`
- **Card border**: Added subtle `border border-slate-200` with hover state (`hover:border-crimson/30 hover:shadow-hover`) for premium feel
- **Bio**: `line-clamp-3` (max 3 lines) — was 4-5 full paragraphs visible
- **Removed**: The large quote blocks (blockquote with QuoteIcon) — completely eliminated
- **Removed**: The `quote` field from OPS_TEAM data array (no longer needed)
- **Contact row**: Compact inline — `📞 {phone}` (when present), `📧 Email` (when present), `in` (LinkedIn, blue circular badge with `bg-[#0A66C2]`) — was separate bordered chip-style buttons
- **Role chip**: Compact `bg-crimson/10 text-crimson` chip with role text — kept crimson/saffron accent variants per member
- **Kept**: All real names (Daisuke TANJI, Mariko HANAOKA, Dheeraj YANNETI, Abhishek BUDURU), JP names, roles, flags (🇯🇵/🇮🇳), bios, phone numbers (+91-9910360648, +91-98498 11543), emails (contact@indobox.co.jp)

#### Advisory Board (Section 3) — COMPACT 5-column grid
- **Grid**: `lg:grid-cols-5` on desktop (3+2 layout via `sm:grid-cols-3`), 1-column on mobile — was 3-top + 2-bottom centered
- **Card layout**: Compact vertical card with gold top-border accent (3px saffron)
- **Photo**: 80px circular (`h-20 w-20 rounded-full`) — was 300-320px tall portrait
- **Content**: Name (Noto Serif JP 14px bold) + JP name (11px mist) + former title badge (saffron chip) + role (11px mist) — NO long bios
- **Removed**: The `bio` field from ADVISORS data array (no longer needed)
- **Kept**: All real names, JP names, roles, former titles, credential icons

#### Ecosystem Partners (Section 4) — unchanged
- Kept the existing 12-tile compact grid (already compact and professional)

#### Imports cleanup
- Removed unused: `Phone`, `Mail`, `Linkedin`, `Quote as QuoteIcon` (replaced with inline emojis 📞/📧 and text "in" badge for LinkedIn)
- Removed `ROLE_ACCENT.bar` and `divider` properties (no longer needed — no top accent bar, no thin divider)
- Kept: All other icons used by Advisory board and Ecosystem Partners grids

## Verification

### Gurgaon references — final grep
```
grep -rn "Gurgaon\|gurgaon\|グルガオン" src/app/ src/components/ src/lib/i18n.tsx --include="*.tsx" --include="*.ts"
```
→ **0 matches** (exit code 1 = no matches found)

### Lint
```
bun run lint
```
→ **exit code 0** (clean, 0 errors, 0 warnings)

### Dev server routes (from dev.log)
All 9 routes return HTTP 200 with no runtime errors:
- `/` (home) — 200
- `/about` — 200
- `/why-jgate` — 200
- `/services` — 200
- `/team` — 200
- `/pricing` — 200
- `/blogs` — 200
- `/contact` — 200
- `/auth/brochure` — 200

## Files Modified
1. `src/lib/i18n.tsx` — Removed 7 `about.gurgaon.*` keys; updated `hero.badge2/3`, `about.locations.title/subtitle`, `about.vision.body`
2. `src/components/jgate/hero.tsx` — Updated badge emojis to match new i18n keys
3. `src/app/page.tsx` — Removed Gurgaon card + badge; fixed pillar subtitle; restructured Locations section; removed unused `MapPin` import
4. `src/app/about/page.tsx` — Removed Gurgaon section; rebuilt IndiaMap with full outline + Hyderabad hub; fixed vision text; updated map subtitle/title/legend
5. `src/app/services/page.tsx` — Updated Japan Desk callout
6. `src/app/team/page.tsx` — Complete rewrite: compact 2×2 grid for Operations team, compact 5-column grid for Advisory board

## Design Notes
- All bilingual EN/JP content preserved — every `tx({EN, JP})` entry updated in both languages together
- Mobile-first responsive: 1-column on mobile, 2-column on tablet (md+), 5-column on desktop (lg+) for advisory
- Compact card design uses `shadow-card` (default) with `hover:shadow-hover` (bigger) on hover — premium feel without being heavy
- `line-clamp-3` ensures bios stay within card height for grid alignment
- All visual design tokens (`lift-card`, `bg-pearl`, `text-crimson`, `font-serif-jp`, `font-inter`, etc.) preserved from existing design system
