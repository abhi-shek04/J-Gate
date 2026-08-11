"use client";

import { ChevronDown } from "lucide-react";
import { HyderabadSkyline, AsanohaSeal, JapanFlag, IndiaFlag } from "./icons";

const STATS = [
  { emoji: "🇯🇵", text: "2 Japanese Companies Already Onboard" },
  { emoji: "📍", text: "Cyber Gateway, Hyderabad" },
  { emoji: "🤝", text: "Est. June 22, 2026" },
];

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-jgate-navy"
    >
      {/* Background: asanoha dark pattern */}
      <div className="pattern-asanoha-dark absolute inset-0" />

      {/* Diagonal gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(125deg, rgba(13,27,42,0.96) 0%, rgba(13,27,42,0.78) 40%, rgba(200,16,46,0.18) 75%, rgba(244,163,0,0.16) 100%)",
        }}
      />

      {/* Floating decorative orbs */}
      <div className="absolute left-[8%] top-[22%] h-40 w-40 rounded-full bg-jgate-red/20 blur-3xl" />
      <div className="absolute right-[10%] top-[30%] h-48 w-48 rounded-full bg-jgate-gold/15 blur-3xl" />
      <div className="absolute bottom-[14%] left-[20%] h-32 w-32 rounded-full bg-jgate-green/15 blur-3xl" />

      {/* Skyline silhouette at bottom */}
      <HyderabadSkyline className="absolute bottom-0 left-0 h-[42%] w-full" />

      {/* Asanoha seal ornaments */}
      <AsanohaSeal className="absolute left-6 top-24 hidden h-10 w-10 text-jgate-gold/30 md:block" />
      <AsanohaSeal className="absolute right-6 top-24 hidden h-10 w-10 text-jgate-red/40 md:block" />

      {/* Center content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pt-24 pb-32 text-center sm:px-6">
        {/* Glass card */}
        <div className="glass-card rounded-3xl px-6 py-10 sm:px-12 sm:py-14">
          {/* Linked flags */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <JapanFlag className="h-5 w-8 drop-shadow" />
            <span className="h-px w-8 bg-gradient-to-r from-jgate-gold to-transparent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-jgate-gold">
              India × Japan
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-jgate-gold to-transparent" />
            <IndiaFlag className="h-5 w-8 drop-shadow" />
          </div>

          <h1 className="font-serif-jp text-5xl font-bold leading-none text-white sm:text-6xl md:text-7xl">
            J-Gate
          </h1>
          <p className="mt-2 font-sans-jp text-sm tracking-[0.25em] text-white/55">
            Jゲート
          </p>

          <h2 className="mt-6 font-serif-jp text-2xl font-semibold sm:text-3xl md:text-4xl">
            <span className="text-white">Where </span>
            <span className="text-gradient-red">Japan</span>
            <span className="text-white"> Meets </span>
            <span className="text-gradient-gold">India.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            Hyderabad&apos;s dedicated working hub for Japanese businesses
            entering India. Powered by{" "}
            <span className="font-semibold text-white">
              Indobox India Pvt. Ltd.
            </span>{" "}
            at Cyber Gateway.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <button
              onClick={() => scrollTo("pricing")}
              className="btn-shine w-full rounded-full bg-jgate-red px-7 py-3.5 text-sm font-semibold text-white shadow-soft-lg transition-all hover:-translate-y-0.5 hover:bg-[#a80c26] sm:w-auto"
            >
              Become a Member
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="w-full rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15 sm:w-auto"
            >
              Book a Tour
            </button>
          </div>
        </div>

        {/* Floating stat badges */}
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <div
              key={s.text}
              className={
                "glass-light flex items-center justify-center gap-2.5 rounded-2xl px-4 py-3.5 text-center text-xs font-medium text-jgate-navy sm:text-sm " +
                (i === 1 ? "animate-float-slow" : i === 0 ? "animate-float" : "animate-float-delay")
              }
            >
              <span className="text-lg" aria-hidden>
                {s.emoji}
              </span>
              <span className="leading-tight">{s.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll-down indicator */}
      <button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/70 transition-colors hover:text-white"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
          Scroll
        </span>
        <span className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1">
          <ChevronDown className="h-4 w-4 animate-bounce-soft" />
        </span>
      </button>
    </section>
  );
}
