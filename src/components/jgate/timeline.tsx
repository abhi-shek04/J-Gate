"use client";

import { Reveal, Eyebrow } from "./shared";
import { cn } from "@/lib/utils";

const EVENTS = [
  {
    icon: "📅",
    date: "June 22, 2026",
    title: "Official Inauguration",
    desc: "J-Gate is officially launched at Cyber Gateway, Hyderabad. A landmark moment in India-Japan bilateral business relations.",
  },
  {
    icon: "👥",
    date: "Launch Day",
    title: "50+ Distinguished Guests",
    desc: "Global business leaders, entrepreneurs, investors, university students, Japanese expatriates, and business travelers from Japan gathered to celebrate the launch — reflecting the breadth of J-Gate's vision.",
  },
  {
    icon: "🎤",
    date: "Keynote Address",
    title: "Inaugural Addresses",
    desc: "Distinguished guests delivered congratulatory keynote remarks — affirming Hyderabad's growing prominence as an ideal launchpad for Japanese enterprise expansion.",
  },
  {
    icon: "🤝",
    date: "Partnership",
    title: "MoU Signed with Genesys Info X",
    desc: "Mr. Daisuke Tanji and Mr. Viinay Sarikonda jointly inaugurated J-Gate and formalized the Memorandum of Understanding powering J-Gate's operations and network.",
  },
  {
    icon: "🎌",
    date: "Omotenashi",
    title: "Omotenashi Experience",
    desc: "Guests were welcomed with Daifuku Mochi (大福餅) — Japan's traditional confection whose name means \"Great Fortune\" — paired with authentic Japanese green tea. A gesture that set the cultural tone for everything J-Gate represents.",
  },
  {
    icon: "🏢",
    date: "Day 1",
    title: "Two Founding Member Companies",
    desc: "Two Japanese companies announced their membership at inauguration — proving that demand for J-Gate existed before the doors even opened.",
  },
  {
    icon: "🎓",
    date: "Advisory",
    title: "Advisory Council Pledges Support",
    desc: "Mr. Sujit Jagirdar (former CIO, T-Hub) and Mr. Srinivas Rao Mahankali (former CEO, T-Hub) formally joined the J-Gate Advisory Council and delivered speeches expressing their full commitment.",
  },
];

export function Timeline() {
  return (
    <section id="inauguration" className="section-pad relative overflow-hidden bg-midnight">
      <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(232,160,26,0.08), transparent 60%)",
        }}
      />

      <div className="container-jg relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow light>A Historic Moment</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}
            >
              The Launch of J-Gate —{" "}
              <span className="text-gradient-saffron">June 22, 2026</span>
            </h2>
          </div>
        </Reveal>

        {/* Vertical timeline */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Center line */}
          <div
            className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-crimson via-saffron to-success sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden
          />

          <ol className="space-y-8">
            {EVENTS.map((e, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={e.title}
                  className={cn(
                    "relative pl-14 sm:grid sm:grid-cols-2 sm:gap-8 sm:pl-0",
                    !isLeft && "sm:[&>*:first-child]:col-start-2"
                  )}
                >
                  {/* Node */}
                  <span
                    className="absolute left-5 top-3 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-crimson bg-midnight text-lg shadow-crimp sm:left-1/2"
                    aria-hidden
                  >
                    {e.icon}
                    <span className="absolute inset-0 rounded-full animate-node-glow" />
                  </span>

                  <Reveal
                    variant={isLeft ? "left" : "right"}
                    delay={60}
                    className={cn(
                      "sm:col-span-1",
                      isLeft ? "sm:pr-12 sm:text-right" : "sm:col-start-2 sm:pl-12"
                    )}
                  >
                    <div className="lift-card rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm hover:border-saffron/30">
                      <span className="inline-block rounded bg-saffron/15 px-2.5 py-1 font-inter text-[11px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.08em" }}>
                        {e.date}
                      </span>
                      <h3 className="mt-3 font-serif-jp text-lg font-bold text-white">{e.title}</h3>
                      <p className="mt-2 font-inter text-[14px] leading-relaxed text-mist">{e.desc}</p>
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
