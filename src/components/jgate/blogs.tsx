"use client";

import { useState } from "react";
import { ArrowRight, Clock, Camera } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import { useI18n } from "@/lib/i18n";
import { Photo, useLightbox, type PhotoItem } from "./photo";
import { cn } from "@/lib/utils";

const ARTICLES = [
  { key: "blogs.b1", tagColor: "bg-crimson/10 text-crimson", readTime: "5 min", gradient: "from-crimson to-midnight" },
  { key: "blogs.b2", tagColor: "bg-saffron/15 text-[#a06d00]", readTime: "7 min", gradient: "from-saffron to-crimson" },
  { key: "blogs.b3", tagColor: "bg-success/10 text-success", readTime: "6 min", gradient: "from-navy to-success" },
] as const;

const GALLERY: (PhotoItem & { gKey: string })[] = [
  { id: "photo-gallery-1", alt: "J-Gate main workspace", label: "Main Workspace", fallback: "grad-office-main", initials: "JG", gKey: "blogs.g1" },
  { id: "photo-gallery-2", alt: "Dedicated desks at J-Gate", label: "Dedicated Desks", fallback: "grad-office-desks", initials: "DG", gKey: "blogs.g2" },
  { id: "photo-gallery-3", alt: "Canteen and lounge at J-Gate", label: "Canteen & Lounge", fallback: "grad-canteen-main", initials: "CN", gKey: "blogs.g3" },
  { id: "photo-gallery-4", alt: "Conference room at J-Gate", label: "Conference Room", fallback: "grad-office-meeting", initials: "CR", gKey: "blogs.g4" },
  { id: "photo-gallery-5", alt: "Team celebrations at J-Gate", label: "Team Celebrations", fallback: "grad-inauguration", initials: "TC", gKey: "blogs.g5" },
  { id: "photo-gallery-6", alt: "Candidate workshops at J-Gate", label: "Candidate Workshops", fallback: "grad-event", initials: "WS", gKey: "blogs.g6" },
  { id: "photo-gallery-7", alt: "Japanese tea lounge at J-Gate", label: "Japanese Tea Lounge", fallback: "grad-canteen-japanese", initials: "🍵", gKey: "blogs.g7" },
  { id: "photo-gallery-8", alt: "Cultural events at J-Gate", label: "Cultural Events", fallback: "grad-event", initials: "CE", gKey: "blogs.g8" },
];

export function Blogs() {
  const { t } = useI18n();
  const { open } = useLightbox();
  const [tab, setTab] = useState<"insights" | "culture">("insights");

  const openGallery = (i: number) => {
    open(
      GALLERY.map((g) => ({ id: g.id, alt: g.alt, label: t(g.gKey), fallback: g.fallback, initials: g.initials })),
      i
    );
  };

  return (
    <section id="blogs" className="section-pad relative overflow-hidden bg-navy">
      <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
      <div className="container-jg relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow light>{t("blogs.eyebrow")}</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
              style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
            >
              {t("blogs.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
              {t("blogs.subtitle")}
            </p>
          </div>
        </Reveal>

        {/* Tab switcher */}
        <Reveal delay={80}>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center rounded-full border border-white/12 bg-white/5 p-1">
              <button
                onClick={() => setTab("insights")}
                className={cn(
                  "rounded-full px-5 py-2 font-inter text-[13px] font-semibold transition-all",
                  tab === "insights" ? "bg-crimson text-white shadow-sm" : "text-mist hover:text-white"
                )}
              >
                {t("blogs.tab1")}
              </button>
              <button
                onClick={() => setTab("culture")}
                className={cn(
                  "rounded-full px-5 py-2 font-inter text-[13px] font-semibold transition-all",
                  tab === "culture" ? "bg-crimson text-white shadow-sm" : "text-mist hover:text-white"
                )}
              >
                {t("blogs.tab2")}
              </button>
            </div>
          </div>
        </Reveal>

        {/* Tab A — Industry Insights articles */}
        {tab === "insights" && (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ARTICLES.map((b, i) => (
              <Reveal key={b.key} delay={i * 100}>
                <article className="glass-dark lift-card group flex h-full flex-col overflow-hidden rounded-lg">
                  <div className={cn("relative flex h-32 items-center justify-center bg-gradient-to-br", b.gradient)}>
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 1px, transparent 1.5px)", backgroundSize: "20px 20px" }} />
                    <span className="relative font-serif-jp text-3xl font-bold text-white/30">{String(i + 1).padStart(2, "0")}</span>
                    <span className={cn("absolute left-4 top-4 rounded bg-pearl px-2.5 py-1 font-inter text-[10px] font-bold uppercase", b.tagColor)} style={{ letterSpacing: "0.1em" }}>
                      {t(`${b.key}.tag`)}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 font-inter text-[12px] text-mist">
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {b.readTime}</span>
                    </div>
                    <h3 className="mt-3 font-serif-jp text-lg font-bold leading-snug text-white">{t(`${b.key}.title`)}</h3>
                    <p className="mt-2 flex-1 font-inter text-[14px] leading-relaxed text-mist">{t(`${b.key}.excerpt`)}</p>
                    <button className="mt-5 inline-flex items-center gap-1.5 font-inter text-[13px] font-semibold text-saffron transition-all hover:gap-2.5">
                      {t("blogs.readmore")}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        {/* Tab B — Life & Culture photo gallery with lightbox */}
        {tab === "culture" && (
          <div className="mt-12">
            <Reveal>
              <div className="mb-8 text-center">
                <h3 className="font-serif-jp text-xl font-bold text-white">{t("blogs.gallery.title")}</h3>
                <p className="mt-1.5 font-inter text-[13px] text-mist">{t("blogs.gallery.subtitle")}</p>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {GALLERY.map((g, i) => (
                <Reveal key={g.id} delay={(i % 4) * 80}>
                  <div className="group relative">
                    <Photo
                      id={g.id}
                      alt={g.alt}
                      fallback={g.fallback}
                      initials={g.initials}
                      rounded="rounded-lg"
                      className={cn(
                        "w-full cursor-pointer",
                        i === 0 || i === 5 ? "h-64" : "h-44"
                      )}
                      onClick={() => openGallery(i)}
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-end">
                      <div className="w-full rounded-b-lg px-4 py-3 font-inter text-[12px] font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(to top, rgba(8,15,26,0.85), transparent)" }}>
                        {t(g.gKey)}
                      </div>
                    </div>
                    <span className="pointer-events-none absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/30 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                      <Camera className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
