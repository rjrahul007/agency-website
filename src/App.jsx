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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        {" "}
        <Navbar />
        {/* Navigation content */}
      </nav>

      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      {/* Other sections */}
    </div>
  );
};

export default App;
