import Link from "next/link";
import { navItems } from "@/content/site";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="nav-cta" href="/contact">
          Discuss Your Asset
        </Link>
      </div>
    </header>
  );
}
