import ServiceDetail from "../../components/ServiceDetail";
import { ConvoyVisual } from "../../components/ServiceVisuals";

export default function MetaAds() {
  return (
    <ServiceDetail
      Visual={ConvoyVisual}
      number="04"
      slug="meta-ads"
      name="Meta Ads"
      shortName="Meta ads"
      tagline="Facebook and Instagram performance, run by people who read your P&L."
      intro="Meta ads are the ads people see on Facebook and Instagram. We run yours end to end — who they reach, what they say, how the budget is spent, and how every dollar in turns into more than a dollar back. We rebuild your tracking, simplify your account, and ship new creative every week so the algorithm always has something fresh to work with."
      why={[
        "iOS, ad blockers, missing CAPI — most tracking is broken before creative hits the feed.",
        "Creative is 80% of performance. We run a testing pipeline, not a one-off campaign.",
        "Account structure decides what scales. We use simplified, machine-friendly setups.",
        "Meta's interface lies. We tie ads to your CRM, your shop, your real revenue.",
      ]}
      deliverables={[
        {
          t: "Account audit & rebuild",
          d: "A clean pixel, CAPI, and attribution stack — every leak fixed, every signal sent server-side.",
          approach:
            "We approach this by auditing pixels, CAPI, and attribution end to end, then routing every conversion server-side so the algorithm gets clean signal.",
        },
        {
          t: "Creative pipeline",
          d: "5–15 new ad concepts every month — static, video, UGC, founder-led — scripted, edited, shipped.",
          approach:
            "We approach this by scripting, editing, and shipping new concepts every week based on what's actually winning, not what looked good in a deck.",
        },
        {
          t: "Campaign architecture",
          d: "A simplified ASC + consolidated structure that lets Meta's algorithm spend efficiently.",
          approach:
            "We approach this by simplifying to ASC and consolidated targeting that lets the algorithm spend efficiently instead of fighting it.",
        },
        {
          t: "Funnel page work",
          d: "Landing-page tests, offer iteration, and post-click experience tuned with the same rigor as the ad.",
          approach:
            "We approach this by treating the landing page, offer, and post-click experience as part of the campaign — testing them with the same rigor as the ad itself.",
        },
        {
          t: "Weekly P&L reporting",
          d: "Spend, CPA, ROAS, blended CAC, and contribution margin — read in five minutes, decide in fifteen.",
          approach:
            "We approach this by reporting in dollars: spend, CPA, ROAS, blended CAC, contribution margin — read in five, decide in fifteen.",
        },
        {
          t: "Strategy on speed dial",
          d: "A shared Slack channel and a real strategist who picks up. No ticket queues, no junior handoffs.",
          approach:
            "We approach this by pairing your account with a senior strategist on Slack — no ticket queues, no junior account managers.",
        },
      ]}
      process={[
        {
          n: "01",
          t: "Audit & foundation",
          d: "Tracking rebuild, account audit, creative brief, offer review. Spend continues uninterrupted.",
        },
        {
          n: "02",
          t: "Test & validate",
          d: "5–10 concepts in market, 3–5 audiences, conversion-event budget. Winners isolated fast.",
        },
        {
          n: "03",
          t: "Scale & compound",
          d: "Winners scale, creative library grows, structure tightens. Lower CPA or more spend, monthly.",
        },
      ]}
      faqs={[
        {
          q: "What's the minimum ad spend?",
          a: "We work best with $5k+/month in ad spend. Below that, paid social rarely beats organic and SEO for ROI.",
        },
        {
          q: "Do you handle creative production?",
          a: "Concepting, scripting, editing — yes. We work with your existing footage or shoot UGC and founder-led video. Studio commercials we sub out.",
        },
        {
          q: "Will I keep my ad account?",
          a: "Always. We work inside your account on your Business Manager. You own the data, the pixels, the audiences — forever.",
        },
        {
          q: "How is reporting structured?",
          a: "A live dashboard you can open anytime. Weekly written summary tied to revenue. Monthly strategy review on a call.",
        },
      ]}
      resultStat={[
        { value: "4.2", label: "Avg. blended ROAS" },
        { value: "-41%", label: "Avg. CPA reduction" },
        { value: "3.5", label: "Spend scaled, 60d" },
        { value: "15", label: "Concepts tested / mo" },
      ]}
    />
  );
}
