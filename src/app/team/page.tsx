"use client";

import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { Photo } from "@/components/jgate/photo";
import { LinkedInIcon } from "@/components/jgate/icons";
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
  Heart,
  Globe2,
  Phone,
  Mail,
  Network,
} from "lucide-react";
import Link from "next/link";

/* ============================================================
   Team — v4.0 Compact Redesign (Task: TEAM-FIX)
   Architecture:
     1. PageHero — "Leadership & Team" / "The Minds Behind J-Gate"
     2. Hero header band — navy section with team tagline
     3. Operations Team (4 members) — COMPACT 2×2 grid,
        horizontal cards (photo 96px circular left + content right),
        role badge, 2-line bio, contact row.
     4. Advisory Board (navy dark) — COMPACT 5-column grid,
        vertical cards (photo 80px circular), name + JP name +
        former title only (NO long bios), gold top border.
     5. Ecosystem Partners — 12-tile compact grid (kept as-is).
     6. Closing CTA
   Design rules:
     - ALL cards SAME HEIGHT within each row (h-full + items-stretch)
     - Cards COMPACT, not oversized
     - Layout NEAT and STRUCTURED — professional corporate team
   ============================================================ */

type Bilingual = { EN: string; JP: string };

/* ── Operations Team — 4 members, compact horizontal cards ── */
const OPS_TEAM = [
  {
    photoId: "photo-team-tanji",
    fallback: "grad-founder-tanji",
    initials: "DT",
    flag: "🇯🇵",
    name: "Daisuke TANJI",
    jpName: "丹治 大佑",
    role: { EN: "Director", JP: "ディレクター" } as Bilingual,
    bio: {
      EN: "Representative of Indobox India. Leads J-Gate with a decade of India bridging experience.",
      JP: "Indobox India代表。10年の日印架け橋経験でJ-Gateを牽引。",
    } as Bilingual,
    phone: "+91-9910360648",
    email: "",
  },
  {
    photoId: "photo-team-hanaoka",
    fallback: "grad-team",
    initials: "MH",
    flag: "🇯🇵",
    name: "Mariko HANAOKA",
    jpName: "花岡 真理子",
    role: { EN: "Director", JP: "ディレクター" } as Bilingual,
    bio: {
      EN: "Oversees client relationships, program delivery, and Japan-facing bilateral handoff.",
      JP: "顧客関係、プログラム提供、両国間引き継ぎの日本側を統括。",
    } as Bilingual,
    phone: "",
    email: "contact@indobox.co.jp",
  },
  {
    photoId: "photo-team-dheeraj",
    fallback: "grad-team",
    initials: "DY",
    flag: "🇮🇳",
    name: "Dheeraj YANNETI",
    jpName: "ディラジ・ヤンネティ",
    role: { EN: "Community Manager", JP: "コミュニティマネージャー" } as Bilingual,
    bio: {
      EN: "Daily heartbeat of J-Gate Hyderabad — tenant relations and cultural bridge.",
      JP: "J-Gateハイデラバードの日常の中核 — テナント関係と文化の架け橋。",
    } as Bilingual,
    phone: "+91-98498 11543",
    email: "",
  },
  {
    photoId: "photo-team-abhishek",
    fallback: "grad-team",
    initials: "AB",
    flag: "🇮🇳",
    name: "Abhishek BUDURU",
    jpName: "アブシェーク・ブドゥル",
    role: { EN: "Intern / Tech", JP: "インターン・技術" } as Bilingual,
    bio: {
      EN: "Powers the technical layer — workspace infrastructure and digital systems.",
      JP: "技術レイヤーを支える — ワークスペースインフラとデジタルシステム。",
    } as Bilingual,
    phone: "",
    email: "",
  },
] as const;

/* ── Advisory Board — 5 advisors, compact vertical cards ── */
const ADVISORS = [
  {
    photoId: "photo-advisory-mahankali",
    fallback: "grad-advisory-j",
    initials: "SM",
    name: "Srinivas Rao Mahankali",
    jpName: "スリニヴァス・ラオ・マハンカリ",
    formerTitle: { EN: "Former CEO, T-Hub", JP: "元CEO、T-Hub" } as Bilingual,
  },
  {
    photoId: "photo-advisory-jagirdar",
    fallback: "grad-advisory-j",
    initials: "SJ",
    name: "Sujit Jagirdar",
    jpName: "スジット・ジャギルダール",
    formerTitle: { EN: "Former CIO, T-Hub", JP: "元CIO、T-Hub" } as Bilingual,
  },
  {
    photoId: "photo-advisory-desai",
    fallback: "grad-advisory-j",
    initials: "UD",
    name: "Dr. Uday B. Desai",
    jpName: "ウダイ・B・デサイ博士",
    formerTitle: {
      EN: "Founding Director, IIT Hyderabad",
      JP: "初代ディレクター、IIT Hyderabad",
    } as Bilingual,
  },
  {
    photoId: "photo-advisory-sarikonda",
    fallback: "grad-advisory-s",
    initials: "VS",
    name: "Dr. Viinay Sarikonda",
    jpName: "ヴィイナイ・サリコンダ博士",
    formerTitle: { EN: "CEO, Genesys Info X", JP: "CEO、Genesys Info X" } as Bilingual,
  },
  {
    photoId: "photo-advisory-isogai",
    fallback: "grad-advisory-j",
    initials: "TI",
    name: "Tomio Isogai",
    jpName: "磯貝 富雄",
    formerTitle: {
      EN: "Indobox Advisor · Former MD, Sharp India",
      JP: "Indoboxアドバイザー・元シャープインドリア代表",
    } as Bilingual,
  },
] as const;

/* ── Ecosystem Partners — 12-tile compact grid (kept) ── */
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
          Section 1 — Hero header message band (navy)
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
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({
                  EN: "Unlocking new possibilities for your business through collaboration with India.",
                  JP: "インドとの連携で、貴社のビジネスに新たな可能性を。",
                })}
              </p>
              <p
                className="mx-auto mt-3 font-sans-jp font-medium leading-relaxed text-saffron-light"
                style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
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
          Section 2 — Operations Team (4 members) — COMPACT 2×2 grid
          Each card: photo 96px circular (left) + content (right)
          ALL cards same height via h-full + items-stretch.
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
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({
                  EN: "Four People, One Operating Engine",
                  JP: "4名の運営、ひとつのエンジン",
                })}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl font-inter text-[14px] leading-relaxed text-slate">
                {tx({
                  EN: "A four-person operations team that owns every J-Gate client engagement end-to-end — from corporate establishment to daily operations.",
                  JP: "J-Gateのすべての顧客エンゲージメントをエンドツーエンドで担う4名の運営チーム — 法人設立から日常オペレーションまで。",
                })}
              </p>
            </div>
          </Reveal>

          {/* 2×2 compact grid — same height via items-stretch */}
          <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5">
            {OPS_TEAM.map((m, i) => (
              <Reveal key={i} delay={i * 70}>
                <OpsCard member={m} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 3 — Advisory Board (navy dark) — COMPACT 5-col grid
          Each card: photo 80px circular, name + JP name + former title only.
          Gold top border (border-t-2 border-saffron).
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
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({
                  EN: "Five Voices That Set the Standard",
                  JP: "基準を定める5つの声",
                })}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl font-inter text-[14px] leading-relaxed text-mist">
                {tx({
                  EN: "Former CEOs, CIOs, founding directors, and managing directors — institutional experience that shapes every J-Gate decision.",
                  JP: "元CEO、元CIO、初代ディレクター、代表取締役 — J-Gateの決定を形作る機関的経験。",
                })}
              </p>
            </div>
          </Reveal>

          {/* 5-column compact grid — same height via items-stretch */}
          <div className="mt-10 grid items-stretch gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {ADVISORS.map((adv, i) => (
              <Reveal key={i} delay={i * 70}>
                <AdvisorCard advisor={adv} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 4 — Ecosystem Partners — 12-tile compact grid (kept)
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
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({
                  EN: "Twelve Partners, One Network",
                  JP: "12のパートナー、ひとつのネットワーク",
                })}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl font-inter text-[14px] leading-relaxed text-slate">
                {tx({
                  EN: "Specialised ecosystem partners — from data intelligence and creative studios to community organisations and trade bodies — each plugged into the J-Gate operating environment.",
                  JP: "データインテリジェンスやクリエイティブスタジオからコミュニティ組織・貿易機関まで — 12の専門パートナーがJ-Gate運営環境に接続。",
                })}
              </p>
            </div>
          </Reveal>

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
                    <h3 className="font-inter text-[15px] font-bold leading-tight text-ink">
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
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
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
   OpsCard — compact horizontal card (96px circular photo + content)
   Same height via h-full; content uses flex-col with mt-auto for
   pinning the contact row to the bottom for visual alignment.
   ============================================================ */
function OpsCard({ member }: { member: (typeof OPS_TEAM)[number] }) {
  const { tx } = useI18n();
  return (
    <article className="lift-card flex h-full flex-col gap-4 rounded-lg bg-pearl p-5 shadow-card sm:flex-row sm:items-start sm:gap-5">
      {/* Photo — 96px circular with flag badge bottom-right */}
      <div className="relative shrink-0 self-center sm:self-start">
        <Photo
          id={member.photoId}
          alt={`${member.name}, ${tx(member.role)}`}
          fallback={member.fallback}
          initials={member.initials}
          rounded="rounded-full"
          className="h-24 w-24"
        />
        <span
          className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md ring-2 ring-pearl"
          aria-hidden="true"
        >
          <span className="text-sm leading-none">{member.flag}</span>
        </span>
      </div>

      {/* Content — name, JP name, role badge, 2-line bio, contact row */}
      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="font-serif-jp text-lg font-bold leading-tight text-ink">
          {member.name}
        </h3>
        <p className="mt-0.5 font-sans-jp text-xs font-medium text-mist">
          {member.jpName}
        </p>

        {/* Role badge — crimson pill */}
        <span
          className="mt-2 inline-flex w-fit items-center rounded-full bg-crimson/10 px-3 py-1 font-inter text-[10px] font-bold uppercase text-crimson"
          style={{ letterSpacing: "0.12em" }}
        >
          {tx(member.role)}
        </span>

        {/* Bio — 2 lines max */}
        <p className="mt-3 line-clamp-2 font-inter text-[13px] leading-relaxed text-slate">
          {tx(member.bio)}
        </p>

        {/* Contact row — phone | email | LinkedIn (inline) */}
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
          {member.phone && (
            <a
              href={`tel:${member.phone.replace(/\s/g, "")}`}
              aria-label={`${member.name} phone`}
              className="flex items-center gap-1.5 rounded-md border border-slate-200 bg-ivory-warm/60 px-2.5 py-1.5 font-inter text-[12px] text-slate transition-colors hover:border-crimson/30 hover:bg-ivory-warm hover:text-crimson"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
              <span className="truncate">{member.phone}</span>
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              aria-label={`${member.name} email`}
              className="flex items-center gap-1.5 rounded-md border border-slate-200 bg-ivory-warm/60 px-2.5 py-1.5 font-inter text-[12px] text-slate transition-colors hover:border-crimson/30 hover:bg-ivory-warm hover:text-crimson"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
              <span className="truncate">{member.email}</span>
            </a>
          )}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            aria-label={`${member.name} LinkedIn`}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-ivory-warm/60 text-slate transition-colors hover:border-crimson/30 hover:bg-crimson/10 hover:text-crimson"
          >
            <LinkedInIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   AdvisorCard — compact vertical card (80px circular photo)
   Gold top border (border-t-2 border-saffron), name + JP name +
   former title only (NO long bios). Same height via h-full.
   ============================================================ */
function AdvisorCard({ advisor }: { advisor: (typeof ADVISORS)[number] }) {
  const { tx } = useI18n();
  return (
    <article className="lift-card glass-dark flex h-full flex-col items-center rounded-lg border-t-2 border-saffron p-4 text-center">
      {/* Photo — 80px circular */}
      <Photo
        id={advisor.photoId}
        alt={`${advisor.name}, ${tx(advisor.formerTitle)}`}
        fallback={advisor.fallback}
        initials={advisor.initials}
        rounded="rounded-full"
        className="h-20 w-20"
      />

      {/* Name — text-sm font-bold text-white */}
      <h3 className="mt-3 font-serif-jp text-sm font-bold leading-tight text-white">
        {advisor.name}
      </h3>

      {/* JP name — text-[11px] text-mist */}
      <p className="mt-0.5 font-sans-jp text-[11px] text-mist">
        {advisor.jpName}
      </p>

      {/* Former title — text-[12px] text-saffron */}
      <p
        className="mt-2 font-inter text-[12px] font-semibold leading-snug text-saffron"
        style={{ letterSpacing: "0.04em" }}
      >
        {tx(advisor.formerTitle)}
      </p>
    </article>
  );
}
