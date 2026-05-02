import ServiceDetail from "../../components/ServiceDetail";
import { SunVisual } from "../../components/ServiceVisuals";

export default function Seo() {
  return (
    <ServiceDetail
      Visual={SunVisual}
      number="01"
      slug="seo"
      name="Search Engine Optimization"
      tagline="Own the queries that make money. Engineer the rankings that survive every algorithm update."
      hook="We don't chase traffic. We capture buyers."
      problem="Most SEO is theater. Vanity keywords, disposable blogs, backlinks from sites no one reads. You pay every month. Your pipeline doesn't move."
      intro="We start with the queries your buyers actually type, then engineer everything — the stack, the content, the links — to own them. Slower at the start. Unstoppable after."
      why={[
        "Organic is the cheapest channel you'll ever own. We treat it that way.",
        "Algorithm updates don't move us when we're already the canonical answer.",
        "Programmatic pages multiply your surface area without multiplying your team.",
        "Links still rule. We earn them with research and tools — never directories.",
      ]}
      deliverables={[
        {
          t: "Technical foundation",
          d: "Crawl, index, schema, internal links, Core Web Vitals — audited, then shipped.",
        },
        {
          t: "Intent map",
          d: "Every priority keyword tied to a buyer stage, a target page, and a conversion event.",
        },
        {
          t: "Content engine",
          d: "Briefs, drafts, edits, publishing. Two to eight pieces a month, all on-brief.",
        },
        {
          t: "Programmatic at scale",
          d: "Service × geography, product × use-case, comparison pages — built once, scaled to hundreds.",
        },
        {
          t: "Earned links",
          d: "Original data, tools, and stories that pull links from sites that actually move rankings.",
        },
        {
          t: "Revenue reporting",
          d: "Rank tracking is table stakes. We report leads, deals, and revenue — every month.",
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
      proofQuote="Every page we ship is engineered to rank, convert, and outlive the next algorithm update."
    />
  );
}
