"use client";

import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import {
  Target,
  Eye,
  ShieldCheck,
  Globe2,
  Handshake,
  Rocket,
  GraduationCap,
  HandHeart,
  Building2,
  Sparkles,
} from "lucide-react";

/* ============================================================
   About J-Gate — Executive Corporate Profile
   Architecture:
     1. PageHero — Corporate Identity & Mission
     2. 3 Core Pillars Detailed (01/02/03 + EN/JP + full paragraph + icon)
     3. Bilateral Strategic Alliance (Executive Handshake Photo + 4 Synergy Pillars)
     4. Interactive Workspace Explorer (Cyber Gateway facilities tour)
     5. Mission & Vision (2 structured executive cards)
     6. Core Values (4 foundational principles)
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
  },
  {
    num: "02",
    icon: GraduationCap,
    tagKey: "about.pillar2.tag",
    titleKey: "about.pillar2.title",
    jpKey: "about.pillar2.jp",
    descKey: "about.pillar2.desc",
  },
  {
    num: "03",
    icon: HandHeart,
    tagKey: "about.pillar3.tag",
    titleKey: "about.pillar3.title",
    jpKey: "about.pillar3.jp",
    descKey: "about.pillar3.desc",
  },
] as const;

/* ============================================================
   Bilateral Strategic Alliance Highlights
   Connecting Japanese Enterprise Excellence with India's Tech Prowess
   ============================================================ */
const BILATERAL_SYNERGIES = [
  {
    icon: Handshake,
    badge: { EN: "Corporate Synergy", JP: "企業アライアンス" },
    title: { EN: "Cultural & Strategic Alignment", JP: "商習慣と企業文化の高度な融合" },
    desc: {
      EN: "Harmonizing Japanese standards of meticulous quality, governance, and compliance with India's agile execution speed and massive market scale.",
      JP: "日本の高い品質基準・ガバナンスと、インド現地のスピード感・圧倒的な開発推進力を高度に調和させます。",
    },
  },
  {
    icon: Building2,
    badge: { EN: "Institutional Power", JP: "公的機関連携" },
    title: { EN: "High-Level Ecosystem Integration", JP: "政府・主要機関との強固なネットワーク" },
    desc: {
      EN: "Direct institutional ties with T-Hub, Woxsen University, and state government industrial promotion bodies from Day 1.",
      JP: "T-Hub、Woxsen大学、州政府機関との緊密なアライアンスにより、確実で安全な事業基盤を提供します。",
    },
  },
  {
    icon: ShieldCheck,
    badge: { EN: "Resident Support", JP: "現地伴走体制" },
    title: { EN: "On-the-Ground Resident Advisory", JP: "日本人ディレクターによる現地常駐支援" },
    desc: {
      EN: "Native Japanese leadership and bilingual Indian specialists on-site in Hyderabad, providing daily 'Yorozu' consultation, translation, and negotiation support.",
      JP: "ハイデラバード現地に日本人ディレクターとバイリンガルスタッフが常駐し、日々の実務や商談を現場で強力に伴走支援します。",
    },
  },
  {
    icon: Rocket,
    badge: { EN: "Ready-to-Use Setup", JP: "即日稼働" },
    title: { EN: "Fast-Track Entry & Talent Pipelines", JP: "迅速な法人設立と高度IT人材の確保" },
    desc: {
      EN: "Eliminating expansion friction with ready-to-use workspace infrastructure, official corporate registration (MCA/GST), and direct access to top engineering talent.",
      JP: "法人登記、銀行口座開設、即日利用可能な執務環境、そして名門大学からのトップエンジニア採用を一気通貫で支援します。",
    },
  },
];

/* ── Mission & Vision content ── */
const MISSION = {
  title: { EN: "Our Mission", JP: "ミッション" },
  body: {
    EN: "To provide Japanese companies entering India with a dedicated working hub — a professional workspace with resident Japan Desk support, complete infrastructure, and end-to-end business assistance from first curiosity to corporate entity establishment.",
    JP: "インドに進出する日本企業に専用のワーキングハブを提供すること — 常駐ジャパンデスク、完全なインフラ、そして初期相談から法人設立までのエンドツーエンドのビジネス支援を備えたプロフェッショナルなワークスペース。",
  },
  tag: { EN: "What we do today", JP: "今日私たちが行うこと" },
} as const;

const VISION = {
  title: { EN: "Our Vision", JP: "ビジョン" },
  body: {
    EN: "To be the premier physical and operational bridge between the Japanese and Indian business ecosystems, accelerating bilateral innovation, human capital exchange, and market success.",
    JP: "日本とインドのビジネスエコシステムをつなぐ最高の物理的・運営的架け橋となり、二国間のイノベーション、人材交流、そして市場での成功を加速させること。",
  },
  tag: { EN: "What we are building toward", JP: "私たちが目指す未来" },
} as const;

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
          Section 1 — 3 Pillars Detailed
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory dark:bg-[#0b111e] transition-colors duration-300">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{t("about.purpose.eyebrow")}</Eyebrow>
              <h2
                className="mt-2 font-serif-jp font-bold leading-[1.2] text-ink dark:text-white"
                style={{ fontSize: "clamp(1.625rem,3vw,2.25rem)" }}
              >
                {t("about.purpose.title")}
              </h2>
              <p
                className="mx-auto mt-2 max-w-2xl font-inter leading-relaxed text-slate dark:text-slate-300"
                style={{ fontSize: "clamp(0.9rem,1.3vw,1.05rem)" }}
              >
                {t("about.purpose.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="mt-7 sm:mt-10 lg:mt-12 grid gap-4 sm:gap-6 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.num} delay={i * 100}>
                <article className="luxury-light-card card-sheen gold-hairline group relative h-full flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-4 sm:p-6 lg:p-7.5 shadow-card dark:shadow-2xl hover:shadow-2xl hover:border-crimson/35 dark:hover:border-rose-400/40 transition-all duration-300">
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
                      <span className="text-slate-300 dark:text-white/20">·</span>
                      <span className="font-serif-jp text-[12px] sm:text-[13px] font-bold text-saffron-dark dark:text-saffron">
                        {t(p.jpKey)}
                      </span>
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
      <section className="section-pad relative overflow-hidden bg-midnight text-white border-t border-white/10">
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
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/10 px-3.5 py-1 font-inter text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-saffron shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                {tx({ EN: "Bilateral Alliance & Trust", JP: "日印の信頼と共創" })}
              </span>
              <h2
                className="mt-2.5 sm:mt-3 font-serif-jp font-bold text-white"
                style={{ fontSize: "clamp(1.65rem, 3.4vw, 2.75rem)" }}
              >
                {tx({
                  EN: "Bridging Two Nations. Empowering Global Enterprises.",
                  JP: "日印の架け橋となり、企業のグローバル展開を加速する",
                })}
              </h2>
              <p className="mt-2 sm:mt-2.5 font-inter text-[12.5px] sm:text-[13.5px] leading-relaxed text-mist max-w-2xl mx-auto">
                {tx({
                  EN: "J-Gate unites Japanese corporate precision, governance, and trust with India's vibrant technological power, vast talent pool, and rapid market execution.",
                  JP: "日本の卓越した品質・ガバナンスと、インドの高度な技術力・豊富な人材・ダイナミックな市場推進力をシームレスに融合します。",
                })}
              </p>
            </div>
          </Reveal>

          {/* 2-Column Luxury Bento Grid */}
          <div className="mt-7 sm:mt-10 lg:mt-12 grid lg:grid-cols-12 gap-5 sm:gap-8 items-center max-w-6xl mx-auto">
            {/* Left: Framed Strategic Photographic Feature Card */}
            <div className="lg:col-span-5">
              <Reveal variant="scale">
                <div className="luxury-glass-card group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-white/[0.04] p-2.5 sm:p-4 shadow-2xl backdrop-blur-xl">
                  {/* Image Frame with glowing border */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/40">
                    <img
                      src="/japan-india-handshake.jpg"
                      alt="Japanese and Indian business leaders shaking hands in front of Japan and India national flags"
                      className="w-full aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                    {/* Floating Top Badge */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-midnight/90 border border-white/15 px-3 py-1 text-[10.5px] font-bold text-white shadow-lg backdrop-blur-md">
                        <span className="text-[13px]">🇯🇵</span>
                        <span>Japan</span>
                        <span className="text-saffron font-bold">↔</span>
                        <span className="text-[13px]">🇮🇳</span>
                        <span>India</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-crimson/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                        {tx({ EN: "LIVE CORRIDOR", JP: "常時連携" })}
                      </span>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="font-serif-jp text-[14px] sm:text-[15px] font-bold leading-snug text-white drop-shadow-md">
                        {tx({
                          EN: "Executive Partnership & Strategic Mutual Trust",
                          JP: "確固たる信頼と共創に基づく日印エグゼクティブ・アライアンス",
                        })}
                      </p>
                      <p className="mt-1 font-inter text-[11px] text-mist/90 line-clamp-2">
                        {tx({
                          EN: "Deepening business, technological, and cultural ties between Japanese enterprises and India's fastest-growing innovation ecosystem.",
                          JP: "日本企業とインド急成長イノベーションエコシステムを結ぶ、強固なビジネス・技術・人材の連携基盤。",
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Micro Trust Strip under photo */}
                  <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-white">
                    <div className="rounded-xl bg-white/[0.04] p-2 border border-white/5">
                      <span className="block font-inter text-[9.5px] font-bold text-saffron uppercase tracking-wider">
                        {tx({ EN: "Ready Space", JP: "即日稼働" })}
                      </span>
                      <span className="block font-inter text-[11.5px] font-semibold text-white mt-0.5">
                        Cyber Gateway
                      </span>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] p-2 border border-white/5">
                      <span className="block font-inter text-[9.5px] font-bold text-saffron uppercase tracking-wider">
                        {tx({ EN: "Advisory", JP: "支援体制" })}
                      </span>
                      <span className="block font-inter text-[11.5px] font-semibold text-white mt-0.5">
                        Japan Desk
                      </span>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] p-2 border border-white/5">
                      <span className="block font-inter text-[9.5px] font-bold text-saffron uppercase tracking-wider">
                        {tx({ EN: "Network", JP: "提携基盤" })}
                      </span>
                      <span className="block font-inter text-[11.5px] font-semibold text-crimson-light mt-0.5">
                        T-Hub & State Gov
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: 4 Strategic Value Pillars */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-3.5">
              {BILATERAL_SYNERGIES.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal key={idx} delay={idx * 70}>
                    <div className="luxury-glass-card group rounded-2xl border border-white/15 bg-white/[0.03] p-4 sm:p-5 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/30 hover:-translate-y-0.5 shadow-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-crimson/30 to-crimson-deep/40 text-saffron border border-crimson/40 mt-0.5 group-hover:scale-105 transition-transform">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="inline-block rounded-full bg-saffron/15 border border-saffron/25 px-2 py-0.5 font-inter text-[9.5px] font-bold uppercase tracking-wider text-saffron">
                              {tx(item.badge)}
                            </span>
                          </div>
                          <h4 className="mt-1.5 font-serif-jp text-[15.5px] sm:text-[17px] font-bold text-white group-hover:text-saffron transition-colors leading-snug">
                            {tx(item.title)}
                          </h4>
                          <p className="mt-1.5 font-inter text-[12.5px] sm:text-[13px] leading-relaxed text-mist/90">
                            {tx(item.desc)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Section 3 — Mission & Vision — 2 side-by-side cards
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad relative overflow-hidden bg-ivory-warm dark:bg-[#080d17] border-t border-slate-200/70 dark:border-white/10 transition-colors duration-300">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Mission & Vision", JP: "ミッション＆ビジョン" })}</Eyebrow>
              <h2
                className="mt-2 font-serif-jp font-bold leading-[1.18] text-ink dark:text-white"
                style={{ fontSize: "clamp(1.625rem,3vw,2.25rem)" }}
              >
                {tx({ EN: "What We Exist To Do", JP: "私たちの存在意義" })}
              </h2>
              <p
                className="mx-auto mt-2 max-w-2xl font-inter leading-relaxed text-slate dark:text-slate-300"
                style={{ fontSize: "clamp(0.9rem,1.3vw,1.05rem)" }}
              >
                {tx({
                  EN: "Two statements — one for what we do today, one for what we are building toward.",
                  JP: "二つの声明 — 今日私たちが行うことと、私たちが構築している未来。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-6 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-2">
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

    </>
  );
}
