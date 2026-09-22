"use client";

import { Reveal, Eyebrow } from "./shared";
import { useI18n } from "@/lib/i18n";
import { LinkedInIcon } from "./icons";
import { cn } from "@/lib/utils";

const CORE_LEADERSHIP = [
  {
    name: "Daisuke Tanji",
    jpName: "丹治 大佑",
    role: "DIRECTOR",
    subtitle: "Bilateral Business Facilitator | Indobox Inc.",
    image: "/team/tanji.png",
    desc: "Directs J-Gate's bilateral bridge, connecting Indian engineering powerhouses with Japanese corporate headquarters.",
    tags: ["Business Strategy", "Career Placement", "Bilateral Relations"],
    linkedin: "https://www.linkedin.com/in/daisuke-tanji-7749171b/",
  },
  {
    name: "Mariko Hanaoka",
    jpName: "花岡 真理子",
    role: "DIRECTOR",
    subtitle: "Native Educator | 9+ Years Exp. in India",
    image: "/team/hanaoka.png",
    desc: "Native Japanese educator leading business Japanese, JLPT/NAT curriculum, and cultural orientation programs.",
    tags: ["Curriculum Design", "Pedagogy", "Cultural Orientation"],
    linkedin: "https://www.linkedin.com/company/indobox/",
  },
  {
    name: "Dheeraj Yanneti",
    jpName: "ディラジ・ヤンネティ",
    role: "COMMUNITY MANAGER",
    subtitle: "Operations Head | Admissions Specialist",
    image: "/team/dheeraj.png",
    desc: "Manages day-to-day workspace operations, member admissions, bilingual concierge services, and enterprise client relations.",
    tags: ["Operations", "Admissions", "Client Relations"],
    linkedin: "https://www.linkedin.com/in/dheeraj-yanneti/",
  },
  {
    name: "Abhishek Buduru",
    jpName: "アブシェーク・ブドゥル",
    role: "TECH OPERATIONS",
    subtitle: "Smart Access & IT Infrastructure Specialist",
    image: "/team/abhishek.png",
    desc: "Oversees smart access infrastructure, IT facility support, and technology integrations across the Hyderabad hub.",
    tags: ["Tech Support", "IT Infrastructure", "Smart Access"],
    linkedin: "https://www.linkedin.com/in/abhishek-buduru/",
  },
];

const ADVISORS = [
  {
    name: "Srinivas Rao Mahankali",
    jpName: "スリニヴァス・ラオ・マハンカリ",
    role: "SENIOR ADVISOR",
    subtitle: "Former CEO, T-Hub | IT Enterprise Leader",
    image: "/advisory/mahankali.png",
    desc: "Spearheaded the world's largest startup incubator. Decades of enterprise leadership across global IT corridors and startup innovation.",
    tags: ["Startup Incubation", "Enterprise IT", "Global Corridors"],
    linkedin: "https://www.linkedin.com/in/mahankali-srinivas-rao-msr-3112662/",
  },
  {
    name: "Sujit Jagirdar",
    jpName: "スジット・ジャギルダー",
    role: "SENIOR ADVISOR",
    subtitle: "Former CIO, T-Hub | Innovation Ecosystem Strategist",
    image: "/advisory/jagirdar.png",
    desc: "Key strategist behind Telangana's innovation architecture and cross-border incubation alliances between India and global markets.",
    tags: ["Innovation Strategy", "Cross-Border Alliances", "Ecosystem Architecture"],
    linkedin: "https://www.linkedin.com/in/sujitjagirdar/",
  },
  {
    name: "Dr. Uday B. Desai",
    jpName: "ウダイ・B・デサイ博士",
    role: "SENIOR ADVISOR",
    subtitle: "Founding Director, IIT Hyderabad | Academic Leader",
    image: "/advisory/desai.png",
    desc: "Pioneered Japan-India academic collaboration and deep-tech talent pipelines across semiconductor, wireless communications, and AI.",
    tags: ["Academic Leadership", "Semiconductor & AI", "Deep-Tech Pipelines"],
    linkedin: "https://www.linkedin.com/in/uday-desai-4752b04/",
  },
  {
    name: "Dr. Viinay Sarikonda",
    jpName: "ヴィーナイ・サリコンダ博士",
    role: "SENIOR ADVISOR & PARTNER",
    subtitle: "CEO, Genesys Info X | Bilateral Enterprise Strategist",
    image: "/advisory/sarikonda.png",
    desc: "Bilateral enterprise strategist driving digital transformation, MoU partnerships, and market entry for Japanese multinationals.",
    tags: ["Digital Transformation", "MoU Partnerships", "Market Entry"],
    linkedin: "https://www.linkedin.com/in/dr-viinay-sarikonda-5b23261a/",
  },
];

function TeamCard({
  name,
  jpName,
  role,
  subtitle,
  image,
  desc,
  tags,
  linkedin,
}: {
  name: string;
  jpName: string;
  role: string;
  subtitle: string;
  image: string;
  desc: string;
  tags: string[];
  linkedin: string;
}) {
  return (
    <article className="luxury-light-card card-sheen group relative flex h-full flex-col justify-between items-center rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-6 sm:p-7 text-center shadow-card hover:shadow-2xl hover:border-crimson/40 dark:hover:border-crimson/50 transition-all duration-300">
      {/* Circular Avatar */}
      <div className="relative">
        <div className="h-28 w-28 rounded-full overflow-hidden border-2 border-slate-200 dark:border-white/20 bg-slate-50 dark:bg-white/5 shadow-md mx-auto transition-transform duration-300 group-hover:scale-105 group-hover:border-crimson/60">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>

      {/* Role Eyebrow */}
      <span className="mt-4 font-inter text-[11px] font-bold uppercase tracking-widest text-crimson dark:text-rose-400">
        {role}
      </span>

      {/* Name & JP Name */}
      <h3 className="mt-1 font-serif-jp text-[18px] sm:text-[19px] font-bold text-ink dark:text-white leading-tight group-hover:text-crimson dark:group-hover:text-rose-400 transition-colors">
        {name}
      </h3>
      <p className="mt-0.5 font-sans-jp text-[11.5px] text-slate-500 dark:text-slate-400">
        {jpName}
      </p>

      {/* Subtitle / Headline with Pipe Dividers */}
      <p className="mt-2 font-inter text-[12px] sm:text-[12.5px] font-semibold text-slate-800 dark:text-slate-200 leading-snug">
        {subtitle}
      </p>

      {/* Short Bio */}
      <p className="mt-2.5 font-inter text-[12px] sm:text-[12.5px] leading-relaxed text-slate-600 dark:text-slate-300 flex-1">
        {desc}
      </p>

      {/* Skill / Domain Pill Tags */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 w-full">
        {tags.map((tag, ti) => (
          <span
            key={ti}
            className="rounded px-2.5 py-1 font-inter text-[10px] sm:text-[10.5px] font-semibold bg-slate-100 dark:bg-white/5 border border-slate-200/70 dark:border-white/10 text-slate-600 dark:text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom Action: in CONNECT */}
      <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-white/10 w-full flex items-center justify-center">
        <a
          href={linkedin || "#"}
          target={linkedin ? "_blank" : undefined}
          rel={linkedin ? "noopener noreferrer" : undefined}
          onClick={linkedin ? undefined : (e) => e.preventDefault()}
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200/80 dark:border-white/15 bg-slate-50 dark:bg-white/5 px-3.5 py-1.5 font-inter text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] dark:hover:text-[#388bfd] transition-all shadow-2xs"
        >
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded bg-[#0A66C2] text-white text-[8.5px] font-black">
            in
          </span>
          <span>CONNECT</span>
        </a>
      </div>
    </article>
  );
}

export function Team() {
  const { tx } = useI18n();

  return (
    <section id="team" className="section-pad bg-ivory-warm dark:bg-[#0c1424]">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>{tx({ EN: "Leadership & Advisory", JP: "リーダーシップ＆諮問委員会" })}</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink dark:text-white"
              style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
            >
              {tx({ EN: "The People Behind J-Gate", JP: "J-Gateを牽引するリーダー陣" })}
            </h2>
            <p
              className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate dark:text-slate-300"
              style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
            >
              {tx({
                EN: "Distinguished directors, seasoned corporate advisors, and bilingual specialists connecting the Japan-India innovation corridor.",
                JP: "日印イノベーション回廊を繋ぐ、豊富な経験を持つ役員陣・顧問団・バイリンガル専門家。",
              })}
            </p>
          </div>
        </Reveal>

        {/* Section 1: Core Operations & Organizing Team */}
        <div className="mt-12">
          <Reveal>
            <h3 className="mb-6 text-center font-serif-jp text-xl sm:text-2xl font-bold text-ink dark:text-white">
              {tx({ EN: "Executive Leadership & Operations", JP: "経営陣・運営体制" })}
            </h3>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_LEADERSHIP.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <TeamCard {...m} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Section 2: Advisory Council */}
        <div className="mt-16">
          <Reveal>
            <h3 className="mb-6 text-center font-serif-jp text-xl sm:text-2xl font-bold text-ink dark:text-white">
              {tx({ EN: "Strategic Advisory Council", JP: "戦略的諮問委員会" })}
            </h3>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ADVISORS.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <TeamCard {...m} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
