"use client";

import { ToriiWatermark, JapanFlag, IndiaFlag, HyderabadSkyline } from "./icons";

/** Drifting particles — 20 small white dots drifting upward */
function Particles() {
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    left: `${(i * 37) % 100}%`,
    size: 1.5 + (i % 3) * 0.8,
    delay: `${(i * 1.7) % 18}s`,
    duration: `${18 + (i % 6) * 4}s`,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full bg-white"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animation: `jg-drift ${p.duration} linear infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

const STATS = [
  { flag: "🇯🇵", title: "2 Japanese", sub: "Companies Live" },
  { flag: "📍", title: "Cyber Gateway", sub: "Hyderabad" },
  { flag: "🤝", title: "JETRO", sub: "Endorsed" },
];

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-midnight"
    >
      {/* Vertical crimson gradient wash (left side) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(188,26,44,0.08) 0%, rgba(188,26,44,0.02) 40%, transparent 70%)",
        }}
      />
      {/* Radial depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(232,160,26,0.06), transparent 55%)",
        }}
      />

      {/* Torii watermark — 70vw, opacity 0.04, crimson */}
      <ToriiWatermark
        className="torii-watermark"
        style={{
          width: "70vw",
          maxWidth: "780px",
          right: "0",
          top: "8%",
        }}
      />

      {/* Drifting particles */}
      <Particles />

      {/* Skyline at bottom */}
      <div className="absolute bottom-0 left-0 h-[38%] w-full opacity-60">
        <HyderabadSkyline className="h-full w-full" />
      </div>
      <div
        className="absolute bottom-0 left-0 h-[34%] w-full"
        style={{
          background:
            "linear-gradient(180deg, transparent, #080f1a 85%)",
        }}
      />

      {/* Content */}
      <div className="container-jg relative z-10 pt-28 pb-32 text-center">
        {/* Eyebrow pill */}
        <span className="inline-flex items-center gap-2 rounded-md bg-crimson px-4 py-1.5 font-inter text-[13px] font-medium text-white shadow-crimp" style={{ letterSpacing: "0.1em" }}>
          <JapanFlag className="h-3.5 w-5" />
          HYDERABAD · CYBER GATEWAY
          <IndiaFlag className="h-3.5 w-5" />
        </span>

        {/* H1 */}
        <h1
          className="mx-auto mt-8 font-serif-jp font-bold leading-[1.05] text-white"
          style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)" }}
        >
          Where Japan
          <br />
          <span className="text-gradient-saffron">Meets India.</span>
        </h1>

        {/* H2 subtitle */}
        <p
          className="mx-auto mt-6 max-w-[560px] font-inter font-light leading-relaxed text-mist"
          style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)" }}
        >
          J-Gate is not just a workspace — it is Hyderabad&apos;s sovereign
          platform for Japanese businesses to land, grow, and lead in India&apos;s
          most dynamic economy.
        </p>

        {/* Japanese sub-tagline */}
        <p className="mt-3 font-serif-jp text-base text-saffron/70">
          「日本とインドをつなぐ、ビジネスの架け橋」
        </p>

        {/* CTAs — 6px radius */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => scrollTo("membership")}
            className="btn-shine rounded-md bg-crimson px-8 py-4 font-inter text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-crimson-deep"
          >
            Become a Member
          </button>
          <button
            onClick={() => scrollTo("office-tour")}
            className="rounded-md border border-white/40 px-8 py-4 font-inter text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
          >
            Take a Virtual Tour ▶
          </button>
        </div>

        {/* Stat badges — glass morphism */}
        <div className="mx-auto mt-16 grid max-w-2xl gap-3 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <div
              key={s.title}
              className={
                "glass-dark flex flex-col items-center justify-center gap-1 rounded-lg px-4 py-4 " +
                (i === 1 ? "animate-float-slow" : i === 0 ? "animate-float" : "animate-float-delay")
              }
            >
              <span className="text-xl" aria-hidden>
                {s.flag}
              </span>
              <span className="font-inter text-sm font-semibold text-white">{s.title}</span>
              <span className="font-inter text-xs text-mist">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to explore"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-inter text-xs font-normal text-mist" style={{ letterSpacing: "0.1em" }}>
          ↓ Explore J-Gate
        </span>
        <span className="block h-10 w-px origin-top bg-mist/40 animate-scroll-line" />
      </button>
    </section>
  );
}
