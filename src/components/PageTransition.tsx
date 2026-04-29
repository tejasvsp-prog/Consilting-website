import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wraps each route in a coordinated entry animation. The shared overlay
 * (driven by AnimatePresence in App.tsx) sweeps across the screen first,
 * after which the page content rises in.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.div
        key="overlay"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.7, ease: [0.7, 0, 0.2, 1] }}
        style={{ originY: 0 }}
        className="fixed inset-0 z-[80] bg-ink pointer-events-none"
      />
      <motion.div
        key="overlay-2"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.7, ease: [0.7, 0, 0.2, 1], delay: 0.05 }}
        style={{ originY: 0 }}
        className="fixed inset-0 z-[79] bg-rust pointer-events-none"
      />
      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.4 }}
        className="relative"
      >
        {children}
      </motion.main>
    </>
  );
}
