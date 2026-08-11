"use client";

import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import {
  Check,
  ArrowRight,
  Star,
  Crown,
  Satellite,
  Building2,
  AlertCircle,
  Banknote,
  Mail,
  Phone,
  TrendingDown,
} from "lucide-react";
import Link from "next/link";

/* ============================================================
   Pricing — REAL PDF content (Slide 9: Membership Fee Plans)
   CLEAN modular layout:
     1. PageHero
     2. Context Banner — single line + 2-tile comparison
     3. 3 Pricing Cards side-by-side (Satellite/Standard/Advance)
     4. Notes Section — small print disclosures
     5. Closing CTA
   ZERO context mixing per card.
   ============================================================ */

type Bilingual = { EN: string; JP: string };

type Plan = {
  id: "satellite" | "standard" | "advance";
  jpName: string;
  enName: string;
  priceINR: string;
  accent: "slate" | "crimson" | "saffron";
  badge?: { text: Bilingual; icon: typeof Star };
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
    accent: "slate",
    target: {
      EN: "Companies with an existing India entity.",
      JP: "インドに既存の法人を持つ企業向け。",
    },
    features: [
      { EN: "Workspace (unlimited, up to 2 people)", JP: "ワークスペース利用（無制限、最大2名）" },
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
    accent: "crimson",
    badge: { text: { EN: "MOST POPULAR", JP: "最も人気" }, icon: Star },
    highlight: true,
    target: {
      EN: "SMEs and startups entering India.",
      JP: "インド参入を検討する中小企業・スタートアップ向け。",
    },
    features: [
      { EN: "Workspace (unlimited, up to 4 people)", JP: "ワークスペース利用（無制限、最大4名）" },
      { EN: "Full infrastructure usage", JP: "インフラ設備の完全利用" },
      { EN: "\"Yorozu\" Consultation (in-person)", JP: "「よろず」相談（対面）" },
      { EN: "India study sessions participation", JP: "インド勉強会への参加" },
      { EN: "Initial network introductions", JP: "初期ネットワーク紹介" },
    ],
  },
  {
    id: "advance",
    jpName: "アドバンスプラン",
    enName: "Advance Plan",
    priceINR: "120,000",
    accent: "saffron",
    badge: { text: { EN: "FLAGSHIP", JP: "フラッグシップ" }, icon: Crown },
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
    cta: "bg-gradient-to-r from-saffron to-[#c9881a] text-white shadow-[0_0_20px_rgba(232,160,26,0.35)] hover:-translate-y-0.5",
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
            {tx({ EN: "Membership Fee Plans", JP: "メンバーシップ" })}
            <br />
            <span className="text-gradient-saffron">
              {tx({ EN: "— Hyderabad", JP: "料金プラン" })}
            </span>
          </>
        }
        subtitleKey="pricing.title"
      />

      {/* ───────────────────────────────────────────────────────────
          Section 1 — Context Banner (Slide 9)
          Single sentence + 2-tile cost comparison strip. NO clutter.
         ─────────────────────────────────────────────────────────── */}
      <section className="bg-ivory py-12 md:py-14">
        <div className="container-jg">
          <Reveal>
            <div className="rounded-lg border border-crimson/15 bg-pearl p-6 shadow-card sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-crimson to-crimson-deep text-white shadow-card">
                  <TrendingDown className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <Eyebrow>
                  {tx({ EN: "Strategic Cost-Performance", JP: "戦略的費用対効果" })}
                </Eyebrow>
              </div>
              <p
                className="mt-3 font-serif-jp font-bold leading-snug text-ink"
                style={{ fontSize: "clamp(1.125rem,2.2vw,1.5rem)" }}
              >
                {tx({
                  EN: "Designed as a high cost-performance strategic investment — replacing typical India expansion costs of ¥15M–¥20M annually per expat.",
                  JP: "高い費用対効果の戦略的投資として設計 — 年間¥15M〜¥20Mかかる典型的な駐在員コストを代替。",
                })}
              </p>

              {/* 2-tile cost comparison strip */}
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-crimson/15 bg-ivory-warm/60 p-4">
                  <p
                    className="font-inter text-[10px] font-semibold uppercase text-mist"
                    style={{ letterSpacing: "0.12em" }}
                  >
                    {tx({ EN: "Typical Annual Expat Cost", JP: "従来型駐在員年間コスト" })}
                  </p>
                  <p className="mt-1 font-serif-jp text-xl font-bold text-ink line-through decoration-crimson/40 decoration-2">
                    ¥15M–¥20M
                  </p>
                  <p className="font-inter text-[11px] text-mist">
                    {tx({ EN: "per expat + setup fees", JP: "駐在員1名＋設立費用" })}
                  </p>
                </div>
                <div className="rounded-lg border border-saffron/30 bg-gradient-to-br from-saffron/[0.06] to-crimson/[0.04] p-4">
                  <p
                    className="font-inter text-[10px] font-semibold uppercase text-saffron"
                    style={{ letterSpacing: "0.12em" }}
                  >
                    {tx({ EN: "J-Gate Membership From", JP: "J-Gateメンバーシップ" })}
                  </p>
                  <p className="mt-1 font-serif-jp text-xl font-bold text-crimson-deep">
                    15,000 INR<span className="text-sm font-medium text-mist">/mo</span>
                  </p>
                  <p className="font-inter text-[11px] text-mist">
                    {tx({ EN: "excl. GST · ~¥27k/mo", JP: "GST別 · 月額約¥27,000" })}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 2 — 3 Pricing Cards (Slide 9)
          Side-by-side, equal height. Standard plan centered + elevated.
          Each card: name + price + target + checklist + CTA. ZERO mixing.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>
                {tx({ EN: "Three Plans, One Operating Base", JP: "3つのプラン、ひとつの拠点" })}
              </Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.2] text-ink"
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({
                  EN: "Choose the Plan That Matches Your India Stage",
                  JP: "貴社のインド段階に合ったプランを",
                })}
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:items-stretch">
            {PLANS.map((plan, i) => {
              const a = accentMap[plan.accent];
              const isHighlight = plan.highlight;
              return (
                <Reveal key={plan.id} delay={i * 90}>
                  <article
                    className={`lift-card relative flex h-full flex-col overflow-hidden rounded-lg border-2 bg-pearl p-6 shadow-card transition-all sm:p-7 ${
                      a.ring
                    } ${isHighlight ? "lg:-translate-y-3 lg:shadow-[0_20px_60px_rgba(188,26,44,0.18)]" : ""}`}
                  >
                    {/* Top accent bar */}
                    <span className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${a.bar}`} />

                    {/* Badge */}
                    {plan.badge && (
                      <div className="absolute right-4 top-4">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full ${a.chipBg} ${a.text} px-3 py-1 font-inter text-[10px] font-bold uppercase`}
                          style={{ letterSpacing: "0.12em" }}
                        >
                          <plan.badge.icon className="h-3 w-3" strokeWidth={2.5} />
                          {tx(plan.badge.text)}
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-md ${a.iconBg} ${a.text}`}
                    >
                      <a.icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>

                    {/* Plan name (JP+EN) */}
                    <h3 className="mt-4 font-serif-jp text-lg font-bold leading-tight text-ink sm:text-xl">
                      {plan.enName}
                    </h3>
                    <p className="mt-0.5 font-sans-jp text-[13px] font-medium text-mist">
                      {plan.jpName}
                    </p>

                    {/* Big price */}
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className={`font-serif-jp text-4xl font-bold ${a.priceColor} sm:text-[2.75rem]`}>
                        {plan.priceINR}
                      </span>
                      <span className="font-inter text-[13px] font-semibold text-slate">INR</span>
                      <span className="font-inter text-[12px] text-mist">/mo</span>
                    </div>
                    <p className="mt-1 font-inter text-[11px] text-mist">
                      {tx({ EN: "excl. GST", JP: "GST別" })}
                    </p>

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
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 3 — Notes (Slide 9)
          Small-print disclosures. NO mixing with pricing cards.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-pearl p-6 shadow-card sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-crimson/10 text-crimson">
                  <AlertCircle className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <Eyebrow>
                    {tx({ EN: "Important Notes", JP: "重要事項" })}
                  </Eyebrow>
                  <h3 className="mt-1 font-serif-jp text-base font-bold text-ink sm:text-lg">
                    {tx({ EN: "Read Before You Subscribe", JP: "ご契約前の確認事項" })}
                  </h3>
                </div>
              </div>

              {/* Clean 3-card note grid */}
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    icon: Banknote,
                    label: { EN: "Base fees only", JP: "基本料金のみ" } as Bilingual,
                    desc: {
                      EN: "Prices shown are base monthly fees. Corporate registration agency fees and recruitment commissions are charged separately.",
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
                ].map((n, i) => (
                  <div
                    key={i}
                    className="rounded-md border border-slate-200 bg-ivory-warm/50 p-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-saffron/15 text-saffron">
                        <n.icon className="h-3.5 w-3.5" strokeWidth={2} />
                      </span>
                      <span className="font-serif-jp text-[13px] font-bold text-ink">
                        {tx(n.label)}
                      </span>
                    </div>
                    <p className="mt-2 font-inter text-[12px] leading-relaxed text-slate">
                      {tx(n.desc)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Closing CTA — single focused block
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
                <Satellite className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h2
                className="mt-6 font-serif-jp font-bold leading-[1.2] text-white"
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({ EN: "Ready to Choose Your Plan?", JP: "プランをお選びですか？" })}
              </h2>
              <p
                className="mx-auto mt-3 font-inter text-[14px] leading-relaxed text-mist"
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
                <a href="mailto:contact@indobox.co.jp" className="flex items-center gap-2 font-inter text-[13px] text-mist transition-colors hover:text-saffron">
                  <Mail className="h-4 w-4 text-saffron" />
                  contact@indobox.co.jp
                </a>
                <a href="tel:+919910360648" className="flex items-center gap-2 font-inter text-[13px] text-mist transition-colors hover:text-saffron">
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
