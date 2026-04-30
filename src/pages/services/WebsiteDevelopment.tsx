import ServiceDetail from "../../components/ServiceDetail";
import { RobotVisual } from "../../components/ServiceVisuals";

export default function WebsiteDevelopment() {
  return (
    <ServiceDetail
      Visual={RobotVisual}
      number="02"
      slug="website-development"
      name="Website Development"
      tagline="Hand-built sites that load fast, convert hard, and your team can actually run. React and Next.js front-ends with a CMS that doesn't fight you."
      intro="A website isn't a brochure. It's the cheapest, hardest-working salesperson you'll ever hire — but only if it's built right. We design and build sites that earn the click, hold the visitor, and move them to convert. Sub-2-second loads, conversion-tested patterns, and a CMS your team can update without raising a ticket."
      why={[
        "Every additional second of load time costs you about 7% of conversions. We refuse to ship slow.",
        "Most agency sites are visually clever and commercially dead. We test, not guess.",
        "An admin your team can't run is a tax forever. We pick CMS stacks based on who'll use them, not what's trending.",
        "We build with React, Next.js, and Tailwind — modern, fast, and not locked into any single host.",
      ]}
      deliverables={[
        {
          t: "Discovery & wireframes",
          d: "We map your funnel before we map a page. Every section ties to a specific user moment and a specific conversion goal.",
        },
        {
          t: "Conversion-first design",
          d: "Custom design in Figma. Every component reviewed against speed, clarity, friction, and trust — in that order.",
        },
        {
          t: "Hand-coded build",
          d: "React + Next.js + Tailwind. No drag-and-drop bloat. Sub-2-second LCP shipped to production, every time.",
        },
        {
          t: "Headless CMS",
          d: "Sanity, Contentful, or Payload — picked for your team's literacy. Your marketers can ship without us.",
        },
        {
          t: "Integrations",
          d: "CRM, booking, payments, email, analytics, server-side tracking. Wired up properly the first time.",
        },
        {
          t: "Launch & handoff",
          d: "QA, accessibility checks, redirects, sitemaps, training video. We don't disappear at launch.",
        },
      ]}
      process={[
        {
          n: "Phase 1 · 1–2 weeks",
          t: "Discovery & strategy",
          d: "Funnel review, content inventory, sitemap, user flows. You sign off before we open Figma.",
        },
        {
          n: "Phase 2 · 3–5 weeks",
          t: "Design & build",
          d: "Design in Figma, build in code, weekly demo calls. You see real progress every Friday.",
        },
        {
          n: "Phase 3 · 1 week",
          t: "Launch & support",
          d: "QA, redirects, training, launch. 30 days of post-launch support included on every project.",
        },
      ]}
      faqs={[
        {
          q: "How long does a project take?",
          a: "A typical marketing site is 6–8 weeks end to end. Larger builds with custom integrations run 10–14 weeks.",
        },
        {
          q: "Do you work with WordPress?",
          a: "We can — but rarely recommend it for new builds. We'll happily maintain a healthy WordPress site you already have. (See: Website Maintenance.)",
        },
        {
          q: "What's it cost?",
          a: "Marketing sites typically run $12k–$45k. We'll scope a fixed price after a 30-minute discovery call so you have a real number, not a range.",
        },
        {
          q: "Will I be locked into your hosting?",
          a: "No. We deploy to Vercel, Netlify, or your own infrastructure. The code is yours. The CMS is yours. The keys are yours.",
        },
      ]}
      resultStat={[
        { value: "<1.8s", label: "Median LCP shipped" },
        { value: "6–8 wk", label: "Typical timeline" },
        { value: "100/100", label: "Lighthouse SEO" },
        { value: "30 days", label: "Post-launch support" },
      ]}
    />
  );
}
