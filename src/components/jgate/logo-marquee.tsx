"use client";

import { cn } from "@/lib/utils";

/* ============================================================
   LogoMarquee — infinite scrolling ecosystem partner logo wall
   Only verified partners from client brochure & official corridor ties
   ============================================================ */

type Logo = {
  name: string;
  src: string;
  category: string;
  desc?: string;
};

// Row 1 — Innovation Hub, Academia, MoU, Deep-Tech & Communications (5 partners)
const ECOSYSTEM_ROW_1: Logo[] = [
  { name: "T-Hub", src: "/logos/thub.png", category: "INNOVATION HUB", desc: "World's Largest Innovation Center" },
  { name: "Woxsen University", src: "/logos/woxsen.png", category: "ACADEMIC PARTNER", desc: "Executive Talent & Research" },
  { name: "Genesys Info X", src: "/logos/genesys-info-x.png", category: "MoU PARTNER", desc: "Global Digital Solutions" },
  { name: "Kodryx.ai", src: "/logos/kodryx.png", category: "DATA INTELLIGENCE", desc: "Enterprise AI & Analytics" },
  { name: "Daakia", src: "/logos/daakia.png", category: "COMMUNICATIONS", desc: "Bridging Distance with AI" },
];

// Row 2 — Tech Platforms, Media, Community, Youth Forum & Analytics (5 partners)
const ECOSYSTEM_ROW_2: Logo[] = [
  { name: "MXC", src: "/logos/mxc.png", category: "TECH PLATFORMS", desc: "Next-Gen Software Solutions" },
  { name: "Fingerprint Films", src: "/logos/fingerprint-films.png", category: "CREATIVE STUDIO", desc: "Brand Storytelling & Media" },
  { name: "Hyderabad Anime Club", src: "/logos/hyderabad-anime-club.png", category: "CULTURAL COMMUNITY", desc: "Cultural & Community Network" },
  { name: "YANC", src: "/logos/yanc.png", category: "NETWORKING", desc: "Young Minds Global Forum" },
  { name: "Data Intelligence", src: "/logos/data-intelligence.png", category: "ANALYTICS", desc: "Market & Talent Intelligence" },
];

function PartnerCard({ logo, variant = "light" }: { logo: Logo; variant?: "light" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "group flex h-14 sm:h-20 w-44 sm:w-68 shrink-0 items-center gap-2.5 sm:gap-3.5 rounded-xl sm:rounded-2xl border p-2 sm:p-3.5 transition-all duration-300 hover:-translate-y-1",
        isDark
          ? "border-white/10 bg-white/[0.04] backdrop-blur-sm hover:border-saffron/40 hover:bg-white/[0.07] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
          : "border-slate-200/90 bg-white shadow-card hover:border-crimson/40 hover:shadow-xl"
      )}
    >
      <div
        className={cn(
          "flex h-10 w-13 sm:h-14 sm:w-22 shrink-0 items-center justify-center rounded-lg sm:rounded-xl p-1 sm:p-2 transition-colors",
          isDark ? "bg-white" : "border border-slate-100 bg-slate-50/90"
        )}
      >
        <img
          src={logo.src}
          alt={`${logo.name} logo`}
          className="max-h-7 sm:max-h-10 max-w-[48px] sm:max-w-[78px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="min-w-0 flex-1">
        <span
          className={cn(
            "block font-inter text-[11px] sm:text-[13px] font-bold truncate leading-tight transition-colors",
            isDark ? "text-white group-hover:text-saffron" : "text-ink group-hover:text-crimson"
          )}
        >
          {logo.name}
        </span>
        <span
          className={cn(
            "mt-0.5 block font-inter text-[7.5px] sm:text-[8.5px] font-bold uppercase tracking-wider truncate",
            isDark ? "text-saffron" : "text-crimson"
          )}
        >
          {logo.category}
        </span>
        {logo.desc && (
          <p
            className={cn(
              "hidden sm:block mt-0.5 font-inter text-[10.5px] line-clamp-1",
              isDark ? "text-mist" : "text-slate-500"
            )}
          >
            {logo.desc}
          </p>
        )}
      </div>
    </div>
  );
}

export function LogoMarquee({ variant = "light" }: { variant?: "light" | "dark" }) {
  const row1 = [...ECOSYSTEM_ROW_1, ...ECOSYSTEM_ROW_1, ...ECOSYSTEM_ROW_1];
  const row2 = [...ECOSYSTEM_ROW_2, ...ECOSYSTEM_ROW_2, ...ECOSYSTEM_ROW_2];

  const maskStyle = {
    maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
    WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
  };

  return (
    <div className="space-y-2.5 sm:space-y-4">
      {/* Row 1 — Continuous Flow (Leftward) */}
      <div className="marquee-track relative overflow-hidden py-0.5 sm:py-1" style={maskStyle}>
        <div
          className="flex w-max gap-2.5 sm:gap-4 animate-marquee"
          style={{ animationDuration: "36s" }}
        >
          {row1.map((logo, i) => (
            <PartnerCard key={`eco1-${logo.name}-${i}`} logo={logo} variant={variant} />
          ))}
        </div>
      </div>

      {/* Row 2 — Continuous Flow (Rightward) */}
      <div className="marquee-track relative overflow-hidden py-0.5 sm:py-1" style={maskStyle}>
        <div
          className="flex w-max gap-2.5 sm:gap-4 animate-marquee"
          style={{ animationDirection: "reverse", animationDuration: "40s" }}
        >
          {row2.map((logo, i) => (
            <PartnerCard key={`eco2-${logo.name}-${i}`} logo={logo} variant={variant} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Backward compatibility exports
export const STRATEGIC_LOGOS = ECOSYSTEM_ROW_1;
export const ECOSYSTEM_LOGOS = ECOSYSTEM_ROW_2;
export { ECOSYSTEM_ROW_1, ECOSYSTEM_ROW_2 };
