import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Hero from "../component/hero";

import Logo from "../assets/logo.png";
import Picture1 from "../assets/pics1.jpeg";
import Picture5 from "../assets/pics5.jpeg";
import GallerySection from "../component/Gallery";
import ExecutivesSection from "../component/executiveCard";
import FacultyAdvisor from "../component/FacultyAdvisor";

//   {
//     id: 1,
//     name: "Ndukwu Ebere",
//     position: "Team Lead",
//     image: nmeso,
//   },
//   {
//     id: 2,
//     name: "Johnpaul Anyanwu",
//     position: "Project manager",
//     image: nmeso,
//   },
//   {
//     id: 3,
//     name: "Praise Godwin",
//     position: "Human Resource Officer",
//     image: nmeso,
//   },
//   {
//     id: 4,
//     name: "Nmesoma Nnopu",
//     position: "Team secretrary",
//     image: nmeso,
//   },
//   {
//     id: 5,
//     name: "Munachi Anyanwu",
//     position: "Financial Director",
//     image: nmeso,
//   },
//   {
//     id: 6,
//     name: "Chiamaka Obasi",
//     position: "Social Media Manager",
//     image: nmeso,
//   },
//   {
//     id: 7,
//     name: "Okonkwo Kingsley",
//     position: "Technical Director",
//     image: nmeso,
//   },
// ];

// // Initials fallback when no photo
// const getInitials = (name) =>
//   name
//     .split(" ")
//     .map((n) => n[0])
//     .join("")
//     .slice(0, 2)
//     .toUpperCase();

// const ExecCard = ({ name, position, image }) => {
//   const [imgError, setImgError] = useState(false);

//   return (
//   <div className="group bg-white rounded-2xl   shadow-md hover:shadow-lg transition-all duration-300 p-3 flex flex-col items-center text-center">

//   {/* Image */}
//   <div className="relative w-50 h-50  rounded-xl overflow-hidden mb-4">
//     {image && !imgError ? (
//       <img
//         src={image}
//         alt={name}
//         onError={() => setImgError(true)}
//         className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
//       />
//     ) : (
//       <div className="w-full h-full  flex items-center justify-center">
//         <span className="text-3xl font-bold text-[#F5A623]">
//           {getInitials(name)}
//         </span>
//       </div>
//     )}

//     {/* Overlay */}
//     <div className="absolute inset-0 bg-[#1e1b4b]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//   </div>

//   {/* Name (NOW uses position style) */}
//   <h3 className="  w-50 bg-[#1e1b4b] text-[#F5A623] text-sm sm:text-base font-semibold px-4 py-1 rounded-md mb-2">
//     {name}
//   </h3>

//   {/* Position (NOW uses name style) */}
//   <span className=" w-50 bg-[rgb(245,166,35)] text-[#1e1b4b] text-xs font-semibold uppercase tracking-wider px-4 py-1 rounded-md">
//     {position}
//   </span>

// </div>
//   );
// };

const Team = () => {
  return (
    <div className="w-full">
      {/* hero section */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "100dvh" }}
      >
        <Hero
          tag="Our People"
          headline="The Minds Behind"
          highlight="Every Impact"
          subtext="Meet the passionate student leaders driving innovation, sustainability, and change across every Enactus FUTO project."
        />
      </section>

      {/* Executive Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <ExecutivesSection />
      </section>

      {/* Faculty Advisor */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <FacultyAdvisor />
      </section>

      {/* Gallery Section */}
      <section>
        <GallerySection />
      </section>

      {/* Be Part of a Global Movement */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="w-full bg-[#1e1b4b] rounded-[20px] overflow-hidden p-6 sm:p-8 shadow-xl">
          {/* Title */}
          <h2 className="text-white text-center text-2xl sm:text-3xl font-bold mb-6">
            Be Part of a Global Movement
          </h2>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden mb-6">
            <img
              src={Picture5}
              alt="Enactus global movement"
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-4 text-center mb-8 max-w-2xl mx-auto">
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              Enactus is a global community present in 35 countries, with over
              72,000 students on more than 350 university campuses.
            </p>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              As Enactus FUTO, we're proud to contribute to this worldwide
              network dedicated to using entrepreneurial action to improve lives
              and create a better, more sustainable world.
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <a
              href="https://chat.whatsapp.com/KnmxtlVli2F34b6RiCSjFL?mode=gi_t"
              rel="noopener noreferrer"
              className="bg-[#F5A623] text-[#1e1b4b] font-semibold px-6 py-3 rounded-md hover:bg-[#e09415] transition-colors duration-200"
            >
              Join Group
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
