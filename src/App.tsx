import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import TrustedBy from "./sections/TrustedBy";
import Services from "./sections/Services";
import WhyUs from "./sections/WhyUs";
import Results from "./sections/Results";
import Testimonials from "./sections/Testimonials";
import CtaStrip from "./sections/CtaStrip";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="grain min-h-screen flex flex-col bg-midnight text-ivory">
      <Nav />
      <main id="top" className="relative">
        <Hero />
        <TrustedBy />
        <Services />
        <WhyUs />
        <Results />
        <Testimonials />
        <CtaStrip />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
