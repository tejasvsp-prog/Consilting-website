import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { Reveal } from "../components/Reveal";
import ServiceOrbit from "../components/ServiceOrbit";
import Hero from "../sections/Hero";

const stats = [
  { v: "4.2×", l: "Average blended ROAS" },
  { v: "+312%", l: "Lead growth, 90 days" },
  { v: "<1.8s", l: "Median page load" },
  { v: "92%", l: "Client retention" },
];

export default function Home() {
  return (
    <PageTransition>
      <Hero />

      {/* What we do — orbit of services + digital-marketing-company copy */}
      <section className="section bg-obsidian border-t border-gold/15">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-12 gap-10 mb-20">
            <div className="col-span-12 md:col-span-6">
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-6">
                  ◆ What we do
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display font-light text-4xl md:text-6xl leading-[1.02] tracking-[-0.01em]">
                  Digital marketing,{" "}
                  <span className="gold italic">end to end.</span>
                </h2>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <Reveal delay={0.2}>
                <p className="text-ivory/70 leading-relaxed">
                  Amara Digital is a Michigan-based digital marketing studio.
                  We help businesses grow online through search engine
                  optimization, custom websites, ongoing maintenance, and
                  paid social campaigns on Meta. Each service runs as a
                  standalone engagement, or together as a complete program —
                  whichever fits your funnel.
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <Link to="/services" className="btn-link-gold mt-8">
                  All services
                  <span aria-hidden>→</span>
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Rotating orbit — click a card to zoom in */}
          <ServiceOrbit />
        </div>
      </section>

      {/* Numbers — continuously rotating horizontal marquee */}
      <section className="relative bg-midnight border-t border-gold/15 py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-12">
              ◆ The numbers
            </p>
          </Reveal>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-midnight to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-midnight to-transparent"
        />

        <div className="overflow-hidden">
          <div className="marquee-track flex items-baseline whitespace-nowrap">
            {[...stats, ...stats, ...stats, ...stats].map((s, i) => (
              <div
                key={i}
                className="flex items-baseline gap-6 md:gap-10 px-8 md:px-14 shrink-0"
              >
                <span className="font-display font-light text-gold leading-none tracking-[-0.04em] text-[16vw] md:text-[10vw]">
                  {s.v}
                </span>
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.28em] text-ivory/55 max-w-[12ch] whitespace-normal">
                  {s.l}
                </span>
                <span
                  aria-hidden
                  className="text-gold/40 text-3xl md:text-4xl ml-4 md:ml-8"
                >
                  ◆
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-10 mt-12">
          <Reveal>
            <p className="text-ivory/45 text-xs font-mono uppercase tracking-[0.28em]">
              Aggregated across active engagements
            </p>
          </Reveal>
        </div>
      </section>

      {/* Closer: Rocket + 'Are you ready to take off?' + Book Demo */}
      <RocketCloser />
    </PageTransition>
  );
}

/* ───────────────── Rocket closer ─────────────────────────────────── */

function RocketCloser() {
  return (
    <section className="relative bg-obsidian border-t border-gold/15 py-32 md:py-44 overflow-hidden">
      <Stars />

      <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
                ◆ Lift off
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <h2 className="font-display font-light text-5xl md:text-7xl lg:text-[7vw] leading-[0.92] tracking-[-0.025em]">
                Are you ready to{" "}
                <span className="gold italic">take off?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-8 md:mt-10 max-w-xl text-ivory/70 text-lg leading-relaxed">
                Thirty minutes. No deck. No discovery questionnaire. Bring
                your numbers and the one question keeping you up at night —
                we'll come back with a punch list of what we'd ship in your
                seat.
              </p>
            </Reveal>
            <Reveal delay={0.45}>
              <div className="mt-12 flex flex-wrap items-center gap-6">
                <Link
                  to="/contact"
                  className="btn-gold text-base"
                >
                  Book Demo
                  <span aria-hidden>→</span>
                </Link>
                <a
                  href="mailto:amaradigital@gmail.com"
                  className="font-mono text-xs uppercase tracking-[0.28em] text-ivory/55 hover:text-gold transition-colors"
                >
                  or email amaradigital@gmail.com
                </a>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <Rocket />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Rocket — CSS-driven wobble + flame so they run from first paint
   regardless of tab focus or React re-renders. Cursor follow stays
   as the only motion-driven layer. */
function Rocket() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, x: 0, y: 0 });

  useEffect(() => {
    const section = wrapRef.current?.closest("section");
    if (!section) return;
    function onMove(e: MouseEvent) {
      const rect = section!.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({
        rx: py * -6,
        ry: px * 10,
        x: px * 14,
        y: py * 8,
      });
    }
    function onLeave() {
      setTilt({ rx: 0, ry: 0, x: 0, y: 0 });
    }
    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative w-48 sm:w-60 md:w-72 lg:w-80 opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]"
      style={{ perspective: 1200 }}
    >
      {/* CSS wobble layer — always animating */}
      <div className="rocket-wobble">
        {/* Cursor-follow inner layer */}
        <div
          style={{
            transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translate3d(${tilt.x}px, ${tilt.y}px, 0)`,
            transformStyle: "preserve-3d",
            transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        >
          <svg
            viewBox="0 0 240 460"
            className="w-full h-auto drop-shadow-[0_0_50px_rgba(212,176,97,0.28)]"
            aria-hidden
          >
            <defs>
              <linearGradient id="rocketBody" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#f2ead7" />
                <stop offset="100%" stopColor="#d4b061" />
              </linearGradient>
              <radialGradient id="window" cx="0.4" cy="0.35" r="0.6">
                <stop offset="0%" stopColor="#d4b061" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0b0a09" />
              </radialGradient>
            </defs>
            <path d="M120 30 L86 132 L154 132 Z" fill="#d4b061" stroke="#d4b061" strokeWidth="2" />
            <rect x="86" y="132" width="68" height="180" rx="3" fill="url(#rocketBody)" stroke="#d4b061" strokeWidth="2" />
            <line x1="86" y1="170" x2="154" y2="170" stroke="#d4b061" strokeWidth="1.5" opacity="0.45" />
            <line x1="86" y1="282" x2="154" y2="282" stroke="#d4b061" strokeWidth="1.5" opacity="0.45" />
            <circle cx="120" cy="210" r="22" fill="url(#window)" stroke="#d4b061" strokeWidth="3" />
            <circle cx="113" cy="203" r="6" fill="#f2ead7" opacity="0.55" />
            <path d="M86 290 L52 350 L86 332 Z" fill="#d4b061" />
            <path d="M154 290 L188 350 L154 332 Z" fill="#d4b061" />
            <rect x="98" y="312" width="44" height="22" rx="3" fill="#15120e" stroke="#d4b061" strokeWidth="2" />

            {/* Exhaust flames — CSS-driven flicker (always on) */}
            <g className="rocket-flame">
              <path
                d="M96 334 Q108 380 120 410 Q132 380 144 334 Q140 360 130 380 Q120 392 110 380 Q100 360 96 334 Z"
                fill="#d4b061"
                opacity="0.95"
              />
              <path
                d="M106 334 Q114 370 120 392 Q126 370 134 334 Q130 354 124 372 Q120 380 116 372 Q110 354 106 334 Z"
                fill="#f2ead7"
                opacity="0.7"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* CSS-driven sparks rising around the rocket — always on */}
      <Sparks />
    </div>
  );
}

/* Cinematic rocket sparks — a layered field of small bright sparks
   plus larger glowing embers, all CSS-driven. Includes a soft
   exhaust halo at the base of the rocket so the launch reads as
   bright + warm without making the rocket itself jittery. */
function Sparks() {
  // 14 small bright sparks (rocketSpark keyframe — short, fast)
  const sparks = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        left: 30 + ((i * 11) % 40),
        sx: ((i * 17) % 19) - 9 + "px",
        delay: (i * 0.22).toFixed(2) + "s",
        duration: (1.8 + ((i * 31) % 11) * 0.1).toFixed(2) + "s",
        size: 1.5 + ((i * 7) % 3) * 0.7,
      })),
    []
  );

  // 6 larger embers (rocketEmber keyframe — slower, longer rise)
  const embers = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        left: 32 + ((i * 19) % 36),
        sx: ((i * 23) % 31) - 15 + "px",
        delay: (i * 0.55 + 0.2).toFixed(2) + "s",
        duration: (3.2 + ((i * 13) % 7) * 0.15).toFixed(2) + "s",
        size: 3.5 + ((i * 11) % 4) * 0.6,
      })),
    []
  );

  return (
    <div className="absolute left-0 right-0 -bottom-16 h-56 pointer-events-none overflow-visible">
      {/* Exhaust halo — soft warm glow under the rocket */}
      <span
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-20 rounded-[50%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,250,236,0.35) 0%, rgba(212,176,97,0.25) 30%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      {/* Small bright sparks */}
      {sparks.map((s, i) => (
        <span
          key={`s-${i}`}
          aria-hidden
          className="rocket-spark absolute rounded-full"
          style={
            {
              left: `${s.left}%`,
              bottom: 0,
              width: s.size,
              height: s.size,
              background: "#FFFAEC",
              boxShadow:
                "0 0 6px rgba(255,250,236,0.95), 0 0 14px rgba(212,176,97,0.7)",
              "--sx": s.sx,
              "--dur": s.duration,
              "--delay": s.delay,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Larger glowing embers */}
      {embers.map((e, i) => (
        <span
          key={`e-${i}`}
          aria-hidden
          className="rocket-ember absolute rounded-full"
          style={
            {
              left: `${e.left}%`,
              bottom: 0,
              width: e.size,
              height: e.size,
              background: "#FFE9B3",
              boxShadow:
                "0 0 10px rgba(255,233,179,1), 0 0 24px rgba(255,233,179,0.7), 0 0 50px rgba(212,176,97,0.55)",
              "--sx": e.sx,
              "--dur": e.duration,
              "--delay": e.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

/* Twinkling background stars for the rocket section */
function Stars() {
  const stars = useMemo(
    () =>
      Array.from({ length: 36 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 2.5,
        size: Math.random() * 1.6 + 0.6,
      })),
    []
  );
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((s, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
          }}
          animate={{ opacity: [0.15, 0.95, 0.15] }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            delay: s.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
