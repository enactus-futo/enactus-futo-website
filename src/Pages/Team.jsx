import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Hero from "../component/Hero";

import Logo from "../assets/logo.png";
import Picture1 from "../assets/gallery/pics1.jpeg";
import Picture5 from "../assets/gallery/pics5.jpeg";
import Picture6 from "../assets/gallery/pics6.jpeg";
import GallerySection from "../component/Gallery";
import ExecutivesSection from "../component/executiveCard";
import FacultyAdvisor from "../component/FacultyAdvisor";
import SEO from "../component/SEO.jsx";
import LazyImage from "../component/LazyImage";




const Team = () => {
  return (
    <>
      <SEO
        title="Our Team"
        description="Meet the 2025/2026 Enactus FUTO executive team and members driving innovation and social impact at Federal University of Technology Owerri."
        url="https://enactusfuto.org/team"
      />
      <div className="w-full bg-gray-100">
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
           {/* Faculty Advisor */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <FacultyAdvisor />
        </section>

        {/* Executive Team */}
        <section className=" bg-gray-100">
          <ExecutivesSection />
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
              <LazyImage
                src={Picture6}
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
                network dedicated to using entrepreneurial action to improve
                lives and create a better, more sustainable world.
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
    </>
  );
};

export default Team;
