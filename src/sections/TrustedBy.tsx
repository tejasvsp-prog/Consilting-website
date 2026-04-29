import Marquee from "../components/Marquee";

const tags = [
  "E-COMMERCE",
  "LOCAL SERVICES",
  "REAL ESTATE",
  "HEALTHCARE",
  "RESTAURANTS",
  "AUTO",
  "PROFESSIONAL SERVICES",
  "FITNESS",
  "EDUCATION",
  "B2B SAAS",
  "BEAUTY",
  "HOME SERVICES",
];

export default function TrustedBy() {
  return (
    <section className="relative py-14 border-y border-gold/10 bg-obsidian">
      <p className="text-center font-mono text-[10px] uppercase tracking-[0.32em] text-ivory/40 mb-6">
        Trusted by operators across
      </p>
      <Marquee>
        {tags.map((t, i) => (
          <span
            key={i}
            className="px-8 font-display text-2xl md:text-3xl text-ivory/70 whitespace-nowrap"
          >
            {t}
            <span className="text-gold mx-6">◆</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
