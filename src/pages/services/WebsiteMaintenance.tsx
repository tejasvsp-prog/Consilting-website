import ServiceDetail from "../../components/ServiceDetail";
import { PulseVisual } from "../../components/ServiceVisuals";

export default function WebsiteMaintenance() {
  return (
    <ServiceDetail
      Visual={PulseVisual}
      number="03"
      slug="website-maintenance"
      name="Website Maintenance"
      tagline="Your site, never the reason something broke."
      hook="Sites don't fail loudly. They erode quietly."
      problem="Plugins drift. SSL certificates expire. Performance degrades. By the time someone notices, you've already lost the lead, the deal, or the ranking."
      intro="We sit on top of your stack — updates, monitoring, performance, security, and same-week edits. You stop seeing it. That's the goal."
      why={[
        "A site down at 9pm Friday costs more than a year of maintenance. Insurance matters.",
        "Plugins, SSLs, and CMS versions need attention monthly. Nobody on your team has time.",
        "Performance silently degrades. Without monitoring, you only learn when rankings drop.",
        "Edits that take a week to schedule, we ship in 24 hours. That's leverage.",
      ]}
      deliverables={[
        {
          t: "Monthly updates & backups",
          d: "Plugins, themes, CMS, frameworks updated and tested. Daily backups offsite for 90 days.",
        },
        {
          t: "Uptime monitoring",
          d: "60-second checks across 14 regions. We're alerted before you are. Fixed before you wake up.",
        },
        {
          t: "Performance tracking",
          d: "Core Web Vitals, real-user metrics, monthly review. Speed regressions get caught early.",
        },
        {
          t: "Security & SSL",
          d: "Vulnerability scans, malware monitoring, SSL renewals, firewall tuning. CVEs patched in 48h.",
        },
        {
          t: "Content edits",
          d: "Copy changes, image swaps, new pages, blog posts. Most requests turned around in 24 hours.",
        },
        {
          t: "Quarterly review",
          d: "Performance, security, recommendations. One call, one document, no fluff.",
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
      proofQuote="The best maintenance is the kind you forget you're paying for. That's the bar."
    />
  );
}
