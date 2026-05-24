import { ArrowUpRight } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { Hero } from "@/components/Hero";
import { IconList } from "@/components/IconList";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { methodSteps, pages, performanceStats, servicePillars } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pages.home);

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Property management company"
        title={pages.home.h1}
        intro={pages.home.intro}
        image={pages.home.image}
        imageAlt={pages.home.imageAlt}
        video="/assets/videos/home-hero-commercial-building.mp4"
        primaryHref="/services"
        primaryLabel="Explore Services"
        secondaryHref="/method"
        secondaryLabel="See the Method"
      />

      <section className="section section--cream">
        <div className="container split">
          <div data-aos="fade-right">
            <p className="eyebrow">Brand promise</p>
            <h2>We do not just lease spaces. We build performing assets.</h2>
          </div>
          <div className="intro-copy" data-aos="fade-left">
            <p>
              Every tenant affects the next tenant. Every vacancy affects perception. Every weak operation
              affects long-term value. Every wrong leasing decision changes the future of the asset.
            </p>
            <p className="signature-line">We control the cycle. You see the results.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Core services"
            title="Strategy-led management for commercial assets."
            text="The website service architecture is built around the three public pillars most useful to owners and developers."
          />
          <div className="service-grid">
            {servicePillars.map((service, index) => (
              <ServiceCard index={index} key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container split split--center">
          <div data-aos="fade-right">
            <p className="eyebrow">The Mansy Method</p>
            <h2>Analyze. Position. Lease. Manage. Optimize.</h2>
            <p>
              This is how property becomes a managed asset, not just rented space. Each step protects
              long-term value and keeps the asset moving toward better performance.
            </p>
            <a className="text-link text-link--light" href="/method">
              View the method <ArrowUpRight size={18} />
            </a>
          </div>
          <IconList items={methodSteps} />
        </div>
      </section>

      <section className="section">
        <div className="container stats-strip">
          {performanceStats.map((stat) => (
            <div data-aos="fade-up" key={stat}>
              <span>{stat.split(" ")[0]}</span>
              <p>{stat.replace(stat.split(" ")[0], "").trim()}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
