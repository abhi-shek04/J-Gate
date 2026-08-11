"use client";

import { Reveal } from "./shared";

const PARTNERS = [
  "JETRO",
  "T-Hub",
  "Woxsen University",
  "Genesys Info X",
  "MXC",
  "Kodryx AI",
];

export function TrustStrip() {
  const marquee = [...PARTNERS, ...PARTNERS];
  return (
    <section className="bg-white py-6" aria-label="Endorsed and partnered with">
      <div className="container-jg">
        <Reveal>
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-0">
            <span className="font-inter text-[13px] text-mist md:mr-6">
              Endorsed &amp; Partnered with:
            </span>
            {/* Desktop: static row with separators */}
            <ul className="hidden flex-wrap items-center justify-center md:flex">
              {PARTNERS.map((p, i) => (
                <li
                  key={p}
                  className="flex items-center font-inter text-[14px] font-semibold text-slate"
                >
                  <span className="px-7">{p}</span>
                  {i < PARTNERS.length - 1 && (
                    <span className="h-4 w-px bg-gray-200" aria-hidden />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Mobile: marquee */}
        <div className="marquee-track mt-4 overflow-hidden md:hidden">
          <div className="flex w-max gap-0 animate-marquee">
            {marquee.map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="flex items-center font-inter text-[14px] font-semibold text-slate"
              >
                <span className="px-6">{p}</span>
                <span className="h-4 w-px bg-gray-200" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
