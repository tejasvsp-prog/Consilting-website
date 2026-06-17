import { Link } from "react-router-dom";
import Wordmark from "./Wordmark";

const siteLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Book a Demo" },
];

const serviceLinks = [
  { to: "/services/seo", label: "SEO" },
  { to: "/services/website-development", label: "Website Development" },
  { to: "/services/website-maintenance", label: "Website Maintenance" },
  { to: "/services/meta-ads", label: "Meta Ads" },
];

export default function Footer() {
  return (
    <footer className="relative bg-midnight text-ivory border-t border-gold/15 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Wordmark size="md" animate={false} />
            <p className="mt-6 max-w-md text-ivory/60 leading-relaxed">
              A Michigan-based digital marketing studio. SEO, websites,
              maintenance, and Meta Ads — engineered for revenue.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold mb-4">
              Site
            </p>
            <ul className="space-y-2 text-ivory/80 text-sm">
              {siteLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold mb-4">
              Services
            </p>
            <ul className="space-y-2 text-ivory/80 text-sm">
              {serviceLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold mb-4">
              Direct
            </p>
            <a
              href="mailto:amaradigital@gmail.com"
              className="block text-ivory hover:text-gold transition-colors"
            >
              amaradigital@gmail.com
            </a>
            <a
              href="tel:+15173295868"
              className="block text-ivory/80 hover:text-gold transition-colors mt-2 font-mono text-sm tracking-wider"
            >
              +1 (517) 329-5868
            </a>
            <p className="mt-4 text-ivory/50 text-sm">Michigan, USA</p>
          </div>
        </div>

        <div className="gold-divider mt-16" />

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.24em] text-ivory/40">
          <span>
            © {new Date().getFullYear()} Amara Digital · All rights reserved
          </span>
          <span>Engineered in Michigan</span>
        </div>
      </div>

      {/* Continuously-scrolling giant wordmark — quiet, but never still */}
      <div className="border-t border-gold/10 overflow-hidden">
        <div
          className="marquee-track flex whitespace-nowrap font-display leading-none tracking-mark text-gold/[0.09] select-none"
          style={{ fontSize: "22vw" }}
          aria-hidden
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="px-12">
              AMARA — DIGITAL —
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
