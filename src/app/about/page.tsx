import { ContactCTA } from "@/components/ContactCTA";
import { Hero } from "@/components/Hero";
import { ImagePanel } from "@/components/ImagePanel";
import { SectionHeading } from "@/components/SectionHeading";
import { pages } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pages.about);

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="Who we are"
        title={pages.about.h1}
        intro={pages.about.intro}
        image={pages.about.image}
        imageAlt={pages.about.imageAlt}
      />
      <section className="section">
        <div className="container split split--center">
          <div data-aos="fade-right">
            <SectionHeading
              eyebrow="Positioning"
              title="A premium property management and leasing strategy company."
              text="Mansy Management Ops. is focused on assets that need structure, not just exposure. The company brings strategy, operational discipline, and performance focus to commercial real estate."
            />
            <div className="value-list">
              <span>Strategy driven</span>
              <span>Owner focused</span>
              <span>Tenant centered</span>
              <span>Performance oriented</span>
            </div>
          </div>
          <ImagePanel image={pages.about.image} alt={pages.about.imageAlt} caption="Managed with strategy. Built for performance." />
        </div>
      </section>
      <section className="section section--cream">
        <div className="container split">
          <h2 data-aos="fade-right">Our belief is simple: occupancy is not the goal.</h2>
          <p className="intro-copy" data-aos="fade-left">
            Sustainable performance is. The right tenant mix, clear positioning, strong leasing direction,
            reliable operations, and continuous review turn buildings into stronger assets.
          </p>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
