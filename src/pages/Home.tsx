import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import Wordmark from "../components/Wordmark";
import { Reveal, SplitText } from "../components/Reveal";
import Marquee from "../components/Marquee";

const sectorWords = [
  "Manufacturing",
  "Hospitality",
  "Healthcare",
  "Fintech",
  "Retail",
  "Logistics",
  "D2C",
  "Education",
  "Real Estate",
  "Energy",
  "Media",
  "Agritech",
  "SaaS",
  "Automotive",
  "Public Sector",
];

const stats = [
  { k: "11", v: "Years advising" },
  { k: "60+", v: "Engagements shipped" },
  { k: "14", v: "Sectors served" },
  { k: "1:1", v: "Always tailored" },
];

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yMark = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-30%"]);
  const yMeta = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "60%"]);

  return (
    <div className="bg-ivory text-ink">
      {/* Opening — wordmark as the visual */}
      <section
        ref={ref}
        className="relative pt-40 md:pt-52 pb-24 md:pb-40 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="grid grid-cols-12 gap-6"
          >
            <motion.p
              style={{ y: yMeta }}
              className="col-span-12 md:col-span-3 font-mono text-xs uppercase tracking-[0.32em] text-ink/60"
            >
              <span className="inline-block size-1.5 bg-rust mr-2 -translate-y-[2px] align-middle" />
              An advisory · India · Worldwide
            </motion.p>

            <motion.div
              style={{ y: yMark }}
              className="col-span-12 md:col-span-9 text-ink"
            >
              <Wordmark size="xl" withTagline animateBar />
            </motion.div>
          </motion.div>

          <div className="mt-20 md:mt-32 grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-7">
              <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">
                <SplitText text="We don't sell decks." />
                <br />
                <SplitText text="We sit on your side of the table" delay={0.2} />
                <span className="text-rust">.</span>
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <Reveal delay={0.4}>
                <p className="text-ink/75 leading-relaxed">
                  Consilting is a small, senior advisory rooted in India and
                  working everywhere. Each engagement is shaped to the company
                  in front of us — not pulled off a shelf.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary">
                    Contact for pricing
                    <span aria-hidden>→</span>
                  </Link>
                  <Link to="/process" className="btn-ghost">
                    How we work
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Sector marquee */}
      <section className="border-y border-ink/10 bg-cream/60 py-8">
        <Marquee>
          {sectorWords.map((s, i) => (
            <span
              key={i}
              className="px-8 font-display text-2xl md:text-4xl text-ink/80 whitespace-nowrap"
            >
              {s} <span className="text-rust mx-4">·</span>
            </span>
          ))}
        </Marquee>
        <p className="text-center mt-6 font-mono text-xs uppercase tracking-[0.32em] text-ink/50">
          Our clients are in everything.
        </p>
      </section>

      {/* Statement */}
      <section className="py-32 md:py-44">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-ink/60 mb-10">
              ◇ The thesis
            </p>
          </Reveal>
          <h2 className="font-display text-3xl md:text-6xl leading-[1.1] max-w-5xl">
            <SplitText text="Strategy is the easy half." />{" "}
            <span className="text-ink/40">
              <SplitText text="Doing it inside a real company — with real people, real budgets, real seasons — is the work." delay={0.2} />
            </span>
          </h2>
          <Reveal delay={0.4}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  t: "Senior, always",
                  d: "No pyramid. The person who scopes the work is the one who delivers it. You will know us by name.",
                },
                {
                  t: "Tailored, never templated",
                  d: "We don't run a fixed playbook over your business. Scope, depth and pricing are shaped to the question.",
                },
                {
                  t: "Built to leave",
                  d: "We design the engagement so your team owns it after we go. Knowledge transfer is the deliverable.",
                },
              ].map((c, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="border-t border-ink pt-6">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-rust mb-3">
                      0{i + 1}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl mb-3">
                      {c.t}
                    </h3>
                    <p className="text-ink/75 leading-relaxed">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink text-ivory py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div>
                <div className="font-display text-6xl md:text-7xl text-marigold leading-none">
                  {s.k}
                </div>
                <div className="mt-4 font-mono text-xs uppercase tracking-[0.28em] text-ivory/60">
                  {s.v}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing posture */}
      <section className="py-32 md:py-44 bg-cream/50">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-ink/60 mb-6">
                ◇ On pricing
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
                We don't publish a price list.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <Reveal delay={0.2}>
              <p className="text-lg leading-relaxed text-ink/80">
                Every engagement is a conversation before it is a contract.
                A two-week diagnostic and a six-month transformation can't
                share the same number. We tailor scope and pricing to the
                shape of the work — and to you.
              </p>
              <p className="text-lg leading-relaxed text-ink/80 mt-6">
                When we meet, we'll talk through what you're trying to do, who
                it touches, and what success looks like. A proposal follows
                within a week.
              </p>
              <Link to="/contact" className="btn-primary mt-10">
                Schedule a meeting
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
