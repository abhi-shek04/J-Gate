"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import { StarIcon, QuoteMark } from "./icons";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    quote:
      "J-Gate gave us exactly what we needed when entering India — not just a desk, but a complete local foundation. The partner network alone saved us months of groundwork. For any Japanese company serious about India, this is the only way to begin.",
    author: "Founding Member",
    role: "Japanese Technology Company | Hyderabad, 2026",
    initials: "FM",
    accent: "from-crimson to-midnight",
  },
  {
    quote:
      "The Advisory Council's connections and T-Hub's ecosystem gave us immediate credibility with Indian clients and investors. We were taken seriously from the first conversation — that is the J-Gate effect.",
    author: "Executive Director",
    role: "Japanese Business Services Company | J-Gate Member",
    initials: "ED",
    accent: "from-saffron to-crimson",
  },
  {
    quote:
      "Mr. Tanji and his team understand the Japanese way of doing business. The cultural sensitivity here is not performative — it is embedded in how J-Gate operates every single day. We feel at home, and we feel supported.",
    author: "Founder",
    role: "Japanese Consumer Goods Company | Hyderabad, 2026",
    initials: "FO",
    accent: "from-navy to-success",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="h-4 w-4 text-saffron" />
      ))}
    </div>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
  initials,
  accent,
}: {
  quote: string;
  author: string;
  role: string;
  initials: string;
  accent: string;
}) {
  return (
    <article className="lift-card relative h-full overflow-hidden rounded-lg bg-pearl p-8 shadow-card">
      <QuoteMark className="absolute right-6 top-4 h-20 w-20 text-crimson/[0.08]" />
      <Stars />
      <blockquote className="relative mt-5 font-serif-jp text-[16px] font-medium leading-relaxed text-ink">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-crimson/8 pt-5">
        <span
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br font-serif-jp text-base font-bold text-white shadow-card",
            accent
          )}
        >
          {initials}
        </span>
        <div>
          <div className="font-inter text-sm font-semibold text-ink">{author}</div>
          <div className="font-inter text-[12px] text-mist">{role}</div>
        </div>
      </figcaption>
    </article>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const count = TESTIMONIALS.length;
  const prev = () => setActive((a) => (a - 1 + count) % count);
  const next = () => setActive((a) => (a + 1) % count);

  return (
    <section id="testimonials" className="section-pad bg-ivory">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Member Voices</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}
            >
              What Our <span className="text-crimson">Community Says</span>
            </h2>
          </div>
        </Reveal>

        {/* Desktop 3-col grid */}
        <Reveal delay={100}>
          <div className="mt-14 hidden gap-6 md:grid md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.author} {...t} />
            ))}
          </div>
        </Reveal>

        {/* Mobile carousel */}
        <div className="mt-12 md:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.author} className="w-full shrink-0 px-1">
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-crimson/15 bg-pearl text-ink shadow-card transition-colors hover:bg-crimson hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn("h-2 rounded-full transition-all", i === active ? "w-6 bg-crimson" : "w-2 bg-slate/25")}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-crimson/15 bg-pearl text-ink shadow-card transition-colors hover:bg-crimson hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
