"use client";

import Link from "next/link";
import { Download, ArrowRight, BookOpen, Shield, Users, MapPin, Calendar, Building2, Globe2 } from "lucide-react";
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

/* ── India city map pin coordinates (relative to SVG viewBox 0 0 400 460) ── */
const INDIA_CITIES = [
  { name: "New Delhi", x: 165, y: 105, isHub: false },
  { name: "Ahmedabad", x: 95, y: 175, isHub: false },
  { name: "Mumbai", x: 115, y: 260, isHub: false },
  { name: "Hyderabad", x: 185, y: 290, isHub: true },
  { name: "Bengaluru", x: 150, y: 360, isHub: false },
  { name: "Chennai", x: 220, y: 340, isHub: false },
];

function IndiaMapMini() {
  return (
    <svg
      viewBox="0 0 300 460"
      className="h-full w-full"
      role="img"
      aria-label="Map of India showing Hyderabad as the J-Gate hub"
    >
      <defs>
        <linearGradient id="india-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BC1A2C" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#E8A01A" stopOpacity="0.10" />
        </linearGradient>
        <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8A01A" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#E8A01A" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#E8A01A" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* India silhouette (simplified) */}
      <path
        d="M 100 60 L 150 60 L 175 80 L 200 70 L 215 95 L 205 130 L 220 150 L 215 195 L 195 235 L 175 280 L 165 330 L 145 380 L 130 410 L 110 425 L 95 410 L 85 360 L 80 305 L 90 250 L 95 195 L 95 140 L 90 95 Z"
        fill="url(#india-fill)"
        stroke="rgba(255,255,255,0.30)"
        strokeWidth="1.2"
      />
      {/* Hyderabad hub glow */}
      <circle cx={INDIA_CITIES[3].x} cy={INDIA_CITIES[3].y} r="48" fill="url(#hub-glow)" />
      {/* City pins */}
      {INDIA_CITIES.map((c, i) => (
        <g key={c.name}>
          <circle
            cx={c.x}
            cy={c.y}
            r={c.isHub ? 7 : 3.5}
            fill={c.isHub ? "#E8A01A" : "rgba(255,255,255,0.65)"}
            stroke={c.isHub ? "#ffffff" : "transparent"}
            strokeWidth={c.isHub ? 1.5 : 0}
          >
            {c.isHub && (
              <animate
                attributeName="r"
                values="7;9;7"
                dur="2.5s"
                repeatCount="indefinite"
              />
            )}
          </circle>
          <text
            x={c.x + (c.isHub ? 12 : 7)}
            y={c.y + 4}
            fontSize={c.isHub ? "13" : "10"}
            fontWeight={c.isHub ? 700 : 500}
            fill={c.isHub ? "#E8A01A" : "rgba(255,255,255,0.72)"}
            fontFamily="Inter, sans-serif"
          >
            {c.name}
          </text>
        </g>
      ))}
      {/* Hyderabad pulse rings */}
      <circle cx={INDIA_CITIES[3].x} cy={INDIA_CITIES[3].y} r="7" fill="none" stroke="#E8A01A" strokeWidth="1.2" opacity="0.7">
        <animate attributeName="r" values="7;22;7" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export default function HomePage() {
  const { t, tx, lang } = useI18n();

  const stats = [
    { num: "50K+", label: tx({ EN: "INR / mo — Starting Cost", JP: "INR/月 — 月額費用" }) },
    { num: "7", label: tx({ EN: "Core Membership Pillars", JP: "メンバーシップ7つの柱" }) },
    { num: "2", label: tx({ EN: "Strategic City Bases", JP: "戦略的都市拠点" }) },
    { num: "100+", label: tx({ EN: "Network Partners", JP: "ネットワークパートナー" }) },
  ];

  const previews = [
    {
      icon: BookOpen,
      href: "/about",
      title: tx({ EN: "Core Purpose & Locations", JP: "目的と拠点" }),
      desc: tx({
        EN: "Three pillars — Opportunity Creation, Talent Development, Business Collaboration — anchored in Hyderabad and Gurgaon.",
        JP: "きっかけ作り・人材育成・ビジネス連携の3つの柱 — ハイデラバードとグルガオンを拠点に。",
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

  // Hero accent (alternate language)
  const heroAccent = lang === "EN" ? t("hero.jptag") : t("hero.entag");

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

        <div className="container-jg relative z-10 pt-24 pb-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-md bg-crimson px-4 py-1.5 font-inter text-[13px] font-medium text-white shadow-crimp" style={{ letterSpacing: "0.1em" }}>
            <JapanFlag className="h-3.5 w-5" />
            {t("hero.eyebrow")}
            <IndiaFlag className="h-3.5 w-5" />
          </span>

          <h1 className="mx-auto mt-8 max-w-5xl font-serif-jp font-bold leading-[1.08] text-white" style={{ fontSize: "clamp(2.25rem, 6vw, 4.75rem)" }}>
            {t("hero.title1")}<br />
            <span className="text-gradient-saffron">{t("hero.title2")}</span>
          </h1>

          {/* Alternate-language accent tag */}
          <p
            className={`mt-5 font-serif-jp italic text-saffron/75 ${
              lang === "JP" ? "font-inter not-italic" : ""
            }`}
            style={{ fontSize: "clamp(0.875rem, 1.4vw, 1rem)", letterSpacing: lang === "JP" ? "0.02em" : "0.05em" }}
          >
            {heroAccent}
          </p>

          <p className="mx-auto mt-6 max-w-[640px] font-inter font-light leading-relaxed text-mist" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
            {t("hero.subtitle")}
          </p>

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

          <div className="mx-auto mt-12 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              { emoji: "🇯🇵", text: t("hero.badge1") },
              { emoji: "📍", text: t("hero.badge2") },
              { emoji: "🚀", text: t("hero.badge3") },
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
      <section className="bg-ivory py-12">
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

      {/* ============ STATS + MAP (unique split layout) ============ */}
      <section className="relative overflow-hidden bg-navy py-14">
        <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
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

          {/* Two-column: stats grid + India map with Hyderabad hub */}
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            {/* Stats grid */}
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

            {/* India map with Hyderabad hub */}
            <Reveal delay={200}>
              <div className="glass-dark relative mx-auto flex h-[360px] w-full max-w-sm items-center justify-center rounded-xl border border-saffron/20 p-6">
                <div className="absolute left-4 top-4 flex items-center gap-2 font-inter text-[11px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.12em" }}>
                  <Globe2 className="h-3.5 w-3.5" />
                  {tx({ EN: "India Hub", JP: "インド拠点図" })}
                </div>
                <div className="absolute right-4 top-4 rounded-md bg-saffron/20 px-2.5 py-1 font-inter text-[10px] font-bold uppercase text-saffron">
                  {tx({ EN: "Hyderabad = Hub", JP: "ハイデラバード＝中枢" })}
                </div>
                <div className="h-full w-full">
                  <IndiaMapMini />
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-inter text-[10px] text-mist">
                  <span>{tx({ EN: "● Other cities", JP: "● その他都市" })}</span>
                  <span className="text-saffron">{tx({ EN: "● J-Gate Hub", JP: "● J-Gate拠点" })}</span>
                </div>
              </div>
            </Reveal>
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
          <div className="mt-10 grid gap-5 md:grid-cols-3">
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
