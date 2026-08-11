import { Navbar } from "@/components/jgate/navbar";
import { Hero } from "@/components/jgate/hero";
import { Difference } from "@/components/jgate/difference";
import { About } from "@/components/jgate/about";
import { WhyHyderabad } from "@/components/jgate/why-hyderabad";
import { Pricing } from "@/components/jgate/pricing";
import { Features } from "@/components/jgate/features";
import { Partners } from "@/components/jgate/partners";
import { Advisory } from "@/components/jgate/advisory";
import { FoundingTeam } from "@/components/jgate/founding-team";
import { Timeline } from "@/components/jgate/timeline";
import { Testimonials } from "@/components/jgate/testimonials";
import { Events } from "@/components/jgate/events";
import { Faq } from "@/components/jgate/faq";
import { FinalCta } from "@/components/jgate/final-cta";
import { Contact } from "@/components/jgate/contact";
import { Footer } from "@/components/jgate/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero — midnight, torii watermark */}
        <Hero />
        {/* 2. The J-Gate Difference — ivory, 3-col differentiator */}
        <Difference />
        {/* 3. About / Our Story — navy, Venn diagram, pull quote */}
        <About />
        {/* 4. Why Hyderabad — ivory-warm, 4 stats + Cyber Gateway */}
        <WhyHyderabad />
        {/* 5. Membership & Workspace — ivory, 3 pricing tiers */}
        <Pricing />
        {/* 6. Full Feature Breakdown — navy, 9-card glass grid */}
        <Features />
        {/* 7. Ecosystem & Partners — ivory, strategic + community + marquee */}
        <Partners />
        {/* 8. Advisory Council — navy, full bios + pull quotes */}
        <Advisory />
        {/* 9. Founding Team — ivory, 60/40 split */}
        <FoundingTeam />
        {/* 10. Inauguration Timeline — midnight, 7 events */}
        <Timeline />
        {/* 11. Testimonials — ivory, 3 cards */}
        <Testimonials />
        {/* 12. Events & News — ivory-warm, 3 cards + teaser */}
        <Events />
        {/* 13. FAQ — ivory, 8-question accordion */}
        <Faq />
        {/* 14. Final CTA — midnight, torii watermark, 3 CTAs */}
        <FinalCta />
        {/* 15. Contact — navy, form + details */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
