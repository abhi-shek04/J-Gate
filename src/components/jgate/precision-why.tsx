"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function PrecisionWhyPage() {
  const { tx } = useI18n();

  // --- Calculator State ---
  const [selectedPlan, setSelectedPlan] = useState<"satellite" | "standard" | "advance">("standard");
  const [selectedTeam, setSelectedTeam] = useState<string>("3");
  const [displayedJGate, setDisplayedJGate] = useState<number>(50000);
  const [displayedMarket, setDisplayedMarket] = useState<number>(260000);
  const [displayedSaving, setDisplayedSaving] = useState<number>(210000);
  const [displayedPct, setDisplayedPct] = useState<number>(81);

  // --- Scroll State for Counters & Meter ---
  const [meterAnimated, setMeterAnimated] = useState(false);
  const [statCounts, setStatCounts] = useState({ persons: 0, pillars: 0, bilingual: 0 });
  const statRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  const planData = {
    satellite: {
      jGate: 15000,
      jpy: "27,000",
      market: 120000,
      saving: 105000,
      pct: 87,
      name: { EN: "Satellite Plan", JP: "サテライトプラン" },
      desc: { EN: "Entry-level presence — solo rep or initial setup", JP: "初期調査・駐在員1名からのエントリー拠点" },
    },
    standard: {
      jGate: 50000,
      jpy: "90,000",
      market: 260000,
      saving: 210000,
      pct: 81,
      name: { EN: "Standard Plan", JP: "スタンダードプラン" },
      desc: { EN: "Core team workspace — most popular option", JP: "本格進出・コアチーム向け一番人気プラン" },
    },
    advance: {
      jGate: 120000,
      jpy: "216,000",
      market: 480000,
      saving: 360000,
      pct: 75,
      name: { EN: "Advance Plan", JP: "アドバンスプラン" },
      desc: { EN: "Full entity operations hub — maximum support", JP: "現地法人登記・本格事業拡大エンタープライズ" },
    },
  };

  // Smooth number interpolation on plan change
  useEffect(() => {
    const target = planData[selectedPlan];
    const duration = 700;
    const startTime = performance.now();

    const startJGate = displayedJGate;
    const startMarket = displayedMarket;
    const startSaving = displayedSaving;
    const startPct = displayedPct;

    let animFrameId: number;

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setDisplayedJGate(Math.round(startJGate + (target.jGate - startJGate) * ease));
      setDisplayedMarket(Math.round(startMarket + (target.market - startMarket) * ease));
      setDisplayedSaving(Math.round(startSaving + (target.saving - startSaving) * ease));
      setDisplayedPct(Math.round(startPct + (target.pct - startPct) * ease));

      if (progress < 1) {
        animFrameId = requestAnimationFrame(update);
      }
    };

    animFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animFrameId);
  }, [selectedPlan]);

  // Trigger hero meter & stat bar counters on scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      setMeterAnimated(true);
    }, 300);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate stats
            const duration = 1000;
            const startTime = performance.now();
            const step = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              setStatCounts({
                persons: Math.round(4 * ease),
                pillars: Math.round(7 * ease),
                bilingual: Math.round(100 * ease),
              });
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statRef.current) observer.observe(statRef.current);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="precision-corridor-root relative bg-[#08080E] text-[#F0EDE6] min-h-screen selection:bg-[#B8924A] selection:text-[#08080E] font-sans antialiased overflow-x-hidden">
      {/* Precision Grid Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,146,74,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(184,146,74,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Fixed Left Spine Gold Line */}
      <div
        className="pointer-events-none fixed left-[72px] top-0 bottom-0 w-[1px] z-10 hidden xl:block"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(184,146,74,0.35) 15%, rgba(184,146,74,0.35) 85%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* TOP TICKER STRIP (Marquee) */}
      <div className="relative z-20 w-full h-[40px] bg-[#0F0F18] border-b border-[rgba(184,146,74,0.35)] overflow-hidden flex items-center">
        <div className="ticker-track flex whitespace-nowrap will-change-transform animate-ticker">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#B8924A] px-4 flex items-center gap-4">
            <span>J-GATE</span> · <span>HYDERABAD OPERATIONS HUB</span> · <span>INDOBOX INDIA</span> · <span>ジェーゲート</span> · <span>THE JAPAN-INDIA CORRIDOR</span> · <span>2-4 PERSONS PER COMPANY</span> · <span>7 CORE PILLARS</span> · <span>FROM ¥90,000 /MO</span> · <span>CYBER GATEWAY</span> · <span>LAUNCHED JUNE 2026</span> ·
          </span>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#B8924A] px-4 flex items-center gap-4" aria-hidden="true">
            <span>J-GATE</span> · <span>HYDERABAD OPERATIONS HUB</span> · <span>INDOBOX INDIA</span> · <span>ジェーゲート</span> · <span>THE JAPAN-INDIA CORRIDOR</span> · <span>2-4 PERSONS PER COMPANY</span> · <span>7 CORE PILLARS</span> · <span>FROM ¥90,000 /MO</span> · <span>CYBER GATEWAY</span> · <span>LAUNCHED JUNE 2026</span> ·
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1 — HERO
          ───────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative z-10 min-h-[90vh] flex flex-col justify-center px-6 sm:px-12 lg:px-24 xl:pl-[120px] xl:pr-24 pt-16 pb-24 border-b border-[rgba(184,146,74,0.18)]"
      >
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="w-[2px] h-[16px] bg-[#B8924A]" />
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#B8924A]">
                {tx({ EN: "WHY J-GATE · THE STRATEGIC ADVANTAGE", JP: "WHY J-GATE · 戦略的投資メリット" })}
              </span>
            </div>

            {/* Cormorant Display Headline */}
            <h1 className="font-serif text-[48px] sm:text-[68px] lg:text-[88px] xl:text-[96px] font-light leading-[1.0] tracking-[-0.02em] text-[#F0EDE6]">
              <span className="block">{tx({ EN: "The Strategic", JP: "インド進出を最適化する" })}</span>
              <span className="block">{tx({ EN: "Investment", JP: "戦略的投資と" })}</span>
              <span className="relative inline-block text-[#F0EDE6]">
                {tx({ EN: "Advantage.", JP: "確かな事業基盤。" })}
                <span
                  className="absolute left-0 bottom-1 h-[2px] bg-[#B8924A] transition-all duration-1000 ease-out"
                  style={{ width: meterAnimated ? "100%" : "0%" }}
                />
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-2xl font-sans text-[15px] sm:text-[17px] font-light leading-relaxed text-[#9A98A4]">
              {tx({
                EN: "“The only option that combines a physical base, resident Japanese expertise, and direct hiring — at a cost-justifiable investment level.”",
                JP: "「専用拠点・常駐日本語専門家・直接採用支援をワンストップで兼ね備え、圧倒的な投資対効果を実現する唯一の選択肢」",
              })}
            </p>

            {/* Ghost CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#why-comparison"
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-transparent border border-[rgba(184,146,74,0.35)] hover:border-[#B8924A] hover:bg-[rgba(184,146,74,0.08)] text-[#F0EDE6] rounded-[2px] font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-300"
              >
                <span className="w-[2px] h-[12px] bg-[#B8924A] group-hover:scale-y-125 transition-transform" />
                <span>{tx({ EN: "DISCOVER THE DIFFERENCE ↓", JP: "他選択肢との違いを見る ↓" })}</span>
              </a>

              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C8392B] hover:bg-[#a82d22] text-[#F0EDE6] rounded-[2px] font-sans text-[12.5px] font-medium tracking-wider uppercase transition-all duration-300 shadow-md"
              >
                <span>{tx({ EN: "VIEW MEMBERSHIP PLANS", JP: "料金プランを見る" })}</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Hero Right: Precision Comparison Meter */}
          <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center p-8 bg-[#0F0F18] border border-[rgba(184,146,74,0.2)] rounded-[2px] relative">
            <div className="absolute top-3 left-4 font-mono text-[9px] uppercase tracking-[0.2em] text-[#5C5A68]">
              {tx({ EN: "STRATEGIC FIT INDEX", JP: "適合性インデックス" })}
            </div>
            <div className="w-full flex items-end justify-center gap-12 h-[220px] pt-8 pb-4">
              {/* J-Gate Bar */}
              <div className="flex flex-col items-center gap-3 h-full justify-end">
                <span className="font-mono text-[11px] font-bold text-[#B8924A]">100%</span>
                <div className="w-[8px] bg-[#161622] rounded-[1px] h-[160px] relative overflow-hidden flex items-end">
                  <div
                    className="w-full bg-[#B8924A] transition-all duration-1000 ease-out"
                    style={{ height: meterAnimated ? "100%" : "0%" }}
                  />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#F0EDE6] font-bold">
                  J-GATE
                </span>
              </div>

              {/* Alternatives Bar */}
              <div className="flex flex-col items-center gap-3 h-full justify-end">
                <span className="font-mono text-[11px] text-[#5C5A68]">35%</span>
                <div className="w-[8px] bg-[#161622] rounded-[1px] h-[160px] relative overflow-hidden flex items-end">
                  <div
                    className="w-full bg-[#3D4A5C] transition-all duration-1000 ease-out delay-200"
                    style={{ height: meterAnimated ? "35%" : "0%" }}
                  />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#5C5A68]">
                  ALTERNATIVES
                </span>
              </div>
            </div>

            <div className="w-full border-t border-[rgba(184,146,74,0.15)] pt-3 mt-2 flex justify-between items-center text-[10px] font-mono text-[#9A98A4]">
              <span>OPS + RESIDENT + NETWORK</span>
              <span className="text-[#B8924A]">TURNKEY</span>
            </div>
          </div>
        </div>

        {/* Section Coordinate Watermark */}
        <div className="absolute bottom-4 right-8 font-mono text-[10px] text-[#5C5A68] opacity-35 select-none pointer-events-none">
          N17°26' E78°29' · HYDERABAD_CORRIDOR
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2 — COMPARISON TABLE (Precision 5-Col Table)
          ───────────────────────────────────────────────────────────── */}
      <section
        id="why-comparison"
        className="relative z-10 px-6 sm:px-12 lg:px-24 xl:pl-[120px] xl:pr-24 py-24 border-b border-[rgba(184,146,74,0.18)]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-[2px] h-[16px] bg-[#B8924A]" />
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#B8924A]">
                  {tx({ EN: "SIDE-BY-SIDE COMPARISON · 比較表", JP: "SIDE-BY-SIDE COMPARISON · 徹底比較表" })}
                </span>
              </div>
              <h2 className="mt-4 font-serif text-[38px] sm:text-[52px] lg:text-[56px] font-light text-[#F0EDE6] leading-[1.08]">
                {tx({ EN: "J-Gate vs The Alternatives", JP: "J-Gateと他選択肢の徹底比較" })}
              </h2>
              <p className="mt-2 font-sans text-[14px] sm:text-[15px] font-light text-[#9A98A4] max-w-2xl">
                {tx({
                  EN: "A direct comparison across the four paths Japanese enterprises consider when entering India — cost, support, network, and overall value.",
                  JP: "インド進出時に日本企業が検討する4つのアプローチを、費用・常駐体制・実務伴走・ネットワークの観点から比較。",
                })}
              </p>
            </div>

            {/* Legend Row */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap self-start md:self-end">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] bg-[rgba(45,122,95,0.15)] text-[#2D7A5F] font-mono text-[9.5px] uppercase tracking-wider border border-[rgba(45,122,95,0.3)]">
                <svg className="w-3 h-3" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="6" fill="#2D7A5F" />
                </svg>
                {tx({ EN: "FULLY AVAILABLE", JP: "完全対応" })}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] bg-[rgba(184,146,74,0.15)] text-[#B8924A] font-mono text-[9.5px] uppercase tracking-wider border border-[rgba(184,146,74,0.3)]">
                <svg className="w-3 h-3" viewBox="0 0 16 16">
                  <path d="M8 2A6 6 0 0 1 8 14" fill="#B8924A" />
                  <circle cx="8" cy="8" r="6" fill="none" stroke="#B8924A" strokeWidth="1.5" />
                </svg>
                {tx({ EN: "PARTIAL", JP: "一部対応" })}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] bg-transparent text-[#5C5A68] font-mono text-[9.5px] uppercase tracking-wider border border-[#5C5A68]">
                <svg className="w-3 h-3" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="6" fill="none" stroke="#5C5A68" strokeWidth="1.5" />
                </svg>
                {tx({ EN: "NOT AVAILABLE", JP: "非対応" })}
              </span>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto border border-[rgba(184,146,74,0.25)] rounded-[2px] bg-[#0F0F18] shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[860px]">
              {/* Sticky Column Header */}
              <thead>
                <tr className="bg-[#08080E] border-b-2 border-[rgba(184,146,74,0.35)] h-[72px]">
                  <th className="w-[22%] px-5 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5A68] align-middle">
                    {tx({ EN: "Criteria", JP: "比較項目" })}
                  </th>
                  {/* J-Gate Column Header with Persistent Gold Left Border & Recommended Badge */}
                  <th className="w-[26%] px-5 py-4 relative bg-[#161622] align-middle" style={{ boxShadow: "inset 1px 0 0 #B8924A" }}>
                    <div className="inline-block bg-[#C8392B] text-[#F0EDE6] font-mono text-[9px] font-bold px-2 py-0.5 rounded-[2px] tracking-widest uppercase mb-1">
                      {tx({ EN: "RECOMMENDED · 推奨", JP: "RECOMMENDED · 推奨" })}
                    </div>
                    <div className="font-sans text-[14.5px] font-medium text-[#F0EDE6] tracking-wide">
                      J-Gate <span className="text-[11px] font-normal text-[#9A98A4]">ジェーゲート</span>
                    </div>
                  </th>
                  <th className="w-[17%] px-4 py-4 font-sans text-[13px] font-normal text-[#9A98A4] text-center align-middle">
                    {tx({ EN: "Major Consulting", JP: "大手コンサル" })}
                  </th>
                  <th className="w-[17%] px-4 py-4 font-sans text-[13px] font-normal text-[#9A98A4] text-center align-middle">
                    {tx({ EN: "Local Coworking", JP: "現地コワーキング" })}
                  </th>
                  <th className="w-[18%] px-4 py-4 font-sans text-[13px] font-normal text-[#9A98A4] text-center align-middle">
                    {tx({ EN: "Public Orgs", JP: "公的支援機関" })}
                  </th>
                </tr>
              </thead>

              {/* Data Rows (8 Criteria) */}
              <tbody className="divide-y divide-[rgba(255,255,255,0.04)] text-[13px]">
                {/* Row 1: Target Audience */}
                <tr className="bg-[#0F0F18] hover:bg-[#1E1E2E] transition-colors group">
                  <td className="px-5 py-4 font-sans font-normal text-[#9A98A4]">
                    {tx({ EN: "Target Audience", JP: "対象企業規模" })}
                  </td>
                  <td className="px-5 py-4 bg-[#161622] group-hover:bg-[rgba(184,146,74,0.06)] transition-colors" style={{ boxShadow: "inset 1px 0 0 #B8924A" }}>
                    <div className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="#2D7A5F" /></svg>
                      <div>
                        <div className="font-sans font-medium text-[#F0EDE6]">
                          {tx({ EN: "Mid-size, SMEs, Startups & Regional Banks", JP: "中堅・中小・スタートアップ・地方銀行" })}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><path d="M8 2A6 6 0 0 1 8 14" fill="#B8924A" /><circle cx="8" cy="8" r="6" fill="none" stroke="#B8924A" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "Large enterprises only", JP: "大企業のみ" })}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="#5C5A68" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "Local companies & freelancers", JP: "現地企業・フリーランス" })}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><path d="M8 2A6 6 0 0 1 8 14" fill="#B8924A" /><circle cx="8" cy="8" r="6" fill="none" stroke="#B8924A" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "General / All", JP: "一般・全対象" })}</span>
                    </div>
                  </td>
                </tr>

                {/* Row 2: Monthly Cost */}
                <tr className="bg-[#161622] hover:bg-[#1E1E2E] transition-colors group">
                  <td className="px-5 py-4 font-sans font-normal text-[#9A98A4]">
                    {tx({ EN: "Monthly Cost", JP: "月額費用" })}
                  </td>
                  <td className="px-5 py-4 bg-[#161622] group-hover:bg-[rgba(184,146,74,0.06)] transition-colors" style={{ boxShadow: "inset 1px 0 0 #B8924A" }}>
                    <div className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="#2D7A5F" /></svg>
                      <div>
                        <div className="font-sans font-medium text-[#F0EDE6]">
                          {tx({ EN: "From ₹50,000", JP: "月額 50,000 INR〜" })}
                        </div>
                        <div className="font-mono text-[10px] text-[#B8924A] mt-0.5">
                          {tx({ EN: "~¥90,000 /mo", JP: "約90,000円 /月" })}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="#5C5A68" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "¥500K – ¥1M+", JP: "50万〜100万円+" })}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><path d="M8 2A6 6 0 0 1 8 14" fill="#B8924A" /><circle cx="8" cy="8" r="6" fill="none" stroke="#B8924A" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "₹10K – ₹60K", JP: "10,000〜60,000 INR" })}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><path d="M8 2A6 6 0 0 1 8 14" fill="#B8924A" /><circle cx="8" cy="8" r="6" fill="none" stroke="#B8924A" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "Free – Low cost", JP: "無料〜低額" })}</span>
                    </div>
                  </td>
                </tr>

                {/* Row 3: Physical Base */}
                <tr className="bg-[#0F0F18] hover:bg-[#1E1E2E] transition-colors group">
                  <td className="px-5 py-4 font-sans font-normal text-[#9A98A4]">
                    {tx({ EN: "Physical Base", JP: "物理的拠点" })}
                  </td>
                  <td className="px-5 py-4 bg-[#161622] group-hover:bg-[rgba(184,146,74,0.06)] transition-colors" style={{ boxShadow: "inset 1px 0 0 #B8924A" }}>
                    <div className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="#2D7A5F" /></svg>
                      <div>
                        <div className="font-sans font-medium text-[#F0EDE6]">
                          {tx({ EN: "Cyber Gateway, Hyderabad", JP: "Cyber Gateway（ハイデラバード）" })}
                        </div>
                        <div className="font-mono text-[10px] text-[#B8924A] mt-0.5">
                          {tx({ EN: "Dedicated workspace", JP: "専用固定ワークスペース" })}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="#5C5A68" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "None — separate contract", JP: "なし（別契約）" })}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><path d="M8 2A6 6 0 0 1 8 14" fill="#B8924A" /><circle cx="8" cy="8" r="6" fill="none" stroke="#B8924A" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "Shared space only", JP: "共有スペースのみ" })}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="#5C5A68" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "None", JP: "なし" })}</span>
                    </div>
                  </td>
                </tr>

                {/* Row 4: Resident Japanese Expert */}
                <tr className="bg-[#161622] hover:bg-[#1E1E2E] transition-colors group">
                  <td className="px-5 py-4 font-sans font-normal text-[#9A98A4]">
                    {tx({ EN: "Resident Japanese Expert", JP: "常駐日本語専門家" })}
                  </td>
                  <td className="px-5 py-4 bg-[#161622] group-hover:bg-[rgba(184,146,74,0.06)] transition-colors" style={{ boxShadow: "inset 1px 0 0 #B8924A" }}>
                    <div className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="#2D7A5F" /></svg>
                      <div>
                        <div className="font-sans font-medium text-[#F0EDE6]">
                          {tx({ EN: "Japan Desk", JP: "ジャパンデスク" })}
                        </div>
                        <div className="font-mono text-[10px] text-[#B8924A] mt-0.5">
                          {tx({ EN: "100% Japanese, on-site", JP: "100%日本語・常駐対面対応" })}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><path d="M8 2A6 6 0 0 1 8 14" fill="#B8924A" /><circle cx="8" cy="8" r="6" fill="none" stroke="#B8924A" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "Dispatched per occasion", JP: "都度派遣" })}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="#5C5A68" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "None", JP: "なし" })}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><path d="M8 2A6 6 0 0 1 8 14" fill="#B8924A" /><circle cx="8" cy="8" r="6" fill="none" stroke="#B8924A" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "Local staff only", JP: "現地スタッフのみ" })}</span>
                    </div>
                  </td>
                </tr>

                {/* Row 5: Hands-on Support */}
                <tr className="bg-[#0F0F18] hover:bg-[#1E1E2E] transition-colors group">
                  <td className="px-5 py-4 font-sans font-normal text-[#9A98A4]">
                    {tx({ EN: "Hands-on Support", JP: "実務伴走サポート" })}
                  </td>
                  <td className="px-5 py-4 bg-[#161622] group-hover:bg-[rgba(184,146,74,0.06)] transition-colors" style={{ boxShadow: "inset 1px 0 0 #B8924A" }}>
                    <div className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="#2D7A5F" /></svg>
                      <div>
                        <div className="font-sans font-medium text-[#F0EDE6]">
                          {tx({ EN: "Covers actual operations", JP: "実務オペレーションまで対応" })}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><path d="M8 2A6 6 0 0 1 8 14" fill="#B8924A" /><circle cx="8" cy="8" r="6" fill="none" stroke="#B8924A" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "Mainly advisory", JP: "主に助言のみ" })}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="#5C5A68" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "No business support", JP: "ビジネス支援なし" })}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><path d="M8 2A6 6 0 0 1 8 14" fill="#B8924A" /><circle cx="8" cy="8" r="6" fill="none" stroke="#B8924A" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "Info and advice only", JP: "情報・相談のみ" })}</span>
                    </div>
                  </td>
                </tr>

                {/* Row 6: Japanese Language */}
                <tr className="bg-[#161622] hover:bg-[#1E1E2E] transition-colors group">
                  <td className="px-5 py-4 font-sans font-normal text-[#9A98A4]">
                    {tx({ EN: "Japanese Language", JP: "日本語対応" })}
                  </td>
                  <td className="px-5 py-4 bg-[#161622] group-hover:bg-[rgba(184,146,74,0.06)] transition-colors" style={{ boxShadow: "inset 1px 0 0 #B8924A" }}>
                    <div className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="#2D7A5F" /></svg>
                      <div>
                        <div className="font-sans font-medium text-[#F0EDE6]">
                          {tx({ EN: "Fully supported", JP: "完全対応" })}
                        </div>
                        <div className="font-mono text-[10px] text-[#B8924A] mt-0.5">
                          {tx({ EN: "Native on-ground", JP: "現地日本人による母国語サポート" })}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><path d="M8 2A6 6 0 0 1 8 14" fill="#B8924A" /><circle cx="8" cy="8" r="6" fill="none" stroke="#B8924A" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "High cost", JP: "高額な通訳費用" })}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="#5C5A68" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "None", JP: "なし" })}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><path d="M8 2A6 6 0 0 1 8 14" fill="#B8924A" /><circle cx="8" cy="8" r="6" fill="none" stroke="#B8924A" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "Limited", JP: "限定的" })}</span>
                    </div>
                  </td>
                </tr>

                {/* Row 7: Hiring Support */}
                <tr className="bg-[#0F0F18] hover:bg-[#1E1E2E] transition-colors group">
                  <td className="px-5 py-4 font-sans font-normal text-[#9A98A4]">
                    {tx({ EN: "Hiring Support", JP: "人材採用・育成支援" })}
                  </td>
                  <td className="px-5 py-4 bg-[#161622] group-hover:bg-[rgba(184,146,74,0.06)] transition-colors" style={{ boxShadow: "inset 1px 0 0 #B8924A" }}>
                    <div className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="#2D7A5F" /></svg>
                      <div>
                        <div className="font-sans font-medium text-[#F0EDE6]">
                          {tx({ EN: "Full IndiGate partnership", JP: "IndiGateと完全連携" })}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><path d="M8 2A6 6 0 0 1 8 14" fill="#B8924A" /><circle cx="8" cy="8" r="6" fill="none" stroke="#B8924A" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "Referral only — expensive", JP: "紹介のみ・高額" })}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="#5C5A68" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "None", JP: "なし" })}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="#5C5A68" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "None", JP: "なし" })}</span>
                    </div>
                  </td>
                </tr>

                {/* Row 8: Network & Alliances */}
                <tr className="bg-[#161622] hover:bg-[#1E1E2E] transition-colors group">
                  <td className="px-5 py-4 font-sans font-normal text-[#9A98A4]">
                    {tx({ EN: "Network & Alliances", JP: "現地ネットワーク・提携" })}
                  </td>
                  <td className="px-5 py-4 bg-[#161622] group-hover:bg-[rgba(184,146,74,0.06)] transition-colors" style={{ boxShadow: "inset 1px 0 0 #B8924A" }}>
                    <div className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="#2D7A5F" /></svg>
                      <div>
                        <div className="font-sans font-medium text-[#F0EDE6]">
                          {tx({ EN: "T-Hub, IIT Hyd, Woxsen, Genesys", JP: "T-Hub・IITハイデラバード・Woxsen・Genesys" })}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><path d="M8 2A6 6 0 0 1 8 14" fill="#B8924A" /><circle cx="8" cy="8" r="6" fill="none" stroke="#B8924A" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "Govt agencies & large firms", JP: "政府機関・大企業中心" })}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><path d="M8 2A6 6 0 0 1 8 14" fill="#B8924A" /><circle cx="8" cy="8" r="6" fill="none" stroke="#B8924A" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "General users", JP: "一般利用者" })}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[#9A98A4]">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16"><path d="M8 2A6 6 0 0 1 8 14" fill="#B8924A" /><circle cx="8" cy="8" r="6" fill="none" stroke="#B8924A" strokeWidth="1.5" /></svg>
                      <span>{tx({ EN: "Govt agencies", JP: "政府機関" })}</span>
                    </div>
                  </td>
                </tr>

                {/* THE DEFINITIVE VERDICT ROW */}
                <tr className="bg-[rgba(184,146,74,0.06)] border-t-2 border-[rgba(184,146,74,0.35)]">
                  <td colSpan={5} className="p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="space-y-2 max-w-3xl">
                        <div className="flex items-center gap-2 text-[#B8924A] font-mono text-[11px] font-bold tracking-[0.2em] uppercase">
                          <span>▌</span>
                          <span>{tx({ EN: "THE DEFINITIVE VERDICT · 総合評価", JP: "THE DEFINITIVE VERDICT · 総合評価" })}</span>
                        </div>
                        <p className="font-sans text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed text-[#F0EDE6]">
                          {tx({
                            EN: "“J-Gate is the only option that combines a physical base, resident Japanese expertise, hands-on operational support, and direct hiring — at a cost-justifiable investment level.”",
                            JP: "「J-Gateは、専用拠点・常駐日本語専門家・実務オペレーション・直接採用支援をワンストップで兼ね備え、圧倒的な投資対効果を実現する唯一の選択肢です。」",
                          })}
                        </p>
                      </div>

                      <div className="shrink-0 flex items-center gap-4">
                        <Link
                          href="/pricing"
                          className="inline-flex items-center gap-2 px-5 py-3 bg-[rgba(184,146,74,0.15)] hover:bg-[#B8924A] text-[#B8924A] hover:text-[#08080E] border border-[rgba(184,146,74,0.4)] rounded-[2px] font-mono text-[11.5px] uppercase tracking-wider transition-all duration-300 font-bold"
                        >
                          <span>{tx({ EN: "View Plans →", JP: "料金プランを見る →" })}</span>
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section Coordinate Watermark */}
        <div className="max-w-7xl mx-auto flex justify-end mt-4 font-mono text-[10px] text-[#5C5A68] opacity-35 select-none pointer-events-none">
          N17°26' E78°29' · MATRIX_TABLE_01
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3 — 7 CORE VALUE PILLARS
          ───────────────────────────────────────────────────────────── */}
      <section
        id="why-pillars"
        className="relative z-10 px-6 sm:px-12 lg:px-24 xl:pl-[120px] xl:pr-24 py-24 border-b border-[rgba(184,146,74,0.18)]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-[2px] h-[16px] bg-[#B8924A]" />
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#B8924A]">
                {tx({ EN: "7 CORE VALUE PILLARS · 価値提案", JP: "7 CORE VALUE PILLARS · 7つの提供価値" })}
              </span>
            </div>
            <h2 className="mt-4 font-serif text-[38px] sm:text-[52px] lg:text-[56px] font-light text-[#F0EDE6] leading-[1.08]">
              {tx({ EN: "Value Proposition of J-Gate", JP: "J-Gateが選ばれる7つの柱" })}
            </h2>
            <p className="mt-2 font-sans text-[14px] sm:text-[15px] font-light text-[#9A98A4] max-w-2xl">
              {tx({
                EN: "Seven pillars accelerating Japanese business in India — the complete membership value that turns a workspace into a strategic launchpad.",
                JP: "日本企業のインド展開を加速させる7つの柱 — 単なるデスク空間を超え、戦略的ローンチパッドとして機能する会員価値。",
              })}
            </p>
          </div>

          {/* Horizontal Stat Bar */}
          <div
            ref={statRef}
            className="mt-12 bg-[#0F0F18] border-y border-[rgba(184,146,74,0.35)] rounded-[2px] grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(184,146,74,0.3)] shadow-xl"
          >
            {/* Stat 1 */}
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <div className="font-serif text-[42px] sm:text-[48px] font-light text-[#F0EDE6] leading-none">
                2–{statCounts.persons || 4}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#B8924A] mt-2">
                {tx({ EN: "PERSONS PER COMPANY", JP: "1社あたり利用規模" })}
              </div>
              <div className="font-sans text-[12px] text-[#9A98A4] mt-1">
                {tx({ EN: "Dedicated executive desk pods", JP: "専用エグゼクティブデスク" })}
              </div>
            </div>

            {/* Stat 2 */}
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <div className="font-serif text-[42px] sm:text-[48px] font-light text-[#F0EDE6] leading-none">
                {statCounts.pillars || 7}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#B8924A] mt-2">
                {tx({ EN: "CORE VALUE PILLARS", JP: "コアバリュー柱" })}
              </div>
              <div className="font-sans text-[12px] text-[#9A98A4] mt-1">
                {tx({ EN: "End-to-end strategic corridor", JP: "包括的進出支援体制" })}
              </div>
            </div>

            {/* Stat 3 */}
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <div className="font-serif text-[42px] sm:text-[48px] font-light text-[#F0EDE6] leading-none">
                {statCounts.bilingual || 100}%
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#B8924A] mt-2">
                {tx({ EN: "BILINGUAL SUPPORT", JP: "日本語常駐サポート" })}
              </div>
              <div className="font-sans text-[12px] text-[#9A98A4] mt-1">
                {tx({ EN: "Native on-site Japan Desk", JP: "日本人エキスパート常駐" })}
              </div>
            </div>
          </div>

          {/* 7 Pillars Grid Layout: Top 4 Cards, Bottom 3 Cards Centered */}
          <div className="mt-12 space-y-6">
            {/* Top Row: 4 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {/* Pillar 01 */}
              <div className="group relative bg-[#0F0F18] border border-[rgba(184,146,74,0.25)] hover:border-[rgba(184,146,74,0.6)] rounded-[2px] p-7 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
                {/* Corner Triangle Accent */}
                <div className="pointer-events-none absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-[rgba(184,146,74,0.2)] border-l-[32px] border-l-transparent group-hover:border-t-[48px] group-hover:border-l-[48px] group-hover:border-t-[rgba(184,146,74,0.4)] transition-all duration-300" />
                {/* Numeral Watermark */}
                <span className="pointer-events-none absolute -top-2 left-4 font-serif text-[72px] font-extralight text-[rgba(184,146,74,0.12)] group-hover:text-[rgba(184,146,74,0.22)] transition-colors select-none">
                  01
                </span>

                <div className="relative z-10 pt-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8924A]">
                    ワークスペース
                  </div>
                  {/* Custom Minimal Stroke SVG (Desk + Monitor) */}
                  <div className="mt-4 w-10 h-10 flex items-center justify-center">
                    <svg className="w-10 h-10 stroke-[#B8924A] group-hover:stroke-opacity-100 stroke-opacity-80 transition-all" viewBox="0 0 40 40" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="6" y="8" width="28" height="18" rx="1" />
                      <line x1="20" y1="26" x2="20" y2="32" />
                      <line x1="14" y1="32" x2="26" y2="32" />
                      <line x1="6" y1="22" x2="34" y2="22" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-serif text-[22px] font-normal text-[#F0EDE6] group-hover:text-[#B8924A] transition-colors">
                    {tx({ EN: "Workspace Access", JP: "ワークスペース利用" })}
                  </h3>
                  <p className="mt-2 font-sans text-[13px] text-[#9A98A4] leading-relaxed">
                    {tx({
                      EN: "Dedicated desk space for 2–4 persons per company — your personal workspace in a shared professional environment.",
                      JP: "1社あたり2〜4名の専用デスクスペース。共有プロフェッショナル環境内に貴社専用の執務空間を確保。",
                    })}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-[rgba(184,146,74,0.15)] flex flex-wrap gap-1.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#B8924A] border border-[rgba(184,146,74,0.35)] px-2 py-0.5 rounded-[2px]">
                    DEDICATED DESK
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#B8924A] border border-[rgba(184,146,74,0.35)] px-2 py-0.5 rounded-[2px]">
                    2–4 PERSONS
                  </span>
                </div>
              </div>

              {/* Pillar 02 */}
              <div className="group relative bg-[#0F0F18] border border-[rgba(184,146,74,0.25)] hover:border-[rgba(184,146,74,0.6)] rounded-[2px] p-7 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
                <div className="pointer-events-none absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-[rgba(184,146,74,0.2)] border-l-[32px] border-l-transparent group-hover:border-t-[48px] group-hover:border-l-[48px] group-hover:border-t-[rgba(184,146,74,0.4)] transition-all duration-300" />
                <span className="pointer-events-none absolute -top-2 left-4 font-serif text-[72px] font-extralight text-[rgba(184,146,74,0.12)] group-hover:text-[rgba(184,146,74,0.22)] transition-colors select-none">
                  02
                </span>

                <div className="relative z-10 pt-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8924A]">
                    インフラ
                  </div>
                  {/* Custom Stroke SVG (Server Rack + Wifi) */}
                  <div className="mt-4 w-10 h-10 flex items-center justify-center">
                    <svg className="w-10 h-10 stroke-[#B8924A] group-hover:stroke-opacity-100 stroke-opacity-80 transition-all" viewBox="0 0 40 40" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="8" y="10" width="24" height="22" rx="1" />
                      <line x1="8" y1="17" x2="32" y2="17" />
                      <line x1="8" y1="24" x2="32" y2="24" />
                      <circle cx="12" cy="13.5" r="1" fill="#B8924A" />
                      <circle cx="12" cy="20.5" r="1" fill="#B8924A" />
                      <circle cx="12" cy="27.5" r="1" fill="#B8924A" />
                      <path d="M14 6 C17 3, 23 3, 26 6" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-serif text-[22px] font-normal text-[#F0EDE6] group-hover:text-[#B8924A] transition-colors">
                    {tx({ EN: "Infrastructure", JP: "インフラ・設備" })}
                  </h3>
                  <p className="mt-2 font-sans text-[13px] text-[#9A98A4] leading-relaxed">
                    {tx({
                      EN: "Cabinets, high-speed Wi-Fi, meeting rooms, canteen, and 24/7 secure access — all standard, all included.",
                      JP: "個別施錠キャビネット、高速Wi-Fi、会議室、カフェテリア、24時間セキュア入館 — すべて標準付帯。",
                    })}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-[rgba(184,146,74,0.15)] flex flex-wrap gap-1.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#B8924A] border border-[rgba(184,146,74,0.35)] px-2 py-0.5 rounded-[2px]">
                    WI-FI
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#B8924A] border border-[rgba(184,146,74,0.35)] px-2 py-0.5 rounded-[2px]">
                    MEETING ROOMS
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#B8924A] border border-[rgba(184,146,74,0.35)] px-2 py-0.5 rounded-[2px]">
                    24/7 ACCESS
                  </span>
                </div>
              </div>

              {/* Pillar 03 */}
              <div className="group relative bg-[#0F0F18] border border-[rgba(184,146,74,0.25)] hover:border-[rgba(184,146,74,0.6)] rounded-[2px] p-7 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
                <div className="pointer-events-none absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-[rgba(184,146,74,0.2)] border-l-[32px] border-l-transparent group-hover:border-t-[48px] group-hover:border-l-[48px] group-hover:border-t-[rgba(184,146,74,0.4)] transition-all duration-300" />
                <span className="pointer-events-none absolute -top-2 left-4 font-serif text-[72px] font-extralight text-[rgba(184,146,74,0.12)] group-hover:text-[rgba(184,146,74,0.22)] transition-colors select-none">
                  03
                </span>

                <div className="relative z-10 pt-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8924A]">
                    ジャパンデスク
                  </div>
                  {/* Custom Stroke SVG (Speech Bubble with 日) */}
                  <div className="mt-4 w-10 h-10 flex items-center justify-center">
                    <svg className="w-10 h-10 stroke-[#B8924A] group-hover:stroke-opacity-100 stroke-opacity-80 transition-all" viewBox="0 0 40 40" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 10 C7 7, 33 7, 33 10 L33 24 C33 27, 22 27, 18 27 L10 33 L12 27 L7 27 Z" />
                      {/* Japanese character '日' */}
                      <rect x="16" y="12" width="8" height="9" strokeWidth="1.1" />
                      <line x1="16" y1="16.5" x2="24" y2="16.5" strokeWidth="1.1" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-serif text-[22px] font-normal text-[#F0EDE6] group-hover:text-[#B8924A] transition-colors">
                    {tx({ EN: "Japan Desk", JP: "常駐ジャパンデスク" })}
                  </h3>
                  <p className="mt-2 font-sans text-[13px] text-[#9A98A4] leading-relaxed">
                    {tx({
                      EN: "A Japanese-speaking expert available daily on-site — legal, HR, cultural, and operational questions answered in Japanese (何でも相談).",
                      JP: "現地常駐の日本人専門家が日々の疑問に対応。法務・人事・商習慣・現場トラブルまで母国語で解決（よろず相談）。",
                    })}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-[rgba(184,146,74,0.15)] flex flex-wrap gap-1.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#B8924A] border border-[rgba(184,146,74,0.35)] px-2 py-0.5 rounded-[2px]">
                    100% JAPANESE
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#B8924A] border border-[rgba(184,146,74,0.35)] px-2 py-0.5 rounded-[2px]">
                    DAILY ON-SITE
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#B8924A] border border-[rgba(184,146,74,0.35)] px-2 py-0.5 rounded-[2px]">
                    MULTI-TOPIC
                  </span>
                </div>
              </div>

              {/* Pillar 04 */}
              <div className="group relative bg-[#0F0F18] border border-[rgba(184,146,74,0.25)] hover:border-[rgba(184,146,74,0.6)] rounded-[2px] p-7 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
                <div className="pointer-events-none absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-[rgba(184,146,74,0.2)] border-l-[32px] border-l-transparent group-hover:border-t-[48px] group-hover:border-l-[48px] group-hover:border-t-[rgba(184,146,74,0.4)] transition-all duration-300" />
                <span className="pointer-events-none absolute -top-2 left-4 font-serif text-[72px] font-extralight text-[rgba(184,146,74,0.12)] group-hover:text-[rgba(184,146,74,0.22)] transition-colors select-none">
                  04
                </span>

                <div className="relative z-10 pt-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8924A]">
                    会社設立
                  </div>
                  {/* Custom Stroke SVG (Document + Gear) */}
                  <div className="mt-4 w-10 h-10 flex items-center justify-center">
                    <svg className="w-10 h-10 stroke-[#B8924A] group-hover:stroke-opacity-100 stroke-opacity-80 transition-all" viewBox="0 0 40 40" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 8 L24 8 L30 14 L30 32 L10 32 Z" />
                      <polyline points="24,8 24,14 30,14" />
                      <circle cx="20" cy="23" r="3.5" />
                      <line x1="20" y1="17.5" x2="20" y2="19" />
                      <line x1="20" y1="27" x2="20" y2="28.5" />
                      <line x1="14.5" y1="23" x2="16" y2="23" />
                      <line x1="24" y1="23" x2="25.5" y2="23" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-serif text-[22px] font-normal text-[#F0EDE6] group-hover:text-[#B8924A] transition-colors">
                    {tx({ EN: "Company Setup", JP: "会社設立・登記支援" })}
                  </h3>
                  <p className="mt-2 font-sans text-[13px] text-[#9A98A4] leading-relaxed">
                    {tx({
                      EN: "Step-by-step guidance from workspace registration to full corporate entity establishment — end-to-end.",
                      JP: "拠点住所登録から現地法人登記（MCA・GST）、銀行口座開設まで一気通貫で伴走支援。",
                    })}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-[rgba(184,146,74,0.15)] flex flex-wrap gap-1.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#B8924A] border border-[rgba(184,146,74,0.35)] px-2 py-0.5 rounded-[2px]">
                    STEP-BY-STEP
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#B8924A] border border-[rgba(184,146,74,0.35)] px-2 py-0.5 rounded-[2px]">
                    END-TO-END
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Row: 3 Cards Centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
              {/* Pillar 05 */}
              <div className="group relative bg-[#0F0F18] border border-[rgba(184,146,74,0.25)] hover:border-[rgba(184,146,74,0.6)] rounded-[2px] p-7 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
                <div className="pointer-events-none absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-[rgba(184,146,74,0.2)] border-l-[32px] border-l-transparent group-hover:border-t-[48px] group-hover:border-l-[48px] group-hover:border-t-[rgba(184,146,74,0.4)] transition-all duration-300" />
                <span className="pointer-events-none absolute -top-2 left-4 font-serif text-[72px] font-extralight text-[rgba(184,146,74,0.12)] group-hover:text-[rgba(184,146,74,0.22)] transition-colors select-none">
                  05
                </span>

                <div className="relative z-10 pt-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8924A]">
                    ネットワーク
                  </div>
                  {/* Custom Stroke SVG (3 Connected Nodes) */}
                  <div className="mt-4 w-10 h-10 flex items-center justify-center">
                    <svg className="w-10 h-10 stroke-[#B8924A] group-hover:stroke-opacity-100 stroke-opacity-80 transition-all" viewBox="0 0 40 40" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="20" cy="11" r="4" />
                      <circle cx="11" cy="27" r="4" />
                      <circle cx="29" cy="27" r="4" />
                      <line x1="17" y1="14" x2="13.5" y2="23.5" />
                      <line x1="23" y1="14" x2="26.5" y2="23.5" />
                      <line x1="15" y1="27" x2="25" y2="27" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-serif text-[22px] font-normal text-[#F0EDE6] group-hover:text-[#B8924A] transition-colors">
                    {tx({ EN: "Networking Events", JP: "現地ネットワーク" })}
                  </h3>
                  <p className="mt-2 font-sans text-[13px] text-[#9A98A4] leading-relaxed">
                    {tx({
                      EN: "Direct access to T-Hub, IIT Hyderabad, Woxsen University, and the broader local ecosystem — in the same building.",
                      JP: "T-Hub、IITハイデラバード、Woxsen大学、現地スタートアップエコシステムへの直接アクセスを同じビル内で実現。",
                    })}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-[rgba(184,146,74,0.15)] flex flex-wrap gap-1.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#B8924A] border border-[rgba(184,146,74,0.35)] px-2 py-0.5 rounded-[2px]">
                    T-HUB
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#B8924A] border border-[rgba(184,146,74,0.35)] px-2 py-0.5 rounded-[2px]">
                    IIT HYDERABAD
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#B8924A] border border-[rgba(184,146,74,0.35)] px-2 py-0.5 rounded-[2px]">
                    WOXSEN
                  </span>
                </div>
              </div>

              {/* Pillar 06 */}
              <div className="group relative bg-[#0F0F18] border border-[rgba(184,146,74,0.25)] hover:border-[rgba(184,146,74,0.6)] rounded-[2px] p-7 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
                <div className="pointer-events-none absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-[rgba(184,146,74,0.2)] border-l-[32px] border-l-transparent group-hover:border-t-[48px] group-hover:border-l-[48px] group-hover:border-t-[rgba(184,146,74,0.4)] transition-all duration-300" />
                <span className="pointer-events-none absolute -top-2 left-4 font-serif text-[72px] font-extralight text-[rgba(184,146,74,0.12)] group-hover:text-[rgba(184,146,74,0.22)] transition-colors select-none">
                  06
                </span>

                <div className="relative z-10 pt-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8924A]">
                    勉強会
                  </div>
                  {/* Custom Stroke SVG (Open Book + Bookmark) */}
                  <div className="mt-4 w-10 h-10 flex items-center justify-center">
                    <svg className="w-10 h-10 stroke-[#B8924A] group-hover:stroke-opacity-100 stroke-opacity-80 transition-all" viewBox="0 0 40 40" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 12 C16 9, 8 10, 8 10 L8 28 C8 28, 16 27, 20 30 C24 27, 32 28, 32 28 L32 10 C32 10, 24 9, 20 12 Z" />
                      <line x1="20" y1="12" x2="20" y2="30" />
                      <polyline points="20,12 24,16 20,20" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-serif text-[22px] font-normal text-[#F0EDE6] group-hover:text-[#B8924A] transition-colors">
                    {tx({ EN: "Study Sessions", JP: "インド市場勉強会" })}
                  </h3>
                  <p className="mt-2 font-sans text-[13px] text-[#9A98A4] leading-relaxed">
                    {tx({
                      EN: "Ongoing India market seminars held at the workspace — not one-off sessions, but continuous learning.",
                      JP: "拠点内で定期開催されるインド市場実務セミナー。単発イベントにとどまらない継続的な知見共有。",
                    })}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-[rgba(184,146,74,0.15)] flex flex-wrap gap-1.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#B8924A] border border-[rgba(184,146,74,0.35)] px-2 py-0.5 rounded-[2px]">
                    INDIA MARKET
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#B8924A] border border-[rgba(184,146,74,0.35)] px-2 py-0.5 rounded-[2px]">
                    ONGOING
                  </span>
                </div>
              </div>

              {/* Pillar 07 */}
              <div className="group relative bg-[#0F0F18] border border-[rgba(184,146,74,0.25)] hover:border-[rgba(184,146,74,0.6)] rounded-[2px] p-7 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
                <div className="pointer-events-none absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-[rgba(184,146,74,0.2)] border-l-[32px] border-l-transparent group-hover:border-t-[48px] group-hover:border-l-[48px] group-hover:border-t-[rgba(184,146,74,0.4)] transition-all duration-300" />
                <span className="pointer-events-none absolute -top-2 left-4 font-serif text-[72px] font-extralight text-[rgba(184,146,74,0.12)] group-hover:text-[rgba(184,146,74,0.22)] transition-colors select-none">
                  07
                </span>

                <div className="relative z-10 pt-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8924A]">
                    人材採用
                  </div>
                  {/* Custom Stroke SVG (Person Silhouette + Checkmark) */}
                  <div className="mt-4 w-10 h-10 flex items-center justify-center">
                    <svg className="w-10 h-10 stroke-[#B8924A] group-hover:stroke-opacity-100 stroke-opacity-80 transition-all" viewBox="0 0 40 40" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="17" cy="13" r="5" />
                      <path d="M8 29 C8 23, 13 21, 17 21 C21 21, 26 23, 26 29" />
                      <polyline points="25,18 28,21 34,15" stroke="#2D7A5F" strokeWidth="1.8" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-serif text-[22px] font-normal text-[#F0EDE6] group-hover:text-[#B8924A] transition-colors">
                    {tx({ EN: "Talent & Services", JP: "人材採用・付帯サービス" })}
                  </h3>
                  <p className="mt-2 font-sans text-[13px] text-[#9A98A4] leading-relaxed">
                    {tx({
                      EN: "Payroll, hiring, translation, and meal delivery — arranged through the workspace as a single point of contact.",
                      JP: "給与計算、ITエンジニア採用、ビジネス通訳・翻訳、和風ケータリングまでワンストップ手配。",
                    })}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-[rgba(184,146,74,0.15)] flex flex-wrap gap-1.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#B8924A] border border-[rgba(184,146,74,0.35)] px-2 py-0.5 rounded-[2px]">
                    HIRING
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#B8924A] border border-[rgba(184,146,74,0.35)] px-2 py-0.5 rounded-[2px]">
                    PAYROLL
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#B8924A] border border-[rgba(184,146,74,0.35)] px-2 py-0.5 rounded-[2px]">
                    TRANSLATION
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Coordinate Watermark */}
        <div className="max-w-7xl mx-auto flex justify-end mt-6 font-mono text-[10px] text-[#5C5A68] opacity-35 select-none pointer-events-none">
          N17°26' E78°29' · PILLARS_ARCHITECTURE
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4 — SMART INVESTMENT ESTIMATOR (Fully Functional)
          ───────────────────────────────────────────────────────────── */}
      <section
        id="why-estimator"
        className="relative z-10 px-6 sm:px-12 lg:px-24 xl:pl-[120px] xl:pr-24 py-24 border-b border-[rgba(184,146,74,0.18)]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-[2px] h-[16px] bg-[#B8924A]" />
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#B8924A]">
                {tx({ EN: "SMART INVESTMENT ESTIMATOR · ROI 計算機", JP: "SMART INVESTMENT ESTIMATOR · 投資対効果シミュレーター" })}
              </span>
            </div>
            <h2 className="mt-4 font-serif text-[38px] sm:text-[52px] font-light text-[#F0EDE6] leading-[1.08]">
              {tx({ EN: "Calculate Your Membership & Savings", JP: "拠点開設コストと削減効果を試算" })}
            </h2>
            <p className="mt-2 font-sans text-[14px] sm:text-[15px] font-light text-[#9A98A4] max-w-2xl">
              {tx({
                EN: "Eliminate hefty capex, lengthy commercial leases, and setup delays with J-Gate's turnkey infrastructure.",
                JP: "初期投資や長期不動産契約の負担を大幅に削減。初日から即戦力として機能する拠点コストをご確認ください。",
              })}
            </p>
          </div>

          {/* Calculator Layout */}
          <div className="mt-12 bg-[#0F0F18] border border-[rgba(184,146,74,0.35)] rounded-[2px] p-6 sm:p-10 lg:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Controls (48%) */}
              <div className="lg:col-span-6 space-y-8">
                {/* Step 1: Plan Selection */}
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8924A] mb-3">
                    01 · SELECT PLAN LEVEL
                  </div>
                  <div className="space-y-2.5">
                    {(["satellite", "standard", "advance"] as const).map((p) => {
                      const isSel = selectedPlan === p;
                      const data = planData[p];
                      return (
                        <div
                          key={p}
                          onClick={() => setSelectedPlan(p)}
                          className={`relative cursor-pointer p-4 rounded-[2px] border transition-all duration-200 ${
                            isSel
                              ? "bg-[rgba(184,146,74,0.08)] border-[#B8924A]"
                              : "bg-[#161622] border-transparent hover:border-[rgba(184,146,74,0.3)] hover:bg-[#1E1E2E]"
                          }`}
                        >
                          {/* Left Accent Bar on selected */}
                          {isSel && (
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#B8924A]" />
                          )}
                          <div className="flex items-center justify-between">
                            <span className="font-sans text-[14.5px] font-medium text-[#F0EDE6]">
                              {tx(data.name)}
                            </span>
                            <div className="text-right">
                              <span className="font-mono text-[13px] text-[#B8924A] font-bold">
                                ₹{data.jGate.toLocaleString()}/mo
                              </span>
                              <span className="block font-mono text-[9.5px] text-[#9A98A4]">
                                ~¥{data.jpy}
                              </span>
                            </div>
                          </div>
                          <p className="font-mono text-[9.5px] text-[#9A98A4] mt-1">
                            {tx(data.desc)}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Team Size */}
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8924A] mb-3">
                    02 · ESTIMATED TEAM SIZE
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: "1", label: "1 SEAT" },
                      { id: "3", label: "3 PEOPLE" },
                      { id: "5", label: "5 SEATS" },
                      { id: "15", label: "15+ SEATS" },
                    ].map((seat) => (
                      <button
                        key={seat.id}
                        type="button"
                        onClick={() => setSelectedTeam(seat.id)}
                        className={`py-2.5 px-1 text-center font-mono text-[11px] uppercase tracking-wider rounded-[2px] border transition-all ${
                          selectedTeam === seat.id
                            ? "bg-[#B8924A] text-[#08080E] border-[#B8924A] font-bold"
                            : "bg-transparent text-[#9A98A4] border-[rgba(184,146,74,0.35)] hover:border-[#B8924A] hover:text-[#F0EDE6]"
                        }`}
                      >
                        {seat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Included Features */}
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8924A] mb-3">
                    03 · INCLUDED FEATURES
                  </div>
                  <div className="space-y-2 text-[13px] font-sans text-[#9A98A4]">
                    <div className="flex items-center gap-2.5">
                      <svg className="w-3.5 h-3.5 shrink-0 stroke-[#B8924A]" viewBox="0 0 14 14" fill="none">
                        <rect x="0.5" y="0.5" width="13" height="13" rx="1.5" stroke="#B8924A" strokeWidth="1" />
                        <polyline points="3.5,7 5.5,9.5 10.5,4" stroke="#B8924A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{tx({ EN: "High-speed 1Gbps fiber internet & Xerox printing", JP: "1Gbps光回線＆ゼロックス複合機完備" })}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <svg className="w-3.5 h-3.5 shrink-0 stroke-[#B8924A]" viewBox="0 0 14 14" fill="none">
                        <rect x="0.5" y="0.5" width="13" height="13" rx="1.5" stroke="#B8924A" strokeWidth="1" />
                        <polyline points="3.5,7 5.5,9.5 10.5,4" stroke="#B8924A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{tx({ EN: "Resident bilingual Japan Desk consultation included", JP: "常駐ジャパンデスクによる日々のバイリンガル相談" })}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <svg className="w-3.5 h-3.5 shrink-0 stroke-[#B8924A]" viewBox="0 0 14 14" fill="none">
                        <rect x="0.5" y="0.5" width="13" height="13" rx="1.5" stroke="#B8924A" strokeWidth="1" />
                        <polyline points="3.5,7 5.5,9.5 10.5,4" stroke="#B8924A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{tx({ EN: "24/7 smart keycard access to Cyber Gateway", JP: "Cyber Gatewayへの24時間スマートカード入館" })}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <svg className="w-3.5 h-3.5 shrink-0 stroke-[#B8924A]" viewBox="0 0 14 14" fill="none">
                        <rect x="0.5" y="0.5" width="13" height="13" rx="1.5" stroke="#B8924A" strokeWidth="1" />
                        <polyline points="3.5,7 5.5,9.5 10.5,4" stroke="#B8924A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{tx({ EN: "All meeting rooms & canteen access included", JP: "会議室利用・併設カフェテリア利用権利込み" })}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Output Display (52%) */}
              <div className="lg:col-span-6 lg:border-l lg:border-[rgba(184,146,74,0.3)] lg:pl-12 flex flex-col justify-between space-y-8">
                {/* Circular Savings Badge */}
                <div className="flex justify-center">
                  <div className="w-[120px] h-[120px] rounded-full border-2 border-[#B8924A] bg-[rgba(184,146,74,0.06)] flex flex-col items-center justify-center shadow-lg">
                    <span className="font-serif text-[40px] font-light text-[#B8924A] leading-none">
                      ~{displayedPct}%
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#5C5A68] mt-1">
                      SAVINGS
                    </span>
                  </div>
                </div>

                {/* Breakdown Panel with Gold Hairline Separators */}
                <div className="space-y-4">
                  {/* Row 1 */}
                  <div className="pb-3 border-b border-[rgba(184,146,74,0.2)] flex items-end justify-between">
                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-[#9A98A4]">
                        {tx({ EN: "Estimated J-Gate Base Fee", JP: "月額J-Gate会費（目安）" })}
                      </span>
                      <span className="font-mono text-[10px] text-[#B8924A] mt-0.5">
                        {planData[selectedPlan].jpy} JPY APPROX
                      </span>
                    </div>
                    <div className="text-right font-serif text-[32px] font-light text-[#F0EDE6] leading-none">
                      ₹{displayedJGate.toLocaleString()}
                      <span className="font-sans text-[12px] text-[#5C5A68] ml-1">/mo + GST</span>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="pb-3 border-b border-[rgba(184,146,74,0.2)] flex items-end justify-between">
                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-[#5C5A68]">
                        {tx({ EN: "Standalone Lease (Market Rate)", JP: "単独オフィス開設（相場費用）" })}
                      </span>
                      <span className="font-mono text-[9px] text-[#5C5A68] mt-0.5">
                        COMMERCIAL LEASE + STAFF + SETUP
                      </span>
                    </div>
                    <div className="text-right font-serif text-[32px] font-light text-[#5C5A68] leading-none line-through">
                      ₹{displayedMarket.toLocaleString()}
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="pt-2 flex items-end justify-between">
                    <div>
                      <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#2D7A5F] font-bold">
                        {tx({ EN: "Monthly Net Saving", JP: "月間経費削減額（推定）" })}
                      </span>
                      <span className="font-mono text-[9px] text-[#2D7A5F] mt-0.5">
                        COST ELIMINATED MONTHLY
                      </span>
                    </div>
                    <div className="text-right font-serif text-[40px] font-light text-[#2D7A5F] leading-none">
                      ₹{displayedSaving.toLocaleString()}+
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="w-full h-[48px] bg-[#C8392B] hover:bg-[#a82d22] text-[#F0EDE6] font-sans text-[13px] font-medium tracking-[0.1em] uppercase rounded-[2px] flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.01] shadow-lg"
                >
                  <span>{tx({ EN: "REQUEST CUSTOM PROPOSAL →", JP: "カスタム個別見積・提案を依頼する →" })}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section Coordinate Watermark */}
        <div className="max-w-7xl mx-auto flex justify-end mt-4 font-mono text-[10px] text-[#5C5A68] opacity-35 select-none pointer-events-none">
          N17°26' E78°29' · ESTIMATOR_CALC_02
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CLOSING STRIP / DIRECT CONTACT
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 px-6 sm:px-12 lg:px-24 xl:pl-[120px] xl:pr-24 py-16 bg-[#0F0F18] border-b border-[rgba(184,146,74,0.18)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-1">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B8924A]">
              {tx({ EN: "DIRECT OPERATIONS DESK", JP: "現地直通お問い合わせ窓口" })}
            </div>
            <div className="font-serif text-[24px] text-[#F0EDE6] font-light">
              Cyber Gateway, HITEC City, Hyderabad · Telangana, India
            </div>
            <div className="font-mono text-[12px] text-[#9A98A4]">
              contact@indobox.co.jp · +91-9910360648 (Director Tanji)
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#B8924A] hover:bg-[#a07d39] text-[#08080E] font-mono text-[11px] uppercase tracking-widest font-bold rounded-[2px] transition-all"
            >
              {tx({ EN: "INQUIRE / CONTACT", JP: "お問い合わせ・個別相談" })}
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 border border-[rgba(184,146,74,0.4)] text-[#F0EDE6] hover:bg-[rgba(184,146,74,0.1)] font-mono text-[11px] uppercase tracking-widest rounded-[2px] transition-all"
            >
              {tx({ EN: "ALL PRICING TIERS", JP: "全料金プラン一覧" })}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
