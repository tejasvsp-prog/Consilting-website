import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMemo, useRef, useState } from "react";

/**
 * Hero — 3D TV/monitor displaying "Amara Digital" with mouse-driven
 * tilt, flanked by columns of flickering LED bars and surrounded by
 * subtle drifting gold particles. Replaces the previous split-line
 * typography hero. Premium midnight + gold styling, no neon.
 */
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yShift = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-32 pb-24"
    >
      <DriftingParticles />

      {/* Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6 }}
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

      <motion.div
        style={{ y: yShift, opacity }}
        className="relative w-full mx-auto max-w-7xl px-6 md:px-10"
      >
        <div className="grid grid-cols-12 gap-3 md:gap-6 items-center">
          {/* Left LED array */}
          <div className="col-span-12 md:col-span-2 flex md:flex-col items-center justify-center gap-2 md:gap-3 order-2 md:order-1">
            <LEDArray seed={0} />
          </div>

          {/* TV center */}
          <div className="col-span-12 md:col-span-8 order-1 md:order-2">
            <TV3D />
          </div>

          {/* Right LED array */}
          <div className="col-span-12 md:col-span-2 flex md:flex-col items-center justify-center gap-2 md:gap-3 order-3">
            <LEDArray seed={11} />
          </div>
        </div>
      </motion.div>

      {/* Bottom-left whisper */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.7 }}
        className="absolute bottom-24 md:bottom-28 left-6 md:left-10 max-w-xs font-display text-2xl md:text-3xl text-ivory leading-tight z-20"
      >
        We engineer{" "}
        <span className="gold italic">revenue.</span>
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
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

/* ─── 3D TV — central monitor with mouse tilt + scanlines ──────── */

function TV3D() {
  // Default rotation makes the 3D thickness obvious from the start.
  const BASE_RX = -8;
  const BASE_RY = 18;
  const DEPTH = 32; // px — TV thickness
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: y * -10, ry: x * 22 });
  }

  return (
    <div
      style={{ perspective: 1500 }}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
      className="relative max-w-[820px] mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative"
      >
        <motion.div
          animate={{
            rotateX: BASE_RX + tilt.rx,
            rotateY: BASE_RY + tilt.ry,
          }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative"
        >
          {/* Decorative gold stars surrounding the bezel */}
          <BezelStars />

          {/* Back panel — visible behind the TV at depth -DEPTH */}
          <div
            aria-hidden
            className="absolute inset-0 aspect-[16/10] rounded-3xl bg-gradient-to-b from-[#15120e] to-[#0b0a09] border border-gold/15"
            style={{ transform: `translateZ(-${DEPTH}px)` }}
          />

          {/* Top thickness slab */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-0 rounded-t-3xl bg-gradient-to-b from-coal to-obsidian border-x border-t border-gold/40"
            style={{
              height: `${DEPTH * 2}px`,
              transformOrigin: "top",
              transform: `rotateX(-90deg) translateZ(0px)`,
            }}
          />
          {/* Bottom thickness slab */}
          <div
            aria-hidden
            className="absolute left-0 right-0 bottom-0 rounded-b-3xl bg-gradient-to-b from-obsidian to-midnight border-x border-b border-gold/40"
            style={{
              height: `${DEPTH * 2}px`,
              transformOrigin: "bottom",
              transform: `rotateX(90deg) translateZ(0px)`,
            }}
          />
          {/* Right thickness slab */}
          <div
            aria-hidden
            className="absolute right-0 top-0 bottom-0 rounded-r-3xl bg-gradient-to-r from-coal to-obsidian border-y border-r border-gold/30"
            style={{
              width: `${DEPTH * 2}px`,
              transformOrigin: "right",
              transform: `rotateY(90deg) translateZ(0px)`,
            }}
          />
          {/* Left thickness slab */}
          <div
            aria-hidden
            className="absolute left-0 top-0 bottom-0 rounded-l-3xl bg-gradient-to-l from-coal to-obsidian border-y border-l border-gold/30"
            style={{
              width: `${DEPTH * 2}px`,
              transformOrigin: "left",
              transform: `rotateY(-90deg) translateZ(0px)`,
            }}
          />

          {/* TV bezel — front face (translated forward by DEPTH) */}
          <div
            className="relative aspect-[16/10] bg-gradient-to-b from-coal to-obsidian rounded-3xl border-2 border-gold/55 p-4 md:p-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.04)]"
            style={{ transform: `translateZ(${DEPTH}px)` }}
          >
            {/* Inner bezel ring */}
            <div className="absolute inset-2 rounded-2xl border border-gold/15 pointer-events-none" />

            {/* Screen */}
            <div className="relative w-full h-full bg-midnight rounded-2xl overflow-hidden flex flex-col items-center justify-center px-4 py-6">
              {/* CRT scanlines */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent 0, transparent 2px, rgba(212,176,97,0.18) 3px, rgba(212,176,97,0.18) 4px)",
                }}
              />

              {/* CRT vignette */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 100%)",
                }}
              />

              {/* Inner glow tint */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(212,176,97,0.10), transparent 65%)",
                }}
              />

              {/* AMARA — line one */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                className="relative font-display font-light text-ivory text-[14vw] md:text-[8.5vw] leading-[0.9] tracking-[-0.01em] z-10"
              >
                Amara
              </motion.h1>

              {/* Digital — italic gold */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                className="relative font-couture italic gold text-[14vw] md:text-[8.5vw] leading-[0.9] z-10"
                style={{
                  textShadow:
                    "0 0 20px rgba(212,176,97,0.45), 0 0 40px rgba(212,176,97,0.25)",
                }}
              >
                Digital
              </motion.h2>

              {/* Slow scan beam */}
              <motion.span
                aria-hidden
                animate={{ y: ["-50%", "120%"] }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2,
                }}
                className="absolute inset-x-0 h-32 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(212,176,97,0.18) 35%, rgba(212,176,97,0.55) 50%, rgba(212,176,97,0.18) 65%, transparent 100%)",
                  mixBlendMode: "screen",
                }}
              />

              {/* Power LED — bottom right */}
              <motion.span
                aria-hidden
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-3 right-3 size-1.5 rounded-full bg-gold"
                style={{ boxShadow: "0 0 8px rgba(212,176,97,0.95)" }}
              />
            </div>
          </div>

          {/* Stand */}
          <div className="mx-auto mt-3 w-32 h-3 bg-gradient-to-b from-gold/45 to-gold/10 rounded-b-md" />
          <div className="mx-auto mt-1 w-48 h-1.5 bg-gold/25 rounded-md" />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ─── BezelStars — twinkling gold stars around the TV bezel ────── */

function BezelStars() {
  const stars = useMemo(
    () => [
      { left: "-3%", top: "-3%" },
      { left: "102%", top: "-2%" },
      { left: "-4%", top: "104%" },
      { left: "104%", top: "102%" },
      { left: "50%", top: "-7%" },
      { left: "-6%", top: "50%" },
      { left: "106%", top: "50%" },
      { left: "50%", top: "108%" },
    ],
    []
  );
  return (
    <>
      {stars.map((s, i) => (
        <motion.svg
          key={i}
          aria-hidden
          className="absolute w-3 h-3 md:w-4 md:h-4 text-gold pointer-events-none"
          style={{
            left: s.left,
            top: s.top,
            transform: "translate(-50%, -50%)",
          }}
          viewBox="0 0 24 24"
          animate={{
            opacity: [0.25, 1, 0.25],
            scale: [0.8, 1.15, 0.8],
            rotate: [0, 180],
          }}
          transition={{
            duration: 4 + (i % 3),
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M12 2 L13.5 10 L22 12 L13.5 14 L12 22 L10.5 14 L2 12 L10.5 10 Z"
            fill="currentColor"
          />
        </motion.svg>
      ))}
    </>
  );
}

/* ─── LEDArray — vertical column of flickering LED bars ─────────── */

function LEDArray({ seed }: { seed: number }) {
  const count = 9;
  // Pre-randomized timings so they flicker independently but
  // deterministically per render.
  const timings = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const r = (Math.sin((i + seed) * 53.7) + 1) / 2;
        return {
          duration: 1.6 + r * 2.2,
          delay: r * 1.4 + (i % 3) * 0.2,
        };
      }),
    [seed]
  );

  return (
    <>
      {timings.map((t, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="block w-2.5 h-2.5 md:w-3 md:h-7 rounded-sm bg-gold"
          animate={{
            opacity: [0.2, 1, 0.35, 0.95, 0.25, 1, 0.5, 1, 0.2],
          }}
          transition={{
            duration: t.duration,
            repeat: Infinity,
            delay: t.delay,
            ease: "easeInOut",
          }}
          style={{
            boxShadow:
              "0 0 6px rgba(212,176,97,0.85), 0 0 14px rgba(212,176,97,0.45)",
          }}
        />
      ))}
    </>
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
