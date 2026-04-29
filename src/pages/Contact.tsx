import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageTransition, { PageHeader } from "../components/PageTransition";
import { Reveal } from "../components/Reveal";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

const empty: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "Not sure yet",
  budget: "$2k – $5k / mo",
  message: "",
};

const services = [
  "SEO",
  "Website Development",
  "Website Maintenance",
  "Meta Ads",
  "Multiple",
  "Not sure yet",
];

const budgets = [
  "Under $2k / mo",
  "$2k – $5k / mo",
  "$5k – $15k / mo",
  "$15k+ / mo",
  "Project-based",
];

const TO = "amaradigital@gmail.com";

/**
 * Drop your real Calendly / Cal.com / SavvyCal embed URL into CALENDAR_URL.
 * Until then, the page renders an elegant fallback in the calendar slot.
 *
 *   - Calendly: https://calendly.com/your-handle/30min?embed_domain=...&embed_type=Inline
 *   - Cal.com:  https://cal.com/your-handle/30min?embed=true
 */
const CALENDAR_URL = ""; // ← paste your booking link here

const checklist = [
  "Where the funnel is leaking",
  "Whether your tracking is actually firing",
  "What we'd ship in month one",
  "A real cost range — not a vague proposal",
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `New lead — ${form.name || "(name)"} / ${form.company || "(company)"}`;
    const body = `Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Company: ${form.company}
Service: ${form.service}
Budget: ${form.budget}

What they're trying to do:
${form.message}`;
    window.location.href = `mailto:${TO}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <PageTransition>
      <PageHeader
        tag="Book a demo · Contact"
        title={
          <>
            Thirty minutes.{" "}
            <span className="gold italic">Zero pressure.</span>
          </>
        }
        subtitle="A working call, not a pitch. Pick a time on the calendar — or send a written brief below. We respond within one business day."
      />

      {/* Calendar block */}
      <section id="book" className="section bg-midnight">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-10">
          <aside className="col-span-12 md:col-span-4">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
                ◆ What you'll leave with
              </p>
            </Reveal>
            <ul className="space-y-5 mb-12">
              {checklist.map((c, i) => (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
                  className="flex items-start gap-4 text-ivory/80 leading-relaxed"
                >
                  <span className="mt-2.5 size-1.5 rounded-full bg-gold shrink-0" />
                  <span>{c}</span>
                </motion.li>
              ))}
            </ul>

            <Reveal delay={0.4}>
              <div className="border-t border-gold/15 pt-8 space-y-6">
                <ContactRow label="Direct email">
                  <a
                    href={`mailto:${TO}`}
                    className="text-ivory hover:text-gold transition-colors"
                  >
                    {TO}
                  </a>
                </ContactRow>
                <ContactRow label="Phone">
                  <a
                    href="tel:+15173295868"
                    className="text-ivory hover:text-gold transition-colors font-mono"
                  >
                    +1 (517) 329-5868
                  </a>
                </ContactRow>
                <ContactRow label="Studio">
                  <p className="text-ivory">Michigan, USA</p>
                  <p className="text-ivory/50 text-sm mt-1">Mon–Fri · 9–6 ET</p>
                </ContactRow>
              </div>
            </Reveal>
          </aside>

          <div className="col-span-12 md:col-span-8">
            <Reveal delay={0.2}>
              {CALENDAR_URL ? (
                <div className="card overflow-hidden">
                  <iframe
                    src={CALENDAR_URL}
                    title="Book a demo with Amara Digital"
                    className="w-full h-[760px] block bg-midnight"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="card p-10 md:p-14 min-h-[560px] flex flex-col items-center justify-center text-center">
                  <div className="font-display gold text-6xl md:text-7xl mb-6">
                    30:00
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-6">
                    Calendar embed coming soon
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl text-ivory leading-tight mb-6 max-w-md">
                    Until our scheduler is live, send us three windows.
                  </h3>
                  <p className="text-ivory/65 max-w-md leading-relaxed mb-10">
                    Email or call with three time options that work for you
                    and we'll confirm one within the hour. We're in Eastern
                    Time.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                      href={`mailto:${TO}?subject=Book%20a%20demo&body=Hi%20Amara%2C%0A%0AI%27d%20like%20to%20book%20a%2030-minute%20demo.%20Three%20windows%20that%20work%20for%20me%3A%0A%0A1.%20%0A2.%20%0A3.%20%0A%0AAbout%20my%20business%3A%0A`}
                      className="btn-gold"
                    >
                      Email three windows
                      <span aria-hidden>→</span>
                    </a>
                    <a href="tel:+15173295868" className="btn-ghost-gold">
                      Call instead
                    </a>
                  </div>
                </div>
              )}
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-8 text-xs text-ivory/40">
                Prefer to write? Use the brief form below — same inbox,
                same one-business-day reply.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Written brief form */}
      <section className="section bg-obsidian border-t border-gold/15">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-12 gap-10 mb-12">
            <div className="col-span-12 md:col-span-5">
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
                  ◆ Or, send a brief
                </p>
              </Reveal>
              <h2 className="font-display font-light text-4xl md:text-6xl leading-[1.02] tracking-[-0.01em]">
                Tell us where you{" "}
                <span className="gold italic">want to go.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <Reveal delay={0.2}>
                <p className="text-ivory/65 leading-relaxed">
                  A few sentences is enough. We'll come back with a quick
                  read on whether we're the right fit and, if so, what month
                  one looks like.
                </p>
              </Reveal>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!sent ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                onSubmit={onSubmit}
                className="card p-8 md:p-12 space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                  <Field label="Your name" required>
                    <input
                      required
                      className="field"
                      placeholder="First and last"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                    />
                  </Field>
                  <Field label="Email" required>
                    <input
                      required
                      type="email"
                      className="field"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                    />
                  </Field>
                  <Field label="Phone">
                    <input
                      type="tel"
                      className="field"
                      placeholder="(555) 555-5555"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                    />
                  </Field>
                  <Field label="Company">
                    <input
                      className="field"
                      placeholder="Company / brand"
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                    />
                  </Field>
                  <Field label="Service">
                    <select
                      className="field"
                      value={form.service}
                      onChange={(e) => update("service", e.target.value)}
                    >
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-midnight">
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Monthly budget">
                    <select
                      className="field"
                      value={form.budget}
                      onChange={(e) => update("budget", e.target.value)}
                    >
                      {budgets.map((b) => (
                        <option key={b} value={b} className="bg-midnight">
                          {b}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="What you're trying to do" required>
                  <textarea
                    required
                    rows={5}
                    className="field resize-none"
                    placeholder="A few lines on the goal, the timeline, and where you're stuck."
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                  />
                </Field>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-2">
                  <p className="text-xs text-ivory/40 max-w-sm">
                    Your details stay with us. No newsletters, no third
                    parties — ever.
                  </p>
                  <button type="submit" className="btn-gold">
                    Send the brief
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="card p-10 md:p-14"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-6">
                  ◆ Sent
                </p>
                <h3 className="font-display text-4xl md:text-6xl leading-[1.02]">
                  Thank you, {form.name.split(" ")[0] || "friend"}.
                </h3>
                <p className="mt-6 text-ivory/70 max-w-xl leading-relaxed">
                  Your email client should be open with the brief ready to
                  send. We'll reply within one business day with next steps.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href={`mailto:${TO}`} className="btn-gold">
                    Open mail again
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setForm(empty);
                    }}
                    className="btn-ghost-gold"
                  >
                    Send another
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  );
}

function ContactRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold mb-2">
        {label}
      </p>
      {children}
    </div>
  );
}

function Field({
  label,
  children,
  required,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="field-label">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
