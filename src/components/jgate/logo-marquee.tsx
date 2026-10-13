"use client";

import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

/* ============================================================
   LogoMarquee — infinite scrolling ecosystem partner logo wall
   Only verified partners from client brochure & official corridor ties
   ============================================================ */

type BilingualText = {
  EN: string;
  JP: string;
};

type Logo = {
  name: string;
  src: string;
  category: BilingualText;
  desc?: BilingualText;
};

// Row 1 — Innovation Hub, Academia, MoU, Deep-Tech & Communications (5 partners)
const ECOSYSTEM_ROW_1: Logo[] = [
  {
    name: "T-Hub",
    src: "/logos/thub.png",
    category: { EN: "INNOVATION HUB", JP: "イノベーション拠点" },
    desc: { EN: "World's Largest Innovation Center", JP: "世界最大級のイノベーションセンター" },
  },
  {
    name: "Woxsen University",
    src: "/logos/woxsen.png",
    category: { EN: "ACADEMIC PARTNER", JP: "学術提携パートナー" },
    desc: { EN: "Executive Talent & Research", JP: "高度人材育成＆先端研究" },
  },
  {
    name: "Genesys Info X",
    src: "/logos/genesys-info-x.png",
    category: { EN: "MoU PARTNER", JP: "MoU戦略提携パートナー" },
    desc: { EN: "Global Digital Solutions", JP: "グローバルデジタルソリューション" },
  },
  {
    name: "Kodryx.ai",
    src: "/logos/kodryx.png",
    category: { EN: "DATA INTELLIGENCE", JP: "データインテリジェンス" },
    desc: { EN: "Enterprise AI & Analytics", JP: "エンタープライズAI＆データ分析" },
  },
  {
    name: "Daakia",
    src: "/logos/daakia.png",
    category: { EN: "COMMUNICATIONS", JP: "コミュニケーション" },
    desc: { EN: "Bridging Distance with AI", JP: "AIで世界の距離をつなぐ" },
  },
];

// Row 2 — Tech Platforms, Media, Community, Youth Forum & Analytics (5 partners)
const ECOSYSTEM_ROW_2: Logo[] = [
  {
    name: "MXC",
    src: "/logos/mxc.png",
    category: { EN: "TECH PLATFORMS", JP: "テックプラットフォーム" },
    desc: { EN: "Next-Gen Software Solutions", JP: "次世代ソフトウェアソリューション" },
  },
  {
    name: "Fingerprint Films",
    src: "/logos/fingerprint-films.png",
    category: { EN: "CREATIVE STUDIO", JP: "クリエイティブスタジオ" },
    desc: { EN: "Brand Storytelling & Media", JP: "ブランドストーリー＆メディア制作" },
  },
  {
    name: "Hyderabad Anime Club",
    src: "/logos/hyderabad-anime-club.png",
    category: { EN: "CULTURAL COMMUNITY", JP: "日印カルチャーコミュニティ" },
    desc: { EN: "Cultural & Community Network", JP: "文化交流・コミュニティネットワーク" },
  },
  {
    name: "YANC",
    src: "/logos/yanc.png",
    category: { EN: "NETWORKING", JP: "ネットワーキング" },
    desc: { EN: "Young Minds Global Forum", JP: "次世代リーダー国際フォーラム" },
  },
  {
    name: "DMI",
    src: "/logos/dmi.png",
    category: { EN: "ANALYTICS", JP: "マーケット分析" },
    desc: { EN: "Market & Talent Intelligence", JP: "市場・人材インテリジェンス" },
  },
];

function PartnerCard({ logo, variant = "light" }: { logo: Logo; variant?: "light" | "dark" }) {
  const { tx } = useI18n();
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "group flex h-14 sm:h-20 w-44 sm:w-68 shrink-0 items-center gap-2.5 sm:gap-3.5 rounded-xl sm:rounded-2xl border p-2 sm:p-3.5 transition-all duration-300 hover:-translate-y-1",
        isDark
          ? "border-white/10 bg-white/[0.04] backdrop-blur-sm hover:border-saffron/40 hover:bg-white/[0.07] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
          : "border-slate-200/90 dark:border-white/10 bg-white dark:bg-black shadow-card dark:shadow-xl hover:border-crimson/40 dark:hover:border-rose-400/40 hover:shadow-xl"
      )}
    >
      <div
        className={cn(
          "flex h-10 w-13 sm:h-14 sm:w-22 shrink-0 items-center justify-center rounded-lg sm:rounded-xl p-1 sm:p-2.5 transition-transform duration-300 group-hover:scale-[1.03]",
          "border border-slate-200/80 bg-white shadow-xs"
        )}
      >
        {logo.src ? (
          <img
            src={logo.src}
            alt={`${logo.name} logo`}
            className="max-h-7 sm:max-h-10 max-w-[48px] sm:max-w-[78px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center px-1">
            <span className="font-serif-jp text-[10px] sm:text-[11.5px] font-extrabold tracking-tight text-slate-800 dark:text-white leading-tight">
              Genesys
            </span>
            <span className="font-inter text-[8px] sm:text-[9px] font-bold text-crimson dark:text-rose-400 tracking-wider uppercase">
              info X
            </span>
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <span
          className={cn(
            "block font-inter text-[11px] sm:text-[13px] font-bold truncate leading-tight transition-colors",
            isDark
              ? "text-white group-hover:text-saffron"
              : "text-ink dark:text-white group-hover:text-crimson dark:group-hover:text-rose-400"
          )}
        >
          {logo.name}
        </span>
        <span
          className={cn(
            "mt-0.5 block font-inter text-[7.5px] sm:text-[8.5px] font-bold uppercase tracking-wider truncate",
            isDark ? "text-saffron" : "text-crimson dark:text-rose-400"
          )}
        >
          {tx(logo.category)}
        </span>
        {logo.desc && (
          <p
            className={cn(
              "hidden sm:block mt-0.5 font-inter text-[10.5px] line-clamp-1",
              isDark ? "text-mist" : "text-slate-500 dark:text-slate-400"
            )}
          >
            {tx(logo.desc)}
          </p>
        )}
      </div>
    </div>
  );
}

export function LogoMarquee({ variant = "light" }: { variant?: "light" | "dark" }) {
  const row1 = [...ECOSYSTEM_ROW_1, ...ECOSYSTEM_ROW_1, ...ECOSYSTEM_ROW_1];
  const row2 = [...ECOSYSTEM_ROW_2, ...ECOSYSTEM_ROW_2, ...ECOSYSTEM_ROW_2];

  const maskStyle = {
    maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
    WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
  };

  return (
    <div className="space-y-2.5 sm:space-y-4">
      {/* Row 1 — Continuous Flow (Leftward) */}
      <div className="marquee-track relative overflow-hidden py-0.5 sm:py-1" style={maskStyle}>
        <div
          className="flex w-max gap-2.5 sm:gap-4 animate-marquee"
          style={{ animationDuration: "36s" }}
        >
          {row1.map((logo, i) => (
            <PartnerCard key={`eco1-${logo.name}-${i}`} logo={logo} variant={variant} />
          ))}
        </div>
      </div>

      {/* Row 2 — Continuous Flow (Rightward) */}
      <div className="marquee-track relative overflow-hidden py-0.5 sm:py-1" style={maskStyle}>
        <div
          className="flex w-max gap-2.5 sm:py-0 sm:gap-4 animate-marquee"
          style={{ animationDirection: "reverse", animationDuration: "40s" }}
        >
          {row2.map((logo, i) => (
            <PartnerCard key={`eco2-${logo.name}-${i}`} logo={logo} variant={variant} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Backward compatibility exports
export const STRATEGIC_LOGOS = ECOSYSTEM_ROW_1;
export const ECOSYSTEM_LOGOS = ECOSYSTEM_ROW_2;
export { ECOSYSTEM_ROW_1, ECOSYSTEM_ROW_2 };
