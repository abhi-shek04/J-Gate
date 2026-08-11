"use client";

import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
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
  UserCog,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Handshake,
  Home,
  Wifi,
  DoorOpen,
  ShieldCheck,
  Coffee,
  Building,
  Plane,
  Mail,
  Phone,
  Banknote,
} from "lucide-react";
import Link from "next/link";

/* ============================================================
   Services — REAL PDF content (Slides 4, 5, 6)
   CLEAN modular layout: each domain in its own section.
   1. Business Expansion Support  — 5 cards
   2. Indobox Academy             — single card + 3 metric badges
   3. Indo-Japan Hybrid Model      — 2-col matrix + Living Support strip
   4. Facility Features            — 6-card bento grid
   5. Closing CTA
   ============================================================ */

type Bilingual = { EN: string; JP: string };

/* ── Section 1 — Business Expansion Support — Slide 4 ── */
const EXPANSION_SERVICES = [
  {
    num: "01",
    icon: Building2,
    accent: "crimson",
    title: {
      EN: "Corporate Registration & Nominee Director",
      JP: "法人登記・登録住所・名義人ディレクター",
    } as Bilingual,
    desc: {
      EN: "Corporate registration address and Nominee Director name — a turnkey legal footprint in Hyderabad from day one.",
      JP: "法人登録住所および名義人ディレクター（Nominee Director）の提供 — 初日からハイデラバードに法的な拠点を構築。",
    } as Bilingual,
  },
  {
    num: "02",
    icon: Users,
    accent: "saffron",
    title: {
      EN: "Talent Development, Dispatching & Payroll",
      JP: "人材育成・派遣・給与管理",
    } as Bilingual,
    desc: {
      EN: "Full talent lifecycle — development, dispatching, and payroll administration handled end-to-end by India-side operators.",
      JP: "人材ライフサイクルの包括管理 — 育成・派遣・給与管理をインド側運営チームがエンドツーエンドで担当。",
    } as Bilingual,
  },
  {
    num: "03",
    icon: Megaphone,
    accent: "crimson",
    title: {
      EN: "Sales & Marketing Support",
      JP: "営業・マーケティング支援",
    } as Bilingual,
    desc: {
      EN: "On-the-ground sales & marketing execution — lead generation, partner outreach, bilingual B2B/B2G campaigns.",
      JP: "現地での営業・マーケティング実行 — リード獲得、パートナーアプローチ、バイリンガルB2B/B2Gキャンペーン。",
    } as Bilingual,
  },
  {
    num: "04",
    icon: Languages,
    accent: "saffron",
    title: {
      EN: "Interpretation & Back-Office Outsourcing",
      JP: "通訳支援・バックオフィス代行",
    } as Bilingual,
    desc: {
      EN: "Interpretation support and back-office outsourcing — bookkeeping, accounting, vendor coordination by Japanese-speaking staff.",
      JP: "通訳支援およびバックオフィスアウトソーシング — 記帳・経理・ベンダー調整を日本語対応スタッフが担当。",
    } as Bilingual,
  },
  {
    num: "05",
    icon: Workflow,
    accent: "crimson",
    title: {
      EN: "End-to-End Support: Setup to Daily Ops",
      JP: "法人設立から日常実務まで一貫支援",
    } as Bilingual,
    desc: {
      EN: "Consistent end-to-end support — corporate establishment through to daily operations. One accountable partner.",
      JP: "法人設立から日常実務まで一貫したサポート — 責任の所在が一元的な単一パートナー。",
    } as Bilingual,
  },
] as const;

/* ── Section 2 — Indobox Academy metric badges ── */
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
] as const;

/* ── Section 3 — Indo-Japan Hybrid Operating Model ── */
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
  { icon: Home, label: { EN: "Apartment / housing search", JP: "住居・アパート探し" } as Bilingual },
  { icon: Building, label: { EN: "FRRO registration", JP: "FRRO（外国人登録）手続き" } as Bilingual },
  { icon: Plane, label: { EN: "Long-stay hotel arrangements", JP: "長期滞在ホテル手配" } as Bilingual },
  { icon: Briefcase, label: { EN: "Daily-life support, as required", JP: "日常生活支援（必要に応じて）" } as Bilingual },
] as const;

/* ── Section 4 — Facility Features — Slide 6 ── */
const FACILITIES = [
  {
    icon: Briefcase,
    title: { EN: "Dedicated Workspace", JP: "専用ワークスペース" } as Bilingual,
    desc: { EN: "Fixed desks, cabinets, and private lockers.", JP: "固定デスク、キャビネット、プライベートロッカー。" } as Bilingual,
  },
  {
    icon: Wifi,
    title: { EN: "Communication Infrastructure", JP: "通信インフラ" } as Bilingual,
    desc: { EN: "High-speed Wi-Fi and Xerox multifunction printers/copiers.", JP: "高速Wi-FiおよびXerox複合機プリンター・コピー機。" } as Bilingual,
  },
  {
    icon: Users,
    title: { EN: "Meeting Rooms", JP: "会議室" } as Bilingual,
    desc: { EN: "For negotiations and team meetings — stepwise expansion.", JP: "商談やチーム会議に利用可能 — 段階的に拡張。" } as Bilingual,
  },
  {
    icon: Coffee,
    title: { EN: "Shared Cafeteria", JP: "共同食堂" } as Bilingual,
    desc: { EN: "Refreshment space that encourages casual networking.", JP: "カジュアルな交流を促すリフレッシュスペース。" } as Bilingual,
  },
  {
    icon: DoorOpen,
    title: { EN: "24/7 Access", JP: "24/7アクセス" } as Bilingual,
    desc: { EN: "24 hrs/day, 365 days/year via smart key cards.", JP: "年中無休24時間・スマートキーカードで利用可能。" } as Bilingual,
  },
  {
    icon: ShieldCheck,
    title: { EN: "Security", JP: "セキュリティ" } as Bilingual,
    desc: { EN: "Reliable, secure management — controlled access.", JP: "信頼性の高いセキュアな管理・入退室管理。" } as Bilingual,
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
    ring: "border-crimson/20 hover:border-crimson/40",
  },
  saffron: {
    text: "text-saffron",
    chipBg: "bg-saffron/10",
    bar: "from-saffron to-[#c9881a]",
    iconBg: "bg-gradient-to-br from-saffron to-[#c9881a]",
    ring: "border-saffron/20 hover:border-saffron/40",
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
          Section 1 — Business Expansion Support (Slide 4)
          CLEAN 5-card grid. Each card: number + title + 1-line desc.
          ZERO mixing with Academy / Facilities.
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
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
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

          {/* Clean 5-card responsive grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EXPANSION_SERVICES.map((s, i) => {
              const a = ACCENT[s.accent];
              return (
                <Reveal key={i} delay={i * 70}>
                  <article
                    className={`lift-card relative flex h-full flex-col overflow-hidden rounded-lg border bg-pearl p-6 shadow-card ${a.ring}`}
                  >
                    {/* Top accent bar */}
                    <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${a.bar}`} />

                    {/* Header: number + icon */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-md ${a.iconBg} text-white shadow-card`}
                      >
                        <s.icon className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                      <span
                        className={`font-serif-jp text-3xl font-bold leading-none ${a.text} opacity-25`}
                      >
                        {s.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 font-serif-jp text-[16px] font-bold leading-tight text-ink">
                      {tx(s.title)}
                    </h3>

                    {/* One-line description */}
                    <p className="mt-2 font-inter text-[13px] leading-relaxed text-slate">
                      {tx(s.desc)}
                    </p>
                  </article>
                </Reveal>
              );
            })}

            {/* 6th cell — callout card (Service Line 06) keeps grid balanced */}
            <Reveal delay={EXPANSION_SERVICES.length * 70}>
              <div className="relative flex h-full min-h-[200px] flex-col justify-center overflow-hidden rounded-lg border border-crimson/25 bg-gradient-to-br from-crimson/[0.04] to-saffron/[0.04] p-6 text-center">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-crimson via-saffron to-crimson-deep" />
                <Workflow className="mx-auto h-8 w-8 text-crimson" strokeWidth={1.25} />
                <p className="mt-3 font-serif-jp text-[14px] font-bold leading-snug text-ink">
                  {tx({
                    EN: "One partner. Five services. Zero hand-off gaps.",
                    JP: "ひとつのパートナー。5つのサービス。引き継ぎの隙間なし。",
                  })}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 2 — Indobox Academy (Slide 4)
          CLEAN single-card layout: lecturer + facilitator + 3 metric badges.
          ZERO mixing with expansion services or facilities.
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
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({
                  EN: "Practical India Business Lectures",
                  JP: "インドビジネスの実践講座",
                })}
              </h2>
              <p
                className="mx-auto mt-3 max-w-2xl font-inter text-[14px] leading-relaxed text-mist"
              >
                {tx({
                  EN: "Practical lectures by experts with rich India business experience — covering local business customs, risk management, and keys to success that foster capable resident representatives.",
                  JP: "インドビジネスに豊富な経験を持つ専門家による実践講座 — 現地ビジネス習慣、リスク管理、有能な駐在担当者を育成する成功の鍵を網羅。",
                })}
              </p>
            </div>
          </Reveal>

          {/* 3 metric badges — clean, scannable */}
          <Reveal delay={100}>
            <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
              {ACADEMY_METRICS.map((m, i) => (
                <div
                  key={i}
                  className="glass-dark lift-card flex items-center gap-4 rounded-lg border border-white/10 p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-saffron/15 text-saffron">
                    <m.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-inter text-[10px] font-semibold uppercase text-mist" style={{ letterSpacing: "0.12em" }}>
                      {tx(m.label)}
                    </p>
                    <p className="mt-0.5 font-serif-jp text-[14px] font-bold text-white">
                      {tx(m.value)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* 2 clean cards: Lecturer + Facilitator */}
          <div className="mx-auto mt-8 grid max-w-5xl gap-4 lg:grid-cols-2">
            {/* Lecturer */}
            <Reveal variant="left">
              <article className="glass-dark lift-card relative h-full overflow-hidden rounded-lg border border-saffron/25 p-6">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saffron to-[#c9881a]" />
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-saffron to-[#c9881a] text-midnight shadow-card">
                    <UserCog className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <div className="flex-1">
                    <span className="font-inter text-[10px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.15em" }}>
                      {tx({ EN: "Lecturer", JP: "講師" })}
                    </span>
                    <h3 className="mt-1 font-serif-jp text-lg font-bold text-white">
                      Tomio Isogai
                    </h3>
                    <p className="font-sans-jp text-[12px] font-semibold text-saffron-light">磯貝 富雄 氏</p>
                    <p className="mt-1 font-inter text-[12px] text-mist">
                      {tx({
                        EN: "Indobox Advisor · Former Sharp India MD",
                        JP: "Indoboxアドバイザー・元シャープインドリア代表",
                      })}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            {/* Facilitator */}
            <Reveal variant="right" delay={80}>
              <article className="glass-dark lift-card relative h-full overflow-hidden rounded-lg border border-crimson/25 p-6">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-crimson to-crimson-deep" />
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-crimson to-crimson-deep text-white shadow-card">
                    <Briefcase className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <div className="flex-1">
                    <span className="font-inter text-[10px] font-semibold uppercase text-crimson" style={{ letterSpacing: "0.15em" }}>
                      {tx({ EN: "Facilitator", JP: "ファシリテーター" })}
                    </span>
                    <h3 className="mt-1 font-serif-jp text-lg font-bold text-white">
                      Daisuke Tanji
                    </h3>
                    <p className="font-sans-jp text-[12px] font-semibold text-saffron-light">丹治 大佑</p>
                    <p className="mt-1 font-inter text-[12px] text-mist">
                      {tx({
                        EN: "Indobox Representative · Facilitates every session",
                        JP: "Indobox代表・全セッションをファシリテート",
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
          Section 3 — Indo-Japan Hybrid Operating Model (Slide 5)
          CLEAN 2-col matrix: Indobox vs Genesys. Below: Living Support strip.
          ZERO mixing with other content.
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
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({
                  EN: "Indobox × Genesys — Two Operators, One Engine",
                  JP: "Indobox × Genesys — 二つの運営主体、ひとつのエンジン",
                })}
              </h2>
              <p
                className="mx-auto mt-3 max-w-2xl font-inter text-[14px] leading-relaxed text-slate"
              >
                {tx({
                  EN: "A deliberate partnership between two specialised entities — each owning a clearly defined lane of the J-Gate Hyderabad operation.",
                  JP: "二つの専門企業による意図的なパートナーシップ — それぞれがJ-Gateハイデラバード運営の明確に定義された領域を担当。",
                })}
              </p>
            </div>
          </Reveal>

          {/* 2-col responsibility matrix */}
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {/* Indobox */}
            <Reveal variant="left">
              <article className="lift-card relative h-full overflow-hidden rounded-lg border border-crimson/15 bg-pearl p-6 shadow-card">
                <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-crimson to-crimson-deep" />
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-to-br from-crimson to-crimson-deep text-white shadow-card">
                    <Handshake className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="font-inter text-[10px] font-semibold uppercase text-crimson" style={{ letterSpacing: "0.12em" }}>
                      {tx({ EN: "Japan-side Operator", JP: "日本側運営" })}
                    </span>
                    <h3 className="font-serif-jp text-lg font-bold text-ink">Indobox</h3>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {INDOBOX_DUTIES.map((d, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-crimson/15 text-crimson">
                        <CheckCircle2 className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      <span className="font-inter text-[13px] leading-snug text-slate">{tx(d)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            {/* Genesys */}
            <Reveal variant="right" delay={80}>
              <article className="lift-card relative h-full overflow-hidden rounded-lg border border-saffron/15 bg-pearl p-6 shadow-card">
                <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-saffron to-[#c9881a]" />
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-to-br from-saffron to-[#c9881a] text-white shadow-card">
                    <Building2 className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="font-inter text-[10px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.12em" }}>
                      {tx({ EN: "India-side Operator", JP: "インド側運営" })}
                    </span>
                    <h3 className="font-serif-jp text-lg font-bold text-ink">Genesys</h3>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {GENESYS_DUTIES.map((d, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-saffron/15 text-saffron">
                        <CheckCircle2 className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      <span className="font-inter text-[13px] leading-snug text-slate">{tx(d)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>

          {/* Living Support strip — 4 items */}
          <Reveal delay={120}>
            <div className="mt-6 rounded-lg border border-slate-200 bg-pearl p-5 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-crimson/10 text-crimson">
                  <Home className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <span className="font-inter text-[10px] font-semibold uppercase text-crimson" style={{ letterSpacing: "0.15em" }}>
                    {tx({ EN: "Living Support Services", JP: "生活支援サービス" })}
                  </span>
                  <h3 className="font-serif-jp text-[15px] font-bold text-ink">
                    {tx({ EN: "Settling into Hyderabad — handled", JP: "ハイデラバードへの定着 — お任せください" })}
                  </h3>
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {LIVING_SUPPORT.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 rounded-md border border-slate-200 bg-ivory-warm/60 px-3 py-2.5 transition-colors hover:border-crimson/30 hover:bg-ivory-warm"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-crimson/10 text-crimson">
                      <item.icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <span className="font-inter text-[12px] font-medium leading-snug text-slate">
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
          CLEAN 6-card bento grid (2×3). Each card: icon + title + 1-line desc.
          ZERO mixing with other content.
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
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({
                  EN: "Six Facility Layers, All Standard",
                  JP: "6つの施設レイヤー、すべて標準装備",
                })}
              </h2>
              <p
                className="mx-auto mt-3 max-w-2xl font-inter text-[14px] leading-relaxed text-slate"
              >
                {tx({
                  EN: "Physical, digital, social, temporal, and security infrastructure — turning a desk rental into an operating base.",
                  JP: "物理・デジタル・社交・時間・セキュリティインフラ — デスクの貸し借りを拠点として機能させる。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map((f, i) => {
              const accent = i % 2 === 0 ? "crimson" : "saffron";
              const a = ACCENT[accent];
              return (
                <Reveal key={i} delay={i * 70}>
                  <article
                    className={`lift-card relative h-full overflow-hidden rounded-lg border bg-pearl p-6 shadow-card ${a.ring}`}
                  >
                    <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${a.bar}`} />
                    <span className={`flex h-11 w-11 items-center justify-center rounded-md ${a.iconBg} text-white shadow-card`}>
                      <f.icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-4 font-serif-jp text-[16px] font-bold leading-tight text-ink">
                      {tx(f.title)}
                    </h3>
                    <p className="mt-1.5 font-inter text-[13px] leading-relaxed text-slate">
                      {tx(f.desc)}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Single small note — clean callout, no clutter */}
          <Reveal delay={120}>
            <div className="mx-auto mt-6 flex max-w-2xl items-center gap-3 rounded-lg border border-saffron/20 bg-saffron/[0.04] p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-saffron/15 text-saffron">
                <Banknote className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <p className="font-inter text-[12.5px] leading-snug text-slate">
                <span className="font-semibold text-ink">
                  {tx({ EN: "Included — not invoiced separately. ", JP: "別途請求なし。含まれます。 " })}
                </span>
                {tx({
                  EN: "Wi-Fi, printers, lockers, meeting rooms, security, and 24/7 smart-key access — all part of every plan.",
                  JP: "Wi-Fi・プリンター・ロッカー・会議室・セキュリティ・24時間スマートキーアクセス — 全プランに含まれます。",
                })}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Closing CTA — single focused block, no contact-strip clutter
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
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({ EN: "Build Your India Base With Indobox", JP: "Indoboxと共にインド拠点を構築する" })}
              </h2>
              <p
                className="mx-auto mt-3 font-inter text-[14px] leading-relaxed text-mist"
              >
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
