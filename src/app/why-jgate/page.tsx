"use client";

import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import {
  Check,
  X,
  Languages,
  Cpu,
  Plane,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { QuoteMark, StarIcon as JStar } from "@/components/jgate/icons";

/* ============================================================
   Why J-Gate — deep-dive into differentiators
   Sections: PageHero → Comparison Matrix → 3 Core Pillars → Corporate Testimonials → CTA
   ============================================================ */

type Bilingual = { EN: string; JP: string };

/* ── Comparison Matrix ── */
const COMPARISON_ROWS: Bilingual[] = [
  {
    EN: "Language Screening",
    JP: "語学スクリーニング",
  },
  {
    EN: "Cultural Fit Assessment",
    JP: "文化適合性評価",
  },
  {
    EN: "Visa & Relocation Support",
    JP: "ビザ・再配置サポート",
  },
  {
    EN: "Direct Corporate Network Access",
    JP: "直接企業ネットワークへのアクセス",
  },
  {
    EN: "Post-Placement Support",
    JP: "配置後サポート",
  },
  {
    EN: "Retention Focus (12+ months)",
    JP: "定着率重視（12ヶ月以上）",
  },
];

// Standard Recruitment offers only [0] (Language Screening, partial) and [4] (Post-Placement, partial)
const STANDARD_OFFERS = [false, false, false, false, false, false];

// J-Gate 360° Bridging offers all
const JGATE_OFFERS = [true, true, true, true, true, true];

/* ── Core Pillars ── */
const PILLARS = [
  {
    icon: Languages,
    gradient: "from-crimson to-crimson-deep",
    title: {
      EN: "Bicultural Competency",
      JP: "バイカルチュラル・コンピテンシー",
    } as Bilingual,
    desc: {
      EN: "We believe language is necessary but insufficient. Real placement success requires bicultural competency — the ability to read a room, understand implicit expectations, and operate fluently inside Japanese corporate norms. Our candidates train not only in JLPT/NAT grammar, but in keigo, nemawashi, ho-ren-so, and the unwritten rhythms of Japanese enterprise life — alongside deep English technical fluency for cross-border teams.",
      JP: "語学は必要だが十分ではないと私たちは考えています。真の紹介成功にはバイカルチュラル・コンピテンシー — 状況を読み解き、暗黙の期待を理解し、日本の企業規範の中で流暢に行動する能力が必要です。私たちの候補者はJLPT・NATの文法だけでなく、敬語、根回し、報連相、そして日本企業生活の暗黙のリズムを訓練します — さらに越境チーム向けの深い英語技術流暢さも。",
    } as Bilingual,
    bullets: [
      {
        EN: "JLPT N5–N1 coaching with measurable pass-rate milestones",
        JP: "測定可能な合格率マイルストーン付きのJLPT N5–N1コーチング",
      },
      {
        EN: "Keigo, business email, and meeting etiquette drill modules",
        JP: "敬語、ビジネスメール、会議エチケットの訓練モジュール",
      },
      {
        EN: "Cross-cultural workshop on ho-ren-so and nemawashi",
        JP: "報連相と根回しに関する異文化ワークショップ",
      },
    ] as Bilingual[],
  },
  {
    icon: Cpu,
    gradient: "from-saffron to-[#c9881a]",
    title: {
      EN: "Vetted Technical Screening",
      JP: "審査済み技術スクリーニング",
    } as Bilingual,
    desc: {
      EN: "Every candidate is screened against rigorous software, AI/ML, and core-engineering benchmarks designed by our Technical Advisory Council — chaired by former T-Hub CEO Srinivas Rao Mahankali and former T-Hub CIO Sujit Jagirdar. We evaluate not only what candidates know, but how they think under pressure, how they communicate technical trade-offs, and whether their craft meets the standards Japanese enterprises expect from day-one contributors.",
      JP: "すべての候補者は、元T-Hub CEOのSrinivas Rao Mahankali氏と元T-Hub CIOのSujit Jagirdar氏が主導する技術諮問評議会が設計した、ソフトウェア、AI/ML、コアエンジニアリングの厳格なベンチマークで審査されます。候補者が知っていることだけでなく、プレッシャー下でどう思考し、技術的トレードオフをどう伝え、その技芸が初日から貢献できる日本企業の基準を満たすかを評価します。",
    } as Bilingual,
    bullets: [
      {
        EN: "Multi-stage technical screen: algorithm, system design, code review",
        JP: "多段階技術審査：アルゴリズム、システム設計、コードレビュー",
      },
      {
        EN: "Domain-specific tracks: full-stack, AI/ML, embedded, cloud, data",
        JP: "領域別トラック：フルスタック、AI/ML、組み込み、クラウド、データ",
      },
      {
        EN: "Advisory Council-reviewed evaluation rubric, updated quarterly",
        JP: "四半期ごとに更新される、諮問評議会レビュー済みの評価基準",
      },
    ] as Bilingual[],
  },
  {
    icon: Plane,
    gradient: "from-navy to-success",
    title: {
      EN: "Pre-to-Post Onboarding",
      JP: "プレ・トゥ・ポスト・オンボーディング",
    } as Bilingual,
    desc: {
      EN: "Most recruitment ends at the offer letter. Ours begins there. From visa facilitation and pre-departure cultural orientation, through housing transition and city registration in Tokyo, to first-day office accompaniment and a 90-day integration check-in — we own the entire journey. Candidates and companies focus on the work; we handle the rest, end to end.",
      JP: "ほとんどの採用はオファーレターで終わります。私たちはそこから始まります。ビザ支援と出発前文化オリエンテーション、東京での住居移行と市区町村登録、初日のオフィス同行、そして90日間の統合チェックインまで — 全行程を私たちが担います。候補者と企業は仕事に集中し、私たちが残りすべてをエンドツーエンドで対応します。",
    } as Bilingual,
    bullets: [
      {
        EN: "Visa processing, COE support, and municipal registration guidance",
        JP: "ビザ処理、在留資格認定書（COE）支援、市区町村登録ガイダンス",
      },
      {
        EN: "Housing search, lease negotiation, and settling-in logistics",
        JP: "住居探し、賃貸契約交渉、定着物流のサポート",
      },
      {
        EN: "First-day office accompaniment and 30/60/90-day integration check-ins",
        JP: "初日のオフィス同行と30/60/90日統合チェックイン",
      },
    ] as Bilingual[],
  },
] as const;

/* ── Testimonials ── */
const TESTIMONIALS = [
  {
    quote: {
      EN: "J-Gate delivered what three conventional recruiters could not — engineers who arrived fluent in our workflows and our unwritten expectations. Retention at the 12-month mark is the proof.",
      JP: "J-Gateは3つの従来型紹介業者が達成できなかったものを提供してくれました — 私たちのワークフローと暗黙の期待に流暢なエンジニアです。12ヶ月時点での定着率がその証拠です。",
    },
    name: { EN: "Hiroshi Yamamoto", JP: "山本 浩" },
    role: {
      EN: "Engineering Director, Fortune 500 Japanese Tech Firm",
      JP: "Fortune 500日本テック企業 エンジニアリングディレクター",
    },
    initials: "HY",
  },
  {
    quote: {
      EN: "The pre-to-post onboarding model is what sets J-Gate apart. Our new hire landed in Tokyo with housing sorted, visa stamped, and a cultural orientation already done. He contributed from week one.",
      JP: "プレ・トゥ・ポストのオンボーディングモデルこそがJ-Gateの際立つ点です。新入社員は住居手配済み、ビザ取得済み、文化オリエンテーション完了の状態で東京に到着し、最初の週から貢献しました。",
    },
    name: { EN: "Priya Nair", JP: "プリヤ・ナイール" },
    role: {
      EN: "Talent Acquisition Lead, Cross-Border Tech Consulting",
      JP: "越境テックコンサルティング タレントアクイジションリード",
    },
    initials: "PN",
  },
  {
    quote: {
      EN: "What surprised me was the technical rigour. J-Gate's screening matched our own bar — every candidate we interviewed was already at the level we'd expect after our internal loop.",
      JP: "驚いたのは技術的厳格さでした。J-Gateのスクリーニングは自社の基準に一致し、面接したすべての候補者が社内プロセス後と同等のレベルに達していました。",
    },
    name: { EN: "Kenji Watanabe", JP: "渡辺 健司" },
    role: {
      EN: "CTO, Tokyo-based AI Infrastructure Startup",
      JP: "東京のAIインフラスタートアップ CTO",
    },
    initials: "KW",
  },
] as const;

export default function WhyJGatePage() {
  const { tx } = useI18n();

  return (
    <>
      <PageHero
        eyebrowKey="why.eyebrow"
        titleNode={
          <>
            {tx({ EN: "The Bridge That", JP: "結果を届ける" })}
            <br />
            <span className="text-gradient-saffron">
              {tx({ EN: "Delivers Results", JP: "架け橋" })}
            </span>
          </>
        }
        subtitleKey="why.title"
      />

      {/* ───────────────────────────────────────────────────────────
          Comparison Matrix
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Side-by-Side Comparison", JP: "直接比較" })}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({ EN: "Standard Recruitment vs J-Gate 360° Bridging", JP: "従来型紹介 vs J-Gate 360°ブリッジング" })}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {tx({
                  EN: "Six capabilities that separate a transactional hire from a long-term placement.",
                  JP: "取引的な採用と長期的紹介を分ける6つの能力。",
                })}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-lg border border-crimson/10 bg-pearl shadow-card">
              {/* Header row */}
              <div className="grid grid-cols-[1.6fr_1fr_1fr] gap-2 border-b border-crimson/10 bg-ivory-warm px-4 py-4 sm:px-6">
                <div className="font-inter text-[11px] font-semibold uppercase text-mist sm:text-[12px]" style={{ letterSpacing: "0.1em" }}>
                  {tx({ EN: "Capability", JP: "能力" })}
                </div>
                <div className="text-center">
                  <div className="font-serif-jp text-[13px] font-bold text-slate sm:text-[15px]">
                    {tx({ EN: "Standard", JP: "従来型" })}
                  </div>
                  <div className="font-inter text-[10px] text-mist sm:text-[11px]">
                    {tx({ EN: "Recruitment", JP: "紹介" })}
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-serif-jp text-[13px] font-bold text-crimson sm:text-[15px]">
                    {tx({ EN: "J-Gate 360°", JP: "J-Gate 360°" })}
                  </div>
                  <div className="font-inter text-[10px] text-crimson/70 sm:text-[11px]">
                    {tx({ EN: "Bridging", JP: "ブリッジング" })}
                  </div>
                </div>
              </div>

              {/* Rows */}
              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[1.6fr_1fr_1fr] items-center gap-2 px-4 py-4 sm:px-6 ${
                    i !== COMPARISON_ROWS.length - 1 ? "border-b border-crimson/8" : ""
                  } ${i % 2 === 0 ? "bg-pearl" : "bg-ivory/40"}`}
                >
                  <div className="font-inter text-[13px] font-medium text-ink sm:text-[14px]">
                    {tx(row)}
                  </div>
                  <div className="flex justify-center">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full ${
                        STANDARD_OFFERS[i] ? "bg-success/15 text-success" : "bg-slate/10 text-slate"
                      }`}
                      aria-label={STANDARD_OFFERS[i] ? "Yes" : "No"}
                    >
                      {STANDARD_OFFERS[i] ? <Check className="h-4 w-4" strokeWidth={2.5} /> : <X className="h-4 w-4" strokeWidth={2.5} />}
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full ${
                        JGATE_OFFERS[i] ? "bg-crimson/15 text-crimson" : "bg-slate/10 text-slate"
                      }`}
                      aria-label={JGATE_OFFERS[i] ? "Yes" : "No"}
                    >
                      {JGATE_OFFERS[i] ? <Check className="h-4 w-4" strokeWidth={2.5} /> : <X className="h-4 w-4" strokeWidth={2.5} />}
                    </span>
                  </div>
                </div>
              ))}

              {/* Footer note */}
              <div className="border-t border-crimson/10 bg-crimson/5 px-6 py-4 text-center">
                <p className="font-inter text-[12px] text-slate sm:text-[13px]">
                  {tx({
                    EN: "Standard recruitment typically delivers partial language screening only. J-Gate delivers all six — end-to-end.",
                    JP: "従来型紹介は通常、部分的な語学スクリーニングのみを提供。J-Gateは6つすべてをエンドツーエンドで提供します。",
                  })}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Core Pillars — 3 detailed cards
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Core Pillars", JP: "コア・ピラー" })}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({ EN: "Three Pillars That Define Our 360° Approach", JP: "360°アプローチを定義する3つの柱" })}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {tx({
                  EN: "Each pillar is a non-negotiable — together they form the operating system of every J-Gate placement.",
                  JP: "各柱は譲れない要素 — 併せてJ-Gateのすべての紹介のオペレーティングシステムを形成します。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={i} delay={i * 120}>
                <article className="lift-card group relative flex h-full flex-col overflow-hidden rounded-lg border border-crimson/10 bg-pearl p-8 shadow-card">
                  {/* Decorative gradient blob */}
                  <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${p.gradient} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />

                  {/* Icon badge */}
                  <div className={`relative flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br ${p.gradient} text-white shadow-card transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                    <p.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="relative mt-5 font-serif-jp text-xl font-bold text-ink">
                    {tx(p.title)}
                  </h3>

                  <p className="relative mt-3 font-inter text-[14px] leading-relaxed text-slate">
                    {tx(p.desc)}
                  </p>

                  {/* Bullets */}
                  <ul className="relative mt-6 space-y-3 border-t border-crimson/10 pt-6">
                    {p.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-crimson/10 text-crimson">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="font-inter text-[13px] leading-snug text-slate">
                          {tx(b)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Corporate Testimonials — glass-dark on navy
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-navy">
        <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(232,160,26,0.08), transparent 55%)" }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>{tx({ EN: "Corporate Testimonials", JP: "企業推薦の声" })}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({ EN: "What Our Corporate Partners Say", JP: "企業パートナーの声" })}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {tx({
                  EN: "Voices from the enterprises who trust J-Gate to deliver their most critical placements.",
                  JP: "最も重要な紹介をJ-Gateに委ねる企業の声。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 120}>
                <article className="glass-dark lift-card relative flex h-full flex-col rounded-lg p-8">
                  {/* Quote mark */}
                  <QuoteMark className="absolute right-6 top-6 h-10 w-10 text-crimson/40" />

                  {/* 5-star rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <JStar key={si} className="h-4 w-4 text-saffron" />
                    ))}
                  </div>

                  {/* Quote body */}
                  <p className="mt-5 flex-1 font-inter text-[14px] leading-relaxed text-white/90">
                    “{tx(t.quote)}”
                  </p>

                  {/* Attribution */}
                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-crimson/30 to-saffron/20 font-serif-jp text-[14px] font-bold text-white">
                      {t.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="font-serif-jp text-[14px] font-bold text-white">{tx(t.name)}</div>
                      <div className="font-inter text-[11px] text-mist">{tx(t.role)}</div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
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
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-saffron/15 text-saffron">
                <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h2
                className="mt-6 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({
                  EN: "Experience the J-Gate 360° Difference",
                  JP: "J-Gate 360°の違いを体験する",
                })}
              </h2>
              <p className="mx-auto mt-4 font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {tx({
                  EN: "From bicultural training to vetted screening to end-to-end onboarding — explore the services that operationalise these pillars.",
                  JP: "バイカルチュラル訓練から審査済みスクリーニング、エンドツーエンドオンボーディングまで — これらの柱を実現するサービスを見る。",
                })}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/services"
                  className="btn-shine flex items-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-7 py-3.5 font-inter text-[14px] font-semibold text-white shadow-[0_0_20px_rgba(188,26,44,0.35)] transition-all hover:-translate-y-0.5"
                >
                  {tx({ EN: "Explore Services", JP: "サービスを見る" })}
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
