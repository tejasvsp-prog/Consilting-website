import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, SplitText } from "../components/Reveal";

type Service = {
  n: string;
  t: string;
  short: string;
  body: string;
  bullets: string[];
};

const services: Service[] = [
  {
    n: "01",
    t: "Meta Ads",
    short: "Facebook & Instagram performance.",
    body:
      "Creative-led campaigns engineered for scale. We pair sharp angles, native-feeling video, and a budget structure that compounds — until the cost per acquisition stops surprising you.",
    bullets: [
      "Full-funnel campaign architecture",
      "Creative testing pipelines",
      "Pixel & CAPI server-side tracking",
      "Weekly P&L-aware reporting",
    ],
  },
  {
    n: "02",
    t: "Website Development",
    short: "Sites that sell, not sit.",
    body:
      "Hand-built, conversion-obsessed websites in React and Next.js. Sub-2-second loads, design that earns the click, and an admin your team can actually run. Maintenance plans included.",
    bullets: [
      "Custom design & build",
      "Headless CMS integration",
      "Speed & Core Web Vitals tuning",
      "Ongoing maintenance retainer",
    ],
  },
  {
    n: "03",
    t: "SEO",
    short: "Compounding traffic.",
    body:
      "We don't chase keywords — we map intent and ship content the algorithm rewards. Technical SEO, programmatic pages, and authority links that move you onto page one and keep you there.",
    bullets: [
      "Technical & on-page audits",
      "Topical authority strategy",
      "Programmatic SEO at scale",
      "Backlink & digital PR",
    ],
  },
  {
    n: "04",
    t: "AI Automation",
    short: "Hire software, not headcount.",
    body:
      "Custom AI workflows that handle the repetitive parts of your business — lead qualification, follow-ups, reporting, content ops. Built on your stack, owned by you, working while you sleep.",
    bullets: [
      "Lead routing & qualification",
      "AI inbox & follow-up agents",
      "Internal ops automation",
      "Custom GPT-based copilots",
    ],
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="services" className="section bg-midnight">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
            ◆ Services
          </p>
        </Reveal>
        <h2 className="font-display font-light text-5xl md:text-7xl leading-[1.02] tracking-[-0.01em] max-w-5xl">
          <SplitText text="Four levers." />{" "}
          <span className="text-ivory/40">
            <SplitText text="One outcome:" delay={0.15} />
          </span>{" "}
          <span className="gold-text italic">
            <SplitText text="growth." delay={0.3} />
          </span>
        </h2>

        <div ref={ref} className="relative mt-24">
          {/* spine */}
          <div className="absolute left-6 md:left-0 top-0 bottom-0 w-px bg-gold/15 hidden md:block" />
          <motion.div
            style={{ height: lineH }}
            className="absolute left-6 md:left-0 top-0 w-px bg-gold origin-top hidden md:block"
          />

          <div className="space-y-24 md:space-y-32">
            {services.map((s) => (
              <motion.article
                key={s.n}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
                className="grid grid-cols-12 gap-6 md:gap-10 md:pl-12 group"
              >
                <div className="col-span-12 md:col-span-2">
                  <span className="font-mono text-xs uppercase tracking-[0.28em] text-gold">
                    {s.n} · {s.short}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <h3 className="font-display font-light text-4xl md:text-6xl leading-[0.95] tracking-[-0.01em] transition-transform duration-700 group-hover:translate-x-1">
                    {s.t}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="text-ivory/75 leading-relaxed text-base md:text-lg">
                    {s.body}
                  </p>
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm text-ivory/70"
                      >
                        <span className="mt-2 size-1 rounded-full bg-gold shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
