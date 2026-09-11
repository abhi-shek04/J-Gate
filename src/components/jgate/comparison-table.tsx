"use client";

import { Check, X, TriangleAlert, CircleDot, Sparkles, Award, ShieldCheck, ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import { useI18n } from "@/lib/i18n";
import type { ReactNode } from "react";
import Link from "next/link";

type Indicator = "check" | "cross" | "warn" | "optimal" | "text";

type Row = {
  label: { EN: string; JP: string };
  jgate: { EN: string; JP: string };
  consult: { EN: string; JP: string };
  cowork: { EN: string; JP: string };
  publicOrg: { EN: string; JP: string };
  jgateType: Indicator;
  consultType: Indicator;
  coworkType: Indicator;
  publicType: Indicator;
};

const ROWS: Row[] = [
  {
    label: { EN: "Target Audience", JP: "対象顧客" },
    jgate: { EN: "Mid-size, SMEs, Startups & Regional Banks", JP: "中堅・中小・スタートアップ・地方銀行" },
    consult: { EN: "Large enterprises only", JP: "大企業のみ" },
    cowork: { EN: "Local companies & freelancers", JP: "現地企業・フリーランス" },
    publicOrg: { EN: "General / All", JP: "一般・全対象" },
    jgateType: "text",
    consultType: "text",
    coworkType: "text",
    publicType: "text",
  },
  {
    label: { EN: "Monthly Cost", JP: "月額費用" },
    jgate: { EN: "From 50,000 INR (~¥90,000)", JP: "50,000 INR〜（約9万円）" },
    consult: { EN: "¥500K – ¥1M+", JP: "50万〜100万円+" },
    cowork: { EN: "10K – 60K INR", JP: "10,000〜60,000 INR" },
    publicOrg: { EN: "Free – Low cost", JP: "無料〜低額" },
    jgateType: "optimal",
    consultType: "cross",
    coworkType: "text",
    publicType: "optimal",
  },
  {
    label: { EN: "Physical Base", JP: "物理拠点" },
    jgate: { EN: "Dedicated workspace at Cyber Gateway", JP: "Cyber Gatewayに専用拠点" },
    consult: { EN: "None — separate contract", JP: "なし（別契約）" },
    cowork: { EN: "Shared space only", JP: "共有スペースのみ" },
    publicOrg: { EN: "None", JP: "なし" },
    jgateType: "check",
    consultType: "cross",
    coworkType: "check",
    publicType: "cross",
  },
  {
    label: { EN: "Resident Japanese Expert", JP: "常駐日本語専門家" },
    jgate: { EN: "Japan Desk — 100% Japanese, on-site", JP: "ジャパンデスク — 100%日本語・常駐" },
    consult: { EN: "Dispatched per occasion", JP: "都度派遣" },
    cowork: { EN: "None", JP: "なし" },
    publicOrg: { EN: "Local staff only", JP: "現地スタッフのみ" },
    jgateType: "check",
    consultType: "cross",
    coworkType: "cross",
    publicType: "cross",
  },
  {
    label: { EN: "Hands-on Support", JP: "実務サポート" },
    jgate: { EN: "Covers actual operations", JP: "実務まで対応" },
    consult: { EN: "Mainly advisory", JP: "主に助言" },
    cowork: { EN: "No business support", JP: "ビジネス支援なし" },
    publicOrg: { EN: "Info and advice only", JP: "情報・助言のみ" },
    jgateType: "check",
    consultType: "warn",
    coworkType: "cross",
    publicType: "warn",
  },
  {
    label: { EN: "Japanese Language", JP: "日本語対応" },
    jgate: { EN: "Fully supported (Native on-ground)", JP: "完全対応（現地常駐）" },
    consult: { EN: "High cost", JP: "高コスト" },
    cowork: { EN: "None", JP: "なし" },
    publicOrg: { EN: "Limited", JP: "限定的" },
    jgateType: "check",
    consultType: "warn",
    coworkType: "cross",
    publicType: "warn",
  },
  {
    label: { EN: "Hiring Support", JP: "採用支援" },
    jgate: { EN: "Full IndiGate partnership", JP: "IndiGateと完全連携" },
    consult: { EN: "Referral only — expensive", JP: "紹介のみ・高額" },
    cowork: { EN: "None", JP: "なし" },
    publicOrg: { EN: "None", JP: "なし" },
    jgateType: "check",
    consultType: "warn",
    coworkType: "cross",
    publicType: "cross",
  },
  {
    label: { EN: "Network & Alliances", JP: "提携ネットワーク" },
    jgate: { EN: "T-Hub, IIT Hyderabad, Woxsen, Genesys", JP: "T-Hub・IITハイデラバード・Woxsen・Genesys" },
    consult: { EN: "Govt agencies & large firms", JP: "政府機関・大企業" },
    cowork: { EN: "General users", JP: "一般利用者" },
    publicOrg: { EN: "Govt agencies", JP: "政府機関" },
    jgateType: "text",
    consultType: "text",
    coworkType: "text",
    publicType: "text",
  },
];

const LEGEND = [
  { color: "bg-success", label: { EN: "Fully Available", JP: "完全対応" } },
  { color: "bg-crimson", label: { EN: "Not Available", JP: "非対応" } },
  { color: "bg-saffron", label: { EN: "Partial", JP: "一部対応" } },
  { color: "bg-sky-500", label: { EN: "Optimal Cost", JP: "最適コスト" } },
];

function IndicatorIcon({ type }: { type: Indicator }) {
  if (type === "text") return null;
  const map: Record<Exclude<Indicator, "text">, { icon: ReactNode; ring: string; text: string }> = {
    check: {
      icon: <Check className="h-3.5 w-3.5" strokeWidth={3} />,
      ring: "bg-success/15 border border-success/30",
      text: "text-success",
    },
    cross: {
      icon: <X className="h-3.5 w-3.5" strokeWidth={3} />,
      ring: "bg-crimson/15 border border-crimson/30",
      text: "text-crimson",
    },
    warn: {
      icon: <TriangleAlert className="h-3.5 w-3.5" strokeWidth={2.5} />,
      ring: "bg-saffron/15 border border-saffron/30",
      text: "text-saffron",
    },
    optimal: {
      icon: <CircleDot className="h-3.5 w-3.5" strokeWidth={2.5} />,
      ring: "bg-sky-500/15 border border-sky-500/30",
      text: "text-sky-600",
    },
  };
  const cfg = map[type];
  return (
    <span
      className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${cfg.ring} ${cfg.text}`}
      aria-hidden="true"
    >
      {cfg.icon}
    </span>
  );
}

function Cell({
  text,
  type,
  highlight = false,
}: {
  text: string;
  type: Indicator;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-2.5 px-5 py-4 font-inter text-[13px] leading-snug ${
        highlight ? "text-ink font-semibold" : "text-slate"
      }`}
    >
      {type !== "text" && <IndicatorIcon type={type} />}
      <span className={highlight ? "font-bold text-ink" : ""}>{text}</span>
    </div>
  );
}

export function ComparisonTable() {
  const { tx } = useI18n();

  return (
    <section
      id="why-comparison"
      className="section-pad bg-ivory-warm relative overflow-hidden"
      aria-label="J-Gate side-by-side comparison"
    >
      <div className="container-jg relative z-10">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/10 px-4 py-1 font-inter text-[11px] font-bold uppercase tracking-wider text-crimson">
              <Award className="h-3.5 w-3.5" />
              {tx({ EN: "Side-by-Side Comparison", JP: "比較対照表" })}
            </span>
            <h2
              className="mt-3 font-serif-jp font-bold leading-[1.18] text-ink"
              style={{ fontSize: "clamp(1.875rem, 3.8vw, 2.75rem)" }}
            >
              {tx({ EN: "J-Gate vs The Alternatives", JP: "J-Gateと他選択肢の徹底比較" })}
            </h2>
            <p
              className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-slate"
              style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}
            >
              {tx({
                EN: "A direct comparison across the four paths Japanese enterprises consider when entering India — cost, support, network, and overall value.",
                JP: "インド進出を検討する日本企業が直面する4つの選択肢を、コスト・伴走体制・人脈・投資対効果の視点から徹底比較。",
              })}
            </p>
          </div>
        </Reveal>

        {/* Legend */}
        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LEGEND.map((l) => (
              <span
                key={l.label.EN}
                className="inline-flex items-center gap-2 font-inter text-[12px] font-medium text-slate"
              >
                <span className={`inline-block h-2.5 w-2.5 rounded-full ${l.color}`} />
                {tx(l.label)}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Table Container with Luxury Glass Card Styling */}
        <Reveal delay={120} variant="scale">
          <div className="mt-10 overflow-x-auto pb-4" style={{ scrollbarWidth: "thin" }}>
            <div className="min-w-[920px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xl">
              {/* Header row */}
              <div className="grid grid-cols-[180px_minmax(210px,1.2fr)_1fr_1fr_1fr]">
                <div className="border-b border-slate-200/80 bg-slate-50/90 px-5 py-5 flex items-center">
                  <span
                    className="font-inter text-[11px] font-bold uppercase tracking-wider text-slate-500"
                  >
                    {tx({ EN: "Criteria", JP: "比較項目" })}
                  </span>
                </div>

                {/* J-Gate Highlighted Column Header */}
                <div className="relative border-b border-crimson/40 bg-gradient-to-br from-crimson to-crimson-deep px-5 py-5 text-white shadow-lg">
                  <span
                    className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 font-inter text-[10px] font-bold uppercase text-white shadow-sm"
                  >
                    <Sparkles className="h-3 w-3 text-saffron" />
                    Recommended
                  </span>
                  <span className="font-serif-jp text-lg font-bold tracking-tight block">
                    J-Gate
                  </span>
                  <p className="font-sans-jp text-[11.5px] text-white/80 font-normal mt-0.5">
                    ジェーゲート
                  </p>
                </div>

                <div className="border-b border-slate-200/80 bg-slate-50/90 px-5 py-5 flex items-center">
                  <span className="font-inter text-[13px] font-bold text-ink">
                    {tx({ EN: "Major Consulting", JP: "大手コンサル" })}
                  </span>
                </div>
                <div className="border-b border-slate-200/80 bg-slate-50/90 px-5 py-5 flex items-center">
                  <span className="font-inter text-[13px] font-bold text-ink">
                    {tx({ EN: "Local Coworking", JP: "現地コワーキング" })}
                  </span>
                </div>
                <div className="border-b border-slate-200/80 bg-slate-50/90 px-5 py-5 flex items-center">
                  <span className="font-inter text-[13px] font-bold text-ink">
                    {tx({ EN: "Public Orgs", JP: "公的機関" })}
                  </span>
                </div>
              </div>

              {/* Data rows */}
              {ROWS.map((row, i) => {
                const zebra = i % 2 === 1;
                return (
                  <div
                    key={row.label.EN}
                    className="grid grid-cols-[180px_minmax(210px,1.2fr)_1fr_1fr_1fr] border-t border-slate-100 transition-colors hover:bg-slate-50/50"
                  >
                    {/* Criteria label */}
                    <div
                      className={`px-5 py-4 flex items-center ${
                        zebra ? "bg-slate-50/60" : "bg-white"
                      }`}
                    >
                      <span className="font-inter text-[12.5px] font-bold text-ink">
                        {tx(row.label)}
                      </span>
                    </div>

                    {/* J-Gate highlighted cell */}
                    <div
                      className={`relative border-x-2 border-crimson/60 ${
                        zebra ? "bg-crimson/[0.05]" : "bg-crimson/[0.03]"
                      }`}
                    >
                      <Cell text={tx(row.jgate)} type={row.jgateType} highlight />
                    </div>

                    <div className={`flex items-center ${zebra ? "bg-slate-50/60" : "bg-white"}`}>
                      <Cell text={tx(row.consult)} type={row.consultType} />
                    </div>
                    <div className={`flex items-center ${zebra ? "bg-slate-50/60" : "bg-white"}`}>
                      <Cell text={tx(row.cowork)} type={row.coworkType} />
                    </div>
                    <div className={`flex items-center ${zebra ? "bg-slate-50/60" : "bg-white"}`}>
                      <Cell text={tx(row.publicOrg)} type={row.publicType} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Verdict Banner */}
        <Reveal delay={160} variant="scale">
          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border-2 border-crimson/40 bg-gradient-to-r from-red-50/90 via-white to-amber-50/80 p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-crimson text-white shadow-crimp">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <span
                  className="font-inter text-[11px] font-bold uppercase tracking-wider text-crimson block"
                >
                  {tx({ EN: "The Definitive Verdict · 総合評価", JP: "結論 · THE VERDICT" })}
                </span>
                <p
                  className="mt-1 font-serif-jp text-ink font-bold leading-relaxed text-[15px] sm:text-[17px]"
                >
                  {tx({
                    EN: "J-Gate is the only option that combines a physical base, resident Japanese expertise, hands-on operational support, and direct hiring — at a cost-justifiable investment level.",
                    JP: "J-Gateは、専用拠点・常駐日本語専門家・実務オペレーション・直接採用支援をワンストップで兼ね備え、かつ投資対効果が圧倒的に高い唯一の選択肢です。",
                  })}
                </p>
              </div>
              <Link
                href="/pricing"
                className="btn-shine shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-crimson px-5 py-2.5 font-inter text-[13px] font-semibold text-white shadow-md hover:bg-crimson-deep transition-all"
              >
                {tx({ EN: "View Plans", JP: "料金を見る" })}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
