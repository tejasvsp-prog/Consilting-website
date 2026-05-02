import ServiceDetail from "../../components/ServiceDetail";
import { RobotVisual } from "../../components/ServiceVisuals";

export default function WebsiteDevelopment() {
  return (
    <ServiceDetail
      Visual={RobotVisual}
      number="02"
      slug="website-development"
      name="Website Development"
      shortName="web development"
      tagline="Hand-built sites that load in a second and convert in three."
      intro="Web development is the actual building of your website — the part your customers see, click, and judge you by. We design it, code it from scratch, and make it fast enough that nobody bounces while it loads. You get a site your team can update without raising a ticket, and the whole thing — the code, the CMS, the keys — belongs to you."
      why={[
        "Every extra second of load time costs 7% of conversions. We refuse to ship slow.",
        "Visually clever and commercially dead is a real category. We test, not guess.",
        "An admin your team can't run is a tax forever. We pick stacks based on who'll use them.",
        "Modern stack, no host lock-in. The code, the CMS, the keys — yours.",
      ]}
      deliverables={[
        {
          t: "Discovery & wireframes",
          d: "A funnel-mapped sitemap and wireframes, signed off before a single pixel of design happens.",
          approach:
            "We approach this by mapping your funnel before opening Figma, so every section ties to a specific user moment and a measurable goal.",
        },
        {
          t: "Conversion-first design",
          d: "Custom design in Figma — every component judged on speed, clarity, friction, and trust.",
          approach:
            "We approach this by judging every component on speed, clarity, friction, and trust — in that order — before it gets a coat of paint.",
        },
        {
          t: "Hand-coded build",
          d: "A production site in React, Next.js, and Tailwind, with a sub-2-second LCP shipped to prod.",
          approach:
            "We approach this by writing every line in React, Next.js, and Tailwind — no drag-and-drop bloat, no plugin tax, no shortcuts on performance.",
        },
        {
          t: "Headless CMS",
          d: "A Sanity, Contentful, or Payload setup your marketers can run without raising a ticket.",
          approach:
            "We approach this by picking the CMS for your team's literacy, then building editor schemas your marketers can actually use day one.",
        },
        {
          t: "Integrations",
          d: "CRM, booking, payments, email, analytics, and server-side tracking — wired up properly the first time.",
          approach:
            "We approach this by wiring CRM, payments, email, and server-side tracking properly the first time — not as a launch-week scramble.",
        },
        {
          t: "Launch & handoff",
          d: "QA, accessibility, redirects, sitemaps, training videos, and 30 days of post-launch support.",
          approach:
            "We approach this by handling QA, accessibility, redirects, sitemaps, and training — then staying close for thirty days after launch.",
        },
      ]}
      process={[
        {
          n: "01",
          t: "Discovery & strategy",
          d: "Funnel review, content inventory, sitemap, user flows. You sign off before Figma opens.",
        },
        {
          n: "02",
          t: "Design & build",
          d: "Design in Figma, build in code, weekly demo calls. You see real progress every Friday.",
        },
        {
          n: "03",
          t: "Launch & support",
          d: "QA, redirects, training, launch. Thirty days of post-launch support included.",
        },
      ]}
      faqs={[
        {
          q: "How long does a project take?",
          a: "A typical marketing site is 6–8 weeks end to end. Larger builds with custom integrations run 10–14 weeks.",
        },
        {
          q: "Do you work with WordPress?",
          a: "We can — but rarely recommend it for new builds. We'll happily maintain a healthy WordPress site you already have.",
        },
        {
          q: "What's it cost?",
          a: "Marketing sites typically run $12k–$45k. We scope a fixed price after a 30-minute call so you have a real number, not a range.",
        },
        {
          q: "Will I be locked into your hosting?",
          a: "No. We deploy to Vercel, Netlify, or your own infrastructure. The code is yours. The CMS is yours. The keys are yours.",
        },
      ]}
      resultStat={[
        { value: "<1.8s", label: "Median LCP shipped" },
        { value: "6–8 wk", label: "Typical timeline" },
        { value: "100", label: "Lighthouse SEO" },
        { value: "30", label: "Days post-launch support" },
      ]}
    />
  );
}
