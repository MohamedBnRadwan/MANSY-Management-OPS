import { ContactCTA } from "@/components/ContactCTA";
import { Hero } from "@/components/Hero";
import { audiences, pages } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pages.whoWeServe);

export default function WhoWeServePage() {
  return (
    <>
      <Hero
        eyebrow="Who we serve"
        title={pages.whoWeServe.h1}
        intro={pages.whoWeServe.intro}
        image={pages.whoWeServe.image}
        imageAlt={pages.whoWeServe.imageAlt}
      />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">We work with</p>
            <h2>Owners, developers, and asset leaders who need structure.</h2>
          </div>
          <div className="audience-grid">
            {audiences.map((audience, index) => (
              <article data-aos="fade-up" data-aos-delay={String(Math.min(index * 60, 300))} key={audience}>
                <span>{audience.charAt(0)}</span>
                <h3>{audience}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--navy">
        <div className="container split">
          <h2 data-aos="fade-right">We are built for assets that need structure, not just exposure.</h2>
          <p data-aos="fade-left">
            Owners should not be reacting to the property. Owners should be controlling it through
            positioning, tenant selection, leasing structure, operations, and performance review.
          </p>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
