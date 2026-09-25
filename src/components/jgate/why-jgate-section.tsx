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
        titleNode={tx({ EN: "The Strategic Investment Advantage", JP: "戦略的投資の優位性" })}
        subtitleNode={tx({
          EN: "Designed as a high cost-performance strategic investment — replacing typical India expansion costs of ¥15M–¥20M annually per expat.",
          JP: "駐在員1人あたり年間1,500万〜2,000万円かかる従来のインド進出コストを、高いコストパフォーマンスの戦略拠点モデルで大幅削減。",
        })}
      />
      <ComparisonTable />
      <PillarsDetail />
    </section>
  );
}
