"use client";

import { Reveal } from "./shared";
import { useI18n } from "@/lib/i18n";
import type { ReactNode } from "react";

/* ============================================================
   PageHero — Master Executive Section Header
   Light/dark theme adaptive, sleek luxury corporate presence.
   Seamlessly integrates as a cohesive header across sections.
   ============================================================ */

export type PageHeroProps = {
  eyebrowKey?: string;
  eyebrowNode?: ReactNode;
  titleNode: ReactNode;
  subtitleKey?: string;
  subtitleNode?: ReactNode;
};

export function PageHero({
  eyebrowKey,
  eyebrowNode,
  titleNode,
  subtitleKey,
  subtitleNode,
}: PageHeroProps) {
  const { t } = useI18n();

  const eyebrowContent = eyebrowNode ?? (eyebrowKey ? t(eyebrowKey) : null);
  const subtitleContent = subtitleNode ?? (subtitleKey ? t(subtitleKey) : null);

  return (
    <div className="relative overflow-hidden bg-slate-50/80 via-white to-slate-50/50 dark:from-[#080d17] dark:via-[#0c1424] dark:to-[#080d17] border-b border-slate-200/70 dark:border-white/10 pt-10 pb-7 sm:pt-14 sm:pb-9 transition-colors duration-300">
      {/* Subtle decorative background radial warm light */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(188, 26, 44, 0.04) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 85% 100%, rgba(232, 160, 26, 0.03) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="container-jg relative z-10 text-center max-w-4xl mx-auto px-4">
        <Reveal>
          {eyebrowContent && (
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 dark:border-white/15 bg-white/90 dark:bg-white/[0.06] px-4 py-1 shadow-2xs backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson animate-pulse" />
              <span className="font-inter text-[11px] sm:text-[11.5px] font-bold tracking-[0.18em] uppercase text-crimson dark:text-rose-400">
                {eyebrowContent}
              </span>
            </div>
          )}

          <h2
            className="mx-auto mt-3 sm:mt-3.5 font-serif-jp font-extrabold leading-[1.2] text-ink dark:text-white tracking-tight"
            style={{ fontSize: "clamp(1.65rem, 3.2vw, 2.45rem)" }}
          >
            {titleNode}
          </h2>

          {subtitleContent && (
            <p className="mx-auto mt-2.5 sm:mt-3.5 max-w-2xl font-inter text-[13.5px] sm:text-[14.5px] font-normal leading-relaxed text-slate-600 dark:text-slate-300">
              {subtitleContent}
            </p>
          )}

          {/* Minimalist Japanese Architectural Accent Mark */}
          <div className="mx-auto mt-4 sm:mt-5 flex items-center justify-center gap-2" aria-hidden>
            <div className="h-px w-10 bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent" />
            <div className="h-1 w-1 rounded-full bg-saffron" />
            <div className="h-px w-10 bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent" />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

