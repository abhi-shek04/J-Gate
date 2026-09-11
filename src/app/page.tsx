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

/* 18 CSS particles drifting upward via jg-drift keyframe */
function Particles() {
  const particles = Array.from({ length: 18 }).map((_, i) => ({
    left: `${(i * 53 + 7) % 100}%`,
    size: 1.2 + ((i * 7) % 4) * 0.6,
    delay: `${(i * 1.4) % 22}s`,
    duration: `${18 + ((i * 5) % 12)}s`,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full bg-white"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `jg-drift ${p.duration} linear infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

/* Floating glass location badge (hero) */
function GlassBadge({
  emoji,
  imageSrc,
  primary,
  secondary,
  accent,
}: {
  emoji?: string;
  imageSrc?: string;
  primary: string;
  secondary: string;
  accent: "saffron" | "crimson" | "slate";
}) {
  const accentClass =
    accent === "saffron"
      ? "text-saffron border-saffron/30"
      : accent === "crimson"
        ? "text-crimson border-crimson/30"
        : "text-mist border-white/15";
  return (
    <div className="glass-dark flex items-center gap-2.5 rounded-full px-4 py-2 border transition-all duration-300 hover:scale-105">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="Indobox"
          className="h-5 w-5 object-contain"
        />
      ) : (
        <span className="font-serif-jp text-[18px] leading-none">{emoji}</span>
      )}
      <div className="flex flex-col leading-tight text-left">
        <span className={`font-inter text-[12px] font-bold uppercase ${accentClass.split(" ")[0]}`} style={{ letterSpacing: "0.08em" }}>
          {primary}
        </span>
        <span className="font-inter text-[11px] text-mist">{secondary}</span>
      </div>
    </div>
  );
}

/* Workspace feature card with high-craft icon pod & sheen */
function FeatureCard({
  icon: Icon,
  title,
  desc,
  delay,
}: {
  icon: typeof Building2;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay} variant="scale">
      <article className="luxury-light-card card-sheen group relative flex h-full flex-col rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 bg-white border border-slate-200/90 shadow-card hover:shadow-2xl hover:border-crimson/35 transition-all duration-300">
        {/* Top subtle hairline accent */}
        <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-crimson/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="icon-pod h-10 w-10 sm:h-12 sm:w-12 shrink-0">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
        </div>
        <h3 className="mt-3 sm:mt-4 font-serif-jp text-[15px] sm:text-[16px] font-bold leading-snug text-ink group-hover:text-crimson transition-colors">
          {title}
        </h3>
        <p className="mt-1.5 sm:mt-2 text-[12.5px] sm:text-[13px] leading-relaxed text-slate-600">
          {desc}
        </p>
      </article>
    </Reveal>
  );
}

export default function HomePage() {
  const { t, tx } = useI18n();

  /* 3 Strategic Advantage Pillars (replaces duplicate About pillars) */
  const advantagePillars = [
    {
      num: "01",
      kanji: "基盤",
      title: tx({ EN: "Turnkey Operational Infrastructure", JP: "即日稼働の事業基盤" }),
      body: tx({
        EN: "Reserve dedicated workspace at Cyber Gateway, Hyderabad from day one. Move in immediately with 1Gbps fiber, meeting rooms, lockable cabinets, registered corporate office address, and 24/7 keycard access without upfront capital expense.",
        JP: "サイバーゲートウェイ（ハイデラバード）の専用ワークスペースを即座に確保。敷金・内装費用不要で、専用デスク、1Gbps光回線、会議室、法人登記住所、24時間セキュリティを完備。",
      }),
    },
    {
      num: "02",
      kanji: "伴走",
      title: tx({ EN: "Resident Executive Japanese Advisory", JP: "現地常駐の日本人伴走体制" }),
      body: tx({
        EN: "Experienced Japanese directors work in the exact same facility daily — assisting with 'Yorozu' business questions, legal and accounting partner introductions, local hiring, and cross-cultural contract negotiations in Japanese.",
        JP: "日本人ディレクターが現地拠点に毎日常駐。日々の業務上の疑問（よろず相談）、現地会計・法務専門家の紹介、人材採用、現地企業との商談同席まで日本語で強力に伴走支援。",
      }),
    },
    {
      num: "03",
      kanji: "共創",
      title: tx({ EN: "Direct Institutional & Tech Ecosystem", JP: "政府・主要機関直結のエコシステム" }),
      body: tx({
        EN: "Institutional alliances with Telangana State Government, T-Hub (India's largest innovation hub), and premier engineering universities — enabling rapid access to verified local partners and top-tier tech talent.",
        JP: "テランガナ州政府、インド最大のインキュベーション機関T-Hub、名門大学との強固なアライアンス。信頼性の高い現地企業や優秀なエンジニアに初日から直接アクセス可能。",
      }),
    },
  ];

  /* 6 Turnkey Business Solutions (distinct from physical facilities) */
  const features = [
    {
      icon: FileText,
      title: tx({ EN: "Corporate Registration & MCA", JP: "法人設立登記・公式登録住所" }),
      desc: tx({
        EN: "Official registered office footprint at Cyber Gateway, Hyderabad — handling MCA entity incorporation, PAN/TAN, and GST tax registration.",
        JP: "Cyber Gatewayの公式登記住所を提供。MCA法人設立、PAN/TAN、GST税務登録まで完全サポート。",
      }),
    },
    {
      icon: ShieldCheck,
      title: tx({ EN: "Statutory Governance & Compliance", JP: "法務・法定ガバナンス支援" }),
      desc: tx({
        EN: "Guidance on resident director compliance under Section 149(3) of the Companies Act, secretarial audits, and annual ROC filings.",
        JP: "インド会社法に基づく居住取締役要件、会社秘書役監査、ROC年次報告など厳格な法定コンプライアンスを支援。",
      }),
    },
    {
      icon: Landmark,
      title: tx({ EN: "Corporate Banking & Remittances", JP: "法人銀行口座・国際送金支援" }),
      desc: tx({
        EN: "Expedited account opening with top Indian and international tier-1 banks, FDI regulatory reporting, and seamless cross-border capital inflows.",
        JP: "主要銀行での法人口座開設、外資規制（FDI）対応、円滑な国際送金体制を迅速に構築。",
      }),
    },
    {
      icon: Sparkles,
      title: tx({ EN: "On-Site Japanese Advisory", JP: "常駐日本人による日常相談" }),
      desc: tx({
        EN: "Japanese directors in Hyderabad assisting daily with vendor vetting, partner contracts, government filings, and business meetings in Japanese.",
        JP: "現地常駐の日本人役員が日々の業務相談（よろず相談）、現地契約書レビュー、商談同席を日本語で対応。",
      }),
    },
    {
      icon: Users,
      title: tx({ EN: "Curated Tech Talent Pipelines", JP: "高度ITエンジニア・バイリンガル採用" }),
      desc: tx({
        EN: "Direct sourcing from premier Hyderabad tech institutes and Indobox Academy — recruiting vetted software developers fluent in Japanese work standards.",
        JP: "Indobox Academyや名門工科大学と直結。日本の品質基準を理解したトップITエンジニアを厳選採用。",
      }),
    },
    {
      icon: Handshake,
      title: tx({ EN: "Telangana State & T-Hub Ecosystem Matching", JP: "テランガナ州政府・T-Hubとの連携" }),
      desc: tx({
        EN: "Direct institutional ties with Telangana State Government and T-Hub — fast-tracking partnerships, supplier vetting, and JV deals.",
        JP: "テランガナ州政府、T-Hubとの提携網を活用し、信頼できる現地サプライヤーやJV提携先を開拓。",
      }),
    },
  ];


  const locationAdvantages = [
    {
      title: "1. Asia's Leading Tech & Innovation District",
      desc: "Cyber Gateway in Hitech City is home to Microsoft, Google, Amazon, Apple, and NTT DATA — placing your business inside India's most prestigious tech cluster.",
    },
    {
      title: "2. Strategic Cost & Quality-of-Life Advantages",
      desc: "30–40% lower commercial operational costs compared to Bengaluru or Mumbai, paired with world-class metro connectivity and modern international infrastructure.",
    },
    {
      title: "3. Proactive Telangana State Government Policy",
      desc: "Telangana is ranked #1 in India for Ease of Doing Business, offering fast-track approvals, IT sector subsidies, and robust bilateral trade support.",
    },
    {
      title: "4. Abundant Top-Tier Engineering Talent",
      desc: "Direct access to IIT Hyderabad, IIIT Hyderabad, and top engineering universities producing over 100,000 skilled tech graduates annually.",
    },
  ];

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          1. HERO — Compact & Elegant, midnight, Torii watermark, particles, 2 glass badges
         ════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[68vh] sm:min-h-[80vh] items-center justify-center overflow-hidden bg-midnight py-10 sm:py-16">
        {/* Ambient gradient washes */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(188,26,44,0.08) 0%, rgba(188,26,44,0.02) 40%, transparent 70%), radial-gradient(ellipse at 70% 50%, rgba(188,26,44,0.12) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(232,160,26,0.06) 0%, transparent 50%)",
          }}
        />
        <ToriiWatermark
          className="torii-watermark"
          style={{ width: "70vw", maxWidth: "780px", right: "0", top: "8%", opacity: 0.045 }}
        />
        <Particles />

        {/* Skyline silhouette */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-[30%] w-full opacity-50">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="xMidYMax slice" className="h-full w-full" aria-hidden>
            <g fill="#0d1b2a">
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
          className="pointer-events-none absolute bottom-0 left-0 h-[32%] w-full"
          style={{ background: "linear-gradient(180deg, transparent, #080f1a 90%)" }}
        />

        <div className="container-jg relative z-10 pt-12 pb-8 sm:pt-18 sm:pb-14 text-center">
          {/* Eyebrow pill */}
          <Reveal>
            <span
              className="inline-flex items-center gap-2 rounded-full bg-crimson px-3.5 py-1 sm:px-4 sm:py-1.5 font-inter text-[11px] sm:text-[12px] font-semibold text-white shadow-crimp"
              style={{ letterSpacing: "0.1em" }}
            >
              <JapanFlag className="h-3.5 w-5" />
              {tx({ EN: "HYDERABAD · CYBER GATEWAY", JP: "ハイデラバード・サイバーゲートウェイ" })}
              <IndiaFlag className="h-3.5 w-5" />
            </span>
          </Reveal>

          {/* Pre-title */}
          <Reveal delay={80}>
            <p
              className="mt-5 font-inter text-[12px] font-semibold uppercase text-saffron"
              style={{ letterSpacing: "0.25em" }}
            >
              {t("hero.eyebrow")}
            </p>
          </Reveal>

          {/* H1 — Noto Serif JP 900 */}
          <Reveal delay={140}>
            <h1
              className="mx-auto mt-3 max-w-4xl font-serif-jp font-black leading-[1.18] text-white"
              style={{ fontSize: "clamp(1.9rem, 4.2vw, 3.1rem)" }}
            >
              {t("hero.title1")}
              <br />
              <span className="text-white">Working Hub for </span>
              <span className="text-gradient-saffron">Japanese Companies</span>
            </h1>
          </Reveal>

          {/* JP tagline */}
          <Reveal delay={200}>
            <p
              className="mt-3 font-serif-jp font-medium text-saffron/85"
              style={{ fontSize: "clamp(0.9rem, 1.35vw, 1.05rem)", letterSpacing: "0.05em" }}
            >
              {t("hero.jptag")}
            </p>
          </Reveal>

          {/* Body subtitle — catchphrase */}
          <Reveal delay={260}>
            <p
              className="mx-auto mt-3.5 max-w-[620px] font-inter font-light leading-relaxed text-mist"
              style={{ fontSize: "clamp(0.9rem, 1.25vw, 1.02rem)" }}
            >
              {t("hero.subtitle")}
            </p>
          </Reveal>

          {/* 2 floating glass badges — Hyderabad + Operator */}
          <Reveal delay={320}>
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3">
              <GlassBadge
                emoji="📍"
                primary={tx({ EN: "Hyderabad", JP: "ハイデラバード" })}
                secondary={tx({ EN: "Main Base", JP: "主拠点" })}
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
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
          <span
            className="font-inter text-[10px] font-semibold uppercase text-mist"
            style={{ letterSpacing: "0.2em" }}
          >
            {t("hero.scroll")}
          </span>
          <div className="relative h-8 w-px overflow-hidden bg-white/15">
            <span className="animate-scroll-line absolute inset-0 block bg-crimson" />
          </div>
          <ArrowDown className="h-3 w-3 text-mist" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          LIVE BILATERAL CORRIDOR STATUS — Tokyo ↔ Hyderabad (Handshake Bg)
         ════════════════════════════════════════════════════════════ */}
      <BilateralCorridorVisualizer />

      {/* ════════════════════════════════════════════════════════════
          4. TURNKEY BUSINESS SOLUTIONS — 6 Enterprise Capabilities
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory border-t border-slate-200/60">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Turnkey Operating Capabilities", JP: "包括的な進出支援サービス" })}</Eyebrow>
              <h2
                className="mt-2 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.625rem, 3vw, 2.25rem)" }}
              >
                {tx({
                  EN: "Everything Required to Establish & Scale in India",
                  JP: "インド進出の立ち上げと成長を支える6つの支援機能",
                })}
              </h2>
              <p
                className="mx-auto mt-2 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)" }}
              >
                {tx({
                  EN: "Beyond physical workspace — corporate incorporation, nominee directorship, corporate banking, talent acquisition, and institutional integration delivered by our resident team.",
                  JP: "デスクの提供にとどまらず、法人設立登記・名義人ディレクター・銀行口座・高度IT採用・公的機関連携まで一気通貫で伴走支援します。",
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
      <section className="section-pad bg-ivory border-t border-slate-200/60">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "The J-Gate Enterprise Advantage", JP: "J-Gateが選ばれる3つの強み" })}</Eyebrow>
              <h2
                className="mt-3 font-serif-jp font-bold leading-[1.15] text-ink"
                style={{ fontSize: "clamp(1.625rem, 3vw, 2.25rem)" }}
              >
                {tx({
                  EN: "Engineered Exclusively for Japanese Business",
                  JP: "日本企業のインド進出に特化した運営体制",
                })}
              </h2>
              <p
                className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)" }}
              >
                {tx({
                  EN: "Eliminating expansion friction through turnkey infrastructure, on-site Japanese leadership, and direct access to India's top innovation ecosystems.",
                  JP: "即日稼働のインフラ、現地常駐の日本人支援、そしてインド屈指のイノベーションエコシステムへの直結により、進出に伴う摩擦をゼロにします。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {advantagePillars.map((p, i) => (
              <Reveal key={p.num} delay={i * 120} variant="scale">
                <article className="luxury-light-card card-sheen gold-hairline group relative h-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-6 lg:p-7 shadow-card hover:shadow-2xl hover:border-crimson/35 transition-all duration-300">
                  <span
                    className="pointer-events-none absolute -top-3 sm:-top-5 right-3 sm:right-4 font-serif-jp font-black leading-none text-slate-100/80 text-[52px] sm:text-[72px] lg:text-[88px] transition-all duration-500 group-hover:scale-110 group-hover:text-crimson/10"
                    aria-hidden
                  >
                    {p.num}
                  </span>
                  <div className="relative z-10">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full bg-crimson/[0.08] border border-crimson/25 px-2.5 py-0.5 sm:px-3 sm:py-1 font-serif-jp text-[11.5px] sm:text-[12.5px] font-bold text-crimson tracking-wider shadow-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                      {p.kanji}
                    </span>
                    <h3
                      className="mt-3 sm:mt-4 font-serif-jp font-bold leading-tight text-ink group-hover:text-crimson transition-colors"
                      style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)" }}
                    >
                      {p.title}
                    </h3>
                    <div className="mt-2.5 sm:mt-3.5 h-[2px] w-12 sm:w-14 bg-gradient-to-r from-crimson to-saffron rounded-full" />
                    <p
                      className="mt-2.5 sm:mt-4 font-inter leading-relaxed text-slate-600 text-[12.5px] sm:text-[14px]"
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
      <section className="section-pad bg-ivory border-t border-slate-200/60">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Strategic Hub Location", JP: "戦略的拠点立地" })}</Eyebrow>
              <h2
                className="mt-2 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.625rem, 3vw, 2.25rem)" }}
              >
                {tx({
                  EN: "Why Hyderabad: India's Premier Innovation Capital",
                  JP: "なぜハイデラバードなのか：インド最大のIT・イノベーション拠点",
                })}
              </h2>
              <p
                className="mx-auto mt-2 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)" }}
              >
                {tx({
                  EN: "Centrally positioned in India's leading technology corridor, J-Gate at Cyber Gateway provides Japanese enterprises with immediate access to top talent, robust infrastructure, and bilateral business networks.",
                  JP: "インドを代表するIT特区の中心に位置するCyber GatewayのJ-Gate。優秀な工学人材、強固なインフラ、日印ビジネスネットワークへの迅速なアクセスを提供します。",
                })}
              </p>
            </div>
          </Reveal>

          {/* 2-Column Grid: Map on Left + Details on Right */}
          <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            {/* Left: India Map Graphic with Highlight Badge */}
            <div className="lg:col-span-5">
              <Reveal variant="scale">
                <div className="luxury-light-card card-sheen gold-hairline group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-crimson/30">
                  {/* Floating Live Badge with radar beacon */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-crimson/10 border border-crimson/25 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10.5px] sm:text-[11px] font-bold text-crimson uppercase tracking-wider">
                      <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      {tx({ EN: "Flagship Hub", JP: "旗艦拠点" })}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-success px-2.5 py-0.5 sm:px-3 sm:py-1 font-inter text-[10px] sm:text-[10.5px] font-bold uppercase text-white shadow-sm">
                      <span className="radar-beacon h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white text-emerald-300" />
                      {tx({ EN: "LIVE · Cyber Gateway", JP: "稼働中 · Cyber Gateway" })}
                    </span>
                  </div>

                  {/* The Map Graphic */}
                  <div className="relative flex items-center justify-center p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-100 shadow-inner">
                    <img
                      src="/india-map-hyderabad.png"
                      alt="Map of India highlighting Hyderabad location along with New Delhi, Mumbai, Bengaluru, Chennai, and Ahmedabad"
                      className="w-full max-h-[300px] sm:max-h-[360px] object-contain transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Connectivity Quick Strip */}
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 sm:gap-2.5 text-center">
                    <div className="bg-slate-50 rounded-lg sm:rounded-xl p-2 sm:p-2.5 border border-slate-200/60 shadow-sm transition-transform duration-200 hover:scale-105">
                      <span className="block font-inter text-[9px] sm:text-[9.5px] font-semibold text-slate-400 uppercase tracking-wider">
                        {tx({ EN: "Metro", JP: "メトロ" })}
                      </span>
                      <span className="block font-inter text-[11px] sm:text-[12px] font-bold text-ink truncate mt-0.5">
                        {tx({ EN: "2 Min Walk", JP: "徒歩2分" })}
                      </span>
                    </div>
                    <div className="bg-slate-50 rounded-lg sm:rounded-xl p-2 sm:p-2.5 border border-slate-200/60 shadow-sm transition-transform duration-200 hover:scale-105">
                      <span className="block font-inter text-[9px] sm:text-[9.5px] font-semibold text-slate-400 uppercase tracking-wider">
                        {tx({ EN: "Airport", JP: "空港" })}
                      </span>
                      <span className="block font-inter text-[11px] sm:text-[12px] font-bold text-ink truncate mt-0.5">
                        {tx({ EN: "35 Min Drive", JP: "車で35分" })}
                      </span>
                    </div>
                    <div className="bg-slate-50 rounded-lg sm:rounded-xl p-2 sm:p-2.5 border border-slate-200/60 shadow-sm transition-transform duration-200 hover:scale-105">
                      <span className="block font-inter text-[9px] sm:text-[9.5px] font-semibold text-slate-400 uppercase tracking-wider">
                        {tx({ EN: "District", JP: "地区" })}
                      </span>
                      <span className="block font-inter text-[11px] sm:text-[12px] font-bold text-crimson truncate mt-0.5">
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
                  <span className="font-inter text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-crimson">
                    {tx({ EN: "Cyber Gateway, Phase 2, Hitech City", JP: "サイバーゲートウェイ Phase 2・ハイテックシティ" })}
                  </span>
                  <h3 className="mt-1 sm:mt-1.5 font-serif-jp text-xl sm:text-2xl lg:text-3xl font-bold text-ink leading-tight">
                    {tx({
                      EN: "At the Center of India's Silicon Corridor",
                      JP: "インドのシリコン回廊の中心に位置する拠点",
                    })}
                  </h3>
                  <p className="mt-2 sm:mt-2.5 font-inter text-[13px] sm:text-[13.5px] leading-relaxed text-slate">
                    {tx({
                      EN: "Hyderabad has emerged as the preferred investment destination for global technology leaders. With lower overheads than Bengaluru or Mumbai, proactive government policies, and an abundant technical talent pool, it offers the ideal gateway for Japanese companies entering India.",
                      JP: "ハイデラバードは、世界的なIT企業が集結する最注目のビジネス都市です。バンガロールやムンバイと比較して安定したコスト水準、政府の手厚い優遇策、豊富な工学系人材により、日本企業のインド進出に最適な環境を提供します。",
                    })}
                  </p>
                </div>
              </Reveal>

              {/* 4 Feature Checkpoints */}
              <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
                {locationAdvantages.map((item, idx) => (
                  <Reveal key={idx} delay={100 + idx * 40}>
                    <div className="group flex items-start gap-2.5 sm:gap-3.5 rounded-xl sm:rounded-2xl bg-white p-2.5 sm:p-3.5 border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-md hover:border-crimson/30">
                      <div className="icon-pod h-6 w-6 sm:h-7 sm:w-7 shrink-0 mt-0.5">
                        <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>
                      <div>
                        <h4 className="font-serif-jp text-[13.5px] sm:text-[14px] font-bold text-ink group-hover:text-crimson transition-colors">
                          {item.title}
                        </h4>
                        <p className="mt-0.5 font-inter text-[12px] sm:text-[12.5px] text-slate-600 leading-relaxed">
                          {item.desc}
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
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 sm:px-6 sm:py-3.5 font-inter text-[12.5px] sm:text-[13.5px] font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm"
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
      <section className="relative overflow-hidden border-t border-slate-200/60 bg-ivory py-16">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <Eyebrow>{t("home.logos.eyebrow")}</Eyebrow>
              <h2
                className="mt-3 font-serif-jp font-bold text-ink"
                style={{ fontSize: "clamp(1.875rem, 3.8vw, 2.5rem)" }}
              >
                {t("home.logos.title")}
              </h2>
              <p
                className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}
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
