import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { Reveal } from "../components/Reveal";
import Hero from "../sections/Hero";
import CtaStrip from "../sections/CtaStrip";
import { services } from "../sections/Services";

export default function Home() {
  return (
    <PageTransition>
      <Hero />

      {/* Compact services teaser — 4 cards linking to detail pages */}
      <section className="section bg-midnight border-t border-gold/15">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
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

      <CtaStrip />
    </PageTransition>
  );
}
