import { motion } from "framer-motion";

type Props = {
  size?: "sm" | "md" | "lg" | "xl";
  withTagline?: boolean;
  animateBar?: boolean;
};

const sizeMap = {
  sm: "text-xl md:text-2xl",
  md: "text-3xl md:text-4xl",
  lg: "text-5xl md:text-6xl",
  xl: "text-[14vw] leading-none",
};

/**
 * Text-based wordmark inspired by the Devanagari shirorekha — the horizontal
 * line that runs across the top of letters. The bar is drawn separately and
 * animates from left to right.
 */
export default function Wordmark({
  size = "md",
  withTagline = false,
  animateBar = true,
}: Props) {
  const letters = "CONSILTING".split("");
  return (
    <div className="inline-flex flex-col items-start select-none">
      <div className="relative inline-block">
        <motion.span
          aria-hidden
          initial={animateBar ? { scaleX: 0 } : { scaleX: 1 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: [0.7, 0, 0.2, 1], delay: 0.1 }}
          style={{ originX: 0 }}
          className="absolute left-0 right-0 -top-[0.14em] h-[0.06em] bg-current"
        />
        <span
          className={`font-display font-medium tracking-mark ${sizeMap[size]} text-current`}
          aria-label="Consilting"
        >
          {letters.map((l, i) => (
            <motion.span
              key={i}
              className="letter"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.25 + i * 0.04,
                duration: 0.9,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              {l}
            </motion.span>
          ))}
        </span>
      </div>
      {withTagline && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="font-mono text-[0.65em] tracking-[0.32em] uppercase text-current/70 mt-2"
        >
          Advisory · Est. New Delhi
        </motion.span>
      )}
    </div>
  );
}
