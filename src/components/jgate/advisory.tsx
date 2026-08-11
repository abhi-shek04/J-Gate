"use client";

import { Reveal, Eyebrow } from "./shared";
import { LinkedInIcon } from "./icons";
import { cn } from "@/lib/utils";

const ADVISORS = [
  {
    name: "Mr. Sujit Jagirdar",
    initials: "SJ",
    title: "Advisory Council Member — J-Gate",
    former: "Chief Information Officer, T-Hub",
    accent: "from-navy to-crimson",
    bio: "Mr. Jagirdar brings to J-Gate an extraordinary depth of experience in technology leadership and innovation ecosystem building. During his tenure as CIO of T-Hub — India's largest and most globally connected startup hub — he oversaw the digital infrastructure and technology strategy that enabled thousands of startups to scale. His commitment to J-Gate reflects a belief that the India-Japan business corridor represents one of the most significant opportunities of this decade, and he is personally invested in ensuring that Japanese companies navigating this corridor have access to world-class strategic guidance.",
    quote: "Japanese companies bring a quality of discipline and innovation that India needs. J-Gate is the platform that makes that partnership possible at scale.",
  },
  {
    name: "Mr. Srinivas Rao Mahankali",
    initials: "SRM",
    title: "Advisory Council Member — J-Gate",
    former: "Chief Executive Officer, T-Hub",
    accent: "from-navy to-saffron",
    bio: "As former CEO of T-Hub, Mr. Mahankali led one of India's most consequential innovation institutions at its most critical growth phase — building it into a globally recognized platform for startups, corporate innovation, and government-industry collaboration. He brings to J-Gate an unrivaled understanding of how to connect global businesses with India's opportunity ecosystem. His advisory role is a direct expression of his conviction in Mr. Daisuke Tanji's vision and in the transformative potential of the India-Japan business relationship.",
    quote: "What Daisuke has built with J-Gate is what Hyderabad has been waiting for — a real, trusted bridge for Japanese companies that respects both cultures and delivers results.",
  },
];

export function Advisory() {
  return (
    <section id="advisory" className="section-pad relative overflow-hidden bg-navy">
      <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 20% 30%, rgba(232,160,26,0.08), transparent 55%)",
        }}
      />
      <div className="container-jg relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow light>Advisory Council</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}
            >
              Guided by India&apos;s{" "}
              <span className="text-gradient-saffron">Most Respected Business Leaders</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
              J-Gate&apos;s Advisory Council brings together former leaders of
              India&apos;s most significant innovation institutions, ensuring
              that every member company benefits from strategic insights that
              would otherwise take years and considerable resources to access
              independently.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {ADVISORS.map((a, i) => (
            <Reveal key={a.name} delay={i * 140} variant={i === 0 ? "left" : "right"}>
              <article className="border-top-saffron lift-card group relative h-full overflow-hidden rounded-lg bg-ink/60 p-8 backdrop-blur-sm">
                <div className="flex items-start gap-5">
                  {/* Avatar */}
                  <div className="relative shrink-0">
                    <div
                      className={cn(
                        "flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br font-serif-jp text-2xl font-bold text-white shadow-hover ring-4 ring-navy/60",
                        a.accent
                      )}
                    >
                      {a.initials}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif-jp text-xl font-bold text-white">{a.name}</h3>
                    <p className="mt-1 font-inter text-sm text-saffron">{a.title}</p>
                    <span className="mt-2 inline-flex items-center gap-1.5 rounded bg-saffron/15 px-2.5 py-1 font-inter text-[11px] font-bold uppercase text-saffron" style={{ letterSpacing: "0.05em" }}>
                      ★ T-Hub Alumnus
                    </span>
                    <p className="mt-2 font-inter text-[12px] text-mist">Former: {a.former}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="mt-5 font-inter text-[14px] leading-relaxed text-mist">
                  {a.bio}
                </p>

                {/* Closing pull quote */}
                <blockquote className="mt-5 border-l-2 border-saffron/50 pl-4 font-serif-jp text-[15px] italic leading-relaxed text-white/90">
                  &ldquo;{a.quote}&rdquo;
                </blockquote>

                {/* LinkedIn */}
                <div className="mt-6 flex items-center justify-end border-t border-white/8 pt-4">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    aria-label={`${a.name} on LinkedIn`}
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-white/8 text-white/70 transition-all hover:bg-[#0A66C2] hover:text-white"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
