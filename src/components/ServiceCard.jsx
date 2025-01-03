import React from "react";
import * as Icons from "lucide-react";

export const ServiceCard = ({ title, description, icon }) => {
  const IconComponent = Icons[icon];
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="mb-4">
        <IconComponent className="w-8 h-8 text-blue-500" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
