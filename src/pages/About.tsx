import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition, { PageHeader } from "../components/PageTransition";
import { Reveal } from "../components/Reveal";
import CtaStrip from "../sections/CtaStrip";

/* Why us — what makes Amara different */
const whyUs = [
  {
    n: "I",
    t: "Senior engineers, in the room",
    d: "We hire engineers and strategists with a decade-plus shipping work that performs. No interns running your account. No offshored execution. The people who pitch you are the people who do the work.",
  },
  {
    n: "II",
    t: "Modern stack, future-proof",
    d: "React, Next.js, TypeScript, Tailwind, headless CMS. We build on the same tools the best product teams in the world use — fast, accessible, and ready to scale beyond a single agency cycle.",
  },
  {
    n: "III",
    t: "Best-in-class integrations",
    d: "Stripe, HubSpot, Salesforce, Sanity, Segment, GA4, Klaviyo. Your CRM, payments, analytics, and marketing tools wired up properly on day one — server-side, with full attribution.",
  },
  {
    n: "IV",
    t: "Years of cross-industry experience",
    d: "DTC apparel, multi-location healthcare, B2B SaaS, hospitality, nonprofits, professional services. We've already seen the funnel you're trying to fix — and we know what doesn't work.",
  },
];

/* How we work — 5 phases, each with a job and a deliverable */
const steps = [
  {
    n: "01",
    t: "Consult",
    d: "Listen to your goals. Audit what's working, what's leaking, and what's been tried.",
  },
  {
    n: "02",
    t: "Plan",
    d: "Develop a custom roadmap with milestones, deliverables, and a clear cost.",
  },
  {
    n: "03",
    t: "Build",
    d: "Senior engineers and strategists execute — code, copy, creative, campaigns.",
  },
  {
    n: "04",
    t: "Launch",
    d: "Deploy, instrument, and measure. Every metric tied back to revenue.",
  },
  {
    n: "05",
    t: "Compound",
    d: "Optimize, scale, and document. Every month, the system gets cheaper to run.",
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

      {/* Story */}
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
              starts with the same question:{" "}
              <span className="gold">
                where is the money actually leaking, and how fast can we plug
                it?
              </span>{" "}
              The answer dictates the work — not the other way around.
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

      {/* Why us */}
      <section className="section bg-obsidian border-y border-gold/15">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-12 gap-10 mb-16">
            <div className="col-span-12 md:col-span-5">
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
                  ◆ Why us
                </p>
              </Reveal>
              <h2 className="font-display font-light text-5xl md:text-6xl leading-[1.02] tracking-[-0.01em]">
                Built by the best,{" "}
                <span className="gold italic">on the best tech.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <Reveal delay={0.2}>
                <p className="text-ivory/65 leading-relaxed">
                  We don't water down the team or run last year's playbook.
                  Every engagement is staffed by senior engineers and
                  strategists, built on a modern stack, and integrated with
                  the tools your business already runs on.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/15 border border-gold/15 rounded-2xl overflow-hidden">
            {whyUs.map((w, i) => (
              <motion.div
                key={w.t}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.85,
                  delay: i * 0.1,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="bg-midnight p-8 md:p-12 group relative overflow-hidden"
              >
                {/* Pulsing icon ring with the roman numeral */}
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    rotate: [0, 6, 0, -6, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                  className="size-14 rounded-full border-2 border-gold flex items-center justify-center mb-7 relative"
                >
                  {/* Halo */}
                  <motion.span
                    aria-hidden
                    animate={{ opacity: [0.15, 0.55, 0.15] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full bg-gold/40 blur-md"
                  />
                  <span className="font-display italic text-gold text-xl relative">
                    {w.n}
                  </span>
                </motion.div>
                <h3 className="font-display text-2xl md:text-3xl text-ivory mb-4">
                  {w.t}
                </h3>
                <p className="text-ivory/65 leading-relaxed">{w.d}</p>

                {/* Gold corner accent that draws on hover */}
                <motion.span
                  aria-hidden
                  className="absolute top-0 right-0 h-px bg-gold origin-right"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                  style={{ width: "40%" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work — 5 steps with flowing gold connector */}
      <section className="section bg-midnight">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
              ◆ How we work
            </p>
          </Reveal>
          <h2 className="font-display font-light text-5xl md:text-6xl leading-[1.02] tracking-[-0.01em] max-w-3xl mb-20">
            Five moves.{" "}
            <span className="gold italic">Same every time.</span>
          </h2>

          <ProcessTrack />

          <Reveal delay={0.4}>
            <div className="mt-20 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">
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

/* ──────────────────────────────────────────────────────────────────
   ProcessTrack — five numbered nodes connected by a gold rule that
   has a continuously-flowing gradient (an LED-style progress bar
   that loops left to right). Mobile collapses to a vertical stack
   with an equivalent flowing line on the left.
   ────────────────────────────────────────────────────────────── */
function ProcessTrack() {
  return (
    <div className="relative">
      {/* Desktop horizontal track */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Underlying static rule */}
          <div className="absolute top-12 left-[6%] right-[6%] h-px bg-gold/20" />
          {/* Flowing gradient overlay — the moving energy */}
          <FlowingLine orientation="horizontal" />

          <div className="relative grid grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="relative flex flex-col items-center text-center"
              >
                <Node index={i}>
                  <span className="font-display text-gold text-xl">{s.n}</span>
                </Node>
                <h3 className="font-display text-2xl text-ivory mt-6 mb-3">
                  {s.t}
                </h3>
                <p className="text-ivory/60 leading-relaxed text-sm max-w-[18ch]">
                  {s.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile vertical track */}
      <div className="md:hidden relative pl-16">
        {/* Static vertical rule */}
        <div className="absolute left-6 top-6 bottom-6 w-px bg-gold/20" />
        {/* Flowing vertical gradient */}
        <FlowingLine orientation="vertical" />

        <div className="space-y-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="relative"
            >
              <div className="absolute -left-16">
                <Node index={i}>
                  <span className="font-display text-gold text-base">
                    {s.n}
                  </span>
                </Node>
              </div>
              <h3 className="font-display text-2xl text-ivory mb-2">{s.t}</h3>
              <p className="text-ivory/60 leading-relaxed text-sm">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Single numbered node — circle with a continuously pulsing halo so
   even at rest each step has a quiet heartbeat. */
function Node({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <div className="relative shrink-0">
      <motion.span
        aria-hidden
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          delay: index * 0.4,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-gold/30"
      />
      <div className="relative size-12 md:size-24 rounded-full bg-midnight border-2 border-gold flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

/* Flowing gradient that travels along the connector. Implemented as
   an absolutely-positioned rect with a linear-gradient background
   whose position animates infinitely. Direction depends on
   orientation. */
function FlowingLine({
  orientation,
}: {
  orientation: "horizontal" | "vertical";
}) {
  if (orientation === "horizontal") {
    return (
      <motion.div
        aria-hidden
        className="absolute top-12 left-[6%] right-[6%] h-px"
        style={{
          background:
            "linear-gradient(90deg, rgba(212,176,97,0) 0%, rgba(212,176,97,0) 40%, rgba(212,176,97,1) 50%, rgba(212,176,97,0) 60%, rgba(212,176,97,0) 100%)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["100% 0%", "-100% 0%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
    );
  }
  return (
    <motion.div
      aria-hidden
      className="absolute left-6 top-6 bottom-6 w-px"
      style={{
        background:
          "linear-gradient(180deg, rgba(212,176,97,0) 0%, rgba(212,176,97,0) 40%, rgba(212,176,97,1) 50%, rgba(212,176,97,0) 60%, rgba(212,176,97,0) 100%)",
        backgroundSize: "100% 200%",
      }}
      animate={{ backgroundPosition: ["0% 100%", "0% -100%"] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    />
  );
}
