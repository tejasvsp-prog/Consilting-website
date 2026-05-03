import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { Reveal } from "../components/Reveal";
import CtaStrip from "../sections/CtaStrip";

type ClientCase = {
  client: string;
  /** Short single-line tagline shown on the card */
  tag: string;
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
    tag: "Veterans coalition",
    industry: "Nonprofit · Veterans services",
    location: "Lansing, MI",
    scope: ["Website Development", "Website Maintenance"],
    story:
      "A coalition serving Lansing-area veterans through outreach, advocacy, and direct support programs. We rebuilt the digital home so the people who need help can find it in one click — and the volunteers and donors who power the mission have a clear, fast place to act.",
  },
  {
    client: "Paws for a Cause MI",
    tag: "Animal welfare",
    industry: "Nonprofit · Animal welfare",
    location: "Michigan",
    scope: ["Website Development", "Meta Ads", "Website Maintenance"],
    story:
      "A Michigan animal-welfare organization on a mission to find homes faster and raise the funds that keep the doors open. We pair a clean adoption-first site with paid social campaigns that put real dogs and cats in front of the right humans.",
    url: "https://pawsforacausemi.org",
  },
  {
    client: "Moten Consulting Group",
    tag: "Consulting practice",
    industry: "Professional services · Consulting",
    location: "Michigan",
    scope: ["Website Development", "SEO"],
    story:
      "A consulting practice that earns its work through reputation. We built a site that does justice to the brand — quietly confident, plainly written, and engineered to rank for the buyers actively looking for a senior partner.",
  },
  {
    client: "Mayuri Indian Restaurant",
    tag: "Hospitality",
    industry: "Hospitality · Restaurant",
    location: "Michigan",
    scope: ["Website Development", "Meta Ads", "Website Maintenance"],
    story:
      "A neighborhood Indian restaurant where the food deserves a website that earns the seat. We built a menu-forward site with smart local SEO and run Meta campaigns that fill tables on the nights that matter most.",
  },
  {
    client: "Holistic Manual Physical Therapy",
    tag: "Specialty PT clinic",
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
      {/* HERO — bold left-aligned wordmark + supporting line */}
      <section className="relative bg-midnight pt-40 md:pt-52 pb-24 md:pb-32 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-gold/8 blur-[140px]"
        />
        <div className="mx-auto max-w-7xl px-6 md:px-10 relative">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
              <span className="inline-block size-1.5 rounded-full bg-gold mr-3 align-middle animate-[ledFlicker_2.2s_ease-in-out_infinite]" />
              Clients
            </p>
          </Reveal>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-display font-light text-[18vw] md:text-[12vw] leading-[0.88] tracking-[-0.025em] text-ivory uppercase"
          >
            <span className="block">Operators</span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
              className="block gold italic normal-case"
            >
              we move.
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-10 md:mt-14 max-w-2xl"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ivory/55 leading-relaxed">
              Detroit-based growth studio, working with operators across
              nonprofit, hospitality, healthcare, and consulting.
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-gold/70">
              SEO · Web · Maintenance · Meta Ads.
            </p>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-16 md:mt-20 grid grid-cols-3 gap-6 max-w-2xl border-t border-gold/15 pt-8"
          >
            {[
              { v: `${clients.length}`, l: "Active engagements" },
              { v: "92%", l: "Retention" },
              { v: "MI", l: "Headquartered" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl text-gold leading-none">
                  {s.v}
                </div>
                <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.28em] text-ivory/45">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CASCADING CLIENT ROW — five tall portrait cards at varying offsets */}
      <section className="relative bg-midnight pb-24 md:pb-32 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <CascadeRow clients={clients} />
        </div>
      </section>

      {/* DETAIL LIST — full client write-ups below the cascade */}
      <section className="bg-obsidian border-y border-gold/15 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-10">
              ◆ The work, in their words
            </p>
          </Reveal>
          <ul className="divide-y divide-gold/15 border-y border-gold/15">
            {clients.map((c, i) => (
              <motion.li
                key={c.client}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.06,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="grid grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 group"
              >
                <div className="col-span-12 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.32em] text-gold/70 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-12 md:col-span-4">
                  <h3 className="font-display font-light text-2xl md:text-3xl text-ivory leading-tight tracking-[-0.005em] mb-3 transition-transform duration-500 group-hover:translate-x-1">
                    {c.client}
                  </h3>
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/45">
                    {c.industry}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/35 mt-1">
                    {c.location}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <p className="text-ivory/70 leading-relaxed mb-6">{c.story}</p>
                  <div className="flex flex-wrap items-center gap-2 gap-y-3">
                    {c.scope.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] uppercase tracking-[0.24em] font-medium text-gold border border-gold/30 rounded-full px-3 py-1"
                      >
                        {s}
                      </span>
                    ))}
                    {c.url && (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-auto inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] font-medium text-gold border-b border-gold/40 pb-0.5 hover:gap-3 transition-all"
                      >
                        Visit site
                        <span aria-hidden>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>

          <Reveal delay={0.4}>
            <div className="mt-20 md:mt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold/70 mb-3">
                  Want a deeper look?
                </p>
                <h3 className="font-display font-light text-3xl md:text-5xl leading-tight tracking-[-0.01em] max-w-xl">
                  Real numbers. Real screenshots.{" "}
                  <span className="gold italic">Real references.</span>
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-4">
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

/* ─── CascadeRow — staggered portrait cards across the bottom of the
   hero. Each card sits at a different vertical offset, fades up in
   sequence, lifts slightly and gold-glows on hover. Cascade is
   desktop-only; on tablet/mobile cards align flat for readability. */
function CascadeRow({ clients }: { clients: ClientCase[] }) {
  // Vertical offsets in pixels — desktop only. Tablet/mobile flatten.
  const offsets = [32, 72, 0, 56, 16];
  return (
    <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6 items-end pt-20 md:pt-24">
      {/* Decorative gold rule above the cascade */}
      <span
        aria-hidden
        className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />
      {clients.map((c, i) => (
        <motion.div
          key={c.client}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{
            duration: 0.95,
            delay: i * 0.12,
            ease: [0.2, 0.8, 0.2, 1],
          }}
          className="group cascade-card"
          style={
            { "--cascade-y": `${offsets[i % offsets.length]}px` } as React.CSSProperties
          }
        >
          <ClientPortrait index={i} client={c} />
        </motion.div>
      ))}
    </div>
  );
}

function ClientPortrait({
  index,
  client,
}: {
  index: number;
  client: ClientCase;
}) {
  // Generate initials from the client name for the placeholder mark.
  const initials = client.client
    .replace(/[^A-Za-z\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-coal via-midnight to-obsidian border border-gold/20 transition-all duration-700 group-hover:border-gold/55 group-hover:-translate-y-2 shadow-[0_30px_60px_rgba(0,0,0,0.45)] flex flex-col">
      {/* Subtle paper-grain */}
      <span
        aria-hidden
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
      {/* Hover glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-x-12 -bottom-20 h-44 bg-gold/25 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      />

      {/* Top meta strip */}
      <div className="relative z-10 flex items-center justify-between px-4 md:px-5 pt-4 md:pt-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/35">
          {client.location.split(",")[0]}
        </span>
      </div>

      {/* Monogram zone — fills the space between meta and name plate */}
      <div className="relative z-10 flex-1 grid place-items-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 1,
            delay: 0.3 + index * 0.12,
            ease: [0.2, 0.8, 0.2, 1],
          }}
          className="relative"
        >
          <span
            aria-hidden
            className="absolute inset-0 -m-6 rounded-full bg-gold/15 blur-2xl"
          />
          <span className="relative font-display font-light text-5xl md:text-6xl lg:text-7xl text-ivory tracking-[-0.02em] transition-colors duration-700 group-hover:text-gold">
            {initials}
          </span>
        </motion.div>
      </div>

      {/* Name plate — name + tag, fixed height so cards align */}
      <div className="relative z-10 px-4 md:px-5 py-4 md:py-5 border-t border-gold/15 bg-gradient-to-t from-midnight/95 via-midnight/75 to-transparent min-h-[88px] md:min-h-[96px]">
        <div className="font-display text-sm md:text-base text-ivory leading-tight line-clamp-2 transition-transform duration-500 group-hover:translate-x-0.5">
          {client.client}
        </div>
        <div className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.28em] text-gold/70 truncate">
          {client.tag}
        </div>
      </div>
    </div>
  );
}
