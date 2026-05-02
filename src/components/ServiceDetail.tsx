import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import PageTransition, { PageHeader } from "./PageTransition";
import { Reveal, SplitText } from "./Reveal";

export type ServiceDetailProps = {
  number: string;
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  why: string[];
  deliverables: { t: string; d: string }[];
  process: { n: string; t: string; d: string }[];
  faqs: { q: string; a: string }[];
  resultStat: { value: string; label: string }[];
  /* HOOK → PROBLEM → AUTHORITY → SOLUTION → PROOF → OFFER → CLOSE
     The fields below add the new narrative beats. All optional so
     existing pages still render if they aren't filled in yet. */
  hook?: string;
  problem?: string;
  proofQuote?: string;
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
      />

      {/* Visual band */}
      {p.Visual && (
        <section className="bg-midnight pt-2 pb-16 md:pb-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
              <p.Visual />
            </Reveal>
          </div>
        </section>
      )}

      {/* HOOK — the knockout sentence */}
      {p.hook && <HookSection text={p.hook} />}

      {/* PROBLEM — what's broken */}
      {p.problem && <ProblemSection text={p.problem} />}

      {/* 01 — In short (authority + intro) */}
      <ChapterRail number="01" label="In short" bg="midnight" />
      <section className="bg-midnight pb-28 md:pb-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <h2 className="font-display font-light text-5xl md:text-7xl leading-[1.02] tracking-[-0.015em] mb-12 md:mb-16">
              The <span className="gold italic">approach.</span>
            </h2>
          </Reveal>

          <Reveal as="p" className="font-display font-light text-2xl md:text-3xl leading-[1.4] text-ivory/85 tracking-[-0.005em] max-w-4xl">
            {p.intro}
          </Reveal>

          <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {p.why.map((w, i) => (
              <Principle key={w} index={i} text={w} />
            ))}
          </div>
        </div>
      </section>

      {/* 02 — What you get */}
      <ChapterRail number="02" label="What you get" bg="obsidian" />
      <section className="bg-obsidian pb-28 md:pb-40 border-b border-gold/15">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <h2 className="font-display font-light text-5xl md:text-7xl leading-[1.02] tracking-[-0.015em] mb-14 md:mb-20">
              The <span className="gold italic">deliverables.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {p.deliverables.map((d, i) => (
              <DeliverableCard key={d.t} index={i} title={d.t} body={d.d} />
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Process */}
      <ChapterRail number="03" label="Process" bg="midnight" />
      <section className="bg-midnight pb-28 md:pb-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <h2 className="font-display font-light text-5xl md:text-7xl leading-[1.02] tracking-[-0.015em] mb-14 md:mb-20">
              How it <span className="gold italic">runs.</span>
            </h2>
          </Reveal>
          <ProcessTrack items={p.process} />
        </div>
      </section>

      {/* 04 — Proof */}
      <ChapterRail number="04" label="Proof" bg="obsidian" />
      <ProofSection stats={p.resultStat} quote={p.proofQuote} />

      {/* 05 — FAQ */}
      <ChapterRail number="05" label="FAQ" bg="midnight" />
      <section className="bg-midnight pb-28 md:pb-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <h2 className="font-display font-light text-5xl md:text-7xl leading-[1.02] tracking-[-0.015em] mb-14 md:mb-20">
              Common <span className="gold italic">questions.</span>
            </h2>
          </Reveal>
          <FaqList faqs={p.faqs} />
        </div>
      </section>

      {/* CLOSE — magnetic back-to-services */}
      <CloseSection number={p.number} />
    </PageTransition>
  );
}

/* ─────────────────────────────────────────────────────────────────
   HookSection — the knockout sentence right after the visual.
   Word-by-word reveal, italic accent on the closing fragment.
───────────────────────────────────────────────────────────────── */
function HookSection({ text }: { text: string }) {
  // Split on first period to highlight the closer in italic gold.
  const parts = text.split(/\.(?!\d)/).filter(Boolean);
  const head = parts[0]?.trim();
  const tail = parts.slice(1).join(".").trim();
  return (
    <section className="relative bg-midnight py-24 md:py-40 overflow-hidden">
      {/* Soft gold horizon */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[120%] h-[260px] bg-gold/10 blur-[120px] rounded-full"
      />
      <div className="mx-auto max-w-7xl px-6 md:px-10 relative">
        <div className="font-display font-light text-[14vw] md:text-[7vw] leading-[0.98] tracking-[-0.02em] text-ivory">
          <SplitText text={head ? `${head}.` : ""} stagger={0.05} />
          {tail && (
            <span className="block gold italic mt-2 md:mt-4">
              <SplitText text={`${tail}.`} stagger={0.05} delay={0.4} />
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ProblemSection — eyebrow "The problem" + a heavy italic statement.
   Gold rule draws under it on enter.
───────────────────────────────────────────────────────────────── */
function ProblemSection({ text }: { text: string }) {
  return (
    <section className="bg-obsidian border-y border-gold/15 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold/80 mb-8">
            ◆ The problem
          </p>
        </Reveal>
        <Reveal as="p" delay={0.1} className="font-display font-light italic text-3xl md:text-5xl leading-[1.18] text-ivory/85 tracking-[-0.01em]">
          {text}
        </Reveal>
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.7, 0, 0.3, 1], delay: 0.2 }}
          style={{ transformOrigin: "left" }}
          className="block mt-10 h-px max-w-[280px] bg-gradient-to-r from-gold via-gold/60 to-transparent"
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ProofSection — animated count-up stats + closer statement.
───────────────────────────────────────────────────────────────── */
function ProofSection({
  stats,
  quote,
}: {
  stats: { value: string; label: string }[];
  quote?: string;
}) {
  return (
    <section className="bg-obsidian pb-28 md:pb-40 border-b border-gold/15">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <h2 className="font-display font-light text-5xl md:text-7xl leading-[1.02] tracking-[-0.015em] mb-14 md:mb-20">
            The <span className="gold italic">numbers.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 md:gap-x-10">
          {stats.map((s, i) => (
            <StatBlock key={s.label} index={i} value={s.value} label={s.label} />
          ))}
        </div>

        {quote && (
          <Reveal delay={0.2}>
            <blockquote className="mt-24 md:mt-32 max-w-4xl font-display font-light italic text-2xl md:text-4xl leading-[1.25] text-ivory/85 tracking-[-0.01em]">
              <span aria-hidden className="gold mr-1">"</span>
              {quote}
              <span aria-hidden className="gold ml-1">"</span>
            </blockquote>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function StatBlock({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative"
    >
      <span
        aria-hidden
        className="absolute -top-6 left-0 h-px w-full bg-gradient-to-r from-gold/70 via-gold/30 to-transparent"
      />
      <div className="font-display font-light text-5xl md:text-7xl text-gold leading-none tracking-[-0.01em]">
        <CountValue value={value} />
      </div>
      <div className="mt-4 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-ivory/55">
        {label}
      </div>
    </motion.div>
  );
}

/* CountValue — parses leading numeric portion of a stat string and
   counts it up from 0 → target when in view. Falls back to a plain
   fade if the value isn't numeric (e.g. "Top 3", "Weekly"). */
function CountValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const match = value.match(/^([^\d-]*-?)(\d+\.?\d*)(.*)$/);
  const motionVal = useMotionValue(0);

  useEffect(() => {
    if (!inView || !match) return;
    const target = parseFloat(match[2]);
    const decimals = (match[2].split(".")[1] || "").length;
    const controls = animate(motionVal, target, {
      duration: 1.6,
      ease: [0.2, 0.8, 0.2, 1],
    });
    const unsub = motionVal.on("change", (v) => {
      if (!ref.current) return;
      ref.current.textContent = `${match[1]}${v.toFixed(decimals)}${match[3]}`;
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, motionVal, match]);

  if (!match) return <span ref={ref}>{value}</span>;
  return <span ref={ref}>{`${match[1]}0${match[3]}`}</span>;
}

/* ─────────────────────────────────────────────────────────────────
   CloseSection — magnetic back-to-services pill.
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
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex items-center gap-5 mb-10 md:mb-14"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold">
            {number}
          </span>
          <span
            aria-hidden
            className="block flex-1 max-w-[220px] h-px origin-left bg-gradient-to-r from-gold/70 via-gold/40 to-transparent"
            style={{ transform: "scaleX(0)", animation: "chapterDraw 1s cubic-bezier(0.7,0,0.3,1) forwards" }}
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

/* ─── Principle row ─────────────────────────────────────────────── */
function Principle({ index, text }: { index: number; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
      className="flex items-start gap-6 py-5 border-b border-gold/10 group"
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold/70 pt-1 w-6 shrink-0">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="text-ivory/75 leading-relaxed text-base md:text-lg transition-colors group-hover:text-ivory">
        {text}
      </p>
    </motion.div>
  );
}

/* ─── DeliverableCard — cursor-tracking spotlight + hover-lift ──── */
function DeliverableCard({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const onMove = (e: ReactMouseEvent<HTMLElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect || !ref.current) return;
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };
  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (index % 4) * 0.06, duration: 0.7 }}
      className="relative bg-midnight border border-gold/12 rounded-2xl p-7 md:p-10 overflow-hidden group transition-all duration-500 hover:border-gold/40 hover:-translate-y-1"
    >
      {/* Cursor spotlight (only visible on hover) */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx) var(--my), rgba(212,176,97,0.16), transparent 60%)",
        }}
      />
      {/* Top-edge fill rail */}
      <span
        aria-hidden
        className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-gold/70 via-gold to-gold/70 transition-all duration-700 group-hover:w-full"
      />
      <span
        aria-hidden
        className="absolute top-5 right-6 font-mono text-[10px] uppercase tracking-[0.28em] text-gold/40"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="relative font-display text-2xl md:text-3xl text-ivory mb-3 transition-transform duration-500 group-hover:translate-x-1">
        {title}
      </h3>
      <p className="relative text-ivory/65 leading-relaxed text-sm md:text-[15px]">
        {body}
      </p>
      <span
        aria-hidden
        className="absolute bottom-6 right-6 text-gold opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
      >
        →
      </span>
    </motion.article>
  );
}

/* ─── ProcessTrack ──────────────────────────────────────────────── */
function ProcessTrack({
  items,
}: {
  items: { n: string; t: string; d: string }[];
}) {
  return (
    <div className="relative">
      <div className="hidden md:block absolute left-0 right-0 top-14 h-px pointer-events-none">
        <span
          aria-hidden
          className="block w-full h-full bg-gradient-to-r from-transparent via-gold/35 to-transparent"
        />
        <motion.span
          aria-hidden
          className="absolute top-1/2 -translate-y-1/2 size-2 rounded-full bg-gold"
          style={{
            boxShadow:
              "0 0 12px rgba(212,176,97,0.85), 0 0 28px rgba(212,176,97,0.5)",
          }}
          animate={{ left: ["2%", "98%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 relative z-10">
        {items.map((s, i) => (
          <motion.article
            key={s.t}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.12, duration: 0.8 }}
            className="relative bg-midnight border border-gold/15 rounded-2xl p-7 md:p-10 transition-all duration-500 hover:border-gold/40 hover:-translate-y-1 group"
          >
            <span
              aria-hidden
              className="hidden md:block absolute -top-1 left-1/2 -translate-x-1/2 size-2 rounded-full bg-gold border-2 border-midnight"
            />
            <div className="flex items-baseline justify-between mb-8">
              <span className="font-display italic text-6xl md:text-7xl text-gold/85 leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/40">
                Step
              </span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-ivory mb-4 transition-transform duration-500 group-hover:translate-x-1">
              {s.t}
            </h3>
            <p className="text-ivory/65 leading-relaxed text-sm md:text-[15px]">
              {s.d}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

/* ─── FaqList ──────────────────────────────────────────────────── */
function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="border-t border-gold/15">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <motion.li
            key={f.q}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
            className="border-b border-gold/15"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-7 md:py-8 text-left group focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="flex items-baseline gap-5 md:gap-7 flex-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold/60 shrink-0 hidden md:inline">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl md:text-3xl text-ivory leading-tight transition-colors group-hover:text-gold">
                  {f.q}
                </span>
              </span>
              <motion.span
                aria-hidden
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                className="shrink-0 grid place-items-center size-9 rounded-full border border-gold/30 text-gold"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-7 md:pb-8 md:pl-[68px] pr-12 text-ivory/70 leading-relaxed md:text-lg max-w-3xl">
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        );
      })}
    </ul>
  );
}
