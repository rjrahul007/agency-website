import {
  FaReact,
  FaNode,
  FaCreditCard,
  FaVuejs,
  FaPython,
} from "react-icons/fa"; // Import from Font Awesome
import {
  SiPostgresql,
  SiExpress,
  SiMongodb,
  SiMapbox,
  SiD3Dotjs, // Correct AWS icon
} from "react-icons/si"; // Import from Simple Icons
import { BsBootstrap } from "react-icons/bs";
import { FaAws } from "react-icons/fa";
// Define color mapping for each tag
const tagColors = {
  React: "text-blue-500",
  "Node.js": "text-green-500",
  PostgreSQL: "text-blue-700",
  PayU: "text-purple-500",
  "Vue.js": "text-green-600",
  Express: "text-gray-500",
  MongoDB: "text-green-700",
  MapBox: "text-blue-600",
  "D3.js": "text-orange-500",
  Python: "text-yellow-500",
  AWS: "text-orange-700",
};

// Add the color to each tag in the portfolio data
export const portfolio = [
  {
    title: "Car Rental Website",
    description:
      "A full-featured car rental platform with secure payments, 24/7 support, and business email setup. Enjoy hassle-free bookings and a wide selection of vehicles for every journey.",
    imageUrl: "/acewebsite.png",
    tags: [
      {
        name: "React",
        icon: <FaReact className="w-6 h-6" />,
        color: tagColors.React,
      },
      {
        name: "Node.js",
        icon: <FaNode className="w-6 h-6" />,
        color: tagColors["Node.js"],
      },
      {
        name: "Express",
        icon: <SiExpress className="w-6 h-6" />,
        color: tagColors.Express,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-6 h-6" />,
        color: tagColors.PostgreSQL,
      },
      {
        name: "PayU",
        icon: <FaCreditCard className="w-6 h-6" />,
        color: tagColors.PayU,
      },
      {
        name: "AWS", // Name of the technology
        icon: <FaAws className="w-6 h-6" />, // AWS icon
        color: tagColors.AWS, // Color for AWS (define this in your tagColors object)
      },
    ],
    link: "https://www.acecarrentals.in/",
  },
  {
    title: "IElevator",
    description:
      "Property listing platform with advanced search and filtering capabilities.",
    imageUrl: "/ielevator.png",
    tags: [
      {
        name: "React",
        icon: <FaReact className="w-6 h-6" />,
        color: tagColors.React,
      },
      {
        name: "Express",
        icon: <SiExpress className="w-6 h-6" />,
        color: tagColors.Express,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-6 h-6" />,
        color: tagColors.PostgreSQL,
      },
      {
        name: "Bootstrap",
        icon: <BsBootstrap className="w-6 h-6" />,
        color: tagColors.Bootstrap,
      },
    ],
    link: "https://rjrahul007.github.io/I-elevators/",
  },
  // {
  //   title: "Healthcare Dashboard",
  //   description:
  //     "Analytics dashboard for healthcare providers with real-time data visualization.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80",
  //   tags: [
  //     {
  //       name: "React",
  //       icon: <FaReact className="w-6 h-6" />,
  //       color: tagColors.React,
  //     },
  //     {
  //       name: "D3.js",
  //       icon: <SiD3Dotjs className="w-6 h-6" />,
  //       color: tagColors["D3.js"],
  //     },
  //     {
  //       name: "Python",
  //       icon: <FaPython className="w-6 h-6" />,
  //       color: tagColors.Python,
  //     },
  //     {
  //       name: "AWS",
  //       icon: <FaPython className="w-6 h-6" />,
  //       color: tagColors.AWS,
  //     },
  //   ],
  //   link: "#",
  // },
];
