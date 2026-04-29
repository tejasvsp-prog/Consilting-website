import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition, { PageHeader } from "../components/PageTransition";
import CtaStrip from "../sections/CtaStrip";
import { services } from "../sections/Services";

export default function ServicesOverview() {
  return (
    <PageTransition>
      <PageHeader
        tag="Services"
        title={
          <>
            Four levers.{" "}
            <span className="gold italic">One outcome: growth.</span>
          </>
        }
        subtitle="Each service is a self-contained engagement, but the real lift comes from running two or more in concert. Pick where you want to start."
      />

      <section className="section bg-midnight">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <Link
                key={s.n}
                to={s.to}
                className="group focus:outline-none focus:ring-2 focus:ring-gold/40 rounded-2xl"
              >
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.8,
                    delay: (i % 2) * 0.08,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="card p-8 md:p-10 h-full flex flex-col"
                >
                  <div className="flex items-center justify-between mb-8 font-mono text-[11px] uppercase tracking-[0.28em]">
                    <span className="text-gold">{s.n}</span>
                    <span className="text-ivory/40">{s.short}</span>
                  </div>
                  <h2 className="font-display font-light text-4xl md:text-6xl leading-[0.95] tracking-[-0.01em] mb-6 transition-transform duration-500 group-hover:translate-x-1">
                    {s.t}
                  </h2>
                  <p className="text-ivory/70 leading-relaxed mb-6">
                    {s.body}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10 text-sm text-ivory/65">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-2 size-1 rounded-full bg-gold shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] font-medium text-gold border-t border-gold/15 pt-6">
                    Explore {s.t.toLowerCase()}
                    <span
                      aria-hidden
                      className="inline-block transition-transform duration-300 group-hover:translate-x-2"
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
