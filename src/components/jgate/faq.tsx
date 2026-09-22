"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Is J-Gate only for Japanese companies?",
    a: "J-Gate is specifically designed and optimized for Japanese businesses entering or expanding in India. However, Indian companies building Japan-facing operations, or businesses that work directly with Japanese partners, are welcome to enquire about membership.",
  },
  {
    q: "Do I need to be physically present in Hyderabad to join?",
    a: "Not immediately. We offer virtual membership options for companies in the pre-arrival phase, which includes remote access to our partner network, advisory consultations, and market entry resources while you plan your physical move to Hyderabad.",
  },
  {
    q: "What languages does J-Gate operate in?",
    a: "J-Gate operates fully in English and Japanese. Our staff, advisory council, and partner network are bilingual. All formal documents can be provided in both languages.",
  },
  {
    q: "How does the T-Hub and Telangana ecosystem partnership benefit members?",
    a: "T-Hub — the world's largest innovation hub — provides members with access to startup scouting, corporate pilot programs, deep-tech research talent, and strategic integration with the proactive Telangana State Government IT promotion cell.",
  },
  {
    q: "Can J-Gate help with company registration in India?",
    a: "Yes. Through our partner network of legal and compliance professionals with specific Japan-India experience, we can guide you through company incorporation, GST registration, banking, and all regulatory requirements for operating in India.",
  },
  {
    q: "Is the Cyber Gateway address usable as my official business address?",
    a: "Yes. All membership tiers include the right to use J-Gate's Cyber Gateway address as your registered and operational business address in India — including mail handling and document receipt.",
  },
  {
    q: "How many companies are currently members?",
    a: "J-Gate launched with two founding Japanese member companies on Day 1. We are selectively growing membership to maintain the quality of the ecosystem and the depth of attention each member receives.",
  },
  {
    q: "How do I get started?",
    a: "Contact us through the form below or book a private tour of the facility. Our team will respond within 24 hours to schedule an introductory conversation — available in English or Japanese.",
  },
];

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-crimson/10 dark:border-white/10">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-serif-jp text-[16px] font-semibold text-ink dark:text-white sm:text-[17px]">
          {faq.q}
        </span>
        <span
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-colors",
            isOpen ? "bg-crimson text-white" : "bg-ivory dark:bg-white/10 text-crimson dark:text-rose-400"
          )}
        >
          {isOpen ? <Minus className="h-4 w-4" strokeWidth={2} /> : <Plus className="h-4 w-4" strokeWidth={2} />}
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 font-inter text-[14px] leading-relaxed text-slate dark:text-slate-300">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-pad bg-ivory-warm dark:bg-[#080d17] transition-colors">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Frequently Asked</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink dark:text-white"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}
            >
              Questions About <span className="text-crimson dark:text-rose-400">J-Gate</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-white dark:bg-[#101a2c] p-6 shadow-card border border-slate-200/90 dark:border-white/10 sm:p-8">
            {FAQS.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
