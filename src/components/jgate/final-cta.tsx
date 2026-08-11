"use client";

import { ArrowRight } from "lucide-react";
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
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Your India Journey
              <br />
              <span className="text-gradient-saffron">Begins Here.</span>
            </h2>
            <p className="mt-5 font-serif-jp text-[18px] text-saffron/70">
              日本企業向け専用ワーキングスペース — A New Horizon for India-Japan Business
            </p>
            <p className="mx-auto mt-5 max-w-[520px] font-inter font-light leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.125rem)" }}>
              Whether you are exploring, ready to establish operations, or
              looking to scale — J-Gate is your partner at every stage. Book a
              private tour of our Cyber Gateway workspace, or contact us to
              receive a custom membership proposal in English or Japanese.
            </p>

            {/* 2 CTAs */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="btn-shine flex w-full items-center justify-center gap-1.5 rounded-md bg-crimson px-9 py-4 font-inter text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-crimson-deep sm:w-auto"
              >
                Book a Private Tour
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="flex w-full items-center justify-center gap-1.5 rounded-md border border-white/15 bg-white/10 px-9 py-4 font-inter text-[15px] font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto"
              >
                Contact Us in Japanese 日本語
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
