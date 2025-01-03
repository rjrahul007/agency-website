import React from "react";
import { Quote } from "lucide-react";

const TestimonialCard = ({ content, author, role, company, imageUrl }) => {
  return (
    <div className="relative rounded-lg bg-white p-8 shadow-lg">
      <Quote className="absolute right-8 top-8 h-8 w-8 text-indigo-100" />
      <div className="relative">
        <p className="text-lg text-gray-600">{content}</p>
        <div className="mt-6 flex items-center">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={imageUrl}
            alt={author}
          />
          <div className="ml-4">
            <p className="font-semibold text-gray-900">{author}</p>
            <p className="text-sm text-gray-500">
              {role} at {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
