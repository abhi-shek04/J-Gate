"use client";

import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import {
  Users,
  Handshake,
  BookOpen,
  Plane,
  Check,
  ArrowRight,
  ClipboardList,
  Search,
  UserCheck,
  FileCheck,
  Home,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

/* ============================================================
   Services — comprehensive bilateral services breakdown
   Sections: PageHero → 4 Service Verticals → Engagement Process Stepper → CTA
   ============================================================ */

type Bilingual = { EN: string; JP: string };

const SERVICES = [
  {
    icon: Users,
    gradient: "from-crimson to-crimson-deep",
    title: {
      EN: "Executive & Technical Recruitment",
      JP: "エグゼクティブ＆技術採用",
    } as Bilingual,
    subtitle: {
      EN: "Direct hiring channels into Japan's leading tech enterprises.",
      JP: "日本の代表的テック企業への直接採用チャネル。",
    } as Bilingual,
    desc: {
      EN: "We place engineers, technical leads, and C-suite executives directly into Japanese enterprises — from software engineers and ML specialists to engineering directors and CTOs. Every placement passes through rigorous technical screening, cultural-fit assessment, and bilingual interview facilitation. We place talent that stays, not talent that simply signs.",
      JP: "エンジニア、技術リード、C-suiteエグゼクティブを日本企業に直接紹介 — ソフトウェアエンジニアやMLスペシャリストからエンジニアリングディレクター、CTOまで。すべての紹介は厳格な技術スクリーニング、文化適合性評価、バイリンガル面接支援を経て行われます。単に契約を交わす人材ではなく、定着する人材を紹介します。",
    } as Bilingual,
    bullets: [
      {
        EN: "Active sourcing across India's top engineering talent pools",
        JP: "インドのトップエンジニアリング人材プールからの能動的ソーシング",
      },
      {
        EN: "Multi-stage technical screening (algorithm, system design, code review)",
        JP: "多段階技術スクリーニング（アルゴリズム、システム設計、コードレビュー）",
      },
      {
        EN: "Cultural-fit assessment against Japanese enterprise norms",
        JP: "日本企業規範に基づく文化適合性評価",
      },
      {
        EN: "Bilingual interview facilitation and offer negotiation",
        JP: "バイリンガル面接支援とオファー交渉",
      },
      {
        EN: "90-day post-placement retention check-in",
        JP: "90日間の配置後定着チェックイン",
      },
    ] as Bilingual[],
  },
  {
    icon: Handshake,
    gradient: "from-saffron to-[#c9881a]",
    title: {
      EN: "Corporate Bridging & Technical Consulting",
      JP: "企業橋渡し＆技術コンサルティング",
    } as Bilingual,
    subtitle: {
      EN: "Cross-border business and project management between Japan and India.",
      JP: "日印間の越境ビジネスとプロジェクト管理。",
    } as Bilingual,
    desc: {
      EN: "We bridge Japanese enterprises with Indian technology partners — handling the relationships, contracts, and ongoing liaison that make cross-border collaboration work. From MoU facilitation and partner vetting to project liaison and milestone tracking, our team operates as the single point of accountability on both sides of the corridor.",
      JP: "日本企業とインドの技術パートナーを橋渡し — 越境コラボレーションを機能させる関係性、契約、継続的な連絡を担当します。MoU調整やパートナー審査から、プロジェクト連絡やマイルストン追跡まで、私たちのチームは回廊の両側で単一の責任窓口として機能します。",
    } as Bilingual,
    bullets: [
      {
        EN: "MoU facilitation, drafting, and bilingual contract support",
        JP: "MoU調整、起案、バイリンガル契約サポート",
      },
      {
        EN: "Partner vetting and technical due diligence",
        JP: "パートナー審査と技術デューデリジェンス",
      },
      {
        EN: "Dedicated project liaison across time zones",
        JP: "時差を超えた専任プロジェクト連絡担当",
      },
      {
        EN: "Milestone tracking and quarterly delivery reviews",
        JP: "マイルストン追跡と四半期ごとの提供レビュー",
      },
    ] as Bilingual[],
  },
  {
    icon: BookOpen,
    gradient: "from-navy to-success",
    title: {
      EN: "Specialized Business Japanese & JLPT/NAT Bootcamps",
      JP: "専門ビジネス日本語＆JLPT/NATブートキャンプ",
    } as Bilingual,
    subtitle: {
      EN: "Intensive language coaching designed specifically for engineers.",
      JP: "エンジニア専用に設計された集中的語学コーチング。",
    } as Bilingual,
    desc: {
      EN: "We deliver intensive Japanese language bootcamps engineered for the realities of Japanese enterprise work — not textbook Japanese. From N5 foundations through N1 fluency, our modules cover JLPT/NAT coaching, business Japanese (keigo, email, meetings), and the cultural etiquette that determines whether an engineer integrates or merely survives.",
      JP: "日本企業の仕事の現実に合わせて設計された集中的日本語ブートキャンプを提供 — 教科書の日本語ではなく。N5の基礎からN1の流暢さまで、私たちのモジュールはJLPT・NATコーチング、ビジネス日本語（敬語、メール、会議）、そしてエンジニアが統合するか単に生き残るかを決定する文化エチケットを網羅します。",
    } as Bilingual,
    bullets: [
      {
        EN: "JLPT N5–N1 coaching with measurable pass-rate milestones",
        JP: "測定可能な合格率マイルストーン付きのJLPT N5–N1コーチング",
      },
      {
        EN: "Corporate group training for cohort-based onboarding",
        JP: "コホートベースのオンボーディング向け企業団体研修",
      },
      {
        EN: "Business Japanese modules (keigo, email, meetings, presentations)",
        JP: "ビジネス日本語モジュール（敬語、メール、会議、プレゼン）",
      },
      {
        EN: "Cultural etiquette: ho-ren-so, nemawashi, and reading the room",
        JP: "文化エチケット：報連相、根回し、空気を読む",
      },
      {
        EN: "One-on-one coaching with JLPT-certified sensei",
        JP: "JLPT認定講師によるマンツーマンコーチング",
      },
    ] as Bilingual[],
  },
  {
    icon: Plane,
    gradient: "from-saffron to-crimson",
    title: {
      EN: "Visa, Relocation & Post-Hire Support",
      JP: "ビザ・再配置＆採用後サポート",
    } as Bilingual,
    subtitle: {
      EN: "End-to-end relocation, from offer acceptance to first day at the Tokyo office.",
      JP: "オファー承諾から東京オフィスでの初日までのエンドツーエンド再配置。",
    } as Bilingual,
    desc: {
      EN: "Most recruitment ends at the offer letter. Ours begins there. From visa processing and pre-departure cultural orientation, through housing transition and municipal registration in Tokyo, to first-day office accompaniment and 90-day integration check-ins — we own every logistical detail so your new hire arrives ready, settled, and focused on the work.",
      JP: "ほとんどの採用はオファーレターで終わります。私たちはそこから始まります。ビザ処理と出発前文化オリエンテーション、東京での住居移行と市区町村登録、初日のオフィス同行、90日間の統合チェックインまで — あらゆる物流的詳細を担当し、新入社員が準備を整え、定着し、仕事に集中した状態で到着するようにします。",
    } as Bilingual,
    bullets: [
      {
        EN: "Visa processing, COE support, and municipal registration guidance",
        JP: "ビザ処理、在留資格認定書（COE）支援、市区町村登録ガイダンス",
      },
      {
        EN: "Pre-departure cultural orientation and packing guidance",
        JP: "出発前文化オリエンテーションと荷造りガイダンス",
      },
      {
        EN: "Housing search, lease negotiation, and settling-in logistics",
        JP: "住居探し、賃貸契約交渉、定着物流のサポート",
      },
      {
        EN: "First-day office accompaniment and bank/phone setup",
        JP: "初日のオフィス同行と銀行・電話手続き",
      },
      {
        EN: "30/60/90-day integration check-ins for both hire and company",
        JP: "採用者と企業双方向けの30/60/90日統合チェックイン",
      },
    ] as Bilingual[],
  },
] as const;

/* ── Engagement Process Stepper ── */
const STEPS = [
  {
    icon: ClipboardList,
    title: { EN: "Initial Consultation", JP: "初期相談" } as Bilingual,
    desc: {
      EN: "We sit down with your team to understand the role, the technical bar, and the cultural fit you need.",
      JP: "お客様のチームと座談し、役職、技術的基準、必要な文化適合を理解します。",
    } as Bilingual,
  },
  {
    icon: Search,
    title: { EN: "Needs Assessment", JP: "ニーズ評価" } as Bilingual,
    desc: {
      EN: "We translate your requirements into a structured candidate profile and screening rubric.",
      JP: "ご要件を構造化された候補者プロファイルとスクリーニング基準に変換します。",
    } as Bilingual,
  },
  {
    icon: UserCheck,
    title: { EN: "Candidate Screening", JP: "候補者スクリーニング" } as Bilingual,
    desc: {
      EN: "Our Advisory Council–reviewed rubric filters candidates through technical and cultural evaluation.",
      JP: "諮問評議会レビュー済みの基準が、技術的・文化的評価を通じて候補者をフィルタリングします。",
    } as Bilingual,
  },
  {
    icon: Users,
    title: { EN: "Interview & Selection", JP: "面接・選考" } as Bilingual,
    desc: {
      EN: "We facilitate bilingual interviews, manage feedback loops, and guide final selection with you.",
      JP: "バイリンガル面接を支援し、フィードバックループを管理し、最終選考をご一緒します。",
    } as Bilingual,
  },
  {
    icon: FileCheck,
    title: { EN: "Visa & Relocation", JP: "ビザ・再配置" } as Bilingual,
    desc: {
      EN: "From offer acceptance to landing in Tokyo — visa, housing, and municipal registration handled.",
      JP: "オファー承諾から東京到着まで — ビザ、住居、市区町村登録を担当。",
    } as Bilingual,
  },
  {
    icon: Home,
    title: { EN: "Onboarding & Integration", JP: "オンボーディング・統合" } as Bilingual,
    desc: {
      EN: "First-day accompaniment and 30/60/90-day check-ins ensure long-term retention, not just arrival.",
      JP: "初日の同行と30/60/90日チェックインが、単なる到着ではなく長期定着を確保します。",
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
            {tx({ EN: "Four Pathways to", JP: "日印成功への" })}
            <br />
            <span className="text-gradient-saffron">
              {tx({ EN: "Japan-India Success", JP: "4つの道" })}
            </span>
          </>
        }
        subtitleKey="services.title"
      />

      {/* ───────────────────────────────────────────────────────────
          4 Service Verticals
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Service Verticals", JP: "サービス分野" })}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({ EN: "Four Verticals, One Bilateral Operating System", JP: "4つの分野、一つの両国間オペレーティングシステム" })}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {tx({
                  EN: "Each vertical is independently world-class — together they form an end-to-end pipeline for Indo-Japanese talent and business success.",
                  JP: "各分野は独立して世界クラス — 併せて日印の人材とビジネス成功のためのエンドツーエンドパイプラインを形成します。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <article className="lift-card group relative h-full overflow-hidden rounded-lg border border-crimson/10 bg-pearl p-8 shadow-card">
                  {/* Decorative gradient blob */}
                  <div className={`pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br ${s.gradient} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />

                  {/* Header */}
                  <div className="relative flex items-start gap-5">
                    <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${s.gradient} text-white shadow-card transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3`}>
                      <s.icon className="h-8 w-8" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="font-inter text-[11px] font-semibold uppercase text-crimson" style={{ letterSpacing: "0.15em" }}>
                        {tx({ EN: `Vertical 0${i + 1}`, JP: `分野 0${i + 1}` })}
                      </span>
                      <h3 className="mt-1 font-serif-jp text-xl font-bold leading-tight text-ink">
                        {tx(s.title)}
                      </h3>
                      <p className="mt-1 font-inter text-[13px] font-medium text-slate">
                        {tx(s.subtitle)}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="relative mt-6 font-inter text-[14px] leading-relaxed text-slate">
                    {tx(s.desc)}
                  </p>

                  {/* Included features */}
                  <div className="relative mt-6 border-t border-crimson/10 pt-6">
                    <div className="font-inter text-[11px] font-semibold uppercase text-mist" style={{ letterSpacing: "0.12em" }}>
                      {tx({ EN: "What's Included", JP: "含まれる内容" })}
                    </div>
                    <ul className="mt-4 space-y-2.5">
                      {s.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-3">
                          <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${s.gradient} text-white`}>
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          <span className="font-inter text-[13px] leading-snug text-slate">
                            {tx(b)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Engagement Process — horizontal stepper on desktop, vertical on mobile
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-midnight">
        <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(232,160,26,0.08), transparent 60%)" }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>{tx({ EN: "Engagement Process", JP: "契約プロセス" })}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({ EN: "Six Steps From First Call to First Day", JP: "最初の電話から初日までの6つのステップ" })}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {tx({
                  EN: "A clear, accountable roadmap — every step owned by J-Gate, every milestone transparent to you.",
                  JP: "明確で責任あるロードマップ — すべてのステップをJ-Gateが担当し、すべてのマイルストンを透明にお伝えします。",
                })}
              </p>
            </div>
          </Reveal>

          {/* Stepper — horizontal on lg, vertical on mobile */}
          <div className="relative mt-16">
            {/* Horizontal connecting line — desktop only */}
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-crimson/40 via-saffron/40 to-crimson/40 lg:block" aria-hidden="true" />

            <ol className="grid gap-8 lg:grid-cols-6 lg:gap-4">
              {STEPS.map((step, i) => (
                <Reveal key={i} delay={i * 90}>
                  <li className="relative flex flex-col items-center text-center">
                    {/* Numbered circle with icon */}
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-crimson to-crimson-deep text-white shadow-[0_0_0_6px_rgba(188,26,44,0.18)] transition-transform duration-300 hover:scale-110">
                      <step.icon className="h-6 w-6" strokeWidth={1.5} />
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-saffron font-inter text-[10px] font-bold text-midnight">
                        {i + 1}
                      </span>
                    </div>

                    {/* Title + desc */}
                    <h3 className="mt-4 font-serif-jp text-[15px] font-bold text-white">
                      {tx(step.title)}
                    </h3>
                    <p className="mt-2 font-inter text-[12px] leading-snug text-mist">
                      {tx(step.desc)}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Closing CTA
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-crimson/10 text-crimson">
                <Sparkles className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h2
                className="mt-6 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({
                  EN: "Start With a Conversation, End With a Placement",
                  JP: "会話から始まり、紹介で終わる",
                })}
              </h2>
              <p className="mx-auto mt-4 font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {tx({
                  EN: "Tell us about your role, your team, and the talent you need — we'll show you exactly how the six-step process applies to your case.",
                  JP: "役職、チーム、必要な人材についてお話しください — 6ステップのプロセスがあなたのケースにどう適用されるか正確にお見せします。",
                })}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/auth/brochure"
                  className="btn-shine flex items-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-7 py-3.5 font-inter text-[14px] font-semibold text-white shadow-[0_0_20px_rgba(188,26,44,0.35)] transition-all hover:-translate-y-0.5"
                >
                  {tx({ EN: "Download Brochure", JP: "パンフレットをダウンロード" })}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/team"
                  className="rounded-md border border-crimson/30 px-7 py-3.5 font-inter text-[14px] font-semibold text-crimson transition-all hover:-translate-y-0.5 hover:bg-crimson/5"
                >
                  {tx({ EN: "Meet the Team", JP: "チームを見る" })}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
