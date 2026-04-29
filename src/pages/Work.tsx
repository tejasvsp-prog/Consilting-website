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
  hue: string; // tailwind bg color
};

const testimonials: Testimonial[] = [
  {
    quote:
      "They listened for an entire week before they wrote a single slide. By the time the proposal arrived I felt like they understood the company better than half my leadership team.",
    name: "Aarav Mehta",
    role: "Managing Director",
    company: "Suvarna Textiles",
    industry: "Manufacturing",
    rating: 5,
    initials: "AM",
    hue: "bg-rust",
  },
  {
    quote:
      "Senior, every meeting. No deck-jockey associates. They sat in our standups, debugged the operating model with us, and then quietly got out of the way.",
    name: "Priya Iyer",
    role: "Founder & CEO",
    company: "Halcyon Hospitality",
    industry: "Hospitality",
    rating: 5,
    initials: "PI",
    hue: "bg-indigo",
  },
  {
    quote:
      "We came in for a pricing review and left with a different company. They have an unusual gift for telling you the uncomfortable thing without being unkind about it.",
    name: "Rohan Saxena",
    role: "COO",
    company: "Northwind Logistics",
    industry: "Logistics",
    rating: 5,
    initials: "RS",
    hue: "bg-teal",
  },
  {
    quote:
      "The diligence work on our acquisition was the cleanest I've ever seen. Day-100 plan was already half-written before the deal closed. We didn't lose a quarter.",
    name: "Meera Nair",
    role: "CFO",
    company: "Coromandel Foods",
    industry: "FMCG",
    rating: 5,
    initials: "MN",
    hue: "bg-saffron",
  },
  {
    quote:
      "Most advisors leave a deck. They left us a team that knows what to do on Monday morning. That's the difference. We've kept them on quarterly retainer.",
    name: "Vikram Banerjee",
    role: "Group CEO",
    company: "Ananta Healthcare",
    industry: "Healthcare",
    rating: 5,
    initials: "VB",
    hue: "bg-marigold",
  },
  {
    quote:
      "I asked them to challenge our five-year plan. They challenged the question instead. The conversation that followed reshaped how our board thinks about growth.",
    name: "Aisha Rahman",
    role: "Chair",
    company: "Lumen Media Group",
    industry: "Media",
    rating: 5,
    initials: "AR",
    hue: "bg-rust",
  },
];

export default function Work() {
  return (
    <div className="bg-ivory text-ink">
      <section className="pt-40 md:pt-52 pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-ink/60 mb-8">
              ◇ Voices from the work
            </p>
          </Reveal>
          <h1 className="font-display text-5xl md:text-8xl leading-[0.98]">
            <SplitText text="The clients" />
            <br />
            <span className="italic text-rust">
              <SplitText text="kept us." delay={0.15} />
            </span>
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-2xl text-lg text-ink/75 leading-relaxed">
              We don't run case-study marketing — every engagement is private
              by default. With permission, here are some things our clients
              have said.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: (i % 2) * 0.1,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              whileHover={{ y: -6 }}
              className="relative bg-cream/60 border border-ink/10 rounded-2xl p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <Stars n={t.rating} />
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/50">
                  {t.industry}
                </span>
              </div>
              <p className="font-display text-xl md:text-2xl leading-[1.3] text-ink">
                <span className="text-rust">"</span>
                {t.quote}
                <span className="text-rust">"</span>
              </p>
              <div className="mt-8 pt-6 border-t border-ink/10 flex items-center gap-4">
                <Avatar initials={t.initials} hue={t.hue} />
                <div>
                  <p className="font-medium text-ink">{t.name}</p>
                  <p className="text-sm text-ink/60">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-ivory py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
          <Reveal>
            <div>
              <div className="font-display text-7xl text-marigold leading-none">
                4.9
              </div>
              <div className="mt-3 flex items-center gap-1 text-marigold">
                <Stars n={5} />
              </div>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.28em] text-ivory/60">
                Average client rating
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-2xl leading-snug">
              92% of clients return for a second engagement.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-display text-2xl leading-snug">
              Engagements span 14 industries — and counting.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="font-display text-2xl leading-snug">
              Every engagement is led by a partner.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${n} out of 5 stars`}>
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
          className={i < n ? "text-marigold" : "text-ink/20"}
        >
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.7L18 22l-6-3.6L6 22l1.5-7.3L2 10l7.1-1.1z" />
        </motion.svg>
      ))}
    </div>
  );
}

function Avatar({ initials, hue }: { initials: string; hue: string }) {
  return (
    <div
      className={`relative size-12 rounded-full overflow-hidden ${hue} text-ivory flex items-center justify-center font-display text-base shrink-0`}
    >
      {/* layered dot pattern as the "photo" */}
      <svg
        className="absolute inset-0 opacity-40 mix-blend-overlay"
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
      <span className="relative">{initials}</span>
    </div>
  );
}
