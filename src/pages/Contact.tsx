import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SplitText } from "../components/Reveal";

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  industry: string;
  meetingDate: string;
  meetingTime: string;
  timezone: string;
  budget: string;
  message: string;
};

const empty: FormState = {
  name: "",
  email: "",
  company: "",
  role: "",
  industry: "",
  meetingDate: "",
  meetingTime: "10:00",
  timezone: "Asia/Kolkata (IST)",
  budget: "Not sure yet",
  message: "",
};

const budgets = [
  "Not sure yet",
  "Diagnostic (≤ ₹15L / $20k)",
  "Project (₹15L – ₹75L / $20k – $100k)",
  "Programme (₹75L+ / $100k+)",
  "Retainer / ongoing",
];

const today = new Date().toISOString().slice(0, 10);

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In a real deployment, this would POST to a backend / Formspree / Resend.
    // For now we acknowledge locally and offer a mailto fallback.
    setSent(true);
  }

  const mailto = `mailto:hello@consilting.in?subject=${encodeURIComponent(
    `Meeting request — ${form.name || "(name)"} / ${form.company || "(company)"}`
  )}&body=${encodeURIComponent(
    `Name: ${form.name}
Email: ${form.email}
Company: ${form.company}
Role: ${form.role}
Industry: ${form.industry}
Preferred date: ${form.meetingDate}
Preferred time: ${form.meetingTime} ${form.timezone}
Budget posture: ${form.budget}

What you're trying to do:
${form.message}`
  )}`;

  return (
    <div className="bg-ivory text-ink">
      <section className="pt-40 md:pt-52 pb-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-ink/60 mb-8">
              ◇ Schedule a meeting · contact for pricing
            </p>
          </Reveal>
          <h1 className="font-display text-5xl md:text-8xl leading-[0.98]">
            <SplitText text="Tell us what" />
            <br />
            <span className="italic text-rust">
              <SplitText text="you're trying to do." delay={0.2} />
            </span>
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-2xl text-lg text-ink/75 leading-relaxed">
              Pick a date, leave us a few notes. A senior advisor will reply
              within one business day to confirm the meeting and follow up
              with a tailored proposal.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-10">
          <aside className="col-span-12 md:col-span-4 space-y-10">
            <Reveal>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-ink/50 mb-2">
                  Direct line
                </p>
                <a
                  href="mailto:hello@consilting.in"
                  className="font-display text-2xl md:text-3xl text-ink hover:text-rust transition-colors"
                >
                  hello@consilting.in
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-ink/50 mb-2">
                  Hours
                </p>
                <p className="text-ink/80 leading-relaxed">
                  Mon – Fri, 09:00 – 19:00 IST.
                  <br />
                  We schedule across time zones.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-ink/50 mb-2">
                  How we'll respond
                </p>
                <ol className="space-y-3 text-ink/80">
                  <li className="flex gap-3">
                    <span className="font-mono text-rust">01</span>
                    <span>A note within one business day, confirming the meeting.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-rust">02</span>
                    <span>A 45-minute call — no deck, just questions.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-rust">03</span>
                    <span>A one-page proposal, tailored to the question.</span>
                  </li>
                </ol>
              </div>
            </Reveal>
          </aside>

          <div className="col-span-12 md:col-span-8 relative">
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  onSubmit={onSubmit}
                  className="bg-cream/40 border border-ink/10 rounded-2xl p-8 md:p-12 space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                    <Field label="Your name" required>
                      <input
                        required
                        className="field"
                        placeholder="e.g. Aditi Sharma"
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
                    <Field label="Company">
                      <input
                        className="field"
                        placeholder="Company name"
                        value={form.company}
                        onChange={(e) => update("company", e.target.value)}
                      />
                    </Field>
                    <Field label="Your role">
                      <input
                        className="field"
                        placeholder="Founder, CEO, COO…"
                        value={form.role}
                        onChange={(e) => update("role", e.target.value)}
                      />
                    </Field>
                    <Field label="Industry">
                      <input
                        className="field"
                        placeholder="e.g. Manufacturing, SaaS, Hospitality"
                        value={form.industry}
                        onChange={(e) => update("industry", e.target.value)}
                      />
                    </Field>
                    <Field label="Budget posture">
                      <select
                        className="field"
                        value={form.budget}
                        onChange={(e) => update("budget", e.target.value)}
                      >
                        {budgets.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <div className="border-t border-ink/15 pt-8">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-ink/60 mb-6">
                      ◇ Pick a meeting time
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
                      <Field label="Preferred date" required>
                        <input
                          required
                          type="date"
                          min={today}
                          className="field"
                          value={form.meetingDate}
                          onChange={(e) => update("meetingDate", e.target.value)}
                        />
                      </Field>
                      <Field label="Preferred time">
                        <input
                          type="time"
                          className="field"
                          value={form.meetingTime}
                          onChange={(e) => update("meetingTime", e.target.value)}
                        />
                      </Field>
                      <Field label="Time zone">
                        <select
                          className="field"
                          value={form.timezone}
                          onChange={(e) => update("timezone", e.target.value)}
                        >
                          <option>Asia/Kolkata (IST)</option>
                          <option>Asia/Dubai (GST)</option>
                          <option>Asia/Singapore (SGT)</option>
                          <option>Europe/London (GMT/BST)</option>
                          <option>America/New_York (ET)</option>
                          <option>America/Los_Angeles (PT)</option>
                        </select>
                      </Field>
                    </div>
                  </div>

                  <div>
                    <Field label="What you're trying to do" required>
                      <textarea
                        required
                        rows={5}
                        className="field resize-none"
                        placeholder="A few lines on the question, the company, and the timeline. Nothing fancy."
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                      />
                    </Field>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-4">
                    <p className="text-xs text-ink/50 max-w-sm">
                      Your details stay with us. No newsletters, no third
                      parties. Pricing is shared after the first call, tailored
                      to the engagement.
                    </p>
                    <button type="submit" className="btn-primary">
                      Schedule the meeting
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
                  className="bg-ink text-ivory rounded-2xl p-10 md:p-14"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.32em] text-marigold mb-6">
                    ◇ Received
                  </p>
                  <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
                    Thank you, {form.name.split(" ")[0] || "friend"}.
                  </h2>
                  <p className="mt-6 text-ivory/80 max-w-xl leading-relaxed">
                    We've noted your request for{" "}
                    <span className="text-marigold">
                      {form.meetingDate || "a date soon"}
                    </span>{" "}
                    at{" "}
                    <span className="text-marigold">
                      {form.meetingTime} {form.timezone}
                    </span>
                    . A senior advisor will reply within one business day to
                    confirm and share a calendar link.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a href={mailto} className="btn-primary bg-rust hover:bg-marigold hover:text-ink">
                      Or send the same as email
                      <span aria-hidden>→</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSent(false);
                        setForm(empty);
                      }}
                      className="btn-ghost border-ivory/40 text-ivory hover:border-marigold"
                    >
                      Submit another
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
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
        {required && <span className="text-rust ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
