"use client";

import { Reveal, Eyebrow } from "./shared";
import { useI18n } from "@/lib/i18n";
import { VennDiagram, JapanFlag, IndiaFlag } from "./icons";
import { Target, Eye } from "lucide-react";

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

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          {/* Left — content */}
          <Reveal variant="left">
            <div>
              <div className="space-y-4 font-inter text-[16px] leading-relaxed text-slate">
                <p>{t("about.body1")}</p>
                <p>{t("about.body2")}</p>
              </div>

              {/* Mission + Vision cards */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="lift-card rounded-lg border border-crimson/10 bg-pearl p-6 shadow-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-crimson/10 text-crimson">
                    <Target className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-3 font-serif-jp text-base font-bold text-ink">{t("about.mission")}</h3>
                  <p className="mt-1.5 font-inter text-[13px] leading-relaxed text-slate">{t("about.missionText")}</p>
                </div>
                <div className="lift-card rounded-lg border border-saffron/15 bg-pearl p-6 shadow-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-saffron/15 text-saffron">
                    <Eye className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-3 font-serif-jp text-base font-bold text-ink">{t("about.vision")}</h3>
                  <p className="mt-1.5 font-inter text-[13px] leading-relaxed text-slate">{t("about.visionText")}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — Venn diagram */}
          <Reveal variant="right" delay={120}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-crimson/10 via-transparent to-saffron/10 blur-2xl" />
              <div className="relative rounded-2xl border border-crimson/10 bg-pearl p-6 shadow-card sm:p-8">
                <VennDiagram className="mx-auto h-auto w-full max-w-[440px]" />
                <div className="mt-4 flex items-center justify-center gap-3 font-inter text-xs uppercase text-mist" style={{ letterSpacing: "0.15em" }}>
                  <JapanFlag className="h-3.5 w-5" />
                  <span>Two Cultures</span>
                  <span className="text-saffron">◆</span>
                  <span>One Bridge</span>
                  <span className="text-saffron">◆</span>
                  <IndiaFlag className="h-3.5 w-5" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
