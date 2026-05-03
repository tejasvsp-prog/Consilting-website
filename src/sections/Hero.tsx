import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMemo, useRef } from "react";

/**
 * Hero — Amara / Digital split-line typography.
 *
 * The wordmark animation is a single shared timeline:
 *   1. A continuous gold beam traces left → right across the entire
 *      hero, with a bright leading dot.
 *   2. The dot crosses Amara first; Amara reveals via clip-path and
 *      flashes brighter as the beam passes.
 *   3. The dot keeps moving and crosses Digital; Digital reveals and
 *      flashes the same way.
 *   4. After the beam exits, both words settle into a soft gold
 *      glow that pulses gently.
 *
 * Every step runs on pure CSS so it fires on first paint regardless
 * of tab focus, route changes, or React/framer-motion mount timing.
 */
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yShift = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduce ? "0%" : "-12%"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-32 pb-24"
    >
      <DriftingParticles />

      {/* Tag top-left */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute top-32 md:top-40 left-6 md:left-10 flex items-center gap-3 z-20"
      >
        <motion.span
          className="size-1.5 rounded-full bg-gold"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-ivory/55">
          Michigan · Growth Studio
        </span>
      </motion.div>

      <motion.div style={{ y: yShift, opacity }} className="relative w-full">
        {/* Top row: Amara */}
        <div className="flex items-center w-full">
          <span
            aria-label="Amara"
            className="hero-word hero-word--amara font-display font-light text-[24vw] md:text-[16vw] leading-[0.86] tracking-[-0.012em] text-ivory pl-6 md:pl-10 whitespace-nowrap"
          >
            Amara
          </span>
          <span
            aria-hidden
            className="hidden md:block flex-1 h-px bg-gold/40 ml-8 origin-left scale-x-0 animate-[heroRule_0.9s_cubic-bezier(0.7,0,0.3,1)_2.0s_forwards]"
          />
        </div>

        {/* Bottom row: Digital, right-aligned */}
        <div className="flex items-center w-full mt-3 md:mt-6 justify-end">
          <span
            aria-hidden
            className="hidden md:flex flex-1 items-center mr-8"
          >
            <span className="flex-1 h-px bg-gold/40 origin-left scale-x-0 animate-[heroRule_0.9s_cubic-bezier(0.7,0,0.3,1)_3.4s_forwards]" />
            <ArrowTip />
          </span>
          <span
            aria-label="Digital."
            className="hero-word hero-word--digital font-display font-light italic text-[24vw] md:text-[16vw] leading-[0.86] tracking-[-0.012em] gold pr-6 md:pr-10 whitespace-nowrap"
          >
            Digital.
          </span>
        </div>

        {/* Single global tracer — runs left-to-right across the entire
            hero. Renders only on md+ where the split layout makes
            sense; on mobile the words stack and the tracer is moot. */}
        <div className="hero-tracer hidden md:block" aria-hidden>
          <span className="hero-tracer__line" />
          <span className="hero-tracer__dot" />
        </div>
      </motion.div>

      {/* Mobile vertical connector */}
      <motion.span
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.2, duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
        style={{ originY: 0 }}
        aria-hidden
        className="md:hidden absolute right-12 top-[42%] w-px h-12 bg-gold"
      />

      {/* Whisper bottom-left */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.0, duration: 0.7 }}
        className="absolute bottom-24 md:bottom-28 left-6 md:left-10 max-w-xs font-display text-2xl md:text-3xl text-ivory leading-tight z-20"
      >
        We engineer{" "}
        <span className="gold italic">revenue.</span>
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 1 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center gap-3 text-ivory/35 z-20"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.32em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-10 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}

function ArrowTip() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="text-gold shrink-0 -ml-px"
      aria-hidden
    >
      <path d="M3 11h16M14 5l6 6-6 6" />
    </svg>
  );
}

/* ─── DriftingParticles — quiet ambient gold particles ─────────── */

function DriftingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, () => ({
        x: Math.random() * 100,
        delay: Math.random() * 7,
        duration: 9 + Math.random() * 8,
        size: 1 + Math.random() * 2,
        opacity: 0.25 + Math.random() * 0.45,
      })),
    []
  );
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${p.x}%`,
            bottom: -10,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{ y: [0, -520], opacity: [0, p.opacity, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
