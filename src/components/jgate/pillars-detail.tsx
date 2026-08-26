"use client";

import { Reveal, Eyebrow } from "./shared";
import { useI18n } from "@/lib/i18n";

/* ============================================================
   PillarsDetail — 7 core value pillars in alternating bands
   Single editorial card with 7 alternating identity/detail bands
   + stats strip (2–4 persons · 7 pillars · 100% JP support)
   ============================================================ */

type Pillar = {
  num: string;
  emoji: string;
  jp: string;
  en: { EN: string; JP: string };
  desc: { EN: string; JP: string };
  tags: { text: { EN: string; JP: string }; tone: "crimson" | "saffron" | "success" | "slate" }[];
};

const PILLARS: Pillar[] = [
  {
    num: "01",
    emoji: "🏢",
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
    emoji: "📡",
    jp: "インフラ",
    en: { EN: "Infrastructure", JP: "インフラ" },
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
    emoji: "💬",
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
    emoji: "📋",
    jp: "会社設立",
    en: { EN: "Company Setup", JP: "設立支援" },
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
    emoji: "🤝",
    jp: "ネットワーク",
    en: { EN: "Networking Events", JP: "ネットワーキング" },
    desc: {
      EN: "Direct access to T-Hub, IIT Hyderabad, JETRO officials, and the broader local ecosystem — in the same building.",
      JP: "T-Hub・IITハイデラバード・JETRO関係者・現地エコシステムへの直接アクセス — 同じ建物内で。",
    },
    tags: [
      { text: { EN: "T-Hub", JP: "T-Hub" }, tone: "success" },
      { text: { EN: "IIT Hyderabad", JP: "IITハイデラバード" }, tone: "crimson" },
      { text: { EN: "JETRO", JP: "JETRO" }, tone: "saffron" },
    ],
  },
  {
    num: "06",
    emoji: "📚",
    jp: "勉強会",
    en: { EN: "Study Sessions", JP: "インド勉強会" },
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
    emoji: "🌐",
    jp: "人材採用",
    en: { EN: "Talent & Services", JP: "人材・サービス" },
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
  crimson: "border-crimson/30 text-crimson bg-crimson/5",
  saffron: "border-saffron/35 text-saffron bg-saffron/8",
  success: "border-success/30 text-success bg-success/8",
  slate: "border-slate/25 text-slate bg-slate/5",
};

const STATS: { value: string; label: { EN: string; JP: string } }[] = [
  {
    value: "2–4",
    label: { EN: "Persons per company", JP: "1社あたり人数" },
  },
  {
    value: "7",
    label: { EN: "Core value pillars", JP: "コアバリュー柱" },
  },
  {
    value: "100%",
    label: { EN: "Japanese-language support", JP: "日本語サポート" },
  },
];

export function PillarsDetail() {
  const { tx } = useI18n();
  return (
    <section
      id="why-pillars"
      className="section-pad bg-ivory-warm"
      aria-label="J-Gate 7 core value pillars"
    >
      <div className="container-jg">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>7 CORE VALUE PILLARS</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
              style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.5rem)" }}
            >
              Value Proposition of J-Gate
            </h2>
            <p
              className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-slate"
              style={{ fontSize: "clamp(0.875rem, 1.4vw, 1rem)" }}
            >
              Seven pillars accelerating Japanese business in India — the
              complete membership value that turns a workspace into a strategic
              launchpad.
            </p>
          </div>
        </Reveal>

        {/* Editorial card with 7 alternating bands */}
        <Reveal delay={100}>
          <article className="mt-12 overflow-hidden rounded-2xl border border-slate/15 bg-pearl shadow-card">
            {PILLARS.map((p, i) => {
              const isEven = i % 2 === 1; // pillars 2, 4, 6 → reversed
              return (
                <div
                  key={p.num}
                  className={`grid gap-6 p-6 sm:p-8 md:grid-cols-2 md:gap-10 md:p-10 ${
                    i > 0 ? "border-t border-slate/10" : ""
                  }`}
                >
                  {/* Identity side */}
                  <div
                    className={`relative flex flex-col justify-center ${
                      isEven ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    {/* Ghost number */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-6 left-0 select-none font-serif-jp font-bold leading-none text-crimson"
                      style={{
                        fontSize: "120px",
                        opacity: 0.05,
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {p.num}
                    </span>

                    <div className="relative">
                      <span
                        className="font-inter text-[10px] font-semibold uppercase text-crimson"
                        style={{ letterSpacing: "0.2em" }}
                      >
                        Pillar {p.num}
                      </span>
                      <div className="mt-2 flex items-center gap-3">
                        <span
                          className="text-[36px] leading-none"
                          aria-hidden="true"
                        >
                          {p.emoji}
                        </span>
                        <span className="font-sans-jp text-[22px] font-bold text-ink">
                          {p.jp}
                        </span>
                      </div>
                      <h3
                        className="mt-2 font-serif-jp font-bold text-ink"
                        style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)" }}
                      >
                        {tx(p.en)}
                      </h3>
                    </div>
                  </div>

                  {/* Detail side */}
                  <div
                    className={`relative flex flex-col justify-center ${
                      isEven ? "md:order-1 md:pr-2" : "md:order-2 md:pl-2"
                    }`}
                  >
                    <p
                      className="font-inter leading-relaxed text-slate"
                      style={{ fontSize: "clamp(0.875rem, 1.4vw, 1rem)" }}
                    >
                      {tx(p.desc)}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag.text.EN}
                          className={`inline-flex items-center rounded-full border px-3 py-1 font-inter text-[11px] font-medium ${
                            TAG_TONES[tag.tone]
                          }`}
                        >
                          {tx(tag.text)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </article>
        </Reveal>

        {/* Stats strip */}
        <Reveal delay={120}>
          <div className="mt-8 grid grid-cols-1 divide-y divide-slate/10 overflow-hidden rounded-xl border border-slate/15 bg-pearl shadow-card sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map((s) => (
              <div
                key={s.label.EN}
                className="flex flex-col items-center justify-center px-6 py-6 text-center"
              >
                <span
                  className="font-serif-jp font-bold text-gradient-saffron"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                >
                  {s.value}
                </span>
                <span
                  className="mt-1 font-inter text-[11px] font-medium uppercase text-slate"
                  style={{ letterSpacing: "0.1em" }}
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
