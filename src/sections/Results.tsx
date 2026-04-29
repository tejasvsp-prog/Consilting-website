import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal, SplitText } from "../components/Reveal";

type Case = {
  industry: string;
  channel: string;
  headline: string;
  metric: string;
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  detail: string;
};

const cases: Case[] = [
  {
    industry: "E-commerce · DTC apparel",
    channel: "Meta Ads",
    headline: "From breakeven to 4.2× ROAS in 60 days.",
    metric: "Blended ROAS",
    value: 4.2,
    suffix: "×",
    decimals: 1,
    detail:
      "Rebuilt creative testing pipeline, restructured CBO campaigns, fixed CAPI tracking. Spend scaled 3.5× while CPA dropped 41%.",
  },
  {
    industry: "Local services · Home remodel",
    channel: "SEO + Web",
    headline: "+312% qualified leads, 90 days.",
    metric: "Lead growth",
    value: 312,
    suffix: "%",
    prefix: "+",
    detail:
      "New site shipped at 1.4s LCP, 28 location pages, programmatic SEO for service × city. Local pack rankings on every priority term.",
  },
  {
    industry: "Healthcare · Multi-location",
    channel: "Meta Ads + Web",
    headline: "$1.8M attributable revenue, year one.",
    metric: "Attributable revenue",
    value: 1.8,
    suffix: "M",
    prefix: "$",
    decimals: 1,
    detail:
      "Funnel rebuild + creative refresh + booking page redesign. 7,200 booked appointments tracked end-to-end through our reporting layer.",
  },
  {
    industry: "B2B services · Legal",
    channel: "Maintenance",
    headline: "99.98% uptime, 14-month run.",
    metric: "Uptime",
    value: 99.98,
    suffix: "%",
    decimals: 2,
    detail:
      "Took over a neglected WordPress build. Hardened security, migrated to managed hosting, set up monitoring. Two outages in 14 months — both resolved under fifteen minutes.",
  },
];

export default function Results() {
  return (
    <section id="results" className="section bg-midnight">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
                ◆ Selected results
              </p>
            </Reveal>
            <h2 className="font-display font-light text-5xl md:text-7xl leading-[1.02] tracking-[-0.01em] max-w-3xl">
              <SplitText text="The work," />{" "}
              <span className="gold italic">
                <SplitText text="in numbers." delay={0.2} />
              </span>
            </h2>
          </div>
          <Reveal delay={0.4}>
            <p className="text-ivory/55 max-w-sm">
              Anonymized case studies from real engagements. Full breakdowns
              available on request, under NDA.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <ResultCard key={i} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultCard({ c, index }: { c: Case; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        delay: (index % 2) * 0.1,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      whileHover={{ y: -4 }}
      className="card p-8 md:p-10"
    >
      <div className="flex items-center justify-between mb-6 font-mono text-[10px] uppercase tracking-[0.28em]">
        <span className="text-ivory/40">{c.industry}</span>
        <span className="text-gold">{c.channel}</span>
      </div>

      <Counter
        value={c.value}
        suffix={c.suffix}
        prefix={c.prefix}
        decimals={c.decimals ?? 0}
      />

      <p className="font-display text-2xl md:text-3xl text-ivory mt-4 leading-snug">
        {c.headline}
      </p>
      <div className="gold-divider my-6" />
      <p className="text-ivory/60 leading-relaxed text-sm">{c.detail}</p>
      <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/40">
        Metric: {c.metric}
      </p>
    </motion.article>
  );
}

function Counter({
  value,
  suffix,
  prefix = "",
  decimals = 0,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, value, {
        duration: 1.6,
        ease: [0.2, 0.8, 0.2, 1],
      });
      return controls.stop;
    }
  }, [inView, value, mv]);

  return (
    <div className="font-display text-gold text-6xl md:text-7xl leading-none flex items-baseline gap-1">
      {prefix}
      <motion.span ref={ref}>{display}</motion.span>
      <span className="text-5xl md:text-6xl">{suffix}</span>
    </div>
  );
}
