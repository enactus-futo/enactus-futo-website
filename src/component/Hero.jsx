import React from 'react'
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Picture1 from "../assets/pics1.png";
import Picture2 from "../assets/pics2.png";
import Picture3 from "../assets/pics3.png";
import logo from "../assets/logo.png";

const heroImages = [Picture1, Picture2, Picture3];




const Hero = () => {
      const [currentSlide, setCurrentSlide] = useState(0);
      const [imagesLoaded, setImagesLoaded] = useState(
        new Array(heroImages.length).fill(false),
      );
    
      // Auto-advance slideshow every 5 seconds
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 3000);
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
    <div className='w-full'>
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
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
                imagesLoaded[i] ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 h-full flex items-end pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl font-['Inter']  ">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Creating Positive Change{" "}
                <span className="text-[#F5A623]">
                  Through Entrepreneurial Action
                </span>
              </h1>
              <p className="text-white/80 text-md sm:text-lg mb-8 leading-relaxed max-w-lg">
                We're a community of student leaders committed to using business
                principles to create sustainable social impact in Futo Owerri
                and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/team"
                  className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#1B1464] font-semibold px-6 py-3 rounded-xl hover:bg-[#e09415] transition-colors duration-200"
                >
                  Join Our Team <ArrowRight size={16} />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white hover:text-[#1B1464] transition-colors duration-200"
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
    </div>
  )
}

export default Hero
