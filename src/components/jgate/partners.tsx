"use client";

import { Reveal, Eyebrow } from "./shared";
import { Photo } from "./photo";
import { PartnerLogo } from "./partner-logo";

const STRATEGIC = [
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
  "MXC",
  "Kodryx AI",
  "Hyderabad Anime Club",
  "Daakia",
  "Fingerprint Films",
  "YANC",
  "Data Intelligence",
];

const COMMUNITY_DESCS: Record<string, string> = {
  "MXC": "Technology & Innovation Community",
  "Kodryx AI": "AI & Deep-Tech Ecosystem",
  "Hyderabad Anime Club": "Japan-India Cultural Bridge",
  "Daakia": "Bridging Distance with AI",
  "Fingerprint Films": "Creative Studio & Brand Media",
  "YANC": "Young Minds Networking & Life Skills",
  "Data Intelligence": "Market & Talent Analytics",
};

const MARQUEE = ["T-Hub", "Woxsen University", "Genesys Info X", "MXC", "Kodryx AI", "Hyderabad Anime Club", "Daakia", "Fingerprint Films", "YANC", "Data Intelligence"];

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

        {/* Strategic partner cards with real logos */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STRATEGIC.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 120}>
              <article className="glass-dark lift-card flex h-full overflow-hidden rounded-lg">
                {/* Real logo card */}
                <div className="w-32 shrink-0 bg-white sm:w-40">
                  <div className="flex h-full min-h-[140px] items-center justify-center p-5">
                    {p.name.toLowerCase().includes("genesys") ? (
                      <div className="flex flex-col items-center justify-center text-center">
                        <span className="font-serif-jp text-lg font-black text-ink leading-tight">
                          Genesys
                        </span>
                        <span className="font-inter text-xs font-bold text-crimson uppercase tracking-wider">
                          info X
                        </span>
                      </div>
                    ) : (
                      <img
                        src={p.name === "T-Hub" ? "/logos/thub.png" : "/logos/woxsen.png"}
                        alt={`${p.name} official logo`}
                        className="max-h-20 w-full max-w-[120px] object-contain"
                        loading="lazy"
                      />
                    )}
                  </div>
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

        {/* Community partners — logo tiles */}
        <Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {COMMUNITY.map((c) => (
              <div key={c} className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-sm">
                <PartnerLogo name={c} variant="light" className="w-full h-16" />
                <div className="font-serif-jp text-sm font-bold text-white">{c}</div>
                <div className="font-inter text-[11px] text-mist">{COMMUNITY_DESCS[c]}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Marquee with all logos */}
        <Reveal delay={100}>
          <div className="marquee-track mt-8 overflow-hidden rounded-lg border-y border-white/10 bg-white/[0.03] py-5">
            <div className="flex w-max gap-4 animate-marquee">
              {marquee.map((name, i) => (
                <PartnerLogo key={`${name}-${i}`} name={name} variant="light" className="h-16 w-28 shrink-0" />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
