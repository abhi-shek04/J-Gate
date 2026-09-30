"use client";

import React, { useState } from "react";
import { Reveal, SectionHeading, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import {
  Check,
  ArrowRight,
  AlertCircle,
  Banknote,
  Receipt,
  ShieldCheck,
  Users,
  Compass,
  Briefcase,
  Building2,
  Sparkles,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Bilingual = { EN: string; JP: string };

type Plan = {
  id: "satellite" | "standard" | "advance";
  icon: typeof Compass;
  jpName: string;
  enName: string;
  tierSubtitle: Bilingual;
  tagline: Bilingual;
  priceINRMonthly: number;
  priceINRAnnual: number;
  priceJPYMonthly: number;
  priceJPYAnnual: number;
  capacity: Bilingual;
  capacityCategory: "1-2" | "3-4" | "enterprise";
  accentBorder: string;
  accentColor: string;
  specs: {
    term: Bilingual;
    access: Bilingual;
    support: Bilingual;
  };
  target: Bilingual;
  features: {
    title: Bilingual;
    desc: Bilingual;
  }[];
};

const PLANS: Plan[] = [
  {
    id: "satellite",
    icon: Compass,
    jpName: "サテライトプラン",
    enName: "Starter Plan",
    tierSubtitle: {
      EN: "Flexible Office Base",
      JP: "低コスト進出・サテライト拠点",
    },
    tagline: {
      EN: "A cost-effective base in Hyderabad for visiting executives & remote directors",
      JP: "ハイデラバードIT特区に低コストで拠点を確保。出張・遠隔ディレクター向け",
    },
    priceINRMonthly: 15000,
    priceINRAnnual: 12750, // 15% discount
    priceJPYMonthly: 27000,
    priceJPYAnnual: 22950,
    capacity: { EN: "Up to 2 Members", JP: "最大2名" },
    capacityCategory: "1-2",
    accentBorder: "border-t-slate-400",
    accentColor: "slate",
    specs: {
      term: { EN: "Flexible / Monthly", JP: "月単位・柔軟契約" },
      access: { EN: "24/7 Keycard", JP: "24時間入退室管理" },
      support: { EN: "Reception & Community Access", JP: "受付案内・コミュニティ" },
    },
    target: {
      EN: "Existing India entities, solo consultants & visiting remote directors needing a physical executive presence in Hyderabad.",
      JP: "既にインド法人をお持ちの企業や、遠隔役員の出張・営業展開、ハイデラバード公式住所の確保に最適。",
    },
    features: [
      {
        title: { EN: "Workspace Access", JP: "ワークスペース利用" },
        desc: { EN: "Unlimited desk access for up to 2 team members", JP: "最大2名までの執務デスク無制限利用" },
      },
      {
        title: { EN: "1 Gbps High-Speed Fiber", JP: "1 Gbps光回線・UPS電源" },
        desc: { EN: "High-speed internet with dual-provider backup during Japan business hours", JP: "東京業務時間にも対応する二重化光回線" },
      },
      {
        title: { EN: "Meeting Room Credits", JP: "会議室・プレゼン設備" },
        desc: { EN: "Soundproof video call booths & client meeting rooms", JP: "オンライン商談ブースおよび会議室利用枠" },
      },
      {
        title: { EN: "Official Registered Address", JP: "公式登記住所利用" },
        desc: { EN: "Hyderabad commercial address for MCA/GST", JP: "ハイデラバード（Hyderabad）公式住所" },
      },
      {
        title: { EN: "Japan-India Community Access", JP: "日印コミュニティ参加" },
        desc: { EN: "Invitations to Japan-India networking events and discussions", JP: "日印ネットワーキング・交流会への定期招待" },
      },
    ],
  },
  {
    id: "standard",
    icon: Briefcase,
    jpName: "スタンダードプラン",
    enName: "Standard Plan",
    tierSubtitle: {
      EN: "Resident Japan Desk Hub",
      JP: "常駐ジャパンデスク付き主力プラン",
    },
    tagline: {
      EN: "Full resident Japan Desk & daily bilingual 'Yorozu' consultation for growing teams",
      JP: "常駐ジャパンデスクによる日々の「よろず相談」付き。本格的な事業展開向け",
    },
    priceINRMonthly: 50000,
    priceINRAnnual: 42500, // 15% discount
    priceJPYMonthly: 90000,
    priceJPYAnnual: 76500,
    capacity: { EN: "Up to 4 Members", JP: "最大4名" },
    capacityCategory: "3-4",
    accentBorder: "border-t-crimson",
    accentColor: "crimson",
    specs: {
      term: { EN: "Flexible / Monthly", JP: "月単位・柔軟契約" },
      access: { EN: "24/7 Keycard", JP: "24時間入退室管理" },
      support: { EN: "Daily In-Person Desk", JP: "常駐日本人ディレクター" },
    },
    target: {
      EN: "Japanese SMEs, high-growth startups & corporate investment teams entering the Indian market with local staff.",
      JP: "インド市場へ本格参入する日本の中小企業・急成長スタートアップ、現地コアチームの立ち上げに最適。",
    },
    features: [
      {
        title: { EN: "Expanded Team Facilities", JP: "サテライト全設備完備" },
        desc: { EN: "Full workspace amenities with expanded seating for up to 4 members", JP: "最大4名まで利用可能な拡張ワークスペース" },
      },
      {
        title: { EN: "Daily Japanese Business Advisory", JP: "日々の対面「よろず相談」" },
        desc: { EN: "Direct in-person strategic guidance with resident Japanese directors", JP: "常駐日本人ディレクターによる対面ビジネス相談" },
      },
      {
        title: { EN: "Monthly Regulatory Sessions", JP: "月例 法務・税務勉強会" },
        desc: { EN: "Workshops covering RBI/FDI compliance, GST & labor laws", JP: "月例インド進出・法務規制勉強会への優先参加" },
      },
      {
        title: { EN: "Verified Professional Introductions", JP: "厳選現地専門家の紹介" },
        desc: { EN: "Direct introductions to trusted local tax, audit & legal practitioners", JP: "信頼できる現地会計事務所・弁護士の直接紹介" },
      },
      {
        title: { EN: "Priority Meeting Room Booking", JP: "ボードルーム優先予約" },
        desc: { EN: "Generous booking allocation for key client and investor meetings", JP: "重要商談・来客対応用の会議室優先予約枠" },
      },
    ],
  },
  {
    id: "advance",
    icon: Building2,
    jpName: "アドバンスプラン",
    enName: "Advanced Plan",
    tierSubtitle: {
      EN: "Hands-on Market Entry & Consulting",
      JP: "実践コンサル・商談同席付きプラン",
    },
    tagline: {
      EN: "Hands-on entry consulting & monthly business meeting support by Indobox leadership",
      JP: "Indobox実践コンサルティング＆月1回の現地重要商談同席支援付き",
    },
    priceINRMonthly: 120000,
    priceINRAnnual: 102000, // 15% discount
    priceJPYMonthly: 216000,
    priceJPYAnnual: 183600,
    capacity: { EN: "Enterprise / Custom", JP: "企業・自治体向け" },
    capacityCategory: "enterprise",
    accentBorder: "border-t-saffron",
    accentColor: "saffron",
    specs: {
      term: { EN: "Custom / Annual", JP: "年間または個別設計" },
      access: { EN: "24/7 Keycard", JP: "24時間入退室管理" },
      support: { EN: "Hands-on Partner + VIP", JP: "実践コンサル＋VIP窓口" },
    },
    target: {
      EN: "Large corporations, regional banks & governmental delegations requiring hands-on partner evaluation and executive meeting support.",
      JP: "大手企業・地方銀行・自治体の本格的なインド事業推進、提携先開拓、重要商談の同行支援向け。",
    },
    features: [
      {
        title: { EN: "Custom Office Layout", JP: "個別最適化デスク仕様" },
        desc: { EN: "Everything in Standard Plan with customized seating & team branding", JP: "スタンダード全特典＋個別レイアウト最適化" },
      },
      {
        title: { EN: "Hands-on Market Entry Consulting", JP: "初期実践ハンズオンコンサル" },
        desc: { EN: "Direct market entry strategy planning with senior Indobox specialists", JP: "Indobox専任チームによる参入戦略ハンズオン" },
      },
      {
        title: { EN: "Meeting Support (1×/mo)", JP: "現地重要商談への同席" },
        desc: { EN: "Director accompaniment on strategic negotiations and government visits", JP: "現地重要商談・政府機関訪問への月1回同席支援" },
      },
      {
        title: { EN: "T-Hub & University Partnerships", JP: "T-Hub・大学連携パイプライン" },
        desc: { EN: "Priority matchmaking with T-Hub incubators & Woxsen University", JP: "T-HubおよびWoxsen大学との産学連携パイプライン" },
      },
      {
        title: { EN: "Custom Partner Due Diligence", JP: "詳細デューデリジェンス" },
        desc: { EN: "In-depth background checks and operational risk assessments", JP: "提携候補先の詳細調査およびリスク検証支援" },
      },
    ],
  },
];

const MATRIX_FEATURES = [
  {
    category: { EN: "1. Workspace & Physical Infrastructure", JP: "1. ワークスペース・利用環境" },
    items: [
      {
        name: { EN: "Hyderabad Location", JP: "ハイデラバード（Hyderabad）拠点" },
        satellite: "✓ Included",
        standard: "✓ Included",
        advance: "✓ Included",
      },
      {
        name: { EN: "Team Capacity", JP: "利用可能人数" },
        satellite: "Up to 2 people",
        standard: "Up to 4 people",
        advance: "Custom Enterprise",
      },
      {
        name: { EN: "24/7 Keycard Security", JP: "24時間入退室管理・セキュリティ" },
        satellite: "✓ Included",
        standard: "✓ Included",
        advance: "✓ Included",
      },
      {
        name: { EN: "1 Gbps High-Speed Fiber & UPS Backup", JP: "1 Gbps光回線・無停電電源" },
        satellite: "✓ Included",
        standard: "✓ Included",
        advance: "✓ Included",
      },
      {
        name: { EN: "Meeting Room & Video Booth Credits", JP: "会議室・オンライン商談ブース利用" },
        satellite: "Basic Allocation",
        standard: "Priority Credits",
        advance: "Dedicated Booking",
      },
      {
        name: { EN: "Cafeteria & Refreshment Amenities", JP: "カフェテリア・リフレッシュラウンジ" },
        satellite: "✓ Included",
        standard: "✓ Included",
        advance: "✓ Included",
      },
    ],
  },
  {
    category: { EN: "2. On-Site Japanese Advisory Support", JP: "2. ジャパンデスク・常駐相談支援" },
    items: [
      {
        name: { EN: "Bilingual Concierge & Reception", JP: "バイリンガル総合受付・現地案内" },
        satellite: "✓ Included",
        standard: "✓ Included",
        advance: "✓ Included",
      },
      {
        name: { EN: "Daily Japanese Business Advisory (何でも相談)", JP: "日々の対面ビジネス「よろず相談」" },
        satellite: "—",
        standard: "✓ Daily Unlimited",
        advance: "✓ Daily Unlimited",
      },
      {
        name: { EN: "Monthly Regulatory & Tax Market Briefings & Seminars", JP: "月例インド進出・法務税務勉強会" },
        satellite: "—",
        standard: "✓ Included",
        advance: "✓ Included",
      },
      {
        name: { EN: "Verified Accounting & Legal Introductions", JP: "信頼できる現地専門家（会計・法務）紹介" },
        satellite: "On Request",
        standard: "✓ Included",
        advance: "✓ Priority Introduction",
      },
    ],
  },
  {
    category: { EN: "3. Market Entry & Business Development", JP: "3. 実践コンサル・アライアンス支援" },
    items: [
      {
        name: { EN: "Indobox Hands-on Market Entry Consulting", JP: "Indoboxによる初期実践コンサル" },
        satellite: "—",
        standard: "—",
        advance: "✓ Included",
      },
      {
        name: { EN: "Business Meeting Support (商談同席)", JP: "重要商談・現地企業訪問への同席支援" },
        satellite: "—",
        standard: "—",
        advance: "1× / Month Included",
      },
      {
        name: { EN: "Incubator & University Access (T-Hub, Woxsen)", JP: "T-Hub・大学連携パイプライン" },
        satellite: "Standard",
        standard: "Priority",
        advance: "Dedicated VIP",
      },
      {
        name: { EN: "Corporate Registration (MCA/GST) Support", JP: "法人登記（MCA・GST）支援窓口" },
        satellite: "Available",
        standard: "✓ Included",
        advance: "Priority Liaison",
      },
    ],
  },
];

export function PricingSection({ id, hideHero }: { id?: string; hideHero?: boolean }) {
  const { tx, lang } = useI18n();
  const [currency, setCurrency] = useState<"INR" | "JPY">("INR");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [selectedFilter, setSelectedFilter] = useState<"all" | "1-2" | "3-4" | "enterprise">("all");
  const [showMatrix, setShowMatrix] = useState(false);

  const isAnnual = billingCycle === "annual";

  return (
    <div id={id} className="bg-ivory dark:bg-[#0b111e] transition-colors scroll-mt-20">
      {!hideHero && (
        <PageHero
          eyebrowKey="pricing.eyebrow"
          layout="split"
          titleNode={
            <>
              {tx({ EN: "Membership Fee Plans ", JP: "ハイデラバード拠点 " })}
              <br className="hidden sm:inline" />
              {tx({ EN: "— Hyderabad Operating Hub", JP: "メンバーシップ料金プラン" })}
            </>
          }
          subtitleNode={tx({
            EN: "Designed as a cost-effective solution — providing Japanese enterprises with a dedicated workspace and resident advisory in Hyderabad.",
            JP: "日系企業に最適化された戦略的拠点モデル — ハイデラバードでの専用執務環境と日本人常駐サポートを提供。",
          })}
          tags={[
            { EN: "Flexible Desk & Suite Plans", JP: "柔軟なデスク・個室プラン" },
            { EN: "Transparent Monthly Billing", JP: "明朗な月額費用" },
            { EN: "Enterprise Infrastructure Included", JP: "完全インフラ込み" },
          ]}
        />
      )}

      {/* ───────────────────────────────────────────────────────────
          2. Three Executive Plan Cards
         ─────────────────────────────────────────────────────────── */}
      <section className="py-6 sm:py-8 lg:py-10 bg-ivory-warm dark:bg-[#0f1728] relative overflow-hidden transition-colors">
        {/* Ambient subtle warm lighting */}
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            background:
              "radial-gradient(ellipse at 50% 8%, rgba(232,160,26,0.06) 0%, transparent 60%), radial-gradient(ellipse at 85% 85%, rgba(188,26,44,0.04) 0%, transparent 50%)",
          }}
        />

        <div className="container-jg relative z-10">
          <Reveal>
            <SectionHeading
              icon={<Briefcase className="h-3.5 w-3.5 text-crimson dark:text-rose-400" />}
              eyebrow={tx({ EN: "Membership Plans", JP: "透明で明瞭なメンバーシップ体系" })}
              title={tx({
                EN: "Choose Your Membership Plan",
                JP: "進出段階に合わせて選べる3つのプラン",
              })}
              subtitle={tx({
                EN: "All tiers include full Hyderabad workspace infrastructure, 1 Gbps connectivity, and on-site Japanese leadership guidance.",
                JP: "すべてのプランにハイデラバードオフィスの利用、1 Gbps光回線、常駐日本人ディレクターによるサポートが含まれています。",
              })}
            />

            {/* Premium Currency Switcher Bar */}
            <div className="mt-6 mb-8 flex items-center justify-center">
              <div className="inline-flex items-center gap-1.5 bg-white/90 dark:bg-[#101a2c] p-1.5 rounded-full border border-slate-200/90 dark:border-white/14 shadow-sm backdrop-blur-md">
                <span className="px-3 text-[11px] font-bold font-mono tracking-wider text-slate-600 dark:text-slate-300 uppercase">
                  {tx({ EN: "Currency:", JP: "表示通貨:" })}
                </span>
                <button
                  type="button"
                  onClick={() => setCurrency("INR")}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-inter font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    currency === "INR"
                      ? "bg-crimson text-white shadow-md shadow-crimson/25 scale-[1.02]"
                      : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                  }`}
                >
                  <span>🇮🇳</span> INR (₹)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("JPY")}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-inter font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    currency === "JPY"
                      ? "bg-crimson text-white shadow-md shadow-crimson/25 scale-[1.02]"
                      : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                  }`}
                >
                  <span>🇯🇵</span> JPY (¥)
                </button>
              </div>
            </div>
          </Reveal>

          {/* Grid of 3 Balanced Cards — Compact, Premium, High-End Presentation */}
          <div className="grid gap-4 sm:gap-5 lg:gap-5 lg:grid-cols-3 items-stretch">
            {PLANS.map((plan, i) => {
              const Icon = plan.icon;
              const displayINR = isAnnual ? plan.priceINRAnnual : plan.priceINRMonthly;
              const displayJPY = isAnnual ? plan.priceJPYAnnual : plan.priceJPYMonthly;
              const isSelected = selectedFilter === plan.capacityCategory;
              const isFeatured = plan.id === "standard";

              return (
                <Reveal key={plan.id} delay={i * 80} variant="up">
                  <div
                    className={cn(
                      "luxury-light-card card-sheen group relative flex h-full flex-col justify-between rounded-2xl bg-white dark:bg-[#101a2c] border transition-all duration-300 p-4 sm:p-5 sm:p-6",
                      isFeatured
                        ? "border-crimson dark:border-rose-400/60 shadow-[0_16px_40px_-10px_rgba(188,26,44,0.22)] dark:shadow-[0_20px_50px_-10px_rgba(188,26,44,0.45)] ring-2 ring-crimson/40 lg:-translate-y-2"
                        : "border-slate-200/90 dark:border-white/16 shadow-card dark:shadow-2xl hover:border-slate-300 dark:hover:border-saffron/40 hover:-translate-y-1",
                      isSelected ? "ring-2 ring-saffron/80" : ""
                    )}
                  >
                    {/* Top Content Area */}
                    <div>
                      {/* Header Row: Icon + Title + Capacity Badge */}
                      <div className="flex items-start justify-between gap-2.5 pb-3 border-b border-slate-100 dark:border-white/8">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={cn(
                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-colors",
                              isFeatured
                                ? "bg-crimson/10 border-crimson/30 text-crimson dark:text-rose-400"
                                : "bg-slate-50 dark:bg-white/5 border-slate-200/80 dark:border-white/10 text-ink dark:text-white"
                            )}
                          >
                            <Icon className={cn("h-4.5 w-4.5", isFeatured ? "text-crimson dark:text-rose-400" : "text-slate-700 dark:text-slate-300")} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-serif-jp text-[16px] sm:text-[17px] font-bold text-ink dark:text-white leading-tight">
                                {plan.enName}
                              </h3>
                            </div>
                            {lang === "JP" && (
                              <span className="text-[11px] sm:text-[11.5px] font-medium text-slate-500 dark:text-slate-400 font-sans-jp">
                                {plan.jpName}
                              </span>
                            )}
                          </div>
                        </div>

                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100/90 dark:bg-white/8 px-2.5 py-0.5 font-inter text-[10px] sm:text-[10.5px] font-bold text-slate-700 dark:text-slate-300 shrink-0 border border-slate-200/60 dark:border-white/10">
                          <Users className="h-2.5 w-2.5 text-crimson dark:text-rose-400" />
                          {tx(plan.capacity)}
                        </span>
                      </div>

                      {/* Pricing Display */}
                      <div className="mt-3 rounded-xl bg-slate-50/90 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/8 p-3">
                        <div className="flex items-baseline justify-between gap-1">
                          <div className="flex items-baseline gap-1">
                            <span className="font-inter text-2xl sm:text-[28px] font-extrabold text-ink dark:text-white tracking-tight">
                              {currency === "INR"
                                ? `₹${displayINR.toLocaleString()}`
                                : `¥${displayJPY.toLocaleString()}`}
                            </span>
                            <span className="font-inter text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                              {currency === "INR" ? "/mo" : lang === "JP" ? "/月" : "/mo"}
                            </span>
                          </div>

                          {isAnnual ? (
                            <span className="rounded-md bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300/50 dark:border-emerald-700/40 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold px-1.5 py-0.5">
                              -15% OFF
                            </span>
                          ) : (
                            <span className="text-[10.5px] font-inter text-slate-400 dark:text-slate-500 font-medium">
                              {tx({ EN: "+18% GST", JP: "税別" })}
                            </span>
                          )}
                        </div>

                        <div className="mt-1 flex items-center justify-between text-[10.5px] font-inter text-slate-500 dark:text-slate-400">
                          <span>
                            {currency === "INR"
                              ? `Approx. ¥${displayJPY.toLocaleString()}${lang === "JP" ? "/月" : "/mo"}`
                              : `Base ₹${displayINR.toLocaleString()} INR`}
                          </span>
                          {isAnnual && (
                            <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                              {tx({ EN: "Save ~2 mos", JP: "約2ヶ月分無料" })}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Target Audience Summary Callout */}
                      <p className="mt-2.5 font-inter text-[11px] sm:text-[11.5px] text-slate-600 dark:text-slate-300 leading-snug">
                        <strong className="text-ink dark:text-slate-100 font-semibold">{tx({ EN: "Best for: ", JP: "対象: " })}</strong>
                        {tx(plan.target)}
                      </p>

                      {/* Specs Micro-Pills */}
                      <div className="mt-2.5 flex items-center justify-between gap-1 rounded-lg bg-slate-100/60 dark:bg-white/[0.04] p-1.5 text-center text-[10px] font-inter border border-slate-200/50 dark:border-white/8 text-slate-600 dark:text-slate-300">
                        <span className="truncate flex-1 font-medium">{tx(plan.specs.term)}</span>
                        <span className="text-slate-300 dark:text-white/20">·</span>
                        <span className="truncate flex-1 font-medium">{tx(plan.specs.access)}</span>
                        <span className="text-slate-300 dark:text-white/20">·</span>
                        <span className="truncate flex-1 font-medium text-crimson dark:text-rose-400 font-semibold">{tx(plan.specs.support)}</span>
                      </div>

                      {/* Compact Features Checklist */}
                      <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-white/8">
                        <ul className="space-y-1.5 sm:space-y-2">
                          {plan.features.map((feat, fi) => (
                            <li key={fi} className="flex items-start gap-2 text-[11.5px] sm:text-[12px] font-inter text-slate-700 dark:text-slate-300 leading-tight">
                              <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-700/40">
                                <Check className="h-2 w-2 stroke-[3]" />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="font-semibold text-slate-900 dark:text-slate-100 mr-1">
                                  {tx(feat.title)}
                                </span>
                                <span className="text-slate-500 dark:text-slate-400 hidden sm:inline">
                                  — {tx(feat.desc)}
                                </span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Action CTA */}
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/8">
                      <Link
                        href={`/contact?plan=${plan.id}`}
                        className={cn(
                          "group/btn relative w-full inline-flex items-center justify-center gap-1.5 rounded-xl py-2.5 font-inter text-[12.5px] sm:text-[13px] font-semibold transition-all duration-300",
                          isFeatured
                            ? "bg-gradient-to-r from-crimson to-crimson-deep text-white shadow-md shadow-crimson/25 hover:shadow-lg hover:shadow-crimson/40 hover:-translate-y-0.5"
                            : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-crimson dark:hover:bg-crimson dark:hover:text-white hover:-translate-y-0.5 shadow-xs"
                        )}
                      >
                        <span>{tx({ EN: `Select ${plan.enName}`, JP: `${plan.jpName}を申し込む` })}</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                      <p className="mt-1.5 text-center font-inter text-[10px] text-slate-400 dark:text-slate-500">
                        {tx({ EN: "Free consultation · Fast setup", JP: "初回相談無料 · 最短即日利用可" })}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Detailed Matrix Accordion Toggle */}
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowMatrix(!showMatrix)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-[#101a2c] px-6 py-3 font-inter text-[13px] font-semibold text-ink dark:text-white shadow-sm hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/20 hover:shadow transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="h-4 w-4 text-saffron" />
              <span>
                {showMatrix
                  ? tx({ EN: "Hide Detailed Feature Matrix", JP: "詳細比較表を閉じる" })
                  : tx({ EN: "Compare All 15 Features Side-by-Side ↓", JP: "全プラン詳細比較表を見る ↓" })}
              </span>
              {showMatrix ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>

          {/* Expandable Feature Matrix Table */}
          {showMatrix && (
            <div className="mt-8 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-5 sm:p-8 shadow-xl overflow-hidden animate-in fade-in duration-300">
              <div className="border-b border-slate-200 dark:border-white/10 pb-4 mb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h3 className="font-serif-jp text-xl font-bold text-ink dark:text-white">
                    {tx({ EN: "Full Feature Comparison Table", JP: "全プラン項目別 詳細比較表" })}
                  </h3>
                  <p className="font-inter text-[12.5px] text-slate-500 dark:text-slate-400">
                    {tx({
                      EN: "Clear features across physical facilities, resident Japan Desk advisory, and strategic GTM consulting.",
                      JP: "オフィス設備、常駐相談、実践コンサルティング支援の項目別詳細。",
                    })}
                  </p>
                </div>
                <span className="text-[11.5px] font-inter text-slate-400 dark:text-slate-400 bg-slate-50 dark:bg-white/5 px-3 py-1 rounded-md border border-slate-200/60 dark:border-white/10">
                  {tx({ EN: "Monthly INR (excl. 18% GST)", JP: "※料金は税抜月額INR表示" })}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[650px]">
                  <thead>
                    <tr className="border-b-2 border-slate-200 dark:border-white/10 text-[12.5px] font-inter uppercase text-slate-500 dark:text-slate-400">
                      <th className="py-3 px-4 w-2/5 font-bold">{tx({ EN: "Feature / Service", JP: "項目・サポート内容" })}</th>
                      <th className="py-3 px-4 text-center w-1/5 bg-slate-50/70 dark:bg-white/5 rounded-t-lg font-bold text-slate-700 dark:text-slate-200">
                        Satellite
                      </th>
                      <th className="py-3 px-4 text-center w-1/5 bg-slate-50/70 dark:bg-white/5 rounded-t-lg font-bold text-slate-700 dark:text-slate-200">
                        Standard
                      </th>
                      <th className="py-3 px-4 text-center w-1/5 bg-slate-50/70 dark:bg-white/5 rounded-t-lg font-bold text-slate-700 dark:text-slate-200">
                        Advance
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {MATRIX_FEATURES.map((group, gi) => (
                      <React.Fragment key={`grp-${gi}`}>
                        <tr className="bg-slate-100/80 dark:bg-white/5">
                          <td
                            colSpan={4}
                            className="py-2.5 px-4 font-inter text-[11.5px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                          >
                            {tx(group.category)}
                          </td>
                        </tr>
                        {group.items.map((item, ii) => (
                          <tr
                            key={`row-${gi}-${ii}`}
                            className="border-b border-slate-100 dark:border-white/10 hover:bg-slate-50/70 dark:hover:bg-white/5 transition-colors text-[13px] font-inter"
                          >
                            <td className="py-3 px-4 text-slate-800 dark:text-slate-200 font-medium">{tx(item.name)}</td>
                            <td className="py-3 px-4 text-center text-slate-600 dark:text-slate-400 bg-slate-50/20 dark:bg-transparent">
                              {item.satellite}
                            </td>
                            <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-200 bg-slate-50/20 dark:bg-transparent font-semibold">
                              {item.standard}
                            </td>
                            <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-200 bg-slate-50/20 dark:bg-transparent font-semibold">
                              {item.advance}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. Billing Notes & Transparent Guarantees
         ─────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-ivory-warm dark:bg-[#080d17] border-t border-slate-200/70 dark:border-white/10 relative overflow-hidden">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
                <span className="inline-flex items-center gap-2 rounded-full border border-crimson/25 dark:border-rose-400/30 bg-crimson/8 dark:bg-rose-950/40 px-3.5 py-1 font-inter text-[10.5px] font-bold uppercase tracking-wider text-crimson dark:text-rose-400">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {tx({ EN: "Transparent Terms", JP: "ご契約前の確認事項" })}
                </span>
                <h3 className="mt-2.5 font-serif-jp text-xl sm:text-2xl lg:text-3xl font-bold text-ink dark:text-white">
                  {tx({ EN: "Billing Terms & Invoicing Policies", JP: "請求・決済および契約条件" })}
                </h3>
                <p className="mt-1.5 font-inter text-[13px] text-slate-600 dark:text-slate-300">
                  {tx({
                    EN: "Clear, predictable billing with zero hidden costs or surprises.",
                    JP: "不透明な追加費用を完全に排除した明朗会計システム。",
                  })}
                </p>
              </div>

              <div className="grid gap-4 sm:gap-5 sm:grid-cols-3">
                {[
                  {
                    icon: Receipt,
                    title: { EN: "Base Operating Fees", JP: "基本料金のみ" },
                    badge: { EN: "Predictable Cost", JP: "明朗会計" },
                    desc: {
                      EN: "Amounts reflect predictable monthly office membership. Entity incorporation and recruitment services are priced separately based on your requirements.",
                      JP: "記載価格は月額基本料金です。法人設立手続きや人材紹介の手数料は実費・別途請求となります。",
                    },
                  },
                  {
                    icon: Banknote,
                    title: { EN: "INR & JPY Settlement", JP: "INR / JPY決済対応" },
                    badge: { EN: "Dual Currency", JP: "日印二通貨対応" },
                    desc: {
                      EN: "Invoicing is denominated in INR. Payments in Japanese Yen (JPY) by your Japan entity are fully supported using current exchange rates.",
                      JP: "請求はINR基準です。東京法人経由での日本円（JPY）決済にも対応しております（為替換算適用）。",
                    },
                  },
                  {
                    icon: ShieldCheck,
                    title: { EN: "Compliant Tax Invoices", JP: "GST（消費税）別" },
                    badge: { EN: "Full Compliance", JP: "正規インボイス" },
                    desc: {
                      EN: "All membership rates exclude 18% India GST, itemized on compliant monthly tax invoices eligible for input tax credit.",
                      JP: "すべての料金表示はインドGST（18%）別となっております。正規のTax Invoiceを発行します。",
                    },
                  },
                ].map((note, idx) => {
                  const Icon = note.icon;
                  return (
                    <Reveal key={idx} delay={idx * 80} variant="scale">
                      <div className="luxury-light-card card-sheen group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 dark:border-white/12 bg-white dark:bg-[#101a2c] p-5.5 sm:p-6 shadow-md hover:shadow-xl hover:border-crimson/35 dark:hover:border-rose-400/40 transition-all duration-300 hover:-translate-y-1">
                        <div>
                          <div className="flex items-center justify-between mb-3.5">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-crimson/10 dark:bg-rose-950/60 border border-crimson/20 dark:border-rose-400/30 text-crimson dark:text-rose-400 group-hover:scale-110 transition-transform">
                              <Icon className="h-5 w-5" />
                            </div>
                            <span className="rounded-full bg-slate-100 dark:bg-white/8 border border-slate-200/60 dark:border-white/10 px-2.5 py-0.5 font-inter text-[10px] font-bold text-slate-600 dark:text-slate-300">
                              {tx(note.badge)}
                            </span>
                          </div>
                          <h4 className="font-serif-jp text-[15px] font-bold text-ink dark:text-white group-hover:text-crimson dark:group-hover:text-rose-400 transition-colors">
                            {tx(note.title)}
                          </h4>
                          <p className="mt-2 font-inter text-[12.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                            {tx(note.desc)}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
