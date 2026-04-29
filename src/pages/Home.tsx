import PageTransition from "../components/PageTransition";
import Hero from "../sections/Hero";
import TrustedBy from "../sections/TrustedBy";
import Services from "../sections/Services";
import WhyUs from "../sections/WhyUs";
import Results from "../sections/Results";
import Testimonials from "../sections/Testimonials";
import CtaStrip from "../sections/CtaStrip";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <TrustedBy />
      <Services />
      <WhyUs />
      <Results />
      <Testimonials />
      <CtaStrip />
    </PageTransition>
  );
}
