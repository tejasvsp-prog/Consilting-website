import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";

/**
 * Per-page wrapper. The new page mounts after the curtain has covered the
 * screen, so the entrance animates from underneath the curtain — feels like
 * the page itself is being unveiled rather than crossfading.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        delay: 0.5,
        duration: 0.8,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Route-aware curtain. Dispatches a different theatrical transition per
 * route family — the page itself dictates the gesture. Keyed by pathname,
 * so it remounts and replays on every navigation.
 */
export function RouteCurtain() {
  const { pathname } = useLocation();
  const variant = pickVariant(pathname);

  return (
    <div
      key={pathname}
      className="fixed inset-0 z-[80] pointer-events-none overflow-hidden"
      aria-hidden
    >
      {variant === "panels" && <PanelsCurtain />}
      {variant === "split" && <SplitCurtain />}
      {variant === "sweep" && <SweepCurtain />}
      {variant === "wipe" && <WipeCurtain />}
      {variant === "iris" && <IrisCurtain />}
    </div>
  );
}

type Variant = "panels" | "split" | "sweep" | "wipe" | "iris";

function pickVariant(path: string): Variant {
  if (path === "/") return "panels";
  if (path === "/about") return "split";
  if (path === "/services") return "sweep";
  if (path.startsWith("/services/")) return "wipe";
  if (path === "/contact") return "iris";
  return "panels";
}

const COVER_EASE = [0.76, 0, 0.24, 1] as const;

/* ── Home: 5 vertical panels sweep up + AMARA flash ─────────────── */
function PanelsCurtain() {
  const panels = ["#0b0a09", "#15120e", "#d4b061", "#15120e", "#0b0a09"];
  return (
    <>
      <div className="flex absolute inset-0">
        {panels.map((c, i) => (
          <motion.div
            key={i}
            className="flex-1 will-change-transform"
            style={{ background: c }}
            initial={{ y: "101%" }}
            animate={{ y: ["101%", "0%", "0%", "-101%"] }}
            transition={{
              duration: 1.5,
              times: [0, 0.34, 0.5, 1],
              delay: i * 0.045,
              ease: COVER_EASE,
            }}
          />
        ))}
      </div>
      <BrandFlash duration={1.5} times={[0, 0.36, 0.46, 0.55, 0.62]} />
    </>
  );
}

/* ── About: top + bottom curtains close to center, gold seam, open ─ */
function SplitCurtain() {
  return (
    <>
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2 bg-midnight will-change-transform"
        initial={{ y: "-101%" }}
        animate={{ y: ["-101%", "0%", "0%", "-101%"] }}
        transition={{
          duration: 1.4,
          times: [0, 0.4, 0.55, 1],
          ease: COVER_EASE,
        }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-midnight will-change-transform"
        initial={{ y: "101%" }}
        animate={{ y: ["101%", "0%", "0%", "101%"] }}
        transition={{
          duration: 1.4,
          times: [0, 0.4, 0.55, 1],
          ease: COVER_EASE,
        }}
      />
      {/* gold seam at the meeting line */}
      <motion.div
        className="absolute left-0 right-0 top-1/2 h-px bg-gold origin-center"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: [0, 0, 1, 1, 0],
          opacity: [0, 0, 1, 1, 0],
        }}
        transition={{
          duration: 1.4,
          times: [0, 0.4, 0.5, 0.58, 0.7],
          ease: COVER_EASE,
        }}
      />
      <BrandFlash duration={1.4} times={[0, 0.42, 0.5, 0.55, 0.65]} />
    </>
  );
}

/* ── Services overview: a single horizontal sweep with a gold lead edge ─ */
function SweepCurtain() {
  return (
    <>
      {/* Main panel — slides in from left, holds, exits right */}
      <motion.div
        className="absolute inset-y-0 left-0 right-0 bg-obsidian will-change-transform"
        initial={{ x: "-101%" }}
        animate={{ x: ["-101%", "0%", "0%", "101%"] }}
        transition={{
          duration: 1.3,
          times: [0, 0.4, 0.5, 1],
          ease: COVER_EASE,
        }}
      />
      {/* Gold leading edge — runs slightly ahead, a luxe sweep line */}
      <motion.div
        className="absolute inset-y-0 w-[3px] bg-gold will-change-transform"
        initial={{ x: "-3vw" }}
        animate={{ x: ["-3vw", "100vw", "100vw", "104vw"] }}
        transition={{
          duration: 1.3,
          times: [0, 0.4, 0.5, 1],
          ease: COVER_EASE,
        }}
        style={{ left: 0 }}
      />
      <BrandFlash duration={1.3} times={[0, 0.4, 0.46, 0.55, 0.62]} />
    </>
  );
}

/* ── Service detail: skewed diagonal panel sweeps top-right → bottom-left ─ */
function WipeCurtain() {
  return (
    <>
      <motion.div
        className="absolute -inset-y-32 -inset-x-32 bg-midnight will-change-transform"
        style={{ transform: "skewX(-14deg)" }}
        initial={{ x: "150%" }}
        animate={{ x: ["150%", "0%", "0%", "-150%"] }}
        transition={{
          duration: 1.4,
          times: [0, 0.4, 0.5, 1],
          ease: COVER_EASE,
        }}
      />
      {/* Thin gold rule that trails the leading edge */}
      <motion.div
        className="absolute -inset-y-32 w-[6px] bg-gold will-change-transform"
        style={{ transform: "skewX(-14deg)", left: "-30vw" }}
        initial={{ x: "150vw" }}
        animate={{ x: ["150vw", "20vw", "20vw", "-30vw"] }}
        transition={{
          duration: 1.4,
          times: [0, 0.4, 0.5, 1],
          ease: COVER_EASE,
        }}
      />
      <BrandFlash duration={1.4} times={[0, 0.4, 0.48, 0.55, 0.65]} />
    </>
  );
}

/* ── Contact: iris — gold ring expands, midnight fills, contracts ─ */
function IrisCurtain() {
  return (
    <>
      {/* Midnight disc expands to cover, then contracts away */}
      <motion.div
        className="absolute inset-0 bg-midnight will-change-[clip-path]"
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={{
          clipPath: [
            "circle(0% at 50% 50%)",
            "circle(150% at 50% 50%)",
            "circle(150% at 50% 50%)",
            "circle(0% at 50% 50%)",
          ],
        }}
        transition={{
          duration: 1.3,
          times: [0, 0.4, 0.5, 1],
          ease: COVER_EASE,
        }}
      />
      {/* Gold ring chases the leading edge */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.3, times: [0, 0.32, 0.5, 0.62] }}
      >
        <motion.div
          className="rounded-full border-2 border-gold"
          initial={{ width: 0, height: 0 }}
          animate={{
            width: ["0vmax", "180vmax"],
            height: ["0vmax", "180vmax"],
          }}
          transition={{ duration: 1.3, times: [0, 0.5], ease: COVER_EASE }}
        />
      </motion.div>
      <BrandFlash duration={1.3} times={[0, 0.42, 0.48, 0.55, 0.62]} />
    </>
  );
}

/* ── Shared brand flash that lights up at the apex of any curtain ─ */
function BrandFlash({
  duration,
  times,
}: {
  duration: number;
  times: number[];
}) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 1, 1, 0] }}
      transition={{ duration, times }}
    >
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 0, 1, 1, 0] }}
        transition={{
          duration,
          times,
          ease: [0.7, 0, 0.2, 1],
        }}
        className="block h-px w-32 md:w-48 bg-gold mb-5 origin-center"
      />
      <span className="font-display font-light text-3xl md:text-5xl tracking-mark text-ivory">
        AMARA
      </span>
      <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.42em] text-gold">
        Digital
      </span>
    </motion.div>
  );
}

/**
 * Page-header banner used by every inner route.
 */
export function PageHeader({
  tag,
  title,
  subtitle,
  children,
}: {
  tag: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative pt-40 md:pt-44 pb-16 md:pb-24 border-b border-gold/15">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8"
        >
          ◆ {tag}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display font-light text-5xl md:text-7xl lg:text-[7vw] leading-[0.98] tracking-[-0.02em] max-w-5xl text-ivory"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="mt-8 max-w-2xl text-ivory/65 text-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </header>
  );
}
