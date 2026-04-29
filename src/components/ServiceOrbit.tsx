import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../sections/Services";

const ORBIT_DURATION = 60;

/**
 * Service orbit — four cards positioned at 90° intervals around a
 * continuously-rotating circle. Click a card to zoom into a detail view
 * (number, title, description, bullets, link). Click "Back" to return
 * to the orbit. On mobile (below md) the orbit gracefully falls back
 * to a 2×2 grid that reuses the same zoom view.
 */
export default function ServiceOrbit() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        {active === null ? (
          <motion.div
            key="orbit"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.88 }}
            transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative"
          >
            {/* Desktop orbit */}
            <div className="hidden md:block relative mx-auto w-full max-w-[640px] aspect-square">
              <Orbit onSelect={setActive} />
            </div>
            {/* Mobile fallback — 2x2 grid that links into the same zoom view */}
            <div className="md:hidden grid grid-cols-2 gap-4">
              {services.map((s, i) => (
                <button
                  key={s.n}
                  onClick={() => setActive(i)}
                  className="card aspect-square p-5 flex flex-col justify-between text-left focus:outline-none focus:ring-2 focus:ring-gold/40"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
                    {s.n}
                  </p>
                  <div>
                    <h3 className="font-display font-light text-xl text-ivory leading-tight mb-2">
                      {s.t}
                    </h3>
                    <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-gold/70">
                      Tap →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <Zoom
            key={`zoom-${active}`}
            index={active}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function Orbit({ onSelect }: { onSelect: (i: number) => void }) {
  return (
    <>
      {/* Rotating outer ring carrying the cards */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: ORBIT_DURATION,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        {/* Decorative orbit rules */}
        <div className="absolute inset-[10%] rounded-full border border-gold/15" />
        <div className="absolute inset-[22%] rounded-full border border-gold/8 border-dashed" />

        {services.map((s, i) => {
          const angle = i * 90;
          return (
            <button
              key={s.n}
              onClick={() => onSelect(i)}
              className="absolute top-1/2 left-1/2 group focus:outline-none"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-37%) rotate(${-angle}deg)`,
              }}
              aria-label={`Open ${s.t}`}
            >
              {/* Counter-rotate so card text always reads upright */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: ORBIT_DURATION,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="card w-36 h-36 lg:w-44 lg:h-44 p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 group-hover:border-gold group-hover:scale-[1.05] group-focus:border-gold"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
                  {s.n}
                </p>
                <div className="text-left">
                  <h3 className="font-display font-light text-xl lg:text-2xl text-ivory leading-tight mb-2">
                    {s.t}
                  </h3>
                  <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-gold/70 group-hover:text-gold transition-colors">
                    Click →
                  </span>
                </div>
              </motion.div>
            </button>
          );
        })}
      </motion.div>

      {/* Center label */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="block font-mono text-[10px] uppercase tracking-[0.32em] text-gold mb-4"
          >
            Tap a service
          </motion.span>
          <span className="block font-display font-light text-4xl gold tracking-mark">
            AMARA
          </span>
          <span className="block mt-2 font-mono text-[9px] uppercase tracking-[0.42em] text-ivory/40">
            Digital
          </span>
        </div>
      </div>
    </>
  );
}

function Zoom({ index, onClose }: { index: number; onClose: () => void }) {
  const s = services[index];
  return (
    <motion.div
      key={`zoom-${index}`}
      initial={{ opacity: 0, scale: 0.55 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative w-full max-w-3xl mx-auto card p-8 md:p-14"
    >
      <button
        onClick={onClose}
        className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/55 hover:text-gold transition-colors mb-8"
      >
        <span
          aria-hidden
          className="inline-block transition-transform group-hover:-translate-x-1"
        >
          ←
        </span>
        Back to all services
      </button>

      <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-5">
        ◆ {s.n} · {s.short}
      </p>
      <h3 className="font-display font-light text-4xl md:text-6xl text-ivory leading-[1.02] tracking-[-0.01em] mb-8">
        {s.t}
      </h3>
      <p className="text-ivory/70 text-lg leading-relaxed mb-10 max-w-2xl">
        {s.body}
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-12">
        {s.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-3 text-ivory/65 text-sm"
          >
            <span className="mt-2 size-1 rounded-full bg-gold shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <Link to={s.to} className="btn-link-gold">
        Read the full {s.t.toLowerCase()} brief
        <span aria-hidden>→</span>
      </Link>
    </motion.div>
  );
}
