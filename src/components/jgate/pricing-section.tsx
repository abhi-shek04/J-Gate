"use client";

import React, { useState } from "react";
import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import {
  Check,
  ArrowRight,
  AlertCircle,
  Banknote,
  Receipt,
  TrendingDown,
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
  Zap,
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
    enName: "Satellite Plan",
    tierSubtitle: {
      EN: "Agile Operating Base",
      JP: "低コスト進出・サテライト拠点",
    },
    tagline: {
      EN: "Agile, low-overhead hub in Cyber Gateway for visiting executives & remote directors",
      JP: "サイバーゲートウェイに低コストで拠点を確保。出張・遠隔ディレクター向け",
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
      access: { EN: "24/7 Smart Keycard", JP: "24時間入退室管理" },
      support: { EN: "Concierge & Network", JP: "受付案内・コミュニティ" },
    },
    target: {
      EN: "Existing India entities, solo consultants & visiting remote directors needing a physical executive presence in Hyderabad.",
      JP: "既にインド法人をお持ちの企業や、遠隔役員の出張・営業展開、ハイデラバード公式住所の確保に最適。",
    },
    features: [
      {
        title: { EN: "Workspace Access", JP: "ワークスペース利用" },
        desc: { EN: "Unlimited executive desk usage for up to 2 team members", JP: "最大2名までの執務デスク無制限利用" },
      },
      {
        title: { EN: "1 Gbps Redundant Fiber", JP: "1Gbps光回線・UPS電源" },
        desc: { EN: "Dual-carrier enterprise internet with zero Tokyo-hours downtime", JP: "東京業務時間にも対応する二重化光回線" },
      },
      {
        title: { EN: "Meeting Room Credits", JP: "会議室・プレゼン設備" },
        desc: { EN: "Acoustically treated video booths & client meeting rooms", JP: "オンライン商談ブースおよび会議室利用枠" },
      },
      {
        title: { EN: "Official Registered Address", JP: "公式登記住所利用" },
        desc: { EN: "Cyber Gateway, Hitech City commercial address for MCA/GST", JP: "サイバーゲートウェイ（Hitech City）公式住所" },
      },
      {
        title: { EN: "Bilateral Community Access", JP: "日印コミュニティ参加" },
        desc: { EN: "Invitations to Japan-India networking mixers & roundtables", JP: "日印ネットワーキング・交流会への定期招待" },
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
      access: { EN: "24/7 Smart Keycard", JP: "24時間入退室管理" },
      support: { EN: "Daily In-Person Desk", JP: "常駐日本人ディレクター" },
    },
    target: {
      EN: "Japanese SMEs, high-growth startups & corporate venture arms entering the Indian market with local staff.",
      JP: "インド市場へ本格参入する日本の中小企業・急成長スタートアップ、現地コアチームの立ち上げに最適。",
    },
    features: [
      {
        title: { EN: "Expanded Team Facilities", JP: "サテライト全設備完備" },
        desc: { EN: "Full workspace amenities with expanded seating for up to 4 members", JP: "最大4名まで利用可能な拡張ワークスペース" },
      },
      {
        title: { EN: "Daily 'Yorozu' Consultation", JP: "日々の対面「よろず相談」" },
        desc: { EN: "Direct in-person strategic guidance with resident Japanese directors", JP: "常駐日本人ディレクターによる対面ビジネス相談" },
      },
      {
        title: { EN: "Monthly Regulatory Sessions", JP: "月例 法務・税務勉強会" },
        desc: { EN: "Workshops covering RBI/FDI compliance, GST & labor laws", JP: "月例インド進出・法務規制勉強会への優先参加" },
      },
      {
        title: { EN: "Vetted Professional Introductions", JP: "厳選現地専門家の紹介" },
        desc: { EN: "Curated referrals to trusted local tax, audit & legal practitioners", JP: "信頼できる現地会計事務所・弁護士の直接紹介" },
      },
      {
        title: { EN: "Priority Boardroom Allocation", JP: "ボードルーム優先予約" },
        desc: { EN: "Generous booking allocation for high-stakes investor & partner meetings", JP: "重要商談・来客対応用の会議室優先予約枠" },
      },
    ],
  },
  {
    id: "advance",
    icon: Building2,
    jpName: "アドバンスプラン",
    enName: "Advance Plan",
    tierSubtitle: {
      EN: "Hands-on GTM & Consulting",
      JP: "実践コンサル・商談同席付きプラン",
    },
    tagline: {
      EN: "Hands-on entry consulting & monthly business meeting accompaniment by Indobox leadership",
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
      access: { EN: "24/7 Smart Keycard", JP: "24時間入退室管理" },
      support: { EN: "Hands-on Partner + VIP", JP: "実践コンサル＋VIP窓口" },
    },
    target: {
      EN: "Large corporations, regional banks & governmental delegations requiring hands-on partner vetting and executive accompaniment.",
      JP: "大手企業・地方銀行・自治体の本格的なインド事業推進、提携先開拓、重要商談の同行支援向け。",
    },
    features: [
      {
        title: { EN: "Tailored Executive Layout", JP: "個別最適化デスク仕様" },
        desc: { EN: "Everything in Standard Plan with customized seating & team branding", JP: "スタンダード全特典＋個別レイアウト最適化" },
      },
      {
        title: { EN: "Hands-on Market Entry Consulting", JP: "初期実践ハンズオンコンサル" },
        desc: { EN: "Direct strategic roadmap design with senior Indobox specialists", JP: "Indobox専任チームによる参入戦略ハンズオン" },
      },
      {
        title: { EN: "Meeting Accompaniment (1×/mo)", JP: "現地重要商談への同席" },
        desc: { EN: "Director accompaniment on strategic negotiations and government visits", JP: "現地重要商談・政府機関訪問への月1回同席支援" },
      },
      {
        title: { EN: "T-Hub & Academic Pipeline", JP: "T-Hub・大学連携パイプライン" },
        desc: { EN: "Priority matchmaking with T-Hub incubators & Woxsen University", JP: "T-HubおよびWoxsen大学との産学連携パイプライン" },
      },
      {
        title: { EN: "Custom Partner Due Diligence", JP: "詳細デューデリジェンス" },
        desc: { EN: "In-depth candidate vetting and operational risk assessments", JP: "提携候補先の詳細調査およびリスク検証支援" },
      },
    ],
  },
];

const MATRIX_FEATURES = [
  {
    category: { EN: "1. Workspace & Physical Infrastructure", JP: "1. ワークスペース・利用環境" },
    items: [
      {
        name: { EN: "Cyber Gateway, Hitech City Location", JP: "サイバーゲートウェイ（Hitech City）拠点" },
        satellite: "✓ Included",
        standard: "✓ Included",
        advance: "✓ Included",
      },
      {
        name: { EN: "Team Capacity Allowance", JP: "利用可能人数" },
        satellite: "Up to 2 Pax",
        standard: "Up to 4 Pax",
        advance: "Custom Enterprise",
      },
      {
        name: { EN: "24/7 Smart Keycard Security", JP: "24時間入退室管理・セキュリティ" },
        satellite: "✓ Included",
        standard: "✓ Included",
        advance: "✓ Included",
      },
      {
        name: { EN: "1 Gbps Redundant Fiber & UPS Backup", JP: "1Gbps光回線・無停電電源" },
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
        name: { EN: "Daily 'Yorozu' Consultation (何でも相談)", JP: "日々の対面ビジネス「よろず相談」" },
        satellite: "—",
        standard: "✓ Daily Unlimited",
        advance: "✓ Daily Unlimited",
      },
      {
        name: { EN: "Monthly Regulatory & Tax Study Sessions", JP: "月例インド進出・法務税務勉強会" },
        satellite: "—",
        standard: "✓ Included",
        advance: "✓ Included",
      },
      {
        name: { EN: "Vetted Accounting & Legal Introductions", JP: "信頼できる現地専門家（会計・法務）紹介" },
        satellite: "On Request",
        standard: "✓ Included",
        advance: "✓ VIP Fast-Track",
      },
    ],
  },
  {
    category: { EN: "3. Strategic GTM & Ecosystem Acceleration", JP: "3. 実践コンサル・アライアンス支援" },
    items: [
      {
        name: { EN: "Indobox Hands-on Market Entry Consulting", JP: "Indoboxによる初期実践コンサル" },
        satellite: "—",
        standard: "—",
        advance: "✓ Included",
      },
      {
        name: { EN: "Business Meeting Accompaniment (商談同席)", JP: "重要商談・現地企業訪問への同席支援" },
        satellite: "—",
        standard: "—",
        advance: "1× / Month Included",
      },
      {
        name: { EN: "Institutional Pipeline (T-Hub, Woxsen)", JP: "T-Hub・大学連携パイプライン" },
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

export function PricingSection({ id }: { id?: string }) {
  const { tx } = useI18n();
  const [currency, setCurrency] = useState<"INR" | "JPY">("INR");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [selectedFilter, setSelectedFilter] = useState<"all" | "1-2" | "3-4" | "enterprise">("all");
  const [showMatrix, setShowMatrix] = useState(false);

  const isAnnual = billingCycle === "annual";

  return (
    <div id={id} className="min-h-screen bg-ivory dark:bg-[#0b111e] transition-colors scroll-mt-20">
      {/* ───────────────────────────────────────────────────────────
          1. Hero Banner
         ─────────────────────────────────────────────────────────── */}
      <PageHero
        eyebrowKey="pricing.eyebrow"
        titleNode={
          <>
            {tx({ EN: "Membership Fee Plans", JP: "ハイデラバード拠点" })}
            <br />
            <span className="text-gradient-saffron">
              {tx({ EN: "— Hyderabad Operating Hub", JP: "メンバーシップ料金プラン" })}
            </span>
          </>
        }
        subtitleKey="pricing.subtitle"
      />

      {/* ───────────────────────────────────────────────────────────
          2. Executive ROI Benchmark Strip & Interactive Controls
         ─────────────────────────────────────────────────────────── */}
      <section className="relative mt-1 sm:-mt-9 z-20 container-jg">
        <Reveal>
          <div className="rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#101a2c] p-3.5 sm:p-5 shadow-[0_16px_40px_-12px_rgba(8,15,26,0.08)] backdrop-blur-md transition-colors">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
              {/* ROI Benchmark Metric */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-center sm:text-left">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-700/40 px-3 py-1 text-emerald-800 dark:text-emerald-300 font-inter text-[11px] font-bold">
                  <TrendingDown className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{tx({ EN: "Cost Benchmark", JP: "費用対効果の検証" })}</span>
                </span>
                <div className="text-[12.5px] font-inter text-slate-500 dark:text-slate-400">
                  <span className="line-through mr-2">
                    {tx({ EN: "Traditional Expat: ¥15M–¥20M/yr", JP: "従来型駐在: 年間¥15M〜¥20M" })}
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-ink dark:text-amber-200 bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-700/40 px-2.5 py-0.5 rounded-md">
                    <Zap className="h-3 w-3 text-saffron fill-saffron" />
                    {tx({
                      EN: "J-Gate Hub: From ₹15,000/mo (~¥27,000) · 90%+ Cost Efficiency",
                      JP: "J-Gate: 月額1.5万INR〜（~¥27,000）90%以上のコスト削減",
                    })}
                  </span>
                </div>
              </div>

              {/* Interactive Dual Switcher (Currency + Billing Period) */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                {/* Billing Cycle Toggle */}
                <div className="flex items-center bg-slate-100/90 dark:bg-white/10 p-1 rounded-xl border border-slate-200/80 dark:border-white/10 text-[11.5px] font-inter font-bold">
                  <button
                    type="button"
                    onClick={() => setBillingCycle("monthly")}
                    className={`px-3 py-1 rounded-lg transition-all duration-200 cursor-pointer ${
                      !isAnnual
                        ? "bg-white dark:bg-[#182846] text-ink dark:text-white shadow-xs border border-slate-200/80 dark:border-white/20"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {tx({ EN: "Monthly", JP: "月払い" })}
                  </button>
                  <button
                    type="button"
                    onClick={() => setBillingCycle("annual")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all duration-200 cursor-pointer ${
                      isAnnual
                        ? "bg-white dark:bg-[#182846] text-crimson dark:text-rose-400 shadow-xs border border-slate-200/80 dark:border-white/20"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <span>{tx({ EN: "Annual", JP: "年払い" })}</span>
                    <span className="rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] px-1.5 py-0.2">
                      -15%
                    </span>
                  </button>
                </div>

                {/* Currency Toggle */}
                <div className="flex items-center bg-slate-100/90 dark:bg-white/10 p-1 rounded-xl border border-slate-200/80 dark:border-white/10 text-[11.5px] font-inter font-bold">
                  <button
                    type="button"
                    onClick={() => setCurrency("INR")}
                    className={`px-3 py-1 rounded-lg transition-all duration-200 cursor-pointer ${
                      currency === "INR"
                        ? "bg-white dark:bg-[#182846] text-crimson dark:text-rose-400 shadow-xs border border-slate-200/80 dark:border-white/20"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    ₹ INR
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrency("JPY")}
                    className={`px-3 py-1 rounded-lg transition-all duration-200 cursor-pointer ${
                      currency === "JPY"
                        ? "bg-white dark:bg-[#182846] text-crimson dark:text-rose-400 shadow-xs border border-slate-200/80 dark:border-white/20"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    ¥ JPY (円)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ───────────────────────────────────────────────────────────
          3. Three Executive Plan Cards
         ─────────────────────────────────────────────────────────── */}
      <section className="py-6 sm:py-10 lg:py-12 bg-ivory-warm dark:bg-[#0f1728] relative overflow-hidden transition-colors">
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
            <div className="mx-auto max-w-3xl text-center mb-5 sm:mb-7">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-crimson/30 bg-crimson/10 px-3.5 py-1 font-inter text-[11px] font-bold uppercase tracking-wider text-crimson dark:text-rose-400">
                <Briefcase className="h-3.5 w-3.5" />
                {tx({ EN: "Transparent Operating Memberships", JP: "透明で明瞭なメンバーシップ体系" })}
              </span>
              <h2
                className="mt-2.5 font-serif-jp font-bold text-ink dark:text-white"
                style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)" }}
              >
                {tx({
                  EN: "Choose Your India Expansion Tier",
                  JP: "進出段階に合わせて選べる3つのプラン",
                })}
              </h2>
              <p className="mx-auto mt-1.5 max-w-2xl font-inter text-[12px] sm:text-[13px] leading-relaxed text-slate dark:text-slate-300">
                {tx({
                  EN: "All tiers include full Cyber Gateway workspace infrastructure, 1Gbps connectivity, and on-site Japanese leadership guidance.",
                  JP: "すべてのプランにサイバーゲートウェイのオフィス利用、1Gbps光回線、常駐日本人ディレクターによるサポートが含まれています。",
                })}
              </p>

              {/* Interactive Team Size Quick Selector */}
              <div className="mt-4 sm:mt-5 inline-flex flex-wrap items-center justify-center gap-1.5 bg-white/90 dark:bg-[#101a2c] p-1.5 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-xs">
                <span className="text-[11px] font-inter font-semibold text-slate-400 dark:text-slate-400 px-2.5">
                  {tx({ EN: "Filter by Team:", JP: "チーム規模で絞り込み:" })}
                </span>
                {[
                  { id: "all", label: { EN: "Show All (3)", JP: "すべて (3)" } },
                  { id: "1-2", label: { EN: "1–2 Members", JP: "1〜2名利用" } },
                  { id: "3-4", label: { EN: "3–4 Members", JP: "3〜4名利用" } },
                  { id: "enterprise", label: { EN: "Enterprise", JP: "企業・特注規模" } },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedFilter(tab.id as any)}
                    className={`px-3 py-1 rounded-xl text-[11.5px] font-inter font-semibold transition-all duration-200 cursor-pointer ${
                      selectedFilter === tab.id
                        ? "bg-crimson text-white shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-white/10"
                    }`}
                  >
                    {tx(tab.label)}
                  </button>
                ))}
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
                      "group relative flex h-full flex-col justify-between rounded-2xl bg-white dark:bg-[#0c1424] border transition-all duration-300 p-4 sm:p-5",
                      isFeatured
                        ? "border-crimson dark:border-crimson/80 shadow-[0_12px_36px_-10px_rgba(188,26,44,0.18)] dark:shadow-[0_16px_40px_-10px_rgba(188,26,44,0.35)] ring-1 ring-crimson/30 lg:-translate-y-1.5"
                        : "border-slate-200/90 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-lg dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.6)] hover:-translate-y-0.5",
                      isSelected ? "ring-2 ring-saffron/70" : ""
                    )}
                  >
                    {/* Featured Top Badge */}
                    {isFeatured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-crimson to-crimson-deep px-3 py-0.5 font-inter text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-white shadow-md shadow-crimson/30">
                          <Sparkles className="h-3 w-3 text-amber-300 fill-amber-300" />
                          <span>{tx({ EN: "Most Popular Hub", JP: "一番人気 · 主力プラン" })}</span>
                        </span>
                      </div>
                    )}

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
                            <span className="text-[11px] sm:text-[11.5px] font-medium text-slate-500 dark:text-slate-400 font-sans-jp">
                              {plan.jpName}
                            </span>
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
                            <span className="font-serif-jp text-2xl sm:text-[26px] font-black text-ink dark:text-white tracking-tight">
                              {currency === "INR"
                                ? `₹${displayINR.toLocaleString()}`
                                : `¥${displayJPY.toLocaleString()}`}
                            </span>
                            <span className="font-inter text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                              {currency === "INR" ? "/mo" : "/月"}
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
                              ? `Approx. ¥${displayJPY.toLocaleString()}/月`
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

                      {/* Compact Deliverables Checklist */}
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
                        {tx({ EN: "Free consultation · Rapid onboarding", JP: "初回相談無料 · 最短即日利用可" })}
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
                  : tx({ EN: "Compare All 15 Deliverables Side-by-Side ↓", JP: "全プラン詳細比較表を見る ↓" })}
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
                    {tx({ EN: "Full Deliverable Comparison Matrix", JP: "全プラン項目別 詳細比較表" })}
                  </h3>
                  <p className="font-inter text-[12.5px] text-slate-500 dark:text-slate-400">
                    {tx({
                      EN: "Clear deliverables across physical facilities, resident Japan Desk advisory, and strategic GTM consulting.",
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
                      <th className="py-3 px-4 w-2/5 font-bold">{tx({ EN: "Deliverable / Feature", JP: "項目・サポート内容" })}</th>
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
      <section className="py-8 sm:py-12 lg:py-14 bg-ivory dark:bg-[#080d17] border-t border-slate-200/60 dark:border-white/10">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-4xl">
              <div className="mb-5 sm:mb-7 flex items-center gap-3">
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-crimson/10 text-crimson">
                  <AlertCircle className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </span>
                <div>
                  <Eyebrow>{tx({ EN: "Transparent Terms", JP: "ご契約前の確認事項" })}</Eyebrow>
                  <h3 className="font-serif-jp text-lg sm:text-2xl font-bold text-ink dark:text-white">
                    {tx({ EN: "Billing Terms & Invoicing Policies", JP: "請求・決済および契約条件" })}
                  </h3>
                </div>
              </div>

              <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: Receipt,
                    title: { EN: "Base Operating Fees", JP: "基本料金のみ" },
                    desc: {
                      EN: "Amounts reflect predictable monthly hub membership. Entity incorporation and recruitment services are scoped separately.",
                      JP: "記載価格は月額基本料金です。法人設立手続きや人材紹介の手数料は実費・別途請求となります。",
                    },
                  },
                  {
                    icon: Banknote,
                    title: { EN: "INR & JPY Settlement", JP: "INR / JPY決済対応" },
                    desc: {
                      EN: "Invoicing is denominated in INR. Tokyo entity settlement in Japanese Yen (JPY) is fully supported with prevailing rates.",
                      JP: "請求はINR基準です。東京法人経由での日本円（JPY）決済にも対応しております（為替換算適用）。",
                    },
                  },
                  {
                    icon: ShieldCheck,
                    title: { EN: "Compliant Tax Invoices", JP: "GST（消費税）別" },
                    desc: {
                      EN: "All membership rates exclude 18% India GST, itemized on compliant monthly tax invoices with input tax credit eligibility.",
                      JP: "すべての料金表示はインドGST（18%）別となっております。正規のTax Invoiceを発行します。",
                    },
                  },
                ].map((note, idx) => {
                  const Icon = note.icon;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-3.5 sm:p-5 shadow-xs hover:shadow-md transition-shadow"
                    >
                      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-saffron/15 text-saffron-deep dark:text-saffron-light mb-2.5 sm:mb-3">
                        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>
                      <h4 className="font-serif-jp text-[13.5px] sm:text-[14.5px] font-bold text-ink dark:text-white">
                        {tx(note.title)}
                      </h4>
                      <p className="mt-1 sm:mt-1.5 font-inter text-[11.5px] sm:text-[12px] leading-relaxed text-slate-600 dark:text-slate-300">
                        {tx(note.desc)}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Guarantees Strip */}
              <div className="mt-4 sm:mt-5 rounded-xl sm:rounded-2xl border border-emerald-200/90 dark:border-emerald-700/40 bg-emerald-50/60 dark:bg-emerald-950/30 p-3.5 sm:p-5 flex items-start sm:items-center gap-3">
                <CheckCircle2 className="h-4.5 w-4.5 sm:h-5 sm:w-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5 sm:mt-0" />
                <p className="font-inter text-[11.5px] sm:text-[12.5px] leading-relaxed text-slate-700 dark:text-slate-300">
                  <span className="font-bold text-ink dark:text-white">
                    {tx({ EN: "Universal Plan Guarantee: ", JP: "全プラン共通の安心保証: " })}
                  </span>
                  {tx({
                    EN: "No hidden Common Area Maintenance (CAM) or utility fees. All tiers include 24/7 keycard access, redundant fiber internet, video meeting rooms, and resident Japanese director coordination.",
                    JP: "追加の施設共益費や隠れコストはありません。全プランに24時間入館、高速Wi-Fi、会議室、日本人常駐サポートが完備されています。",
                  })}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
