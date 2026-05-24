"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/content/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header className={`site-header ${isOpen ? "site-header--open" : ""}`}>
      <div className="container header-inner">
        <div className="header-brand">
          <Logo />
          <button
            type="button"
            className="mobile-nav-toggle"
            aria-controls="site-nav-panel"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div className={`header-panel ${isOpen ? "is-open" : ""}`} id="site-nav-panel">
          <div className="header-panel__inner">
            <nav className="site-nav" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className={isActive(item.href) ? "is-active" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link className="nav-cta" href="/contact" onClick={() => setIsOpen(false)}>
              Discuss Your Asset
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
