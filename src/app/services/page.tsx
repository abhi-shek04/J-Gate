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
  GraduationCap,
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
   Sections: PageHero → Business Expansion Support (5 services)
             → Indobox Academy → Indo-Japan Hybrid Management
             → Facility Features (6 cards) → CTA
   ============================================================ */

type Bilingual = { EN: string; JP: string };

/* ── Business Expansion Support — Slide 4 ── */
const EXPANSION_SERVICES = [
  {
    num: "01",
    icon: Building2,
    accent: "crimson",
    title: {
      EN: "Corporate Registration & Nominee Director",
      JP: "法人登記・登録住所・名義人ディレクター",
    } as Bilingual,
    jpLabel: "法人登記・登録住所・名義人ディレクター",
    desc: {
      EN: "Provision of corporate registration address and Nominee Director name — a turnkey legal footprint in Hyderabad from day one, without the months of paperwork that typically stall India entry.",
      JP: "法人登録住所および名義人ディレクター（Nominee Director）の提供 — インド進出を遅らせる数か月の書類手続きを省き、初日からハイデラバードに法的な拠点を構築します。",
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
    jpLabel: "人材育成・派遣・給与管理",
    desc: {
      EN: "Full talent lifecycle management — development, dispatching, and payroll administration handled end-to-end by India-side operators who understand both Japanese enterprise expectations and local labour law.",
      JP: "人材ライフサイクルの包括管理 — 育成・派遣・給与管理を、日本企業の期待と現地労働法の両方を理解するインド側運営チームがエンドツーエンドで担当。",
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
    jpLabel: "営業・マーケティング支援",
    desc: {
      EN: "On-the-ground sales and marketing execution — lead generation, partner outreach, and bilingual campaign management built around the realities of the Indian B2B and B2G landscape.",
      JP: "現地での営業・マーケティング実行 — リード獲得、パートナーアプローチ、インドのB2B・B2G環境の現実に合わせたバイリンガルキャンペーン管理。",
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
    jpLabel: "通訳支援・バックオフィス代行",
    desc: {
      EN: "Interpretation support and back-office outsourcing services — bookkeeping, accounting, vendor coordination, and admin dispatch handled by a Japanese-speaking operations layer.",
      JP: "通訳支援およびバックオフィスアウトソーシング — 記帳・経理・ベンダー調整・総務を、日本語対応の運営レイヤーが担当。",
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
    jpLabel: "法人設立から日常実務まで一貫支援",
    desc: {
      EN: "Consistent end-to-end support — from corporate establishment through to practical daily operations. One accountable partner across the entire India-entry journey, not a chain of disconnected vendors.",
      JP: "法人設立から日常実務まで一貫したサポート — インド進出の全行程を通じ、責任の所在が一元的な単一パートナー。バラバラの業者の連鎖ではありません。",
    } as Bilingual,
  },
] as const;

/* ── Indo-Japan Hybrid Operating Structure — Slide 5 ── */
const INDOBOX_DUTIES = [
  {
    EN: "Marketing & client acquisition",
    JP: "マーケティングおよび顧客獲得",
  },
  {
    EN: "Facilitation and coordination between Japan and India",
    JP: "日印間の調整および連携",
  },
  {
    EN: "Maintaining and managing client relationships",
    JP: "顧客関係の維持・管理",
  },
  {
    EN: "Securing project leads",
    JP: "プロジェクトリードの獲得",
  },
] as const;

const GENESYS_DUTIES = [
  {
    EN: "Providing high-quality workspaces",
    JP: "高品質なワークスペースの提供",
  },
  {
    EN: "Securing and managing local talent required by clients",
    JP: "顧客が必要とする現地人材の確保・管理",
  },
  {
    EN: "Engaging Indian companies interested in partnering with Japanese firms",
    JP: "日本企業との提携に関心のあるインド企業との連携",
  },
  {
    EN: "Maintenance and operation of local facilities and infrastructure",
    JP: "現地施設・インフラの保守・運営",
  },
] as const;

const LIVING_SUPPORT = [
  {
    icon: Home,
    label: {
      EN: "Apartment & housing search",
      JP: "住居・アパート探し",
    } as Bilingual,
  },
  {
    icon: Building,
    label: {
      EN: "FRRO registration",
      JP: "FRRO（外国人登録）手続き",
    } as Bilingual,
  },
  {
    icon: Plane,
    label: {
      EN: "Long-stay hotel arrangements",
      JP: "長期滞在ホテル手配",
    } as Bilingual,
  },
  {
    icon: Briefcase,
    label: {
      EN: "Other daily-life support, as required",
      JP: "その他、必要に応じた日常生活支援",
    } as Bilingual,
  },
] as const;

/* ── Facility Features — Slide 6 ── */
const FACILITIES = [
  {
    icon: Briefcase,
    title: { EN: "Dedicated Workspace", JP: "専用ワークスペース" } as Bilingual,
    jp: "専用ワークスペース",
    desc: {
      EN: "Fixed desks, cabinets, and private lockers — a personally assigned workspace that stays yours, day after day.",
      JP: "固定デスク、キャビネット、プライベートロッカー — 日々あなた専用に割り当てられたワークスペース。",
    } as Bilingual,
  },
  {
    icon: Wifi,
    title: { EN: "Communication Infrastructure", JP: "通信インフラ" } as Bilingual,
    jp: "通信インフラ",
    desc: {
      EN: "High-speed Wi-Fi and multifunction printers/copiers (Xerox) provided as standard — enterprise-grade infrastructure without enterprise-grade setup cost.",
      JP: "高速Wi-Fiおよび複合機プリンター・コピー機（Xerox）を標準装備 — エンタープライズ級のインフラを設置コストなしで提供。",
    } as Bilingual,
  },
  {
    icon: Users,
    title: { EN: "Meeting Rooms", JP: "会議室" } as Bilingual,
    jp: "会議室",
    desc: {
      EN: "Available for business negotiations and internal team meetings — scheduled for stepwise expansion as the community of tenant companies grows.",
      JP: "商談や内部チーム会議に利用可能 — テナント企業コミュニティの拡大に合わせ段階的に拡張予定。",
    } as Bilingual,
  },
  {
    icon: Coffee,
    title: { EN: "Shared Cafeteria", JP: "共同食堂" } as Bilingual,
    jp: "共同食堂",
    desc: {
      EN: "Refreshment space that also encourages casual networking between tenants — relationships that often outlast any single project.",
      JP: "リフレッシュスペースであると同時に、テナント間のカジュアルな交流を促進 — 単一プロジェクトを超えて続く関係性を育む場。",
    } as Bilingual,
  },
  {
    icon: DoorOpen,
    title: { EN: "24/7 Access", JP: "24/7アクセス" } as Bilingual,
    jp: "24/7アクセス",
    desc: {
      EN: "Available 24 hours a day, 365 days a year via dedicated smart key cards — work on Tokyo time, Hyderabad time, or any time the deal demands.",
      JP: "専用スマートキーカードで年中無休24時間アクセス可能 — 東京時間、ハイデラバード時間、あるいは案件が求める任何の時間に作業可能。",
    } as Bilingual,
  },
  {
    icon: ShieldCheck,
    title: { EN: "Security", JP: "セキュリティ" } as Bilingual,
    jp: "セキュリティ",
    desc: {
      EN: "Reliable, secure management and safety structure — controlled access, monitored premises, and a layer of operational trust Japanese enterprises expect.",
      JP: "信頼性の高いセキュアな管理・安全体制 — 入退室管理、監視付き施設、日本企業が期待する運営上の信頼レイヤー。",
    } as Bilingual,
  },
] as const;

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
          Horizontal scroll-styled timeline of 5 services with
          alternating accent bars and large numeral watermarks.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>
                {tx({ EN: "Business Expansion Support", JP: "ビジネス展開サポート" })}
              </Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({
                  EN: "From Corporate Setup to Daily Operations — One Accountable Partner",
                  JP: "法人設立から日常実務まで — 一つの責任パートナー",
                })}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {tx({
                  EN: "Five integrated service lines that together cover the complete India-entry journey — legal footing, talent, sales, language, and ongoing operations.",
                  JP: "法人設立から人材、営業、言語、日常オペレーションに至る — インド進出の全行程を網羅する5つの統合サービス。",
                })}
              </p>
            </div>
          </Reveal>

          {/* Vertical staggered list — alternating accent bars + numerals */}
          <div className="mx-auto mt-14 max-w-5xl">
            {EXPANSION_SERVICES.map((s, i) => {
              const isReverse = i % 2 === 1;
              const accentColor =
                s.accent === "crimson" ? "text-crimson" : "text-saffron";
              const accentBg =
                s.accent === "crimson"
                  ? "from-crimson to-crimson-deep"
                  : "from-saffron to-[#c9881a]";
              const accentBorder =
                s.accent === "crimson" ? "border-crimson/40" : "border-saffron/40";
              return (
                <Reveal
                  key={i}
                  delay={i * 80}
                  variant={isReverse ? "right" : "left"}
                >
                  <article
                    className={`lift-card relative mb-6 overflow-hidden rounded-lg border border-crimson/10 bg-pearl p-7 shadow-card sm:p-8 ${
                      isReverse ? "lg:ml-16" : "lg:mr-16"
                    }`}
                  >
                    {/* Large numeral watermark */}
                    <span
                      className={`pointer-events-none absolute font-serif-jp font-bold leading-none ${accentColor} opacity-[0.07] ${
                        isReverse ? "left-4 top-2" : "right-4 top-2"
                      }`}
                      style={{ fontSize: "8rem" }}
                      aria-hidden="true"
                    >
                      {s.num}
                    </span>

                    <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                      <span
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${accentBg} text-white shadow-card transition-transform duration-300 hover:scale-105 hover:-rotate-2`}
                      >
                        <s.icon className="h-7 w-7" strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <span
                          className={`font-inter text-[11px] font-semibold uppercase ${accentColor}`}
                          style={{ letterSpacing: "0.15em" }}
                        >
                          {tx({
                            EN: `Service Line 0${i + 1}`,
                            JP: `サービス 0${i + 1}`,
                          })}
                        </span>
                        <h3
                          className="mt-1 font-serif-jp text-lg font-bold leading-tight text-ink sm:text-xl"
                        >
                          {tx(s.title)}
                        </h3>
                        <p
                          className={`mt-0.5 font-sans-jp text-[12px] text-mist`}
                        >
                          {s.jpLabel}
                        </p>
                      </div>
                    </div>

                    <p className="relative mt-5 font-inter text-[14px] leading-relaxed text-slate">
                      {tx(s.desc)}
                    </p>

                    {/* Accent bottom bar */}
                    <span
                      className={`absolute bottom-0 left-0 h-1 w-24 bg-gradient-to-r ${accentBg} opacity-70`}
                    />
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* End-to-end callout */}
          <Reveal delay={120}>
            <div className={`mx-auto mt-8 max-w-5xl rounded-lg border-2 border-dashed border-crimson/30 bg-crimson/[0.03] p-6 text-center sm:p-8`}>
              <Workflow className="mx-auto h-8 w-8 text-crimson" strokeWidth={1.5} />
              <p className="mt-3 font-serif-jp text-[16px] font-bold leading-snug text-ink sm:text-[18px]">
                {tx({
                  EN: "One partner. Five services. Zero hand-off gaps.",
                  JP: "ひとつのパートナー。5つのサービス。引き継ぎの隙間なし。",
                })}
              </p>
              <p className="mx-auto mt-2 max-w-xl font-inter text-[13px] leading-relaxed text-slate">
                {tx({
                  EN: "Most India-entry failures happen at vendor hand-offs. J-Gate's integrated structure closes those gaps by design.",
                  JP: "インド進出の失敗の多くは業者間の引き継ぎで発生します。J-Gateの統合構造は設計段階でその隙間をふさぎます。",
                })}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 2 — Indobox Academy (Slide 4)
          Premium highlight box with lecturer & facilitator.
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
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({
                  EN: "Practical India Business Lectures, By Experts Who Have Done It",
                  JP: "インドビジネスに豊富な経験を持つ専門家による実践講座",
                })}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-mist"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {tx({
                  EN: "Practical lectures and study sessions held regularly by experts with rich experience in Indian business — covering local business customs, risk management, and the keys to success that foster capable resident representatives.",
                  JP: "インドビジネスに豊富な経験を持つ専門家による実践的な講義・勉強会を定期的に開催 — 現地ビジネス習慣、リスク管理、有能な駐在担当者を育成する成功の鍵を網羅。",
                })}
              </p>
            </div>
          </Reveal>

          {/* Academy info grid — 4 stat tiles */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Video,
                label: tx({ EN: "Format", JP: "形式" }),
                value: tx({ EN: "Online", JP: "オンライン" }),
              },
              {
                icon: Clock,
                label: tx({ EN: "Duration", JP: "時間" }),
                value: tx({ EN: "60 minutes / session", JP: "1回60分" }),
              },
              {
                icon: CalendarDays,
                label: tx({ EN: "Frequency", JP: "頻度" }),
                value: tx({ EN: "Once every 1–2 months", JP: "1〜2か月に1回" }),
              },
              {
                icon: GraduationCap,
                label: tx({ EN: "Curriculum", JP: "カリキュラム" }),
                value: tx({ EN: "Customs · Risk · Success Keys", JP: "商慣習・リスク・成功の鍵" }),
              },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="glass-dark lift-card h-full rounded-lg border border-white/10 p-5 text-center">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-md bg-saffron/15 text-saffron">
                    <t.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <p className="mt-3 font-inter text-[11px] font-semibold uppercase text-mist" style={{ letterSpacing: "0.12em" }}>
                    {t.label}
                  </p>
                  <p className="mt-1 font-serif-jp text-[15px] font-bold text-white">
                    {t.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Lecturer + Facilitator cards */}
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2">
            {/* Lecturer */}
            <Reveal variant="left">
              <div className="glass-dark lift-card relative overflow-hidden rounded-lg border border-saffron/25 p-7 sm:p-8">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saffron to-[#c9881a]" />
                <div className="flex items-start gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-saffron to-[#c9881a] text-midnight shadow-card">
                    <UserCog className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <div className="flex-1">
                    <span className="font-inter text-[11px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.15em" }}>
                      {tx({ EN: "Lecturer", JP: "講師" })}
                    </span>
                    <h3 className="mt-1 font-serif-jp text-xl font-bold text-white">
                      Tomio Isogai
                    </h3>
                    <p className="font-sans-jp text-[13px] font-semibold text-saffron-light">
                      磯貝 富雄 氏
                    </p>
                    <p className="mt-1 font-inter text-[13px] text-mist">
                      {tx({
                        EN: "Indobox Advisor — Former Sharp India Managing Director",
                        JP: "Indoboxアドバイザー・元シャープインドリア代表取締役",
                      })}
                    </p>
                  </div>
                </div>
                <p className="mt-5 font-inter text-[13px] leading-relaxed text-mist">
                  {tx({
                    EN: "Decades of operational leadership inside one of Japan's most established Indian subsidiaries — the kind of experiential knowledge no textbook carries, delivered directly to J-Gate members alongside other guest lecturers.",
                    JP: "日本を代表するインド子会社の一つでの長年の運営リーダーシップ — 教科書には載らない経験知識を、他のゲスト講師とともにJ-Gate会員へ直接提供。",
                  })}
                </p>
              </div>
            </Reveal>

            {/* Facilitator */}
            <Reveal variant="right">
              <div className="glass-dark lift-card relative overflow-hidden rounded-lg border border-crimson/25 p-7 sm:p-8">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-crimson to-crimson-deep" />
                <div className="flex items-start gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-crimson to-crimson-deep text-white shadow-card">
                    <Briefcase className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <div className="flex-1">
                    <span className="font-inter text-[11px] font-semibold uppercase text-crimson" style={{ letterSpacing: "0.15em" }}>
                      {tx({ EN: "Facilitator", JP: "ファシリテーター" })}
                    </span>
                    <h3 className="mt-1 font-serif-jp text-xl font-bold text-white">
                      Daisuke Tanji
                    </h3>
                    <p className="font-sans-jp text-[13px] font-semibold text-saffron-light">
                      丹治 大佑
                    </p>
                    <p className="mt-1 font-inter text-[13px] text-mist">
                      {tx({
                        EN: "Representative of Indobox — facilitator of every Academy session",
                        JP: "Indobox代表 — 全Academyセッションのファシリテーター",
                      })}
                    </p>
                  </div>
                </div>
                <p className="mt-5 font-inter text-[13px] leading-relaxed text-mist">
                  {tx({
                    EN: "A decade of on-the-ground India bridging experience — moderates every session to ensure Japanese enterprise context is woven through every lecture, Q&A, and case discussion.",
                    JP: "10年間の現場でのインド架け橋経験 — すべての講義・質疑応答・ケースディスカッションに日本企業の文脈が織り込まれるよう、全セッションをモデレート。",
                  })}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 3 — Indo-Japan Hybrid Operating Structure (Slide 5)
          Two-column responsibilities + Living Support strip below.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>
                {tx({
                  EN: "Indo-Japan Hybrid Management",
                  JP: "日印ハイブリッド運営体制",
                })}
              </Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({
                  EN: "[Hyderabad] Strong Indo-Japanese Hybrid Operating Structure",
                  JP: "「[ハイデラバード] 日印ハイブリッドの強力な運営体制」",
                })}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {tx({
                  EN: "J-Gate's Hyderabad operation is a deliberate partnership between two specialised entities — Indobox on the Japan-side, Genesys on the India-side — each owning a clearly defined lane.",
                  JP: "J-Gateのハイデラバード運営は、日本側Indoboxとインド側Genesys — それぞれが明確に定義された領域を担当する2つの専門企業の意図的なパートナーシップ。",
                })}
              </p>
            </div>
          </Reveal>

          {/* Two-column responsibility cards */}
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Indobox */}
            <Reveal variant="left">
              <article className="lift-card relative h-full overflow-hidden rounded-lg border border-crimson/15 bg-pearl p-8 shadow-card">
                <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-crimson to-crimson-deep" />
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-crimson to-crimson-deep text-white shadow-card">
                    <Handshake className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="font-inter text-[11px] font-semibold uppercase text-crimson" style={{ letterSpacing: "0.15em" }}>
                      {tx({ EN: "Japan-side Operator", JP: "日本側運営" })}
                    </span>
                    <h3 className="font-serif-jp text-xl font-bold text-ink">Indobox</h3>
                  </div>
                </div>
                <p className="mt-4 font-inter text-[13px] leading-relaxed text-slate">
                  {tx({
                    EN: "Indobox owns the Japan-facing side of the partnership — every client touchpoint that bridges back to Tokyo, from first conversation to ongoing relationship management.",
                    JP: "Indoboxはパートナーシップの日本向け側面を担当 — 最初の会話から継続的な関係管理まで、東京へとつながるすべての顧客接点を担います。",
                  })}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {INDOBOX_DUTIES.map((d, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-crimson/15 text-crimson">
                        <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      <span className="font-inter text-[13px] leading-snug text-slate">{tx(d)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            {/* Genesys */}
            <Reveal variant="right" delay={100}>
              <article className="lift-card relative h-full overflow-hidden rounded-lg border border-saffron/15 bg-pearl p-8 shadow-card">
                <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-saffron to-[#c9881a]" />
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-saffron to-[#c9881a] text-white shadow-card">
                    <Building2 className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="font-inter text-[11px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.15em" }}>
                      {tx({ EN: "India-side Operator", JP: "インド側運営" })}
                    </span>
                    <h3 className="font-serif-jp text-xl font-bold text-ink">Genesys</h3>
                  </div>
                </div>
                <p className="mt-4 font-inter text-[13px] leading-relaxed text-slate">
                  {tx({
                    EN: "Genesys owns the India-side backbone — the workspace, the local talent pool, the relationships with Indian companies seeking Japanese partnerships, and the facilities that make daily operations possible.",
                    JP: "Genesysはインド側基盤を担当 — ワークスペース、現地人材プール、日本企業との提携を求めるインド企業との関係性、そして日常運営を可能にする施設。",
                  })}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {GENESYS_DUTIES.map((d, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-saffron/15 text-saffron">
                        <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      <span className="font-inter text-[13px] leading-snug text-slate">{tx(d)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>

          {/* Living Support Services — horizontal strip */}
          <Reveal delay={120}>
            <div className="mt-10 rounded-lg border border-crimson/12 bg-pearl p-7 shadow-card sm:p-9">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-crimson/10 text-crimson">
                    <Home className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="font-inter text-[11px] font-semibold uppercase text-crimson" style={{ letterSpacing: "0.15em" }}>
                      {tx({ EN: "Living Support Services", JP: "生活支援サービス" })}
                    </span>
                    <h3 className="font-serif-jp text-lg font-bold text-ink">
                      {tx({
                        EN: "Settling into Hyderabad — handled",
                        JP: "ハイデラバードへの定着 — お任せください",
                      })}
                    </h3>
                  </div>
                </div>
                <p className="max-w-md font-inter text-[12px] leading-relaxed text-slate">
                  {tx({
                    EN: "Beyond the workspace — full living support for expatriates relocating to Hyderabad, available as needed.",
                    JP: "ワークスペースを超えて — ハイデラバードに移住する駐在員向けの生活支援を、必要に応じて提供。",
                  })}
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {LIVING_SUPPORT.map((item, i) => (
                  <Reveal key={i} delay={i * 60}>
                    <div className="flex h-full items-center gap-3 rounded-md border border-crimson/10 bg-ivory/50 p-4 transition-all hover:border-crimson/30 hover:bg-ivory">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-crimson/10 text-crimson">
                        <item.icon className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      <span className="font-inter text-[12px] font-medium leading-snug text-slate">
                        {tx(item.label)}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 4 — Facility Features & Infrastructure (Slide 6)
          6 facility cards in 3-col grid with icon + JP accent label.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>
                {tx({
                  EN: "Facility Features & Infrastructure",
                  JP: "充実の設備とインフラ",
                })}
              </Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({
                  EN: "Full Facilities and Infrastructure to Accelerate Your Business",
                  JP: "「ビジネスを加速させる充実の設備とインフラ」",
                })}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {tx({
                  EN: "Six facility layers that turn a desk rental into an operating base — physical, digital, social, temporal, and security infrastructure, all standard.",
                  JP: "デスクの貸し借りを拠点として機能させる6つの施設レイヤー — 物理・デジタル・社交・時間・セキュリティインフラを標準装備。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map((f, i) => {
              const accentColor = i % 2 === 0 ? "crimson" : "saffron";
              const accentGradient =
                accentColor === "crimson"
                  ? "from-crimson to-crimson-deep"
                  : "from-saffron to-[#c9881a]";
              const accentText =
                accentColor === "crimson" ? "text-crimson" : "text-saffron";
              return (
                <Reveal key={i} delay={i * 80}>
                  <article className="lift-card group relative h-full overflow-hidden rounded-lg border border-crimson/10 bg-pearl p-7 shadow-card">
                    {/* Decorative gradient blob */}
                    <div
                      className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${accentGradient} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                    />

                    {/* Numbered chip — top right */}
                    <span className="absolute right-5 top-5 font-serif-jp text-[44px] font-bold leading-none text-ink opacity-[0.06]">
                      0{i + 1}
                    </span>

                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${accentGradient} text-white shadow-card transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                    >
                      <f.icon className="h-6 w-6" strokeWidth={1.5} />
                    </span>

                    <h3 className="mt-4 font-serif-jp text-lg font-bold text-ink">
                      {tx(f.title)}
                    </h3>
                    <p className={`mt-0.5 font-sans-jp text-[12px] font-medium ${accentText}`}>
                      {f.jp}
                    </p>
                    <p className="mt-3 font-inter text-[13px] leading-relaxed text-slate">
                      {tx(f.desc)}
                    </p>

                    <span
                      className={`absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r ${accentGradient} opacity-50`}
                    />
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Bottom callout — 24/7 badge */}
          <Reveal delay={120}>
            <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-center gap-5 rounded-lg border border-saffron/20 bg-saffron/[0.04] p-6 text-center sm:flex-row sm:text-left">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-saffron/15 text-saffron">
                <Banknote className="h-7 w-7" strokeWidth={1.5} />
              </span>
              <div>
                <p className="font-serif-jp text-base font-bold text-ink">
                  {tx({
                    EN: "Enterprise-grade infrastructure, included — not invoiced separately.",
                    JP: "エンタープライズ級インフラが含まれます — 別途請求なし。",
                  })}
                </p>
                <p className="mt-1 font-inter text-[12px] leading-relaxed text-slate">
                  {tx({
                    EN: "Wi-Fi, printers, lockers, meeting rooms, security, and 24/7 smart-key access — all part of every J-Gate membership plan.",
                    JP: "Wi-Fi・プリンター・ロッカー・会議室・セキュリティ・24時間スマートキーアクセス — すべてのJ-Gateメンバーシッププランに含まれます。",
                  })}
                </p>
              </div>
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
                className="mt-6 font-serif-jp font-bold leading-[1.18] text-white"
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({
                  EN: "Build Your India Base With Indobox",
                  JP: "Indoboxと共にインド拠点を構築する",
                })}
              </h2>
              <p
                className="mx-auto mt-4 font-inter leading-relaxed text-mist"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {tx({
                  EN: "Talk to us about your expansion goals — corporate setup, talent, sales, language, or all of the above. The conversation is free; the operating structure is ready.",
                  JP: "進出目標についてお話しください — 法人設立、人材、営業、言語、あるいはそのすべて。相談は無料。運営体制は整っています。",
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
                  href="/pricing"
                  className="rounded-md border border-saffron/40 px-7 py-3.5 font-inter text-[14px] font-semibold text-saffron transition-all hover:-translate-y-0.5 hover:bg-saffron/10"
                >
                  {tx({ EN: "View Membership Plans", JP: "メンバーシッププランを見る" })}
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
