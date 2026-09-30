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
      EN: "The main primary hub is located in Hyderabad, operational from June 2026. A second sub-hub in Gurgaon (Delhi NCR) is currently under preparation.",
      JP: "メインハブはハイデラバードに位置し、2026年6月より本格稼働します。また、北インドの拠点としてグルガオン（デリー首都圏）サブハブの開設準備を進めています。",
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
    id: "pricing-jpy",
    category: "pricing",
    categoryLabel: { EN: "Membership & Pricing", JP: "料金プラン・お支払い" },
    q: {
      EN: "Can fees be paid in Japanese Yen (JPY)?",
      JP: "日本円（JPY）での支払いは可能ですか？",
    },
    a: {
      EN: "Yes, payments can be settled in either Indian Rupees (INR) or Japanese Yen (JPY), calculated using prevailing exchange rates.",
      JP: "はい、インドルピー（INR）のほか、為替レートに基づいた日本円（JPY）でのご決済・請求書発行にも対応しています。",
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
    id: "sup-academy",
    category: "support",
    categoryLabel: { EN: "Business Support & Relocation", JP: "法人設立・現地生活支援" },
    q: {
      EN: "What is Indobox Academy?",
      JP: "Indobox Academy（勉強会）とはどのようなプログラムですか？",
    },
    a: {
      EN: "Indobox Academy conducts 60-minute online workshops every 1–2 months, led by experts such as Tomio Isogai (former MD of Sharp India). It trains Japanese business representatives on Indian commercial customs, risk management, and market navigation.",
      JP: "元シャープ・インディア社長の磯貝富雄氏をはじめとする専門家を講師に迎え、1〜2ヶ月ごとに60分間のオンライン講座を開催。インド特有の商習慣、リスク管理、事業開拓ノウハウを伝授します。",
    },
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
      {/* 1. HERO BANNER */}
      <PageHero
        eyebrowKey="faq.eyebrow"
        layout="center"
        titleNode={
          <span>
            {tx({
              EN: "Frequently Asked Questions",
              JP: "よくあるご質問",
            })}
          </span>
        }
        subtitleNode={tx({
          EN: "Clear, authoritative answers regarding workspace options, resident Japan Desk operations, Indian incorporation, talent acquisition, and bilateral growth.",
          JP: "拠点利用、常駐ジャパンデスク、法人設立、人材採用、日印共創に関する疑問にお答えします。",
        })}
        tags={[
          { EN: "Incorporation & Tax Compliance", JP: "法人登記・税務関係" },
          { EN: "Workspace & Resident Support", JP: "拠点利用・常駐支援" },
          { EN: "Hiring & Recruitment", JP: "ITエンジニア採用" },
        ]}
      />

      {/* 2. REASSURANCE PODS (4 PILLARS) */}
      <section className="border-b border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#0f1728] py-8 transition-colors">
        <div className="container-jg">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: tx({ EN: "Resident Japan Desk", JP: "常駐ジャパンデスク" }),
                desc: tx({ EN: "Japanese directors on site every day", JP: "日本人ディレクターが現地常駐" }),
              },
              {
                icon: Building2,
                title: tx({ EN: "Hyderabad Hub", JP: "ハイデラバード拠点" }),
                desc: tx({ EN: "Fully equipped, ready-to-use offices", JP: "即日稼働可能な完全インフラ" }),
              },
              {
                icon: Landmark,
                title: tx({ EN: "Legal & Regulatory Setup", JP: "100% 法令順守" }),
                desc: tx({ EN: "Registered office address & GST registration", JP: "公認商業登記住所・GST対応" }),
              },
              {
                icon: MessageSquare,
                title: tx({ EN: "Free Business Consultation", JP: "無料よろず相談" }),
                desc: tx({ EN: "Practical guidance for entering the Indian market", JP: "進出検討企業への個別助言" }),
              },
            ].map((pod, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <div className="flex items-start gap-3 rounded-xl border border-slate-100 dark:border-white/10 bg-ivory/50 dark:bg-white/[0.04] p-4 transition-all hover:border-crimson/30 dark:hover:border-rose-400/40 hover:bg-ivory dark:hover:bg-white/[0.08] hover:shadow-sm">
                  <div className="icon-pod h-9 w-9 shrink-0 mt-0.5">
                    <pod.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-serif-jp text-[13.5px] font-bold text-ink dark:text-white">{pod.title}</h3>
                    <p className="mt-0.5 font-inter text-[12px] text-slate-600 dark:text-slate-300 leading-snug">{pod.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MAIN FAQ ACCORDION SYSTEM */}
      <section className="py-8 sm:py-14 bg-ivory dark:bg-[#0b111e] transition-colors">
        <div className="container-jg max-w-4xl">
          <Reveal className="mb-8">
            <SectionHeading
              eyebrow={tx({ EN: "Executive Knowledge Base", JP: "詳細情報・FAQ" })}
              title={tx({
                EN: "Everything You Need to Know About Expansion",
                JP: "インド進出・拠点運営に関するFAQ",
              })}
              subtitle={tx({
                EN: "Detailed guidance on workspace options, resident Japan Desk support, company incorporation, and local hiring.",
                JP: "ハイデラバード拠点、ジャパンデスク伴走、現地法人設立、採用支援に関するよくある質問。",
              })}
            />
          </Reveal>

          {/* Header Row: Count Summary + Expand/Collapse Buttons */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 dark:border-white/10 pb-3 font-inter text-[12px] text-slate-500 dark:text-slate-400">
            <span className="font-bold text-slate-800 dark:text-slate-200">
              {tx({
                EN: `Frequently Asked Questions (${FAQ_LIST.length})`,
                JP: `よくあるご質問（全${FAQ_LIST.length}件）`,
              })}
            </span>
            <div className="flex items-center gap-3 font-semibold">
              <button
                onClick={expandAll}
                className="text-slate-700 dark:text-slate-300 hover:text-crimson dark:hover:text-rose-400 transition-colors cursor-pointer"
              >
                {tx({ EN: "Expand All", JP: "すべて開く" })}
              </button>
              <span className="text-slate-300 dark:text-white/20">|</span>
              <button
                onClick={collapseAll}
                className="text-slate-700 dark:text-slate-300 hover:text-crimson dark:hover:text-rose-400 transition-colors cursor-pointer"
              >
                {tx({ EN: "Collapse All", JP: "すべて閉じる" })}
              </button>
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3">
            {FAQ_LIST.map((item, idx) => {
              const isOpen = !!openIds[item.id];
              return (
                <Reveal key={item.id} delay={idx * 15}>
                  <div
                    className={cn(
                      "group overflow-hidden rounded-2xl border bg-white dark:bg-[#101a2c] transition-all duration-300 shadow-card dark:shadow-2xl hover:-translate-y-0.5",
                      isOpen
                        ? "border-crimson dark:border-rose-400/70 ring-2 ring-crimson/30 dark:ring-rose-400/30 shadow-lg"
                        : "border-slate-200/90 dark:border-white/16 hover:border-crimson/40 dark:hover:border-saffron/50"
                    )}
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="flex w-full items-center justify-between gap-3.5 p-4 sm:p-5 text-left transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 flex-1 min-w-0 pr-1">
                        <span className="inline-block shrink-0 rounded-md bg-crimson/10 dark:bg-rose-950/50 px-2.5 py-1 font-inter text-[11.5px] sm:text-[12.5px] font-bold text-crimson dark:text-rose-400 uppercase tracking-wider max-w-full truncate">
                          {tx(item.categoryLabel)}
                        </span>
                        <h3
                          className={cn(
                            "font-serif-jp font-bold text-[14.5px] sm:text-[16px] leading-snug transition-colors",
                            isOpen
                              ? "text-crimson dark:text-rose-400"
                              : "text-ink dark:text-white group-hover:text-crimson dark:group-hover:text-rose-400"
                          )}
                        >
                          {tx(item.q)}
                        </h3>
                      </div>

                      <div
                        className={cn(
                          "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-transform duration-300",
                          isOpen
                            ? "bg-crimson text-white rotate-180 shadow-xs"
                            : "bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-white/20"
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
                        <div className="border-t border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] p-4 sm:p-5 pt-3 sm:pt-3.5">
                          <p className="font-inter text-[13px] sm:text-[14px] leading-relaxed text-slate-700 dark:text-slate-300">
                            {tx(item.a)}
                          </p>

                          {item.highlights && item.highlights.length > 0 && (
                            <div className="mt-3.5 grid gap-2 sm:grid-cols-3 pt-3 border-t border-slate-100 dark:border-white/10">
                              {item.highlights.map((h, hIdx) => (
                                <div
                                  key={hIdx}
                                  className="inline-flex items-center gap-2 rounded-xl bg-white dark:bg-white/[0.06] p-2.5 border border-slate-200/70 dark:border-white/10 shadow-2xs"
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
