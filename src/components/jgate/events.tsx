"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { Reveal, SectionHeading } from "./shared";
import { cn } from "@/lib/utils";

const EVENTS = [
  {
    tag: "Inauguration",
    title: "J-Gate Officially Opens Its Doors at Cyber Gateway",
    date: "June 22, 2026",
    excerpt:
      "A grand launch ceremony welcomed 50+ leaders, entrepreneurs, and students to mark the birth of Hyderabad's premier Japan-India hub.",
    gradient: "from-jgate-red to-jgate-navy",
    emoji: "开业",
  },
  {
    tag: "Partnership",
    title: "J-Gate Signs MoU with Genesys Info X",
    date: "June 22, 2026",
    excerpt:
      "Combining international networks with deep local expertise, J-Gate's MoU with Genesys Info X strengthens our market entry capabilities.",
    gradient: "from-jgate-gold to-jgate-green",
    emoji: "🤝",
  },
  {
    tag: "Milestone",
    title: "Two Japanese Companies Join as Founding Members",
    date: "June 22, 2026",
    excerpt:
      "Proving immediate market demand, J-Gate welcomes its first two Japanese member companies on launch day.",
    gradient: "from-jgate-navy to-jgate-green",
    emoji: "📈",
  },
];

const TAG_STYLES: Record<string, string> = {
  Inauguration: "bg-jgate-red/10 text-jgate-red ring-jgate-red/20",
  Partnership: "bg-jgate-gold/15 text-[#a06d00] ring-jgate-gold/30",
  Milestone: "bg-jgate-green/10 text-jgate-green ring-jgate-green/20",
};

export function Events() {
  return (
    <section id="events" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="News & Updates"
            title={
              <>
                Latest from <span className="text-jgate-red">J-Gate</span>
              </>
            }
            subtitle="Stories, milestones and partnerships from Hyderabad's Japan-India business gateway."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={i * 120}>
              <article className="lift-card group flex h-full flex-col overflow-hidden rounded-2xl border border-jgate-navy/8 bg-white shadow-soft">
                {/* Visual header */}
                <div
                  className={cn(
                    "relative flex h-40 items-center justify-center bg-gradient-to-br",
                    e.gradient
                  )}
                >
                  <div className="pattern-rangoli absolute inset-0 opacity-40" />
                  <span className="relative font-serif-jp text-4xl font-bold text-white/90 drop-shadow">
                    {e.emoji}
                  </span>
                  <span
                    className={cn(
                      "absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ring-1",
                      TAG_STYLES[e.tag]
                    )}
                  >
                    {e.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-jgate-slate">
                    <Calendar className="h-3.5 w-3.5" />
                    {e.date}
                  </div>
                  <h3 className="mt-3 font-serif-jp text-lg font-bold leading-snug text-jgate-navy">
                    {e.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-jgate-slate">
                    {e.excerpt}
                  </p>
                  <button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-jgate-red transition-all hover:gap-2.5"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
