"use client";

import Link from "next/link";
import {
  Download,
  ArrowRight,
  BookOpen,
  Shield,
  Users,
  Building2,
  Wifi,
  Mic,
  Coffee,
  KeyRound,
  ArrowDown,
} from "lucide-react";
import { Reveal, Eyebrow, useCounter } from "@/components/jgate/shared";
import { useI18n } from "@/lib/i18n";
import {
  ToriiWatermark,
  JapanFlag,
  IndiaFlag,
} from "@/components/jgate/icons";
import { LogoMarquee } from "@/components/jgate/logo-marquee";
import { Photo } from "@/components/jgate/photo";

/* ============================================================
   J-Gate Home — v4.0 Compact Redesign
   Architecture (8 sections, single Hyderabad location):
     1. Hero (100dvh, midnight, Torii watermark, 18 particles, 2 glass badges, scroll cue)
     2. Trust Strip (2-row logo marquee — single instance)
     3. Stats (4 animated counters — compact crimson 32px max)
     4. Workspace Features (6 cards — what the co-working space provides)
     5. Core Pillars (3 navy glass cards)
     6. Hyderabad Location (single centered card — LIVE)
     7. Ecosystem Preview (3 editorial cards → /about, /why-jgate, /services)
     8. CTA Banner ("Ready to Bridge Your Future?")
   ============================================================ */

/* 18 CSS particles drifting upward via jg-drift keyframe */
function Particles() {
  const particles = Array.from({ length: 18 }).map((_, i) => ({
    left: `${(i * 53 + 7) % 100}%`,
    size: 1.2 + ((i * 7) % 4) * 0.6,
    delay: `${(i * 1.4) % 22}s`,
    duration: `${18 + ((i * 5) % 12)}s`,
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

/* Floating glass location badge (hero) */
function GlassBadge({
  emoji,
  primary,
  secondary,
  accent,
}: {
  emoji: string;
  primary: string;
  secondary: string;
  accent: "saffron" | "crimson" | "slate";
}) {
  const accentClass =
    accent === "saffron"
      ? "text-saffron border-saffron/30"
      : accent === "crimson"
        ? "text-crimson border-crimson/30"
        : "text-mist border-white/15";
  return (
    <div className="glass-dark flex items-center gap-2.5 rounded-full px-4 py-2">
      <span className="font-serif-jp text-[18px] leading-none">{emoji}</span>
      <div className="flex flex-col leading-tight">
        <span className={`font-inter text-[12px] font-bold uppercase ${accentClass.split(" ")[0]}`} style={{ letterSpacing: "0.08em" }}>
          {primary}
        </span>
        <span className="font-inter text-[11px] text-mist">{secondary}</span>
      </div>
    </div>
  );
}

/* Stat card with animated counter */
function StatCard({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { ref, count } = useCounter(value, 2200);
  return (
    <Reveal delay={delay}>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="lift-card relative flex h-full flex-col items-center justify-center rounded-lg border-b-2 border-crimson bg-pearl p-4 text-center shadow-card sm:p-5"
      >
        <div
          className="font-serif-jp font-bold leading-none text-crimson"
          style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
        >
          {count}
          <span className="text-saffron">{suffix}</span>
        </div>
        <div
          className="mt-2 font-inter text-[11px] font-semibold uppercase text-slate"
          style={{ letterSpacing: "0.08em" }}
        >
          {label}
        </div>
      </div>
    </Reveal>
  );
}

/* Workspace feature card (compact) */
function FeatureCard({
  icon: Icon,
  title,
  desc,
  delay,
}: {
  icon: typeof Building2;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <article className="lift-card group flex h-full flex-col rounded-lg border border-crimson/8 bg-pearl p-5 shadow-card">
        <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-to-br from-crimson/10 to-saffron/10 text-crimson transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <h3 className="mt-3 font-inter text-[15px] font-semibold leading-snug text-ink">
          {title}
        </h3>
        <p className="mt-2 font-inter text-[13px] leading-relaxed text-slate">
          {desc}
        </p>
      </article>
    </Reveal>
  );
}

export default function HomePage() {
  const { t, tx } = useI18n();

  /* 3 Pillars — navy section */
  const pillars = [
    {
      num: "01",
      kanji: "きっかけ作り",
      title: tx({ EN: "Opportunity Creation", JP: "きっかけ作り" }),
      body: t("about.pillar1.desc"),
    },
    {
      num: "02",
      kanji: "人材育成",
      title: tx({ EN: "Talent Development", JP: "人材育成" }),
      body: t("about.pillar2.desc"),
    },
    {
      num: "03",
      kanji: "ビジネス連携",
      title: tx({ EN: "Business Collaboration", JP: "ビジネス連携" }),
      body: t("about.pillar3.desc"),
    },
  ];

  /* 4 stats — animated counters */
  const stats = [
    { value: 100, suffix: "+", label: tx({ EN: "Network Partners", JP: "ネットワークパートナー" }) },
    { value: 500, suffix: "+", label: tx({ EN: "Members Served", JP: "会員数" }) },
    { value: 94, suffix: "%", label: tx({ EN: "Member Satisfaction", JP: "会員満足度" }) },
    { value: 92, suffix: "%", label: tx({ EN: "12-Month Retention", JP: "12ヶ月定着率" }) },
  ];

  /* 6 Workspace Features — what the co-working space provides */
  const features = [
    {
      icon: Building2,
      title: tx({ EN: "Dedicated Workspace", JP: "専用ワークスペース" }),
      desc: tx({
        EN: "Fixed desks with lockable cabinets and private lockers. Your personal space in a professional environment.",
        JP: "ロック可能なキャビネットとプライベートロッカー付きの固定デスク。プロフェッショナル環境におけるあなただけのスペース。",
      }),
    },
    {
      icon: Wifi,
      title: tx({ EN: "High-Speed Infrastructure", JP: "高速インフラ" }),
      desc: tx({
        EN: "Dedicated fiber internet, Xerox multifunction printers, and enterprise-grade connectivity.",
        JP: "専用ファイバーインターネット、Xerox複合機プリンター、エンタープライズ級の接続性。",
      }),
    },
    {
      icon: Mic,
      title: tx({ EN: "Meeting Rooms", JP: "会議室" }),
      desc: tx({
        EN: "Fully equipped conference rooms for client meetings and team sessions — expanding stepwise.",
        JP: "顧客商談やチーム会議に対応する完全装備の会議室 — 段階的に拡張。",
      }),
    },
    {
      icon: Coffee,
      title: tx({ EN: "Shared Cafeteria", JP: "共用カフェテリア" }),
      desc: tx({
        EN: "TASTY FOOD JUNCTION — Indian, Chinese, and Japanese-style cuisine. Fresh meals daily.",
        JP: "TASTY FOOD JUNCTION — インド料理・中華・和食スタイル。毎日新鮮な食事。",
      }),
    },
    {
      icon: KeyRound,
      title: tx({ EN: "24/7 Smart Access", JP: "24時間スマートアクセス" }),
      desc: tx({
        EN: "365 days a year, 24 hours a day. Enter with your dedicated smart key card — work on your schedule.",
        JP: "年中無休・24時間。専用スマートキーカードで入室 — あなたのスケジュールで仕事を。",
      }),
    },
    {
      icon: Shield,
      title: tx({ EN: "Enterprise Security", JP: "エンタープライズセキュリティ" }),
      desc: tx({
        EN: "Controlled access, secure management, and reliable safety infrastructure throughout the facility.",
        JP: "入退室管理、セキュアな管理、施設全体に信頼性の高い安全インフラ。",
      }),
    },
  ];

  /* Ecosystem preview cards */
  const previews = [
    {
      icon: BookOpen,
      href: "/about",
      title: tx({ EN: "About J-Gate", JP: "J-Gateについて" }),
      desc: tx({
        EN: "Discover our story, mission, and the vision behind Hyderabad's premier Japan-India co-working hub.",
        JP: "ハイデラバードのプレミアム日印コワーキングハブのストーリー、ミッション、ビジョンをご覧ください。",
      }),
    },
    {
      icon: Shield,
      href: "/why-jgate",
      title: tx({ EN: "Why J-Gate", JP: "J-Gateの強み" }),
      desc: tx({
        EN: "Compare us with alternatives — see why our workspace delivers more value than any other option.",
        JP: "他の選択肢と比較 — なぜ私たちのワークスペースが他のどの選択肢よりも高い価値を提供するのかをご確認ください。",
      }),
    },
    {
      icon: Users,
      href: "/services",
      title: tx({ EN: "Services", JP: "サービス" }),
      desc: tx({
        EN: "Corporate registration, Japan Desk, and complete business support — all under one roof.",
        JP: "法人登記、ジャパンデスク、完全なビジネス支援 — すべてワンストップで。",
      }),
    },
  ];

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          1. HERO — 100dvh, midnight, Torii watermark, 18 particles, 2 glass badges
         ════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-midnight">
        {/* Ambient gradient washes */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(188,26,44,0.08) 0%, rgba(188,26,44,0.02) 40%, transparent 70%), radial-gradient(ellipse at 70% 50%, rgba(188,26,44,0.12) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(232,160,26,0.06) 0%, transparent 50%)",
          }}
        />
        <ToriiWatermark
          className="torii-watermark"
          style={{ width: "70vw", maxWidth: "780px", right: "0", top: "8%", opacity: 0.045 }}
        />
        <Particles />
        {/* Skyline silhouette */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-[30%] w-full opacity-50">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="xMidYMax slice" className="h-full w-full" aria-hidden>
            <g fill="#0d1b2a">
              <rect x="0" y="160" width="80" height="40" /><rect x="80" y="135" width="60" height="65" />
              <rect x="150" y="40" width="64" height="160" /><rect x="214" y="90" width="44" height="110" />
              <rect x="258" y="135" width="70" height="65" /><rect x="340" y="130" width="120" height="70" />
              <rect x="470" y="110" width="52" height="90" /><rect x="522" y="60" width="58" height="140" />
              <rect x="580" y="135" width="48" height="65" /><rect x="628" y="20" width="70" height="180" />
              <rect x="698" y="95" width="50" height="105" /><rect x="748" y="135" width="64" height="65" />
              <rect x="820" y="120" width="80" height="80" /><rect x="910" y="80" width="56" height="120" />
              <rect x="966" y="40" width="60" height="160" /><rect x="1026" y="120" width="50" height="80" />
              <rect x="1076" y="70" width="64" height="130" /><rect x="1140" y="130" width="56" height="70" />
              <rect x="1196" y="50" width="58" height="150" /><rect x="1254" y="115" width="52" height="85" />
              <rect x="1306" y="90" width="60" height="110" /><rect x="1366" y="140" width="74" height="60" />
            </g>
          </svg>
        </div>
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-[32%] w-full"
          style={{ background: "linear-gradient(180deg, transparent, #080f1a 90%)" }}
        />

        <div className="container-jg relative z-10 pt-28 pb-32 text-center">
          {/* Eyebrow pill */}
          <Reveal>
            <span
              className="inline-flex items-center gap-2 rounded-full bg-crimson px-4 py-1.5 font-inter text-[12px] font-semibold text-white shadow-crimp"
              style={{ letterSpacing: "0.1em" }}
            >
              <JapanFlag className="h-3.5 w-5" />
              {tx({ EN: "HYDERABAD · CYBER GATEWAY", JP: "ハイデラバード・サイバーゲートウェイ" })}
              <IndiaFlag className="h-3.5 w-5" />
            </span>
          </Reveal>

          {/* Pre-title */}
          <Reveal delay={80}>
            <p
              className="mt-6 font-inter text-[12px] font-semibold uppercase text-saffron"
              style={{ letterSpacing: "0.25em" }}
            >
              {t("hero.eyebrow")}
            </p>
          </Reveal>

          {/* H1 — Noto Serif JP 900, clamp 1.75rem-2.5rem (max 40px) */}
          <Reveal delay={140}>
            <h1
              className="mx-auto mt-4 max-w-4xl font-serif-jp font-black leading-[1.1] text-white"
              style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
            >
              {t("hero.title1")}
              <br />
              <span className="text-white">Working Hub for</span>
              <br />
              <span className="text-gradient-saffron">Japanese Companies</span>
            </h1>
          </Reveal>

          {/* JP tagline */}
          <Reveal delay={200}>
            <p
              className="mt-4 font-serif-jp font-medium text-saffron/85"
              style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)", letterSpacing: "0.05em" }}
            >
              {t("hero.jptag")}
            </p>
          </Reveal>

          {/* Body subtitle — catchphrase */}
          <Reveal delay={260}>
            <p
              className="mx-auto mt-4 max-w-[600px] font-inter font-light leading-relaxed text-mist"
              style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
            >
              {t("hero.subtitle")}
            </p>
          </Reveal>

          {/* 2 CTAs */}
          <Reveal delay={320}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/auth/brochure"
                className="btn-shine flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-6 py-3 font-inter text-[14px] font-semibold text-white shadow-[0_0_24px_rgba(188,26,44,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(188,26,44,0.65)]"
              >
                <Download className="h-4 w-4" />
                {t("hero.cta1")}
              </Link>
              <Link
                href="/services"
                className="rounded-md border border-white/40 px-6 py-3 font-inter text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                {t("hero.cta2")}
                <ArrowRight className="ml-1.5 inline h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          {/* 2 floating glass badges — Hyderabad + Operator */}
          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <GlassBadge
                emoji="📍"
                primary={tx({ EN: "Hyderabad", JP: "ハイデラバード" })}
                secondary={tx({ EN: "Main Base", JP: "主拠点" })}
                accent="saffron"
              />
              <GlassBadge
                emoji="🏛"
                primary={tx({ EN: "Indobox India Pvt. Ltd.", JP: "Indobox India Pvt. Ltd." })}
                secondary={tx({ EN: "Operator", JP: "運営" })}
                accent="slate"
              />
            </div>
          </Reveal>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
          <span
            className="font-inter text-[10px] font-semibold uppercase text-mist"
            style={{ letterSpacing: "0.2em" }}
          >
            {t("hero.scroll")}
          </span>
          <div className="relative h-10 w-px overflow-hidden bg-white/15">
            <span className="animate-scroll-line absolute inset-0 block bg-crimson" />
          </div>
          <ArrowDown className="h-3 w-3 text-mist" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          2. TRUST STRIP — 2-row logo marquee (single instance)
         ════════════════════════════════════════════════════════════ */}
      <section className="bg-ivory py-8">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto mb-6 max-w-3xl text-center">
              <Eyebrow>{t("home.logos.eyebrow")}</Eyebrow>
              <h2
                className="mt-2 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
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
          3. STATS — 4 animated counters (compact crimson max 32px)
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <Eyebrow>{t("home.stats.eyebrow")}</Eyebrow>
              <h2
                className="mt-2 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {t("home.stats.title")}
              </h2>
              <p
                className="mx-auto mt-2 max-w-xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
              >
                {t("home.stats.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <StatCard
                key={i}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                delay={i * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          4. WORKSPACE FEATURES — 6 cards (what the co-working space provides)
          Ivory-warm bg, compact cards (p-5, 15px titles, 13px body)
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "What's Included", JP: "提供内容" })}</Eyebrow>
              <h2
                className="mt-2 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({
                  EN: "Everything You Need to Operate from Day One",
                  JP: "初日から稼働するために必要なすべて",
                })}
              </h2>
              <p
                className="mx-auto mt-2 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
              >
                {tx({
                  EN: "Six core capabilities bundled into every J-Gate membership — workspace, connectivity, and the operational support Japanese enterprises expect.",
                  JP: "J-Gateの全メンバーシップに含まれる6つのコア機能 — ワークスペース、接続性、そして日本企業が期待する運用サポート。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <FeatureCard
                key={i}
                icon={f.icon}
                title={f.title}
                desc={f.desc}
                delay={(i % 3) * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          5. CORE PILLARS — navy section, 3 glass cards
          Each card: faded number + JP kanji + EN title + body (compact)
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad relative overflow-hidden bg-navy">
        <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(188,26,44,0.10) 0%, transparent 50%, rgba(232,160,26,0.06) 100%)",
          }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <Eyebrow light>{tx({ EN: "Why J-Gate Exists", JP: "J-Gateの存在意義" })}</Eyebrow>
              <h2
                className="mt-3 font-serif-jp font-bold leading-[1.15] text-white"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({
                  EN: "Three Pillars. One Operating Engine.",
                  JP: "3つの柱、1つの運営エンジン。",
                })}
              </h2>
              <p
                className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-mist"
                style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
              >
                {t("about.purpose.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.num} delay={i * 120}>
                <article className="glass-dark lift-card relative h-full overflow-hidden rounded-lg border border-white/10 p-5">
                  {/* Faded large numeral */}
                  <span
                    className="pointer-events-none absolute -top-4 right-4 font-serif-jp font-black leading-none text-crimson"
                    style={{ fontSize: "72px", opacity: 0.15 }}
                    aria-hidden
                  >
                    {p.num}
                  </span>
                  <div className="relative">
                    <span
                      className="block font-serif-jp text-[16px] font-bold text-saffron"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      {p.kanji}
                    </span>
                    <h3
                      className="mt-2 font-serif-jp font-bold leading-tight text-white"
                      style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
                    >
                      {p.title}
                    </h3>
                    <div className="mt-3 h-px w-10 bg-crimson/40" />
                    <p
                      className="mt-3 font-inter leading-relaxed text-mist"
                      style={{ fontSize: "13px" }}
                    >
                      {p.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          6. HYDERABAD LOCATION — single centered card
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <Eyebrow>{t("about.locations.eyebrow")}</Eyebrow>
              <h2
                className="mt-2 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {t("about.locations.title")}
              </h2>
              <p
                className="mx-auto mt-2 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
              >
                {t("about.locations.subtitle")}
              </p>
            </div>
          </Reveal>

          {/* Hyderabad card — single, centered, max-w-3xl */}
          <Reveal delay={100}>
            <article className="lift-card group mx-auto max-w-3xl overflow-hidden rounded-lg border border-saffron/20 bg-pearl shadow-card">
              <div className="relative">
                <Photo
                  id="photo-location-hyderabad"
                  alt="J-Gate Hyderabad main base — Cyber Gateway, Hitech City"
                  fallback="grad-office-main"
                  initials="HYD"
                  rounded="rounded-t-lg"
                  className="h-40 w-full"
                />
                <div className="absolute inset-0 rounded-t-lg bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
                <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-success px-3 py-1.5 font-inter text-[11px] font-bold uppercase text-white shadow-crimp" style={{ letterSpacing: "0.1em" }}>
                  <span className="h-2 w-2 rounded-full bg-white animate-pulse-soft" />
                  {tx({ EN: "LIVE", JP: "稼働中" })}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span
                      className="block font-inter text-[11px] font-bold uppercase text-saffron"
                      style={{ letterSpacing: "0.15em" }}
                    >
                      {t("about.hyderabad.tag")}
                    </span>
                    <h3
                      className="mt-1 font-serif-jp font-bold text-ink"
                      style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
                    >
                      {t("about.hyderabad.title")}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-saffron/15 px-2.5 py-1 font-inter text-[11px] font-bold uppercase text-saffron">
                    <Building2 className="h-3 w-3" />
                    {t("about.hyderabad.status")}
                  </span>
                </div>
                <p className="mt-3 font-serif-jp text-[13px] font-medium italic text-saffron/85">
                  {t("about.hyderabad.nick")}
                </p>
                <p className="mt-2 font-inter text-[13px] leading-relaxed text-slate">
                  {t("about.hyderabad.desc")}
                </p>
                <ul className="mt-4 space-y-2 border-t border-crimson/10 pt-4">
                  {[t("about.hyderabad.f1"), t("about.hyderabad.f2"), t("about.hyderabad.f3")].map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" />
                      <span className="font-inter text-[13px] text-ink">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 font-inter text-[13px] font-semibold text-crimson transition-all hover:gap-2.5"
                >
                  {tx({ EN: "Visit Our Hyderabad Hub", JP: "ハイデラバード拠点を見る" })}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          7. ECOSYSTEM PREVIEW — 3 editorial cards linking to /about, /why-jgate, /services
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{t("home.overview.eyebrow")}</Eyebrow>
              <h2
                className="mt-2 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {t("home.overview.title")}
              </h2>
              <p
                className="mx-auto mt-2 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
              >
                {t("home.overview.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {previews.map((p, i) => (
              <Reveal key={p.href} delay={i * 120}>
                <Link
                  href={p.href}
                  className="lift-card group flex h-full flex-col rounded-lg border border-crimson/8 bg-pearl p-5 shadow-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-crimson/10 to-saffron/10 text-crimson transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <p.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="mt-4 font-serif-jp font-bold text-ink"
                    style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 font-inter text-[13px] leading-relaxed text-slate">
                    {p.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-inter text-[13px] font-semibold text-crimson transition-all group-hover:gap-2.5">
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
          8. CTA BANNER — "Ready to Bridge Your Future?" + Download Brochure
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad relative overflow-hidden bg-midnight">
        <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(188,26,44,0.12), transparent 60%)",
          }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-crimson/15 text-crimson">
                <Building2 className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.15] text-white"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {t("home.cta.title")}
              </h2>
              <p
                className="mx-auto mt-4 max-w-lg font-inter font-light leading-relaxed text-mist"
                style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
              >
                {t("home.cta.subtitle")}
              </p>
              <Link
                href="/contact"
                className="btn-shine mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-7 py-3 font-inter text-[14px] font-semibold text-white shadow-[0_0_24px_rgba(188,26,44,0.45)] transition-all hover:-translate-y-0.5"
              >
                {t("nav.contact")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
