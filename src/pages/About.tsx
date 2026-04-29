import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition, { PageHeader } from "../components/PageTransition";
import { Reveal } from "../components/Reveal";
import CtaStrip from "../sections/CtaStrip";

const values = [
  {
    n: "I",
    t: "Data over opinions",
    d: "Every campaign, page, and headline ties back to a number. CAC, LTV, ROAS, conversion rate — that's the conversation.",
  },
  {
    n: "II",
    t: "Conversion-first design",
    d: "Pretty doesn't pay rent. Speed, clarity, friction, trust — in that order. Always.",
  },
  {
    n: "III",
    t: "Senior, in the room",
    d: "The strategist who pitches you is the strategist who runs the work. No bait-and-switch, no junior account managers on month two.",
  },
  {
    n: "IV",
    t: "Built to compound",
    d: "We build owned assets — content, creative, dashboards, automations — that get cheaper to operate every month you stay.",
  },
];

export default function About() {
  return (
    <PageTransition>
      <PageHeader
        tag="About"
        title={
          <>
            We're a small studio for{" "}
            <span className="gold italic">founders who count.</span>
          </>
        }
        subtitle="Amara Digital was built on a stubborn idea: that marketing should be measurable, and that an agency should be paid for outcomes, not motion."
      />

      <section className="section bg-midnight">
        <div className="mx-auto max-w-4xl px-6 md:px-10 space-y-10 text-ivory/75 leading-relaxed text-lg">
          <Reveal>
            <p>
              Most agencies sell hours. We sell results. We started Amara
              Digital after years of watching small businesses pay six figures
              a year for dashboards no one read and reports nobody acted on.
              The work always looked busy. The bank account rarely moved.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              So we built the studio we'd want to hire. Senior operators, no
              account-manager layer, no inflated hours. Every engagement
              starts with the same question: <span className="gold">where
              is the money actually leaking, and how fast can we plug it?
              </span> The answer dictates the work — not the other way around.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              We work with founders and operators across the United States,
              from our home base in Michigan. Some are doing $40k a month and
              trying to hit $100k. Some are doing $5M and trying to hit $20M.
              The size of the number changes; the rigor doesn't.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-obsidian border-y border-gold/15">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-12 gap-10 mb-16">
            <div className="col-span-12 md:col-span-5">
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
                  ◆ What we believe
                </p>
              </Reveal>
              <h2 className="font-display font-light text-5xl md:text-6xl leading-[1.02] tracking-[-0.01em]">
                Four rules.{" "}
                <span className="gold italic">No exceptions.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <Reveal delay={0.2}>
                <p className="text-ivory/65 leading-relaxed">
                  These aren't poster-on-the-wall values. They're the actual
                  filters we run every decision through — pitch, hire, project,
                  client, headline. If something doesn't pass, it doesn't
                  ship.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/15 border border-gold/15 rounded-2xl overflow-hidden">
            {values.map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="bg-midnight p-8 md:p-12"
              >
                <div className="font-display text-gold text-3xl mb-5 italic">
                  {v.n}.
                </div>
                <h3 className="font-display text-3xl text-ivory mb-3">
                  {v.t}
                </h3>
                <p className="text-ivory/65 leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-midnight">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
              ◆ How we work
            </p>
          </Reveal>
          <h2 className="font-display font-light text-5xl md:text-6xl leading-[1.02] tracking-[-0.01em] max-w-3xl mb-16">
            A 30-day arc, every time.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/15 border border-gold/15 rounded-2xl overflow-hidden">
            {[
              {
                n: "01",
                t: "Week 1 · Diagnose",
                d: "We tear down your funnel, ad account, site, and CRM. You get a written punch list of what's broken, what's leaking, and what's working.",
              },
              {
                n: "02",
                t: "Weeks 2–3 · Build",
                d: "Tracking, creative, copy, pages, automations — whatever the diagnosis demands. Senior people doing senior work.",
              },
              {
                n: "03",
                t: "Week 4+ · Compound",
                d: "Test, scale, document, repeat. Weekly reporting tied to revenue, monthly reviews tied to strategy.",
              },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-midnight p-8 md:p-10"
              >
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold mb-6">
                  {s.n}
                </p>
                <h3 className="font-display text-3xl text-ivory mb-4">
                  {s.t}
                </h3>
                <p className="text-ivory/65 leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-16 flex flex-wrap gap-4">
              <Link to="/book" className="btn-gold">
                Start the diagnostic
                <span aria-hidden>→</span>
              </Link>
              <Link to="/services" className="btn-ghost-gold">
                See services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaStrip />
    </PageTransition>
  );
}
