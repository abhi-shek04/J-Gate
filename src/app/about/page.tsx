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
   About J-Gate — Strictly grouped, modular B2B layout
   Sections (one domain per section — zero context mixing):
     1. PageHero
     2. Core Purpose — 3-pillar bento grid
     3. Strategic Locations — 2 cards (Hyderabad + Gurgaon)
     4. Mission & Vision — 2 cards
     5. Core Values — 4-card grid
     6. Closing CTA
   ============================================================ */

/* ── Mission & Vision — 2 clean cards (no mixing) ── */
const MISSION = {
  title: { EN: "Our Mission", JP: "ミッション" },
  body: {
    EN: "To make the India expansion 'right answer' accessible to Japanese enterprises — through a dedicated working hub, a resident Japan Desk, and end-to-end support from first curiosity to corporate entity establishment.",
    JP: "専用ワーキングハブ、常駐ジャパンデスク、そして最初の関心から法人設立までのエンドツーエンド支援を通じ、日本企業にとってのインド進出の「正解」をアクセシブルにする。",
  },
  tag: { EN: "What we do today", JP: "今日私たちが行うこと" },
} as const;

const VISION = {
  title: { EN: "Our Vision", JP: "ビジョン" },
  body: {
    EN: "To become the definitive gateway for Japanese enterprises entering India — the first name called when a company decides to explore Hyderabad, Gurgaon, or anywhere in between. Two cities, one bridge, every touchpoint operational.",
    JP: "インドに進出する日本企業にとって決定的なゲートウェイになること — 企業がハイデラバード、グルガオン、あるいはその間のどこかを検討し始める時に最初に呼ばれる名前に。二つの都市、一つの架け橋、すべての接点を機能させて。",
  },
  tag: { EN: "What we build toward", JP: "私たちが構築する未来" },
} as const;

/* ── Core Values — 4-card grid (no mixing) ── */
const VALUES = [
  {
    icon: ShieldCheck,
    title: { EN: "Integrity", JP: "誠実さ" },
    desc: {
      EN: "Transparent, honest, long-term relationships — never transactional.",
      JP: "透明で誠実な長期的関係 — 決して取引的ではない。",
    },
  },
  {
    icon: Globe2,
    title: { EN: "Cultural Fluency", JP: "文化的流暢さ" },
    desc: {
      EN: "Deep mastery of both Japanese and Indian business cultures.",
      JP: "日本とインドの両ビジネス文化の深い理解。",
    },
  },
  {
    icon: Cpu,
    title: { EN: "Technical Excellence", JP: "技術的卓越" },
    desc: {
      EN: "Rigorous screening — only the top percentile of technical talent.",
      JP: "厳格なスクリーニング — トップパーセンタイルの技術人材のみ。",
    },
  },
  {
    icon: Handshake,
    title: { EN: "Long-Term Partnership", JP: "長期パートナーシップ" },
    desc: {
      EN: "We succeed only when our placements and partners succeed.",
      JP: "紹介とパートナーが成功して初めて私たちも成功する。",
    },
  },
] as const;

/* ── Core Purpose — 3-pillar bento grid ── */
const PILLARS = [
  {
    icon: Rocket,
    tagKey: "about.pillar1.tag",
    titleKey: "about.pillar1.title",
    jpKey: "about.pillar1.jp",
    descKey: "about.pillar1.desc",
    accent: "crimson",
  },
  {
    icon: GraduationCap,
    tagKey: "about.pillar2.tag",
    titleKey: "about.pillar2.title",
    jpKey: "about.pillar2.jp",
    descKey: "about.pillar2.desc",
    accent: "saffron",
  },
  {
    icon: HandHeart,
    tagKey: "about.pillar3.tag",
    titleKey: "about.pillar3.title",
    jpKey: "about.pillar3.jp",
    descKey: "about.pillar3.desc",
    accent: "crimson",
  },
] as const;

/* ── Strategic Locations — feature lists ── */
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

      {/* ════════════════════════════════════════════════════════════
          Section 1 — Core Purpose & Vision
          3-pillar bento grid. Domain: opportunity creation / talent / collaboration.
          No mixing with other content.
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{t("about.purpose.eyebrow")}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.2] text-ink"
                style={{ fontSize: "clamp(1.625rem,3.6vw,2.25rem)" }}
              >
                {t("about.purpose.title")}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {t("about.purpose.subtitle")}
              </p>
            </div>
          </Reveal>

          {/* Clean 3-col bento grid — uniform cards, no scattered layouts */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {PILLARS.map((p, i) => {
              const isSaffron = p.accent === "saffron";
              return (
                <Reveal key={p.tagKey} delay={i * 100}>
                  <article
                    className={`lift-card group relative flex h-full flex-col overflow-hidden rounded-lg border bg-pearl p-7 shadow-card ${
                      isSaffron ? "border-saffron/15" : "border-crimson/12"
                    }`}
                  >
                    {/* Top accent bar — subtle domain marker */}
                    <span
                      className={`absolute inset-x-0 top-0 h-1 ${
                        isSaffron
                          ? "bg-gradient-to-r from-saffron to-[#c9881a]"
                          : "bg-gradient-to-r from-crimson to-crimson-deep"
                      }`}
                    />

                    {/* Icon badge */}
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-card transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${
                        isSaffron
                          ? "from-saffron to-[#c9881a]"
                          : "from-crimson to-crimson-deep"
                      }`}
                    >
                      <p.icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>

                    {/* Tag + JP accent label */}
                    <div className="mt-5 flex items-center gap-2">
                      <span
                        className={`font-inter text-[11px] font-bold uppercase ${
                          isSaffron ? "text-saffron" : "text-crimson"
                        }`}
                        style={{ letterSpacing: "0.15em" }}
                      >
                        {t(p.tagKey)}
                      </span>
                      <span className="text-mist">·</span>
                      <span className="font-serif-jp text-[13px] font-medium text-slate">
                        {t(p.jpKey)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="mt-2 font-serif-jp font-bold leading-tight text-ink"
                      style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
                    >
                      {t(p.titleKey)}
                    </h3>

                    {/* Description (1-line) */}
                    <p className="mt-3 font-inter text-[14px] leading-relaxed text-slate">
                      {t(p.descKey)}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Section 2 — Strategic Locations
          2 cards (Hyderabad + Gurgaon). Domain: geography only.
          No other content in this section.
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad relative overflow-hidden bg-midnight">
        <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 0%, rgba(232,160,26,0.10), transparent 55%), radial-gradient(ellipse at 80% 100%, rgba(188,26,44,0.10), transparent 55%)",
          }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>{t("about.locations.eyebrow")}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
                style={{ fontSize: "clamp(1.625rem,3.6vw,2.25rem)" }}
              >
                {t("about.locations.title")}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-mist"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {t("about.locations.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Hyderabad — Main Base, saffron accent */}
            <Reveal delay={100}>
              <article className="glass-dark lift-card relative h-full overflow-hidden rounded-lg border border-saffron/25 p-8">
                {/* Top accent bar */}
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saffron to-[#c9881a]" />

                {/* Header row: icon + tag/title + status badge */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-saffron/20 text-saffron">
                      <Building2 className="h-6 w-6" strokeWidth={1.5} />
                    </span>
                    <div>
                      <span
                        className="block font-inter text-[11px] font-semibold uppercase text-saffron"
                        style={{ letterSpacing: "0.15em" }}
                      >
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

                {/* Nickname badge */}
                <p className="mt-5 font-serif-jp text-[15px] font-medium italic text-saffron/85">
                  {t("about.hyderabad.nick")}
                </p>

                {/* Description */}
                <p className="mt-3 font-inter text-[14px] leading-relaxed text-mist">
                  {t("about.hyderabad.desc")}
                </p>

                {/* Features list — 3 bullets */}
                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                  {HYDERABAD_FEATURES.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-saffron"
                        strokeWidth={2}
                      />
                      <span className="font-inter text-[13px] text-white/90">
                        {t(f.key)}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Decorative pin watermark */}
                <MapPin
                  className="absolute -bottom-4 -right-2 h-24 w-24 text-saffron/10"
                  strokeWidth={1}
                />
              </article>
            </Reveal>

            {/* Gurgaon — Sub Base, crimson accent */}
            <Reveal delay={200}>
              <article className="glass-dark lift-card relative h-full overflow-hidden rounded-lg border border-crimson/25 p-8">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-crimson to-crimson-deep" />

                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-crimson/20 text-crimson">
                      <Building2 className="h-6 w-6" strokeWidth={1.5} />
                    </span>
                    <div>
                      <span
                        className="block font-inter text-[11px] font-semibold uppercase text-crimson"
                        style={{ letterSpacing: "0.15em" }}
                      >
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
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-crimson"
                        strokeWidth={2}
                      />
                      <span className="font-inter text-[13px] text-white/90">
                        {t(f.key)}
                      </span>
                    </li>
                  ))}
                </ul>

                <MapPin
                  className="absolute -bottom-4 -right-2 h-24 w-24 text-crimson/10"
                  strokeWidth={1}
                />
              </article>
            </Reveal>
          </div>

          {/* Footnote: location legend */}
          <Reveal delay={300}>
            <div className="mx-auto mt-8 flex max-w-3xl items-center justify-center gap-6 font-inter text-[12px] text-mist">
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

      {/* ════════════════════════════════════════════════════════════
          Section 3 — Mission & Vision
          2 clean cards. Domain: corporate mission/vision only.
          No mixing with values or story.
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Mission & Vision", JP: "ミッション＆ビジョン" })}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.75rem,3.8vw,2.25rem)" }}
              >
                {tx({ EN: "What We Exist To Do", JP: "私たちの存在意義" })}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {tx({
                  EN: "Two statements — one for what we do today, one for what we are building toward.",
                  JP: "二つの声明 — 今日私たちが行うことと、私たちが構築している未来。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Mission — crimson accent */}
            <Reveal delay={100}>
              <article className="lift-card relative h-full overflow-hidden rounded-lg border border-crimson/15 bg-pearl p-8 shadow-card">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-crimson to-crimson-deep" />
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-crimson/10 text-crimson">
                    <Target className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="font-serif-jp text-xl font-bold text-ink">
                    {tx(MISSION.title)}
                  </h3>
                </div>
                <p className="mt-5 font-inter text-[15px] leading-relaxed text-slate">
                  {tx(MISSION.body)}
                </p>
                <div className="mt-6 flex items-center gap-2 border-t border-crimson/10 pt-5">
                  <span
                    className="font-inter text-[11px] font-semibold uppercase text-crimson"
                    style={{ letterSpacing: "0.15em" }}
                  >
                    {tx(MISSION.tag)}
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
                  <h3 className="font-serif-jp text-xl font-bold text-ink">
                    {tx(VISION.title)}
                  </h3>
                </div>
                <p className="mt-5 font-inter text-[15px] leading-relaxed text-slate">
                  {tx(VISION.body)}
                </p>
                <div className="mt-6 flex items-center gap-2 border-t border-saffron/15 pt-5">
                  <span
                    className="font-inter text-[11px] font-semibold uppercase text-saffron"
                    style={{ letterSpacing: "0.15em" }}
                  >
                    {tx(VISION.tag)}
                  </span>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Section 4 — Core Values
          4-card grid. Domain: corporate principles only.
          No mixing.
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Core Values", JP: "コアバリュー" })}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.75rem,3.8vw,2.25rem)" }}
              >
                {tx({ EN: "The Principles Behind Every Placement", JP: "すべての紹介の背景にある原則" })}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {tx({
                  EN: "Four principles guide every recruitment, every training, every partnership — without exception.",
                  JP: "四つの原則が例外なく、すべての採用、研修、パートナーシップを導きます。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={i} delay={i * 100}>
                <article className="lift-card group relative h-full overflow-hidden rounded-lg border border-crimson/8 bg-pearl p-7 shadow-card">
                  {/* Vertical accent bar on left — alternating crimson/saffron */}
                  <span
                    className={`absolute inset-y-0 left-0 w-1 ${
                      i % 2 === 0
                        ? "bg-gradient-to-b from-crimson to-crimson-deep"
                        : "bg-gradient-to-b from-saffron to-[#c9881a]"
                    }`}
                  />
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br ${
                      i % 2 === 0
                        ? "from-crimson/10 to-saffron/5"
                        : "from-saffron/10 to-crimson/5"
                    } text-crimson transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                  >
                    <v.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-serif-jp text-lg font-bold text-ink">
                    {tx(v.title)}
                  </h3>
                  <p className="mt-2.5 font-inter text-[13px] leading-relaxed text-slate">
                    {tx(v.desc)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Closing CTA
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-crimson/10 text-crimson">
                <Sparkles className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h2
                className="mt-6 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.625rem,3.5vw,2rem)" }}
              >
                {tx({
                  EN: "See How the Bridge Translates Into Outcomes",
                  JP: "架け橋がどう成果に変換されるかを見る",
                })}
              </h2>
              <p
                className="mx-auto mt-4 font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
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
