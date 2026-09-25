"use client";

import { Reveal } from "./shared";
import { useI18n } from "@/lib/i18n";
import { JapanFlag, IndiaFlag } from "./icons";
import { Sparkles, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ============================================================
   PageHero — Premier Japanese-Modern Executive Section Header
   Combines glassmorphic design, subtle glowing ambient radial,
   bilingual flags, architectural line accents, and dual layouts
   (centered executive shrine & 2-column asymmetric split).
   ============================================================ */

export type PageHeroProps = {
  eyebrowKey?: string;
  eyebrowNode?: ReactNode;
  titleNode: ReactNode;
  subtitleKey?: string;
  subtitleNode?: ReactNode;
  tags?: { EN: string; JP: string }[];
  layout?: "center" | "split";
  className?: string;
};

export function PageHero({
  eyebrowKey,
  eyebrowNode,
  titleNode,
  subtitleKey,
  subtitleNode,
  tags,
  layout = "center",
  className,
}: PageHeroProps) {
  const { t, tx } = useI18n();

  const eyebrowContent = eyebrowNode ?? (eyebrowKey ? t(eyebrowKey) : null);
  const subtitleContent = subtitleNode ?? (subtitleKey ? t(subtitleKey) : null);

  if (layout === "split") {
    return (
      <div className={cn("relative overflow-hidden bg-slate-50/90 via-white to-slate-50/70 dark:from-[#080d18] dark:via-[#0c1424] dark:to-[#080d18] border-b border-slate-200/80 dark:border-white/10 py-10 sm:py-14 lg:py-16 transition-colors duration-300", className)}>
        {/* Subtle decorative background light accents */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-25"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 20% 0%, rgba(188, 26, 44, 0.05) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 85% 100%, rgba(232, 160, 26, 0.04) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        {/* Faint Japanese lattice overlay */}
        <div className="pointer-events-none absolute inset-0 pattern-asanoha opacity-[0.02] dark:pattern-asanoha-dark dark:opacity-15" />

        <div className="container-jg relative z-10">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center max-w-6xl mx-auto">
            {/* Left Column: Eyebrow + Main Title */}
            <div className="lg:col-span-7 text-left space-y-3.5">
              <Reveal variant="left">
                {eyebrowContent && (
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200/90 dark:border-white/15 bg-white/90 dark:bg-white/[0.06] px-4 py-1.5 shadow-2xs backdrop-blur-md">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson" />
                    </span>
                    <span className="font-inter text-[11px] sm:text-[12px] font-extrabold tracking-[0.18em] uppercase text-crimson dark:text-rose-400">
                      {eyebrowContent}
                    </span>
                    <span className="hidden sm:inline-block h-3 w-px bg-slate-200 dark:bg-white/20" />
                    <div className="hidden sm:flex items-center gap-1">
                      <JapanFlag className="h-3 w-4 rounded-2xs shadow-2xs" />
                      <IndiaFlag className="h-3 w-4 rounded-2xs shadow-2xs" />
                    </div>
                  </div>
                )}

                <h2
                  className="font-serif-jp font-extrabold leading-[1.18] text-ink dark:text-white tracking-tight drop-shadow-2xs text-[26px] sm:text-[34px] lg:text-[40px] mt-2"
                >
                  {titleNode}
                </h2>

                {/* Minimalist Accent Line */}
                <div className="flex items-center gap-2 pt-1" aria-hidden>
                  <div className="h-1 w-1 rounded-full bg-crimson" />
                  <div className="h-0.5 w-14 bg-gradient-to-r from-crimson via-saffron to-transparent" />
                </div>
              </Reveal>
            </div>

            {/* Right Column: Subtitle Description in Glass Box + Tags */}
            <div className="lg:col-span-5 text-left">
              <Reveal variant="right" delay={100}>
                <div className="luxury-light-card card-sheen relative rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#101a2c]/90 p-5 sm:p-6 shadow-md backdrop-blur-xl">
                  {subtitleContent && (
                    <p className="font-inter text-[13.5px] sm:text-[14.5px] font-normal leading-relaxed text-slate-600 dark:text-slate-300">
                      {subtitleContent}
                    </p>
                  )}

                  {tags && tags.length > 0 && (
                    <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-2">
                      {tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100/80 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 px-2.5 py-1 font-inter text-[11px] font-medium text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="h-3 w-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>{tx(tag)}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Centered Executive Shrine Layout (Default) */
  return (
    <div className={cn("relative overflow-hidden bg-slate-50/90 via-white to-slate-50/60 dark:from-[#080d18] dark:via-[#0c1424] dark:to-[#080d18] border-b border-slate-200/80 dark:border-white/10 pt-11 pb-8 sm:pt-15 sm:pb-10 transition-colors duration-300", className)}>
      {/* Ambient warm layered glows */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(188, 26, 44, 0.05) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 85% 100%, rgba(232, 160, 26, 0.035) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 pattern-asanoha opacity-[0.02] dark:pattern-asanoha-dark dark:opacity-15" />

      <div className="container-jg relative z-10 text-center max-w-4xl mx-auto px-4">
        <Reveal>
          {eyebrowContent && (
            <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200/90 dark:border-white/15 bg-white/90 dark:bg-white/[0.06] px-4 py-1.5 shadow-2xs backdrop-blur-md">
              <JapanFlag className="h-3 w-4 rounded-2xs shadow-2xs shrink-0" />
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson" />
              </span>
              <span className="font-inter text-[11px] sm:text-[12px] font-extrabold tracking-[0.18em] uppercase text-crimson dark:text-rose-400">
                {eyebrowContent}
              </span>
              <IndiaFlag className="h-3 w-4 rounded-2xs shadow-2xs shrink-0" />
            </div>
          )}

          <h2
            className="mx-auto mt-3.5 sm:mt-4 font-serif-jp font-extrabold leading-[1.2] text-ink dark:text-white tracking-tight drop-shadow-2xs text-[26px] sm:text-[34px] lg:text-[40px] max-w-4xl"
          >
            {titleNode}
          </h2>

          {subtitleContent && (
            <p className="mx-auto mt-3 sm:mt-4 max-w-2.5xl font-inter text-[14px] sm:text-[15.5px] font-normal leading-relaxed text-slate-600 dark:text-slate-300">
              {subtitleContent}
            </p>
          )}

          {tags && tags.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-3 py-1 font-inter text-[11.5px] font-medium text-slate-700 dark:text-slate-300 shadow-2xs"
                >
                  <Sparkles className="h-3 w-3 text-saffron shrink-0" />
                  <span>{tx(tag)}</span>
                </span>
              ))}
            </div>
          )}

          {/* Minimalist Japanese Architectural Accent Mark */}
          <div className="mx-auto mt-5 sm:mt-6 flex items-center justify-center gap-2.5" aria-hidden>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-slate-300 dark:via-white/25 to-transparent" />
            <div className="h-1.5 w-1.5 rotate-45 bg-saffron shadow-2xs" />
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-slate-300 dark:via-white/25 to-transparent" />
          </div>
        </Reveal>
      </div>
    </div>
  );
}


