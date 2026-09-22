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
    title: "Former CEO, T-Hub | IT Enterprise Leader",
    desc: "Spearheaded the world's largest startup incubator. Decades of enterprise leadership across global IT corridors and startup innovation.",
    image: "/advisory/mahankali.png",
    badge: "T-HUB LEADERSHIP",
    tags: ["Startup Incubation", "Enterprise IT", "Global Corridors"],
    linkedin: "https://www.linkedin.com/in/mahankali-srinivas-rao-msr-3112662/",
  },
  {
    id: "jagirdar",
    name: "Sujit Jagirdar",
    jpName: "スジット・ジャギルダー",
    title: "Former CIO, T-Hub | Innovation Ecosystem Strategist",
    desc: "Key strategist behind Telangana's innovation architecture and cross-border incubation alliances between India and global markets.",
    image: "/advisory/jagirdar.png",
    badge: "INNOVATION ARCHITECT",
    tags: ["Innovation Strategy", "Cross-Border Alliances", "Ecosystem Architecture"],
    linkedin: "https://www.linkedin.com/in/sujitjagirdar/",
  },
  {
    id: "desai",
    name: "Dr. Uday B. Desai",
    jpName: "ウダイ・B・デサイ博士",
    title: "Founding Director, IIT Hyderabad | Academic Leader",
    desc: "Pioneered Japan-India academic collaboration and deep-tech talent pipelines across semiconductor, wireless communications, and AI.",
    image: "/advisory/desai.png",
    badge: "IIT FOUNDING DIRECTOR",
    tags: ["Academic Leadership", "Semiconductor & AI", "Deep-Tech Pipelines"],
    linkedin: "https://www.linkedin.com/in/uday-desai-4752b04/",
  },
];

const ADVISORY_ROW_2 = [
  {
    id: "sarikonda",
    name: "Dr. Viinay Sarikonda",
    jpName: "ヴィーナイ・サリコンダ博士",
    title: "CEO, Genesys Info X | Bilateral Enterprise Strategist",
    desc: "Bilateral enterprise strategist driving digital transformation, MoU partnerships, and market entry for Japanese multinationals.",
    image: "/advisory/sarikonda.png",
    badge: "GENESYS INFO X",
    tags: ["Digital Transformation", "MoU Partnerships", "Market Entry"],
    linkedin: "https://www.linkedin.com/in/dr-viinay-sarikonda-5b23261a/",
  },
  {
    id: "isogai",
    name: "Tomio Isogai (磯貝 富雄)",
    jpName: "元シャープ・インディア社長",
    title: "Former MD, Sharp India | Indobox Corporate Advisor",
    desc: "Over 35 years directing Japanese manufacturing & consumer electronics in India. Dean of Indo-Japan corporate harmony and cross-cultural synergy.",
    image: "/advisory/isogai.png",
    badge: "EX-SHARP INDIA MD",
    tags: ["Corporate Advisory", "Manufacturing", "Bilateral Harmony"],
    linkedin: "https://www.linkedin.com/in/tomio-isogai-416b9b16/",
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
  subtitle: string;
  flag: string;
  country: string;
  phone?: string;
  email: string;
  image: string;
  desc: string;
  tags: string[];
  linkedin: string;
  languages: SpokenLanguage[];
};

/* Operations Team Data */
const OPS_TEAM: OpsMember[] = [
  {
    id: "tanji",
    name: "Daisuke TANJI",
    jpName: "丹治 大佑",
    role: "DIRECTOR",
    subtitle: "Bilateral Business Facilitator | Indobox Inc.",
    flag: "🇯🇵",
    country: "Japan",
    phone: "+91-9910360648",
    email: "contact@indobox.co.jp",
    image: "/team/tanji.png",
    desc: "Directs J-Gate's bilateral bridge, connecting Indian engineering powerhouses with Japanese corporate headquarters.",
    tags: ["Business Strategy", "Career Placement", "Bilateral Relations"],
    linkedin: "https://www.linkedin.com/in/daisuke-tanji-7749171b/",
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
    role: "DIRECTOR",
    subtitle: "Native Educator | 9+ Years Exp. in India",
    flag: "🇯🇵",
    country: "Japan",
    email: "contact@indobox.co.jp",
    image: "/team/hanaoka.png",
    desc: "Native Japanese educator leading business Japanese, JLPT/NAT curriculum, and cultural orientation programs.",
    tags: ["Curriculum Design", "Pedagogy", "Cultural Orientation"],
    linkedin: "https://www.linkedin.com/company/indobox/",
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
    role: "COMMUNITY MANAGER",
    badge: "CONCIERGE LEAD",
    subtitle: "Operations Head | Admissions Specialist",
    flag: "🇮🇳",
    country: "India",
    phone: "+91-98498 11543",
    email: "contact@indobox.co.jp",
    image: "/team/dheeraj.png",
    desc: "Manages day-to-day workspace operations, member admissions, bilingual concierge services, and enterprise client relations.",
    tags: ["Operations", "Admissions", "Client Relations"],
    linkedin: "https://www.linkedin.com/in/dheeraj-yanneti/",
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
    role: "TECH OPERATIONS",
    subtitle: "Smart Access & IT Infrastructure Specialist",
    flag: "🇮🇳",
    country: "India",
    email: "contact@indobox.co.jp",
    image: "/team/abhishek.png",
    desc: "Oversees smart access infrastructure, IT facility support, and technology integrations across the Hyderabad hub.",
    tags: ["Tech Support", "IT Infrastructure", "Smart Access"],
    linkedin: "https://www.linkedin.com/in/abhishek-buduru/",
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
          <div className="mt-7 sm:mt-10 lg:mt-12 grid gap-5 sm:gap-6 md:grid-cols-3">
            {ADVISORY_ROW_1.map((adv, i) => (
              <Reveal key={adv.id} delay={i * 90}>
                <article className="luxury-glass-card card-sheen lift-card-dark group relative flex h-full flex-col justify-between items-center overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-5 sm:p-6 lg:p-7 text-center shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-saffron/60 hover:shadow-[0_0_36px_rgba(232,160,26,0.25)]">
                  {/* Top gold accent line */}
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saffron via-saffron-light to-transparent opacity-90" />

                  {/* Circular Portrait */}
                  <div className="relative">
                    <div className="h-28 w-28 rounded-full overflow-hidden border-2 border-saffron/50 bg-navy/80 shadow-xl transition-transform duration-300 group-hover:scale-105 group-hover:border-saffron mx-auto">
                      <img
                        src={adv.image}
                        alt={adv.name}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Role Eyebrow */}
                  <span className="mt-4 font-inter text-[11px] font-bold uppercase tracking-widest text-saffron">
                    {adv.badge}
                  </span>

                  {/* Executive Name */}
                  <h3 className="mt-1 font-serif-jp text-[18px] sm:text-[19px] font-bold text-white group-hover:text-saffron-light transition-colors leading-tight">
                    {adv.name}
                  </h3>
                  <p className="mt-0.5 font-sans-jp text-[11.5px] text-mist/90">{adv.jpName}</p>

                  {/* Subtitle / Headline with Pipe Dividers */}
                  <p className="mt-2 font-inter text-[12px] sm:text-[12.5px] font-semibold text-saffron leading-snug">
                    {adv.title}
                  </p>

                  {/* Body Content */}
                  <p className="mt-2.5 font-inter text-[12px] sm:text-[12.5px] leading-relaxed text-slate-300 flex-1">
                    {adv.desc}
                  </p>

                  {/* Skill / Domain Pill Tags */}
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 w-full">
                    {adv.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="rounded px-2.5 py-1 font-inter text-[10px] sm:text-[10.5px] font-semibold bg-white/10 border border-white/15 text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action: in CONNECT */}
                  <div className="mt-4 pt-3.5 border-t border-white/10 w-full flex items-center justify-center">
                    <a
                      href={adv.linkedin || "#"}
                      target={adv.linkedin ? "_blank" : undefined}
                      rel={adv.linkedin ? "noopener noreferrer" : undefined}
                      onClick={adv.linkedin ? undefined : (e) => e.preventDefault()}
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3.5 py-1.5 font-inter text-[11px] font-bold uppercase tracking-wider text-slate-200 hover:border-saffron hover:bg-saffron/20 hover:text-saffron transition-all shadow-sm"
                    >
                      <span className="flex h-4 w-4 items-center justify-center rounded bg-[#0A66C2] text-white text-[9px] font-black">
                        in
                      </span>
                      <span>CONNECT</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Row 2 — 2 Advisors centered */}
          <div className="mt-5 sm:mt-6 grid gap-5 sm:gap-6 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
            {ADVISORY_ROW_2.map((adv, i) => (
              <Reveal key={adv.id} delay={300 + i * 90}>
                <article className="luxury-glass-card card-sheen lift-card-dark group relative flex h-full flex-col justify-between items-center overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-5 sm:p-6 lg:p-7 text-center shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-saffron/60 hover:shadow-[0_0_36px_rgba(232,160,26,0.25)]">
                  {/* Top gold accent line */}
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saffron via-saffron-light to-transparent opacity-90" />

                  {/* Circular Portrait */}
                  <div className="relative">
                    <div className="h-28 w-28 rounded-full overflow-hidden border-2 border-saffron/50 bg-navy/80 shadow-xl transition-transform duration-300 group-hover:scale-105 group-hover:border-saffron mx-auto">
                      <img
                        src={adv.image}
                        alt={adv.name}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Role Eyebrow */}
                  <span className="mt-4 font-inter text-[11px] font-bold uppercase tracking-widest text-saffron">
                    {adv.badge}
                  </span>

                  {/* Executive Name */}
                  <h3 className="mt-1 font-serif-jp text-[18px] sm:text-[19px] font-bold text-white group-hover:text-saffron-light transition-colors leading-tight">
                    {adv.name}
                  </h3>
                  <p className="mt-0.5 font-sans-jp text-[11.5px] text-mist/90">{adv.jpName}</p>

                  {/* Subtitle / Headline with Pipe Dividers */}
                  <p className="mt-2 font-inter text-[12px] sm:text-[12.5px] font-semibold text-saffron leading-snug">
                    {adv.title}
                  </p>

                  {/* Body Content */}
                  <p className="mt-2.5 font-inter text-[12px] sm:text-[12.5px] leading-relaxed text-slate-300 flex-1">
                    {adv.desc}
                  </p>

                  {/* Skill / Domain Pill Tags */}
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 w-full">
                    {adv.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="rounded px-2.5 py-1 font-inter text-[10px] sm:text-[10.5px] font-semibold bg-white/10 border border-white/15 text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action: in CONNECT */}
                  <div className="mt-4 pt-3.5 border-t border-white/10 w-full flex items-center justify-center">
                    <a
                      href={adv.linkedin || "#"}
                      target={adv.linkedin ? "_blank" : undefined}
                      rel={adv.linkedin ? "noopener noreferrer" : undefined}
                      onClick={adv.linkedin ? undefined : (e) => e.preventDefault()}
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3.5 py-1.5 font-inter text-[11px] font-bold uppercase tracking-wider text-slate-200 hover:border-saffron hover:bg-saffron/20 hover:text-saffron transition-all shadow-sm"
                    >
                      <span className="flex h-4 w-4 items-center justify-center rounded bg-[#0A66C2] text-white text-[9px] font-black">
                        in
                      </span>
                      <span>CONNECT</span>
                    </a>
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
      <div className="relative h-14 overflow-hidden bg-ivory dark:bg-[#0c1424]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />
        <div className="flex h-full items-center justify-center">
          <div className="flex items-center gap-3">
            <span className="h-px w-20 bg-crimson/30" />
            <span className="font-serif-jp text-[11.5px] font-bold uppercase tracking-widest text-crimson dark:text-rose-400">
              {tx({ EN: "OPERATIONS & EXECUTION · 運営体制", JP: "運営・執行体制 · OPERATIONS" })}
            </span>
            <span className="h-px w-20 bg-crimson/30" />
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          3. OPERATIONS TEAM — 4-Card Executive Grid (Warm Ivory)
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory dark:bg-[#0c1424]">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Operations & On-Ground Team", JP: "現地運営チーム" })}</Eyebrow>
              <h2
                className="mt-3 font-serif-jp font-bold text-ink dark:text-white"
                style={{ fontSize: "clamp(1.875rem, 3.8vw, 2.75rem)" }}
              >
                {tx({ EN: "Organizing & Execution Team", JP: "J-Gate 運営チーム" })}
              </h2>
              <p
                className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-slate dark:text-slate-300"
                style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}
              >
                {tx({
                  EN: "Bilingual professionals based on-ground at Cyber Gateway, Hyderabad — ensuring flawless operations, bespoke member support, and executive conciergerie.",
                  JP: "ハイデラバード・サイバーゲートウェイ現地に常駐するバイリンガルプロフェッショナル陣が、日々の快適な拠点運営と個別支援を徹底サポート。",
                })}
              </p>
            </div>
          </Reveal>

          {/* 4 Profile Cards across matching reference */}
          <div className="mt-7 sm:mt-10 lg:mt-12 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OPS_TEAM.map((m, i) => {
              const isDheeraj = m.id === "dheeraj";
              return (
                <Reveal key={m.id} delay={i * 80}>
                  <article
                    id={isDheeraj ? "team-dheeraj" : undefined}
                    className={`luxury-light-card card-sheen group relative flex h-full flex-col justify-between items-center rounded-2xl sm:rounded-3xl border bg-white dark:bg-[#101a2c] p-5 sm:p-6 lg:p-7 text-center shadow-card transition-all duration-300 hover:shadow-2xl ${
                      isDheeraj
                        ? "border-saffron/90 dark:border-saffron/60 ring-2 ring-saffron/20 hover:border-saffron shadow-lg shadow-saffron/5"
                        : "border-slate-200/90 dark:border-white/10 hover:border-crimson/40 dark:hover:border-crimson/50"
                    }`}
                  >
                    {/* Top Circular Portrait with Flag Badge */}
                    <div className="relative">
                      <div
                        className={`h-28 w-28 rounded-full overflow-hidden border-2 bg-slate-50 dark:bg-white/5 shadow-md mx-auto transition-transform duration-300 group-hover:scale-105 ${
                          isDheeraj
                            ? "border-saffron group-hover:border-saffron"
                            : "border-slate-200/90 dark:border-white/20 group-hover:border-crimson/60"
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
                      <span className="absolute bottom-0 right-0 flex items-center gap-1 rounded-full bg-white/95 dark:bg-navy/95 px-2 py-0.5 text-[10px] font-bold text-slate-700 dark:text-slate-200 shadow-md border border-slate-200/80 dark:border-white/15 backdrop-blur-sm">
                        <span>{m.flag}</span>
                        <span className="text-[9px] tracking-wide uppercase font-inter">{m.country}</span>
                      </span>

                      {/* Spotlight Concierge Lead Badge for Dheeraj */}
                      {isDheeraj && (
                        <span className="absolute -top-2 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-saffron px-2.5 py-0.5 text-[9px] font-bold text-ink shadow-md border border-saffron-dark/20 uppercase tracking-wider font-inter">
                          <Sparkles className="h-2.5 w-2.5 text-ink" />
                          <span>{m.badge}</span>
                        </span>
                      )}
                    </div>

                    {/* Role Eyebrow */}
                    <span
                      className={`mt-4 font-inter text-[11px] font-bold uppercase tracking-widest ${
                        isDheeraj ? "text-saffron-dark dark:text-saffron" : "text-crimson dark:text-rose-400"
                      }`}
                    >
                      {m.role}
                    </span>

                    {/* Executive Name */}
                    <h3 className="mt-1 font-serif-jp text-[18px] sm:text-[19px] font-bold leading-tight text-ink dark:text-white group-hover:text-crimson dark:group-hover:text-rose-400 transition-colors">
                      {m.name}
                    </h3>
                    <p className="mt-0.5 font-sans-jp text-[11.5px] font-medium text-slate-500 dark:text-slate-400">
                      {m.jpName}
                    </p>

                    {/* Subtitle / Headline with Pipe Dividers */}
                    <p className="mt-2 font-inter text-[12px] sm:text-[12.5px] font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                      {m.subtitle}
                    </p>

                    {/* Short Bio */}
                    <p className="mt-2.5 font-inter text-[12px] sm:text-[12.5px] leading-relaxed text-slate-600 dark:text-slate-300 flex-1">
                      {m.desc}
                    </p>

                    {/* Skill / Domain Pill Tags */}
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 w-full">
                      {m.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className="rounded px-2.5 py-1 font-inter text-[10px] sm:text-[10.5px] font-semibold bg-slate-100 dark:bg-white/5 border border-slate-200/70 dark:border-white/10 text-slate-600 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Spoken Languages Strip */}
                    <div className="mt-3 flex flex-wrap items-center justify-center gap-1">
                      {m.languages.map((lang, li) => (
                        <span
                          key={li}
                          className={`inline-flex items-center rounded px-1.5 py-0.5 font-inter text-[9.5px] sm:text-[10px] font-semibold ${
                            lang.highlight
                              ? "bg-crimson/10 text-crimson dark:bg-rose-950/40 dark:text-rose-300 border border-crimson/20 dark:border-rose-400/30 font-bold"
                              : "bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-white/5"
                          }`}
                        >
                          {tx(lang)}
                        </span>
                      ))}
                    </div>

                    {/* Direct Contact Links & in CONNECT */}
                    <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-white/10 w-full flex items-center justify-center gap-2">
                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200/80 dark:border-white/15 bg-slate-50 dark:bg-white/5 px-3 py-1.5 font-inter text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] dark:hover:text-[#388bfd] transition-all shadow-2xs"
                        >
                          <span className="flex h-3.5 w-3.5 items-center justify-center rounded bg-[#0A66C2] text-white text-[8.5px] font-black">
                            in
                          </span>
                          <span>CONNECT</span>
                        </a>
                      )}
                      {m.phone && (
                        <a
                          href={`tel:${m.phone.replace(/[^0-9+]/g, "")}`}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200/80 dark:border-white/15 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-crimson/10 hover:text-crimson dark:hover:text-rose-400 hover:border-crimson/30 transition-all shadow-2xs"
                          title={m.phone}
                        >
                          <Phone className="h-3.5 w-3.5" />
                        </a>
                      )}
                      <a
                        href={`mailto:${m.email}`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200/80 dark:border-white/15 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-crimson/10 hover:text-crimson dark:hover:text-rose-400 hover:border-crimson/30 transition-all shadow-2xs"
                        title={m.email}
                      >
                        <Mail className="h-3.5 w-3.5" />
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
