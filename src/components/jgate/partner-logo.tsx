"use client";

import { cn } from "@/lib/utils";

/* ============================================================
   PartnerLogo — renders a real logo image for confirmed
   partners, and an elegant styled text tile for those whose
   logos aren't publicly available.
   ============================================================ */

const LOGO_MAP: Record<string, { src: string; type: "image" | "text" }> = {
  // Ecosystem Partners (Innovation hubs, academia, platforms)
  "T-Hub": { src: "/logos/thub.png", type: "image" },
  "Woxsen University": { src: "/logos/woxsen.png", type: "image" },
  "Genesys info X": { src: "", type: "text" },
  "Genesys Info X": { src: "", type: "text" },
  // Ecosystem Partners (client brochure)
  "MXC": { src: "/logos/mxc.png", type: "image" },
  "Kodryx AI": { src: "/logos/kodryx.png", type: "image" },
  "Hyderabad Anime Club": { src: "/logos/hyderabad-anime-club.png", type: "image" },
  "Daakia": { src: "/logos/daakia.png", type: "image" },
  "Fingerprint Films": { src: "/logos/fingerprint-films.png", type: "image" },
  "YANC": { src: "/logos/yanc.png", type: "image" },
  "Data Intelligence": { src: "/logos/data-intelligence.png", type: "image" },
};

export function PartnerLogo({
  name,
  className = "",
  variant = "light",
}: {
  name: string;
  className?: string;
  /** "light" = white card (for dark backgrounds), "dark" = dark card (for light backgrounds) */
  variant?: "light" | "dark";
}) {
  const logo = LOGO_MAP[name];

  if (!logo || logo.type === "text") {
    // Styled text tile for companies without publicly available logos
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-lg px-5 py-4",
          variant === "light"
            ? "bg-white/10 border border-white/15"
            : "bg-pearl border border-crimson/10 shadow-card",
          className
        )}
      >
        <span
          className={cn(
            "font-serif-jp font-bold text-center",
            variant === "light" ? "text-white" : "text-ink"
          )}
          style={{ fontSize: "clamp(0.8rem, 1.2vw, 1rem)" }}
        >
          {name}
        </span>
      </div>
    );
  }

  // Real logo image — white padded card for consistent presentation
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg bg-white p-4",
        variant === "dark" ? "shadow-card" : "shadow-card",
        className
      )}
    >
      <img
        src={logo.src}
        alt={`${name} official logo`}
        className="max-h-16 w-full max-w-[140px] object-contain"
        loading="lazy"
      />
    </div>
  );
}

/** Get list of all partner names */
export const ALL_PARTNERS = Object.keys(LOGO_MAP);
