"use client";

import { Check, X, TriangleAlert, CircleDot } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import { useI18n } from "@/lib/i18n";
import type { ReactNode } from "react";

/* ============================================================
   ComparisonTable — J-Gate vs Alternatives (premium editorial)
   5 columns × 8 rows, J-Gate highlighted column with crimson
   border + ★ RECOMMENDED badge. Horizontal scroll on mobile.
   ============================================================ */

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
    jgate: { EN: "Mid-size, SMEs, Startups & Regional Banks", JP: "中堅・中小・スタートアップ・地方銀" },
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
    jgate: { EN: "Fully supported", JP: "完全対応" },
    consult: { EN: "High cost", JP: "高コスト" },
    cowork: { EN: "None", JP: "なし" },
    publicOrg: { EN: "Limited", JP: "限定" },
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
    label: { EN: "Network", JP: "ネットワーク" },
    jgate: { EN: "T-Hub, IIT Hyderabad, JETRO, Woxsen", JP: "T-Hub・IITハイデラバード・JETRO・Woxsen" },
    consult: { EN: "Govt agencies & large firms", JP: "政府機関・大企業" },
    cowork: { EN: "General users", JP: "一般利用者" },
    publicOrg: { EN: "Govt agencies", JP: "政府機関" },
    jgateType: "text",
    consultType: "text",
    coworkType: "text",
    publicType: "text",
  },
];

const LEGEND: { color: string; label: { EN: string; JP: string } }[] = [
  { color: "bg-success", label: { EN: "Fully Available", JP: "完全対応" } },
  { color: "bg-crimson", label: { EN: "Not Available", JP: "非対応" } },
  { color: "bg-saffron", label: { EN: "Partial", JP: "一部対応" } },
  { color: "bg-sky-500", label: { EN: "Optimal", JP: "最適" } },
];

function IndicatorIcon({ type }: { type: Indicator }) {
  if (type === "text") return null;
  const map: Record<
    Exclude<Indicator, "text">,
    { icon: ReactNode; ring: string; text: string }
  > = {
    check: {
      icon: <Check className="h-3 w-3" strokeWidth={3} />,
      ring: "bg-success/15",
      text: "text-success",
    },
    cross: {
      icon: <X className="h-3 w-3" strokeWidth={3} />,
      ring: "bg-crimson/12",
      text: "text-crimson",
    },
    warn: {
      icon: <TriangleAlert className="h-3 w-3" strokeWidth={2.5} />,
      ring: "bg-saffron/15",
      text: "text-saffron",
    },
    optimal: {
      icon: <CircleDot className="h-3.5 w-3.5" strokeWidth={2.5} />,
      ring: "bg-sky-500/15",
      text: "text-sky-600",
    },
  };
  const cfg = map[type];
  return (
    <span
      className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${cfg.ring} ${cfg.text}`}
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
      className={`flex items-start gap-2 px-4 py-3.5 font-inter text-[12.5px] leading-snug ${
        highlight ? "text-ink" : "text-slate"
      }`}
    >
      {type !== "text" && <IndicatorIcon type={type} />}
      <span className={highlight ? "font-semibold" : ""}>{text}</span>
    </div>
  );
}

export function ComparisonTable() {
  const { tx } = useI18n();

  return (
    <section
      id="why-comparison"
      className="section-pad bg-ivory"
      aria-label="J-Gate side-by-side comparison"
    >
      <div className="container-jg">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>SIDE-BY-SIDE COMPARISON</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
              style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.5rem)" }}
            >
              J-Gate vs The Alternatives
            </h2>
            <p
              className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-slate"
              style={{ fontSize: "clamp(0.875rem, 1.4vw, 1rem)" }}
            >
              A direct comparison across the four paths Japanese enterprises
              consider when entering India — cost, support, network, and overall
              value.
            </p>
          </div>
        </Reveal>

        {/* Legend */}
        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LEGEND.map((l) => (
              <span
                key={l.label.EN}
                className="inline-flex items-center gap-2 font-inter text-[11px] text-slate"
                style={{ letterSpacing: "0.05em" }}
              >
                <span className={`inline-block h-2.5 w-2.5 rounded-full ${l.color}`} />
                {tx(l.label)}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Table — horizontal scroll on mobile */}
        <Reveal delay={120}>
          <div
            className="mt-8 overflow-x-auto pb-3"
            style={{ scrollbarWidth: "thin" }}
          >
            <div className="min-w-[880px] overflow-hidden rounded-xl border border-slate/15 bg-pearl shadow-card">
              {/* Header row */}
              <div className="grid grid-cols-[170px_minmax(190px,1.15fr)_1fr_1fr_1fr]">
                <div className="border-b border-slate/10 bg-ivory-warm px-4 py-4">
                  <span
                    className="font-inter text-[10px] font-semibold uppercase text-slate"
                    style={{ letterSpacing: "0.14em" }}
                  >
                    {tx({ EN: "Criteria", JP: "比較項目" })}
                  </span>
                </div>
                {/* J-Gate highlighted column header */}
                <div className="relative border-b border-crimson/30 bg-crimson px-4 py-4 text-white">
                  <span
                    className="absolute right-3 top-3 rounded-full bg-white/15 px-2 py-0.5 font-inter text-[9px] font-bold uppercase text-saffron-light"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    ★ Recommended
                  </span>
                  <span className="font-serif-jp text-[15px] font-bold tracking-tight">
                    J-Gate
                  </span>
                  <p className="mt-0.5 font-inter text-[10px] text-white/70">
                    ジェーゲート
                  </p>
                </div>
                <div className="border-b border-slate/10 bg-ivory-warm px-4 py-4">
                  <span className="font-inter text-[12px] font-semibold text-ink">
                    {tx({ EN: "Major Consulting", JP: "大手コンサル" })}
                  </span>
                </div>
                <div className="border-b border-slate/10 bg-ivory-warm px-4 py-4">
                  <span className="font-inter text-[12px] font-semibold text-ink">
                    {tx({ EN: "Local Coworking", JP: "現地コワーキング" })}
                  </span>
                </div>
                <div className="border-b border-slate/10 bg-ivory-warm px-4 py-4">
                  <span className="font-inter text-[12px] font-semibold text-ink">
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
                    className="grid grid-cols-[170px_minmax(190px,1.15fr)_1fr_1fr_1fr] border-t border-slate/8"
                  >
                    {/* Criteria label */}
                    <div
                      className={`px-4 py-3.5 ${
                        zebra ? "bg-ivory-warm/60" : "bg-pearl"
                      }`}
                    >
                      <span className="font-inter text-[12px] font-semibold text-ink">
                        {tx(row.label)}
                      </span>
                    </div>
                    {/* J-Gate highlighted cell — left/right crimson border */}
                    <div
                      className={`relative border-x-2 border-crimson ${
                        zebra ? "bg-crimson/[0.04]" : "bg-crimson/[0.025]"
                      }`}
                    >
                      <Cell
                        text={tx(row.jgate)}
                        type={row.jgateType}
                        highlight
                      />
                    </div>
                    <div className={zebra ? "bg-ivory-warm/60" : "bg-pearl"}>
                      <Cell text={tx(row.consult)} type={row.consultType} />
                    </div>
                    <div className={zebra ? "bg-ivory-warm/60" : "bg-pearl"}>
                      <Cell text={tx(row.cowork)} type={row.coworkType} />
                    </div>
                    <div className={zebra ? "bg-ivory-warm/60" : "bg-pearl"}>
                      <Cell text={tx(row.publicOrg)} type={row.publicType} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Verdict banner */}
        <Reveal delay={160}>
          <div className="mx-auto mt-8 max-w-4xl rounded-lg border-l-4 border-crimson bg-pearl px-6 py-5 shadow-card">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <span
                className="font-inter text-[10px] font-bold uppercase text-crimson"
                style={{ letterSpacing: "0.18em" }}
              >
                {tx({ EN: "Verdict", JP: "結論" })}
              </span>
              <p
                className="font-serif-jp text-ink leading-relaxed"
                style={{ fontSize: "clamp(0.875rem, 1.4vw, 1rem)" }}
              >
                {tx({
                  EN: "J-Gate is the only option that combines a physical base, resident Japanese expertise, hands-on operational support, and direct hiring — at a cost-justifiable investment level.",
                  JP: "J-Gateは、物理拠点・常駐日本語専門家・実務サポート・直接採用をすべて兼ね備え、かつ投資対効果が妥当な唯一の選択肢です。",
                })}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
