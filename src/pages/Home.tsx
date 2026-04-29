import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { Reveal } from "../components/Reveal";
import Hero from "../sections/Hero";
import { services } from "../sections/Services";

const stats = [
  { v: "4.2×", l: "Average blended ROAS" },
  { v: "312%", l: "Lead growth, 90 days" },
  { v: "<1.8s", l: "Median page load" },
  { v: "92%", l: "Client retention" },
];

export default function Home() {
  return (
    <PageTransition>
      <Hero />

      {/* Big-numbers stats — editorial, mega display, four columns */}
      <section className="relative bg-midnight border-t border-gold/15 py-28 md:py-44">
        <div className="mx-auto max-w-[110rem] px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-16 md:mb-24">
              ◆ The numbers
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 md:gap-x-12">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.95,
                  delay: i * 0.1,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="flex flex-col"
              >
                <span className="font-display font-light text-gold leading-[0.85] tracking-[-0.04em] text-[20vw] md:text-[10vw] lg:text-[8.5vw]">
                  {s.v}
                </span>
                <span className="mt-6 md:mt-8 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-ivory/55 max-w-[18ch]">
                  {s.l}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact services teaser */}
      <section className="section bg-obsidian border-t border-gold/15">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
            <div>
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-6">
                  ◆ What we do
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display font-light text-4xl md:text-6xl leading-[1.02] tracking-[-0.01em] max-w-2xl">
                  Four levers.{" "}
                  <span className="gold italic">Pick where to start.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.25}>
              <Link to="/services" className="btn-link-gold">
                All services
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <Link
                key={s.n}
                to={s.to}
                className="group focus:outline-none focus:ring-2 focus:ring-gold/40 rounded-2xl"
              >
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.07,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="card p-7 h-full flex flex-col"
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
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Single, dignified closer — one Book Demo on the page */}
      <section className="bg-midnight border-t border-gold/15 py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-10">
              ◆ Ready when you are
            </p>
          </Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <Reveal delay={0.1}>
              <h2 className="font-display font-light text-5xl md:text-7xl lg:text-[6vw] leading-[0.95] tracking-[-0.02em] max-w-3xl">
                Thirty minutes.
                <br />
                <span className="gold italic">A real plan.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                to="/contact"
                className="group inline-flex items-baseline gap-5 font-display text-3xl md:text-4xl text-ivory hover:text-gold transition-colors whitespace-nowrap"
              >
                <span>Book a demo</span>
                <span
                  aria-hidden
                  className="text-gold text-2xl md:text-3xl transition-transform duration-500 group-hover:translate-x-2"
                >
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
