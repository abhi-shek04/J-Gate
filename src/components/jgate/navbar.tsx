"use client";

import { useEffect, useState } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { ToriiGate } from "./icons";
import { useScrolled, useScrollSpy } from "./shared";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Features" },
  { id: "partners", label: "Partners" },
  { id: "advisory", label: "Advisory" },
  { id: "pricing", label: "Pricing" },
  { id: "events", label: "Events" },
  { id: "contact", label: "Contact" },
];

const SPY_IDS = NAV_LINKS.map((l) => l.id);

export function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "JP">("EN");
  const activeId = useScrollSpy(SPY_IDS, 140);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-jgate-pearl/85 shadow-soft backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      {/* thin top accent line */}
      <div
        className={cn(
          "h-0.5 w-full bg-gradient-to-r from-jgate-red via-jgate-gold to-jgate-green transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0"
        )}
      />
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8"
        aria-label="Primary"
      >
        {/* Logo */}
        <button
          onClick={() => handleNav("home")}
          className="group flex items-center gap-2.5"
          aria-label="J-Gate home"
        >
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
              scrolled ? "bg-jgate-red text-white" : "bg-white/10 text-white"
            )}
          >
            <ToriiGate className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-serif-jp text-xl font-bold tracking-tight transition-colors",
                scrolled ? "text-jgate-navy" : "text-white"
              )}
            >
              J-Gate
            </span>
            <span
              className={cn(
                "font-sans-jp text-[10px] tracking-wide transition-colors",
                scrolled ? "text-jgate-slate/70" : "text-white/60"
              )}
            >
              Jゲート
            </span>
          </span>
        </button>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-jgate-slate hover:text-jgate-red"
                    : "text-white/80 hover:text-white",
                  activeId === link.id &&
                    (scrolled ? "text-jgate-red" : "text-white")
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-jgate-red transition-all duration-300",
                    activeId === link.id ? "opacity-100" : "opacity-0"
                  )}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language toggle (UI only) */}
          <div
            className="hidden items-center gap-1 rounded-full border border-current/20 px-1 py-1 text-xs font-semibold sm:flex"
            title="Language toggle — Coming Soon"
            aria-label="Language toggle, coming soon"
          >
            <Globe
              className={cn(
                "ml-1 h-3.5 w-3.5",
                scrolled ? "text-jgate-slate" : "text-white/70"
              )}
            />
            <button
              onClick={() => setLang("EN")}
              className={cn(
                "rounded-full px-2 py-0.5 transition-colors",
                lang === "EN"
                  ? "bg-jgate-red text-white"
                  : scrolled
                    ? "text-jgate-slate hover:text-jgate-red"
                    : "text-white/70 hover:text-white"
              )}
            >
              EN
            </button>
            <button
              onClick={() => setLang("JP")}
              className={cn(
                "rounded-full px-2 py-0.5 transition-colors",
                lang === "JP"
                  ? "bg-jgate-red text-white"
                  : scrolled
                    ? "text-jgate-slate hover:text-jgate-red"
                    : "text-white/70 hover:text-white"
              )}
            >
              JP
            </button>
            <span
              className={cn(
                "mr-1 hidden rounded-full px-1.5 py-0.5 text-[9px] uppercase tracking-wide xl:inline",
                scrolled
                  ? "bg-jgate-gold/15 text-jgate-gold"
                  : "bg-white/15 text-white/80"
              )}
            >
              Soon
            </span>
          </div>

          {/* CTA */}
          <button
            onClick={() => handleNav("contact")}
            className="btn-shine hidden rounded-full bg-jgate-red px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-[#a80c26] hover:shadow-soft-lg sm:inline-flex"
          >
            Join J-Gate
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden",
              scrolled
                ? "text-jgate-navy hover:bg-jgate-navy/5"
                : "text-white hover:bg-white/10"
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden bg-jgate-pearl transition-all duration-300 lg:hidden",
          open ? "max-h-[640px] border-t border-jgate-navy/10 shadow-soft-lg" : "max-h-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link, i) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-base font-medium transition-all",
                  activeId === link.id
                    ? "bg-jgate-red/10 text-jgate-red"
                    : "text-jgate-navy hover:bg-jgate-navy/5",
                  open ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
                )}
              >
                {link.label}
                {activeId === link.id && (
                  <span className="h-2 w-2 rounded-full bg-jgate-red" />
                )}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 px-4 pb-5">
          <button
            onClick={() => handleNav("contact")}
            className="rounded-full bg-jgate-red px-5 py-3 text-center text-sm font-semibold text-white shadow-soft"
          >
            Join J-Gate
          </button>
          <div className="flex items-center justify-center gap-2 text-xs text-jgate-slate">
            <Globe className="h-3.5 w-3.5" />
            <span>EN</span>
            <span className="text-jgate-slate/40">/</span>
            <span>JP</span>
            <ChevronDown className="h-3 w-3" />
            <span className="rounded-full bg-jgate-gold/15 px-2 py-0.5 text-[10px] uppercase tracking-wide text-jgate-gold">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
