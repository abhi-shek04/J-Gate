"use client";

import { Reveal, SectionHeading } from "./shared";
import { QuoteMark, JapanFlag, IndiaFlag } from "./icons";

/** Abstract SVG: two landmasses connected by a glowing bridge */
function BridgeArt() {
  return (
    <svg
      viewBox="0 0 520 360"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Illustration of Japan and India connected by a glowing bridge"
    >
      <defs>
        <linearGradient id="land-jp" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C8102E" />
          <stop offset="100%" stopColor="#e84855" />
        </linearGradient>
        <linearGradient id="land-in" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F4A300" />
          <stop offset="100%" stopColor="#1A936F" />
        </linearGradient>
        <linearGradient id="bridge-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C8102E" />
          <stop offset="50%" stopColor="#F4A300" />
          <stop offset="100%" stopColor="#1A936F" />
        </linearGradient>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Japan landmass (left) — stylized island cluster */}
      <g fill="url(#land-jp)" opacity="0.92">
        <path d="M70 120 C 50 110, 40 90, 60 70 C 80 55, 110 60, 120 80 C 135 70, 155 75, 160 95 C 175 90, 185 110, 170 125 C 180 140, 165 160, 145 155 C 140 175, 110 180, 95 165 C 75 170, 55 150, 70 120 Z" />
        <ellipse cx="55" cy="175" rx="14" ry="9" />
        <ellipse cx="195" cy="140" rx="10" ry="7" />
      </g>

      {/* India landmass (right) — stylized peninsula */}
      <g fill="url(#land-in)" opacity="0.92">
        <path d="M360 80 C 400 60, 450 70, 470 100 C 485 95, 495 115, 485 130 C 475 165, 455 200, 430 235 C 420 255, 405 270, 395 250 C 390 275, 370 280, 365 255 C 350 270, 335 255, 340 235 C 325 230, 320 205, 335 190 C 325 175, 330 150, 345 145 C 340 120, 350 95, 360 80 Z" />
      </g>

      {/* Flag pins */}
      <g transform="translate(95,40)">
        <line x1="0" y1="0" x2="0" y2="22" stroke="#0D1B2A" strokeWidth="2" />
        <rect x="0" y="-2" width="22" height="14" rx="2" fill="#fff" stroke="rgba(13,27,42,0.2)" strokeWidth="0.5" />
        <circle cx="11" cy="5" r="4.5" fill="#C8102E" />
      </g>
      <g transform="translate(410,40)">
        <line x1="0" y1="0" x2="0" y2="22" stroke="#0D1B2A" strokeWidth="2" />
        <rect x="0" y="-2" width="22" height="14" rx="2" fill="#fff" stroke="rgba(13,27,42,0.2)" strokeWidth="0.5" />
        <rect width="22" height="4.67" rx="2" fill="#FF9933" />
        <rect y="9.33" width="22" height="4.67" rx="2" fill="#138808" />
        <circle cx="11" cy="7" r="2" fill="none" stroke="#000080" strokeWidth="0.5" />
      </g>

      {/* Labels */}
      <text x="105" y="210" textAnchor="middle" fontFamily="Noto Serif JP, serif" fontWeight="700" fontSize="20" fill="#0D1B2A">日本</text>
      <text x="105" y="232" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="12" fill="#4A4E69" letterSpacing="2">JAPAN</text>
      <text x="415" y="295" textAnchor="middle" fontFamily="Noto Serif JP, serif" fontWeight="700" fontSize="20" fill="#0D1B2A">भारत</text>
      <text x="415" y="317" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="12" fill="#4A4E69" letterSpacing="2">INDIA</text>

      {/* The glowing bridge */}
      <g filter="url(#glow)">
        <path
          d="M180 120 Q 320 40 460 110"
          fill="none"
          stroke="url(#bridge-grad)"
          strokeWidth="5"
          strokeLinecap="round"
          className="animate-bridge-glow"
        />
      </g>
      {/* Bridge suspension cables */}
      <g stroke="#F4A300" strokeWidth="1" opacity="0.5">
        <line x1="200" y1="104" x2="200" y2="80" />
        <line x1="230" y1="88" x2="230" y2="60" />
        <line x1="260" y1="74" x2="260" y2="46" />
        <line x1="290" y1="66" x2="290" y2="42" />
        <line x1="320" y1="64" x2="320" y2="42" />
        <line x1="350" y1="68" x2="350" y2="46" />
        <line x1="380" y1="76" x2="380" y2="54" />
        <line x1="410" y1="88" x2="410" y2="68" />
      </g>
      {/* Bridge towers */}
      <g fill="#0D1B2A">
        <rect x="197" y="44" width="6" height="70" rx="2" />
        <rect x="317" y="32" width="6" height="60" rx="2" />
        <rect x="407" y="50" width="6" height="60" rx="2" />
      </g>

      {/* Connection spark */}
      <circle cx="320" cy="38" r="6" fill="#F4A300" opacity="0.9">
        <animate attributeName="r" values="5;9;5" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2.4s" repeatCount="indefinite" />
      </circle>

      {/* Floating particles */}
      <g fill="#F4A300" opacity="0.6">
        <circle cx="240" cy="70" r="2">
          <animate attributeName="cy" values="70;60;70" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="380" cy="80" r="2">
          <animate attributeName="cy" values="80;70;80" dur="3.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="90" r="1.5">
          <animate attributeName="cy" values="90;80;90" dur="2.8s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

export function About() {
  return (
    <section id="about" className="pattern-asanoha-light relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Vision"
            title={
              <>
                Bridging <span className="text-jgate-red">Two Economies</span>
              </>
            }
            subtitle="J-Gate is more than a co-working space. It is a strategic bridge connecting Japan's innovation ecosystem with Hyderabad's vibrant business landscape."
          />
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          {/* Left: text + pull quote */}
          <Reveal>
            <div>
              <p className="text-base leading-relaxed text-jgate-slate sm:text-lg">
                Founded by{" "}
                <span className="font-semibold text-jgate-navy">
                  Mr. Daisuke Tanji
                </span>
                , J-Gate offers Japanese companies a trusted environment to
                establish presence, build partnerships, and grow with
                confidence — guided by the Japanese spirit of{" "}
                <span className="font-semibold text-jgate-red">
                  Omotenashi
                </span>{" "}
                <span className="font-sans-jp text-sm text-jgate-slate/70">
                  (おもてなし)
                </span>{" "}
                and the Indian ethos of partnership.
              </p>

              {/* Pull quote */}
              <figure className="relative mt-8 rounded-2xl border-l-4 border-jgate-red bg-white p-6 shadow-soft sm:p-8">
                <QuoteMark className="absolute -top-4 left-5 h-12 w-12 text-jgate-red/15" />
                <blockquote className="relative font-serif-jp text-lg font-medium leading-relaxed text-jgate-navy sm:text-xl">
                  &ldquo;Strengthening economic ties between India and Japan
                  requires an environment where companies can connect,
                  collaborate, and grow together.&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-jgate-red to-jgate-navy text-sm font-bold text-white">
                    DT
                  </span>
                  <span className="text-sm">
                    <span className="block font-semibold text-jgate-navy">
                      Mr. Daisuke Tanji
                    </span>
                    <span className="block text-jgate-slate">
                      Founder, Indobox India Pvt. Ltd.
                    </span>
                  </span>
                </figcaption>
              </figure>

              {/* Mini stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { n: "2", l: "Economies Bridged" },
                  { n: "50+", l: "Launch Guests" },
                  { n: "8+", l: "Ecosystem Partners" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-xl border border-jgate-navy/8 bg-white p-4 text-center shadow-soft"
                  >
                    <div className="font-serif-jp text-2xl font-bold text-jgate-red sm:text-3xl">
                      {s.n}
                    </div>
                    <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-jgate-slate sm:text-xs">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: bridge art */}
          <Reveal delay={120}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-jgate-red/10 via-transparent to-jgate-gold/10 blur-xl" />
              <div className="relative rounded-3xl border border-jgate-navy/8 bg-white p-6 shadow-soft-lg sm:p-8">
                <BridgeArt />
                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-jgate-slate">
                  <JapanFlag className="h-4 w-6" />
                  <span className="text-jgate-gold">◆</span>
                  <span>One Bridge</span>
                  <span className="text-jgate-gold">◆</span>
                  <IndiaFlag className="h-4 w-6" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
