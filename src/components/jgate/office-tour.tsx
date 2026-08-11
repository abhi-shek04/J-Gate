"use client";

import { Reveal, Eyebrow } from "./shared";
import { Photo, useLightbox, type PhotoItem } from "./photo";
import { Camera } from "lucide-react";

const GALLERY: PhotoItem[] = [
  { id: "photo-office-main", alt: "J-Gate main workspace, Cyber Gateway Hyderabad", label: "Main Workspace · Cyber Gateway", fallback: "grad-office-main", initials: "JG" },
  { id: "photo-office-desks", alt: "Dedicated desk area at J-Gate", label: "Dedicated Desks", fallback: "grad-office-desks", initials: "DG" },
  { id: "photo-office-lounge", alt: "Member lounge at J-Gate", label: "Member Lounge", fallback: "grad-office-lounge", initials: "LG" },
  { id: "photo-office-meeting", alt: "Conference room at J-Gate Hyderabad", label: "Conference Room", fallback: "grad-office-meeting", initials: "CR" },
  { id: "photo-office-cabin", alt: "Private cabin at J-Gate", label: "Private Cabin", fallback: "grad-office-cabin", initials: "PC" },
  { id: "photo-office-reception", alt: "J-Gate reception area", label: "Reception & Welcome Area", fallback: "grad-office-reception", initials: "RC" },
  { id: "photo-canteen-main", alt: "J-Gate canteen and break area", label: "Canteen & Break Area", fallback: "grad-canteen-main", initials: "CN" },
  { id: "photo-canteen-japanese", alt: "Japanese tea and refreshments at J-Gate", label: "Japanese Omotenashi Refreshments", fallback: "grad-canteen-japanese", initials: "🍵" },
];

function PhotoTile({
  item,
  index,
  className,
  aspect,
  onOpen,
}: {
  item: PhotoItem;
  index: number;
  className?: string;
  aspect: string;
  onOpen: (i: number) => void;
}) {
  return (
    <div className={`group relative ${className ?? ""}`}>
      <Photo
        id={item.id}
        src={item.src}
        alt={item.alt}
        fallback={item.fallback}
        initials={item.initials}
        rounded="rounded-xl"
        className={`h-full w-full cursor-pointer ${aspect}`}
        onClick={() => onOpen(index)}
      />
      {/* Label overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-end">
        <div
          className="w-full rounded-b-xl px-5 py-4 font-inter text-[13px] font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: "linear-gradient(to top, rgba(8,15,26,0.85), transparent)",
          }}
        >
          {item.label}
        </div>
      </div>
      {/* Camera icon — click hint */}
      <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <Camera className="h-4 w-4" />
      </span>
    </div>
  );
}

export function OfficeTour() {
  const { open } = useLightbox();
  const openAt = (i: number) => open(GALLERY, i);

  return (
    <section id="office-tour" className="section-pad bg-ivory">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>The Workspace</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.15] text-ink"
              style={{ fontSize: "clamp(2rem, 4.5vw, 2.75rem)" }}
            >
              Your India Headquarters{" "}
              <span className="text-crimson">Awaits</span>
            </h2>
            <p
              className="mx-auto mt-5 max-w-[600px] font-inter leading-relaxed text-slate"
              style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.125rem)" }}
            >
              Step inside J-Gate at Cyber Gateway — Hyderabad&apos;s most
              prestigious business address. Every room is designed around how
              Japanese companies actually work.
            </p>
          </div>
        </Reveal>

        {/* Masonry editorial grid */}
        <div className="mt-14 grid gap-4 md:grid-cols-12 md:grid-rows-[260px_260px_260px]">
          {/* Row 1: left 60% tall (col-span-7, row-span-2) + right 40% stacked (col-span-5) */}
          <Reveal className="md:col-span-7 md:row-span-2" delay={0}>
            <PhotoTile
              item={GALLERY[0]}
              index={0}
              aspect="h-[260px] md:h-full"
              onOpen={openAt}
            />
          </Reveal>
          <Reveal className="md:col-span-5" delay={80}>
            <PhotoTile
              item={GALLERY[1]}
              index={1}
              aspect="h-[260px] md:h-full"
              onOpen={openAt}
            />
          </Reveal>
          <Reveal className="md:col-span-5" delay={160}>
            <PhotoTile
              item={GALLERY[2]}
              index={2}
              aspect="h-[260px] md:h-full"
              onOpen={openAt}
            />
          </Reveal>

          {/* Row 2: 3 equal columns */}
          <Reveal className="md:col-span-4" delay={0}>
            <PhotoTile
              item={GALLERY[3]}
              index={3}
              aspect="h-[260px] md:h-full"
              onOpen={openAt}
            />
          </Reveal>
          <Reveal className="md:col-span-4" delay={80}>
            <PhotoTile
              item={GALLERY[4]}
              index={4}
              aspect="h-[260px] md:h-full"
              onOpen={openAt}
            />
          </Reveal>
          <Reveal className="md:col-span-4" delay={160}>
            <PhotoTile
              item={GALLERY[5]}
              index={5}
              aspect="h-[260px] md:h-full"
              onOpen={openAt}
            />
          </Reveal>

          {/* Row 3: left 40% + right 60% */}
          <Reveal className="md:col-span-5" delay={0}>
            <PhotoTile
              item={GALLERY[6]}
              index={6}
              aspect="h-[260px] md:h-full"
              onOpen={openAt}
            />
          </Reveal>
          <Reveal className="md:col-span-7" delay={80}>
            <PhotoTile
              item={GALLERY[7]}
              index={7}
              aspect="h-[260px] md:h-full"
              onOpen={openAt}
            />
          </Reveal>
        </div>

        {/* Caption */}
        <Reveal delay={120}>
          <p className="mt-8 text-center font-inter text-[14px] text-mist">
            📍 Cyber Gateway, Hyderabad · All photos of J-Gate&apos;s actual
            workspace
          </p>
        </Reveal>
      </div>
    </section>
  );
}
