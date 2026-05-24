"use client";

import AOS from "aos";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import "aos/dist/aos.css";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function AosProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) {
      document.documentElement.classList.add("reduced-motion");
      return;
    }

    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      mirror: true,
      offset: 90,
      once: false,
    });

    return () => {
      document.documentElement.classList.remove("reduced-motion");
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    window.setTimeout(() => {
      AOS.refreshHard();
    }, 80);
  }, [pathname]);

  return null;
}
