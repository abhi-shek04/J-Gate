"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

/* ============================================================
   BrochureModal context — open/close the gated brochure
   download modal from anywhere (navbar CTA, hero CTA, etc.)
   ============================================================ */

type BrochureContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const BrochureContext = createContext<BrochureContextType | null>(null);

export function BrochureProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BrochureContext.Provider
      value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}
    </BrochureContext.Provider>
  );
}

export function useBrochure() {
  const ctx = useContext(BrochureContext);
  if (!ctx) return { isOpen: false, open: () => {}, close: () => {} };
  return ctx;
}
