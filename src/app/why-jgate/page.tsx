"use client";

import { useState } from "react";
import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import { Photo } from "@/components/jgate/photo";
import {
  ArrowRight,
  Building2,
  Wifi,
  MessageCircle,
  FileStack,
  Users,
  GraduationCap,
  Briefcase,
  ChevronDown,
  Check,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";

/* ============================================================
   Why J-Gate — v3.0 Definitive Redesign
   Architecture:
     1. PageHero — "Why J-Gate" / "The Strategic Investment Advantage"
     2. Comparison Table — interactive, 5 cols × 9 rows. J-Gate highlighted.
     3. 7 Pillars — accordion with smooth height transition
     4. Stats strip — "2–4 Persons/company · 7 Pillars total · 100% JP-language support"
     5. Testimonials — 3 cards w/ 80px crimson quote marks + 5 saffron stars + circular photo
     6. Closing CTA
   ============================================================ */

/* ── Comparison Table — full interactive 5-col × 9-row ── */
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

/* Cell renderer — ✓ success green, ✗ crimson, △ saffron, ◎ success green */
function Cell({
  type,
  text,
  jgateHighlight,
}: {
  type: CellType;
  text: string;
  jgateHighlight?: boolean;
}) {
  // If no type → plain text
  if (!type) {
    return (
      <span
        className={`font-inter text-[13px] ${jgateHighlight ? "font-semibold text-ink" : "text-slate"}`}
      >
        {text}
      </span>
    );
  }
  // Symbol + text
  const symbol =
    type === "check" ? (
      <Check className="h-3.5 w-3.5 text-success" strokeWidth={2.5} />
    ) : type === "cross" ? (
      <span className="font-serif-jp text-[14px] font-bold text-crimson leading-none">✗</span>
    ) : type === "good" ? (
      <span className="font-serif-jp text-[14px] font-bold text-success leading-none">◎</span>
    ) : (
      <span className="font-serif-jp text-[14px] font-bold text-saffron leading-none">△</span>
    );
  return (
    <div className="flex items-start gap-2">
      <span className="mt-0.5 shrink-0">{symbol}</span>
      <span
        className={`font-inter text-[13px] leading-relaxed ${
          jgateHighlight ? "font-semibold text-ink" : "text-slate"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

/* Legend strip above the table */
function Legend() {
  const { tx } = useI18n();
  const items = [
    { symbol: <Check className="h-3.5 w-3.5 text-success" strokeWidth={2.5} />, label: tx({ EN: "Fully Available", JP: "完全対応" }) },
    { symbol: <span className="font-serif-jp text-[14px] font-bold text-crimson leading-none">✗</span>, label: tx({ EN: "Not Available", JP: "対応なし" }) },
    { symbol: <span className="font-serif-jp text-[14px] font-bold text-success leading-none">◎</span>, label: tx({ EN: "Optimal Value", JP: "最適" }) },
    { symbol: <span className="font-serif-jp text-[14px] font-bold text-saffron leading-none">△</span>, label: tx({ EN: "Partial / Limited", JP: "部分的・限定" }) },
  ];
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-6 font-inter text-[12px] text-slate">
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="inline-flex h-5 w-5 items-center justify-center">{it.symbol}</span>
          <span className="font-medium">{it.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ── 7 Pillars — accordion with smooth height transition ── */
const SEVEN_PILLARS = [
  { num: "1", icon: Building2, titleKey: "why.p1.title", descKey: "why.p1.desc" },
  { num: "2", icon: Wifi, titleKey: "why.p2.title", descKey: "why.p2.desc" },
  { num: "3", icon: MessageCircle, titleKey: "why.p3.title", descKey: "why.p3.desc" },
  { num: "4", icon: FileStack, titleKey: "why.p4.title", descKey: "why.p4.desc" },
  { num: "5", icon: Users, titleKey: "why.p5.title", descKey: "why.p5.desc" },
  { num: "6", icon: GraduationCap, titleKey: "why.p6.title", descKey: "why.p6.desc" },
  { num: "7", icon: Briefcase, titleKey: "why.p7.title", descKey: "why.p7.desc" },
] as const;

function PillarAccordion({
  pillar,
  isOpen,
  onToggle,
}: {
  pillar: (typeof SEVEN_PILLARS)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { t } = useI18n();
  return (
    <div
      className={`overflow-hidden rounded-lg border bg-pearl shadow-card transition-all ${
        isOpen ? "border-crimson/30" : "border-crimson/8"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`pillar-panel-${pillar.num}`}
        className="relative flex w-full items-center gap-5 p-6 text-left transition-colors hover:bg-crimson/[0.02]"
      >
        {/* Faded large numeral */}
        <span
          className="pointer-events-none absolute -left-1 top-1/2 -translate-y-1/2 font-serif-jp font-black leading-none text-crimson"
          style={{ fontSize: "64px", opacity: 0.15 }}
          aria-hidden
        >
          {pillar.num}
        </span>
        {/* Icon badge */}
        <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-crimson/10 to-saffron/10 text-crimson">
          <pillar.icon className="h-6 w-6" strokeWidth={1.5} />
        </span>
        {/* Title */}
        <h3
          className="relative z-10 flex-1 font-inter font-bold text-ink"
          style={{ fontSize: "20px" }}
        >
          {t(pillar.titleKey)}
        </h3>
        {/* Chevron */}
        <ChevronDown
          className={`relative z-10 h-5 w-5 shrink-0 text-crimson transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {/* Smooth height transition via grid-template-rows */}
      <div
        id={`pillar-panel-${pillar.num}`}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-0">
            <div className="border-t border-crimson/10 pt-4">
              <p
                className="font-inter text-slate"
                style={{ fontSize: "16px", lineHeight: 1.65 }}
              >
                {t(pillar.descKey)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Testimonials content — 3 real testimonials ── */
const TESTIMONIALS = [
  {
    name: "Operations Director",
    role: { EN: "Country Manager, Mid-size Manufacturing", JP: "中堅製造業・カントリーマネージャー" },
    initials: "HY",
    fallback: "grad-testimonial",
    quote: {
      EN: "J-Gate gave us an operational India base within weeks, not years. The Japan Desk handled everything in our language — registration, banking, hiring. We could finally focus on the business, not the bureaucracy.",
      JP: "J-Gateは数年ではなく数週間で稼働するインド拠点を提供してくれました。ジャパンデスクが登録・銀行・採用まで日本語で対応。私たちはついにビジネスに集中できました。",
    },
  },
  {
    name: "Country Manager",
    role: { EN: "India Lead, Japanese Tech Enterprise", JP: "日本テック企業・インドリード" },
    initials: "PN",
    fallback: "grad-team",
    quote: {
      EN: "The difference is the ecosystem. At J-Gate we met our T-Hub partners, our first Indian engineers, and the legal counsel who set up our entity — all in the same building. No other space offers that.",
      JP: "決定的に違うのはエコシステムです。J-GateではT-Hubパートナー、最初のインド人エンジニア、法人設立の法律顧問を同じ建物で出会えました。他の場所にはありません。",
    },
  },
  {
    name: "Branch Manager",
    role: { EN: "Director, Regional SME Bank", JP: "地方銀・ディレクター" },
    initials: "KW",
    fallback: "grad-advisory-j",
    quote: {
      EN: "As a regional bank we couldn't justify a full India office. J-Gate's membership model let us establish a credible presence at a fraction of the typical cost — and the talent they placed has stayed with us for 18 months and counting.",
      JP: "地方銀としてインドオフィスは正当化できませんでした。J-Gateのメンバーシップで、通常コストの一部で信頼できる拠点を確立。紹介された人材は18ヶ月以上定着しています。",
    },
  },
];

function TestimonialCard({
  t,
  delay,
}: {
  t: (typeof TESTIMONIALS)[number];
  delay: number;
}) {
  const { tx } = useI18n();
  return (
    <Reveal delay={delay}>
      <article className="lift-card relative flex h-full flex-col overflow-hidden rounded-lg border border-crimson/8 bg-pearl p-7 shadow-card">
        {/* Large crimson quote mark */}
        <span
          className="pointer-events-none absolute -top-3 right-3 font-serif-jp font-black leading-none text-crimson"
          style={{ fontSize: "80px", opacity: 0.1 }}
          aria-hidden
        >
          &ldquo;
        </span>
        {/* 5 saffron stars */}
        <div className="relative flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-saffron text-saffron" />
          ))}
        </div>
        {/* Quote body */}
        <p
          className="relative mt-4 flex-1 font-inter italic leading-relaxed text-slate"
          style={{ fontSize: "14px" }}
        >
          &ldquo;{tx(t.quote)}&rdquo;
        </p>
        {/* Author */}
        <div className="relative mt-5 flex items-center gap-3 border-t border-crimson/10 pt-5">
          <Photo
            id={`photo-testimonial-${t.initials.toLowerCase()}`}
            alt={`${t.name} portrait`}
            fallback={t.fallback}
            initials={t.initials}
            rounded="rounded-full"
            className="h-12 w-12 shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-inter text-[14px] font-bold text-ink">{t.name}</span>
            <span className="font-inter text-[11px] text-mist">{tx(t.role)}</span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function WhyJGatePage() {
  const { t, tx } = useI18n();
  const [openPillar, setOpenPillar] = useState<number>(1); // first one open by default

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
        subtitleKey="why.title"
      />

      {/* ════════════════════════════════════════════════════════════
          Section 1 — Comparison Table
          Full interactive 5-col × 9-row table.
          J-Gate column: crimson left-border, pearl bg, "Recommended" badge.
          Legend row above table. Mobile: horizontal scroll with sticky first col.
          Summary statement below.
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{t("why.compare.eyebrow")}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {t("why.compare.title")}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
              >
                {t("why.compare.subtitle")}
              </p>
            </div>
          </Reveal>

          {/* Legend */}
          <Reveal delay={80}>
            <div className="mt-8">
              <Legend />
            </div>
          </Reveal>

          {/* Table — horizontal scroll on mobile, sticky first col */}
          <Reveal delay={120}>
            <div className="relative overflow-x-auto rounded-lg border border-crimson/12 bg-pearl shadow-card">
              {/* Mobile swipe hint */}
              <div className="pointer-events-none absolute right-2 top-2 z-10 hidden rounded-md bg-midnight/85 px-2 py-1 font-inter text-[10px] font-semibold uppercase text-white sm:block lg:hidden" style={{ letterSpacing: "0.1em" }}>
                ← Swipe to compare →
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-crimson/15">
                    {/* Header cap */}
                    <th
                      className="sticky left-0 z-10 bg-pearl p-4 text-left align-bottom"
                      style={{ minWidth: 140 }}
                    >
                      <span
                        className="font-inter text-[10px] font-bold uppercase text-slate"
                        style={{ letterSpacing: "0.15em" }}
                      >
                        {t("why.compare.col.cap")}
                      </span>
                    </th>
                    {/* J-Gate column */}
                    <th className="border-l-4 border-crimson bg-crimson/[0.04] p-4 text-left align-bottom">
                      <div className="flex flex-col gap-1.5">
                        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-crimson px-2 py-0.5 font-inter text-[10px] font-bold uppercase text-white" style={{ letterSpacing: "0.1em" }}>
                          <Check className="h-2.5 w-2.5" strokeWidth={3} />
                          {tx({ EN: "Recommended", JP: "おすすめ" })}
                        </span>
                        <span className="font-serif-jp text-[18px] font-bold text-ink">
                          {t("why.compare.col.jgate")}
                        </span>
                      </div>
                    </th>
                    {/* Other 3 columns */}
                    <th className="bg-pearl p-4 text-left align-bottom">
                      <span className="font-serif-jp text-[14px] font-bold text-slate">
                        {t("why.compare.col.consult")}
                      </span>
                    </th>
                    <th className="bg-pearl p-4 text-left align-bottom">
                      <span className="font-serif-jp text-[14px] font-bold text-slate">
                        {t("why.compare.col.cowork")}
                      </span>
                    </th>
                    <th className="bg-pearl p-4 text-left align-bottom">
                      <span className="font-serif-jp text-[14px] font-bold text-slate">
                        {t("why.compare.col.public")}
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, ri) => (
                    <tr key={ri} className="border-t border-crimson/8 align-top">
                      {/* Sticky first col — label */}
                      <th
                        scope="row"
                        className="sticky left-0 z-10 bg-pearl p-4 text-left"
                      >
                        <span className="font-inter text-[12px] font-bold uppercase text-ink" style={{ letterSpacing: "0.05em" }}>
                          {t(row.labelKey)}
                        </span>
                      </th>
                      {/* J-Gate cell — highlighted */}
                      <td className="border-l-4 border-crimson bg-crimson/[0.04] p-4">
                        <Cell
                          type={row.jgateType ?? "text"}
                          text={t(row.jgate)}
                          jgateHighlight
                        />
                      </td>
                      {/* Other cells */}
                      <td className="bg-pearl p-4">
                        <Cell type={row.consultType ?? "text"} text={t(row.consult)} />
                      </td>
                      <td className="bg-pearl p-4">
                        <Cell type={row.coworkType ?? "text"} text={t(row.cowork)} />
                      </td>
                      <td className="bg-pearl p-4">
                        <Cell type={row.publicType ?? "text"} text={t(row.publicOrg)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Summary statement */}
          <Reveal delay={200}>
            <p
              className="mx-auto mt-6 max-w-3xl text-center font-inter leading-relaxed text-slate"
              style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
            >
              <span className="font-bold text-crimson">»</span>{" "}
              {t("why.compare.note")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Section 2 — 7 Pillars (Accordion)
          Each: large number (64px crimson opacity 0.15), title (Inter 700 20px), body (Inter 400 16px slate)
          Expandable accordion with smooth height transition.
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
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>{t("why.pillars.eyebrow")}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {t("why.pillars.title")}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-mist"
                style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
              >
                {t("why.pillars.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-3xl gap-3">
            {SEVEN_PILLARS.map((p, i) => (
              <Reveal key={p.num} delay={i * 60}>
                <PillarAccordion
                  pillar={p}
                  isOpen={openPillar === Number(p.num)}
                  onToggle={() =>
                    setOpenPillar(openPillar === Number(p.num) ? 0 : Number(p.num))
                  }
                />
              </Reveal>
            ))}
          </div>

          {/* Stats strip */}
          <Reveal delay={200}>
            <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-lg border border-white/10 bg-white/[0.03] px-6 py-4 text-center">
              {[
                tx({ EN: "2–4 Persons/company", JP: "1社2〜4名まで" }),
                tx({ EN: "7 Pillars total", JP: "合計7つの柱" }),
                tx({ EN: "100% JP-language support", JP: "100%日本語サポート" }),
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                  <span className="font-inter text-[13px] font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Section 3 — Testimonials
          3 cards w/ large crimson quote marks (80px opacity 0.1), 5 saffron stars, circular photo placeholders
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Corporate Testimonials", JP: "企業のお声" })}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({ EN: "Trusted by Companies Already on the Ground", JP: "現場で信頼される企業からのお声" })}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
              >
                {tx({
                  EN: "Real outcomes from real members — across manufacturing, technology, and regional banking.",
                  JP: "製造・テクノロジー・地方銀行など、実際のメンバーからのリアルな成果。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((tm, i) => (
              <TestimonialCard key={tm.name} t={tm} delay={i * 120} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Closing CTA
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
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-crimson/15 text-crimson">
                <Sparkles className="h-7 w-7" strokeWidth={1.5} />
              </span>
              <h2
                className="mt-6 font-serif-jp font-bold leading-[1.15] text-white"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({ EN: "Ready to See the Difference?", JP: "違いを見に行きませんか？" })}
              </h2>
              <p
                className="mx-auto mt-5 max-w-lg font-inter font-light leading-relaxed text-mist"
                style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
              >
                {tx({
                  EN: "Download the brochure and see exactly how J-Gate delivers what consultants, coworking, and public orgs cannot.",
                  JP: "パンフレットをダウンロードして、コンサル・コワーキング・公的機関にはできないJ-Gateの提供価値をご確認ください。",
                })}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/auth/brochure"
                  className="btn-shine flex items-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-7 py-3.5 font-inter text-[14px] font-semibold text-white shadow-[0_0_24px_rgba(188,26,44,0.45)] transition-all hover:-translate-y-0.5"
                >
                  {t("nav.brochure")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md border border-white/30 px-7 py-3.5 font-inter text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                >
                  {tx({ EN: "Talk to Us", JP: "お問い合わせ" })}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
