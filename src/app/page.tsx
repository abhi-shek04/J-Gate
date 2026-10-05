"use client";

import Link from "next/link";
import {
  ArrowRight,
  Users,
  Building2,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Reveal, Eyebrow, StaggerReveal, TextReveal, AnimatedCounter, ParallaxLayer } from "@/components/jgate/shared";
import { useI18n } from "@/lib/i18n";
import {
  ToriiWatermark,
  JapanFlag,
} from "@/components/jgate/icons";
import { Photo } from "@/components/jgate/photo";
import { cn } from "@/lib/utils";
import { BilateralCorridorVisualizer } from "@/components/jgate/corridor-visualizer";
import { AboutSection } from "@/components/jgate/about-section";
import { WhyJGateSection } from "@/components/jgate/why-jgate-section";
import { ServicesSection } from "@/components/jgate/services-section";
import { TeamSection } from "@/components/jgate/team-section";
import { PricingSection } from "@/components/jgate/pricing-section";
import { FAQSection } from "@/components/jgate/faq-section";
import { BlogsSection } from "@/components/jgate/blogs-section";
import { ContactSection } from "@/components/jgate/contact-section";

/* ============================================================
   J-Gate Home — Executive Corporate Homepage
   ============================================================ */

/* 14 subtle particles drifting upward — light-mode crimson/saffron tones */
function Particles() {
  const particles = Array.from({ length: 14 }).map((_, i) => ({
    left: `${(i * 53 + 7) % 100}%`,
    size: 1.5 + ((i * 7) % 4) * 0.5,
    delay: `${(i * 1.6) % 20}s`,
    duration: `${20 + ((i * 5) % 12)}s`,
    color: i % 3 === 0 ? "rgba(188, 26, 44, 0.18)" : i % 3 === 1 ? "rgba(232, 160, 26, 0.15)" : "rgba(74, 78, 105, 0.10)",
  }));
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            animation: `jg-drift ${p.duration} linear infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

/* Floating luxury glass location & operator badge (hero) */
function GlassBadge({
  icon: Icon,
  flag,
  imageSrc,
  textBadge,
  primary,
  secondary,
  accent,
  href,
}: {
  icon?: React.ComponentType<{ className?: string }>;
  flag?: React.ReactNode;
  imageSrc?: string;
  textBadge?: string;
  primary: string;
  secondary: string;
  accent: "saffron" | "crimson" | "slate";
  href?: string;
}) {
  const accentBorder =
    accent === "saffron"
      ? "hover:border-saffron/60 border-saffron/30 dark:border-saffron/20"
      : accent === "crimson"
      ? "hover:border-crimson/60 border-crimson/30 dark:border-rose-400/25"
      : "hover:border-slate-400/60 border-slate-200/90 dark:border-white/15";

  const primaryColor =
    accent === "saffron"
      ? "text-saffron-dark dark:text-saffron"
      : accent === "crimson"
      ? "text-crimson dark:text-rose-400"
      : "text-slate-800 dark:text-white";

  const BadgeContent = (
    <div
      className={cn(
        "luxury-light-card card-sheen group relative flex items-center gap-3.5 rounded-2xl px-5 py-3 sm:px-6 sm:py-3.5 bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl border shadow-lg shadow-slate-200/50 dark:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-left cursor-pointer",
        accentBorder
      )}
    >
      <div
        className={cn(
          "flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border shadow-2xs group-hover:scale-105 transition-transform duration-300",
          imageSrc
            ? "bg-white border-slate-200 dark:border-white/20 p-1"
            : "bg-slate-100 dark:bg-white/5 border-slate-200/80 dark:border-white/10"
        )}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={primary}
            className="h-6 w-6 sm:h-7 sm:w-7 object-contain shrink-0"
          />
        ) : textBadge ? (
          <span className="font-mono text-xs font-black tracking-tight text-slate-700 dark:text-slate-200">
            {textBadge}
          </span>
        ) : flag ? (
          <span className="shrink-0 scale-110">{flag}</span>
        ) : Icon ? (
          <Icon className="h-5 w-5 text-crimson dark:text-rose-400 shrink-0" />
        ) : null}
      </div>
      <div className="flex flex-col leading-tight min-w-0">
        <span className={cn("font-inter text-[13.5px] sm:text-[14.5px] font-bold tracking-tight truncate group-hover:text-crimson dark:group-hover:text-rose-400 transition-colors", primaryColor)}>
          {primary}
        </span>
        <span className="mt-0.5 font-inter text-[11px] sm:text-[12px] font-medium text-slate-600 dark:text-slate-300 truncate">
          {secondary}
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {BadgeContent}
      </a>
    );
  }

  return BadgeContent;
}



export default function HomePage() {
  const { t, tx } = useI18n();


  /* 3 Clean Strategic Location Pillars (Zero duplication with agenda!) */
  const locationAdvantages = [
    {
      num: "01",
      title: {
        EN: "Premier Tech Ecosystem in Hyderabad",
        JP: "グローバルIT企業が集結するハイデラバードの中心",
      },
      desc: {
        EN: "Located in Hyderabad alongside global tech leaders (Google, Microsoft, Amazon), giving Japanese enterprises instant corporate prestige, strategic partner proximity, and market credibility.",
        JP: "ハイデラバードに位置し、GoogleやMicrosoftなど大手IT企業が集結する環境で、日本企業の信頼性とネットワークを強固にします。",
      },
    },
    {
      num: "02",
      title: {
        EN: "Strategic Connectivity & Cost Advantage",
        JP: "優れたアクセスと最適化された運営コスト",
      },
      desc: {
        EN: "2-minute walk to Metro Station, 35 minutes to Rajiv Gandhi International Airport, and over 40% operational cost savings compared to Tokyo, Tokyo Bay, or Mumbai.",
        JP: "最寄りのメトロ駅から徒歩2分、国際空港まで車で35分。東京やムンバイと比較して拠点運営費を40%以上削減できます。",
      },
    },
    {
      num: "03",
      title: {
        EN: "Dedicated Japanese Security & Infrastructure",
        JP: "日系ビジネスに最適化された高水準インフラ",
      },
      desc: {
        EN: "Dedicated Japanese enterprise suite featuring biometric access control, 24/7 generator power backup, dual high-speed enterprise fiber feeds, and private meeting rooms for uninterrupted business continuity.",
        JP: "日系企業専用フロアに生体認証セキュリティ、24時間無停電電源、二重化光回線、完全個室会議室を完備し、安全かつ円滑な事業運営を保証します。",
      },
    },
  ];

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          1. HERO — Ultra-Luxurious Japanese-Modern Executive Launchpad
         ════════════════════════════════════════════════════════════ */}
      <section className="relative flex items-center justify-center overflow-hidden bg-slate-50/70 dark:bg-black pt-24 sm:pt-32 pb-8 sm:pb-12 border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
        {/* Ambient warm layered glows — Clean Institutional Light & Dark */}
        <div
          className="absolute inset-0 dark:hidden pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(188,26,44,0.035) 0%, transparent 65%), radial-gradient(ellipse at 80% 80%, rgba(232,160,26,0.025) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 hidden dark:block pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, rgba(225,29,72,0.18) 0%, transparent 60%), radial-gradient(ellipse at 85% 45%, rgba(245,158,11,0.06) 0%, transparent 50%)",
          }}
        />

        {/* Subtle asanoha texture overlay */}
        <div className="absolute inset-0 pattern-asanoha opacity-[0.025] dark:pattern-asanoha-dark dark:opacity-20 pointer-events-none" />
        <ParallaxLayer speed={-0.12} className="absolute inset-0 pointer-events-none overflow-hidden">
          <ToriiWatermark
            className="torii-watermark"
            style={{ width: "70vw", maxWidth: "780px", right: "0", top: "8%", opacity: 0.025 }}
          />
        </ParallaxLayer>
        <Particles />

        {/* Skyline silhouette — clean subtle neutral ambient */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-[26%] w-full opacity-25 dark:opacity-15">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="xMidYMax slice" className="h-full w-full" aria-hidden>
            <g className="fill-slate-900/[0.04] dark:fill-white/[0.04]">
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
          className="pointer-events-none absolute bottom-0 left-0 h-[25%] w-full bg-gradient-to-b from-transparent via-slate-50/60 to-slate-50 dark:via-[#070c16]/60 dark:to-[#070c16]"
        />

        <div className="container-jg relative z-10 pt-2 pb-6 sm:pt-4 sm:pb-8 text-center max-w-5xl mx-auto">
          {/* 1. Pre-title: Japan–India Business & Talent Hub */}
          <Reveal variant="blur" delay={0}>
            <div className="flex flex-col items-center justify-center gap-2.5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/15 px-3.5 py-1 text-[11px] sm:text-[12px] font-semibold text-slate-700 dark:text-slate-200 shadow-2xs backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>🇮🇳 HYDERABAD · CYBER GATEWAY</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 font-inter text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-[0.22em] text-crimson dark:text-rose-400 mt-1">
                <span className="hidden sm:inline-block h-px w-8 bg-crimson/30 dark:bg-rose-400/30" />
                <span>{tx({ EN: "Japan × India Talent & Business Bridge", JP: "日印ビジネス＆高度人材ハブ" })}</span>
                <span className="hidden sm:inline-block h-px w-8 bg-crimson/30 dark:bg-rose-400/30" />
              </div>
            </div>
          </Reveal>

          {/* 2. Main H1 Title */}
          <Reveal delay={80}>
            <TextReveal speed={0.6}>
              <h1
                className="mx-auto mt-4 max-w-4xl font-inter font-black leading-[1.1] text-slate-900 dark:text-white tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 5.8vw, 4.4rem)" }}
              >
                {tx({
                  EN: "Birth of a Dedicated Working Hub for Japanese Companies",
                  JP: "日本企業専用のワーキングハブ誕生",
                })}
              </h1>
            </TextReveal>
          </Reveal>

          {/* 2b. Secondary Sub-heading */}
          <Reveal delay={110}>
            <p className="mx-auto mt-3 max-w-3xl font-serif-jp text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-200 tracking-tight">
              {tx({
                EN: "A Dedicated Workspace for Japanese Companies in India",
                JP: "インドにおける日本企業のための専用ワークスペース",
              })}
            </p>
          </Reveal>

          {/* 3. Executive Tagline Badge */}
          <Reveal delay={140}>
            <div className="mt-4 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 dark:bg-white/10 border border-slate-200 dark:border-white/15 px-4 py-1.5 font-inter text-[13px] sm:text-[14px] font-semibold text-slate-700 dark:text-slate-200 tracking-wide shadow-2xs backdrop-blur-sm" style={{ textWrap: "balance" }}>
                <Sparkles className="h-3.5 w-3.5 text-crimson dark:text-rose-400" />
                <span>
                  {tx({
                    EN: "Enterprise Grade Workspace & Resident Japanese Advisory in Hyderabad",
                    JP: "ハイデラバード拠点の日本企業専用・完全日本語伴走型ワーキングハブ",
                  })}
                </span>
              </span>
            </div>
          </Reveal>

          {/* 4. Lead Description Paragraph */}
          <Reveal delay={200}>
            <p
              className="mx-auto mt-4 sm:mt-5 max-w-[680px] font-inter font-normal leading-relaxed text-slate-600 dark:text-slate-300 text-[14.5px] sm:text-[15.5px]"
            >
              {tx({
                EN: "A dedicated co-working space in Hyderabad, India for Japanese businesses. Dedicated desks, private offices, resident Japan Desk support, and full office infrastructure to start operations smoothly in India.",
                JP: "ハイデラバードに誕生した日本企業専用コワーキングスペース。専用デスク、個室キャビン、常駐ジャパンデスク、充実したオフィスインフラで、インド事業の円滑な立ち上げを包括支援。",
              })}
            </p>
          </Reveal>

          {/* 5. Co-Operating Partners Badges */}
          <Reveal delay={260}>
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
              <GlassBadge
                href="https://indobox.co.jp/"
                imageSrc="/logos/indobox-icon.png"
                primary={tx({ EN: "Indobox India Private Limited.", JP: "Indobox India Private Limited." })}
                secondary={tx({ EN: "Japan Operator", JP: "日本側運営主体" })}
                accent="slate"
              />
              <GlassBadge
                href="https://www.genesysinfox.com/"
                imageSrc="/logos/genesys-info-x.png"
                primary="Genesys Info X"
                secondary={tx({ EN: "Infrastructure Partner", JP: "現地インフラ提携" })}
                accent="slate"
              />
            </div>
          </Reveal>

          {/* 6. Primary Action Button & Executive Proof Strip */}
          <Reveal delay={320}>
            <div className="mt-7 sm:mt-9 flex flex-col items-center justify-center gap-6">
              <Link
                href="/why-jgate"
                className="btn-shine group relative overflow-hidden inline-flex items-center justify-center gap-2.5 rounded-xl bg-crimson hover:bg-crimson-deep px-7 py-3.5 sm:px-8 sm:py-4 font-inter text-[14px] sm:text-[15px] font-bold text-white shadow-lg shadow-crimson/20 hover:shadow-xl hover:shadow-crimson/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>{tx({ EN: "Discover J-Gate", JP: "J-Gateを詳しく見る" })}</span>
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Stat Proof Cards Bar */}
              <StaggerReveal delay={400} className="w-full pt-4 border-t border-slate-200/70 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
                <div className="p-3.5 rounded-xl bg-white/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-center shadow-2xs backdrop-blur-md hover:border-crimson/40 dark:hover:border-rose-400/40 transition-all duration-300">
                  <span className="block font-mono text-xl sm:text-2xl font-black text-crimson dark:text-rose-400">100%</span>
                  <span className="mt-0.5 block font-inter text-[11px] sm:text-[12px] font-semibold text-slate-700 dark:text-slate-300">
                    {tx({ EN: "Japanese Director On-Site", JP: "日本人ディレクター現地常駐" })}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-center shadow-2xs backdrop-blur-md hover:border-crimson/40 dark:hover:border-rose-400/40 transition-all duration-300">
                  <span className="block font-mono text-xl sm:text-2xl font-black text-ink dark:text-white">100%</span>
                  <span className="mt-0.5 block font-inter text-[11px] sm:text-[12px] font-semibold text-slate-700 dark:text-slate-300">
                    {tx({ EN: "Dedicated Japanese Suite", JP: "日本企業専用スイート" })}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-center shadow-2xs backdrop-blur-md hover:border-crimson/40 dark:hover:border-rose-400/40 transition-all duration-300">
                  <span className="block font-mono text-xl sm:text-2xl font-black text-saffron-deep dark:text-saffron-light">40%+</span>
                  <span className="mt-0.5 block font-inter text-[11px] sm:text-[12px] font-semibold text-slate-700 dark:text-slate-300">
                    {tx({ EN: "Cost Advantage vs Tokyo/Mumbai", JP: "東京・ムンバイ比コスト優位" })}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-center shadow-2xs backdrop-blur-md hover:border-crimson/40 dark:hover:border-rose-400/40 transition-all duration-300">
                  <span className="block font-mono text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">Day 1</span>
                  <span className="mt-0.5 block font-inter text-[11px] sm:text-[12px] font-semibold text-slate-700 dark:text-slate-300">
                    {tx({ EN: "Zero Setup Lag", JP: "即日稼働" })}
                  </span>
                </div>
              </StaggerReveal>
            </div>
          </Reveal>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
          <span
            className="font-inter text-[9.5px] sm:text-[10px] font-semibold uppercase text-slate dark:text-slate-400"
            style={{ letterSpacing: "0.2em" }}
          >
            {t("hero.scroll")}
          </span>
          <div className="relative h-6 w-px overflow-hidden bg-slate-300 dark:bg-white/20">
            <span className="animate-scroll-line absolute inset-0 block bg-crimson dark:bg-rose-400" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          2. LIVE BILATERAL CORRIDOR STATUS — Tokyo ↔ Hyderabad
         ════════════════════════════════════════════════════════════ */}
      <BilateralCorridorVisualizer />

      {/* ════════════════════════════════════════════════════════════
          3. ABOUT J-GATE — 3 Pillars, Bilateral Alliance & Mission/Vision
         ════════════════════════════════════════════════════════════ */}
      <AboutSection id="about" hideHero />

      {/* ════════════════════════════════════════════════════════════
          4. HYDERABAD LOCATION — 2-Column Strategic Map & Value Pillars
         ════════════════════════════════════════════════════════════ */}
      <section className="py-6 sm:py-8 lg:py-10 bg-ivory-warm dark:bg-black border-t border-slate-200/70 dark:border-white/10">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto mb-8 sm:mb-10 max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Strategic Location Advantage", JP: "戦略的立地の優位性" })}</Eyebrow>
              <h2
                className="mt-2 font-serif-jp font-bold leading-[1.18] text-ink dark:text-white"
                style={{ fontSize: "clamp(1.625rem, 3vw, 2.25rem)" }}
              >
                {tx({
                  EN: "Hyderabad: India's Premier Innovation Capital",
                  JP: "インド最大のIT・イノベーション拠点 ハイデラバード",
                })}
              </h2>
              <p
                className="mx-auto mt-2 max-w-2xl font-inter leading-relaxed text-slate dark:text-slate-300"
                style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)" }}
              >
                {tx({
                  EN: "Situated in the heart of Hyderabad, J-Gate delivers a strategic operational base with direct access to elite software engineering talent, enterprise infrastructure, and bilateral business networks.",
                  JP: "ハイデラバード・Hyderabadの中心に位置するJ-Gate。優秀なIT人材、最新のオフィス環境、そして日印の強力なビジネスネットワークへのアクセスを提供します。",
                })}
              </p>
            </div>
          </Reveal>

          {/* 2-Column Grid: Map on Left + Details on Right */}
          <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            {/* Left: India Map Graphic with Highlight Badge */}
            <div className="lg:col-span-5">
              <Reveal variant="scale">
                <div className="luxury-light-card card-sheen gold-hairline group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#09090b] p-4 sm:p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-crimson/30">
                  {/* Floating Live Badge with radar beacon */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-crimson/10 dark:bg-rose-950/50 border border-crimson/25 dark:border-rose-400/30 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10.5px] sm:text-[11px] font-bold text-crimson dark:text-rose-400 uppercase tracking-wider">
                      <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      {tx({ EN: "Flagship Hub", JP: "旗艦拠点" })}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-success px-2.5 py-0.5 sm:px-3 sm:py-1 font-inter text-[10px] sm:text-[10.5px] font-bold uppercase text-white shadow-sm">
                      <span className="radar-beacon h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white text-emerald-300" />
                      {tx({ EN: "LIVE · Hyderabad, India", JP: "稼働中 · インド・ハイデラバード" })}
                    </span>
                  </div>

                  {/* The Map Graphic */}
                  <div className="relative flex items-center justify-center p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50/80 dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-inner">
                    <img
                      src="/india-map-hyderabad.png"
                      alt="Map of India highlighting Hyderabad location along with New Delhi, Mumbai, Bengaluru, Chennai, and Ahmedabad"
                      className="w-full max-h-[300px] sm:max-h-[360px] object-contain transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Strategic Location Value Pillars */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <Reveal delay={80}>
                <div>
                  <span className="font-inter text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-crimson dark:text-rose-400">
                    {tx({ EN: "Hyderabad, India", JP: "ハイデラバード" })}
                  </span>
                  <h3 className="mt-1 sm:mt-1.5 font-serif-jp text-xl sm:text-2xl lg:text-3xl font-bold text-ink dark:text-white leading-tight">
                    {tx({
                      EN: "Prime Enterprise Base in Hyderabad",
                      JP: "Hyderabadの中心で展開する日本企業専用ビジネス拠点",
                    })}
                  </h3>
                  <p className="mt-2 sm:mt-2.5 font-inter text-[13px] sm:text-[13.5px] leading-relaxed text-slate dark:text-slate-300">
                    {tx({
                      EN: "Hyderabad is India's fastest-growing technology metropolis, recognized for modern commercial infrastructure, high quality of living, and pro-business government policies. J-Gate offers a fully managed Japanese enterprise workspace with resident Japan Desk advisory.",
                      JP: "ハイデラバードは、整備された都市インフラと州政府の手厚い支援により、インドで最も急速に発展するIT・イノベーション都市です。J-Gateは、日本人常駐チームによる伴走支援と高品質なオフィス環境を提供し、日本企業の確実な進出をサポートします。",
                    })}
                  </p>
                </div>
              </Reveal>

              {/* 4 Feature Checkpoints with Numbered Luxury Pods */}
              <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
                {locationAdvantages.map((item, idx) => (
                  <Reveal key={idx} delay={100 + idx * 40}>
                    <div className="group flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-white dark:bg-[#09090b] p-3 sm:p-4 border border-slate-200/90 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-md hover:border-crimson/35 smooth-lift">
                      <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-crimson/10 dark:bg-rose-950/50 border border-crimson/25 dark:border-rose-400/30 text-crimson dark:text-rose-400 font-mono font-bold text-[11px] sm:text-[12px] group-hover:bg-crimson group-hover:text-white transition-colors mt-0.5">
                        {item.num}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif-jp text-[13.5px] sm:text-[14.5px] font-bold text-ink dark:text-white group-hover:text-crimson dark:group-hover:text-rose-400 transition-colors">
                          {tx(item.title)}
                        </h4>
                        <p className="mt-0.5 font-inter text-[12px] sm:text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                          {tx(item.desc)}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Action Buttons */}
              <Reveal delay={280}>
                <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <Link
                    href="/blogs"
                    className="btn-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-crimson to-crimson-deep px-4 py-2.5 sm:px-6 sm:py-3.5 font-inter text-[12.5px] sm:text-[13.5px] font-semibold text-white shadow-lg shadow-crimson/25 hover:-translate-y-0.5 hover:shadow-crimson/40 transition-all"
                  >
                    {tx({ EN: "View Office Gallery & Photos", JP: "オフィス施設写真を見る" })}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-[#09090b] px-4 py-2.5 sm:px-6 sm:py-3.5 font-inter text-[12.5px] sm:text-[13.5px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/30 transition-all shadow-sm"
                  >
                    {tx({ EN: "View Membership Plans", JP: "料金プランを見る" })}
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          5. WHY J-GATE — Comparison Table & Detailed Pillars
         ════════════════════════════════════════════════════════════ */}
      <WhyJGateSection id="why-jgate" hideHero />

      {/* ════════════════════════════════════════════════════════════
          6. SERVICES & SOLUTIONS — Services Grid & Roadmap
         ════════════════════════════════════════════════════════════ */}
      <ServicesSection id="services" hideHero />

      {/* ════════════════════════════════════════════════════════════
          7. LEADERSHIP & ADVISORY TEAM — Advisory & Operations Team
         ════════════════════════════════════════════════════════════ */}
      <TeamSection id="team" hideHero />

      {/* ════════════════════════════════════════════════════════════
          8. FACILITIES & OFFICE GALLERY — Photo Gallery Mosaic
         ════════════════════════════════════════════════════════════ */}
      <BlogsSection id="blogs" hideHero />

      {/* ════════════════════════════════════════════════════════════
          9. PRICING & MEMBERSHIP PLANS — Plan Cards & Guarantees
         ════════════════════════════════════════════════════════════ */}
      <PricingSection id="pricing" hideHero />

      {/* ════════════════════════════════════════════════════════════
          10. CONTACT & JAPAN DESK CONSOLE
         ════════════════════════════════════════════════════════════ */}
      <ContactSection id="contact" />

      {/* ════════════════════════════════════════════════════════════
          11. FREQUENTLY ASKED QUESTIONS
         ════════════════════════════════════════════════════════════ */}
      <FAQSection id="faq" />
    </>
  );
}
