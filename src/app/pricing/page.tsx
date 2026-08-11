"use client";

import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import {
  Check,
  ArrowRight,
  Sparkles,
  Star,
  Crown,
  Satellite,
  Building2,
  Users,
  Banknote,
  TrendingDown,
  AlertCircle,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";

/* ============================================================
   Pricing — REAL PDF content (Slide 9: Membership Fee Plans — Hyderabad)
   Sections: PageHero → Context Banner → 3 Pricing Cards → Notes → CTA
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
      EN: "Japanese companies that already have an established legal entity in India.",
      JP: "インドに既存の法人を持つ日本企業向け。",
    },
    features: [
      {
        EN: "Workspace usage (unlimited, up to 2 people)",
        JP: "ワークスペース利用（無制限、最大2名まで）",
      },
      {
        EN: "Full infrastructure usage",
        JP: "インフラ設備の完全利用",
      },
      {
        EN: "Ideal as a market development base in Hyderabad / Andhra Pradesh",
        JP: "ハイデラバード・アーンドラ・プラデーシュ州での市場開拓拠点として最適",
      },
    ],
  },
  {
    id: "standard",
    jpName: "スタンダードプラン",
    enName: "Standard Plan",
    priceINR: "50,000",
    accent: "crimson",
    badge: {
      text: { EN: "MOST POPULAR", JP: "最も人気" },
      icon: Star,
    },
    highlight: true,
    target: {
      EN: "Japanese enterprises, SMEs, and startups considering entering the Indian market.",
      JP: "インド市場への参入を検討する日本企業・中小企業・スタートアップ向け。",
    },
    features: [
      {
        EN: "Workspace usage (unlimited, up to 4 people)",
        JP: "ワークスペース利用（無制限、最大4名まで）",
      },
      {
        EN: "Full infrastructure usage",
        JP: "インフラ設備の完全利用",
      },
      {
        EN: "General consultation (\"Yorozu\" Consultation, in-person)",
        JP: "一般相談（「よろず」相談、対面）",
      },
      {
        EN: "Participation in India study sessions",
        JP: "インド勉強会への参加",
      },
      {
        EN: "Initial network introductions",
        JP: "初期ネットワーク紹介",
      },
    ],
  },
  {
    id: "advance",
    jpName: "アドバンスプラン",
    enName: "Advance Plan",
    priceINR: "120,000",
    accent: "saffron",
    badge: {
      text: { EN: "FLAGSHIP", JP: "フラッグシップ" },
      icon: Crown,
    },
    target: {
      EN: "Enterprises, regional banks, and local governments aiming to accelerate full market entry.",
      JP: "本格的な市場参入を加速させる企業・地方銀行・自治体向け。",
    },
    features: [
      {
        EN: "Everything in Standard Plan",
        JP: "スタンダードプランのすべてを含む",
      },
      {
        EN: "Indobox early-phase hands-on consulting",
        JP: "Indoboxによる初期段階の実践コンサルティング",
      },
      {
        EN: "Business meeting accompaniment (up to 1×/month)",
        JP: "商談同席（月1回まで）",
      },
      {
        EN: "Priority invitations to networking events",
        JP: "ネットワーキングイベントへの優先招待",
      },
      {
        EN: "Detailed local partner introductions and matching",
        JP: "現地パートナーの詳細紹介・マッチング",
      },
    ],
  },
];

const accentMap = {
  slate: {
    ring: "border-slate/30",
    bar: "from-slate to-ink",
    text: "text-slate",
    chipBg: "bg-slate/10",
    priceColor: "text-ink",
    cta:
      "border-slate/30 text-slate hover:bg-slate/5 hover:border-slate/50",
    icon: Building2,
    iconBg: "bg-slate/10",
  },
  crimson: {
    ring: "border-crimson/40",
    bar: "from-crimson to-crimson-deep",
    text: "text-crimson",
    chipBg: "bg-crimson/10",
    priceColor: "text-crimson-deep",
    cta:
      "bg-gradient-to-r from-crimson to-crimson-deep text-white shadow-[0_0_20px_rgba(188,26,44,0.35)] hover:-translate-y-0.5",
    icon: Star,
    iconBg: "bg-crimson/10",
  },
  saffron: {
    ring: "border-saffron/40",
    bar: "from-saffron to-[#c9881a]",
    text: "text-saffron",
    chipBg: "bg-saffron/10",
    priceColor: "text-[#a06c0c]",
    icon: Crown,
    iconBg: "bg-saffron/10",
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
          High-impact strip explaining the cost-performance thesis.
         ─────────────────────────────────────────────────────────── */}
      <section className="bg-ivory py-12 md:py-16">
        <div className="container-jg">
          <Reveal>
            <div className="relative overflow-hidden rounded-lg border border-crimson/15 bg-gradient-to-br from-pearl via-ivory to-ivory-warm p-7 shadow-card sm:p-10">
              {/* Decorative blob */}
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-saffron/20 to-crimson/10 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-crimson to-crimson-deep text-white shadow-card">
                      <TrendingDown className="h-6 w-6" strokeWidth={1.5} />
                    </span>
                    <Eyebrow>
                      {tx({ EN: "Why These Plans, Why Now", JP: "この料金設計の理由" })}
                    </Eyebrow>
                  </div>
                  <h2
                    className="mt-4 font-serif-jp font-bold leading-[1.25] text-ink"
                    style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}
                  >
                    {tx({
                      EN: "Designed as a high cost-performance strategic investment.",
                      JP: "高い費用対効果の戦略的投資として設計。",
                    })}
                  </h2>
                  <p className="mt-3 font-inter text-[14px] leading-relaxed text-slate">
                    {tx({
                      EN: "Typical India expansion costs run ¥15M–¥20M annually per expat, plus substantial setup fees. J-Gate membership replaces that cost burden with a flat monthly plan that includes workspace, infrastructure, consultation, and community access — at a fraction of the price.",
                      JP: "従来のインド進出コストは駐在員1人当たり年間¥15M〜¥20M、加えて多額の設立費用がかかります。J-Gateメンバーシップは、ワークスペース・インフラ・相談・コミュニティアクセスを含む月額定額プランで、そのコスト負担をわずかの価格で代替します。",
                    })}
                  </p>
                </div>

                {/* Cost comparison stat strip */}
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                  <div className="rounded-lg border border-crimson/15 bg-white/60 p-4 text-center lg:text-left">
                    <p className="font-inter text-[10px] font-semibold uppercase text-mist" style={{ letterSpacing: "0.12em" }}>
                      {tx({ EN: "Typical Annual Expat Cost", JP: "従来型駐在員年間コスト" })}
                    </p>
                    <p className="mt-1 font-serif-jp text-xl font-bold text-ink line-through decoration-crimson/40 decoration-2">
                      ¥15M–¥20M
                    </p>
                    <p className="font-inter text-[11px] text-mist">
                      {tx({ EN: "per expat + setup fees", JP: "駐在員1名＋設立費用" })}
                    </p>
                  </div>
                  <div className="rounded-lg border border-saffron/30 bg-gradient-to-br from-saffron/[0.06] to-crimson/[0.04] p-4 text-center lg:text-left">
                    <p className="font-inter text-[10px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.12em" }}>
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
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 2 — 3 Pricing Cards (Slide 9)
          Standard plan is centered + elevated. Others flank it.
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
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({
                  EN: "Choose the Plan That Matches Your India Stage",
                  JP: "貴社のインド段階に合ったプランを",
                })}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {tx({
                  EN: "Whether you already have an Indian entity, are actively considering entry, or are accelerating a full-market expansion — there is a J-Gate plan calibrated to your stage.",
                  JP: "インド法人を既にお持ちの方、参入を検討中の方、あるいは本格市場展開を加速させる方 — いずれの段階にも合致するJ-Gateプランが用意されています。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {PLANS.map((plan, i) => {
              const a = accentMap[plan.accent];
              const isHighlight = plan.highlight;
              return (
                <Reveal key={plan.id} delay={i * 100}>
                  <article
                    className={`lift-card relative flex h-full flex-col overflow-hidden rounded-lg border-2 bg-pearl p-7 shadow-card transition-all sm:p-8 ${
                      a.ring
                    } ${isHighlight ? "lg:-translate-y-4 lg:scale-[1.03] lg:shadow-[0_20px_60px_rgba(188,26,44,0.18)]" : ""}`}
                  >
                    {/* Top accent bar */}
                    <span className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${a.bar}`} />

                    {/* Badge */}
                    {plan.badge && (
                      <div className="absolute right-5 top-5">
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
                    <span className={`flex h-12 w-12 items-center justify-center rounded-md ${a.iconBg} ${a.text}`}>
                      <a.icon className="h-6 w-6" strokeWidth={1.5} />
                    </span>

                    {/* Plan name */}
                    <h3 className="mt-5 font-serif-jp text-xl font-bold leading-tight text-ink sm:text-2xl">
                      {plan.enName}
                    </h3>
                    <p className="mt-0.5 font-sans-jp text-[13px] font-medium text-mist">
                      {plan.jpName}
                    </p>

                    {/* Price */}
                    <div className="mt-5 flex items-baseline gap-1">
                      <span className={`font-serif-jp text-4xl font-bold ${a.priceColor} sm:text-5xl`}>
                        {plan.priceINR}
                      </span>
                      <span className="font-inter text-[13px] font-semibold text-slate">
                        INR
                      </span>
                      <span className="font-inter text-[12px] text-mist">/mo</span>
                    </div>
                    <p className="mt-1 font-inter text-[11px] text-mist">
                      {tx({ EN: "excl. GST", JP: "GST別" })}
                    </p>

                    {/* Target */}
                    <div className="mt-5 border-t border-crimson/10 pt-5">
                      <p className="font-inter text-[10px] font-semibold uppercase text-mist" style={{ letterSpacing: "0.12em" }}>
                        {tx({ EN: "Target", JP: "対象" })}
                      </p>
                      <p className="mt-2 font-inter text-[13px] leading-relaxed text-slate">
                        {tx(plan.target)}
                      </p>
                    </div>

                    {/* Features checklist */}
                    <div className="mt-5 flex-1 border-t border-crimson/10 pt-5">
                      <p className="font-inter text-[10px] font-semibold uppercase text-mist" style={{ letterSpacing: "0.12em" }}>
                        {tx({ EN: "Included", JP: "含まれる内容" })}
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {plan.features.map((f, fi) => (
                          <li key={fi} className="flex items-start gap-2.5">
                            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${a.chipBg} ${a.text}`}>
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

          {/* Below-cards comparison strip */}
          <Reveal delay={120}>
            <div className="mt-12 grid gap-3 rounded-lg border border-crimson/12 bg-pearl p-5 shadow-card sm:grid-cols-3 sm:p-6">
              {[
                { icon: Users, label: tx({ EN: "People per plan", JP: "プランあたり人数" }), value: "2 → 4 → +" },
                { icon: Sparkles, label: tx({ EN: "Service depth", JP: "サービス深度" }), value: tx({ EN: "Workspace → Yorozu → Hands-on", JP: "ワークスペース → よろず → 実践" }) },
                { icon: Building2, label: tx({ EN: "Best for", JP: "最適な対象" }), value: tx({ EN: "Established → Entering → Accelerating", JP: "既存 → 参入 → 加速" }) },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-crimson/10 text-crimson">
                    <s.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-inter text-[10px] font-semibold uppercase text-mist" style={{ letterSpacing: "0.1em" }}>
                      {s.label}
                    </p>
                    <p className="font-serif-jp text-[13px] font-bold text-ink">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 3 — Notes (Slide 9)
          Important disclosures about base fees, INR/JPY, GST.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-4xl rounded-lg border border-crimson/15 bg-pearl p-7 shadow-card sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-crimson/10 text-crimson">
                  <AlertCircle className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <Eyebrow>
                    {tx({ EN: "Important Notes", JP: "重要事項" })}
                  </Eyebrow>
                  <h3
                    className="mt-1 font-serif-jp text-lg font-bold text-ink sm:text-xl"
                  >
                    {tx({
                      EN: "Read Before You Subscribe",
                      JP: "ご契約前の確認事項",
                    })}
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-saffron/15 text-saffron">
                    <Banknote className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                  <p className="font-inter text-[13px] leading-relaxed text-slate">
                    <span className="font-semibold text-ink">
                      {tx({ EN: "Base fees only. ", JP: "基本料金のみ。 " })}
                    </span>
                    {tx({
                      EN: "Prices shown are base monthly fees — corporate registration agency fees and recruitment referral commissions are charged separately based on actual scope of work.",
                      JP: "記載の価格は月額基本料金です — 法人登記代行手数料および人材紹介紹介手数料は、実作業スコープに基づき別途請求されます。",
                    })}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-saffron/15 text-saffron">
                    <span className="font-serif-jp text-[10px] font-bold">¥</span>
                  </span>
                  <p className="font-inter text-[13px] leading-relaxed text-slate">
                    <span className="font-semibold text-ink">
                      {tx({ EN: "INR billing, JPY settlement supported. ", JP: "INR請求、JPY決済対応。 " })}
                    </span>
                    {tx({
                      EN: "All plans are billed in Indian Rupees (INR). Settlement in Japanese Yen (JPY) is also supported — conversion rates fluctuate based on prevailing foreign exchange conditions.",
                      JP: "全プランはインドルピー（INR）で請求されます。日本円（JPY）での決済にも対応 — 換算レートは外国為替状況に応じて変動します。",
                    })}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-saffron/15 text-saffron">
                    <span className="font-serif-jp text-[10px] font-bold">GST</span>
                  </span>
                  <p className="font-inter text-[13px] leading-relaxed text-slate">
                    <span className="font-semibold text-ink">
                      {tx({ EN: "GST excluded. ", JP: "GST別。 " })}
                    </span>
                    {tx({
                      EN: "All listed prices are exclusive of India's Goods and Services Tax (GST), which will be added to invoices as per applicable rates.",
                      JP: "記載価格はインドの物品サービス税（GST）を除外した価格であり、適用税率に従い請求書に追加されます。",
                    })}
                  </p>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Closing CTA — contact strip with email + phone
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
                className="mt-6 font-serif-jp font-bold leading-[1.18] text-white"
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({
                  EN: "Ready to Choose Your Plan?",
                  JP: "プランをお選びですか？",
                })}
              </h2>
              <p
                className="mx-auto mt-4 font-inter leading-relaxed text-mist"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {tx({
                  EN: "Talk to our operations team — we'll help you select the right plan, scope any add-ons (corporate setup, recruitment, consulting), and walk you through INR/JPY billing.",
                  JP: "運営チームにご相談ください — 最適なプランの選定、追加サービス（法人設立、採用、コンサルティング）のスコープ提示、INR/JPY請求の流れまでご案内します。",
                })}
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
              <div className="mt-10 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-6 sm:flex-row sm:gap-8">
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
