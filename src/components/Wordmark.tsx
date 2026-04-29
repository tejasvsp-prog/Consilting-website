import { motion } from "framer-motion";

type Props = {
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  animate?: boolean;
};

const sizeMap = {
  sm: "text-xl md:text-2xl",
  md: "text-3xl md:text-4xl",
  lg: "text-6xl md:text-7xl",
  xl: "text-[14vw] leading-none",
};

/**
 * AMARA · DIGITAL — refined Fraunces serif with a thin gold bar
 * above the letters. The bar is a quiet nod to the Devanagari shirorekha,
 * fitting given the South Asian origin of "Amara" (timeless / eternal).
 */
export default function Wordmark({
  size = "md",
  showTagline = true,
  animate = true,
}: Props) {
  const letters = "AMARA".split("");
  return (
    <div className="inline-flex flex-col items-start select-none leading-none">
      <div className="relative inline-block">
        <motion.span
          aria-hidden
          initial={animate ? { scaleX: 0 } : { scaleX: 1 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.7, 0, 0.2, 1], delay: 0.1 }}
          style={{ originX: 0.5 }}
          className="bar"
        />
        <span
          className={`font-display font-light tracking-mark ${sizeMap[size]} text-ivory`}
          aria-label="Amara Digital"
        >
          {letters.map((l, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={animate ? { y: "110%", opacity: 0 } : false}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.25 + i * 0.05,
                duration: 0.9,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              {l}
            </motion.span>
          ))}
        </span>
      </div>
      {showTagline && (
        <motion.span
          initial={animate ? { opacity: 0, y: 6 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-mono text-[0.42em] tracking-[0.42em] uppercase text-gold mt-2"
        >
          Digital
        </motion.span>
      )}
    </div>
  );
}
