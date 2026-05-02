import ServiceDetail from "../../components/ServiceDetail";
import { ConvoyVisual } from "../../components/ServiceVisuals";

export default function MetaAds() {
  return (
    <ServiceDetail
      Visual={ConvoyVisual}
      number="04"
      slug="meta-ads"
      name="Meta Ads"
      tagline="Facebook and Instagram performance, run by people who read your P&L."
      hook="We engineer ad accounts that print."
      problem="Most accounts have broken pixels, bloated structures, and creative that hasn't been tested in months. The algorithm can't help you when you're feeding it noise."
      intro="We rebuild tracking, simplify structure, and ship a creative pipeline tuned to your P&L. Then we tune until cost per acquisition stops surprising you."
      why={[
        "iOS, ad blockers, missing CAPI — most tracking is broken before creative hits the feed.",
        "Creative is 80% of performance. We run a testing pipeline, not a one-off campaign.",
        "Account structure decides what scales. We use simplified, machine-friendly setups.",
        "Meta's interface lies. We tie ads to your CRM, your shop, your real revenue.",
      ]}
      deliverables={[
        {
          t: "Account audit & rebuild",
          d: "Pixel, CAPI, conversions API, attribution. Every leak found, every signal sent server-side.",
        },
        {
          t: "Creative pipeline",
          d: "5–15 new ad concepts a month, scripted, edited, shipped. Static, video, UGC, founder-led.",
        },
        {
          t: "Campaign architecture",
          d: "Simplified ASC, CBO, and consolidated targeting structures that let the algorithm work.",
        },
        {
          t: "Funnel page work",
          d: "Landing tests, offer iteration, post-click experience. The ad isn't the funnel — the funnel is.",
        },
        {
          t: "Weekly P&L reporting",
          d: "Spend, CPA, ROAS, blended CAC, contribution margin. Read in five, decide in fifteen.",
        },
        {
          t: "Strategy on speed dial",
          d: "Slack channel for the team, a real person who picks up. No ticket queues.",
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
      proofQuote="A media account is a system, not a campaign. We engineer it to win — then we tune it weekly until it does."
    />
  );
}
