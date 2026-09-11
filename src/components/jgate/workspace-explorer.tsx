"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./shared";
import { Photo } from "./photo";
import {
  Building2,
  Users,
  Coffee,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";

const SPACES = [
  {
    id: "dedicated",
    title: { EN: "Dedicated Fixed Desks", JP: "固定専用デスク" },
    tag: { EN: "Primary Workspace", JP: "メインワークスペース" },
    icon: Building2,
    photoId: "photo-about-hyd-1",
    src: "/gallery/workspace-wide.jpg",
    fallback: "grad-office-desks",
    headline: {
      EN: "Your Reserved Base in Hyderabad's Cyber Gateway",
      JP: "サイバーゲートウェイに確保された貴社専用ベース",
    },
    desc: {
      EN: "Fixed desks with lockable executive cabinets, high-comfort ergonomic seating, power pods, and permanent station assignments for your team.",
      JP: "鍵付きエグゼクティブキャビネット、人間工学チェア、各席電源、固定座席を完備した快適な専用デスク。",
    },
    specs: [
      { label: { EN: "Capacity", JP: "利用人数" }, val: { EN: "1 to 20+ Desks", JP: "1席〜20席以上" } },
      { label: { EN: "Internet", JP: "通信回線" }, val: { EN: "Dedicated 1 Gbps Fiber", JP: "専用1Gbps光ファイバー" } },
      { label: { EN: "Storage", JP: "収納" }, val: { EN: "Private Lockable Cabinet", JP: "個人用施錠キャビネット" } },
      { label: { EN: "Access", JP: "利用時間" }, val: { EN: "24/7 Smart Keycard", JP: "24時間スマートカード" } },
    ],
    features: [
      { EN: "Ergonomic executive chairs & spacious wood desks", JP: "人間工学エグゼクティブチェア＆広々デスク" },
      { EN: "Dual high-speed redundant WiFi + LAN ports", JP: "二重化高速Wi-Fi + 有線LANポート" },
      { EN: "Daily housekeeping, power backup & air conditioning", JP: "毎日の清掃、無停電電源、空調完備" },
    ],
  },
  {
    id: "japandesk",
    title: { EN: "Resident Japan Desk", JP: "常駐ジャパンデスク" },
    tag: { EN: "Bilingual Advisory", JP: "バイリンガル支援" },
    icon: Sparkles,
    photoId: "photo-about-hyd-3",
    src: "/gallery/reception.jpg",
    fallback: "grad-founder-tanji",
    headline: {
      EN: "Native Japanese Coordination on the Ground",
      JP: "現地常駐のネイティブ日本人による安心サポート",
    },
    desc: {
      EN: "On-site Japanese directors providing daily consultation ('Yorozu' advice), vendor introductions, interpretation support, and cultural bridge services.",
      JP: "現地常駐の日本人ディレクターによる日々の「よろず相談」、現地パートナー紹介、通訳・翻訳支援、商談同席サポート。",
    },
    specs: [
      { label: { EN: "Staffing", JP: "体制" }, val: { EN: "Native Japanese & Bilingual", JP: "日本人＆バイリンガル常駐" } },
      { label: { EN: "Services", JP: "支援内容" }, val: { EN: "Yorozu Business Consultation", JP: "ビジネスよろず相談・紹介" } },
      { label: { EN: "Events", JP: "交流会" }, val: { EN: "Monthly Bilateral Mixers", JP: "月例日印ネットワーキング" } },
      { label: { EN: "Language", JP: "対応言語" }, val: { EN: "Japanese, English, Hindi", JP: "日本語・英語・ヒンディー語" } },
    ],
    features: [
      { EN: "Daily in-person business consultation & guidance", JP: "日々の対面ビジネス相談・アドバイス" },
      { EN: "Direct introductions to vetted local accounting & legal partners", JP: "信頼できる現社会計・法務パートナーの紹介" },
      { EN: "Assistance with Indian corporate setups & bank accounts", JP: "現地法人設立・銀行口座開設の伴走支援" },
    ],
  },
  {
    id: "meeting",
    title: { EN: "Meeting & Boardrooms", JP: "会議室・ボードルーム" },
    tag: { EN: "Collaborative Space", JP: "ミーティング施設" },
    icon: Users,
    photoId: "photo-about-hyd-2",
    src: "/gallery/boardroom.jpg",
    fallback: "grad-office-meeting",
    headline: {
      EN: "Enterprise Conference Suites for High-Stakes Deals",
      JP: "重要な商談や役員会議に対応するカンファレンス設備",
    },
    desc: {
      EN: "Acoustically treated conference rooms equipped with 4K interactive displays, video conferencing hardware, and high-speed presentation tools.",
      JP: "防音設計の会議室。4Kインタラクティブディスプレイ、高品質ビデオ会議システム、ホワイトボードを完備。",
    },
    specs: [
      { label: { EN: "Room Types", JP: "部屋タイプ" }, val: { EN: "4-Pax / 10-Pax Boardroom", JP: "4名用 / 10名用ボードルーム" } },
      { label: { EN: "Display", JP: "映像設備" }, val: { EN: "4K Smart Screen & VC Cam", JP: "4Kスマートスクリーン・VCカメラ" } },
      { label: { EN: "Acoustics", JP: "音響" }, val: { EN: "Sound-Dampened Privacy", JP: "吸音・プライバシー保護設計" } },
      { label: { EN: "Booking", JP: "予約" }, val: { EN: "Instant Member App / Desk", JP: "アプリ・受付即時予約" } },
    ],
    features: [
      { EN: "Crystal-clear Zoom / Teams / Google Meet integration", JP: "各種オンライン会議ツールとのスムーズ連携" },
      { EN: "Complimentary premium tea & coffee service for guests", JP: "来客への上質な紅茶・コーヒーサービス" },
      { EN: "High-speed wireless screen mirroring from any laptop", JP: "PCからのワンタッチ無線画面ミラーリング" },
    ],
  },
  {
    id: "cafeteria",
    title: { EN: "Cafeteria & Lounge", JP: "カフェテリア＆ラウンジ" },
    tag: { EN: "Dining & Networking", JP: "食事とリフレッシュ" },
    icon: Coffee,
    photoId: "photo-about-hyd-4",
    src: "/gallery/cafeteria.jpg",
    fallback: "grad-canteen-japanese",
    headline: {
      EN: "TASTY FOOD JUNCTION — Curated Global & Japanese-Style Dining",
      JP: "TASTY FOOD JUNCTION — 多彩な料理とくつろぎの空間",
    },
    desc: {
      EN: "Our shared dining lounge serving freshly prepared Indian dishes, continental selections, and Japanese-friendly meals daily.",
      JP: "館内併設のカフェテリア。新鮮なインド料理、中華、そして日本人の口に合う優しいテイストのメニューを毎日提供。",
    },
    specs: [
      { label: { EN: "Cuisine", JP: "料理ジャンル" }, val: { EN: "Indian, Continental, JP-Style", JP: "インド・洋食・和風スタイル" } },
      { label: { EN: "Beverages", JP: "ドリンク" }, val: { EN: "Artisanal Coffee & Green Tea", JP: "挽きたてコーヒー＆緑茶" } },
      { label: { EN: "Lounge", JP: "ラウンジ" }, val: { EN: "Comfortable Casual Seating", JP: "ゆったりとしたソファ席完備" } },
      { label: { EN: "Hygiene", JP: "衛生管理" }, val: { EN: "Strict Food Safety Audited", JP: "徹底した衛生監査基準" } },
    ],
    features: [
      { EN: "Warm meals and light snacks available throughout the day", JP: "終日利用可能な温かい食事と軽食" },
      { EN: "Casual spot for spontaneous networking with fellow founders", JP: "入居メンバー同士の自然な交流が生まれる場" },
      { EN: "Filtered RO drinking water & pantry amenities included", JP: "RO浄水器の飲用水と給湯設備を常時利用可能" },
    ],
  },
];

export function WorkspaceExplorer() {
  const { tx } = useI18n();
  const [activeTab, setActiveTab] = useState(SPACES[0].id);

  const activeSpace = SPACES.find((s) => s.id === activeTab) || SPACES[0];

  return (
    <section className="section-pad relative overflow-hidden bg-ivory">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/10 px-4 py-1 font-inter text-[11px] font-bold uppercase tracking-wider text-crimson">
              <Zap className="h-3.5 w-3.5" />
              {tx({ EN: "Interactive Space Tour", JP: "インタラクティブ施設ツアー" })}
            </span>
            <h2
              className="mt-3 font-serif-jp font-bold text-ink"
              style={{ fontSize: "clamp(1.875rem, 3.8vw, 2.75rem)" }}
            >
              {tx({ EN: "Explore J-Gate Facilities", JP: "J-Gateの施設と空間を体験する" })}
            </h2>
            <p className="mt-2 font-inter text-[13.5px] text-slate">
              {tx({
                EN: "Select a zone to explore the executive facilities, connectivity, and amenities designed for Japanese enterprises.",
                JP: "タブを選択して、日本企業向けに設計されたプレミアムなワークスペース環境をご確認ください。",
              })}
            </p>
          </div>
        </Reveal>

        {/* Tab Buttons */}
        <div className="mt-6 sm:mt-10 flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto overflow-x-auto no-scrollbar py-1 px-1 sm:flex-wrap">
          {SPACES.map((space) => {
            const Icon = space.icon;
            const isActive = activeTab === space.id;
            return (
              <button
                key={space.id}
                onClick={() => setActiveTab(space.id)}
                className={`shrink-0 flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl px-3.5 py-2 sm:px-4 sm:py-2.5 font-inter text-[12px] sm:text-[13px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-crimson to-crimson-deep text-white shadow-md sm:shadow-lg shadow-crimson/25 scale-[1.02] sm:scale-105"
                    : "bg-white text-slate hover:bg-white/80 hover:text-ink border border-slate-200/80 shadow-xs"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${isActive ? "text-white" : "text-crimson"}`} />
                <span>{tx(space.title)}</span>
              </button>
            );
          })}
        </div>

        {/* Active Space Bento Preview Card */}
        <div className="mt-6 sm:mt-8 max-w-5xl mx-auto">
          <Reveal key={activeSpace.id} variant="scale">
            <div className="luxury-light-card overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-xl p-4 sm:p-6 lg:p-8">
              <div className="grid lg:grid-cols-12 gap-5 sm:gap-8 items-center">
                {/* Left: Photo with floating overlay badge */}
                <div className="lg:col-span-6 relative">
                  <div className="overflow-hidden rounded-xl sm:rounded-2xl border-2 border-slate-100 shadow-md">
                    <Photo
                      id={activeSpace.photoId}
                      src={activeSpace.src}
                      alt={tx(activeSpace.title)}
                      fallback={activeSpace.fallback}
                      initials="JG"
                      rounded="rounded-xl sm:rounded-2xl"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  {/* Floating Tag */}
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 rounded-full bg-midnight/90 px-2.5 py-0.5 sm:px-3.5 sm:py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-saffron backdrop-blur-md shadow-lg border border-white/10">
                    <Sparkles className="h-3 w-3 text-saffron" />
                    {tx(activeSpace.tag)}
                  </span>
                </div>

                {/* Right: Details & Specs Grid */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-jp text-xl sm:text-2xl lg:text-3xl font-bold text-ink leading-tight">
                      {tx(activeSpace.headline)}
                    </h3>
                    <p className="mt-2 sm:mt-3 font-inter text-[12.5px] sm:text-[13.5px] leading-relaxed text-slate">
                      {tx(activeSpace.desc)}
                    </p>

                    {/* Specs 2x2 Grid */}
                    <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3">
                      {activeSpace.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="rounded-lg sm:rounded-xl bg-slate-50 p-2 sm:p-3 border border-slate-200/60"
                        >
                          <span className="block font-inter text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-wider text-slate-500">
                            {tx(spec.label)}
                          </span>
                          <span className="mt-0.5 block font-inter text-[12px] sm:text-[13px] font-bold text-ink truncate">
                            {tx(spec.val)}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Feature Checkpoints */}
                    <ul className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3 sm:pt-4">
                      {activeSpace.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-2.5 text-[12px] sm:text-[12.5px] font-inter text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-crimson mt-0.5" />
                          <span>{tx(feat)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
