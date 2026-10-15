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
  Target,
  Wifi,
  Video,
  Printer,
  KeyRound,
  Zap,
  Coffee,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Bilingual = { EN: string; JP: string };

type InfrastructureFeature = {
  icon: typeof Wifi;
  text: Bilingual;
};

type Plan = {
  id: "satellite" | "standard" | "advance";
  icon: typeof Compass;
  jpName: string;
  enName: string;
  tierSubtitle: Bilingual;
  tagline: Bilingual;
  capacity: Bilingual;
  capacityCategory: "1-2" | "3-4" | "enterprise";
  accentBorder: string;
  accentBadge: string;
  accentBg: string;
  specs: {
    term: Bilingual;
    access: Bilingual;
    support: Bilingual;
  };
  target: Bilingual;
  features: {
    title: Bilingual;
    desc?: Bilingual;
  }[];
  infrastructure: InfrastructureFeature[];
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
    accentBorder: "border-t-4 border-t-slate-400 dark:border-t-slate-500",
    accentBadge: "text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/10 border-slate-200 dark:border-white/15",
    accentBg: "bg-slate-100 dark:bg-white/5 border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-white",
    specs: {
      term: { EN: "Flexible / Monthly", JP: "月単位・柔軟契約" },
      access: { EN: "24/7 Keycard Entry", JP: "24時間入退室管理" },
      support: { EN: "Infrastructure Access", JP: "インフラ設備完備" },
    },
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
    infrastructure: [
      {
        icon: Wifi,
        text: {
          EN: "High-speed 1 Gbps dual-fiber Wi-Fi with provider backup",
          JP: "1 Gbps 高速光回線Wi-Fi（回線冗長化バックアップ完備）",
        },
      },
      {
        icon: Video,
        text: {
          EN: "Dedicated meeting rooms & soundproof video booths",
          JP: "専用会議室および防音オンライン商談ブース利用",
        },
      },
      {
        icon: Printer,
        text: {
          EN: "Xerox high-speed multifunction color printer & scanner",
          JP: "Xerox 高性能カラー複合機・スキャナー完備",
        },
      },
      {
        icon: KeyRound,
        text: {
          EN: "24/7 biometric & keycard access with CCTV security",
          JP: "24時間対応のICカード・生体認証セキュリティ",
        },
      },
      {
        icon: Zap,
        text: {
          EN: "100% continuous UPS power backup & commercial address",
          JP: "無停電電源装置（UPS）＆登記可能商業アドレス",
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
    accentBorder: "border-t-4 border-t-crimson dark:border-t-rose-500",
    accentBadge: "text-crimson dark:text-rose-400 bg-crimson/10 dark:bg-rose-950/60 border-crimson/25 dark:border-rose-400/30",
    accentBg: "bg-crimson/10 dark:bg-rose-950/40 border-crimson/30 dark:border-rose-400/30 text-crimson dark:text-rose-400",
    specs: {
      term: { EN: "Flexible / Monthly", JP: "月単位・柔軟契約" },
      access: { EN: "24/7 Keycard Entry", JP: "24時間入退室管理" },
      support: { EN: "Daily In-Person Desk", JP: "常駐日本人ディレクター" },
    },
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
    infrastructure: [
      {
        icon: Users,
        text: {
          EN: "Full workspace amenities with expanded seating for up to 4",
          JP: "最大4名まで利用可能なチーム専用執務エリア",
        },
      },
      {
        icon: Wifi,
        text: {
          EN: "Dedicated 1 Gbps high-speed network with Japan hours priority",
          JP: "1 Gbps 専用高速回線（日本時間帯優先ネットワーク）",
        },
      },
      {
        icon: Video,
        text: {
          EN: "Priority conference room booking & presentation facilities",
          JP: "クライアント商談用会議室の優先予約・プレゼン設備",
        },
      },
      {
        icon: Printer,
        text: {
          EN: "Full Xerox enterprise document center & personal lockers",
          JP: "Xerox 高性能印刷センター＆施錠付き個人ロッカー",
        },
      },
      {
        icon: Coffee,
        text: {
          EN: "Resident bilingual Japan Desk access & refreshment lounge",
          JP: "常駐日本人デスク・日英対応＆カフェラウンジ利用",
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
    accentBorder: "border-t-4 border-t-amber-500 dark:border-t-amber-400",
    accentBadge: "text-amber-700 dark:text-amber-300 bg-amber-500/10 dark:bg-amber-950/60 border-amber-500/30 dark:border-amber-400/30",
    accentBg: "bg-amber-500/10 dark:bg-amber-950/40 border-amber-500/30 dark:border-amber-400/30 text-amber-700 dark:text-amber-300",
    specs: {
      term: { EN: "Custom / Annual", JP: "年間または個別設計" },
      access: { EN: "24/7 Keycard Entry", JP: "24時間入退室管理" },
      support: { EN: "Hands-on Partner + VIP", JP: "実践コンサル＋VIP窓口" },
    },
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
    infrastructure: [
      {
        icon: Building2,
        text: {
          EN: "Custom executive office layout with corporate branding",
          JP: "個別最適化エグゼクティブオフィス＆社名プレート掲示",
        },
      },
      {
        icon: Video,
        text: {
          EN: "VIP executive boardroom access for government delegations",
          JP: "政府機関・要人来訪対応VIPエグゼクティブ会議室",
        },
      },
      {
        icon: Wifi,
        text: {
          EN: "Dedicated high-security enterprise VLAN & encrypted network",
          JP: "専用高セキュリティ企業向けVLAN・暗号化ネットワーク",
        },
      },
      {
        icon: KeyRound,
        text: {
          EN: "Private executive lockable cabinets & biometric control",
          JP: "専用施錠キャビネット＆生体認証厳格アクセス管理",
        },
      },
      {
        icon: Sparkles,
        text: {
          EN: "Direct access pipeline to T-Hub & Woxsen University incubators",
          JP: "T-Hubインキュベーター・Woxsen大学産学連携パイプライン",
        },
      },
    ],
  },
];

export function PricingSection({ id, hideHero }: { id?: string; hideHero?: boolean }) {
  const { tx, lang } = useI18n();

  return (
    <div id={id} className="bg-ivory dark:bg-black transition-colors scroll-mt-20">
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
            EN: "Designed as a strategic enterprise solution — providing Japanese enterprises with a dedicated workspace and resident advisory in Hyderabad.",
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
              eyebrow={tx({ EN: "Membership Plans", JP: "透明で明瞭なメンバーシップ体系" })}
              title={tx({
                EN: "Choose Your Membership Plan",
                JP: "進出段階に合わせて選べる3つのプラン",
              })}
            />
          </Reveal>

          {/* Grid of 3 Balanced Cards — High-End Executive Presentation */}
          <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 lg:gap-6 lg:grid-cols-3 items-stretch">
            {PLANS.map((plan, i) => {
              const Icon = plan.icon;
              const isFeatured = plan.id === "standard";

              return (
                <Reveal key={plan.id} delay={i * 80} variant="up">
                  <div
                    className={cn(
                      "luxury-light-card card-sheen group relative flex h-full flex-col justify-between rounded-2xl bg-white dark:bg-[#09090b] border transition-all duration-300 p-5 sm:p-6 lg:p-6.5",
                      plan.accentBorder,
                      isFeatured
                        ? "border-crimson/70 dark:border-rose-400/60 shadow-[0_18px_45px_-10px_rgba(188,26,44,0.18)] dark:shadow-[0_22px_55px_-10px_rgba(188,26,44,0.35)] ring-1 ring-crimson/25"
                        : "border-slate-200/90 dark:border-white/12 shadow-card dark:shadow-2xl hover:border-slate-300 dark:hover:border-white/25 hover:-translate-y-1"
                    )}
                  >
                    {/* Top Content Area */}
                    <div>
                      {/* Header Row: Icon + Title + Capacity Badge */}
                      <div className="flex items-start justify-between gap-3 pb-3.5 border-b border-slate-100 dark:border-white/8">
                        <div className="flex items-center gap-3">
                          <div
                            className={cn(
                              "flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border shadow-2xs transition-transform duration-300 group-hover:scale-105",
                              plan.accentBg
                            )}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-serif-jp text-[17px] sm:text-[18px] font-bold text-ink dark:text-white leading-tight">
                                {plan.enName}
                              </h3>
                            </div>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              {lang === "JP" && (
                                <span className="text-[11.5px] font-medium text-slate-500 dark:text-slate-400 font-sans-jp">
                                  {plan.jpName} ·
                                </span>
                              )}
                              <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                                {tx(plan.tierSubtitle)}
                              </span>
                            </div>
                          </div>
                        </div>

                        <span
                          className={cn(
                            "inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-inter text-[10px] sm:text-[10.5px] font-bold shrink-0 border shadow-2xs",
                            plan.accentBadge
                          )}
                        >
                          <Users className="h-2.5 w-2.5" />
                          {tx(plan.capacity)}
                        </span>
                      </div>

                      {/* Target Audience Summary Callout */}
                      <div className="mt-3.5 rounded-xl bg-slate-50/90 dark:bg-white/[0.03] p-3 border border-slate-200/70 dark:border-white/8">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Target className="h-3 w-3 text-crimson dark:text-rose-400 shrink-0" />
                          <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                            {tx({ EN: "Target Audience", JP: "対象企業" })}
                          </span>
                        </div>
                        <p className="font-inter text-[11.5px] sm:text-[12px] text-slate-700 dark:text-slate-200 leading-snug font-medium">
                          {tx(plan.target)}
                        </p>
                      </div>

                      {/* Operational Specifications (Fully Visible, No Truncation) */}
                      <div className="mt-3 grid grid-cols-3 gap-2 rounded-xl bg-slate-100/70 dark:bg-white/[0.04] p-2.5 sm:p-3 border border-slate-200/80 dark:border-white/8">
                        <div className="flex flex-col">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-600 dark:text-slate-300 font-bold">
                            {tx({ EN: "Term", JP: "契約形態" })}
                          </span>
                          <span className="mt-1 font-inter text-[11px] sm:text-[11.5px] font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                            {tx(plan.specs.term)}
                          </span>
                        </div>
                        <div className="flex flex-col border-l border-slate-200/80 dark:border-white/10 pl-2">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-600 dark:text-slate-300 font-bold">
                            {tx({ EN: "Building Access", JP: "利用時間" })}
                          </span>
                          <span className="mt-1 font-inter text-[11px] sm:text-[11.5px] font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                            {tx(plan.specs.access)}
                          </span>
                        </div>
                        <div className="flex flex-col border-l border-slate-200/80 dark:border-white/10 pl-2">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-crimson dark:text-rose-400 font-bold">
                            {tx({ EN: "Support & Infra", JP: "支援・インフラ" })}
                          </span>
                          <span className="mt-1 font-inter text-[11px] sm:text-[11.5px] font-bold text-crimson dark:text-rose-400 leading-tight">
                            {tx(plan.specs.support)}
                          </span>
                        </div>
                      </div>

                      {/* Primary Plan Deliverables Checklist */}
                      <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-white/8">
                        <div className="flex items-center gap-1.5 mb-2.5">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                            {tx({ EN: "Core Deliverables & Scope", JP: "提供サービス・特徴" })}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {plan.features.map((feat, fi) => (
                            <li
                              key={fi}
                              className="flex items-start gap-2 text-[11.5px] sm:text-[12px] font-inter text-slate-800 dark:text-slate-200 leading-snug"
                            >
                              <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-700/40">
                                <Check className="h-2 w-2 stroke-[3]" />
                              </span>
                              <span className="min-w-0 flex-1 font-medium">
                                {tx(feat.title)}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Detailed Infrastructure & Amenities Section (Addressing "based on that add more information") */}
                      <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-white/8">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            <Building2 className="h-3 w-3 text-crimson dark:text-rose-400" />
                            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                              {tx({ EN: "Infrastructure Inclusions", JP: "利用可能インフラ設備" })}
                            </span>
                          </div>
                          <span className="text-[9.5px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200/80 dark:border-emerald-700/40 font-mono">
                            {tx({ EN: "Included", JP: "設備完備" })}
                          </span>
                        </div>

                        <div className="space-y-1.5 rounded-xl bg-slate-50/70 dark:bg-white/[0.02] p-2.5 border border-slate-200/60 dark:border-white/6">
                          {plan.infrastructure.map((infra, ii) => {
                            const InfraIcon = infra.icon;
                            return (
                              <div
                                key={ii}
                                className="flex items-start gap-2 text-[10.5px] sm:text-[11px] font-inter text-slate-700 dark:text-slate-300 leading-tight"
                              >
                                <span className="mt-0.5 flex h-3 w-3 shrink-0 items-center justify-center text-slate-500 dark:text-slate-400">
                                  <InfraIcon className="h-2.5 w-2.5" />
                                </span>
                                <span className="text-slate-600 dark:text-slate-300 font-normal">
                                  {tx(infra.text)}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Executive Consultation & Custom Inquiries Banner */}
          <Reveal delay={200}>
            <div className="mt-8 sm:mt-10 mx-auto max-w-4xl rounded-2xl border border-slate-200/90 dark:border-white/12 bg-white/95 dark:bg-[#09090b]/95 p-5 sm:p-6 shadow-md backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-crimson/10 dark:bg-rose-950/60 border border-crimson/20 dark:border-rose-400/30 text-crimson dark:text-rose-400">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif-jp text-sm sm:text-[15px] font-bold text-ink dark:text-white">
                    {tx({
                      EN: "Need a Custom Corporate Proposal or Entity Guidance?",
                      JP: "企業規模に応じた個別提案や法人設立のご相談はこちら",
                    })}
                  </h4>
                  <p className="mt-0.5 font-inter text-xs text-slate-600 dark:text-slate-300">
                    {tx({
                      EN: "Our bilingual Japan Desk in Tokyo and Hyderabad provides custom seat allocations, incorporation packages, and confidential briefing sessions.",
                      JP: "東京およびハイデラバードのバイリンガルチームが、座席数のカスタマイズ、法人設立、個別視察のアレンジまで丁寧に対応いたします。",
                    })}
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="btn-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-crimson to-crimson-deep px-5 py-2.5 font-inter text-[12.5px] sm:text-[13px] font-semibold text-white shadow-md shadow-crimson/25 hover:shadow-lg hover:shadow-crimson/40 hover:-translate-y-0.5 transition-all shrink-0 w-full sm:w-auto justify-center"
              >
                <span>{tx({ EN: "Contact Japan Desk", JP: "日本人デスクに相談する" })}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
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
