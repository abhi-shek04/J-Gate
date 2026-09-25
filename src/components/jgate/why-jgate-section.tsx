"use client";

import { PageHero } from "@/components/jgate/page-hero";
import { ComparisonTable } from "@/components/jgate/comparison-table";
import { PillarsDetail } from "@/components/jgate/pillars-detail";
import { useI18n } from "@/lib/i18n";

export function WhyJGateSection({ id }: { id?: string }) {
  const { tx } = useI18n();
  return (
    <section id={id} className="scroll-mt-20">
      <PageHero
        eyebrowKey="why.eyebrow"
        titleNode={tx({ EN: "Why J-Gate", JP: "J-Gateの強み" })}
        subtitleKey="why.title"
      />
      <ComparisonTable />
      <PillarsDetail />
    </section>
  );
}
