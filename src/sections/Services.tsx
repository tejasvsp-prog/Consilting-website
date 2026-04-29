import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Reveal, SplitText } from "../components/Reveal";

type Service = {
  n: string;
  t: string;
  short: string;
  body: string;
  bullets: string[];
  to: string;
};

export const services: Service[] = [
  {
    n: "01",
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
    to: "/services/seo",
  },
  {
    n: "02",
    t: "Website Development",
    short: "Sites that sell, not sit.",
    body:
      "Hand-built, conversion-obsessed websites in React and Next.js. Sub-2-second loads, design that earns the click, and an admin your team can actually run.",
    bullets: [
      "Custom design & build",
      "Headless CMS integration",
      "Speed & Core Web Vitals tuning",
      "Booking, payments, integrations",
    ],
    to: "/services/website-development",
  },
  {
    n: "03",
    t: "Website Maintenance",
    short: "Always fast. Always live.",
    body:
      "A managed retainer for the site you already have. Updates, security patching, performance monitoring, content edits, and one human to call when something breaks at 9pm on a Friday.",
    bullets: [
      "Monthly updates & backups",
      "Uptime & performance monitoring",
      "Content edits within 24 hours",
      "Security patching & SSL",
    ],
    to: "/services/website-maintenance",
  },
  {
    n: "04",
    t: "Meta Ads",
    short: "Facebook & Instagram performance.",
    body:
      "Creative-led campaigns engineered for scale. Sharp angles, native-feeling video, and a budget structure that compounds — until the cost per acquisition stops surprising you.",
    bullets: [
      "Full-funnel campaign architecture",
      "Creative testing pipelines",
      "Pixel & CAPI server-side tracking",
      "Weekly P&L-aware reporting",
    ],
    to: "/services/meta-ads",
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
          <span className="gold italic">
            <SplitText text="growth." delay={0.3} />
          </span>
        </h2>

        <div ref={ref} className="relative mt-24">
          <div className="absolute left-6 md:left-0 top-0 bottom-0 w-px bg-gold/15 hidden md:block" />
          <motion.div
            style={{ height: lineH }}
            className="absolute left-6 md:left-0 top-0 w-px bg-gold origin-top hidden md:block"
          />

          <div className="space-y-24 md:space-y-32">
            {services.map((s) => (
              <Link
                key={s.n}
                to={s.to}
                className="block group focus:outline-none focus:ring-2 focus:ring-gold/40 rounded-xl"
              >
                <motion.article
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                  className="grid grid-cols-12 gap-6 md:gap-10 md:pl-12"
                >
                  <div className="col-span-12 md:col-span-2">
                    <span className="font-mono text-xs uppercase tracking-[0.28em] text-gold">
                      {s.n} · {s.short}
                    </span>
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <h3 className="font-display font-light text-4xl md:text-6xl leading-[0.95] tracking-[-0.01em] transition-transform duration-500 group-hover:translate-x-1">
                      {s.t}
                    </h3>
                    <span className="mt-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] font-medium text-gold">
                      Explore service
                      <span
                        aria-hidden
                        className="inline-block transition-transform duration-300 group-hover:translate-x-2"
                      >
                        →
                      </span>
                    </span>
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
