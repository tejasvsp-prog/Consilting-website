import { motion } from "framer-motion";
import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="relative bg-midnight text-ivory border-t border-gold/15">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Wordmark size="md" animate={false} />
            <p className="mt-6 max-w-md text-ivory/60 leading-relaxed">
              A Michigan-based growth studio engineering revenue for ambitious
              brands. Meta Ads, websites, SEO, and AI automation — built to
              perform.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold mb-4">
              Site
            </p>
            <ul className="space-y-2 text-ivory/80 text-sm">
              <li><a className="hover:text-gold transition-colors" href="#services">Services</a></li>
              <li><a className="hover:text-gold transition-colors" href="#why">Why Amara</a></li>
              <li><a className="hover:text-gold transition-colors" href="#results">Results</a></li>
              <li><a className="hover:text-gold transition-colors" href="#voices">Voices</a></li>
              <li><a className="hover:text-gold transition-colors" href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold mb-4">
              Studio
            </p>
            <ul className="space-y-2 text-ivory/80 text-sm">
              <li>Michigan, USA</li>
              <li>Mon – Fri</li>
              <li>09:00 – 18:00 ET</li>
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
          </div>
        </div>

        <div className="gold-divider mt-16" />

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.24em] text-ivory/40">
          <span>© {new Date().getFullYear()} Amara Digital · All rights reserved</span>
          <span>Engineered in Michigan</span>
        </div>
      </div>

      <div className="overflow-hidden border-t border-gold/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.08 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="font-display text-[22vw] leading-none tracking-mark text-gold select-none whitespace-nowrap"
        >
          AMARA — DIGITAL —
        </motion.div>
      </div>
    </footer>
  );
}
