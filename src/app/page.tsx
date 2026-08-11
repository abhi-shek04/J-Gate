"use client";

import Link from "next/link";
import { Download, ArrowRight, BookOpen, Shield, Users, MapPin, Building2 } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { useI18n } from "@/lib/i18n";
import { ToriiWatermark, JapanFlag, IndiaFlag, HyderabadSkyline, JGateLogo } from "@/components/jgate/icons";
import { LogoMarquee } from "@/components/jgate/logo-marquee";

/* ============================================================
   J-Gate Home — Clean Executive Landing
   Architecture: Hero → Logo Wall → Quick Stats → Executive Overview → CTA
   Each section strictly grouped by domain. Zero context mixing.
   ============================================================ */

function Particles() {
  const particles = Array.from({ length: 12 }).map((_, i) => ({
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
  const { t, tx, lang } = useI18n();

  /* ── Quick Stats — 4 clean metric badges (high scannability) ── */
  const stats = [
    {
      num: "100+",
      label: tx({ EN: "Network Partners", JP: "ネットワークパートナー" }),
    },
    {
      num: "500+",
      label: tx({ EN: "Engineers Placed", JP: "紹介エンジニア数" }),
    },
    {
      num: "94%",
      label: tx({ EN: "JLPT Pass Rate", JP: "JLPT合格率" }),
    },
    {
      num: "92%",
      label: tx({ EN: "12-mo Retention", JP: "12ヶ月定着率" }),
    },
  ];

  /* ── Executive Overview — 3 clean cards linking to /about, /why-jgate, /services ── */
  const previews = [
    {
      icon: BookOpen,
      href: "/about",
      title: tx({ EN: "Core Purpose & Locations", JP: "目的と拠点" }),
      desc: tx({
        EN: "Three pillars — Opportunity Creation, Talent Development, Business Collaboration — anchored in Hyderabad and Gurgaon.",
        JP: "きっかけ作り・人材育成・ビジネス連携の3本柱 — ハイデラバードとグルガオンを拠点に。",
      }),
    },
    {
      icon: Shield,
      href: "/why-jgate",
      title: tx({ EN: "The Strategic Advantage", JP: "戦略的優位性" }),
      desc: tx({
        EN: "Comparison vs consulting firms, coworking, and public orgs — plus 7 membership pillars that accelerate India entry.",
        JP: "コンサル・コワーキング・公的機関との比較 — さらにインド進出を加速する7つの柱。",
      }),
    },
    {
      icon: Users,
      href: "/services",
      title: tx({ EN: "Service Verticals", JP: "サービス分野" }),
      desc: tx({
        EN: "Recruitment, corporate bridging, language training, and relocation — four pathways to Japan-India success.",
        JP: "採用・企業橋渡し・語学研修・再配置 — 日印成功への4つの道。",
      }),
    },
  ];

  /* Hero alternate-language accent tag (bilingual elegance) */
  const heroAccent = lang === "EN" ? t("hero.jptag") : t("hero.entag");

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          HERO — Logo + dual title + catchphrase + 2 CTAs + location focus
          NO clutter. Logo, title, subtitle, CTAs only.
         ════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-midnight">
        {/* Ambient gradient washes */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(188,26,44,0.08) 0%, rgba(188,26,44,0.02) 40%, transparent 70%), radial-gradient(ellipse at 70% 50%, rgba(188,26,44,0.10) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(232,160,26,0.06) 0%, transparent 50%)",
          }}
        />
        <ToriiWatermark
          className="torii-watermark"
          style={{ width: "70vw", maxWidth: "780px", right: "0", top: "8%" }}
        />
        <Particles />
        {/* Skyline silhouette */}
        <div className="absolute bottom-0 left-0 h-[34%] w-full opacity-60">
          <HyderabadSkyline className="h-full w-full" />
        </div>
        <div
          className="absolute bottom-0 left-0 h-[32%] w-full"
          style={{ background: "linear-gradient(180deg, transparent, #0f172a 85%)" }}
        />

        <div className="container-jg relative z-10 pt-24 pb-24 text-center">
          {/* Eyebrow pill */}
          <span
            className="inline-flex items-center gap-2 rounded-md bg-crimson px-4 py-1.5 font-inter text-[13px] font-medium text-white shadow-crimp"
            style={{ letterSpacing: "0.1em" }}
          >
            <JapanFlag className="h-3.5 w-5" />
            {t("hero.eyebrow")}
            <IndiaFlag className="h-3.5 w-5" />
          </span>

          {/* Logo — large brand mark */}
          <Reveal delay={80}>
            <div className="mt-8 flex justify-center">
              <JGateLogo size="lg" />
            </div>
          </Reveal>

          {/* Bilingual title (line 1 + saffron gradient line 2) */}
          <h1
            className="mx-auto mt-8 max-w-5xl font-serif-jp font-bold leading-[1.08] text-white"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4.75rem)" }}
          >
            {t("hero.title1")}
            <br />
            <span className="text-gradient-saffron">{t("hero.title2")}</span>
          </h1>

          {/* Alternate-language accent (JP tag in EN mode, EN tag in JP mode) */}
          <p
            className={`mt-5 font-serif-jp italic text-saffron/75 ${
              lang === "JP" ? "font-inter not-italic" : ""
            }`}
            style={{
              fontSize: "clamp(0.875rem, 1.4vw, 1rem)",
              letterSpacing: lang === "JP" ? "0.02em" : "0.05em",
            }}
          >
            {heroAccent}
          </p>

          {/* Catchphrase subtitle */}
          <p
            className="mx-auto mt-6 max-w-[640px] font-inter font-light leading-relaxed text-mist"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            {t("hero.subtitle")}
          </p>

          {/* Two CTAs — no clutter */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/auth/brochure"
              className="btn-shine flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-8 py-4 font-inter text-[15px] font-semibold text-white shadow-[0_0_24px_rgba(188,26,44,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(188,26,44,0.65)]"
            >
              <Download className="h-4 w-4" />
              {t("hero.cta1")}
            </Link>
            <Link
              href="/services"
              className="rounded-md border border-white/40 px-8 py-4 font-inter text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              {t("hero.cta2")}
              <ArrowRight className="ml-1.5 inline h-4 w-4" />
            </Link>
          </div>

          {/* Hyderabad + Gurgaon focus — clean location pill row */}
          <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 font-inter text-[12px] text-mist">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron/15 px-3 py-1.5 font-semibold text-saffron">
              <MapPin className="h-3.5 w-3.5" />
              {tx({ EN: "Hyderabad — Main Base", JP: "ハイデラバード — 主拠点" })}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-crimson/15 px-3 py-1.5 font-semibold text-crimson">
              <MapPin className="h-3.5 w-3.5" />
              {tx({ EN: "Gurgaon — Sub Base", JP: "グルガオン — サブ拠点" })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Building2 className="h-3.5 w-3.5 text-slate" />
              Indobox India Pvt. Ltd.
            </span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SCROLLING LOGO WALL — Compact, clean
         ════════════════════════════════════════════════════════════ */}
      <section className="bg-ivory py-12">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <Eyebrow>{t("home.logos.eyebrow")}</Eyebrow>
              <h2
                className="mt-3 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.375rem,3vw,1.75rem)" }}
              >
                {t("home.logos.title")}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <LogoMarquee variant="light" />
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          QUICK STATS — 4 clean metric badges (high scannability)
          Pure data section — no India map, no extra context.
         ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-navy py-14">
        <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(188,26,44,0.08) 0%, transparent 50%, rgba(232,160,26,0.06) 100%)",
          }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <Eyebrow light>{t("home.stats.eyebrow")}</Eyebrow>
              <h2
                className="mt-3 font-serif-jp font-bold leading-[1.18] text-white"
                style={{ fontSize: "clamp(1.5rem,3.5vw,2rem)" }}
              >
                {t("home.stats.title")}
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="glass-dark lift-card rounded-lg p-6 text-center">
                  <div className="font-serif-jp text-[clamp(2.25rem,4.5vw,3rem)] font-bold text-gradient-saffron leading-none">
                    {s.num}
                  </div>
                  <div
                    className="mt-3 font-inter text-[12px] font-semibold uppercase text-mist"
                    style={{ letterSpacing: "0.08em" }}
                  >
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          EXECUTIVE OVERVIEW — 3 clean cards → /about, /why-jgate, /services
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{t("home.overview.eyebrow")}</Eyebrow>
              <h2
                className="mt-3 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.625rem,3.5vw,2.125rem)" }}
              >
                {t("home.overview.title")}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {t("home.overview.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {previews.map((p, i) => (
              <Reveal key={p.href} delay={i * 120}>
                <Link
                  href={p.href}
                  className="lift-card group flex h-full flex-col rounded-lg border border-crimson/8 bg-pearl p-7 shadow-card"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-crimson/10 to-saffron/10 text-crimson transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <p.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-serif-jp text-xl font-bold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 flex-1 font-inter text-[14px] leading-relaxed text-slate">
                    {p.desc}
                  </p>
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

      {/* ════════════════════════════════════════════════════════════
          CTA BANNER — Single, clean, focused
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad relative overflow-hidden bg-midnight">
        <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(188,26,44,0.10), transparent 60%)",
          }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2
                className="font-serif-jp font-bold leading-[1.15] text-white"
                style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)" }}
              >
                {t("home.cta.title")}
              </h2>
              <p
                className="mx-auto mt-5 max-w-lg font-inter font-light leading-relaxed text-mist"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.125rem)" }}
              >
                {t("home.cta.subtitle")}
              </p>
              <Link
                href="/auth/brochure"
                className="btn-shine mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-8 py-4 font-inter text-[15px] font-semibold text-white shadow-[0_0_24px_rgba(188,26,44,0.45)] transition-all hover:-translate-y-0.5"
              >
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
