import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p>The page may have moved, but the asset strategy is still here.</p>
        <Link className="button button--primary" href="/">
          Return Home
        </Link>
      </div>
    </section>
  );
}
