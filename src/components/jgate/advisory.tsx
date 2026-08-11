"use client";

import { Reveal, SectionHeading } from "./shared";
import { LinkedInIcon } from "./icons";

const ADVISORS = [
  {
    name: "Mr. Sujit Jagirdar",
    title: "Advisory Council Member, J-Gate",
    former: "Chief Information Officer, T-Hub",
    initials: "SJ",
    bio: "A distinguished technology leader committed to guiding Japanese companies through India's startup and innovation landscape.",
    accent: "from-jgate-navy to-jgate-green",
  },
  {
    name: "Mr. Srinivas Rao Mahankali",
    title: "Advisory Council Member, J-Gate",
    former: "Chief Executive Officer, T-Hub",
    initials: "SM",
    bio: "A visionary ecosystem builder who brings unparalleled insights into scaling businesses within India's world-class innovation infrastructure.",
    accent: "from-jgate-red to-jgate-gold",
  },
];

export function Advisory() {
  return (
    <section id="advisory" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Advisory Council"
            title={
              <>
                Expert Guidance from{" "}
                <span className="text-jgate-red">Industry Leaders</span>
              </>
            }
            subtitle="Our advisory council brings decades of experience building India's innovation ecosystem — your strategic compass in a new market."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {ADVISORS.map((a, i) => (
            <Reveal key={a.name} delay={i * 120}>
              <article className="accent-top-gold lift-card group relative h-full overflow-hidden rounded-2xl border border-jgate-navy/8 bg-white p-7 shadow-soft sm:p-8">
                {/* decorative asanoha corner */}
                <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-jgate-gold/5" />
                <div className="relative flex items-start gap-5">
                  {/* Avatar */}
                  <div className="relative shrink-0">
                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${a.accent} font-serif-jp text-2xl font-bold text-white shadow-soft-lg ring-4 ring-white`}
                    >
                      {a.initials}
                    </div>
                    <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-jgate-gold text-xs">
                      ★
                    </span>
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif-jp text-xl font-bold text-jgate-navy">
                      {a.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-jgate-red">
                      {a.title}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-jgate-navy/5 px-3 py-1 text-xs font-semibold text-jgate-navy">
                      <span className="h-1.5 w-1.5 rounded-full bg-jgate-gold" />
                      Former: {a.former}
                    </span>
                  </div>
                </div>

                <p className="relative mt-5 text-sm leading-relaxed text-jgate-slate">
                  &ldquo;{a.bio}&rdquo;
                </p>

                {/* LinkedIn */}
                <div className="relative mt-6 flex items-center justify-between border-t border-jgate-navy/8 pt-4">
                  <span className="text-xs font-medium uppercase tracking-wide text-jgate-slate/70">
                    Connect
                  </span>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    aria-label={`${a.name} on LinkedIn`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] transition-all hover:scale-110 hover:bg-[#0A66C2] hover:text-white"
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
