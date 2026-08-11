import { Navbar } from "@/components/jgate/navbar";
import { Hero } from "@/components/jgate/hero";
import { About } from "@/components/jgate/about";
import { Features } from "@/components/jgate/features";
import { Partners } from "@/components/jgate/partners";
import { Advisory } from "@/components/jgate/advisory";
import { FoundingTeam } from "@/components/jgate/founding-team";
import { Timeline } from "@/components/jgate/timeline";
import { Pricing } from "@/components/jgate/pricing";
import { Testimonials } from "@/components/jgate/testimonials";
import { Events } from "@/components/jgate/events";
import { Contact } from "@/components/jgate/contact";
import { Footer } from "@/components/jgate/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-jgate-pearl">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Partners />
        <Advisory />
        <FoundingTeam />
        <Timeline />
        <Pricing />
        <Testimonials />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
