"use client";

import { Reveal, Eyebrow } from "./shared";
import { LinkedInIcon, JapanFlag, IndiaFlag } from "./icons";
import { Mail, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const FOUNDERS = [
  {
    name: "Mr. Daisuke Tanji",
    title: "Founder & CEO, Indobox India Private Limited",
    image: "/team/tanji.png",
    initials: "DT",
    accent: "from-crimson to-midnight",
    border: "border-left-crimson",
    flag: "jp" as const,
    badge: "🇯🇵 Japanese National, India-based (10+ years)",
    tags: ["Business Strategy", "Career Placement", "Bilateral Relations"],
    linkedin: "https://www.linkedin.com/in/daisuke-tanji/",
    bio: [
      "Mr. Daisuke Tanji is the architect of J-Gate and the driving force behind Indobox India Private Limited — a business consultancy and market entry firm dedicated specifically to the India-Japan business corridor.",
      "Having arrived in India in August 2013, Mr. Tanji has spent over a decade immersed in the Indian business environment while maintaining his deep roots in Japanese corporate culture, language, and values. This rare dual perspective forms the foundation of everything J-Gate represents.",
      "A connector by nature and a strategist by discipline, Mr. Tanji identified a critical gap in the India-Japan business ecosystem: Japanese companies wanting to enter India lacked not just infrastructure, but a culturally intelligent partner who understood their working style, their risk tolerance, and their timeline.",
    ],
    span: "lg:col-span-3",
  },
  {
    name: "Dr. Viinay Sarikonda",
    title: "CEO, Genesys Info X | MoU Partner, J-Gate",
    image: "/advisory/sarikonda.png",
    initials: "VS",
    accent: "from-saffron to-navy",
    border: "border-left-saffron-thin",
    flag: "in" as const,
    badge: "🇮🇳 Hyderabad-based Business Leader",
    tags: ["Digital Transformation", "MoU Partnerships", "Market Entry"],
    linkedin: "https://www.linkedin.com/in/dr-viinay-sarikonda-5b23261a/",
    bio: [
      "Dr. Viinay Sarikonda is the CEO of Genesys Info X and the strategic local force behind J-Gate's operational infrastructure and business network in Hyderabad. His MoU partnership with Indobox India forms the structural backbone of J-Gate.",
      "Combining Mr. Tanji's Japan-side expertise with Dr. Sarikonda's established presence within Hyderabad's business and tech ecosystem provides our members with direct, high-level institutional access.",
    ],
    span: "lg:col-span-2",
  },
];

export function FoundingTeam() {
  return (
    <section id="team" className="section-pad bg-ivory dark:bg-[#0c1424]">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Founding Team</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink dark:text-white"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}
            >
              The Vision Behind <span className="text-crimson dark:text-rose-400">J-Gate</span>
            </h2>
          </div>
        </Reveal>

        {/* 60/40 split — lg:grid-cols-5 with 3+2 */}
        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 140} variant={i === 0 ? "left" : "right"} className={f.span}>
              <article className={cn("luxury-light-card card-sheen relative flex h-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-6 sm:p-8 shadow-card hover:shadow-2xl transition-all duration-300", f.border)}>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
                    {/* Circular Avatar */}
                    <div className="relative mx-auto shrink-0 sm:mx-0">
                      <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden border-2 border-slate-200 dark:border-white/20 bg-slate-50 dark:bg-white/5 shadow-md transition-transform duration-300 hover:scale-105 hover:border-crimson/50">
                        <img
                          src={f.image}
                          alt={f.name}
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex-1 text-center sm:text-left sm:mt-0">
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        {f.flag === "jp" ? <JapanFlag className="h-4 w-6" /> : <IndiaFlag className="h-4 w-6" />}
                        <h3 className="font-serif-jp text-xl sm:text-2xl font-bold text-ink dark:text-white">{f.name}</h3>
                      </div>
                      <p className="mt-1 font-inter text-xs sm:text-sm font-semibold text-crimson dark:text-rose-400">{f.title}</p>
                      <span className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-white/5 px-3 py-1 font-inter text-[11px] font-medium text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/10">
                        {f.badge}
                      </span>
                    </div>
                  </div>

                  {/* Bio paragraphs */}
                  <div className="mt-6 space-y-3">
                    {f.bio.map((p, idx) => (
                      <p key={idx} className="font-inter text-[13px] sm:text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {f.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="rounded px-2.5 py-1 font-inter text-[10.5px] font-semibold bg-slate-100 dark:bg-white/5 border border-slate-200/70 dark:border-white/10 text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom actions */}
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 dark:border-white/10 pt-5">
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-crimson/80 dark:border-rose-400/80 px-4 py-2 font-inter text-[12px] sm:text-[13px] font-semibold text-crimson dark:text-rose-400 transition-all hover:bg-crimson hover:text-white dark:hover:bg-rose-600"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Connect via J-Gate
                  </button>
                  {f.linkedin && (
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${f.name} on LinkedIn`}
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200/80 dark:border-white/15 bg-slate-50 dark:bg-white/5 px-3 py-2 font-inter text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] dark:hover:text-[#388bfd] transition-all shadow-2xs"
                    >
                      <span className="flex h-3.5 w-3.5 items-center justify-center rounded bg-[#0A66C2] text-white text-[8.5px] font-black">
                        in
                      </span>
                      <span>CONNECT</span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
