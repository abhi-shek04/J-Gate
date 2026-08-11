"use client";

import { Brain, Network, ShieldCheck } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";

const DIFFERENTIATORS = [
  {
    icon: Brain,
    title: "Local Knowledge, Global Standard",
    copy: "We speak both languages — not just Japanese and English, but the language of Indian business and the precision of Japanese corporate culture. Every member benefits from that translation.",
    accent: "text-crimson",
  },
  {
    icon: Network,
    title: "A Network You Cannot Build Alone",
    copy: "From JETRO to T-Hub, from Woxsen University to Genesys Info X — your membership connects you instantly to an ecosystem that would take years to build independently.",
    accent: "text-saffron",
  },
  {
    icon: ShieldCheck,
    title: "Omotenashi in a Business Context",
    copy: "The Japanese philosophy of wholehearted hospitality guides everything we do. You arrive as a guest and grow into a leader, with support every step of the way.",
    accent: "text-success",
  },
];

export function Difference() {
  return (
    <section id="difference" className="section-pad bg-ivory">
      <div className="container-jg">
        <Reveal align="center">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>The J-Gate Difference</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
            >
              This is not a desk rental.
              <br />
              This is your{" "}
              <span className="text-crimson">India headquarters.</span>
            </h2>
            <p
              className="mx-auto mt-6 max-w-[640px] font-inter leading-relaxed text-slate"
              style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.125rem)" }}
            >
              When Japanese companies enter India, they face a complex
              intersection of legal systems, cultural dynamics, business
              networks, and regulatory environments. J-Gate was built
              specifically to solve this — not with a hot desk and a WiFi
              password, but with a fully supported, culturally intelligent
              business ecosystem designed around how Japanese companies
              actually operate.
            </p>
            <p className="mx-auto mt-4 max-w-[640px] font-inter text-[15px] leading-relaxed text-mist">
              Operated by Indobox India Private Limited at Cyber Gateway —
              Hyderabad&apos;s most prestigious business address — J-Gate is your
              trusted local base, your partner network, and your launchpad into
              one of the world&apos;s fastest-growing economies.
            </p>
          </div>
        </Reveal>

        {/* 3-column differentiator grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {DIFFERENTIATORS.map((d, i) => (
            <Reveal key={d.title} delay={i * 120}>
              <article className="lift-card group h-full rounded-lg border border-crimson/10 bg-pearl p-8 shadow-card">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-md bg-ivory ${d.accent}`}
                >
                  <d.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-serif-jp text-xl font-bold text-ink">
                  {d.title}
                </h3>
                <p className="mt-3 font-inter text-[15px] leading-relaxed text-slate">
                  {d.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
