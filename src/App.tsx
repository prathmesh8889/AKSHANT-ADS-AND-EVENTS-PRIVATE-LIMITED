import { HashRouter, Route, Routes } from "react-router-dom";
import { FloatingActions, Footer, Navbar, ScrollToTop } from "./components/Chrome";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-ink font-body text-chalk antialiased">
        <div className="noise-layer" aria-hidden />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </HashRouter>
  );
}
