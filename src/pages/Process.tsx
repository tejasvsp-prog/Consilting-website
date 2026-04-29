import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Reveal, SplitText } from "../components/Reveal";

const steps = [
  {
    n: "I",
    t: "Listen",
    d: "An unhurried conversation. We try to understand what you actually want — not what's easiest to scope.",
    days: "Days 1 – 7",
  },
  {
    n: "II",
    t: "Frame",
    d: "We write back a one-page brief: the question, the lens, the team. If it resonates, we proceed. If not, we keep talking.",
    days: "Days 7 – 14",
  },
  {
    n: "III",
    t: "Engage",
    d: "Senior advisors only. We work shoulder-to-shoulder with your team, in your tools, on your cadence.",
    days: "Weeks 2 – N",
  },
  {
    n: "IV",
    t: "Hand over",
    d: "We design the engagement so your team owns the outcome. Documentation, training, rituals — everything stays.",
    days: "Final two weeks",
  },
  {
    n: "V",
    t: "Stay close",
    d: "Quarterly check-ins for a year, on us. We watch how the work lands and help calibrate.",
    days: "Year one and beyond",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <div className="bg-ivory text-ink">
      <section className="pt-40 md:pt-52 pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-ink/60 mb-8">
              ◇ The process — five movements
            </p>
          </Reveal>
          <h1 className="font-display text-5xl md:text-8xl leading-[0.98]">
            <SplitText text="Slow at the" />{" "}
            <span className="italic text-rust">start</span>.
            <br />
            <SplitText text="Quick at the" delay={0.2} />{" "}
            <span className="italic text-rust">finish</span>.
          </h1>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg text-ink/75 leading-relaxed">
              Most consulting fails at the seams: between strategy and
              execution, between advisors and operators, between deck and
              decision. Our process is built to remove the seams.
            </p>
          </Reveal>
        </div>
      </section>

      <section ref={ref} className="relative pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 relative">
          {/* spine */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-ink/15" aria-hidden />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-px bg-rust origin-top"
            aria-hidden
          />

          <div className="space-y-24 md:space-y-32">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
                className="relative grid grid-cols-12 gap-6"
              >
                <div className="col-span-12 md:col-span-5 md:text-right pl-12 md:pl-0 md:pr-16">
                  {i % 2 === 0 ? (
                    <Content step={s} />
                  ) : (
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-ink/50">
                      {s.days}
                    </p>
                  )}
                </div>

                <div className="hidden md:block col-span-2 relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute left-1/2 top-2 -translate-x-1/2 size-12 rounded-full bg-ink text-marigold flex items-center justify-center font-display text-lg"
                  >
                    {s.n}
                  </motion.div>
                </div>

                {/* mobile dot */}
                <div className="md:hidden absolute left-6 -translate-x-1/2 top-2 size-3 rounded-full bg-rust" />

                <div className="col-span-12 md:col-span-5 pl-12 md:pl-16">
                  {i % 2 === 0 ? (
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-ink/50">
                      {s.days}
                    </p>
                  ) : (
                    <Content step={s} />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream/60 border-t border-ink/10">
        <div className="mx-auto max-w-5xl px-6 md:px-10 text-center">
          <Reveal>
            <h3 className="font-display text-3xl md:text-5xl leading-[1.05]">
              Ready when you are.
            </h3>
            <Link to="/contact" className="btn-primary mt-10">
              Schedule a meeting
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Content({ step }: { step: (typeof steps)[number] }) {
  return (
    <>
      <h2 className="font-display text-3xl md:text-5xl leading-[1.05]">
        {step.t}
      </h2>
      <p className="mt-4 text-ink/75 leading-relaxed">{step.d}</p>
    </>
  );
}
