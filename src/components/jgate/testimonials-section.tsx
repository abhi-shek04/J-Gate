"use client";

import { Reveal, Eyebrow } from "./shared";
import { StarIcon, QuoteMark } from "./icons";
import { useI18n } from "@/lib/i18n";

/* ============================================================
   TestimonialsSection — Full-width editorial testimonial cards
   Navy bg + asanoha-navy pattern. 3 cards stacked vertically,
   each split into quote side (65%) + author side (340px).
   ============================================================ */

type Testimonial = {
  quote: { EN: string; JP: string };
  initials: string;
  name: string;
  role: { EN: string; JP: string };
  company: { EN: string; JP: string };
  gradient: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote: {
      EN: "J-Gate gave us an operational India base within weeks. The Japan Desk handled everything in our language.",
      JP: "J-Gateのおかげで、数週間のうちにインドでの運用拠点が完成しました。ジャパンデスクがすべて日本語で対応してくれました。",
    },
    initials: "HY",
    name: "H. Yamamoto",
    role: { EN: "Operations Director", JP: "オペレーション・ディレクター" },
    company: { EN: "Japanese Manufacturing SME", JP: "日本の製造業中堅企業" },
    gradient: "from-crimson to-crimson-deep",
  },
  {
    quote: {
      EN: "The difference is the ecosystem. We met our T-Hub partners, engineers, and legal counsel — all in the same building.",
      JP: "違いはエコシステムです。T-Hubのパートナー、エンジニア、法律顧問 — すべて同じ建物で出会えました。",
    },
    initials: "PN",
    name: "P. Nishimura",
    role: { EN: "Country Manager", JP: "カントリーマネージャー" },
    company: { EN: "Japanese Software Enterprise", JP: "日本のソフトウェア企業" },
    gradient: "from-saffron to-[#c9881a]",
  },
  {
    quote: {
      EN: "As a regional bank we couldn't justify a full India office. J-Gate's membership model let us establish a credible presence at a fraction of the cost.",
      JP: "地方銀としてインドにフルオフィスを構えるのは妥当ではありませんでした。J-Gateのメンバーシップモデルで、コストの一部で信頼できる拠点を確立できました。",
    },
    initials: "KW",
    name: "K. Watanabe",
    role: { EN: "Branch Director", JP: "支店長" },
    company: { EN: "Regional Japanese Bank", JP: "地方銀" },
    gradient: "from-navy to-success",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="h-4 w-4 text-saffron" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const { tx } = useI18n();
  return (
    <section
      id="why-testimonials"
      className="section-pad relative overflow-hidden bg-navy"
      aria-label="Corporate testimonials"
    >
      <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 25% 20%, rgba(232,160,26,0.08), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(188,26,44,0.06), transparent 55%)",
        }}
      />
      <div className="container-jg relative">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow light>CORPORATE TESTIMONIALS</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
              style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.5rem)" }}
            >
              Heard from J-Gate Members
            </h2>
            <p
              className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-mist"
              style={{ fontSize: "clamp(0.875rem, 1.4vw, 1rem)" }}
            >
              Three corporate voices — manufacturing, software, and banking.
              Each found something different at J-Gate, but all found the same
              thing: an operational base that works.
            </p>
          </div>
        </Reveal>

        {/* Glass container holding 3 stacked cards */}
        <Reveal delay={100}>
          <div className="glass-dark mt-12 rounded-2xl border border-white/10 p-5 sm:p-8">
            <div className="space-y-6">
              {TESTIMONIALS.map((t, i) => (
                <article
                  key={t.name}
                  className={`relative overflow-hidden rounded-xl border border-white/8 bg-white/[0.03] p-6 sm:p-8 ${
                    i > 0 ? "mt-6" : ""
                  }`}
                >
                  <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                    {/* LEFT — quote side (65%) */}
                    <div className="relative md:w-[65%]">
                      <QuoteMark className="pointer-events-none absolute -top-2 -left-2 h-16 w-16 text-crimson/[0.12]" />
                      <div className="relative">
                        <Stars />
                        <blockquote
                          className="mt-4 font-serif-jp italic leading-relaxed text-white"
                          style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)" }}
                        >
                          “{tx(t.quote)}”
                        </blockquote>
                        <div className="mt-5 flex items-center gap-2">
                          <span className="h-px w-6 bg-saffron/60" />
                          <span
                            className="font-inter text-[11px] font-semibold uppercase text-saffron"
                            style={{ letterSpacing: "0.12em" }}
                          >
                            {tx(t.role)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT — author side (340px) */}
                    <div className="md:w-[340px] md:shrink-0">
                      <div className="flex h-full flex-col items-start justify-center gap-3 border-t border-white/8 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                        {/* Avatar */}
                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} font-serif-jp text-[18px] font-bold text-white shadow-card`}
                          aria-hidden="true"
                        >
                          {t.initials}
                        </div>
                        <div>
                          <div className="font-inter text-[15px] font-bold text-white">
                            {t.name}
                          </div>
                          <div className="mt-0.5 font-inter text-[12px] text-mist">
                            {tx(t.company)}
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-saffron/30 bg-saffron/10 px-2.5 py-0.5 font-inter text-[10px] font-semibold uppercase text-saffron-light">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-success" />
                          {tx({ EN: "J-Gate Member", JP: "J-Gate会員" })}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
