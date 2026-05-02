import ServiceDetail from "../../components/ServiceDetail";
import { SunVisual } from "../../components/ServiceVisuals";

export default function Seo() {
  return (
    <ServiceDetail
      Visual={SunVisual}
      number="01"
      slug="seo"
      name="Search Engine Optimization"
      shortName="SEO"
      tagline="Own the queries that make money. Engineer the rankings that survive every algorithm update."
      intro="SEO is how your website shows up at the top of Google when someone searches for what you do. Done right, it brings in new customers every day for years — without paying for a single ad. Done wrong, it's a recurring bill with nothing to show for it. We do it right: figure out exactly what your buyers are typing, build pages that genuinely answer them, and earn the trust signals that get you ranked first."
      why={[
        "Organic is the cheapest channel you'll ever own. We treat it that way.",
        "Algorithm updates don't move us when we're already the canonical answer.",
        "Programmatic pages multiply your surface area without multiplying your team.",
        "Links still rule. We earn them with research and tools — never directories.",
      ]}
      deliverables={[
        {
          t: "Technical foundation",
          d: "A crawled, indexed, properly-schema'd site with Core Web Vitals tuned and internal linking restructured.",
          approach:
            "We approach this by crawling the site end to end, then shipping a prioritized fix list — schema, internal links, Core Web Vitals — sorted by traffic impact.",
        },
        {
          t: "Intent map",
          d: "Every priority keyword tied to a buyer stage, a target page, and a measurable conversion event.",
          approach:
            "We approach this by mining your CRM and sales calls for the exact phrases buyers use, then mapping every keyword to a target page and a conversion event.",
        },
        {
          t: "Content engine",
          d: "Two to eight new pieces every month — briefed, drafted, edited, and published on a fixed cadence.",
          approach:
            "We approach this by writing the briefs, drafting the pieces, and shipping on a fixed cadence — edited against your brand voice, published without you chasing us.",
        },
        {
          t: "Programmatic at scale",
          d: "Service × geography, product × use-case, and comparison pages built once and scaled to hundreds.",
          approach:
            "We approach this by building one high-converting template and feeding it from a structured dataset, so an hour of work scales to hundreds of indexed pages.",
        },
        {
          t: "Earned links",
          d: "Backlinks from sites that actually move rankings — earned with research, tools, and digital PR.",
          approach:
            "We approach this by publishing original research, free tools, and data stories worth linking to, then pitching them to journalists already covering your space.",
        },
        {
          t: "Revenue reporting",
          d: "A monthly report tying organic sessions to leads, deals, and dollars — not just rankings.",
          approach:
            "We approach this by tying every organic session back to your CRM through server-side tracking, so you see exactly which pages produce revenue.",
        },
      ]}
      process={[
        {
          n: "01",
          t: "Audit & strategy",
          d: "Crawl, audit, intent map, content roadmap, link strategy. You leave with a 90-day plan.",
        },
        {
          n: "02",
          t: "Foundation",
          d: "Technical fixes go live. First wave of content and programmatic pages publish.",
        },
        {
          n: "03",
          t: "Compound",
          d: "Ship, measure, double down. Monthly review tied to organic revenue. Quarterly reset.",
        },
      ]}
      faqs={[
        {
          q: "How long until we see traffic?",
          a: "Long-tail movement: 60–90 days. Real commercial traffic from competitive head terms: 6–9 months. Anyone promising sooner is selling you something else.",
        },
        {
          q: "Do you do local SEO?",
          a: "Yes — Google Business Profile, location pages, citations, review programs. Often the highest-ROI starting point for service businesses.",
        },
        {
          q: "Can you work alongside our content team?",
          a: "Yes. We're often the strategy and technical layer over a writer or marketer you already have.",
        },
        {
          q: "What's the minimum engagement?",
          a: "Three months. SEO doesn't reward shorter timelines and we don't pretend it does.",
        },
      ]}
      resultStat={[
        { value: "+312%", label: "Lead growth, 90 days" },
        { value: "Top 3", label: "Avg. rank, priority terms" },
        { value: "<1.8s", label: "Median LCP" },
        { value: "92%", label: "Client retention" },
      ]}
    />
  );
}
