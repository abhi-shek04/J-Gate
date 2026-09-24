"use client";

import Link from "next/link";
import {
  ArrowRight,
  Users,
  Building2,
  Wifi,
  Mic,
  Scale,
  BarChart3,
  ArrowDown,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Handshake,
  Landmark,
  FileText,
  Globe2,
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
  Clock,
} from "lucide-react";
import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { useI18n } from "@/lib/i18n";
import {
  ToriiWatermark,
  JapanFlag,
  IndiaFlag,
} from "@/components/jgate/icons";
import { LogoMarquee } from "@/components/jgate/logo-marquee";
import { Photo } from "@/components/jgate/photo";
import { cn } from "@/lib/utils";
import { BilateralCorridorVisualizer } from "@/components/jgate/corridor-visualizer";
import { WorkspaceExplorer } from "@/components/jgate/workspace-explorer";

/* ============================================================
   J-Gate Home — Executive Corporate Homepage
   ============================================================ */

/* 14 subtle particles drifting upward — light-mode crimson/saffron tones */
function Particles() {
  const particles = Array.from({ length: 14 }).map((_, i) => ({
    left: `${(i * 53 + 7) % 100}%`,
    size: 1.5 + ((i * 7) % 4) * 0.5,
    delay: `${(i * 1.6) % 20}s`,
    duration: `${20 + ((i * 5) % 12)}s`,
    color: i % 3 === 0 ? "rgba(188, 26, 44, 0.18)" : i % 3 === 1 ? "rgba(232, 160, 26, 0.15)" : "rgba(74, 78, 105, 0.10)",
  }));
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            animation: `jg-drift ${p.duration} linear infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

/* Floating luxury glass location & operator badge (hero) */
function GlassBadge({
  icon: Icon,
  flag,
  imageSrc,
  primary,
  secondary,
  accent,
}: {
  icon?: React.ComponentType<{ className?: string }>;
  flag?: React.ReactNode;
  imageSrc?: string;
  primary: string;
  secondary: string;
  accent: "saffron" | "crimson" | "slate";
}) {
  const accentBorder =
    accent === "saffron"
      ? "hover:border-saffron/60 border-saffron/30 dark:border-saffron/20"
      : accent === "crimson"
      ? "hover:border-crimson/60 border-crimson/30 dark:border-rose-400/25"
      : "hover:border-slate-400/60 border-slate-200/90 dark:border-white/15";

  const primaryColor =
    accent === "saffron"
      ? "text-saffron-dark dark:text-saffron"
      : accent === "crimson"
      ? "text-crimson dark:text-rose-400"
      : "text-slate-800 dark:text-white";

  return (
    <div
      className={cn(
        "luxury-light-card card-sheen group relative flex items-center gap-3.5 rounded-2xl px-5 py-3 sm:px-6 sm:py-3.5 bg-white/95 dark:bg-[#101a2c]/95 backdrop-blur-xl border shadow-lg shadow-slate-200/50 dark:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-left",
        accentBorder
      )}
    >
      <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-2xs group-hover:scale-105 transition-transform duration-300">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Indobox"
            className="h-6 w-6 object-contain shrink-0"
          />
        ) : flag ? (
          <span className="shrink-0 scale-110">{flag}</span>
        ) : Icon ? (
          <Icon className="h-5 w-5 text-crimson dark:text-rose-400 shrink-0" />
        ) : null}
      </div>
      <div className="flex flex-col leading-tight min-w-0">
        <span className={cn("font-serif-jp text-[13.5px] sm:text-[14.5px] font-bold tracking-tight truncate group-hover:text-crimson dark:group-hover:text-rose-400 transition-colors", primaryColor)}>
          {primary}
        </span>
        <span className="mt-0.5 font-inter text-[11px] sm:text-[12px] font-medium text-slate-600 dark:text-slate-300 truncate">
          {secondary}
        </span>
      </div>
    </div>
  );
}

/* Workspace feature card with high-craft icon pod, numerical indexing & sheen */
function FeatureCard({
  icon: Icon,
  title,
  desc,
  delay,
  index,
}: {
  icon: typeof Building2;
  title: string;
  desc: string;
  delay: number;
  index: number;
}) {
  const indexFormatted = String(index + 1).padStart(2, "0");
  return (
    <Reveal delay={delay} variant="scale">
      <article className="luxury-light-card card-sheen smooth-lift group relative flex h-full flex-col justify-between rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 bg-white dark:bg-[#101a2c] border border-slate-200/90 dark:border-white/10 shadow-card dark:shadow-2xl hover:shadow-2xl hover:border-crimson/35 transition-all duration-300">
        {/* Top subtle hairline accent */}
        <span className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-crimson via-saffron to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <div>
          <div className="flex items-center justify-between">
            <div className="icon-pod h-10 w-10 sm:h-11 sm:w-11 shrink-0">
              <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5" strokeWidth={1.75} />
            </div>
            <span className="font-mono text-[11px] sm:text-[12px] font-bold text-slate-400 group-hover:text-crimson transition-colors px-2 py-0.5 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10">
              {indexFormatted}
            </span>
          </div>
          <h3 className="mt-3.5 sm:mt-4 font-serif-jp text-[15px] sm:text-[16px] font-bold leading-snug text-ink dark:text-white group-hover:text-crimson dark:group-hover:text-rose-400 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-[12.5px] sm:text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
            {desc}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

export default function HomePage() {
  const { t, tx } = useI18n();

  /* 3 Strategic Advantage Pillars — Simple, professional, grounded */
  const advantagePillars = [
    {
      num: "01",
      kanji: "基盤",
      title: tx({ EN: "Ready-to-Use Operational Infrastructure", JP: "即日稼働の事業基盤" }),
      body: tx({
        EN: "Dedicated office space at Cyber Gateway, Hyderabad. Move in with high-speed internet, meeting rooms, lockable storage, registered address, and 24/7 security access without upfront renovation costs.",
        JP: "Cyber Gateway（ハイデラバード）のオフィス環境を確保。高速光回線、会議室、施錠キャビネット、法人登記住所、24時間セキュリティを完備。",
      }),
    },
    {
      num: "02",
      kanji: "伴走",
      title: tx({ EN: "Resident Executive Japanese Advisory", JP: "現地常駐の日本人伴走体制" }),
      body: tx({
        EN: "Resident Japanese directors assist with everyday business questions, local partner introductions (accounting/legal), talent recruiting, and communication support in Japanese.",
        JP: "現地拠点に日本人ディレクターが常駐。日々の業務相談、現地会計・法務専門家の紹介、人材採用、商談サポートを日本語で対応。",
      }),
    },
    {
      num: "03",
      kanji: "共創",
      title: tx({ EN: "Direct Institutional & Tech Ecosystem", JP: "政府・主要機関直結のエコシステム" }),
      body: tx({
        EN: "Partnerships with Telangana State Government, T-Hub innovation hub, and premier tech universities provide direct access to verified partners and technical talent.",
        JP: "テランガナ州政府、イノベーション機関T-Hub、主要大学とのネットワークにより、信頼できる現地企業やIT人材へのアクセスを支援。",
      }),
    },
  ];

  /* 6 Turnkey Business Solutions — Clear, grounded, non-hyperbolic */
  const features = [
    {
      icon: FileText,
      title: tx({ EN: "Corporate Registration & MCA", JP: "法人設立登記・公式登録住所" }),
      desc: tx({
        EN: "Registered office address at Cyber Gateway, Hyderabad, with support for MCA incorporation, PAN/TAN, and GST registration.",
        JP: "Cyber Gatewayでの登記住所提供と、法人設立、PAN/TAN、GST登録手続きをサポート。",
      }),
    },
    {
      icon: ShieldCheck,
      title: tx({ EN: "Statutory Governance & Compliance", JP: "法務・法定ガバナンス支援" }),
      desc: tx({
        EN: "Guidance on resident director compliance, corporate secretarial processes, and annual statutory filings under Indian company law.",
        JP: "インド会社法に基づく居住取締役要件、会社秘書役監査、ROC年次報告手続きを支援。",
      }),
    },
    {
      icon: Landmark,
      title: tx({ EN: "Corporate Banking & Remittances", JP: "法人銀行口座・国際送金支援" }),
      desc: tx({
        EN: "Assistance with corporate bank account opening with leading banks, FDI reporting, and foreign remittances.",
        JP: "主要銀行での法人口座開設、外資規制（FDI）対応、円滑な国際送金手続きをサポート。",
      }),
    },
    {
      icon: Sparkles,
      title: tx({ EN: "On-Site Japanese Advisory", JP: "常駐日本人による日常相談" }),
      desc: tx({
        EN: "Resident Japanese team in Hyderabad available daily for business queries, partner contracts, and meeting support in Japanese.",
        JP: "現地常駐の日本人スタッフが、日々の業務相談や現地パートナーとのやり取りを日本語でサポート。",
      }),
    },
    {
      icon: Users,
      title: tx({ EN: "Curated Tech Talent Pipelines", JP: "高度ITエンジニア・バイリンガル採用" }),
      desc: tx({
        EN: "Hiring support for skilled software engineers and bilingual professionals through local tech institutions and university networks.",
        JP: "提携工科大学や研修機関を通じて、スキルを持つエンジニアやバイリンガル人材の採用を支援。",
      }),
    },
    {
      icon: Handshake,
      title: tx({ EN: "Telangana State & T-Hub Ecosystem Matching", JP: "テランガナ州政府・T-Hubとの連携" }),
      desc: tx({
        EN: "Connecting your business with Telangana State Government initiatives, T-Hub programs, and vetted local partners.",
        JP: "テランガナ州政府の支援制度やT-Hub、信頼できる現地提携先の紹介・マッチングを実施。",
      }),
    },
  ];

  const locationAdvantages = [
    {
      num: "01",
      title: {
        EN: "Asia's Leading Tech & Innovation District",
        JP: "アジア屈指のハイテク・イノベーション集積地",
      },
      desc: {
        EN: "Cyber Gateway in Hitech City is located near major global technology firms, offering a recognized business address in Hyderabad.",
        JP: "HITEC CityのCyber Gateway周辺には主要なグローバルIT企業が集結し、認知度の高いビジネス拠点を確保できます。",
      },
    },
    {
      num: "02",
      title: {
        EN: "Strategic Cost & Quality-of-Life Advantages",
        JP: "優れたコスト効率と快適な事業・生活環境",
      },
      desc: {
        EN: "Competitive office overheads compared to Mumbai or Bengaluru, paired with direct metro connectivity and established commercial infrastructure.",
        JP: "ムンバイやバンガロールと比較してオフィス運営コストを抑えられ、最寄りメトロ駅徒歩2分の利便性を備えています。",
      },
    },
    {
      num: "03",
      title: {
        EN: "Proactive Telangana State Government Policy",
        JP: "テランガナ州政府の手厚い外国企業優遇策",
      },
      desc: {
        EN: "Telangana offers streamlined business approval processes, proactive IT industry policies, and bilateral investment support.",
        JP: "テランガナ州は手続きの迅速化やIT支援策が整っており、外国企業の進出を積極的に支援しています。",
      },
    },
    {
      num: "04",
      title: {
        EN: "Abundant Top-Tier Engineering Talent",
        JP: "名門工科大学が輩出する豊富なトップIT人材",
      },
      desc: {
        EN: "Direct access to engineering graduates and experienced software developers from premier institutes across Hyderabad.",
        JP: "IITハイデラバードをはじめとする名門大学から、毎年多くの工学・IT系人材が輩出されています。",
      },
    },
  ];

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          1. HERO — Ultra-Luxurious Japanese-Modern Executive Launchpad
         ════════════════════════════════════════════════════════════ */}
      {/* ════════════════════════════════════════════════════════════
          1. HERO — Ultra-Luxurious Japanese-Modern Executive Launchpad
         ════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[80vh] sm:min-h-[85vh] items-center justify-center overflow-hidden bg-slate-50/70 dark:bg-[#070c16] py-14 sm:py-20 border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
        {/* Ambient warm layered glows — Clean Institutional Light & Dark */}
        <div
          className="absolute inset-0 dark:hidden pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(188,26,44,0.035) 0%, transparent 65%), radial-gradient(ellipse at 80% 80%, rgba(232,160,26,0.025) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 hidden dark:block pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, rgba(225,29,72,0.18) 0%, transparent 60%), radial-gradient(ellipse at 85% 45%, rgba(245,158,11,0.06) 0%, transparent 50%)",
          }}
        />

        {/* Subtle asanoha texture overlay */}
        <div className="absolute inset-0 pattern-asanoha opacity-[0.025] dark:pattern-asanoha-dark dark:opacity-20 pointer-events-none" />
        <ToriiWatermark
          className="torii-watermark"
          style={{ width: "70vw", maxWidth: "780px", right: "0", top: "8%", opacity: 0.025 }}
        />
        <Particles />

        {/* Skyline silhouette — clean subtle neutral ambient */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-[26%] w-full opacity-25 dark:opacity-15">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="xMidYMax slice" className="h-full w-full" aria-hidden>
            <g className="fill-slate-900/[0.04] dark:fill-white/[0.04]">
              <rect x="0" y="160" width="80" height="40" /><rect x="80" y="135" width="60" height="65" />
              <rect x="150" y="40" width="64" height="160" /><rect x="214" y="90" width="44" height="110" />
              <rect x="258" y="135" width="70" height="65" /><rect x="340" y="130" width="120" height="70" />
              <rect x="470" y="110" width="52" height="90" /><rect x="522" y="60" width="58" height="140" />
              <rect x="580" y="135" width="48" height="65" /><rect x="628" y="20" width="70" height="180" />
              <rect x="698" y="95" width="50" height="105" /><rect x="748" y="135" width="64" height="65" />
              <rect x="820" y="120" width="80" height="80" /><rect x="910" y="80" width="56" height="120" />
              <rect x="966" y="40" width="60" height="160" /><rect x="1026" y="120" width="50" height="80" />
              <rect x="1076" y="70" width="64" height="130" /><rect x="1140" y="130" width="56" height="70" />
              <rect x="1196" y="50" width="58" height="150" /><rect x="1254" y="115" width="52" height="85" />
              <rect x="1306" y="90" width="60" height="110" /><rect x="1366" y="140" width="74" height="60" />
            </g>
          </svg>
        </div>
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-[25%] w-full bg-gradient-to-b from-transparent via-slate-50/60 to-slate-50 dark:via-[#070c16]/60 dark:to-[#070c16]"
        />

        <div className="container-jg relative z-10 pt-4 pb-12 sm:pt-8 sm:pb-16 text-center max-w-5xl mx-auto">
          {/* 1. Pre-title: Japan × India Talent & Business Bridge */}
          <Reveal>
            <div className="flex items-center justify-center gap-2.5 font-inter text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-[0.22em] text-[#d60000]">
              <span className="hidden sm:inline-block h-px w-8 bg-[#d60000]/30" />
              <span>Japan × India Talent &amp; Business Bridge</span>
              <span className="hidden sm:inline-block h-px w-8 bg-[#d60000]/30" />
            </div>
          </Reveal>

          {/* 2. Main H1 Title: Birth of a Dedicated Working Hub for Japanese Companies */}
          <Reveal delay={80}>
            <h1
              className="mx-auto mt-4 max-w-4xl font-serif-jp font-extrabold leading-[1.15] text-ink dark:text-white tracking-tight"
              style={{ fontSize: "clamp(2.1rem, 4.8vw, 3.4rem)" }}
            >
              Birth of a Dedicated
              <br />
              <span className="text-[#d60000]">Working Hub for Japanese Companies</span>
            </h1>
          </Reveal>

          {/* 3. Japanese Tagline: 「日本企業専用のワーキングハブ誕生」 */}
          <Reveal delay={140}>
            <div className="mt-4 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#d60000]/[0.08] dark:bg-[#d60000]/20 border border-[#d60000]/25 dark:border-[#d60000]/40 px-4 py-1.5 font-serif-jp text-[13.5px] sm:text-[15px] font-bold text-[#d60000] dark:text-[#ff4d4d] tracking-wide shadow-2xs backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-saffron" />
                <span>「日本企業専用のワーキングハブ誕生」</span>
              </span>
            </div>
          </Reveal>

          {/* 4. Lead Description Paragraph */}
          <Reveal delay={200}>
            <p
              className="mx-auto mt-4 sm:mt-5 max-w-[680px] font-inter font-normal leading-relaxed text-slate-600 dark:text-slate-300 text-[14.5px] sm:text-[15.5px]"
            >
              {tx({
                EN: "A dedicated co-working space at Cyber Gateway, Hyderabad for Japanese businesses. Dedicated desks, private cabins, resident Japan Desk support, and full office infrastructure to start operations smoothly in India.",
                JP: "ハイデラバード・Cyber Gatewayに誕生した日本企業専用コワーキングスペース。専用デスク、個室キャビン、常駐ジャパンデスク、充実したオフィスインフラで、インド事業の円滑な立ち上げを包括支援。",
              })}
            </p>
          </Reveal>

          {/* 5. The 2 Floating Glass Badges: Telangana State & Indobox */}
          <Reveal delay={260}>
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <GlassBadge
                flag={<IndiaFlag className="h-4 w-6 rounded-[2px] shadow-2xs" />}
                primary={tx({ EN: "Telangana State", JP: "テランガナ州" })}
                secondary={tx({ EN: "Hyderabad · Cyber Gateway", JP: "ハイデラバード・サイバーゲートウェイ" })}
                accent="saffron"
              />
              <GlassBadge
                imageSrc="/logos/indobox-icon.png"
                primary={tx({ EN: "Indobox India Pvt. Ltd.", JP: "Indobox India Pvt. Ltd." })}
                secondary={tx({ EN: "Operator", JP: "運営" })}
                accent="slate"
              />
            </div>
          </Reveal>

          {/* 6. Primary Action Button: Discover J-Gate */}
          <Reveal delay={320}>
            <div className="mt-7 sm:mt-9 flex items-center justify-center">
              <Link
                href="/why-jgate"
                className="btn-shine group inline-flex items-center justify-center gap-2.5 rounded-xl bg-crimson hover:bg-crimson-deep px-7 py-3.5 sm:px-8 sm:py-4 font-inter text-[14px] sm:text-[15px] font-bold text-white shadow-lg shadow-crimson/20 hover:shadow-xl hover:shadow-crimson/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>{tx({ EN: "Discover J-Gate", JP: "J-Gate を詳しく見る" })}</span>
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
          <span
            className="font-inter text-[9.5px] sm:text-[10px] font-semibold uppercase text-slate dark:text-slate-400"
            style={{ letterSpacing: "0.2em" }}
          >
            {t("hero.scroll")}
          </span>
          <div className="relative h-6 w-px overflow-hidden bg-slate-300 dark:bg-white/20">
            <span className="animate-scroll-line absolute inset-0 block bg-crimson dark:bg-rose-400" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          LIVE BILATERAL CORRIDOR STATUS — Tokyo ↔ Hyderabad (Handshake Bg)
         ════════════════════════════════════════════════════════════ */}
      <BilateralCorridorVisualizer />

      {/* ════════════════════════════════════════════════════════════
          4. CORE BUSINESS SOLUTIONS — 6 Enterprise Capabilities
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory dark:bg-[#080d17] border-t border-slate-200/60 dark:border-white/10">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Core Business Capabilities", JP: "包括的な進出支援サービス" })}</Eyebrow>
              <h2
                className="mt-2 font-serif-jp font-bold leading-[1.18] text-ink dark:text-white"
                style={{ fontSize: "clamp(1.625rem, 3vw, 2.25rem)" }}
              >
                {tx({
                  EN: "Everything Required to Establish & Scale in India",
                  JP: "インド進出の立ち上げと成長を支える6つの支援機能",
                })}
              </h2>
              <p
                className="mx-auto mt-2 max-w-2xl font-inter leading-relaxed text-slate dark:text-slate-300"
                style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)" }}
              >
                {tx({
                  EN: "Comprehensive operational support including company registration, statutory compliance, corporate banking, local hiring, and institutional connections in Hyderabad.",
                  JP: "デスクの提供に加え、法人設立登記、コンプライアンス管理、法人口座開設、現地採用、公的機関との連携まで包括的にサポートします。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <FeatureCard
                key={i}
                icon={f.icon}
                title={f.title}
                desc={f.desc}
                delay={(i % 3) * 100}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          5. INTERACTIVE WORKSPACE BENTO TOUR & SPEC EXPLORER
         ════════════════════════════════════════════════════════════ */}
      <WorkspaceExplorer />

      {/* ════════════════════════════════════════════════════════════
          6. STRATEGIC ADVANTAGE — 3 Pillars of the J-Gate Advantage
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory dark:bg-[#080d17] border-t border-slate-200/60 dark:border-white/10">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "The J-Gate Enterprise Advantage", JP: "J-Gateが選ばれる3つの強み" })}</Eyebrow>
              <h2
                className="mt-3 font-serif-jp font-bold leading-[1.15] text-ink dark:text-white"
                style={{ fontSize: "clamp(1.625rem, 3vw, 2.25rem)" }}
              >
                {tx({
                  EN: "Engineered Exclusively for Japanese Business",
                  JP: "日本企業のインド進出に特化した運営体制",
                })}
              </h2>
              <p
                className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-slate dark:text-slate-300"
                style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)" }}
              >
                {tx({
                  EN: "Ready workspace infrastructure, on-site Japanese advisory, and direct connections to Hyderabad's business ecosystem.",
                  JP: "即日稼働のオフィス設備、現地常駐の日本人サポート、そして現地のビジネスネットワークを通じて円滑な立ち上げを支援します。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {advantagePillars.map((p, i) => (
              <Reveal key={p.num} delay={i * 120} variant="scale">
                <article className="luxury-light-card card-sheen gold-hairline group relative h-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-4 sm:p-6 lg:p-7 shadow-card dark:shadow-2xl hover:shadow-2xl hover:border-crimson/35 transition-all duration-300">
                  <span
                    className="pointer-events-none absolute -top-3 sm:-top-5 right-3 sm:right-4 font-serif-jp font-black leading-none text-slate-100/80 dark:text-white/[0.04] text-[52px] sm:text-[72px] lg:text-[88px] transition-all duration-500 group-hover:scale-110 group-hover:text-crimson/10"
                    aria-hidden
                  >
                    {p.num}
                  </span>
                  <div className="relative z-10">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full bg-crimson/[0.08] dark:bg-rose-950/50 border border-crimson/25 dark:border-rose-400/30 px-2.5 py-0.5 sm:px-3 sm:py-1 font-serif-jp text-[11.5px] sm:text-[12.5px] font-bold text-crimson dark:text-rose-400 tracking-wider shadow-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-crimson dark:bg-rose-400" />
                      {p.kanji}
                    </span>
                    <h3
                      className="mt-3 sm:mt-4 font-serif-jp font-bold leading-tight text-ink dark:text-white group-hover:text-crimson dark:group-hover:text-rose-400 transition-colors"
                      style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)" }}
                    >
                      {p.title}
                    </h3>
                    <div className="mt-2.5 sm:mt-3.5 h-[2px] w-12 sm:w-14 bg-gradient-to-r from-crimson to-saffron rounded-full" />
                    <p
                      className="mt-2.5 sm:mt-4 font-inter leading-relaxed text-slate-600 dark:text-slate-300 text-[12.5px] sm:text-[14px]"
                    >
                      {p.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          6. HYDERABAD LOCATION — 2-Column Strategic Map & Details
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory-warm dark:bg-[#0b111e] border-t border-slate-200/70 dark:border-white/10">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Strategic Hub Location", JP: "戦略的拠点立地" })}</Eyebrow>
              <h2
                className="mt-2 font-serif-jp font-bold leading-[1.18] text-ink dark:text-white"
                style={{ fontSize: "clamp(1.625rem, 3vw, 2.25rem)" }}
              >
                {tx({
                  EN: "Why Hyderabad: India's Premier Innovation Capital",
                  JP: "なぜハイデラバードなのか：インド最大のIT・イノベーション拠点",
                })}
              </h2>
              <p
                className="mx-auto mt-2 max-w-2xl font-inter leading-relaxed text-slate dark:text-slate-300"
                style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)" }}
              >
                {tx({
                  EN: "Located in Hitech City, Cyber Gateway provides practical access to tech talent, office infrastructure, and bilateral business networks.",
                  JP: "ハイデラバードのIT集積地に位置するCyber GatewayのJ-Gate。技術人材、オフィス環境、日印のビジネスネットワークへのアクセスを提供します。",
                })}
              </p>
            </div>
          </Reveal>

          {/* 2-Column Grid: Map on Left + Details on Right */}
          <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            {/* Left: India Map Graphic with Highlight Badge */}
            <div className="lg:col-span-5">
              <Reveal variant="scale">
                <div className="luxury-light-card card-sheen gold-hairline group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-4 sm:p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-crimson/30">
                  {/* Floating Live Badge with radar beacon */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-crimson/10 dark:bg-rose-950/50 border border-crimson/25 dark:border-rose-400/30 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10.5px] sm:text-[11px] font-bold text-crimson dark:text-rose-400 uppercase tracking-wider">
                      <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      {tx({ EN: "Flagship Hub", JP: "旗艦拠点" })}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-success px-2.5 py-0.5 sm:px-3 sm:py-1 font-inter text-[10px] sm:text-[10.5px] font-bold uppercase text-white shadow-sm">
                      <span className="radar-beacon h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white text-emerald-300" />
                      {tx({ EN: "LIVE · Cyber Gateway", JP: "稼働中 · Cyber Gateway" })}
                    </span>
                  </div>

                  {/* The Map Graphic */}
                  <div className="relative flex items-center justify-center p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50/80 dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-inner">
                    <img
                      src="/india-map-hyderabad.png"
                      alt="Map of India highlighting Hyderabad location along with New Delhi, Mumbai, Bengaluru, Chennai, and Ahmedabad"
                      className="w-full max-h-[300px] sm:max-h-[360px] object-contain transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Connectivity Quick Strip */}
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-100 dark:border-white/10 grid grid-cols-3 gap-1.5 sm:gap-2.5 text-center">
                    <div className="bg-slate-50 dark:bg-white/5 rounded-lg sm:rounded-xl p-1.5 sm:p-2.5 border border-slate-200/60 dark:border-white/10 shadow-sm transition-transform duration-200 hover:scale-105">
                      <span className="block font-inter text-[8.5px] sm:text-[9.5px] font-semibold text-slate-400 uppercase tracking-wider">
                        {tx({ EN: "Metro", JP: "メトロ" })}
                      </span>
                      <span className="block font-inter text-[10.5px] sm:text-[12px] font-bold text-ink dark:text-white truncate mt-0.5">
                        {tx({ EN: "2 Min Walk", JP: "徒歩2分" })}
                      </span>
                    </div>
                    <div className="bg-slate-50 dark:bg-white/5 rounded-lg sm:rounded-xl p-1.5 sm:p-2.5 border border-slate-200/60 dark:border-white/10 shadow-sm transition-transform duration-200 hover:scale-105">
                      <span className="block font-inter text-[8.5px] sm:text-[9.5px] font-semibold text-slate-400 uppercase tracking-wider">
                        {tx({ EN: "Airport", JP: "空港" })}
                      </span>
                      <span className="block font-inter text-[10.5px] sm:text-[12px] font-bold text-ink dark:text-white truncate mt-0.5">
                        {tx({ EN: "35 Min Drive", JP: "車で35分" })}
                      </span>
                    </div>
                    <div className="bg-slate-50 dark:bg-white/5 rounded-lg sm:rounded-xl p-1.5 sm:p-2.5 border border-slate-200/60 dark:border-white/10 shadow-sm transition-transform duration-200 hover:scale-105">
                      <span className="block font-inter text-[8.5px] sm:text-[9.5px] font-semibold text-slate-400 uppercase tracking-wider">
                        {tx({ EN: "District", JP: "地区" })}
                      </span>
                      <span className="block font-inter text-[10.5px] sm:text-[12px] font-bold text-crimson dark:text-rose-400 truncate mt-0.5">
                        {tx({ EN: "Hitech City", JP: "IT特区" })}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Strategic Location Value Pillars */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <Reveal delay={80}>
                <div>
                  <span className="font-inter text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-crimson dark:text-rose-400">
                    {tx({ EN: "Cyber Gateway, Phase 2, Hitech City", JP: "サイバーゲートウェイ Phase 2・ハイテックシティ" })}
                  </span>
                  <h3 className="mt-1 sm:mt-1.5 font-serif-jp text-xl sm:text-2xl lg:text-3xl font-bold text-ink dark:text-white leading-tight">
                    {tx({
                      EN: "At the Center of India's Silicon Corridor",
                      JP: "インドのシリコン回廊の中心に位置する拠点",
                    })}
                  </h3>
                  <p className="mt-2 sm:mt-2.5 font-inter text-[13px] sm:text-[13.5px] leading-relaxed text-slate dark:text-slate-300">
                    {tx({
                      EN: "Hyderabad is a major IT and business hub with modern commercial infrastructure and active government support. J-Gate at Cyber Gateway provides Japanese businesses with a fully equipped workspace and local advisory to operate with confidence.",
                      JP: "ハイデラバードは、整った都市インフラ、比較的抑えられた運営コスト、手厚い州政府支援が揃ったインド有数のIT都市です。Cyber GatewayのJ-Gateは、日本企業が安心して事業を進められるオフィス環境と伴走支援を提供します。",
                    })}
                  </p>
                </div>
              </Reveal>

              {/* 4 Feature Checkpoints with Numbered Luxury Pods */}
              <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
                {locationAdvantages.map((item, idx) => (
                  <Reveal key={idx} delay={100 + idx * 40}>
                    <div className="group flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-white dark:bg-[#101a2c] p-3 sm:p-4 border border-slate-200/90 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-md hover:border-crimson/35 smooth-lift">
                      <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-crimson/10 dark:bg-rose-950/50 border border-crimson/25 dark:border-rose-400/30 text-crimson dark:text-rose-400 font-mono font-bold text-[11px] sm:text-[12px] group-hover:bg-crimson group-hover:text-white transition-colors mt-0.5">
                        {item.num}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif-jp text-[13.5px] sm:text-[14.5px] font-bold text-ink dark:text-white group-hover:text-crimson dark:group-hover:text-rose-400 transition-colors">
                          {tx(item.title)}
                        </h4>
                        <p className="mt-0.5 font-inter text-[12px] sm:text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                          {tx(item.desc)}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Action Buttons */}
              <Reveal delay={280}>
                <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <Link
                    href="/blogs"
                    className="btn-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-crimson to-crimson-deep px-4 py-2.5 sm:px-6 sm:py-3.5 font-inter text-[12.5px] sm:text-[13.5px] font-semibold text-white shadow-lg shadow-crimson/25 hover:-translate-y-0.5 hover:shadow-crimson/40 transition-all"
                  >
                    {tx({ EN: "View Office Gallery & Photos", JP: "オフィス施設写真を見る" })}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-[#101a2c] px-4 py-2.5 sm:px-6 sm:py-3.5 font-inter text-[12.5px] sm:text-[13.5px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/30 transition-all shadow-sm"
                  >
                    {tx({ EN: "View Membership Plans", JP: "料金プランを見る" })}
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          7. ECOSYSTEM MARQUEE — Bilateral Innovation Network
         ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-slate-200/60 dark:border-white/10 bg-ivory dark:bg-[#080d17] py-10 sm:py-16">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto mb-6 sm:mb-10 max-w-3xl text-center">
              <Eyebrow>{t("home.logos.eyebrow")}</Eyebrow>
              <h2
                className="mt-2.5 sm:mt-3 font-serif-jp font-bold text-ink dark:text-white"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
              >
                {t("home.logos.title")}
              </h2>
              <p
                className="mx-auto mt-2 sm:mt-3 max-w-2xl font-inter leading-relaxed text-slate dark:text-slate-300 text-[13px] sm:text-[15px]"
              >
                {t("home.logos.subtitle")}
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <LogoMarquee variant="light" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
