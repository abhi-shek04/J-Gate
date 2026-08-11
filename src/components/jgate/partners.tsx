"use client";

import { Reveal, Eyebrow } from "./shared";
import { cn } from "@/lib/utils";

const STRATEGIC_PARTNERS = [
  {
    name: "JETRO",
    role: "Strategic Endorsing Partner",
    desc: "Japan's official government-backed trade promotion organization. JETRO's Senior Director personally keynoted J-Gate's inauguration, underscoring the hub's significance to Japan-India bilateral trade. Members benefit from JETRO's resources, introductions, and government coordination.",
    initials: "JE",
    accent: "from-crimson to-crimson-deep",
  },
  {
    name: "Genesys Info X",
    role: "MoU Partner — Co-Founding Institution",
    desc: "Operating under a formal Memorandum of Understanding, Genesys Info X brings deep local business networks, market expertise, and co-management to J-Gate. CEO Mr. Viinay Sarikonda co-inaugurated J-Gate alongside Founder Mr. Daisuke Tanji.",
    initials: "GX",
    accent: "from-saffron to-crimson",
  },
  {
    name: "T-Hub",
    role: "Innovation Ecosystem Partner",
    desc: "Located in Hyderabad, T-Hub is India's #1 startup innovation hub — a global-scale platform connecting startups, corporates, investors, and government. Two of T-Hub's former top executives serve on J-Gate's Advisory Council.",
    initials: "TH",
    accent: "from-navy to-success",
  },
  {
    name: "Woxsen University",
    role: "Academic & Talent Partner",
    desc: "A premier institution committed to innovation, global perspectives, and business excellence. Woxsen University's partnership provides J-Gate members access to top-tier talent, research capabilities, and academic collaboration opportunities.",
    initials: "WU",
    accent: "from-saffron to-[#ffc84a]",
  },
];

const COMMUNITY_PARTNERS = [
  { name: "MXC", desc: "Technology & Innovation Community", initials: "MX" },
  { name: "DMI", desc: "Digital Media & Industry Partner", initials: "DM" },
  { name: "Kodryx AI", desc: "Artificial Intelligence & Tech Ecosystem", initials: "KX" },
  { name: "Hyderabad Anime Club", desc: "Japan-India Cultural Bridge & Community", initials: "HA" },
];

const MARQUEE_NAMES = [
  "JETRO", "Genesys Info X", "T-Hub", "Woxsen University",
  "MXC", "DMI", "Kodryx AI", "Hyderabad Anime Club",
];

export function Partners() {
  const marquee = [...MARQUEE_NAMES, ...MARQUEE_NAMES];

  return (
    <section id="partners" className="section-pad bg-ivory">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Our Ecosystem</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}
            >
              Powered by Hyderabad&apos;s{" "}
              <span className="text-crimson">Most Influential Network</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[660px] font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
              J-Gate is not a standalone space — it is embedded in an ecosystem
              of world-class institutions, government bodies, and innovation
              platforms that give every member an unfair advantage from Day 1.
            </p>
          </div>
        </Reveal>

        {/* Strategic partners — large cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {STRATEGIC_PARTNERS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 120}>
              <article className="lift-card group h-full rounded-lg border border-crimson/8 bg-pearl p-7 shadow-card">
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-gradient-to-br font-serif-jp text-lg font-bold text-white shadow-card",
                      p.accent
                    )}
                  >
                    {p.initials}
                  </div>
                  <div>
                    <h3 className="font-serif-jp text-xl font-bold text-ink">{p.name}</h3>
                    <p className="mt-0.5 font-inter text-[13px] font-semibold uppercase text-crimson" style={{ letterSpacing: "0.05em" }}>
                      {p.role}
                    </p>
                  </div>
                </div>
                <p className="mt-4 font-inter text-[14px] leading-relaxed text-slate">
                  {p.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Community partners — smaller cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COMMUNITY_PARTNERS.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div className="lift-card flex h-full flex-col items-center gap-3 rounded-lg border border-crimson/8 bg-pearl p-5 text-center shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-ink font-serif-jp text-sm font-bold text-white">
                  {p.initials}
                </div>
                <div>
                  <div className="font-serif-jp text-sm font-bold text-ink">{p.name}</div>
                  <div className="mt-0.5 font-inter text-[11px] text-mist">{p.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Marquee logo wall */}
        <Reveal delay={100}>
          <div className="marquee-track mt-10 overflow-hidden rounded-lg border-y border-crimson/8 bg-pearl py-5">
            <div className="flex w-max gap-4 animate-marquee">
              {marquee.map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex items-center gap-2.5 whitespace-nowrap rounded-md bg-ivory px-6 py-2.5 shadow-card"
                >
                  <span className="h-2 w-2 rounded-full bg-crimson" />
                  <span className="font-inter text-sm font-semibold text-ink">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
