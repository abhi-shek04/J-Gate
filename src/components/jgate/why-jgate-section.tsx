"use client";

import { PageHero } from "@/components/jgate/page-hero";
import { ComparisonTable } from "@/components/jgate/comparison-table";
import { PillarsDetail } from "@/components/jgate/pillars-detail";
import { useI18n } from "@/lib/i18n";

export function WhyJGateSection({ id, hideHero }: { id?: string; hideHero?: boolean }) {
  const { tx } = useI18n();
  return (
    <section id={id} className="scroll-mt-20">
      {!hideHero && (
        <PageHero
          eyebrowKey="why.eyebrow"
          layout="center"
          titleNode={tx({ EN: "The Advantages of Choosing J-Gate", JP: "戦略的投資の優位性" })}
          subtitleNode={tx({
            EN: "Designed as a cost-effective solution — providing Japanese enterprises with a dedicated workspace and resident advisory in Hyderabad.",
            JP: "日系企業に最適化された戦略的拠点モデル — ハイデラバードでの専用執務環境と日本人常駐サポートを提供。",
          })}
          tags={[
            { EN: "Cost-Effective Operations", JP: "最適化された運営コスト" },
            { EN: "Dedicated Office Space", JP: "日系企業専用執務環境" },
            { EN: "Resident Japanese Advisory", JP: "現地日本人常駐サポート" },
          ]}
        />
      )}
      <ComparisonTable />
      <PillarsDetail />
    </section>
  );
}
