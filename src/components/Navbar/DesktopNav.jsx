import React from "react";
import { navigationLinks } from "./NavConfig";
import { NavLink } from "../NavLink";

export const DesktopNav = ({ activeSection }) => (
  <div className="hidden md:flex items-center space-x-4">
    {navigationLinks.map((link) => (
      <NavLink
        key={link.href}
        href={link.href}
        isActive={activeSection === link.id}
      >
        {link.label}
      </NavLink>
    ))}
    <button className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
      Get Started
    </button>
  </div>
);
