import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";

import Picture1 from "../assets/pics1.png";
import Picture2 from "../assets/pics2.png";
import Picture3 from "../assets/pics3.png";
import nmeso from "../assets/nmeso.jpg";
import Logo from "../assets/logo.png";
import GlobalImage from "../assets/pics1.png";




const heroImages = [Picture1, Picture2, Picture3];


const executives = [
  {
    id: 1,
    name: "Ndukwu Ebere",
    position: "Team Lead",
    image: nmeso, 
  },
  {
    id: 2,
    name: "Johnpaul Anyanwu",
    position: "Project manager",
    image: nmeso,
  },
  {
    id: 3,
    name: "Praise Godwin",
    position: "Human Resource Officer",
    image: nmeso,
  },
  {
    id: 4,
    name: "Nmesoma Nnopu",
    position: "Team secretrary",
    image: nmeso,
  },
  {
    id: 5,
    name: "Munachi Anyanwu",
    position: "Financial Director",
    image: nmeso,
  },
  {
    id: 6,
    name: "Chiamaka Obasi",
    position: "Social Media Manager",
    image: nmeso,
  },
  {
    id: 7,
    name: "Okonkwo Kingsley",
    position: "Technical Director",
    image: nmeso,
  },
];

// Initials fallback when no photo
const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
 
const ExecCard = ({ name, position, image }) => {
  const [imgError, setImgError] = useState(false);
 
  return (
  <div className="group bg-white rounded-2xl   shadow-md hover:shadow-lg transition-all duration-300 p-3 flex flex-col items-center text-center">

  {/* Image */}
  <div className="relative w-50 h-50  rounded-xl overflow-hidden mb-4">
    {image && !imgError ? (
      <img
        src={image}
        alt={name}
        onError={() => setImgError(true)}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    ) : (
      <div className="w-full h-full  flex items-center justify-center">
        <span className="text-3xl font-bold text-[#F5A623]">
          {getInitials(name)}
        </span>
      </div>
    )}

    {/* Overlay */}
    <div className="absolute inset-0 bg-[#1e1b4b]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>

  {/* Name (NOW uses position style) */}
  <h3 className="  w-50 bg-[#1e1b4b] text-[#F5A623] text-sm sm:text-base font-semibold px-4 py-1 rounded-md mb-2">
    {name}
  </h3>

  {/* Position (NOW uses name style) */}
  <span className=" w-50 bg-[rgb(245,166,35)] text-[#1e1b4b] text-xs font-semibold uppercase tracking-wider px-4 py-1 rounded-md">
    {position}
  </span>

</div>
  );
};

const Team = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(
      new Array(heroImages.length).fill(false),
    );
  
    // Auto-advance slideshow every 5 seconds
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      }, 5000);
      return () => clearInterval(timer);
    }, []);
  
    // Preload all hero images
    useEffect(() => {
      heroImages.forEach((src, i) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImagesLoaded((prev) => {
            const updated = [...prev];
            updated[i] = true;
            return updated;
          });
        };
      });
    }, []);

  const topRow = executives.slice(0, 4);   
  const bottomRow = executives.slice(4); 

  return (
    <div className='w-full'>

     {/* hero section */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "100dvh" }}
      >
        {heroImages.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {!imagesLoaded[i] && (
              <div className="absolute inset-0 bg-[#1B1464] flex flex-col items-center justify-center z-10 gap-4">
                <img
                  src={Logo}
                  alt="Loading..."
                  className="w-16 h-16 object-contain animate-pulse"
                />
                <div className="flex gap-1">
                  {[0, 150, 300].map((delay) => (
                    <span
                      key={delay}
                      className="w-2 h-2 bg-[#F5A623] rounded-full animate-bounce"
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <img
              src={src}
              alt={`Enactus FUTO slide ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
                imagesLoaded[i] ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 h-full flex items-end pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Creating Positive Change{" "}
                <span className="text-[#F5A623]">
                  Through Entrepreneurial Action
                </span>
              </h1>
              <p className="text-white/80 text-sm sm:text-base mb-8 leading-relaxed max-w-lg">
                We're a community of student leaders committed to using business
                principles to create sustainable social impact in Futo Owerri
                and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/team"
                  className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#1B1464] font-semibold px-6 py-3 rounded-md hover:bg-[#e09415] transition-colors duration-200"
                >
                  Join Our Team <ArrowRight size={16} />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-[#1B1464] transition-colors duration-200"
                >
                  View Our Projects
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 z-20 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "bg-[#F5A623] w-6"
                  : "bg-white/50 w-2 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Executive Team */}
       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
 
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#F5A623] text-sm font-semibold uppercase tracking-widest mb-2">
            2025 / 2026
          </p>
          <h2 className="text-[#1e1b4b] text-3xl sm:text-4xl font-bold mb-4">
            Meet The Executives
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Meet the current Enactus FUTO Executive Team — dedicated student leaders
            driving innovation, impact, and sustainable change across our projects.
            Guided by passion and teamwork, they coordinate initiatives that empower
            communities and strengthen the Enactus vision on campus and beyond.
          </p>
        </div>
 
        {/* Top row — 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 justify-items-center mb-10">
          {topRow.map((exec) => (
            <ExecCard key={exec.id} {...exec} />
          ))}
        </div>
 
        {/* Bottom row — 3 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center max-w-2xl mx-auto">
          {bottomRow.map((exec) => (
            <ExecCard key={exec.id} {...exec} />
          ))}
        </div>
      </div>
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
                  src={GlobalImage}
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
                  href="https://enactus.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F5A623] text-[#1e1b4b] font-semibold px-6 py-3 rounded-md hover:bg-[#e09415] transition-colors duration-200"
                >
                  Visit Enactus
                </a>
              </div>
            </div>
          </section>
      
    </div>
  )
}

export default Team
