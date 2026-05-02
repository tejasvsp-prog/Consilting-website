import ServiceDetail from "../../components/ServiceDetail";
import { PulseVisual } from "../../components/ServiceVisuals";

export default function WebsiteMaintenance() {
  return (
    <ServiceDetail
      Visual={PulseVisual}
      number="03"
      slug="website-maintenance"
      name="Website Maintenance"
      shortName="maintenance"
      tagline="Your site, never the reason something broke."
      intro="Website maintenance is everything that keeps your site running after launch. Updates, backups, security patches, uptime monitoring, and quick edits whenever you need to swap copy or add a page. We handle all of it — quietly, in the background — so you stop thinking about your website and get to think about your business."
      why={[
        "A site down at 9pm Friday costs more than a year of maintenance. Insurance matters.",
        "Plugins, SSLs, and CMS versions need attention monthly. Nobody on your team has time.",
        "Performance silently degrades. Without monitoring, you only learn when rankings drop.",
        "Edits that take a week to schedule, we ship in 24 hours. That's leverage.",
      ]}
      deliverables={[
        {
          t: "Monthly updates & backups",
          d: "Plugins, themes, CMS, and frameworks updated and tested. Daily backups stored offsite for 90 days.",
          approach:
            "We approach this by patching on a tested staging copy first, then promoting to production with daily backups stored offsite for ninety days.",
        },
        {
          t: "Uptime monitoring",
          d: "60-second uptime checks across 14 regions. We're alerted before you are.",
          approach:
            "We approach this by running 60-second health checks across fourteen regions and paging the on-call team the moment anything fails.",
        },
        {
          t: "Performance tracking",
          d: "Core Web Vitals, real-user metrics, and a monthly performance review with regressions flagged.",
          approach:
            "We approach this by sampling real-user metrics, comparing every release against the last, and flagging regressions before they hit your rankings.",
        },
        {
          t: "Security & SSL",
          d: "Vulnerability scans, malware monitoring, SSL renewals, and firewall tuning. CVEs patched in 48h.",
          approach:
            "We approach this by running weekly vulnerability scans, renewing SSLs ahead of expiry, and patching disclosed CVEs within forty-eight hours.",
        },
        {
          t: "Content edits",
          d: "Copy changes, image swaps, new pages, and blog posts shipped within 24 business hours.",
          approach:
            "We approach this by giving you one Slack channel and one email — most copy, image, and page edits ship the same business day.",
        },
        {
          t: "Quarterly review",
          d: "A performance + security report and a punch list for next quarter — one call, one document.",
          approach:
            "We approach this by surfacing what's slowing down, what's breaking, and what to fix next — one call, one document, no fluff.",
        },
      ]}
      process={[
        {
          n: "01",
          t: "Onboarding audit",
          d: "Full audit of the existing site. Security, performance, SEO, accessibility. Critical fixes ship before billing.",
        },
        {
          n: "02",
          t: "Managed retainer",
          d: "Monthly maintenance, content edits, monitoring, support. One channel, one invoice.",
        },
        {
          n: "03",
          t: "Strategic review",
          d: "We surface what's slowing down, what's breaking, and what next quarter should improve.",
        },
      ]}
      faqs={[
        {
          q: "What sites do you maintain?",
          a: "Anything modern: WordPress, Webflow, Shopify, Next.js, custom React, headless setups. If it's older or hand-rolled in PHP, we audit first.",
        },
        {
          q: "How fast is your turnaround on edits?",
          a: "Standard edits — copy, images, new sections — within 24 business hours. Larger requests get a quote first.",
        },
        {
          q: "What if my site goes down?",
          a: "We're already on it. Uptime monitoring alerts at 60-second granularity. Most outages are resolved before you'd notice.",
        },
        {
          q: "What's the minimum?",
          a: "Three-month minimum. After that, month-to-month. Cancel anytime.",
        },
      ]}
      resultStat={[
        { value: "99.98%", label: "Tracked uptime" },
        { value: "24", label: "Hour edit turnaround" },
        { value: "48", label: "Hour CVE patch window" },
        { value: "60", label: "Second monitor checks" },
      ]}
    />
  );
}
