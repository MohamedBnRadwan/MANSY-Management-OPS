import { ContactCTA } from "@/components/ContactCTA";
import { Hero } from "@/components/Hero";
import { pages, insights } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pages.insights);

export default function InsightsPage() {
  return (
    <>
      <Hero
        eyebrow="Leasing Education Series"
        title={pages.insights.h1}
        intro={pages.insights.intro}
        image={pages.insights.image}
        imageAlt={pages.insights.imageAlt}
      />
      <section className="section">
        <div className="container insight-grid">
          {insights.map((insight, index) => (
            <article
              className="insight-card"
              data-aos="fade-up"
              data-aos-delay={String(Math.min(index * 80, 320))}
              key={insight.title}
            >
              <span>{insight.tag}</span>
              <h2>{insight.title}</h2>
              <p>{insight.text}</p>
            </article>
          ))}
        </div>
      </section>
      <ContactCTA title="Turn insight into asset performance." />
    </>
  );
}
