import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition, { PageHeader } from "./PageTransition";
import { Reveal } from "./Reveal";
import { services } from "../sections/Services";

export type ServiceDetailProps = {
  number: string;
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  why: string[];
  deliverables: { t: string; d: string }[];
  process: { n: string; t: string; d: string }[];
  faqs: { q: string; a: string }[];
  resultStat: { value: string; label: string }[];
  Visual?: () => JSX.Element;
};

export default function ServiceDetail(p: ServiceDetailProps) {
  const others = services.filter((s) => s.to !== `/services/${p.slug}`);

  return (
    <PageTransition>
      <PageHeader
        tag={`Service · ${p.number}`}
        title={
          <>
            {p.name.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gold italic">
              {p.name.split(" ").slice(-1)[0]}.
            </span>
          </>
        }
        subtitle={p.tagline}
      >
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {p.resultStat.map((r) => (
            <div key={r.label}>
              <div className="font-display text-3xl md:text-4xl text-gold">
                {r.value}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ivory/50">
                {r.label}
              </div>
            </div>
          ))}
        </div>
      </PageHeader>

      {/* Visual band */}
      {p.Visual && (
        <section className="bg-midnight pt-4 pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
              <p.Visual />
            </Reveal>
          </div>
        </section>
      )}

      {/* 1) What this is */}
      <section className="section bg-midnight pt-0">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
                ◆ What this is
              </p>
            </Reveal>
            <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.05] tracking-[-0.01em]">
              The short version.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <Reveal delay={0.15}>
              <p className="text-ivory/75 text-lg leading-relaxed">{p.intro}</p>
            </Reveal>
            <Reveal delay={0.3}>
              <ul className="mt-10 space-y-4">
                {p.why.map((w) => (
                  <li
                    key={w}
                    className="flex items-start gap-4 text-ivory/70 leading-relaxed"
                  >
                    <span className="mt-2.5 size-1.5 rounded-full bg-gold shrink-0" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2) What you get */}
      <section className="section bg-obsidian border-y border-gold/15">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
              ◆ What you get
            </p>
          </Reveal>
          <h2 className="font-display font-light text-4xl md:text-6xl leading-[1.02] tracking-[-0.01em] max-w-3xl mb-16">
            Deliverables, in plain English.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/15 border border-gold/15 rounded-2xl overflow-hidden">
            {p.deliverables.map((d, i) => (
              <motion.div
                key={d.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 4) * 0.06, duration: 0.7 }}
                className="bg-midnight p-7 md:p-10 relative group"
              >
                <span
                  aria-hidden
                  className="absolute top-5 right-6 font-mono text-[10px] uppercase tracking-[0.28em] text-gold/40"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-ivory mb-3">
                  {d.t}
                </h3>
                <p className="text-ivory/65 leading-relaxed text-sm">{d.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3) Process — no timeline, just three premium cards with a top-edge progress glow */}
      <section className="section bg-midnight">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
              ◆ Process
            </p>
          </Reveal>
          <h2 className="font-display font-light text-4xl md:text-6xl leading-[1.02] tracking-[-0.01em] max-w-3xl mb-16">
            How an engagement runs.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {p.process.map((s, i) => (
              <motion.article
                key={s.t}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="card relative p-7 md:p-10 overflow-hidden"
              >
                {/* Top-edge glow rail */}
                <span
                  aria-hidden
                  className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/70 to-transparent"
                />
                {/* Big numeral */}
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-display italic text-5xl md:text-6xl text-gold/85 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/40">
                    Step
                  </span>
                </div>
                <h3 className="font-display text-2xl text-ivory mb-4">
                  {s.t}
                </h3>
                <p className="text-ivory/65 leading-relaxed text-sm">{s.d}</p>
                {/* Pulsing corner dot */}
                <motion.span
                  className="absolute bottom-5 right-5 size-1.5 rounded-full bg-gold"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 2.4,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 4) FAQ */}
      <section className="section bg-obsidian border-y border-gold/15">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
                ◆ FAQ
              </p>
            </Reveal>
            <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.02] tracking-[-0.01em]">
              Things people ask.
            </h2>
          </div>
          <dl className="col-span-12 md:col-span-7 md:col-start-6 divide-y divide-gold/15 border-t border-b border-gold/15">
            {p.faqs.map((f, i) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="py-6 md:py-7"
              >
                <dt className="font-display text-xl md:text-2xl text-ivory mb-3">
                  {f.q}
                </dt>
                <dd className="text-ivory/65 leading-relaxed">{f.a}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      {/* 5) Other services */}
      <section className="section bg-midnight">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
              ◆ Other services
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {others.map((s) => (
              <Link
                key={s.t}
                to={s.to}
                className="card p-8 md:p-10 group focus:outline-none focus:ring-2 focus:ring-gold/40"
              >
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold mb-6">
                  {s.n}
                </p>
                <h3 className="font-display text-3xl md:text-4xl text-ivory leading-tight mb-4 transition-transform duration-500 group-hover:translate-x-1">
                  {s.t}
                </h3>
                <p className="text-ivory/60 text-sm leading-relaxed">
                  {s.short}
                </p>
                <span className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] font-medium text-gold">
                  Read more
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
