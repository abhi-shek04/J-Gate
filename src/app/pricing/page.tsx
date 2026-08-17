"use client";

import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { Photo } from "@/components/jgate/photo";
import { useI18n } from "@/lib/i18n";
import {
  Check,
  ArrowRight,
  ArrowDownRight,
  Star,
  Crown,
  Building2,
  AlertCircle,
  Banknote,
  Mail,
  Phone,
  Receipt,
  TrendingDown,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

/* ============================================================
   Pricing — REAL PDF content (Slide 9: Membership Fee Plans — Hyderabad)
   Premium editorial structure:
     1. PageHero — Membership Fee Plans — Hyderabad
     2. Cost Comparison Callout — Typical Expat Cost → J-Gate Membership
     3. 3 Plan Cards (Satellite/Standard/Advance) side-by-side equal height,
        photo slot at top (200px), Standard elevated + MOST POPULAR ribbon,
        Advance with FLAGSHIP badge.
     4. Billing Notes — 3 small cards (base fees / INR+JPY / GST excluded)
     5. Closing CTA — Ready to Choose Your Plan?
   ZERO context mixing per card.
   ============================================================ */

type Bilingual = { EN: string; JP: string };

type Plan = {
  id: "satellite" | "standard" | "advance";
  jpName: string;
  enName: string;
  priceINR: string;
  priceJPY: string;
  photoId: string;
  fallback: string;
  initials: string;
  accent: "slate" | "crimson" | "saffron";
  badge?: { text: Bilingual; icon: typeof Star; tone: "crimson" | "saffron" };
  target: Bilingual;
  features: Bilingual[];
  highlight?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "satellite",
    jpName: "サテライトプラン",
    enName: "Satellite Plan",
    priceINR: "15,000",
    priceJPY: "~¥27,000",
    photoId: "photo-plan-satellite",
    fallback: "grad-plan-hotdesk",
    initials: "S",
    accent: "slate",
    target: {
      EN: "Japanese companies with an existing India entity.",
      JP: "インドに既存法人を持つ日本企業向け。",
    },
    features: [
      { EN: "Workspace usage (unlimited, up to 2 people)", JP: "ワークスペース利用（無制限、最大2名）" },
      { EN: "Full infrastructure usage", JP: "インフラ設備の完全利用" },
      {
        EN: "Market development base for Hyderabad / Andhra Pradesh",
        JP: "ハイデラバード・アーンドラ・プラデーシュ州での市場開拓拠点",
      },
    ],
  },
  {
    id: "standard",
    jpName: "スタンダードプラン",
    enName: "Standard Plan",
    priceINR: "50,000",
    priceJPY: "~¥90,000",
    photoId: "photo-plan-standard",
    fallback: "grad-plan-dedicated",
    initials: "ST",
    accent: "crimson",
    badge: { text: { EN: "MOST POPULAR", JP: "最も人気" }, icon: Star, tone: "crimson" },
    highlight: true,
    target: {
      EN: "Japanese SMEs and startups entering India.",
      JP: "インド参入を検討する日本の中小企業・スタートアップ向け。",
    },
    features: [
      { EN: "Workspace (unlimited, up to 4 people)", JP: "ワークスペース利用（無制限、最大4名）" },
      { EN: "Full infrastructure usage", JP: "インフラ設備の完全利用" },
      { EN: "\"Yorozu\" Consultation in-person (何でも相談)", JP: "「よろず」相談（対面）" },
      { EN: "India study sessions", JP: "インド勉強会への参加" },
      { EN: "Initial network introductions", JP: "初期ネットワーク紹介" },
    ],
  },
  {
    id: "advance",
    jpName: "アドバンスプラン",
    enName: "Advance Plan",
    priceINR: "120,000",
    priceJPY: "~¥216,000",
    photoId: "photo-plan-advance",
    fallback: "grad-plan-cabin",
    initials: "A",
    accent: "saffron",
    badge: { text: { EN: "FLAGSHIP", JP: "フラッグシップ" }, icon: Crown, tone: "saffron" },
    target: {
      EN: "Enterprises, regional banks, local governments.",
      JP: "企業・地方銀行・自治体向け。",
    },
    features: [
      { EN: "Everything in Standard Plan", JP: "スタンダードプランのすべてを含む" },
      { EN: "Indobox early-phase hands-on consulting", JP: "Indoboxによる初期段階の実践コンサルティング" },
      { EN: "Business meeting accompaniment (1×/month)", JP: "商談同席（月1回まで）" },
      { EN: "Priority networking invitations", JP: "ネットワーキングイベントへの優先招待" },
      { EN: "Detailed partner introductions & matching", JP: "現地パートナーの詳細紹介・マッチング" },
    ],
  },
];

const accentMap = {
  slate: {
    ring: "border-slate-200",
    bar: "from-slate-400 to-slate-500",
    text: "text-slate",
    chipBg: "bg-slate/10",
    checkBg: "bg-slate/10",
    priceColor: "text-ink",
    cta: "border-slate-300 text-slate hover:bg-slate/5 hover:border-slate-500",
    iconBg: "bg-slate/10",
    icon: Building2,
  },
  crimson: {
    ring: "border-crimson/40",
    bar: "from-crimson to-crimson-deep",
    text: "text-crimson",
    chipBg: "bg-crimson/10",
    checkBg: "bg-crimson/10",
    priceColor: "text-crimson-deep",
    cta: "bg-gradient-to-r from-crimson to-crimson-deep text-white shadow-[0_0_20px_rgba(188,26,44,0.35)] hover:-translate-y-0.5",
    iconBg: "bg-crimson/10",
    icon: Star,
  },
  saffron: {
    ring: "border-saffron/40",
    bar: "from-saffron to-[#c9881a]",
    text: "text-saffron",
    chipBg: "bg-saffron/10",
    checkBg: "bg-saffron/10",
    priceColor: "text-[#a06c0c]",
    cta: "border-2 border-saffron text-saffron hover:bg-saffron/5 hover:border-saffron/80",
    iconBg: "bg-saffron/10",
    icon: Crown,
  },
} as const;

export default function PricingPage() {
  const { tx } = useI18n();

  return (
    <>
      <PageHero
        eyebrowKey="pricing.eyebrow"
        titleNode={
          <>
            {tx({ EN: "Membership Fee Plans", JP: "「[ハイデラバード]" })}
            <br />
            <span className="text-gradient-saffron">
              {tx({ EN: "— Hyderabad", JP: "メンバーシップ料金プラン」" })}
            </span>
          </>
        }
        subtitleKey="pricing.subtitle"
      />

      {/* ───────────────────────────────────────────────────────────
          Section 1 — Cost Comparison Callout
          Typical Annual Expat Cost (¥15M–¥20M per expat + setup)
                              ↓ Arrow showing cost reduction
          J-Gate Membership From: 15,000 INR/mo (~¥27,000)
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-4xl rounded-lg border border-crimson/15 bg-pearl p-6 shadow-card sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-crimson to-crimson-deep text-white shadow-card">
                  <TrendingDown className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <Eyebrow>{tx({ EN: "Cost Comparison", JP: "コスト比較" })}</Eyebrow>
                  <p
                    className="mt-1 font-serif-jp font-bold leading-snug text-ink"
                    style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
                  >
                    {tx({
                      EN: "Replace the typical annual expat cost with a fraction of the investment.",
                      JP: "従来型駐在員コストを、その数分の一の投資で代替。",
                    })}
                  </p>
                </div>
              </div>

              {/* 2-tile cost comparison + center arrow */}
              <div className="mt-6 grid items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr]">
                {/* Typical expat cost — strikethrough red */}
                <div className="relative rounded-lg border border-crimson/20 bg-crimson/[0.04] p-5">
                  <p
                    className="font-inter text-[10px] font-semibold uppercase text-mist"
                    style={{ letterSpacing: "0.12em" }}
                  >
                    {tx({ EN: "Typical Annual Expat Cost", JP: "従来型駐在員年間コスト" })}
                  </p>
                  <p className="mt-2 font-serif-jp text-2xl font-bold leading-tight text-ink line-through decoration-crimson decoration-2 sm:text-3xl">
                    ¥15M–¥20M
                  </p>
                  <p className="mt-1.5 font-inter text-[12px] text-slate">
                    {tx({ EN: "per expat + setup fees", JP: "駐在員1名＋設立費用" })}
                  </p>
                </div>

                {/* Arrow — cost reduction */}
                <div className="flex flex-col items-center justify-center px-2 py-3 sm:py-0">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-saffron/15 text-saffron shadow-card"
                    aria-hidden="true"
                  >
                    <ArrowDownRight className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                  <span
                    className="mt-1.5 font-inter text-[10px] font-bold uppercase text-saffron"
                    style={{ letterSpacing: "0.14em" }}
                  >
                    {tx({ EN: "Save up to 99%", JP: "最大99%削減" })}
                  </span>
                </div>

                {/* J-Gate membership — saffron-gradient highlight */}
                <div className="relative rounded-lg border border-saffron/40 bg-gradient-to-br from-saffron/[0.10] to-crimson/[0.04] p-5 shadow-gold">
                  <p
                    className="font-inter text-[10px] font-semibold uppercase text-saffron"
                    style={{ letterSpacing: "0.12em" }}
                  >
                    {tx({ EN: "J-Gate Membership From", JP: "J-Gateメンバーシップ" })}
                  </p>
                  <p className="mt-2 font-serif-jp text-2xl font-bold leading-tight text-crimson-deep sm:text-3xl">
                    15,000 INR
                    <span className="font-inter text-sm font-medium text-mist"> /mo</span>
                  </p>
                  <p className="mt-1.5 font-inter text-[12px] font-semibold text-saffron">
                    {tx({ EN: "~¥27,000/mo · excl. GST", JP: "月額約¥27,000 · GST別" })}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 2 — 3 Plan Cards (Slide 9)
          Side-by-side, equal height. Standard plan elevated + MOST POPULAR
          ribbon. Advance plan with FLAGSHIP badge. Photo at top (200px),
          then content (name, big INR price + JPY equivalent, target,
          checklist, CTA).
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>
                {tx({ EN: "Three Plans, One Operating Base", JP: "3つのプラン、ひとつの拠点" })}
              </Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({
                  EN: "Choose the Plan That Matches Your India Stage",
                  JP: "貴社のインド段階に合ったプランを",
                })}
              </h2>
              <p
                className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
              >
                {tx({
                  EN: "From a satellite workspace for established entities to flagship hands-on consulting — all anchored in our Hyderabad base at Cyber Gateway.",
                  JP: "既存法人向けのサテライト拠点から、フラッグシップの実践コンサルティングまで — すべてCyber Gatewayのハイデラバード拠点を拠点に。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:items-stretch">
            {PLANS.map((plan, i) => {
              const a = accentMap[plan.accent];
              const isHighlight = plan.highlight;
              const PlanIcon = a.icon;
              return (
                <Reveal key={plan.id} delay={i * 90} variant={i === 0 ? "left" : i === 2 ? "right" : "up"}>
                  <article
                    className={`lift-card relative flex h-full flex-col overflow-hidden rounded-lg border-2 bg-pearl shadow-card transition-all ${
                      a.ring
                    } ${isHighlight ? "lg:-translate-y-3 lg:shadow-[0_20px_60px_rgba(188,26,44,0.18)]" : ""}`}
                  >
                    {/* Top accent bar */}
                    <span className={`absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r ${a.bar}`} />

                    {/* MOST POPULAR ribbon — crimson diagonal ribbon for Standard */}
                    {plan.badge && plan.badge.tone === "crimson" && (
                      <div className="absolute right-0 top-0 z-30">
                        <div
                          className="relative inline-flex items-center gap-1.5 bg-gradient-to-r from-crimson to-crimson-deep px-4 py-1.5 font-inter text-[10px] font-bold uppercase text-white shadow-[0_4px_16px_rgba(188,26,44,0.35)]"
                          style={{ letterSpacing: "0.14em" }}
                        >
                          <Star className="h-3 w-3 fill-white" strokeWidth={0} />
                          {tx(plan.badge.text)}
                          <span
                            className="absolute bottom-0 right-0 h-3 w-3 bg-crimson-deep"
                            style={{
                              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                            }}
                          />
                        </div>
                      </div>
                    )}
                    {/* FLAGSHIP badge — saffron pill for Advance */}
                    {plan.badge && plan.badge.tone === "saffron" && (
                      <div className="absolute left-4 top-4 z-30">
                        <span
                          className="inline-flex items-center gap-1.5 rounded-md bg-saffron/95 px-3 py-1.5 font-inter text-[10px] font-bold uppercase text-ink shadow-gold"
                          style={{ letterSpacing: "0.14em" }}
                        >
                          <Crown className="h-3 w-3" strokeWidth={2.5} />
                          {tx(plan.badge.text)}
                        </span>
                      </div>
                    )}

                    {/* Photo slot — 200px */}
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <Photo
                        id={plan.photoId}
                        alt={`${plan.enName} photo`}
                        fallback={plan.fallback}
                        initials={plan.initials}
                        rounded="rounded-none"
                        className="h-[200px] w-full"
                      />
                      {/* Gradient fade for photo → content transition */}
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(250,250,250,0.95) 0%, transparent 100%)",
                        }}
                        aria-hidden="true"
                      />
                      {/* Floating price chip on photo bottom-left */}
                      <div className="absolute bottom-3 left-4">
                        <span
                          className={`inline-flex items-baseline gap-1 rounded-md bg-midnight/85 px-3 py-1.5 backdrop-blur-sm ${a.priceColor}`}
                          style={{ color: "white" }}
                        >
                          <span className="font-serif-jp text-base font-bold">
                            {plan.priceINR}
                          </span>
                          <span className="font-inter text-[10px] font-medium text-mist">
                            INR/mo
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Content body */}
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      {/* Plan name (EN + JP) */}
                      <div className="flex items-start gap-3">
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${a.iconBg} ${a.text}`}
                        >
                          <PlanIcon className="h-5 w-5" strokeWidth={1.5} />
                        </span>
                        <div>
                          <h3 className="font-serif-jp text-lg font-bold leading-tight text-ink sm:text-xl">
                            {plan.enName}
                          </h3>
                          <p className="font-sans-jp text-[12.5px] font-medium text-mist">
                            {plan.jpName}
                          </p>
                        </div>
                      </div>

                      {/* Big price */}
                      <div className="mt-5 border-t border-crimson/10 pt-4">
                        <div className="flex items-baseline gap-1.5">
                          <span className={`font-serif-jp text-4xl font-bold ${a.priceColor} sm:text-[2.75rem]`}>
                            {plan.priceINR}
                          </span>
                          <span className="font-inter text-[13px] font-semibold text-slate">INR</span>
                          <span className="font-inter text-[12px] text-mist">/mo</span>
                        </div>
                        <p className="mt-1.5 flex items-center gap-1.5 font-inter text-[12px] text-mist">
                          <span className="font-semibold text-slate">{plan.priceJPY}</span>
                          <span>·</span>
                          <span>{tx({ EN: "excl. GST", JP: "GST別" })}</span>
                        </p>
                      </div>

                      {/* Target */}
                      <div className="mt-5 border-t border-crimson/10 pt-4">
                        <p
                          className="font-inter text-[10px] font-semibold uppercase text-mist"
                          style={{ letterSpacing: "0.12em" }}
                        >
                          {tx({ EN: "Target", JP: "対象" })}
                        </p>
                        <p className="mt-1.5 font-inter text-[13px] leading-relaxed text-slate">
                          {tx(plan.target)}
                        </p>
                      </div>

                      {/* Clean checklist */}
                      <div className="mt-5 flex-1 border-t border-crimson/10 pt-4">
                        <p
                          className="font-inter text-[10px] font-semibold uppercase text-mist"
                          style={{ letterSpacing: "0.12em" }}
                        >
                          {tx({ EN: "Included", JP: "含まれる内容" })}
                        </p>
                        <ul className="mt-3 space-y-2.5">
                          {plan.features.map((f, fi) => (
                            <li key={fi} className="flex items-start gap-2.5">
                              <span
                                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${a.checkBg} ${a.text}`}
                              >
                                <Check className="h-3 w-3" strokeWidth={3} />
                              </span>
                              <span className="font-inter text-[12.5px] leading-snug text-slate">
                                {tx(f)}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <Link
                        href="/contact"
                        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-md border px-5 py-3 font-inter text-[13px] font-semibold transition-all ${a.cta}`}
                      >
                        {tx({ EN: "Contact Us", JP: "お問い合わせ" })}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 3 — Billing Notes (3 small cards)
          1. Base fees only — registration + staffing agency fees charged separately
          2. INR billed · JPY settlement also supported (rates fluctuate)
          3. All prices exclude India GST
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-crimson/10 text-crimson">
                  <AlertCircle className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <Eyebrow>{tx({ EN: "Billing Notes", JP: "請求に関する注意事項" })}</Eyebrow>
                  <h3
                    className="mt-1 font-serif-jp font-bold text-ink"
                    style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
                  >
                    {tx({ EN: "Read Before You Subscribe", JP: "ご契約前の確認事項" })}
                  </h3>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  {
                    icon: Receipt,
                    label: { EN: "Base fees only", JP: "基本料金のみ" } as Bilingual,
                    desc: {
                      EN: "Prices shown are base monthly fees. Corporate registration agency fees and staffing agency fees are charged separately.",
                      JP: "記載価格は月額基本料金。法人登記代行手数料および人材紹介手数料は別途請求。",
                    } as Bilingual,
                  },
                  {
                    icon: Banknote,
                    label: { EN: "INR billed · JPY supported", JP: "INR請求・JPY決済対応" } as Bilingual,
                    desc: {
                      EN: "All plans are billed in Indian Rupees (INR). Settlement in Japanese Yen (JPY) is supported — rates fluctuate based on FX conditions.",
                      JP: "全プランはインドルピー（INR）で請求。日本円（JPY）決済にも対応 — 為替状況により変動。",
                    } as Bilingual,
                  },
                  {
                    icon: AlertCircle,
                    label: { EN: "GST excluded", JP: "GST別" } as Bilingual,
                    desc: {
                      EN: "All listed prices are exclusive of India's Goods and Services Tax (GST), added to invoices as per applicable rates.",
                      JP: "記載価格はインドの物品サービス税（GST）を除外。適用税率に従い請求書に追加。",
                    } as Bilingual,
                  },
                ].map((n, i) => {
                  const NoteIcon = n.icon;
                  return (
                    <div
                      key={i}
                      className="lift-card rounded-lg border border-slate-200 bg-pearl p-5"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-saffron/15 text-saffron">
                        <NoteIcon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      <p className="mt-3 font-serif-jp text-[14px] font-bold text-ink">
                        {tx(n.label)}
                      </p>
                      <p className="mt-2 font-inter text-[12px] leading-relaxed text-slate">
                        {tx(n.desc)}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Trust line */}
              <div className="mt-6 flex items-center gap-3 rounded-lg border border-crimson/15 bg-crimson/[0.03] p-4">
                <ShieldCheck className="h-5 w-5 shrink-0 text-crimson" strokeWidth={1.5} />
                <p className="font-inter text-[12.5px] leading-relaxed text-slate">
                  <span className="font-semibold text-ink">
                    {tx({ EN: "All plans include", JP: "全プラン共通" })}:{" "}
                  </span>
                  {tx({
                    EN: "Hyderabad Cyber Gateway workspace access, full infrastructure (Wi-Fi, meeting rooms, security, 24/7 smart-key), and resident Japanese-language support.",
                    JP: "ハイデラバード Cyber Gatewayのワークスペース利用、完全なインフラ（Wi-Fi・会議室・セキュリティ・24時間スマートキー）、駐在 日本語サポート。",
                  })}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Closing CTA — Ready to Choose Your Plan?
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-midnight">
        <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(232,160,26,0.10), transparent 60%)",
          }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-saffron/15 text-saffron">
                <Star className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h2
                className="mt-6 font-serif-jp font-bold leading-[1.18] text-white"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({ EN: "Ready to Choose Your Plan?", JP: "プランをお選びですか？" })}
              </h2>
              <p
                className="mx-auto mt-3 font-inter leading-relaxed text-mist"
                style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
              >
                {tx({
                  EN: "Talk to our operations team — we'll help you select the right plan, scope any add-ons, and walk you through INR/JPY billing.",
                  JP: "運営チームにご相談ください — 最適なプランの選定、追加サービスのスコープ提示、INR/JPY請求の流れまでご案内。",
                })}
              </p>

              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-shine flex items-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-7 py-3.5 font-inter text-[14px] font-semibold text-white shadow-[0_0_20px_rgba(188,26,44,0.35)] transition-all hover:-translate-y-0.5"
                >
                  {tx({ EN: "Contact Us", JP: "お問い合わせ" })}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="rounded-md border border-white/30 px-7 py-3.5 font-inter text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                >
                  {tx({ EN: "Compare Services", JP: "サービスを見る" })}
                </Link>
              </div>

              {/* Quick contact strip */}
              <div className="mt-8 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-6 sm:flex-row sm:gap-8">
                <a
                  href="mailto:contact@indobox.co.jp"
                  className="flex items-center gap-2 font-inter text-[13px] text-mist transition-colors hover:text-saffron"
                >
                  <Mail className="h-4 w-4 text-saffron" />
                  contact@indobox.co.jp
                </a>
                <a
                  href="tel:+919910360648"
                  className="flex items-center gap-2 font-inter text-[13px] text-mist transition-colors hover:text-saffron"
                >
                  <Phone className="h-4 w-4 text-saffron" />
                  +91-9910360648 (Tanji)
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
