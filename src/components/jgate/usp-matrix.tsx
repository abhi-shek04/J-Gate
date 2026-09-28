"use client";

import { useState } from "react";
import { Reveal } from "./shared";
import { useI18n } from "@/lib/i18n";
import { Sparkles, Building2, ShieldCheck, Scale, Award, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { JapanFlag, IndiaFlag } from "./icons";
import { cn } from "@/lib/utils";

/* ============================================================
   J-GATE USP Positioning Matrix Component
   Based on strategic positioning framework:
   Y-Axis: Facility (Office Infrastructure & Workspace)
   X-Axis: Business Support (Legal, Accounting, Consulting, Hiring)
   Highlights J-GATE in the top-right USP quadrant (High Facility + High Support)
   ============================================================ */

export function USPMatrix() {
  const { tx } = useI18n();
  const [activeSegment, setActiveSegment] = useState<"jgate" | "wework" | "consulting" | "thub">("jgate");

  const segments = {
    jgate: {
      title: { EN: "J-GATE (Unique Bilateral Hub)", JP: "J-GATE（日印専用共創ハブ）" },
      tag: { EN: "★ Top-Right USP Leader", JP: "★ 唯一無二のポジショニング" },
      badgeBg: "bg-crimson text-white border-crimson shadow-crimson/30",
      desc: {
        EN: "Dedicated Japan-India enterprise hub combining turnkey ready office suites with 100% Japanese on-site Japan Desk advisory, legal, accounting, incorporation & tech hiring under one roof.",
        JP: "日本企業専用の即日利用可能オフィスと、現地常駐の日本語サポート（法務・会計・登記・IT人材採用）をワンストップで完全融合した独自拠点。",
      },
      highlights: [
        { EN: "Plug-and-play executive desks & suites", JP: "即日利用可能デスク・個室キャビン" },
        { EN: "100% Native Japanese Japan Desk on-site", JP: "現地日本人ディレクター常駐サポート" },
        { EN: "Integrated legal, accounting & MCA setup", JP: "法人設立・登記・会計・法務ワンストップ" },
        { EN: "Direct tech talent hiring pipeline", JP: "高度ITエンジニア・マネージャー直接採用" },
      ],
    },
    wework: {
      title: { EN: "Generic Coworking / WeWork", JP: "一般コワーキング / WeWork" },
      tag: { EN: "Facility Only", JP: "オフィス施設のみ" },
      badgeBg: "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300 border-slate-300",
      desc: {
        EN: "Offers desk space and internet only. Zero Japanese-speaking advisors, no local legal/accounting integration, and no bilateral market entry guidance.",
        JP: "デスクやWi-Fiなどの場所提供のみ。日本語対応スタッフ不在、現地法務・会計手続き支援なし、日印特有の商習慣サポートなし。",
      },
      highlights: [
        { EN: "Basic desk space & Wi-Fi", JP: "共有スペース・Wi-Fiのみ" },
        { EN: "No Japanese support staff", JP: "日本語対応不可" },
        { EN: "No incorporation assistance", JP: "法人登記・行政手続き非対応" },
      ],
    },
    consulting: {
      title: { EN: "Consulting, Legal & Tax Firms", JP: "コンサルティング・法律・会計事務所" },
      tag: { EN: "Advisory Only (High Fee)", JP: "助言のみ（高価格）" },
      badgeBg: "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300 border-slate-300",
      desc: {
        EN: "High hourly advisory fees (¥500K–¥1M+/mo). Does not provide physical office space, requires separate vendors, and offers limited operational execution.",
        JP: "高額な顧問料（月額50万〜100万円以上）。物理的なオフィス拠点は提供されず、実務対応や別業者の手配が個別で必要。",
      },
      highlights: [
        { EN: "High monthly retainer costs", JP: "高額な月額アドバイザリー費用" },
        { EN: "No physical workspace hub", JP: "物理的な拠点・個室なし" },
        { EN: "Advisory only, execution separate", JP: "助言のみで実務・採用は別契約" },
      ],
    },
    thub: {
      title: { EN: "Incubation Centres / T-Hub", JP: "インキュベーションセンター / T-Hub" },
      tag: { EN: "General Incubation", JP: "一般スタートアップ支援" },
      badgeBg: "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300 border-slate-300",
      desc: {
        EN: "Excellent general startup ecosystem, but lacks dedicated Japanese enterprise compliance, native Japanese staff, and custom corporate setups.",
        JP: "優れた地元スタートアップ支援エコシステムだが、日系企業の厳格なコンプライアンス基準や日本語での日常実務サポートには非対応。",
      },
      highlights: [
        { EN: "General startup community", JP: "一般的スタートアップコミュニティ" },
        { EN: "Not specialized for Japan", JP: "日系企業特有のニーズ非対応" },
        { EN: "English-only operations", JP: "英語のみの対応" },
      ],
    },
  };

  return (
    <section className="section-pad bg-ivory-warm dark:bg-[#070c16] relative overflow-hidden border-t border-b border-slate-200/80 dark:border-white/10">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 75% 25%, rgba(188,26,44,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 25% 75%, rgba(232,160,26,0.06) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="container-jg relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-crimson/30 dark:border-crimson/40 bg-crimson/10 dark:bg-crimson/20 px-4 py-1.5 font-inter text-[11px] font-extrabold uppercase tracking-[0.18em] text-crimson dark:text-rose-400 backdrop-blur-md">
              <Award className="h-3.5 w-3.5" />
              {tx({ EN: "Strategic USP Matrix", JP: "J-GATEの独自の立ち位置（USP）" })}
            </span>
            <h2
              className="mt-3 font-serif-jp font-extrabold leading-[1.2] text-ink dark:text-white"
              style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)" }}
            >
              {tx({
                EN: "High Facility + High Business Support — The J-GATE USP",
                JP: "充実したオフィス環境 × 包括的ビジネス支援 — J-GATEだけの強み",
              })}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl font-inter text-[13.5px] sm:text-[14.5px] leading-relaxed text-slate-600 dark:text-slate-300">
              {tx({
                EN: "Unlike generic coworking spaces or costly advisory-only firms, J-GATE provides a dedicated Japanese enterprise hub in Hyderabad combining physical workspace with full operational execution.",
                JP: "単なるコワーキングスペースや助言のみの高額コンサル会社とは異なり、J-GATEは物理拠点と手厚い実務伴走（法務・会計・採用）を一つのハブで提供します。",
              })}
            </p>
          </div>
        </Reveal>

        {/* The 2D Matrix Chart Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive 2x2 Matrix Grid Box */}
          <div className="lg:col-span-7">
            <Reveal variant="scale">
              <div className="luxury-light-card card-sheen relative rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#0d1527]/95 p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
                
                {/* Y-Axis Label (Facility & Workspace) */}
                <div className="absolute top-3 left-6 flex items-center gap-1.5 text-xs font-bold font-inter text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                  <Building2 className="h-3.5 w-3.5 text-crimson" />
                  <span>{tx({ EN: "Facility & Workspace ▲", JP: "オフィス環境・拠点機能 ▲" })}</span>
                </div>

                {/* X-Axis Label (Business Support) */}
                <div className="absolute bottom-3 right-6 flex items-center gap-1.5 text-xs font-bold font-inter text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                  <span>{tx({ EN: "Business Support & Advisory ►", JP: "ビジネス支援・法務会計・採用 ►" })}</span>
                  <Scale className="h-3.5 w-3.5 text-saffron" />
                </div>

                {/* 2x2 Quadrant Grid */}
                <div className="my-8 pt-4 pb-4 grid grid-cols-2 gap-3.5 sm:gap-4 relative">
                  
                  {/* Axis Cross Lines */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="w-full h-px bg-slate-200 dark:bg-white/10" />
                    <div className="h-full w-px bg-slate-200 dark:bg-white/10 absolute" />
                  </div>

                  {/* Top-Left Quadrant: Generic Coworking */}
                  <button
                    onClick={() => setActiveSegment("wework")}
                    className={cn(
                      "group text-left relative rounded-2xl p-4 sm:p-5 border transition-all duration-300 flex flex-col justify-between h-36 sm:h-44",
                      activeSegment === "wework"
                        ? "bg-slate-100/90 dark:bg-white/10 border-slate-400 dark:border-white/30 shadow-md scale-[1.02]"
                        : "bg-slate-50/60 dark:bg-white/[0.03] border-slate-200/70 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                    )}
                  >
                    <div>
                      <span className="font-inter text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                        {tx({ EN: "High Facility · Low Support", JP: "拠点あり・支援なし" })}
                      </span>
                      <h4 className="font-serif-jp text-sm sm:text-base font-bold text-ink dark:text-white mt-1">
                        {tx({ EN: "Coworking / WeWork", JP: "一般コワーキング" })}
                      </h4>
                    </div>
                    <span className="text-[11px] font-inter font-medium text-slate-600 dark:text-slate-300 group-hover:text-ink dark:group-hover:text-white transition-colors">
                      {tx({ EN: "Workspace only (No Japan Desk)", JP: "場所提供のみ（日本語対応不可）" })} →
                    </span>
                  </button>

                  {/* Top-Right Quadrant: ★ J-GATE (The USP Winner!) */}
                  <button
                    onClick={() => setActiveSegment("jgate")}
                    className={cn(
                      "group text-left relative rounded-2xl p-4 sm:p-5 border transition-all duration-300 flex flex-col justify-between h-36 sm:h-44",
                      activeSegment === "jgate"
                        ? "bg-gradient-to-br from-crimson/15 via-crimson/5 to-amber-500/10 border-crimson dark:border-rose-400 shadow-xl shadow-crimson/15 ring-2 ring-crimson/40 scale-[1.04] z-10"
                        : "bg-crimson/[0.06] dark:bg-rose-950/30 border-crimson/40 hover:border-crimson shadow-md"
                    )}
                  >
                    {/* Badge */}
                    <div className="absolute -top-3 right-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-crimson px-2.5 py-0.5 font-inter text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-white shadow-md shadow-crimson/30">
                        <Sparkles className="h-3 w-3 text-saffron fill-saffron" />
                        <span>USP STAR ★</span>
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <JapanFlag className="h-3 w-4 rounded-2xs" />
                        <span className="font-inter text-[10.5px] sm:text-[11px] font-extrabold uppercase tracking-wider text-crimson dark:text-rose-400">
                          {tx({ EN: "Dedicated Japan-India Hub", JP: "日本企業専用ハブ" })}
                        </span>
                        <IndiaFlag className="h-3 w-4 rounded-2xs" />
                      </div>
                      <h3 className="font-serif-jp text-base sm:text-lg font-black text-crimson dark:text-rose-300">
                        J-GATE
                      </h3>
                    </div>

                    <div className="pt-2 border-t border-crimson/20 flex items-center justify-between">
                      <span className="text-[11px] sm:text-[11.5px] font-inter font-bold text-crimson dark:text-rose-300">
                        {tx({ EN: "High Facility + High Support", JP: "拠点 × 伴走支援 完全統合" })}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-crimson dark:text-rose-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </button>

                  {/* Bottom-Left Quadrant: Incubation Center (T-Hub) */}
                  <button
                    onClick={() => setActiveSegment("thub")}
                    className={cn(
                      "group text-left relative rounded-2xl p-4 sm:p-5 border transition-all duration-300 flex flex-col justify-between h-36 sm:h-44",
                      activeSegment === "thub"
                        ? "bg-slate-100/90 dark:bg-white/10 border-slate-400 dark:border-white/30 shadow-md scale-[1.02]"
                        : "bg-slate-50/60 dark:bg-white/[0.03] border-slate-200/70 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                    )}
                  >
                    <div>
                      <span className="font-inter text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                        {tx({ EN: "Incubation Center", JP: "インキュベーション" })}
                      </span>
                      <h4 className="font-serif-jp text-sm sm:text-base font-bold text-ink dark:text-white mt-1">
                        {tx({ EN: "T-Hub / Incubator", JP: "T-Hub・一般インキュベーター" })}
                      </h4>
                    </div>
                    <span className="text-[11px] font-inter font-medium text-slate-600 dark:text-slate-300 group-hover:text-ink dark:group-hover:text-white transition-colors">
                      {tx({ EN: "General startup incubation", JP: "一般的スタートアップ支援" })} →
                    </span>
                  </button>

                  {/* Bottom-Right Quadrant: Consulting & Legal Firms */}
                  <button
                    onClick={() => setActiveSegment("consulting")}
                    className={cn(
                      "group text-left relative rounded-2xl p-4 sm:p-5 border transition-all duration-300 flex flex-col justify-between h-36 sm:h-44",
                      activeSegment === "consulting"
                        ? "bg-slate-100/90 dark:bg-white/10 border-slate-400 dark:border-white/30 shadow-md scale-[1.02]"
                        : "bg-slate-50/60 dark:bg-white/[0.03] border-slate-200/70 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                    )}
                  >
                    <div>
                      <span className="font-inter text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                        {tx({ EN: "Low Facility · High Support", JP: "拠点なし・高額助言のみ" })}
                      </span>
                      <h4 className="font-serif-jp text-sm sm:text-base font-bold text-ink dark:text-white mt-1">
                        {tx({ EN: "Consulting & Legal Firms", JP: "コンサル・法務・会計事務所" })}
                      </h4>
                    </div>
                    <span className="text-[11px] font-inter font-medium text-slate-600 dark:text-slate-300 group-hover:text-ink dark:group-hover:text-white transition-colors">
                      {tx({ EN: "Advisory only (No workspace)", JP: "助言のみ（拠点なし・高費用）" })} →
                    </span>
                  </button>

                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Selected Segment Details Card */}
          <div className="lg:col-span-5 text-left">
            <Reveal delay={120} key={activeSegment}>
              <div className="luxury-light-card card-sheen relative rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-6 sm:p-7 shadow-xl">
                
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-white/10">
                  <h3 className="font-serif-jp text-lg sm:text-xl font-bold text-ink dark:text-white">
                    {tx(segments[activeSegment].title)}
                  </h3>
                  <span className={cn("inline-block rounded-full px-2.5 py-0.5 font-inter text-[10.5px] font-bold border", segments[activeSegment].badgeBg)}>
                    {tx(segments[activeSegment].tag)}
                  </span>
                </div>

                <p className="mt-4 font-inter text-[13.5px] sm:text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">
                  {tx(segments[activeSegment].desc)}
                </p>

                <div className="mt-5 space-y-2 pt-3 border-t border-slate-100 dark:border-white/10">
                  <span className="font-inter text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {tx({ EN: "Key Feature Analysis:", JP: "主な特徴:" })}
                  </span>
                  {segments[activeSegment].highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[12px] sm:text-[13px] font-inter text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className={cn("h-4 w-4 shrink-0", activeSegment === "jgate" ? "text-crimson dark:text-rose-400" : "text-slate-400")} />
                      <span>{tx(h)}</span>
                    </div>
                  ))}
                </div>

                {activeSegment !== "jgate" && (
                  <button
                    onClick={() => setActiveSegment("jgate")}
                    className="mt-5 w-full py-2.5 rounded-xl bg-crimson/10 dark:bg-rose-950/40 text-crimson dark:text-rose-300 font-inter text-xs font-bold hover:bg-crimson hover:text-white transition-colors text-center block"
                  >
                    {tx({ EN: "Compare with J-GATE USP ★", JP: "J-GATEの利点と比較する ★" })}
                  </button>
                )}

              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
