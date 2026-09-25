"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import {
  Building2,
  Users,
  ShieldCheck,
  ArrowRight,
  FileCheck2,
  Compass,
  Clock,
  Wifi,
  Zap,
  Check,
  Globe2,
  Briefcase,
  GraduationCap,
  Scale,
  Server,
  Lock,
  Handshake,
} from "lucide-react";

type Bilingual = { EN: string; JP: string };

/* ── 4 Core Services (Clean, Professional & Universal Business Expansion) ── */
type ServiceItem = {
  num: string;
  id: string;
  icon: typeof FileCheck2;
  badge: Bilingual;
  title: Bilingual;
  desc: Bilingual;
  points: Bilingual[];
};

const CORE_SERVICES: ServiceItem[] = [
  {
    num: "01",
    id: "setup",
    icon: FileCheck2,
    badge: { EN: "Setup & Legal", JP: "法人設立・登記" },
    title: {
      EN: "Company Setup & Corporate Banking",
      JP: "法人設立登記・公式住所・法人口座開設",
    },
    desc: {
      EN: "We provide an official commercial registered address at Cyber Gateway, handle full MCA Private Limited (Pvt. Ltd.) incorporation, obtain statutory PAN/TAN/GSTIN tax registrations, and assist with corporate bank accounts at MUFG, SBI, or HDFC.",
      JP: "Cyber Gateway公式商業登記住所の提供、インド会社法に基づく現地法人（Pvt. Ltd.）設立、PAN・TAN・GSTIN等の法定税務登録、および日系提携銀行や大手商業銀行での法人口座開設を一貫して代行・支援します。",
    },
    points: [
      {
        EN: "Official commercial registered address in Cyber Gateway, Hitech City",
        JP: "Cyber Gateway公式商業登記住所の発行（MCA・GST申請対応）",
      },
      {
        EN: "Complete MCA SPICe+ filing: COI, DIN & Digital Signatures (DSC)",
        JP: "社名予約、取締役番号（DIN）、電子署名、設立証明書（COI）の取得",
      },
      {
        EN: "Statutory tax registrations (Corporate PAN, withholding TAN & GSTIN)",
        JP: "法人税務番号（PAN）、源泉税番号（TAN）、GSTINの取得手続き",
      },
      {
        EN: "Corporate bank account opening & RBI foreign remittance reporting",
        JP: "日系提携行・大手商業銀行での口座開設および外資受入（RBI）報告支援",
      },
    ],
  },
  {
    num: "02",
    id: "workspace",
    icon: Building2,
    badge: { EN: "Workspace & Facilities", JP: "執務空間・オフィス施設" },
    title: {
      EN: "Ready-to-Use Private Office & Facilities",
      JP: "即日入居可能な専用オフィス・執務設備",
    },
    desc: {
      EN: "Move in immediately into fully furnished lockable private cabins and dedicated desks at Cyber Gateway. Includes high-speed redundant fiber internet, 100% UPS and generator backup, 4K meeting rooms, and 24/7 smart keycard security.",
      JP: "Cyber Gateway内に専用施錠個室キャビンと人間工学デスクを完備。二重冗長化の高速光回線、100%無停電電源（UPS＋自家発電）、役員用会議室、防音ブース、24時間セキュリティを完備し、契約後すぐに業務を開始できます。",
    },
    points: [
      {
        EN: "Furnished private lockable suites (2–50+ desks) with ergonomic workstations",
        JP: "人間工学什器・施錠キャビネット完備の専用個室キャビン（2〜50席以上）",
      },
      {
        EN: "Dual-carrier redundant high-speed internet with zero Tokyo-hours downtime",
        JP: "日本本社との時差業務・国際ビデオ会議に対応する二重化高速光回線",
      },
      {
        EN: "100% continuous power via industrial UPS arrays & diesel generators",
        JP: "瞬停も防ぐ大型無停電電源装置（UPS）と自家発電機の二重バックアップ",
      },
      {
        EN: "24/7 keycard access, CCTV monitoring, 4K boardrooms & focus phone booths",
        JP: "24時間入退館管理、CCTV監視、役員用4K会議室、個別防音ブース",
      },
    ],
  },
  {
    num: "03",
    id: "advisory",
    icon: Compass,
    badge: { EN: "Japanese Advisory", JP: "常駐日本人相談" },
    title: {
      EN: "Resident Japan Desk & Daily Advisory",
      JP: "日本人役員常駐・日常のよろず相談窓口",
    },
    desc: {
      EN: "Native Japanese directors and bilingual staff work inside the Cyber Gateway office daily. We offer direct in-person consultation in Japanese for day-to-day business matters, curated introductions to local accounting and legal firms, and meeting accompaniment.",
      JP: "日本人役員およびバイリンガル実務スタッフがCyber Gatewayオフィスに毎日常駐。日常の業務課題（よろず相談）から現地専門家（会計・法務）の紹介、重要商談への同席まで、すべて日本語で対面支援します。",
    },
    points: [
      {
        EN: "Daily in-person 'Yorozu' (何でも相談) consultation in Japanese",
        JP: "オフィス内常駐デスクでの日本語による日常業務の対面相談（よろず相談）",
      },
      {
        EN: "Curated referrals to trusted local chartered accountants & corporate lawyers",
        JP: "J-Gateが厳選した信頼できる現地会計士・税務アドバイザー・弁護士の紹介",
      },
      {
        EN: "Executive meeting accompaniment on critical partner and government talks",
        JP: "現地企業との重要商談や州政府機関訪問への日本人役員同席サポート",
      },
      {
        EN: "Tokyo headquarters reporting alignment & local contract dispute mediation",
        JP: "東京本社向け業務報告書の作成助言および現地取引先との円滑な調整支援",
      },
    ],
  },
  {
    num: "04",
    id: "growth",
    icon: Users,
    badge: { EN: "Talent & Growth", JP: "現地人材採用・組織育成" },
    title: {
      EN: "Local Talent Recruitment & Professional Training",
      JP: "優秀な現地人材の採用支援・組織育成研修",
    },
    desc: {
      EN: "Source and recruit qualified Indian professionals across management, sales, operations, and specialized domains. We assist with candidate pre-screening, train local hires in Japanese business etiquette (Horenso & Kaizen) via Indobox Academy, and structure compliant employment contracts.",
      JP: "現地の名門大学や労働市場から、マネジメント・営業・実務・専門職の優秀な現地人材を採用支援。事前面接、Indobox Academyによる日系ビジネスマナー（報連相・改善）研修、現地労働法に準拠した雇用契約締結まで包括支援します。",
    },
    points: [
      {
        EN: "Recruitment pipelines to premier universities and professional talent pools",
        JP: "名門大学卒業生および現地実務経験者への求人アプローチ・採用支援",
      },
      {
        EN: "Candidate pre-screening, qualifications evaluation & background verification",
        JP: "候補者の事前スクリーニング、スキル評価、経歴・身元照会代行",
      },
      {
        EN: "Indobox Academy training: Japanese Horenso, Kaizen & workplace protocols",
        JP: "採用スタッフに対する日本の報連相文化・品質意識・ビジネスマナー集中指導",
      },
      {
        EN: "Compliant Indian employment contracts, payroll setup & local HR guidance",
        JP: "インド労働法準拠の雇用契約書作成、給与計算設定、労務コンプライアンス助言",
      },
    ],
  },
];

/* ── 4-Stage Deployment Roadmap ── */
const DEPLOYMENT_STEPS = [
  {
    step: "01",
    title: { EN: "Consultation & Plan Selection", JP: "無料個別相談・プラン選定" },
    desc: {
      EN: "Align on team capacity, expansion timeline, and select the optimal Satellite, Standard, or Advance tier.",
      JP: "進出目的、利用人数、スケジュールをヒアリングし、最適なメンバーシッププランを決定します。",
    },
    duration: { EN: "Day 1–3", JP: "1〜3日" },
  },
  {
    step: "02",
    title: { EN: "Official Address & Incorporation", JP: "公式登記住所の確定・設立申請" },
    desc: {
      EN: "Allocate your Cyber Gateway commercial address and coordinate SPICe+ MCA filing and bank paperwork.",
      JP: "Cyber Gateway公式登記住所を発行し、MCA法人登記手続きおよび銀行口座申請を開始します。",
    },
    duration: { EN: "Week 1–3", JP: "1〜3週目" },
  },
  {
    step: "03",
    title: { EN: "Private Suite Allocation & Office Setup", JP: "専用執務室の配備・入居環境整備" },
    desc: {
      EN: "Configure your private cabin, assign 24/7 keycards, and provision high-speed connectivity and ergonomic furnishings.",
      JP: "執務デスクの配置、専用施錠キー、高速通信回線およびスマート入退室カードを発行します。",
    },
    duration: { EN: "Immediate", JP: "即日〜数日" },
  },
  {
    step: "04",
    title: { EN: "Move-In & Daily Advisory Launch", JP: "即日稼働開始・ジャパンデスク伴走" },
    desc: {
      EN: "Begin operations on Day 1 with resident Japanese director 'Yorozu' guidance, partner introductions, and hiring.",
      JP: "入居初日から常駐日本人ディレクターによる「よろず相談」、現地専門家の紹介、採用支援を開始します。",
    },
    duration: { EN: "Day 1 Onward", JP: "初日から即稼働" },
  },
];

/* ── Indobox × Genesys Operational Competencies (Clean Light-Mode Engine) ── */
const INDOBOX_COMPETENCIES = [
  {
    icon: Briefcase,
    title: { EN: "Enterprise Client Relations & Tokyo Liaison", JP: "日本企業クライアント統括・東京本社連携" },
    detail: {
      EN: "Direct communication with Tokyo headquarters, ensuring smooth corporate approvals and reporting alignment.",
      JP: "東京本社との直接対話窓口。稟議申請や日本本社報告基準に沿った円滑なコミュニケーションを担保。",
    },
    tag: { EN: "Tokyo Integration", JP: "東京本社直結" },
  },
  {
    icon: Compass,
    title: { EN: "Resident Japan Desk & Daily Yorozu Advisory", JP: "常駐ジャパンデスク運営・日常のよろず相談" },
    detail: {
      EN: "Native Japanese directors stationed daily in Hyderabad for immediate in-person guidance on business issues.",
      JP: "日本人役員が現地オフィスに毎日常駐。法務、税務、銀行取引、商習慣の疑問を対面で即日解決。",
    },
    tag: { EN: "Daily In-Person", JP: "現地毎日常駐" },
  },
  {
    icon: Globe2,
    title: { EN: "Japan–India Cultural & Commercial Governance", JP: "日印文化・商習慣の橋渡しとガバナンス" },
    detail: {
      EN: "Eliminating cross-cultural friction in vendor contracts, operational expectations, and work styles.",
      JP: "現地取引先との契約交渉や納期感覚の違いなど、日印間の商習慣ギャップを徹底的に解消。",
    },
    tag: { EN: "Cross-Cultural Bridge", JP: "商習慣調整" },
  },
  {
    icon: GraduationCap,
    title: { EN: "Indobox Academy: Japanese Business Protocol", JP: "Indobox Academy：日系企業マナー研修" },
    detail: {
      EN: "Structured training for Indian employees and local hires in Horenso, Kaizen, and Japanese corporate standards.",
      JP: "採用した現地社員・スタッフに対し、日本の報連相文化、品質意識、ビジネスマナーを集中指導。",
    },
    tag: { EN: "Accredited Program", JP: "独自教育基盤" },
  },
  {
    icon: Handshake,
    title: { EN: "Strategic Ecosystem Alliances & Matchmaking", JP: "戦略的アライアンス・公的機関連携推進" },
    detail: {
      EN: "Facilitating partnerships with universities, trade bodies, and state government business delegations.",
      JP: "名門大学、経済団体、州政府機関とのパイプラインを活用した戦略的提携・現地視察のアレンジ。",
    },
    tag: { EN: "Bilateral Network", JP: "公的・産学連携" },
  },
  {
    icon: ShieldCheck,
    title: { EN: "Tenant Success & Bilateral SLA Management", JP: "入居テナント伴走・SLA品質保証" },
    detail: {
      EN: "Ongoing executive oversight of facility satisfaction, confidential reviews, and rapid issue escalation.",
      JP: "入居企業の満足度管理、守秘ミーティングの調整、緊急時の迅速なエスカレーション対応。",
    },
    tag: { EN: "Executive SLA", JP: "品質保証管理" },
  },
];

const GENESYS_COMPETENCIES = [
  {
    icon: Building2,
    title: { EN: "Ready-to-Use Workspace at Cyber Gateway", JP: "Cyber Gateway執務空間・施設総合管理" },
    detail: {
      EN: "Private office cabins, ergonomic furnishings, acoustic suites, and full building facility operations.",
      JP: "Cyber Gateway内の専用個室、人間工学什器、防音ブースなど高品質オフィス設備の保守運営。",
    },
    tag: { EN: "Hitech City Hub", JP: "最高級オフィス" },
  },
  {
    icon: Wifi,
    title: { EN: "Dual 1Gbps Redundant Enterprise Fiber Backbone", JP: "二重冗長化 1Gbps対称高速光回線" },
    detail: {
      EN: "Dedicated enterprise bandwidth with redundant carrier failover, optimized for Tokyo business hours.",
      JP: "二重化された専用高速光回線。日本本社との大容量データ通信・4Kビデオ会議の無停電接続。",
    },
    tag: { EN: "99.9% Uptime", JP: "二重回線保証" },
  },
  {
    icon: Zap,
    title: { EN: "100% Power Continuity (UPS Array + Diesel Backup)", JP: "無停電電源装置（UPS）＋自家発電機" },
    detail: {
      EN: "Uninterrupted clean power supply protecting workstations, office equipment, and operations 24 hours a day, 365 days a year.",
      JP: "瞬停も防ぐ大型UPSシステムとディーゼル発電機の完全二重化により、執務室内の全機器と業務を24時間保護。",
    },
    tag: { EN: "24/7 Power Safe", JP: "100%電力供給" },
  },
  {
    icon: Lock,
    title: { EN: "24/7 Smart Keycard Multi-Factor Access & CCTV", JP: "24時間生体認証セキュリティ・CCTV監視" },
    detail: {
      EN: "Round-the-clock smart keycard entry, perimeter monitoring, and physical on-site security guards.",
      JP: "スマートキーカードによる24時間入退館管理、CCTV監視カメラ網、常駐警備員による厳重警備。",
    },
    tag: { EN: "Multi-Factor", JP: "常駐警備完備" },
  },
  {
    icon: Server,
    title: { EN: "Central HVAC Engineering & Environmental Care", JP: "空調管理・日常清掃・パントリー運営" },
    detail: {
      EN: "Central air-conditioning, professional housekeeping, waste management, and cafeteria services.",
      JP: "快適なセントラル空調制御、プロ清掃員による日常美化、パントリー・カフェテリアの快適維持。",
    },
    tag: { EN: "Facility Care", JP: "日常美化管理" },
  },
  {
    icon: Scale,
    title: { EN: "Statutory Building Codes & Municipal Compliance", JP: "消防法・建築基準法・現地許認可遵守" },
    detail: {
      EN: "Strict compliance with Indian commercial building regulations, fire safety norms, and government approvals.",
      JP: "インド消防基準、建築構造規格、商業施設自治体認可の完全遵守による安心の事業拠点。",
    },
    tag: { EN: "100% Code Valid", JP: "建築基準適合" },
  },
];

export function ServicesSection({ id }: { id?: string }) {
  const { tx } = useI18n();

  return (
    <div id={id} className="min-h-screen bg-ivory dark:bg-[#080d17] scroll-mt-20">
      {/* ───────────────────────────────────────────────────────────
          1. Hero Banner
         ─────────────────────────────────────────────────────────── */}
      <PageHero
        eyebrowKey="services.eyebrow"
        titleNode={
          <>
            {tx({ EN: "Comprehensive Setup & ", JP: "包括的インド進出支援・" })}
            <br className="hidden sm:inline" />
            <span className="text-gradient-saffron">
              {tx({ EN: "Operational Solutions", JP: "サービス仕様・運営基盤" })}
            </span>
          </>
        }
        subtitleNode={tx({
          EN: "Indobox's unique comprehensive market entry support & talent development — Hyderabad's dedicated end-to-end platform for Japanese enterprises.",
          JP: "Indobox独自の包括的進出支援と高度人材育成。ハイデラバード拠点の日本企業専用エンドツーエンドプラットフォーム。",
        })}
      />

      {/* ───────────────────────────────────────────────────────────
          2. Executive Assurance Strip (4 Metric Pods)
         ─────────────────────────────────────────────────────────── */}
      <section className="relative -mt-9 z-20 container-jg">
        <Reveal>
          <div className="rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#101a2c]/95 text-ink dark:text-white p-3.5 sm:p-6 shadow-[0_16px_40px_-12px_rgba(8,15,26,0.08)] backdrop-blur-md">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 sm:divide-x divide-slate-200/80 dark:divide-white/10">
              {[
                {
                  icon: Building2,
                  badge: tx({ EN: "Day 1 Ready", JP: "即日稼働可能" }),
                  title: tx({ EN: "Cyber Gateway Hub", JP: "Cyber Gateway拠点" }),
                  desc: tx({ EN: "Dedicated suites & high-speed fiber", JP: "専用キャビン・高速光回線" }),
                  accent: "text-crimson dark:text-rose-400 bg-crimson/10 dark:bg-rose-950/50 border-crimson/20 dark:border-rose-400/30",
                },
                {
                  icon: ShieldCheck,
                  badge: tx({ EN: "100% Compliant", JP: "完全法令準拠" }),
                  title: tx({ EN: "MCA & Bank Setup", JP: "法人登記・法人口座" }),
                  desc: tx({ EN: "Official registered commercial address", JP: "公式商業登記住所・税務登録" }),
                  accent: "text-amber-900 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/50 border-amber-200 dark:border-amber-700/40",
                },
                {
                  icon: Compass,
                  badge: tx({ EN: "On-Site Support", JP: "常駐対面伴走" }),
                  title: tx({ EN: "Resident Japan Desk", JP: "日本人常駐サポート" }),
                  desc: tx({ EN: "Daily in-person 'Yorozu' advisory", JP: "日本語による日常業務よろず相談" }),
                  accent: "text-crimson dark:text-rose-400 bg-crimson/10 dark:bg-rose-950/50 border-crimson/20 dark:border-rose-400/30",
                },
                {
                  icon: Users,
                  badge: tx({ EN: "Local Talent", JP: "現地人材採用" }),
                  title: tx({ EN: "Recruitment Support", JP: "優秀人材採用・育成" }),
                  desc: tx({ EN: "University pipelines & candidate vetting", JP: "名門大学・現地専門職の採用支援" }),
                  accent: "text-amber-900 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/50 border-amber-200 dark:border-amber-700/40",
                },
              ].map((pod, i) => {
                const Icon = pod.icon;
                return (
                  <div key={i} className={`flex items-start gap-2.5 sm:gap-3.5 ${i > 0 ? "sm:pl-4 lg:pl-5" : ""}`}>
                    <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-ink dark:text-white shadow-2xs">
                      <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-crimson dark:text-rose-400" />
                    </div>
                    <div>
                      <span className={`inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider border ${pod.accent} mb-0.5 sm:mb-1`}>
                        {pod.badge}
                      </span>
                      <h4 className="font-serif-jp text-[13px] sm:text-[14.5px] font-bold text-ink dark:text-white leading-tight">
                        {pod.title}
                      </h4>
                      <p className="font-inter text-[11px] sm:text-[12px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                        {pod.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ───────────────────────────────────────────────────────────
          3. Core Services (Simple, Clean, Professional Text Layout)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-16 md:py-20 bg-ivory-warm dark:bg-[#0b111e]">
        <div className="container-jg max-w-5xl">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#101a2c] px-3.5 py-1 font-inter text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 shadow-xs">
                {tx({ EN: "Core Services", JP: "支援サービス" })}
              </span>
              <h2
                className="mt-3 font-serif-jp font-bold text-ink dark:text-white"
                style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.35rem)" }}
              >
                {tx({
                  EN: "Everything Required to Launch & Scale in India",
                  JP: "インド事業の立ち上げから成長に必要なすべて",
                })}
              </h2>
              <p className="mt-2 font-inter text-[13px] sm:text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                {tx({
                  EN: "A structured, reliable operational foundation combining ready-to-use office workspace, statutory corporate legal setup, resident Japanese executive advisory, and qualified local talent recruitment.",
                  JP: "公式登記住所・法人設立から、専用オフィス環境、日本人による日常よろず相談、優秀な現地人材の採用まで、インド進出に必要なすべてを一貫して支援します。",
                })}
              </p>
            </div>
          </Reveal>

          {/* Clean, Simple 4-Card Grid */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {CORE_SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <Reveal key={srv.id} delay={idx * 40} variant="up">
                  <div className="h-full rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-4 sm:p-6 md:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-slate-100 dark:border-white/10">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-ink dark:text-white shadow-xs">
                            <Icon className="h-4.5 w-4.5 text-crimson dark:text-rose-400" />
                          </span>
                          <span className="font-mono text-xs font-bold text-slate-400 uppercase">
                            {srv.num}
                          </span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold font-inter bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/10">
                            {tx(srv.badge)}
                          </span>
                        </div>
                      </div>

                      {/* Title & Simple Explanatory Text */}
                      <h3 className="mt-3.5 font-serif-jp text-lg font-bold text-ink dark:text-white">
                        {tx(srv.title)}
                      </h3>
                      <p className="mt-2 font-inter text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                        {tx(srv.desc)}
                      </p>

                      {/* Clean Bullet Points */}
                      <ul className="mt-4 space-y-2 pt-3 border-t border-slate-100 dark:border-white/10">
                        {srv.points.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-start gap-2.5 font-inter text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug"
                          >
                            <span className="mt-1 flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-700/60 text-emerald-700 dark:text-emerald-300">
                              <Check className="h-2 w-2 stroke-[3]" />
                            </span>
                            <span>{tx(pt)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Link */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                      <span className="font-mono text-[10.5px] text-slate-400">
                        J-Gate Verified
                      </span>
                      <Link
                        href={`/contact?service=${srv.id}`}
                        className="inline-flex items-center gap-1.5 font-inter text-[12px] font-semibold text-slate-800 dark:text-slate-200 hover:text-crimson dark:hover:text-rose-400 transition-colors"
                      >
                        <span>{tx({ EN: "Inquire about this", JP: "詳細・相談" })}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. Deployment Roadmap (From Consultation to Operations)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18 bg-ivory dark:bg-[#080d17] border-t border-slate-200/60 dark:border-white/10">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center mb-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-3 py-1 font-inter text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <Clock className="h-3.5 w-3.5 text-crimson dark:text-rose-400" />
                {tx({ EN: "Rapid Onboarding Process", JP: "進出の流れ・導入ステップ" })}
              </span>
              <h3 className="mt-2.5 font-serif-jp text-xl sm:text-2xl font-bold text-ink dark:text-white">
                {tx({
                  EN: "From Initial Consultation to Day 1 Operations",
                  JP: "初回相談から初日の事業開始までのステップ",
                })}
              </h3>
              <p className="mt-1.5 text-[13px] font-inter text-slate-500 dark:text-slate-400">
                {tx({
                  EN: "A structured, friction-free deployment timeline designed for rapid corporate setup.",
                  JP: "無駄な手続きや遅延を排除した、日本企業のための迅速な立ち上げプロセス。",
                })}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {DEPLOYMENT_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-5 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <span className="font-mono text-2xl font-black text-slate-200 dark:text-white/10 block mb-2">
                    {step.step}
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/60 dark:border-emerald-700/40 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold font-inter mb-2">
                    {tx(step.duration)}
                  </span>
                  <h4 className="font-serif-jp text-[14.5px] font-bold text-ink dark:text-white">
                    {tx(step.title)}
                  </h4>
                  <p className="mt-1.5 font-inter text-[12px] leading-relaxed text-slate-600 dark:text-slate-300">
                    {tx(step.desc)}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          5. INDUSTRIAL-LEVEL BILATERAL GOVERNANCE ARCHITECTURE
             (Indobox × Genesys Info X — Luminous Mode Console)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-16 md:py-24 bg-ivory-warm dark:bg-[#0b111e] text-ink dark:text-white relative overflow-hidden border-t border-slate-200/70 dark:border-white/10">
        {/* Subtle ambient lighting */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 15% 15%, rgba(188,26,44,0.04) 0%, transparent 60%), radial-gradient(ellipse at 85% 85%, rgba(232,160,26,0.06) 0%, transparent 60%)",
          }}
        />

        <div className="container-jg relative z-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-900/15 dark:border-amber-400/30 bg-amber-50/90 dark:bg-amber-950/40 px-3.5 py-0.5 sm:px-4 sm:py-1 font-inter text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 shadow-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                {tx({ EN: "Bilateral Co-Operating Model", JP: "日印共同運営アーキテクチャ" })}
              </span>
              <h2
                className="mt-3 sm:mt-4 font-serif-jp font-bold text-ink dark:text-white tracking-tight"
                style={{ fontSize: "clamp(1.65rem, 3.6vw, 2.75rem)" }}
              >
                {tx({
                  EN: "Two Specialized Operators, One Unified Engine",
                  JP: "二つの専門運営主体、ひとつの統合エンジン",
                })}
              </h2>
              <p className="mx-auto mt-2 sm:mt-3 max-w-2xl font-inter text-[13px] sm:text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">
                {tx({
                  EN: "J-Gate is powered by an intentional bilateral alliance between Indobox India Pvt. Ltd. and Genesys Info X — uniting Japanese corporate governance with Tier-1 Indian physical office infrastructure to guarantee frictionless expansion.",
                  JP: "J-Gateは、日本企業ガバナンスを担うIndoboxと、Cyber Gatewayのオフィス施設・物理インフラを担うGenesys Info Xの戦略的共同事業です。役割分担を一元化し、進出に伴うあらゆる摩擦をゼロにします。",
                })}
              </p>
            </div>
          </Reveal>

          {/* Master Collaborative Vitrine: Museum-Grade Logo Pedestals & Joint Hub Medallion */}
          <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
            <Reveal>
              <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-4 sm:p-6 lg:p-9 shadow-[0_12px_36px_-12px_rgba(8,15,26,0.08)]">
                <div className="grid md:grid-cols-11 items-center gap-4 sm:gap-6 lg:gap-8">
                  {/* Left Pedestal: Indobox India Pvt. Ltd. */}
                  <div className="md:col-span-5 rounded-xl sm:rounded-2xl border border-crimson/20 dark:border-crimson/30 bg-gradient-to-b from-rose-50/40 via-white to-slate-50/50 dark:from-rose-950/20 dark:via-[#101a2c] dark:to-[#0b111e] p-4 sm:p-6 text-center relative overflow-hidden group hover:border-crimson/50 hover:shadow-md transition-all duration-300">
                    <span className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-crimson to-crimson-deep" />
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-crimson/10 dark:bg-rose-950/50 border border-crimson/20 dark:border-rose-400/30 text-crimson dark:text-rose-400 text-[10.5px] sm:text-[11px] font-bold font-inter mb-3 sm:mb-4">
                      <span>🇯🇵</span>
                      <span>{tx({ EN: "Japan Governance & Strategy", JP: "日本側ガバナンス・戦略統括" })}</span>
                    </div>

                    {/* Logo Showcase Box */}
                    <div className="h-16 sm:h-20 md:h-24 w-full rounded-xl bg-white dark:bg-white/95 border border-slate-200/80 dark:border-white/10 p-3 sm:p-4 flex items-center justify-center shadow-xs mb-3 sm:mb-4 group-hover:scale-[1.02] transition-transform">
                      <Image
                        src="/logos/indobox.png"
                        alt="Indobox Logo"
                        width={280}
                        height={70}
                        className="h-9 sm:h-11 md:h-12 w-auto object-contain"
                      />
                    </div>

                    <h3 className="font-serif-jp text-base sm:text-lg font-bold text-ink dark:text-white">Indobox India Pvt. Ltd.</h3>
                    <p className="font-mono text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {tx({ EN: "Tokyo HQ & Cyber Gateway Corridor", JP: "東京本社 ＆ Cyber Gateway常駐デスク" })}
                    </p>
                    <p className="text-[12px] sm:text-[12.5px] text-slate-600 dark:text-slate-300 font-inter mt-2 sm:mt-2.5 leading-relaxed">
                      {tx({
                        EN: "Japanese director leadership, resident Japan Desk, cross-cultural arbitration, tenant care, and Indobox Academy curriculum.",
                        JP: "日本人取締役常駐・日々のよろず相談・商習慣調整・日本本社報告支援・Indobox Academy企業文化研修。",
                      })}
                    </p>
                  </div>

                  {/* Center Bilateral Fusion Medallion */}
                  <div className="md:col-span-1 flex flex-col items-center justify-center my-2 md:my-0">
                    <div className="relative flex items-center justify-center">
                      <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-crimson via-amber-400 to-saffron p-[2px] shadow-md">
                        <div className="w-full h-full rounded-full bg-white dark:bg-[#101a2c] flex items-center justify-center font-bold text-base sm:text-lg text-ink dark:text-white">
                          ×
                        </div>
                      </div>
                    </div>
                    <span className="text-[9px] sm:text-[9.5px] font-mono font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mt-1.5 sm:mt-2 text-center">
                      JOINT SLA
                    </span>
                  </div>

                  {/* Right Pedestal: Genesys Info X */}
                  <div className="md:col-span-5 rounded-xl sm:rounded-2xl border border-saffron/25 dark:border-amber-400/30 bg-gradient-to-b from-amber-50/40 via-white to-slate-50/50 dark:from-amber-950/20 dark:via-[#101a2c] dark:to-[#0b111e] p-4 sm:p-6 text-center relative overflow-hidden group hover:border-saffron/50 hover:shadow-md transition-all duration-300">
                    <span className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-saffron to-[#c9881a]" />
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 border border-amber-300/60 dark:border-amber-700/40 text-amber-900 dark:text-amber-300 text-[10.5px] sm:text-[11px] font-bold font-inter mb-3 sm:mb-4">
                      <span>🇮🇳</span>
                      <span>{tx({ EN: "India Infrastructure Backbone", JP: "インド現地インフラ・施設管理" })}</span>
                    </div>

                    {/* Logo Showcase Box */}
                    <div className="h-16 sm:h-20 md:h-24 w-full rounded-xl bg-white dark:bg-white/95 border border-slate-200/80 dark:border-white/10 p-3 sm:p-4 flex items-center justify-center shadow-xs mb-3 sm:mb-4 group-hover:scale-[1.02] transition-transform">
                      <Image
                        src="/logos/genesys-info-x.png"
                        alt="Genesys info X Logo"
                        width={280}
                        height={70}
                        className="h-11 sm:h-14 md:h-16 w-auto object-contain"
                      />
                    </div>

                    <h3 className="font-serif-jp text-base sm:text-lg font-bold text-ink dark:text-white">Genesys info X</h3>
                    <p className="font-mono text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {tx({ EN: "Cyber Gateway Tier-3 Facility Operator", JP: "Cyber Gateway Tier-3物理施設運営主体" })}
                    </p>
                    <p className="text-[12px] sm:text-[12.5px] text-slate-600 dark:text-slate-300 font-inter mt-2 sm:mt-2.5 leading-relaxed">
                      {tx({
                        EN: "Fully equipped workspace suites, high-speed fiber connectivity, 100% UPS & generator power backup, 24/7 biometric security, and facilities care.",
                        JP: "Cyber Gateway物理空間提供・高速光回線・無停電電源装置・24時間生体認証警備・日常施設清掃管理。",
                      })}
                    </p>
                  </div>
                </div>

                {/* Single-Window Accountability Guarantee Bar */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-100 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left rounded-xl sm:rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-700/40 p-3.5 sm:p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700/60">
                      <ShieldCheck className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-serif-jp text-[14.5px] font-bold text-ink dark:text-white">
                        {tx({ EN: "Single-Window Contract & SLA Accountability", JP: "ワンストップ契約＆一元管理保証" })}
                      </h4>
                      <p className="font-inter text-[12.5px] text-slate-600 dark:text-slate-300 leading-snug">
                        {tx({
                          EN: "One unified agreement. Zero vendor fragmentation, zero language friction, and direct executive escalation.",
                          JP: "窓口一本化。複数業者との個別交渉不要、言語障壁なし、日本品質基準での確実な実行体制を保証。",
                        })}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-crimson to-crimson-deep hover:opacity-95 px-5 py-2.5 font-inter text-[12.5px] font-semibold text-white shadow-md shadow-crimson/30 transition-all duration-200"
                  >
                    <span>{tx({ EN: "Contact Japan Desk", JP: "ジャパンデスクに相談する" })}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Unified Dual-Engine Operations Console: 6 Competencies Each */}
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
            {/* Indobox Operational Engine (Left Column) */}
            <Reveal variant="left">
              <div className="h-full rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-white/10 border-t-4 border-t-crimson bg-white dark:bg-[#101a2c] p-4 sm:p-6 md:p-7 shadow-xs">
                <div className="flex items-center justify-between pb-3.5 sm:pb-5 border-b border-slate-100 dark:border-white/10">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-crimson/10 dark:bg-rose-950/50 text-crimson dark:text-rose-400 border border-crimson/20 dark:border-rose-400/30">
                      <Handshake className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                    </span>
                    <div>
                      <span className="font-mono text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-wider text-crimson dark:text-rose-400 block">
                        JAPAN ENGINE · INDOBOX
                      </span>
                      <h4 className="font-serif-jp text-base sm:text-lg font-bold text-ink dark:text-white">
                        {tx({ EN: "Governance & Advisory Competencies", JP: "日本企業ガバナンス・伴走支援領域" })}
                      </h4>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-slate-200/70 dark:border-white/10 font-semibold">
                    6 SLA LANES
                  </span>
                </div>

                <div className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3.5">
                  {INDOBOX_COMPETENCIES.map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="rounded-xl border border-slate-200/70 dark:border-white/10 bg-slate-50/60 dark:bg-white/[0.03] p-2.5 sm:p-3.5 hover:border-crimson/40 hover:bg-white dark:hover:bg-white/[0.06] hover:shadow-xs transition-all"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div className="flex items-center gap-2 sm:gap-2.5">
                            <span className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-lg bg-crimson/10 dark:bg-rose-950/50 text-crimson dark:text-rose-400">
                              <ItemIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            </span>
                            <span className="font-serif-jp text-[12.5px] sm:text-[13.5px] font-bold text-ink dark:text-white">
                              {tx(item.title)}
                            </span>
                          </div>
                          <span className="font-mono text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded bg-crimson/10 dark:bg-rose-950/50 text-crimson dark:text-rose-400 border border-crimson/20 dark:border-rose-400/30 shrink-0">
                            {tx(item.tag)}
                          </span>
                        </div>
                        <p className="font-inter text-[11.5px] sm:text-[12px] text-slate-600 dark:text-slate-300 leading-relaxed pl-8 sm:pl-9">
                          {tx(item.detail)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* Genesys Operational Engine (Right Column) */}
            <Reveal variant="right" delay={80}>
              <div className="h-full rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-white/10 border-t-4 border-t-saffron bg-white dark:bg-[#101a2c] p-4 sm:p-6 md:p-7 shadow-xs">
                <div className="flex items-center justify-between pb-3.5 sm:pb-5 border-b border-slate-100 dark:border-white/10">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-950/50 text-amber-900 dark:text-amber-300 border border-amber-300/60 dark:border-amber-700/40">
                      <Building2 className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                    </span>
                    <div>
                      <span className="font-mono text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-wider text-saffron-deep dark:text-amber-400 block">
                        INDIA ENGINE · GENESYS INFO X
                      </span>
                      <h4 className="font-serif-jp text-base sm:text-lg font-bold text-ink dark:text-white">
                        {tx({ EN: "Facilities & Operations Competencies", JP: "執務施設管理・セキュリティ・保全体制" })}
                      </h4>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-slate-200/70 dark:border-white/10 font-semibold">
                    6 SLA LANES
                  </span>
                </div>

                <div className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3.5">
                  {GENESYS_COMPETENCIES.map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="rounded-xl border border-slate-200/70 dark:border-white/10 bg-slate-50/60 dark:bg-white/[0.03] p-2.5 sm:p-3.5 hover:border-saffron/40 hover:bg-white dark:hover:bg-white/[0.06] hover:shadow-xs transition-all"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div className="flex items-center gap-2 sm:gap-2.5">
                            <span className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-950/50 text-amber-900 dark:text-amber-300">
                              <ItemIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            </span>
                            <span className="font-serif-jp text-[12.5px] sm:text-[13.5px] font-bold text-ink dark:text-white">
                              {tx(item.title)}
                            </span>
                          </div>
                          <span className="font-mono text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/50 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-700/40 shrink-0">
                            {tx(item.tag)}
                          </span>
                        </div>
                        <p className="font-inter text-[11.5px] sm:text-[12px] text-slate-600 dark:text-slate-300 leading-relaxed pl-8 sm:pl-9">
                          {tx(item.detail)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
