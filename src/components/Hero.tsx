import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

type HeroProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function Hero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__media">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" />
        <div className="hero__shade" />
      </div>
      <div className="container hero__content" data-aos="fade-up">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p>{intro}</p>
        {(primaryHref && primaryLabel) || (secondaryHref && secondaryLabel) ? (
          <div className="button-row">
            {primaryHref && primaryLabel ? <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink> : null}
            {secondaryHref && secondaryLabel ? (
              <ButtonLink href={secondaryHref} variant="ghost">
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
