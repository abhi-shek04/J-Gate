"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

/* ============================================================
   Reveal — fade-in-up/left/right/scale on scroll using IntersectionObserver
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
  variant?: "up" | "left" | "right" | "scale" | "fade";
  as?: React.ElementType;
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
      { threshold: 0.05, rootMargin: "0px 0px -15px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === "left"
      ? "reveal-left"
      : variant === "right"
      ? "reveal-right"
      : "reveal";

  const Component = Tag as any;

  const getInitialTransform = () => {
    if (visible) return "translate3d(0, 0, 0) scale(1)";
    switch (variant) {
      case "up":
        return "translate3d(0, 24px, 0)";
      case "left":
        return "translate3d(-32px, 0, 0)";
      case "right":
        return "translate3d(32px, 0, 0)";
      case "scale":
        return "translate3d(0, 16px, 0) scale(0.96)";
      case "fade":
        return "translate3d(0, 0, 0)";
      default:
        return "translate3d(0, 24px, 0)";
    }
  };

  return (
    <Component
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: "750ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transform: getInitialTransform(),
        opacity: visible ? 1 : 0,
        willChange: "transform, opacity",
      }}
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
  icon,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
  icon?: ReactNode;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow && (
        <div className={cn("mb-3 flex items-center gap-2.5", align === "center" ? "justify-center" : "justify-start")}>
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-1 text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.18em] shadow-2xs backdrop-blur-md transition-all",
              light
                ? "bg-white/10 text-saffron border border-white/20 shadow-black/20"
                : "bg-crimson/8 dark:bg-rose-950/40 text-crimson dark:text-rose-400 border border-crimson/20 dark:border-rose-800/40"
            )}
          >
            {icon ? (
              icon
            ) : (
              <span className={cn("h-1.5 w-1.5 rounded-full animate-pulse", light ? "bg-saffron" : "bg-crimson dark:bg-rose-400")} />
            )}
            <span>{eyebrow}</span>
          </span>
        </div>
      )}

      <h2
        className={cn(
          "font-serif-jp font-bold leading-[1.16] tracking-tight",
          light ? "text-white drop-shadow-sm" : "text-ink dark:text-white",
          "text-[clamp(2rem,4.2vw,3rem)]",
          align === "center" ? "mx-auto" : ""
        )}
      >
        {title}
      </h2>

      {/* Subtle Hairline Accent Indicator Bar */}
      <div className={cn("my-3.5 flex items-center gap-1.5", align === "center" ? "justify-center" : "justify-start")}>
        <span className={cn("h-[2.5px] w-12 sm:w-16 rounded-full bg-gradient-to-r", light ? "from-saffron via-amber-300 to-transparent" : "from-crimson via-saffron to-transparent")} />
      </div>

      {subtitle && (
        <p
          className={cn(
            "mt-2.5 font-inter leading-relaxed",
            light ? "text-mist" : "text-slate-600 dark:text-slate-300",
            "text-[clamp(0.95rem,1.4vw,1.0625rem)]",
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

/* ============================================================
   AnimatedCounter — Component wrapper for animated number
   ============================================================ */
export function AnimatedCounter({
  target,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const { ref, count } = useCounter(target, duration);
  return (
    <span ref={ref as any} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ============================================================
   SectionDivider — Japanese-inspired section separator
   ============================================================ */
export function SectionDivider({
  light = false,
  variant = "simple",
}: {
  light?: boolean;
  variant?: "simple" | "torii" | "asanoha";
}) {
  return (
    <div className="relative py-6 sm:py-8 overflow-hidden flex items-center justify-center">
      <div className={cn("h-px w-full max-w-5xl", light ? "bg-gradient-to-r from-transparent via-white/20 to-transparent" : "bg-gradient-to-r from-transparent via-crimson/25 to-transparent")} />
      {variant === "torii" && (
        <div className="absolute left-1/2 -translate-x-1/2 bg-ivory dark:bg-midnight px-4 flex items-center gap-2">
          <span className={cn("h-1.5 w-1.5 rounded-full", light ? "bg-saffron" : "bg-crimson")} />
          <span className={cn("text-[10px] font-mono tracking-widest uppercase", light ? "text-white/40" : "text-slate-400")}>
            J-GATE · CORRIDOR
          </span>
          <span className={cn("h-1.5 w-1.5 rounded-full", light ? "bg-saffron" : "bg-crimson")} />
        </div>
      )}
    </div>
  );
}

