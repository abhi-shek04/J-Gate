"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  subtitle: string;
  monthly: string;
  annual: string;
  note: string;
  borderTop: string;
  badge?: { text: string; bg: string };
  cta: string;
  ctaStyle: "outline-crimson" | "filled-crimson" | "outline-saffron";
  features: { text: string; included: boolean }[];
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    subtitle: "Hot Desk Access",
    monthly: "Contact for Pricing",
    annual: "Contact for Pricing",
    note: "Perfect for initial market exploration",
    borderTop: "border-top-slate",
    cta: "Enquire Now",
    ctaStyle: "outline-crimson",
    features: [
      { text: "Shared hot desk — 5 days/week access", included: true },
      { text: "1 Gbps redundant fiber WiFi & power backup", included: true },
      { text: "Meeting room & video booth access", included: true },
      { text: "Official business registered address", included: true },
      { text: "Access to J-Gate community events", included: true },
    ],
  },
  {
    name: "Professional",
    subtitle: "Dedicated Desk",
    monthly: "Contact for Pricing",
    annual: "Contact for Pricing",
    note: "Your permanent seat in Hyderabad's premier Japan hub",
    borderTop: "border-top-crimson",
    badge: { text: "MOST POPULAR", bg: "bg-crimson" },
    cta: "Join Now →",
    ctaStyle: "filled-crimson",
    features: [
      { text: "Dedicated locked executive desk", included: true },
      { text: "Daily in-person 'Yorozu' Japan Desk consultation", included: true },
      { text: "Priority boardroom allocation", included: true },
      { text: "Vetted professional network introductions", included: true },
      { text: "Access to T-Hub co-innovation support", included: true },
    ],
  },
  {
    name: "Enterprise",
    subtitle: "Private Furnished Cabin",
    monthly: "Custom Pricing",
    annual: "Custom Pricing",
    note: "Your Japan headquarters in India",
    borderTop: "border-top-gold-feature",
    badge: { text: "FLAGSHIP", bg: "bg-saffron" },
    cta: "Contact Our Team",
    ctaStyle: "outline-saffron",
    features: [
      { text: "Private furnished cabin (fully branded)", included: true },
      { text: "Hands-on market entry consulting package", included: true },
      { text: "Monthly business meeting accompaniment", included: true },
      { text: "Bilingual concierge & executive receptionist", included: true },
      { text: "Full talent sourcing & hiring pipeline", included: true },
    ],
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="membership" className="py-8 sm:py-12 bg-ivory">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Your Workspace</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.625rem)" }}
            >
              Choose Your <span className="text-crimson">Base of Operations</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-inter font-light text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.125rem)" }}>
              Every membership includes access to our partner network, innovation
              ecosystem coordination, and J-Gate community events.
            </p>
          </div>
        </Reveal>

        {/* Toggle */}
        <Reveal delay={80}>
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className={cn("font-inter text-sm font-medium transition-colors", !annual ? "text-ink" : "text-mist")}>
              Monthly
            </span>
            <button
              role="switch"
              aria-checked={annual}
              aria-label="Toggle annual billing"
              onClick={() => setAnnual((v) => !v)}
              className={cn(
                "relative h-7 w-14 rounded-full transition-colors duration-300",
                annual ? "bg-crimson" : "bg-slate/25"
              )}
            >
              <span
                className={cn(
                  "absolute top-1 h-5 w-5 rounded-full bg-white shadow-card transition-all duration-300",
                  annual ? "left-8" : "left-1"
                )}
              />
            </button>
            <span className={cn("font-inter text-sm font-medium transition-colors", annual ? "text-ink" : "text-mist")}>
              Annual
            </span>
            <span className="rounded bg-success/12 px-2 py-0.5 font-inter text-xs font-bold text-success">
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
                  "relative flex h-full flex-col rounded-2xl bg-pearl p-5 shadow-card transition-all duration-300 lift-card border border-slate-200/80",
                  plan.borderTop,
                  plan.badge?.bg === "bg-crimson" && "lg:-translate-y-2 lg:shadow-hover ring-1 ring-crimson/20"
                )}
              >
                {plan.badge && (
                  <span
                    className={cn(
                      "absolute -top-3 right-5 rounded-full px-3 py-0.5 font-inter text-[10px] font-bold uppercase tracking-wider text-white shadow-xs",
                      plan.badge.bg,
                      plan.badge.bg === "bg-saffron" && "text-ink"
                    )}
                  >
                    {plan.badge.text}
                  </span>
                )}

                <div>
                  <h3 className="font-serif-jp text-xl font-bold text-ink">{plan.name}</h3>
                  <p className="mt-0.5 font-inter text-[12px] font-medium uppercase text-mist" style={{ letterSpacing: "0.05em" }}>
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-3.5">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif-jp text-xl font-bold text-crimson">¥</span>
                    <span className="font-serif-jp text-2xl font-bold text-ink">
                      {annual ? plan.annual : plan.monthly}
                    </span>
                  </div>
                  <p className="mt-0.5 font-inter text-[12px] text-mist">
                    {annual ? "/ year · billed annually" : "/ month"}
                  </p>
                  <p className="mt-1 font-inter text-[11.5px] italic text-slate">{plan.note}</p>
                </div>

                {/* CTA — 6px radius */}
                <button
                  onClick={() => scrollTo("contact")}
                  className={cn(
                    "mt-6 w-full rounded-md px-5 py-3 font-inter text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5",
                    plan.ctaStyle === "filled-crimson" && "bg-crimson text-white hover:bg-crimson-deep",
                    plan.ctaStyle === "outline-crimson" && "border border-crimson text-crimson hover:bg-crimson hover:text-white",
                    plan.ctaStyle === "outline-saffron" && "border border-saffron text-[#a06d00] hover:bg-saffron hover:text-ink"
                  )}
                >
                  {plan.cta}
                </button>

                {/* Features */}
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
              </article>
            </Reveal>
          ))}
        </div>

        {/* Small print */}
        <Reveal delay={120}>
          <p className="mt-10 text-center font-inter text-[13px] leading-relaxed text-mist">
            All memberships are subject to availability. Pricing is customized
            based on duration, team size, and service requirements. Contact us
            for a personalized proposal.
            <br />
            <span className="font-sans-jp">価格はご要望に応じてカスタマイズいたします。</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
