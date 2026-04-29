import { motion } from "framer-motion";
import { Reveal, SplitText } from "../components/Reveal";

const pillars = [
  {
    n: "I",
    t: "Data over opinions",
    d: "Every decision is tied to a number — CAC, LTV, ROAS, conversion rate. We don't ship campaigns we can't measure, and we don't measure things that don't matter.",
  },
  {
    n: "II",
    t: "Conversion-first design",
    d: "Pretty doesn't pay rent. Our work is engineered around how real buyers actually behave: speed, clarity, friction, trust — in that order.",
  },
  {
    n: "III",
    t: "Senior, in the room",
    d: "No bait-and-switch. The strategist who pitches you is the strategist who runs the work. Less noise, faster decisions, fewer status calls.",
  },
  {
    n: "IV",
    t: "Built to compound",
    d: "We don't sell volume. We build owned assets — content, creative libraries, dashboards — that get cheaper to operate every month you stay with us.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="section bg-obsidian">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
                ◆ Why Amara
              </p>
            </Reveal>
            <h2 className="font-display font-light text-5xl md:text-6xl leading-[1.02] tracking-[-0.01em] max-w-md">
              <SplitText text="Most agencies sell" />
              <br />
              <SplitText text="motion." delay={0.15} />
              <br />
              <span className="gold italic">
                <SplitText text="We sell results." delay={0.3} />
              </span>
            </h2>
            <Reveal delay={0.5}>
              <p className="mt-8 text-ivory/65 leading-relaxed max-w-md">
                We're a small senior team. That's the point. You won't be
                handed off to a junior account manager in week three — you
                stay with the operators who built the strategy.
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-gold/15 border border-gold/15 rounded-2xl overflow-hidden">
            {pillars.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="bg-midnight p-7 md:p-8"
              >
                <div className="font-display text-gold text-3xl mb-5 italic">
                  {p.n}.
                </div>
                <h3 className="font-display text-2xl text-ivory mb-3">{p.t}</h3>
                <p className="text-ivory/60 leading-relaxed text-sm">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
