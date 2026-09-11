"use client";

import { Reveal, Eyebrow } from "./shared";
import { StarIcon, QuoteMark } from "./icons";
import { useI18n } from "@/lib/i18n";
import { MessageSquareQuote, CheckCircle2 } from "lucide-react";

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
    company: { EN: "Regional Japanese Bank", JP: "地方銀行" },
    gradient: "from-navy to-success",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
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
      className="section-pad relative overflow-hidden bg-navy text-white"
      aria-label="Corporate testimonials"
    >
      <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 25% 20%, rgba(232,160,26,0.12), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(188,26,44,0.10), transparent 55%)",
        }}
      />
      <div className="container-jg relative z-10">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/10 px-4 py-1 font-inter text-[11px] font-bold uppercase tracking-wider text-saffron">
              <MessageSquareQuote className="h-3.5 w-3.5" />
              {tx({ EN: "Corporate Testimonials", JP: "利用企業の声" })}
            </span>
            <h2
              className="mt-3 font-serif-jp font-bold leading-[1.18] text-white"
              style={{ fontSize: "clamp(1.875rem, 3.8vw, 2.75rem)" }}
            >
              {tx({ EN: "Heard from J-Gate Members", JP: "入居企業からのメッセージ" })}
            </h2>
            <p
              className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-mist"
              style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}
            >
              {tx({
                EN: "Three corporate voices — manufacturing, software, and banking. Each found something different at J-Gate, but all found the same thing: an operational base that works.",
                JP: "製造業、ITソフトウェア、金融機関 — 多彩な業界のリーダー陣が、J-Gateを起点に確かなインド事業基盤を築いています。",
              })}
            </p>
          </div>
        </Reveal>

        {/* 3 Executive Testimonial Cards in Responsive Luxury Layout */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} variant="scale">
              <article className="luxury-glass-card lift-card-dark group flex h-full flex-col justify-between rounded-2xl border border-white/12 p-7 shadow-2xl">
                <div>
                  <div className="flex items-center justify-between">
                    <Stars />
                    <QuoteMark className="h-8 w-8 text-saffron/30" />
                  </div>

                  <blockquote
                    className="mt-5 font-serif-jp italic leading-relaxed text-white/95 text-[15px] sm:text-[16px]"
                  >
                    “{tx(t.quote)}”
                  </blockquote>
                </div>

                <div className="mt-8 border-t border-white/10 pt-5 flex items-center gap-3.5">
                  {/* Monogram Avatar */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${t.gradient} font-serif-jp text-[15px] font-bold text-white shadow-md`}
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-inter text-[14px] font-bold text-white truncate">
                      {t.name}
                    </div>
                    <div className="font-inter text-[11.5px] text-saffron truncate">
                      {tx(t.role)}
                    </div>
                    <div className="font-inter text-[11px] text-mist truncate mt-0.5">
                      {tx(t.company)}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
