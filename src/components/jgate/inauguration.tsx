"use client";

import { Reveal, Eyebrow } from "./shared";
import { Photo, useLightbox, type PhotoItem } from "./photo";
import { cn } from "@/lib/utils";

const PHOTOS: PhotoItem[] = [
  { id: "photo-inauguration-main", alt: "J-Gate inauguration ceremony June 22 2026", label: "Official Inauguration — June 22, 2026", fallback: "grad-inauguration", initials: "IG" },
  { id: "photo-inauguration-speech", alt: "Inaugural keynote at J-Gate inauguration", label: "Inaugural Keynote Address — June 22, 2026", fallback: "grad-inauguration", initials: "IK" },
  { id: "photo-inauguration-mochi", alt: "Daifuku Mochi Japanese hospitality at J-Gate", label: "Daifuku Mochi — Great Fortune 大福", fallback: "grad-inauguration", initials: "🍡" },
  { id: "photo-inauguration-guests", alt: "50 distinguished guests at J-Gate inauguration", label: "50+ Distinguished Guests", fallback: "grad-inauguration", initials: "50+" },
  { id: "photo-inauguration-mou", alt: "MoU signing Indobox Genesys Info X", label: "MoU Signing — Indobox × Genesys Info X", fallback: "grad-inauguration", initials: "MoU" },
];

const TIMELINE = [
  { icon: "📅", date: "June 22, 2026", title: "Doors Open", desc: "J-Gate officially inaugurated at Cyber Gateway, Hyderabad." },
  { icon: "👥", date: "Launch Day", title: "50+ Distinguished Guests", desc: "Global business leaders, entrepreneurs, state officials, university representatives, Japanese expatriates, and students — all present." },
  { icon: "🎤", date: "Keynote", title: "Inaugural Keynote", desc: "Distinguished guests deliver congratulatory addresses, affirming strong bilateral support for J-Gate's mission in Hyderabad." },
  { icon: "🍡", date: "Omotenashi", title: "Omotenashi Moment", desc: "Guests welcomed with Daifuku Mochi (大福餅 — \"Great Fortune\") and authentic Japanese green tea. The philosophy of wholehearted hospitality, made tangible." },
  { icon: "🤝", date: "Partnership", title: "MoU Signed", desc: "Mr. Daisuke Tanji and Mr. Viinay Sarikonda formalize the Indobox × Genesys Info X partnership — the operational backbone of J-Gate." },
  { icon: "🏛", date: "Council", title: "Advisory Council Inaugurated", desc: "Mr. Sujit Jagirdar and Mr. Srinivas Rao Mahankali (former CIO and CEO of T-Hub) join the Advisory Council and pledge their full support." },
  { icon: "🇯🇵", date: "Day 1", title: "Two Founding Members Join", desc: "Two Japanese companies announce membership on Day 1 — proof that demand existed before the doors even opened." },
];

export function Inauguration() {
  const { open } = useLightbox();
  const openAt = (i: number) => open(PHOTOS, i);

  return (
    <section id="inauguration" className="section-pad bg-ivory-warm">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>The Beginning</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}
            >
              June 22, 2026 —{" "}
              <span className="text-crimson">A Historic Day</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.125rem)" }}>
              J-Gate&apos;s inauguration was not a launch party. It was the
              convergence of two nations, two business cultures, and a decade of
              relationship-building — all in one room.
            </p>
          </div>
        </Reveal>

        {/* Editorial photo grid — 2 large + 3 row */}
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="group relative">
              <Photo
                id={PHOTOS[0].id}
                alt={PHOTOS[0].alt}
                fallback={PHOTOS[0].fallback}
                initials={PHOTOS[0].initials}
                rounded="rounded-lg"
                className="h-64 w-full cursor-pointer md:h-80"
                onClick={() => openAt(0)}
              />
              <div className="pointer-events-none absolute inset-0 flex items-end">
                <div className="w-full rounded-b-lg px-5 py-4 font-inter text-[13px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100" style={{ background: "linear-gradient(to top, rgba(8,15,26,0.85), transparent)" }}>
                  {PHOTOS[0].label}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="group relative">
              <Photo
                id={PHOTOS[1].id}
                alt={PHOTOS[1].alt}
                fallback={PHOTOS[1].fallback}
                initials={PHOTOS[1].initials}
                rounded="rounded-lg"
                className="h-64 w-full cursor-pointer md:h-80"
                onClick={() => openAt(1)}
              />
              <div className="pointer-events-none absolute inset-0 flex items-end">
                <div className="w-full rounded-b-lg px-5 py-4 font-inter text-[13px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100" style={{ background: "linear-gradient(to top, rgba(8,15,26,0.85), transparent)" }}>
                  {PHOTOS[1].label}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {PHOTOS.slice(2).map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <div className="group relative">
                <Photo
                  id={p.id}
                  alt={p.alt}
                  fallback={p.fallback}
                  initials={p.initials}
                  rounded="rounded-lg"
                  className="h-48 w-full cursor-pointer"
                  onClick={() => openAt(i + 2)}
                />
                <div className="pointer-events-none absolute inset-0 flex items-end">
                  <div className="w-full rounded-b-lg px-4 py-3 font-inter text-[12px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100" style={{ background: "linear-gradient(to top, rgba(8,15,26,0.85), transparent)" }}>
                    {p.label}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-crimson via-saffron to-success sm:left-1/2 sm:-translate-x-1/2" aria-hidden />
          <ol className="space-y-8">
            {TIMELINE.map((e, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={e.title}
                  className={cn(
                    "relative pl-14 sm:grid sm:grid-cols-2 sm:gap-8 sm:pl-0",
                    !isLeft && "sm:[&>*:first-child]:col-start-2"
                  )}
                >
                  <span
                    className="absolute left-5 top-3 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-crimson bg-ivory-warm text-lg shadow-crimp sm:left-1/2"
                    aria-hidden
                  >
                    {e.icon}
                  </span>
                  <Reveal
                    variant={isLeft ? "left" : "right"}
                    delay={60}
                    className={cn(
                      "sm:col-span-1",
                      isLeft ? "sm:pr-12 sm:text-right" : "sm:col-start-2 sm:pl-12"
                    )}
                  >
                    <div className="lift-card rounded-lg border border-crimson/8 bg-pearl p-6 shadow-card">
                      <span className="inline-block rounded bg-saffron/15 px-2.5 py-1 font-inter text-[11px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.08em" }}>
                        {e.date}
                      </span>
                      <h3 className="mt-3 font-serif-jp text-lg font-bold text-ink">{e.title}</h3>
                      <p className="mt-2 font-inter text-[14px] leading-relaxed text-slate">{e.desc}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
