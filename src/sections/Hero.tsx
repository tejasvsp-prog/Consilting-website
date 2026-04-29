import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { SplitText } from "../components/Reveal";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yHead = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] pt-44 md:pt-52 pb-24 overflow-hidden"
    >
      <motion.div
        style={{ opacity }}
        className="relative mx-auto max-w-7xl px-6 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="size-2 rounded-full bg-gold" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ivory/60">
            Michigan · Growth Studio · Est. 2024
          </span>
        </motion.div>

        <motion.h1
          style={{ y: yHead }}
          className="font-display font-light text-[12vw] md:text-[8.5vw] leading-[0.92] tracking-[-0.02em] text-ivory max-w-[18ch]"
        >
          <SplitText text="We don't run ads." />
          <br />
          <span className="gold italic">
            <SplitText text="We engineer revenue." delay={0.2} />
          </span>
        </motion.h1>

        <div className="mt-12 md:mt-16 grid grid-cols-12 gap-6 items-end">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="col-span-12 md:col-span-6 text-lg md:text-xl text-ivory/70 leading-relaxed max-w-xl"
          >
            Amara Digital is a Michigan-based growth studio for founders who
            measure success in dollars, not impressions. SEO, websites, Meta
            Ads, and ongoing maintenance — wired to one number:{" "}
            <span className="gold">ROI</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="col-span-12 md:col-span-5 md:col-start-8 flex flex-wrap items-center gap-4"
          >
            <Link to="/book" className="btn-gold">
              Book Demo
              <span aria-hidden>→</span>
            </Link>
            <Link to="/services" className="btn-ghost-gold">
              Our Services
            </Link>
          </motion.div>
        </div>

        {/* Stat ticker */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 border-y border-gold/20"
        >
          {[
            { k: "4.2x", v: "Avg. blended ROAS" },
            { k: "312%", v: "Lead growth, 90 days" },
            { k: "<1.8s", v: "Median LCP shipped" },
            { k: "92%", v: "Client retention" },
          ].map((s, i) => (
            <div
              key={s.v}
              className={`px-6 py-7 md:py-8 ${
                i < 3 ? "md:border-r border-gold/15" : ""
              } ${i < 2 ? "border-b md:border-b-0 border-gold/15" : ""}`}
            >
              <div className="font-display text-3xl md:text-4xl text-gold">
                {s.k}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ivory/50">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center gap-3 text-ivory/40"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.28em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-10 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
