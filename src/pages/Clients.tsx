import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition, { PageHeader } from "../components/PageTransition";
import { Reveal } from "../components/Reveal";
import CtaStrip from "../sections/CtaStrip";

type ClientCase = {
  client: string;
  industry: string;
  location: string;
  scope: string[];
  story: string;
  url?: string;
};

/**
 * Real client list. Scope tags reflect best-current understanding —
 * confirm with the team and update before publishing.
 */
const clients: ClientCase[] = [
  {
    client: "Lansing Area Veterans Coalition",
    industry: "Nonprofit · Veterans services",
    location: "Lansing, MI",
    scope: ["Website Development", "Website Maintenance"],
    story:
      "A coalition serving Lansing-area veterans through outreach, advocacy, and direct support programs. We rebuilt the digital home so that the people who need help can find it in one click — and the volunteers and donors who power the mission have a clear, fast place to act.",
  },
  {
    client: "Paws for a Cause MI",
    industry: "Nonprofit · Animal welfare",
    location: "Michigan",
    scope: ["Website Development", "Meta Ads", "Website Maintenance"],
    story:
      "A Michigan animal-welfare organization on a mission to find homes faster and raise the funds that keep the doors open. We pair a clean adoption-first site with paid social campaigns that put real dogs and cats in front of the right humans.",
    url: "https://pawsforacausemi.org",
  },
  {
    client: "Moten Consulting Group",
    industry: "Professional services · Consulting",
    location: "Michigan",
    scope: ["Website Development", "SEO"],
    story:
      "A consulting practice that earns its work through reputation. We built a site that does justice to the brand — quietly confident, plainly written, and engineered to rank for the buyers actively looking for a senior partner.",
  },
  {
    client: "Mayuri Indian Restaurant",
    industry: "Hospitality · Restaurant",
    location: "Michigan",
    scope: ["Website Development", "Meta Ads", "Website Maintenance"],
    story:
      "A neighborhood Indian restaurant where the food deserves a website that earns the seat. We built a menu-forward site with smart local SEO and run Meta campaigns that fill tables on the nights that matter most.",
  },
  {
    client: "Holistic Manual Physical Therapy",
    industry: "Healthcare · Physical therapy",
    location: "Michigan",
    scope: ["Website Development", "SEO", "Website Maintenance"],
    story:
      "A specialty PT clinic where the work is hands-on and patient-led. We built a calm, clinical web presence that signals expertise immediately, ranks for the conditions patients actually search, and routes them straight to a booking.",
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
        subtitle="A working list of the brands and organizations we partner with — across nonprofits, restaurants, healthcare, and consulting. Different industries, same standard."
      />

      <section className="section bg-midnight">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold">
                ◆ Selected partners
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/40">
                {clients.length} active engagements
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {clients.map((c, i) => (
              <motion.article
                key={c.client}
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
                <div className="flex items-start justify-between mb-8 font-mono text-[10px] uppercase tracking-[0.28em] gap-4">
                  <span className="text-ivory/40">{c.industry}</span>
                  <span className="text-ivory/40 text-right shrink-0">
                    {c.location}
                  </span>
                </div>

                <h3 className="font-display font-light text-3xl md:text-4xl text-ivory leading-[1.05] tracking-[-0.01em] mb-6">
                  {c.client}
                </h3>

                <p className="text-ivory/70 leading-relaxed mb-8">
                  {c.story}
                </p>

                <div className="mt-auto pt-6 border-t border-gold/15 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex flex-wrap gap-2">
                    {c.scope.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] uppercase tracking-[0.24em] font-medium text-gold border border-gold/30 rounded-full px-3 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] font-medium text-gold border-b border-gold/40 pb-0.5 hover:gap-3 transition-all"
                    >
                      Visit site
                      <span aria-hidden>↗</span>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-16 card p-8 md:p-12 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold mb-4">
                ◆ Want a deeper look?
              </p>
              <h3 className="font-display text-3xl md:text-5xl leading-tight mb-6">
                Real numbers. Real screenshots. Real references.
              </h3>
              <p className="text-ivory/65 max-w-xl mx-auto mb-10">
                On a discovery call, we walk through the work we did, the
                metrics that moved, and the people you can call to ask about
                us directly.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" className="btn-gold">
                  Book a call
                  <span aria-hidden>→</span>
                </Link>
                <Link to="/services" className="btn-ghost-gold">
                  See services
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
