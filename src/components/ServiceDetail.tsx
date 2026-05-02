import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageTransition, { PageHeader } from "./PageTransition";
import { Reveal } from "./Reveal";
import { services } from "../sections/Services";

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
  Visual?: () => JSX.Element;
};

export default function ServiceDetail(p: ServiceDetailProps) {
  const others = services.filter((s) => s.to !== `/services/${p.slug}`);

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

      {/* 01 — What this is */}
      <ChapterRail number="01" label="What this is" bg="midnight" />
      <section className="bg-midnight pb-28 md:pb-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <h2 className="font-display font-light text-5xl md:text-7xl leading-[1.02] tracking-[-0.015em] mb-12 md:mb-16">
              In <span className="gold italic">short.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <Reveal as="p" className="col-span-12 md:col-span-8 font-display font-light text-2xl md:text-3xl leading-[1.4] text-ivory/85 tracking-[-0.005em]">
              {p.intro}
            </Reveal>
          </div>

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

      {/* 04 — FAQ */}
      <ChapterRail number="04" label="FAQ" bg="obsidian" />
      <section className="bg-obsidian pb-28 md:pb-40 border-b border-gold/15">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <h2 className="font-display font-light text-5xl md:text-7xl leading-[1.02] tracking-[-0.015em] mb-14 md:mb-20">
              Common <span className="gold italic">questions.</span>
            </h2>
          </Reveal>
          <FaqList faqs={p.faqs} />
        </div>
      </section>

      {/* 05 — Continue */}
      <ChapterRail number="05" label="Continue" bg="midnight" />
      <section className="bg-midnight pb-28 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <h2 className="font-display font-light text-5xl md:text-7xl leading-[1.02] tracking-[-0.015em] mb-14 md:mb-20">
              Other <span className="gold italic">services.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {others.map((s) => (
              <Link
                key={s.t}
                to={s.to}
                className="card relative p-8 md:p-10 group focus:outline-none focus:ring-2 focus:ring-gold/40 overflow-hidden"
              >
                <span
                  aria-hidden
                  className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-700 group-hover:w-full"
                />
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold mb-6">
                  {s.n}
                </p>
                <h3 className="font-display text-3xl md:text-4xl text-ivory leading-tight mb-4 transition-transform duration-500 group-hover:translate-x-1">
                  {s.t}
                </h3>
                <p className="text-ivory/60 text-sm leading-relaxed">
                  {s.short}
                </p>
                <span className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] font-medium text-gold">
                  Read more
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>

          {/* Soft contact link — non-pushy, replaces the big CTA */}
          <div className="mt-20 md:mt-24 pt-8 border-t border-gold/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ivory/40">
              Service · {p.number} of 04
            </span>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-ivory/70 hover:text-gold transition-colors"
            >
              <span className="size-1.5 rounded-full bg-gold animate-[ledFlicker_2.2s_ease-in-out_infinite]" />
              Have questions? Talk to us
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

/* ─── ChapterRail ─────────────────────────────────────────────────
   Numbered section divider with a gold rule that draws on enter
   and a small label. Replaces the old "◆ Section" pill. */
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
      <style>{`
        @keyframes chapterDraw {
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}

/* ─── Principle row — index + line + text ───────────────────────── */
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

/* ─── DeliverableCard — hover-lift, gold top-rail, arrow appear ─── */
function DeliverableCard({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (index % 4) * 0.06, duration: 0.7 }}
      className="relative bg-midnight border border-gold/12 rounded-2xl p-7 md:p-10 overflow-hidden group transition-all duration-500 hover:border-gold/40 hover:-translate-y-1"
    >
      {/* Top-edge fill rail */}
      <span
        aria-hidden
        className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-gold/70 via-gold to-gold/70 transition-all duration-700 group-hover:w-full"
      />
      {/* Index */}
      <span
        aria-hidden
        className="absolute top-5 right-6 font-mono text-[10px] uppercase tracking-[0.28em] text-gold/40"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      {/* Soft gold radial on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-gold/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <h3 className="font-display text-2xl md:text-3xl text-ivory mb-3 transition-transform duration-500 group-hover:translate-x-1">
        {title}
      </h3>
      <p className="text-ivory/65 leading-relaxed text-sm md:text-[15px]">
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

/* ─── ProcessTrack — 3 cards joined by a horizontal connector ───── */
function ProcessTrack({
  items,
}: {
  items: { n: string; t: string; d: string }[];
}) {
  return (
    <div className="relative">
      {/* Horizontal connector — desktop only, sits behind the cards */}
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
            {/* Connector dock — sits on the connector line */}
            <span
              aria-hidden
              className="hidden md:block absolute -top-1 left-1/2 -translate-x-1/2 size-2 rounded-full bg-gold border-2 border-midnight"
            />
            {/* Big numeral */}
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

/* ─── FaqList — accordion with smooth height + plus rotation ────── */
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
