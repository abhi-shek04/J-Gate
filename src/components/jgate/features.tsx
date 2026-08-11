"use client";

import {
  Building2,
  Handshake,
  Globe2,
  Sparkles,
  Flower2,
  TrendingUp,
} from "lucide-react";
import { Reveal, SectionHeading } from "./shared";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    icon: Building2,
    title: "Premium Workspace",
    desc: "Dedicated desks and private cabins at Cyber Gateway, Hyderabad's top business district.",
    accent: "from-jgate-navy to-jgate-navy-soft",
  },
  {
    icon: Handshake,
    title: "Local Partner Network",
    desc: "Instant access to trusted Indian business partners, legal, HR, and financial advisors.",
    accent: "from-jgate-green to-[#2bbf99]",
  },
  {
    icon: Globe2,
    title: "JETRO Endorsed",
    desc: "Strategic alignment with JETRO for Japanese business support and market navigation.",
    accent: "from-jgate-red to-[#e84855]",
  },
  {
    icon: Sparkles,
    title: "Innovation Ecosystem",
    desc: "Connected to T-Hub, India's largest startup innovation hub, and Woxsen University.",
    accent: "from-jgate-gold to-[#ffcb47]",
  },
  {
    icon: Flower2,
    title: "Japanese Omotenashi",
    desc: "A culturally aware environment designed for the comfort and etiquette of Japanese professionals.",
    accent: "from-jgate-red to-[#f4788a]",
  },
  {
    icon: TrendingUp,
    title: "Market Entry Support",
    desc: "End-to-end assistance from company registration to first client acquisition in India.",
    accent: "from-jgate-navy to-jgate-green",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  desc,
  accent,
  index,
}: {
  icon: typeof Building2;
  title: string;
  desc: string;
  accent: string;
  index: number;
}) {
  return (
    <Reveal delay={(index % 3) * 100}>
      <article className="accent-left-red lift-card group h-full rounded-2xl border border-jgate-navy/8 bg-white p-6 shadow-soft sm:p-7">
        <div
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3",
            accent
          )}
        >
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="mt-5 font-serif-jp text-xl font-bold text-jgate-navy">
          {title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-jgate-slate">
          {desc}
        </p>
        <div className="mt-5 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-jgate-red opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span>Learn more</span>
          <span aria-hidden>→</span>
        </div>
      </article>
    </Reveal>
  );
}

export function Features() {
  return (
    <section id="features" className="relative bg-white py-20 sm:py-28">
      {/* subtle rangoli top accent */}
      <div className="pattern-rangoli absolute inset-x-0 top-0 h-24 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What We Offer"
            title={
              <>
                Everything You Need to{" "}
                <span className="text-jgate-red">Launch in India</span>
              </>
            }
            subtitle="From premium infrastructure to deep cultural understanding — J-Gate equips Japanese enterprises with the complete foundation for a confident India entry."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
