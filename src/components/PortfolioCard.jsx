import React from "react";
import { ExternalLink } from "lucide-react";
import { Tooltip } from "react-tooltip";

const PortfolioCard = ({ title, description, imageUrl, tags, link }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <a href={link}>
        <div className="aspect-w-16 aspect-h-9 relative">
          <img
            src={imageUrl}
            alt={title}
            className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </a>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              data-tooltip-id={tag.name}
              data-tooltip-content={tag.name}
              className="flex items-center justify-center p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300"
            >
              {/* Set the icon's color to its original color */}
              {React.cloneElement(tag.icon, {
                className: `w-5 h-5 ${tag.color}`,
              })}
              <Tooltip id={tag.name} />
            </div>
          ))}
        </div>
        <a
          href={link}
          className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
