import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import {
  useState,
  useRef,
  type MouseEvent as ReactMouseEvent,
} from "react";
import PageTransition, { PageHeader } from "./PageTransition";
import { Reveal } from "./Reveal";

export type ServiceDetailProps = {
  number: string;
  slug: string;
  name: string;
  /** Short name shown in "What is X?" — e.g. "SEO". Falls back to name. */
  shortName?: string;
  tagline: string;
  /** Plain-English explanation that opens the page. */
  intro: string;
  why: string[];
  deliverables: { t: string; d: string; approach?: string }[];
  process: { n: string; t: string; d: string }[];
  faqs: { q: string; a: string }[];
  resultStat: { value: string; label: string }[];
  Visual?: () => JSX.Element;
};

export default function ServiceDetail(p: ServiceDetailProps) {
  return (
    <PageTransition>
      <PageHeader
        tag={`Service · ${p.number}`}
        title={
          <>
            {p.name.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gold italic">
              {p.name.split(" ").slice(-1)[0]}.
            </span>
          </>
        }
        subtitle={p.tagline}
      >
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {p.resultStat.map((r) => (
            <div key={r.label}>
              <div className="font-display text-3xl md:text-4xl text-gold">
                {r.value}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ivory/50">
                {r.label}
              </div>
            </div>
          ))}
        </div>
      </PageHeader>

      {/* 01 — What is [Name]? */}
      <ChapterRail number="01" label="What it is" bg="midnight" />
      <WhatIsSection shortName={p.shortName ?? p.name} explanation={p.intro} />

      {/* 02 — Deliverables (book) */}
      <ChapterRail number="02" label="Deliverables" bg="obsidian" />
      <BookSection deliverables={p.deliverables} />

      {/* 03 — How it runs */}
      <ChapterRail number="03" label="Process" bg="midnight" />
      <ProcessJourney items={p.process} />

      {/* 04 — FAQ */}
      <ChapterRail number="04" label="Questions" bg="obsidian" />
      <FaqPanel faqs={p.faqs} />

      {/* CLOSE */}
      <CloseSection number={p.number} />
    </PageTransition>
  );
}

/* ─────────────────────────────────────────────────────────────────
   01 · WHAT IT IS
   Plain-English explanation. No jargon. A single big paragraph
   underneath a stark "What is X?" heading. A gold rule draws
   underneath on enter.
───────────────────────────────────────────────────────────────── */
function WhatIsSection({
  shortName,
  explanation,
}: {
  shortName: string;
  explanation: string;
}) {
  return (
    <section className="bg-midnight pb-28 md:pb-40">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <h2 className="font-display font-light text-5xl md:text-7xl leading-[1.02] tracking-[-0.015em] mb-12">
            What is <span className="gold italic">{shortName}?</span>
          </h2>
        </Reveal>
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.7, 0, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
          className="block mb-12 h-px max-w-[280px] bg-gradient-to-r from-gold via-gold/60 to-transparent"
        />
        <Reveal as="p" delay={0.15} className="font-display font-light text-2xl md:text-[1.85rem] leading-[1.45] text-ivory/85 tracking-[-0.005em]">
          {explanation}
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   02 · BOOK
   Combines deliverables (the "what") with the approach bullets
   (the "why"). Each deliverable is one chapter of the book. Pages
   flip with a 3D rotateY animation. Click the right edge to flip
   forward, the left edge to flip back, or use the bottom dots.
───────────────────────────────────────────────────────────────── */
const pageVariants = {
  enter: (d: number) => ({
    rotateY: d > 0 ? -85 : 85,
    x: d > 0 ? 30 : -30,
    opacity: 0,
  }),
  center: { rotateY: 0, x: 0, opacity: 1 },
  exit: (d: number) => ({
    rotateY: d > 0 ? 85 : -85,
    x: d > 0 ? -30 : 30,
    opacity: 0,
  }),
};

function BookSection({
  deliverables,
}: {
  deliverables: { t: string; d: string; approach?: string }[];
}) {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const total = deliverables.length;

  function go(next: number) {
    if (next < 0 || next >= total || next === page) return;
    setDir(next > page ? 1 : -1);
    setPage(next);
  }
  const flip = (d: 1 | -1) => go(page + d);

  return (
    <section className="bg-obsidian pb-28 md:pb-40 border-b border-gold/15">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <h2 className="font-display font-light text-5xl md:text-7xl leading-[1.02] tracking-[-0.015em] mb-14 md:mb-20">
            The <span className="gold italic">deliverables.</span>
          </h2>
        </Reveal>

        <motion.div
          className="relative mx-auto max-w-3xl"
          style={{ perspective: 2400 }}
          initial={{ opacity: 0, y: 30, rotateX: -14 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.1, ease: [0.7, 0, 0.3, 1] }}
        >
          {/* Stacked page-edge layers — sit just behind the open book to
              suggest paper depth. Tiny vertical offsets read as a stack. */}
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              aria-hidden
              className="absolute inset-0 rounded-r-2xl rounded-l-md border border-gold/15 bg-coal/90 pointer-events-none"
              style={{
                transform: `translate(${(i + 1) * 4}px, ${(i + 1) * 3}px)`,
                opacity: 0.55 - i * 0.12,
                zIndex: -i - 1,
              }}
            />
          ))}

          {/* Hardcover backplate */}
          <div className="relative h-[540px] md:h-[580px] rounded-r-2xl rounded-l-md bg-gradient-to-r from-coal via-midnight to-obsidian border border-gold/25 shadow-[0_40px_90px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,250,236,0.04)] overflow-hidden">
            {/* Subtle paper grain (SVG noise) */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
              }}
            />
            {/* Inner page border — gives each page a printed-edge feel */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-5 md:inset-6 rounded-md border border-gold/10"
            />
            {/* Spine highlight */}
            <span
              aria-hidden
              className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-gold/45 via-gold/15 to-gold/45"
            />
            <span
              aria-hidden
              className="absolute left-2 top-0 bottom-0 w-px bg-gold/30"
            />
            {/* Spine inner shadow — hint of curved page near binding */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-2 top-0 bottom-0 w-12 bg-gradient-to-r from-black/55 to-transparent"
            />
            {/* Page edge stack on right (multi-layer for depth) */}
            <span
              aria-hidden
              className="absolute right-0 top-3 bottom-3 w-1.5 rounded-l-sm bg-[repeating-linear-gradient(90deg,rgba(212,176,97,0.22)_0_1px,transparent_1px_3px)]"
            />
            <span
              aria-hidden
              className="absolute right-1.5 top-4 bottom-4 w-px bg-gold/15"
            />
            <span
              aria-hidden
              className="absolute right-2 top-5 bottom-5 w-px bg-gold/10"
            />
            {/* Soft inner glow */}
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[80%] h-[260px] bg-gold/8 blur-[100px] rounded-full"
            />

            {/* Animated page */}
            <AnimatePresence mode="wait" custom={dir} initial={false}>
              <motion.div
                key={page}
                custom={dir}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.75, ease: [0.7, 0, 0.3, 1] }}
                style={{
                  transformOrigin: dir > 0 ? "left center" : "right center",
                  transformStyle: "preserve-3d",
                }}
                className="absolute inset-0 p-10 md:p-16 flex flex-col"
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.32em] text-ivory/40 mb-10">
                  <span className="text-gold">
                    Deliverable {String(page + 1).padStart(2, "0")}
                  </span>
                  <span>
                    {String(page + 1).padStart(2, "0")} /{" "}
                    {String(total).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display font-light text-3xl md:text-5xl tracking-[-0.01em] text-ivory mb-6 leading-[1.1] max-w-xl">
                  {deliverables[page].t}
                </h3>
                <p className="text-ivory/75 leading-relaxed text-base md:text-lg max-w-xl">
                  {deliverables[page].d}
                </p>
                {deliverables[page].approach && (
                  <div className="mt-auto pt-8 border-t border-gold/20 max-w-xl">
                    <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold/70 mb-3">
                      Our approach
                    </p>
                    <p className="font-display italic text-lg md:text-xl text-ivory/80 leading-relaxed">
                      {deliverables[page].approach}
                    </p>
                  </div>
                )}
                <span
                  aria-hidden
                  className="absolute bottom-5 right-6 text-gold/30 text-2xl select-none"
                >
                  ❦
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Click zones for flipping */}
            <button
              type="button"
              onClick={() => flip(-1)}
              disabled={page === 0}
              aria-label="Previous page"
              className="absolute left-2 top-0 bottom-0 w-[18%] focus:outline-none disabled:cursor-default group"
            >
              <span
                aria-hidden
                className="absolute left-3 top-1/2 -translate-y-1/2 size-11 rounded-full border border-gold/40 grid place-items-center text-gold opacity-0 group-hover:opacity-100 group-disabled:opacity-0 transition-all duration-300 bg-midnight/80 backdrop-blur-sm group-hover:-translate-x-0.5 group-hover:-translate-y-1/2"
              >
                ←
              </span>
            </button>
            <button
              type="button"
              onClick={() => flip(1)}
              disabled={page === total - 1}
              aria-label="Next page"
              className="absolute right-0 top-0 bottom-0 w-[18%] focus:outline-none disabled:cursor-default group"
            >
              <span
                aria-hidden
                className="absolute right-3 top-1/2 -translate-y-1/2 size-11 rounded-full border border-gold/40 grid place-items-center text-gold opacity-0 group-hover:opacity-100 group-disabled:opacity-0 transition-all duration-300 bg-midnight/80 backdrop-blur-sm group-hover:translate-x-0.5 group-hover:-translate-y-1/2"
              >
                →
              </span>
            </button>
          </div>

          {/* Bottom controls — page dots */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to chapter ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === page
                    ? "w-10 bg-gold"
                    : "w-1.5 bg-gold/30 hover:bg-gold/60 hover:w-3"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   03 · PROCESS — How it runs
   A horizontal "energy track" beam that draws across on viewport
   entry, three glowing nodes that pulse rings continuously, a
   traveling spark that loops, and three step cards that fade up
   in sequence as the beam reaches each node.
───────────────────────────────────────────────────────────────── */
function ProcessJourney({
  items,
}: {
  items: { n: string; t: string; d: string }[];
}) {
  return (
    <section className="bg-midnight pb-28 md:pb-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <h2 className="font-display font-light text-5xl md:text-7xl leading-[1.02] tracking-[-0.015em] mb-14 md:mb-20">
            How it <span className="gold italic">runs.</span>
          </h2>
        </Reveal>

        <div className="relative pt-16 md:pt-24">
          {/* Animated beam — desktop only */}
          <div className="hidden md:block absolute left-0 right-0 top-10 pointer-events-none">
            {/* The beam line, draws left → right on enter */}
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease: [0.7, 0, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
              className="block h-px w-full bg-gradient-to-r from-gold/80 via-gold to-gold/80"
            />

            {/* Three glowing nodes with pulsing rings */}
            {[16.667, 50, 83.333].map((pos, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: 0.4 + i * 0.45,
                  duration: 0.5,
                  ease: [0.2, 1.4, 0.4, 1],
                }}
                className="absolute top-0 -translate-y-1/2 -translate-x-1/2 size-3 rounded-full bg-gold"
                style={{
                  left: `${pos}%`,
                  boxShadow:
                    "0 0 14px rgba(212,176,97,0.95), 0 0 32px rgba(212,176,97,0.55)",
                }}
              >
                {/* Continuous pulse rings */}
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-gold"
                  animate={{ scale: [1, 3], opacity: [0.6, 0] }}
                  transition={{
                    duration: 2.4,
                    delay: 1 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-gold"
                  animate={{ scale: [1, 3], opacity: [0.6, 0] }}
                  transition={{
                    duration: 2.4,
                    delay: 2 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </motion.span>
            ))}

            {/* Robot walker — moves node to node along the beam, pausing
                at each step. Subtle bounce on the y-axis, soft halo trail. */}
            <RobotWalker />
          </div>

          {/* Step cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 relative z-10">
            {items.map((s, i) => (
              <motion.article
                key={s.t}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: 0.6 + i * 0.45,
                  duration: 0.8,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="relative bg-midnight border border-gold/15 rounded-2xl p-7 md:p-10 transition-all duration-500 hover:border-gold/45 hover:-translate-y-1 group overflow-hidden"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-1/2 -right-20 w-72 h-72 rounded-full bg-gold/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex items-baseline justify-between mb-8">
                  <span className="font-display italic text-6xl md:text-7xl text-gold/85 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/40">
                    Step
                  </span>
                </div>
                <h3 className="relative font-display text-2xl md:text-3xl text-ivory mb-4 transition-transform duration-500 group-hover:translate-x-1">
                  {s.t}
                </h3>
                <p className="relative text-ivory/65 leading-relaxed text-sm md:text-[15px]">
                  {s.d}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   04 · FAQ — scrolling list of questions, animated answer panel
   Left column: vertically scrollable list of questions inside a
   capped-height container. Click highlights the question and the
   right column cross-fades to its answer with a blur+slide reveal.
───────────────────────────────────────────────────────────────── */
function FaqPanel({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-obsidian pb-28 md:pb-40 border-b border-gold/15">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <h2 className="font-display font-light text-5xl md:text-7xl leading-[1.02] tracking-[-0.015em] mb-14 md:mb-20">
            Common <span className="gold italic">questions.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-start">
          {/* Scrolling questions list */}
          <div className="md:col-span-5">
            <div className="relative">
              {/* Top + bottom fade overlays */}
              <span
                aria-hidden
                className="pointer-events-none absolute top-0 left-0 right-3 h-8 bg-gradient-to-b from-obsidian to-transparent z-10"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-0 right-3 h-8 bg-gradient-to-t from-obsidian to-transparent z-10"
              />
              <ul className="max-h-[480px] overflow-y-auto pr-3 space-y-2 no-scrollbar">
                {faqs.map((f, i) => {
                  const isActive = i === active;
                  return (
                    <li key={f.q}>
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        className={`relative w-full text-left p-5 rounded-xl border transition-all duration-500 group overflow-hidden ${
                          isActive
                            ? "border-gold/60 bg-midnight/85"
                            : "border-gold/15 bg-midnight/40 hover:border-gold/40"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="faq-active"
                            aria-hidden
                            transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
                            className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold"
                          />
                        )}
                        <div className="flex items-center gap-4">
                          <span
                            className={`font-mono text-[10px] uppercase tracking-[0.28em] transition-colors shrink-0 ${
                              isActive ? "text-gold" : "text-gold/50"
                            }`}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={`font-display text-base md:text-lg leading-snug transition-colors ${
                              isActive
                                ? "text-ivory"
                                : "text-ivory/75 group-hover:text-ivory"
                            }`}
                          >
                            {f.q}
                          </span>
                          <span
                            aria-hidden
                            className={`ml-auto text-gold transition-all duration-500 shrink-0 ${
                              isActive
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-2 opacity-0 group-hover:opacity-60 group-hover:translate-x-0"
                            }`}
                          >
                            →
                          </span>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Answer panel */}
          <div className="md:col-span-7 relative min-h-[420px] md:min-h-[480px]">
            <span
              aria-hidden
              className="absolute -top-1 left-0 right-0 h-px bg-gradient-to-r from-gold/70 via-gold/40 to-transparent"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -24, filter: "blur(8px)" }}
                transition={{ duration: 0.55, ease: [0.7, 0, 0.3, 1] }}
                className="pt-10"
              >
                <div className="flex items-baseline gap-5 mb-8">
                  <span className="font-display italic text-6xl md:text-7xl text-gold/85 leading-none">
                    {String(active + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/40">
                    Question
                  </span>
                </div>
                <h3 className="font-display font-light text-3xl md:text-4xl text-ivory leading-tight mb-8 max-w-2xl tracking-[-0.005em]">
                  {faqs[active].q}
                </h3>
                <p className="text-ivory/75 leading-relaxed text-base md:text-lg max-w-2xl">
                  {faqs[active].a}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   CLOSE — magnetic back-to-services pill
───────────────────────────────────────────────────────────────── */
function CloseSection({ number }: { number: string }) {
  return (
    <section className="relative bg-midnight pb-28 md:pb-32 pt-24 md:pt-32 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[280px] bg-gold/10 blur-[140px] rounded-full"
      />
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col items-center gap-6 relative">
        <Reveal>
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ivory/40">
            Service · {number} of 04
          </span>
        </Reveal>
        <MagneticPill to="/services">
          <span
            aria-hidden
            className="transition-transform duration-500 group-hover:-translate-x-1.5"
          >
            ←
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.28em]">
            Back to all services
          </span>
          <span className="size-1.5 rounded-full bg-gold animate-[ledFlicker_2.2s_ease-in-out_infinite]" />
        </MagneticPill>
      </div>
    </section>
  );
}

function MagneticPill({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  const onMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block"
    >
      <motion.div style={{ x: sx, y: sy }}>
        <Link
          to={to}
          className="group inline-flex items-center gap-4 px-8 md:px-10 py-5 rounded-full border border-gold/40 bg-midnight/60 text-ivory hover:text-gold hover:border-gold transition-colors duration-500 backdrop-blur-sm shadow-[0_0_30px_rgba(212,176,97,0.18)]"
        >
          {children}
        </Link>
      </motion.div>
    </div>
  );
}

/* ─── ChapterRail ─────────────────────────────────────────────── */
function ChapterRail({
  number,
  label,
  bg,
}: {
  number: string;
  label: string;
  bg: "midnight" | "obsidian";
}) {
  const bgClass = bg === "midnight" ? "bg-midnight" : "bg-obsidian";
  return (
    <div className={bgClass}>
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-20 md:pt-28 pb-2 md:pb-3">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex items-center gap-5"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold">
            {number}
          </span>
          <span
            aria-hidden
            className="block flex-1 max-w-[220px] h-px origin-left bg-gradient-to-r from-gold/70 via-gold/40 to-transparent"
            style={{
              transform: "scaleX(0)",
              animation: "chapterDraw 1s cubic-bezier(0.7,0,0.3,1) forwards",
            }}
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-ivory/55">
            {label}
          </span>
        </motion.div>
      </div>
      <style>{`@keyframes chapterDraw { to { transform: scaleX(1); } }`}</style>
    </div>
  );
}

/* ─── RobotWalker ──────────────────────────────────────────────────
   A tiny line-art robot that walks the process beam, pausing at
   each of the three nodes (16.667 / 50 / 83.333 %). Soft gold halo
   follows it for a "trail" feel; subtle y-bobble reads as steps. */
function RobotWalker() {
  // 12s loop: hold → glide → hold → glide → hold → glide back to start.
  const stops = ["16.667%", "16.667%", "50%", "50%", "83.333%", "83.333%", "16.667%"];
  const times = [0, 0.18, 0.32, 0.48, 0.62, 0.78, 1];
  return (
    <motion.div
      aria-hidden
      className="absolute -top-7 left-0 -translate-x-1/2"
      initial={{ left: "16.667%" }}
      animate={{
        left: stops,
        y: [0, -2, 0, -2, 0, -2, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: [0.65, 0, 0.35, 1],
        times,
      }}
    >
      <span className="relative block">
        {/* Soft halo behind robot */}
        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gold/25 blur-xl"
        />
        {/* Subtle bounce on the body itself for a "step" feel */}
        <motion.svg
          width="30"
          height="42"
          viewBox="0 0 30 42"
          aria-hidden
          className="relative drop-shadow-[0_0_10px_rgba(212,176,97,0.55)]"
          animate={{ y: [0, -1.2, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Antenna */}
          <line x1="15" y1="2" x2="15" y2="6" stroke="#D4B061" strokeWidth="1" strokeLinecap="round" />
          <circle cx="15" cy="1.5" r="1.4" fill="#D4B061" />
          {/* Head */}
          <rect x="5" y="6" width="20" height="13" rx="3" fill="#0B0A09" stroke="#D4B061" strokeWidth="1.1" />
          {/* Eyes */}
          <circle cx="10.5" cy="12.5" r="1.4" fill="#D4B061" />
          <circle cx="19.5" cy="12.5" r="1.4" fill="#D4B061" />
          {/* Body */}
          <rect x="3.5" y="20.5" width="23" height="15" rx="3" fill="#0B0A09" stroke="#D4B061" strokeWidth="1.1" />
          {/* Core */}
          <circle cx="15" cy="28" r="2.2" fill="#D4B061" />
          {/* Feet */}
          <rect x="7" y="36" width="6" height="3" rx="1" fill="#0B0A09" stroke="#D4B061" strokeWidth="0.9" />
          <rect x="17" y="36" width="6" height="3" rx="1" fill="#0B0A09" stroke="#D4B061" strokeWidth="0.9" />
        </motion.svg>
      </span>
    </motion.div>
  );
}
