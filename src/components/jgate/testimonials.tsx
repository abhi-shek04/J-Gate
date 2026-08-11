"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, SectionHeading } from "./shared";
import { StarIcon, QuoteMark } from "./icons";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    quote:
      "J-Gate provided exactly what we needed — a trusted local base to confidently begin our India operations. The network here is extraordinary.",
    author: "Founding Member",
    role: "Japanese Technology Company",
    initials: "FM",
    accent: "from-jgate-red to-jgate-navy",
  },
  {
    quote:
      "The Advisory Council's support and the T-Hub connection gave us immediate credibility in the Indian market.",
    author: "Japanese Business Executive",
    role: "J-Gate Member",
    initials: "BE",
    accent: "from-jgate-gold to-jgate-red",
  },
  {
    quote:
      "The spirit of Omotenashi at J-Gate made us feel at home while we navigated a completely new market.",
    author: "Japanese Entrepreneur",
    role: "Hyderabad",
    initials: "JE",
    accent: "from-jgate-green to-jgate-navy",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="h-4 w-4 text-jgate-gold" />
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
    <article className="lift-card relative h-full overflow-hidden rounded-2xl border border-jgate-navy/8 bg-white p-7 shadow-soft sm:p-8">
      <QuoteMark className="absolute right-5 top-4 h-14 w-14 text-jgate-red/8" />
      <Stars />
      <blockquote className="relative mt-4 font-serif-jp text-base font-medium leading-relaxed text-jgate-navy sm:text-lg">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-jgate-navy/8 pt-5">
        <span
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br font-serif-jp text-base font-bold text-white shadow-soft",
            accent
          )}
        >
          {initials}
        </span>
        <span>
          <span className="block font-semibold text-jgate-navy">{author}</span>
          <span className="block text-xs text-jgate-slate">{role}</span>
        </span>
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
    <section
      id="testimonials"
      className="pattern-asanoha-light relative py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Social Proof"
            title={
              <>
                What Our <span className="text-jgate-red">Community Says</span>
              </>
            }
            subtitle="Real voices from the Japanese businesses building their India story at J-Gate."
          />
        </Reveal>

        {/* Desktop grid */}
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

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-jgate-navy/15 bg-white text-jgate-navy shadow-soft transition-colors hover:bg-jgate-red hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === active
                      ? "w-6 bg-jgate-red"
                      : "w-2 bg-jgate-navy/20"
                  )}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-jgate-navy/15 bg-white text-jgate-navy shadow-soft transition-colors hover:bg-jgate-red hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
