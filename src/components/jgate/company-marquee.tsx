"use client";

import { cn } from "@/lib/utils";

/* ============================================================
   CompanyMarquee — scrolling company names as large stylized text
   A creative premium "ticker tape" of company names.

   Design:
   - Two rows scrolling in opposite directions (left / right)
   - Each name: large font-serif-jp text (clamp 1.5rem → 3rem)
   - Ghost-text effect: opacity 0.18–0.24
   - Colors alternate between crimson and saffron per-name
   - Diamond ◆ separator in saffron between names
   - Edge fade gradients on both sides
   - Pause on hover (marquee-track:hover)
   - Smooth, slow scroll (36–42s animation duration)
   ============================================================ */

type CompanyName = {
  text: string;
  /** Optional JP rendering for visual rhythm */
  jp?: string;
};

const ENTERPRISE_NAMES: CompanyName[] = [
  { text: "Toyota" },
  { text: "Sony" },
  { text: "Hitachi" },
  { text: "NTT" },
  { text: "Mitsubishi" },
  { text: "Prodrone" },
];

const ECOSYSTEM_NAMES: CompanyName[] = [
  { text: "JETRO" },
  { text: "T-Hub" },
  { text: "Woxsen" },
  { text: "Genesys Info X" },
  { text: "DMI" },
  { text: "Indobox India" },
];

function NameRow({
  names,
  direction = "left",
  duration = "38s",
  bgFrom = "from-navy",
}: {
  names: CompanyName[];
  direction?: "left" | "right";
  duration?: string;
  bgFrom?: string;
}) {
  // Triple the names to guarantee seamless infinite scroll on wide viewports
  const items = [...names, ...names, ...names];

  return (
    <div className="marquee-track relative overflow-hidden py-3">
      {/* Edge fade gradients — left & right */}
      <div
        className={cn(
          "pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r to-transparent sm:w-40",
          bgFrom
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l to-transparent sm:w-40",
          bgFrom
        )}
      />
      <div
        className="flex w-max items-center gap-10 animate-marquee sm:gap-14"
        style={{
          animationDirection: direction === "right" ? "reverse" : "normal",
          animationDuration: duration,
        }}
      >
        {items.map((name, i) => (
          <span key={`name-${i}`} className="flex items-center gap-10 sm:gap-14">
            <span
              className={cn(
                "font-serif-jp font-black tracking-tight transition-opacity duration-300 hover:opacity-100",
                i % 2 === 0 ? "text-crimson" : "text-saffron"
              )}
              style={{
                fontSize: "clamp(1.5rem, 5vw, 3rem)",
                opacity: 0.2,
                lineHeight: 1.1,
              }}
            >
              {name.text}
            </span>
            <span
              className="text-saffron/50"
              style={{ fontSize: "clamp(0.75rem, 1.5vw, 1rem)" }}
              aria-hidden
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function CompanyMarquee({
  className,
  showLabels = true,
}: {
  className?: string;
  showLabels?: boolean;
}) {
  return (
    <div className={cn("relative bg-navy py-8", className)}>
      {/* Subtle asanoha texture overlay */}
      <div className="pattern-asanoha-navy pointer-events-none absolute inset-0 opacity-30" />
      {/* Soft top/bottom vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,15,26,0.55) 0%, transparent 25%, transparent 75%, rgba(8,15,26,0.55) 100%)",
        }}
      />

      <div className="relative">
        {showLabels && (
          <div className="mb-5 text-center">
            <span
              className="font-inter text-[10px] font-semibold uppercase text-saffron/80"
              style={{ letterSpacing: "0.3em" }}
            >
              Trusted Across the Japan–India Corridor
            </span>
          </div>
        )}

        {/* Row 1 — Enterprises (scroll left) */}
        <NameRow
          names={ENTERPRISE_NAMES}
          direction="left"
          duration="38s"
          bgFrom="from-navy"
        />

        {/* Row 2 — Ecosystem partners (scroll right) */}
        <NameRow
          names={ECOSYSTEM_NAMES}
          direction="right"
          duration="42s"
          bgFrom="from-navy"
        />
      </div>
    </div>
  );
}

export { ENTERPRISE_NAMES, ECOSYSTEM_NAMES };
