import React from "react";
import { navigationLinks } from "./NavConfig";
import { NavLink } from "../NavLink";
import { X } from "lucide-react";

export const MobileNav = ({ isOpen, onLinkClick }) => (
  <div
    className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    {/* Close Button */}
    <button
      onClick={onLinkClick}
      className="absolute top-4 right-4 p-2 rounded-md text-gray-600 hover:text-gray-900 transition-colors duration-300"
      aria-label="Close navigation menu"
    >
      <X className="h-6 w-6" />
    </button>

    {/* Navigation Links */}
    <div className="flex flex-col items-center justify-center h-full space-y-6 overflow-y-auto">
      {navigationLinks.map((link) => (
        <NavLink key={link.id} href={link.href} onClick={onLinkClick}>
          {link.label}
        </NavLink>
      ))}
      <button
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full"
        onClick={() =>
          (window.location.href =
            "https://wa.me/8638201670?text=Hello%20I%20would%20like%20to%20build%20a%20website.")
        }
      >
        Get Started
      </button>
    </div>
  </div>
);
