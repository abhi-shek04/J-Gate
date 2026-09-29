"use client";

import { ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import { ToriiWatermark } from "./icons";
import { useI18n } from "@/lib/i18n";

export function FinalCta() {
  const { tx } = useI18n();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section-pad relative overflow-hidden bg-midnight">
      <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />

      {/* Torii watermark — full width */}
      <ToriiWatermark
        className="torii-watermark"
        style={{
          width: "90%",
          maxWidth: "900px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(188,26,44,0.10), transparent 60%)",
        }}
      />

      <div className="container-jg relative z-10">
        <Reveal>
          <div className="luxury-glass-card mx-auto max-w-[800px] text-center rounded-3xl border border-white/20 bg-white/[0.04] p-8 sm:p-14 shadow-2xl backdrop-blur-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/10 px-4 py-1 font-inter text-[11px] font-bold uppercase tracking-widest text-saffron mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-saffron animate-pulse" />
              Start in India with J-Gate
            </span>
            <h2
              className="font-serif-jp font-bold leading-[1.12] text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Your India Journey
              <br />
              Begins Here.
            </h2>
            <p className="mt-4 font-serif-jp text-[16px] sm:text-[18px] text-saffron/90 font-bold">
              {tx({
                EN: "A Dedicated Workspace and Support Hub for Japanese Companies",
                JP: "日本企業向け専用ワーキングスペース — 日印ビジネスの新しい地平",
              })}
            </p>
            <p className="mx-auto mt-4 max-w-[560px] font-inter font-light leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
              Whether you are exploring, ready to establish operations, or
              looking to scale — J-Gate is your partner at every stage. Book a
              private tour of our Hyderabad workspace, or contact us to
              receive a tailored proposal in English or Japanese.
            </p>

            {/* Trust Strip */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[11.5px] font-inter text-white/80">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Replies within 24 Hours
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> On-Site Japanese Advisory
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Hyderabad Cyber Gateway
              </span>
            </div>

            {/* 2 CTAs */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="btn-shine flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-crimson via-crimson to-crimson-deep px-9 py-4 font-inter text-[15px] font-semibold text-white shadow-[0_0_28px_rgba(188,26,44,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(188,26,44,0.65)] sm:w-auto"
              >
                Book a Private Tour
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-9 py-4 font-inter text-[15px] font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:border-white/40 sm:w-auto"
              >
                {tx({ EN: "Speak with Our Japan Desk", JP: "日本語でお問い合わせ" })}
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
