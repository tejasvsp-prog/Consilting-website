import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition, { PageHeader } from "../components/PageTransition";
import { Reveal } from "../components/Reveal";

/**
 * Drop your real Calendly / Cal.com / SavvyCal embed URL into CALENDAR_URL.
 * Until then, the page renders an elegant placeholder with the same layout
 * the calendar will eventually live in.
 *
 *   - Calendly: https://calendly.com/your-handle/30min
 *   - Cal.com:  https://cal.com/your-handle/30min?embed=true
 */
const CALENDAR_URL = ""; // ← paste your booking link here

const checklist = [
  "Where the funnel is leaking",
  "Whether your tracking is actually firing",
  "What we'd ship in month one",
  "A real cost range — not a vague proposal",
];

export default function Book() {
  return (
    <PageTransition>
      <PageHeader
        tag="Book a demo"
        title={
          <>
            Thirty minutes.{" "}
            <span className="gold italic">Zero pressure.</span>
          </>
        }
        subtitle="A working call, not a pitch. Bring your numbers, your goals, and your most urgent question. We'll bring a punch list of what we'd do in your seat."
      />

      <section className="section bg-midnight">
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
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold mb-2">
                    Prefer email?
                  </p>
                  <a
                    href="mailto:amaradigital@gmail.com"
                    className="text-ivory hover:text-gold transition-colors"
                  >
                    amaradigital@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold mb-2">
                    Prefer the phone?
                  </p>
                  <a
                    href="tel:+15173295868"
                    className="text-ivory hover:text-gold transition-colors font-mono"
                  >
                    +1 (517) 329-5868
                  </a>
                </div>
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
                <div className="card p-10 md:p-14 min-h-[600px] flex flex-col items-center justify-center text-center">
                  <div className="font-display gold text-6xl md:text-7xl mb-6">
                    30:00
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold mb-6">
                    Calendar embed coming soon
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl text-ivory leading-tight mb-6 max-w-md">
                    Until our scheduler is live, book directly by email or
                    phone.
                  </h3>
                  <p className="text-ivory/65 max-w-md leading-relaxed mb-10">
                    Send three time windows that work for you and we'll
                    confirm one within the hour. We're in Eastern Time.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                      href="mailto:amaradigital@gmail.com?subject=Book%20a%20demo&body=Hi%20Amara%2C%0A%0AI%27d%20like%20to%20book%20a%2030-minute%20demo.%20Three%20windows%20that%20work%20for%20me%3A%0A%0A1.%20%0A2.%20%0A3.%20%0A%0AAbout%20my%20business%3A%0A"
                      className="btn-gold"
                    >
                      Email three time windows
                      <span aria-hidden>→</span>
                    </a>
                    <a
                      href="tel:+15173295868"
                      className="btn-ghost-gold"
                    >
                      Call instead
                    </a>
                  </div>
                </div>
              )}
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-8 text-xs text-ivory/40 text-center md:text-right">
                Not ready for a call?{" "}
                <Link to="/contact" className="text-gold hover:underline">
                  Send a written brief instead →
                </Link>
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
