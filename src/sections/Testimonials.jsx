import React from "react";
import { FadeIn } from "../components/FadeIn";
import { testimonials } from "../data/testimonials";
import TestimonialCard from "../components/TestimonialCard";

export const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-gray-600">
            Don't just take our word for it - hear what our clients have to say.
          </p>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <FadeIn key={index} delay={index * 100}>
            <TestimonialCard key={testimonial.author} {...testimonial} />
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
