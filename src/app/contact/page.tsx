import { Mail, MapPin, Phone } from "lucide-react";
import { AssetGuidance } from "@/components/AssetGuidance";
import { Hero } from "@/components/Hero";
import { pages } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pages.contact);

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title={pages.contact.h1}
        intro={pages.contact.intro}
        image={pages.contact.image}
        imageAlt={pages.contact.imageAlt}
      />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-panel" data-aos="fade-right">
            <p className="eyebrow">Start the conversation</p>
            <h2>Bring the asset, vacancy, leasing, or performance question.</h2>
            <p>
              Mansy Management Ops. will help define whether the next step is positioning, tenant mix,
              leasing management, operational control, or performance optimization.
            </p>
            <div className="contact-methods">
              <a href="mailto:info@mansymanagementops.com">
                <Mail size={20} /> info@mansymanagementops.com
              </a>
              <a href="tel:+200000000000">
                <Phone size={20} /> +20 000 000 0000
              </a>
              <span>
                <MapPin size={20} /> Cairo, Egypt
              </span>
            </div>
          </div>
          <form className="contact-form" data-aos="fade-left">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
            <label>
              Asset type
              <select name="asset-type" defaultValue="">
                <option value="" disabled>
                  Select asset type
                </option>
                <option>Commercial strips</option>
                <option>Retail units</option>
                <option>Administrative buildings</option>
                <option>Office spaces</option>
                <option>Mixed-use developments</option>
                <option>Underperforming assets</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" placeholder="Tell us what needs to improve." rows={5} />
            </label>
            <button type="submit">Send Inquiry</button>
          </form>
        </div>
      </section>
      <AssetGuidance />
    </>
  );
}
