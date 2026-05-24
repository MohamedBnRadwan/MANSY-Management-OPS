import type { Metadata } from "next";
import type { PageContent, ServicePillar } from "@/content/site";

export function createPageMetadata(page: PageContent): Metadata {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: "website",
      images: [
        {
          url: page.image,
          alt: page.imageAlt,
        },
      ],
    },
  };
}

export function createServiceMetadata(service: ServicePillar): Metadata {
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.primaryKeyword, ...service.secondaryKeywords],
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: "website",
      images: [
        {
          url: service.image,
          alt: service.imageAlt,
        },
      ],
    },
  };
}
