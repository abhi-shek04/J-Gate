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
   Why J-Gate — Competitive advantage + membership value
   Sections: PageHero → Comparison Table (Slide 10) → 7 Pillars (Slide 11) → Testimonials → CTA
   ============================================================ */

type Bilingual = { EN: string; JP: string };

/* ── Comparison Table — Slide 10 (4 columns × 9 rows) ── */

type Row = {
  labelKey: string;
  jgate: string;
  consult: string;
  cowork: string;
  publicOrg: string;
  /** How to render each cell: check / cross / circle-good / triangle-warn / text */
  jgateType?: CellType;
  consultType?: CellType;
  coworkType?: CellType;
  publicType?: CellType;
};

type CellType = "check" | "cross" | "good" | "warn" | "text";

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
    consultType: "check",
    coworkType: "cross",
    publicType: "check",
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
  {
    num: "1",
    icon: Building2,
    titleKey: "why.p1.title",
    descKey: "why.p1.desc",
    accent: "crimson",
  },
  {
    num: "2",
    icon: Wifi,
    titleKey: "why.p2.title",
    descKey: "why.p2.desc",
    accent: "saffron",
  },
  {
    num: "3",
    icon: MessageCircle,
    titleKey: "why.p3.title",
    descKey: "why.p3.desc",
    accent: "crimson",
  },
  {
    num: "4",
    icon: FileStack,
    titleKey: "why.p4.title",
    descKey: "why.p4.desc",
    accent: "saffron",
  },
  {
    num: "5",
    icon: Users,
    titleKey: "why.p5.title",
    descKey: "why.p5.desc",
    accent: "crimson",
  },
  {
    num: "6",
    icon: GraduationCap,
    titleKey: "why.p6.title",
    descKey: "why.p6.desc",
    accent: "saffron",
  },
  {
    num: "7",
    icon: Briefcase,
    titleKey: "why.p7.title",
    descKey: "why.p7.desc",
    accent: "crimson",
  },
] as const;

/* ── Cell renderer for the comparison table ── */
function Cell({
  type,
  text,
  highlight = false,
}: {
  type?: CellType;
  text: string;
  highlight?: boolean;
}) {
  // If type is set, render icon + text; otherwise render text only
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
    color = "text-slate";
    bg = "bg-slate/10";
  } else if (type === "good") {
    Icon = CircleDot;
    color = highlight ? "text-crimson" : "text-success";
    bg = highlight ? "bg-crimson/15" : "bg-success/15";
  } else if (type === "warn") {
    Icon = Triangle;
    color = "text-saffron";
    bg = "bg-saffron/15";
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

/* ── Corporate Testimonials (retained) ── */
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

      {/* ───────────────────────────────────────────────────────────
          Competitive Comparison Table — Slide 10
          Desktop: 4-col grid table. Mobile: horizontal-scroll with sticky first col.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{t("why.compare.eyebrow")}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.625rem,3.6vw,2.375rem)" }}
              >
                {t("why.compare.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {t("why.compare.subtitle")}
              </p>
            </div>
          </Reveal>

          {/* Desktop table (md and up) */}
          <Reveal delay={120}>
            <div className="mt-12 hidden overflow-hidden rounded-xl border border-crimson/12 bg-pearl shadow-card md:block">
              {/* Header row */}
              <div className="grid grid-cols-[1.4fr_1.1fr_1.1fr_1.1fr_1.1fr] border-b border-crimson/10 bg-ivory-warm">
                <div className="px-5 py-4">
                  <span className="font-inter text-[11px] font-semibold uppercase text-mist" style={{ letterSpacing: "0.12em" }}>
                    {t("why.compare.col.cap")}
                  </span>
                </div>
                {/* J-Gate column header — highlighted */}
                <div className="relative bg-gradient-to-b from-crimson/10 to-transparent px-5 py-4 text-center">
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-crimson to-crimson-deep" />
                  <div className="font-serif-jp text-[15px] font-bold text-crimson">{t("why.compare.col.jgate")}</div>
                  <div className="mt-0.5 font-inter text-[10px] uppercase text-crimson/70" style={{ letterSpacing: "0.12em" }}>
                    {tx({ EN: "Recommended", JP: "おすすめ" })}
                  </div>
                </div>
                <div className="px-5 py-4 text-center">
                  <div className="font-serif-jp text-[14px] font-bold text-slate">{t("why.compare.col.consult")}</div>
                </div>
                <div className="px-5 py-4 text-center">
                  <div className="font-serif-jp text-[14px] font-bold text-slate">{t("why.compare.col.cowork")}</div>
                </div>
                <div className="px-5 py-4 text-center">
                  <div className="font-serif-jp text-[14px] font-bold text-slate">{t("why.compare.col.public")}</div>
                </div>
              </div>

              {/* Body rows */}
              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[1.4fr_1.1fr_1.1fr_1.1fr_1.1fr] items-center border-b border-crimson/8 ${
                    i === COMPARISON_ROWS.length - 1 ? "border-b-0" : ""
                  } ${i % 2 === 0 ? "bg-pearl" : "bg-ivory/30"}`}
                >
                  {/* Label */}
                  <div className="px-5 py-4">
                    <span className="font-inter text-[13px] font-semibold text-ink">{t(row.labelKey)}</span>
                  </div>
                  {/* J-Gate — highlighted */}
                  <div className="bg-crimson/[0.04] px-5 py-4">
                    <Cell type={row.jgateType} text={t(row.jgate)} highlight />
                  </div>
                  {/* Consulting */}
                  <div className="px-5 py-4">
                    <Cell type={row.consultType} text={t(row.consult)} />
                  </div>
                  {/* Coworking */}
                  <div className="px-5 py-4">
                    <Cell type={row.coworkType} text={t(row.cowork)} />
                  </div>
                  {/* Public */}
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

          {/* Mobile: horizontal scroll with sticky first column */}
          <Reveal delay={120}>
            <div className="mt-12 md:hidden">
              <div className="overflow-x-auto rounded-xl border border-crimson/12 bg-pearl shadow-card" style={{ scrollbarWidth: "thin" }}>
                <div className="min-w-[640px]">
                  {/* Header */}
                  <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr_1fr] border-b border-crimson/10 bg-ivory-warm">
                    <div className="sticky left-0 z-10 bg-ivory-warm px-4 py-3">
                      <span className="font-inter text-[10px] font-semibold uppercase text-mist" style={{ letterSpacing: "0.1em" }}>
                        {t("why.compare.col.cap")}
                      </span>
                    </div>
                    <div className="relative bg-gradient-to-b from-crimson/10 to-transparent px-3 py-3 text-center">
                      <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-crimson to-crimson-deep" />
                      <div className="font-serif-jp text-[12px] font-bold text-crimson">{t("why.compare.col.jgate")}</div>
                    </div>
                    <div className="px-3 py-3 text-center">
                      <div className="font-serif-jp text-[11px] font-bold text-slate">{t("why.compare.col.consult")}</div>
                    </div>
                    <div className="px-3 py-3 text-center">
                      <div className="font-serif-jp text-[11px] font-bold text-slate">{t("why.compare.col.cowork")}</div>
                    </div>
                    <div className="px-3 py-3 text-center">
                      <div className="font-serif-jp text-[11px] font-bold text-slate">{t("why.compare.col.public")}</div>
                    </div>
                  </div>
                  {/* Rows */}
                  {COMPARISON_ROWS.map((row, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-[1.3fr_1fr_1fr_1fr_1fr] items-center border-b border-crimson/8 ${
                        i === COMPARISON_ROWS.length - 1 ? "border-b-0" : ""
                      } ${i % 2 === 0 ? "bg-pearl" : "bg-ivory/30"}`}
                    >
                      <div className="sticky left-0 z-10 bg-inherit px-4 py-3">
                        <span className="font-inter text-[12px] font-semibold text-ink">{t(row.labelKey)}</span>
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

      {/* ───────────────────────────────────────────────────────────
          7 Core Value Pillars — Slide 11
          Unique vertical staggered layout with large numerals + alternating accent.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-navy">
        <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 20% 0%, rgba(188,26,44,0.10), transparent 55%), radial-gradient(ellipse at 80% 100%, rgba(232,160,26,0.08), transparent 55%)" }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>{t("why.pillars.eyebrow")}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
                style={{ fontSize: "clamp(1.625rem,3.6vw,2.375rem)" }}
              >
                {t("why.pillars.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {t("why.pillars.subtitle")}
              </p>
            </div>
          </Reveal>

          {/* 7-pillar vertical list — alternating accent + large numerals */}
          <div className="mx-auto mt-14 max-w-4xl space-y-4">
            {SEVEN_PILLARS.map((p, i) => {
              const isSaffron = p.accent === "saffron";
              const isReversed = i % 2 === 1;
              return (
                <Reveal key={p.num} delay={i * 80} variant={isReversed ? "right" : "left"}>
                  <article
                    className={`glass-dark lift-card group relative grid grid-cols-[auto_1fr] items-center gap-5 overflow-hidden rounded-xl border p-5 sm:p-6 ${
                      isSaffron ? "border-saffron/25" : "border-crimson/25"
                    }`}
                  >
                    {/* Large numeral */}
                    <div
                      className={`pointer-events-none absolute select-none font-serif-jp font-bold leading-none opacity-10 ${
                        isReversed ? "right-4 top-1/2 -translate-y-1/2" : "left-4 top-1/2 -translate-y-1/2"
                      }`}
                      style={{ fontSize: "5.5rem" }}
                      aria-hidden="true"
                    >
                      {p.num}
                    </div>

                    {/* Icon + number badge */}
                    <div
                      className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-card transition-transform duration-300 group-hover:scale-110 ${
                        isSaffron ? "from-saffron to-[#c9881a]" : "from-crimson to-crimson-deep"
                      }`}
                    >
                      <p.icon className="h-7 w-7" strokeWidth={1.5} />
                      {/* Small numeral chip */}
                      <span
                        className={`absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full font-serif-jp text-[10px] font-bold ${
                          isSaffron ? "bg-saffron text-midnight" : "bg-crimson text-white"
                        }`}
                      >
                        {p.num}
                      </span>
                    </div>

                    {/* Text content */}
                    <div className="relative min-w-0">
                      <h3
                        className="font-serif-jp font-bold leading-tight text-white"
                        style={{ fontSize: "clamp(1.0625rem,2vw,1.25rem)" }}
                      >
                        {t(p.titleKey)}
                      </h3>
                      <p className="mt-1.5 font-inter text-[13px] leading-relaxed text-mist sm:text-[14px]">
                        {t(p.descKey)}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Bottom: "Pillars in numbers" summary card */}
          <Reveal delay={200}>
            <div className="mx-auto mt-10 max-w-3xl">
              <div className="glass-dark rounded-xl border border-saffron/25 p-6 text-center">
                <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 font-inter text-mist">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif-jp text-2xl font-bold text-saffron">2-4</span>
                    <span className="text-[12px]">{tx({ EN: "Persons / company", JP: "名/社" })}</span>
                  </div>
                  <span className="h-4 w-px bg-white/15" />
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif-jp text-2xl font-bold text-saffron">7</span>
                    <span className="text-[12px]">{tx({ EN: "Pillars total", JP: "柱の合計" })}</span>
                  </div>
                  <span className="h-4 w-px bg-white/15" />
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif-jp text-2xl font-bold text-saffron">100%</span>
                    <span className="text-[12px]">{tx({ EN: "JP-language support", JP: "日本語対応" })}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Corporate Testimonials — glass-dark on navy (retained)
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-midnight">
        <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(232,160,26,0.08), transparent 55%)" }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>{tx({ EN: "Corporate Testimonials", JP: "企業推薦の声" })}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({ EN: "What Our Corporate Partners Say", JP: "企業パートナーの声" })}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {tx({
                  EN: "Voices from the enterprises who trust J-Gate to deliver their most critical placements.",
                  JP: "最も重要な紹介をJ-Gateに委ねる企業の声。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
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
                      <div className="font-serif-jp text-[14px] font-bold text-white">{tx(tm.name)}</div>
                      <div className="font-inter text-[11px] text-mist">{tx(tm.role)}</div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Closing CTA
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-saffron/15 text-saffron">
                <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h2
                className="mt-6 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({
                  EN: "Experience the J-Gate Membership Difference",
                  JP: "J-Gateメンバーシップの違いを体験する",
                })}
              </h2>
              <p className="mx-auto mt-4 font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
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
