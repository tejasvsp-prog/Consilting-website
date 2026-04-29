import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Wordmark from "./Wordmark";

const links = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/clients", label: "Clients" },
];

const PHONE_DISPLAY = "(517) 329-5868";
const PHONE_HREF = "tel:+15173295868";

export default function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 200],
    ["rgba(11,10,9,0.55)", "rgba(11,10,9,0.92)"]
  );
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <motion.header
      style={{ background: bg }}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-gold/10"
    >
      {/* Top utility bar with phone */}
      <div className="border-b border-ivory/5">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-2 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] font-mono text-ivory/50">
          <span className="hidden sm:inline">Michigan, USA · Mon–Fri 9–6 ET</span>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 hover:text-gold transition-colors"
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            <PhoneIcon className="size-3.5" />
            <span>{PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-4 flex items-center justify-between">
        <Link
          to="/"
          aria-label="Amara Digital — home"
          title="Home"
          className="group inline-flex items-center text-ivory transition-colors hover:[&_span]:text-gold"
        >
          <Wordmark size="sm" animate={false} showTagline={false} />
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 text-xs uppercase tracking-[0.22em] font-medium transition-colors ${
                  isActive ? "text-gold" : "text-ivory/65 hover:text-gold"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            aria-label={`Call ${PHONE_DISPLAY}`}
            className="md:hidden inline-flex items-center justify-center size-10 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-midnight transition-colors"
          >
            <PhoneIcon className="size-4" />
          </a>
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-midnight bg-gold px-5 py-3 rounded-full font-semibold hover:bg-gold-200 transition-colors"
          >
            Book Demo
            <span aria-hidden>→</span>
          </Link>
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
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `py-3 text-sm uppercase tracking-[0.22em] border-b border-ivory/10 ${
                  isActive ? "text-gold" : "text-ivory/80"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="mt-4 btn-gold justify-center">
            Book Demo
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
