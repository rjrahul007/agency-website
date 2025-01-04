import React, { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { NavLink } from "./components/NavLink";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Navbar } from "./components/Navbar/Navbar";
import { Portfolio } from "./sections/Portfolio";
import { Testimonials } from "./sections/Testimonials";
import { Footer } from "./sections/Footer";
import { Contact } from "./sections/Contact";
import StatsAndLogos from "./sections/StatsAndLogos";
// Import other sections

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Active section logic
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}

      <Navbar />
      {/* Navigation content */}

      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <StatsAndLogos />
      <Contact />
      <Footer />
      {/* Other sections */}
    </div>
  );
};

export default App;
