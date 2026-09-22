"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { JGateLogo } from "./icons";
import { useScrolled } from "./shared";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.about" },
  { href: "/why-jgate", key: "nav.why" },
  { href: "/services", key: "nav.services" },
  { href: "/team", key: "nav.team" },
  { href: "/pricing", key: "nav.pricing" },
  { href: "/faq", key: "nav.faq" },
  { href: "/blogs", key: "nav.blogs" },
  { href: "/contact", key: "nav.contact" },
] as const;

export function Navbar() {
  const scrolled = useScrolled(60);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");

  // Determine if a nav link is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // On auth page, navbar is transparent over dark content
  const isAuthPage = pathname === "/auth/brochure";
  // Homepage hero is light mode when not in dark theme — navbar needs dark text when not scrolled
  const isHomePage = pathname === "/";
  const useLightNav = isHomePage && !scrolled && !open && !isDark;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || isAuthPage || open
          ? "glass-frost bg-[#080f1a]/95 shadow-xl border-b border-white/10"
          : useLightNav
            ? "bg-transparent"
            : isDark
              ? "bg-[#080f1a]/60 backdrop-blur-md border-b border-white/5"
              : "bg-transparent"
      )}
    >
      <nav
        className="container-jg flex h-[76px] items-center justify-between gap-2 xl:gap-4"
        aria-label="Primary"
      >
        {/* Logo — official J-Gate logo with protected non-shrinking dimensions */}
        <Link
          href="/"
          className="group flex items-center shrink-0 min-w-[130px]"
          aria-label="J-Gate home"
        >
          <JGateLogo
            size="md"
            className="h-9 sm:h-10 w-auto shrink-0 transition-opacity duration-300 group-hover:opacity-90"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 xl:gap-1.5 lg:flex flex-nowrap">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                className={cn(
                  "relative px-1.5 xl:px-2.5 py-1.5 font-inter text-[12.5px] xl:text-[13.5px] font-medium transition-colors whitespace-nowrap",
                  useLightNav
                    ? "text-ink/70 hover:text-ink"
                    : "text-white/70 hover:text-white",
                  isActive(link.href) && (useLightNav ? "text-ink font-semibold" : "text-white font-semibold")
                )}
                style={{ letterSpacing: "0.01em" }}
              >
                {t(link.key)}
                <span
                  className={cn(
                    "absolute bottom-0.5 left-1.5 xl:left-2.5 h-0.5 bg-crimson transition-all duration-300 rounded-full",
                    isActive(link.href) ? "w-[calc(100%-0.75rem)] xl:w-[calc(100%-1.25rem)]" : "w-0"
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2 xl:gap-2.5 shrink-0">
          {/* JP/EN language toggle — working pill switch */}
          <div className={cn(
            "flex items-center rounded-full border p-0.5 shrink-0 transition-colors",
            useLightNav
              ? "border-slate-300 bg-slate-100/60"
              : "border-white/15 bg-white/5"
          )}>
            {(["JP", "EN"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-label={`Switch to ${l}`}
                className={cn(
                  "rounded-full px-2.5 py-1 font-inter text-[11px] font-bold transition-all",
                  lang === l
                    ? "bg-crimson text-white shadow-xs"
                    : useLightNav
                      ? "text-ink/60 hover:text-ink"
                      : "text-white/60 hover:text-white"
                )}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Theme toggle (Light / Dark mode) */}
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? (lang === "JP" ? "ライトモードに切り替え" : "Switch to Light Mode") : (lang === "JP" ? "ダークモードに切り替え" : "Switch to Dark Mode")}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-200 active:scale-95 shrink-0 cursor-pointer",
              useLightNav
                ? "border-slate-300 bg-slate-100/70 text-ink hover:bg-slate-200/80 hover:text-crimson"
                : "border-white/15 bg-white/5 text-white/80 hover:bg-white/15 hover:text-white"
            )}
          >
            {mounted ? (
              isDark ? (
                <Sun className="h-4 w-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="h-4 w-4 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
              )
            ) : (
              <span className="h-4 w-4" />
            )}
          </button>

          {/* Download Brochure CTA — routes to /auth/brochure */}
          <Link
            href="/auth/brochure"
            className="btn-shine hidden items-center gap-1.5 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-3.5 xl:px-4 py-2 font-inter text-[12px] xl:text-[13px] font-semibold text-white shadow-[0_0_20px_rgba(188,26,44,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(188,26,44,0.6)] shrink-0 lg:inline-flex"
          >
            <Download className="h-3.5 w-3.5 shrink-0" />
            <span>{t("nav.brochure")}</span>
          </Link>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 lg:hidden shrink-0 active:scale-95",
              open
                ? "bg-crimson/20 border-crimson/50 text-white shadow-xs"
                : useLightNav
                  ? "bg-ink/5 border-slate-300 text-ink hover:bg-ink/10"
                  : "bg-white/10 border-white/20 text-white hover:bg-white/20"
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5 text-white" /> : <Menu className={cn("h-5 w-5", useLightNav ? "text-ink" : "text-white")} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen drawer */}
      <div
        className={cn(
          "fixed inset-x-0 top-[76px] bottom-0 z-40 overflow-y-auto bg-[#080f1a]/98 backdrop-blur-2xl transition-all duration-300 lg:hidden flex flex-col justify-between",
          open ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <ul className="container-jg flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl px-4 py-3 font-serif-jp text-[15.5px] font-medium transition-all duration-200 border",
                    active
                      ? "bg-crimson/15 border-crimson/40 text-white font-bold"
                      : "border-transparent text-white/80 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <span>{t(link.key)}</span>
                  <span className={cn("h-2 w-2 rounded-full", active ? "bg-crimson" : "bg-white/20")} />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="container-jg flex flex-col gap-3 pb-8 pt-3 border-t border-white/10 bg-[#080f1a]/95 shrink-0">
          {/* Mobile theme toggle */}
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
            <span className="font-inter text-xs font-medium text-mist">
              {lang === "JP" ? "表示テーマ" : "Theme / モード"}
            </span>
            <div className="flex items-center rounded-full border border-white/15 bg-white/10 p-0.5">
              <button
                onClick={() => setTheme("light")}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3 py-1 font-inter text-[11px] font-bold transition-all",
                  !isDark ? "bg-crimson text-white shadow-xs" : "text-white/60 hover:text-white"
                )}
              >
                <Sun className="h-3.5 w-3.5" />
                <span>Light</span>
              </button>
              <button
                onClick={() => setTheme("dark")}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3 py-1 font-inter text-[11px] font-bold transition-all",
                  isDark ? "bg-crimson text-white shadow-xs" : "text-white/60 hover:text-white"
                )}
              >
                <Moon className="h-3.5 w-3.5" />
                <span>Dark</span>
              </button>
            </div>
          </div>

          {/* Mobile lang toggle */}
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
            <span className="font-inter text-xs font-medium text-mist">Language / 言語</span>
            <div className="flex items-center rounded-full border border-white/15 bg-white/10 p-0.5">
              {(["JP", "EN"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={cn(
                    "rounded-full px-3 py-1 font-inter text-[11px] font-bold transition-all",
                    lang === l ? "bg-crimson text-white shadow-xs" : "text-white/60 hover:text-white"
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <Link
            href="/auth/brochure"
            onClick={() => setOpen(false)}
            className="btn-shine flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-crimson to-crimson-deep px-5 py-3.5 font-inter text-sm font-bold text-white shadow-lg shadow-crimson/40"
          >
            <Download className="h-4 w-4" />
            <span>{t("nav.brochure")}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
