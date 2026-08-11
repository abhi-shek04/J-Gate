"use client";

import { ArrowRight, Clock } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const BLOGS = [
  { key: "blogs.b1", tagColor: "bg-crimson/10 text-crimson", readTime: "5 min", gradient: "from-crimson to-midnight" },
  { key: "blogs.b2", tagColor: "bg-saffron/15 text-[#a06d00]", readTime: "7 min", gradient: "from-saffron to-crimson" },
  { key: "blogs.b3", tagColor: "bg-success/10 text-success", readTime: "6 min", gradient: "from-navy to-success" },
] as const;

export function Blogs() {
  const { t } = useI18n();
  return (
    <section id="blogs" className="section-pad bg-ivory-warm">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>{t("blogs.eyebrow")}</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
              style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
            >
              {t("blogs.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
              {t("blogs.subtitle")}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {BLOGS.map((b, i) => (
            <Reveal key={b.key} delay={i * 120}>
              <article className="lift-card group flex h-full flex-col overflow-hidden rounded-lg bg-pearl shadow-card">
                <div className={cn("relative flex h-36 items-center justify-center bg-gradient-to-br", b.gradient)}>
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 1px, transparent 1.5px)", backgroundSize: "20px 20px" }}
                  />
                  <span className="relative font-serif-jp text-3xl font-bold text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn("absolute left-4 top-4 rounded bg-pearl px-2.5 py-1 font-inter text-[10px] font-bold uppercase", b.tagColor)}
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {t(`${b.key}.tag`)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 font-inter text-[12px] text-mist">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {b.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif-jp text-lg font-bold leading-snug text-ink">
                    {t(`${b.key}.title`)}
                  </h3>
                  <p className="mt-2 flex-1 font-inter text-[14px] leading-relaxed text-slate">
                    {t(`${b.key}.excerpt`)}
                  </p>
                  <button
                    className="mt-5 inline-flex items-center gap-1.5 font-inter text-[13px] font-semibold text-crimson transition-all hover:gap-2.5"
                  >
                    {t("blogs.readmore")}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
