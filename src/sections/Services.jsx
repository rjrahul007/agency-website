import React from "react";
import { FadeIn } from "../components/FadeIn";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../data/services";

export const Services = () => (
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
        {services.map((service, index) => (
          <FadeIn key={index} delay={index * 100}>
            <ServiceCard {...service} />
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
