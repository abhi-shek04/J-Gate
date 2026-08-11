"use client";

import {
  Building2,
  Wifi,
  Mic,
  Scale,
  Users,
  BarChart3,
  Flag,
  Landmark,
  Globe2,
} from "lucide-react";
import { Reveal, Eyebrow } from "./shared";

const FEATURES = [
  {
    icon: Building2,
    title: "Premium Workspace",
    desc: "Fully furnished dedicated desks and private cabins inside Cyber Gateway — Hyderabad's most prestigious business district. 24/7 access, ergonomic setups, and enterprise-grade facilities.",
  },
  {
    icon: Wifi,
    title: "Enterprise Fiber Internet",
    desc: "Dedicated high-speed fiber connectivity ensuring your team stays connected to Tokyo headquarters, global clients, and cloud systems with zero compromise.",
  },
  {
    icon: Mic,
    title: "Professional Meeting Rooms",
    desc: "Fully equipped conference rooms with presentation displays, video conferencing setup, whiteboard facilities, and catering options available for client and partner meetings.",
  },
  {
    icon: Scale,
    title: "Legal & Regulatory Guidance",
    desc: "Navigating India's company registration, GST, employment law, and compliance requirements — our partner legal network has specific expertise in Japan-India cross-border business.",
  },
  {
    icon: Users,
    title: "Bilingual Talent Pipeline",
    desc: "Access to Indobox India's curated talent network — professionals fluent in Japanese business culture, bilingual staff, and a sourcing pipeline for roles from interns to C-suite.",
  },
  {
    icon: BarChart3,
    title: "India Market Intelligence",
    desc: "Customized market entry research, competitor analysis, and industry mapping specific to your sector — delivered through our partnership with T-Hub's knowledge network.",
  },
  {
    icon: Flag,
    title: "Japanese Business Culture Support",
    desc: "Regular workshops on Indian business etiquette for your Japan-based teams, and Japanese business culture briefings for your local hires — we bridge the gap that sinks most cross-cultural expansions.",
  },
  {
    icon: Landmark,
    title: "JETRO & Government Interface",
    desc: "Our alignment with JETRO — Japan's official trade promotion body — gives you access to government-backed support, diplomatic introductions, and trade facilitation resources.",
  },
  {
    icon: Globe2,
    title: "J-Gate Member Community",
    desc: "Monthly networking events, bilateral business dinners, industry speaker sessions, and cultural exchange programs that connect you to Hyderabad's most influential business community.",
  },
];

export function Features() {
  return (
    <section id="features" className="section-pad relative overflow-hidden bg-navy">
      <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(188,26,44,0.10), transparent 60%)",
        }}
      />
      <div className="container-jg relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow light>Full Feature Breakdown</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.625rem)" }}
            >
              Everything You Need to{" "}
              <span className="text-gradient-saffron">Succeed in India</span>
            </h2>
          </div>
        </Reveal>

        {/* 3×3 glass morphism grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 100}>
              <article className="glass-dark lift-card group h-full rounded-lg p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-crimson/15 text-saffron transition-transform duration-300 group-hover:scale-105">
                  <f.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-inter text-[17px] font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-2.5 font-inter text-[14px] leading-relaxed text-mist">
                  {f.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
