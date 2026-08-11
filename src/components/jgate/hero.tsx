"use client";

import { Download, ArrowRight } from "lucide-react";
import { ToriiWatermark, JapanFlag, IndiaFlag, HyderabadSkyline } from "./icons";
import { useI18n } from "@/lib/i18n";
import { useBrochure } from "@/lib/brochure-context";

function Particles() {
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    left: `${(i * 37) % 100}%`,
    size: 1.5 + (i % 3) * 0.8,
    delay: `${(i * 1.7) % 18}s`,
    duration: `${18 + (i % 6) * 4}s`,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full bg-white"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animation: `jg-drift ${p.duration} linear infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const { t, lang } = useI18n();
  const { open: openBrochure } = useBrochure();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const badges = [
    { emoji: "🎯", text: t("hero.badge1") },
    { emoji: " JLPT", text: t("hero.badge2") },
    { emoji: "🤝", text: t("hero.badge3") },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-midnight"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(188,26,44,0.08) 0%, rgba(188,26,44,0.02) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(188,26,44,0.10) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(232,160,26,0.06) 0%, transparent 50%)",
        }}
      />

      {/* Torii watermark */}
      <ToriiWatermark
        className="torii-watermark"
        style={{ width: "70vw", maxWidth: "780px", right: "0", top: "8%" }}
      />

      <Particles />

      {/* Skyline */}
      <div className="absolute bottom-0 left-0 h-[38%] w-full opacity-60">
        <HyderabadSkyline className="h-full w-full" />
      </div>
      <div
        className="absolute bottom-0 left-0 h-[34%] w-full"
        style={{ background: "linear-gradient(180deg, transparent, #080f1a 85%)" }}
      />

      {/* Content */}
      <div className="container-jg relative z-10 pt-28 pb-32 text-center">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 rounded-md bg-crimson px-4 py-1.5 font-inter text-[13px] font-medium text-white shadow-crimp" style={{ letterSpacing: "0.1em" }}>
          <JapanFlag className="h-3.5 w-5" />
          {t("hero.eyebrow")}
          <IndiaFlag className="h-3.5 w-5" />
        </span>

        {/* H1 */}
        <h1
          className="mx-auto mt-8 font-serif-jp font-bold leading-[1.05] text-white"
          style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
        >
          {t("hero.title1")}
          <br />
          <span className="text-gradient-saffron">{t("hero.title2")}</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mt-6 max-w-[600px] font-inter font-light leading-relaxed text-mist"
          style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
        >
          {t("hero.subtitle")}
        </p>

        {/* Japanese + English taglines */}
        <p className="mt-3 font-serif-jp text-base text-saffron/70">{t("hero.jptag")}</p>
        <p className="mt-1 font-sans-jp text-[13px] text-mist/70">{t("hero.entag")}</p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={openBrochure}
            className="btn-shine flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-8 py-4 font-inter text-[15px] font-semibold text-white shadow-[0_0_24px_rgba(188,26,44,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(188,26,44,0.65)]"
          >
            <Download className="h-4 w-4" />
            {t("hero.cta1")}
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="rounded-md border border-white/40 px-8 py-4 font-inter text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
          >
            {t("hero.cta2")}
            <ArrowRight className="ml-1.5 inline h-4 w-4" />
          </button>
        </div>

        {/* Trust badges */}
        <div className="mx-auto mt-16 grid max-w-2xl gap-3 sm:grid-cols-3">
          {badges.map((b, i) => (
            <div
              key={i}
              className={
                "glass-dark flex items-center justify-center gap-2 rounded-lg px-4 py-4 " +
                (i === 1 ? "animate-float-slow" : i === 0 ? "animate-float" : "animate-float-delay")
              }
            >
              <span className="text-base" aria-hidden>{b.emoji}</span>
              <span className="font-inter text-[13px] font-semibold text-white">{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to explore"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-inter text-xs font-normal text-mist" style={{ letterSpacing: "0.15em" }}>
          ↓ {t("hero.scroll")}
        </span>
        <span className="block h-10 w-px origin-top bg-mist/40 animate-scroll-line" />
      </button>
    </section>
  );
}
