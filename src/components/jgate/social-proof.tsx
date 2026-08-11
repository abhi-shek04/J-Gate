"use client";

import { Reveal, Eyebrow } from "./shared";
import { useI18n } from "@/lib/i18n";
import { PartnerLogo } from "./partner-logo";
import { StarIcon, QuoteMark } from "./icons";
import { cn } from "@/lib/utils";

const PARTNER_LOGOS = ["JETRO", "T-Hub", "Woxsen University", "Genesys Info X", "DMI", "Kodryx AI"];

const TESTIMONIALS = [
  {
    quote: "J-Gate placed three engineers into our Tokyo team within six weeks. The cultural fit was exceptional — every candidate understood Japanese business protocol.",
    author: "HR Director",
    role: "Japanese Manufacturing Company",
    initials: "HR",
    accent: "from-crimson to-midnight",
  },
  {
    quote: "Their JLPT N2 preparation program took me from N4 to N2 in 18 months. The instructors are certified, structured, and genuinely invested in your success.",
    author: "Software Engineer",
    role: "Placed at Japanese IT Firm",
    initials: "SE",
    accent: "from-saffron to-crimson",
  },
  {
    quote: "When we entered India, J-Gate handled registration, banking, and our Cyber Gateway office setup end-to-end. Bilingual concierge support made it seamless.",
    author: "Country Manager",
    role: "Japanese Enterprise, Hyderabad",
    initials: "CM",
    accent: "from-navy to-success",
  },
];

export function SocialProof() {
  const { t, lang } = useI18n();

  const stats = [
    { num: "150+", key: "proof.stats1" },
    { num: "94%", key: "proof.stats2" },
    { num: "30+", key: "proof.stats3" },
    { num: "92%", key: "proof.stats4" },
  ];

  return (
    <section id="proof" className="section-pad bg-ivory">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>{t("proof.eyebrow")}</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
              style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
            >
              {t("proof.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
              {t("proof.subtitle")}
            </p>
          </div>
        </Reveal>

        {/* Stats row */}
        <Reveal delay={80}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.key} className="lift-card rounded-lg border border-crimson/8 bg-pearl p-6 text-center shadow-card">
                <div className="font-serif-jp text-[clamp(2rem,4vw,3rem)] font-bold text-crimson">{s.num}</div>
                <div className="mt-2 font-inter text-[12px] font-medium uppercase text-slate" style={{ letterSpacing: "0.05em" }}>
                  {t(s.key)}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Partner logos */}
        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {PARTNER_LOGOS.map((p) => (
              <PartnerLogo key={p} name={p} variant="dark" className="w-32 h-20" />
            ))}
          </div>
        </Reveal>

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((tm, i) => (
            <Reveal key={i} delay={i * 100}>
              <article className="lift-card relative h-full overflow-hidden rounded-lg bg-pearl p-7 shadow-card">
                <QuoteMark className="absolute right-6 top-4 h-16 w-16 text-crimson/[0.10]" />
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <StarIcon key={j} className="h-4 w-4 text-saffron" />
                  ))}
                </div>
                <blockquote className="relative mt-4 font-serif-jp text-[15px] font-medium leading-relaxed text-ink">
                  “{tm.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-crimson/8 pt-4">
                  <span className={cn("flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br font-serif-jp text-sm font-bold text-white shadow-card", tm.accent)}>
                    {tm.initials}
                  </span>
                  <div>
                    <div className="font-inter text-[13px] font-semibold text-ink">{tm.author}</div>
                    <div className="font-inter text-[11px] text-mist">{tm.role}</div>
                  </div>
                </figcaption>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
