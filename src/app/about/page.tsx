"use client";

import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import {
  Target,
  Eye,
  ShieldCheck,
  Globe2,
  Cpu,
  Handshake,
  BookOpen,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

/* ============================================================
   About J-Gate — Premium corporate identity page
   Sections: PageHero → Company Story → Mission & Vision → Core Values → Milestones Timeline → CTA
   ============================================================ */

const STORY = {
  p1: {
    EN: "J-Gate was born from a singular conviction — that the world's two most complementary technology ecosystems, India's deep engineering talent and Japan's enterprise precision, were never meant to remain separate. In August 2013, our founder Daisuke Tanji arrived in Hyderabad to discover a city bursting with world-class engineers, yet operating at a cultural distance from the Japanese enterprises that needed them most. A decade of bridging work followed, eventually crystallising into J-Gate.",
    JP: "J-Gateは一つの信念から生まれました — 世界で最も補完的な技術生態系であるインドの深いエンジニアリング人材と日本の企業精度は、本来分かれたままにあるべきではないという確信です。2013年8月、創業者のダンジ・ダイスケがハイデラバードに赴任した際、世界クラスのエンジニアに満ちた都市を見出しましたが、彼らは最も必要としていた日本企業から文化的に遠い距離にありました。それから10年の架け橋の仕事が続き、最終的にJ-Gateとして結晶化しました。",
  },
  p2: {
    EN: "Inaugurated in 2026 at Cyber Gateway, Hyderabad, J-Gate was launched with the endorsement of JETRO and the partnership of Genesys Info X, T-Hub, and Woxsen University. On the inaugural day, over fifty guests from Japanese and Indian enterprises witnessed the formalisation of an MoU with Genesys Info X and the formation of our Technical Advisory Council — anchored by former T-Hub CEO Srinivas Rao Mahankali and former T-Hub CIO Sujit Jagirdar.",
    JP: "2026年、ハイデラバードのサイバー・ゲートウェイにて開設されたJ-Gateは、JETROの支援とGenesys Info X、T-Hub、Woxsen Universityのパートナーシップのもとに立ち上げられました。開設当日には、日印両国の企業から50名を超える来賓が集い、Genesys Info XとのMoU締結と、元T-Hub CEOのSrinivas Rao Mahankali氏、元T-Hub CIOのSujit Jagirdar氏を中心とする技術諮問評議会の発足を目撃しました。",
  },
  p3: {
    EN: "What sets J-Gate apart is that we are not a job board, nor a language school, nor a relocation agency. We are all three — and more. We exist to make the Indo-Japanese corridor operational at every touchpoint: from the first Japanese conversation an engineer has, to their first day at a Tokyo office, to the long-term retention that defines a successful placement. This is the bridge we build.",
    JP: "J-Gateが際立っているのは、私たちが求人掲示板でも、語学学校でも、再配置業者でもない点です。私たちはその三つすべてであり、さらにそれ以上です。エンジニアが交わす最初の日本語の会話から、東京オフィスでの初日、そして成功した紹介を定義する長期的定着に至るまで、日印回廊のあらゆる接点を機能させることが私たちの存在意義です。これが私たちが建設する架け橋です。",
  },
} as const;

const MISSION = {
  title: { EN: "Our Mission", JP: "ミッション" },
  body: {
    EN: "To empower top-tier engineers and professionals with seamless career integration into Japan's leading enterprises — through rigorous recruitment, language mastery, and deep cultural fluency. We measure our success not in placements made, but in placements that endure.",
    JP: "トップクラスのエンジニアとプロフェッショナルに対し、厳格な採用、語学習得、深い文化的流暢さを通じて、日本の代表的企業へのシームレスなキャリア統合を支援する。私たちは紹介の数ではなく、定着する紹介によって成功を測定します。",
  },
} as const;

const VISION = {
  title: { EN: "Our Vision", JP: "ビジョン" },
  body: {
    EN: "To become the definitive Indo-Japanese talent pipeline and strategic bridge — the first name Japanese enterprises call when they need world-class technical talent, and the first name Indian engineers trust when they build a career in Japan.",
    JP: "決定的な日印人材パイプラインと戦略的架け橋になること — 日本企業が世界クラスの技術人材を必要とする時に最初に思い浮かべる名前、そしてインド人エンジニアが日本でキャリアを築く際に最初に信頼する名前になること。",
  },
} as const;

const VALUES = [
  {
    icon: ShieldCheck,
    title: { EN: "Integrity", JP: "誠実さ" },
    desc: {
      EN: "Transparent, honest, long-term relationships — never transactional. We treat every candidate and every partner as a decade-long commitment.",
      JP: "透明で誠実な長期的関係 — 決して取引的ではない。すべての候補者とパートナーを10年単位のコミットメントとして扱います。",
    },
  },
  {
    icon: Globe2,
    title: { EN: "Cultural Fluency", JP: "文化的流暢さ" },
    desc: {
      EN: "Deep mastery of both Japanese and Indian business cultures, so placements land ready to contribute from day one — not after a year of adjustment.",
      JP: "日本とインドの両ビジネス文化の深い理解。1年間の適応期間の後ではなく、初日から貢献できる状態で人材を届けます。",
    },
  },
  {
    icon: Cpu,
    title: { EN: "Technical Excellence", JP: "技術的卓越" },
    desc: {
      EN: "Rigorous screening across CS, AI/ML, and core engineering — only the top percentile of evaluated talent clears our benchmarks for placement.",
      JP: "CS、AI/ML、コアエンジニアリングにおける厳格なスクリーニング — 評価された人材のトップパーセンタイルのみが紹介の基準を通過します。",
    },
  },
  {
    icon: Handshake,
    title: { EN: "Long-Term Partnership", JP: "長期パートナーシップ" },
    desc: {
      EN: "We succeed only when our placements and partners succeed. Retention, not placement volume, is the metric we optimise for — every time.",
      JP: "紹介とパートナーが成功して初めて私たちも成功する。紹介数ではなく定着率を、毎回最適化の対象とします。",
    },
  },
] as const;

const MILESTONES = [
  {
    date: { EN: "August 2013", JP: "2013年8月" },
    title: { EN: "Founder Arrives in India", JP: "創業者、インドに到着" },
    body: {
      EN: "Daisuke Tanji arrives in Hyderabad — the beginning of a decade-long immersion into India's engineering ecosystem and the relationships that would later become J-Gate.",
      JP: "ダンジ・ダイスケがハイデラバードに到着 — インドのエンジニアリング生態系への10年にわたる没入と、後のJ-Gateとなる関係性の始まり。",
    },
  },
  {
    date: { EN: "2026", JP: "2026年" },
    title: { EN: "J-Gate Inaugurated at Cyber Gateway", JP: "J-Gate、サイバー・ゲートウェイにて開設" },
    body: {
      EN: "J-Gate opens its doors at Cyber Gateway, Hyderabad, as a dedicated working space for Japanese companies and a bilateral talent & business bridge.",
      JP: "J-Gateがハイデラバードのサイバー・ゲートウェイに開設。日本企業向け専用ワーキングスペースとして、また両国間の人材・ビジネス架け橋として活動を開始。",
    },
  },
  {
    date: { EN: "June 22, 2026", JP: "2026年6月22日" },
    title: { EN: "Inaugural Ceremony — 50+ Guests", JP: "開設記念式典 — 50名以上の来賓" },
    body: {
      EN: "Over fifty executives from Japanese and Indian enterprises attend the inauguration, with a keynote address from JETRO endorsing J-Gate's bilateral mission.",
      JP: "日印両国の企業から50名以上の経営幹部が開設式に出席。JETROからの基調講演により、J-Gateの両国間ミッションが支持されました。",
    },
  },
  {
    date: { EN: "Day 1", JP: "開設初日" },
    title: { EN: "Two Founding Member Companies", JP: "創設メンバー企業2社" },
    body: {
      EN: "Two founding member companies join on day one — establishing the corporate network that would expand to over a hundred partner organisations across the corridor.",
      JP: "開設初日に2社の創設メンバー企業が参加 — 回廊全体で100社を超えるパートナー組織へと拡大する企業ネットワークの基盤を確立。",
    },
  },
  {
    date: { EN: "Q3 2026", JP: "2026年第3四半期" },
    title: { EN: "MoU with Genesys Info X", JP: "Genesys Info XとMoU締結" },
    body: {
      EN: "Formal Memorandum of Understanding signed with Genesys Info X, anchoring the technical delivery and operational backbone of J-Gate's recruitment vertical.",
      JP: "Genesys Info Xとの間で正式な覚書（MoU）を締結。J-Gateの採用部門における技術的提供と運営基盤を固定化。",
    },
  },
  {
    date: { EN: "Q4 2026", JP: "2026年第4四半期" },
    title: { EN: "Advisory Council Formed", JP: "諮問評議会発足" },
    body: {
      EN: "Technical Advisory Council formed under the chair of former T-Hub CEO Srinivas Rao Mahankali and former T-Hub CIO Sujit Jagirdar — guiding the rigour of J-Gate's screening methodology.",
      JP: "元T-Hub CEOのSrinivas Rao Mahankali氏と元T-Hub CIOのSujit Jagirdar氏の主導のもと、技術諮問評議会を発足 — J-Gateのスクリーニング手法の厳格さを指導。",
    },
  },
] as const;

export default function AboutPage() {
  const { tx } = useI18n();

  return (
    <>
      <PageHero
        eyebrowKey="about.eyebrow"
        titleNode={
          <>
            {tx({ EN: "The Indo-Japanese", JP: "日印人材の" })}
            <br />
            <span className="text-gradient-saffron">
              {tx({ EN: "Talent Bridge", JP: "架け橋" })}
            </span>
          </>
        }
        subtitleKey="about.title"
      />

      {/* ───────────────────────────────────────────────────────────
          Company Story — full-width narrative
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-crimson/10 text-crimson">
                  <BookOpen className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <Eyebrow>{tx({ EN: "Our Story", JP: "私たちのストーリー" })}</Eyebrow>
              </div>
              <h2
                className="mt-6 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.875rem,4vw,2.625rem)" }}
              >
                {tx({
                  EN: "A Decade of Bridging, Crystallised into One Institution",
                  JP: "10年の架け橋の仕事が、一つの機関として結晶化",
                })}
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 space-y-5 font-inter leading-[1.85] text-slate" style={{ fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)" }}>
                <p>{tx(STORY.p1)}</p>
                <p>{tx(STORY.p2)}</p>
                <p>{tx(STORY.p3)}</p>
              </div>
            </Reveal>

            {/* pull-quote accent */}
            <Reveal delay={200}>
              <blockquote className="mt-10 border-l-2 border-crimson pl-6">
                <p className="font-serif-jp text-[clamp(1.125rem,2vw,1.375rem)] font-medium italic leading-snug text-ink">
                  {tx({
                    EN: "“We are not a job board, nor a language school. We are the bridge — operational at every touchpoint of the Indo-Japanese corridor.”",
                    JP: "「私たちは求人掲示板でも、語学学校でもない。日印回廊のあらゆる接点で機能する、架け橋です。」",
                  })}
                </p>
                <footer className="mt-3 font-inter text-[13px] font-medium uppercase text-mist" style={{ letterSpacing: "0.08em" }}>
                  — Daisuke Tanji, {tx({ EN: "Founder & CEO", JP: "創業者兼CEO" })}
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Mission & Vision — two cards (crimson + saffron)
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Mission & Vision", JP: "ミッション＆ビジョン" })}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({ EN: "What We Exist To Do", JP: "私たちの存在意義" })}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {tx({
                  EN: "Two statements — one for what we do today, one for what we are building toward.",
                  JP: "二つの声明 — 今日私たちが行うことと、私たちが構築している未来。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Mission — crimson accent */}
            <Reveal delay={100}>
              <article className="lift-card relative h-full overflow-hidden rounded-lg border border-crimson/15 bg-pearl p-8 shadow-card">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-crimson to-crimson-deep" />
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-crimson/10 text-crimson">
                    <Target className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="font-serif-jp text-xl font-bold text-ink">{tx(MISSION.title)}</h3>
                </div>
                <p className="mt-5 font-inter text-[15px] leading-relaxed text-slate">{tx(MISSION.body)}</p>
                <div className="mt-6 flex items-center gap-2 border-t border-crimson/10 pt-5">
                  <span className="font-inter text-[11px] font-semibold uppercase text-crimson" style={{ letterSpacing: "0.15em" }}>
                    {tx({ EN: "What we do today", JP: "今日私たちが行うこと" })}
                  </span>
                </div>
              </article>
            </Reveal>

            {/* Vision — saffron accent */}
            <Reveal delay={200}>
              <article className="lift-card relative h-full overflow-hidden rounded-lg border border-saffron/20 bg-pearl p-8 shadow-card">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saffron to-[#c9881a]" />
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-saffron/15 text-saffron">
                    <Eye className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="font-serif-jp text-xl font-bold text-ink">{tx(VISION.title)}</h3>
                </div>
                <p className="mt-5 font-inter text-[15px] leading-relaxed text-slate">{tx(VISION.body)}</p>
                <div className="mt-6 flex items-center gap-2 border-t border-saffron/15 pt-5">
                  <span className="font-inter text-[11px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.15em" }}>
                    {tx({ EN: "What we build toward", JP: "私たちが構築する未来" })}
                  </span>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Core Values — 4-card grid
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Core Values", JP: "コアバリュー" })}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({ EN: "The Principles Behind Every Placement", JP: "すべての紹介の背景にある原則" })}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {tx({
                  EN: "Four principles guide every recruitment, every training, every partnership — without exception.",
                  JP: "四つの原則が例外なく、すべての採用、研修、パートナーシップを導きます。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={i} delay={i * 100}>
                <article className="lift-card group h-full rounded-lg border border-crimson/8 bg-pearl p-7 text-center shadow-card">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-crimson/10 to-saffron/10 text-crimson transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <v.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-serif-jp text-lg font-bold text-ink">{tx(v.title)}</h3>
                  <p className="mt-2.5 font-inter text-[13px] leading-relaxed text-slate">{tx(v.desc)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Milestones Timeline — alternating left/right cards on desktop
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-midnight">
        <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(188,26,44,0.10), transparent 60%)" }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>{tx({ EN: "Milestones", JP: "マイルストーン" })}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({ EN: "The Road to J-Gate", JP: "J-Gateへの道のり" })}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {tx({
                  EN: "From a founder's arrival in 2013 to the inauguration of a bilateral institution — the moments that defined J-Gate.",
                  JP: "2013年の創業者の到着から両国間機関の開設まで — J-Gateを形作った瞬間。",
                })}
              </p>
            </div>
          </Reveal>

          {/* Timeline */}
          <div className="relative mx-auto mt-16 max-w-4xl">
            {/* Vertical line — desktop center / mobile left */}
            <span
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-crimson via-crimson/40 to-transparent md:left-1/2 md:-translate-x-1/2 left-4"
              aria-hidden="true"
            />

            <div className="space-y-10 md:space-y-16">
              {MILESTONES.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <Reveal key={i} variant={isLeft ? "left" : "right"} delay={i * 80}>
                    <div
                      className={`relative flex flex-col md:flex-row md:items-center ${
                        isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Node dot — sits on the line */}
                      <span
                        className="absolute z-10 flex h-4 w-4 items-center justify-center rounded-full bg-saffron shadow-[0_0_0_4px_rgba(232,160,26,0.18)] md:left-1/2 md:-translate-x-1/2 left-4 -translate-x-1/2"
                        aria-hidden="true"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      </span>

                      {/* Card */}
                      <div className={`md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"} pl-12 md:pl-0`}>
                        <article className="glass-dark lift-card rounded-lg p-6">
                          <span className="inline-block rounded-md bg-crimson/20 px-2.5 py-1 font-inter text-[11px] font-bold uppercase text-saffron" style={{ letterSpacing: "0.12em" }}>
                            {tx(m.date)}
                          </span>
                          <h3 className="mt-3 font-serif-jp text-lg font-bold text-white">{tx(m.title)}</h3>
                          <p className="mt-2 font-inter text-[13px] leading-relaxed text-mist">{tx(m.body)}</p>
                        </article>
                      </div>

                      {/* Spacer for the other half on desktop */}
                      <div className="hidden md:block md:w-1/2" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
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
                  EN: "See How the Bridge Translates Into Outcomes",
                  JP: "架け橋がどう成果に変換されるかを見る",
                })}
              </h2>
              <p className="mx-auto mt-4 font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {tx({
                  EN: "Our values are visible in every differentiator, every service, and every placement we deliver.",
                  JP: "私たちの価値観は、すべての差別化要素、サービス、そして紹介に現れています。",
                })}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/why-jgate"
                  className="btn-shine flex items-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-7 py-3.5 font-inter text-[14px] font-semibold text-white shadow-[0_0_20px_rgba(188,26,44,0.35)] transition-all hover:-translate-y-0.5"
                >
                  {tx({ EN: "Why J-Gate", JP: "J-Gateの強み" })}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="rounded-md border border-crimson/30 px-7 py-3.5 font-inter text-[14px] font-semibold text-crimson transition-all hover:-translate-y-0.5 hover:bg-crimson/5"
                >
                  {tx({ EN: "Explore Services", JP: "サービスを見る" })}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
