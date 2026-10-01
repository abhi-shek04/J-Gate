"use client";

import { useState } from "react";
import {
  ChevronDown,
  Building2,
  ShieldCheck,
  Landmark,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { PageHero } from "@/components/jgate/page-hero";
import { Reveal, SectionHeading } from "@/components/jgate/shared";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/* ============================================================
   /faq — Dedicated J-Gate Executive FAQ & Knowledge Base
   ============================================================ */

interface FAQItem {
  id: string;
  category: "about" | "pricing" | "facilities" | "support";
  categoryLabel: { EN: string; JP: string };
  q: { EN: string; JP: string };
  a: { EN: string; JP: string };
  highlights?: { EN: string; JP: string }[];
}

const FAQ_LIST: FAQItem[] = [
  /* ── 1. ABOUT J-GATE ── */
  {
    id: "about-what",
    category: "about",
    categoryLabel: { EN: "About J-Gate", JP: "J-Gateの概要" },
    q: {
      EN: "What is J-Gate?",
      JP: "J-Gateとはどのような施設・サービスですか？",
    },
    a: {
      EN: "J-Gate is a dedicated working hub and business launchpad in Hyderabad created specifically for Japanese enterprises expanding into India. It combines office infrastructure with comprehensive support for corporate setup, market entry, and local talent development.",
      JP: "J-Gateは、インド進出を検討・推進する日本企業のために開設されたハイデラバード初の専用ワークスペース＆ビジネスローンチパッドです。オフィスインフラの提供にとどまらず、現地法人設立、市場開拓、現地IT人材の確保・研修まで包括的に支援します。",
    },
  },
  {
    id: "about-location",
    category: "about",
    categoryLabel: { EN: "About J-Gate", JP: "J-Gateの概要" },
    q: {
      EN: "Where are J-Gate's hubs located?",
      JP: "拠点（ハブ）はどこにありますか？",
    },
    a: {
      EN: "The main primary hub is located in Hyderabad, operational from June 2026.",
      JP: "メインハブはハイデラバードに位置し、2026年6月より本格稼働します。",
    },
  },
  {
    id: "about-operator",
    category: "about",
    categoryLabel: { EN: "About J-Gate", JP: "J-Gateの概要" },
    q: {
      EN: "Who operates J-Gate?",
      JP: "運営主体はどこですか？",
    },
    a: {
      EN: "J-Gate is managed through a hybrid Japanese-Indian partnership between Indobox (handling Japanese facilitation, marketing, and client care) and Genesys (providing physical infrastructure, local staffing, and facility operations).",
      JP: "J-Gateは、日本企業統括・顧客サポート・マーケティングを担うIndoboxと、現地オフィスインフラ・施設運営・ローカルオペレーションを担うGenesys Info Xの持分共同事業として運営されています。",
    },
  },

  /* ── 2. MEMBERSHIP & PRICING ── */
  {
    id: "pricing-plans",
    category: "pricing",
    categoryLabel: { EN: "Membership & Pricing", JP: "料金プラン・お支払い" },
    q: {
      EN: "What membership plans are available?",
      JP: "利用プランの種類と料金を教えてください。",
    },
    a: {
      EN: "J-Gate offers three strategic plans (all prices listed in INR, excluding GST):\n\n• Satellite Plan (15,000 INR/month): Designed for Japanese companies already holding a legal entity in India; includes workspace access for up to 2 people.\n• Standard Plan (50,000 INR/month): Suited for Japanese companies exploring expansion; includes workspace access for up to 4 people, Japan Desk consultation, and study session access.\n• Advance Plan (120,000 INR/month): Targeted at companies accelerating full-scale entry, regional banks, and local governments; includes hands-on consulting, meeting accompaniment, and priority networking.",
      JP: "J-Gateでは目的・規模に応じた3つの基本プランをご用意しています（表示価格は税別INR）：\n\n• サテライトプラン（15,000 INR/月）：既存現地法人保有企業向け。最大2名までの固定席・オフィス利用。\n• スタンダードプラン（50,000 INR/月）：市場調査・進出準備企業向け。最大4名利用、ジャパンデスク相談・勉強会参加権付き。\n• アドバンスプラン（120,000 INR/月）：本格進出・地方銀行・自治体・大手企業向け。ハンズオンコンサルティング・商談同席・優先マッチング付き。",
    },
    highlights: [
      { EN: "Satellite Plan: 15,000 INR/mo (Up to 2 members)", JP: "サテライトプラン：15,000 INR/月（最大2名利用）" },
      { EN: "Standard Plan: 50,000 INR/mo (Up to 4 members)", JP: "スタンダードプラン：50,000 INR/月（最大4名利用）" },
      { EN: "Advance Plan: 120,000 INR/mo (Full consulting)", JP: "アドバンスプラン：120,000 INR/月（フルサポート）" },
    ],
  },
  {
    id: "pricing-settlement",
    category: "pricing",
    categoryLabel: { EN: "Membership & Pricing", JP: "料金プラン・お支払い" },
    q: {
      EN: "How is invoicing and payment handled?",
      JP: "請求・支払い方法について教えてください。",
    },
    a: {
      EN: "All invoices are issued in Indian Rupees (INR). Payments can be made via bank transfer or credit card with full support for corporate accounting.",
      JP: "お支払いはインドルピー（INR）基準で請求書を発行いたします。銀行振込および各種法人決済に対応しております。",
    },
  },
  {
    id: "pricing-extra",
    category: "pricing",
    categoryLabel: { EN: "Membership & Pricing", JP: "料金プラン・お支払い" },
    q: {
      EN: "Are legal incorporation and hiring costs included in the monthly fee?",
      JP: "法人設立費用や採用手数料は月額利用料に含まれますか？",
    },
    a: {
      EN: "No, the monthly plans cover basic membership and workspace usage. Additional agency fees for legal entity incorporation or recruitment commissions are billed separately as needed.",
      JP: "いいえ、月額プランには基本会員権およびワークスペース利用料が含まれます。現地法人設立の各種手続費用や人材採用・EOR手数料などは、必要に応じて個別見積もり・都度清算となります。",
    },
  },

  /* ── 3. FACILITIES & SERVICES ── */
  {
    id: "fac-amenities",
    category: "facilities",
    categoryLabel: { EN: "Facilities & Services", JP: "施設設備・サービス" },
    q: {
      EN: "What amenities and infrastructure are provided at the workspace?",
      JP: "施設内で利用できる設備やインフラを教えてください。",
    },
    a: {
      EN: "Members receive fixed desks, private cabinets, personal lockers, high-speed Wi-Fi, Xerox multifunction printers, dedicated meeting rooms, and 24/7 keycard access with full security management.",
      JP: "固定デスク、施錠付き個人キャビネット・ロッカー、高速Wi-Fi、Xerox複合機、専用会議室、24時間アクセス可能なICカード・生体認証セキュリティシステムをご利用いただけます。",
    },
    highlights: [
      { EN: "24/7 keycard & biometric security access", JP: "24時間対応生体認証ICカードセキュリティ" },
      { EN: "High-speed Wi-Fi & Xerox multifunction printers", JP: "高速Wi-Fi＆Xerox高性能複合機" },
      { EN: "Personal lockable cabinets & dedicated meeting rooms", JP: "施錠付きキャビネット・専用会議室完備" },
    ],
  },
  {
    id: "fac-japandesk",
    category: "facilities",
    categoryLabel: { EN: "Facilities & Services", JP: "施設設備・サービス" },
    q: {
      EN: "Is Japanese-language support available on-site?",
      JP: "現地オフィスで日本語によるサポートは受けられますか？",
    },
    a: {
      EN: "Yes, J-Gate features a dedicated Japan Desk staffed with Japanese-speaking professionals to assist with daily operational and business inquiries (\"Yorozusodan\").",
      JP: "はい、日本語対応可能な専門スタッフおよび日本人ディレクターが常駐する「ジャパンデスク」を設置しており、日々の業務や経営の「よろず相談」に日本語で対応します。",
    },
  },
  {
    id: "fac-dining",
    category: "facilities",
    categoryLabel: { EN: "Facilities & Services", JP: "施設設備・サービス" },
    q: {
      EN: "What dining and cafeteria options are available?",
      JP: "食堂・カフェテリアなどの食事環境はどうなっていますか？",
    },
    a: {
      EN: "The facility features an on-site shared cafeteria (\"Tasty Food Junction\") equipped with coffee machines, water dispensers, and refrigerators. Members can access local meals, biryani, snacks, and arrangement options for Japanese, Italian, and Chinese lunch deliveries.",
      JP: "施設内にコーヒーマシン・ウォーターサーバー・冷蔵庫を備えたカフェテリア（Tasty Food Junction）を併設しています。ローカル料理やビリヤニ、軽食のほか、和食・イタリアン・中華のお弁当手配も可能です。",
    },
  },

  /* ── 4. BUSINESS SUPPORT & RELOCATION ── */
  {
    id: "sup-incorporation",
    category: "support",
    categoryLabel: { EN: "Business Support & Relocation", JP: "法人設立・現地生活支援" },
    q: {
      EN: "How does J-Gate assist with company incorporation in India?",
      JP: "インド現地法人の設立はどのように支援されますか？",
    },
    a: {
      EN: "J-Gate provides official legal registration addresses, director name provision, payroll management, and end-to-end support for business entity establishment.",
      JP: "正式な商業登記住所の提供、居住取締役（Nominee Director）の手配、給与計算・税務管理、現地法人設立手続きを一括してワンストップ支援します。",
    },
    highlights: [
      { EN: "Official legal registration address in Hyderabad", JP: "ハイデラバード公認の商業登記住所提供" },
      { EN: "Resident/Nominee Director arrangement", JP: "居住取締役（Nominee Director）手配" },
      { EN: "Payroll & statutory tax management support", JP: "給与計算・法定税務管理の一括サポート" },
    ],
  },
  {
    id: "sup-relocation",
    category: "support",
    categoryLabel: { EN: "Business Support & Relocation", JP: "法人設立・現地生活支援" },
    q: {
      EN: "Does J-Gate assist Japanese staff with local living and relocation?",
      JP: "駐在員や出張者の現地生活・赴任支援も行っていますか？",
    },
    a: {
      EN: "Yes, J-Gate assists Japanese expatriates and visiting teams with FRRO registration, long-term hotel reservations, local housing searches, and lifestyle orientation.",
      JP: "はい、外国人登録（FRRO）手続きの代行支援、長期滞在用ホテル・アパートの選定、住宅仲介、現地での生活オリエンテーションまで幅広くサポートします。",
    },
  },
];

export function FAQSection({ id }: { id?: string }) {
  const { tx } = useI18n();
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  // Toggle single accordion
  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Expand all / Collapse all
  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    FAQ_LIST.forEach((item) => {
      allOpen[item.id] = true;
    });
    setOpenIds(allOpen);
  };

  const collapseAll = () => {
    setOpenIds({});
  };

  return (
    <div id={id} className="scroll-mt-20">
      <section className="py-6 sm:py-10 bg-ivory dark:bg-black transition-colors">
        <div className="container-jg max-w-4xl">
          {/* Header styled matching reference layout */}
          <Reveal className="mb-8 sm:mb-10 text-center">
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-rose-100/90 dark:bg-rose-950/60 px-3 py-1 font-mono text-[11px] font-bold text-crimson dark:text-rose-400 tracking-wider uppercase">
                <span className="h-2 w-2 bg-crimson dark:bg-rose-400 rounded-xs inline-block" />
                {tx({ EN: "SUPPORT INFO", JP: "サポート情報" })}
              </span>
            </div>
            <h2 className="font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-bold text-ink dark:text-white tracking-tight">
              {tx({ EN: "Frequently Asked Questions", JP: "よくあるご質問" })}
            </h2>
            <p className="mt-3 font-inter text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {tx({
                EN: "Everything you need to know about workspace options, resident Japan Desk support, company incorporation, and local hiring.",
                JP: "ワークスペース利用、ジャパンデスクサポート、現地法人設立、採用支援に関するよくある質問とお答え。",
              })}
            </p>
          </Reveal>

          {/* FAQ Accordion List (Matching Reference Card Layout) */}
          <div className="space-y-3">
            {FAQ_LIST.map((item, idx) => {
              const isOpen = !!openIds[item.id];
              return (
                <Reveal key={item.id} delay={idx * 15}>
                  <div
                    className={cn(
                      "group overflow-hidden rounded-xl border bg-white dark:bg-[#09090b] transition-all duration-200 shadow-xs",
                      isOpen
                        ? "border-crimson dark:border-rose-400/70 ring-1 ring-crimson/20 dark:ring-rose-400/20"
                        : "border-slate-200/80 dark:border-white/12 hover:border-slate-300 dark:hover:border-white/25"
                    )}
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <h3
                        className={cn(
                          "font-serif-jp font-bold text-[15.5px] sm:text-[17px] leading-snug transition-colors pr-2",
                          isOpen
                            ? "text-crimson dark:text-rose-400"
                            : "text-ink dark:text-white group-hover:text-crimson dark:group-hover:text-rose-400"
                        )}
                      >
                        {tx(item.q)}
                      </h3>

                      <div
                        className={cn(
                          "flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300",
                          isOpen ? "rotate-180 text-crimson dark:text-rose-400" : "text-slate-400"
                        )}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </button>

                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden min-h-0">
                        <div className="border-t border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] p-4 sm:p-5 pt-3.5 sm:pt-4">
                          <p className="font-inter text-[13.5px] sm:text-[14.5px] leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line">
                            {tx(item.a)}
                          </p>

                          {item.highlights && item.highlights.length > 0 && (
                            <div className="mt-3.5 grid gap-2 sm:grid-cols-3 pt-3 border-t border-slate-100 dark:border-white/10">
                              {item.highlights.map((h, hIdx) => (
                                <div
                                  key={hIdx}
                                  className="inline-flex items-center gap-2 rounded-lg bg-white dark:bg-white/[0.06] p-2.5 border border-slate-200/70 dark:border-white/10 shadow-2xs"
                                >
                                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                                  <span className="font-inter text-[11.5px] font-semibold text-slate-800 dark:text-slate-200">
                                    {tx(h)}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
