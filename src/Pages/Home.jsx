import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useCountUp from "../hooks/useCountUp";
import  Picture1 from "../assets/pics1.png";
import Picture2 from "../assets/pics2.png";
import Picture3 from "../assets/pics3.png";
import ScrollToTop from "../component/ScrollToTop";
import Bulb from "../assets/bulb.png";
import Icon from "../assets/icon.png";

import People from "../assets/people.png";
import SDG from "../assets/sdg.png";
import logo from "../assets/logo.png";





const heroImages = [Picture1, Picture2, Picture3];

const stats = [
    {target:50, suffix: "+", label:"Active Members", img:People},
    {target:7, suffix: "", label:"Social Impact Projects", img:Icon},
    {target:5000, suffix: "+", label:"Lives Impacted", img:Bulb},
    {target:7, suffix: "", label:"SDGs Addressed", img:SDG},
]

// Individual stat card with its own count-up trigger
const StatCard = ({ target, suffix, label, img }) => {
  const count = useCountUp(target, 2000);

  return (
    <div className="flex flex-col items-center gap-2 p-6">
      <img src={img} alt={label} className="w-8 h-8 mb-1" />

      <span className="text-3xl md:text-4xl font-bold text-[#1B1464]">
        {count.toLocaleString()}{suffix}
      </span>

      <span className="text-gray-500 text-sm text-center">{label}</span>
    </div>
  );
};

 

const Home = () => {
   const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(
    new Array(heroImages.length).fill(false)
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
 
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-15 overflow-hidden">
 
        {/* Slideshow Images */}
        {heroImages.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Logo loader placeholder */}
            {!imagesLoaded[i] && (
              <div className="absolute inset-0  flex flex-col items-center justify-center z-10 gap-4">
                <img
                  src={logo}
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
              className={`w-full h-full object-cover transition-opacity duration-700 ${
                imagesLoaded[i] ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}
 
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
 
        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-end pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Creating Positive Change{" "}
                <span className="text-[#F5A623]">Through Entrepreneurial Action</span>
              </h1>
              <p className="text-white/80 text-sm sm:text-base mb-8 leading-relaxed max-w-lg">
                We're a community of student leaders committed to using business
                principles to create sustainable social impact in Futo Owerri and beyond.
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
 
        {/* Slide indicators */}
        <div className="absolute bottom-6 right-6 z-20 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "bg-[#F5A623] w-6"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>
 
      {/* ── STATS SECTION ────────────────────────────────────────────────── */}
      <section className="w-full bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>
 
    </div>
  );
};


export default Home
