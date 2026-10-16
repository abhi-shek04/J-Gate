"use client";

import { Reveal, SectionHeading } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import Link from "next/link";
import {
  Check,
  Banknote,
  Receipt,
  ShieldCheck,
  Users,
  Compass,
  Briefcase,
  Building2,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Bilingual = { EN: string; JP: string };

type Plan = {
  id: "satellite" | "standard" | "advance";
  icon: typeof Compass;
  jpName: string;
  enName: string;
  tierSubtitle: Bilingual;
  tagline: Bilingual;
  capacity: Bilingual;
  capacityCategory: "1-2" | "3-4" | "enterprise";
  gradientBar: string;
  glowAura: string;
  iconBg: string;
  capacityBadge: string;
  checkBadge: string;
  cardBorder: string;
  buttonStyle: string;
  target: Bilingual;
  features: {
    title: Bilingual;
    desc?: Bilingual;
  }[];
};

const PLANS: Plan[] = [
  {
    id: "satellite",
    icon: Compass,
    jpName: "サテライトプラン",
    enName: "Satellite Plan",
    tierSubtitle: {
      EN: "Market Development Hub",
      JP: "販路開拓サテライト拠点",
    },
    tagline: {
      EN: "Ideal as a market development base in Hyderabad and Andhra Pradesh.",
      JP: "ハイデラバードおよびアーンドラ・プラデーシュ州での販路開拓拠点として最適。",
    },
    capacity: { EN: "Up to 2 Members", JP: "最大2名" },
    capacityCategory: "1-2",
    gradientBar: "from-blue-600 via-indigo-500 to-cyan-400",
    glowAura: "from-indigo-500/20 via-blue-500/10 to-transparent",
    iconBg: "bg-indigo-50/90 dark:bg-indigo-950/60 text-indigo-600 dark:text-blue-400 border-indigo-200/80 dark:border-indigo-800/40 group-hover:border-indigo-400 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]",
    capacityBadge: "text-indigo-700 dark:text-blue-300 bg-indigo-50/90 dark:bg-blue-950/60 border-indigo-200 dark:border-blue-800/50",
    checkBadge: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-blue-400 border-indigo-200/80 dark:border-indigo-700/40",
    cardBorder: "border-slate-200/80 dark:border-white/10 hover:border-indigo-400/60 dark:hover:border-blue-400/50 hover:shadow-[0_20px_45px_-10px_rgba(99,102,241,0.18)] dark:hover:shadow-[0_20px_45px_-10px_rgba(59,130,246,0.25)]",
    buttonStyle: "bg-indigo-50/80 dark:bg-indigo-950/50 text-indigo-700 dark:text-blue-300 border border-indigo-200/90 dark:border-blue-800/40 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white hover:border-indigo-600 hover:shadow-md hover:shadow-indigo-500/25",
    target: {
      EN: "Exclusively for Japanese companies that already have a legal entity in India.",
      JP: "既にインド現地法人をお持ちの日系企業様専用。",
    },
    features: [
      {
        title: {
          EN: "Use of coworking space (unlimited, up to 2 people)",
          JP: "コワーキングスペース利用（無制限、最大2名）",
        },
      },
      {
        title: {
          EN: "Access to various infrastructure facilities",
          JP: "各種インフラ設備の利用",
        },
      },
      {
        title: {
          EN: "Ideal as a market development base in Hyderabad and Andhra Pradesh",
          JP: "ハイデラバードおよびアーンドラ・プラデーシュ州での販路開拓拠点として最適",
        },
      },
    ],
  },
  {
    id: "standard",
    icon: Briefcase,
    jpName: "スタンダードプラン",
    enName: "Standard Plan",
    tierSubtitle: {
      EN: "Resident Advisory & Core Hub",
      JP: "常駐相談付き進出拠点",
    },
    tagline: {
      EN: "In-person consultation & study sessions for companies expanding to India.",
      JP: "対面相談・インド勉強会参加付きの本格的進出拠点。",
    },
    capacity: { EN: "Up to 4 Members", JP: "最大4名" },
    capacityCategory: "3-4",
    gradientBar: "from-crimson via-rose-500 to-amber-500",
    glowAura: "from-crimson/25 via-rose-500/12 to-transparent",
    iconBg: "bg-crimson/10 dark:bg-rose-950/60 text-crimson dark:text-rose-400 border-crimson/30 dark:border-rose-400/30 group-hover:border-crimson group-hover:shadow-[0_0_22px_rgba(188,26,44,0.3)]",
    capacityBadge: "text-crimson dark:text-rose-300 bg-crimson/10 dark:bg-rose-950/60 border-crimson/30 dark:border-rose-500/40",
    checkBadge: "bg-crimson/10 dark:bg-rose-950/60 text-crimson dark:text-rose-400 border-crimson/25 dark:border-rose-700/40",
    cardBorder: "border-crimson/40 dark:border-rose-400/40 shadow-[0_16px_40px_-12px_rgba(188,26,44,0.14)] dark:shadow-[0_18px_45px_-12px_rgba(188,26,44,0.3)] ring-1 ring-crimson/20 hover:border-crimson dark:hover:border-rose-400 hover:shadow-[0_25px_60px_-12px_rgba(188,26,44,0.28)] dark:hover:shadow-[0_28px_65px_-12px_rgba(188,26,44,0.45)]",
    buttonStyle: "bg-gradient-to-r from-crimson to-crimson-deep text-white border border-crimson/30 shadow-md shadow-crimson/25 hover:shadow-lg hover:shadow-crimson/40 hover:-translate-y-0.5",
    target: {
      EN: "Japanese companies considering expansion into India (large enterprises, small and medium-sized enterprises, and startups).",
      JP: "インド進出をご検討中の日系企業様（大企業、中小企業、スタートアップ）。",
    },
    features: [
      {
        title: {
          EN: "Use of coworking space (unlimited, up to 4 people)",
          JP: "コワーキングスペース利用（無制限、最大4名）",
        },
      },
      {
        title: {
          EN: "Access to various infrastructure facilities",
          JP: "各種インフラ設備の利用",
        },
      },
      {
        title: {
          EN: "Consultation (in person)",
          JP: "対面での相談",
        },
      },
      {
        title: {
          EN: "Participation in India study sessions and networking introductions (initial stage)",
          JP: "インド勉強会への参加、ネットワーキングの紹介（初期段階）",
        },
      },
    ],
  },
  {
    id: "advance",
    icon: Building2,
    jpName: "アドバンスプラン",
    enName: "Advanced Plan",
    tierSubtitle: {
      EN: "Hands-on Acceleration Hub",
      JP: "実践コンサル・本格進出拠点",
    },
    tagline: {
      EN: "Hands-on entry consulting & monthly business meeting support by Indobox leadership.",
      JP: "Indobox実践コンサルティング＆月1回の現地重要商談同席支援付き。",
    },
    capacity: { EN: "Enterprise / Delegations", JP: "企業・自治体向け" },
    capacityCategory: "enterprise",
    gradientBar: "from-amber-500 via-amber-400 to-yellow-500",
    glowAura: "from-amber-500/20 via-yellow-500/10 to-transparent",
    iconBg: "bg-amber-50/90 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-300/80 dark:border-amber-400/30 group-hover:border-amber-400 group-hover:shadow-[0_0_20px_rgba(232,160,26,0.25)]",
    capacityBadge: "text-amber-800 dark:text-amber-300 bg-amber-50/90 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700/50",
    checkBadge: "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-200/80 dark:border-amber-700/40",
    cardBorder: "border-slate-200/80 dark:border-white/10 hover:border-amber-400/70 dark:hover:border-amber-400/50 hover:shadow-[0_20px_45px_-10px_rgba(232,160,26,0.2)] dark:hover:shadow-[0_20px_45px_-10px_rgba(232,160,26,0.28)]",
    buttonStyle: "bg-amber-50/80 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-300/90 dark:border-amber-700/40 hover:bg-amber-500 hover:text-ink dark:hover:bg-amber-500 dark:hover:text-black hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/25",
    target: {
      EN: "Companies wishing to accelerate serious preparations for entering the Indian market, regional banks, and local governments.",
      JP: "インド市場への本格的な進出準備を加速させたい企業様、地方銀行、自治体様。",
    },
    features: [
      {
        title: {
          EN: "All services included in the Standard Plan, plus initial-stage support and consulting for the Indobox expansion phase",
          JP: "スタンダードプランの全サービス込み、Indobox進出フェーズにおける初期段階支援・コンサルティング",
        },
      },
      {
        title: {
          EN: "Business meeting accompaniment support (up to once a month)",
          JP: "商談同席支援（月1回まで）",
        },
      },
      {
        title: {
          EN: "Priority invitations to business networking events",
          JP: "ビジネスネットワーキングイベントへの優先招待",
        },
      },
      {
        title: {
          EN: "Introduction to local business partners (detailed information and matching)",
          JP: "現地ビジネスパートナーの紹介（詳細情報提供およびマッチング）",
        },
      },
    ],
  },
];

export function PricingSection({ id, hideHero }: { id?: string; hideHero?: boolean }) {
  const { tx, lang } = useI18n();

  return (
    <div id={id || "pricing"} className="bg-ivory dark:bg-black transition-colors scroll-mt-20 relative">
      {/* Anchor targets so both #pricing and #membership scroll smoothly */}
      {id !== "membership" && <div id="membership" className="absolute -top-24 pointer-events-none" />}
      {id === "membership" && <div id="pricing" className="absolute -top-24 pointer-events-none" />}
      {!hideHero && (
        <PageHero
          eyebrowKey="pricing.eyebrow"
          layout="split"
          titleNode={
            <>
              {tx({ EN: "Membership Plans ", JP: "ハイデラバード拠点 " })}
              <br className="hidden sm:inline" />
              {tx({ EN: "— Hyderabad Operating Hub", JP: "メンバーシッププラン" })}
            </>
          }
          subtitleNode={tx({
            EN: "Designed as a strategic enterprise solution — providing Japanese enterprises with a dedicated working hub and resident advisory in Hyderabad.",
            JP: "日系企業に最適化された戦略的拠点モデル — ハイデラバードでの専用執務環境と日本人常駐サポートを提供。",
          })}
          tags={[
            { EN: "Flexible Desk & Suite Plans", JP: "柔軟なデスク・個室プラン" },
            { EN: "Custom Corporate Proposals", JP: "規模に応じた個別提案" },
            { EN: "Enterprise Infrastructure Included", JP: "完全インフラ込み" },
          ]}
        />
      )}

      {/* ───────────────────────────────────────────────────────────
          2. Three Executive Plan Cards
         ─────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-10 lg:py-14 bg-ivory-warm dark:bg-black relative overflow-hidden transition-colors">
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
              eyebrow={tx({ EN: "Membership", JP: "メンバーシップ" })}
              title={tx({
                EN: "Membership Plans",
                JP: "メンバーシッププラン",
              })}
            />
          </Reveal>

          {/* Grid of 3 Balanced Cards — High-End Executive Presentation */}
          <div className="mt-8 sm:mt-10 grid gap-6 lg:gap-7 lg:grid-cols-3 items-stretch">
            {PLANS.map((plan, i) => {
              const Icon = plan.icon;
              const isFeatured = plan.id === "standard";

              return (
                <Reveal key={plan.id} delay={i * 90} variant="up">
                  <div
                    className={cn(
                      "card-sheen group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl border transition-all duration-500 p-6 sm:p-6.5 lg:p-7 hover:-translate-y-2",
                      plan.cardBorder
                    )}
                  >
                    {/* Top 3.5px Glowing Accent Bar with Gradient */}
                    <div className={cn("absolute top-0 inset-x-0 h-1 bg-gradient-to-r shadow-xs", plan.gradientBar)} />

                    {/* Ambient Corner Aura Glow */}
                    <div
                      className={cn(
                        "pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full opacity-35 blur-2xl transition-opacity duration-500 group-hover:opacity-75",
                        plan.glowAura
                      )}
                    />

                    {/* Faint Asanoha Japanese Geometric Texture */}
                    <div className="pattern-asanoha-navy pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04] transition-opacity duration-700 group-hover:opacity-[0.06]" />

                    {/* Top Content Area */}
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div>
                        {/* Header Row: Icon + Title + Capacity Badge */}
                        <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-100 dark:border-white/8">
                          <div className="flex items-center gap-3.5">
                            <div
                              className={cn(
                                "flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl border shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-1",
                                plan.iconBg
                              )}
                            >
                              <Icon className="h-5.5 w-5.5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-serif-jp text-[18px] sm:text-[19px] font-bold text-ink dark:text-white leading-tight">
                                  {plan.enName}
                                </h3>
                              </div>
                              <div className="flex items-center gap-1.5 mt-1">
                                {lang === "JP" && (
                                  <span className="text-[12px] font-medium text-slate-500 dark:text-slate-400 font-sans-jp">
                                    {plan.jpName} ·
                                  </span>
                                )}
                                <span className="text-[11.5px] font-semibold text-slate-600 dark:text-slate-300">
                                  {tx(plan.tierSubtitle)}
                                </span>
                              </div>
                            </div>
                          </div>

                          <span
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-inter text-[10.5px] font-bold shrink-0 border shadow-2xs transition-transform duration-300 group-hover:scale-105",
                              plan.capacityBadge
                            )}
                          >
                            <Users className="h-2.5 w-2.5" />
                            {tx(plan.capacity)}
                          </span>
                        </div>

                        {/* Plan Description & Scope */}
                        <p className="mt-4 font-inter text-[13px] text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                          {tx(plan.target)}
                        </p>

                        {/* Primary Plan Deliverables Checklist */}
                        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/8">
                          <div className="flex items-center gap-1.5 mb-2.5">
                            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                              {tx({ EN: "Plan Inclusions", JP: "提供サービス・特徴" })}
                            </span>
                          </div>
                          <ul className="space-y-1">
                            {plan.features.map((feat, fi) => (
                              <li
                                key={fi}
                                className="group/item flex items-start gap-2.5 rounded-xl p-2 -mx-2 transition-all duration-200 hover:bg-slate-50/90 dark:hover:bg-white/[0.04]"
                              >
                                <span
                                  className={cn(
                                    "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border shadow-2xs transition-transform duration-200 group-hover/item:scale-110",
                                    plan.checkBadge
                                  )}
                                >
                                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                                </span>
                                <span className="min-w-0 flex-1 text-[12px] sm:text-[12.5px] font-inter font-medium text-slate-800 dark:text-slate-200 leading-snug group-hover/item:text-ink dark:group-hover/item:text-white transition-colors">
                                  {tx(feat.title)}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action Button: Inquiries about price */}
                      <div className="mt-6 pt-3.5 border-t border-slate-100 dark:border-white/8">
                        <Link
                          href={`/contact?plan=${plan.id}`}
                          className={cn(
                            "w-full inline-flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 font-inter text-[12.5px] sm:text-[13px] font-semibold transition-all duration-300 shadow-xs",
                            plan.buttonStyle
                          )}
                        >
                          <span>{tx({ EN: "Inquiries about price", JP: "料金のお問い合わせ" })}</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. Billing Notes & Transparent Guarantees
         ─────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-ivory-warm dark:bg-black border-t border-slate-200/70 dark:border-white/10 relative overflow-hidden">
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
                    title: { EN: "Tailored Corporate Proposals", JP: "柔軟な個別提案" },
                    badge: { EN: "Custom Scope", JP: "個別設計" },
                    desc: {
                      EN: "Every proposal is customized according to your team size, seating duration, and support needs. Incorporation and recruitment services can be seamlessly integrated.",
                      JP: "チーム規模、利用期間、支援内容に応じて個別の提案書・お見積りを作成いたします。法人設立や人材採用の支援も柔軟に組み合わせてご提案可能です。",
                    },
                  },
                  {
                    icon: Banknote,
                    title: { EN: "INR Corporate Invoicing", JP: "INR 決済対応" },
                    badge: { EN: "Direct Settlement", JP: "インドルピー決済" },
                    desc: {
                      EN: "All invoices are issued in Indian Rupees (INR) with full support for corporate bank transfer and credit card settlement.",
                      JP: "請求および決済はすべてインドルピー（INR）基準です。法人向け銀行振込および各種カード決済に対応。",
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
                      <div className="luxury-light-card card-sheen group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 dark:border-white/12 bg-white dark:bg-[#09090b] p-5.5 sm:p-6 shadow-md hover:shadow-xl hover:border-crimson/35 dark:hover:border-rose-400/40 transition-all duration-300 hover:-translate-y-1">
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
