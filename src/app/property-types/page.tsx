import { ContactCTA } from "@/components/ContactCTA";
import { Hero } from "@/components/Hero";
import { pages, propertyTypes } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pages.propertyTypes);

export default function PropertyTypesPage() {
  return (
    <>
      <Hero
        eyebrow="Property types"
        title={pages.propertyTypes.h1}
        intro={pages.propertyTypes.intro}
        image={pages.propertyTypes.image}
        imageAlt={pages.propertyTypes.imageAlt}
      />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Assets we manage</p>
            <h2>Every location has a role. Every asset deserves structure.</h2>
          </div>
          <div className="property-grid">
            {propertyTypes.map((type, index) => (
              <article data-aos="fade-up" data-aos-delay={String(Math.min(index * 60, 300))} key={type}>
                <h3>{type}</h3>
                <p>Managed through the right tenant mix, leasing direction, and performance discipline.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
