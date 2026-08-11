"use client";

import { useState } from "react";
import { Users, Handshake, BookOpen, Plane, Plus, Minus } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const SERVICES = [
  { icon: Users, key: "services.s1", color: "from-crimson to-crimson-deep" },
  { icon: Handshake, key: "services.s2", color: "from-saffron to-[#c9881a]" },
  { icon: BookOpen, key: "services.s3", color: "from-navy to-success" },
  { icon: Plane, key: "services.s4", color: "from-saffron to-crimson" },
] as const;

export function Services() {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="services" className="section-pad bg-ivory">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>{t("services.eyebrow")}</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
              style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
            >
              {t("services.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
              {t("services.subtitle")}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => {
            const isOpen = expanded === i;
            return (
              <Reveal key={s.key} delay={i * 80}>
                <article
                  className={cn(
                    "lift-card group relative h-full overflow-hidden rounded-lg border bg-pearl p-7 shadow-card transition-all duration-300",
                    isOpen ? "border-crimson/30 shadow-[0_0_30px_rgba(188,26,44,0.12)]" : "border-crimson/8"
                  )}
                >
                  <div className={cn("pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20", s.color)} />
                  <div className="relative flex items-start gap-5">
                    <div className={cn("flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-card transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3", s.color)}>
                      <s.icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif-jp text-xl font-bold text-ink">{t(`${s.key}.title`)}</h3>
                      <p className="mt-1 font-inter text-[14px] font-medium text-crimson">{t(`${s.key}.short`)}</p>
                    </div>
                  </div>

                  <div
                    className="relative grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-4 font-inter text-[14px] leading-relaxed text-slate">{t(`${s.key}.desc`)}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setExpanded(isOpen ? null : i)}
                    aria-label={isOpen ? "Collapse" : "Expand"}
                    className="relative mt-4 flex items-center gap-1.5 font-inter text-[13px] font-semibold text-crimson transition-all hover:gap-2.5"
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    {isOpen ? "Show less" : "Show details"}
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
