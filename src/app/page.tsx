import { LightboxProvider } from "@/components/jgate/photo";
import { Navbar } from "@/components/jgate/navbar";
import { Hero } from "@/components/jgate/hero";
import { TrustStrip } from "@/components/jgate/trust-strip";
import { OfficeTour } from "@/components/jgate/office-tour";
import { Amenities } from "@/components/jgate/amenities";
import { Team } from "@/components/jgate/team";
import { WhyBeyond } from "@/components/jgate/why-beyond";
import { Membership } from "@/components/jgate/membership";
import { Partners } from "@/components/jgate/partners";
import { Inauguration } from "@/components/jgate/inauguration";
import { Testimonials } from "@/components/jgate/testimonials";
import { Events } from "@/components/jgate/events";
import { Faq } from "@/components/jgate/faq";
import { FinalCta } from "@/components/jgate/final-cta";
import { Contact } from "@/components/jgate/contact";
import { Footer } from "@/components/jgate/footer";

export default function Home() {
  return (
    <LightboxProvider>
      <div className="flex min-h-screen flex-col bg-ivory">
        <Navbar />
        <main className="flex-1">
          {/* 1. Hero — midnight, torii watermark, particles */}
          <Hero />
          {/* 2. Trust Strip — partner name tiles */}
          <TrustStrip />
          {/* 3. The Space — masonry office photo grid + lightbox */}
          <OfficeTour />
          {/* 4. Amenities — navy, hotel spec sheet + photo cards */}
          <Amenities />
          {/* 5. The Team — founders + team grid + advisory (id=advisory) */}
          <Team />
          {/* 6. Why Beyond Coworking — midnight, 6-feature glass grid */}
          <WhyBeyond />
          {/* 7. Membership — 3 plans with header photos */}
          <Membership />
          {/* 8. Partners — navy, strategic cards with photos + marquee */}
          <Partners />
          {/* 9. Inauguration Story — editorial photos + 7-node timeline */}
          <Inauguration />
          {/* 10. Testimonials — 3 cards with photos */}
          <Testimonials />
          {/* 11. Events — horizontal photo strip + news cards */}
          <Events />
          {/* 12. FAQ — 8-question accordion */}
          <Faq />
          {/* 13. Final CTA — midnight, torii watermark */}
          <FinalCta />
          {/* 14. Contact — form + details + map + social */}
          <Contact />
        </main>
        <Footer />
      </div>
    </LightboxProvider>
  );
}
