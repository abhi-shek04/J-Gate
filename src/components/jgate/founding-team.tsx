"use client";

import { Reveal, Eyebrow } from "./shared";
import { LinkedInIcon, JapanFlag, IndiaFlag } from "./icons";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const FOUNDERS = [
  {
    name: "Mr. Daisuke Tanji",
    title: "Founder & CEO, Indobox India Private Limited",
    initials: "DT",
    accent: "from-crimson to-midnight",
    border: "border-left-crimson",
    flag: "jp" as const,
    badge: "🇯🇵 Japanese National, India-based (10+ years)",
    bio: [
      "Mr. Daisuke Tanji is the architect of J-Gate and the driving force behind Indobox India Private Limited — a business consultancy and market entry firm dedicated specifically to the India-Japan business corridor.",
      "Having arrived in India in August 2013, Mr. Tanji has spent over a decade immersed in the Indian business environment while maintaining his deep roots in Japanese corporate culture, language, and values. This rare dual perspective forms the foundation of everything J-Gate represents.",
      "A connector by nature and a strategist by discipline, Mr. Tanji identified a critical gap in the India-Japan business ecosystem: Japanese companies wanting to enter India lacked not just infrastructure, but a culturally intelligent partner who understood their working style, their risk tolerance, and their timeline. J-Gate is his answer to that gap.",
      "His inauguration of J-Gate on June 22, 2026 — attended by JETRO's Senior Director, two former heads of T-Hub, and 50+ business leaders — represents the culmination of years of relationship-building, market research, and institutional trust-building across both nations.",
    ],
    span: "lg:col-span-3",
  },
  {
    name: "Mr. Viinay Sarikonda",
    title: "CEO, Genesys Info X | MoU Partner & Co-Inaugurator, J-Gate",
    initials: "VS",
    accent: "from-saffron to-navy",
    border: "border-left-saffron-thin",
    flag: "in" as const,
    badge: "🇮🇳 Hyderabad-based Business Leader",
    bio: [
      "Mr. Viinay Sarikonda is the CEO of Genesys Info X and the strategic local force behind J-Gate's operational infrastructure and business network in Hyderabad. His MoU partnership with Indobox India forms the structural backbone of J-Gate — combining Mr. Tanji's Japan-side expertise and networks with Mr. Sarikonda's deep, established presence within Hyderabad's business and technology ecosystem.",
      "As co-inaugurator of J-Gate, Mr. Sarikonda's involvement is not symbolic — it is operational, strategic, and ongoing. His network is your network.",
    ],
    span: "lg:col-span-2",
  },
];

export function FoundingTeam() {
  return (
    <section id="team" className="section-pad bg-ivory">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Founding Team</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}
            >
              The Vision Behind <span className="text-crimson">J-Gate</span>
            </h2>
          </div>
        </Reveal>

        {/* 60/40 split — lg:grid-cols-5 with 3+2 */}
        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 140} variant={i === 0 ? "left" : "right"} className={f.span}>
              <article className={cn("lift-card relative h-full overflow-hidden rounded-lg bg-pearl p-8 shadow-card", f.border)}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
                  {/* Avatar */}
                  <div className="relative mx-auto shrink-0 sm:mx-0">
                    <div
                      className={cn(
                        "flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br font-serif-jp text-3xl font-bold text-white shadow-hover ring-4 ring-pearl",
                        f.accent
                      )}
                    >
                      {f.initials}
                    </div>
                  </div>
                  <div className="mt-4 flex-1 sm:mt-0">
                    <div className="flex items-center gap-2">
                      {f.flag === "jp" ? <JapanFlag className="h-4 w-6" /> : <IndiaFlag className="h-4 w-6" />}
                      <h3 className="font-serif-jp text-2xl font-bold text-ink">{f.name}</h3>
                    </div>
                    <p className="mt-1.5 font-inter text-sm font-semibold text-crimson">{f.title}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded bg-ivory px-3 py-1.5 font-inter text-[12px] font-medium text-slate">
                      {f.badge}
                    </span>
                  </div>
                </div>

                {/* Bio paragraphs */}
                <div className="mt-6 space-y-3">
                  {f.bio.map((p, idx) => (
                    <p key={idx} className="font-inter text-[14px] leading-relaxed text-slate">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Bottom actions */}
                <div className="mt-6 flex items-center gap-3 border-t border-crimson/8 pt-5">
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="inline-flex items-center gap-1.5 rounded-md border border-crimson px-4 py-2 font-inter text-[13px] font-semibold text-crimson transition-all hover:bg-crimson hover:text-white"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Connect via J-Gate
                  </button>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    aria-label={`${f.name} on LinkedIn`}
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0A66C2]/10 text-[#0A66C2] transition-all hover:bg-[#0A66C2] hover:text-white"
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
