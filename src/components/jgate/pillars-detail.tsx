"use client";

import { Reveal, Eyebrow } from "./shared";
import { useI18n } from "@/lib/i18n";
import {
  Building2,
  Wifi,
  Sparkles,
  FileCheck,
  Users,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Layers,
} from "lucide-react";

type Pillar = {
  num: string;
  icon: any;
  jp: string;
  en: { EN: string; JP: string };
  desc: { EN: string; JP: string };
  tags: { text: { EN: string; JP: string }; tone: "crimson" | "saffron" | "success" | "slate" }[];
};

const PILLARS: Pillar[] = [
  {
    num: "01",
    icon: Building2,
    jp: "ワークスペース",
    en: { EN: "Workspace Access", JP: "ワークスペースアクセス" },
    desc: {
      EN: "Dedicated desk space for 2-4 persons per company — your personal workspace in a shared professional environment.",
      JP: "1社あたり2〜4名の専用デスクスペース — 共有プロフェッショナル環境におけるあなただけのワークスペース。",
    },
    tags: [
      { text: { EN: "Dedicated Desk", JP: "専用デスク" }, tone: "crimson" },
      { text: { EN: "2–4 Persons", JP: "2〜4名" }, tone: "saffron" },
    ],
  },
  {
    num: "02",
    icon: Wifi,
    jp: "インフラ",
    en: { EN: "Infrastructure", JP: "インフラ設備" },
    desc: {
      EN: "Cabinets, high-speed Wi-Fi, meeting rooms, canteen, and 24/7 secure access — all standard, all included.",
      JP: "キャビネット・高速Wi-Fi・会議室・カフェテリア・24時間セキュアアクセス — すべて標準・すべて含まれる。",
    },
    tags: [
      { text: { EN: "Wi-Fi", JP: "Wi-Fi" }, tone: "saffron" },
      { text: { EN: "Meeting Rooms", JP: "会議室" }, tone: "success" },
      { text: { EN: "24/7 Access", JP: "24時間アクセス" }, tone: "crimson" },
    ],
  },
  {
    num: "03",
    icon: Sparkles,
    jp: "ジャパンデスク",
    en: { EN: "Japan Desk", JP: "ジャパンデスク" },
    desc: {
      EN: "A Japanese-speaking expert available daily on-site — legal, HR, cultural, and operational questions answered in Japanese (何でも相談).",
      JP: "毎日常駐する日本語対応の専門家 — 法務・人事・文化・運営の質問を日本語で対応（何でも相談）。",
    },
    tags: [
      { text: { EN: "100% Japanese", JP: "100%日本語" }, tone: "crimson" },
      { text: { EN: "Daily On-site", JP: "毎日常駐" }, tone: "saffron" },
      { text: { EN: "Multi-topic", JP: "何でも相談" }, tone: "success" },
    ],
  },
  {
    num: "04",
    icon: FileCheck,
    jp: "会社設立",
    en: { EN: "Company Setup", JP: "会社設立・進出支援" },
    desc: {
      EN: "Step-by-step guidance from workspace registration to full corporate entity establishment — end-to-end.",
      JP: "ワークスペース登録から完全な法人設立までのステップバイステップガイダンス — エンドツーエンド。",
    },
    tags: [
      { text: { EN: "Step-by-step", JP: "ステップ別" }, tone: "saffron" },
      { text: { EN: "End-to-end", JP: "一括サポート" }, tone: "slate" },
    ],
  },
  {
    num: "05",
    icon: Users,
    jp: "ネットワーク",
    en: { EN: "Networking Events", JP: "ネットワーキング" },
    desc: {
      EN: "Direct access to T-Hub, IIT Hyderabad, Woxsen University, and the broader local ecosystem — in the same building.",
      JP: "T-Hub・IITハイデラバード・Woxsen大学・現地エコシステムへの直接アクセス — 同じ建物内で。",
    },
    tags: [
      { text: { EN: "T-Hub", JP: "T-Hub" }, tone: "success" },
      { text: { EN: "IIT Hyderabad", JP: "IITハイデラバード" }, tone: "crimson" },
      { text: { EN: "Woxsen", JP: "Woxsen大学" }, tone: "saffron" },
    ],
  },
  {
    num: "06",
    icon: GraduationCap,
    jp: "勉強会",
    en: { EN: "Study Sessions", JP: "インド市場勉強会" },
    desc: {
      EN: "Ongoing India market seminars held at the workspace — not one-off sessions, but continuous learning.",
      JP: "ワークスペースで開催される継続的なインド市場セミナー — 単発ではなく継続的学習。",
    },
    tags: [
      { text: { EN: "India Market", JP: "インド市場" }, tone: "slate" },
      { text: { EN: "Ongoing", JP: "継続的" }, tone: "saffron" },
    ],
  },
  {
    num: "07",
    icon: Briefcase,
    jp: "人材採用",
    en: { EN: "Talent & Services", JP: "人材採用・付帯サービス" },
    desc: {
      EN: "Payroll, hiring, translation, and meal delivery — arranged through the workspace as a single point of contact.",
      JP: "給与計算・採用・通訳・食事手配 — ワークスペースを窓口として一括手配。",
    },
    tags: [
      { text: { EN: "Hiring", JP: "採用" }, tone: "crimson" },
      { text: { EN: "Payroll", JP: "給与計算" }, tone: "success" },
      { text: { EN: "Translation", JP: "通訳" }, tone: "saffron" },
    ],
  },
];

const TAG_TONES: Record<Pillar["tags"][number]["tone"], string> = {
  crimson: "border-crimson/30 dark:border-rose-400/30 text-crimson dark:text-rose-400 bg-crimson/8 dark:bg-rose-950/40",
  saffron: "border-saffron/35 dark:border-amber-400/30 text-saffron dark:text-amber-400 bg-saffron/10 dark:bg-amber-950/40",
  success: "border-success/30 dark:border-emerald-400/30 text-success dark:text-emerald-400 bg-success/10 dark:bg-emerald-950/40",
  slate: "border-slate-300 dark:border-white/20 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/10",
};

const STATS = [
  {
    value: "2–4",
    unit: "Persons",
    label: { EN: "Per Company Capacity", JP: "1社あたり利用規模" },
  },
  {
    value: "7",
    unit: "Pillars",
    label: { EN: "Core Value Propositions", JP: "コアバリュー柱" },
  },
  {
    value: "100%",
    unit: "Bilingual",
    label: { EN: "Japanese-Language Support", JP: "日本語常駐サポート" },
  },
];

export function PillarsDetail() {
  const { tx } = useI18n();

  return (
    <section
      id="why-pillars"
      className="section-pad bg-ivory dark:bg-[#080d17] relative overflow-hidden"
      aria-label="J-Gate 7 core value pillars"
    >
      <div className="container-jg">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-saffron/30 dark:border-amber-400/40 bg-saffron/10 dark:bg-amber-950/40 px-4 py-1 font-inter text-[11px] font-bold uppercase tracking-wider text-saffron-dark dark:text-amber-300">
              <Layers className="h-3.5 w-3.5" />
              {tx({ EN: "7 Core Value Pillars", JP: "7つのコアバリュー柱" })}
            </span>
            <h2
              className="mt-3 font-serif-jp font-bold leading-[1.18] text-ink dark:text-white"
              style={{ fontSize: "clamp(1.875rem, 3.8vw, 2.75rem)" }}
            >
              {tx({ EN: "Value Proposition of J-Gate", JP: "J-Gateが選ばれる7つの理由" })}
            </h2>
            <p
              className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-slate dark:text-slate-300"
              style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}
            >
              {tx({
                EN: "Seven pillars accelerating Japanese business in India — the complete membership value that turns a workspace into a strategic launchpad.",
                JP: "日本企業のインド展開を加速させる7つの柱 — 単なるオフィス空間を超え、戦略的ローンチパッドとして機能する会員価値。",
              })}
            </p>
          </div>
        </Reveal>

        {/* 7 Pillars Bento Grid (Modern Luxury Cards) */}
        <div className="mt-7 sm:mt-10 lg:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.num} delay={i * 80} variant="scale">
                <article className="luxury-light-card card-sheen gold-hairline group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-4 sm:p-6 lg:p-7.5 shadow-card dark:shadow-2xl transition-all duration-300 hover:border-crimson/40 hover:shadow-2xl">
                  {/* Faded Ghost Numeral Watermark */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-3 sm:-top-5 right-3 sm:right-4 select-none font-serif-jp font-black text-slate-100/80 dark:text-white/[0.04] transition-all duration-500 group-hover:scale-110 group-hover:text-crimson/10 text-[56px] sm:text-[72px] lg:text-[88px]"
                  >
                    {p.num}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="icon-pod h-10 w-10 sm:h-12 sm:w-12 shrink-0">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-crimson/10 dark:bg-rose-950/50 border border-crimson/20 dark:border-rose-400/30 px-2 py-0.5 sm:px-2.5 font-inter text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-crimson dark:text-rose-400">
                        Pillar {p.num}
                      </span>
                    </div>

                    <div className="mt-3.5 sm:mt-5">
                      <span className="font-serif-jp text-[12.5px] sm:text-[13.5px] font-bold text-saffron-deep dark:text-saffron-light tracking-wide block">
                        {p.jp}
                      </span>
                      <h3 className="mt-1 sm:mt-1.5 font-serif-jp text-[17px] sm:text-[19px] font-bold text-ink dark:text-white group-hover:text-crimson dark:group-hover:text-rose-400 transition-colors">
                        {tx(p.en)}
                      </h3>
                      <p className="mt-2 sm:mt-3 font-inter text-[12.5px] sm:text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                        {tx(p.desc)}
                      </p>
                    </div>
                  </div>

                  {/* Tag Chips */}
                  <div className="relative z-10 mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2 border-t border-slate-100 dark:border-white/10 pt-3 sm:pt-4">
                    {p.tags.map((tag) => (
                      <span
                        key={tag.text.EN}
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 sm:px-3 sm:py-1 font-inter text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider shadow-sm ${
                          TAG_TONES[tag.tone]
                        }`}
                      >
                        {tx(tag.text)}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Stats Milestone Strip */}
        <Reveal delay={140} variant="scale">
          <div className="luxury-light-card card-sheen gold-hairline mt-7 sm:mt-10 lg:mt-12 grid grid-cols-1 divide-y divide-slate-100 dark:divide-white/10 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] shadow-2xl sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map((s) => (
              <div
                key={s.label.EN}
                className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 text-center transition-colors hover:bg-slate-50/70 dark:hover:bg-white/5"
              >
                <div className="flex items-baseline gap-1.5">
                  <span
                    className="font-serif-jp font-black text-crimson drop-shadow-sm"
                    style={{ fontSize: "clamp(1.85rem, 3.4vw, 3rem)" }}
                  >
                    {s.value}
                  </span>
                  <span className="font-inter text-[11px] sm:text-xs font-bold text-saffron-deep dark:text-saffron-light uppercase tracking-wider">
                    {s.unit}
                  </span>
                </div>
                <span
                  className="mt-1.5 sm:mt-2.5 font-inter text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300"
                >
                  {tx(s.label)}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
