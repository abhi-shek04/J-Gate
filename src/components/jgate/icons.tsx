import type { SVGProps } from "react";

/* ============================================================
   J-Gate custom SVG icon set
   ============================================================ */

/** Stylized Japanese torii gate — used in the logo lockup */
export function ToriiGate(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Kasagi — curved top lintel */}
      <path
        d="M3 13 C 18 3, 46 3, 61 13"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Kasagi extended ends */}
      <path d="M2 13 L 62 13" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      {/* Nuki — second lintel */}
      <rect x="9" y="19" width="46" height="4.5" rx="1.5" fill="currentColor" />
      {/* Gakuzuka — center tablet */}
      <rect x="28.5" y="13.5" width="7" height="6" rx="1" fill="currentColor" />
      {/* Pillars */}
      <rect x="14" y="16" width="6.5" height="33" rx="1.5" fill="currentColor" />
      <rect x="43.5" y="16" width="6.5" height="33" rx="1.5" fill="currentColor" />
    </svg>
  );
}

/** Compact Japanese flag (white field, red sun) */
export function JapanFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <rect width="30" height="20" rx="2.5" fill="#ffffff" stroke="rgba(13,27,42,0.15)" strokeWidth="0.6" />
      <circle cx="15" cy="10" r="6" fill="#C8102E" />
    </svg>
  );
}

/** Compact Indian flag (saffron / white / green with chakra) */
export function IndiaFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <rect width="30" height="20" rx="2.5" fill="#ffffff" stroke="rgba(13,27,42,0.15)" strokeWidth="0.6" />
      <rect width="30" height="6.67" rx="2.5" fill="#FF9933" />
      <rect y="13.33" width="30" height="6.67" rx="2.5" fill="#138808" />
      <rect y="6.67" width="30" height="6.66" fill="#ffffff" />
      <circle cx="15" cy="10" r="2.7" fill="none" stroke="#000080" strokeWidth="0.6" />
      <g stroke="#000080" strokeWidth="0.45">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          return (
            <line
              key={i}
              x1="15"
              y1="10"
              x2={15 + Math.cos(a) * 2.7}
              y2={10 + Math.sin(a) * 2.7}
            />
          );
        })}
      </g>
    </svg>
  );
}

/** Linked flags motif — Japan + India connected by a subtle bridge arc */
export function LinkedFlags(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 80 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <rect width="30" height="20" rx="2.5" fill="#fff" stroke="rgba(13,27,42,0.15)" strokeWidth="0.6" />
      <circle cx="15" cy="10" r="6" fill="#C8102E" />
      <path d="M30 12 Q 40 4 50 12" fill="none" stroke="#F4A300" strokeWidth="1.4" strokeDasharray="2 2" />
      <g transform="translate(50,0)">
        <rect width="30" height="20" rx="2.5" fill="#fff" stroke="rgba(13,27,42,0.15)" strokeWidth="0.6" />
        <rect width="30" height="6.67" rx="2.5" fill="#FF9933" />
        <rect y="13.33" width="30" height="6.67" rx="2.5" fill="#138808" />
        <circle cx="15" cy="10" r="2.7" fill="none" stroke="#000080" strokeWidth="0.6" />
      </g>
    </svg>
  );
}

/** LinkedIn icon */
export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

/** X (Twitter) icon */
export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
    </svg>
  );
}

/** Instagram icon */
export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

/** Star (filled) */
export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M12 2l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.77 6.12 20.7l1.12-6.55L2.48 9.5l6.58-.96L12 2z" />
    </svg>
  );
}

/** Quote mark */
export function QuoteMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M19 12c-5 2.5-8 7-8 13 0 6 4 11 9 11 4 0 7-3 7-7 0-4-3-7-7-7-1 0-2 .2-2 .2.5-3 2.5-5.5 5.5-7L19 12zm18 0c-5 2.5-8 7-8 13 0 6 4 11 9 11 4 0 7-3 7-7 0-4-3-7-7-7-1 0-2 .2-2 .2.5-3 2.5-5.5 5.5-7L37 12z" />
    </svg>
  );
}

/** Animated Hyderabad skyline silhouette for the hero */
export function HyderabadSkyline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id="sky-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#13263b" />
          <stop offset="100%" stopColor="#0d1b2a" />
        </linearGradient>
        <linearGradient id="sky-near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1521" />
          <stop offset="100%" stopColor="#060d16" />
        </linearGradient>
      </defs>

      {/* Far skyline row */}
      <g fill="url(#sky-far)" opacity="0.7">
        <rect x="40" y="200" width="46" height="120" />
        <rect x="92" y="170" width="34" height="150" />
        <rect x="132" y="210" width="54" height="110" />
        <rect x="196" y="150" width="40" height="170" />
        <rect x="244" y="190" width="60" height="130" />
        <rect x="312" y="160" width="36" height="160" />
        <rect x="356" y="200" width="50" height="120" />
        <rect x="416" y="140" width="44" height="180" />
        <rect x="468" y="185" width="58" height="135" />
        <rect x="534" y="165" width="38" height="155" />
        <rect x="580" y="205" width="52" height="115" />
        <rect x="640" y="150" width="42" height="170" />
        <rect x="690" y="180" width="56" height="140" />
        <rect x="754" y="160" width="40" height="160" />
        <rect x="802" y="200" width="54" height="120" />
        <rect x="864" y="145" width="44" height="175" />
        <rect x="916" y="190" width="58" height="130" />
        <rect x="982" y="170" width="38" height="150" />
        <rect x="1028" y="205" width="50" height="115" />
        <rect x="1086" y="155" width="44" height="165" />
        <rect x="1138" y="195" width="56" height="125" />
        <rect x="1202" y="165" width="40" height="155" />
        <rect x="1250" y="205" width="52" height="115" />
        <rect x="1310" y="175" width="44" height="145" />
        <rect x="1362" y="200" width="54" height="120" />
      </g>

      {/* Far row tower tops + antenna */}
      <g stroke="#13263b" strokeWidth="2" opacity="0.8">
        <line x1="216" y1="150" x2="216" y2="120" />
        <line x1="438" y1="140" x2="438" y2="108" />
        <line x1="661" y1="150" x2="661" y2="118" />
        <line x1="886" y1="145" x2="886" y2="112" />
        <line x1="1108" y1="155" x2="1108" y2="122" />
      </g>

      {/* Lit windows (far) */}
      <g fill="#F4A300" opacity="0.55">
        {Array.from({ length: 60 }).map((_, i) => {
          const x = 50 + (i * 23) % 1360;
          const y = 180 + ((i * 37) % 110);
          return <rect key={i} x={x} y={y} width="2.5" height="2.5" rx="0.5" />;
        })}
      </g>

      {/* Near skyline row (taller, darker) — modern towers + Charminar-inspired dome */}
      <g fill="url(#sky-near)">
        <rect x="0" y="250" width="80" height="70" />
        <rect x="80" y="225" width="60" height="95" />
        {/* Hitech-style glass tower */}
        <rect x="150" y="120" width="64" height="200" />
        <rect x="214" y="170" width="44" height="150" />
        <rect x="258" y="225" width="70" height="95" />
        {/* Charminar-inspired monument */}
        <rect x="340" y="220" width="120" height="100" />
        <rect x="350" y="195" width="14" height="125" />
        <rect x="436" y="195" width="14" height="125" />
        <path d="M340 220 Q 400 168 460 220 Z" />
        <circle cx="400" cy="178" r="16" />
        <rect x="394" y="150" width="12" height="30" />
        {/* Mid towers */}
        <rect x="470" y="200" width="52" height="120" />
        <rect x="522" y="150" width="58" height="170" />
        <rect x="580" y="225" width="48" height="95" />
        <rect x="628" y="100" width="70" height="220" />
        <rect x="698" y="185" width="50" height="135" />
        <rect x="748" y="225" width="64" height="95" />
        {/* Dome cluster */}
        <rect x="820" y="210" width="80" height="110" />
        <path d="M820 210 Q 860 158 900 210 Z" />
        <circle cx="860" cy="166" r="14" />
        {/* More towers */}
        <rect x="910" y="170" width="56" height="150" />
        <rect x="966" y="120" width="60" height="200" />
        <rect x="1026" y="210" width="50" height="110" />
        <rect x="1076" y="160" width="64" height="160" />
        <rect x="1140" y="220" width="56" height="100" />
        <rect x="1196" y="130" width="58" height="190" />
        <rect x="1254" y="205" width="52" height="115" />
        <rect x="1306" y="170" width="60" height="150" />
        <rect x="1366" y="230" width="74" height="90" />
      </g>

      {/* Antennas on near towers */}
      <g stroke="#060d16" strokeWidth="2.5">
        <line x1="182" y1="120" x2="182" y2="78" />
        <line x1="663" y1="100" x2="663" y2="56" />
        <line x1="996" y1="120" x2="996" y2="80" />
        <line x1="1225" y1="130" x2="1225" y2="92" />
      </g>
      <g fill="#C8102E">
        <circle cx="182" cy="78" r="2.5" />
        <circle cx="663" cy="56" r="2.5" />
        <circle cx="996" cy="80" r="2.5" />
        <circle cx="1225" cy="92" r="2.5" />
      </g>

      {/* Lit windows (near) */}
      <g fill="#F4A300" opacity="0.7">
        {Array.from({ length: 48 }).map((_, i) => {
          const x = 160 + (i * 29) % 1240;
          const y = 150 + ((i * 53) % 120);
          return <rect key={i} x={x} y={y} width="3" height="3" rx="0.5" />;
        })}
      </g>
    </svg>
  );
}

/** Decorative asanoha seal — small ornamental mark */
export function AsanohaSeal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth="1.4">
        <path d="M24 3 L45 15 L45 33 L24 45 L3 33 L3 15 Z" />
        <path d="M24 3 L24 45 M3 15 L45 33 M3 33 L45 15" />
        <path d="M24 12 L36 19 L36 29 L24 36 L12 29 L12 19 Z" />
      </g>
    </svg>
  );
}
