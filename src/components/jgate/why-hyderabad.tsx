"use client";

import { Reveal, Eyebrow } from "./shared";
import { BuildingOutline } from "./icons";
import { MapPin, ArrowRight } from "lucide-react";

const STATS = [
  { number: "#1", label: "IT Hub in India" },
  { number: "4th", label: "Largest Economy in India" },
  { number: "700,000+", label: "Tech Workforce" },
  { number: "India's", label: "Fastest Growing Metro" },
];

export function WhyHyderabad() {
  return (
    <section id="why-hyderabad" className="section-pad bg-ivory-warm">
      <div className="container-jg">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Why Hyderabad</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}
            >
              India&apos;s Most Strategic City for{" "}
              <span className="text-crimson">Japanese Business</span>
            </h2>
            <p
              className="mt-6 max-w-[700px] font-inter leading-relaxed text-slate"
              style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.0625rem)" }}
            >
              Hyderabad is not just another Indian city — it is the country&apos;s
              fastest-growing technology and business hub, home to the
              headquarters of global giants including Microsoft, Google, Amazon,
              Apple, and Meta. Its infrastructure, talent pool, regulatory
              environment, and cosmopolitan culture make it the most natural
              landing point for Japanese enterprises.
            </p>
            <p className="mt-4 max-w-[700px] font-inter text-[15px] leading-relaxed text-mist">
              J-Gate is positioned at the heart of this ecosystem — inside Cyber
              Gateway, Hyderabad&apos;s most prestigious commercial address —
              giving members immediate access to the city&apos;s most powerful
              networks.
            </p>
          </div>
        </Reveal>

        {/* Stats row */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="lift-card h-full rounded-lg border border-crimson/8 bg-pearl p-6 text-center shadow-card">
                <div className="font-serif-jp text-[clamp(2rem,4vw,3rem)] font-bold text-crimson">
                  {s.number}
                </div>
                <div className="mt-2 font-inter text-[13px] font-medium uppercase text-slate" style={{ letterSpacing: "0.05em" }}>
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Cyber Gateway highlight banner */}
        <Reveal delay={120}>
          <div className="mt-12 overflow-hidden rounded-2xl bg-navy">
            <div className="pattern-asanoha-navy grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
              {/* Left content */}
              <div>
                <div className="flex items-center gap-2 text-saffron">
                  <MapPin className="h-5 w-5" />
                  <span className="font-inter text-sm font-semibold uppercase" style={{ letterSpacing: "0.1em" }}>
                    Cyber Gateway, Hyderabad
                  </span>
                </div>
                <h3 className="mt-4 font-serif-jp text-[clamp(1.5rem,3vw,2rem)] font-bold text-white">
                  Your Prestigious Address
                </h3>
                <p className="mt-4 font-inter text-[15px] leading-relaxed text-mist">
                  One of Hyderabad&apos;s most recognized business addresses —
                  shared with Fortune 500 companies and India&apos;s leading
                  technology firms. Your business card says Cyber Gateway. That
                  matters.
                </p>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-6 inline-flex items-center gap-1.5 rounded-md bg-crimson px-5 py-2.5 font-inter text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-crimson-deep"
                >
                  Book a Tour
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              {/* Right — building outline in thin crimson lines */}
              <div className="flex justify-center">
                <BuildingOutline className="h-auto w-full max-w-[280px] text-crimson" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
