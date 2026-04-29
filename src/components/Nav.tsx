import { NavLink, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Wordmark from "./Wordmark";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/work", label: "Voices" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const loc = useLocation();
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-ivory/70 border-b border-ink/10"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-5 flex items-center justify-between">
        <Link to="/" className="text-ink">
          <Wordmark size="sm" animateBar={loc.pathname === "/"} />
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm uppercase tracking-[0.18em] font-medium transition-colors ${
                  isActive ? "text-ink" : "text-ink/60 hover:text-ink"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{l.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-1 h-px bg-rust"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-ink hover:text-rust transition-colors"
        >
          <span className="size-1.5 rounded-full bg-rust" />
          Contact for pricing
        </Link>
      </div>
    </motion.header>
  );
}
