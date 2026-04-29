import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Reveal, SplitText } from "../components/Reveal";

const services = [
  {
    n: "01",
    t: "Strategy & Diagnostic",
    d: "A clear-eyed read on where you are, where the market is going, and where the leverage actually sits. Two to six weeks. Ends in a single page you'll keep on your wall.",
    items: ["Market & competitive landscape", "Operating model review", "Growth thesis", "Board-ready narrative"],
  },
  {
    n: "02",
    t: "Operating Transformation",
    d: "When the strategy is right but the company can't quite move. We sit inside the operation, fix the friction, and rewire incentives until the wheel turns on its own.",
    items: ["Org & process design", "P&L by product / region", "Pricing & commercial ops", "Vendor consolidation"],
  },
  {
    n: "03",
    t: "Founder & CEO Counsel",
    d: "A standing line for the most senior decision-makers. Quiet, confidential, weekly. The questions you can't ask anyone on payroll.",
    items: ["Weekly 1:1 cadence", "Board prep", "Hiring & exits", "Capital decisions"],
  },
  {
    n: "04",
    t: "M&A and Capital",
    d: "Buy-side and sell-side advisory with a bias toward the operating reality after the deal closes. The thesis must survive contact with the org chart.",
    items: ["Target screening & diligence", "Synergy modelling", "Integration playbook", "Post-deal day-100 plan"],
  },
  {
    n: "05",
    t: "Public & Policy Work",
    d: "Selectively, we work with public-sector and policy-adjacent clients on questions where the right answer matters more than the easy one.",
    items: ["State & union government", "Regulator engagements", "Public-private structures", "Impact measurement"],
  },
];

export default function Services() {
  return (
    <div className="bg-ivory text-ink">
      <section className="pt-40 md:pt-52 pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-ink/60 mb-8">
              ◇ Services — Five doors in, one room
            </p>
          </Reveal>
          <h1 className="font-display text-5xl md:text-8xl leading-[0.98]">
            <SplitText text="Bespoke work," />
            <br />
            <span className="text-ink/40">
              <SplitText text="for any sector." delay={0.2} />
            </span>
          </h1>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
              className="group grid grid-cols-12 gap-6 py-12 border-t border-ink/15"
            >
              <div className="col-span-12 md:col-span-2 font-mono text-sm uppercase tracking-[0.28em] text-rust">
                {s.n}
              </div>
              <div className="col-span-12 md:col-span-5">
                <h2 className="font-display text-3xl md:text-5xl leading-[1.05] transition-transform duration-700 group-hover:translate-x-2">
                  {s.t}
                </h2>
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className="text-ink/80 leading-relaxed">{s.d}</p>
                <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="font-mono text-xs uppercase tracking-[0.18em] text-ink/70 border-l border-ink/20 pl-3"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-ivory py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <Reveal>
            <h3 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl">
              Don't see your problem on the list?
            </h3>
          </Reveal>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] border border-ivory/40 hover:border-rust hover:text-rust px-7 py-4 rounded-full transition-colors"
          >
            Tell us about it
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
