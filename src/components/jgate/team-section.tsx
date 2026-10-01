"use client";

import { Reveal, SectionHeading, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { LogoMarquee } from "@/components/jgate/logo-marquee";
import { useI18n } from "@/lib/i18n";
import { Phone, Mail, Sparkles } from "lucide-react";
import { JapanFlag, IndiaFlag } from "./icons";
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

/* Unified Advisory Council List (5 Members) */
const ALL_ADVISORS = [
  {
    id: "mahankali",
    name: "Srinivas Rao Mahankali (MSR)",
    jpName: "スリニヴァス・ラオ・マハンカリ",
    title: "Former CEO, T-Hub | IT Enterprise Leader",
    desc: "Led T-Hub, the world's largest startup incubator. Brings decades of senior leadership experience across international IT markets and startup ventures.",
    image: "/advisory/mahankali.png",
    badge: "T-HUB LEADERSHIP",
    tags: ["Startup Incubation", "Enterprise IT", "Global Business"],
    linkedin: "https://www.linkedin.com/in/mahankali-srinivas-rao-msr-3112662/",
  },
  {
    id: "jagirdar",
    name: "Sujit Jagirdar",
    jpName: "スジット・ジャギルダー",
    title: "Former CIO, T-Hub | Technology & Innovation Advisor",
    desc: "Helped design Telangana's startup initiatives and built international incubation partnerships between India and global tech centers.",
    image: "/advisory/jagirdar.png",
    badge: "TECHNOLOGY STRATEGIST",
    tags: ["Innovation Strategy", "International Partnerships", "Startup Programs"],
    linkedin: "https://www.linkedin.com/in/sujitjagirdar/",
  },
  {
    id: "desai",
    name: "Dr. Uday B. Desai",
    jpName: "ウダイ・B・デサイ博士",
    title: "Founding Director, IIT Hyderabad | Academic Leader",
    desc: "Pioneered Japan-India academic collaboration and specialized engineering talent across semiconductor, wireless communications, and AI.",
    image: "/advisory/desai.png",
    badge: "IIT FOUNDING DIRECTOR",
    tags: ["Academic Leadership", "Semiconductor & AI", "Engineering Talent"],
    linkedin: "https://www.linkedin.com/in/uday-desai-4752b04/",
  },
  {
    id: "sarikonda",
    name: "Dr. Viinay Sarikonda",
    jpName: "ヴィーナイ・サリコンダ博士",
    title: "CEO, Genesys Info X | Strategic Enterprise Advisor",
    desc: "Bilateral enterprise strategist driving digital transformation, strategic partnerships, and market entry for Japanese multinationals.",
    image: "/advisory/sarikonda.png",
    badge: "GENESYS INFO X",
    tags: ["Digital Transformation", "Strategic Partnerships", "Market Entry"],
    linkedin: "https://www.linkedin.com/in/dr-viinay-sarikonda-5b23261a/",
  },
  {
    id: "isogai",
    name: "Tomio Isogai",
    jpName: "磯貝 富雄 · 元シャープ・インディア社長",
    title: "Former MD, Sharp India | Indobox Corporate Advisor",
    desc: "Over 35 years directing Japanese manufacturing & consumer electronics in India. specializing in cross-cultural business collaboration.",
    image: "/advisory/isogai.png",
    badge: "EX-SHARP INDIA MD",
    tags: ["Corporate Advisory", "Manufacturing", "Cross-Cultural Management"],
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
    name: "Daisuke Tanji",
    jpName: "丹治 大佑",
    role: "DIRECTOR",
    subtitle: "Bilateral Business Facilitator | Indobox Inc.",
    flag: "🇯🇵",
    country: "Japan",
    email: "contact@indobox.co.jp",
    image: "/team/tanji.png",
    desc: "Bilateral business facilitator linking India and Japan. Directing the vision to connect Indian talent with career opportunities.",
    tags: ["Business Strategy", "Career Placement", "Bilateral Relations"],
    linkedin: "https://www.linkedin.com/in/daisuke-tanji/",
    languages: [
      { EN: "Japanese", JP: "日本語", highlight: true },
      { EN: "English", JP: "英語" },
      { EN: "Hindi", JP: "ヒンディー語" },
    ],
  },
  {
    id: "hanaoka",
    name: "Mariko Hanaoka",
    jpName: "花岡 真理子",
    role: "DIRECTOR",
    subtitle: "Native Educator | 9+ Years Exp. in India",
    flag: "🇯🇵",
    country: "Japan",
    email: "contact@indobox.co.jp",
    image: "/team/hanaoka.png",
    desc: "Japanese Language Teacher at IIT Palakkad. Qualified educator teaching in India since 2015. Leading academic direction, native pedagogy, and bicultural curriculum design.",
    tags: ["Curriculum Design", "Pedagogy", "N4 & N3"],
    linkedin: "https://www.linkedin.com/in/marikohanaoka/",
    languages: [
      { EN: "Japanese", JP: "日本語", highlight: true },
      { EN: "English", JP: "英語" },
      { EN: "Tamil", JP: "タミル語" },
    ],
  },
  {
    id: "dheeraj",
    name: "Dheeraj Yenneti",
    jpName: "ディラージゥ・イェネティー",
    role: "ADMINISTRATOR",
    subtitle: "Operations Head | Admissions Specialist",
    flag: "🇮🇳",
    country: "India",
    phone: "+91-98498 11543",
    email: "contact@indobox.co.jp",
    image: "/team/dheeraj.png",
    desc: "Directing admissions, operational infrastructure, and enrollment pipelines for hybrid offline and online learning batches.",
    tags: ["Admissions", "Operations", "Hybrid Learning"],
    linkedin: "https://www.linkedin.com/in/dheeraj-yenneti-41866531b/",
    languages: [
      { EN: "Japanese", JP: "日本語", highlight: true },
      { EN: "English", JP: "英語" },
      { EN: "Telugu", JP: "テルグ語" },
      { EN: "Hindi", JP: "ヒンディー語" },
    ],
  },
  {
    id: "abhishek",
    name: "Abhishek Buduru",
    jpName: "アブシェーク・ブドゥル",
    role: "IT & OPERATIONS",
    subtitle: "IT Support & Workspace Operations",
    flag: "🇮🇳",
    country: "India",
    email: "contact@indobox.co.jp",
    image: "/team/abhishek.png",
    desc: "Assists with IT setup, member support, and day-to-day workspace operations at J-Gate Hyderabad.",
    tags: ["IT Support", "Workspace Operations"],
    linkedin: "https://www.linkedin.com/in/buduru-abhishek/",
    languages: [
      { EN: "English", JP: "英語", highlight: true },
      { EN: "Telugu", JP: "テルグ語" },
      { EN: "Hindi", JP: "ヒンディー語" },
    ],
  },
];

export function TeamSection({ id, hideHero }: { id?: string; hideHero?: boolean }) {
  const { tx, lang } = useI18n();

  // Split Advisors into Institutional Pillars (Top Tier) and Cross-Border Strategic Advisors (Tier 2)
  const pillarAdvisors = ALL_ADVISORS.filter((a) => a.id === "mahankali" || a.id === "desai");
  const strategicAdvisors = ALL_ADVISORS.filter((a) => a.id !== "mahankali" && a.id !== "desai");

  // Split Operations Team into Resident Japan Desk and Hyderabad Ops Infrastructure
  const japanDesk = OPS_TEAM.filter((m) => m.country === "Japan");
  const hyderabadOps = OPS_TEAM.filter((m) => m.country === "India");

  return (
    <div id={id} className="scroll-mt-20">
      {!hideHero && (
        <PageHero
          eyebrowKey="team.eyebrow"
          layout="center"
          titleNode={tx({ EN: "Team", JP: "チーム" })}
          subtitleNode={tx({
            EN: "Experienced leaders and on-site specialists dedicated to supporting your business in India.",
            JP: "インドとの協業により、貴社ビジネスの新たな可能性を切り拓くプロフェッショナルチーム。",
          })}
        />
      )}

      {/* ════════════════════════════════════════════════════════════
          1. ADVISORY COUNCIL — 5-Column Unified Luxury Executive Panel
         ════════════════════════════════════════════════════════════ */}
      <section className="py-8 sm:py-10 lg:py-12 relative overflow-hidden bg-slate-50/70 dark:bg-black border-b border-slate-200/80 dark:border-white/10 text-ink dark:text-white transition-colors duration-300">
        {/* Ambient subtle Japanese Asanoha lattice backdrop */}
        <div className="pattern-asanoha opacity-[0.03] dark:pattern-asanoha-dark dark:opacity-20 absolute inset-0 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 10%, rgba(232,160,26,0.06) 0%, transparent 65%), radial-gradient(ellipse at 80% 80%, rgba(188,26,44,0.04) 0%, transparent 50%)",
          }}
        />

        <div className="container-jg relative z-10">
          <Reveal>
            <SectionHeading
              title={tx({ EN: "Team", JP: "チーム" })}
            />
          </Reveal>

          {/* Tier 1: Institutional Leaders Showcase */}
          <div className="mt-6 sm:mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {pillarAdvisors.map((adv, i) => (
                <Reveal key={adv.id} delay={i * 100}>
                  <article className="group relative flex flex-col sm:flex-row items-center sm:items-start gap-5 rounded-2xl border border-saffron/40 dark:border-saffron/30 bg-gradient-to-br from-white via-amber-50/30 to-slate-50 dark:from-black dark:via-zinc-950 dark:to-black p-5 sm:p-6 shadow-md hover:shadow-xl hover:border-saffron dark:hover:border-saffron transition-all duration-300">
                    {/* Left/Top Executive Portrait */}
                    <div className="shrink-0 relative mt-2 sm:mt-0">
                      <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl overflow-hidden border-2 border-saffron/70 dark:border-saffron/80 bg-slate-100 dark:bg-black shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={adv.image}
                          alt={adv.name}
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Right Details */}
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="font-serif-jp text-lg sm:text-xl font-bold text-ink dark:text-white group-hover:text-crimson dark:group-hover:text-saffron-light transition-colors">
                        {adv.name}
                      </h4>
                      {lang === "JP" && <p className="font-sans-jp text-xs text-slate-500 dark:text-slate-400 mt-0.5">{adv.jpName}</p>}

                      <p className="mt-1 font-inter text-xs sm:text-[13px] font-semibold text-crimson dark:text-saffron leading-snug">
                        {adv.title}
                      </p>

                      <p className="mt-2 font-inter text-xs sm:text-[12.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                        {adv.desc}
                      </p>

                      {/* Domain Pills */}
                      <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
                        {adv.tags.map((tag, ti) => (
                          <span
                            key={ti}
                            className="rounded-md px-2 py-0.5 font-inter text-[10px] font-semibold bg-saffron/10 dark:bg-saffron/15 border border-saffron/30 dark:border-saffron/30 text-saffron-dark dark:text-amber-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Connect Link */}
                      <div className="mt-4 pt-3 border-t border-slate-200/70 dark:border-white/10 flex justify-center sm:justify-start">
                        <a
                          href={adv.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 hover:bg-[#0A66C2]/10 hover:border-[#0A66C2] px-3 py-1.5 font-inter text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:text-[#0A66C2] dark:hover:text-[#388bfd] transition-all shadow-xs"
                        >
                          <span className="flex h-4 w-4 items-center justify-center rounded bg-[#0A66C2] text-white text-[9px] font-black">
                            in
                          </span>
                          <span>CONNECT</span>
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Tier 2: Cross-Border & Industry Advisory Board */}
          <div className="mt-10 sm:mt-12">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-crimson" />
              <h3 className="font-inter text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">
                {tx({ EN: "Cross-Border Enterprise & Technology Advisors", JP: "日印企業・テクノロジー顧問陣" })}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {strategicAdvisors.map((adv, i) => (
                <Reveal key={adv.id} delay={i * 90}>
                  <article className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-white/12 bg-white dark:bg-black p-5 text-center shadow-xs hover:shadow-lg hover:border-crimson/50 dark:hover:border-saffron/50 transition-all duration-300">
                    {/* Top gold line */}
                    <span className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-saffron via-crimson to-saffron opacity-80" />

                    <div>
                      {/* Portrait */}
                      <div className="relative mt-2 mx-auto h-20 w-20 sm:h-22 sm:w-22 rounded-full overflow-hidden border-2 border-slate-200 dark:border-white/20 bg-slate-50 dark:bg-black shadow-md group-hover:scale-105 group-hover:border-saffron transition-all duration-300">
                        <img
                          src={adv.image}
                          alt={adv.name}
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>

                      {/* Badge */}
                      <span className="mt-3 inline-block font-inter text-[10px] font-bold uppercase tracking-wider text-saffron-dark dark:text-saffron">
                        {adv.badge}
                      </span>

                      {/* Name */}
                      <h4 className="mt-1 font-serif-jp text-base sm:text-lg font-bold text-ink dark:text-white group-hover:text-crimson dark:group-hover:text-saffron-light transition-colors">
                        {adv.name}
                      </h4>
                      {lang === "JP" && <p className="font-sans-jp text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{adv.jpName}</p>}

                      {/* Title */}
                      <p className="mt-1.5 font-inter text-xs font-semibold text-crimson dark:text-saffron leading-snug">
                        {adv.title}
                      </p>

                      {/* Desc */}
                      <p className="mt-2 font-inter text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                        {adv.desc}
                      </p>
                    </div>

                    <div>
                      {/* Tags */}
                      <div className="mt-3 flex flex-wrap items-center justify-center gap-1">
                        {adv.tags.map((tag, ti) => (
                          <span
                            key={ti}
                            className="rounded px-1.5 py-0.5 font-inter text-[9.5px] font-medium bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-600 dark:text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Connect */}
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10 flex justify-center">
                        <a
                          href={adv.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 px-3 py-1 font-inter text-[10.5px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:text-[#0A66C2] dark:hover:text-[#388bfd] transition-all"
                        >
                          <span className="flex h-3.5 w-3.5 items-center justify-center rounded bg-[#0A66C2] text-white text-[8.5px] font-black">
                            in
                          </span>
                          <span>CONNECT</span>
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          2. RESIDENT EXECUTIVE & OPERATIONS LEADERSHIP
         ════════════════════════════════════════════════════════════ */}
      <section className="py-8 sm:py-10 lg:py-12 bg-ivory dark:bg-black transition-colors duration-300">
        <div className="container-jg">
          <Reveal>
            <SectionHeading
              title={tx({ EN: "Resident Executive & Operations Team", JP: "J-Gate 現地運営ディレクター陣" })}
            />
          </Reveal>

          {/* Wing A: Resident Japan Desk */}
          <div className="mt-6 sm:mt-8">
            <div className="mb-4 flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <JapanFlag className="h-4 w-6 rounded-xs shrink-0 shadow-2xs" />
                <h3 className="font-serif-jp text-sm sm:text-base font-bold text-ink dark:text-white">
                  {tx({ EN: "Resident Japan Desk Leadership", JP: "日本人常駐ディレクター陣 (Japan Desk)" })}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {japanDesk.map((m, i) => (
                <Reveal key={m.id} delay={i * 100}>
                  <article className="group relative flex flex-col sm:flex-row items-center sm:items-start gap-5 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-black p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-crimson/50 dark:hover:border-rose-500/50 transition-all duration-300">
                    <div className="shrink-0 relative">
                      <div className="h-24 w-24 sm:h-26 sm:w-26 rounded-2xl overflow-hidden border-2 border-crimson/40 dark:border-rose-400/40 bg-slate-50 dark:bg-black shadow-md group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={m.image}
                          alt={m.name}
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                      <span className="absolute -bottom-2 -right-1 flex items-center gap-1 rounded-full bg-white dark:bg-black px-2 py-0.5 text-[9px] font-bold text-slate-800 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-white/20">
                        <JapanFlag className="h-3 w-4.5 rounded-xs" />
                        <span>JAPAN</span>
                      </span>
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <span className="font-inter text-[10.5px] font-extrabold uppercase tracking-widest text-crimson dark:text-rose-400">
                        {m.role}
                      </span>
                      <h4 className="font-serif-jp text-lg sm:text-xl font-bold text-ink dark:text-white mt-0.5">
                        {m.name} <span className="font-sans-jp text-sm font-normal text-slate-500 dark:text-slate-400">({m.jpName})</span>
                      </h4>
                      <p className="font-inter text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                        {m.subtitle}
                      </p>

                      <p className="mt-2 font-inter text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                        {m.desc}
                      </p>

                      {/* Language badges */}
                      <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-1">
                        {m.languages.map((l, li) => (
                          <span
                            key={li}
                            className={`rounded px-1.5 py-0.5 font-inter text-[9.5px] font-semibold ${
                              l.highlight
                                ? "bg-crimson/10 text-crimson dark:bg-rose-950/60 dark:text-rose-300 border border-crimson/20 dark:border-rose-400/30"
                                : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-white/10"
                            }`}
                          >
                            {tx(l)}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-center sm:justify-start gap-2">
                        {m.linkedin && (
                          <a
                            href={m.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-white/5 px-2.5 py-1 font-inter text-[10.5px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:border-[#0A66C2] hover:text-[#0A66C2] dark:hover:text-[#388bfd] transition-all"
                          >
                            <span className="flex h-3.5 w-3.5 items-center justify-center rounded bg-[#0A66C2] text-white text-[8.5px] font-black">
                              in
                            </span>
                            <span>CONNECT</span>
                          </a>
                        )}
                        <a
                          href={`mailto:${m.email}`}
                          className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-crimson/10 hover:text-crimson transition-all"
                          title={m.email}
                        >
                          <Mail className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Wing B: Hyderabad Operations */}
          <div className="mt-8 sm:mt-10">
            <div className="mb-4 flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <IndiaFlag className="h-4 w-6 rounded-xs shrink-0 shadow-2xs" />
                <h3 className="font-serif-jp text-sm sm:text-base font-bold text-ink dark:text-white">
                  {tx({ EN: "Hyderabad Operations & Concierge Infrastructure", JP: "ハイデラバード現地運営・ITサポート" })}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hyderabadOps.map((m, i) => (
                <Reveal key={m.id} delay={i * 100}>
                  <article className="group relative flex flex-col sm:flex-row items-center sm:items-start gap-5 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-black p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-saffron/60 dark:hover:border-saffron/60 transition-all duration-300">
                    <div className="shrink-0 relative">
                      <div className="h-24 w-24 sm:h-26 sm:w-26 rounded-2xl overflow-hidden border-2 border-slate-200/90 dark:border-white/20 bg-slate-50 dark:bg-black shadow-md group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={m.image}
                          alt={m.name}
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                      <span className="absolute -bottom-2 -right-1 flex items-center gap-1 rounded-full bg-white dark:bg-black px-2 py-0.5 text-[9px] font-bold text-slate-800 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-white/20">
                        <IndiaFlag className="h-3 w-4.5 rounded-xs" />
                        <span>INDIA</span>
                      </span>
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <span className="font-inter text-[10.5px] font-extrabold uppercase tracking-widest text-saffron-dark dark:text-saffron">
                        {m.role}
                      </span>
                      <h4 className="font-serif-jp text-lg sm:text-xl font-bold text-ink dark:text-white mt-0.5">
                        {m.name} <span className="font-sans-jp text-sm font-normal text-slate-500 dark:text-slate-400">({m.jpName})</span>
                      </h4>
                      <p className="font-inter text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                        {m.subtitle}
                      </p>

                      <p className="mt-2 font-inter text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                        {m.desc}
                      </p>

                      {/* Language badges */}
                      <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-1">
                        {m.languages.map((l, li) => (
                          <span
                            key={li}
                            className={`rounded px-1.5 py-0.5 font-inter text-[9.5px] font-semibold ${
                              l.highlight
                                ? "bg-saffron/10 text-saffron-dark dark:bg-amber-950/60 dark:text-amber-300 border border-saffron/20 dark:border-amber-400/30"
                                : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-white/10"
                            }`}
                          >
                            {tx(l)}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-center sm:justify-start gap-2">
                        {m.linkedin && (
                          <a
                            href={m.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-white/5 px-2.5 py-1 font-inter text-[10.5px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:border-[#0A66C2] hover:text-[#0A66C2] dark:hover:text-[#388bfd] transition-all"
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
                            className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-saffron/20 hover:text-saffron-dark transition-all"
                            title={m.phone}
                          >
                            <Phone className="h-3.5 w-3.5" />
                          </a>
                        )}
                        <a
                          href={`mailto:${m.email}`}
                          className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-saffron/20 hover:text-saffron-dark transition-all"
                          title={m.email}
                        >
                          <Mail className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Bilingual Concierge Reassurance Note */}
          <Reveal delay={200}>
            <div className="mt-6 sm:mt-7 max-w-2xl mx-auto">
              <div className="relative rounded-xl sm:rounded-2xl border border-saffron/50 dark:border-saffron/40 bg-amber-50/60 dark:bg-black p-3.5 sm:p-4 text-center shadow-xs">
                <div className="flex flex-wrap items-center justify-center gap-1.5 mb-2">
                  <span className="inline-block rounded-full bg-saffron/20 dark:bg-black border border-saffron/40 dark:border-amber-400/30 px-2 py-0.5 font-inter text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider text-saffron-dark dark:text-amber-300">
                    {tx({ EN: "BILINGUAL CONCIERGE SUPPORT", JP: "BILINGUAL CONCIERGE · バイリンガル対応" })}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-crimson/10 dark:bg-rose-950/60 border border-crimson/20 dark:border-rose-400/30 px-2 py-0.5 font-inter text-[9px] sm:text-[9.5px] font-bold text-crimson dark:text-rose-300">
                    <Sparkles className="h-2.5 w-2.5" />
                    <span>Dheeraj (Community Manager)</span>
                  </span>
                </div>

                <h4 className="font-serif-jp text-[14px] sm:text-[15px] font-bold text-ink dark:text-white leading-snug">
                  {tx({ EN: "Feel free to reach out to us anytime in English or Japanese.", JP: "なんでもお気軽にご相談ください。日本語でご対応致します。" })}
                </h4>

                <p className="mt-1.5 font-inter text-[11px] sm:text-[11.5px] leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
                  {tx({
                    EN: "Whether exploring office memberships, private suites, company incorporation, or business partnerships — our team provides dedicated support in Japanese and English.",
                    JP: "オフィス視察、現地法人設立、人材採用、市場調査など、経験豊富な現地スタッフが日本語・英語で迅速かつ丁寧に対応いたします。",
                  })}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          3. OUR PARTNERS — Infinite Side-Scrolling Company Marquee
         ════════════════════════════════════════════════════════════ */}
      <section className="py-6 sm:py-8 lg:py-10 relative overflow-hidden bg-ivory-warm dark:bg-black border-t border-slate-200/60 dark:border-white/10 transition-colors duration-300">
        <div className="container-jg mb-8 sm:mb-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Partner Network", JP: "提携エコシステム" })}</Eyebrow>
              <h2
                className="mt-3 font-serif-jp font-bold text-ink dark:text-white"
                style={{ fontSize: "clamp(1.875rem, 3.8vw, 2.75rem)" }}
              >
                {tx({ EN: "Our Partner Network", JP: "提携エコシステムネットワーク" })}
              </h2>
              <p
                className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-slate dark:text-slate-300 text-[13px] sm:text-[15px]"
              >
                {tx({
                  EN: "Government trade organizations, premier incubators, universities, and industry partners to help our members succeed.",
                  JP: "政府機関、アジア最大級のインキュベーション施設、トップ大学、そして先進テクノロジー企業との緊密な連携基盤。",
                })}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Dual Infinite Side-Scrolling Marquee Tracks with Edge Masking */}
        <LogoMarquee variant="light" />
      </section>
    </div>
  );
}
