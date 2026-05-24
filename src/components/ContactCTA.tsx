import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "./ButtonLink";

type ContactCTAProps = {
  title?: string;
  text?: string;
};

export function ContactCTA({
  title = "Your asset. Our focus. Exceptional results.",
  text = "If the asset needs structure, stronger leasing direction, or better performance, Mansy Management Ops. can help define the next move.",
}: ContactCTAProps) {
  return (
    <section className="cta-band" data-aos="fade-up">
      <div className="container cta-band__inner">
        <div>
          <p className="eyebrow">Start with clarity</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <ButtonLink href="/contact">
          Discuss Your Asset <ArrowUpRight size={18} />
        </ButtonLink>
      </div>
    </section>
  );
}
