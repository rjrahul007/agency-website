import React from "react";
import { navigationLinks } from "./NavConfig";

export const MobileNav = ({ isOpen }) => (
  <div
    className={`md:hidden transition-all duration-300 transform ${
      isOpen
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-full pointer-events-none"
    }`}
  >
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
      {navigationLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
          {link.label}
        </a>
      ))}
      <button className="w-full mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
        Get Started
      </button>
    </div>
  </div>
);
