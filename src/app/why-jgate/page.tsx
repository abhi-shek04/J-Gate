"use client";

import { PageHero } from "@/components/jgate/page-hero";
import { ComparisonTable } from "@/components/jgate/comparison-table";
import { PillarsDetail } from "@/components/jgate/pillars-detail";
import { TestimonialsSection } from "@/components/jgate/testimonials-section";
import { WhyCTA } from "@/components/jgate/why-cta";
import { useI18n } from "@/lib/i18n";

export default function WhyJGatePage() {
  const { tx } = useI18n();
  return (
    <>
      <PageHero
        eyebrowKey="why.eyebrow"
        titleNode={tx({ EN: "Why J-Gate", JP: "J-Gateの強み" })}
        subtitleKey="why.title"
      />
      <ComparisonTable />
      <PillarsDetail />
      <TestimonialsSection />
      <WhyCTA />
    </>
  );
}
