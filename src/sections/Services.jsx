import React, { useState } from "react";
import { FadeIn } from "../components/FadeIn";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../data/services";
import { useMediaQuery } from "react-responsive";
import { Code2 } from "lucide-react";

export const Services = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Media query hooks
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const defaultItemsToShow = isDesktop ? 9 : 6;
  const itemsToShow = isExpanded ? services.length : defaultItemsToShow;

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600">
              Comprehensive web solutions tailored to your needs
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, itemsToShow).map((service, index) => (
            <FadeIn key={index} delay={index * 100}>
              <ServiceCard {...service} />
            </FadeIn>
          ))}
        </div>
        {services.length > defaultItemsToShow && (
          <div className="text-center mt-8">
            <button
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "View Less" : "View More"}
              <Code2 className="inline ml-1" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
