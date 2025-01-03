import React from "react";
import { FadeIn } from "../components/FadeIn";
import { portfolio } from "../data/portfolio";
import { ExternalLink } from "lucide-react";
import PortfolioCard from "../components/PortfolioCard";

export const Portfolio = () => (
  <section id="portfolio" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Latest Projects
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Discover how we've helped businesses transform their digital presence.
        </p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((item) => (
          <PortfolioCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  </section>
);
