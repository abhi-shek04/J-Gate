"use client";

import { cn } from "@/lib/utils";

/* ============================================================
   LogoMarquee — infinite scrolling partner logo wall
   Two rows: Enterprises + Ecosystem (all 12 partners)
   ============================================================ */

type Logo = {
  name: string;
  src?: string;        // if present, use image; if absent, use styled text tile
  category?: string;
};

// Row 1 — Industries We Support (Japanese enterprises)
const ENTERPRISE_LOGOS: Logo[] = [
  { name: "Toyota", src: "/logos/toyota.png" },
  { name: "Sony", src: "/logos/sony.png" },
  { name: "Hitachi", src: "/logos/hitachi.jpg" },
  { name: "NTT", src: "/logos/ntt.jpg" },
  { name: "Mitsubishi", src: "/logos/mitsubishi.jpg" },
  { name: "Prodrone", src: "/logos/prodrone.jpg" },
];

// Row 2 — Ecosystem & Partners (ALL 12 from client list)
const ECOSYSTEM_LOGOS: Logo[] = [
  { name: "Kodryx.ai", src: "/logos/kodryx.jpg", category: "DATA INTELLIGENCE" },
  { name: "YANC", category: "YOUNG MINDS NETWORKING" },
  { name: "Daakia", src: "/logos/daakia.jpg", category: "BRIDGING DISTANCE" },
  { name: "Fingerprint Films", category: "CREATIVE STUDIO" },
  { name: "MXC", src: "/logos/mxc.png", category: "TECHNOLOGY PARTNER" },
  { name: "Hyderabad Japan Club", src: "/logos/hyderabad-anime-club.jpg", category: "COMMUNITY" },
  { name: "JETRO", src: "/logos/jetro.jpg", category: "TRADE PROMOTION" },
  { name: "T-Hub", src: "/logos/thub.jpg", category: "INNOVATION HUB" },
  { name: "Woxsen University", src: "/logos/woxsen.jpg", category: "ACADEMIC PARTNER" },
  { name: "Genesys Info X", src: "/logos/genesys-info-x.png", category: "MoU PARTNER" },
  { name: "DMI", src: "/logos/dmi.jpg", category: "DIGITAL MEDIA" },
  { name: "DATA INTELLIGENCE", category: "ANALYTICS" },
];

function LogoTile({ logo, className }: { logo: Logo; className?: string }) {
  if (logo.src) {
    return (
      <div
        className={cn(
          "flex h-16 w-32 shrink-0 items-center justify-center rounded-lg border border-crimson/8 bg-pearl px-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-hover",
          className
        )}
      >
        <img
          src={logo.src}
          alt={`${logo.name} logo`}
          className="max-h-10 w-full max-w-[100px] object-contain"
          loading="lazy"
        />
      </div>
    );
  }
  // Styled text tile for partners without logo images
  return (
    <div
      className={cn(
        "flex h-16 w-32 shrink-0 flex-col items-center justify-center rounded-lg border border-crimson/8 bg-pearl px-3 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-hover",
        className
      )}
    >
      <span className="font-serif-jp text-[13px] font-bold text-ink leading-tight text-center">
        {logo.name}
      </span>
      {logo.category && (
        <span className="mt-0.5 font-inter text-[8px] uppercase tracking-wide text-mist text-center leading-tight">
          {logo.category}
        </span>
      )}
    </div>
  );
}

export function LogoMarquee({ variant = "light" }: { variant?: "light" | "dark" }) {
  const enterprises = [...ENTERPRISE_LOGOS, ...ENTERPRISE_LOGOS];
  const ecosystem = [...ECOSYSTEM_LOGOS, ...ECOSYSTEM_LOGOS];

  const labelClass = variant === "dark" ? "text-saffron" : "text-crimson";

  const fadeStyle =
    variant === "dark"
      ? { background: "linear-gradient(to right, #080f1a, transparent)" }
      : undefined;
  const fadeStyleRight =
    variant === "dark"
      ? { background: "linear-gradient(to left, #080f1a, transparent)" }
      : undefined;
  const fadeClass = variant === "light" ? "bg-gradient-to-r from-ivory to-transparent" : "";
  const fadeClassRight = variant === "light" ? "bg-gradient-to-l from-ivory to-transparent" : "";

  return (
    <div>
      {/* Row 1 — Industries We Support */}
      <div className="mb-4">
        <p className={cn("mb-3 text-center font-inter text-[11px] font-semibold uppercase", labelClass)} style={{ letterSpacing: "0.15em" }}>
          Industries We Support
        </p>
        <div className="marquee-track relative overflow-hidden">
          <div className={cn("pointer-events-none absolute left-0 top-0 z-10 h-full w-24", fadeClass)} style={fadeStyle} />
          <div className={cn("pointer-events-none absolute right-0 top-0 z-10 h-full w-24", fadeClassRight)} style={fadeStyleRight} />
          <div className="flex w-max gap-3 animate-marquee">
            {enterprises.map((logo, i) => (
              <LogoTile key={`ent-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 — Ecosystem & Partners (all 12) */}
      <div>
        <p className={cn("mb-3 text-center font-inter text-[11px] font-semibold uppercase", labelClass)} style={{ letterSpacing: "0.15em" }}>
          Ecosystem & Partners
        </p>
        <div className="marquee-track relative overflow-hidden">
          <div className={cn("pointer-events-none absolute left-0 top-0 z-10 h-full w-24", fadeClass)} style={fadeStyle} />
          <div className={cn("pointer-events-none absolute right-0 top-0 z-10 h-full w-24", fadeClassRight)} style={fadeStyleRight} />
          <div className="flex w-max gap-3 animate-marquee" style={{ animationDirection: "reverse", animationDuration: "45s" }}>
            {ecosystem.map((logo, i) => (
              <LogoTile key={`eco-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { ENTERPRISE_LOGOS, ECOSYSTEM_LOGOS };
