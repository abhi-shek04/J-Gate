"use client";

import { Languages, Plane, BadgeCheck, Building2 } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import { useI18n } from "@/lib/i18n";

const PILLARS = [
  { icon: Languages, key: "why.p1", gradient: "from-crimson to-crimson-deep" },
  { icon: Plane, key: "why.p2", gradient: "from-saffron to-[#c9881a]" },
  { icon: BadgeCheck, key: "why.p3", gradient: "from-navy to-success" },
  { icon: Building2, key: "why.p4", gradient: "from-saffron to-crimson" },
] as const;

export function WhyJGate() {
  const { t } = useI18n();
  return (
    <section id="why" className="section-pad relative overflow-hidden bg-navy">
      <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(232,160,26,0.08), transparent 55%)" }}
      />
      <div className="container-jg relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow light>{t("why.eyebrow")}</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
              style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
            >
              {t("why.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
              {t("why.subtitle")}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.key} delay={i * 100}>
              <article className="glass-dark lift-card group h-full rounded-lg p-7">
                <div className={`flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br ${p.gradient} text-white shadow-card transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                  <p.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-inter text-[16px] font-bold text-white">
                  {t(`${p.key}.title`)}
                </h3>
                <p className="mt-2.5 font-inter text-[13px] leading-relaxed text-mist">
                  {t(`${p.key}.desc`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
