import ServiceDetail from "../../components/ServiceDetail";
import { PulseVisual } from "../../components/ServiceVisuals";

export default function WebsiteMaintenance() {
  return (
    <ServiceDetail
      Visual={PulseVisual}
      number="03"
      slug="website-maintenance"
      name="Website Maintenance"
      tagline="A managed retainer for the site you already have. Updates, security, monitoring, performance, and same-week content edits — handled."
      intro="Your website is a living asset. Plugins drift out of date. SSL certificates expire. Performance degrades. Pages 404. Content gets stale. Most businesses don't notice until it costs them — a Google ranking, a sale, a security breach. We're the team you call so you never have to."
      why={[
        "A site that goes down at 9pm Friday costs more than a year of maintenance. Insurance matters.",
        "WordPress plugins, SSL certificates, and CMS versions need attention monthly. Nobody on your team has time.",
        "Performance silently degrades. Without monitoring, you only learn when rankings drop or conversions fall.",
        "Content edits that take you a week to schedule we can ship in 24 hours. That's leverage.",
      ]}
      deliverables={[
        {
          t: "Monthly updates & backups",
          d: "Plugins, themes, CMS, and frameworks updated and tested. Daily backups stored offsite for 90 days.",
        },
        {
          t: "Uptime monitoring",
          d: "60-second checks across 14 global regions. We're alerted before you are, and we fix it before you wake up.",
        },
        {
          t: "Performance tracking",
          d: "Core Web Vitals, real-user metrics, monthly performance review. Speed regressions get caught early.",
        },
        {
          t: "Security & SSL",
          d: "Vulnerability scans, malware monitoring, SSL renewals, firewall tuning. We patch CVEs within 48 hours of disclosure.",
        },
        {
          t: "Content edits",
          d: "Copy changes, image swaps, new pages, blog posts. Most requests turned around in 24 hours.",
        },
        {
          t: "Quarterly review",
          d: "Performance report, security report, recommendations for the next quarter. One call, one document, no fluff.",
        },
      ]}
      process={[
        {
          n: "Phase 1 · 2 weeks",
          t: "Onboarding audit",
          d: "Full audit of the existing site. Security, performance, SEO health, accessibility. We fix anything critical before billing starts.",
        },
        {
          n: "Phase 2 · ongoing",
          t: "Managed retainer",
          d: "Monthly maintenance, content edits, monitoring, support. One Slack channel, one email, one monthly invoice.",
        },
        {
          n: "Phase 3 · quarterly",
          t: "Strategic review",
          d: "We surface what's slowing down, what's breaking, and what the next quarter's improvements should be.",
        },
      ]}
      faqs={[
        {
          q: "What sites do you maintain?",
          a: "Anything modern: WordPress, Webflow, Shopify, Next.js, custom React, headless setups. If it's older or hand-rolled in PHP, we'll audit it first.",
        },
        {
          q: "How fast is your turnaround on edits?",
          a: "Standard edits — copy, images, new sections — within 24 business hours. Larger requests get a quote first.",
        },
        {
          q: "What if my site goes down?",
          a: "We're already on it. Uptime monitoring alerts us at 60-second granularity. Most outages are resolved before you'd notice.",
        },
        {
          q: "What's the minimum?",
          a: "Three-month minimum. After that, month-to-month. Cancel anytime.",
        },
      ]}
      resultStat={[
        { value: "99.98%", label: "Tracked uptime" },
        { value: "24h", label: "Avg. edit turnaround" },
        { value: "<48h", label: "CVE patch window" },
        { value: "60s", label: "Monitor granularity" },
      ]}
    />
  );
}
