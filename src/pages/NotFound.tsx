import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <section className="min-h-[80vh] flex items-center pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
            ◆ 404
          </p>
          <h1 className="font-display font-light text-6xl md:text-8xl leading-[0.98] tracking-[-0.02em] mb-8">
            Page <span className="gold italic">not found.</span>
          </h1>
          <p className="text-ivory/65 mb-10 leading-relaxed">
            The link is broken or the page has moved. Head back to the studio
            and try again.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="btn-gold">
              Back to home
              <span aria-hidden>→</span>
            </Link>
            <Link to="/services" className="btn-ghost-gold">
              See services
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
