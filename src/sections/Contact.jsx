import React from "react";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "../components/FadeIn";

export const Contact = () => (
  <section id="contact" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:text-4xl">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-gray-600">
            Ready to start your project? Contact us today.
          </p>
        </div>
      </FadeIn>
      <div className="max-w-xl mx-auto">
        <FadeIn delay={200}>
          <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
            <div className="group">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="block w-full px-4 py-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full px-4 py-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="block w-full px-4 py-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
            >
              <span className="flex items-center justify-center">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </form>
        </FadeIn>
      </div>
    </div>
  </section>
);
