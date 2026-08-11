import { Navbar } from "@/components/jgate/navbar";
import { Hero } from "@/components/jgate/hero";
import { About } from "@/components/jgate/about";
import { WhyJGate } from "@/components/jgate/why-jgate";
import { Services } from "@/components/jgate/services";
import { Team } from "@/components/jgate/team";
import { Blogs } from "@/components/jgate/blogs";
import { SocialProof } from "@/components/jgate/social-proof";
import { Contact } from "@/components/jgate/contact";
import { Footer } from "@/components/jgate/footer";
import { BrochureModal } from "@/components/jgate/brochure-modal";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <WhyJGate />
        <Services />
        <Team />
        <Blogs />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
      {/* Gated brochure download modal — opens from navbar/hero/footer CTA */}
      <BrochureModal />
    </div>
  );
}
