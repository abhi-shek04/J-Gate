"use client";

import { Reveal, SectionHeading } from "./shared";
import { cn } from "@/lib/utils";

const MILESTONES = [
  {
    icon: "📅",
    date: "June 22, 2026",
    title: "Official Inauguration",
    desc: "J-Gate officially opens its doors at Cyber Gateway, Hyderabad — marking the birth of a new Japan-India gateway.",
  },
  {
    icon: "👥",
    date: "Launch Day",
    title: "50+ Distinguished Guests",
    desc: "Entrepreneurs, diplomats, students and industry leaders gathered to witness the inauguration ceremony.",
  },
  {
    icon: "🍡",
    date: "Omotenashi",
    title: "Daifuku Mochi & Green Tea",
    desc: "Japanese Daifuku Mochi and green tea were served in the true spirit of Omotenashi (おもてなし).",
  },
  {
    icon: "🎤",
    date: "Keynote Address",
    title: "Mr. Naoto Nakadate, JETRO",
    desc: "Senior Director of JETRO delivered the keynote, underscoring the importance of Japan-India collaboration.",
  },
  {
    icon: "🏢",
    date: "Day 1",
    title: "2 Founding Member Companies",
    desc: "Two Japanese companies joined as founding members on launch day — proving immediate market demand.",
  },
  {
    icon: "🤝",
    date: "Partnership",
    title: "MoU with Genesys Info X",
    desc: "A strategic MoU was signed with Genesys Info X, combining international networks with deep local expertise.",
  },
];

export function Timeline() {
  return (
    <section
      id="inauguration"
      className="relative overflow-hidden bg-jgate-navy py-20 sm:py-28"
    >
      <div className="pattern-asanoha-dark absolute inset-0 opacity-70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(244,163,0,0.10), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Milestone"
            title={
              <>
                A <span className="text-gradient-gold">Historic Launch</span>
              </>
            }
            subtitle="On June 22, 2026, J-Gate marked the beginning of a new chapter in Japan-India business collaboration."
          />
        </Reveal>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* vertical line */}
          <div
            className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-jgate-gold via-jgate-red to-jgate-green sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden
          />

          <ol className="space-y-8">
            {MILESTONES.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={m.title}
                  className={cn(
                    "relative pl-14 sm:grid sm:grid-cols-2 sm:gap-8 sm:pl-0",
                    isLeft ? "" : "sm:[&>*:first-child]:col-start-2"
                  )}
                >
                  {/* Node */}
                  <span
                    className="absolute left-5 top-2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-jgate-gold bg-jgate-navy text-lg shadow-soft-lg sm:left-1/2"
                    aria-hidden
                  >
                    {m.icon}
                  </span>

                  <Reveal
                    delay={60}
                    className={cn(
                      "sm:col-span-1",
                      isLeft ? "sm:pr-12 sm:text-right" : "sm:col-start-2 sm:pl-12"
                    )}
                  >
                    <div className="lift-card rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md hover:border-jgate-gold/40 sm:p-6">
                      <span className="inline-flex rounded-full bg-jgate-gold/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-jgate-gold">
                        {m.date}
                      </span>
                      <h3 className="mt-3 font-serif-jp text-lg font-bold text-white">
                        {m.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">
                        {m.desc}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
