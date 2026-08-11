"use client";

import { Reveal, SectionHeading } from "./shared";
import { cn } from "@/lib/utils";

const PARTNERS = [
  { name: "Genesys Info X", tag: "MoU Partner", initials: "GX", color: "from-jgate-red to-jgate-navy" },
  { name: "JETRO", tag: "Trade Organization", initials: "JE", color: "from-jgate-red to-[#e84855]" },
  { name: "T-Hub", tag: "Startup Hub", initials: "TH", color: "from-jgate-navy to-jgate-green" },
  { name: "Woxsen University", tag: "Academic", initials: "WU", color: "from-jgate-gold to-[#ffcb47]" },
  { name: "MXC", tag: "Technology", initials: "MX", color: "from-jgate-navy to-jgate-navy-soft" },
  { name: "DMI", tag: "Finance", initials: "DM", color: "from-jgate-green to-[#2bbf99]" },
  { name: "Kodryx AI", tag: "AI Innovation", initials: "KX", color: "from-jgate-red to-jgate-gold" },
  { name: "Hyderabad Anime Club", tag: "Cultural", initials: "HA", color: "from-jgate-gold to-jgate-red" },
];

function PartnerCard({
  name,
  tag,
  initials,
  color,
  className,
}: {
  name: string;
  tag: string;
  initials: string;
  color: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "lift-card flex min-w-[160px] flex-col items-center gap-3 rounded-2xl border border-jgate-navy/8 bg-white px-5 py-6 text-center shadow-soft",
        className
      )}
    >
      <div
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br font-serif-jp text-lg font-bold text-white shadow-soft",
          color
        )}
      >
        {initials}
      </div>
      <div>
        <div className="font-serif-jp text-sm font-bold text-jgate-navy">
          {name}
        </div>
        <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-jgate-slate/80">
          {tag}
        </div>
      </div>
    </div>
  );
}

export function Partners() {
  // Duplicate for seamless marquee on mobile
  const marquee = [...PARTNERS, ...PARTNERS];

  return (
    <section
      id="partners"
      className="pattern-asanoha-light relative py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Ecosystem"
            title={
              <>
                Our <span className="text-jgate-red">Ecosystem Partners</span>
              </>
            }
            subtitle="J-Gate is backed by a powerful network of organizations that ensure your success in Hyderabad."
          />
        </Reveal>

        {/* Desktop / tablet grid */}
        <Reveal delay={100}>
          <div className="mt-14 hidden grid-cols-2 gap-5 sm:grid sm:grid-cols-3 lg:grid-cols-4">
            {PARTNERS.map((p) => (
              <PartnerCard key={p.name} {...p} className="h-full" />
            ))}
          </div>
        </Reveal>

        {/* Mobile marquee */}
        <div className="marquee-track mt-12 flex sm:hidden">
          <div className="flex w-max gap-5 animate-marquee">
            {marquee.map((p, i) => (
              <PartnerCard key={`${p.name}-${i}`} {...p} />
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <Reveal delay={150}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-jgate-navy/8 bg-white/70 px-6 py-5 text-center shadow-soft backdrop-blur">
            <span className="text-sm font-semibold text-jgate-navy">
              Trusted across:
            </span>
            {[
              "Japan-India Trade",
              "Hyderabad Innovation",
              "Academic Research",
              "Cultural Exchange",
            ].map((t) => (
              <span
                key={t}
                className="flex items-center gap-2 text-xs font-medium text-jgate-slate"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-jgate-red" />
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
