"use client";

import { Reveal, Eyebrow } from "./shared";
import { Photo } from "./photo";

const STRATEGIC = [
  {
    id: "photo-partner-jetro",
    name: "JETRO",
    fullName: "Japan External Trade Organization",
    badge: "Keynote Partner · Inauguration",
    fallback: "grad-partner",
    initials: "JE",
    desc: "Japan's official government trade promotion body. JETRO's Senior Director, Mr. Naoto Nakadate, personally delivered the keynote at J-Gate's inauguration — the clearest possible signal of J-Gate's institutional significance to Japan's international business agenda. Members receive access to JETRO's complete trade support resources.",
  },
  {
    id: "photo-partner-genesys",
    name: "Genesys Info X",
    fullName: "MoU Partner · Co-Founding Institution",
    badge: "MoU Partner · Co-Founding",
    fallback: "grad-partner",
    initials: "GX",
    desc: "Operating under a formal Memorandum of Understanding, Genesys Info X brings deep Hyderabad business networks and co-management expertise to J-Gate. CEO Mr. Viinay Sarikonda co-inaugurated J-Gate alongside Founder Mr. Daisuke Tanji — making this partnership the operational backbone of everything J-Gate delivers.",
  },
  {
    id: "photo-partner-thub",
    name: "T-Hub",
    fullName: "India's Largest Startup Innovation Hub",
    badge: "Innovation Ecosystem Partner",
    fallback: "grad-partner",
    initials: "TH",
    desc: "India's largest and most globally recognized startup innovation hub, based in Hyderabad. Two of T-Hub's former top executives — its former CIO and former CEO — sit on J-Gate's Advisory Council, bringing an unrivaled institutional connection to India's most important startup ecosystem.",
  },
  {
    id: "photo-partner-woxsen",
    name: "Woxsen University",
    fullName: "Academic & Talent Partner",
    badge: "Academic & Talent Partner",
    fallback: "grad-partner",
    initials: "WU",
    desc: "A premier institution committed to innovation, global business education, and cross-cultural leadership. Woxsen's partnership gives J-Gate members access to top-tier talent, research capabilities, and academic collaboration — critical assets for companies building long-term India operations.",
  },
];

const COMMUNITY = [
  { name: "MXC", desc: "Technology & Innovation Community" },
  { name: "DMI", desc: "Digital Media Industry Partner" },
  { name: "Kodryx AI", desc: "AI & Deep-Tech Ecosystem" },
  { name: "Hyderabad Anime Club", desc: "Japan-India Cultural Bridge" },
];

const MARQUEE = ["JETRO", "T-Hub", "Woxsen", "Genesys Info X", "MXC", "DMI", "Kodryx AI", "Hyderabad Anime Club"];

export function Partners() {
  const marquee = [...MARQUEE, ...MARQUEE];
  return (
    <section id="partners" className="section-pad relative overflow-hidden bg-navy">
      <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
      <div className="container-jg relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow light>Our Ecosystem</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}
            >
              Backed by Hyderabad&apos;s{" "}
              <span className="text-gradient-saffron">Most Powerful Network</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] font-inter leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
              J-Gate is not a standalone space. It is embedded inside an
              ecosystem of world-class institutions that give every member an
              unfair advantage from Day 1.
            </p>
          </div>
        </Reveal>

        {/* 2×2 strategic partner cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {STRATEGIC.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 120}>
              <article className="glass-dark lift-card flex h-full overflow-hidden rounded-lg">
                <div className="w-28 shrink-0 sm:w-36">
                  <Photo
                    id={p.id}
                    alt={`${p.name}, partner of J-Gate`}
                    fallback={p.fallback}
                    initials={p.initials}
                    rounded="rounded-l-lg"
                    className="h-full min-h-[140px] w-full"
                  />
                </div>
                <div className="flex-1 p-6">
                  <span className="inline-block rounded bg-saffron/15 px-2 py-0.5 font-inter text-[10px] font-bold uppercase text-saffron" style={{ letterSpacing: "0.08em" }}>
                    {p.badge}
                  </span>
                  <h3 className="mt-2 font-serif-jp text-xl font-bold text-white">{p.name}</h3>
                  <p className="font-inter text-[12px] text-saffron">{p.fullName}</p>
                  <p className="mt-2 font-inter text-[13px] leading-relaxed text-mist">{p.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Community partners */}
        <Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {COMMUNITY.map((c) => (
              <div key={c.name} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-sm">
                <div className="font-serif-jp text-sm font-bold text-white">{c.name}</div>
                <div className="mt-0.5 font-inter text-[11px] text-mist">{c.desc}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Marquee */}
        <Reveal delay={100}>
          <div className="marquee-track mt-8 overflow-hidden rounded-lg border-y border-white/10 py-4">
            <div className="flex w-max gap-4 animate-marquee">
              {marquee.map((name, i) => (
                <div key={`${name}-${i}`} className="flex items-center gap-2.5 whitespace-nowrap rounded-md bg-white/[0.06] px-6 py-2">
                  <span className="h-2 w-2 rounded-full bg-crimson" />
                  <span className="font-inter text-sm font-semibold text-white">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
