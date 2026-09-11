"use client";

import { Reveal, Eyebrow } from "./shared";
import { useI18n } from "@/lib/i18n";
import { JapanFlag, IndiaFlag, ToriiWatermark } from "./icons";
import type { ReactNode } from "react";

/* ============================================================
   PageHero — reusable hero banner for sub-pages
   Used on /about, /why-jgate, /services, /team, /blogs, /contact
   ============================================================ */
export function PageHero({
  eyebrowKey,
  titleNode,
  subtitleKey,
}: {
  eyebrowKey: string;
  titleNode: ReactNode;
  subtitleKey: string;
}) {
  const { t } = useI18n();
  return (
    <section className="relative flex min-h-[30vh] sm:min-h-[38vh] lg:min-h-[44vh] items-center justify-center overflow-hidden bg-midnight pt-14 pb-8 sm:pt-20 sm:pb-12">
      <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(188,26,44,0.10) 0%, transparent 60%), radial-gradient(ellipse at 20% 70%, rgba(232,160,26,0.06) 0%, transparent 50%)",
        }}
      />
      <ToriiWatermark
        className="torii-watermark"
        style={{ width: "50vw", maxWidth: "600px", right: "5%", top: "15%" }}
      />
      <div className="container-jg relative z-10 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-md bg-crimson px-3 py-1 sm:px-4 sm:py-1.5 font-inter text-[11px] sm:text-[12px] font-medium text-white shadow-crimp" style={{ letterSpacing: "0.1em" }}>
            <JapanFlag className="h-3 w-4 sm:h-3.5 sm:w-5" />
            {t(eyebrowKey)}
            <IndiaFlag className="h-3 w-4 sm:h-3.5 sm:w-5" />
          </span>
          <h1
            className="mx-auto mt-3.5 sm:mt-6 font-serif-jp font-bold leading-[1.1] text-white"
            style={{ fontSize: "clamp(1.65rem,3.8vw,3rem)" }}
          >
            {titleNode}
          </h1>
          <p
            className="mx-auto mt-2.5 sm:mt-5 max-w-2xl font-inter font-light leading-relaxed text-mist"
            style={{ fontSize: "clamp(0.85rem,1.2vw,1.05rem)" }}
          >
            {t(subtitleKey)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
