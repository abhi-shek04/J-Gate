"use client";

import Link from "next/link";
import { Download, ArrowRight, BookOpen, Shield, Users, MapPin, Calendar, Building2 } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { useI18n } from "@/lib/i18n";
import { ToriiWatermark, JapanFlag, IndiaFlag, HyderabadSkyline } from "@/components/jgate/icons";
import { LogoMarquee } from "@/components/jgate/logo-marquee";

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

export default function HomePage() {
  const { t, tx } = useI18n();

  const stats = [
    { num: "100+", label: tx({ EN: "Partner Companies", JP: "パートナー企業" }) },
    { num: "500+", label: tx({ EN: "Engineers Placed", JP: "紹介エンジニア数" }) },
    { num: "94%", label: tx({ EN: "JLPT Pass Rate", JP: "JLPT合格率" }) },
    { num: "92%", label: tx({ EN: "Placement Retention", JP: "定着率" }) },
  ];

  const previews = [
    {
      icon: BookOpen,
      href: "/about",
      title: tx({ EN: "Corporate Identity", JP: "企業アイデンティティ" }),
      desc: tx({
        EN: "Discover J-Gate's mission to bridge Indo-Japanese technology ecosystems — our story, vision, and core values.",
        JP: "日印技術生態系を橋渡しするJ-Gateのミッション — ストーリー、ビジョン、コアバリューを発見。",
      }),
    },
    {
      icon: Shield,
      href: "/why-jgate",
      title: tx({ EN: "The J-Gate Advantage", JP: "J-Gateの強み" }),
      desc: tx({
        EN: "Four pillars that make us the trusted bridge: bilingual fluency, end-to-end onboarding, vetted talent, and direct enterprise network.",
        JP: "信頼される架け橋となる4つの柱：バイリンガル流暢さ、エンドツーエンドオンボーディング、審査済み人材、直接企業ネットワーク。",
      }),
    },
    {
      icon: Users,
      href: "/services",
      title: tx({ EN: "Service Verticals", JP: "サービス分野" }),
      desc: tx({
        EN: "Recruitment, corporate bridging, language training, and relocation support — four pathways to Japan-India success.",
        JP: "採用、企業橋渡し、語学研修、再配置サポート — 日印成功への4つの道。",
      }),
    },
  ];

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-midnight">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(188,26,44,0.08) 0%, rgba(188,26,44,0.02) 40%, transparent 70%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(188,26,44,0.10) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(232,160,26,0.06) 0%, transparent 50%)" }} />
        <ToriiWatermark className="torii-watermark" style={{ width: "70vw", maxWidth: "780px", right: "0", top: "8%" }} />
        <Particles />
        <div className="absolute bottom-0 left-0 h-[38%] w-full opacity-60">
          <HyderabadSkyline className="h-full w-full" />
        </div>
        <div className="absolute bottom-0 left-0 h-[34%] w-full" style={{ background: "linear-gradient(180deg, transparent, #080f1a 85%)" }} />

        <div className="container-jg relative z-10 pt-28 pb-32 text-center">
          <span className="inline-flex items-center gap-2 rounded-md bg-crimson px-4 py-1.5 font-inter text-[13px] font-medium text-white shadow-crimp" style={{ letterSpacing: "0.1em" }}>
            <JapanFlag className="h-3.5 w-5" />
            {t("hero.eyebrow")}
            <IndiaFlag className="h-3.5 w-5" />
          </span>
          <h1 className="mx-auto mt-8 font-serif-jp font-bold leading-[1.05] text-white" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
            {t("hero.title1")}<br />
            <span className="text-gradient-saffron">{t("hero.title2")}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[640px] font-inter font-light leading-relaxed text-mist" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
            {t("hero.subtitle")}
          </p>
          <p className="mt-3 font-serif-jp text-base text-saffron/70">{t("hero.jptag")}</p>

          {/* Brief info badges */}
          <div className="mx-auto mt-5 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 font-inter text-[12px] text-mist">
            <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-saffron" />{t("hero.founded")}</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-saffron" />{t("hero.location")}</span>
            <span className="flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5 text-saffron" />Indobox India Pvt. Ltd.</span>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/auth/brochure" className="btn-shine flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-8 py-4 font-inter text-[15px] font-semibold text-white shadow-[0_0_24px_rgba(188,26,44,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(188,26,44,0.65)]">
              <Download className="h-4 w-4" />
              {t("hero.cta1")}
            </Link>
            <Link href="/services" className="rounded-md border border-white/40 px-8 py-4 font-inter text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10">
              {t("hero.cta2")}
              <ArrowRight className="ml-1.5 inline h-4 w-4" />
            </Link>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              { emoji: "🎯", text: t("hero.badge1") },
              { emoji: "📚", text: t("hero.badge2") },
              { emoji: "🤝", text: t("hero.badge3") },
            ].map((b, i) => (
              <div key={i} className={`glass-dark flex items-center justify-center gap-2 rounded-lg px-4 py-4 ${i === 1 ? "animate-float-slow" : i === 0 ? "animate-float" : "animate-float-delay"}`}>
                <span className="text-base" aria-hidden>{b.emoji}</span>
                <span className="font-inter text-[13px] font-semibold text-white">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SCROLLING LOGO WALL ============ */}
      <section className="bg-ivory py-16">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <Eyebrow>{t("home.logos.eyebrow")}</Eyebrow>
              <h2 className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink" style={{ fontSize: "clamp(1.5rem,3.5vw,2rem)" }}>
                {t("home.logos.title")}
              </h2>
              <p className="mx-auto mt-3 max-w-xl font-inter text-[14px] text-mist">
                {t("home.logos.subtitle")}
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <LogoMarquee variant="light" />
          </Reveal>
        </div>
      </section>

      {/* ============ STATS (unique diagonal layout) ============ */}
      <section className="relative overflow-hidden bg-navy py-20">
        <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
        {/* Diagonal accent */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(188,26,44,0.08) 0%, transparent 50%, rgba(232,160,26,0.06) 100%)" }} />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <Eyebrow light>{t("home.stats.eyebrow")}</Eyebrow>
              <h2 className="mt-4 font-serif-jp font-bold leading-[1.18] text-white" style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}>
                {t("home.stats.title")}
              </h2>
              <p className="mx-auto mt-3 max-w-xl font-inter text-[14px] text-mist">{t("home.stats.subtitle")}</p>
            </div>
          </Reveal>
          {/* Stats — staggered unique layout */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className={`glass-dark lift-card rounded-lg p-7 text-center ${i % 2 === 1 ? "lg:translate-y-6" : ""}`}>
                  <div className="font-serif-jp text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-gradient-saffron">{s.num}</div>
                  <div className="mt-2 font-inter text-[13px] font-medium uppercase text-mist" style={{ letterSpacing: "0.05em" }}>{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXECUTIVE OVERVIEW (3 preview cards) ============ */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{t("home.overview.eyebrow")}</Eyebrow>
              <h2 className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink" style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}>
                {t("home.overview.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {t("home.overview.subtitle")}
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {previews.map((p, i) => (
              <Reveal key={p.href} delay={i * 120}>
                <Link href={p.href} className="lift-card group flex h-full flex-col rounded-lg border border-crimson/8 bg-pearl p-7 shadow-card">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-crimson/10 to-saffron/10 text-crimson transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <p.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-serif-jp text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-2.5 flex-1 font-inter text-[14px] leading-relaxed text-slate">{p.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-inter text-[13px] font-semibold text-crimson transition-all group-hover:gap-2.5">
                    {t("common.learnMore")}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="section-pad relative overflow-hidden bg-midnight">
        <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(188,26,44,0.10), transparent 60%)" }} />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif-jp font-bold leading-[1.15] text-white" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
                {t("home.cta.title")}
              </h2>
              <p className="mx-auto mt-5 max-w-lg font-inter font-light leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.125rem)" }}>
                {t("home.cta.subtitle")}
              </p>
              <Link href="/auth/brochure" className="btn-shine mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-8 py-4 font-inter text-[15px] font-semibold text-white shadow-[0_0_24px_rgba(188,26,44,0.45)] transition-all hover:-translate-y-0.5">
                <Download className="h-4 w-4" />
                {t("nav.brochure")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
