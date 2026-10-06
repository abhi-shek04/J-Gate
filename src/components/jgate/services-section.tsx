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
  Check,
} from "lucide-react";
import { JapanFlag, IndiaFlag } from "./icons";

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
    badge: { EN: "Setup & Local Advisory", JP: "現地展開・アドバイザリー支援" },
    title: {
      EN: "Company Setup & Local Business Advisory",
      JP: "進出準備・ローカルアドバイザリーサポート",
    },
    desc: {
      EN: "We assist Japanese companies with location setup in Hyderabad, introduce vetted local accounting and legal partners for company incorporation (Pvt. Ltd.) and statutory tax registrations (PAN/TAN/GSTIN), and provide local banking guidance.",
      JP: "ハイデラバードIT特区での拠点準備、現地提携の専門家（会計事務所・弁護士）を通じた会社設立（Pvt. Ltd.）および税務登録（PAN/TAN/GSTIN）の手続きサポート、現地口座開設アドバイザリーを包括支援します。",
    },
    points: [
      {
        EN: "Official business location setup support in Hyderabad",
        JP: "ハイデラバードIT特区での拠点準備・入居手続サポート",
      },
      {
        EN: "Introductions to vetted accounting & legal partners for company setup",
        JP: "現地提携専門家（会計・法務）の紹介と進出アドバイザリー",
      },
      {
        EN: "Assistance and guidance for local tax registration procedures (PAN/TAN/GSTIN)",
        JP: "税務登録（PAN/TAN/GSTIN）に関する情報提供・各種手続支援",
      },
      {
        EN: "Local corporate banking guidance and advisory support",
        JP: "現地提携行・商業銀行での法人口座開設に関する相談・同席支援",
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
      EN: "Move immediately into fully furnished lockable private offices and dedicated desks in Hyderabad. Includes high-speed backup fiber internet, 100% UPS and generator backup, equipped meeting rooms, and 24/7 keycard security.",
      JP: "ハイデラバード専用オフィス内に施錠個室キャビンと人間工学デスクを完備。二重冗長化の高速光回線、100%無停電電源（UPS＋自家発電）、プレゼン設備付き会議室、24時間セキュリティを完備し、すぐ業務を開始できます。",
    },
    points: [
      {
        EN: "Furnished private lockable suites (2–50+ desks) with ergonomic workstations",
        JP: "人間工学什器・施錠キャビネット完備の専用個室キャビン（2〜50席以上）",
      },
      {
        EN: "High-speed internet with dual-provider backup during Japan business hours",
        JP: "日本本社との時差業務・国際ビデオ会議に対応する二重化高速光回線",
      },
      {
        EN: "100% continuous power via industrial UPS arrays & diesel generators",
        JP: "瞬停も防ぐ大型無停電電源装置（UPS）と自家発電機の二重バックアップ",
      },
      {
        EN: "24/7 keycard access, CCTV monitoring, and equipped client meeting rooms",
        JP: "24時間入退館管理、CCTV監視、プレゼン設備完備の会議室",
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
      EN: "Native Japanese directors and bilingual staff work inside our Hyderabad office daily. We offer direct in-person consultation in Japanese for day-to-day business matters, curated introductions to local accounting and legal firms, and meeting support.",
      JP: "日本人役員およびバイリンガル実務スタッフがハイデラバードオフィスに毎日常駐。日常の業務課題（よろず相談）から現地専門家（会計・法務）の紹介、重要商談への同席まで、すべて日本語で対面支援します。",
    },
    points: [
      {
        EN: "Daily in-person executive consultation and business advisory in Japanese",
        JP: "オフィス内常駐デスクでの日本語による日常業務の対面相談（よろず相談）",
      },
      {
        EN: "Direct introductions to trusted local chartered accountants & corporate lawyers",
        JP: "J-Gateが厳選した信頼できる現地会計士・税務アドバイザー・弁護士の紹介",
      },
      {
        EN: "Executive meeting support on critical partner and government talks",
        JP: "現地企業との重要商談や州政府機関訪問への日本人役員同席サポート",
      },
      {
        EN: "Japan reporting coordination with Japan headquarters & local contract dispute advisory",
        JP: "日本本社向け業務報告書の作成助言および現地取引先との円滑な調整支援",
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
      EN: "Source and recruit qualified Indian professionals across management, sales, operations, and specialized domains. We assist with candidate pre-screening, train local hires in Japanese business etiquette (Horenso & Kaizen) via Indobox business orientation, and structure compliant employment contracts.",
      JP: "現地の名門大学や労働市場から、マネジメント・営業・実務・専門職の優秀な現地人材を採用支援。事前面接、Indoboxビジネスオリエンテーションによる日系ビジネスマナー（報連相・改善）研修、現地労働法に準拠した雇用契約締結まで包括支援します。",
    },
    points: [
      {
        EN: "Recruitment channels connecting to leading universities and professional networks",
        JP: "名門大学卒業生および現地実務経験者への求人アプローチ・採用支援",
      },
      {
        EN: "Candidate pre-screening, qualifications evaluation & background verification",
        JP: "候補者の事前スクリーニング、スキル評価、経歴・身元照会代行",
      },
      {
        EN: "Indobox business orientation: Japanese Horenso, Kaizen & workplace practices",
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
    duration: { EN: "Days 1–3", JP: "1〜3日" },
  },
  {
    step: "02",
    title: { EN: "Official Address & Incorporation", JP: "公式登記住所の確定・設立申請" },
    desc: {
      EN: "Allocate your Hyderabad commercial address and coordinate company incorporation filings and bank paperwork.",
      JP: "ハイデラバード公式登記住所を発行し、MCA法人登記手続きおよび銀行口座申請を開始します。",
    },
    duration: { EN: "Weeks 1–3", JP: "1〜3週目" },
  },
  {
    step: "03",
    title: { EN: "Private Office Setup & Office Setup", JP: "専用執務室の配備・入居環境整備" },
    desc: {
      EN: "Prepare your private office, assign 24/7 keycards, and set up high-speed internet and office furniture.",
      JP: "執務デスクの配置、専用施錠キー、高速通信回線およびスマート入退室カードを発行します。",
    },
    duration: { EN: "Immediate", JP: "即日〜数日" },
  },
  {
    step: "04",
    title: { EN: "Move-In & Daily Operational Support", JP: "即日稼働開始・ジャパンデスク伴走" },
    desc: {
      EN: "Begin operations on Day 1 with on-site guidance from Japanese directors, partner introductions, and hiring.",
      JP: "入居初日から常駐日本人ディレクターによる「よろず相談」、現地専門家の紹介、採用支援を開始します。",
    },
    duration: { EN: "Day 1 Onward", JP: "初日から即稼働" },
  },
];

export function ServicesSection({ id, hideHero }: { id?: string; hideHero?: boolean }) {
  const { tx } = useI18n();

  return (
    <div id={id} className="bg-ivory dark:bg-black scroll-mt-20">
      {!hideHero && (
        <PageHero
          eyebrowKey="services.eyebrow"
          layout="split"
          titleNode={
            <>
              {tx({ EN: "Comprehensive Setup & ", JP: "包括的インド進出支援・" })}
              <br className="hidden sm:inline" />
              {tx({ EN: "Business Operations", JP: "サービス仕様・運営基盤" })}
            </>
          }
          subtitleNode={tx({
            EN: "Indobox's unique comprehensive market entry support & talent development — Hyderabad's dedicated end-to-end platform for Japanese enterprises.",
            JP: "Indobox独自の包括的進出支援と高度人材育成。ハイデラバード拠点の日本企業専用エンドツーエンドプラットフォーム。",
          })}
          tags={[
            { EN: "Dedicated Desks & Private Offices", JP: "専用デスク・個室キャビン" },
            { EN: "Daily Japanese Advisory", JP: "日々の日本語業務相談" },
            { EN: "Technical & Professional Recruitment", JP: "高度ITエンジニア採用" },
          ]}
        />
      )}

      {/* ───────────────────────────────────────────────────────────
          2. Executive Assurance Strip (4 Metric Pods)
         ─────────────────────────────────────────────────────────── */}
      <section className="relative -mt-9 z-20 container-jg">
        <Reveal>
          <div className="rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#09090b]/95 text-ink dark:text-white p-3.5 sm:p-6 shadow-[0_16px_40px_-12px_rgba(8,15,26,0.08)] backdrop-blur-md">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:divide-x divide-slate-200/80 dark:divide-white/10">
              {[
                {
                  icon: Building2,
                  badge: tx({ EN: "Ready Workspace", JP: "即日利用可能" }),
                  title: tx({ EN: "India Hub", JP: "インド拠点" }),
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
                  desc: tx({ EN: "Daily in-person Japanese advisory", JP: "日本語による日常業務よろず相談" }),
                  accent: "text-crimson dark:text-rose-400 bg-crimson/10 dark:bg-rose-950/50 border-crimson/20 dark:border-rose-400/30",
                },
                {
                  icon: Users,
                  badge: tx({ EN: "Local Talent", JP: "現地人材採用" }),
                  title: tx({ EN: "Recruitment Support", JP: "優秀人材採用・育成" }),
                  desc: tx({ EN: "University pipelines & background checks", JP: "名門大学・現地専門職の採用支援" }),
                  accent: "text-amber-900 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/50 border-amber-200 dark:border-amber-700/40",
                },
              ].map((pod, i) => {
                const Icon = pod.icon;
                return (
                  <div key={i} className={`flex items-start gap-2.5 sm:gap-3.5 p-2 rounded-xl bg-slate-50/50 dark:bg-white/[0.02] lg:bg-transparent lg:p-0 ${i > 0 ? "lg:pl-5" : ""}`}>
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
      <section className="py-6 sm:py-8 lg:py-10 bg-ivory-warm dark:bg-black">
        <div className="container-jg max-w-5xl">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#09090b] px-3.5 py-1 font-inter text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 shadow-xs">
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
                  <div className="h-full luxury-light-card card-sheen gold-hairline rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-white/16 bg-white dark:bg-[#09090b] p-5 sm:p-7 shadow-card dark:shadow-2xl hover:shadow-2xl hover:border-crimson/40 dark:hover:border-saffron/40 transition-all duration-300 flex flex-col justify-between">
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
                        <span>{tx({ EN: "Learn More", JP: "詳細・相談" })}</span>
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
      <section className="py-6 sm:py-8 lg:py-10 bg-ivory dark:bg-[#080d17] border-t border-slate-200/60 dark:border-white/10">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center mb-10">
              <h3 className="font-serif-jp text-xl sm:text-2xl lg:text-3xl font-bold text-ink dark:text-white">
                {tx({
                  EN: "From Initial Consultation to Starting Operations",
                  JP: "初回相談から初日の事業開始までのステップ",
                })}
              </h3>
              <p className="mt-2 text-[13.5px] font-inter text-slate-600 dark:text-slate-300">
                {tx({
                  EN: "A structured, efficient timeline designed for rapid corporate setup.",
                  JP: "無駄な手続きや遅延を排除した、日本企業のための迅速な立ち上げプロセス。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
            {DEPLOYMENT_STEPS.map((step, idx) => (
              <Reveal key={idx} delay={idx * 100} variant="scale">
                <div
                  className="luxury-light-card card-sheen group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 dark:border-white/12 bg-white dark:bg-[#09090b] p-5.5 sm:p-6 shadow-md hover:shadow-2xl hover:border-crimson/40 dark:hover:border-rose-400/40 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Glowing Top Accent Bar */}
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-crimson via-saffron to-emerald-500 opacity-75 group-hover:opacity-100 transition-opacity" />

                  {/* Faded Numeral Background */}
                  <span
                    className="pointer-events-none absolute -top-2 right-2 font-mono font-black text-slate-100/90 dark:text-white/[0.04] text-5xl select-none group-hover:scale-110 group-hover:text-crimson/10 transition-all duration-500"
                    aria-hidden
                  >
                    {step.step}
                  </span>

                  <div className="relative z-10">
                    {/* Header Pod */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-crimson/10 dark:bg-rose-950/60 border border-crimson/20 dark:border-rose-400/30 text-crimson dark:text-rose-400 font-mono font-extrabold text-sm group-hover:scale-110 transition-transform">
                        {step.step}
                      </span>
                      <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-sm animate-pulse" />
                    </div>

                    <h4 className="font-serif-jp text-[15px] font-bold text-ink dark:text-white group-hover:text-crimson dark:group-hover:text-rose-400 transition-colors leading-snug">
                      {tx(step.title)}
                    </h4>
                    <p className="mt-2 font-inter text-[12.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                      {tx(step.desc)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          5. INDUSTRIAL-LEVEL BILATERAL GOVERNANCE ARCHITECTURE
             (Indobox × Genesys Info X — Luminous Mode Console)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-6 sm:py-8 lg:py-10 bg-ivory-warm dark:bg-[#0b111e] text-ink dark:text-white relative overflow-hidden border-t border-slate-200/70 dark:border-white/10">
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
                {tx({ EN: "Joint Operating Partnership", JP: "日印共同運営アーキテクチャ" })}
              </span>
              <h2
                className="mt-3 sm:mt-4 font-serif-jp font-bold text-ink dark:text-white tracking-tight"
                style={{ fontSize: "clamp(1.65rem, 3.6vw, 2.75rem)" }}
              >
                {tx({
                  EN: "Two Specialized Partners, One Complete Solution",
                  JP: "二つの専門運営主体、ひとつの統合エンジン",
                })}
              </h2>
              <p className="mx-auto mt-2 sm:mt-3 max-w-2xl font-inter text-[13px] sm:text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">
                {tx({
                  EN: "J-Gate is powered by an joint partnership between Indobox India Private Limited. and Genesys Info X — uniting Japanese corporate governance with professional office infrastructure in Hyderabad to guarantee smooth and efficient expansion.",
                  JP: "J-Gateは、日本企業ガバナンスを担うIndoboxと、ハイデラバードのオフィス施設・物理インフラを担うGenesys Info Xの戦略的共同事業です。役割分担を一元化し、進出に伴うあらゆる摩擦をゼロにします。",
                })}
              </p>
            </div>
          </Reveal>

          {/* Master Collaborative Vitrine: Museum-Grade Logo Pedestals & Joint Hub Medallion */}
          <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
            <Reveal>
              <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-black p-4 sm:p-6 lg:p-9 shadow-[0_12px_36px_-12px_rgba(8,15,26,0.08)]">
                <div className="grid md:grid-cols-11 items-center gap-4 sm:gap-6 lg:gap-8">
                  {/* Left Pedestal: Indobox India Private Limited. */}
                  <div className="md:col-span-5 rounded-xl sm:rounded-2xl border border-crimson/20 dark:border-crimson/30 bg-gradient-to-b from-rose-50/40 via-white to-slate-50/50 dark:from-rose-950/30 dark:via-black dark:to-black p-5 sm:p-7 text-center relative overflow-hidden group hover:border-crimson/50 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-between">
                    <span className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-crimson to-crimson-deep" />

                    <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-rose-200/90 dark:border-rose-800/40 bg-rose-50/90 dark:bg-rose-950/50 px-3.5 py-1 text-[11.5px] font-bold text-rose-800 dark:text-rose-300 shadow-2xs font-inter">
                      🇯🇵 {tx({ EN: "Japan Governance & Strategy", JP: "日本企業ガバナンス・戦略統括" })}
                    </span>

                    {/* Official Brand Logo Box - Pure White tile for original light mode logo colors */}
                    <div className="h-20 sm:h-24 w-full rounded-xl bg-white border border-slate-200/80 p-4 flex items-center justify-center shadow-xs mb-3 group-hover:scale-[1.02] transition-transform">
                      <Image
                        src="/logos/indobox.svg"
                        alt="Indobox India Private Limited."
                        width={280}
                        height={70}
                        className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                      />
                    </div>

                    <div>
                      <h4 className="font-inter text-lg sm:text-xl font-bold text-ink dark:text-white">
                        Indobox India Private Limited.
                      </h4>
                      <p className="font-inter text-[13px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                        {tx({ EN: "Japan-India Operations & Resident Japan Desk", JP: "日印事業統括・現地常駐ジャパンデスク" })}
                      </p>
                      <p className="text-[12.5px] text-slate-600 dark:text-slate-300 font-inter mt-2.5 leading-relaxed">
                        {tx({
                          EN: "Japanese director leadership, resident Japan Desk daily advisory, business orientation, tenant care, and parent company reporting alignment.",
                          JP: "日本人取締役常駐・日々のよろず相談・ビジネスアドバイザリー・日本本社報告支援・現地入居企業サポート。",
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Center Bilateral Fusion Medallion */}
                  <div className="md:col-span-1 flex flex-col items-center justify-center my-3 md:my-0">
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-saffron bg-white dark:bg-black font-bold text-base text-ink dark:text-white shadow-md">
                      ×
                    </div>
                    <span className="mt-2 font-inter text-[9.5px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase text-center leading-tight">
                      {tx({ EN: "STRATEGIC PARTNERS", JP: "戦略的パートナーシップ" })}
                    </span>
                  </div>

                  {/* Right Pedestal: Genesys Info X */}
                  <div className="md:col-span-5 rounded-xl sm:rounded-2xl border border-saffron/25 dark:border-amber-400/30 bg-gradient-to-b from-amber-50/40 via-white to-slate-50/50 dark:from-amber-950/30 dark:via-black dark:to-black p-5 sm:p-7 text-center relative overflow-hidden group hover:border-saffron/50 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-between">
                    <span className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-saffron to-[#c9881a]" />

                    <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-amber-200/90 dark:border-amber-800/40 bg-amber-50/90 dark:bg-amber-950/50 px-3.5 py-1 text-[11.5px] font-bold text-amber-900 dark:text-amber-300 shadow-2xs font-inter">
                      🇮🇳 {tx({ EN: "India Infrastructure Backbone", JP: "インド現地インフラ・拠点運営" })}
                    </span>

                    {/* Official Brand Logo Box - Pure White tile for original light mode logo colors */}
                    <div className="h-20 sm:h-24 w-full rounded-xl bg-white border border-slate-200/80 p-4 flex items-center justify-center shadow-xs mb-3 group-hover:scale-[1.02] transition-transform">
                      <Image
                        src="/logos/genesys-info-x.png"
                        alt="Genesys Info X"
                        width={280}
                        height={70}
                        className="h-12 sm:h-15 md:h-16 w-auto object-contain"
                      />
                    </div>

                    <div>
                      <h4 className="font-inter text-lg sm:text-xl font-bold text-ink dark:text-white">
                        Genesys Info X
                      </h4>
                      <p className="font-inter text-[13px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                        {tx({ EN: "Hyderabad Workspace & Facilities Operator", JP: "ハイデラバード 拠点施設運営パートナー" })}
                      </p>
                      <p className="text-[12.5px] text-slate-600 dark:text-slate-300 font-inter mt-2.5 leading-relaxed">
                        {tx({
                          EN: "Fully equipped workspace suites, high-speed fiber connectivity, 100% UPS & generator power backup, 24/7 biometric security, and facilities care.",
                          JP: "完全家具付きオフィス、高速光回線、24時間無停電電源・発電設備、スマート生体認証セキュリティ、施設保守管理。",
                        })}
                      </p>
                    </div>
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
                        {tx({ EN: "Single Point of Contact & One Simple Agreement", JP: "ワンストップ契約＆一元管理保証" })}
                      </h4>
                      <p className="font-inter text-[12.5px] text-slate-600 dark:text-slate-300 leading-snug">
                        {tx({
                          EN: "One unified agreement. No need to manage multiple vendors, no language barriers, and direct communication with senior leadership.",
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
        </div>
      </section>
    </div>
  );
}
