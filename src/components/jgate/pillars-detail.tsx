"use client";

import { Reveal, Eyebrow } from "./shared";
import { useI18n } from "@/lib/i18n";
import {
  Zap,
  Sparkles,
  ShieldCheck,
  Users,
  CheckCircle2,
  Layers,
  ArrowRight,
} from "lucide-react";

type Pillar = {
  num: string;
  icon: typeof Zap;
  friction: { EN: string; JP: string };
  jp: string;
  en: { EN: string; JP: string };
  desc: { EN: string; JP: string };
  solutionBadge: { EN: string; JP: string };
  tags: { text: { EN: string; JP: string }; tone: "crimson" | "saffron" | "success" | "slate" }[];
};

const PILLARS: Pillar[] = [
  {
    num: "01",
    icon: Zap,
    friction: {
      EN: "Traditional lease takes 6–9 months of fit-out & deposit lockup",
      JP: "通常6〜9ヶ月かかる物件契約・内装工事・敷金ロック",
    },
    jp: "即日稼働",
    en: { EN: "Day-1 Operational Readiness", JP: "最短即日での事業立ち上げ" },
    desc: {
      EN: "Eliminate months of capital lockup, lease negotiation, and office renovation. Move into fully equipped dedicated desks or private suites at Cyber Gateway immediately.",
      JP: "多額な初期敷金や内装工事などの投資、煩雑な不動産契約をゼロに。Cyber Gatewayの専用執務空間で、渡航当日からビジネスを開始できます。",
    },
    solutionBadge: { EN: "Zero Setup Lag", JP: "立ち上げ期間短縮" },
    tags: [
      { text: { EN: "Zero CapEx", JP: "初期投資ゼロ" }, tone: "crimson" },
      { text: { EN: "Day-1 Launch", JP: "即日稼働" }, tone: "saffron" },
      { text: { EN: "Cyber Gateway", JP: "Cyber Gateway" }, tone: "slate" },
    ],
  },
  {
    num: "02",
    icon: Sparkles,
    friction: {
      EN: "Language & cultural friction in daily commercial operations",
      JP: "商習慣の違いや言語の壁によるコミュニケーション摩擦",
    },
    jp: "常駐伴走",
    en: { EN: "Resident Japanese Executive Advisory", JP: "現地常駐日本人による日常伴走" },
    desc: {
      EN: "Resident Director Daisuke Tanji provides on-the-ground guidance in Japanese — resolving everyday business questions, vetting local vendors, and attending critical negotiations.",
      JP: "現地代表・丹治がハイデラバードに常駐。日々の業務相談（何でも相談）から、現地提携先の見極め、商談同行、通訳まで日本語で全面支援します。",
    },
    solutionBadge: { EN: "100% Japanese", JP: "完全日本語対応" },
    tags: [
      { text: { EN: "Native Japanese", JP: "日本人常駐" }, tone: "crimson" },
      { text: { EN: "On-Site Support", JP: "現地同行" }, tone: "saffron" },
      { text: { EN: "Vendor Vetting", JP: "提携先審査" }, tone: "success" },
    ],
  },
  {
    num: "03",
    icon: ShieldCheck,
    friction: {
      EN: "Complex RBI, MCA, and Indian statutory tax compliance",
      JP: "インド特有の難解な外資規制（RBI）や税務コンプライアンス",
    },
    jp: "法務ガバナンス",
    en: { EN: "Statutory Governance & Banking Handholding", JP: "法人設立・口座開設・法務支援" },
    desc: {
      EN: "End-to-end support for Pvt Ltd entity incorporation, PAN/TAN, GSTIN registrations, and opening corporate bank accounts with leading institutions without bureaucratic delays.",
      JP: "現地法人（Pvt Ltd）設立から、各種税務登録、大手商業銀行での法人口座開設まで、経験豊富な現地専門家と連携して確実に完遂します。",
    },
    solutionBadge: { EN: "Risk Protected", JP: "コンプライアンス遵守" },
    tags: [
      { text: { EN: "Pvt Ltd Setup", JP: "法人設立" }, tone: "saffron" },
      { text: { EN: "Bank Account", JP: "法人口座" }, tone: "success" },
      { text: { EN: "RBI Compliant", JP: "FDI対応" }, tone: "slate" },
    ],
  },
  {
    num: "04",
    icon: Users,
    friction: {
      EN: "Unscreened tech hiring & expensive recruitment agency fees",
      JP: "不透明な現地人材採用と高額なエージェント手数料",
    },
    jp: "高度IT人材",
    en: { EN: "Direct Pipeline to Elite Tech Talent", JP: "トップITエンジニア・バイリンガル採用" },
    desc: {
      EN: "Direct hiring access to software engineers, AI developers, and bilingual project managers through Telangana's premier tech institutions and T-Hub ecosystem.",
      JP: "名門工科大学やT-Hubとの強力なネットワークを通じて、確かな技術力を持つエンジニアやバイリンガルPMを直接発掘・採用可能です。",
    },
    solutionBadge: { EN: "Verified Talent", JP: "厳選人材紹介" },
    tags: [
      { text: { EN: "Senior Engineers", JP: "高度技術者" }, tone: "crimson" },
      { text: { EN: "Bilingual PMs", JP: "バイリンガルPM" }, tone: "saffron" },
      { text: { EN: "University Tie-ups", JP: "大学連携" }, tone: "success" },
    ],
  },
];

const TAG_TONES: Record<Pillar["tags"][number]["tone"], string> = {
  crimson: "border-crimson/30 dark:border-rose-400/30 text-crimson dark:text-rose-400 bg-crimson/8 dark:bg-rose-950/40",
  saffron: "border-saffron/35 dark:border-amber-400/30 text-saffron dark:text-amber-400 bg-saffron/10 dark:bg-amber-950/40",
  success: "border-success/30 dark:border-emerald-400/30 text-success dark:text-emerald-400 bg-success/10 dark:bg-emerald-950/40",
  slate: "border-slate-300 dark:border-white/20 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/10",
};

const STATS = [
  {
    value: "24–48h",
    unit: "Setup",
    label: { EN: "Time to Operational Launch", JP: "現地稼働開始までの時間" },
  },
  {
    value: "100%",
    unit: "Bilingual",
    label: { EN: "Japanese On-Site Support", JP: "日本語常駐サポート" },
  },
  {
    value: "40%+",
    unit: "Savings",
    label: { EN: "Operational Cost Reduction", JP: "従来の進出コスト削減率" },
  },
];

export function PillarsDetail() {
  const { tx } = useI18n();

  return (
    <section
      id="why-pillars"
      className="section-pad bg-ivory dark:bg-[#080d17] relative overflow-hidden"
      aria-label="J-Gate 4 strategic solutions"
    >
      <div className="container-jg">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-saffron/30 dark:border-amber-400/40 bg-saffron/10 dark:bg-amber-950/40 px-4 py-1 font-inter text-[11px] font-bold uppercase tracking-wider text-saffron-dark dark:text-amber-300">
              <Layers className="h-3.5 w-3.5" />
              {tx({ EN: "Strategic Problem Solving", JP: "インド進出の課題を解消" })}
            </span>
            <h2
              className="mt-3 font-serif-jp font-bold leading-[1.18] text-ink dark:text-white"
              style={{ fontSize: "clamp(1.875rem, 3.8vw, 2.75rem)" }}
            >
              {tx({ EN: "How J-Gate Eliminates Expansion Friction", JP: "J-Gateが解決する4つの進出障壁" })}
            </h2>
            <p
              className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-slate dark:text-slate-300"
              style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}
            >
              {tx({
                EN: "Traditional India expansion is slow, bureaucratic, and risky. J-Gate replaces friction with proven, ready-to-use bilateral infrastructure.",
                JP: "従来のインド進出に伴う長期契約、言語の壁、税務リスク、人材採用の難しさを、J-Gateのワンストップ基盤が解消します。",
              })}
            </p>
          </div>
        </Reveal>

        {/* 4 Strategic Problem-Solution Cards (2x2 Grid) */}
        <div className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.num} delay={i * 80} variant="scale">
                <article className="luxury-light-card card-sheen gold-hairline group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-5 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-crimson/40">
                  {/* Faded Ghost Numeral Watermark */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-3 sm:-top-5 right-3 sm:right-4 select-none font-serif-jp font-black text-slate-100/80 dark:text-white/[0.04] transition-all duration-500 group-hover:scale-110 group-hover:text-crimson/10 text-[56px] sm:text-[72px] lg:text-[88px]"
                  >
                    {p.num}
                  </span>

                  <div className="relative z-10">
                    {/* Problem / Friction Callout Badge */}
                    <div className="rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200/70 dark:border-rose-800/40 px-3 py-1.5 mb-4 text-[11px] sm:text-[11.5px] font-inter text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                      <span className="font-bold uppercase tracking-wider text-[9.5px] bg-rose-200 dark:bg-rose-900/60 px-1.5 py-0.2 rounded text-rose-900 dark:text-rose-200 shrink-0">
                        {tx({ EN: "Challenge", JP: "従来の課題" })}
                      </span>
                      <span className="line-clamp-1">{tx(p.friction)}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="icon-pod h-11 w-11 sm:h-12 sm:w-12 shrink-0">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-700/60 px-2.5 py-0.5 font-inter text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                        {tx(p.solutionBadge)}
                      </span>
                    </div>

                    <div className="mt-3.5 sm:mt-4">
                      <span className="font-serif-jp text-[12px] sm:text-[13px] font-bold text-saffron-deep dark:text-saffron-light tracking-wide block">
                        {p.jp}
                      </span>
                      <h3 className="mt-1 font-serif-jp text-[17px] sm:text-[19px] font-bold text-ink dark:text-white group-hover:text-crimson dark:group-hover:text-rose-400 transition-colors">
                        {tx(p.en)}
                      </h3>
                      <p className="mt-2 font-inter text-[12.5px] sm:text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                        {tx(p.desc)}
                      </p>
                    </div>
                  </div>

                  {/* Tag Chips */}
                  <div className="relative z-10 mt-5 flex flex-wrap gap-1.5 sm:gap-2 border-t border-slate-100 dark:border-white/10 pt-3.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag.text.EN}
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 sm:px-3 sm:py-1 font-inter text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider shadow-sm ${
                          TAG_TONES[tag.tone]
                        }`}
                      >
                        {tx(tag.text)}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Stats Milestone Strip */}
        <Reveal delay={140} variant="scale">
          <div className="luxury-light-card card-sheen gold-hairline mt-8 sm:mt-12 grid grid-cols-1 divide-y divide-slate-100 dark:divide-white/10 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] shadow-xl sm:grid-cols-3 sm:divide-x sm:divide-y-0 max-w-4xl mx-auto">
            {STATS.map((s) => (
              <div
                key={s.label.EN}
                className="flex flex-col items-center justify-center p-4 sm:p-6 text-center transition-colors hover:bg-slate-50/70 dark:hover:bg-white/5"
              >
                <div className="flex items-baseline gap-1.5">
                  <span
                    className="font-serif-jp font-black text-crimson drop-shadow-sm"
                    style={{ fontSize: "clamp(1.85rem, 3.4vw, 2.75rem)" }}
                  >
                    {s.value}
                  </span>
                  <span className="font-inter text-[11px] sm:text-xs font-bold text-saffron-deep dark:text-saffron-light uppercase tracking-wider">
                    {s.unit}
                  </span>
                </div>
                <span
                  className="mt-1 sm:mt-2 font-inter text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300"
                >
                  {tx(s.label)}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

