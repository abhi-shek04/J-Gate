"use client";

import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import { Photo, useLightbox, type PhotoItem } from "./photo";
import { cn } from "@/lib/utils";

const EVENT_PHOTOS: PhotoItem[] = [
  { id: "photo-event-inauguration", alt: "J-Gate inauguration event", label: "Inauguration Ceremony", fallback: "grad-event", initials: "IG" },
  { id: "photo-event-networking", alt: "J-Gate networking dinner", label: "Networking Dinner", fallback: "grad-event", initials: "ND" },
  { id: "photo-event-workshop", alt: "Japan-India business workshop at J-Gate", label: "Business Workshop", fallback: "grad-event", initials: "WS" },
  { id: "photo-event-cultural", alt: "Cultural exchange event at J-Gate", label: "Cultural Exchange", fallback: "grad-event", initials: "CE" },
];

const NEWS = [
  {
    tag: "INAUGURATION",
    tagColor: "bg-crimson/10 text-crimson",
    title: "J-Gate Opens at Cyber Gateway, Hyderabad",
    date: "June 22, 2026 · Hyderabad",
    excerpt: "A landmark ceremony that brought together tech leaders, T-Hub alumni, university students, Japanese business travelers, and Hyderabad's most influential entrepreneurs — marking the official launch of India's most significant Japan-business hub.",
  },
  {
    tag: "PARTNERSHIP",
    tagColor: "bg-saffron/15 text-[#a06d00]",
    title: "MoU Signed with Genesys Info X",
    date: "June 22, 2026 · Cyber Gateway",
    excerpt: "The Memorandum of Understanding between Indobox India and Genesys Info X creates the structural backbone of J-Gate's operations, combining Japan-side expertise with deep local Hyderabad networks.",
  },
  {
    tag: "UPCOMING",
    tagColor: "bg-success/10 text-success",
    title: "Japan-India Business Networking Dinner — Q3 2026",
    date: "Coming Soon · Hyderabad · Members Only",
    excerpt: "An exclusive bilateral networking dinner for J-Gate members, invited Japanese business travelers, and Hyderabad's top business leaders.",
    cta: "Register Interest →",
  },
];

export function Events() {
  const { open } = useLightbox();
  const openAt = (i: number) => open(EVENT_PHOTOS, i);

  return (
    <section id="events" className="section-pad relative overflow-hidden bg-navy">
      <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
      <div className="container-jg relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow light>Community &amp; Events</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.375rem)" }}
            >
              Life Inside <span className="text-gradient-saffron">J-Gate</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
              J-Gate is not just where you work — it&apos;s where you belong.
              Regular events, bilateral dinners, and cultural exchanges make
              J-Gate members part of Hyderabad&apos;s most connected
              international business community.
            </p>
          </div>
        </Reveal>

        {/* Horizontal scrollable photo strip */}
        <Reveal delay={80}>
          <div
            className="mt-12 flex snap-x gap-4 overflow-x-auto pb-4"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "thin" }}
          >
            {EVENT_PHOTOS.map((p, i) => (
              <div
                key={p.id}
                className="group relative w-[300px] shrink-0 sm:w-[340px]"
                style={{ scrollSnapAlign: "start" }}
              >
                <Photo
                  id={p.id}
                  alt={p.alt}
                  fallback={p.fallback}
                  initials={p.initials}
                  rounded="rounded-lg"
                  className="h-60 w-full cursor-pointer"
                  onClick={() => openAt(i)}
                />
                <div className="pointer-events-none absolute inset-0 flex items-end">
                  <div className="w-full rounded-b-lg px-4 py-3 font-inter text-[13px] font-semibold text-white" style={{ background: "linear-gradient(to top, rgba(8,15,26,0.85), transparent)" }}>
                    {p.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 3 news cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {NEWS.map((n, i) => (
            <Reveal key={n.title} delay={i * 120}>
              <article className="glass-dark lift-card flex h-full flex-col rounded-lg p-6">
                <span
                  className={cn("inline-block w-fit rounded px-2.5 py-1 font-inter text-[10px] font-bold uppercase", n.tagColor)}
                  style={{ letterSpacing: "0.1em" }}
                >
                  {n.tag}
                </span>
                <div className="mt-3 flex items-center gap-1.5 font-inter text-[12px] text-mist">
                  <Calendar className="h-3.5 w-3.5" />
                  {n.date}
                </div>
                <h3 className="mt-3 font-serif-jp text-lg font-bold leading-snug text-white">{n.title}</h3>
                <p className="mt-2 flex-1 font-inter text-[14px] leading-relaxed text-mist">{n.excerpt}</p>
                {n.cta ? (
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-crimson px-4 py-2 font-inter text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-crimson-deep"
                  >
                    <Clock className="h-3.5 w-3.5" />
                    {n.cta}
                  </button>
                ) : (
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="mt-4 inline-flex items-center gap-1.5 font-inter text-[13px] font-semibold text-saffron transition-all hover:gap-2.5"
                  >
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
