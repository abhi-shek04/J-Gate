"use client";

import { Brain, Network, ShieldCheck } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";

const DIFFERENTIATORS = [
  {
    icon: Brain,
    title: "Local Expertise, Japanese Standards",
    copy: "We speak both languages — not just Japanese and English, but the language of Indian business and the precision of Japanese corporate culture. Every member benefits from that translation.",
    accent: "text-crimson",
  },
  {
    icon: Network,
    title: "An Established Partner Network",
    copy: "From T-Hub to IIT Hyderabad, from Woxsen University to Genesys Info X — your membership connects you instantly to an ecosystem that would take years to build independently.",
    accent: "text-saffron",
  },
  {
    icon: ShieldCheck,
    title: "Japanese Service Standards",
    copy: "The Japanese philosophy of wholehearted hospitality guides everything we do. our team provides attentive, reliable support at every step of your India expansion.",
    accent: "text-success",
  },
];

export function Difference() {
  return (
    <section id="difference" className="section-pad bg-ivory dark:bg-[#0b111e] transition-colors">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>The J-Gate Difference</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink dark:text-white"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
            >
              This is not a desk rental.
              <br />
              This is your{" "}
              <span className="text-crimson dark:text-rose-400">India headquarters.</span>
            </h2>
            <p
              className="mx-auto mt-6 max-w-[640px] font-inter leading-relaxed text-slate dark:text-slate-300"
              style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.125rem)" }}
            >
              When Japanese companies enter India, they face a complex
              intersection of legal systems, cultural dynamics, business
              networks, and regulatory environments. J-Gate was built
              specifically to solve this — with a fully supported, culturally intelligent
              business hub designed around how Japanese companies actually operate.
            </p>
            <p className="mx-auto mt-4 max-w-[640px] font-inter text-[14.5px] leading-relaxed text-mist">
              Operated by Indobox India Private Limited in Hyderabad —
              India&apos;s leading technology center — J-Gate is your
              trusted local base, your partner network, and your foundation into
              one of the world&apos;s fastest-growing economies.
            </p>
          </div>
        </Reveal>

        {/* 3-column differentiator grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {DIFFERENTIATORS.map((d, i) => (
            <Reveal key={d.title} delay={i * 120}>
              <article className="luxury-light-card card-sheen gold-hairline group h-full rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#09090b] p-6 sm:p-8 shadow-card dark:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="icon-pod h-12 w-12 shrink-0">
                    <d.icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 font-serif-jp text-xl font-bold text-ink dark:text-white group-hover:text-crimson dark:group-hover:text-rose-400 transition-colors">
                    {d.title}
                  </h3>
                  <p className="mt-3 font-inter text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                    {d.copy}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[10.5px] font-bold text-saffron uppercase tracking-wider">
                    J-Gate Standard
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson animate-pulse" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
