"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import {
  Compass,
  Target,
  Building2,
  Rocket,
  CheckCircle2,
  Sparkles,
  Zap,
  Users2,
  MapPin,
} from "lucide-react";
import { Reveal } from "./shared";

/* ============================================================
   J-Gate India Entry Framework (4-Step Bilateral Corridor)
   Vivid, clearly visible Japan-India flag handshake background
   with ultra-sharp frosted glass cards for perfect legibility.
   ============================================================ */

const STEPS = [
  {
    step: "01",
    tag: { EN: "Step 1 · Feasibility", JP: "ステップ 1 · 事前調査" },
    title: { EN: "Feasibility Study", JP: "フィージビリティ調査" },
    desc: {
      EN: "Evaluate Indian market potential, regulatory requirements, competitor landscape, and operational viability through tailored feasibility research.",
      JP: "インド市場の規模、法規制要件、競合環境、現地展開の実現可能性を多角的に分析し、進出の確実な根拠を構築します。",
    },
    icon: Compass,
    points: [
      { EN: "Market & regulatory feasibility analysis", JP: "市場規模・規制・リスク事前調査" },
      { EN: "Local ecosystem & competitor mapping", JP: "現地競合・エコシステムの検証" },
    ],
  },
  {
    step: "02",
    tag: { EN: "Step 2 · GTM Strategy", JP: "ステップ 2 · 意思決定・戦略" },
    title: { EN: "Decision Making & GTM", JP: "意思決定・参入戦略（GTM）" },
    desc: {
      EN: "Make informed executive decisions, structure your business model, and define a clear Go-To-Market (GTM) roadmap tailored to India.",
      JP: "進出形態やビジネスモデルを確定し、現地パートナー選定や販路開拓に向けた実効性の高いGTM戦略を策定します。",
    },
    icon: Target,
    points: [
      { EN: "Validated go/no-go entry strategy", JP: "参入形態と投資計画の明確な意思決定" },
      { EN: "Custom Go-To-Market (GTM) roadmap", JP: "インド市場向けGTM戦略のロードマップ" },
    ],
  },
  {
    step: "03",
    tag: { EN: "Step 3 · Establishment", JP: "ステップ 3 · 法人設立・採用" },
    title: { EN: "Company Setup & Hiring", JP: "法人設立とスタッフ採用" },
    desc: {
      EN: "Incorporate your legal entity at Cyber Gateway, secure tax and bank accounts, and recruit core software engineers and bilingual executives.",
      JP: "Cyber Gatewayでの法人登記、税務登録・銀行口座開設を完了し、優秀なエンジニアと現地実務スタッフを採用します。",
    },
    icon: Building2,
    points: [
      { EN: "MCA legal incorporation & bank accounts", JP: "公式登記住所・法人口座・税務登録" },
      { EN: "Talent recruitment & leadership hiring", JP: "ITエンジニア・幹部人材の直接採用" },
    ],
  },
  {
    step: "04",
    tag: { EN: "Step 4 · Execution", JP: "ステップ 4 · 事業開始・運用" },
    title: { EN: "Start Operations", JP: "本格稼働・事業開始" },
    desc: {
      EN: "Launch on-ground operations immediately with fully equipped facilities, resident Japanese advisory, and ecosystem partnership support.",
      JP: "即日稼働可能なオフィス環境、常駐日本人ディレクターによる伴走、現地エコシステム連携でスムーズに事業を開始します。",
    },
    icon: Rocket,
    points: [
      { EN: "Ready-to-use workspace & infrastructure", JP: "即日入居可能な高規格インフラ完備" },
      { EN: "Resident Japanese advisory & ecosystem ties", JP: "日本人ディレクター常駐・事業拡大支援" },
    ],
  },
];

export function BilateralCorridorVisualizer() {
  const { tx } = useI18n();

  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-16 bg-[#080d1a] text-white border-y border-white/10">
      {/* ── Background: Japan-India Flags Handshake Image (Clearly & Visibly Visible) ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/japan-india-handshake-flag.jpg"
          alt="Japan India Bilateral Partnership"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-90 contrast-105"
        />
        {/* Soft edge blend for smooth integration into page without washing out the photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d1a]/85 via-black/45 to-[#080d1a]/90" />
      </div>

      <div className="container-jg relative z-10">
        {/* ── Section Header (Compact, High-Contrast with subtle text shadow) ── */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-saffron/50 bg-[#080d1a]/85 px-3.5 py-0.5 sm:px-4 sm:py-1 font-inter text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-saffron shadow-lg backdrop-blur-md">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-saffron" />
              {tx({ EN: "Simple 4-Step Process", JP: "安心の4ステップ進出" })}
            </span>
            <h2
              className="mt-2.5 font-serif-jp font-bold text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.35rem)" }}
            >
              {tx({
                EN: "How to Launch Your Business in India",
                JP: "インド進出を成功に導く4つのステップ",
              })}
            </h2>
            <p className="mt-1.5 sm:mt-2 font-inter text-[12.5px] sm:text-[14px] leading-relaxed text-slate-100 max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              {tx({
                EN: "From initial feasibility study to GTM strategy, company setup, and live operations — full executive support at Cyber Gateway, Hyderabad.",
                JP: "フィージビリティ調査からGTM戦略策定、法人設立・採用、そして本格稼働まで — ハイデラバード現地から一貫して伴走します。",
              })}
            </p>
          </div>
        </Reveal>

        {/* ── 4 Step Cards Grid (Luxury Frosted Glass Cards with high contrast & sheen) ── */}
        <div className="mt-6 sm:mt-9 grid gap-3.5 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.step} delay={idx * 70}>
                <div className="luxury-glass-card card-sheen lift-card-dark group relative flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-white/20 bg-[#080d1a]/85 p-4 sm:p-5 lg:p-6 backdrop-blur-xl transition-all duration-300 hover:border-saffron/60 hover:bg-[#080d1a]/95 shadow-2xl">
                  {/* Top: Icon + Number */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-crimson to-crimson-deep text-white shadow-lg shadow-crimson/35 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                        <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" strokeWidth={1.8} />
                      </div>
                      <span className="font-mono text-xl sm:text-2xl font-black text-white/30 group-hover:text-saffron transition-colors">
                        {s.step}
                      </span>
                    </div>

                    {/* Step Tag */}
                    <span className="mt-3 sm:mt-4 inline-block rounded-full bg-saffron/15 border border-saffron/35 px-2.5 py-0.5 font-inter text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-saffron shadow-sm">
                      {tx(s.tag)}
                    </span>

                    {/* Title */}
                    <h3 className="mt-2 font-serif-jp text-[14.5px] sm:text-[16px] font-bold text-white group-hover:text-saffron transition-colors leading-snug">
                      {tx(s.title)}
                    </h3>

                    {/* Description */}
                    <p className="mt-1.5 font-inter text-[12px] sm:text-[12.5px] leading-relaxed text-slate-200">
                      {tx(s.desc)}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <ul className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2 border-t border-white/15 pt-3 sm:pt-3.5">
                    {s.points.map((pt, pi) => (
                      <li key={pi} className="flex items-start gap-2 sm:gap-2.5 text-[11.5px] sm:text-[12px] font-inter text-slate-100">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success mt-0.5 drop-shadow-[0_0_6px_rgba(26,147,111,0.5)]" />
                        <span>{tx(pt)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ── Bottom 3-Item Highlights Strip (Compact, High Contrast) ── */}
        <Reveal delay={180}>
          <div className="mt-5 sm:mt-7 rounded-xl sm:rounded-2xl border border-white/20 bg-[#080d1a]/85 px-3 py-3 sm:px-4 sm:py-3.5 backdrop-blur-md shadow-2xl">
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:divide-x sm:divide-white/15 text-center">
              <div className="px-2">
                <span className="inline-flex items-center gap-1.5 font-inter text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-saffron">
                  <Zap className="h-3 w-3" />
                  {tx({ EN: "Fast Setup", JP: "初期費用ゼロ" })}
                </span>
                <span className="mt-0.5 block font-inter text-[12px] sm:text-[13px] font-semibold text-white">
                  {tx({
                    EN: "No Setup Cost · Start Working on Day 1",
                    JP: "内装工事不要 · 初日からすぐに稼働可能",
                  })}
                </span>
              </div>
              <div className="px-2">
                <span className="inline-flex items-center gap-1.5 font-inter text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-saffron">
                  <Users2 className="h-3 w-3" />
                  {tx({ EN: "Japanese Support", JP: "安心の現地支援" })}
                </span>
                <span className="mt-0.5 block font-inter text-[12px] sm:text-[13px] font-semibold text-white">
                  {tx({
                    EN: "Bilingual Staff On-Site in Hyderabad",
                    JP: "日本人ディレクター常駐 · 日本語で相談",
                  })}
                </span>
              </div>
              <div className="px-2">
                <span className="inline-flex items-center gap-1.5 font-inter text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-saffron">
                  <MapPin className="h-3 w-3" />
                  {tx({ EN: "Prime Location", JP: "最高の立地" })}
                </span>
                <span className="mt-0.5 block font-inter text-[12px] sm:text-[13px] font-semibold text-white">
                  {tx({
                    EN: "Cyber Gateway, Hitech City, Hyderabad",
                    JP: "ハイデラバードIT特区 · Cyber Gateway",
                  })}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
