"use client";

import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { LogoMarquee } from "@/components/jgate/logo-marquee";
import { useI18n } from "@/lib/i18n";
import { Phone, Mail, MessageSquare, Sparkles, Languages } from "lucide-react";
import Link from "next/link";

/* ============================================================
   /team — Executive Leadership, Advisory Council & Core Team
   Layout structured per client hand-sketch:
   1. PageHero
   2. Advisory Council (5 Advisors — 3 in Row 1, 2 in Row 2)
   3. Architectural Divider
   4. Operations / Organizing Team (4 Core Members in a row)
   5. Japanese Consultation Reassurance Banner
   6. Ecosystem Partners (12 Partners with verified logos)
   7. Closing CTA
   ============================================================ */

/* Advisory Council Data */
const ADVISORY_ROW_1 = [
  {
    id: "mahankali",
    name: "Srinivas Rao Mahankali (MSR)",
    jpName: "スリニヴァス・ラオ・マハンカリ",
    title: "Former CEO, T-Hub",
    desc: "Spearheaded world's largest startup incubator. Decades of enterprise leadership across global IT corridors.",
    image: "/advisory/mahankali.png",
    badge: "T-HUB LEADERSHIP",
  },
  {
    id: "jagirdar",
    name: "Sujit Jagirdar",
    jpName: "スジット・ジャギルダー",
    title: "Former CIO, T-Hub",
    desc: "Key strategist behind Telangana's innovation architecture and cross-border incubation alliances.",
    image: "/advisory/jagirdar.png",
    badge: "INNOVATION ARCHITECT",
  },
  {
    id: "desai",
    name: "Dr. Uday B. Desai",
    jpName: "ウダイ・B・デサイ博士",
    title: "Founding Director, IIT Hyderabad",
    desc: "Pioneered Japan-India academic collaboration and deep-tech talent pipelines across semiconductor & AI.",
    image: "/advisory/desai.png",
    badge: "IIT FOUNDING DIRECTOR",
  },
];

const ADVISORY_ROW_2 = [
  {
    id: "sarikonda",
    name: "Dr. Viinay Sarikonda",
    jpName: "ヴィーナイ・サリコンダ博士",
    title: "CEO, Genesys Info X",
    desc: "Bilateral enterprise strategist driving digital transformation, MoU partnerships, and market entry for Japanese multinationals.",
    image: "/advisory/sarikonda.png",
    badge: "GENESYS INFO X",
  },
  {
    id: "isogai",
    name: "Tomio Isogai (磯貝 富雄)",
    jpName: "元シャープ・インディア社長",
    title: "Indobox Advisor · Former MD, Sharp India",
    desc: "Over 35 years directing Japanese manufacturing & consumer electronics in India. Dean of Indo-Japan corporate harmony.",
    image: "/advisory/isogai.png",
    badge: "EX-SHARP INDIA MD",
  },
];

type SpokenLanguage = {
  EN: string;
  JP: string;
  highlight?: boolean;
};

type OpsMember = {
  id: string;
  name: string;
  jpName: string;
  role: string;
  badge?: string;
  flag: string;
  country: string;
  phone?: string;
  email: string;
  image: string;
  desc: string;
  languages: SpokenLanguage[];
};

/* Operations Team Data */
const OPS_TEAM: OpsMember[] = [
  {
    id: "tanji",
    name: "Daisuke TANJI",
    jpName: "丹治 大佑",
    role: "Director / CEO Indobox",
    flag: "🇯🇵",
    country: "Japan",
    phone: "+91-9910360648",
    email: "contact@indobox.co.jp",
    image: "/team/tanji.png",
    desc: "Directs J-Gate's bilateral bridge, connecting Indian engineering powerhouses with Japanese corporate headquarters.",
    languages: [
      { EN: "Japanese", JP: "日本語", highlight: true },
      { EN: "English", JP: "英語" },
      { EN: "Hindi", JP: "ヒンディー語" },
    ],
  },
  {
    id: "hanaoka",
    name: "Mariko HANAOKA",
    jpName: "花岡 真理子",
    role: "Director / Language Lead",
    flag: "🇯🇵",
    country: "Japan",
    email: "contact@indobox.co.jp",
    image: "/team/hanaoka.png",
    desc: "Native Japanese educator leading business Japanese, JLPT/NAT curriculum, and cultural orientation programs.",
    languages: [
      { EN: "Japanese", JP: "日本語", highlight: true },
      { EN: "English", JP: "英語" },
      { EN: "Tamil", JP: "タミル語" },
      { EN: "Bengali", JP: "ベンガル語" },
    ],
  },
  {
    id: "dheeraj",
    name: "Dheeraj YANNETI",
    jpName: "ディラジ・ヤンネティ",
    role: "Community Manager & Concierge Lead",
    badge: "CONCIERGE LEAD",
    flag: "🇮🇳",
    country: "India",
    phone: "+91-98498 11543",
    email: "contact@indobox.co.jp",
    image: "/team/dheeraj.png",
    desc: "Manages day-to-day workspace operations, member admissions, bilingual concierge services, and enterprise client relations.",
    languages: [
      { EN: "Japanese", JP: "日本語", highlight: true },
      { EN: "English", JP: "英語" },
      { EN: "Telugu", JP: "テルグ語" },
      { EN: "Hindi", JP: "ヒンディー語" },
    ],
  },
  {
    id: "abhishek",
    name: "Abhishek BUDURU",
    jpName: "アブシェーク・ブドゥル",
    role: "Intern / Tech Operations",
    flag: "🇮🇳",
    country: "India",
    email: "contact@indobox.co.jp",
    image: "/team/abhishek.png",
    desc: "Oversees smart access infrastructure, IT facility support, and technology integrations across the Hyderabad hub.",
    languages: [
      { EN: "Japanese (N3)", JP: "日本語 (N3)", highlight: true },
      { EN: "English", JP: "英語" },
      { EN: "Telugu", JP: "テルグ語" },
      { EN: "Hindi", JP: "ヒンディー語" },
    ],
  },
];

export default function TeamPage() {
  const { tx } = useI18n();

  return (
    <>
      <PageHero
        eyebrowKey="team.eyebrow"
        titleNode={tx({ EN: "Leadership & Advisory", JP: "リーダーシップ＆諮問委員会" })}
        subtitleKey="team.subtitle"
      />

      {/* ════════════════════════════════════════════════════════════
          1. ADVISORY COUNCIL — 3+2 Luxury Executive Grid (Midnight Navy)
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad relative overflow-hidden bg-midnight text-white">
        {/* Ambient subtle Japanese Asanoha lattice backdrop */}
        <div className="pattern-asanoha-dark absolute inset-0 opacity-40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 10%, rgba(232,160,26,0.12) 0%, transparent 65%), radial-gradient(ellipse at 80% 80%, rgba(188,26,44,0.08) 0%, transparent 50%)",
          }}
        />

        <div className="container-jg relative z-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/10 px-4 py-1.5 font-inter text-[12px] font-bold uppercase tracking-wider text-saffron">
                <Sparkles className="h-3.5 w-3.5" />
                {tx({ EN: "Strategic Guidance", JP: "戦略的ガイダンス" })}
              </span>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
                style={{ fontSize: "clamp(1.875rem, 3.8vw, 2.75rem)" }}
              >
                {tx({ EN: "Advisory Council", JP: "諮問委員会（アドバイザリー・カウンシル）" })}
              </h2>
              <p
                className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-mist"
                style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}
              >
                {tx({
                  EN: "Visionary leaders from premier government innovation bodies, top engineering institutions, and cross-border enterprise directing the Japan-India corridor.",
                  JP: "政府機関、トップアカデミア、そして日印二国間ビジネスを牽引してきた最高峰のリーダー陣が戦略を監修。",
                })}
              </p>
            </div>
          </Reveal>

          {/* Row 1 — 3 Advisors across */}
          <div className="mt-7 sm:mt-10 lg:mt-12 grid gap-4 sm:gap-6 md:grid-cols-3">
            {ADVISORY_ROW_1.map((adv, i) => (
              <Reveal key={adv.id} delay={i * 90}>
                <article className="luxury-glass-card card-sheen lift-card-dark group relative flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-4 sm:p-6 lg:p-7 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-saffron/60 hover:shadow-[0_0_36px_rgba(232,160,26,0.25)]">
                  {/* Top gold accent line */}
                  <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-saffron via-saffron-light to-transparent opacity-90" />

                  {/* Header: Squircle Portrait + Executive Title */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 sm:gap-4.5">
                    <div className="relative shrink-0">
                      <div className="h-20 w-20 sm:h-28 sm:w-28 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-saffron/50 bg-navy/80 shadow-xl transition-transform duration-300 group-hover:scale-105 group-hover:border-saffron">
                        <img
                          src={adv.image}
                          alt={adv.name}
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 text-center sm:text-left">
                      <span className="inline-block rounded-full border border-saffron/40 bg-saffron/15 px-2.5 py-0.5 font-inter text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider text-saffron shadow-sm">
                        {adv.badge}
                      </span>
                      <h3 className="mt-1.5 sm:mt-2 font-serif-jp text-[16px] sm:text-[18px] font-bold leading-snug text-white group-hover:text-saffron-light transition-colors">
                        {adv.name}
                      </h3>
                      <p className="font-sans-jp text-[11.5px] sm:text-[12px] text-mist/90 mt-0.5">{adv.jpName}</p>
                      <p className="mt-1.5 sm:mt-2 font-inter text-[12px] sm:text-[13px] font-bold text-saffron">
                        {adv.title}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="mt-3.5 sm:mt-5 flex flex-1 flex-col border-t border-white/[0.1] pt-3 sm:pt-4">
                    <p className="flex-1 font-inter text-[12px] sm:text-[13px] leading-relaxed text-slate-300">
                      {adv.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Row 2 — 2 Advisors centered */}
          <div className="mt-4 sm:mt-6 grid gap-4 sm:gap-6 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
            {ADVISORY_ROW_2.map((adv, i) => (
              <Reveal key={adv.id} delay={300 + i * 90}>
                <article className="luxury-glass-card card-sheen lift-card-dark group relative flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-4 sm:p-6 lg:p-7 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-saffron/60 hover:shadow-[0_0_36px_rgba(232,160,26,0.25)]">
                  {/* Top gold accent line */}
                  <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-saffron via-saffron-light to-transparent opacity-90" />

                  {/* Header: Squircle Portrait + Executive Title */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 sm:gap-4.5">
                    <div className="relative shrink-0">
                      <div className="h-20 w-20 sm:h-28 sm:w-28 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-saffron/50 bg-navy/80 shadow-xl transition-transform duration-300 group-hover:scale-105 group-hover:border-saffron">
                        <img
                          src={adv.image}
                          alt={adv.name}
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 text-center sm:text-left">
                      <span className="inline-block rounded-full border border-saffron/40 bg-saffron/15 px-2.5 py-0.5 font-inter text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider text-saffron shadow-sm">
                        {adv.badge}
                      </span>
                      <h3 className="mt-1.5 sm:mt-2 font-serif-jp text-[16px] sm:text-[18px] font-bold leading-snug text-white group-hover:text-saffron-light transition-colors">
                        {adv.name}
                      </h3>
                      <p className="font-sans-jp text-[11.5px] sm:text-[12px] text-mist/90 mt-0.5">{adv.jpName}</p>
                      <p className="mt-1.5 sm:mt-2 font-inter text-[12px] sm:text-[13px] font-bold text-saffron">
                        {adv.title}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="mt-3.5 sm:mt-5 flex flex-1 flex-col border-t border-white/[0.1] pt-3 sm:pt-4">
                    <p className="flex-1 font-inter text-[12px] sm:text-[13px] leading-relaxed text-slate-300">
                      {adv.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          2. ARCHITECTURAL DIVIDER
         ════════════════════════════════════════════════════════════ */}
      <div className="relative h-14 overflow-hidden bg-ivory">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />
        <div className="flex h-full items-center justify-center">
          <div className="flex items-center gap-3">
            <span className="h-px w-20 bg-crimson/30" />
            <span className="font-serif-jp text-[11.5px] font-bold uppercase tracking-widest text-crimson">
              {tx({ EN: "OPERATIONS & EXECUTION · 運営体制", JP: "運営・執行体制 · OPERATIONS" })}
            </span>
            <span className="h-px w-20 bg-crimson/30" />
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          3. OPERATIONS TEAM — 4-Card Executive Grid (Warm Ivory)
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Operations & On-Ground Team", JP: "現地運営チーム" })}</Eyebrow>
              <h2
                className="mt-3 font-serif-jp font-bold text-ink"
                style={{ fontSize: "clamp(1.875rem, 3.8vw, 2.75rem)" }}
              >
                {tx({ EN: "Organizing & Execution Team", JP: "J-Gate 運営チーム" })}
              </h2>
              <p
                className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}
              >
                {tx({
                  EN: "Bilingual professionals based on-ground at Cyber Gateway, Hyderabad — ensuring flawless operations, bespoke member support, and executive conciergerie.",
                  JP: "ハイデラバード・サイバーゲートウェイ現地に常駐するバイリンガルプロフェッショナル陣が、日々の快適な拠点運営と個別支援を徹底サポート。",
                })}
              </p>
            </div>
          </Reveal>

          {/* 4 Profile Cards across */}
          <div className="mt-7 sm:mt-10 lg:mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OPS_TEAM.map((m, i) => {
              const isDheeraj = m.id === "dheeraj";
              return (
                <Reveal key={m.id} delay={i * 80}>
                  <article
                    id={isDheeraj ? "team-dheeraj" : undefined}
                    className={`luxury-light-card card-sheen gold-hairline group flex h-full flex-col items-center rounded-2xl sm:rounded-3xl border bg-white p-4 sm:p-6 lg:p-7 text-center shadow-card transition-all duration-300 hover:shadow-2xl ${
                      isDheeraj
                        ? "border-saffron ring-2 ring-saffron/30 hover:border-saffron shadow-lg shadow-saffron/10"
                        : "border-slate-200/90 hover:border-crimson/40"
                    }`}
                  >
                    {/* Modern Squircle Portrait with Crisp Country Badge */}
                    <div className="relative w-full max-w-[140px] sm:max-w-[190px]">
                      <div
                        className={`aspect-square w-full overflow-hidden rounded-2xl border-2 bg-slate-50 shadow-md transition-all duration-300 group-hover:scale-105 ${
                          isDheeraj
                            ? "border-saffron group-hover:border-saffron"
                            : "border-slate-200/80 group-hover:border-crimson/50"
                        }`}
                      >
                        <img
                          src={m.image}
                          alt={m.name}
                          className="h-full w-full object-cover object-top transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      {/* Flag Tag */}
                      <span className="absolute bottom-2 right-2 sm:bottom-2.5 sm:right-2.5 flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 sm:px-2.5 text-[10px] sm:text-[11px] font-bold text-slate-700 shadow-md border border-slate-200/80 backdrop-blur-sm">
                        <span>{m.flag}</span>
                        <span className="text-[9px] sm:text-[10px] tracking-wide uppercase font-inter">{m.country}</span>
                      </span>

                      {/* Spotlight Concierge Lead Badge for Dheeraj */}
                      {isDheeraj && (
                        <span className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 flex items-center gap-1 rounded-full bg-saffron px-2 py-0.5 sm:px-2.5 text-[9px] sm:text-[9.5px] font-bold text-ink shadow-md border border-saffron-dark/20 uppercase tracking-wider font-inter animate-pulse">
                          <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-ink" />
                          <span>{m.badge}</span>
                        </span>
                      )}
                    </div>

                    {/* Name & Titles */}
                    <h3 className="mt-3 sm:mt-4 font-serif-jp text-[16px] sm:text-[18px] font-bold leading-tight text-ink group-hover:text-crimson transition-colors">
                      {m.name}
                    </h3>
                    <p className="mt-0.5 font-sans-jp text-[11.5px] sm:text-[12px] font-semibold text-slate-500">
                      {m.jpName}
                    </p>
                    <span
                      className={`mt-2 sm:mt-2.5 inline-flex rounded-full px-3 py-0.5 sm:px-3.5 sm:py-1 font-inter text-[10.5px] sm:text-[11px] font-bold shadow-sm ${
                        isDheeraj
                          ? "bg-saffron/20 text-saffron-dark border border-saffron/40"
                          : "bg-crimson/10 text-crimson border border-crimson/20"
                      }`}
                    >
                      {m.role}
                    </span>

                    {/* Spoken Languages Strip */}
                    <div className="mt-2.5 sm:mt-3.5 w-full rounded-xl sm:rounded-2xl bg-slate-50/90 border border-slate-200/70 p-2 sm:p-2.5">
                      <div className="flex items-center justify-center gap-1.5 font-inter text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1 sm:mb-1.5">
                        <Languages className="h-3 w-3 text-crimson" />
                        <span>{tx({ EN: "Languages", JP: "対応言語" })}</span>
                      </div>
                      <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5">
                        {m.languages.map((lang, li) => (
                          <span
                            key={li}
                            className={`inline-flex items-center rounded-md px-1.5 py-0.5 sm:px-2 font-inter text-[10px] sm:text-[10.5px] font-semibold transition-colors ${
                              lang.highlight
                                ? "bg-crimson/10 text-crimson border border-crimson/25 font-bold"
                                : "bg-white text-slate-700 border border-slate-200/90 shadow-2xs"
                            }`}
                          >
                            {tx(lang)}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Short Bio */}
                    <p className="mt-2.5 sm:mt-3.5 flex-1 font-inter text-[12px] sm:text-[12.5px] leading-relaxed text-slate-600">
                      {m.desc}
                    </p>

                    {/* Direct Contact Links */}
                    <div className="mt-3.5 sm:mt-5 w-full space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3 sm:pt-4 text-[11.5px] sm:text-[12px]">
                      {m.phone && (
                        <a
                          href={`tel:${m.phone.replace(/[^0-9+]/g, "")}`}
                          className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 py-1.5 sm:py-2 px-2.5 sm:px-3 font-inter font-medium text-slate-700 transition-colors hover:bg-crimson/10 hover:text-crimson border border-slate-200/60 shadow-sm"
                        >
                          <Phone className="h-3.5 w-3.5 text-crimson" />
                          <span>{m.phone}</span>
                        </a>
                      )}
                      <a
                        href={`mailto:${m.email}`}
                        className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 py-1.5 sm:py-2 px-2.5 sm:px-3 font-inter font-medium text-slate-700 transition-colors hover:bg-crimson/10 hover:text-crimson border border-slate-200/60 shadow-sm"
                      >
                        <Mail className="h-3.5 w-3.5 text-crimson" />
                        <span>{m.email}</span>
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* ══════════════════════════════════════════════════════════
              Bilingual Concierge Speech Bubble — Pointing Directly up to Dheeraj
             ══════════════════════════════════════════════════════════ */}
          <Reveal delay={250}>
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-start">
              {/* Empty space for Columns 1 & 2 (Tanji & Hanaoka) on desktop */}
              <div className="hidden lg:block lg:col-span-2" />

              {/* Speech Bubble spanning under Column 3 (Dheeraj) & Column 4 (Abhishek) */}
              <div className="sm:col-span-2 lg:col-span-2 relative">
                <div className="relative rounded-2xl sm:rounded-[36px] border-2 border-saffron bg-[#FFF9EE] p-4 sm:p-6 lg:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
                  {/* Authentic Speech Bubble Pointer Tail pointing EXACTLY UP to Dheeraj (Col 3 center = 25% of 2-col span) */}
                  <div className="absolute -top-[14px] left-1/2 sm:left-[25%] -translate-x-1/2 h-0 w-0 border-x-[13px] border-x-transparent border-b-[14px] border-b-saffron" />
                  <div className="absolute -top-[11px] left-1/2 sm:left-[25%] -translate-x-1/2 h-0 w-0 border-x-[13px] border-x-transparent border-b-[14px] border-b-[#FFF9EE]" />

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="inline-block rounded-full bg-saffron/25 px-2.5 py-0.5 font-inter text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-wider text-saffron-dark">
                          BILINGUAL CONCIERGE · バイリンガル対応
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-crimson/10 px-2 py-0.5 font-inter text-[9.5px] sm:text-[10.5px] font-bold text-crimson">
                          <Sparkles className="h-3 w-3" />
                          <span>Dheeraj (Community Manager)</span>
                        </span>
                      </div>

                      {/* Exact Japanese Header from User Image */}
                      <h4 className="font-serif-jp text-[17px] sm:text-[21px] lg:text-[23px] font-bold text-ink leading-tight tracking-tight">
                        なんでもお気軽にご相談ください。
                        <br />
                        日本語でご対応致します。
                      </h4>

                      {/* Bilingual Description */}
                      <p className="font-inter text-[12px] sm:text-[13px] lg:text-[13.5px] leading-relaxed text-slate-700">
                        {tx({
                          EN: "Whether exploring hub memberships, enterprise private suites, company incorporation, or bilateral business partnerships — our team provides dedicated support in Japanese and English.",
                          JP: "オフィス視察、現地法人設立、人材採用、市場調査など、経験豊富な現地スタッフが日本語・英語で迅速かつ丁寧に対応いたします。",
                        })}
                      </p>
                    </div>

                    {/* Direct Contact Buttons */}
                    <div className="flex flex-wrap sm:flex-col shrink-0 gap-2 sm:gap-2.5 w-full sm:w-auto">
                      <a
                        href="tel:+919849811543"
                        className="btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-crimson px-4 py-2 sm:px-5 sm:py-2.5 font-inter text-[12px] sm:text-[12.5px] font-semibold text-white shadow-md hover:bg-crimson-deep transition-all"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        <span>+91-98498 11543</span>
                      </a>
                      <a
                        href="https://wa.me/919849811543?text=Hello%20Dheeraj,%20I%20would%20like%20to%20inquire%20about%20J-Gate%20Hyderabad."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-4 py-2 sm:px-5 sm:py-2.5 font-inter text-[12px] sm:text-[12.5px] font-semibold text-white shadow-md transition-all"
                      >
                        <MessageSquare className="h-3.5 w-3.5" />
                        <span>WhatsApp Dheeraj</span>
                      </a>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-slate-50 px-4 py-1.5 sm:px-5 sm:py-2 font-inter text-[11.5px] sm:text-[12px] font-semibold text-slate-700 border border-slate-300 shadow-sm transition-all"
                      >
                        <Mail className="h-3.5 w-3.5 text-crimson" />
                        <span>{tx({ EN: "Online Inquiry Desk →", JP: "Web相談・予約 →" })}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          4. ECOSYSTEM PARTNERS — Infinite Side-Scrolling Company Marquee
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad relative overflow-hidden bg-ivory-warm">
        <div className="container-jg mb-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Bilateral Ecosystem", JP: "提携エコシステム" })}</Eyebrow>
              <h2
                className="mt-3 font-serif-jp font-bold text-ink"
                style={{ fontSize: "clamp(1.875rem, 3.8vw, 2.75rem)" }}
              >
                {tx({ EN: "Our Ecosystem Partner Network", JP: "提携エコシステムネットワーク" })}
              </h2>
              <p
                className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}
              >
                {tx({
                  EN: "Government trade organizations, premier incubators, universities, and enterprise enablers powering member success.",
                  JP: "政府機関、アジア最大級のインキュベーション施設、トップ大学、そして先進テクノロジー企業との緊密な連携基盤。",
                })}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Dual Infinite Side-Scrolling Marquee Tracks with Edge Masking */}
        <LogoMarquee variant="light" />
      </section>

    </>
  );
}
