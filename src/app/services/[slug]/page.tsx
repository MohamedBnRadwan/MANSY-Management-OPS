import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { Hero } from "@/components/Hero";
import { IconList } from "@/components/IconList";
import { ImagePanel } from "@/components/ImagePanel";
import { servicePillars } from "@/content/site";
import { createServiceMetadata } from "@/lib/metadata";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePillars.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicePillars.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return createServiceMetadata(service);
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicePillars.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Hero
        eyebrow={service.eyebrow}
        title={service.h1}
        intro={service.intro}
        image={service.image}
        imageAlt={service.imageAlt}
        primaryHref="/contact"
        primaryLabel="Discuss This Service"
        secondaryHref="/services"
        secondaryLabel="All Services"
      />
      <section className="section">
        <div className="container split split--center">
          <div data-aos="fade-right">
            <p className="eyebrow">{service.title}</p>
            <h2>{service.promise}</h2>
            <p className="intro-copy">{service.summary}</p>
            <div className="outcome-row">
              {service.outcomes.map((outcome, index) => (
                <span data-aos="fade-up" data-aos-delay={String(Math.min(index * 70, 280))} key={outcome}>
                  {outcome}
                </span>
              ))}
            </div>
          </div>
          <ImagePanel image={service.image} alt={service.imageAlt} caption={service.promise} />
        </div>
      </section>
      <section className="section section--cream">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Sub-services</p>
            <h2>What this includes.</h2>
          </div>
          <div className="detail-grid">
            {service.subServices.map((item, index) => (
              <article
                className="detail-card"
                data-aos="fade-up"
                data-aos-delay={String(Math.min(index * 70, 280))}
                id={item.id}
                key={item.id}
              >
                <span aria-hidden="true">
                  <ArrowRight size={20} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--navy">
        <div className="container split">
          <div data-aos="fade-right">
            <p className="eyebrow">Performance logic</p>
            <h2>Every decision should strengthen the asset.</h2>
            <p>
              Each service connects owner goals, tenant behavior, operational standards, and measurable
              performance so the property does not simply fill space. It builds value.
            </p>
          </div>
          <IconList
            items={service.outcomes.map((outcome) => ({
              title: outcome,
              text: "A practical performance outcome for stronger long-term asset value.",
              icon: service.icon,
            }))}
          />
        </div>
      </section>
      <ContactCTA title={`Ready to improve ${service.title.toLowerCase()}?`} />
    </>
  );
}
