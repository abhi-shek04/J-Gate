"use client";

import { useState } from "react";
import { Check, X, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./shared";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  subtitle: string;
  monthly: string;
  annual: string;
  accent: string;
  border: string;
  popular?: boolean;
  cta: string;
  ctaStyle: "outline" | "red" | "gold";
  features: { text: string; included: boolean }[];
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    subtitle: "Hot Desk",
    monthly: "Contact for Pricing",
    annual: "Contact for Pricing",
    accent: "text-jgate-slate",
    border: "border-jgate-navy/10",
    cta: "Get Started",
    ctaStyle: "outline",
    features: [
      { text: "Shared desk access (5 days/week)", included: true },
      { text: "High-speed Wi-Fi", included: true },
      { text: "Access to meeting rooms (4 hrs/month)", included: true },
      { text: "Community events access", included: true },
      { text: "Basic partner network introduction", included: true },
      { text: "Dedicated desk", included: false },
      { text: "Private cabin", included: false },
    ],
  },
  {
    name: "Professional",
    subtitle: "Dedicated Desk",
    monthly: "Contact for Pricing",
    annual: "Contact for Pricing",
    accent: "text-jgate-red",
    border: "border-jgate-red",
    popular: true,
    cta: "Join Now",
    ctaStyle: "red",
    features: [
      { text: "Dedicated desk (your own space)", included: true },
      { text: "High-speed Wi-Fi", included: true },
      { text: "Meeting rooms (10 hrs/month)", included: true },
      { text: "Priority partner introductions", included: true },
      { text: "Monthly business consultation (1hr)", included: true },
      { text: "Community events + networking dinners", included: true },
      { text: "Japan-India business etiquette workshops", included: true },
      { text: "Private cabin", included: false },
    ],
  },
  {
    name: "Enterprise",
    subtitle: "Private Cabin",
    monthly: "Contact for Pricing",
    annual: "Contact for Pricing",
    accent: "text-jgate-gold",
    border: "border-jgate-gold",
    cta: "Contact Us",
    ctaStyle: "gold",
    features: [
      { text: "Private furnished cabin (2–6 seats)", included: true },
      { text: "Dedicated fiber internet", included: true },
      { text: "Unlimited meeting room access", included: true },
      { text: "VIP partner network access", included: true },
      { text: "Monthly strategic advisory session", included: true },
      { text: "JETRO coordination support", included: true },
      { text: "Market entry consulting included", included: true },
      { text: "Bilingual concierge (EN/JP)", included: true },
    ],
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="relative bg-white py-20 sm:py-28">
      <div className="pattern-rangoli absolute inset-x-0 top-0 h-24 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Membership"
            title={
              <>
                Find Your <span className="text-jgate-red">Perfect Plan</span>
              </>
            }
            subtitle="Transparent pricing. No hidden costs. Full support from Day 1."
          />
        </Reveal>

        {/* Toggle */}
        <Reveal delay={80}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span
              className={cn(
                "text-sm font-semibold transition-colors",
                !annual ? "text-jgate-navy" : "text-jgate-slate/60"
              )}
            >
              Monthly
            </span>
            <button
              role="switch"
              aria-checked={annual}
              aria-label="Toggle annual billing"
              onClick={() => setAnnual((v) => !v)}
              className={cn(
                "relative h-8 w-16 rounded-full transition-colors duration-300",
                annual ? "bg-jgate-red" : "bg-jgate-navy/15"
              )}
            >
              <span
                className={cn(
                  "absolute top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-soft transition-all duration-300",
                  annual ? "left-9" : "left-1"
                )}
              >
                {annual && <Sparkles className="h-3.5 w-3.5 text-jgate-red" />}
              </span>
            </button>
            <span
              className={cn(
                "text-sm font-semibold transition-colors",
                annual ? "text-jgate-navy" : "text-jgate-slate/60"
              )}
            >
              Annual
            </span>
            <span className="rounded-full bg-jgate-green/15 px-2.5 py-1 text-xs font-bold text-jgate-green">
              Save 20%
            </span>
          </div>
        </Reveal>

        {/* Plans */}
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 120}>
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border-2 bg-white p-7 shadow-soft transition-all duration-300 sm:p-8",
                  plan.border,
                  plan.popular
                    ? "lg:-translate-y-3 lg:shadow-soft-lg"
                    : "lift-card"
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-jgate-red px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-soft-lg">
                    ★ Most Popular
                  </span>
                )}

                <div>
                  <h3 className={cn("font-serif-jp text-2xl font-bold", plan.accent)}>
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wide text-jgate-slate/70">
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-5">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif-jp text-2xl font-bold text-jgate-navy">
                      ¥
                    </span>
                    <span className="font-serif-jp text-3xl font-bold text-jgate-navy">
                      {annual ? plan.annual : plan.monthly}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-jgate-slate/70">
                    {annual ? "/ year · billed annually" : "/ month"}
                  </p>
                </div>

                {/* CTA */}
                <button
                  onClick={() => scrollTo("contact")}
                  className={cn(
                    "btn-shine mt-6 w-full rounded-full px-5 py-3 text-sm font-semibold transition-all",
                    plan.ctaStyle === "red" &&
                      "bg-jgate-red text-white hover:bg-[#a80c26] hover:-translate-y-0.5",
                    plan.ctaStyle === "gold" &&
                      "bg-jgate-gold text-jgate-navy hover:bg-[#d98e00] hover:-translate-y-0.5",
                    plan.ctaStyle === "outline" &&
                      "border-2 border-jgate-navy/15 text-jgate-navy hover:border-jgate-red hover:text-jgate-red"
                  )}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <ul className="mt-7 space-y-3 border-t border-jgate-navy/8 pt-6">
                  {plan.features.map((f) => (
                    <li
                      key={f.text}
                      className={cn(
                        "flex items-start gap-2.5 text-sm",
                        f.included
                          ? "text-jgate-navy"
                          : "text-jgate-slate/40 line-through"
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          f.included
                            ? "bg-jgate-green/15 text-jgate-green"
                            : "bg-jgate-slate/10 text-jgate-slate/40"
                        )}
                      >
                        {f.included ? (
                          <Check className="h-3 w-3" strokeWidth={3} />
                        ) : (
                          <X className="h-3 w-3" strokeWidth={3} />
                        )}
                      </span>
                      <span className="leading-snug">{f.text}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-sm text-jgate-slate">
            All plans include access to the J-Gate community network, Omotenashi
            hospitality, and Cyber Gateway amenities.{" "}
            <button
              onClick={() => scrollTo("contact")}
              className="font-semibold text-jgate-red underline-offset-4 hover:underline"
            >
              Request a custom quote →
            </button>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
