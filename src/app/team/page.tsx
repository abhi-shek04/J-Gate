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
   CLEAN tiered structure:
     1. PageHero
     2. J-Gate Operations Team (4 members) — clean 4-card grid
     3. Advisory Board (5 advisors) — 3+2 grid, gold accent
     4. Ecosystem Partners (6 partners) — clean tile grid
     5. Closing CTA
   ZERO context mixing per card.
   ============================================================ */

type Bilingual = { EN: string; JP: string };

/* ── Section 2 — J-Gate Operations Team — Slide 13 ── */
const OPS_TEAM = [
  {
    photoId: "photo-team-tanji-ops",
    fallback: "grad-founder-tanji",
    initials: "DT",
    flag: "🇯🇵",
    name: "Daisuke TANJI",
    jpName: "丹治 大佑",
    role: { EN: "Director", JP: "ディレクター" } as Bilingual,
    bio: {
      EN: "Representative of Indobox — leads J-Gate operations with a decade of India-side bridging experience.",
      JP: "Indobox代表 — 10年の日印架け橋経験を持つJ-Gate運営の責任者。",
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
    bio: {
      EN: "Director — oversees client relationships, program delivery, and the Japan-facing side of the bilateral handoff.",
      JP: "ディレクター — 顧客関係、プログラム提供、両国間引き継ぎの日本側面を統括。",
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
    bio: {
      EN: "Day-to-day heartbeat of J-Gate Hyderabad — tenant relations, networking events, and the cultural bridge.",
      JP: "J-Gateハイデラバードの日常の中核 — テナント関係、ネットワーキング、文化橋渡しを管理。",
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
    bio: {
      EN: "Intern supporting the technical layer — workspace infrastructure, digital tools, and operational systems.",
      JP: "技術レイヤーを支えるインターン — ワークスペースインフラ、デジタルツール、運営システムを担当。",
    } as Bilingual,
    accent: "saffron",
  },
] as const;

/* ── Section 3 — Board of Advisory — Slide 12 ── */
const ADVISORS = [
  {
    photoId: "photo-advisor-mahankali",
    fallback: "grad-advisory-s",
    initials: "SM",
    name: "Srinivas Rao Mahankali",
    jpName: "スリニヴァス・ラオ・マハンカリ",
    role: {
      EN: "Former CEO, T-Hub",
      JP: "元CEO、T-Hub",
    } as Bilingual,
    credential: { EN: "Former CEO", JP: "元CEO" } as Bilingual,
    icon: Award,
  },
  {
    photoId: "photo-advisor-jagirdar",
    fallback: "grad-advisory-j",
    initials: "SJ",
    name: "Sujit Jagirdar",
    jpName: "スジット・ジャギルダール",
    role: {
      EN: "Former CIO, T-Hub",
      JP: "元CIO、T-Hub",
    } as Bilingual,
    credential: { EN: "Former CIO", JP: "元CIO" } as Bilingual,
    icon: Cpu,
  },
  {
    photoId: "photo-advisor-desai",
    fallback: "grad-advisory-s",
    initials: "UD",
    name: "Dr. Uday B. Desai",
    jpName: "ウダイ・B・デサイ博士",
    role: {
      EN: "Founding Director, IIT Hyderabad",
      JP: "初代ディレクター、IIT Hyderabad",
    } as Bilingual,
    credential: { EN: "Founding Director", JP: "初代ディレクター" } as Bilingual,
    icon: FlaskConical,
  },
  {
    photoId: "photo-advisor-sarikonda",
    fallback: "grad-advisory-j",
    initials: "VS",
    name: "Dr. Viinay Sarikonda",
    jpName: "ヴィイナイ・サリコンダ博士",
    role: {
      EN: "CEO, Genesys Info X",
      JP: "CEO、Genesys Info X",
    } as Bilingual,
    credential: { EN: "CEO", JP: "CEO" } as Bilingual,
    icon: Briefcase,
  },
  {
    photoId: "photo-advisor-isogai",
    fallback: "grad-advisory-s",
    initials: "TI",
    name: "Tomio Isogai",
    jpName: "磯貝 富雄",
    role: {
      EN: "Indobox Advisor · Former Sharp India MD",
      JP: "Indoboxアドバイザー・元シャープインドリア代表",
    } as Bilingual,
    credential: { EN: "Former MD, Sharp India", JP: "元シャープインドリア代表" } as Bilingual,
    icon: Lightbulb,
  },
] as const;

/* ── Section 4 — Ecosystem Partners — Slide 12 ── */
const PARTNERS = [
  {
    name: "Kodryx.ai",
    tag: "DATA INTELLIGENCE",
    icon: Cpu,
  },
  {
    name: "YANC",
    tag: "YOUNG MINDS NETWORKING",
    icon: Users,
  },
  {
    name: "Daakia",
    tag: "BRIDGING DISTANCE",
    icon: Globe2,
  },
  {
    name: "Fingerprint Films",
    tag: "CREATIVE STUDIO",
    icon: Award,
  },
  {
    name: "MXC",
    tag: "TECHNOLOGY PARTNER",
    icon: Briefcase,
  },
  {
    name: "Hyderabad Japan Club",
    tag: "COMMUNITY",
    icon: Heart,
  },
] as const;

const OPS_ACCENT = {
  crimson: {
    bar: "from-crimson to-crimson-deep",
    text: "text-crimson",
    chipBg: "bg-crimson/10",
    ring: "border-crimson/15 hover:border-crimson/40",
  },
  saffron: {
    bar: "from-saffron to-[#c9881a]",
    text: "text-saffron",
    chipBg: "bg-saffron/10",
    ring: "border-saffron/15 hover:border-saffron/40",
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
          Section 1 — Header Message (Slide 13)
          Single bilingual executive tagline band.
         ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy py-14">
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
          CLEAN 4-card grid: photo + name + role badge + 1-line bio.
          ZERO mixing with advisors.
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
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({ EN: "Four People, One Operating Engine", JP: "4名の運営、ひとつのエンジン" })}
              </h2>
              <p
                className="mx-auto mt-3 max-w-2xl font-inter text-[14px] leading-relaxed text-slate"
              >
                {tx({
                  EN: "A four-person operations team that owns every J-Gate client engagement end-to-end.",
                  JP: "J-Gateのすべての顧客エンゲージメントをエンドツーエンドで担う4名の運営チーム。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OPS_TEAM.map((m, i) => {
              const a = OPS_ACCENT[m.accent];
              return (
                <Reveal key={i} delay={i * 80}>
                  <article
                    className={`lift-card relative flex h-full flex-col items-center overflow-hidden rounded-lg border bg-pearl p-6 text-center shadow-card ${a.ring}`}
                  >
                    <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${a.bar}`} />

                    <Photo
                      id={m.photoId}
                      alt={`${m.name}, ${tx(m.role)}`}
                      fallback={m.fallback}
                      initials={m.initials}
                      rounded="rounded-full"
                      className="h-24 w-24 sm:h-28 sm:w-28"
                    />

                    <span className="mt-3 text-xl" aria-hidden="true">
                      {m.flag}
                    </span>

                    <h3 className="mt-2 font-serif-jp text-[15px] font-bold leading-tight text-ink">
                      {m.name}
                    </h3>
                    <p className="font-sans-jp text-[11px] text-mist">{m.jpName}</p>

                    {/* Role badge */}
                    <span
                      className={`mt-2 inline-flex items-center gap-1.5 rounded-full ${a.chipBg} ${a.text} px-3 py-1 font-inter text-[10px] font-bold uppercase`}
                      style={{ letterSpacing: "0.1em" }}
                    >
                      {tx(m.role)}
                    </span>

                    <p className="mt-3 font-inter text-[12.5px] leading-relaxed text-slate">
                      {tx(m.bio)}
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
          CLEAN 5-card grid in 3+2 layout, gold accent. Each card:
          photo + name + role + former-position badge. NO mixing.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>
                {tx({ EN: "Board of Advisory", JP: "諮問委員会" })}
              </Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.2] text-ink"
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({ EN: "Five Voices That Set the Standard", JP: "基準を定める5つの声" })}
              </h2>
              <p
                className="mx-auto mt-3 max-w-2xl font-inter text-[14px] leading-relaxed text-slate"
              >
                {tx({
                  EN: "Former CEOs, CIOs, founding directors, and managing directors — institutional experience that shapes every J-Gate decision.",
                  JP: "元CEO、元CIO、初代ディレクター、代表取締役 — J-Gateの決定を形作る機関的経験。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ADVISORS.map((a, i) => (
              <Reveal key={i} delay={i * 80}>
                <article className="lift-card relative flex h-full flex-col overflow-hidden rounded-lg border border-saffron/15 bg-pearl p-6 shadow-card">
                  {/* Gold top-border accent */}
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saffron via-saffron-light to-[#c9881a]" />

                  <div className="flex items-center gap-4">
                    <Photo
                      id={a.photoId}
                      alt={`${a.name}, ${tx(a.role)}`}
                      fallback={a.fallback}
                      initials={a.initials}
                      rounded="rounded-full"
                      className="h-16 w-16 shrink-0 sm:h-20 sm:w-20"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif-jp text-[15px] font-bold leading-tight text-ink sm:text-base">
                        {a.name}
                      </h3>
                      <p className="mt-0.5 font-sans-jp text-[11px] text-mist">{a.jpName}</p>
                      {/* Former-position badge (gold accent) */}
                      <span
                        className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-saffron/10 px-2.5 py-0.5 font-inter text-[10px] font-bold uppercase text-saffron"
                        style={{ letterSpacing: "0.08em" }}
                      >
                        <a.icon className="h-3 w-3" strokeWidth={2} />
                        {tx(a.credential)}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 font-inter text-[12.5px] leading-relaxed text-slate">
                    {tx(a.role)}
                  </p>
                </article>
              </Reveal>
            ))}

            {/* 6th tile — clean closure card with grid balance */}
            <Reveal delay={ADVISORS.length * 80}>
              <div className="relative flex h-full min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-lg border border-crimson/20 bg-gradient-to-br from-crimson/[0.04] to-saffron/[0.04] p-6 text-center">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-crimson via-saffron to-crimson-deep" />
                <Sparkles className="h-8 w-8 text-crimson" strokeWidth={1.25} />
                <p className="mt-3 font-serif-jp text-[14px] font-bold leading-snug text-ink">
                  {tx({
                    EN: "Five advisors. One mandate: rigour.",
                    JP: "5名のアドバイザー。ひとつの使命：厳格さ。",
                  })}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 4 — Ecosystem Partners (Slide 12)
          CLEAN logo/tile grid: 6 partner tiles. NO mixing.
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
                className="mt-4 font-serif-jp font-bold leading-[1.2] text-white"
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({ EN: "Six Partners, One Network", JP: "6つのパートナー、ひとつのネットワーク" })}
              </h2>
              <p
                className="mx-auto mt-3 max-w-2xl font-inter text-[14px] leading-relaxed text-mist"
              >
                {tx({
                  EN: "Specialised ecosystem partners — from data intelligence and creative studios to community organisations — each plugged into the J-Gate operating environment.",
                  JP: "データインテリジェンスやクリエイティブスタジオからコミュニティ組織まで — 6つの専門パートナーがJ-Gate運営環境に接続。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.map((p, i) => {
              const accent = i % 2 === 0 ? "saffron" : "crimson";
              const accentText = accent === "saffron" ? "text-saffron" : "text-crimson";
              const accentBg = accent === "saffron" ? "bg-saffron/15" : "bg-crimson/15";
              return (
                <Reveal key={i} delay={i * 70}>
                  <article className="glass-dark lift-card group relative flex h-full items-center gap-4 overflow-hidden rounded-lg border border-white/10 p-5 transition-all hover:border-white/20">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md ${accentBg} ${accentText} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <p.icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif-jp text-[16px] font-bold text-white">
                        {p.name}
                      </h3>
                      <p
                        className={`mt-0.5 font-inter text-[10px] font-bold uppercase ${accentText}`}
                        style={{ letterSpacing: "0.12em" }}
                      >
                        {p.tag}
                      </p>
                    </div>
                    {/* Hover-reveal bottom accent bar */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r ${
                        accent === "saffron"
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
                className="mt-6 font-serif-jp font-bold leading-[1.2] text-ink"
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({
                  EN: "Talk to the Team That Builds the Bridge",
                  JP: "架け橋を築くチームにご相談ください",
                })}
              </h2>
              <p
                className="mx-auto mt-3 font-inter text-[14px] leading-relaxed text-slate"
              >
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
