import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState, type ReactNode } from "react";
import PageTransition from "../components/PageTransition";
import { Reveal } from "../components/Reveal";
import CtaStrip from "../sections/CtaStrip";

/* ────────────────────────────────────────────────────────────────── */

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
      <CtaStrip />
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

/* WhyCard with mouse-tracking 3D tilt + the existing gift-box scene. */
function WhyCard({
  item,
  index,
}: {
  item: { n: string; t: string; d: string; Icon: () => JSX.Element };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ rx: (y - 0.5) * -8, ry: (x - 0.5) * 10 });
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
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
      style={{
        transform: `perspective(1100px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: "transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)",
        transformStyle: "preserve-3d",
      }}
      className="card p-8 md:p-12 relative overflow-hidden bg-midnight/95 backdrop-blur"
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

/* Gift box (kept) ─────────────────────────────────────────────── */
function GiftBox({
  Icon,
  open,
  delay,
}: {
  Icon: () => JSX.Element;
  open: boolean;
  delay: number;
}) {
  const sparkles = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i / 12) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
    const distance = 60 + Math.random() * 40;
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance - 10,
      size: 2 + Math.random() * 2.5,
      d: Math.random() * 0.15,
    };
  });
  return (
    <div
      className="relative w-36 h-36 md:w-40 md:h-40 mb-10"
      style={{ perspective: "900px" }}
    >
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
      <motion.div
        animate={
          open
            ? { x: [0, -3, 3, -2, 2, 0], rotate: [0, -1.5, 1.5, -1, 1, 0] }
            : { x: 0, rotate: 0 }
        }
        transition={{ duration: 0.5, delay, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <div className="absolute inset-x-0 bottom-0 h-[62%] rounded-md border-2 border-gold bg-gradient-to-b from-gold/20 to-gold/5 shadow-[inset_0_-6px_16px_rgba(212,176,97,0.18)]" />
        <div className="absolute inset-x-2 bottom-2 h-[58%] rounded-md border border-gold/20" />
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[62%] w-2 bg-gold/60" />
        <motion.div
          initial={{ rotateX: 0, y: 0 }}
          animate={open ? { rotateX: -120, y: -3 } : { rotateX: 0, y: 0 }}
          transition={{
            duration: 1.0,
            delay: delay + 0.5,
            ease: [0.34, 1.6, 0.5, 1],
          }}
          style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
          className="absolute inset-x-0 top-[6%] h-[36%] rounded-md border-2 border-gold bg-gradient-to-b from-gold/55 to-gold/20 shadow-[0_4px_14px_rgba(0,0,0,0.5)]"
        >
          <span className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-2 bg-gold/85" />
          <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-2 bg-gold/85" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-sm bg-gold" />
        </motion.div>
      </motion.div>
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
        <motion.div
          animate={
            open ? { y: [0, -4, 0], rotate: [-1.5, 1.5, -1.5] } : { y: 0 }
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

/* Nature icons (kept) ─────────────────────────────────────────── */
function TreeIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      <path d="M24 6 L34 18 H14 Z" fill="currentColor" opacity="0.95" />
      <path d="M24 14 L36 28 H12 Z" fill="currentColor" opacity="0.85" />
      <path d="M24 22 L38 38 H10 Z" fill="currentColor" opacity="0.95" />
      <rect x="22" y="36" width="4" height="8" fill="currentColor" />
    </svg>
  );
}
function PeakIcon() {
  return (
    <svg width="46" height="44" viewBox="0 0 48 48" fill="none">
      <path d="M4 38 L18 14 L28 28 L34 22 L44 38 Z" fill="currentColor" opacity="0.9" />
      <path d="M14 22 L18 14 L22 22 L20 24 L18 22 L16 24 Z" fill="#0b0a09" opacity="0.55" />
      <circle cx="36" cy="14" r="4" fill="currentColor" opacity="0.75" />
    </svg>
  );
}
function SunIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="8" fill="currentColor" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const x1 = 24 + Math.cos(a) * 13;
        const y1 = 24 + Math.sin(a) * 13;
        const x2 = 24 + Math.cos(a) * 21;
        const y2 = 24 + Math.sin(a) * 21;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />;
      })}
    </svg>
  );
}
function WaveIcon() {
  return (
    <svg width="46" height="40" viewBox="0 0 48 40" fill="none">
      <path d="M2 20 Q12 8 24 20 T46 20" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <path d="M2 28 Q12 16 24 28 T46 28" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M2 12 Q12 0 24 12 T46 12" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  );
}

/* ─── Process — right-to-left marquee, no bottom CTAs ──────────── */

function ProcessMarquee() {
  // Two copies of the steps for a seamless loop
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
              {/* Step number with pulsing halo */}
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

              {/* Subtle gold corner accent */}
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
