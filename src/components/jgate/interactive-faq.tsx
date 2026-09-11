"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Reveal, Eyebrow } from "./shared";
import { ChevronDown, HelpCircle, Sparkles, Building2, ShieldCheck, FileText } from "lucide-react";
import Link from "next/link";

const FAQ_ITEMS = [
  {
    category: "workspace",
    q: {
      EN: "Can I move in immediately, and what is the minimum lease period?",
      JP: "即日入居は可能ですか？また最短契約期間はどれくらいですか？",
    },
    a: {
      EN: "Yes, J-Gate provides plug-and-play workspaces at Cyber Gateway, Hyderabad. Once your membership agreement is signed, you can start operating immediately with smart keycard access. We offer flexible terms ranging from month-to-month satellite arrangements to multi-year enterprise leases.",
      JP: "はい、ハイデラバード・サイバーゲートウェイにて即時稼働可能なワークスペースをご用意しています。契約締結後、スマートキーカードですぐにご利用いただけます。1ヶ月単位の柔軟なサテライト契約から複数年の長期利用まで対応可能です。",
    },
  },
  {
    category: "japandesk",
    q: {
      EN: "What kind of support does the resident Japan Desk provide?",
      JP: "常駐ジャパンデスクでは具体的にどのようなサポートを受けられますか？",
    },
    a: {
      EN: "Our Japan Desk features native Japanese directors and bilingual professionals. We provide daily 'Yorozu' business consultations, market research guidance, partner introductions (legal, accounting, taxation, recruitment), and meeting interpretation.",
      JP: "日本人ディレクターおよびバイリンガルスタッフが常駐し、日々の「よろず相談」、市場動向調査、信頼できる現地提携先（法務・会計・税務・採用）の紹介、商談同席・通訳などを一気通貫でサポートします。",
    },
  },
  {
    category: "incorporation",
    q: {
      EN: "Can J-Gate serve as our official registered office address for Indian incorporation?",
      JP: "J-Gateを現地法人設立の登記住所として利用できますか？",
    },
    a: {
      EN: "Yes. J-Gate at Cyber Gateway, Hitech City is fully certified and recognized for corporate registration (MCA, GST, PAN/TAN). We also assist with NOC issuance and bank account opening coordination.",
      JP: "はい、ハイデラバード・ハイテックシティのCyber Gatewayに位置するJ-Gateは、現地法人登記（MCA・GST・PAN/TAN）の公認住所としてご利用いただけます。登記に必要な承諾書（NOC）の発行や銀行口座開設も手厚くサポートします。",
    },
  },
  {
    category: "workspace",
    q: {
      EN: "What security and connectivity infrastructure is provided?",
      JP: "セキュリティおよび通信環境はどのようになっていますか？",
    },
    a: {
      EN: "The facility is equipped with dedicated redundant 1Gbps fiber connections, enterprise firewall protection, 24/7 security personnel, biometric/smart card access, and full power backup with uninterruptible power supplies (UPS).",
      JP: "二重化された専用1Gbps光ファイバー回線、エンタープライズファイアウォール、24時間常駐セキュリティ、ICカード入退室管理、UPS無停電電源装置を完備し、日本企業の高いセキュリティ基準を満たしています。",
    },
  },
  {
    category: "japandesk",
    q: {
      EN: "How do we collaborate with J-Gate's partners like T-Hub and Woxsen University?",
      JP: "T-HubやWoxsen大学などの現地提携機関とはどのように連携できますか？",
    },
    a: {
      EN: "J-Gate members receive exclusive invitations to bilateral mixers, startup demo days at T-Hub, academic talent pipelines from Woxsen University, and briefings with Telangana government leaders.",
      JP: "J-Gate会員は、日印ビジネスマッチング会、T-Hubでのスタートアップデモデイ、Woxsen大学からの優秀な工学・MBA人材採用パイプライン、テランガナ州政府との意見交換会へ優先的に参加・連携いただけます。",
    },
  },
];

export function InteractiveFAQ() {
  const { tx } = useI18n();
  const [filter, setFilter] = useState<"all" | "workspace" | "japandesk" | "incorporation">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredItems = FAQ_ITEMS.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <section className="py-8 sm:py-12 relative overflow-hidden bg-ivory">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/10 px-4 py-1 font-inter text-[11px] font-bold uppercase tracking-wider text-crimson">
              <HelpCircle className="h-3.5 w-3.5" />
              {tx({ EN: "Frequently Asked Questions", JP: "よくあるご質問" })}
            </span>
            <h2
              className="mt-3 font-serif-jp font-bold text-ink"
              style={{ fontSize: "clamp(1.875rem, 3.8vw, 2.75rem)" }}
            >
              {tx({ EN: "Everything You Need to Know", JP: "疑問や不安を解消するQ&A" })}
            </h2>
            <p className="mt-2 font-inter text-[13.5px] text-slate">
              {tx({
                EN: "Common questions regarding hub facilities, Japan Desk consultation, leases, and incorporation support.",
                JP: "入居手続き、ジャパンデスクの支援内容、法人登記、施設利用に関する主なご質問にお答えします。",
              })}
            </p>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
          {[
            { id: "all", label: { EN: "All Questions", JP: "すべて" } },
            { id: "workspace", label: { EN: "Workspace & Facility", JP: "施設・設備" } },
            { id: "japandesk", label: { EN: "Japan Desk & Advisory", JP: "ジャパンデスク" } },
            { id: "incorporation", label: { EN: "Registration & Legal", JP: "法人登記・進出" } },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`rounded-full px-4 py-1.5 font-inter text-[12px] font-bold transition-all duration-300 ${
                filter === cat.id
                  ? "bg-crimson text-white shadow-md shadow-crimson/20"
                  : "bg-white text-slate hover:bg-slate-100 border border-slate-200/80"
              }`}
            >
              {tx(cat.label)}
            </button>
          ))}
        </div>

        <div className="mt-8 max-w-3xl mx-auto space-y-3">
          {filteredItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={i} delay={i * 60}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 bg-white ${
                    isOpen
                      ? "border-crimson/40 shadow-xl"
                      : "border-slate-200/80 shadow-sm hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between p-5 text-left transition-colors"
                  >
                    <span className="font-serif-jp text-[15.5px] sm:text-[17px] font-bold text-ink pr-4 leading-snug">
                      {tx(item.q)}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                        isOpen ? "bg-crimson text-white rotate-180" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 pb-5 pt-3 animate-in fade-in duration-300">
                      <p className="font-inter text-[13.5px] leading-relaxed text-slate-700">
                        {tx(item.a)}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
