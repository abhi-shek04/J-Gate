"use client";

import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { Photo } from "@/components/jgate/photo";
import { LinkedInIcon } from "@/components/jgate/icons";
import { useI18n } from "@/lib/i18n";
import { Phone, Mail, MessageSquare, Download } from "lucide-react";
import Link from "next/link";

/* ============================================================
   /team — Professional line-wise structured layout
   Order per client screenshots:
   1. PageHero
   2. Operations Team (4 members — horizontal row of profile cards)
   3. Board of Advisory (5 advisors — 2-col grid, photo left + info right)
   4. Ecosystem Partners (12 partners — clean logo grid)
   5. Closing CTA
   ============================================================ */

const OPS_TEAM = [
  { id: "photo-team-tanji", name: "Daisuke TANJI", jpName: "丹治 大佑", role: "Director", flag: "🇯🇵", initials: "DT", fallback: "grad-founder-tanji", phone: "+91-9910360648" },
  { id: "photo-team-hanaoka", name: "Mariko HANAOKA", jpName: "花岡 真理子", role: "Director", flag: "🇯🇵", initials: "MH", fallback: "grad-team" },
  { id: "photo-team-dheeraj", name: "Dheeraj YANNETI", jpName: "ディラジ・ヤンネティ", role: "Community Manager", flag: "🇮🇳", initials: "DY", fallback: "grad-team", phone: "+91-98498 11543" },
  { id: "photo-team-abhishek", name: "Abhishek BUDURU", jpName: "アブシェーク・ブドゥル", role: "Intern / Tech", flag: "🇮🇳", initials: "AB", fallback: "grad-team" },
];

const ADVISORS = [
  { id: "photo-advisory-mahankali", name: "Srinivas Rao Mahankali", title: "Former CEO, T-Hub", initials: "SM", fallback: "grad-advisory-j" },
  { id: "photo-advisory-jagirdar", name: "Sujit Jagirdar", title: "Former CIO, T-Hub", initials: "SJ", fallback: "grad-advisory-j" },
  { id: "photo-advisory-desai", name: "Dr. Uday B. Desai", title: "Founding Director, IIT Hyderabad", initials: "UD", fallback: "grad-advisory-j" },
  { id: "photo-advisory-sarikonda", name: "Dr. Viinay Sarikonda", title: "CEO, Genesys Info X", initials: "VS", fallback: "grad-advisory-s" },
  { id: "photo-advisory-isogai", name: "Tomio Isogai", jpName: "磯貝 富雄", title: "Indobox Advisor · Former MD, Sharp India", initials: "TI", fallback: "grad-advisory-j" },
];

const ECOSYSTEM = [
  { name: "Kodryx.ai", src: "/logos/kodryx.jpg", category: "DATA INTELLIGENCE" },
  { name: "YANC", src: null, category: "YOUNG MINDS NETWORKING" },
  { name: "Daakia", src: "/logos/daakia.jpg", category: "BRIDGING DISTANCE" },
  { name: "Fingerprint Films", src: null, category: "CREATIVE STUDIO" },
  { name: "MXC", src: "/logos/mxc.png", category: "TECHNOLOGY PARTNER" },
  { name: "Hyderabad Japan Club", src: "/logos/hyderabad-anime-club.jpg", category: "COMMUNITY" },
  { name: "JETRO", src: "/logos/jetro.jpg", category: "TRADE PROMOTION" },
  { name: "T-Hub", src: "/logos/thub.jpg", category: "INNOVATION HUB" },
  { name: "Woxsen University", src: "/logos/woxsen.jpg", category: "ACADEMIC PARTNER" },
  { name: "Genesys Info X", src: "/logos/genesys-info-x.png", category: "MoU PARTNER" },
  { name: "DMI", src: "/logos/dmi.jpg", category: "DIGITAL MEDIA" },
  { name: "DATA INTELLIGENCE", src: null, category: "ANALYTICS" },
];

export default function TeamPage() {
  const { tx } = useI18n();

  return (
    <>
      <PageHero
        eyebrowKey="team.eyebrow"
        titleNode={tx({ EN: "Leadership & Team", JP: "リーダーシップ&チーム" })}
        subtitleKey="team.subtitle"
      />

      {/* ═══════════════════════════════════════════
          Section 1 — Operations Team
          Horizontal row of 4 profile cards (photo top, info below)
          + Japanese consultation CTA
          ═══════════════════════════════════════════ */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="text-center">
              <Eyebrow>{tx({ EN: "Operations Team", JP: "運営チーム" })}</Eyebrow>
              <h2 className="mt-3 font-serif-jp font-bold text-ink" style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}>
                {tx({ EN: "J-Gate Operations Team", JP: "J-Gate運営チーム" })}
              </h2>
            </div>
          </Reveal>

          {/* 4 profile cards in a row */}
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {OPS_TEAM.map((m, i) => (
              <Reveal key={m.id} delay={i * 70}>
                <article className="lift-card flex h-full flex-col items-center rounded-lg border border-slate-200 bg-pearl p-4 text-center shadow-card">
                  {/* Photo — rounded square */}
                  <div className="relative">
                    <div className="w-20">
                      <Photo id={m.id} alt={m.name} fallback={m.fallback} initials={m.initials} rounded="rounded-xl" className="h-20 w-20" />
                    </div>
                    <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-pearl text-[11px] shadow-card">{m.flag}</span>
                  </div>
                  {/* Info — line-wise below photo */}
                  <h3 className="mt-3 font-serif-jp text-[14px] font-bold text-ink">{m.name}</h3>
                  <p className="font-sans-jp text-[10px] text-mist">{m.jpName}</p>
                  <span className="mt-1.5 inline-flex rounded-full bg-crimson/10 px-2 py-0.5 font-inter text-[10px] font-semibold text-crimson">{m.role}</span>
                  {m.phone && <p className="mt-1.5 font-inter text-[10px] text-slate">📞 {m.phone}</p>}
                  <a href="mailto:contact@indobox.co.jp" className="mt-0.5 font-inter text-[10px] text-slate hover:text-crimson">📧 Email</a>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Japanese consultation CTA */}
          <Reveal delay={200}>
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-3 rounded-lg border border-crimson/15 bg-crimson/5 px-6 py-3.5">
                <MessageSquare className="h-4 w-4 shrink-0 text-crimson" />
                <p className="font-inter text-[13px] text-slate">
                  {tx({ EN: "Feel free to consult about anything. Support is provided in Japanese.", JP: "なんでもお気軽にご相談ください。日本語でご対応いたします。" })}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Section 2 — Board of Advisory
          Dark section, 2-column grid, photo left + info right
          Gold accents
          ═══════════════════════════════════════════ */}
      <section className="section-pad relative overflow-hidden bg-midnight">
        <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 20%, rgba(232,160,26,0.08), transparent 60%)" }} />
        <div className="container-jg relative">
          <Reveal>
            <div className="text-center">
              <Eyebrow light>{tx({ EN: "Board of Advisory", JP: "諮問委員会" })}</Eyebrow>
              <h2 className="mt-3 font-serif-jp font-bold text-white" style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}>
                {tx({ EN: "Five Voices That Set the Standard", JP: "基準を定める5つの声" })}
              </h2>
            </div>
          </Reveal>

          {/* 2-column grid: photo left, info right */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {ADVISORS.map((adv, i) => (
              <Reveal key={adv.id} delay={i * 60}>
                <article className="border-t-2 border-saffron lift-card flex items-center gap-4 rounded-lg bg-white/[0.06] p-4 backdrop-blur-sm">
                  {/* Photo — rounded square */}
                  <div className="shrink-0">
                    <Photo id={adv.id} alt={adv.name} fallback={adv.fallback} initials={adv.initials} rounded="rounded-xl" className="h-16 w-16" />
                  </div>
                  {/* Info — line-wise to the right */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif-jp text-[14px] font-bold text-white">{adv.name}</h3>
                    {adv.jpName && <p className="font-sans-jp text-[11px] text-mist">{adv.jpName}</p>}
                    <p className="mt-0.5 font-inter text-[12px] text-saffron">{adv.title}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Section 3 — Ecosystem Partners
          Clean logo grid, 12 partners with categories
          ═══════════════════════════════════════════ */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="text-center">
              <Eyebrow>{tx({ EN: "Ecosystem Partners", JP: "エコシステムパートナー" })}</Eyebrow>
              <h2 className="mt-3 font-serif-jp font-bold text-ink" style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}>
                {tx({ EN: "Our Partner Network", JP: "パートナーネットワーク" })}
              </h2>
            </div>
          </Reveal>

          {/* Logo grid — 2 cols on mobile, 3 on tablet, 4 on desktop */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {ECOSYSTEM.map((p, i) => (
              <Reveal key={i} delay={(i % 4) * 50}>
                <div className="lift-card flex h-full flex-col items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white p-4 text-center shadow-card">
                  {p.src ? (
                    <div className="flex h-12 w-full items-center justify-center">
                      <img src={p.src} alt={`${p.name} logo`} className="max-h-12 max-w-[100px] object-contain" loading="lazy" />
                    </div>
                  ) : (
                    <div className="flex h-12 w-full items-center justify-center">
                      <span className="font-serif-jp text-[13px] font-bold text-ink">{p.name}</span>
                    </div>
                  )}
                  <span className="font-inter text-[12px] font-semibold text-ink">{p.name}</span>
                  <span className="font-inter text-[8px] uppercase tracking-wide text-mist">{p.category}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Section 4 — Closing CTA
          ═══════════════════════════════════════════ */}
      <section className="section-pad relative overflow-hidden bg-navy">
        <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif-jp font-bold text-white" style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}>
                {tx({ EN: "Connect With Our Team", JP: "チームと繋がる" })}
              </h2>
              <p className="mx-auto mt-2 max-w-sm font-inter text-mist" style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}>
                {tx({ EN: "Reach out to discuss your India workspace needs — we respond within 24 hours.", JP: "インドのワークスペースについてお気軽にご相談ください — 24時間以内にご返信します。" })}
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn-shine flex items-center gap-2 rounded-md bg-crimson px-5 py-2.5 font-inter text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-crimson-deep">
                  <Mail className="h-3.5 w-3.5" /> {tx({ EN: "Contact Us", JP: "お問い合わせ" })}
                </Link>
                <Link href="/auth/brochure" className="flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 font-inter text-[13px] font-semibold text-white transition-all hover:bg-white/10">
                  <Download className="h-3.5 w-3.5" /> {tx({ EN: "Download Brochure", JP: "パンフレット" })}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
