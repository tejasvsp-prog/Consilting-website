import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Wordmark from "./Wordmark";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Amara" },
  { href: "#results", label: "Results" },
  { href: "#voices", label: "Voices" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 200], [4, 18]);
  const bg = useTransform(
    scrollY,
    [0, 200],
    ["rgba(11,10,9,0.4)", "rgba(11,10,9,0.85)"]
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <motion.header
      style={{ backdropFilter: useTransform(blur, (b) => `blur(${b}px)`), background: bg }}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed top-0 inset-x-0 z-50 border-b border-gold/10"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#top" className="text-ivory">
          <Wordmark size="sm" animate={false} />
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-xs uppercase tracking-[0.22em] font-medium text-ivory/65 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-midnight bg-gradient-to-r from-gold-200 via-gold to-gold-600 px-5 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          Get Started
          <span aria-hidden>→</span>
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-ivory"
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-px bg-current transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-current transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        className="md:hidden overflow-hidden border-t border-gold/10 bg-midnight/95"
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm uppercase tracking-[0.22em] text-ivory/80 border-b border-ivory/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 btn-gold justify-center"
          >
            Get Started
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
