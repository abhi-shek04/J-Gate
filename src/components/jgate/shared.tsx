"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

/* ============================================================
   Reveal — fade-in-up on scroll using IntersectionObserver
   ============================================================ */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right";
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  const variantClass = variant === "left" ? "reveal-left" : variant === "right" ? "reveal-right" : "reveal";
  const Component = Tag as any;
  return (
    <Component
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(variantClass, visible && "is-visible", className)}
    >
      {children}
    </Component>
  );
}

/* SectionHeading + Eyebrow — i18n aware */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow && (
        <span
          className={cn("inline-block text-[11px] font-semibold uppercase", light ? "text-saffron" : "text-crimson")}
          style={{ letterSpacing: "0.2em" }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 font-serif-jp font-bold leading-[1.15]",
          light ? "text-white" : "text-ink",
          "text-[clamp(1.875rem,4vw,2.75rem)]",
          align === "center" ? "mx-auto" : ""
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 font-inter leading-relaxed",
            light ? "text-mist" : "text-slate",
            "text-[clamp(0.9rem,1.6vw,1.0625rem)]",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function useScrollSpy(ids: string[], offset = 140) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + offset;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 80) {
        current = ids[ids.length - 1];
      }
      setActiveId(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [ids, offset]);
  return activeId;
}

export function useScrolled(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return scrolled;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={cn("inline-block text-[11px] font-semibold uppercase", light ? "text-saffron" : "text-crimson")}
      style={{ letterSpacing: "0.2em" }}
    >
      {children}
    </span>
  );
}

/* ============================================================
   useCounter — count up from 0 to target on scroll into view
   ============================================================ */
export function useCounter(target: number, duration = 2000) {
  const ref = useRef<HTMLElement | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const start = Date.now();
            const animate = () => {
              const elapsed = Date.now() - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
              setCount(Math.floor(eased * target));
              if (progress < 1) requestAnimationFrame(animate);
              else setCount(target);
            };
            requestAnimationFrame(animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, count };
}
