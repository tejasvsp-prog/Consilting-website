import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Per-page wrapper. Wraps the entire route's content in an opacity + slight
 * upward translate enter animation, plus a downward exit. Combined with
 * AnimatePresence in the layout, this yields a clean fade-up between routes.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * A thin gold rule that wipes top→bottom over the screen during a route
 * change. AnimatePresence fades it in at the start of the new route and out
 * once the page has settled. Pairs with PageTransition for a layered effect.
 */
export function RouteCurtain() {
  return (
    <motion.div
      key="curtain"
      initial={{ scaleY: 0, opacity: 0.9 }}
      animate={{ scaleY: 1, opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.7, 0, 0.2, 1] }}
      style={{ originY: 0 }}
      className="fixed inset-0 z-[55] pointer-events-none bg-gradient-to-b from-gold/0 via-gold/10 to-gold/0"
    />
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
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8"
        >
          ◆ {tag}
        </motion.p>
        <h1 className="font-display font-light text-5xl md:text-7xl lg:text-[7vw] leading-[0.98] tracking-[-0.02em] max-w-5xl text-ivory">
          {title}
        </h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-8 max-w-2xl text-ivory/65 text-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </header>
  );
}
