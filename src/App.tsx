import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { RouteCurtain } from "./components/PageTransition";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesOverview from "./pages/Services";
import Seo from "./pages/services/Seo";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import WebsiteMaintenance from "./pages/services/WebsiteMaintenance";
import MetaAds from "./pages/services/MetaAds";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function Layout() {
  const location = useLocation();
  return (
    <div className="grain min-h-screen flex flex-col bg-midnight text-ivory">
      <Nav />
      <main className="relative flex-1">
        {/* Curtain sweeps top-to-bottom on every route change */}
        <RouteCurtain key={`curtain-${location.pathname}`} />
        <AnimatePresence mode="wait" initial={false}>
          <div key={location.pathname}>
            <Outlet />
          </div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/seo" element={<Seo />} />
          <Route
            path="/services/website-development"
            element={<WebsiteDevelopment />}
          />
          <Route
            path="/services/website-maintenance"
            element={<WebsiteMaintenance />}
          />
          <Route path="/services/meta-ads" element={<MetaAds />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          {/* /book is now an alias for /contact — preserves any old links */}
          <Route path="/book" element={<Navigate to="/contact" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
