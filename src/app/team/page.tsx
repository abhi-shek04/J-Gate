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
  Phone,
  Mail,
  Linkedin,
  Quote as QuoteIcon,
  Network,
} from "lucide-react";
import Link from "next/link";

/* ============================================================
   Team — v3.0 Definitive Redesign (THE MOST IMPORTANT PAGE)
   Architecture:
     1. PageHero — "Leadership & Team" / "The Minds Behind J-Gate"
     2. Operations Team (4 members) — HERO editorial cards,
        full-width split (45% photo / 55% content),
        ALTERNATING photo sides (left, right, left, right).
        Each: large photo, flag, role badge, name (Noto Serif JP),
        JP name, thin crimson divider, full bio, quote block,
        contact row.
     3. Advisory Board (navy dark) — 5 cards in 3+2 grid (bottom 2 centered),
        portrait 240×280, gold top-border (3px saffron),
        name + JP name + role (saffron) + former title (mist) + short bio.
     4. Ecosystem Partners — 12-tile clean grid,
        name (Inter 700 15px) + category (Inter 400 12px mist),
        white bg, shadow-sm, 12px radius, hover translateY(-4px).
     5. Closing CTA
   ============================================================ */

type Bilingual = { EN: string; JP: string };

/* ── Section 2 — J-Gate Operations Team (Slide 13) — REAL bios ── */
const OPS_TEAM = [
  {
    photoId: "photo-team-tanji",
    fallback: "grad-founder-tanji",
    initials: "DT",
    flag: "🇯🇵",
    name: "Daisuke TANJI",
    jpName: "丹治 大佑",
    role: { EN: "Director", JP: "ディレクター" } as Bilingual,
    roleAccent: "crimson" as const,
    bio: {
      EN: "Daisuke Tanji arrived in India in 2013 with a conviction that Japan and India, when properly connected, could build something extraordinary. Over the following decade, he immersed himself in Indian business while never losing his Japanese perspective — learning the rhythms, building the relationships, and developing the trust that now forms the foundation of everything J-Gate represents. As the Representative of Indobox India and the Director of J-Gate, he is the living bridge between both nations.",
      JP: "丹治大佑は2013年にインドへ渡り、日本とインドが正しく結ばれれば並外れたものを生み出せるとの確信を胸に活動を始めました。それからの10年間、彼は日本の視点を失うことなくインドビジネスに没頭 — リズムを学び、関係を築き、信頼を育てました。その信頼こそがJ-Gateのすべての基盤です。Indobox India代表でありJ-Gateのディレクターとして、彼は両国をつなぐ生きた架け橋です。",
    } as Bilingual,
    quote: {
      EN: "The 'right answer' to expanding into India — that is what we provide. Not information. Not introductions. A complete, operational home in India for your business.",
      JP: "インド進出の「正解」を私たちは提供します。情報でも紹介でもない。インドにおける完全で機能的なホームを、貴社のビジネスのために。",
    } as Bilingual,
    phone: "+91-9910360648",
    email: "contact@indobox.co.jp",
    linkedin: "#",
  },
  {
    photoId: "photo-team-hanaoka",
    fallback: "grad-team",
    initials: "MH",
    flag: "🇯🇵",
    name: "Mariko HANAOKA",
    jpName: "花岡 真理子",
    role: { EN: "Director", JP: "ディレクター" } as Bilingual,
    roleAccent: "saffron" as const,
    bio: {
      EN: "Mariko Hanaoka brings precision and warmth to J-Gate operations — overseeing client relationships, program delivery, and the Japan-facing side of every bilateral handoff. Her fluency in both Japanese corporate culture and India's business environment makes her the vital link between Tokyo-side expectations and Hyderabad-side reality. Every client relationship that flows through J-Gate benefits from her meticulous care and bilingual excellence.",
      JP: "花岡真理子はJ-Gate運営に precision と温かさをもたらします — 顧客関係、プログラム提供、両国間引き継ぎの日本側を統括。日本の企業文化とインドのビジネス環境双方への流暢さにより、東京側の期待とハイデラバード側の現実を結ぶ重要な架け橋です。J-Gateを流れるすべての顧客関係は、彼女の几帳面な配慮とバイリンガルの卓越さから恩恵を受けます。",
    } as Bilingual,
    quote: {
      EN: "Between Tokyo's expectations and Hyderabad's reality — that gap is where we do our most important work.",
      JP: "東京の期待とハイデラバードの現実の間 — その隙間こそが、私たちの最も重要な仕事の場です。",
    } as Bilingual,
    phone: "",
    email: "contact@indobox.co.jp",
    linkedin: "#",
  },
  {
    photoId: "photo-team-dheeraj",
    fallback: "grad-team",
    initials: "DY",
    flag: "🇮🇳",
    name: "Dheeraj YANNETI",
    jpName: "ディラジ・ヤンネティ",
    role: { EN: "Community Manager", JP: "コミュニティマネージャー" } as Bilingual,
    roleAccent: "crimson" as const,
    bio: {
      EN: "Dheeraj Yanneti is the daily heartbeat of J-Gate Hyderabad — the face every member sees, the voice that answers every question, and the cultural bridge that makes Japanese professionals feel genuinely at home in Hyderabad. Managing tenant relations, orchestrating networking events, and solving the small operational puzzles that make a workspace truly livable — Dheeraj owns it all with the attentiveness that defines J-Gate's Omotenashi standard.",
      JP: "ディラジ・ヤンネティはJ-Gateハイデラバードの日常の中核です — すべてのメンバーが出会う顔、すべての問いに答える声、日本のプロフェッショナルをハイデラバードで本当に我が家と感じさせる文化の架け橋。テナント関係の管理、ネットワーキングイベントの演出、ワークスペースを真に住みやすくする小さな運営のパズルを解く — すべてをJ-Gateのおもてなし基準を定義する attention で担います。",
    } as Bilingual,
    quote: {
      EN: "Omotenashi is not a service level — it is an attentiveness to the small things that make people feel seen.",
      JP: "おもてなしとはサービス水準ではなく — 人が「見られている」と感じる小さなことへの attention です。",
    } as Bilingual,
    phone: "+91-98498 11543",
    email: "",
    linkedin: "#",
  },
  {
    photoId: "photo-team-abhishek",
    fallback: "grad-team",
    initials: "AB",
    flag: "🇮🇳",
    name: "Abhishek BUDURU",
    jpName: "アブシェーク・ブドゥル",
    role: { EN: "Intern / Tech", JP: "インターン・技術" } as Bilingual,
    roleAccent: "saffron" as const,
    bio: {
      EN: "Abhishek Buduru powers the technical layer of J-Gate — maintaining the workspace infrastructure, digital systems, and operational tools that keep J-Gate running smoothly for every member. As the youngest member of the team, he brings a sharp technical mind and a commitment to making J-Gate's digital experience as premium as its physical one.",
      JP: "アブシェーク・ブドゥルはJ-Gateの技術レイヤーを支えます — ワークスペースインフラ、デジタルシステム、運営ツールを維持し、すべてのメンバーに向けてJ-Gateを円滑に稼働させます。チーム最年少メンバーとして、鋭い技術的思考と、J-Gateのデジタル体験を物理的体験と同等にプレミアムにするという commit をもたらします。",
    } as Bilingual,
    quote: {
      EN: "A premium workspace deserves a digital experience just as premium — that's the standard we build to.",
      JP: "プレミアムなワークスペースには、同じくプレミアムなデジタル体験がふさわしい — それが私たちの build する基準です。",
    } as Bilingual,
    phone: "",
    email: "",
    linkedin: "#",
  },
] as const;

/* ── Section 3 — Board of Advisory (Slide 12) — 5 advisors ── */
const ADVISORS = [
  {
    photoId: "photo-advisory-mahankali",
    fallback: "grad-advisory-j",
    initials: "SM",
    name: "Srinivas Rao Mahankali",
    jpName: "スリニヴァス・ラオ・マハンカリ",
    role: { EN: "Former CEO, T-Hub", JP: "元CEO、T-Hub" } as Bilingual,
    formerTitle: { EN: "Former CEO", JP: "元CEO" } as Bilingual,
    bio: {
      EN: "Led T-Hub — India's largest startup hub — through its most critical growth phase, shaping the innovation ecosystem that J-Gate now plugs into.",
      JP: "インド最大のスタートアップハブT-Hubを最も重要な成長期に主導 — J-Gateが今接続するイノベーション生態系を形作りました。",
    } as Bilingual,
    icon: Award,
  },
  {
    photoId: "photo-advisory-jagirdar",
    fallback: "grad-advisory-s",
    initials: "SJ",
    name: "Sujit Jagirdar",
    jpName: "スジット・ジャギルダール",
    role: { EN: "Former CIO, T-Hub", JP: "元CIO、T-Hub" } as Bilingual,
    formerTitle: { EN: "Former CIO", JP: "元CIO" } as Bilingual,
    bio: {
      EN: "Oversaw digital infrastructure at India's largest startup hub — the institutional technology perspective that informs J-Gate's own systems.",
      JP: "インド最大のスタートアップハブでデジタルインフラを統括 — J-Gate自身のシステムを方向付ける機関的技術視点。",
    } as Bilingual,
    icon: Cpu,
  },
  {
    photoId: "photo-advisory-desai",
    fallback: "grad-advisory-j",
    initials: "UD",
    name: "Dr. Uday B. Desai",
    jpName: "ウダイ・B・デサイ博士",
    role: { EN: "Founding Director, IIT Hyderabad", JP: "初代ディレクター、IIT Hyderabad" } as Bilingual,
    formerTitle: { EN: "Founding Director", JP: "初代ディレクター" } as Bilingual,
    bio: {
      EN: "Founding Director of IIT Hyderabad — the academic gravitas that connects J-Gate to India's deepest engineering talent pipeline.",
      JP: "IIT Hyderabadの初代ディレクター — J-Gateをインドの最も深いエンジニアリング人材パイプラインに結ぶ学術的 gravitas。",
    } as Bilingual,
    icon: FlaskConical,
  },
  {
    photoId: "photo-advisory-sarikonda",
    fallback: "grad-advisory-s",
    initials: "VS",
    name: "Dr. Viinay Sarikonda",
    jpName: "ヴィイナイ・サリコンダ博士",
    role: { EN: "CEO, Genesys Info X · MoU Partner", JP: "CEO、Genesys Info X・MoUパートナー" } as Bilingual,
    formerTitle: { EN: "CEO · MoU Partner", JP: "CEO・MoUパートナー" } as Bilingual,
    bio: {
      EN: "CEO of Genesys Info X — the India-side operating partner under formal MoU, jointly responsible for J-Gate Hyderabad's daily operations.",
      JP: "Genesys Info XのCEO — 公式MoUに基づくインド側運営パートナー、J-Gateハイデラバードの日常運営を共同で担います。",
    } as Bilingual,
    icon: Briefcase,
  },
  {
    photoId: "photo-advisory-isogai",
    fallback: "grad-advisory-j",
    initials: "TI",
    name: "Tomio Isogai",
    jpName: "磯貝 富雄",
    role: { EN: "Indobox Advisor · Former MD, Sharp India", JP: "Indoboxアドバイザー・元シャープインドリア代表" } as Bilingual,
    formerTitle: { EN: "Former MD, Sharp India", JP: "元シャープインドリア代表" } as Bilingual,
    bio: {
      EN: "Former Managing Director of Sharp India — decades of operational leadership running a major Japanese enterprise on Indian soil, now channeled into Indobox Academy.",
      JP: "元シャープインドリア代表取締役 — インドで大手日本企業の経営を長年支えたリーダーシップを、現在はIndobox Academyに変換。",
    } as Bilingual,
    icon: Lightbulb,
  },
] as const;

/* ── Section 4 — Ecosystem Partners — 12 partners ── */
const PARTNERS = [
  { name: "Kodryx.ai", tag: "DATA INTELLIGENCE", icon: Cpu },
  { name: "YANC", tag: "YOUNG MINDS NETWORKING", icon: Users },
  { name: "Daakia", tag: "BRIDGING DISTANCE", icon: Globe2 },
  { name: "Fingerprint Films", tag: "CREATIVE STUDIO", icon: Award },
  { name: "MXC", tag: "TECHNOLOGY PARTNER", icon: Briefcase },
  { name: "Hyderabad Japan Club", tag: "COMMUNITY", icon: Heart },
  { name: "JETRO", tag: "TRADE PROMOTION", icon: Network },
  { name: "T-Hub", tag: "INNOVATION HUB", icon: Building2 },
  { name: "Woxsen University", tag: "ACADEMIC PARTNER", icon: FlaskConical },
  { name: "Genesys Info X", tag: "MoU PARTNER", icon: Briefcase },
  { name: "DMI", tag: "DIGITAL MEDIA", icon: Cpu },
  { name: "DATA INTELLIGENCE", tag: "ANALYTICS", icon: Network },
] as const;

const ROLE_ACCENT = {
  crimson: {
    bar: "from-crimson to-crimson-deep",
    text: "text-crimson",
    chipBg: "bg-crimson/10",
    divider: "bg-crimson/30",
  },
  saffron: {
    bar: "from-saffron to-[#c9881a]",
    text: "text-saffron",
    chipBg: "bg-saffron/10",
    divider: "bg-saffron/30",
  },
} as const;

export default function TeamPage() {
  const { tx } = useI18n();

  return (
    <>
      <PageHero
        eyebrowKey="team.eyebrow"
        titleNode={
          <>
            {tx({ EN: "Leadership &", JP: "J-Gateを" })}
            <br />
            <span className="text-gradient-saffron">
              {tx({ EN: "Team", JP: "支える人々" })}
            </span>
          </>
        }
        subtitleKey="team.title"
      />

      {/* ───────────────────────────────────────────────────────────
          Section 1 — Hero header message band
         ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy py-14 sm:py-16">
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
          Section 2 — Operations Team (4 members) — HERO editorial cards
          Full-width split: 45% photo / 55% content.
          ALTERNATING photo sides (left, right, left, right).
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>
                {tx({ EN: "J-Gate Operations Team", JP: "J-Gate運営チーム" })}
              </Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.2] text-ink"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({ EN: "Four People, One Operating Engine", JP: "4名の運営、ひとつのエンジン" })}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl font-inter text-[14px] leading-relaxed text-slate">
                {tx({
                  EN: "A four-person operations team that owns every J-Gate client engagement end-to-end — from corporate establishment to daily operations.",
                  JP: "J-Gateのすべての顧客エンゲージメントをエンドツーエンドで担う4名の運営チーム — 法人設立から日常オペレーションまで。",
                })}
              </p>
            </div>
          </Reveal>

          {/* Hero editorial cards — alternating photo sides */}
          <div className="mt-12 flex flex-col gap-8 lg:gap-12">
            {OPS_TEAM.map((m, i) => {
              const a = ROLE_ACCENT[m.roleAccent];
              const photoLeft = i % 2 === 0; // left, right, left, right
              return (
                <Reveal key={i} delay={i * 60} variant={photoLeft ? "left" : "right"}>
                  <article className="lift-card relative grid h-full overflow-hidden rounded-lg border border-slate-200 bg-pearl shadow-card lg:grid-cols-[45%_55%]">
                    {/* Top accent bar */}
                    <span className={`absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r ${a.bar}`} />

                    {/* Photo side — 45% */}
                    <div className={`relative overflow-hidden ${photoLeft ? "lg:order-1" : "lg:order-2"}`}>
                      <Photo
                        id={m.photoId}
                        alt={`${m.name}, ${tx(m.role)}`}
                        fallback={m.fallback}
                        initials={m.initials}
                        rounded="rounded-none"
                        className="h-72 w-full sm:h-80 lg:h-[480px]"
                      />
                      {/* Flag badge overlay on photo */}
                      <span className="absolute left-4 top-4 flex h-9 items-center gap-1.5 rounded-full bg-black/40 px-3 backdrop-blur-sm">
                        <span className="text-base" aria-hidden="true">{m.flag}</span>
                        <span className="font-inter text-[10px] font-semibold uppercase text-white" style={{ letterSpacing: "0.12em" }}>
                          {m.flag === "🇯🇵" ? "JP" : "IN"}
                        </span>
                      </span>
                    </div>

                    {/* Content side — 55% */}
                    <div className={`relative flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${photoLeft ? "lg:order-2" : "lg:order-1"}`}>
                      {/* Role badge */}
                      <span
                        className={`inline-flex w-fit items-center gap-1.5 rounded-full ${a.chipBg} ${a.text} px-3 py-1 font-inter text-[10px] font-bold uppercase`}
                        style={{ letterSpacing: "0.12em" }}
                      >
                        {tx(m.role)}
                      </span>

                      {/* Name — Noto Serif JP, 40-48px */}
                      <h3
                        className="mt-4 font-serif-jp font-bold leading-[1.1] text-ink"
                        style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)" }}
                      >
                        {m.name}
                      </h3>
                      <p className="mt-1 font-sans-jp text-[17px] font-semibold text-slate">
                        {m.jpName}
                      </p>

                      {/* Thin crimson divider */}
                      <span className={`mt-4 block h-px w-16 ${a.divider}`} />

                      {/* Full bio */}
                      <p className="mt-5 font-inter text-[15px] font-normal leading-[1.8] text-slate sm:text-[16px]">
                        {tx(m.bio)}
                      </p>

                      {/* Quote block */}
                      <blockquote className="mt-6 border-l-[3px] border-crimson pl-5">
                        <QuoteIcon className="h-4 w-4 text-crimson opacity-50" strokeWidth={1.5} />
                        <p className="mt-2 font-serif-jp text-[14px] italic leading-relaxed text-ink sm:text-[15px]">
                          {tx(m.quote)}
                        </p>
                      </blockquote>

                      {/* Contact row */}
                      <div className="mt-6 flex flex-wrap items-center gap-2">
                        {m.phone && (
                          <a
                            href={`tel:${m.phone.replace(/\s/g, "")}`}
                            className="flex items-center gap-1.5 rounded-md border border-slate-200 bg-ivory-warm/60 px-3 py-1.5 font-inter text-[12px] text-slate transition-colors hover:border-crimson/30 hover:bg-ivory-warm hover:text-crimson"
                          >
                            <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
                            {m.phone}
                          </a>
                        )}
                        {m.email && (
                          <a
                            href={`mailto:${m.email}`}
                            className="flex items-center gap-1.5 rounded-md border border-slate-200 bg-ivory-warm/60 px-3 py-1.5 font-inter text-[12px] text-slate transition-colors hover:border-crimson/30 hover:bg-ivory-warm hover:text-crimson"
                          >
                            <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
                            {m.email}
                          </a>
                        )}
                        {m.linkedin && (
                          <a
                            href={m.linkedin}
                            aria-label={`${m.name} LinkedIn`}
                            className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-ivory-warm/60 text-slate transition-colors hover:border-crimson/30 hover:bg-crimson/10 hover:text-crimson"
                          >
                            <Linkedin className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 3 — Advisory Board (navy dark section)
          5 cards: 3 top + 2 bottom centered.
          Portrait 240×280, gold top-border (3px saffron),
          name + JP name + role (saffron) + former title (mist) + short bio.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-midnight">
        <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 30%, rgba(232,160,26,0.10), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(188,26,44,0.08), transparent 55%)",
          }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>
                {tx({ EN: "Board of Advisory", JP: "諮問委員会" })}
              </Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.2] text-white"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({ EN: "Five Voices That Set the Standard", JP: "基準を定める5つの声" })}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl font-inter text-[14px] leading-relaxed text-mist">
                {tx({
                  EN: "Former CEOs, CIOs, founding directors, and managing directors — institutional experience that shapes every J-Gate decision.",
                  JP: "元CEO、元CIO、初代ディレクター、代表取締役 — J-Gateの決定を形作る機関的経験。",
                })}
              </p>
            </div>
          </Reveal>

          {/* 3 top + 2 bottom centered */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Top 3 */}
            {ADVISORS.slice(0, 3).map((adv, i) => (
              <Reveal key={i} delay={i * 80}>
                <AdvisorCard advisor={adv} />
              </Reveal>
            ))}
          </div>
          <div className="mx-auto mt-5 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {/* Bottom 2 — centered */}
            {ADVISORS.slice(3).map((adv, i) => (
              <Reveal key={i} delay={(i + 3) * 80}>
                <AdvisorCard advisor={adv} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 4 — Ecosystem Partners — 12-tile clean grid
          White bg, shadow-sm, 12px radius, hover translateY(-4px).
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>
                {tx({ EN: "Ecosystem Partners", JP: "エコシステムパートナー" })}
              </Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.2] text-ink"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({ EN: "Twelve Partners, One Network", JP: "12のパートナー、ひとつのネットワーク" })}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl font-inter text-[14px] leading-relaxed text-slate">
                {tx({
                  EN: "Specialised ecosystem partners — from data intelligence and creative studios to community organisations and trade bodies — each plugged into the J-Gate operating environment.",
                  JP: "データインテリジェンスやクリエイティブスタジオからコミュニティ組織・貿易機関まで — 12の専門パートナーがJ-Gate運営環境に接続。",
                })}
              </p>
            </div>
          </Reveal>

          {/* 12-tile clean grid */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {PARTNERS.map((p, i) => (
              <Reveal key={i} delay={i * 50}>
                <article
                  className="group flex h-full flex-col items-start gap-2 rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-5"
                  style={{ borderRadius: "12px" }}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate transition-colors group-hover:bg-crimson/10 group-hover:text-crimson">
                    <p.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div className="min-w-0">
                    <h3
                      className="font-inter text-[15px] font-bold leading-tight text-ink"
                    >
                      {p.name}
                    </h3>
                    <p
                      className="mt-0.5 font-inter text-[12px] font-medium uppercase text-mist"
                      style={{ letterSpacing: "0.08em" }}
                    >
                      {p.tag}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Closing CTA
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-crimson/10 text-crimson">
                <Building2 className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h2
                className="mt-6 font-serif-jp font-bold leading-[1.2] text-ink"
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({
                  EN: "Talk to the Team That Builds the Bridge",
                  JP: "架け橋を築くチームにご相談ください",
                })}
              </h2>
              <p className="mx-auto mt-3 font-inter text-[14px] leading-relaxed text-slate">
                {tx({
                  EN: "From corporate setup to talent development to daily operations — the same team you see above will own your engagement.",
                  JP: "法人設立から人材育成、日常オペレーションまで — 上記のチームがお客様のエンゲージメントを担当します。",
                })}
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

/* ============================================================
   AdvisorCard — single advisor portrait card
   ============================================================ */
function AdvisorCard({
  advisor,
}: {
  advisor: (typeof ADVISORS)[number];
}) {
  const { tx } = useI18n();
  return (
    <article className="lift-card glass-dark relative flex h-full flex-col overflow-hidden rounded-lg border border-saffron/20 p-6">
      {/* Gold top-border — 3px solid saffron */}
      <span
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ backgroundColor: "#e8a01a" }}
      />

      {/* Portrait photo 240×280 — responsive aspect */}
      <div className="mx-auto w-full max-w-[240px]">
        <Photo
          id={advisor.photoId}
          alt={`${advisor.name}, ${tx(advisor.role)}`}
          fallback={advisor.fallback}
          initials={advisor.initials}
          rounded="rounded-md"
          className="h-[260px] w-full sm:h-[280px]"
        />
      </div>

      {/* Name + JP name */}
      <div className="mt-5 text-center">
        <h3 className="font-serif-jp text-[17px] font-bold leading-tight text-white sm:text-[18px]">
          {advisor.name}
        </h3>
        <p className="mt-1 font-sans-jp text-[12px] font-medium text-mist">
          {advisor.jpName}
        </p>
      </div>

      {/* Role (saffron) */}
      <p
        className="mt-3 text-center font-inter text-[12px] font-semibold leading-snug text-saffron"
        style={{ letterSpacing: "0.04em" }}
      >
        {tx(advisor.role)}
      </p>

      {/* Former title (mist) */}
      <p className="mt-1 text-center font-inter text-[11px] uppercase text-mist" style={{ letterSpacing: "0.12em" }}>
        {tx(advisor.formerTitle)}
      </p>

      {/* Short bio */}
      <p className="mt-4 font-inter text-[12.5px] leading-relaxed text-mist">
        {tx(advisor.bio)}
      </p>

      {/* Credential icon at bottom */}
      <span className="mt-4 flex justify-center">
        <advisor.icon className="h-4 w-4 text-saffron opacity-60" strokeWidth={1.5} />
      </span>
    </article>
  );
}
