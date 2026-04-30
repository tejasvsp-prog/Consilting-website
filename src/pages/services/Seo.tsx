import ServiceDetail from "../../components/ServiceDetail";
import { SunVisual } from "../../components/ServiceVisuals";

export default function Seo() {
  return (
    <ServiceDetail
      Visual={SunVisual}
      number="01"
      slug="seo"
      name="Search Engine Optimization"
      tagline="Rank for the queries that bring buyers — not bystanders. Technical SEO, on-page work, programmatic pages, and authority links that compound month after month."
      intro="Most SEO is wasted because it's pointed at the wrong queries. We start by mapping commercial intent to the keywords your buyers actually use, then engineer everything — technical foundation, content, internal linking, link acquisition — to win those queries first. Slower at the start, then unstoppable."
      why={[
        "Organic is the cheapest channel you'll ever own — but only if you build it on the right foundation.",
        "Algorithm changes don't hurt you when your site is the canonical answer for your intent set.",
        "Programmatic SEO multiplies your surface area without multiplying your headcount.",
        "Links are still the kingmaker. We earn them with original research, tooling, and digital PR — not directories.",
      ]}
      deliverables={[
        {
          t: "Technical audit & fix",
          d: "Crawl, index, schema, internal linking, Core Web Vitals — a written punch list, then we ship the fixes.",
        },
        {
          t: "Keyword & intent map",
          d: "Every priority keyword tied to a buyer stage, a target page, and an expected conversion event. No spreadsheets you'll never open.",
        },
        {
          t: "Content engine",
          d: "Briefs, drafts, edits, publishing. Two to eight pieces a month, all aligned to the intent map and your brand voice.",
        },
        {
          t: "Programmatic pages",
          d: "Service × geography, product × use-case, comparison pages — built once, scaled to hundreds with quality control built in.",
        },
        {
          t: "Backlinks & digital PR",
          d: "Original data, tools, and stories that earn links from sites that actually move rankings.",
        },
        {
          t: "Reporting that ties to revenue",
          d: "Rank tracking is table stakes. We report organic-attributed leads, deals, and revenue — every month, plain English.",
        },
      ]}
      process={[
        {
          n: "Phase 1 · 30 days",
          t: "Audit & strategy",
          d: "Crawl, audit, intent map, content roadmap, link strategy. You leave with a written 90-day plan and the hit list of immediate fixes.",
        },
        {
          n: "Phase 2 · 60–90 days",
          t: "Foundation & first content",
          d: "Technical fixes go live. First wave of content and programmatic pages publish. Internal linking gets restructured.",
        },
        {
          n: "Phase 3 · ongoing",
          t: "Compound",
          d: "Ship, measure, double down on what's working. Monthly review tied to organic revenue, quarterly strategy reset.",
        },
      ]}
      faqs={[
        {
          q: "How long until we see traffic?",
          a: "First meaningful movement on long-tail terms: 60–90 days. Real commercial traffic from competitive head terms: 6–9 months. Anyone promising sooner is selling you something else.",
        },
        {
          q: "Do you do local SEO?",
          a: "Yes — Google Business Profile optimization, location pages, citation cleanup, review programs. It's often the highest-ROI starting point for service businesses.",
        },
        {
          q: "Can you work alongside our existing content team?",
          a: "Yes. We're often the strategy and technical layer over a writer or marketing manager you already have. Your team writes, we direct and ship.",
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
