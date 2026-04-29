import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "li" | "h2" | "h3" | "p";
};

export function Reveal({
  children,
  delay = 0,
  y = 30,
  className,
  as = "div",
}: Props) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] },
    },
  };
  const Comp = motion[as];
  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      className={className}
    >
      {children}
    </Comp>
  );
}

export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.04,
  once = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom mr-[0.25em] pb-[0.05em]"
        >
          <motion.span
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once, margin: "-50px" }}
            transition={{
              duration: 0.9,
              delay: delay + i * stagger,
              ease: [0.2, 0.8, 0.2, 1],
            }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
