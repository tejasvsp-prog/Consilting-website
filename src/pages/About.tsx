import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import PageTransition, { PageHeader } from "../components/PageTransition";
import { Reveal } from "../components/Reveal";
import CtaStrip from "../sections/CtaStrip";

/* ─────────────────────────────────────────────────────────────────
   Why Us — four reasons. Each card has a 3D gift-box scene at the
   top that opens on reveal, releasing a nature-themed icon.
   ───────────────────────────────────────────────────────────── */
const whyUs: {
  n: string;
  t: string;
  d: string;
  Icon: () => JSX.Element;
}[] = [
  {
    n: "I",
    t: "Senior engineers, in the room",
    d: "Decade-plus engineers and strategists. No interns. No offshored execution. The people who pitch you do the work.",
    Icon: TreeIcon,
  },
  {
    n: "II",
    t: "Modern stack, future-proof",
    d: "React, Next.js, TypeScript, Tailwind, headless CMS. The same tools the world's best product teams ship on.",
    Icon: PeakIcon,
  },
  {
    n: "III",
    t: "Best-in-class integrations",
    d: "Stripe, HubSpot, Salesforce, Sanity, Segment, GA4, Klaviyo — wired up properly, server-side, day one.",
    Icon: SunIcon,
  },
  {
    n: "IV",
    t: "Years of cross-industry experience",
    d: "DTC, healthcare, B2B SaaS, hospitality, nonprofits, professional services. We've seen your funnel before.",
    Icon: WaveIcon,
  },
];

const steps = [
  {
    n: "01",
    t: "Consult",
    d: "Listen to your goals. Audit what's working, what's leaking, what's been tried.",
  },
  {
    n: "02",
    t: "Plan",
    d: "Develop a custom roadmap with milestones, deliverables, and a clear cost.",
  },
  {
    n: "03",
    t: "Build",
    d: "Senior engineers and strategists execute — code, copy, creative, campaigns.",
  },
  {
    n: "04",
    t: "Launch",
    d: "Deploy, instrument, and measure. Every metric tied back to revenue.",
  },
  {
    n: "05",
    t: "Compound",
    d: "Optimize, scale, and document. Every month, the system gets cheaper to run.",
  },
];

export default function About() {
  return (
    <PageTransition>
      <PageHeader
        tag="About"
        title={
          <>
            Small studio.{" "}
            <span className="gold italic">Outsized firepower.</span>
          </>
        }
        subtitle="Founded recently to close the gaps the rest of the industry leaves wide open — and shredding the competition since. From neighborhood operators to national corporations, Amara Digital helps businesses grow online with the firepower of a hundred-person agency on a single accountable team."
      />

      {/* Tight integrated story — replaces the long 3-paragraph block */}
      <section className="section bg-midnight">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-12 gap-10 md:gap-14">
            <div className="col-span-12 md:col-span-5">
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
                  ◆ The premise
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.04] tracking-[-0.01em]">
                  Built to close{" "}
                  <span className="gold italic">the gaps.</span>
                </h2>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 space-y-6 text-ivory/75 leading-relaxed">
              <Reveal delay={0.2}>
                <p>
                  Amara Digital was founded to close the gaps the rest of the
                  industry leaves wide open. A small senior team running the
                  firepower of a hundred-person agency — nothing handed off,
                  nothing watered down, nothing billed that doesn't ship. The
                  result is a studio that's been shredding the competition
                  since launch.
                </p>
              </Reveal>
              <Reveal delay={0.32}>
                <p>
                  We help everyone — from one-location operators to
                  multi-state corporations — grow online by treating your
                  P&amp;L like our own. Same studio, same standard, whether
                  you're trying to fill tables on Wednesday nights or scale a
                  national brand into nine figures.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us — larger headline, no right blurb, 3D gift-box cards */}
      <section className="section bg-obsidian border-y border-gold/15">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-20 md:mb-24">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
                ◆ Why us
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-light text-6xl md:text-8xl lg:text-[8.5vw] leading-[0.95] tracking-[-0.025em] max-w-6xl">
                Built by the best,{" "}
                <span className="gold italic">on the best tech.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {whyUs.map((w, i) => (
              <WhyCard key={w.t} item={w} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* How we work — 5 steps with flowing connector (kept) */}
      <section className="section bg-midnight">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
              ◆ How we work
            </p>
          </Reveal>
          <h2 className="font-display font-light text-5xl md:text-6xl leading-[1.02] tracking-[-0.01em] max-w-3xl mb-20">
            Five moves.{" "}
            <span className="gold italic">Same every time.</span>
          </h2>

          <ProcessTrack />

          <Reveal delay={0.4}>
            <div className="mt-20 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">
                Start the diagnostic
                <span aria-hidden>→</span>
              </Link>
              <Link to="/services" className="btn-ghost-gold">
                See services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaStrip />
    </PageTransition>
  );
}

/* ─────────────────────────────────────────────────────────────────
   WhyCard — 2D card whose top hosts a 3D gift box. On scroll into
   view the lid hinges open (rotateX -118deg) and a nature-themed
   icon rises out, surrounded by a pulsing gold halo.
   ───────────────────────────────────────────────────────────── */
function WhyCard({
  item,
  index,
}: {
  item: { n: string; t: string; d: string; Icon: () => JSX.Element };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        delay: index * 0.12,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      className="card p-8 md:p-12 relative overflow-hidden"
    >
      <GiftBox
        Icon={item.Icon}
        open={inView}
        delay={index * 0.12 + 0.3}
      />
      <h3 className="font-display font-light text-3xl md:text-4xl text-ivory leading-[1.05] tracking-[-0.01em] mb-4">
        {item.t}
      </h3>
      <p className="text-ivory/55 text-sm leading-relaxed max-w-md">
        {item.d}
      </p>
    </motion.div>
  );
}

/* 3D gift box — base + lid + emerging nature icon + sparkle burst.
   Sized at ~160px, sits above the card heading. Sequence on reveal:
     1) Box jiggles in place for a beat (anticipation)
     2) Lid hinges back rotateX(-120) with overshoot
     3) Sparkle particles burst radially out of the open lid
     4) Nature icon rises out of the base and bobs gently
   A gold halo behind everything breathes the whole time.
*/
function GiftBox({
  Icon,
  open,
  delay,
}: {
  Icon: () => JSX.Element;
  open: boolean;
  delay: number;
}) {
  // 12 sparkles fired radially when the lid pops
  const sparkles = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i / 12) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
    const distance = 60 + Math.random() * 40;
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance - 10, // bias slightly upward
      size: 2 + Math.random() * 2.5,
      d: Math.random() * 0.15,
    };
  });

  return (
    <div
      className="relative w-36 h-36 md:w-40 md:h-40 mb-10"
      style={{ perspective: "900px" }}
    >
      {/* Pulsing halo behind everything */}
      <motion.span
        aria-hidden
        animate={
          open
            ? { opacity: [0.2, 0.55, 0.2], scale: [0.9, 1.18, 0.9] }
            : { opacity: 0 }
        }
        transition={{
          duration: 3.2,
          repeat: Infinity,
          delay: delay + 0.6,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-gold/45 blur-2xl"
      />

      {/* Anticipation jiggle wrapper — shakes briefly before the lid pops */}
      <motion.div
        animate={
          open
            ? { x: [0, -3, 3, -2, 2, 0], rotate: [0, -1.5, 1.5, -1, 1, 0] }
            : { x: 0, rotate: 0 }
        }
        transition={{ duration: 0.5, delay, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        {/* Box base — bottom 60% */}
        <div className="absolute inset-x-0 bottom-0 h-[62%] rounded-md border-2 border-gold bg-gradient-to-b from-gold/20 to-gold/5 shadow-[inset_0_-6px_16px_rgba(212,176,97,0.18)]" />

        {/* Inner ring on the base for depth */}
        <div className="absolute inset-x-2 bottom-2 h-[58%] rounded-md border border-gold/20" />

        {/* Cross ribbon on the base only */}
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[62%] w-2 bg-gold/60" />

        {/* Lid — top 36%. Hinges open from top edge with overshoot. */}
        <motion.div
          initial={{ rotateX: 0, y: 0 }}
          animate={open ? { rotateX: -120, y: -3 } : { rotateX: 0, y: 0 }}
          transition={{
            duration: 1.0,
            delay: delay + 0.5,
            ease: [0.34, 1.6, 0.5, 1],
          }}
          style={{
            transformOrigin: "top center",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-x-0 top-[6%] h-[36%] rounded-md border-2 border-gold bg-gradient-to-b from-gold/55 to-gold/20 shadow-[0_4px_14px_rgba(0,0,0,0.5)]"
        >
          {/* Cross ribbon on the lid */}
          <span className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-2 bg-gold/85" />
          <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-2 bg-gold/85" />
          {/* Bow knot in the center */}
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-sm bg-gold" />
        </motion.div>
      </motion.div>

      {/* Sparkle burst — fires radially out of the lid the moment it pops */}
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((s, i) => (
          <motion.span
            key={i}
            aria-hidden
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={
              open
                ? {
                    x: [0, 0, s.x],
                    y: [0, 0, s.y],
                    opacity: [0, 0, 1, 0],
                    scale: [0, 0, 1, 0.4],
                  }
                : { opacity: 0 }
            }
            transition={{
              duration: 1.4,
              times: [0, 0.4, 0.55, 1],
              delay: delay + 0.6 + s.d,
              ease: [0.2, 0.5, 0.3, 1],
            }}
            className="absolute left-1/2 top-1/2 rounded-full bg-gold"
            style={{ width: s.size, height: s.size }}
          />
        ))}
      </div>

      {/* The emerging nature icon — rises out of the base */}
      <motion.div
        initial={{ y: 36, opacity: 0, scale: 0.35, rotate: -10 }}
        animate={
          open
            ? { y: -22, opacity: 1, scale: 1, rotate: 0 }
            : { y: 36, opacity: 0, scale: 0.35, rotate: -10 }
        }
        transition={{
          duration: 1.1,
          delay: delay + 0.8,
          ease: [0.2, 1.5, 0.4, 1],
        }}
        className="absolute inset-x-0 top-0 flex items-center justify-center"
        style={{ height: "100%" }}
      >
        {/* Continuous gentle bob + sway once revealed */}
        <motion.div
          animate={
            open
              ? { y: [0, -4, 0], rotate: [-1.5, 1.5, -1.5] }
              : { y: 0 }
          }
          transition={{
            duration: 3.6,
            repeat: Infinity,
            delay: delay + 1.6,
            ease: "easeInOut",
          }}
          className="text-gold drop-shadow-[0_0_22px_rgba(212,176,97,0.75)]"
        >
          <Icon />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ─── Nature SVG icons ─────────────────────────────────────────── */

function TreeIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      {/* Canopy — three layered triangles for a stylized pine */}
      <path d="M24 6 L34 18 H14 Z" fill="currentColor" opacity="0.95" />
      <path d="M24 14 L36 28 H12 Z" fill="currentColor" opacity="0.85" />
      <path d="M24 22 L38 38 H10 Z" fill="currentColor" opacity="0.95" />
      {/* Trunk */}
      <rect x="22" y="36" width="4" height="8" fill="currentColor" />
    </svg>
  );
}

function PeakIcon() {
  return (
    <svg width="46" height="44" viewBox="0 0 48 48" fill="none">
      {/* Two overlapping mountains */}
      <path
        d="M4 38 L18 14 L28 28 L34 22 L44 38 Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Snow cap accent */}
      <path
        d="M14 22 L18 14 L22 22 L20 24 L18 22 L16 24 Z"
        fill="#0b0a09"
        opacity="0.55"
      />
      {/* Sun behind the peaks */}
      <circle cx="36" cy="14" r="4" fill="currentColor" opacity="0.75" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      {/* Sun disc */}
      <circle cx="24" cy="24" r="8" fill="currentColor" />
      {/* Eight rays */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const x1 = 24 + Math.cos(a) * 13;
        const y1 = 24 + Math.sin(a) * 13;
        const x2 = 24 + Math.cos(a) * 21;
        const y2 = 24 + Math.sin(a) * 21;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

function WaveIcon() {
  return (
    <svg width="46" height="40" viewBox="0 0 48 40" fill="none">
      <path
        d="M2 20 Q12 8 24 20 T46 20"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M2 28 Q12 16 24 28 T46 28"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M2 12 Q12 0 24 12 T46 12"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

/* ─── ProcessTrack (kept from previous round) ──────────────────── */

function ProcessTrack() {
  return (
    <div className="relative">
      <div className="hidden md:block">
        <div className="relative">
          <div className="absolute top-12 left-[6%] right-[6%] h-px bg-gold/20" />
          <FlowingLine orientation="horizontal" />

          <div className="relative grid grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="relative flex flex-col items-center text-center"
              >
                <Node index={i}>
                  <span className="font-display text-gold text-xl">
                    {s.n}
                  </span>
                </Node>
                <h3 className="font-display text-2xl text-ivory mt-6 mb-3">
                  {s.t}
                </h3>
                <p className="text-ivory/60 leading-relaxed text-sm max-w-[18ch]">
                  {s.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden relative pl-16">
        <div className="absolute left-6 top-6 bottom-6 w-px bg-gold/20" />
        <FlowingLine orientation="vertical" />

        <div className="space-y-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="relative"
            >
              <div className="absolute -left-16">
                <Node index={i}>
                  <span className="font-display text-gold text-base">
                    {s.n}
                  </span>
                </Node>
              </div>
              <h3 className="font-display text-2xl text-ivory mb-2">{s.t}</h3>
              <p className="text-ivory/60 leading-relaxed text-sm">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Node({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) {
  return (
    <div className="relative shrink-0">
      <motion.span
        aria-hidden
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          delay: index * 0.4,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-gold/30"
      />
      <div className="relative size-12 md:size-24 rounded-full bg-midnight border-2 border-gold flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

function FlowingLine({
  orientation,
}: {
  orientation: "horizontal" | "vertical";
}) {
  if (orientation === "horizontal") {
    return (
      <motion.div
        aria-hidden
        className="absolute top-12 left-[6%] right-[6%] h-px"
        style={{
          background:
            "linear-gradient(90deg, rgba(212,176,97,0) 0%, rgba(212,176,97,0) 40%, rgba(212,176,97,1) 50%, rgba(212,176,97,0) 60%, rgba(212,176,97,0) 100%)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["100% 0%", "-100% 0%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
    );
  }
  return (
    <motion.div
      aria-hidden
      className="absolute left-6 top-6 bottom-6 w-px"
      style={{
        background:
          "linear-gradient(180deg, rgba(212,176,97,0) 0%, rgba(212,176,97,0) 40%, rgba(212,176,97,1) 50%, rgba(212,176,97,0) 60%, rgba(212,176,97,0) 100%)",
        backgroundSize: "100% 200%",
      }}
      animate={{ backgroundPosition: ["0% 100%", "0% -100%"] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    />
  );
}
