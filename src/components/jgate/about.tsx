"use client";

import { Reveal, Eyebrow } from "./shared";
import { VennDiagram, JapanFlag, IndiaFlag } from "./icons";

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-navy">
      <div className="pattern-asanoha-navy absolute inset-0 opacity-70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(232,160,26,0.08), transparent 55%)",
        }}
      />

      <div className="container-jg relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — content */}
          <Reveal variant="left">
            <div>
              <Eyebrow light>Our Story</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.15] text-white"
                style={{ fontSize: "clamp(1.875rem, 4vw, 2.625rem)" }}
              >
                Bridging Two Economies.
                <br />
                <span className="text-gradient-saffron">Building One Future.</span>
              </h2>

              <div className="mt-6 space-y-4 font-inter text-[16px] leading-relaxed text-mist">
                <p>
                  J-Gate was born from a singular conviction: that the
                  partnership between Japan and India represents one of the most
                  powerful and underserved opportunities in global business
                  today.
                </p>
                <p>
                  Mr. Daisuke Tanji — a Japanese entrepreneur who has spent over
                  a decade immersed in both Japanese corporate culture and the
                  Indian business ecosystem — founded Indobox India Private
                  Limited to bridge this gap. J-Gate is the physical and
                  institutional expression of that mission.
                </p>
                <p>
                  Inaugurated on June 22, 2026, at Cyber Gateway in Hyderabad,
                  J-Gate opened its doors with 50+ distinguished guests, a
                  keynote from JETRO&apos;s Senior Director, and two founding
                  member companies on Day 1 — proof that the need was immediate
                  and the vision was right.
                </p>
              </div>

              {/* Pull quote — crimson left border */}
              <figure className="mt-8 border-l-4 border-crimson pl-6">
                <blockquote
                  className="font-serif-jp text-[18px] font-medium italic leading-relaxed text-white"
                >
                  &ldquo;Strengthening economic ties between India and Japan
                  requires more than business introductions. It calls for an
                  environment where companies can connect, collaborate, and grow
                  together.&rdquo;
                </blockquote>
                <figcaption className="mt-3 font-inter text-sm text-saffron">
                  — Mr. Daisuke Tanji, Founder, Indobox India Private Limited
                </figcaption>
              </figure>
            </div>
          </Reveal>

          {/* Right — Venn diagram */}
          <Reveal variant="right" delay={120}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-crimson/10 via-transparent to-saffron/10 blur-2xl" />
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
                <VennDiagram className="mx-auto h-auto w-full max-w-[440px]" />
                <div className="mt-4 flex items-center justify-center gap-3 font-inter text-xs uppercase text-mist" style={{ letterSpacing: "0.15em" }}>
                  <JapanFlag className="h-3.5 w-5" />
                  <span>Two Cultures</span>
                  <span className="text-saffron">◆</span>
                  <span>One Bridge</span>
                  <span className="text-saffron">◆</span>
                  <IndiaFlag className="h-3.5 w-5" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
