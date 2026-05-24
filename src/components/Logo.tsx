import Link from "next/link";

type LogoProps = {
  invert?: boolean;
};

export function Logo({ invert = false }: LogoProps) {
  return (
    <Link className={`logo ${invert ? "logo--invert" : ""}`} href="/" aria-label="Mansy Management Ops. home">
      <span className="logo__mark" aria-hidden="true">
        M
      </span>
      <span className="logo__text">
        <strong>Mansy</strong>
        <span>Management Ops.</span>
      </span>
    </Link>
  );
}
