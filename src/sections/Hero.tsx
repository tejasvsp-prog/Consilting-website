import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMemo, useRef } from "react";

/**
 * Hero — Amara / Digital split-line typography. Two staggered rows
 * of huge serif display, joined by gold horizontal rules with a
 * traveling spark dot. The wordmark draws in letter-by-letter and
 * then a luminous shine sweeps across each line.
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

      <motion.div style={{ y: yShift, opacity }} className="w-full">
        {/* Top row: Amara + horizontal rule with traveling spark */}
        <div className="flex items-center w-full">
          <DrawWord
            text="Amara"
            startDelay={0.55}
            className="font-display font-light text-[22vw] md:text-[15vw] leading-[0.86] tracking-[-0.025em] text-ivory pl-6 md:pl-10 whitespace-nowrap"
          />
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1.0, ease: [0.7, 0, 0.2, 1] }}
            style={{ originX: 0 }}
            aria-hidden
            className="hidden md:block relative flex-1 h-px bg-gold ml-8 mr-0 overflow-visible"
          >
            <motion.span
              animate={{ left: ["0%", "100%"] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "linear",
                delay: 2.0,
              }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold shadow-[0_0_14px_rgba(212,176,97,0.95)]"
            />
          </motion.span>
        </div>

        {/* Bottom row: arrow rule + Digital, right-aligned */}
        <div className="flex items-center w-full mt-4 md:mt-8 justify-end">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            aria-hidden
            className="hidden md:flex flex-1 items-center mr-8 ml-0"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.4, duration: 1.0, ease: [0.7, 0, 0.2, 1] }}
              style={{ originX: 0 }}
              className="relative flex-1 h-px bg-gold overflow-visible"
            >
              <motion.span
                animate={{ left: ["0%", "100%"] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2.4,
                }}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold shadow-[0_0_14px_rgba(212,176,97,0.95)]"
              />
            </motion.span>
            <ArrowTip />
          </motion.span>
          <DrawWord
            text="Digital."
            italic
            gold
            startDelay={1.45}
            className="font-display font-light italic text-[22vw] md:text-[15vw] leading-[0.86] tracking-[-0.025em] gold pr-6 md:pr-10 whitespace-nowrap"
          />
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
        transition={{ delay: 1.9, duration: 0.7 }}
        className="absolute bottom-24 md:bottom-28 left-6 md:left-10 max-w-xs font-display text-2xl md:text-3xl text-ivory leading-tight z-20"
      >
        We engineer{" "}
        <span className="gold italic">revenue.</span>
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1 }}
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

/* ─── DrawWord — letter-by-letter draw-in + recurring shine sweep ─ */

function DrawWord({
  text,
  italic,
  gold,
  startDelay = 0,
  className,
}: {
  text: string;
  italic?: boolean;
  gold?: boolean;
  startDelay?: number;
  className?: string;
}) {
  const letters = text.split("");
  const drawDuration = 0.55;
  const stagger = 0.06;
  // After all letters land, the shine sweep starts
  const shineDelay = startDelay + letters.length * stagger + 0.4;

  return (
    <span className={`relative inline-block isolate ${className ?? ""}`}>
      {/* Base letters drawing in left -> right with stagger */}
      <span aria-label={text}>
        {letters.map((c, i) => (
          <motion.span
            key={i}
            aria-hidden
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: startDelay + i * stagger,
              duration: drawDuration,
              ease: [0.2, 0.8, 0.2, 1],
            }}
            className="inline-block"
          >
            {c === " " ? " " : c}
          </motion.span>
        ))}
      </span>

      {/* Glowing shine layer — masked sweep that lights the word
          left -> right after the letters have arrived. Repeats. */}
      <motion.span
        aria-hidden
        className={`absolute inset-0 pointer-events-none ${italic ? "italic" : ""}`}
        style={{
          color: gold ? "#FFE9B3" : "#FFFAEC",
          textShadow:
            "0 0 24px rgba(212,176,97,0.8), 0 0 56px rgba(212,176,97,0.5), 0 0 100px rgba(212,176,97,0.25)",
          WebkitMaskImage:
            "linear-gradient(110deg, transparent 35%, black 47%, black 53%, transparent 65%)",
          maskImage:
            "linear-gradient(110deg, transparent 35%, black 47%, black 53%, transparent 65%)",
          WebkitMaskSize: "300% 100%",
          maskSize: "300% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
        initial={{
          opacity: 0,
          WebkitMaskPosition: "150% 0",
          maskPosition: "150% 0",
        }}
        animate={{
          opacity: [0, 1, 1, 0],
          WebkitMaskPosition: ["150% 0", "150% 0", "-50% 0", "-50% 0"],
          maskPosition: ["150% 0", "150% 0", "-50% 0", "-50% 0"],
        }}
        transition={{
          duration: 5,
          times: [0, 0.05, 0.55, 0.6],
          delay: shineDelay,
          repeat: Infinity,
          repeatDelay: 4,
          ease: [0.5, 0, 0.5, 1],
        }}
      >
        {text}
      </motion.span>
    </span>
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
