"use client";

import { Reveal, Eyebrow } from "./shared";

const FEATURES = [
  {
    icon: "🕸",
    title: "Local Network, Instantly",
    desc: "Your membership connects you immediately to vetted legal advisors, HR specialists, financial consultants, and business introducers — all with Japan-India expertise. This takes years to build alone.",
  },
  {
    icon: "⚖️",
    title: "Legal & Compliance Navigator",
    desc: "Company registration, GST, RBI, employment law — India's regulatory landscape is complex. Our partner legal network has specific Japan-India cross-border expertise. You don't navigate it alone.",
  },
  {
    icon: "👥",
    title: "Bilingual Talent Pipeline",
    desc: "Access to Indobox India's curated talent network — bilingual professionals, Japanese-culture-literate hires, and a sourcing pipeline from intern to C-suite, all screened for Japan-India compatibility.",
  },
  {
    icon: "🏛",
    title: "JETRO Coordination Support",
    desc: "Our strategic alignment with JETRO — Japan's official trade promotion body — gives members government-backed support, diplomatic introductions, and resources otherwise available only through formal channels.",
  },
  {
    icon: "🎌",
    title: "Cultural Intelligence",
    desc: "Regular workshops on Indian business etiquette for your Japan-based teams, and Japanese culture briefings for local hires. The gap that sinks most cross-cultural expansions — we close it proactively.",
  },
  {
    icon: "📈",
    title: "Market Entry, End to End",
    desc: "From your first exploratory visit to your first Indian client contract — J-Gate and Indobox India can support every step: registration, banking, hiring, compliance, and business development.",
  },
];

export function WhyBeyond() {
  return (
    <section id="why-beyond" className="section-pad relative overflow-hidden bg-midnight">
      <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(188,26,44,0.10), transparent 60%)" }}
      />
      <div className="container-jg relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow light>More Than a Workspace</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.15] text-white"
              style={{ fontSize: "clamp(2rem, 4.5vw, 2.75rem)" }}
            >
              The desk is the least important{" "}
              <span className="text-gradient-saffron">thing we offer.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[660px] font-inter leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.125rem)" }}>
              Every coworking space has desks, WiFi, and meeting rooms. J-Gate
              has those too — but they are not the reason Japanese companies
              choose us. They choose J-Gate because of what surrounds the desk:
              a network, a culture, a partner, and a team that speaks both
              languages of the India-Japan business world.
            </p>
          </div>
        </Reveal>

        {/* 6-feature glass grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 100}>
              <article className="glass-dark lift-card group h-full rounded-lg p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-crimson/15 text-2xl">
                  {f.icon}
                </div>
                <h3 className="mt-5 font-inter text-[17px] font-bold text-white">{f.title}</h3>
                <p className="mt-2.5 font-inter text-[14px] leading-relaxed text-mist">{f.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
