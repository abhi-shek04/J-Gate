"use client";

import { ArrowRight, Download, MessageCircle } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import { ToriiWatermark } from "./icons";

export function FinalCta() {
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

      <div className="container-jg relative">
        <Reveal>
          <div className="mx-auto max-w-[700px] text-center">
            <Eyebrow light>Your India Journey Begins Here</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.12] text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Ready to Build Your
              <br />
              <span className="text-gradient-saffron">India Headquarters?</span>
            </h2>
            <p className="mt-5 font-serif-jp text-[18px] text-saffron/70">
              「インドでのビジネスを、J-Gateと共に始めましょう」
            </p>
            <p className="mx-auto mt-5 max-w-[540px] font-inter font-light leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
              Whether you are exploring the market, ready to establish
              operations, or looking to scale an existing India presence —
              J-Gate is your partner at every stage. Book a private tour,
              schedule a consultation, or contact us to receive a custom
              membership proposal.
            </p>

            {/* 3 CTAs */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="btn-shine flex w-full items-center justify-center gap-1.5 rounded-md bg-crimson px-7 py-3.5 font-inter text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-crimson-deep sm:w-auto"
              >
                Schedule a Private Tour
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollTo("home")}
                className="flex w-full items-center justify-center gap-1.5 rounded-md border border-white/40 px-7 py-3.5 font-inter text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              >
                <Download className="h-4 w-4" />
                Download J-Gate Overview
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="flex w-full items-center justify-center gap-1.5 rounded-md border border-saffron/50 px-7 py-3.5 font-inter text-[14px] font-semibold text-saffron transition-all duration-300 hover:-translate-y-0.5 hover:bg-saffron hover:text-ink sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                Contact Us in Japanese
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
