"use client";

import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import {
  Check,
  X,
  ArrowRight,
  ShieldCheck,
  CircleDot,
  Triangle,
  CheckCircle2,
  Building2,
  Wifi,
  MessageCircle,
  FileStack,
  Users,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { QuoteMark, StarIcon as JStar } from "@/components/jgate/icons";

/* ============================================================
   Why J-Gate — Strategic Investment Advantage
   Sections (one domain per section — zero context mixing):
     1. PageHero
     2. Competitive Superiority Matrix — 4-col table (Slide 10)
     3. 7 Core Value Pillars — clean 4+3 grid (Slide 11)
     4. Corporate Testimonials — 3 clean cards
     5. Closing CTA
   ============================================================ */

/* ── Comparison Table — Slide 10 (4 columns × 9 rows) ── */
type CellType = "check" | "cross" | "good" | "warn" | "text";

type Row = {
  labelKey: string;
  jgate: string;
  consult: string;
  cowork: string;
  publicOrg: string;
  jgateType?: CellType;
  consultType?: CellType;
  coworkType?: CellType;
  publicType?: CellType;
};

const COMPARISON_ROWS: Row[] = [
  {
    labelKey: "why.row1.label",
    jgate: "why.row1.jgate",
    consult: "why.row1.consult",
    cowork: "why.row1.cowork",
    publicOrg: "why.row1.public",
  },
  {
    labelKey: "why.row2.label",
    jgate: "why.row2.jgate",
    consult: "why.row2.consult",
    cowork: "why.row2.cowork",
    publicOrg: "why.row2.public",
  },
  {
    labelKey: "why.row3.label",
    jgate: "why.row3.jgate",
    consult: "why.row3.consult",
    cowork: "why.row3.cowork",
    publicOrg: "why.row3.public",
    jgateType: "check",
    consultType: "cross",
    coworkType: "check",
    publicType: "cross",
  },
  {
    labelKey: "why.row4.label",
    jgate: "why.row4.jgate",
    consult: "why.row4.consult",
    cowork: "why.row4.cowork",
    publicOrg: "why.row4.public",
    jgateType: "check",
    consultType: "cross",
    coworkType: "cross",
    publicType: "cross",
  },
  {
    labelKey: "why.row5.label",
    jgate: "why.row5.jgate",
    consult: "why.row5.consult",
    cowork: "why.row5.cowork",
    publicOrg: "why.row5.public",
    jgateType: "check",
    consultType: "warn",
    coworkType: "cross",
    publicType: "warn",
  },
  {
    labelKey: "why.row6.label",
    jgate: "why.row6.jgate",
    consult: "why.row6.consult",
    cowork: "why.row6.cowork",
    publicOrg: "why.row6.public",
    jgateType: "check",
    consultType: "warn",
    coworkType: "cross",
    publicType: "warn",
  },
  {
    labelKey: "why.row7.label",
    jgate: "why.row7.jgate",
    consult: "why.row7.consult",
    cowork: "why.row7.cowork",
    publicOrg: "why.row7.public",
    jgateType: "check",
    consultType: "warn",
    coworkType: "cross",
    publicType: "cross",
  },
  {
    labelKey: "why.row8.label",
    jgate: "why.row8.jgate",
    consult: "why.row8.consult",
    cowork: "why.row8.cowork",
    publicOrg: "why.row8.public",
  },
  {
    labelKey: "why.row9.label",
    jgate: "why.row9.jgate",
    consult: "why.row9.consult",
    cowork: "why.row9.cowork",
    publicOrg: "why.row9.public",
    jgateType: "good",
    consultType: "warn",
    coworkType: "warn",
    publicType: "good",
  },
];

/* ── 7 Core Value Pillars — Slide 11 ── */
const SEVEN_PILLARS = [
  { num: "1", icon: Building2, titleKey: "why.p1.title", descKey: "why.p1.desc", accent: "crimson" },
  { num: "2", icon: Wifi, titleKey: "why.p2.title", descKey: "why.p2.desc", accent: "saffron" },
  { num: "3", icon: MessageCircle, titleKey: "why.p3.title", descKey: "why.p3.desc", accent: "crimson" },
  { num: "4", icon: FileStack, titleKey: "why.p4.title", descKey: "why.p4.desc", accent: "saffron" },
  { num: "5", icon: Users, titleKey: "why.p5.title", descKey: "why.p5.desc", accent: "crimson" },
  { num: "6", icon: GraduationCap, titleKey: "why.p6.title", descKey: "why.p6.desc", accent: "saffron" },
  { num: "7", icon: Briefcase, titleKey: "why.p7.title", descKey: "why.p7.desc", accent: "crimson" },
] as const;

/* ── Cell renderer — colored symbols for high scannability ──
   ✓ = green/success (check)
   ✗ = red/crimson (X)
   ◎ = saffron/gold (circle-dot)
   △ = slate/mist (triangle)
*/
function Cell({ type, text, highlight = false }: { type?: CellType; text: string; highlight?: boolean }) {
  // Plain text — no symbol
  if (!type) {
    return (
      <span
        className={`font-inter text-[12px] leading-snug sm:text-[13px] ${
          highlight ? "font-semibold text-ink" : "text-slate"
        }`}
      >
        {text}
      </span>
    );
  }

  let Icon = CheckCircle2;
  let color = "text-success";
  let bg = "bg-success/15";
  if (type === "check") {
    Icon = Check;
    color = highlight ? "text-crimson" : "text-success";
    bg = highlight ? "bg-crimson/15" : "bg-success/15";
  } else if (type === "cross") {
    Icon = X;
    color = "text-crimson";
    bg = "bg-crimson/15";
  } else if (type === "good") {
    Icon = CircleDot;
    color = highlight ? "text-crimson" : "text-saffron";
    bg = highlight ? "bg-crimson/15" : "bg-saffron/15";
  } else if (type === "warn") {
    Icon = Triangle;
    color = "text-slate";
    bg = "bg-slate/10";
  }

  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${bg} ${color}`}
        aria-hidden="true"
      >
        <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
      <span
        className={`font-inter text-[12px] leading-snug sm:text-[13px] ${
          highlight ? "font-semibold text-ink" : "text-slate"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

/* ── Corporate Testimonials (retained, 3 clean cards) ── */
const TESTIMONIALS = [
  {
    quote: {
      EN: "J-Gate delivered what three conventional recruiters could not — engineers who arrived fluent in our workflows and our unwritten expectations. Retention at the 12-month mark is the proof.",
      JP: "J-Gateは3つの従来型紹介業者が達成できなかったものを提供してくれました — 私たちのワークフローと暗黙の期待に流暢なエンジニアです。12ヶ月時点での定着率がその証拠です。",
    },
    name: { EN: "Hiroshi Yamamoto", JP: "山本 浩" },
    role: {
      EN: "Engineering Director, Fortune 500 Japanese Tech Firm",
      JP: "Fortune 500日本テック企業 エンジニアリングディレクター",
    },
    initials: "HY",
  },
  {
    quote: {
      EN: "The pre-to-post onboarding model is what sets J-Gate apart. Our new hire landed in Tokyo with housing sorted, visa stamped, and a cultural orientation already done. He contributed from week one.",
      JP: "プレ・トゥ・ポストのオンボーディングモデルこそがJ-Gateの際立つ点です。新入社員は住居手配済み、ビザ取得済み、文化オリエンテーション完了の状態で東京に到着し、最初の週から貢献しました。",
    },
    name: { EN: "Priya Nair", JP: "プリヤ・ナイール" },
    role: {
      EN: "Talent Acquisition Lead, Cross-Border Tech Consulting",
      JP: "越境テックコンサルティング タレントアクイジションリード",
    },
    initials: "PN",
  },
  {
    quote: {
      EN: "What surprised me was the technical rigour. J-Gate's screening matched our own bar — every candidate we interviewed was already at the level we'd expect after our internal loop.",
      JP: "驚いたのは技術的厳格さでした。J-Gateのスクリーニングは自社の基準に一致し、面接したすべての候補者が社内プロセス後と同等のレベルに達していました。",
    },
    name: { EN: "Kenji Watanabe", JP: "渡辺 健司" },
    role: {
      EN: "CTO, Tokyo-based AI Infrastructure Startup",
      JP: "東京のAIインフラスタートアップ CTO",
    },
    initials: "KW",
  },
] as const;

export default function WhyJGatePage() {
  const { t, tx } = useI18n();

  // Split 7 pillars into 4 + 3 for clean grid layout
  const pillarsTop = SEVEN_PILLARS.slice(0, 4);
  const pillarsBottom = SEVEN_PILLARS.slice(4);

  return (
    <>
      <PageHero
        eyebrowKey="why.eyebrow"
        titleNode={
          <>
            {tx({ EN: "The Strategic", JP: "戦略的投資としての" })}
            <br />
            <span className="text-gradient-saffron">
              {tx({ EN: "Investment Advantage", JP: "優位性" })}
            </span>
          </>
        }
        subtitleKey="why.subtitle"
      />

      {/* ════════════════════════════════════════════════════════════
          Section 1 — Competitive Superiority Matrix
          Clean, high-contrast, responsive 4-col comparison table.
          J-Gate column highlighted crimson + "Recommended" badge.
          Colored symbols: ✓ / ✗ / ◎ / △.
          Mobile: horizontal scroll with sticky first column.
          No other content in this section.
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{t("why.compare.eyebrow")}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.625rem,3.6vw,2.25rem)" }}
              >
                {t("why.compare.title")}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {t("why.compare.subtitle")}
              </p>
            </div>
          </Reveal>

          {/* Legend — colored symbol key (high scannability) */}
          <Reveal delay={80}>
            <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 font-inter text-[11px] text-slate">
              <span className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success/15 text-success">
                  <Check className="h-3 w-3" strokeWidth={2.5} />
                </span>
                {tx({ EN: "Fully Available", JP: "完全対応" })}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-crimson/15 text-crimson">
                  <X className="h-3 w-3" strokeWidth={2.5} />
                </span>
                {tx({ EN: "Not Available", JP: "対応なし" })}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-saffron/15 text-saffron">
                  <CircleDot className="h-3 w-3" strokeWidth={2.5} />
                </span>
                {tx({ EN: "Optimal Value", JP: "最適評価" })}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate/10 text-slate">
                  <Triangle className="h-3 w-3" strokeWidth={2.5} />
                </span>
                {tx({ EN: "Partial / Limited", JP: "一部・限定" })}
              </span>
            </div>
          </Reveal>

          {/* Desktop table (md and up) */}
          <Reveal delay={120}>
            <div className="mt-6 hidden overflow-hidden rounded-lg border border-crimson/12 bg-pearl shadow-card md:block">
              {/* Header row */}
              <div className="grid grid-cols-[1.4fr_1.1fr_1.1fr_1.1fr_1.1fr] border-b border-crimson/10 bg-ivory-warm">
                <div className="px-5 py-4">
                  <span
                    className="font-inter text-[11px] font-semibold uppercase text-mist"
                    style={{ letterSpacing: "0.12em" }}
                  >
                    {t("why.compare.col.cap")}
                  </span>
                </div>
                {/* J-Gate column header — highlighted crimson */}
                <div className="relative bg-gradient-to-b from-crimson/10 to-transparent px-5 py-4 text-center">
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-crimson to-crimson-deep" />
                  <div className="font-serif-jp text-[15px] font-bold text-crimson">
                    {t("why.compare.col.jgate")}
                  </div>
                  <div
                    className="mt-0.5 font-inter text-[10px] font-bold uppercase text-crimson/70"
                    style={{ letterSpacing: "0.12em" }}
                  >
                    {tx({ EN: "Recommended", JP: "おすすめ" })}
                  </div>
                </div>
                <div className="px-5 py-4 text-center">
                  <div className="font-serif-jp text-[14px] font-bold text-slate">
                    {t("why.compare.col.consult")}
                  </div>
                </div>
                <div className="px-5 py-4 text-center">
                  <div className="font-serif-jp text-[14px] font-bold text-slate">
                    {t("why.compare.col.cowork")}
                  </div>
                </div>
                <div className="px-5 py-4 text-center">
                  <div className="font-serif-jp text-[14px] font-bold text-slate">
                    {t("why.compare.col.public")}
                  </div>
                </div>
              </div>

              {/* Body rows */}
              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[1.4fr_1.1fr_1.1fr_1.1fr_1.1fr] items-center border-b border-crimson/8 ${
                    i === COMPARISON_ROWS.length - 1 ? "border-b-0" : ""
                  } ${i % 2 === 0 ? "bg-pearl" : "bg-ivory/40"}`}
                >
                  {/* Label (left, sticky) */}
                  <div className="px-5 py-4">
                    <span className="font-inter text-[13px] font-semibold text-ink">
                      {t(row.labelKey)}
                    </span>
                  </div>
                  {/* J-Gate — highlighted cell */}
                  <div className="bg-crimson/[0.04] px-5 py-4">
                    <Cell type={row.jgateType} text={t(row.jgate)} highlight />
                  </div>
                  <div className="px-5 py-4">
                    <Cell type={row.consultType} text={t(row.consult)} />
                  </div>
                  <div className="px-5 py-4">
                    <Cell type={row.coworkType} text={t(row.cowork)} />
                  </div>
                  <div className="px-5 py-4">
                    <Cell type={row.publicType} text={t(row.publicOrg)} />
                  </div>
                </div>
              ))}

              {/* Footer note */}
              <div className="border-t border-crimson/10 bg-crimson/5 px-6 py-4 text-center">
                <p className="font-inter text-[12px] text-slate sm:text-[13px]">
                  {t("why.compare.note")}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Mobile: horizontal-scroll table with sticky first column */}
          <Reveal delay={120}>
            <div className="mt-6 md:hidden">
              <div
                className="overflow-x-auto rounded-lg border border-crimson/12 bg-pearl shadow-card"
                style={{ scrollbarWidth: "thin" }}
              >
                <div className="min-w-[640px]">
                  {/* Header */}
                  <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr_1fr] border-b border-crimson/10 bg-ivory-warm">
                    <div className="sticky left-0 z-10 bg-ivory-warm px-4 py-3">
                      <span
                        className="font-inter text-[10px] font-semibold uppercase text-mist"
                        style={{ letterSpacing: "0.1em" }}
                      >
                        {t("why.compare.col.cap")}
                      </span>
                    </div>
                    <div className="relative bg-gradient-to-b from-crimson/10 to-transparent px-3 py-3 text-center">
                      <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-crimson to-crimson-deep" />
                      <div className="font-serif-jp text-[12px] font-bold text-crimson">
                        {t("why.compare.col.jgate")}
                      </div>
                    </div>
                    <div className="px-3 py-3 text-center">
                      <div className="font-serif-jp text-[11px] font-bold text-slate">
                        {t("why.compare.col.consult")}
                      </div>
                    </div>
                    <div className="px-3 py-3 text-center">
                      <div className="font-serif-jp text-[11px] font-bold text-slate">
                        {t("why.compare.col.cowork")}
                      </div>
                    </div>
                    <div className="px-3 py-3 text-center">
                      <div className="font-serif-jp text-[11px] font-bold text-slate">
                        {t("why.compare.col.public")}
                      </div>
                    </div>
                  </div>
                  {/* Body */}
                  {COMPARISON_ROWS.map((row, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-[1.3fr_1fr_1fr_1fr_1fr] items-center border-b border-crimson/8 ${
                        i === COMPARISON_ROWS.length - 1 ? "border-b-0" : ""
                      } ${i % 2 === 0 ? "bg-pearl" : "bg-ivory/40"}`}
                    >
                      <div className="sticky left-0 z-10 bg-inherit px-4 py-3">
                        <span className="font-inter text-[12px] font-semibold text-ink">
                          {t(row.labelKey)}
                        </span>
                      </div>
                      <div className="bg-crimson/[0.05] px-3 py-3">
                        <Cell type={row.jgateType} text={t(row.jgate)} highlight />
                      </div>
                      <div className="px-3 py-3">
                        <Cell type={row.consultType} text={t(row.consult)} />
                      </div>
                      <div className="px-3 py-3">
                        <Cell type={row.coworkType} text={t(row.cowork)} />
                      </div>
                      <div className="px-3 py-3">
                        <Cell type={row.publicType} text={t(row.publicOrg)} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Scroll hint */}
              <p className="mt-2 text-center font-inter text-[11px] text-mist">
                {tx({ EN: "← Swipe horizontally to compare →", JP: "← 横にスワイプして比較 →" })}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Section 2 — 7 Core Value Pillars
          Clean 4+3 grid layout. Each card: number badge, title, 1-line desc.
          No mixing with testimonials or other content.
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad relative overflow-hidden bg-navy">
        <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 0%, rgba(188,26,44,0.10), transparent 55%), radial-gradient(ellipse at 80% 100%, rgba(232,160,26,0.08), transparent 55%)",
          }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>{t("why.pillars.eyebrow")}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
                style={{ fontSize: "clamp(1.625rem,3.6vw,2.25rem)" }}
              >
                {t("why.pillars.title")}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-mist"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {t("why.pillars.subtitle")}
              </p>
            </div>
          </Reveal>

          {/* Top row — 4 cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillarsTop.map((p, i) => (
              <Reveal key={p.num} delay={i * 80}>
                <PillarCard pillar={p} />
              </Reveal>
            ))}
          </div>

          {/* Bottom row — 3 cards centered (max-w-[75%] mx-auto on lg) */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:max-w-[75%] lg:mx-auto lg:grid-cols-3">
            {pillarsBottom.map((p, i) => (
              <Reveal key={p.num} delay={i * 80 + 320}>
                <PillarCard pillar={p} />
              </Reveal>
            ))}
          </div>

          {/* "Pillars in numbers" summary strip */}
          <Reveal delay={200}>
            <div className="mx-auto mt-10 max-w-3xl">
              <div className="glass-dark rounded-lg border border-saffron/25 p-6 text-center">
                <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 font-inter text-mist">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif-jp text-2xl font-bold text-saffron">2-4</span>
                    <span className="text-[12px]">
                      {tx({ EN: "Persons / company", JP: "名/社" })}
                    </span>
                  </div>
                  <span className="h-4 w-px bg-white/15" />
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif-jp text-2xl font-bold text-saffron">7</span>
                    <span className="text-[12px]">{tx({ EN: "Pillars total", JP: "柱の合計" })}</span>
                  </div>
                  <span className="h-4 w-px bg-white/15" />
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif-jp text-2xl font-bold text-saffron">100%</span>
                    <span className="text-[12px]">
                      {tx({ EN: "JP-language support", JP: "日本語対応" })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Section 3 — Corporate Testimonials
          3 clean cards on midnight. Domain: social proof only.
          No mixing with other content.
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad relative overflow-hidden bg-midnight">
        <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(232,160,26,0.08), transparent 55%)",
          }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>{tx({ EN: "Corporate Testimonials", JP: "企業推薦の声" })}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
                style={{ fontSize: "clamp(1.75rem,3.8vw,2.25rem)" }}
              >
                {tx({ EN: "What Our Corporate Partners Say", JP: "企業パートナーの声" })}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-mist"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {tx({
                  EN: "Voices from the enterprises who trust J-Gate to deliver their most critical placements.",
                  JP: "最も重要な紹介をJ-Gateに委ねる企業の声。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((tm, i) => (
              <Reveal key={i} delay={i * 120}>
                <article className="glass-dark lift-card relative flex h-full flex-col rounded-lg p-8">
                  <QuoteMark className="absolute right-6 top-6 h-10 w-10 text-crimson/40" />
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <JStar key={si} className="h-4 w-4 text-saffron" />
                    ))}
                  </div>
                  <p className="mt-5 flex-1 font-inter text-[14px] leading-relaxed text-white/90">
                    “{tx(tm.quote)}”
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-crimson/30 to-saffron/20 font-serif-jp text-[14px] font-bold text-white">
                      {tm.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="font-serif-jp text-[14px] font-bold text-white">
                        {tx(tm.name)}
                      </div>
                      <div className="font-inter text-[11px] text-mist">{tx(tm.role)}</div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Closing CTA
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-saffron/15 text-saffron">
                <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h2
                className="mt-6 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.625rem,3.5vw,2rem)" }}
              >
                {tx({
                  EN: "Experience the J-Gate Membership Difference",
                  JP: "J-Gateメンバーシップの違いを体験する",
                })}
              </h2>
              <p
                className="mx-auto mt-4 font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {tx({
                  EN: "Seven pillars of value — workspace, infrastructure, Japan Desk, end-to-end setup, networking, study sessions, and hiring support. All in one membership.",
                  JP: "7つの価値の柱 — ワークスペース、インフラ、ジャパンデスク、設立支援、ネットワーキング、勉強会、採用支援。すべて一つのメンバーシップで。",
                })}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/auth/brochure"
                  className="btn-shine flex items-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-7 py-3.5 font-inter text-[14px] font-semibold text-white shadow-[0_0_20px_rgba(188,26,44,0.35)] transition-all hover:-translate-y-0.5"
                >
                  {tx({ EN: "Download Brochure", JP: "パンフレットをダウンロード" })}
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

/* ── Pillar Card — clean uniform design with number badge ── */
function PillarCard({
  pillar,
}: {
  pillar: (typeof SEVEN_PILLARS)[number];
}) {
  const { t } = useI18n();
  const isSaffron = pillar.accent === "saffron";
  return (
    <article
      className={`glass-dark lift-card group relative flex h-full flex-col overflow-hidden rounded-lg border p-6 ${
        isSaffron ? "border-saffron/25" : "border-crimson/25"
      }`}
    >
      {/* Icon badge with small number chip overlay */}
      <div className="relative w-fit">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-card transition-transform duration-300 group-hover:scale-110 ${
            isSaffron ? "from-saffron to-[#c9881a]" : "from-crimson to-crimson-deep"
          }`}
        >
          <pillar.icon className="h-7 w-7" strokeWidth={1.5} />
        </div>
        {/* Number chip overlay */}
        <span
          className={`absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full font-serif-jp text-[10px] font-bold ${
            isSaffron ? "bg-saffron text-midnight" : "bg-crimson text-white"
          }`}
        >
          {pillar.num}
        </span>
      </div>

      {/* Title */}
      <h3
        className="mt-5 font-serif-jp font-bold leading-tight text-white"
        style={{ fontSize: "clamp(1.0625rem,1.8vw,1.1875rem)" }}
      >
        {t(pillar.titleKey)}
      </h3>

      {/* Description (1-line) */}
      <p className="mt-2 font-inter text-[13px] leading-relaxed text-mist">
        {t(pillar.descKey)}
      </p>
    </article>
  );
}
