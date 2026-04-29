import { motion } from "framer-motion";
import { Reveal, SplitText } from "../components/Reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  rating: number;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I've worked with three agencies. Amara was the first one that read our P&L before they ran a single ad. We tripled spend in a quarter and our CAC went down.",
    name: "Marcus Whitfield",
    role: "Founder",
    company: "North Lake Outfitters",
    industry: "DTC retail",
    rating: 5,
    initials: "MW",
  },
  {
    quote:
      "The new site paid for itself in nine weeks. Booking rate from organic doubled, and the AI qualifier they built means we only call leads that are actually ready to buy.",
    name: "Priya Desai",
    role: "Owner",
    company: "Bayview Smiles",
    industry: "Healthcare",
    rating: 5,
    initials: "PD",
  },
  {
    quote:
      "They didn't sell us a retainer — they sold us an outcome. Every Friday, the dashboard tells me exactly how much revenue Meta produced this week. No fluff.",
    name: "Jordan Reyes",
    role: "VP Growth",
    company: "Cedar & Co.",
    industry: "Home services",
    rating: 5,
    initials: "JR",
  },
  {
    quote:
      "The level of seniority on the calls is unusual. We're a small business and we still get the founder's attention. That's worth more than the line item.",
    name: "Sarah Lindqvist",
    role: "Co-founder",
    company: "Halo Studio",
    industry: "Beauty & wellness",
    rating: 5,
    initials: "SL",
  },
  {
    quote:
      "AI automation that actually works. Our intake team handles 40% more leads with the same headcount. The thing has paid for itself ten times over.",
    name: "Daniel Ortega",
    role: "Managing Partner",
    company: "Ortega Law",
    industry: "Legal",
    rating: 5,
    initials: "DO",
  },
  {
    quote:
      "We came in for ads and stayed for everything else. They quietly became the operating system of our marketing. I'd recommend them to anyone who isn't a competitor.",
    name: "Hannah Chen",
    role: "CEO",
    company: "Mira Apparel",
    industry: "DTC apparel",
    rating: 5,
    initials: "HC",
  },
];

export default function Testimonials() {
  return (
    <section id="voices" className="section bg-obsidian relative overflow-hidden">
      <div
        aria-hidden
        className="aurora bg-gold/10"
        style={{ width: 700, height: 700, top: "10%", left: "-10%" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
                ◆ Voices
              </p>
            </Reveal>
            <h2 className="font-display font-light text-5xl md:text-7xl leading-[1.02] tracking-[-0.01em] max-w-3xl">
              <SplitText text="Operators who" />{" "}
              <span className="gold-text italic">
                <SplitText text="stayed." delay={0.15} />
              </span>
            </h2>
          </div>
          <Reveal delay={0.4}>
            <div className="flex items-center gap-3">
              <Stars n={5} />
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-ivory/60">
                4.9 / 5 average · 92% retention
              </span>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: (i % 3) * 0.08,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-7 md:p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <Stars n={t.rating} />
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ivory/40">
                  {t.industry}
                </span>
              </div>
              <p className="font-display text-lg md:text-xl text-ivory leading-snug">
                <span className="text-gold">"</span>
                {t.quote}
                <span className="text-gold">"</span>
              </p>
              <div className="mt-6 pt-5 border-t border-gold/15 flex items-center gap-4">
                <Avatar initials={t.initials} />
                <div>
                  <p className="font-medium text-ivory text-sm">{t.name}</p>
                  <p className="text-xs text-ivory/50">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <div
      className="flex items-center gap-1 text-gold"
      aria-label={`${n} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.svg
          key={i}
          initial={{ scale: 0, rotate: -30 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, type: "spring", stiffness: 250 }}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < n ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.7L18 22l-6-3.6L6 22l1.5-7.3L2 10l7.1-1.1z" />
        </motion.svg>
      ))}
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="relative size-11 rounded-full overflow-hidden flex items-center justify-center font-display text-sm shrink-0 text-midnight bg-gradient-to-br from-gold-100 via-gold to-gold-700">
      <svg
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        viewBox="0 0 48 48"
        aria-hidden
      >
        <defs>
          <pattern id="dot" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.7" fill="white" />
          </pattern>
        </defs>
        <rect width="48" height="48" fill="url(#dot)" />
      </svg>
      <span className="relative font-medium tracking-wider">{initials}</span>
    </div>
  );
}
