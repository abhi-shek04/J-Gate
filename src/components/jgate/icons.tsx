import type { SVGProps } from "react";

/* ============================================================
   J-Gate Brand Logo
   Original: interlocking red + gold rings (J/link motif)
   + "J-Gate" wordmark in red.
   Uses the uploaded original PNG at /jgate-logo.png
   ============================================================ */

/** Full logo lockup — official logo image only (no text wordmark)
 *  The provided official logo already contains the "J-Gate" wordmark.
 *  Enlarged 150% for brand authority — h-16 navbar, h-20 footer. */
export function JGateLogo({
  className = "",
  variant: _variant = "light",
  size = "md",
}: {
  className?: string;
  /** kept for API compatibility, no longer used */
  variant?: "light" | "dark";
  /** "sm" footer watermark, "md" navbar (h-16), "lg" hero (h-24) */
  size?: "sm" | "md" | "lg";
}) {
  const h = size === "lg" ? "h-32" : size === "sm" ? "h-16" : "h-24";
  return (
    <img
      src="/jgate-logo.png"
      alt="J-Gate logo"
      className={`${h} w-auto object-contain ${className}`}
      style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.18))" }}
    />
  );
}

/** Logo mark only (just the icon) — for small spaces, mobile, etc. */
export function JGateMark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/jgate-logo.png"
      alt="J-Gate"
      className={`object-contain ${className}`}
      style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.08))" }}
    />
  );
}

/* ============================================================
   Legacy icons retained for section watermarks (not the logo)
   ============================================================ */

/** Thin-line torii gate — used only as a section watermark motif, NOT as the logo */
export function ToriiGate(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M2 14 C 18 4, 46 4, 62 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M1 14 L 63 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 22 L 56 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="29" y="14" width="6" height="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <line x1="16" y1="22" x2="16" y2="54" stroke="currentColor" strokeWidth="1.5" />
      <line x1="48" y1="22" x2="48" y2="54" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** Large geometric torii watermark — for hero/CTA backgrounds (decorative only) */
export function ToriiWatermark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M20 60 C 100 20, 300 20, 380 60" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M15 60 L 385 60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M50 110 L 350 110" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="190" y="60" width="20" height="50" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <line x1="90" y1="110" x2="90" y2="350" stroke="currentColor" strokeWidth="1.5" />
      <line x1="310" y1="110" x2="310" y2="350" stroke="currentColor" strokeWidth="1.5" />
      <line x1="140" y1="110" x2="140" y2="350" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <line x1="260" y1="110" x2="260" y2="350" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

/** Compact Japanese flag */
export function JapanFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <rect width="30" height="20" rx="2" fill="#ffffff" stroke="rgba(8,15,26,0.12)" strokeWidth="0.5" />
      <circle cx="15" cy="10" r="6" fill="#BC1A2C" />
    </svg>
  );
}

/** Compact Indian flag */
export function IndiaFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <rect width="30" height="20" rx="2" fill="#ffffff" stroke="rgba(8,15,26,0.12)" strokeWidth="0.5" />
      <rect width="30" height="6.67" rx="2" fill="#FF9933" />
      <rect y="13.33" width="30" height="6.67" rx="2" fill="#138808" />
      <rect y="6.67" width="30" height="6.66" fill="#ffffff" />
      <circle cx="15" cy="10" r="2.7" fill="none" stroke="#000080" strokeWidth="0.5" />
      <g stroke="#000080" strokeWidth="0.4">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          return <line key={i} x1="15" y1="10" x2={15 + Math.cos(a) * 2.7} y2={10 + Math.sin(a) * 2.7} />;
        })}
      </g>
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M12 2l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.77 6.12 20.7l1.12-6.55L2.48 8.92l6.58-.96L12 2z" />
    </svg>
  );
}

export function QuoteMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M19 12c-5 2.5-8 7-8 13 0 6 4 11 9 11 4 0 7-3 7-7 0-4-3-7-7-7-1 0-2 .2-2 .2.5-3 2.5-5.5 5.5-7L19 12zm18 0c-5 2.5-8 7-8 13 0 6 4 11 9 11 4 0 7-3 7-7 0-4-3-7-7-7-1 0-2 .2-2 .2.5-3 2.5-5.5 5.5-7L37 12z" />
    </svg>
  );
}

export function HyderabadSkyline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1440 320" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="sky-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1b2a" />
          <stop offset="100%" stopColor="#080f1a" />
        </linearGradient>
        <linearGradient id="sky-near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#060d16" />
          <stop offset="100%" stopColor="#04080f" />
        </linearGradient>
      </defs>
      <g fill="url(#sky-far)" opacity="0.6">
        <rect x="40" y="200" width="46" height="120" /><rect x="92" y="170" width="34" height="150" />
        <rect x="132" y="210" width="54" height="110" /><rect x="196" y="150" width="40" height="170" />
        <rect x="244" y="190" width="60" height="130" /><rect x="312" y="160" width="36" height="160" />
        <rect x="356" y="200" width="50" height="120" /><rect x="416" y="140" width="44" height="180" />
        <rect x="468" y="185" width="58" height="135" /><rect x="534" y="165" width="38" height="155" />
        <rect x="580" y="205" width="52" height="115" /><rect x="640" y="150" width="42" height="170" />
        <rect x="690" y="180" width="56" height="140" /><rect x="754" y="160" width="40" height="160" />
        <rect x="802" y="200" width="54" height="120" /><rect x="864" y="145" width="44" height="175" />
        <rect x="916" y="190" width="58" height="130" /><rect x="982" y="170" width="38" height="150" />
        <rect x="1028" y="205" width="50" height="115" /><rect x="1086" y="155" width="44" height="165" />
        <rect x="1138" y="195" width="56" height="125" /><rect x="1202" y="165" width="40" height="155" />
        <rect x="1250" y="205" width="52" height="115" /><rect x="1310" y="175" width="44" height="145" />
        <rect x="1362" y="200" width="54" height="120" />
      </g>
      <g fill="url(#sky-near)">
        <rect x="0" y="250" width="80" height="70" /><rect x="80" y="225" width="60" height="95" />
        <rect x="150" y="120" width="64" height="200" /><rect x="214" y="170" width="44" height="150" />
        <rect x="258" y="225" width="70" height="95" />
        <rect x="340" y="220" width="120" height="100" />
        <rect x="350" y="195" width="14" height="125" /><rect x="436" y="195" width="14" height="125" />
        <path d="M340 220 Q 400 168 460 220 Z" /><circle cx="400" cy="178" r="16" />
        <rect x="394" y="150" width="12" height="30" />
        <rect x="470" y="200" width="52" height="120" /><rect x="522" y="150" width="58" height="170" />
        <rect x="580" y="225" width="48" height="95" /><rect x="628" y="100" width="70" height="220" />
        <rect x="698" y="185" width="50" height="135" /><rect x="748" y="225" width="64" height="95" />
        <rect x="820" y="210" width="80" height="110" /><path d="M820 210 Q 860 158 900 210 Z" />
        <circle cx="860" cy="166" r="14" />
        <rect x="910" y="170" width="56" height="150" /><rect x="966" y="120" width="60" height="200" />
        <rect x="1026" y="210" width="50" height="110" /><rect x="1076" y="160" width="64" height="160" />
        <rect x="1140" y="220" width="56" height="100" /><rect x="1196" y="130" width="58" height="190" />
        <rect x="1254" y="205" width="52" height="115" /><rect x="1306" y="170" width="60" height="150" />
        <rect x="1366" y="230" width="74" height="90" />
      </g>
      <g stroke="#04080f" strokeWidth="2.5">
        <line x1="182" y1="120" x2="182" y2="78" /><line x1="663" y1="100" x2="663" y2="56" />
        <line x1="996" y1="120" x2="996" y2="80" /><line x1="1225" y1="130" x2="1225" y2="92" />
      </g>
      <g fill="#BC1A2C"><circle cx="182" cy="78" r="2.5" /><circle cx="663" cy="56" r="2.5" />
        <circle cx="996" cy="80" r="2.5" /><circle cx="1225" cy="92" r="2.5" /></g>
      <g fill="#E8A01A" opacity="0.65">
        {Array.from({ length: 56 }).map((_, i) => {
          const x = 160 + (i * 29) % 1240; const y = 150 + ((i * 53) % 120);
          return <rect key={i} x={x} y={y} width="2.5" height="2.5" rx="0.5" />;
        })}
      </g>
    </svg>
  );
}

export function VennDiagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="venn-intersect" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#BC1A2C" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#E8A01A" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <g fill="#8892A4" opacity="0.3">
        {[[60,80],[480,80],[60,300],[480,300],[260,40],[260,340],[40,190],[480,190]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="2.5" />
        ))}
      </g>
      <g stroke="#8892A4" strokeWidth="0.6" opacity="0.25">
        <line x1="60" y1="80" x2="180" y2="160" /><line x1="480" y1="80" x2="340" y2="160" />
        <line x1="60" y1="300" x2="180" y2="240" /><line x1="480" y1="300" x2="340" y2="240" />
        <line x1="260" y1="40" x2="260" y2="120" /><line x1="260" y1="340" x2="260" y2="260" />
      </g>
      <circle cx="200" cy="190" r="140" fill="none" stroke="#BC1A2C" strokeWidth="2" />
      <circle cx="200" cy="190" r="140" fill="#BC1A2C" opacity="0.04" />
      <circle cx="320" cy="190" r="140" fill="none" stroke="#E8A01A" strokeWidth="2" />
      <circle cx="320" cy="190" r="140" fill="#E8A01A" opacity="0.04" />
      <path d="M 260 70 A 140 140 0 0 1 260 310 A 140 140 0 0 1 260 70 Z" fill="url(#venn-intersect)" />
      <text x="120" y="120" fontFamily="Noto Sans JP, sans-serif" fontWeight="700" fontSize="16" fill="#BC1A2C">🇯🇵 Japan</text>
      <text x="110" y="165" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="13" fill="#4A4E69">Innovation</text>
      <text x="115" y="185" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="13" fill="#4A4E69">Precision</text>
      <text x="118" y="205" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="13" fill="#4A4E69">Trust</text>
      <text x="360" y="120" fontFamily="Noto Sans JP, sans-serif" fontWeight="700" fontSize="16" fill="#B07A0E">🇮🇳 India</text>
      <text x="365" y="165" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="13" fill="#4A4E69">Scale</text>
      <text x="365" y="185" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="13" fill="#4A4E69">Speed</text>
      <text x="365" y="205" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="13" fill="#4A4E69">Talent</text>
      <text x="260" y="185" textAnchor="middle" fontFamily="Noto Serif JP, serif" fontWeight="700" fontSize="26" fill="#080F1A">J-Gate</text>
      <text x="260" y="208" textAnchor="middle" fontFamily="Noto Sans JP, sans-serif" fontWeight="500" fontSize="11" fill="#8892A4" letterSpacing="2">Jゲート</text>
    </svg>
  );
}

export function BuildingOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth="1.2" fill="none">
        <rect x="80" y="40" width="120" height="170" />
        <path d="M70 40 L 80 28 L 200 28 L 210 40" />
        <line x1="120" y1="40" x2="120" y2="210" />
        <line x1="160" y1="40" x2="160" y2="210" />
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 4 }).map((_, col) => (
            <rect key={`${row}-${col}`} x={88 + col * 28} y={56 + row * 24} width="20" height="16" strokeWidth="0.8" />
          ))
        )}
        <rect x="20" y="120" width="55" height="90" />
        <line x1="20" y1="140" x2="75" y2="140" /><line x1="47" y1="120" x2="47" y2="210" />
        <rect x="205" y="100" width="60" height="110" />
        <line x1="205" y1="125" x2="265" y2="125" /><line x1="235" y1="100" x2="235" y2="210" />
        <line x1="0" y1="210" x2="280" y2="210" strokeWidth="1.5" />
        <line x1="140" y1="28" x2="140" y2="8" />
        <circle cx="140" cy="8" r="2" fill="currentColor" />
      </g>
    </svg>
  );
}

export function AsanohaSeal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth="1">
        <path d="M24 3 L45 15 L45 33 L24 45 L3 33 L3 15 Z" />
        <path d="M24 3 L24 45 M3 15 L45 33 M3 33 L45 15" />
        <path d="M24 12 L36 19 L36 29 L24 36 L12 29 L12 19 Z" />
      </g>
    </svg>
  );
}
