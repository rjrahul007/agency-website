import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Code2,
} from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { services } from "../data/services";

export const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <FadeIn>
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              WebCraft
            </h3>
            <p className="text-gray-400">
              Building digital excellence for modern businesses.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center hover:text-blue-400 transition-colors duration-300">
                <Phone size={16} className="mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center hover:text-blue-400 transition-colors duration-300">
                <Mail size={16} className="mr-2" />
                contact@webcraft.com
              </li>
              <li className="flex items-center hover:text-blue-400 transition-colors duration-300">
                <MapPin size={16} className="mr-2" />
                123 Tech Street, Silicon Valley
              </li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div>
            <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { Icon: Github, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Twitter, href: "#" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} WebCraft. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
