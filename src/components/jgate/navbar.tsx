"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import { ToriiGate } from "./icons";
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
  { href: "/blogs", key: "nav.blogs" },
  { href: "/contact", key: "nav.contact" },
] as const;

export function Navbar() {
  const scrolled = useScrolled(80);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  // Determine if a nav link is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // On auth page, navbar is transparent over dark content
  const isAuthPage = pathname === "/auth/brochure";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || isAuthPage ? "glass-frost" : "bg-transparent"
      )}
    >
      <nav
        className="container-jg flex h-[76px] items-center justify-between"
        aria-label="Primary"
      >
        {/* Logo — Torii gate SVG + J-Gate wordmark */}
        <Link href="/" className="group flex items-center gap-2.5" aria-label="J-Gate home">
          <span className="text-crimson">
            <ToriiGate className="h-8 w-8" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif-jp text-[19px] font-bold tracking-tight text-white">J-Gate</span>
            <span className="font-sans-jp text-[10px] text-mist">Jゲート</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative px-3 py-2 font-inter text-[14px] font-medium transition-colors",
                  "text-white/70 hover:text-white",
                  isActive(link.href) && "text-white"
                )}
                style={{ letterSpacing: "0.01em" }}
              >
                {t(link.key)}
                <span
                  className={cn(
                    "absolute bottom-1 left-3 h-px bg-crimson transition-all duration-300",
                    isActive(link.href) ? "w-[calc(100%-1.5rem)]" : "w-0"
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2.5">
          {/* JP/EN language toggle — working pill switch */}
          <div className="hidden items-center rounded-full border border-white/15 bg-white/5 p-0.5 sm:flex">
            {(["JP", "EN"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-label={`Switch to ${l}`}
                className={cn(
                  "rounded-full px-2.5 py-1 font-inter text-[11px] font-bold transition-all",
                  lang === l
                    ? "bg-crimson text-white shadow-sm"
                    : "text-white/60 hover:text-white"
                )}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Download Brochure CTA — routes to /auth/brochure */}
          <Link
            href="/auth/brochure"
            className="btn-shine hidden items-center gap-1.5 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-4 py-2.5 font-inter text-[13px] font-semibold text-white shadow-[0_0_20px_rgba(188,26,44,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(188,26,44,0.6)] lg:inline-flex"
          >
            <Download className="h-3.5 w-3.5" />
            {t("nav.brochure")}
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors lg:hidden",
              "text-white hover:bg-white/10"
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen drawer */}
      <div
        className={cn(
          "fixed inset-0 top-[76px] z-40 overflow-y-auto bg-midnight/97 backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <ul className="container-jg flex flex-col gap-1 py-8">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                className={cn(
                  "flex w-full items-center justify-between border-b border-white/8 py-4 text-left font-serif-jp text-xl font-medium transition-all",
                  isActive(link.href) ? "text-crimson" : "text-white/85 hover:text-white",
                  open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                )}
              >
                {t(link.key)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="container-jg flex flex-col gap-4 pb-12 pt-2">
          {/* Mobile lang toggle */}
          <div className="flex items-center justify-center gap-2">
            <span className="font-inter text-xs text-mist">Language:</span>
            <div className="flex items-center rounded-full border border-white/15 bg-white/5 p-0.5">
              {(["JP", "EN"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={cn(
                    "rounded-full px-3 py-1 font-inter text-[11px] font-bold transition-all",
                    lang === l ? "bg-crimson text-white" : "text-white/60"
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          <Link
            href="/auth/brochure"
            className="btn-shine flex items-center justify-center gap-1.5 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-5 py-3.5 font-inter text-sm font-semibold text-white shadow-[0_0_20px_rgba(188,26,44,0.4)]"
          >
            <Download className="h-4 w-4" />
            {t("nav.brochure")}
          </Link>
        </div>
      </div>
    </header>
  );
}
