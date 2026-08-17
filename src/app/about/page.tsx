"use client";

import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import { Photo } from "@/components/jgate/photo";
import {
  Target,
  Eye,
  ShieldCheck,
  Globe2,
  Cpu,
  Handshake,
  Rocket,
  GraduationCap,
  HandHeart,
  ArrowRight,
  CheckCircle2,
  Building2,
  CalendarClock,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

/* ============================================================
   About J-Gate — v4.0 Compact Redesign
   Architecture:
     1. PageHero — "About J-Gate" / "From India Entry Spark to Talent Development"
     2. 3 Pillars detailed (large 01/02/03 + JP+EN heading + full paragraph + icon)
     3. Strategic Location — Hyderabad (centered, 4 photo slots + content)
     4. India Map SVG (HYD crimson pulsing + other cities)
     5. Mission & Vision — 2 side-by-side cards
     6. Core Values — 4-card grid
     7. Closing CTA
   ============================================================ */

/* ── India Map SVG — simplified outline with city dots ── */
function IndiaMap() {
  // Cities positioned in viewBox 0 0 360 420
  const cities = [
    { name: "New Delhi", x: 110, y: 90, isJGate: false },
    { name: "Ahmedabad", x: 80, y: 175, isJGate: false },
    { name: "Mumbai", x: 95, y: 240, isJGate: false },
    { name: "Hyderabad", x: 165, y: 250, isJGate: true, color: "#bc1a2c" },
    { name: "Bengaluru", x: 130, y: 320, isJGate: false },
    { name: "Chennai", x: 195, y: 320, isJGate: false },
  ];
  return (
    <svg viewBox="0 0 360 420" className="h-full w-full" role="img" aria-label="Map of India showing J-Gate location in Hyderabad">
      {/* Simplified India outline */}
      <path
        d="M 130 30 L 170 25 L 200 50 L 230 55 L 250 80 L 245 110 L 260 130 L 250 160 L 270 175 L 280 200 L 270 230 L 290 270 L 285 310 L 260 340 L 235 360 L 210 380 L 180 385 L 160 370 L 145 350 L 130 320 L 115 290 L 100 260 L 90 220 L 80 190 L 75 160 L 85 130 L 95 100 L 110 70 Z"
        fill="rgba(188,26,44,0.04)"
        stroke="rgba(188,26,44,0.30)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* City dots */}
      {cities.map((c) => (
        <g key={c.name}>
          {c.isJGate ? (
            <>
              <circle cx={c.x} cy={c.y} r="10" fill={c.color} opacity="0.18">
                <animate
                  attributeName="r"
                  values="6;14;6"
                  dur="2.4s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.35;0;0.35"
                  dur="2.4s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx={c.x} cy={c.y} r="5" fill={c.color} />
            </>
          ) : (
            <circle cx={c.x} cy={c.y} r="2.8" fill="#8892a4" opacity="0.7" />
          )}
          <text
            x={c.x + 8}
            y={c.y + 4}
            textAnchor="start"
            fontFamily="Inter, sans-serif"
            fontSize={c.isJGate ? "11" : "9"}
            fontWeight={c.isJGate ? 700 : 500}
            fill={c.isJGate ? c.color : "#8892a4"}
          >
            {c.name}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ── Mission & Vision content ── */
const MISSION = {
  title: { EN: "Our Mission", JP: "ミッション" },
  body: {
    EN: "To provide Japanese companies entering India with a dedicated working hub — a professional workspace with resident Japan Desk support, complete infrastructure, and end-to-end business assistance from first curiosity to corporate entity establishment.",
    JP: "インドに進出する日本企業に専用のワーキングハブを提供すること — 常駐ジャパンデスク、完全なインフラ、そして初期相談から法人設立までのエンドツーエンドのビジネス支援を備えたプロフェッショナルなワークスペース。",
  },
  tag: { EN: "What we do today", JP: "今日私たちが行うこと" },
} as const;

const VISION = {
  title: { EN: "Our Vision", JP: "ビジョン" },
  body: {
    EN: "To become the definitive workspace for Japanese enterprises in Hyderabad — the first name called when a company needs a professional base, Japan Desk support, or a complete India operations hub.",
    JP: "ハイデラバードの日本企業にとって決定的なワークスペースになること — 企業がプロフェッショナルな拠点、ジャパンデスクサポート、または完全なインド運営ハブを必要とする時に最初に呼ばれる名前に。",
  },
  tag: { EN: "What we build toward", JP: "私たちが構築する未来" },
} as const;

/* ── Core Values — 4-card grid ── */
const VALUES = [
  {
    icon: ShieldCheck,
    title: { EN: "Integrity", JP: "誠実さ" },
    desc: {
      EN: "Transparent, honest, long-term relationships — never transactional.",
      JP: "透明で誠実な長期的関係 — 決して取引的ではない。",
    },
  },
  {
    icon: Globe2,
    title: { EN: "Cultural Fluency", JP: "文化的流暢さ" },
    desc: {
      EN: "Deep mastery of both Japanese and Indian business cultures.",
      JP: "日本とインドの両ビジネス文化の深い理解。",
    },
  },
  {
    icon: Cpu,
    title: { EN: "Technical Excellence", JP: "技術的卓越" },
    desc: {
      EN: "Rigorous screening — only the top percentile of technical talent.",
      JP: "厳格なスクリーニング — トップパーセンタイルの技術人材のみ。",
    },
  },
  {
    icon: Handshake,
    title: { EN: "Long-Term Partnership", JP: "長期パートナーシップ" },
    desc: {
      EN: "We succeed only when our placements and partners succeed.",
      JP: "紹介とパートナーが成功して初めて私たちも成功する。",
    },
  },
] as const;

/* ── 3 Pillars — detailed cards ── */
const PILLARS = [
  {
    num: "01",
    icon: Rocket,
    tagKey: "about.pillar1.tag",
    titleKey: "about.pillar1.title",
    jpKey: "about.pillar1.jp",
    descKey: "about.pillar1.desc",
  },
  {
    num: "02",
    icon: GraduationCap,
    tagKey: "about.pillar2.tag",
    titleKey: "about.pillar2.title",
    jpKey: "about.pillar2.jp",
    descKey: "about.pillar2.desc",
  },
  {
    num: "03",
    icon: HandHeart,
    tagKey: "about.pillar3.tag",
    titleKey: "about.pillar3.title",
    jpKey: "about.pillar3.jp",
    descKey: "about.pillar3.desc",
  },
] as const;

/* ── Hyderabad 4 photo slots ── */
const HYD_PHOTOS = [
  { id: "photo-about-hyd-1", label: "Workspace", fallback: "grad-office-main" },
  { id: "photo-about-hyd-2", label: "Meeting Room", fallback: "grad-office-meeting" },
  { id: "photo-about-hyd-3", label: "Reception", fallback: "grad-office-reception" },
  { id: "photo-about-hyd-4", label: "Cafeteria", fallback: "grad-canteen-japanese" },
];

export default function AboutPage() {
  const { t, tx } = useI18n();

  return (
    <>
      <PageHero
        eyebrowKey="about.eyebrow"
        titleNode={
          <>
            {tx({ EN: "From India Entry Spark", JP: "インド展開の" })}
            <br />
            <span className="text-gradient-saffron">
              {tx({ EN: "to Talent Development", JP: "きっかけ作りから育成まで" })}
            </span>
          </>
        }
        subtitleKey="about.title"
      />

      {/* ════════════════════════════════════════════════════════════
          Section 1 — 3 Pillars Detailed
          Each pillar: large number (01/02/03) + JP+EN heading + full paragraph + icon
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{t("about.purpose.eyebrow")}</Eyebrow>
              <h2
                className="mt-2 font-serif-jp font-bold leading-[1.2] text-ink"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {t("about.purpose.title")}
              </h2>
              <p
                className="mx-auto mt-2 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
              >
                {t("about.purpose.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.num} delay={i * 100}>
                <article className="lift-card group relative h-full overflow-hidden rounded-lg border border-crimson/12 bg-pearl p-7 shadow-card">
                  {/* Faded large numeral */}
                  <span
                    className="pointer-events-none absolute -top-6 right-2 font-serif-jp font-black leading-none text-crimson"
                    style={{ fontSize: "120px", opacity: 0.08 }}
                    aria-hidden
                  >
                    {p.num}
                  </span>
                  <div className="relative">
                    {/* Icon badge */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-crimson to-crimson-deep text-white shadow-card transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                      <p.icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    {/* Tag + JP accent label */}
                    <div className="mt-5 flex items-center gap-2">
                      <span
                        className="font-inter text-[11px] font-bold uppercase text-crimson"
                        style={{ letterSpacing: "0.15em" }}
                      >
                        {t(p.tagKey)}
                      </span>
                      <span className="text-mist">·</span>
                      <span className="font-serif-jp text-[13px] font-medium text-slate">
                        {t(p.jpKey)}
                      </span>
                    </div>
                    {/* Title */}
                    <h3
                      className="mt-2 font-serif-jp font-bold leading-tight text-ink"
                      style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
                    >
                      {t(p.titleKey)}
                    </h3>
                    {/* Full paragraph */}
                    <p className="mt-3 font-inter text-[14px] leading-relaxed text-slate">
                      {t(p.descKey)}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Section 2 — Strategic Location (Hyderabad only, centered)
          2-col: photo grid on left, content on right (within max-w-4xl)
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
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

          {/* Hyderabad — centered max-w-4xl, 2-col: photo grid on left, content on right */}
          <Reveal delay={120}>
            <article className="lift-card mx-auto mt-8 max-w-4xl overflow-hidden rounded-lg border border-saffron/20 bg-pearl shadow-card">
              <span className="block h-1 bg-gradient-to-r from-saffron to-[#c9881a]" />
              <div className="grid lg:grid-cols-2">
                {/* Photo grid: 4 slots */}
                <div className="grid grid-cols-2 gap-1 p-1">
                  {HYD_PHOTOS.map((ph) => (
                    <Photo
                      key={ph.id}
                      id={ph.id}
                      alt={`${ph.label} — J-Gate Hyderabad`}
                      fallback={ph.fallback}
                      initials="HYD"
                      rounded="rounded-sm"
                      className="aspect-[4/3] w-full"
                    />
                  ))}
                </div>
                {/* Content */}
                <div className="p-5 sm:p-6 lg:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-saffron/15 text-saffron">
                        <Building2 className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                      <div>
                        <span
                          className="block font-inter text-[11px] font-bold uppercase text-saffron"
                          style={{ letterSpacing: "0.15em" }}
                        >
                          {t("about.hyderabad.tag")}
                        </span>
                        <h3
                          className="mt-0.5 font-serif-jp font-bold text-ink"
                          style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
                        >
                          {t("about.hyderabad.title")}
                        </h3>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-success/15 px-2.5 py-1 font-inter text-[11px] font-bold uppercase text-success">
                      <CalendarClock className="h-3 w-3" />
                      {t("about.hyderabad.status")}
                    </span>
                  </div>
                  <p className="mt-4 font-serif-jp text-[13px] font-medium italic text-saffron/85">
                    {t("about.hyderabad.nick")}
                  </p>
                  <p className="mt-2 font-inter text-[13px] leading-relaxed text-slate">
                    {t("about.hyderabad.desc")}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-crimson/10 pt-4">
                    {[t("about.hyderabad.f1"), t("about.hyderabad.f2"), t("about.hyderabad.f3")].map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-saffron" strokeWidth={2} />
                        <span className="font-inter text-[13px] text-ink">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Section 3 — India Map SVG
          Hyderabad (crimson pulsing) + other cities
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
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>{tx({ EN: "India Footprint", JP: "インド拠点マップ" })}</Eyebrow>
              <h2
                className="mt-2 font-serif-jp font-bold leading-[1.18] text-white"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({ EN: "One City. One Bridge.", JP: "一つの都市、一つの架け橋。" })}
              </h2>
              <p
                className="mx-auto mt-2 max-w-2xl font-inter leading-relaxed text-mist"
                style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
              >
                {tx({
                  EN: "Hyderabad is our main base and the operational heart of J-Gate — where every Japan-India business touchpoint in the corridor comes together.",
                  JP: "ハイデラバードはJ-Gateの主拠点であり運営の中心 — 回廊のすべての日本ビジネス接点が集まる場所。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-5 lg:items-center">
            {/* Map */}
            <Reveal variant="left" delay={120} className="lg:col-span-3">
              <div className="mx-auto max-w-md rounded-lg border border-white/10 bg-white/[0.02] p-6">
                <IndiaMap />
              </div>
            </Reveal>
            {/* Legend + Hyderabad summary */}
            <Reveal variant="right" delay={200} className="lg:col-span-2">
              <div className="glass-dark rounded-lg border border-white/10 p-5">
                <h3
                  className="font-serif-jp font-bold text-white"
                  style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
                >
                  {tx({ EN: "Our Base", JP: "私たちの拠点" })}
                </h3>
                <p className="mt-2 font-inter text-[13px] leading-relaxed text-mist">
                  {tx({
                    EN: "Anchored in Hyderabad — India's rising tech capital and home to one of the country's largest Japanese business communities.",
                    JP: "ハイデラバードに根ざす — イドの台頭するテック首都であり、国内最大級の日本ビジネスコミュニティの拠点。",
                  })}
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-crimson shadow-[0_0_12px_rgba(188,26,44,0.6)]" />
                    <span className="font-inter text-[13px] text-white">
                      <strong className="font-bold">Hyderabad</strong>
                      <span className="ml-2 text-mist">{tx({ EN: "Main Base · LIVE", JP: "主拠点・稼働中" })}</span>
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-mist/50" />
                    <span className="font-inter text-[13px] text-mist">
                      {tx({ EN: "Other major cities", JP: "その他主要都市" })}
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Section 4 — Mission & Vision — 2 side-by-side cards
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Mission & Vision", JP: "ミッション＆ビジョン" })}</Eyebrow>
              <h2
                className="mt-2 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({ EN: "What We Exist To Do", JP: "私たちの存在意義" })}
              </h2>
              <p
                className="mx-auto mt-2 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
              >
                {tx({
                  EN: "Two statements — one for what we do today, one for what we are building toward.",
                  JP: "二つの声明 — 今日私たちが行うことと、私たちが構築している未来。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Mission — crimson accent */}
            <Reveal delay={100}>
              <article className="lift-card relative h-full overflow-hidden rounded-lg border border-crimson/15 bg-pearl p-8 shadow-card">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-crimson to-crimson-deep" />
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-crimson/10 text-crimson">
                    <Target className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="font-serif-jp text-xl font-bold text-ink">
                    {tx(MISSION.title)}
                  </h3>
                </div>
                <p className="mt-5 font-inter text-[15px] leading-relaxed text-slate">
                  {tx(MISSION.body)}
                </p>
                <div className="mt-6 flex items-center gap-2 border-t border-crimson/10 pt-5">
                  <span
                    className="font-inter text-[11px] font-semibold uppercase text-crimson"
                    style={{ letterSpacing: "0.15em" }}
                  >
                    {tx(MISSION.tag)}
                  </span>
                </div>
              </article>
            </Reveal>

            {/* Vision — saffron accent */}
            <Reveal delay={200}>
              <article className="lift-card relative h-full overflow-hidden rounded-lg border border-saffron/20 bg-pearl p-8 shadow-card">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saffron to-[#c9881a]" />
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-saffron/15 text-saffron">
                    <Eye className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="font-serif-jp text-xl font-bold text-ink">
                    {tx(VISION.title)}
                  </h3>
                </div>
                <p className="mt-5 font-inter text-[15px] leading-relaxed text-slate">
                  {tx(VISION.body)}
                </p>
                <div className="mt-6 flex items-center gap-2 border-t border-saffron/15 pt-5">
                  <span
                    className="font-inter text-[11px] font-semibold uppercase text-saffron"
                    style={{ letterSpacing: "0.15em" }}
                  >
                    {tx(VISION.tag)}
                  </span>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Section 5 — Core Values — 4-card grid
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Core Values", JP: "コアバリュー" })}</Eyebrow>
              <h2
                className="mt-2 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({ EN: "The Principles Behind Every Placement", JP: "すべての紹介の背景にある原則" })}
              </h2>
              <p
                className="mx-auto mt-2 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
              >
                {tx({
                  EN: "Four principles guide every partnership, every consultation, every collaboration — without exception.",
                  JP: "四つの原則が例外なく、すべての採用、研修、パートナーシップを導きます。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={i} delay={i * 100}>
                <article className="lift-card group relative h-full overflow-hidden rounded-lg border border-crimson/8 bg-pearl p-7 shadow-card">
                  <span
                    className={`absolute inset-y-0 left-0 w-1 ${
                      i % 2 === 0
                        ? "bg-gradient-to-b from-crimson to-crimson-deep"
                        : "bg-gradient-to-b from-saffron to-[#c9881a]"
                    }`}
                  />
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br ${
                      i % 2 === 0 ? "from-crimson/10 to-saffron/5" : "from-saffron/10 to-crimson/5"
                    } text-crimson transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                  >
                    <v.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-serif-jp text-lg font-bold text-ink">
                    {tx(v.title)}
                  </h3>
                  <p className="mt-2.5 font-inter text-[13px] leading-relaxed text-slate">
                    {tx(v.desc)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Closing CTA
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-crimson/10 text-crimson">
                <Sparkles className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({
                  EN: "See How the Bridge Translates Into Outcomes",
                  JP: "架け橋がどう成果に変換されるかを見る",
                })}
              </h2>
              <p
                className="mx-auto mt-3 font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
              >
                {tx({
                  EN: "Our values are visible in every differentiator, every service, and every placement we deliver.",
                  JP: "私たちの価値観は、すべての差別化要素、サービス、そして紹介に現れています。",
                })}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/why-jgate"
                  className="btn-shine flex items-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-7 py-3.5 font-inter text-[14px] font-semibold text-white shadow-[0_0_20px_rgba(188,26,44,0.35)] transition-all hover:-translate-y-0.5"
                >
                  {tx({ EN: "Why J-Gate", JP: "J-Gateの強み" })}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="rounded-md border border-crimson/30 px-7 py-3.5 font-inter text-[14px] font-semibold text-crimson transition-all hover:-translate-y-0.5 hover:bg-crimson/5"
                >
                  {tx({ EN: "Explore Services", JP: "サービスを見る" })}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
