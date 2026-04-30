import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { Reveal } from "../components/Reveal";

/* ────────────────────────────────────────────────────────────────── */

const whyUs: {
  n: string;
  t: string;
  d: string;
  Visual: (props: { active: boolean }) => JSX.Element;
}[] = [
  {
    n: "I",
    t: "Senior engineers, in the room",
    d: "Decade-plus engineers and strategists. No interns. No offshored execution. The people who pitch you do the work.",
    Visual: CoreVisual,
  },
  {
    n: "II",
    t: "Modern stack, future-proof",
    d: "React, Next.js, TypeScript, Tailwind, headless CMS. The same tools the world's best product teams ship on.",
    Visual: StackVisual,
  },
  {
    n: "III",
    t: "Best-in-class integrations",
    d: "Stripe, HubSpot, Salesforce, Sanity, Segment, GA4, Klaviyo — wired up properly, server-side, day one.",
    Visual: NetworkVisual,
  },
  {
    n: "IV",
    t: "Years of cross-industry experience",
    d: "DTC, healthcare, B2B SaaS, hospitality, nonprofits, professional services. We've seen your funnel before.",
    Visual: TimelineVisual,
  },
];

const steps = [
  { n: "01", t: "Consult", d: "Listen to your goals. Audit what's working, what's leaking, what's been tried." },
  { n: "02", t: "Plan", d: "Develop a custom roadmap with milestones, deliverables, and a clear cost." },
  { n: "03", t: "Build", d: "Senior engineers and strategists execute — code, copy, creative, campaigns." },
  { n: "04", t: "Launch", d: "Deploy, instrument, and measure. Every metric tied back to revenue." },
  { n: "05", t: "Compound", d: "Optimize, scale, and document. Every month, the system gets cheaper to run." },
];

/* ────────────────────────────────────────────────────────────────── */

export default function About() {
  return (
    <PageTransition>
      <CustomHero />
      <PremiseSection />
      <WhyUsSection />
      <ProcessMarquee />
      <NextMoveSection />
    </PageTransition>
  );
}

/* ─── Hero — no subtitle, Italiana font, drifting particles ────── */

function CustomHero() {
  return (
    <header className="relative pt-40 md:pt-44 pb-20 md:pb-28 border-b border-gold/15 overflow-hidden">
      <DriftingParticles />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-10 inline-flex items-center gap-3"
        >
          <motion.span
            className="size-1.5 rounded-full bg-gold"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          About
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.0, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-couture font-normal text-6xl md:text-8xl lg:text-[8.5vw] leading-[0.94] tracking-[0.005em] text-ivory max-w-6xl"
          style={{ fontFeatureSettings: '"liga", "dlig", "swsh"' }}
        >
          Small studio.{" "}
          <span className="gold italic">Outsized firepower.</span>
        </motion.h1>

        {/* Sweeping gold rule with traveling spark */}
        <div className="mt-14 relative h-px max-w-3xl">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.05, duration: 1.0, ease: [0.7, 0, 0.2, 1] }}
            style={{ originX: 0 }}
            className="absolute inset-0 bg-gradient-to-r from-gold via-gold/40 to-transparent"
          />
          <motion.span
            aria-hidden
            animate={{ left: ["0%", "85%"] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "linear",
              delay: 2.0,
            }}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-1.5 rounded-full bg-gold shadow-[0_0_14px_rgba(212,176,97,0.95)]"
          />
        </div>
      </div>
    </header>
  );
}

function DriftingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, () => ({
        x: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 9 + Math.random() * 7,
        size: 1 + Math.random() * 2,
        opacity: 0.25 + Math.random() * 0.4,
      })),
    []
  );
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${p.x}%`,
            bottom: -10,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{ y: [0, -480], opacity: [0, p.opacity, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Premise — glowing rotating-border card with robot + bubble ─ */

function PremiseSection() {
  return (
    <section className="section bg-midnight">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-12 gap-10 mb-16">
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
        </div>

        <GlowCard>
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-3 flex flex-col items-center md:items-start gap-4">
              <Robot />
              <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-gold/70">
                ◆ Amara · AI assistant
              </span>
            </div>

            <div className="col-span-12 md:col-span-1 hidden md:flex flex-col justify-center items-center gap-2.5">
              <ConnectorCircles />
            </div>

            <div className="col-span-12 md:col-span-8">
              <SpeechBubble>
                <p>
                  Amara Digital was founded to close the gaps the rest of the
                  industry leaves wide open. A small senior team running the
                  firepower of a hundred-person agency — nothing handed off,
                  nothing watered down, nothing billed that doesn't ship.
                  Shredding the competition since launch.
                </p>
                <p className="mt-4">
                  We help everyone — from one-location operators to
                  multi-state corporations — grow online by treating your
                  P&amp;L like our own. Same studio. Same standard.
                </p>
              </SpeechBubble>
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}

/* GlowCard — wraps content in a card with a continuously-rotating
   conic-gradient halo around its perimeter. Inner content is opaque
   midnight so the gradient only shows as a rim of light. */
function GlowCard({ children }: { children: ReactNode }) {
  return (
    <div className="relative rounded-3xl">
      {/* Rotating conic glow */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-[40%]"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(212,176,97,0) 0%, rgba(212,176,97,0.55) 12%, rgba(212,176,97,0) 25%, rgba(212,176,97,0) 50%, rgba(212,176,97,0.35) 62%, rgba(212,176,97,0) 75%, rgba(212,176,97,0) 100%)",
          }}
        />
      </div>
      {/* Static gold rim */}
      <div className="absolute inset-0 rounded-3xl border border-gold/30" />
      {/* Inner card */}
      <div className="relative bg-midnight rounded-3xl m-[2px] p-8 md:p-12 lg:p-14">
        {children}
      </div>
    </div>
  );
}

/* Robot SVG — premium line-art assistant. Continuously hovers,
   antenna pulses, eyes blink, mouth animates while "speaking." */
function Robot() {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      <svg
        viewBox="0 0 140 200"
        className="w-32 md:w-40 h-auto drop-shadow-[0_0_22px_rgba(212,176,97,0.35)]"
        aria-hidden
      >
        {/* Antenna */}
        <line
          x1="70"
          y1="12"
          x2="70"
          y2="32"
          stroke="#D4B061"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <motion.circle
          cx="70"
          cy="9"
          r="4"
          fill="#D4B061"
          animate={{ opacity: [0.35, 1, 0.35], r: [3.6, 4.4, 3.6] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Head */}
        <rect
          x="20"
          y="32"
          width="100"
          height="68"
          rx="14"
          fill="#0B0A09"
          stroke="#D4B061"
          strokeWidth="1.8"
        />

        {/* Inner screen panel */}
        <rect
          x="32"
          y="44"
          width="76"
          height="44"
          rx="7"
          fill="#15120e"
          stroke="rgba(212,176,97,0.35)"
          strokeWidth="1"
        />

        {/* Eyes — blink */}
        <motion.g
          animate={{ scaleY: [1, 1, 0.1, 1] }}
          transition={{
            duration: 4,
            times: [0, 0.7, 0.74, 0.78],
            repeat: Infinity,
            ease: "easeOut",
          }}
          style={{ transformOrigin: "70px 64px" }}
        >
          <circle cx="55" cy="64" r="4.5" fill="#D4B061" />
          <circle cx="85" cy="64" r="4.5" fill="#D4B061" />
        </motion.g>

        {/* Mouth — animates while talking */}
        <motion.rect
          y="80"
          height="2.4"
          fill="#D4B061"
          rx="1.2"
          animate={{ width: [22, 12, 18, 10, 22], x: [59, 64, 61, 65, 59] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Neck */}
        <rect
          x="55"
          y="100"
          width="30"
          height="12"
          fill="#0B0A09"
          stroke="#D4B061"
          strokeWidth="1.6"
        />

        {/* Body */}
        <rect
          x="14"
          y="112"
          width="112"
          height="68"
          rx="10"
          fill="#0B0A09"
          stroke="#D4B061"
          strokeWidth="1.8"
        />

        {/* Body inner ring */}
        <rect
          x="20"
          y="118"
          width="100"
          height="56"
          rx="7"
          fill="none"
          stroke="rgba(212,176,97,0.18)"
          strokeWidth="1"
        />

        {/* Core (pulsing) */}
        <motion.g
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="70" cy="146" r="9" fill="#D4B061" />
          <circle
            cx="70"
            cy="146"
            r="13"
            fill="none"
            stroke="#D4B061"
            strokeWidth="1"
            opacity="0.5"
          />
        </motion.g>

        {/* Side LEDs */}
        <line x1="32" y1="166" x2="48" y2="166" stroke="#D4B061" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <line x1="92" y1="166" x2="108" y2="166" stroke="#D4B061" strokeWidth="2" strokeLinecap="round" opacity="0.55" />

        {/* Arms */}
        <rect x="2" y="124" width="10" height="42" rx="4" fill="#0B0A09" stroke="#D4B061" strokeWidth="1.6" />
        <rect x="128" y="124" width="10" height="42" rx="4" fill="#0B0A09" stroke="#D4B061" strokeWidth="1.6" />

        {/* Feet hint */}
        <rect x="32" y="180" width="22" height="8" rx="2" fill="#0B0A09" stroke="#D4B061" strokeWidth="1.4" />
        <rect x="86" y="180" width="22" height="8" rx="2" fill="#0B0A09" stroke="#D4B061" strokeWidth="1.4" />
      </svg>
    </motion.div>
  );
}

/* Three growing comic-style circles between robot and bubble */
function ConnectorCircles() {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="rounded-full bg-midnight border border-gold"
          style={{ width: 6 + i * 5, height: 6 + i * 5 }}
          animate={{
            opacity: [0.25, 1, 0.25],
            scale: [0.85, 1.1, 0.85],
          }}
          transition={{
            duration: 2.0,
            delay: i * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

/* Speech bubble — sharp luxury rectangle with a left-pointing tail.
   Two rotating squares on the left edge form the comic-bubble notch. */
function SpeechBubble({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, x: -12 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative bg-obsidian border border-gold/40 rounded-2xl p-6 md:p-8 text-ivory/80 leading-relaxed"
    >
      {/* Left-pointing tail */}
      <span
        aria-hidden
        className="hidden md:block absolute left-0 top-10 -translate-x-2 w-4 h-4 bg-obsidian border-l border-b border-gold/40 rotate-45"
      />
      {children}
    </motion.div>
  );
}

/* ─── Why Us — bigger headline, 3D grid bg, dimensional cards ──── */

function WhyUsSection() {
  return (
    <section className="section bg-obsidian border-y border-gold/15 relative overflow-hidden">
      <Grid3D />

      <div className="mx-auto max-w-7xl px-6 md:px-10 relative">
        <div className="mb-20 md:mb-24">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-10">
              ◆ Why us
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-couture font-normal text-7xl md:text-9xl lg:text-[10vw] leading-[0.92] tracking-[-0.01em] max-w-7xl">
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
  );
}

/* Subtle perspective grid floor behind the Why Us cards — luxe map. */
function Grid3D() {
  return (
    <div
      aria-hidden
      className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none opacity-50"
      style={{
        perspective: "900px",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,176,97,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(212,176,97,0.18) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          transform: "rotateX(62deg)",
          transformOrigin: "center top",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 30%, black 65%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 30%, black 65%, transparent 100%)",
        }}
      />
    </div>
  );
}

/* WhyCard — completely new animation. Each card has:
   - A unique animated SVG visualization (CPU pulse, tech stack,
     network nodes, timeline) instead of the gift box
   - A gold scan beam that sweeps top-to-bottom on a 5s loop
   - A circuit-style dotted grid background that fades in
   - Mouse-tracking 3D tilt + glow on hover
   - 'Boot up' reveal that draws the visualization in sequence
*/
function WhyCard({
  item,
  index,
}: {
  item: {
    n: string;
    t: string;
    d: string;
    Visual: (props: { active: boolean }) => JSX.Element;
  };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [hover, setHover] = useState(false);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ rx: (y - 0.5) * -7, ry: (x - 0.5) * 9 });
  }

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
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setTilt({ rx: 0, ry: 0 });
        setHover(false);
      }}
      style={{
        transform: `perspective(1100px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: "transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)",
        transformStyle: "preserve-3d",
      }}
      className="relative overflow-hidden rounded-2xl border border-gold/15 hover:border-gold/45 bg-midnight/95 transition-colors duration-300"
    >
      {/* Circuit dot-grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(212,176,97,0.55) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Gold scan beam — sweeps top to bottom on a 5s loop, phase-offset */}
      <motion.span
        aria-hidden
        initial={{ y: "-50%", opacity: 0 }}
        animate={
          inView
            ? { y: ["-50%", "120%"], opacity: [0, 0.85, 0] }
            : { y: "-50%", opacity: 0 }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: index * 0.6 + 1.0,
          ease: "linear",
          times: [0, 0.5, 1],
        }}
        className="pointer-events-none absolute inset-x-0 h-32 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(212,176,97,0.18) 35%, rgba(212,176,97,0.55) 50%, rgba(212,176,97,0.18) 65%, transparent 100%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Hover glow */}
      <motion.div
        aria-hidden
        animate={{ opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          boxShadow:
            "inset 0 0 60px rgba(212,176,97,0.18), 0 0 40px rgba(212,176,97,0.18)",
        }}
      />

      <div className="relative z-[2] p-8 md:p-12">
        {/* Top: numeral + label */}
        <div className="flex items-center justify-between mb-8">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.12 + 0.2, duration: 0.6 }}
            className="font-display italic text-gold text-2xl"
          >
            {item.n}.
          </motion.span>
          <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-ivory/35">
            ◆ MODULE 0{Number(item.n === "I") + Number(item.n === "II") * 2 + Number(item.n === "III") * 3 + Number(item.n === "IV") * 4}
          </span>
        </div>

        {/* The animated visualization */}
        <div className="mb-10 h-32 md:h-36 flex items-center justify-center">
          <item.Visual active={inView} />
        </div>

        <h3 className="font-display font-light text-3xl md:text-4xl text-ivory leading-[1.05] tracking-[-0.01em] mb-4">
          {item.t}
        </h3>
        <p className="text-ivory/55 text-sm leading-relaxed max-w-md">
          {item.d}
        </p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Per-card animated visualizations. Each is built from primitive
   SVG + framer-motion. They convey the card's idea visually:
     I.   Engineers   →  Pulsing CPU core with concentric rings
     II.  Stack       →  Layered horizontal bars (the tech stack)
     III. Integrations→  Central node + radiating connections w/
                          traveling data dots
     IV.  Experience  →  Sequential timeline bars rising in turn
   ───────────────────────────────────────────────────────────── */

function CoreVisual({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 160 120" className="w-full h-full max-w-[180px]">
      {/* Outer rings */}
      {[1, 2, 3].map((r, i) => (
        <motion.circle
          key={r}
          cx="80"
          cy="60"
          r={20 + i * 14}
          fill="none"
          stroke="#D4B061"
          strokeOpacity={0.4 - i * 0.1}
          strokeWidth="1"
          initial={{ scale: 0, opacity: 0 }}
          animate={active ? { scale: [0.6, 1.1, 1], opacity: [0, 0.7, 0.4] } : {}}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut",
          }}
          style={{ transformOrigin: "80px 60px" }}
        />
      ))}
      {/* Cardinal nodes */}
      {[
        [80, 26],
        [124, 60],
        [80, 94],
        [36, 60],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="2.4"
          fill="#D4B061"
          initial={{ opacity: 0 }}
          animate={active ? { opacity: [0.3, 1, 0.3] } : {}}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            delay: i * 0.25,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Core circle */}
      <circle cx="80" cy="60" r="13" fill="#0B0A09" stroke="#D4B061" strokeWidth="2" />
      <motion.circle
        cx="80"
        cy="60"
        r="6"
        fill="#D4B061"
        initial={{ opacity: 0.4 }}
        animate={active ? { opacity: [0.4, 1, 0.4], scale: [0.85, 1.1, 0.85] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "80px 60px" }}
      />
    </svg>
  );
}

function StackVisual({ active }: { active: boolean }) {
  const layers = [
    { y: 28, label: "REACT" },
    { y: 50, label: "NEXT" },
    { y: 72, label: "TS" },
    { y: 94, label: "TAILWIND" },
  ];
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full max-w-[220px]">
      {layers.map((l, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, x: -30 }}
          animate={active ? { opacity: 1, x: 0 } : {}}
          transition={{
            delay: 0.3 + (3 - i) * 0.15,
            duration: 0.7,
            ease: [0.2, 0.8, 0.2, 1],
          }}
        >
          <rect
            x="20"
            y={l.y - 8}
            width="160"
            height="14"
            rx="2"
            fill="#0B0A09"
            stroke="#D4B061"
            strokeOpacity={0.5 + i * 0.12}
            strokeWidth="1.4"
          />
          {/* Bar fill that pulses */}
          <motion.rect
            x="20"
            y={l.y - 8}
            width="160"
            height="14"
            rx="2"
            fill="#D4B061"
            initial={{ opacity: 0 }}
            animate={active ? { opacity: [0, 0.18, 0] } : {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1 + i * 0.3,
              ease: "easeInOut",
            }}
          />
          <text
            x="28"
            y={l.y + 1}
            fill="#D4B061"
            fontFamily="JetBrains Mono, monospace"
            fontSize="6.5"
            letterSpacing="2"
            opacity="0.85"
          >
            {l.label}
          </text>
          {/* Status dot */}
          <circle cx="170" cy={l.y - 1} r="2" fill="#D4B061" />
        </motion.g>
      ))}
    </svg>
  );
}

function NetworkVisual({ active }: { active: boolean }) {
  const peripherals = [
    [30, 20],
    [120, 16],
    [170, 60],
    [150, 100],
    [70, 110],
    [12, 70],
  ] as const;
  const center = [90, 60] as const;
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full max-w-[220px]">
      {/* Connection lines + traveling dots */}
      {peripherals.map(([x, y], i) => (
        <g key={i}>
          <motion.line
            x1={center[0]}
            y1={center[1]}
            x2={x}
            y2={y}
            stroke="#D4B061"
            strokeOpacity="0.35"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={active ? { pathLength: 1 } : {}}
            transition={{
              delay: 0.4 + i * 0.08,
              duration: 0.8,
              ease: "easeOut",
            }}
          />
          {/* Data dot traveling along the line */}
          <motion.circle
            r="2"
            fill="#D4B061"
            initial={{ opacity: 0 }}
            animate={
              active
                ? {
                    cx: [center[0], x],
                    cy: [center[1], y],
                    opacity: [0, 1, 0],
                  }
                : {}
            }
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: 1.5 + i * 0.35,
              ease: "linear",
            }}
          />
        </g>
      ))}
      {/* Peripheral nodes */}
      {peripherals.map(([x, y], i) => (
        <motion.circle
          key={`p-${i}`}
          cx={x}
          cy={y}
          r="3.5"
          fill="#0B0A09"
          stroke="#D4B061"
          strokeWidth="1.4"
          initial={{ scale: 0, opacity: 0 }}
          animate={active ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
          style={{ transformOrigin: `${x}px ${y}px` }}
        />
      ))}
      {/* Center hub */}
      <circle cx={center[0]} cy={center[1]} r="9" fill="#0B0A09" stroke="#D4B061" strokeWidth="2" />
      <motion.circle
        cx={center[0]}
        cy={center[1]}
        r="4"
        fill="#D4B061"
        initial={{ opacity: 0.5 }}
        animate={active ? { opacity: [0.5, 1, 0.5], scale: [0.85, 1.1, 0.85] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: `${center[0]}px ${center[1]}px` }}
      />
    </svg>
  );
}

function TimelineVisual({ active }: { active: boolean }) {
  const bars = [22, 36, 18, 50, 30, 64, 42, 78, 55, 92];
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full max-w-[220px]">
      {/* Baseline */}
      <line x1="10" y1="100" x2="190" y2="100" stroke="#D4B061" strokeOpacity="0.4" strokeWidth="1" />
      {/* Bars rising sequentially */}
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={14 + i * 17}
          width="9"
          rx="1.5"
          fill="#D4B061"
          initial={{ y: 100, height: 0, opacity: 0.25 }}
          animate={
            active
              ? { y: 100 - h, height: h, opacity: 1 }
              : { y: 100, height: 0, opacity: 0.25 }
          }
          transition={{
            delay: 0.4 + i * 0.07,
            duration: 0.7,
            ease: [0.2, 0.8, 0.2, 1],
          }}
        />
      ))}
      {/* Trend line drawing on top */}
      <motion.path
        d={`M ${14} ${100 - bars[0]} ${bars
          .map((h, i) => `L ${14 + i * 17 + 4.5} ${100 - h}`)
          .join(" ")}`}
        stroke="#F2EAD7"
        strokeOpacity="0.85"
        strokeWidth="1.2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={active ? { pathLength: 1 } : {}}
        transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
      />
    </svg>
  );
}

/* ─── Process — two chatbots + right-to-left marquee ──────────── */

function ProcessMarquee() {
  const track = [...steps, ...steps];

  return (
    <section className="section bg-midnight relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 mb-16 md:mb-20">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
            ◆ How we work
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display font-light text-5xl md:text-7xl leading-[0.98] tracking-[-0.015em] max-w-4xl">
            Five moves.{" "}
            <span className="gold italic">Always in motion.</span>
          </h2>
        </Reveal>
      </div>

      {/* Edge fades */}
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-44 z-10 bg-gradient-to-r from-midnight via-midnight/90 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-44 z-10 bg-gradient-to-l from-midnight via-midnight/90 to-transparent"
        />

        <motion.div
          className="flex gap-5 md:gap-6 px-6 md:px-10 will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {track.map((s, i) => (
            <article
              key={i}
              className="card shrink-0 w-72 md:w-[26rem] p-7 md:p-9 relative group"
            >
              <div className="relative inline-flex items-center gap-4 mb-7">
                <span className="relative">
                  <motion.span
                    aria-hidden
                    animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      delay: (i % steps.length) * 0.35,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full bg-gold/30"
                  />
                  <span className="relative size-10 rounded-full bg-midnight border-2 border-gold flex items-center justify-center font-display text-gold text-sm">
                    {s.n}
                  </span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/45">
                  Phase {s.n}
                </span>
              </div>

              <h3 className="font-display font-light text-3xl md:text-4xl text-ivory leading-tight tracking-[-0.01em] mb-3">
                {s.t}
              </h3>
              <p className="text-ivory/60 text-sm leading-relaxed">{s.d}</p>

              <span
                aria-hidden
                className="absolute top-0 right-0 h-px w-1/3 bg-gradient-to-l from-gold to-transparent"
              />
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Next Move — minimal closer + interactive 3D LED cube ──────── */

function NextMoveSection() {
  return (
    <section className="relative section bg-midnight border-t border-gold/15 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,176,97,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 text-center">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-10">
            ◆ The next move
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.02em] max-w-4xl mx-auto">
            Make the move.{" "}
            <span className="gold italic">We'll handle the rest.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="my-16 md:my-24">
            <LEDCube />
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-gold">
              Book Demo
              <span aria-hidden>→</span>
            </Link>
            <a href="tel:+15173295868" className="btn-ghost-gold">
              Call · 517-329-5868
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── LEDCube — 5×5×5 grid of 125 gold LED dots in 3D space.
   Idle: continuously rotates around the Y axis on a 32s loop with
   a slight X-axis bob.
   Hover: rotation follows the cursor (rotateX / rotateY computed
   from mouse position) and the dot lattice EXPANDS (gap grows by
   1.55x) so it visibly inflates outward. Leaving the cube snaps
   it back. Dots in the front-most layer glow brighter; back layers
   recede. ───────────────────────────────────────────────────── */

function LEDCube() {
  const SIZE = 5;
  const BASE_GAP = 18;
  const HOVER_GAP = 28;

  const [hover, setHover] = useState(false);
  const [tilt, setTilt] = useState({ rx: -22, ry: 0 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -22 + py * -45, ry: px * 75 });
  }

  const gap = hover ? HOVER_GAP : BASE_GAP;
  const center = (SIZE - 1) / 2;

  // Pre-compute the dot lattice
  const dots = useMemo(() => {
    const arr: { x: number; y: number; z: number; bright: boolean }[] = [];
    for (let z = 0; z < SIZE; z++) {
      for (let y = 0; y < SIZE; y++) {
        for (let x = 0; x < SIZE; x++) {
          // Sprinkle ~1 in 6 'bright' dots to give the lattice
          // some visual rhythm without going garish
          const bright = (x * 37 + y * 53 + z * 71) % 6 === 0;
          arr.push({ x, y, z, bright });
        }
      }
    }
    return arr;
  }, []);

  return (
    <div
      className="mx-auto w-72 h-72 md:w-[420px] md:h-[420px] relative cursor-grab"
      style={{ perspective: 1400 }}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setTilt({ rx: -22, ry: 0 });
      }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
        animate={
          hover
            ? { rotateX: tilt.rx, rotateY: tilt.ry }
            : { rotateX: [-22, -10, -22], rotateY: [0, 360] }
        }
        transition={
          hover
            ? { duration: 0.35, ease: "easeOut" }
            : {
                rotateY: { duration: 32, repeat: Infinity, ease: "linear" },
                rotateX: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
      >
        {dots.map((d) => {
          const dx = (d.x - center) * gap;
          const dy = (d.y - center) * gap;
          const dz = (d.z - center) * gap;
          // Depth-based opacity (back layer dimmer, front brighter)
          const depthRatio = d.z / (SIZE - 1);
          const baseOpacity = 0.32 + depthRatio * 0.55;
          // Bright dots use ivory; otherwise gold
          const color = d.bright ? "#F2EAD7" : "#D4B061";
          const size = d.bright ? 5 : 3.5;
          return (
            <span
              key={`${d.x}${d.y}${d.z}`}
              aria-hidden
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                marginLeft: -size / 2,
                marginTop: -size / 2,
                left: "50%",
                top: "50%",
                background: color,
                opacity: baseOpacity,
                boxShadow: d.bright
                  ? "0 0 10px rgba(242,234,215,0.85), 0 0 16px rgba(212,176,97,0.5)"
                  : "0 0 8px rgba(212,176,97,0.55)",
                transform: `translate3d(${dx}px, ${dy}px, ${dz}px)`,
                transition:
                  "transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.4s ease",
              }}
            />
          );
        })}
      </motion.div>

      {/* Soft floor reflection */}
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 bottom-2 w-2/3 h-12 rounded-[50%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,176,97,0.18), transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      {/* Cursor hint */}
      <p
        aria-hidden
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.32em] text-ivory/35 whitespace-nowrap"
      >
        ◆ hover to expand
      </p>
    </div>
  );
}
