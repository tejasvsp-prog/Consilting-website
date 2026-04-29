import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { Reveal } from "../components/Reveal";
import Hero from "../sections/Hero";
import { services } from "../sections/Services";

const stats = [
  { v: "4.2×", l: "Average blended ROAS" },
  { v: "+312%", l: "Lead growth, 90 days" },
  { v: "<1.8s", l: "Median page load" },
  { v: "92%", l: "Client retention" },
];

export default function Home() {
  return (
    <PageTransition>
      <Hero />

      {/* What we do — services with wave animation + more context */}
      <section className="section bg-obsidian border-t border-gold/15">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-12 gap-10 mb-16">
            <div className="col-span-12 md:col-span-6">
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-6">
                  ◆ What we do
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display font-light text-4xl md:text-6xl leading-[1.02] tracking-[-0.01em]">
                  Four levers.{" "}
                  <span className="gold italic">Pick where to start.</span>
                </h2>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <Reveal delay={0.2}>
                <p className="text-ivory/70 leading-relaxed">
                  Each service is a complete engagement on its own — but the
                  real lift comes when two or three run in concert. Same
                  scoreboard for every program: <span className="gold">
                  dollars in, dollars out, measured every Friday.</span> Pick
                  one to start; we'll tell you in the first thirty minutes
                  which combination your funnel actually needs.
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <Link to="/services" className="btn-link-gold mt-8">
                  All services
                  <span aria-hidden>→</span>
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Wave-animated card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <Link
                key={s.n}
                to={s.to}
                className="group focus:outline-none focus:ring-2 focus:ring-gold/40 rounded-2xl"
              >
                {/* Wave entrance: cards rise in sequence with overshoot */}
                <motion.article
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    delay: i * 0.18,
                    duration: 1.0,
                    ease: [0.34, 1.4, 0.5, 1],
                  }}
                  className="card p-7 h-full flex flex-col"
                >
                  {/* Continuous wave bob — phase-offset per card */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.7,
                      ease: "easeInOut",
                    }}
                    className="flex flex-col h-full"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold mb-8">
                      {s.n}
                    </p>
                    <h3 className="font-display font-light text-2xl md:text-3xl text-ivory leading-tight mb-3 transition-transform duration-500 group-hover:translate-x-1">
                      {s.t}
                    </h3>
                    <p className="text-ivory/55 text-sm leading-relaxed">
                      {s.short}
                    </p>
                    <span className="mt-auto pt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] font-medium text-gold">
                      Read more
                      <span
                        aria-hidden
                        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </motion.div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers — continuously rotating horizontal marquee */}
      <section className="relative bg-midnight border-t border-gold/15 py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-12">
              ◆ The numbers
            </p>
          </Reveal>
        </div>

        {/* Edge fades so the marquee bleeds in/out gracefully */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-midnight to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-midnight to-transparent"
        />

        <div className="overflow-hidden">
          <div className="marquee-track flex items-baseline whitespace-nowrap">
            {/* Doubled for seamless loop */}
            {[...stats, ...stats, ...stats, ...stats].map((s, i) => (
              <div
                key={i}
                className="flex items-baseline gap-6 md:gap-10 px-8 md:px-14 shrink-0"
              >
                <span className="font-display font-light text-gold leading-none tracking-[-0.04em] text-[16vw] md:text-[10vw]">
                  {s.v}
                </span>
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.28em] text-ivory/55 max-w-[12ch] whitespace-normal">
                  {s.l}
                </span>
                <span
                  aria-hidden
                  className="text-gold/40 text-3xl md:text-4xl ml-4 md:ml-8"
                >
                  ◆
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-10 mt-12">
          <Reveal>
            <p className="text-ivory/45 text-xs font-mono uppercase tracking-[0.28em]">
              Aggregated across active engagements · Updated quarterly
            </p>
          </Reveal>
        </div>
      </section>

      {/* Closer — text-only, no Book Demo button */}
      <section className="relative bg-obsidian border-t border-gold/15 py-32 md:py-48 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-12">
              ◆ Ready when you are
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="font-display font-light text-6xl md:text-8xl lg:text-[8.5vw] leading-[0.92] tracking-[-0.025em] max-w-5xl">
              Thirty minutes.
              <br />
              <span className="gold italic">A real plan.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-12 gap-10 items-end">
            <Reveal delay={0.3}>
              <p className="col-span-12 md:col-span-6 text-ivory/65 text-lg leading-relaxed max-w-xl">
                No deck. No discovery questionnaire. Bring your numbers, your
                goals, and the one question keeping you up at night. We'll
                bring a punch list of what we'd do in your seat —{" "}
                <span className="gold">written on the spot</span>, not emailed
                a week later.
              </p>
            </Reveal>

            <div className="col-span-12 md:col-span-5 md:col-start-8 space-y-3">
              <Reveal delay={0.4}>
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold">
                  Direct
                </p>
              </Reveal>
              <Reveal delay={0.45}>
                <a
                  href="mailto:amaradigital@gmail.com"
                  className="block font-display text-2xl md:text-3xl text-ivory hover:text-gold transition-colors"
                >
                  amaradigital@gmail.com
                </a>
              </Reveal>
              <Reveal delay={0.5}>
                <a
                  href="tel:+15173295868"
                  className="block font-mono text-base md:text-lg text-ivory/70 hover:text-gold transition-colors tracking-wider"
                >
                  +1 (517) 329-5868
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
