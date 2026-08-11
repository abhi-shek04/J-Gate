"use client";

import Link from "next/link";
import {
  Download,
  ArrowRight,
  BookOpen,
  Shield,
  Users,
  MapPin,
  Building2,
  CalendarClock,
  ArrowDown,
} from "lucide-react";
import { Reveal, Eyebrow, useCounter } from "@/components/jgate/shared";
import { useI18n } from "@/lib/i18n";
import {
  ToriiWatermark,
  JapanFlag,
  IndiaFlag,
} from "@/components/jgate/icons";
import { LogoMarquee } from "@/components/jgate/logo-marquee";
import { Photo } from "@/components/jgate/photo";

/* ============================================================
   J-Gate Home — v3.0 Definitive Redesign
   Architecture:
     1. Hero (100dvh, midnight, Torii watermark, 18 particles, 3 glass badges, scroll cue)
     2. Trust Strip (2-row logo marquee)
     3. Stats (4 animated counters — crimson 64px + saffron suffix + thin crimson border)
     4. 3 Pillars (navy section, glass cards with faded 01/02/03 + JP kanji + EN title + body)
     5. Locations (2 editorial cards — Hyderabad LIVE + Gurgaon IN PREPARATION with photo slots)
     6. Ecosystem Preview (3 editorial cards → /about, /why-jgate, /services)
     7. CTA Banner ("Ready to Bridge Your Future?")
   ============================================================ */

/* 18 CSS particles drifting upward via jg-drift keyframe */
function Particles() {
  const particles = Array.from({ length: 18 }).map((_, i) => ({
    left: `${(i * 53 + 7) % 100}%`,
    size: 1.2 + ((i * 7) % 4) * 0.6,
    delay: `${(i * 1.4) % 22}s`,
    duration: `${18 + ((i * 5) % 12)}s`,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full bg-white"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animation: `jg-drift ${p.duration} linear infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

/* Floating glass location badge (hero) */
function GlassBadge({
  emoji,
  primary,
  secondary,
  accent,
}: {
  emoji: string;
  primary: string;
  secondary: string;
  accent: "saffron" | "crimson" | "slate";
}) {
  const accentClass =
    accent === "saffron"
      ? "text-saffron border-saffron/30"
      : accent === "crimson"
        ? "text-crimson border-crimson/30"
        : "text-mist border-white/15";
  return (
    <div className="glass-dark flex items-center gap-2.5 rounded-full px-4 py-2">
      <span className="font-serif-jp text-[18px] leading-none">{emoji}</span>
      <div className="flex flex-col leading-tight">
        <span className={`font-inter text-[12px] font-bold uppercase ${accentClass.split(" ")[0]}`} style={{ letterSpacing: "0.08em" }}>
          {primary}
        </span>
        <span className="font-inter text-[11px] text-mist">{secondary}</span>
      </div>
    </div>
  );
}

/* Stat card with animated counter */
function StatCard({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { ref, count } = useCounter(value, 2200);
  return (
    <Reveal delay={delay}>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="lift-card relative flex h-full flex-col items-center justify-center rounded-lg border-b-2 border-crimson bg-pearl p-6 text-center shadow-card sm:p-8"
      >
        <div
          className="font-serif-jp font-bold leading-none text-crimson"
          style={{ fontSize: "clamp(2.75rem,5vw,4rem)" }}
        >
          {count}
          <span className="text-saffron">{suffix}</span>
        </div>
        <div
          className="mt-3 font-inter text-[12px] font-semibold uppercase text-slate"
          style={{ letterSpacing: "0.08em" }}
        >
          {label}
        </div>
      </div>
    </Reveal>
  );
}

export default function HomePage() {
  const { t, tx } = useI18n();

  /* 3 Pillars — navy section */
  const pillars = [
    {
      num: "01",
      kanji: "きっかけ作り",
      title: tx({ EN: "Opportunity Creation", JP: "きっかけ作り" }),
      body: t("about.pillar1.desc"),
    },
    {
      num: "02",
      kanji: "人材育成",
      title: tx({ EN: "Talent Development", JP: "人材育成" }),
      body: t("about.pillar2.desc"),
    },
    {
      num: "03",
      kanji: "ビジネス連携",
      title: tx({ EN: "Business Collaboration", JP: "ビジネス連携" }),
      body: t("about.pillar3.desc"),
    },
  ];

  /* 4 stats — animated counters */
  const stats = [
    { value: 100, suffix: "+", label: tx({ EN: "Network Partners", JP: "ネットワークパートナー" }) },
    { value: 500, suffix: "+", label: tx({ EN: "Engineers Placed", JP: "紹介エンジニア数" }) },
    { value: 94, suffix: "%", label: tx({ EN: "JLPT Pass Rate", JP: "JLPT合格率" }) },
    { value: 92, suffix: "%", label: tx({ EN: "12-Month Retention", JP: "12ヶ月定着率" }) },
  ];

  /* Ecosystem preview cards */
  const previews = [
    {
      icon: BookOpen,
      href: "/about",
      title: tx({ EN: "About J-Gate", JP: "J-Gateについて" }),
      desc: tx({
        EN: "Three pillars — Opportunity Creation, Talent Development, Business Collaboration — anchored in Hyderabad and Gurgaon.",
        JP: "きっかけ作り・人材育成・ビジネス連携の3本柱 — ハイデラバードとグルガオンを拠点に。",
      }),
    },
    {
      icon: Shield,
      href: "/why-jgate",
      title: tx({ EN: "Why J-Gate", JP: "J-Gateの強み" }),
      desc: tx({
        EN: "Comparison vs consulting firms, coworking, and public orgs — plus 7 membership pillars that accelerate India entry.",
        JP: "コンサル・コワーキング・公的機関との比較 — さらにインド進出を加速する7つの柱。",
      }),
    },
    {
      icon: Users,
      href: "/services",
      title: tx({ EN: "Services", JP: "サービス" }),
      desc: tx({
        EN: "Recruitment, corporate bridging, language training, and relocation — four pathways to Japan-India success.",
        JP: "採用・企業橋渡し・語学研修・再配置 — 日印成功への4つの道。",
      }),
    },
  ];

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          HERO — 100dvh, midnight, Torii watermark, 18 particles, 3 glass badges
         ════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-midnight">
        {/* Ambient gradient washes */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(188,26,44,0.08) 0%, rgba(188,26,44,0.02) 40%, transparent 70%), radial-gradient(ellipse at 70% 50%, rgba(188,26,44,0.12) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(232,160,26,0.06) 0%, transparent 50%)",
          }}
        />
        <ToriiWatermark
          className="torii-watermark"
          style={{ width: "70vw", maxWidth: "780px", right: "0", top: "8%", opacity: 0.045 }}
        />
        <Particles />
        {/* Skyline silhouette */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-[30%] w-full opacity-50">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="xMidYMax slice" className="h-full w-full" aria-hidden>
            <g fill="#0d1b2a">
              <rect x="0" y="160" width="80" height="40" /><rect x="80" y="135" width="60" height="65" />
              <rect x="150" y="40" width="64" height="160" /><rect x="214" y="90" width="44" height="110" />
              <rect x="258" y="135" width="70" height="65" /><rect x="340" y="130" width="120" height="70" />
              <rect x="470" y="110" width="52" height="90" /><rect x="522" y="60" width="58" height="140" />
              <rect x="580" y="135" width="48" height="65" /><rect x="628" y="20" width="70" height="180" />
              <rect x="698" y="95" width="50" height="105" /><rect x="748" y="135" width="64" height="65" />
              <rect x="820" y="120" width="80" height="80" /><rect x="910" y="80" width="56" height="120" />
              <rect x="966" y="40" width="60" height="160" /><rect x="1026" y="120" width="50" height="80" />
              <rect x="1076" y="70" width="64" height="130" /><rect x="1140" y="130" width="56" height="70" />
              <rect x="1196" y="50" width="58" height="150" /><rect x="1254" y="115" width="52" height="85" />
              <rect x="1306" y="90" width="60" height="110" /><rect x="1366" y="140" width="74" height="60" />
            </g>
          </svg>
        </div>
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-[32%] w-full"
          style={{ background: "linear-gradient(180deg, transparent, #080f1a 90%)" }}
        />

        <div className="container-jg relative z-10 pt-28 pb-32 text-center">
          {/* Eyebrow pill */}
          <Reveal>
            <span
              className="inline-flex items-center gap-2 rounded-full bg-crimson px-4 py-1.5 font-inter text-[12px] font-semibold text-white shadow-crimp"
              style={{ letterSpacing: "0.1em" }}
            >
              <JapanFlag className="h-3.5 w-5" />
              {tx({ EN: "HYDERABAD · CYBER GATEWAY", JP: "ハイデラバード・サイバーゲートウェイ" })}
              <IndiaFlag className="h-3.5 w-5" />
            </span>
          </Reveal>

          {/* Pre-title */}
          <Reveal delay={80}>
            <p
              className="mt-7 font-inter text-[13px] font-semibold uppercase text-saffron"
              style={{ letterSpacing: "0.25em" }}
            >
              {t("hero.eyebrow")}
            </p>
          </Reveal>

          {/* H1 — 3 lines, Noto Serif JP 900, clamp 3rem-6.5rem */}
          <Reveal delay={140}>
            <h1
              className="mx-auto mt-5 max-w-5xl font-serif-jp font-black leading-[1.05] text-white"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
            >
              {t("hero.title1")}
              <br />
              <span className="text-white">Working Hub for</span>
              <br />
              <span className="text-gradient-saffron">Japanese Companies</span>
            </h1>
          </Reveal>

          {/* JP tagline */}
          <Reveal delay={200}>
            <p
              className="mt-6 font-serif-jp font-medium text-saffron/85"
              style={{ fontSize: "clamp(1rem,1.6vw,1.25rem)", letterSpacing: "0.05em" }}
            >
              {t("hero.jptag")}
            </p>
          </Reveal>

          {/* Body subtitle — catchphrase */}
          <Reveal delay={260}>
            <p
              className="mx-auto mt-5 max-w-[640px] font-inter font-light leading-relaxed text-mist"
              style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)" }}
            >
              {t("hero.subtitle")}
            </p>
          </Reveal>

          {/* 2 CTAs */}
          <Reveal delay={320}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/auth/brochure"
                className="btn-shine flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-8 py-4 font-inter text-[15px] font-semibold text-white shadow-[0_0_24px_rgba(188,26,44,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(188,26,44,0.65)]"
              >
                <Download className="h-4 w-4" />
                {t("hero.cta1")}
              </Link>
              <Link
                href="/services"
                className="rounded-md border border-white/40 px-8 py-4 font-inter text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                {t("hero.cta2")}
                <ArrowRight className="ml-1.5 inline h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          {/* 3 floating glass badges */}
          <Reveal delay={420}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <GlassBadge
                emoji="📍"
                primary={tx({ EN: "Hyderabad", JP: "ハイデラバード" })}
                secondary={tx({ EN: "Main Base", JP: "主拠点" })}
                accent="saffron"
              />
              <GlassBadge
                emoji="🏢"
                primary={tx({ EN: "Gurgaon", JP: "グルガオン" })}
                secondary={tx({ EN: "Sub Base (In Prep)", JP: "サブ拠点（準備中）" })}
                accent="crimson"
              />
              <GlassBadge
                emoji="🏛"
                primary={tx({ EN: "Indobox India Pvt. Ltd.", JP: "Indobox India Pvt. Ltd." })}
                secondary={tx({ EN: "Operator", JP: "運営" })}
                accent="slate"
              />
            </div>
          </Reveal>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
          <span
            className="font-inter text-[10px] font-semibold uppercase text-mist"
            style={{ letterSpacing: "0.2em" }}
          >
            {t("hero.scroll")}
          </span>
          <div className="relative h-10 w-px overflow-hidden bg-white/15">
            <span className="animate-scroll-line absolute inset-0 block bg-crimson" />
          </div>
          <ArrowDown className="h-3 w-3 text-mist" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          TRUST STRIP — 2-row logo marquee
         ════════════════════════════════════════════════════════════ */}
      <section className="bg-ivory py-14">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto mb-9 max-w-3xl text-center">
              <Eyebrow>{t("home.logos.eyebrow")}</Eyebrow>
              <h2
                className="mt-3 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.375rem,3vw,1.75rem)" }}
              >
                {t("home.logos.title")}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <LogoMarquee variant="light" />
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          STATS — 4 animated counters (crimson 64px + saffron suffix + thin crimson border)
          On ivory bg.
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <Eyebrow>{t("home.stats.eyebrow")}</Eyebrow>
              <h2
                className="mt-3 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.625rem,3.5vw,2.125rem)" }}
              >
                {t("home.stats.title")}
              </h2>
              <p
                className="mx-auto mt-3 max-w-xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.9rem,1.5vw,1rem)" }}
              >
                {t("home.stats.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <StatCard
                key={i}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                delay={i * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          3 PILLARS — navy section, glass cards
          Each card: large faded number (96px crimson opacity 0.15) + JP kanji (saffron 20px) + EN title (white 18px) + body (mist 15px)
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad relative overflow-hidden bg-navy">
        <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(188,26,44,0.10) 0%, transparent 50%, rgba(232,160,26,0.06) 100%)",
          }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <Eyebrow light>{tx({ EN: "Why J-Gate Exists", JP: "J-Gateの存在意義" })}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.15] text-white"
                style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)" }}
              >
                {tx({
                  EN: "Three Pillars. One Operating Engine.",
                  JP: "3つの柱、1つの運営エンジン。",
                })}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-mist"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {t("about.purpose.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.num} delay={i * 120}>
                <article className="glass-dark lift-card relative h-full overflow-hidden rounded-lg border border-white/10 p-8">
                  {/* Faded large numeral */}
                  <span
                    className="pointer-events-none absolute -top-4 right-4 font-serif-jp font-black leading-none text-crimson"
                    style={{ fontSize: "96px", opacity: 0.15 }}
                    aria-hidden
                  >
                    {p.num}
                  </span>
                  <div className="relative">
                    <span
                      className="block font-serif-jp text-[20px] font-bold text-saffron"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      {p.kanji}
                    </span>
                    <h3
                      className="mt-3 font-serif-jp font-bold leading-tight text-white"
                      style={{ fontSize: "clamp(1.125rem,2vw,1.375rem)" }}
                    >
                      {p.title}
                    </h3>
                    <div className="mt-4 h-px w-12 bg-crimson/40" />
                    <p
                      className="mt-4 font-inter leading-relaxed text-mist"
                      style={{ fontSize: "15px" }}
                    >
                      {p.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          LOCATIONS — 2 editorial cards side-by-side
          Hyderabad (LIVE badge + photo + 3 bullets + visit link)
          Gurgaon (COMING SOON + IN PREPARATION + photo + 3 bullets)
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <Eyebrow>{t("about.locations.eyebrow")}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.75rem,3.8vw,2.25rem)" }}
              >
                {t("about.locations.title")}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {t("about.locations.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Hyderabad card */}
            <Reveal delay={100}>
              <article className="lift-card group h-full overflow-hidden rounded-lg border border-saffron/20 bg-pearl shadow-card">
                <div className="relative">
                  <Photo
                    id="photo-location-hyderabad"
                    alt="J-Gate Hyderabad main base — Cyber Gateway, Hitech City"
                    fallback="grad-office-main"
                    initials="HYD"
                    rounded="rounded-t-lg"
                    className="h-56 w-full"
                  />
                  <div className="absolute inset-0 rounded-t-lg bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-success px-3 py-1.5 font-inter text-[11px] font-bold uppercase text-white shadow-crimp" style={{ letterSpacing: "0.1em" }}>
                    <span className="h-2 w-2 rounded-full bg-white animate-pulse-soft" />
                    {tx({ EN: "LIVE", JP: "稼働中" })}
                  </span>
                </div>
                <div className="p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span
                        className="block font-inter text-[11px] font-bold uppercase text-saffron"
                        style={{ letterSpacing: "0.15em" }}
                      >
                        {t("about.hyderabad.tag")}
                      </span>
                      <h3 className="mt-1 font-serif-jp text-2xl font-bold text-ink">
                        {t("about.hyderabad.title")}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-saffron/15 px-2.5 py-1 font-inter text-[11px] font-bold uppercase text-saffron">
                      <CalendarClock className="h-3 w-3" />
                      {t("about.hyderabad.status")}
                    </span>
                  </div>
                  <p className="mt-3 font-serif-jp text-[14px] font-medium italic text-saffron/85">
                    {t("about.hyderabad.nick")}
                  </p>
                  <p className="mt-3 font-inter text-[14px] leading-relaxed text-slate">
                    {t("about.hyderabad.desc")}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-crimson/10 pt-5">
                    {[t("about.hyderabad.f1"), t("about.hyderabad.f2"), t("about.hyderabad.f3")].map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" />
                        <span className="font-inter text-[13px] text-ink">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-1.5 font-inter text-[13px] font-semibold text-crimson transition-all hover:gap-2.5"
                  >
                    {tx({ EN: "Visit Our Hyderabad Hub", JP: "ハイデラバード拠点を見る" })}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            </Reveal>

            {/* Gurgaon card */}
            <Reveal delay={200}>
              <article className="lift-card group h-full overflow-hidden rounded-lg border border-crimson/20 bg-pearl shadow-card">
                <div className="relative">
                  <Photo
                    id="photo-location-gurgaon"
                    alt="J-Gate Gurgaon sub base — Delhi NCR business core (in preparation)"
                    fallback="grad-office-cabin"
                    initials="GGN"
                    rounded="rounded-t-lg"
                    className="h-56 w-full"
                  />
                  <div className="absolute inset-0 rounded-t-lg bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-saffron px-3 py-1.5 font-inter text-[11px] font-bold uppercase text-white shadow-gold" style={{ letterSpacing: "0.1em" }}>
                    {tx({ EN: "COMING SOON", JP: "近日公開" })}
                  </span>
                </div>
                <div className="p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span
                        className="block font-inter text-[11px] font-bold uppercase text-crimson"
                        style={{ letterSpacing: "0.15em" }}
                      >
                        {t("about.gurgaon.tag")}
                      </span>
                      <h3 className="mt-1 font-serif-jp text-2xl font-bold text-ink">
                        {t("about.gurgaon.title")}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-crimson/15 px-2.5 py-1 font-inter text-[11px] font-bold uppercase text-crimson">
                      <CalendarClock className="h-3 w-3" />
                      {t("about.gurgaon.status")}
                    </span>
                  </div>
                  <p className="mt-3 font-serif-jp text-[14px] font-medium italic text-crimson/85">
                    {t("about.gurgaon.nick")}
                  </p>
                  <p className="mt-3 font-inter text-[14px] leading-relaxed text-slate">
                    {t("about.gurgaon.desc")}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-crimson/10 pt-5">
                    {[t("about.gurgaon.f1"), t("about.gurgaon.f2"), t("about.gurgaon.f3")].map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                        <span className="font-inter text-[13px] text-ink">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 inline-flex items-center gap-1.5 font-inter text-[13px] font-medium text-slate">
                    <MapPin className="h-3.5 w-3.5 text-crimson" />
                    {tx({ EN: "Delhi NCR · Sub Base In Preparation", JP: "デリーNCR · サブ拠点準備中" })}
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          ECOSYSTEM PREVIEW — 3 editorial cards linking to /about, /why-jgate, /services
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{t("home.overview.eyebrow")}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.625rem,3.5vw,2.125rem)" }}
              >
                {t("home.overview.title")}
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}
              >
                {t("home.overview.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {previews.map((p, i) => (
              <Reveal key={p.href} delay={i * 120}>
                <Link
                  href={p.href}
                  className="lift-card group flex h-full flex-col rounded-lg border border-crimson/8 bg-pearl p-7 shadow-card"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-crimson/10 to-saffron/10 text-crimson transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <p.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-serif-jp text-xl font-bold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 flex-1 font-inter text-[14px] leading-relaxed text-slate">
                    {p.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-inter text-[13px] font-semibold text-crimson transition-all group-hover:gap-2.5">
                    {t("common.learnMore")}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CTA BANNER — "Ready to Bridge Your Future?" + Download Brochure
         ════════════════════════════════════════════════════════════ */}
      <section className="section-pad relative overflow-hidden bg-midnight">
        <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(188,26,44,0.12), transparent 60%)",
          }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-crimson/15 text-crimson">
                <Building2 className="h-7 w-7" strokeWidth={1.5} />
              </span>
              <h2
                className="mt-6 font-serif-jp font-bold leading-[1.15] text-white"
                style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)" }}
              >
                {t("home.cta.title")}
              </h2>
              <p
                className="mx-auto mt-5 max-w-lg font-inter font-light leading-relaxed text-mist"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.125rem)" }}
              >
                {t("home.cta.subtitle")}
              </p>
              <Link
                href="/auth/brochure"
                className="btn-shine mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-8 py-4 font-inter text-[15px] font-semibold text-white shadow-[0_0_24px_rgba(188,26,44,0.45)] transition-all hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                {t("nav.brochure")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
