"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import { Photo } from "./photo";
import { cn } from "@/lib/utils";

type Plan = {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  subPrice: string;
  photoId: string;
  fallback: string;
  initials: string;
  borderTop: string;
  badge?: { text: string; bg: string; color: string };
  cta: string;
  ctaStyle: "outline-slate" | "filled-crimson" | "outline-saffron";
  features: { text: string; included: boolean }[];
};

const PLANS: Plan[] = [
  {
    id: "explorer",
    name: "Explorer",
    subtitle: "Hot Desk Access",
    price: "Contact for Pricing",
    subPrice: "Perfect for initial market exploration",
    photoId: "photo-plan-hotdesk",
    fallback: "grad-plan-hotdesk",
    initials: "EX",
    borderTop: "border-top-slate",
    cta: "Enquire Now",
    ctaStyle: "outline-slate",
    features: [
      { text: "Shared hot desk — 5 days/week", included: true },
      { text: "High-speed fiber WiFi", included: true },
      { text: "4 meeting room hours/month", included: true },
      { text: "Business address — Cyber Gateway", included: true },
      { text: "Mail handling", included: true },
      { text: "Community events access", included: true },
      { text: "Basic partner introductions", included: true },
      { text: "Dedicated desk", included: false },
      { text: "Private cabin", included: false },
      { text: "Advisory access", included: false },
    ],
  },
  {
    id: "member",
    name: "Member",
    subtitle: "Dedicated Desk — Your Permanent Seat",
    price: "Contact for Pricing",
    subPrice: "Your permanent seat in Hyderabad's Japan hub",
    photoId: "photo-plan-dedicated",
    fallback: "grad-plan-dedicated",
    initials: "MB",
    borderTop: "border-top-crimson",
    badge: { text: "MOST POPULAR", bg: "bg-crimson", color: "text-white" },
    cta: "Join Now →",
    ctaStyle: "filled-crimson",
    features: [
      { text: "Your own locked dedicated desk", included: true },
      { text: "Enterprise fiber WiFi", included: true },
      { text: "12 meeting room hours/month", included: true },
      { text: "Business address — Cyber Gateway", included: true },
      { text: "Mail & courier management", included: true },
      { text: "Priority partner introductions (legal, HR, finance, tech)", included: true },
      { text: "1hr/month strategic business consultation", included: true },
      { text: "All community events + bilateral networking dinners", included: true },
      { text: "Japan-India business culture workshops", included: true },
      { text: "T-Hub co-innovation coordination", included: true },
      { text: "Member directory listing", included: true },
      { text: "Private cabin", included: false },
    ],
  },
  {
    id: "headquarters",
    name: "Headquarters",
    subtitle: "Your Private India Office",
    price: "Custom — Contact Us",
    subPrice: "Built around your team's specific needs",
    photoId: "photo-plan-cabin",
    fallback: "grad-plan-cabin",
    initials: "HQ",
    borderTop: "border-top-gold-feature",
    badge: { text: "FLAGSHIP", bg: "bg-saffron", color: "text-ink" },
    cta: "Contact Our Team",
    ctaStyle: "outline-saffron",
    features: [
      { text: "Private furnished cabin (2–6 seats, brandable)", included: true },
      { text: "Dedicated fiber internet line", included: true },
      { text: "Unlimited conference room access", included: true },
      { text: "VIP partner network (direct introductions)", included: true },
      { text: "Monthly advisory council session", included: true },
      { text: "Full market entry consulting package", included: true },
      { text: "Bilingual concierge (EN + JP)", included: true },
      { text: "Dedicated receptionist support", included: true },
      { text: "Priority event hosting rights", included: true },
      { text: "Custom branding inside J-Gate premises", included: true },
      { text: "Complete Indobox talent sourcing access", included: true },
      { text: "Telangana State government liaison", included: true },
    ],
  },
];

export function Membership() {
  const [annual, setAnnual] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="membership" className="section-pad bg-ivory">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Your Membership</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
              style={{ fontSize: "clamp(2rem, 4.5vw, 2.75rem)" }}
            >
              Choose Your <span className="text-crimson">Base of Operations</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.125rem)" }}>
              Every plan includes your Cyber Gateway business address, partner
              network access, and the J-Gate community. The difference is how
              deep you go.
            </p>
          </div>
        </Reveal>

        {/* Toggle */}
        <Reveal delay={80}>
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className={cn("font-inter text-sm font-medium transition-colors", !annual ? "text-ink" : "text-mist")}>Monthly</span>
            <button
              role="switch"
              aria-checked={annual}
              aria-label="Toggle annual billing"
              onClick={() => setAnnual((v) => !v)}
              className={cn("relative h-7 w-14 rounded-full transition-colors duration-300", annual ? "bg-crimson" : "bg-slate/25")}
            >
              <span className={cn("absolute top-1 h-5 w-5 rounded-full bg-white shadow-card transition-all duration-300", annual ? "left-8" : "left-1")} />
            </button>
            <span className={cn("font-inter text-sm font-medium transition-colors", annual ? "text-ink" : "text-mist")}>Annual</span>
            <span className="rounded bg-success/12 px-2 py-0.5 font-inter text-xs font-bold text-success">Save 20%</span>
          </div>
        </Reveal>

        {/* Plans */}
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 120}>
              <article
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-lg bg-pearl shadow-card transition-all duration-300 lift-card",
                  plan.borderTop,
                  plan.id === "member" && "lg:-translate-y-3 lg:shadow-hover"
                )}
              >
                {/* Header photo */}
                <div className="relative h-36">
                  <Photo
                    id={plan.photoId}
                    alt={`${plan.name} plan at J-Gate`}
                    fallback={plan.fallback}
                    initials={plan.initials}
                    rounded="rounded-none"
                    className="h-full w-full"
                  />
                  {plan.badge && (
                    <span
                      className={cn(
                        "absolute right-4 top-4 rounded px-2.5 py-1 font-inter text-[10px] font-bold uppercase",
                        plan.badge.bg,
                        plan.badge.color
                      )}
                      style={{ letterSpacing: "0.08em" }}
                    >
                      {plan.badge.text}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif-jp text-2xl font-bold text-ink">{plan.name}</h3>
                  <p className="mt-1 font-inter text-[13px] font-medium uppercase text-mist" style={{ letterSpacing: "0.05em" }}>
                    {plan.subtitle}
                  </p>

                  <div className="mt-4">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif-jp text-2xl font-bold text-crimson">¥</span>
                      <span className="font-serif-jp text-base font-bold text-ink">{plan.price}</span>
                    </div>
                    <p className="mt-1.5 font-inter text-[13px] italic text-slate">{plan.subPrice}</p>
                  </div>

                  <button
                    onClick={() => scrollTo("contact")}
                    className={cn(
                      "mt-5 w-full rounded-md px-5 py-3 font-inter text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5",
                      plan.ctaStyle === "filled-crimson" && "bg-crimson text-white hover:bg-crimson-deep",
                      plan.ctaStyle === "outline-slate" && "border border-slate text-slate hover:bg-slate hover:text-white",
                      plan.ctaStyle === "outline-saffron" && "border border-saffron text-[#a06d00] hover:bg-saffron hover:text-ink"
                    )}
                  >
                    {plan.cta}
                  </button>

                  <ul className="mt-6 space-y-2.5 border-t border-crimson/8 pt-5">
                    {plan.features.map((f) => (
                      <li
                        key={f.text}
                        className={cn(
                          "flex items-start gap-2.5 font-inter text-[13px] leading-snug",
                          f.included ? "text-ink" : "text-mist/60 line-through"
                        )}
                      >
                        <span
                          className={cn(
                            "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                            f.included ? "bg-success/15 text-success" : "bg-mist/15 text-mist/50"
                          )}
                        >
                          {f.included ? <Check className="h-2.5 w-2.5" strokeWidth={3} /> : <X className="h-2.5 w-2.5" strokeWidth={3} />}
                        </span>
                        <span>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center font-inter text-[13px] leading-relaxed text-mist">
            All memberships subject to availability. Pricing customized by
            duration, team size, and service scope. Proposals available in
            English and Japanese.
            <br />
            <span className="font-sans-jp">価格はご要望に応じてカスタマイズいたします。</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
