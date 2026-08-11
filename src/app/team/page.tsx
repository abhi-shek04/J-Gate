"use client";

import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { Photo } from "@/components/jgate/photo";
import { useI18n } from "@/lib/i18n";
import {
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Cpu,
  FlaskConical,
  Briefcase,
  Building2,
  Lightbulb,
  Heart,
  Globe2,
} from "lucide-react";
import Link from "next/link";

/* ============================================================
   Team — REAL PDF content (Slides 12 & 13)
   Sections: PageHero → J-Gate Operations Team (4) → Board of Advisory (5)
             → Ecosystem Partners (6) → CTA
   ============================================================ */

type Bilingual = { EN: string; JP: string };

/* ── J-Gate Operations Team — Slide 13 ── */
const OPS_TEAM = [
  {
    photoId: "photo-team-tanji-ops",
    fallback: "grad-founder-tanji",
    initials: "DT",
    flag: "🇯🇵",
    name: "Daisuke TANJI",
    jpName: "丹治 大佑",
    role: { EN: "Director", JP: "ディレクター" } as Bilingual,
    desc: {
      EN: "Representative of Indobox — leads J-Gate operations with a decade of India-side bridging experience. Architect of the bilateral partnership structure and primary point of contact for Japanese enterprise clients.",
      JP: "Indobox代表 — 10年の日印架け橋経験を持つJ-Gate運営の責任者。両国間パートナーシップ構造の設計者であり、日本企業顧客の主要窓口。",
    } as Bilingual,
    accent: "crimson",
  },
  {
    photoId: "photo-team-hanaoka-ops",
    fallback: "grad-team",
    initials: "MH",
    flag: "🇯🇵",
    name: "Mariko HANAOKA",
    jpName: "花岡 真理子",
    role: { EN: "Director", JP: "ディレクター" } as Bilingual,
    desc: {
      EN: "Director on the J-Gate operations team — oversees client relationships, program delivery, and the Japan-facing side of the bilateral handoff. Ensures every client engagement translates cleanly into action on the ground.",
      JP: "J-Gate運営チームのディレクター — 顧客関係、プログラム提供、両国間引き継ぎの日本側面を統括。すべての顧客エンゲージメントが現場での行動に正確に翻訳されることを確保。",
    } as Bilingual,
    accent: "saffron",
  },
  {
    photoId: "photo-team-yanneti-ops",
    fallback: "grad-team",
    initials: "DY",
    flag: "🇮🇳",
    name: "Dheeraj YANNETI",
    jpName: "ディラジ・ヤンネティ",
    role: { EN: "Community Manager", JP: "コミュニティマネージャー" } as Bilingual,
    desc: {
      EN: "Community Manager — the day-to-day heartbeat of J-Gate Hyderabad. Manages tenant relationships, networking events, and the cultural bridge between Japanese expats and the local Hyderabad ecosystem.",
      JP: "コミュニティマネージャー — J-Gateハイデラバードの日常の中核。テナント関係、ネットワーキングイベント、日本駐在員と現地ハイデラバード生態系の文化橋渡しを管理。",
    } as Bilingual,
    accent: "crimson",
  },
  {
    photoId: "photo-team-buduru-ops",
    fallback: "grad-team",
    initials: "AB",
    flag: "🇮🇳",
    name: "Abhishek BUDURU",
    jpName: "アブシェーク・ブドゥル",
    role: { EN: "Intern / Tech", JP: "インターン・技術" } as Bilingual,
    desc: {
      EN: "Intern supporting the technical layer of J-Gate operations — workspace infrastructure, digital tools, and the systems that keep the community functioning smoothly behind the scenes.",
      JP: "J-Gate運営の技術レイヤーを支えるインターン — ワークスペースインフラ、デジタルツール、コミュニティを背後で円滑に機能させるシステムを担当。",
    } as Bilingual,
    accent: "saffron",
  },
] as const;

/* ── Board of Advisory — Slide 12 ── */
const ADVISORS = [
  {
    photoId: "photo-advisor-mahankali",
    fallback: "grad-advisory-s",
    initials: "SM",
    name: "Srinivas Rao Mahankali",
    shortName: "MSR",
    jpName: "スリニヴァス・ラオ・マハンカリ",
    role: {
      EN: "Former CEO, T-Hub",
      JP: "元CEO、T-Hub",
    } as Bilingual,
    desc: {
      EN: "Led T-Hub — India's largest startup hub — through its most critical growth phase. Brings institutional-scale perspective on what 'enterprise-ready' truly means.",
      JP: "インド最大のスタートアップハブ、T-Hubの最も重要な成長期をCEOとして主導。「企業対応」が真に何を意味するか、機関的スケールの視点を提供。",
    } as Bilingual,
    icon: Award,
  },
  {
    photoId: "photo-advisor-jagirdar",
    fallback: "grad-advisory-j",
    initials: "SJ",
    name: "Sujit Jagirdar",
    shortName: "SJ",
    jpName: "スジット・ジャギルダール",
    role: {
      EN: "Former CIO, T-Hub",
      JP: "元CIO、T-Hub",
    } as Bilingual,
    desc: {
      EN: "Former CIO of T-Hub — oversaw the digital infrastructure that scaled one of India's most influential innovation ecosystems. Brings operational rigour to J-Gate's screening methodology.",
      JP: "元T-Hub CIO — インドで最も影響力のあるイノベーション生態系の一つをスケールさせたデジタルインフラを統括。J-Gateのスクリーニング手法に運営の厳格さを提供。",
    } as Bilingual,
    icon: Cpu,
  },
  {
    photoId: "photo-advisor-desai",
    fallback: "grad-advisory-s",
    initials: "UD",
    name: "Dr. Uday B. Desai",
    shortName: "UD",
    jpName: "ウダイ・B・デサイ博士",
    role: {
      EN: "Founding Director, IIT Hyderabad",
      JP: "初代ディレクター、IIT Hyderabad",
    } as Bilingual,
    desc: {
      EN: "Founding Director of IIT Hyderabad — one of India's most prestigious technical institutions. Anchors J-Gate's academic and research-grade perspective on engineering talent evaluation.",
      JP: "IITハイデラバード（インド最高峰の技術系教育機関の一つ）の初代ディレクター。J-Gateの学術・研究レベルのエンジニア人材評価視点を担当。",
    } as Bilingual,
    icon: FlaskConical,
  },
  {
    photoId: "photo-advisor-sarikonda",
    fallback: "grad-advisory-j",
    initials: "VS",
    name: "Dr. Viinay Sarikonda",
    shortName: "VS",
    jpName: "ヴィイナイ・サリコンダ博士",
    role: {
      EN: "CEO, Genesys Info X",
      JP: "CEO、Genesys Info X",
    } as Bilingual,
    desc: {
      EN: "CEO of Genesys Info X — J-Gate's founding MoU partner and the operational anchor on the India side. Co-inaugurator of J-Gate at Cyber Gateway.",
      JP: "J-Gate創設MoUパートナーでありインド側運営基盤のGenesys Info XのCEO。サイバーゲートウェイでのJ-Gate共同開設者。",
    } as Bilingual,
    icon: Briefcase,
  },
  {
    photoId: "photo-advisor-isogai",
    fallback: "grad-advisory-s",
    initials: "TI",
    name: "Tomio Isogai",
    shortName: "TI",
    jpName: "磯貝 富雄",
    role: {
      EN: "Indobox Advisor · Former Sharp India MD",
      JP: "Indoboxアドバイザー・元シャープインドリア代表",
    } as Bilingual,
    desc: {
      EN: "Former Managing Director of Sharp India — decades of operational leadership inside one of Japan's most established Indian subsidiaries. Lecturer at Indobox Academy.",
      JP: "元シャープインドリア代表取締役 — 日本を代表するインド子会社の一つでの長年の運営リーダーシップ。Indobox Academy講師。",
    } as Bilingual,
    icon: Lightbulb,
  },
] as const;

/* ── Ecosystem Partners — Slide 12 ── */
const PARTNERS = [
  {
    name: "Kodryx.ai",
    jp: "コドリクス・エーアイ",
    tag: "DATA INTELLIGENCE",
    desc: {
      EN: "AI-driven data intelligence partner — analytical backbone for evidence-based market entry decisions.",
      JP: "AI駆動のデータインテリジェンスパートナー — エビデンスに基づく市場参入決定のための分析基盤。",
    } as Bilingual,
    icon: Cpu,
  },
  {
    name: "YANC",
    jp: "YANC",
    tag: "Young Minds Networking Life Skills",
    desc: {
      EN: "Life-skills and networking organisation for young minds — community and capability partner for next-generation talent.",
      JP: "若者向け生活スキル・ネットワーキング組織 — 次世代人材のためのコミュニティ・能力パートナー。",
    } as Bilingual,
    icon: Users,
  },
  {
    name: "Daakia",
    jp: "ダーキア",
    tag: "—Bridging Distance—",
    desc: {
      EN: "Communication and distance-bridging partner — connecting distributed teams across the Japan-India corridor.",
      JP: "コミュニケーション・距離架け橋パートナー — 日印回廊をまたぐ分散チームを接続。",
    } as Bilingual,
    icon: Globe2,
  },
  {
    name: "FINGERPRINT FILMS",
    jp: "フィンガープリント・フィルムズ",
    tag: "CREATIVE STUDIO",
    desc: {
      EN: "Creative film and media partner — produces visual narratives that bridge Japanese and Indian business cultures.",
      JP: "クリエイティブ映画・メディアパートナー — 日本とインドのビジネス文化を橋渡しする視覚的物語を制作。",
    } as Bilingual,
    icon: Award,
  },
  {
    name: "MXC",
    jp: "MXC",
    tag: "TECHNOLOGY PARTNER",
    desc: {
      EN: "Technology and infrastructure partner — supports the digital backbone of J-Gate's Hyderabad operations.",
      JP: "技術・インフラパートナー — J-Gateハイデラバード運営のデジタル基盤を支援。",
    } as Bilingual,
    icon: Briefcase,
  },
  {
    name: "Hyderabad Japan Club",
    jp: "ハイデラバード・ジャパン・クラブ",
    tag: "COMMUNITY",
    desc: {
      EN: "The hub of the Japanese expatriate community in Hyderabad — cultural anchor and social network for J-Gate members.",
      JP: "ハイデラバード在住日本人コミュニティの拠点 — J-Gate会員のための文化的支柱・ソーシャルネットワーク。",
    } as Bilingual,
    icon: Heart,
  },
] as const;

export default function TeamPage() {
  const { tx } = useI18n();

  return (
    <>
      <PageHero
        eyebrowKey="team.eyebrow"
        titleNode={
          <>
            {tx({ EN: "The Minds", JP: "J-Gateを" })}
            <br />
            <span className="text-gradient-saffron">
              {tx({ EN: "Behind J-Gate", JP: "支える人々" })}
            </span>
          </>
        }
        subtitleKey="team.title"
      />

      {/* ───────────────────────────────────────────────────────────
          Section 1 — Header Message (Slide 13)
          Bilingual executive tagline on a dark band.
         ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy py-14 md:py-20">
        <div className="pattern-asanoha-navy absolute inset-0 opacity-50" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(232,160,26,0.10), transparent 65%)",
          }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Sparkles className="mx-auto h-7 w-7 text-saffron" strokeWidth={1.5} />
              <p
                className="mt-4 font-serif-jp font-bold leading-[1.3] text-white"
                style={{ fontSize: "clamp(1.5rem,3.5vw,2.25rem)" }}
              >
                {tx({
                  EN: "Unlocking new possibilities for your business through collaboration with India.",
                  JP: "インドとの連携で、貴社のビジネスに新たな可能性を。",
                })}
              </p>
              <p
                className="mx-auto mt-3 font-sans-jp font-medium leading-relaxed text-saffron-light"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.125rem)" }}
              >
                {tx({
                  EN: "— The J-Gate Operations Team",
                  JP: "— J-Gate運営チームより",
                })}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 2 — J-Gate Operations Team (Slide 13)
          4-card grid with circular photos + flags.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>
                {tx({ EN: "J-Gate Operations Team", JP: "J-Gate運営チーム" })}
              </Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({
                  EN: "The People Who Run the Bridge, Daily",
                  JP: "日々架け橋を動かす人々",
                })}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {tx({
                  EN: "A four-person operations team that owns every J-Gate client engagement end-to-end — directors who set strategy, a community manager who runs the floor, and the technical layer that holds it together.",
                  JP: "J-Gateのすべての顧客エンゲージメントをエンドツーエンドで担う4名の運営チーム — 戦略を定めるディレクター、現場を動かすコミュニティマネージャー、そしてその全体をつなぐ技術レイヤー。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OPS_TEAM.map((m, i) => {
              const accentColor = m.accent === "crimson" ? "crimson" : "saffron";
              const accentBorder =
                accentColor === "crimson"
                  ? "border-crimson/20 hover:border-crimson/40"
                  : "border-saffron/20 hover:border-saffron/40";
              const accentText =
                accentColor === "crimson" ? "text-crimson" : "text-saffron";
              const accentBar =
                accentColor === "crimson"
                  ? "from-crimson to-crimson-deep"
                  : "from-saffron to-[#c9881a]";
              return (
                <Reveal key={i} delay={i * 90}>
                  <article
                    className={`lift-card relative flex h-full flex-col items-center overflow-hidden rounded-lg border bg-pearl p-6 text-center shadow-card ${accentBorder}`}
                  >
                    <span
                      className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accentBar}`}
                    />

                    <Photo
                      id={m.photoId}
                      alt={`${m.name}, ${tx(m.role)}`}
                      fallback={m.fallback}
                      initials={m.initials}
                      rounded="rounded-full"
                      className="h-28 w-28 sm:h-32 sm:w-32"
                    />

                    <span className="mt-3 text-2xl" aria-hidden="true">
                      {m.flag}
                    </span>

                    <h3 className="mt-3 font-serif-jp text-base font-bold leading-tight text-ink sm:text-lg">
                      {m.name}
                    </h3>
                    <p className="font-sans-jp text-[12px] font-medium text-mist">
                      {m.jpName}
                    </p>
                    <p
                      className={`mt-2 font-inter text-[11px] font-semibold uppercase ${accentText}`}
                      style={{ letterSpacing: "0.1em" }}
                    >
                      {tx(m.role)}
                    </p>

                    <p className="mt-3 font-inter text-[12px] leading-relaxed text-slate">
                      {tx(m.desc)}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 3 — Board of Advisory (Slide 12)
          5 advisor cards with gold top-border accent. Asymmetric layout —
          5 cards in a 3-col grid with the first card spanning 1 col,
          giving a deliberately non-uniform, premium feel.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>
                {tx({ EN: "Board of Advisory", JP: "諮問委員会" })}
              </Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({
                  EN: "Five Voices That Set the Standard",
                  JP: "基準を定める5つの声",
                })}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {tx({
                  EN: "Former CEOs, CIOs, founding directors, and managing directors — the institutional experience that shapes every J-Gate decision, from talent evaluation to partner selection.",
                  JP: "元CEO、元CIO、初代ディレクター、代表取締役 — 人材評価からパートナー選定まで、J-Gateのすべての決定を形作る機関的経験。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ADVISORS.map((a, i) => (
              <Reveal key={i} delay={i * 90}>
                <article className="lift-card relative flex h-full flex-col overflow-hidden rounded-lg border border-saffron/15 bg-pearl p-7 shadow-card">
                  {/* Gold top-border accent */}
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saffron via-saffron-light to-[#c9881a]" />

                  <div className="flex items-start gap-4">
                    <Photo
                      id={a.photoId}
                      alt={`${a.name}, ${tx(a.role)}`}
                      fallback={a.fallback}
                      initials={a.initials}
                      rounded="rounded-full"
                      className="h-20 w-20 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif-jp text-base font-bold leading-tight text-ink sm:text-lg">
                        {a.name}
                      </h3>
                      <p className="mt-0.5 font-sans-jp text-[12px] text-mist">
                        {a.jpName}
                      </p>
                      <p
                        className="mt-2 font-inter text-[11px] font-semibold uppercase text-saffron"
                        style={{ letterSpacing: "0.08em" }}
                      >
                        {tx(a.role)}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 font-inter text-[13px] leading-relaxed text-slate">
                    {tx(a.desc)}
                  </p>

                  {/* Small icon chip bottom */}
                  <div className="mt-5 flex items-center gap-2 border-t border-saffron/15 pt-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-saffron/10 text-saffron">
                      <a.icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <span className="font-inter text-[11px] font-medium text-mist">
                      {tx({
                        EN: `Advisor ${i + 1} of ${ADVISORS.length}`,
                        JP: `諮問委員 ${i + 1} / ${ADVISORS.length}`,
                      })}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}

            {/* Decorative 6th tile — closure card */}
            <Reveal delay={ADVISORS.length * 90}>
              <div className="relative flex h-full min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-lg border border-crimson/20 bg-gradient-to-br from-crimson/[0.04] to-saffron/[0.04] p-7 text-center">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-crimson via-saffron to-crimson-deep" />
                <Sparkles className="h-9 w-9 text-crimson" strokeWidth={1.25} />
                <p className="mt-4 font-serif-jp text-base font-bold leading-snug text-ink">
                  {tx({
                    EN: "Five advisors. One mandate: rigour.",
                    JP: "5名のアドバイザー。ひとつの使命：厳格さ。",
                  })}
                </p>
                <p className="mt-3 font-inter text-[12px] leading-relaxed text-slate">
                  {tx({
                    EN: "Every advisory engagement sharpens the standards J-Gate applies to your account — from screening rubrics to partner vetting.",
                    JP: "アドバイザーの関与が、J-Gateがお客様の案件に適用する基準 — スクリーニング基準からパートナー審査まで — を常に研ぎ澄まします。",
                  })}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 4 — Ecosystem Partners (Slide 12)
          6 partner tiles with name, JP, tag, icon.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-navy">
        <div className="pattern-asanoha-navy absolute inset-0 opacity-50" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 30%, rgba(188,26,44,0.10), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(232,160,26,0.08), transparent 55%)",
          }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>
                {tx({ EN: "Ecosystem Partners", JP: "エコシステムパートナー" })}
              </Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({
                  EN: "The Network That Amplifies Every Membership",
                  JP: "すべてのメンバーシップを増幅するネットワーク",
                })}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-mist"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {tx({
                  EN: "Six specialised ecosystem partners — from data intelligence and creative studios to community organisations — each plugged into the J-Gate operating environment.",
                  JP: "データインテリジェンスやクリエイティブスタジオからコミュニティ組織まで — 6つの専門エコシステムパートナーがJ-Gate運営環境に接続。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.map((p, i) => {
              const accentColor = i % 2 === 0 ? "saffron" : "crimson";
              const accentText =
                accentColor === "saffron" ? "text-saffron" : "text-crimson";
              const accentBg =
                accentColor === "saffron"
                  ? "bg-saffron/15"
                  : "bg-crimson/15";
              return (
                <Reveal key={i} delay={i * 80}>
                  <article className="glass-dark lift-card group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 p-6 transition-all hover:border-white/20">
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${accentBg} ${accentText} transition-transform duration-300 group-hover:scale-110`}
                      >
                        <p.icon className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                      <span
                        className={`font-inter text-[10px] font-bold uppercase ${accentText}`}
                        style={{ letterSpacing: "0.12em" }}
                      >
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="mt-4 font-serif-jp text-lg font-bold text-white">
                      {p.name}
                    </h3>
                    <p className="mt-0.5 font-sans-jp text-[12px] font-medium text-mist">
                      {p.jp}
                    </p>
                    <p className="mt-3 font-inter text-[12.5px] leading-relaxed text-mist">
                      {tx(p.desc)}
                    </p>

                    {/* Bottom accent bar — hover reveal */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r ${
                        accentColor === "saffron"
                          ? "from-saffron to-[#c9881a]"
                          : "from-crimson to-crimson-deep"
                      } transition-all duration-500 group-hover:w-full`}
                    />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Closing CTA
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-crimson/10 text-crimson">
                <Building2 className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h2
                className="mt-6 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({
                  EN: "Talk to the Team That Builds the Bridge",
                  JP: "架け橋を築くチームにご相談ください",
                })}
              </h2>
              <p
                className="mx-auto mt-4 font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {tx({
                  EN: "From corporate setup to talent development to daily operations — the same team you see above will own your engagement. Begin the conversation today.",
                  JP: "法人設立から人材育成、日常オペレーションまで — 上記のチームがお客様のエンゲージメントを担当します。今日から会話を始めましょう。",
                })}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-shine flex items-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-7 py-3.5 font-inter text-[14px] font-semibold text-white shadow-[0_0_20px_rgba(188,26,44,0.35)] transition-all hover:-translate-y-0.5"
                >
                  {tx({ EN: "Contact Us", JP: "お問い合わせ" })}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="rounded-md border border-crimson/30 px-7 py-3.5 font-inter text-[14px] font-semibold text-crimson transition-all hover:-translate-y-0.5 hover:bg-crimson/5"
                >
                  {tx({ EN: "Explore Services", JP: "サービスを見る" })}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
