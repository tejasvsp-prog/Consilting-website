import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Per-page wrapper. The new page mounts after the curtain has covered the
 * screen, so the entrance animates from underneath the curtain — feels like
 * the page itself is being unveiled rather than crossfading.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{
        delay: 0.55,
        duration: 0.85,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Theatrical route transition.
 *
 * Five vertical panels — midnight, obsidian, gold, obsidian, midnight —
 * slide up from below, each staggered ~50ms, until the screen is fully
 * covered. At the apex of the cover, the AMARA wordmark + a thin gold
 * underbar flash for a single beat. Then the panels keep rising and exit
 * through the top, revealing the new page.
 *
 * Total duration: ~1.5s. Pairs with PageTransition's 0.55s entrance delay
 * so the new content is unveiled exactly as the curtain lifts.
 *
 * Implementation: keyed by location.pathname so the component remounts on
 * every route change and replays its enter animation. No AnimatePresence
 * wrapping needed.
 */
export function RouteCurtain() {
  const panels = [
    { color: "#0b0a09" }, // midnight
    { color: "#15120e" }, // obsidian
    { color: "#d4b061" }, // gold
    { color: "#15120e" }, // obsidian
    { color: "#0b0a09" }, // midnight
  ];

  return (
    <div className="fixed inset-0 z-[80] pointer-events-none flex">
      {panels.map((p, i) => (
        <motion.div
          key={i}
          className="flex-1 will-change-transform"
          style={{ background: p.color }}
          initial={{ y: "101%" }}
          animate={{ y: ["101%", "0%", "0%", "-101%"] }}
          transition={{
            duration: 1.5,
            times: [0, 0.34, 0.5, 1],
            delay: i * 0.045,
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      ))}

      {/* Mid-transition mark flash */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{
          duration: 1.5,
          times: [0, 0.36, 0.42, 0.55, 0.62],
        }}
      >
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 0, 1, 1, 0] }}
          transition={{
            duration: 1.5,
            times: [0, 0.36, 0.46, 0.55, 0.62],
            ease: [0.7, 0, 0.2, 1],
          }}
          className="block h-px w-32 md:w-48 bg-gold mb-5 origin-center"
        />
        <span className="font-display font-light text-3xl md:text-5xl tracking-mark text-ivory">
          AMARA
        </span>
        <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.42em] text-gold">
          Digital
        </span>
      </motion.div>
    </div>
  );
}

/**
 * Page-header banner used by every inner route. Renders a small section
 * tag, a serif title, and an optional sub-line under a single thin gold
 * rule. Replaces the heavy hero on inner pages.
 */
export function PageHeader({
  tag,
  title,
  subtitle,
  children,
}: {
  tag: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative pt-40 md:pt-44 pb-16 md:pb-24 border-b border-gold/15">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8"
        >
          ◆ {tag}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display font-light text-5xl md:text-7xl lg:text-[7vw] leading-[0.98] tracking-[-0.02em] max-w-5xl text-ivory"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="mt-8 max-w-2xl text-ivory/65 text-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.7 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </header>
  );
}
