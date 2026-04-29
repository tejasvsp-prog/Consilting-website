import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-ivory overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-24 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="border-b border-ivory/15 pb-14 mb-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-ivory/60 mb-6">
            Bring us the problem
          </p>
          <h3 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-4xl">
            Let's draw the next line — together.
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-10 text-sm uppercase tracking-[0.22em] border-b border-ivory/40 pb-1 hover:border-rust hover:text-rust transition-colors"
          >
            Contact for pricing
            <span aria-hidden>→</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Wordmark size="md" animateBar={false} />
            <p className="mt-6 max-w-md text-ivory/70 leading-relaxed">
              An independent advisory shaped in India, serving clients across
              every sector. We tailor scope, depth and pricing to the work — not
              the other way around.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-ivory/50 mb-4">
              Sitemap
            </p>
            <ul className="space-y-2 text-ivory/85">
              <li><Link className="hover:text-rust transition-colors" to="/">Home</Link></li>
              <li><Link className="hover:text-rust transition-colors" to="/services">Services</Link></li>
              <li><Link className="hover:text-rust transition-colors" to="/process">Process</Link></li>
              <li><Link className="hover:text-rust transition-colors" to="/work">Voices</Link></li>
              <li><Link className="hover:text-rust transition-colors" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-ivory/50 mb-4">
              Get in touch
            </p>
            <a
              href="mailto:hello@consilting.in"
              className="block text-ivory hover:text-rust transition-colors"
            >
              hello@consilting.in
            </a>
            <p className="text-ivory/60 text-sm mt-3 leading-relaxed">
              No social channels — yet. Email is the front door.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.24em] text-ivory/50">
          <span>© {new Date().getFullYear()} Consilting</span>
          <span>Designed &amp; built in India</span>
        </div>
      </div>

      <div className="overflow-hidden border-t border-ivory/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="font-display text-[22vw] leading-none tracking-mark text-ivory/10 select-none whitespace-nowrap"
        >
          CONSILTING — CONSILTING —
        </motion.div>
      </div>
    </footer>
  );
}
