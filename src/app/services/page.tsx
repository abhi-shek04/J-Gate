"use client";

import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { Photo } from "@/components/jgate/photo";
import { useI18n } from "@/lib/i18n";
import {
  Building2,
  Users,
  Megaphone,
  Languages,
  Workflow,
  Video,
  Clock,
  CalendarDays,
  Globe,
  CheckCircle2,
  Briefcase,
  Handshake,
  Home,
  Wifi,
  Users2,
  Coffee,
  DoorOpen,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Mail,
  Phone,
  Banknote,
} from "lucide-react";
import Link from "next/link";

/* ============================================================
   Services — v3.0 Definitive Redesign
   Architecture:
     1. PageHero — "Indobox Comprehensive Expansion Support"
     2. 5 Service Cards — numbered editorial cards, alternating photo sides
     3. Indobox Academy — dark navy section + 4 metric cards + 2 people
     4. Hybrid Operating Model — 2-col split (Indobox crimson vs Genesys saffron) + Living Support
     5. Facility Features — 6-card grid (3×2), photo on top
     6. Note strip — all infrastructure included
     7. Closing CTA
   ============================================================ */

type Bilingual = { EN: string; JP: string };

/* ── Section 2 — Business Expansion Services — Slide 4 ── */
const EXPANSION_SERVICES = [
  {
    num: "01",
    icon: Building2,
    accent: "crimson" as const,
    photoId: "photo-service-registration",
    fallback: "grad-office-main",
    initials: "CR",
    title: {
      EN: "Corporate Registration & Nominee Director",
      JP: "法人登記・登録住所・名義人ディレクター",
    } as Bilingual,
    desc: {
      EN: "Corporate registration address and Nominee Director name — a turnkey legal footprint in Hyderabad from day one.",
      JP: "法人登録住所および名義人ディレクター（Nominee Director）の提供 — 初日からハイデラバードに法的な拠点を構築。",
    } as Bilingual,
    bullets: [
      { EN: "Registered Hyderabad corporate address", JP: "ハイデラバードの登記住所" },
      { EN: "Nominee Director appointment", JP: "名義人ディレクターの就任" },
      { EN: "Turnkey legal entity footprint", JP: "完全な法人登記フットプリント" },
    ] as Bilingual[],
  },
  {
    num: "02",
    icon: Users,
    accent: "saffron" as const,
    photoId: "photo-service-talent",
    fallback: "grad-office-desks",
    initials: "TD",
    title: {
      EN: "Talent Development, Dispatching & Payroll",
      JP: "人材育成・派遣・給与管理",
    } as Bilingual,
    desc: {
      EN: "Full talent lifecycle — development, dispatching, and payroll administration handled end-to-end by India-side operators.",
      JP: "人材ライフサイクルの包括管理 — 育成・派遣・給与管理をインド側運営チームがエンドツーエンドで担当。",
    } as Bilingual,
    bullets: [
      { EN: "Talent development pipelines", JP: "人材育成パイプライン" },
      { EN: "Workforce dispatch services", JP: "人材派遣サービス" },
      { EN: "Payroll administration handled", JP: "給与管理の一元化" },
    ] as Bilingual[],
  },
  {
    num: "03",
    icon: Megaphone,
    accent: "crimson" as const,
    photoId: "photo-service-marketing",
    fallback: "grad-office-meeting",
    initials: "SM",
    title: {
      EN: "Sales & Marketing Support",
      JP: "営業・マーケティング支援",
    } as Bilingual,
    desc: {
      EN: "On-the-ground sales & marketing execution — lead generation, partner outreach, bilingual B2B/B2G campaigns.",
      JP: "現地での営業・マーケティング実行 — リード獲得、パートナーアプローチ、バイリンガルB2B/B2Gキャンペーン。",
    } as Bilingual,
    bullets: [
      { EN: "Lead generation engine", JP: "リード獲得エンジン" },
      { EN: "Strategic partner outreach", JP: "戦略的パートナーアプローチ" },
      { EN: "Bilingual B2B/B2G campaigns", JP: "バイリンガルB2B/B2Gキャンペーン" },
    ] as Bilingual[],
  },
  {
    num: "04",
    icon: Languages,
    accent: "saffron" as const,
    photoId: "photo-service-interpretation",
    fallback: "grad-office-cabin",
    initials: "IO",
    title: {
      EN: "Interpretation & Back-Office Outsourcing",
      JP: "通訳支援・バックオフィス代行",
    } as Bilingual,
    desc: {
      EN: "Interpretation support and back-office outsourcing — bookkeeping, accounting, vendor coordination by Japanese-speaking staff.",
      JP: "通訳支援およびバックオフィスアウトソーシング — 記帳・経理・ベンダー調整を日本語対応スタッフが担当。",
    } as Bilingual,
    bullets: [
      { EN: "Bookkeeping & accounting", JP: "記帳・経理対応" },
      { EN: "Vendor coordination, JP-speaking", JP: "日本語対応ベンダー調整" },
      { EN: "Interpretation on demand", JP: "通訳支援（オンデマンド）" },
    ] as Bilingual[],
  },
  {
    num: "05",
    icon: Workflow,
    accent: "crimson" as const,
    photoId: "photo-service-endtoend",
    fallback: "grad-office-lounge",
    initials: "EE",
    title: {
      EN: "End-to-End Support: Setup to Daily Ops",
      JP: "法人設立から日常実務まで一貫支援",
    } as Bilingual,
    desc: {
      EN: "Consistent end-to-end support — corporate establishment through to daily operations. One accountable partner.",
      JP: "法人設立から日常実務まで一貫したサポート — 責任の所在が一元的な単一パートナー。",
    } as Bilingual,
    bullets: [
      { EN: "One accountable partner", JP: "責任の所在が一元化" },
      { EN: "Setup → daily operations seamless", JP: "設立から日常実務までシームレス" },
      { EN: "Zero hand-off gaps", JP: "引き継ぎの隙間なし" },
    ] as Bilingual[],
  },
] as const;

/* ── Section 3 — Indobox Academy ── */
const ACADEMY_METRICS = [
  {
    icon: Video,
    label: { EN: "Format", JP: "形式" } as Bilingual,
    value: { EN: "Online", JP: "オンライン" } as Bilingual,
  },
  {
    icon: Clock,
    label: { EN: "Duration", JP: "時間" } as Bilingual,
    value: { EN: "60 min / session", JP: "1回60分" } as Bilingual,
  },
  {
    icon: CalendarDays,
    label: { EN: "Frequency", JP: "頻度" } as Bilingual,
    value: { EN: "Once / 1–2 months", JP: "1〜2か月に1回" } as Bilingual,
  },
  {
    icon: Globe,
    label: { EN: "Language", JP: "言語" } as Bilingual,
    value: { EN: "日本語", JP: "日本語" } as Bilingual,
  },
] as const;

/* ── Section 4 — Indo-Japan Hybrid Operating Model ── */
const INDOBOX_DUTIES = [
  { EN: "Marketing & client acquisition", JP: "マーケティングおよび顧客獲得" },
  { EN: "Japan–India facilitation & coordination", JP: "日印間の調整および連携" },
  { EN: "Client relationship management", JP: "顧客関係の維持・管理" },
  { EN: "Project lead securing", JP: "プロジェクトリードの獲得" },
] as const;

const GENESYS_DUTIES = [
  { EN: "High-quality workspaces", JP: "高品質なワークスペースの提供" },
  { EN: "Local talent securing & management", JP: "現地人材の確保・管理" },
  { EN: "Engaging Indian cos seeking JP partners", JP: "日本企業と連携するインド企業との折衝" },
  { EN: "Facility & infrastructure maintenance", JP: "現地施設・インフラの保守・運営" },
] as const;

const LIVING_SUPPORT = [
  { emoji: "🏠", label: { EN: "Apartment / housing search", JP: "住居・アパート探し" } as Bilingual },
  { emoji: "📋", label: { EN: "FRRO registration", JP: "FRRO（外国人登録）手続き" } as Bilingual },
  { emoji: "🏨", label: { EN: "Long-stay hotel arrangements", JP: "長期滞在ホテル手配" } as Bilingual },
  { emoji: "🛟", label: { EN: "Daily-life support, as required", JP: "日常生活支援（必要に応じて）" } as Bilingual },
] as const;

/* ── Section 5 — Facility Features — Slide 6 ── */
const FACILITIES = [
  {
    icon: Briefcase,
    photoId: "photo-facility-workspace",
    fallback: "grad-office-desks",
    initials: "DW",
    jp: "専用ワークスペース",
    en: "Dedicated Workspace",
    desc: {
      EN: "Fixed desks, cabinets, and private lockers — every member has their own anchor in the building.",
      JP: "固定デスク、キャビネット、プライベートロッカー — すべてのメンバーに自分の居場所。",
    } as Bilingual,
  },
  {
    icon: Wifi,
    photoId: "photo-facility-wifi",
    fallback: "grad-amenity",
    initials: "CI",
    jp: "通信インフラ",
    en: "Communication Infrastructure",
    desc: {
      EN: "High-speed Wi-Fi and Xerox multifunction printers/copiers available on every floor.",
      JP: "高速Wi-FiおよびXerox複合機プリンター・コピー機を各フロアに完備。",
    } as Bilingual,
  },
  {
    icon: Users2,
    photoId: "photo-facility-meeting",
    fallback: "grad-office-meeting",
    initials: "MR",
    jp: "会議室",
    en: "Meeting Rooms",
    desc: {
      EN: "For negotiations and internal meetings — stepwise expansion as your team grows.",
      JP: "商談やチーム会議に利用可能 — チーム成長に合わせて段階的に拡張。",
    } as Bilingual,
  },
  {
    icon: Coffee,
    photoId: "photo-facility-cafeteria",
    fallback: "grad-canteen-main",
    initials: "TF",
    jp: "共同食堂",
    en: "TASTY FOOD JUNCTION",
    desc: {
      EN: "Indian snacks, classic curries, biryani, and Indian-Chinese cuisine — a hub of casual networking.",
      JP: "インドスナック、クラシックカレー、ビリヤニ、インド中華 — カジュアルな交流のハブ。",
    } as Bilingual,
  },
  {
    icon: DoorOpen,
    photoId: "photo-facility-access",
    fallback: "grad-office-lounge",
    initials: "AC",
    jp: "24/7アクセス",
    en: "24/7 Access",
    desc: {
      EN: "24 hours a day, 365 days a year — entry via dedicated smart key cards held by every member.",
      JP: "年中無休24時間・スマートキーカードで利用可能 — 全メンバーに専用カードを交付。",
    } as Bilingual,
  },
  {
    icon: ShieldCheck,
    photoId: "photo-facility-security",
    fallback: "grad-office-reception",
    initials: "SC",
    jp: "セキュリティ",
    en: "Security",
    desc: {
      EN: "Reliable, secure management with controlled access — peace of mind built into the building.",
      JP: "信頼性の高いセキュアな管理・入退室管理 — 建物に組み込まれた安心。",
    } as Bilingual,
  },
] as const;

/* ============================================================
   Reusable accent map
   ============================================================ */
const ACCENT = {
  crimson: {
    text: "text-crimson",
    chipBg: "bg-crimson/10",
    bar: "from-crimson to-crimson-deep",
    iconBg: "bg-gradient-to-br from-crimson to-crimson-deep",
    ring: "border-crimson/15 hover:border-crimson/40",
    softTint: "bg-crimson/[0.04]",
  },
  saffron: {
    text: "text-saffron",
    chipBg: "bg-saffron/10",
    bar: "from-saffron to-[#c9881a]",
    iconBg: "bg-gradient-to-br from-saffron to-[#c9881a]",
    ring: "border-saffron/15 hover:border-saffron/40",
    softTint: "bg-saffron/[0.04]",
  },
} as const;

export default function ServicesPage() {
  const { tx } = useI18n();

  return (
    <>
      <PageHero
        eyebrowKey="services.eyebrow"
        titleNode={
          <>
            {tx({ EN: "Indobox Comprehensive", JP: "Indoboxの包括的" })}
            <br />
            <span className="text-gradient-saffron">
              {tx({ EN: "Expansion Support", JP: "進出支援・人材育成" })}
            </span>
          </>
        }
        subtitleKey="services.title"
      />

      {/* ───────────────────────────────────────────────────────────
          Workspace Highlight — More Than a Desk. Your India Headquarters.
          Navy bg + asanoha pattern + 6 amenity badges.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-navy">
        <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(188,26,44,0.10) 0%, transparent 50%, rgba(232,160,26,0.06) 100%)",
          }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>
                {tx({ EN: "THE WORKSPACE", JP: "ワークスペース" })}
              </Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.2] text-white"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({
                  EN: "More Than a Desk. Your India Headquarters.",
                  JP: "デスク以上。インドの本拠地。",
                })}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-inter text-[14px] leading-relaxed text-mist">
                {tx({
                  EN: "J-Gate at Cyber Gateway provides dedicated workspaces, private cabins, meeting rooms, a shared cafeteria, 24/7 access, and enterprise security — all designed for Japanese companies operating in India.",
                  JP: "Cyber GatewayのJ-Gateは、専用ワークスペース、プライベートキャビン、会議室、共用カフェテリア、24時間アクセス、エンタープライズセキュリティを提供 — インドで事業を展開する日本企業のために設計されたすべて。",
                })}
              </p>
            </div>
          </Reveal>
          {/* 6 amenity badges */}
          <Reveal delay={120}>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {[
                { icon: "🏢", label: tx({ EN: "Dedicated Desks", JP: "専用デスク" }) },
                { icon: "📡", label: tx({ EN: "High-Speed Wi-Fi", JP: "高速Wi-Fi" }) },
                { icon: "🤝", label: tx({ EN: "Meeting Rooms", JP: "会議室" }) },
                { icon: "🍽", label: tx({ EN: "Cafeteria", JP: "カフェテリア" }) },
                { icon: "🔑", label: tx({ EN: "24/7 Access", JP: "24時間アクセス" }) },
                { icon: "🛡", label: tx({ EN: "Security", JP: "セキュリティ" }) },
              ].map((a, i) => (
                <div key={i} className="glass-dark rounded-lg p-3 text-center">
                  <span className="text-2xl">{a.icon}</span>
                  <p className="mt-1 font-inter text-[11px] font-medium text-mist">{a.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 1 — Business Expansion Services (Slide 4)
          5 numbered editorial cards, alternating photo sides.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>
                {tx({ EN: "Business Expansion Support", JP: "ビジネス展開サポート" })}
              </Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.2] text-ink"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({
                  EN: "Five Integrated Service Lines",
                  JP: "5つの統合サービスライン",
                })}
              </h2>
              <p
                className="mx-auto mt-3 max-w-2xl font-inter text-[14px] leading-relaxed text-slate"
              >
                {tx({
                  EN: "From corporate setup to daily operations — one accountable partner covering legal footing, talent, sales, language, and ongoing operations.",
                  JP: "法人設立から日常実務まで — 法的拠点・人材・営業・言語・日常オペレーションを一元的に担う責任パートナー。",
                })}
              </p>
            </div>
          </Reveal>

          {/* Editorial service cards — alternating photo sides */}
          <div className="mt-12 flex flex-col gap-8 lg:gap-10">
            {EXPANSION_SERVICES.map((s, i) => {
              const a = ACCENT[s.accent];
              const photoLeft = i % 2 === 0;
              return (
                <Reveal key={i} delay={i * 60} variant={photoLeft ? "left" : "right"}>
                  <article
                    className={`lift-card relative grid h-full overflow-hidden rounded-lg border bg-pearl shadow-card lg:grid-cols-[45%_55%] ${a.ring}`}
                  >
                    {/* Top accent bar */}
                    <span className={`absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r ${a.bar}`} />

                    {/* Large faded number — placed on photo side */}
                    <div className={`relative overflow-hidden ${photoLeft ? "lg:order-1" : "lg:order-2"}`}>
                      <Photo
                        id={s.photoId}
                        alt={tx(s.title)}
                        fallback={s.fallback}
                        initials={s.initials}
                        rounded="rounded-none"
                        className="h-56 w-full sm:h-64 lg:h-[420px]"
                      />
                      {/* Faded number overlay */}
                      <span
                        className={`pointer-events-none absolute top-4 ${photoLeft ? "left-4" : "right-4"} font-serif-jp text-7xl font-bold leading-none text-white opacity-30 sm:text-8xl`}
                      >
                        {s.num}
                      </span>
                    </div>

                    {/* Content side */}
                    <div className={`relative flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${photoLeft ? "lg:order-2" : "lg:order-1"}`}>
                      {/* Mobile number badge */}
                      <span
                        className={`mb-4 font-serif-jp text-3xl font-bold leading-none ${a.text} opacity-30 lg:hidden`}
                      >
                        {s.num}
                      </span>

                      <div className="flex items-center gap-3">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${a.iconBg} text-white shadow-card`}>
                          <s.icon className="h-5 w-5" strokeWidth={1.5} />
                        </span>
                        <span
                          className={`font-inter text-[11px] font-semibold uppercase ${a.text}`}
                          style={{ letterSpacing: "0.18em" }}
                        >
                          {tx({ EN: `Service Line ${s.num}`, JP: `サービス ${s.num}` })}
                        </span>
                      </div>

                      <h3
                        className="mt-4 font-serif-jp font-bold leading-[1.2] text-ink"
                        style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
                      >
                        {tx(s.title)}
                      </h3>

                      <p className="mt-3 font-inter text-[14px] leading-relaxed text-slate">
                        {tx(s.desc)}
                      </p>

                      {/* Sub-bullets */}
                      <ul className="mt-5 space-y-2.5">
                        {s.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2.5">
                            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${a.chipBg} ${a.text}`}>
                              <CheckCircle2 className="h-3 w-3" strokeWidth={2.5} />
                            </span>
                            <span className="font-inter text-[13px] leading-snug text-ink">
                              {tx(b)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 2 — Indobox Academy (dark navy section)
          H2 + 4 detail cards (Online / 60min / 1-2 months / 日本語)
          2 people featured: Lecturer Tomio Isogai + Facilitator Daisuke Tanji
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-midnight">
        <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(232,160,26,0.10) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(188,26,44,0.08) 0%, transparent 50%)",
          }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>
                {tx({ EN: "Indobox Academy", JP: "Indobox Academy" })}
              </Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.2] text-white"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({
                  EN: "Practical India Business Lectures",
                  JP: "インドビジネスの実践講座",
                })}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl font-inter text-[14px] leading-relaxed text-mist">
                {tx({
                  EN: "Practical lectures by experts with rich India business experience — covering local business customs, risk management, and keys to success that foster capable resident representatives.",
                  JP: "インドビジネスに豊富な経験を持つ専門家による実践講座 — 現地ビジネス習慣、リスク管理、有能な駐在担当者を育成する成功の鍵を網羅。",
                })}
              </p>
            </div>
          </Reveal>

          {/* 4 metric cards — Online / 60min / 1-2 months / 日本語 */}
          <Reveal delay={100}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ACADEMY_METRICS.map((m, i) => (
                <div
                  key={i}
                  className="glass-dark lift-card flex items-center gap-4 rounded-lg border border-white/10 p-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-saffron/15 text-saffron">
                    <m.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div className="min-w-0">
                    <p
                      className="font-inter text-[10px] font-semibold uppercase text-mist"
                      style={{ letterSpacing: "0.14em" }}
                    >
                      {tx(m.label)}
                    </p>
                    <p className="mt-0.5 font-serif-jp text-[16px] font-bold text-white">
                      {tx(m.value)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Two featured people — Lecturer + Facilitator */}
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {/* Lecturer — Tomio Isogai */}
            <Reveal variant="left">
              <article className="glass-dark lift-card relative h-full overflow-hidden rounded-lg border border-saffron/25 p-6 sm:p-7">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saffron to-[#c9881a]" />
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <Photo
                    id="photo-academy-isogai"
                    alt="Tomio Isogai, Indobox Lecturer"
                    fallback="grad-advisory-s"
                    initials="TI"
                    rounded="rounded-md"
                    className="h-32 w-32 shrink-0 sm:h-36 sm:w-36"
                  />
                  <div className="flex-1">
                    <span
                      className="font-inter text-[10px] font-semibold uppercase text-saffron"
                      style={{ letterSpacing: "0.16em" }}
                    >
                      {tx({ EN: "Lecturer", JP: "講師" })}
                    </span>
                    <h3 className="mt-1 font-serif-jp text-xl font-bold text-white">
                      Tomio Isogai
                    </h3>
                    <p className="font-sans-jp text-[13px] font-semibold text-saffron-light">磯貝 富雄 氏</p>
                    <p className="mt-2 font-inter text-[12.5px] leading-relaxed text-mist">
                      {tx({
                        EN: "Former Managing Director of Sharp India — decades of hands-on leadership running a major Japanese enterprise on Indian soil. As Indobox Advisor, he translates that hard-won operational wisdom into the academy's curriculum, teaching the realities of Indian business that no textbook carries.",
                        JP: "元シャープインドリア代表取締役 — インドにおける大手日本企業の経営を長年支えたリーダーシップ。Indoboxアドバイザーとして、その実地で培われた経営の知恵をアカデミーのカリキュラムに変換し、教科書には載らないインドビジネスの現実を伝えます。",
                      })}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            {/* Facilitator — Daisuke Tanji */}
            <Reveal variant="right" delay={80}>
              <article className="glass-dark lift-card relative h-full overflow-hidden rounded-lg border border-crimson/25 p-6 sm:p-7">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-crimson to-crimson-deep" />
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <Photo
                    id="photo-academy-tanji"
                    alt="Daisuke Tanji, Indobox Facilitator"
                    fallback="grad-founder-tanji"
                    initials="DT"
                    rounded="rounded-md"
                    className="h-32 w-32 shrink-0 sm:h-36 sm:w-36"
                  />
                  <div className="flex-1">
                    <span
                      className="font-inter text-[10px] font-semibold uppercase text-crimson"
                      style={{ letterSpacing: "0.16em" }}
                    >
                      {tx({ EN: "Facilitator", JP: "ファシリテーター" })}
                    </span>
                    <h3 className="mt-1 font-serif-jp text-xl font-bold text-white">
                      Daisuke Tanji
                    </h3>
                    <p className="font-sans-jp text-[13px] font-semibold text-saffron-light">丹治 大佑</p>
                    <p className="mt-2 font-inter text-[12.5px] leading-relaxed text-mist">
                      {tx({
                        EN: "Representative of Indobox India — arrived in India in 2013 and has spent a decade on the ground bridging Japanese enterprise expectations with Indian business reality. He facilitates every Academy session, ensuring each lecture lands as practical, operational guidance rather than abstract theory.",
                        JP: "Indobox India代表 — 2013年にインドへ渡り、10年以上にわたり日本企業の期待とインドビジネスの現実を橋渡し。Academyの全セッションをファシリテートし、抽象的な理論ではなく実践的・運営的なガイダンスとして各講座を届けます。",
                      })}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 3 — Hybrid Operating Model (Slide 5)
          2-col split: Indobox (crimson) vs Genesys (saffron).
          Center vertical divider with "×" symbol.
          Below: Living Support Services (4 items).
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>
                {tx({ EN: "Hybrid Operating Model", JP: "ハイブリッド運営体制" })}
              </Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.2] text-ink"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({
                  EN: "Indobox × Genesys — Two Operators, One Engine",
                  JP: "Indobox × Genesys — 二つの運営主体、ひとつのエンジン",
                })}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl font-inter text-[14px] leading-relaxed text-slate">
                {tx({
                  EN: "A deliberate partnership between two specialised entities — each owning a clearly defined lane of the J-Gate Hyderabad operation.",
                  JP: "二つの専門企業による意図的なパートナーシップ — それぞれがJ-Gateハイデラバード運営の明確に定義された領域を担当。",
                })}
              </p>
            </div>
          </Reveal>

          {/* 2-col responsibility matrix with center "×" divider */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-0 lg:[&>*:first-child]:border-r-0">
            <div className="relative">
              {/* Indobox (crimson) */}
              <Reveal variant="left">
                <article className="lift-card relative h-full overflow-hidden rounded-lg border border-crimson/15 bg-pearl p-7 shadow-card sm:p-8">
                  <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-crimson to-crimson-deep" />
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-crimson to-crimson-deep text-white shadow-card">
                      <Handshake className="h-6 w-6" strokeWidth={1.5} />
                    </span>
                    <div>
                      <span
                        className="font-inter text-[10px] font-semibold uppercase text-crimson"
                        style={{ letterSpacing: "0.16em" }}
                      >
                        {tx({ EN: "Japan-side Operator", JP: "日本側運営" })}
                      </span>
                      <h3 className="font-serif-jp text-xl font-bold text-ink">Indobox</h3>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {INDOBOX_DUTIES.map((d, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-crimson/15 text-crimson">
                          <CheckCircle2 className="h-3 w-3" strokeWidth={2.5} />
                        </span>
                        <span className="font-inter text-[14px] leading-snug text-ink">{tx(d)}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>

            <div className="relative">
              {/* Genesys (saffron) */}
              <Reveal variant="right" delay={80}>
                <article className="lift-card relative h-full overflow-hidden rounded-lg border border-saffron/15 bg-pearl p-7 shadow-card sm:p-8">
                  <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-saffron to-[#c9881a]" />
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-saffron to-[#c9881a] text-white shadow-card">
                      <Building2 className="h-6 w-6" strokeWidth={1.5} />
                    </span>
                    <div>
                      <span
                        className="font-inter text-[10px] font-semibold uppercase text-saffron"
                        style={{ letterSpacing: "0.16em" }}
                      >
                        {tx({ EN: "India-side Operator", JP: "インド側運営" })}
                      </span>
                      <h3 className="font-serif-jp text-xl font-bold text-ink">Genesys</h3>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {GENESYS_DUTIES.map((d, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-saffron/15 text-saffron">
                          <CheckCircle2 className="h-3 w-3" strokeWidth={2.5} />
                        </span>
                        <span className="font-inter text-[14px] leading-snug text-ink">{tx(d)}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>

            {/* Center "×" symbol — absolute positioned, only visible on lg+ */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-ivory-warm font-serif-jp text-2xl font-bold text-slate shadow-card">
                ×
              </span>
            </div>
          </div>

          {/* Living Support strip — 4 items with emoji icons */}
          <Reveal delay={120}>
            <div className="mt-8 rounded-lg border border-slate-200 bg-pearl p-6 shadow-card sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-crimson/10 text-crimson">
                  <Home className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <span
                    className="font-inter text-[10px] font-semibold uppercase text-crimson"
                    style={{ letterSpacing: "0.16em" }}
                  >
                    {tx({ EN: "Living Support Services", JP: "生活支援サービス" })}
                  </span>
                  <h3 className="font-serif-jp text-[17px] font-bold text-ink">
                    {tx({ EN: "Settling into Hyderabad — handled.", JP: "ハイデラバードへの定着 — お任せください。" })}
                  </h3>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {LIVING_SUPPORT.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-md border border-slate-200 bg-ivory-warm/60 px-4 py-3 transition-colors hover:border-crimson/30 hover:bg-ivory-warm"
                  >
                    <span className="text-2xl" aria-hidden="true">{item.emoji}</span>
                    <span className="font-inter text-[13px] font-medium leading-snug text-ink">
                      {tx(item.label)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 4 — Facility Features (Slide 6)
          6-card grid (3×2). Photo top + JP name + EN name + description.
          Hover: translateY(-6px).
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>
                {tx({ EN: "Facility Features & Infrastructure", JP: "充実の設備とインフラ" })}
              </Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.2] text-ink"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({
                  EN: "Six Facility Layers, All Standard",
                  JP: "6つの施設レイヤー、すべて標準装備",
                })}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl font-inter text-[14px] leading-relaxed text-slate">
                {tx({
                  EN: "Physical, digital, social, temporal, and security infrastructure — turning a desk rental into an operating base.",
                  JP: "物理・デジタル・社交・時間・セキュリティインフラ — デスクの貸し借りを拠点として機能させる。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map((f, i) => {
              const accent = i % 2 === 0 ? "crimson" : "saffron";
              const a = ACCENT[accent];
              return (
                <Reveal key={i} delay={i * 70}>
                  <article
                    className={`group relative flex h-full flex-col overflow-hidden rounded-lg border bg-pearl shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-hover ${a.ring}`}
                  >
                    {/* Photo top — 200px */}
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <Photo
                        id={f.photoId}
                        alt={f.en}
                        fallback={f.fallback}
                        initials={f.initials}
                        rounded="rounded-none"
                        className="h-[200px] w-full"
                      />
                      {/* Icon badge overlay */}
                      <span className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-md ${a.iconBg} text-white shadow-card`}>
                        <f.icon className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                    </div>

                    {/* Card content */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-serif-jp text-[18px] font-bold leading-tight text-saffron">
                        {f.jp}
                      </h3>
                      <p className="mt-0.5 font-inter text-[12px] font-semibold uppercase text-ink" style={{ letterSpacing: "0.08em" }}>
                        {f.en}
                      </p>
                      <p className="mt-3 font-inter text-[13px] leading-relaxed text-slate">
                        {tx(f.desc)}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Note strip — all infrastructure included */}
          <Reveal delay={120}>
            <div className="mx-auto mt-8 flex max-w-3xl items-center gap-4 rounded-lg border border-saffron/25 bg-saffron/[0.05] p-5 shadow-card">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-saffron/15 text-saffron">
                <Banknote className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <p className="font-inter text-[13px] leading-snug text-slate">
                <span className="font-semibold text-ink">
                  {tx({ EN: "All infrastructure included — ", JP: "全インフラ標準装備 — " })}
                </span>
                {tx({
                  EN: "Wi-Fi, printers, lockers, meeting rooms, security, and 24/7 smart-key access — all standard, not invoiced separately.",
                  JP: "Wi-Fi・プリンター・ロッカー・会議室・セキュリティ・24時間スマートキーアクセス — すべて標準装備、別途請求なし。",
                })}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Closing CTA
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-navy">
        <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(232,160,26,0.10), transparent 60%)",
          }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-saffron/15 text-saffron">
                <Sparkles className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h2
                className="mt-6 font-serif-jp font-bold leading-[1.2] text-white"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({ EN: "Build Your India Base With Indobox", JP: "Indoboxと共にインド拠点を構築する" })}
              </h2>
              <p className="mx-auto mt-3 font-inter text-[14px] leading-relaxed text-mist">
                {tx({
                  EN: "Talk to us about your expansion goals — corporate setup, talent, sales, language, or all of the above. The conversation is free.",
                  JP: "進出目標についてお話しください — 法人設立、人材、営業、言語、あるいはそのすべて。相談は無料。",
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
                  href="/pricing"
                  className="rounded-md border border-saffron/40 px-7 py-3.5 font-inter text-[14px] font-semibold text-saffron transition-all hover:-translate-y-0.5 hover:bg-saffron/10"
                >
                  {tx({ EN: "View Membership Plans", JP: "メンバーシッププランを見る" })}
                </Link>
              </div>

              {/* Compact contact strip */}
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
