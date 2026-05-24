import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServicePillar } from "@/content/site";
import { iconMap } from "@/content/site";

type ServiceCardProps = {
  service: ServicePillar;
  index?: number;
};

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <Link
      className="service-card"
      data-aos="fade-up"
      data-aos-delay={String(Math.min(index * 90, 270))}
      href={`/services/${service.slug}`}
    >
      <span className="service-card__icon" aria-hidden="true">
        <Icon size={28} strokeWidth={1.8} />
      </span>
      <span className="eyebrow">{service.eyebrow}</span>
      <h3>{service.title}</h3>
      <p>{service.intro}</p>
      <span className="text-link">
        Explore service <ArrowUpRight size={17} />
      </span>
    </Link>
  );
}
