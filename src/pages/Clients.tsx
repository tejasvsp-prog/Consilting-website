import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition, { PageHeader } from "../components/PageTransition";
import { Reveal } from "../components/Reveal";
import CtaStrip from "../sections/CtaStrip";

type CaseStudy = {
  client: string;
  industry: string;
  scope: string[];
  headline: string;
  metric: string;
  metricValue: string;
  story: string;
  range: string;
};

const placeholderCases: CaseStudy[] = [
  {
    client: "Client name pending",
    industry: "DTC apparel",
    scope: ["Meta Ads", "Website Development"],
    headline: "From breakeven to 4.2× ROAS in 60 days.",
    metric: "Blended ROAS",
    metricValue: "4.2×",
    story:
      "Inherited a stalled Meta account spending $40k/mo at break-even. Rebuilt CAPI tracking, restructured to consolidated ASC, shipped 22 new creative concepts in the first 60 days. Spend scaled to $140k/mo with CPA down 41%.",
    range: "Q3–Q4 2024",
  },
  {
    client: "Client name pending",
    industry: "Home remodeling · Multi-state",
    scope: ["SEO", "Website Development"],
    headline: "+312% qualified leads from organic in 90 days.",
    metric: "Lead growth",
    metricValue: "+312%",
    story:
      "Replaced a slow WordPress site with a custom Next.js build at 1.4s LCP. Launched 28 service × city programmatic pages and a content hub. Local pack rankings on every priority term within 90 days.",
    range: "Q1 2025",
  },
  {
    client: "Client name pending",
    industry: "Multi-location healthcare",
    scope: ["Meta Ads", "Website Development", "SEO"],
    headline: "$1.8M attributable revenue, year one.",
    metric: "Attributable revenue",
    metricValue: "$1.8M",
    story:
      "Funnel rebuild plus a redesigned booking experience cut drop-off by 38%. Meta Ads brought in 7,200 booked appointments tracked end-to-end through our reporting layer.",
    range: "Year 1, ongoing",
  },
  {
    client: "Client name pending",
    industry: "Boutique law firm",
    scope: ["Website Maintenance", "SEO"],
    headline: "99.98% uptime, 14-month run.",
    metric: "Uptime",
    metricValue: "99.98%",
    story:
      "Took over a neglected WordPress build with three open vulnerabilities and a failing SSL renewal. Hardened security, migrated to managed hosting, set up uptime + performance monitoring. Two outages in 14 months, both resolved under fifteen minutes.",
    range: "Mar 2024 – present",
  },
  {
    client: "Client name pending",
    industry: "Beauty & wellness",
    scope: ["Meta Ads", "Website Development"],
    headline: "First $100k month, eight weeks in.",
    metric: "Revenue / mo",
    metricValue: "$118k",
    story:
      "New brand site shipped at 1.6s LCP, paired with a tightly structured Meta launch. Hit $118k in attributable revenue in month two on $24k of ad spend.",
    range: "Q4 2024",
  },
  {
    client: "Client name pending",
    industry: "B2B SaaS",
    scope: ["SEO", "Website Maintenance"],
    headline: "Doubled organic demos in two quarters.",
    metric: "Organic demos / mo",
    metricValue: "2.1×",
    story:
      "Rebuilt site IA, killed 60 thin pages, shipped 14 long-form articles tied to bottom-funnel intent. Demos from organic doubled with no paid spend increase.",
    range: "H1 2025",
  },
];

export default function Clients() {
  return (
    <PageTransition>
      <PageHeader
        tag="Clients"
        title={
          <>
            Operators we've{" "}
            <span className="gold italic">moved the line for.</span>
          </>
        }
        subtitle="A selection of recent engagements, each showing the lever pulled, the time horizon, and the metric that mattered. Names anonymized — full case studies available under NDA on request."
      />

      <section className="section bg-midnight">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-12">
              ◆ Case studies
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {placeholderCases.map((c, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.85,
                  delay: (i % 2) * 0.08,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                whileHover={{ y: -4 }}
                className="card p-8 md:p-10 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6 font-mono text-[10px] uppercase tracking-[0.28em]">
                  <div>
                    <p className="text-ivory/40">{c.industry}</p>
                    <p className="text-gold mt-1">{c.client}</p>
                  </div>
                  <span className="text-ivory/40">{c.range}</span>
                </div>

                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-display text-gold text-5xl md:text-6xl leading-none">
                    {c.metricValue}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/50">
                    {c.metric}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-ivory leading-snug mb-5">
                  {c.headline}
                </h3>
                <p className="text-ivory/65 leading-relaxed text-sm mb-8">
                  {c.story}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-6 border-t border-gold/15">
                  {c.scope.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] uppercase tracking-[0.24em] font-medium text-gold border border-gold/30 rounded-full px-3 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-16 card p-8 md:p-12 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold mb-4">
                ◆ Want the full version?
              </p>
              <h3 className="font-display text-3xl md:text-5xl leading-tight mb-6">
                Real names. Real numbers. Real screenshots.
              </h3>
              <p className="text-ivory/65 max-w-xl mx-auto mb-10">
                We share full case studies — with named clients, dashboard
                screenshots, and the actual creative that worked — under NDA
                on a discovery call.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/book" className="btn-gold">
                  Book a call
                  <span aria-hidden>→</span>
                </Link>
                <Link to="/contact" className="btn-ghost-gold">
                  Send a message
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaStrip />
    </PageTransition>
  );
}
