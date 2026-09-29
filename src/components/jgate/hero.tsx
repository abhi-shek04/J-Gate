"use client";

import { Download, ArrowRight, Target, BarChart3, ShieldCheck, CheckCircle2, Award, Zap } from "lucide-react";
import { ToriiWatermark, HyderabadSkyline } from "./icons";
import { useI18n } from "@/lib/i18n";
import { useBrochure } from "@/lib/brochure-context";
import { AnimatedCounter } from "./shared";

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
          className="absolute bottom-0 rounded-full bg-white opacity-20"
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

  const badgeIcons = [
    <Target key="1" className="h-4 w-4 text-saffron" />,
    <BarChart3 key="2" className="h-4 w-4 text-crimson" />,
    <ShieldCheck key="3" className="h-4 w-4 text-emerald-400" />,
  ];

  const badges = [
    { icon: badgeIcons[0], text: t("hero.badge1") },
    { icon: badgeIcons[1], text: t("hero.badge2") },
    { icon: badgeIcons[2], text: t("hero.badge3") },
  ];

  const stats = [
    { num: "100%", label: "Japanese Leadership" },
    { num: "40%+", label: "Operating Savings" },
    { num: "24/7", label: "Enterprise Security" },
    { num: "Direct", label: "HQ Alignment" },
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
            "linear-gradient(180deg, rgba(188,26,44,0.12) 0%, rgba(188,26,44,0.03) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(188,26,44,0.14) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(232,160,26,0.08) 0%, transparent 50%)",
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
        <span className="inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-white/10 px-4 py-1.5 font-inter text-[12px] font-semibold uppercase text-saffron backdrop-blur-md" style={{ letterSpacing: "0.15em" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-saffron animate-pulse" />
          {t("hero.eyebrow")}
        </span>

        {/* H1 */}
        <h1
          className="mx-auto mt-8 font-serif-jp font-bold leading-[1.05] text-white"
          style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
        >
          {t("hero.title1")}
          <br />
          {t("hero.title2")}
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mt-6 max-w-[600px] font-inter font-light leading-relaxed text-mist"
          style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
        >
          {t("hero.subtitle")}
        </p>

        {/* Japanese / English tagline depending on active language */}
        {lang === "JP" ? (
          <p className="mt-3 font-serif-jp text-base text-saffron/90">{t("hero.jptag")}</p>
        ) : (
          <p className="mt-2 font-inter text-[13.5px] text-mist/80">{t("hero.entag")}</p>
        )}

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={openBrochure}
            className="btn-shine flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-crimson via-crimson to-crimson-deep px-8 py-4 font-inter text-[15px] font-semibold text-white shadow-[0_0_28px_rgba(188,26,44,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(188,26,44,0.65)]"
          >
            <Download className="h-4 w-4" />
            {t("hero.cta1")}
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-8 py-4 font-inter text-[15px] font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/15 hover:border-white/50"
          >
            {t("hero.cta2")}
            <ArrowRight className="h-4 w-4 text-saffron" />
          </button>
        </div>

        {/* Trust badges */}
        <div className="mx-auto mt-12 grid max-w-2xl gap-3 sm:grid-cols-3">
          {badges.map((b, i) => (
            <div
              key={i}
              className={
                "glass-dark flex items-center justify-center gap-2.5 rounded-xl border border-white/15 px-4 py-3.5 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-saffron/40 " +
                (i === 1 ? "animate-float-slow" : i === 0 ? "animate-float" : "animate-float-delay")
              }
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                {b.icon}
              </div>
              <span className="font-inter text-[13px] font-semibold text-white/95">{b.text}</span>
            </div>
          ))}
        </div>

        {/* Proof Metrics Bar */}
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl sm:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-serif-jp text-xl sm:text-2xl font-black text-saffron">{s.num}</div>
              <div className="mt-0.5 font-inter text-[11px] font-medium text-mist uppercase tracking-wider">{s.label}</div>
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
