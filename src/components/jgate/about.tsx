"use client";

import { Reveal, Eyebrow } from "./shared";
import { useI18n } from "@/lib/i18n";
import { Target, Eye, BookOpen, ShieldCheck, Globe2, Cpu, Handshake } from "lucide-react";

const VALUES = [
  { icon: ShieldCheck, key: "about.v1" },
  { icon: Globe2, key: "about.v2" },
  { icon: Cpu, key: "about.v3" },
  { icon: Handshake, key: "about.v4" },
] as const;

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="section-pad bg-ivory">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>{t("about.eyebrow")}</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
              style={{ fontSize: "clamp(1.875rem,4vw,2.625rem)" }}
            >
              {t("about.title")}
            </h2>
          </div>
        </Reveal>

        {/* Our Story */}
        <Reveal delay={80}>
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-crimson/10 text-crimson">
                <BookOpen className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="font-serif-jp text-xl font-bold text-ink">{t("about.story.title")}</h3>
            </div>
            <p className="mt-4 font-inter text-[16px] leading-relaxed text-slate">
              {t("about.story.body")}
            </p>
          </div>
        </Reveal>

        {/* Mission + Vision — two cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Reveal delay={100}>
            <div className="lift-card h-full rounded-lg border border-crimson/10 bg-pearl p-7 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-crimson/10 text-crimson">
                  <Target className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="font-serif-jp text-lg font-bold text-ink">{t("about.mission.title")}</h3>
              </div>
              <p className="mt-4 font-inter text-[15px] leading-relaxed text-slate">{t("about.mission.body")}</p>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="lift-card h-full rounded-lg border border-saffron/15 bg-pearl p-7 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-saffron/15 text-saffron">
                  <Eye className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="font-serif-jp text-lg font-bold text-ink">{t("about.vision.title")}</h3>
              </div>
              <p className="mt-4 font-inter text-[15px] leading-relaxed text-slate">{t("about.vision.body")}</p>
            </div>
          </Reveal>
        </div>

        {/* Core Values — 4-col grid */}
        <Reveal delay={120}>
          <div className="mt-14 text-center">
            <h3 className="font-serif-jp text-[clamp(1.25rem,2.5vw,1.5rem)] font-bold text-ink">
              {t("about.values.title")}
            </h3>
            <p className="mx-auto mt-2 max-w-xl font-inter text-[14px] text-mist">{t("about.values.subtitle")}</p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.key} delay={i * 80}>
              <div className="lift-card group h-full rounded-lg border border-crimson/8 bg-pearl p-6 text-center shadow-card">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-crimson/10 to-saffron/10 text-crimson transition-transform duration-300 group-hover:scale-110">
                  <v.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="mt-4 font-serif-jp text-base font-bold text-ink">{t(v.key)}</h4>
                <p className="mt-2 font-inter text-[13px] leading-relaxed text-slate">{t(`${v.key}.desc`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
