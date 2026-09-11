"use client";

import { Reveal } from "./shared";
import { PartnerLogo } from "./partner-logo";

const PARTNERS = [
  "T-Hub",
  "Woxsen University",
  "Genesys Info X",
  "Kodryx AI",
  "MXC",
];

export function TrustStrip() {
  const marquee = [...PARTNERS, ...PARTNERS];
  return (
    <section className="bg-white py-8" aria-label="Endorsed and partnered with">
      <div className="container-jg">
        <Reveal>
          <p className="mb-5 text-center font-inter text-[13px] uppercase text-mist" style={{ letterSpacing: "0.15em" }}>
            Endorsed &amp; Partnered with
          </p>
          {/* Desktop: static logo row */}
          <div className="hidden flex-wrap items-center justify-center gap-5 md:flex">
            {PARTNERS.map((p) => (
              <PartnerLogo key={p} name={p} variant="dark" className="w-32 h-20" />
            ))}
          </div>
        </Reveal>

        {/* Mobile: marquee */}
        <div className="marquee-track mt-4 overflow-hidden md:hidden">
          <div className="flex w-max gap-4 animate-marquee">
            {marquee.map((p, i) => (
              <PartnerLogo key={`${p}-${i}`} name={p} variant="dark" className="w-28 h-16 shrink-0" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
