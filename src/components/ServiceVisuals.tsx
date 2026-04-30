import { motion } from "framer-motion";
import { useMemo } from "react";

/* ─────────────────────────────────────────────────────────────────
   Shared visual frame — all four service visuals sit inside this
   so they share the same proportions, ambient particles, and tag
   strip. Keeps the four detail pages visually consistent.
───────────────────────────────────────────────────────────────── */
export function VisualFrame({
  caption,
  children,
}: {
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-b from-obsidian via-midnight to-obsidian">
      <AmbientDust />
      <CornerTicks />
      <div className="relative z-10 flex items-center justify-center min-h-[340px] md:min-h-[440px] px-6 py-16">
        {children}
      </div>
      <div className="relative z-10 flex items-center justify-between border-t border-gold/15 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.32em] text-ivory/45">
        <span className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-gold animate-[ledFlicker_2.2s_ease-in-out_infinite]" />
          Live
        </span>
        <span className="hidden md:inline">{caption}</span>
        <span className="text-gold/70">◆ ◆ ◆</span>
      </div>
    </div>
  );
}

function CornerTicks() {
  const corners = ["top-3 left-3", "top-3 right-3", "bottom-12 left-3", "bottom-12 right-3"];
  return (
    <>
      {corners.map((c) => (
        <span
          key={c}
          aria-hidden
          className={`absolute ${c} size-3 border-gold/45`}
          style={{
            borderTopWidth: c.includes("top") ? 1 : 0,
            borderBottomWidth: c.includes("bottom") ? 1 : 0,
            borderLeftWidth: c.includes("left") ? 1 : 0,
            borderRightWidth: c.includes("right") ? 1 : 0,
          }}
        />
      ))}
    </>
  );
}

function AmbientDust() {
  const dust = useMemo(
    () =>
      Array.from({ length: 14 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 6,
        size: 1 + Math.random() * 1.6,
        opacity: 0.2 + Math.random() * 0.4,
      })),
    []
  );
  return (
    <div className="absolute inset-0 pointer-events-none">
      {dust.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
          }}
          animate={{ y: [0, -22, 0], opacity: [0, d.opacity, 0] }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   1) SEO  — SunVisual
   A nature-themed sun with rotating rays. A magnifying glass
   orbits the disc, scanning. Long shadows and warm glow.
───────────────────────────────────────────────────────────────── */
export function SunVisual() {
  return (
    <VisualFrame caption="Search · sun rises over your category">
      <div className="relative w-[320px] h-[260px] md:w-[420px] md:h-[320px]">
        {/* Soft horizon glow */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gold/15 via-gold/5 to-transparent rounded-b-full blur-2xl" />
        {/* Horizon line */}
        <div className="absolute inset-x-0 bottom-12 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        {/* Distant hills */}
        <svg
          viewBox="0 0 420 90"
          className="absolute inset-x-0 bottom-12 w-full h-12 text-gold/30"
          aria-hidden
        >
          <path
            d="M0 70 L60 40 L110 60 L170 25 L240 55 L300 30 L360 50 L420 35 L420 90 L0 90 Z"
            fill="currentColor"
            opacity="0.35"
          />
          <path
            d="M0 80 L70 55 L140 70 L210 45 L280 65 L340 50 L420 70 L420 90 L0 90 Z"
            fill="currentColor"
            opacity="0.55"
          />
        </svg>

        {/* The sun */}
        <div className="absolute left-1/2 -translate-x-1/2 top-6 md:top-2 w-40 h-40 md:w-52 md:h-52">
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            {Array.from({ length: 16 }).map((_, i) => (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 w-px h-24 md:h-28 origin-top bg-gradient-to-b from-gold/80 to-transparent"
                style={{
                  transform: `translate(-50%, 0) rotate(${i * (360 / 16)}deg) translateY(-50%)`,
                }}
              />
            ))}
          </motion.div>
          <motion.div
            className="absolute inset-6 md:inset-8 rounded-full bg-gradient-to-b from-gold to-gold-200"
            style={{
              boxShadow:
                "0 0 60px rgba(212,176,97,0.65), 0 0 120px rgba(212,176,97,0.35)",
            }}
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-10 md:inset-12 rounded-full bg-ivory/85"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Magnifying glass scanning across */}
        <motion.div
          className="absolute top-1/2"
          initial={{ left: "8%" }}
          animate={{ left: ["6%", "78%", "6%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="58" height="58" viewBox="0 0 58 58" aria-hidden>
            <circle
              cx="22"
              cy="22"
              r="16"
              fill="rgba(11,10,9,0.55)"
              stroke="#D4B061"
              strokeWidth="1.6"
            />
            <line
              x1="34"
              y1="34"
              x2="52"
              y2="52"
              stroke="#D4B061"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Floating query chips */}
        <FloatingChip text="best near me" left="6%" top="8%" delay={0} />
        <FloatingChip text="how to" left="72%" top="14%" delay={1.2} />
        <FloatingChip text="reviews" left="14%" top="34%" delay={2.4} />
      </div>
    </VisualFrame>
  );
}

function FloatingChip({
  text,
  left,
  top,
  delay,
}: {
  text: string;
  left: string;
  top: string;
  delay: number;
}) {
  return (
    <motion.span
      className="absolute font-mono text-[9px] md:text-[10px] uppercase tracking-[0.24em] text-ivory/65 border border-gold/30 bg-midnight/80 backdrop-blur-sm px-2 py-1 rounded-full"
      style={{ left, top }}
      animate={{ y: [0, -6, 0], opacity: [0.7, 1, 0.7] }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {text}
    </motion.span>
  );
}

/* ─────────────────────────────────────────────────────────────────
   2) Website Development — RobotVisual
   Reuses the line-art robot from About. Adds a small build
   bench: a code window typing letters next to it, and a
   reassembly progress bar underneath.
───────────────────────────────────────────────────────────────── */
export function RobotVisual() {
  return (
    <VisualFrame caption="Hand-built · React · Next.js · Tailwind">
      <div className="relative flex items-center gap-8 md:gap-14">
        <Robot />
        <div className="hidden md:flex flex-col gap-3">
          <CodeWindow />
          <BuildBar />
        </div>
      </div>
    </VisualFrame>
  );
}

function Robot() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative shrink-0"
    >
      <svg
        viewBox="0 0 140 200"
        className="w-28 md:w-36 h-auto drop-shadow-[0_0_22px_rgba(212,176,97,0.35)]"
        aria-hidden
      >
        <line x1="70" y1="12" x2="70" y2="32" stroke="#D4B061" strokeWidth="1.6" strokeLinecap="round" />
        <motion.circle
          cx="70" cy="9" r="4" fill="#D4B061"
          animate={{ opacity: [0.35, 1, 0.35], r: [3.6, 4.4, 3.6] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <rect x="20" y="32" width="100" height="68" rx="14" fill="#0B0A09" stroke="#D4B061" strokeWidth="1.8" />
        <rect x="32" y="44" width="76" height="44" rx="7" fill="#15120e" stroke="rgba(212,176,97,0.35)" strokeWidth="1" />
        <motion.g
          animate={{ scaleY: [1, 1, 0.1, 1] }}
          transition={{ duration: 4, times: [0, 0.7, 0.74, 0.78], repeat: Infinity, ease: "easeOut" }}
          style={{ transformOrigin: "70px 64px" }}
        >
          <circle cx="55" cy="64" r="4.5" fill="#D4B061" />
          <circle cx="85" cy="64" r="4.5" fill="#D4B061" />
        </motion.g>
        <motion.rect
          y="80" height="2.4" fill="#D4B061" rx="1.2"
          animate={{ width: [22, 12, 18, 10, 22], x: [59, 64, 61, 65, 59] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <rect x="55" y="100" width="30" height="12" fill="#0B0A09" stroke="#D4B061" strokeWidth="1.6" />
        <rect x="14" y="112" width="112" height="68" rx="10" fill="#0B0A09" stroke="#D4B061" strokeWidth="1.8" />
        <rect x="20" y="118" width="100" height="56" rx="7" fill="none" stroke="rgba(212,176,97,0.18)" strokeWidth="1" />
        <motion.g
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="70" cy="146" r="9" fill="#D4B061" />
          <circle cx="70" cy="146" r="13" fill="none" stroke="#D4B061" strokeWidth="1" opacity="0.5" />
        </motion.g>
        <line x1="32" y1="166" x2="48" y2="166" stroke="#D4B061" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <line x1="92" y1="166" x2="108" y2="166" stroke="#D4B061" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <rect x="2" y="124" width="10" height="42" rx="4" fill="#0B0A09" stroke="#D4B061" strokeWidth="1.6" />
        <rect x="128" y="124" width="10" height="42" rx="4" fill="#0B0A09" stroke="#D4B061" strokeWidth="1.6" />
        <rect x="32" y="180" width="22" height="8" rx="2" fill="#0B0A09" stroke="#D4B061" strokeWidth="1.4" />
        <rect x="86" y="180" width="22" height="8" rx="2" fill="#0B0A09" stroke="#D4B061" strokeWidth="1.4" />
      </svg>
    </motion.div>
  );
}

function CodeWindow() {
  const lines = [
    { w: "70%", indent: 0, color: "rgba(242,234,215,0.7)" },
    { w: "55%", indent: 1, color: "rgba(212,176,97,0.8)" },
    { w: "82%", indent: 1, color: "rgba(242,234,215,0.55)" },
    { w: "40%", indent: 2, color: "rgba(212,176,97,0.6)" },
    { w: "65%", indent: 1, color: "rgba(242,234,215,0.55)" },
  ];
  return (
    <div className="w-72 rounded-xl border border-gold/25 bg-midnight/85 p-3 shadow-[0_0_28px_rgba(212,176,97,0.18)]">
      <div className="flex items-center gap-1.5 mb-3">
        <span className="size-2 rounded-full bg-gold/70" />
        <span className="size-2 rounded-full bg-gold/40" />
        <span className="size-2 rounded-full bg-gold/25" />
        <span className="ml-2 font-mono text-[9px] uppercase tracking-[0.28em] text-ivory/40">
          page.tsx
        </span>
      </div>
      <div className="space-y-1.5">
        {lines.map((l, i) => (
          <motion.div
            key={i}
            className="h-1.5 rounded-full"
            style={{
              marginLeft: l.indent * 10,
              width: l.w,
              originX: 0,
              background: l.color,
            }}
            animate={{ scaleX: [0, 1, 1] }}
            transition={{
              duration: 1.6,
              delay: i * 0.35,
              repeat: Infinity,
              repeatDelay: 1.6,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function BuildBar() {
  return (
    <div className="w-72 rounded-xl border border-gold/20 bg-midnight/70 p-3">
      <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.28em] text-ivory/45 mb-2">
        <span>Lighthouse</span>
        <span className="text-gold/80">100</span>
      </div>
      <div className="relative h-1.5 rounded-full bg-coal overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold/70 to-gold rounded-full"
          animate={{ width: ["0%", "100%"] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   3) Website Maintenance — PulseVisual
   Heartbeat / EKG line traveling across a monitor card. Status
   badges (Uptime, SSL, Backups, CPU) flicker green next to it.
───────────────────────────────────────────────────────────────── */
export function PulseVisual() {
  return (
    <VisualFrame caption="Live · monitoring across 14 regions">
      <div className="relative w-[320px] md:w-[460px] flex flex-col gap-5">
        <div className="relative h-44 md:h-52 rounded-2xl border border-gold/25 bg-midnight/80 overflow-hidden">
          {/* Faint grid */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(212,176,97,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,176,97,0.18) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Pulsing line */}
          <svg viewBox="0 0 460 200" className="absolute inset-0 w-full h-full" aria-hidden>
            <motion.path
              d="M0 100 L80 100 L100 100 L110 60 L120 140 L130 80 L140 100 L220 100 L240 100 L250 50 L260 150 L270 100 L360 100 L380 100 L390 70 L400 130 L410 100 L460 100"
              fill="none"
              stroke="#D4B061"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                filter: "drop-shadow(0 0 6px rgba(212,176,97,0.7))",
              }}
            />
          </svg>
          {/* Traveling pulse dot */}
          <motion.span
            className="absolute top-1/2 -translate-y-1/2 size-2.5 rounded-full bg-gold"
            style={{
              boxShadow: "0 0 12px rgba(212,176,97,0.9), 0 0 28px rgba(212,176,97,0.5)",
            }}
            animate={{ left: ["2%", "98%"] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute top-3 left-4 font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/55">
            Vitals
          </div>
          <div className="absolute top-3 right-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
            <span className="size-1.5 rounded-full bg-gold animate-[ledFlicker_1.6s_ease-in-out_infinite]" />
            99.98%
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { l: "Uptime", v: "OK" },
            { l: "SSL", v: "OK" },
            { l: "Backups", v: "OK" },
            { l: "CVE", v: "PATCHED" },
          ].map((b, i) => (
            <motion.div
              key={b.l}
              className="rounded-lg border border-gold/20 bg-midnight/70 px-3 py-2"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 2.4,
                delay: i * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="font-mono text-[9px] uppercase tracking-[0.28em] text-ivory/45">
                {b.l}
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-gold text-xs">
                <span className="size-1.5 rounded-full bg-gold" />
                {b.v}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}

/* ─────────────────────────────────────────────────────────────────
   4) Meta Ads — ConvoyVisual
   A convoy of delivery trucks moves across the screen carrying
   parcels (impressions → clicks → conversions). A small ROAS
   counter ticks above. A road with dashed center line scrolls.
───────────────────────────────────────────────────────────────── */
export function ConvoyVisual() {
  return (
    <VisualFrame caption="Spend in · packages out · weekly P&L">
      <div className="relative w-[320px] md:w-[460px] h-56 md:h-64">
        {/* Sun in distance */}
        <div className="absolute right-6 top-3 w-10 h-10 rounded-full bg-gradient-to-b from-gold to-gold-200 opacity-80 shadow-[0_0_30px_rgba(212,176,97,0.55)]" />

        {/* ROAS readout */}
        <div className="absolute left-0 top-0 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/55">
          <span className="size-1.5 rounded-full bg-gold animate-[ledFlicker_1.8s_ease-in-out_infinite]" />
          ROAS
          <span className="text-gold text-sm">4.2×</span>
        </div>

        {/* Distant skyline */}
        <svg
          viewBox="0 0 460 60"
          className="absolute inset-x-0 bottom-24 w-full h-10 text-gold/25"
          aria-hidden
        >
          <path
            d="M0 60 L0 35 L20 35 L20 22 L40 22 L40 35 L70 35 L70 18 L90 18 L90 35 L120 35 L120 28 L150 28 L150 35 L200 35 L200 14 L220 14 L220 35 L260 35 L260 25 L290 25 L290 35 L340 35 L340 20 L370 20 L370 35 L420 35 L420 30 L460 30 L460 60 Z"
            fill="currentColor"
          />
        </svg>

        {/* Road */}
        <div className="absolute inset-x-0 bottom-6 h-10 rounded bg-gradient-to-b from-coal/60 to-coal border-y border-gold/20 overflow-hidden">
          <motion.div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(212,176,97,0.8) 0 18px, transparent 18px 36px)",
            }}
            animate={{ x: ["0%", "-36px"] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Truck convoy */}
        <Truck delay={0} />
        <Truck delay={4.5} variant="boxes" />

        {/* Parcels rising over destination */}
        <RisingParcel left="86%" delay={0.6} />
        <RisingParcel left="80%" delay={2.2} />
        <RisingParcel left="90%" delay={3.4} />
      </div>
    </VisualFrame>
  );
}

function Truck({ delay = 0, variant }: { delay?: number; variant?: "boxes" }) {
  return (
    <motion.div
      className="absolute bottom-7"
      initial={{ x: -120 }}
      animate={{ x: ["-15%", "108%"] }}
      transition={{
        duration: 9,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg width="92" height="48" viewBox="0 0 92 48" aria-hidden>
        {/* Cargo box */}
        <rect
          x="2"
          y="6"
          width="56"
          height="30"
          rx="2"
          fill="#0B0A09"
          stroke="#D4B061"
          strokeWidth="1.4"
        />
        {variant === "boxes" ? (
          <>
            <rect x="8" y="12" width="14" height="10" fill="#D4B061" opacity="0.55" />
            <rect x="24" y="12" width="14" height="10" fill="#D4B061" opacity="0.35" />
            <rect x="40" y="12" width="14" height="10" fill="#D4B061" opacity="0.65" />
            <rect x="8" y="24" width="22" height="8" fill="#D4B061" opacity="0.4" />
            <rect x="32" y="24" width="22" height="8" fill="#D4B061" opacity="0.5" />
          </>
        ) : (
          <>
            <line x1="8" y1="14" x2="52" y2="14" stroke="#D4B061" strokeWidth="0.9" opacity="0.5" />
            <line x1="8" y1="22" x2="52" y2="22" stroke="#D4B061" strokeWidth="0.9" opacity="0.5" />
            <line x1="8" y1="30" x2="52" y2="30" stroke="#D4B061" strokeWidth="0.9" opacity="0.5" />
            <text
              x="30"
              y="26"
              textAnchor="middle"
              fontSize="9"
              fontFamily="monospace"
              fill="#D4B061"
              opacity="0.85"
            >
              AMARA
            </text>
          </>
        )}
        {/* Cab */}
        <path
          d="M58 14 L74 14 L86 22 L86 36 L58 36 Z"
          fill="#0B0A09"
          stroke="#D4B061"
          strokeWidth="1.4"
        />
        <rect x="62" y="17" width="14" height="9" fill="#D4B061" opacity="0.35" />
        {/* Wheels */}
        <circle cx="14" cy="40" r="5" fill="#0B0A09" stroke="#D4B061" strokeWidth="1.4" />
        <circle cx="14" cy="40" r="1.6" fill="#D4B061" />
        <circle cx="44" cy="40" r="5" fill="#0B0A09" stroke="#D4B061" strokeWidth="1.4" />
        <circle cx="44" cy="40" r="1.6" fill="#D4B061" />
        <circle cx="78" cy="40" r="5" fill="#0B0A09" stroke="#D4B061" strokeWidth="1.4" />
        <circle cx="78" cy="40" r="1.6" fill="#D4B061" />
      </svg>
    </motion.div>
  );
}

function RisingParcel({ left, delay }: { left: string; delay: number }) {
  return (
    <motion.div
      className="absolute bottom-16"
      style={{ left }}
      animate={{ y: [0, -56], opacity: [0, 1, 0] }}
      transition={{
        duration: 2.4,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
        <rect
          x="2"
          y="2"
          width="16"
          height="16"
          rx="2"
          fill="#0B0A09"
          stroke="#D4B061"
          strokeWidth="1.2"
        />
        <line x1="10" y1="2" x2="10" y2="18" stroke="#D4B061" strokeWidth="1" opacity="0.8" />
        <line x1="2" y1="10" x2="18" y2="10" stroke="#D4B061" strokeWidth="1" opacity="0.8" />
      </svg>
    </motion.div>
  );
}
