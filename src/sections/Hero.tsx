import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * Hero — editorial split-line layout.
 *
 * Two rows of huge Fraunces display, staggered horizontally, joined by
 * gold horizontal rules and an arrow tip. No subtitle paragraph, no
 * stat ticker, no body CTAs — the nav's Book Demo is the conversion
 * point. The hero earns the viewport with typography alone.
 */
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yShift = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-32 pb-24"
    >
      {/* Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="absolute top-32 md:top-40 left-6 md:left-10 flex items-center gap-3"
      >
        <span className="size-1.5 rounded-full bg-gold" />
        <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-ivory/55">
          Michigan · Growth Studio · Est. 2024
        </span>
      </motion.div>

      <motion.div style={{ y: yShift, opacity }} className="w-full">
        {/* Top row: word + horizontal rule extending to the right edge */}
        <div className="flex items-center w-full">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-display font-light text-[18vw] md:text-[13.5vw] leading-[0.86] tracking-[-0.025em] text-ivory pl-6 md:pl-10 whitespace-nowrap"
          >
            We engineer
          </motion.h1>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.1, duration: 1.1, ease: [0.7, 0, 0.2, 1] }}
            style={{ originX: 0 }}
            aria-hidden
            className="hidden md:block flex-1 h-px bg-gold ml-8 mr-0"
          />
        </div>

        {/* Bottom row: arrow rule + word, right-aligned */}
        <div className="flex items-center w-full mt-4 md:mt-8 justify-end">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            aria-hidden
            className="hidden md:flex flex-1 items-center mr-8 ml-0"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.3, duration: 1.0, ease: [0.7, 0, 0.2, 1] }}
              style={{ originX: 0 }}
              className="flex-1 h-px bg-gold"
            />
            <ArrowTip />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-display font-light italic text-[18vw] md:text-[13.5vw] leading-[0.86] tracking-[-0.025em] gold pr-6 md:pr-10 whitespace-nowrap"
          >
            revenue.
          </motion.h2>
        </div>
      </motion.div>

      {/* Mobile: vertical connector line shown only when md rules are hidden */}
      <motion.span
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.1, duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
        style={{ originY: 0 }}
        aria-hidden
        className="md:hidden absolute right-12 top-[42%] w-px h-12 bg-gold"
      />

      {/* Bottom-right whisper line */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.7 }}
        className="absolute bottom-24 md:bottom-28 left-6 md:left-10 max-w-xs text-ivory/55 text-sm leading-relaxed"
      >
        SEO, websites, maintenance, and Meta Ads — wired to one number:{" "}
        <span className="gold">ROI</span>.
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center gap-3 text-ivory/35"
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
