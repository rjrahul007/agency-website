import React from "react";
import { ArrowRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon from Font Awesome
import { FadeIn } from "../components/FadeIn";

export const Hero = () => (
  <section
    id="home"
    className="min-h-screen flex items-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-10"></div>
    <div className="absolute inset-0">
      <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
    </div>
    <div className="max-w-7xl mx-auto">
      <div className="text-center">
        <FadeIn>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-8">
            Transform Your Digital Presence{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent inline-block">
              with{" "}
              <TypeAnimation
                sequence={[
                  "Expert Web Solutions",
                  2000,
                  "E-commerce Website",
                  2000,
                  "Portfolio Website",
                  2000,
                  "Business Website",
                  2000,
                  "Landing Pages",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                style={{ display: "inline-block" }}
                className="typed-cursor-gradient"
              />
            </span>
          </h1>
        </FadeIn>
        <FadeIn delay={400}>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              aria-label="Chat on WhatsApp"
              className="px-8 py-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
              onClick={() =>
                (window.location.href =
                  "https://wa.me/8638201670?text=Hello%20I%20would%20like%20to%20build%20a%20website.")
              }
            >
              <span className="flex items-center justify-center">
                <FaWhatsapp className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </span>
            </button>
            <button
              aria-label="View Portfolio"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 group"
              onClick={() =>
                document
                  .getElementById("portfolio")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="flex items-center justify-center">
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
