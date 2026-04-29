import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  service: "SEO",
  budget: "$2k – $5k / mo",
  message: "",
};

const services = [
  "SEO",
  "Website Development",
  "Website Maintenance",
  "Meta Ads",
  "Multiple / not sure",
];

const budgets = [
  "Under $2k / mo",
  "$2k – $5k / mo",
  "$5k – $15k / mo",
  "$15k+ / mo",
  "Project-based",
];

const TO = "amaradigital@gmail.com";

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
        tag="Contact"
        title={
          <>
            Let's talk{" "}
            <span className="gold italic">numbers.</span>
          </>
        }
        subtitle="Tell us where you are, where you want to be, and a rough timeline. We'll respond within one business day with a clear read on whether we're the right fit — and if we are, what month one looks like."
      />

      <section className="section bg-midnight">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <div className="space-y-10">
                <ContactRow label="Direct">
                  <a
                    href={`mailto:${TO}`}
                    className="font-display text-2xl md:text-3xl text-ivory hover:text-gold transition-colors"
                  >
                    {TO}
                  </a>
                </ContactRow>
                <ContactRow label="Phone">
                  <a
                    href="tel:+15173295868"
                    className="font-display text-2xl md:text-3xl text-ivory hover:text-gold transition-colors"
                  >
                    +1 (517) 329-5868
                  </a>
                  <p className="text-ivory/50 text-sm mt-2">
                    Mon–Fri · 9–6 ET
                  </p>
                </ContactRow>
                <ContactRow label="Studio">
                  <p className="font-display text-2xl md:text-3xl text-ivory">
                    Michigan, USA
                  </p>
                  <p className="text-ivory/55 text-sm mt-2">
                    Working with founders coast to coast.
                  </p>
                </ContactRow>
                <ContactRow label="Prefer a calendar?">
                  <Link
                    to="/book"
                    className="inline-flex items-center gap-3 mt-2 text-gold border-b border-gold/40 pb-1 hover:gap-4 transition-all"
                  >
                    Book a 30-minute demo
                    <span aria-hidden>→</span>
                  </Link>
                </ContactRow>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-7">
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
