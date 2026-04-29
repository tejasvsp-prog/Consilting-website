import { motion } from "framer-motion";
import { Reveal, SplitText } from "../components/Reveal";

export default function CtaStrip() {
  return (
    <section className="relative py-32 md:py-44 bg-midnight overflow-hidden">
      <div
        aria-hidden
        className="aurora bg-gold/30"
        style={{ width: 800, height: 800, top: "-30%", left: "50%", transform: "translateX(-50%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gold-line"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gold-line"
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 text-center">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-10">
            ◆ The next move
          </p>
        </Reveal>

        <h2 className="font-display font-light text-5xl md:text-8xl leading-[0.98] tracking-[-0.02em]">
          <SplitText text="Stop guessing." />
          <br />
          <span className="gold-text italic">
            <SplitText text="Start compounding." delay={0.2} />
          </span>
        </h2>

        <Reveal delay={0.5}>
          <p className="mt-10 max-w-2xl mx-auto text-ivory/70 text-lg leading-relaxed">
            One conversation. We'll look at your funnel, your ad account, your
            site, your CRM — and tell you, plainly, where the money is leaking
            and how fast we can plug it.
          </p>
        </Reveal>

        <Reveal delay={0.7}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#contact" className="btn-gold">
              Get Started
              <span aria-hidden>→</span>
            </a>
            <a
              href="tel:+15173295868"
              className="btn-ghost-gold"
            >
              Call · 517-329-5868
            </a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
