"use client";

import Link from "next/link";
import { Download, ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";
import { Reveal } from "./shared";
import { ToriiWatermark } from "./icons";
import { useI18n } from "@/lib/i18n";

export function WhyCTA() {
  const { tx } = useI18n();

  return (
    <section
      id="why-cta"
      className="section-pad relative overflow-hidden bg-midnight text-white"
      aria-label="Download brochure or contact J-Gate"
    >
      <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(188,26,44,0.22), transparent 60%), radial-gradient(ellipse at 85% 85%, rgba(232,160,26,0.16), transparent 55%)",
        }}
      />

      <ToriiWatermark
        className="torii-watermark pointer-events-none"
        style={{
          width: "44vw",
          maxWidth: "560px",
          right: "-6%",
          top: "12%",
          opacity: 0.035,
        }}
      />

      <div className="container-jg relative z-10">
        <Reveal variant="scale">
          <div className="luxury-glass-card mx-auto max-w-3xl rounded-3xl border border-white/15 p-8 sm:p-12 text-center shadow-2xl">
            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-crimson to-crimson-deep text-white shadow-[0_0_24px_rgba(188,26,44,0.5)]">
              <Sparkles className="h-7 w-7" strokeWidth={1.6} />
            </div>

            <p
              className="mt-6 font-inter text-[11px] font-bold uppercase tracking-widest text-saffron"
            >
              {tx({ EN: "Ready to see the difference", JP: "違いを確かめる準備はできましたか" })}
            </p>

            <h2
              className="mt-3 font-serif-jp font-bold leading-[1.15] text-white"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              {tx({
                EN: "Download the Brochure. See the Difference.",
                JP: "パンフレットをダウンロード。違いを確かめてください。",
              })}
            </h2>

            <p
              className="mx-auto mt-4 max-w-xl font-inter font-light leading-relaxed text-mist/90 text-[14px] sm:text-[15px]"
            >
              {tx({
                EN: "Full PDF brochure with membership tiers, workspace photos, Japan Desk details, and partner ecosystem — or talk to our team in Japanese.",
                JP: "会員プラン・ワークスペース写真・ジャパンデスク詳細・パートナーエコシステムを収録したPDFパンフレット、または日本語でチームにお問い合わせください。",
              })}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <Link
                href="/auth/brochure"
                className="btn-shine inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-crimson to-crimson-deep px-8 py-3.5 font-inter text-[14px] font-semibold text-white shadow-[0_0_24px_rgba(188,26,44,0.55)] transition-all hover:-translate-y-0.5 sm:w-auto"
              >
                <Download className="h-4 w-4" />
                {tx({ EN: "Download Brochure", JP: "パンフレットをダウンロード" })}
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-7 py-3.5 font-inter text-[14px] font-semibold text-white transition-all hover:bg-white/10 hover:-translate-y-0.5 sm:w-auto"
              >
                {tx({ EN: "Talk to Us", JP: "お問い合わせ" })}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Verified Contact Strip */}
            <div className="mt-10 grid grid-cols-1 gap-3 border-t border-white/10 pt-8 sm:grid-cols-2">
              <a
                href="mailto:contact@indobox.co.jp"
                className="flex items-center justify-center gap-2 rounded-xl bg-white/[0.04] p-3 font-inter text-[12px] text-slate-300 transition-colors hover:bg-white/[0.08] hover:text-white border border-white/5"
              >
                <Mail className="h-4 w-4 text-saffron shrink-0" />
                <span className="truncate">contact@indobox.co.jp</span>
              </a>
              <div className="flex items-center justify-center gap-2 rounded-xl bg-white/[0.04] p-3 text-center font-inter text-[12px] text-slate-300 border border-white/5">
                <MapPin className="h-4 w-4 text-saffron shrink-0" />
                <span className="truncate">Cyber Gateway, Hyderabad</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
