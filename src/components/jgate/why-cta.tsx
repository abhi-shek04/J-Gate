"use client";

import Link from "next/link";
import { Download, ArrowRight, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { Reveal } from "./shared";
import { ToriiWatermark } from "./icons";
import { useI18n } from "@/lib/i18n";

/* ============================================================
   WhyCTA — Cinematic dark CTA closing the Why-JGate page
   Midnight bg + asanoha-dark, crimson + saffron ambient glow,
   torii watermark on the right (opacity 0.025). Two CTAs and
   a contact detail strip.
   ============================================================ */

export function WhyCTA() {
  const { tx } = useI18n();
  return (
    <section
      id="why-cta"
      className="section-pad relative overflow-hidden bg-midnight"
      aria-label="Download brochure or contact J-Gate"
    >
      {/* Asanoha lattice */}
      <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />

      {/* Ambient glow — crimson center + saffron bottom-right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(188,26,44,0.18), transparent 55%), radial-gradient(ellipse at 85% 85%, rgba(232,160,26,0.14), transparent 50%)",
        }}
      />

      {/* Torii watermark — right side, very faint */}
      <ToriiWatermark
        className="torii-watermark"
        style={{
          width: "44vw",
          maxWidth: "560px",
          right: "-6%",
          top: "12%",
          opacity: 0.025,
        }}
      />

      <div className="container-jg relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            {/* Icon circle */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-saffron/30 bg-saffron/10 text-saffron shadow-gold">
              <Sparkles className="h-6 w-6" strokeWidth={1.5} />
            </div>

            {/* Pre-label */}
            <p
              className="mt-6 font-inter text-[11px] font-semibold uppercase text-saffron"
              style={{ letterSpacing: "0.22em" }}
            >
              {tx({ EN: "Ready to see the difference", JP: "違いを確かめる準備はできましたか" })}
            </p>

            {/* H2 */}
            <h2
              className="mt-3 font-serif-jp font-bold leading-[1.15] text-white"
              style={{ fontSize: "clamp(1.25rem, 2.4vw, 1.75rem)" }}
            >
              {tx({
                EN: "Download the Brochure. See the Difference.",
                JP: "パンフレットをダウンロード。違いを確かめてください。",
              })}
            </h2>

            {/* Subtitle */}
            <p
              className="mx-auto mt-4 max-w-xl font-inter font-light leading-relaxed text-mist"
              style={{ fontSize: "clamp(0.875rem, 1.4vw, 1rem)" }}
            >
              {tx({
                EN: "Full PDF brochure with membership tiers, workspace photos, Japan Desk details, and partner ecosystem — or talk to our team in Japanese.",
                JP: "会員プラン・ワークスペース写真・ジャパンデスク詳細・パートナーエコシステムを収録したPDFパンフレット、または日本語でチームにお問い合わせください。",
              })}
            </p>

            {/* Two CTAs */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/auth/brochure"
                className="btn-shine flex w-full items-center justify-center gap-2 rounded-md bg-crimson px-7 py-3.5 font-inter text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-crimson-deep sm:w-auto"
              >
                <Download className="h-4 w-4" />
                {tx({ EN: "Download Brochure", JP: "パンフレットをダウンロード" })}
              </Link>
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-7 py-3.5 font-inter text-[14px] font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 sm:w-auto"
              >
                {tx({ EN: "Talk to Us", JP: "お問い合わせ" })}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Contact detail strip */}
        <Reveal delay={120}>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/8 bg-white/8 sm:grid-cols-3">
            <a
              href="mailto:hyderabad@j-gate.com"
              className="flex items-center justify-center gap-2 bg-midnight/60 px-4 py-4 font-inter text-[12px] text-mist transition-colors hover:bg-white/5 hover:text-white"
            >
              <Mail className="h-4 w-4 text-saffron" />
              hyderabad@j-gate.com
            </a>
            <a
              href="tel:+914012345678"
              className="flex items-center justify-center gap-2 bg-midnight/60 px-4 py-4 font-inter text-[12px] text-mist transition-colors hover:bg-white/5 hover:text-white"
            >
              <Phone className="h-4 w-4 text-saffron" />
              +91 40-1234-5678
            </a>
            <div className="flex items-center justify-center gap-2 bg-midnight/60 px-4 py-4 text-center font-inter text-[12px] text-mist">
              <MapPin className="h-4 w-4 shrink-0 text-saffron" />
              <span>Cyber Gateway, Hitech City, Hyderabad</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
