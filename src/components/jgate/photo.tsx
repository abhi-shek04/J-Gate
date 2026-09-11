"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/* ============================================================
   Photo — img with id + premium gradient fallback.
   When src is empty/broken, the gradient placeholder shows.
   Client can swap src="" to a real URL and it just works.
   ============================================================ */
export type PhotoItem = {
  id: string;
  src?: string;
  alt: string;
  label?: string;
  fallback: string; // gradient class e.g. "grad-office-main"
  initials?: string; // shown on placeholder
};

export function Photo({
  id,
  src = "",
  alt,
  fallback,
  initials,
  className,
  rounded = "rounded-lg",
  onClick,
}: {
  id: string;
  src?: string;
  alt: string;
  fallback: string;
  initials?: string;
  className?: string;
  rounded?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={`jg-photo-wrap ${rounded} ${className ?? ""}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); } } : undefined}
    >
      {/* Gradient placeholder — shows when no photo */}
      <div className={`jg-photo-placeholder ${fallback}`} aria-hidden="true">
        {initials && <span>{initials}</span>}
      </div>
      {/* The actual image — only rendered when src is provided */}
      {src ? (
        <img
          id={id}
          src={src}
          alt={alt}
          className="jg-photo"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).classList.add("jg-photo-fallback");
          }}
        />
      ) : (
        // Keep the id on a hidden span so client can still locate the slot
        <span id={id} className="sr-only">{alt}</span>
      )}
    </div>
  );
}

/* ============================================================
   Lightbox — full-screen photo overlay with prev/next/ESC
   Provided via context so any section can open the gallery
   ============================================================ */
type LightboxContextType = {
  open: (items: PhotoItem[], index?: number) => void;
};

const LightboxContext = createContext<LightboxContextType | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    // graceful no-op if used outside provider
    return { open: () => {} };
  }
  return ctx;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<PhotoItem[]>([]);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback((items: PhotoItem[], index = 0) => {
    setItems(items);
    setIndex(index);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);
  const next = useCallback(
    () => setIndex((i) => (i + 1) % Math.max(items.length, 1)),
    [items.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + Math.max(items.length, 1)) % Math.max(items.length, 1)),
    [items.length]
  );

  // Lock body scroll + ESC/arrow keys
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handler = (e: KeyboardEvent) => {
        if (e.key === "Escape") close();
        else if (e.key === "ArrowRight") next();
        else if (e.key === "ArrowLeft") prev();
      };
      window.addEventListener("keydown", handler);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handler);
      };
    }
  }, [isOpen, close, next, prev]);

  const current = items[index];

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {isOpen && current && (
        <div
          className="jg-lightbox jg-lightbox-open"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery"
        >
          <div className="jg-lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            {/* placeholder when no real src */}
            {!current.src && (
              <div className={`jg-photo-placeholder ${current.fallback}`}>
                {current.initials && <span style={{ fontSize: "3rem" }}>{current.initials}</span>}
              </div>
            )}
            {current.src && (
              <img
                src={current.src}
                alt={current.alt}
                className="jg-lightbox-img"
              />
            )}
            {/* Close */}
            <button
              className="jg-lightbox-btn jg-lightbox-close"
              onClick={close}
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>
            {/* Prev / Next (only if more than 1) */}
            {items.length > 1 && (
              <>
                <button
                  className="jg-lightbox-btn jg-lightbox-prev"
                  onClick={prev}
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  className="jg-lightbox-btn jg-lightbox-next"
                  onClick={next}
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
            {/* Caption */}
            <div className="jg-lightbox-caption">
              {current.label || current.alt}
              {items.length > 1 && (
                <span className="ml-2 opacity-60">
                  · {index + 1} / {items.length}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}
