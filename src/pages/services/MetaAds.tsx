import ServiceDetail from "../../components/ServiceDetail";
import { ConvoyVisual } from "../../components/ServiceVisuals";

export default function MetaAds() {
  return (
    <ServiceDetail
      Visual={ConvoyVisual}
      number="04"
      slug="meta-ads"
      name="Meta Ads"
      tagline="Facebook and Instagram performance, run by people who read your P&L. Creative-led campaigns built to scale spend without breaking CPA."
      intro="Meta Ads aren't broken — most accounts are. We rebuild them: tracking that actually fires, creative that actually performs, structure that actually scales. Then we sit on the line every week, P&L open, and tune until the cost per acquisition stops surprising you."
      why={[
        "Most ad accounts have broken tracking. iOS 14, ad blockers, missing CAPI — we fix this before we touch creative.",
        "Creative is 80% of performance. We run a testing pipeline, not a one-off campaign.",
        "Account structure decides what scales. We use simplified, machine-friendly setups — not 47 ad sets.",
        "Reporting tied to Meta's interface lies. We tie ads to your CRM, your shop, your real revenue.",
      ]}
      deliverables={[
        {
          t: "Account audit & rebuild",
          d: "Pixel, CAPI, conversions API, attribution windows. Every leak found, every signal sent server-side.",
        },
        {
          t: "Creative pipeline",
          d: "5–15 new ad concepts a month, scripted, edited, and shipped. Static, video, UGC, founder-led.",
        },
        {
          t: "Campaign architecture",
          d: "Simplified ASC, CBO, and consolidated targeting structures that let the algorithm do its job.",
        },
        {
          t: "Funnel page work",
          d: "Landing page tests, offer iteration, post-click experience. The ad isn't the funnel — the funnel is the funnel.",
        },
        {
          t: "Weekly P&L reporting",
          d: "Spend, CPA, ROAS, blended CAC, contribution margin. Read in five minutes, decide in fifteen.",
        },
        {
          t: "Strategy on speed dial",
          d: "Slack channel for the team, a real person who picks up. No ticket queues.",
        },
      ]}
      process={[
        {
          n: "Phase 1 · weeks 1–2",
          t: "Audit & foundation",
          d: "Tracking rebuild, account audit, creative brief, offer review. Spend continues uninterrupted.",
        },
        {
          n: "Phase 2 · weeks 3–6",
          t: "Test & validate",
          d: "5–10 concepts in market, 3–5 audiences, conversion-event budget. We isolate winners fast.",
        },
        {
          n: "Phase 3 · ongoing",
          t: "Scale & compound",
          d: "Winners scale, creative library grows, structure tightens. Every month, lower CPA or more spend.",
        },
      ]}
      faqs={[
        {
          q: "What's the minimum ad spend?",
          a: "We work best with $5k+/month in ad spend. Below that, paid social rarely beats organic and SEO for ROI.",
        },
        {
          q: "Do you handle creative production?",
          a: "Concepting, scripting, editing — yes. We work with your existing footage or shoot UGC and founder-led video. Studio commercials we sub out to a partner.",
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
        { value: "4.2×", label: "Avg. blended ROAS" },
        { value: "−41%", label: "Avg. CPA reduction" },
        { value: "3.5×", label: "Spend scaled, 60d" },
        { value: "Weekly", label: "P&L reporting" },
      ]}
    />
  );
}
