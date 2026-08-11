"use client";

import { Check } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import { Photo } from "./photo";

const GROUPS = [
  {
    heading: "Workspace",
    items: [
      "Dedicated personal desks with lockable storage",
      "Private furnished cabins (2–6 seats, brandable)",
      "24/7 access with secure key-card entry",
      "Ergonomic chairs and height-adjustable desks",
      "Enterprise fiber broadband (dedicated line available)",
      "UPS power backup — zero downtime guarantee",
    ],
  },
  {
    heading: "Meeting & Collaboration",
    items: [
      "Fully equipped conference rooms (4-person to 20-person)",
      "4K presentation displays and video conferencing setup",
      "Soundproofed phone booths for private calls",
      "Whiteboard rooms for strategy sessions",
      "Event space for launches, workshops, and seminars",
    ],
  },
  {
    heading: "Lifestyle & Culture",
    items: [
      "Canteen with Japanese and Indian cuisine options",
      "Japanese green tea and premium coffee stations",
      "Daifuku Mochi and cultural refreshments — Omotenashi standard",
      "Lounge area for informal conversations",
      "Bilingual signage throughout (English + Japanese)",
      "Prayer/meditation room",
      "High-speed printer, scanner, and photocopier",
    ],
  },
];

const CARDS = [
  { id: "photo-amenity-meeting", label: "Conference Rooms", desc: "Seats up to 20 · 4K display", fallback: "grad-amenity", initials: "CR" },
  { id: "photo-amenity-lounge", label: "Canteen & Lounge", desc: "Japanese and Indian menu", fallback: "grad-amenity", initials: "CN" },
  { id: "photo-amenity-cabin", label: "Private Cabins", desc: "Fully furnished, brandable", fallback: "grad-amenity", initials: "PC" },
];

export function Amenities() {
  return (
    <section id="amenities" className="section-pad relative overflow-hidden bg-navy">
      <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(232,160,26,0.06), transparent 55%)" }}
      />
      <div className="container-jg relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow light>Inside J-Gate</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}
            >
              Every Detail Designed for{" "}
              <span className="text-gradient-saffron">Japanese Professionals</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Left — hotel spec sheet list */}
          <Reveal variant="left">
            <div className="space-y-8">
              {GROUPS.map((g) => (
                <div key={g.heading}>
                  <h3 className="font-serif-jp text-lg font-bold text-saffron" style={{ letterSpacing: "0.05em" }}>
                    {g.heading}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 font-inter text-[15px] text-mist">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="leading-snug">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — 3 glass photo cards */}
          <Reveal variant="right" delay={120}>
            <div className="space-y-4">
              {CARDS.map((c) => (
                <div
                  key={c.id}
                  className="glass-dark lift-card flex items-stretch overflow-hidden rounded-lg"
                >
                  <div className="w-32 shrink-0 sm:w-40">
                    <Photo
                      id={c.id}
                      alt={c.label}
                      fallback={c.fallback}
                      initials={c.initials}
                      rounded="rounded-l-lg"
                      className="h-full min-h-[120px] w-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-5">
                    <h4 className="font-inter text-[16px] font-semibold text-white">{c.label}</h4>
                    <p className="mt-1 font-inter text-[13px] text-mist">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
