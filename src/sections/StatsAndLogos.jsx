import React from "react";
import Marquee from "react-fast-marquee";
import { techStackData } from "../data/statsConfig";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiMongodb, // AWS
  SiVercel, // Vercel
  SiRender, // Render
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs, TbBrandVercelFilled } from "react-icons/tb"; // Lucide icons

const StatCard = ({ number, label }) => (
  <div className="text-center">
    <h2 className="text-6xl font-bold mb-2">{number}</h2>
    <p className="text-lg">{label}</p>
  </div>
);

const TechIcon = ({ name, icon, color }) => {
  const IconMap = {
    FaReact: FaReact,
    SiTailwindcss: SiTailwindcss,
    FaNodeJs: FaNodeJs,
    SiExpress: SiExpress,
    BiLogoPostgresql: BiLogoPostgresql,
    SiTypescript: SiTypescript,
    SiMongodb: SiMongodb,
    TbBrandNextjs: TbBrandNextjs,
    SiAmazonaws: TbBrandNextjs, // AWS from react-icons
    SiVercel: SiVercel, // Vercel from react-icons
    SiRender: SiRender, // Render from react-icons
    Aws: FaAws, // AWS from lucide-react
    Vercel: TbBrandVercelFilled, // Vercel from lucide-react
    Render: SiRender, // Render from lucide-react
  };

  const IconComponent = IconMap[icon];

  return (
    <div className="mx-8 text-center group transition-all duration-300 hover:scale-110">
      <div className="flex flex-col items-center">
        <div className="p-4 rounded-xl bg-white shadow-lg mb-2 hover:shadow-xl transition-shadow">
          <IconComponent
            size={40}
            color={color}
            className="transition-transform duration-300 group-hover:rotate-12"
          />
        </div>
        <span className="text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-6">
          {name}
        </span>
      </div>
    </div>
  );
};

const StatsAndLogos = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Stats Section */}
      {/* <div className="flex justify-center gap-20 mb-8">
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div> */}

      {/* Catchy Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent inline-block leading-tight py-2">
          We Build with Cutting-Edge Technology!
        </h2>
      </div>

      {/* Marquee Tech Stack Section */}
      <div className="relative">
        <Marquee
          direction="right"
          speed={30}
          gradient={false}
          pauseOnHover={true}
          className="py-12"
        >
          {techStackData.map((tech) => (
            <TechIcon key={tech.id} {...tech} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default StatsAndLogos;
