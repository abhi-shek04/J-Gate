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
  Sparkles,
  ArrowRight,
  MapPin,
  Building2,
  CalendarClock,
  Rocket,
  GraduationCap,
  HandHeart,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

/* ============================================================
   About J-Gate — Premium corporate identity page
   Sections: PageHero → Core Purpose (3 pillars) → Strategic Locations (2 cards) → Company Story → Mission & Vision → Core Values → CTA
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
    EN: "To make the India expansion 'right answer' accessible to Japanese enterprises — through a dedicated working hub, a resident Japan Desk, and end-to-end support from first curiosity to corporate entity establishment.",
    JP: "専用ワーキングハブ、常駐ジャパンデスク、そして最初の関心から法人設立までのエンドツーエンド支援を通じ、日本企業にとってのインド進出の「正解」をアクセシブルにする。",
  },
} as const;

const VISION = {
  title: { EN: "Our Vision", JP: "ビジョン" },
  body: {
    EN: "To become the definitive gateway for Japanese enterprises entering India — the first name called when a company decides to explore Hyderabad, Gurgaon, or anywhere in between. Two cities, one bridge, every touchpoint operational.",
    JP: "インドに進出する日本企業にとって決定的なゲートウェイになること — 企業がハイデラバード、グルガオン、あるいはその間のどこかを検討し始める時に最初に呼ばれる名前に。二つの都市、一つの架け橋、すべての接点を機能させて。",
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

/* 3 Core Purpose Pillars — unique horizontal layout with large numerals */
const PILLARS = [
  {
    num: "01",
    icon: Rocket,
    tagKey: "about.pillar1.tag",
    titleKey: "about.pillar1.title",
    jpKey: "about.pillar1.jp",
    descKey: "about.pillar1.desc",
    accent: "crimson",
  },
  {
    num: "02",
    icon: GraduationCap,
    tagKey: "about.pillar2.tag",
    titleKey: "about.pillar2.title",
    jpKey: "about.pillar2.jp",
    descKey: "about.pillar2.desc",
    accent: "saffron",
  },
  {
    num: "03",
    icon: HandHeart,
    tagKey: "about.pillar3.tag",
    titleKey: "about.pillar3.title",
    jpKey: "about.pillar3.jp",
    descKey: "about.pillar3.desc",
    accent: "crimson",
  },
] as const;

/* Strategic Locations — feature lists */
const HYDERABAD_FEATURES = [
  { key: "about.hyderabad.f1" },
  { key: "about.hyderabad.f2" },
  { key: "about.hyderabad.f3" },
] as const;

const GURGAON_FEATURES = [
  { key: "about.gurgaon.f1" },
  { key: "about.gurgaon.f2" },
  { key: "about.gurgaon.f3" },
] as const;

export default function AboutPage() {
  const { t, tx } = useI18n();

  return (
    <>
      <PageHero
        eyebrowKey="about.eyebrow"
        titleNode={
          <>
            {tx({ EN: "From India Entry Spark", JP: "インド展開の" })}
            <br />
            <span className="text-gradient-saffron">
              {tx({ EN: "to Talent Development", JP: "きっかけ作りから育成まで" })}
            </span>
          </>
        }
        subtitleKey="about.title"
      />

      {/* ───────────────────────────────────────────────────────────
          Core Purpose & Vision — 3 horizontal pillar cards
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{t("about.purpose.eyebrow")}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.2] text-ink"
                style={{ fontSize: "clamp(1.625rem,3.6vw,2.375rem)" }}
              >
                {t("about.purpose.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {t("about.purpose.subtitle")}
              </p>
            </div>
          </Reveal>

          {/* Unique horizontal pillar layout — each pillar spans full width with large numeral */}
          <div className="mx-auto mt-10 max-w-5xl space-y-6">
            {PILLARS.map((p, i) => {
              const isSaffron = p.accent === "saffron";
              return (
                <Reveal key={p.num} delay={i * 120} variant="left">
                  <article
                    className={`lift-card group relative grid grid-cols-[auto_1fr] gap-5 overflow-hidden rounded-xl border bg-pearl p-6 shadow-card transition-all hover:shadow-hover sm:grid-cols-[auto_1fr] sm:p-8 ${
                      isSaffron ? "border-saffron/15" : "border-crimson/12"
                    }`}
                  >
                    {/* Large numeral watermark */}
                    <div
                      className={`pointer-events-none absolute -right-4 -top-8 select-none font-serif-jp text-[8rem] font-bold leading-none opacity-[0.06] sm:text-[10rem] ${
                        isSaffron ? "text-saffron" : "text-crimson"
                      }`}
                      aria-hidden="true"
                    >
                      {p.num}
                    </div>

                    {/* Icon badge */}
                    <div
                      className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-card transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${
                        isSaffron ? "from-saffron to-[#c9881a]" : "from-crimson to-crimson-deep"
                      }`}
                    >
                      <p.icon className="h-8 w-8" strokeWidth={1.5} />
                    </div>

                    {/* Text content */}
                    <div className="relative min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span
                          className={`font-inter text-[11px] font-bold uppercase ${
                            isSaffron ? "text-saffron" : "text-crimson"
                          }`}
                          style={{ letterSpacing: "0.15em" }}
                        >
                          {t(p.tagKey)}
                        </span>
                        <span className="font-serif-jp text-[13px] text-mist">·</span>
                        <span className="font-serif-jp text-[15px] font-medium text-slate">
                          {t(p.jpKey)}
                        </span>
                      </div>
                      <h3
                        className="mt-1.5 font-serif-jp font-bold leading-tight text-ink"
                        style={{ fontSize: "clamp(1.25rem,2.5vw,1.625rem)" }}
                      >
                        {t(p.titleKey)}
                      </h3>
                      <p className="mt-3 font-inter text-[14px] leading-relaxed text-slate sm:text-[15px]">
                        {t(p.descKey)}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Strategic Locations — Hyderabad + Gurgaon (split cards with map accents)
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-midnight">
        <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 30% 0%, rgba(232,160,26,0.10), transparent 55%), radial-gradient(ellipse at 80% 100%, rgba(188,26,44,0.10), transparent 55%)" }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>{t("about.locations.eyebrow")}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
                style={{ fontSize: "clamp(1.625rem,3.6vw,2.375rem)" }}
              >
                {t("about.locations.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {t("about.locations.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Hyderabad — Main Base */}
            <Reveal delay={100}>
              <article className="glass-dark lift-card relative h-full overflow-hidden rounded-xl border border-saffron/25 p-8">
                {/* Status badge */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-saffron/20 text-saffron">
                      <Building2 className="h-6 w-6" strokeWidth={1.5} />
                    </span>
                    <div>
                      <span className="block font-inter text-[11px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.15em" }}>
                        {t("about.hyderabad.tag")}
                      </span>
                      <h3 className="mt-0.5 font-serif-jp text-2xl font-bold text-white">
                        {t("about.hyderabad.title")}
                      </h3>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-saffron/15 px-3 py-1.5 font-inter text-[11px] font-bold uppercase text-saffron">
                    <CalendarClock className="h-3 w-3" />
                    {t("about.hyderabad.status")}
                  </span>
                </div>

                {/* Nickname */}
                <p className="mt-5 font-serif-jp text-[15px] font-medium italic text-saffron/85">
                  {t("about.hyderabad.nick")}
                </p>

                {/* Description */}
                <p className="mt-3 font-inter text-[14px] leading-relaxed text-mist">
                  {t("about.hyderabad.desc")}
                </p>

                {/* Features list */}
                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                  {HYDERABAD_FEATURES.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-saffron" strokeWidth={2} />
                      <span className="font-inter text-[13px] text-white/90">{t(f.key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative pin marker */}
                <MapPin className="absolute -bottom-4 -right-2 h-24 w-24 text-saffron/10" strokeWidth={1} />
              </article>
            </Reveal>

            {/* Gurgaon — Sub Base */}
            <Reveal delay={200}>
              <article className="glass-dark lift-card relative h-full overflow-hidden rounded-xl border border-crimson/25 p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-crimson/20 text-crimson">
                      <Building2 className="h-6 w-6" strokeWidth={1.5} />
                    </span>
                    <div>
                      <span className="block font-inter text-[11px] font-semibold uppercase text-crimson" style={{ letterSpacing: "0.15em" }}>
                        {t("about.gurgaon.tag")}
                      </span>
                      <h3 className="mt-0.5 font-serif-jp text-2xl font-bold text-white">
                        {t("about.gurgaon.title")}
                      </h3>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-crimson/15 px-3 py-1.5 font-inter text-[11px] font-bold uppercase text-crimson">
                    <CalendarClock className="h-3 w-3" />
                    {t("about.gurgaon.status")}
                  </span>
                </div>

                <p className="mt-5 font-serif-jp text-[15px] font-medium italic text-crimson/85">
                  {t("about.gurgaon.nick")}
                </p>

                <p className="mt-3 font-inter text-[14px] leading-relaxed text-mist">
                  {t("about.gurgaon.desc")}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                  {GURGAON_FEATURES.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-crimson" strokeWidth={2} />
                      <span className="font-inter text-[13px] text-white/90">{t(f.key)}</span>
                    </li>
                  ))}
                </ul>

                <MapPin className="absolute -bottom-4 -right-2 h-24 w-24 text-crimson/10" strokeWidth={1} />
              </article>
            </Reveal>
          </div>

          {/* Footnote: India map legend */}
          <Reveal delay={300}>
            <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-6 font-inter text-[12px] text-mist">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-saffron" />
                {tx({ EN: "Hyderabad — Main Base", JP: "ハイデラバード — 主拠点" })}
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-crimson" />
                {tx({ EN: "Gurgaon — Sub Base (in prep)", JP: "グルガオン — サブ拠点（準備中）" })}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Company Story — narrative with numbered side index
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-crimson/10 text-crimson">
                  <Sparkles className="h-5 w-5" strokeWidth={1.5} />
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

            <div className="mt-10 grid gap-8 md:grid-cols-[auto_1fr]">
              {/* Side index */}
              <Reveal delay={100} variant="left">
                <ol className="hidden md:flex md:flex-col md:gap-3 md:border-l md:border-crimson/20 md:pl-5">
                  {[1, 2, 3].map((n, idx) => (
                    <li key={n} className="flex items-center gap-3">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full font-serif-jp text-sm font-bold ${
                          idx === 0
                            ? "bg-crimson text-white"
                            : "border border-crimson/30 text-crimson"
                        }`}
                      >
                        {n}
                      </span>
                      <span className="font-inter text-[12px] font-medium uppercase text-mist" style={{ letterSpacing: "0.1em" }}>
                        {tx({
                          EN: idx === 0 ? "Origin" : idx === 1 ? "Inauguration" : "Today",
                          JP: idx === 0 ? "起点" : idx === 1 ? "開設" : "現在",
                        })}
                      </span>
                    </li>
                  ))}
                </ol>
              </Reveal>

              {/* Story paragraphs */}
              <Reveal delay={150}>
                <div className="space-y-5 font-inter leading-[1.85] text-slate" style={{ fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)" }}>
                  <p className="md:border-l-2 md:border-crimson/15 md:pl-5 md:first:border-l-2">
                    <span className="mb-2 block font-serif-jp text-[12px] font-bold uppercase text-crimson md:hidden" style={{ letterSpacing: "0.12em" }}>
                      {tx({ EN: "01 · Origin", JP: "01 · 起点" })}
                    </span>
                    {tx(STORY.p1)}
                  </p>
                  <p className="md:border-l-2 md:border-crimson/15 md:pl-5">
                    <span className="mb-2 block font-serif-jp text-[12px] font-bold uppercase text-crimson md:hidden" style={{ letterSpacing: "0.12em" }}>
                      {tx({ EN: "02 · Inauguration", JP: "02 · 開設" })}
                    </span>
                    {tx(STORY.p2)}
                  </p>
                  <p className="md:border-l-2 md:border-crimson/15 md:pl-5">
                    <span className="mb-2 block font-serif-jp text-[12px] font-bold uppercase text-crimson md:hidden" style={{ letterSpacing: "0.12em" }}>
                      {tx({ EN: "03 · Today", JP: "03 · 現在" })}
                    </span>
                    {tx(STORY.p3)}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Pull-quote */}
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

          <div className="mt-8 grid gap-6 md:grid-cols-2">
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
          Core Values — 4-card grid with vertical accent bars
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

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={i} delay={i * 100}>
                <article className="lift-card group relative h-full overflow-hidden rounded-lg border border-crimson/8 bg-pearl p-7 shadow-card">
                  {/* Vertical accent bar on left */}
                  <span
                    className={`absolute inset-y-0 left-0 w-1 ${
                      i % 2 === 0 ? "bg-gradient-to-b from-crimson to-crimson-deep" : "bg-gradient-to-b from-saffron to-[#c9881a]"
                    }`}
                  />
                  <div className={`flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br ${i % 2 === 0 ? "from-crimson/10 to-saffron/5" : "from-saffron/10 to-crimson/5"} text-crimson transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
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
