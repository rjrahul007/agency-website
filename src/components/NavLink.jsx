import React from "react";

export const NavLink = ({ href, children, isActive, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative group ${
      isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
    }`}
  >
    {children}
    <span
      className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ${
        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`}
    />
  </a>
);
