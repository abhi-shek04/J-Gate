"use client";

import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import { cn } from "@/lib/utils";

const EVENTS = [
  {
    tag: "INAUGURATION",
    tagColor: "bg-crimson/10 text-crimson",
    title: "J-Gate Officially Opens at Cyber Gateway, Hyderabad",
    date: "June 22, 2026",
    excerpt:
      "A landmark ceremony brought together 50+ leaders, the Senior Director of JETRO, and founding members from Japan — marking the birth of Hyderabad's most significant Japan-India business platform.",
    gradient: "from-crimson to-midnight",
  },
  {
    tag: "PARTNERSHIP",
    tagColor: "bg-saffron/15 text-[#a06d00]",
    title: "J-Gate and Genesys Info X Formalize Strategic MoU",
    date: "June 22, 2026",
    excerpt:
      "The signed Memorandum of Understanding between Indobox India and Genesys Info X creates a powerful operational backbone for J-Gate, combining international reach with deep local market expertise.",
    gradient: "from-saffron to-crimson",
  },
  {
    tag: "COMMUNITY",
    tagColor: "bg-success/10 text-success",
    title: "Two Japanese Companies Become J-Gate Founding Members",
    date: "June 22, 2026",
    excerpt:
      "Proving the immediate demand for a dedicated Japan-India business hub, two Japanese companies joined J-Gate as founding members on launch day — testament to the trust built by Indobox India's networks.",
    gradient: "from-navy to-success",
  },
];

export function Events() {
  return (
    <section id="events" className="section-pad bg-ivory-warm">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>From J-Gate</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}
            >
              Latest News & <span className="text-crimson">Upcoming Events</span>
            </h2>
          </div>
        </Reveal>

        {/* 3 blog cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={i * 120}>
              <article className="lift-card group flex h-full flex-col overflow-hidden rounded-lg bg-pearl shadow-card">
                {/* Visual header */}
                <div className={cn("relative flex h-36 items-center justify-center bg-gradient-to-br", e.gradient)}>
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 1px, transparent 1.5px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <Calendar className="relative h-12 w-12 text-white/40" strokeWidth={1} />
                  <span
                    className={cn(
                      "absolute left-4 top-4 rounded px-2.5 py-1 font-inter text-[10px] font-bold uppercase",
                      e.tagColor,
                      "bg-pearl",
                      e.tagColor
                    )}
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {e.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-1.5 font-inter text-[12px] text-mist">
                    <Calendar className="h-3.5 w-3.5" />
                    {e.date}
                  </div>
                  <h3 className="mt-3 font-serif-jp text-lg font-bold leading-snug text-ink">
                    {e.title}
                  </h3>
                  <p className="mt-2 flex-1 font-inter text-[14px] leading-relaxed text-slate">
                    {e.excerpt}
                  </p>
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="mt-5 inline-flex items-center gap-1.5 font-inter text-[13px] font-semibold text-crimson transition-all hover:gap-2.5"
                  >
                    Read More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Upcoming event teaser */}
        <Reveal delay={120}>
          <div className="mt-10 overflow-hidden rounded-lg bg-navy">
            <div className="pattern-asanoha-navy flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-saffron/15 text-saffron">
                  <Clock className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-saffron/15 px-2 py-0.5 font-inter text-[10px] font-bold uppercase text-saffron" style={{ letterSpacing: "0.1em" }}>
                      Upcoming
                    </span>
                    <span className="font-inter text-[12px] text-mist">Hyderabad, Q3 2026</span>
                  </div>
                  <h3 className="mt-2 font-serif-jp text-lg font-bold text-white">
                    Japan-India Business Networking Dinner
                  </h3>
                  <p className="mt-1 font-inter text-[13px] text-mist">
                    Exclusive to J-Gate Members & Invited Guests
                  </p>
                </div>
              </div>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-shine inline-flex shrink-0 items-center gap-1.5 rounded-md bg-crimson px-5 py-3 font-inter text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-crimson-deep"
              >
                Register Interest
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
