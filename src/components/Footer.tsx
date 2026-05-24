import Link from "next/link";
import { navItems, servicePillars } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo invert />
          <p>
            A property management and leasing strategy company focused on commercial,
            administrative, retail, and mixed-use assets.
          </p>
        </div>
        <div>
          <h2>Pages</h2>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Services</h2>
          <ul>
            {servicePillars.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-promise">
          <h2>Brand Promise</h2>
          <p>We control the cycle. You see the results.</p>
          <p>Managed with strategy. Built for performance.</p>
        </div>
      </div>
    </footer>
  );
}
