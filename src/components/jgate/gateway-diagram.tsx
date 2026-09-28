"use client";

import { Reveal } from "./shared";
import { useI18n } from "@/lib/i18n";
import { Sparkles, Building, ArrowRight, Users, GraduationCap, Handshake, Network, Factory } from "lucide-react";
import { JapanFlag, IndiaFlag } from "./icons";

/* ============================================================
   J-GATE Japan-India Entry Gateway Corridor Component
   Based on handwritten Image 2 diagram:
   Left: Japanese Enterprises (Company A, B, C)
   Center: J-GATE HUB in Hyderabad
   Right: Indian Ecosystem Connections (Suppliers, Talent, Clients, Group, Academics)
   ============================================================ */

export function GatewayDiagram() {
  const { tx } = useI18n();

  const ecosystemNodes = [
    {
      icon: Factory,
      title: { EN: "Suppliers & Vetted Vendors", JP: "現地サプライヤー・提携ベンダー" },
      desc: { EN: "Verified local supply chain partners & manufacturing suppliers", JP: "厳選された現地サプライチェーン・部材・調達パートナー" },
    },
    {
      icon: Users,
      title: { EN: "Elite Tech Talent & Engineers", JP: "高度ITエンジニア・開発チーム採用" },
      desc: { EN: "Direct hiring pipelines for senior developers, PMs, and bilingual talent", JP: "名門大学やT-Hubと連携した高度エンジニア・バイリンガル採用" },
    },
    {
      icon: Handshake,
      title: { EN: "Corporate Clients & Partners", JP: "現地クライアント・販売パートナー" },
      desc: { EN: "Warm introductions to major Indian enterprises & MNC clients", JP: "インド大手企業や現地ジョイントベンチャーとの商談マッチング" },
    },
    {
      icon: Network,
      title: { EN: "Bilateral Group & Business Ecosystem", JP: "日印共創グループネットワーク" },
      desc: { EN: "Indobox ecosystem & resident Japan Desk cross-border network", JP: "Indoboxのネットワークと常駐日本語デスクによる実務支援" },
    },
    {
      icon: GraduationCap,
      title: { EN: "Academics & Innovation (IITs / T-Hub)", JP: "大学・研究機関（IIT・T-Hub連携）" },
      desc: { EN: "Joint R&D, tech transfer & university research collaboration", JP: "インド最高峰の工科大学（IIT）やT-Hubとの共同R&D・技術提携" },
    },
  ];

  return (
    <section className="section-pad bg-ivory dark:bg-[#080d17] relative overflow-hidden border-t border-slate-200/80 dark:border-white/10">
      {/* Subtle ambient light gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(188, 26, 44, 0.05) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="container-jg relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-crimson/30 dark:border-crimson/40 bg-crimson/10 dark:bg-crimson/20 px-4 py-1.5 font-inter text-[11px] font-extrabold uppercase tracking-[0.18em] text-crimson dark:text-rose-400 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              {tx({ EN: "Entry Corridor Model", JP: "進出ゲートウェイモデル" })}
            </span>
            <h2
              className="mt-3 font-serif-jp font-extrabold leading-[1.2] text-ink dark:text-white"
              style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)" }}
            >
              {tx({
                EN: "Japan → J-GATE Hyderabad Hub → Indian Ecosystem",
                JP: "日本企業 → J-GATEハイデラバード拠点 → インド各種エコシステム"
              })}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl font-inter text-[13.5px] sm:text-[14.5px] leading-relaxed text-slate-600 dark:text-slate-300">
              {tx({
                EN: "J-GATE serves as the single bilateral gateway connecting Japanese enterprises directly to Hyderabad's suppliers, tech talent, corporate clients, and academic R&D hubs.",
                JP: "J-GATEは、日本企業がインド市場に参入する際の「単一の共創窓口」となり、サプライヤー、IT人材、取引先、大学研究機関へとワンストップで接続します。",
              })}
            </p>
          </div>
        </Reveal>

        {/* Dynamic Interactive Diagram Grid */}
        <div className="grid lg:grid-cols-12 gap-6 items-center">
          
          {/* 1. Left Box: Japanese Enterprises */}
          <div className="lg:col-span-3 space-y-3">
            <Reveal variant="left">
              <div className="text-center mb-2">
                <span className="font-inter text-[11px] font-extrabold uppercase tracking-widest text-slate-600 dark:text-slate-300 flex items-center justify-center gap-1.5">
                  <JapanFlag className="h-3.5 w-5 rounded-2xs" />
                  <span>{tx({ EN: "Japanese Enterprises", JP: "進出希望 日本企業" })}</span>
                </span>
              </div>
              
              {["Enterprise A (Tech & Manufacturing)", "Enterprise B (IT & SaaS)", "Enterprise C (Regional Bank & SME)"].map((comp, i) => (
                <div
                  key={i}
                  className="luxury-light-card group flex items-center gap-3 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-3.5 shadow-sm hover:border-crimson/40 transition-all duration-300"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-white font-mono font-bold text-xs">
                    {String.fromCharCode(65 + i)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block font-serif-jp text-xs sm:text-sm font-bold text-ink dark:text-white truncate">
                      {comp}
                    </span>
                    <span className="block font-inter text-[10.5px] text-slate-600 dark:text-slate-400">
                      {tx({ EN: "India Expansion Project", JP: "インド事業開発・展開" })}
                    </span>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Flow Indicator Arrow Left -> Center */}
          <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
            <div className="flex flex-col items-center gap-1 text-crimson dark:text-rose-400">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider">{tx({ EN: "Entry", JP: "参入" })}</span>
              <ArrowRight className="h-6 w-6 animate-pulse" />
            </div>
          </div>

          {/* 2. Center Shrine Box: J-GATE HUB in Hyderabad */}
          <div className="lg:col-span-4">
            <Reveal variant="scale" delay={80}>
              <div className="luxury-light-card card-sheen relative rounded-3xl border-2 border-crimson dark:border-rose-400/80 bg-gradient-to-b from-white via-rose-50/30 to-white dark:from-[#121c2e] dark:via-[#0c1424] dark:to-[#121c2e] p-6 sm:p-8 shadow-2xl text-center ring-4 ring-crimson/10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-crimson px-3.5 py-1 font-inter text-[10.5px] font-extrabold uppercase tracking-widest text-white shadow-md shadow-crimson/30 mb-3">
                  <Sparkles className="h-3 w-3 text-saffron fill-saffron" />
                  <span>{tx({ EN: "BILATERAL HUB ★", JP: "日印共創ハブ ★" })}</span>
                </div>

                <h3 className="font-serif-jp text-2xl sm:text-3xl font-black text-crimson dark:text-rose-300 tracking-tight">
                  J-GATE HUB
                </h3>
                <p className="font-inter text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 mt-1">
                  {tx({ EN: "Hyderabad, India", JP: "インド・ハイデラバード拠点" })}
                </p>

                <p className="mt-3 font-inter text-[12px] sm:text-[13px] leading-relaxed text-slate-600 dark:text-slate-300 border-t border-b border-crimson/15 py-3">
                  {tx({
                    EN: "Single Gateway: Dedicated Japanese office infrastructure + resident Japan Desk advisory + legal, tax, incorporation & talent hiring.",
                    JP: "日系企業専用オフィス、現地常駐の日本語相談窓口、法人設立・税務・高度IT人材採用までを一括管理。",
                  })}
                </p>

                <div className="mt-3 flex items-center justify-center gap-2 text-[11px] font-bold text-slate-600 dark:text-slate-300">
                  <JapanFlag className="h-3.5 w-5 rounded-2xs" />
                  <span>JAPAN ↔ INDIA BRIDGE</span>
                  <IndiaFlag className="h-3.5 w-5 rounded-2xs" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Flow Indicator Arrow Center -> Right */}
          <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
            <div className="flex flex-col items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider">{tx({ EN: "Connect", JP: "接続" })}</span>
              <ArrowRight className="h-6 w-6 animate-pulse" />
            </div>
          </div>

          {/* 3. Right Box: Indian Ecosystem Connections */}
          <div className="lg:col-span-3 space-y-2.5">
            <Reveal variant="right" delay={120}>
              <div className="text-center mb-2">
                <span className="font-inter text-[11px] font-extrabold uppercase tracking-widest text-slate-600 dark:text-slate-300 flex items-center justify-center gap-1.5">
                  <IndiaFlag className="h-3.5 w-5 rounded-2xs" />
                  <span>{tx({ EN: "Indian Ecosystem", JP: "インド現地各種エコシステム" })}</span>
                </span>
              </div>

              {ecosystemNodes.map((node, idx) => {
                const Icon = node.icon;
                return (
                  <div
                    key={idx}
                    className="luxury-light-card group flex items-start gap-2.5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-2.5 sm:p-3 shadow-2xs hover:border-emerald-500/40 transition-all duration-300"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-600 dark:text-emerald-400 mt-0.5">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-serif-jp text-xs font-bold text-ink dark:text-white truncate">
                        {tx(node.title)}
                      </h4>
                      <p className="font-inter text-[10.5px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-1">
                        {tx(node.desc)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
