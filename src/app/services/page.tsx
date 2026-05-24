import { ContactCTA } from "@/components/ContactCTA";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { pages, servicePillars } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pages.services);

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Our services"
        title={pages.services.h1}
        intro={pages.services.intro}
        image={pages.services.image}
        imageAlt={pages.services.imageAlt}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Service architecture"
            title="Three public pillars. One full performance cycle."
            text="The detailed services from the company profile are grouped below so owners can understand the offer clearly without navigating a fragmented service list."
          />
          <div className="service-grid">
            {servicePillars.map((service, index) => (
              <ServiceCard index={index} key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <section className="section section--mist">
        <div className="container process-line">
          <span data-aos="fade-up">Asset Positioning</span>
          <span data-aos="fade-up" data-aos-delay="80">Tenant Mix Strategy</span>
          <span data-aos="fade-up" data-aos-delay="160">Commercial Leasing Strategy</span>
          <span data-aos="fade-up" data-aos-delay="240">Property Management</span>
          <span data-aos="fade-up" data-aos-delay="320">Facility Coordination</span>
          <span data-aos="fade-up" data-aos-delay="400">Performance Optimization</span>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
