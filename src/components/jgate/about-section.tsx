"use client";

import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import {
  Target,
  Eye,
  ShieldCheck,
  Handshake,
  Rocket,
  GraduationCap,
  HandHeart,
  Building2,
  Sparkles,
} from "lucide-react";

/* ============================================================
   About J-Gate — Executive Corporate Profile & Section
   Architecture:
     1. PageHero / Header Banner — Corporate Identity & Mission
     2. 3 Core Pillars Detailed (01/02/03 + EN/JP + full paragraph + icon)
     3. Bilateral Strategic Alliance (Executive Handshake Photo + 3 Synergy Pillars)
     4. Mission & Vision (2 structured executive cards)
   ============================================================ */

/* ── 3 Core Pillars ── */
const PILLARS = [
  {
    num: "01",
    icon: Rocket,
    tagKey: "about.pillar1.tag",
    titleKey: "about.pillar1.title",
    jpKey: "about.pillar1.jp",
    descKey: "about.pillar1.desc",
    accent: "from-crimson to-crimson-deep",
    tagColor: "text-crimson dark:text-rose-400 bg-crimson/10 border-crimson/20",
  },
  {
    num: "02",
    icon: GraduationCap,
    tagKey: "about.pillar2.tag",
    titleKey: "about.pillar2.title",
    jpKey: "about.pillar2.jp",
    descKey: "about.pillar2.desc",
    accent: "from-saffron to-[#c9881a]",
    tagColor: "text-saffron-dark dark:text-amber-300 bg-saffron/15 border-saffron/30",
  },
  {
    num: "03",
    icon: HandHeart,
    tagKey: "about.pillar3.tag",
    titleKey: "about.pillar3.title",
    jpKey: "about.pillar3.jp",
    descKey: "about.pillar3.desc",
    accent: "from-emerald-600 to-teal-700",
    tagColor: "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800",
  },
] as const;

/* ============================================================
   Bilateral Strategic Alliance Highlights
   Connecting Japanese Enterprise Excellence with India's Tech Prowess
   ============================================================ */
const BILATERAL_SYNERGIES = [
  {
    icon: Handshake,
    badge: { EN: "Corporate Alignment", JP: "商習慣の調和" },
    title: { EN: "Quality Standards & Local Execution", JP: "日本品質ガバナンスと現地推進力の融合" },
    desc: {
      EN: "Combining Japanese standards for quality, compliance, and Japan parent company reporting with India's fast execution.",
      JP: "日本の高い品質基準・コンプライアンス・本社報告基準と、インド現地の圧倒的な実行スピードを高度に調和させます。",
    },
  },
  {
    icon: Building2,
    badge: { EN: "Institutional Network", JP: "公的・産学連携" },
    title: { EN: "Direct Institutional & Ecosystem Ties", JP: "エコシステム・T-Hub・学術機関との直接連携" },
    desc: {
      EN: "Direct institutional ties with the Telangana Ecosystem, T-Hub (India's largest technology incubator), and leading engineering universities.",
      JP: "テランガナ・エコシステム、インド最大のイノベーション拠点T-Hub、名門大学との直結ネットワークにより、安心の事業展開基盤を構築します。",
    },
  },
  {
    icon: ShieldCheck,
    badge: { EN: "Single Window", JP: "窓口一本化" },
    title: { EN: "Unified Bilateral Accountability & Support", JP: "日印共同体制によるワンストップ支援" },
    desc: {
      EN: "Co-operated by Indobox India and Genesys Info X — providing a single contract so you avoid managing multiple vendors or cross-border coordination alone.",
      JP: "IndoboxとGenesys Info Xの共同運営により、複数業者との個別交渉を排除。契約から日常運用まで一元管理で支援します。",
    },
  },
];

/* ── Mission & Vision content ── */
const MISSION = {
  title: { EN: "Our Mission", JP: "ミッション" },
  body: {
    EN: "To remove every barrier of India expansion for Japanese enterprises by providing ready workspace, resident Japanese advisory, and statutory guidance in Hyderabad.",
    JP: "即日利用可能な執務環境、現地常駐の日本語支援、そして確実な法人登記・行政手続きを通じて、日本企業のインド進出におけるあらゆる摩擦をゼロにすること。",
  },
  tag: { EN: "Current Focus", JP: "私たちの使命" },
} as const;

const VISION = {
  title: { EN: "Our Vision", JP: "ビジョン" },
  body: {
    EN: "To serve as the primary bridge between Japan and India — accelerating cross-border innovation, technical talent exchange, and long-term business growth.",
    JP: "日印両国を結ぶ永続的な共創基盤となり、国境を越えたイノベーション、高度IT人材の交流、そして企業の持続的成長を加速させること。",
  },
  tag: { EN: "Long-Term Vision", JP: "私たちが目指す未来" },
} as const;

export function AboutSection({ id, hideHero }: { id?: string; hideHero?: boolean }) {
  const { t, tx, lang } = useI18n();

  return (
    <div id={id} className="scroll-mt-16">
      {!hideHero && (
        <PageHero
          eyebrowKey="about.eyebrow"
          layout="split"
          titleNode={
            <>
              {tx({ EN: "From India Entry Spark ", JP: "インド展開の" })}
              <br className="hidden sm:inline" />
              {tx({ EN: "to Talent Development", JP: "きっかけ作りから育成まで" })}
            </>
          }
          subtitleNode={tx({
            EN: "Operated by Indobox India — a dedicated working hub for Japanese enterprises in Hyderabad.",
            JP: "Indobox Indiaが運営する、ハイデラバードの日本企業専用ワーキングハブ。",
          })}
          tags={[
            { EN: "Main Office in Hyderabad", JP: "ハイデラバード旗艦拠点" },
            { EN: "On-Site Japanese Support", JP: "現地日本人常駐" },
            { EN: "Incorporation Support", JP: "法人設立サポート" },
          ]}
        />
      )}

      {/* ════════════════════════════════════════════════════════════
          Section 1 — 3 Pillars Detailed
         ════════════════════════════════════════════════════════════ */}
      <section className="py-6 sm:py-8 lg:py-10 bg-ivory dark:bg-[#0b111e] transition-colors duration-300">
        <div className="container-jg">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.num} delay={i * 100}>
                <article className="luxury-light-card card-sheen group relative h-full flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-4 sm:p-6 lg:p-7.5 shadow-card dark:shadow-2xl hover:shadow-2xl hover:border-crimson/35 dark:hover:border-rose-400/40 transition-all duration-300">
                  {/* Top gradient stripe */}
                  <span className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${p.accent}`} />
                  {/* Faded large numeral */}
                  <span
                    className="pointer-events-none absolute -top-3 sm:-top-6 right-2 font-serif-jp font-black leading-none text-slate-100/80 dark:text-white/[0.04] select-none transition-transform duration-500 group-hover:scale-110 group-hover:text-crimson/10 text-[64px] sm:text-[96px] lg:text-[120px]"
                    aria-hidden
                  >
                    {p.num}
                  </span>
                  <div className="relative z-10">
                    {/* Icon badge */}
                    <div className="icon-pod h-10 w-10 sm:h-14 sm:w-14 shrink-0">
                      <p.icon className="h-5 w-5 sm:h-7 sm:w-7" strokeWidth={1.75} />
                    </div>
                    {/* Tag + JP accent label */}
                    <div className="mt-3.5 sm:mt-5 flex items-center gap-2">
                      <span
                        className="font-inter text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-crimson dark:text-rose-400"
                      >
                        {t(p.tagKey)}
                      </span>
                      {lang === "JP" && (
                        <>
                          <span className="text-slate-300 dark:text-white/20">·</span>
                          <span className="font-serif-jp text-[12px] sm:text-[13px] font-bold text-saffron-dark dark:text-saffron">
                            {t(p.jpKey)}
                          </span>
                        </>
                      )}
                    </div>
                    {/* Title */}
                    <h3
                      className="mt-1.5 sm:mt-2 font-serif-jp font-bold leading-tight text-ink dark:text-white group-hover:text-crimson dark:group-hover:text-rose-400 transition-colors"
                      style={{ fontSize: "clamp(1.05rem,1.5vw,1.3rem)" }}
                    >
                      {t(p.titleKey)}
                    </h3>
                    {/* Full paragraph */}
                    <p className="mt-2 sm:mt-3 font-inter text-[12.5px] sm:text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                      {t(p.descKey)}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Section 2 — Japan–India Bilateral Alliance & Executive Partnership
         ════════════════════════════════════════════════════════════ */}
      <section className="py-6 sm:py-8 lg:py-10 relative overflow-hidden bg-midnight text-white border-t border-white/10">
        <div className="pattern-asanoha-dark absolute inset-0 opacity-50 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(188,26,44,0.18) 0%, rgba(232,160,26,0.08) 50%, transparent 80%)",
          }}
        />

        <div className="container-jg relative z-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/10 px-3.5 py-1 font-inter text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-saffron shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                {tx({ EN: "Japan–India Partnership", JP: "日印の信頼と共創" })}
              </span>
              <h2
                className="mt-2.5 sm:mt-3 font-serif-jp font-bold text-white"
                style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)" }}
              >
                {tx({
                  EN: "Connecting Two Nations. Supporting Global Businesses.",
                  JP: "日印の架け橋となり、企業のグローバル展開を加速する",
                })}
              </h2>
              <p className="mt-2 sm:mt-2.5 font-inter text-[12.5px] sm:text-[13.5px] leading-relaxed text-mist max-w-2xl mx-auto">
                {tx({
                  EN: "J-Gate unites Japanese corporate precision, governance, and trust with India's strong technology sector, skilled workforce, and fast-growing market.",
                  JP: "日本の卓越した品質・ガバナンスと、インドの高度な技術力・豊富な人材・ダイナミックな市場推進力をシームレスに融合します。",
                })}
              </p>
            </div>
          </Reveal>

          {/* 3 Strategic Value Pillars Grid */}
          <div className="grid md:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {BILATERAL_SYNERGIES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={idx} delay={idx * 70}>
                  <div className="luxury-glass-card group h-full flex flex-col justify-between rounded-2xl border border-white/15 bg-white/[0.03] p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/30 hover:-translate-y-0.5 shadow-lg">
                    <div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-crimson/30 to-crimson-deep/40 text-saffron border border-crimson/40 group-hover:scale-105 transition-transform mb-4">
                        <Icon className="h-5.5 w-5.5" />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block rounded-full bg-saffron/15 border border-saffron/25 px-2.5 py-0.5 font-inter text-[10px] font-bold uppercase tracking-wider text-saffron">
                          {tx(item.badge)}
                        </span>
                      </div>
                      <h4 className="font-serif-jp text-[16.5px] sm:text-[18px] font-bold text-white group-hover:text-saffron transition-colors leading-snug">
                        {tx(item.title)}
                      </h4>
                      <p className="mt-2.5 font-inter text-[12.5px] sm:text-[13.5px] leading-relaxed text-mist/90">
                        {tx(item.desc)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Section 3 — Mission & Vision — 2 side-by-side cards
         ════════════════════════════════════════════════════════════ */}
      <section className="py-6 sm:py-8 lg:py-10 relative overflow-hidden bg-ivory-warm dark:bg-[#080d17] border-t border-slate-200/70 dark:border-white/10 transition-colors duration-300">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
              <Eyebrow>{tx({ EN: "Mission & Vision", JP: "ミッション＆ビジョン" })}</Eyebrow>
              <h2
                className="mt-2 font-serif-jp font-bold leading-[1.18] text-ink dark:text-white"
                style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)" }}
              >
                {tx({ EN: "Our Purpose", JP: "私たちの存在意義" })}
              </h2>
              <p
                className="mx-auto mt-2 max-w-2xl font-inter leading-relaxed text-slate dark:text-slate-300"
                style={{ fontSize: "clamp(0.9rem,1.3vw,1.05rem)" }}
              >
                {tx({
                  EN: "Our commitments today and our vision for the future.",
                  JP: "現在提供する価値と、私たちが共に構築する日印の未来。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {/* Mission — crimson accent */}
            <Reveal delay={100}>
              <article className="luxury-light-card card-sheen relative h-full flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-4 sm:p-7 lg:p-9 shadow-xl hover:shadow-2xl transition-all duration-300">
                <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-crimson to-crimson-deep" />
                <div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="icon-pod h-10 w-10 sm:h-13 sm:w-13 shrink-0">
                      <Target className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-serif-jp text-xl sm:text-2xl font-bold text-ink dark:text-white">
                      {tx(MISSION.title)}
                    </h3>
                  </div>
                  <p className="mt-3 sm:mt-5 font-inter text-[13.5px] sm:text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                    {tx(MISSION.body)}
                  </p>
                </div>
                <div className="mt-4 sm:mt-6 flex items-center gap-2 border-t border-slate-100 dark:border-white/10 pt-3.5 sm:pt-5">
                  <span
                    className="inline-block rounded-full bg-crimson/10 dark:bg-rose-950/50 border border-crimson/25 dark:border-rose-400/30 px-3 py-0.5 sm:px-3.5 sm:py-1 font-inter text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-crimson dark:text-rose-400"
                  >
                    {tx(MISSION.tag)}
                  </span>
                </div>
              </article>
            </Reveal>

            {/* Vision — saffron accent */}
            <Reveal delay={200}>
              <article className="luxury-light-card card-sheen relative h-full flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-4 sm:p-7 lg:p-9 shadow-xl hover:shadow-2xl transition-all duration-300">
                <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-saffron to-[#c9881a]" />
                <div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="icon-pod h-10 w-10 sm:h-13 sm:w-13 shrink-0 !bg-saffron/15 !border-saffron/30 !text-saffron-dark dark:!text-amber-300">
                      <Eye className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-serif-jp text-xl sm:text-2xl font-bold text-ink dark:text-white">
                      {tx(VISION.title)}
                    </h3>
                  </div>
                  <p className="mt-3 sm:mt-5 font-inter text-[13.5px] sm:text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                    {tx(VISION.body)}
                  </p>
                </div>
                <div className="mt-4 sm:mt-6 flex items-center gap-2 border-t border-slate-100 dark:border-white/10 pt-3.5 sm:pt-5">
                  <span
                    className="inline-block rounded-full bg-saffron/15 dark:bg-amber-950/50 border border-saffron/30 dark:border-amber-400/30 px-3 py-0.5 sm:px-3.5 sm:py-1 font-inter text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-saffron-dark dark:text-amber-300"
                  >
                    {tx(VISION.tag)}
                  </span>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
