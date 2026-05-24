import { ContactCTA } from "@/components/ContactCTA";
import { Hero } from "@/components/Hero";
import { audiences, iconMap, pages } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pages.whoWeServe);

function AudienceWaveBadge({ icon }: { icon: keyof typeof iconMap }) {
  const Icon = iconMap[icon];

  return (
    <div className="audience-card__visual" aria-hidden="true">
      <svg className="audience-card__waves" viewBox="0 0 168 124" fill="none" xmlns="http://www.w3.org/2000/svg">
        {[16, 44, 72, 100].map((y) => (
          <path
            key={y}
            d={`M6 ${y}C18 ${y} 20 ${y - 12} 34 ${y - 12}C48 ${y - 12} 50 ${y} 64 ${y}C78 ${y} 80 ${y - 12} 94 ${y - 12}C108 ${y - 12} 110 ${y} 124 ${y}C138 ${y} 140 ${y - 12} 154 ${y - 12}C164 ${y - 12} 166 ${y - 6} 168 ${y - 4}`}
            pathLength="1"
          />
        ))}
      </svg>
      <div className="audience-card__glass">
        <Icon size={26} strokeWidth={1.9} />
      </div>
    </div>
  );
}

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
            {audiences.map((audience, index) => {
              return (
                <article
                  className="audience-card"
                  data-aos="zoom-in-up"
                  data-aos-delay={String(Math.min(index * 60, 300))}
                  data-aos-duration="700"
                  key={audience.title}
                >
                  <AudienceWaveBadge icon={audience.icon} />
                  <h3>{audience.title}</h3>
                  <p className="audience-card__description">{audience.description}</p>
                </article>
              );
            })}
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
