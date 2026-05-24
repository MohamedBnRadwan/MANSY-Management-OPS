import { ContactCTA } from "@/components/ContactCTA";
import { Hero } from "@/components/Hero";
import { IconList } from "@/components/IconList";
import { pages, methodSteps } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pages.method);

export default function MethodPage() {
  return (
    <>
      <Hero
        eyebrow="The Mansy Method"
        title={pages.method.h1}
        intro={pages.method.intro}
        image={pages.method.image}
        imageAlt={pages.method.imageAlt}
      />
      <section className="section">
        <div className="container split">
          <div data-aos="fade-right">
            <p className="eyebrow">The performance cycle</p>
            <h2>This is the difference between filling units and building value.</h2>
            <p className="intro-copy">
              The method keeps leasing, tenant mix, management, and optimization connected so owners can
              control the property instead of reacting to it.
            </p>
          </div>
          <IconList items={methodSteps} />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
