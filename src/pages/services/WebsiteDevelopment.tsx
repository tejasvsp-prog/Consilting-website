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
          d: "We map your funnel before we map a page. Every section ties to a moment and a goal.",
        },
        {
          t: "Conversion-first design",
          d: "Custom design in Figma. Every component judged on speed, clarity, friction, and trust.",
        },
        {
          t: "Hand-coded build",
          d: "React + Next.js + Tailwind. No drag-and-drop bloat. Sub-2-second LCP shipped to prod.",
        },
        {
          t: "Headless CMS",
          d: "Sanity, Contentful, or Payload — picked for your team's literacy. They ship without us.",
        },
        {
          t: "Integrations",
          d: "CRM, booking, payments, email, analytics, server-side tracking. Wired up properly the first time.",
        },
        {
          t: "Launch & handoff",
          d: "QA, accessibility checks, redirects, sitemaps, training. We don't disappear at launch.",
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
