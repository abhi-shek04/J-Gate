"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { JGateLogo } from "./icons";
import { useScrolled, useScrollSpy } from "./shared";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { id: "office-tour", label: "Spaces" },
  { id: "amenities", label: "Amenities" },
  { id: "team", label: "Team" },
  { id: "partners", label: "Partners" },
  { id: "advisory", label: "Advisory" },
  { id: "events", label: "Events" },
  { id: "contact", label: "Contact" },
];

const SPY_IDS = ["home", "office-tour", "amenities", "team", "partners", "advisory", "events", "contact"];

export function Navbar() {
  const scrolled = useScrolled(80);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "JP">("EN");
  const [showJpTooltip, setShowJpTooltip] = useState(false);
  const activeId = useScrollSpy(SPY_IDS, 140);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleJpClick = () => {
    setShowJpTooltip(true);
    setTimeout(() => setShowJpTooltip(false), 2800);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-frost" : "bg-transparent"
      )}
    >
      <nav
        className="container-jg flex h-[72px] items-center justify-between"
        aria-label="Primary"
      >
        {/* Logo */}
        <button
          onClick={() => handleNav("home")}
          className="group flex items-center"
          aria-label="J-Gate home"
        >
          <JGateLogo variant="light" className="transition-opacity duration-300 group-hover:opacity-90" />
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={cn(
                  "relative px-3 py-2 font-inter text-[14px] font-medium transition-colors",
                  "text-white/70 hover:text-white",
                  activeId === link.id && "text-white"
                )}
                style={{ letterSpacing: "0.01em" }}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-1 left-3 h-px bg-crimson transition-all duration-300",
                    activeId === link.id ? "w-[calc(100%-1.5rem)]" : "w-0"
                  )}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* EN | JP toggle with tooltip */}
          <div className="relative hidden items-center gap-1 sm:flex">
            <button
              onClick={() => setLang("EN")}
              className={cn(
                "px-1.5 py-1 font-inter text-xs font-semibold transition-colors",
                lang === "EN" ? "text-white" : "text-white/50 hover:text-white/80"
              )}
            >
              EN
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={handleJpClick}
              className={cn(
                "px-1.5 py-1 font-inter text-xs font-semibold transition-colors",
                "text-white/50 hover:text-white/80"
              )}
            >
              JP
            </button>
            {showJpTooltip && (
              <span
                className="absolute -bottom-12 right-0 whitespace-nowrap rounded-md bg-ink px-3 py-2 text-[11px] text-white shadow-hover"
                role="tooltip"
              >
                Japanese version coming soon
                <br />
                <span className="font-sans-jp">日本語版は近日公開予定</span>
                <span className="absolute -top-1 right-4 h-2 w-2 rotate-45 bg-ink" />
              </span>
            )}
          </div>

          {/* CTA — 6px radius, institutional */}
          <button
            onClick={() => handleNav("contact")}
            className="btn-shine hidden items-center gap-1.5 rounded-md bg-crimson px-5 py-2.5 font-inter text-[13px] font-semibold text-white transition-all duration-300 hover:bg-crimson-deep lg:inline-flex"
          >
            Book a Tour
            <ArrowRight className="h-3.5 w-3.5" />
          </button>

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

      {/* Mobile full-screen slide-down drawer */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] z-40 overflow-y-auto bg-midnight/97 backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <ul className="container-jg flex flex-col gap-1 py-8">
          {NAV_LINKS.map((link, i) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                className={cn(
                  "flex w-full items-center justify-between border-b border-white/8 py-4 text-left font-serif-jp text-xl font-medium transition-all",
                  activeId === link.id ? "text-crimson" : "text-white/85 hover:text-white",
                  open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                )}
              >
                {link.label}
                <ArrowRight className="h-4 w-4 text-white/30" />
              </button>
            </li>
          ))}
        </ul>
        <div className="container-jg flex flex-col gap-4 pb-12 pt-4">
          <button
            onClick={() => handleNav("contact")}
            className="btn-shine flex items-center justify-center gap-1.5 rounded-md bg-crimson px-5 py-3.5 font-inter text-sm font-semibold text-white"
          >
            Book a Tour
            <ArrowRight className="h-4 w-4" />
          </button>
          <div className="flex items-center justify-center gap-3 font-inter text-xs text-mist">
            <span className="text-white">EN</span>
            <span className="text-white/30">|</span>
            <button onClick={handleJpClick} className="hover:text-white">
              JP
            </button>
            <span className="rounded bg-saffron/15 px-2 py-0.5 text-[10px] uppercase text-saffron">
              Soon
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
