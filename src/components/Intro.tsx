import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";

type Props = { onDone: () => void };

/**
 * First-paint intro animation. Renders a fully-opaque midnight overlay
 * over the entire viewport so nothing is visible underneath. The
 * sequence — rule draws → AMARA letters cascade → hold → explosion
 * (gold shards fly outward radially, AMARA scales up and dissolves) →
 * overlay fades — runs once, then calls onDone so the page reveals.
 *
 * Total wall-clock: ~2.0s. Skipped if user prefers reduced motion.
 */
export default function Intro({ onDone }: Props) {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 60 gold shards, evenly distributed by angle, with jitter
  const shards = useMemo(() => {
    const n = 60;
    return Array.from({ length: n }, (_, i) => {
      const angle = (i / n) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
      const distance = 320 + Math.random() * 480;
      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        size: 1.5 + Math.random() * 4,
        delay: Math.random() * 0.06,
        duration: 0.85 + Math.random() * 0.45,
      };
    });
  }, []);

  // Trigger onDone after the full sequence
  useEffect(() => {
    const t = setTimeout(onDone, reduced ? 200 : 2000);
    return () => clearTimeout(t);
  }, [onDone, reduced]);

  if (reduced) {
    return (
      <motion.div
        className="fixed inset-0 z-[100] bg-midnight"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
    );
  }

  const letters = "AMARA".split("");

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-midnight overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.7, 0, 0.2, 1] }}
    >
      {/* Center stage */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Thin gold rule that draws first */}
        <motion.span
          aria-hidden
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.7,
            times: [0, 0.18, 0.7, 0.85],
            ease: [0.7, 0, 0.2, 1],
          }}
          style={{ originX: 0.5 }}
          className="block h-px w-40 md:w-64 bg-gold mb-8"
        />

        {/* AMARA — letters cascade in, then explode out */}
        <div className="font-display font-light tracking-mark text-ivory text-5xl md:text-7xl lg:text-8xl flex">
          {letters.map((l, i) => (
            <motion.span
              key={i}
              initial={{ y: "120%", opacity: 0 }}
              animate={{
                y: ["120%", "0%", "0%", "0%"],
                opacity: [0, 1, 1, 0],
                scale: [1, 1, 1, 3.2],
              }}
              transition={{
                duration: 1.7,
                times: [0, 0.22, 0.7, 0.95],
                delay: 0.12 + i * 0.05,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="inline-block"
              style={{ transformOrigin: "center" }}
            >
              {l}
            </motion.span>
          ))}
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 1.7,
            times: [0, 0.45, 0.7, 0.85],
          }}
          className="mt-4 font-mono text-[11px] md:text-sm uppercase tracking-[0.42em] text-gold"
        >
          Digital
        </motion.span>
      </div>

      {/* Explosion: 60 radial shards firing outward at the apex */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {shards.map((s, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold"
            style={{
              width: s.size,
              height: s.size,
              left: "50%",
              top: "50%",
            }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={{
              x: [0, 0, s.x],
              y: [0, 0, s.y],
              opacity: [0, 0, 1, 0],
              scale: [0, 0, 1, 0.3],
            }}
            transition={{
              duration: 1.6,
              times: [0, 0.7, 0.85, 1],
              delay: 0.7 + s.delay,
              ease: [0.2, 0.5, 0.3, 1],
            }}
          />
        ))}
      </div>

      {/* Shockwave ring at the explosion moment */}
      <motion.span
        aria-hidden
        className="absolute left-1/2 top-1/2 rounded-full border-2 border-gold"
        style={{ marginLeft: -2, marginTop: -2 }}
        initial={{ width: 4, height: 4, opacity: 0 }}
        animate={{
          width: [4, 4, 1200],
          height: [4, 4, 1200],
          opacity: [0, 0, 0.7, 0],
          x: ["-50%", "-50%", "-50%"],
          y: ["-50%", "-50%", "-50%"],
        }}
        transition={{
          duration: 1.7,
          times: [0, 0.7, 1],
          delay: 0.7,
          ease: [0.2, 0.5, 0.3, 1],
        }}
      />
    </motion.div>
  );
}
