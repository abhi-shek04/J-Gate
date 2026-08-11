"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import { Photo } from "./photo";
import { StarIcon, QuoteMark } from "./icons";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    id: "photo-testimonial-1",
    quote:
      "J-Gate gave us not just a desk but a complete local foundation. The partner network alone saved us months of groundwork that we would have spent building relationships from zero. For any Japanese company serious about India, this is the only rational starting point.",
    author: "Founding Member",
    role: "Japanese Technology Company · Hyderabad 2026",
    initials: "FM",
    fallback: "grad-testimonial",
  },
  {
    id: "photo-testimonial-2",
    quote:
      "The Advisory Council's T-Hub connections gave us immediate credibility with Indian clients and investors. We were taken seriously from the very first conversation — before we had a single Indian employee. That is the J-Gate effect.",
    author: "Executive Director",
    role: "Japanese Business Services Company",
    initials: "ED",
    fallback: "grad-testimonial",
  },
  {
    id: "photo-testimonial-3",
    quote:
      "Mr. Tanji and his team understand the Japanese way of doing business — the precision, the patience, the protocol. At J-Gate, that understanding is not a marketing claim. It is visible in every interaction, every meeting, every cup of tea they offer you.",
    author: "Founder",
    role: "Japanese Consumer Goods Brand · J-Gate Member 2026",
    initials: "FO",
    fallback: "grad-testimonial",
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
  id, quote, author, role, initials, fallback,
}: {
  id: string; quote: string; author: string; role: string; initials: string; fallback: string;
}) {
  return (
    <article className="lift-card relative h-full overflow-hidden rounded-lg bg-pearl p-8 shadow-card">
      <QuoteMark className="absolute right-6 top-4 h-20 w-20 text-crimson/[0.10]" />
      <Stars />
      <blockquote className="relative mt-5 font-serif-jp text-[16px] font-medium leading-relaxed text-ink">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-crimson/8 pt-5">
        <div className="w-16">
          <Photo
            id={id}
            alt={`${author}, J-Gate member`}
            fallback={fallback}
            initials={initials}
            rounded="rounded-full"
            className="h-16 w-16"
          />
        </div>
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
              Heard at <span className="text-crimson">J-Gate</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 hidden gap-6 md:grid md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </Reveal>

        {/* Mobile carousel */}
        <div className="mt-12 md:hidden">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${active * 100}%)` }}>
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="w-full shrink-0 px-1">
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={prev} aria-label="Previous testimonial" className="flex h-10 w-10 items-center justify-center rounded-md border border-crimson/15 bg-pearl text-ink shadow-card transition-colors hover:bg-crimson hover:text-white">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Go to testimonial ${i + 1}`} className={cn("h-2 rounded-full transition-all", i === active ? "w-6 bg-crimson" : "w-2 bg-slate/25")} />
              ))}
            </div>
            <button onClick={next} aria-label="Next testimonial" className="flex h-10 w-10 items-center justify-center rounded-md border border-crimson/15 bg-pearl text-ink shadow-card transition-colors hover:bg-crimson hover:text-white">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
