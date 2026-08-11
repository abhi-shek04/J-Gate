"use client";

import { cn } from "@/lib/utils";

/* ============================================================
   LogoMarquee — infinite scrolling partner logo wall
   Two rows scrolling in opposite directions for visual depth.
   Pauses on hover. Uses real logo images from /public/logos/.
   ============================================================ */

type Logo = {
  name: string;
  src: string;
};

// Japanese enterprises J-Gate places talent into
const ENTERPRISE_LOGOS: Logo[] = [
  { name: "Toyota", src: "/logos/toyota.png" },
  { name: "Sony", src: "/logos/sony.png" },
  { name: "Hitachi", src: "/logos/hitachi.jpg" },
  { name: "NTT", src: "/logos/ntt.jpg" },
  { name: "Mitsubishi", src: "/logos/mitsubishi.jpg" },
  { name: "Prodrone", src: "/logos/prodrone.jpg" },
];

// Ecosystem partners
const ECOSYSTEM_LOGOS: Logo[] = [
  { name: "JETRO", src: "/logos/jetro.jpg" },
  { name: "T-Hub", src: "/logos/thub.jpg" },
  { name: "Woxsen University", src: "/logos/woxsen.jpg" },
  { name: "Genesys Info X", src: "/logos/genesys-info-x.png" },
  { name: "DMI", src: "/logos/dmi.jpg" },
  { name: "Indobox India", src: "/logos/indobox.jpg" },
];

function LogoTile({ logo, className }: { logo: Logo; className?: string }) {
  return (
    <div
      className={cn(
        "flex h-20 w-36 shrink-0 items-center justify-center rounded-lg border border-crimson/8 bg-pearl px-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-hover",
        className
      )}
    >
      <img
        src={logo.src}
        alt={`${logo.name} official logo`}
        className="max-h-12 w-full max-w-[120px] object-contain"
        loading="lazy"
      />
    </div>
  );
}

export function LogoMarquee({ variant = "light" }: { variant?: "light" | "dark" }) {
  // Duplicate arrays for seamless infinite scroll
  const enterprises = [...ENTERPRISE_LOGOS, ...ENTERPRISE_LOGOS];
  const ecosystem = [...ECOSYSTEM_LOGOS, ...ECOSYSTEM_LOGOS];

  const labelClass = variant === "dark" ? "text-saffron" : "text-crimson";
  const sectionBg = variant === "dark" ? "" : "";

  return (
    <div className={sectionBg}>
      {/* Row 1 — Japanese Enterprises (scroll left) */}
      <div className="mb-4">
        <p className={cn("mb-3 text-center font-inter text-[11px] font-semibold uppercase", labelClass)} style={{ letterSpacing: "0.15em" }}>
          Japanese Enterprises We Serve
        </p>
        <div className="marquee-track relative overflow-hidden">
          {/* fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-ivory to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-ivory to-transparent" />
          <div className="flex w-max gap-4 animate-marquee">
            {enterprises.map((logo, i) => (
              <LogoTile key={`ent-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 — Ecosystem Partners (scroll right, reverse) */}
      <div>
        <p className={cn("mb-3 text-center font-inter text-[11px] font-semibold uppercase", labelClass)} style={{ letterSpacing: "0.15em" }}>
          Ecosystem & Partner Network
        </p>
        <div className="marquee-track relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-ivory to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-ivory to-transparent" />
          <div className="flex w-max gap-4 animate-marquee" style={{ animationDirection: "reverse", animationDuration: "40s" }}>
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
