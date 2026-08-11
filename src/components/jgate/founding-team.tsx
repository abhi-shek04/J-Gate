"use client";

import { Reveal, SectionHeading } from "./shared";
import { JapanFlag, IndiaFlag, LinkedInIcon } from "./icons";

const FOUNDERS = [
  {
    name: "Mr. Daisuke Tanji",
    role: "Founder & CEO, Indobox India Pvt. Ltd.",
    description:
      "With deep roots in both Japanese corporate culture and Indian business dynamics, Mr. Tanji founded J-Gate to create a sustainable bridge for Japanese enterprises seeking to grow in South Asia.",
    badge: "🇯🇵 Japan-India Bridge Builder",
    initials: "DT",
    accent: "from-jgate-red to-jgate-navy",
    flag: "jp",
  },
  {
    name: "Mr. Viinay Sarikonda",
    role: "CEO, Genesys Info X",
    description:
      "Co-inaugurator of J-Gate and strategic MoU partner, Mr. Sarikonda brings local business expertise and a powerful Hyderabad network to J-Gate members.",
    badge: "🤝 Strategic MoU Partner",
    initials: "VS",
    accent: "from-jgate-gold to-jgate-green",
    flag: "in",
  },
];

export function FoundingTeam() {
  return (
    <section id="team" className="pattern-asanoha-light relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Leadership"
            title={
              <>
                The Minds Behind{" "}
                <span className="text-jgate-red">J-Gate</span>
              </>
            }
            subtitle="Visionary founders uniting Japanese enterprise discipline with Indian market expertise."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 140}>
              <article className="accent-top-red lift-card group relative h-full overflow-hidden rounded-3xl border border-jgate-navy/8 bg-white p-8 shadow-soft sm:p-10">
                {/* glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-jgate-red/8 blur-2xl" />

                <div className="relative flex flex-col items-center text-center">
                  {/* Avatar with ring */}
                  <div className="relative">
                    <div
                      className={`flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br ${f.accent} font-serif-jp text-4xl font-bold text-white shadow-soft-lg ring-4 ring-white`}
                    >
                      {f.initials}
                    </div>
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-jgate-navy px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-soft">
                      Founder
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif-jp text-2xl font-bold text-jgate-navy">
                    {f.name}
                  </h3>
                  <p className="mt-1.5 flex items-center justify-center gap-2 text-sm font-medium text-jgate-red">
                    {f.flag === "jp" ? (
                      <JapanFlag className="h-3.5 w-5" />
                    ) : (
                      <IndiaFlag className="h-3.5 w-5" />
                    )}
                    {f.role}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-jgate-slate">
                    {f.description}
                  </p>

                  {/* Badge */}
                  <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-jgate-gold/15 to-jgate-red/15 px-4 py-2 text-xs font-semibold text-jgate-navy ring-1 ring-jgate-gold/30">
                    {f.badge}
                  </span>

                  {/* Connect */}
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    aria-label={`${f.name} on LinkedIn`}
                    className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] transition-all hover:scale-110 hover:bg-[#0A66C2] hover:text-white"
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
