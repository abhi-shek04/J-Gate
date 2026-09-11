"use client";

import { Reveal, Eyebrow } from "./shared";
import { useI18n } from "@/lib/i18n";
import { PartnerLogo } from "./partner-logo";
import { StarIcon, QuoteMark } from "./icons";
import { cn } from "@/lib/utils";

const PARTNER_LOGOS = ["T-Hub", "Woxsen University", "Genesys Info X", "Kodryx AI", "MXC"];

const TESTIMONIALS = [
  {
    quote: {
      EN: "J-Gate's workspace at Cyber Gateway is exactly what we needed — professional, well-equipped, and the Japan Desk resolved our operational questions within hours. The TASTY FOOD JUNCTION cafeteria became our favorite meeting spot.",
      JP: "Cyber GatewayのJ-Gateワークスペースは、まさに私たちが必要としていたものでした — プロフェッショナルで設備が整い、ジャパンデスクが数時間以内に運用上の質問を解決。TASTY FOOD JUNCTIONのカフェテリアはお気に入りの打ち合わせスポットになりました。",
    },
    author: { EN: "Operations Director", JP: "オペレーションディレクター" },
    role: { EN: "Japanese Manufacturing Company", JP: "日本製造企業" },
    initials: "OD",
    accent: "from-crimson to-midnight",
  },
  {
    quote: {
      EN: "The 24/7 access and dedicated fiber internet meant our team could work on Tokyo time without any connectivity issues. The meeting rooms impressed every client we hosted.",
      JP: "24時間アクセスと専用ファイバーインターネットのおかげで、私たちのチームは東京時間でも接続問題なしに作業できました。会議室は接待したすべての顧客に好印象を与えました。",
    },
    author: { EN: "Country Manager", JP: "カントリーマネージャー" },
    role: { EN: "Japanese Technology Firm", JP: "日本テクノロジー企業" },
    initials: "CM",
    accent: "from-saffron to-crimson",
  },
  {
    quote: {
      EN: "From the smart key card entry to the secure lockers, everything feels enterprise-grade. The Indobox Academy sessions in the workspace gave us practical insights into Indian business customs.",
      JP: "スマートキーカードの入退室からセキュアなロッカーまで、すべてがエンタープライズ級です。ワークスペースで開催されるIndobox Academyのセッションは、インドのビジネス習慣に関する実践的な知見を与えてくれました。",
    },
    author: { EN: "Branch Manager", JP: "ブランチマネージャー" },
    role: { EN: "Japanese Enterprise", JP: "日本企業" },
    initials: "BM",
    accent: "from-navy to-success",
  },
];

export function SocialProof() {
  const { t, tx } = useI18n();

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
                  “{tx(tm.quote)}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-crimson/8 pt-4">
                  <span className={cn("flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br font-serif-jp text-sm font-bold text-white shadow-card", tm.accent)}>
                    {tm.initials}
                  </span>
                  <div>
                    <div className="font-inter text-[13px] font-semibold text-ink">{tx(tm.author)}</div>
                    <div className="font-inter text-[11px] text-mist">{tx(tm.role)}</div>
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
