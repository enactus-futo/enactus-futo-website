import React from 'react'
import {useState, useEffect} from "react"
import Picture1 from "../assets/pics1.jpeg";
import Picture2 from "../assets/pics2.jpeg";
import Picture3 from "../assets/pics3.jpeg";
import Picture4 from "../assets/pics4.jpeg";
import Picture5 from "../assets/pics5.jpeg";
import ContactForm from '../component/contactForm';
import FAQ from '../component/FAQ';

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";


const heroImages = [Picture1, Picture2, Picture3, Picture4, Picture5];

const ContactUs = () => {
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
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Connect With Enactus FUTO
               
              </h1>
              <p className="text-white/80 text-sm sm:text-base mb-8 leading-relaxed max-w-lg">
                We're a community of student leaders committed to using business
                principles to create sustainable social impact in Futo Owerri
                and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/team"
                  className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#1B1464] font-semibold px-6 py-3 rounded-lg hover:bg-[#e09415] transition-colors duration-200"
                >
                  Join Our Team <ArrowRight size={16} />
                </Link>
                {/* <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-[#1B1464] transition-colors duration-200"
                >
                  View Our Projects
                </Link> */}
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

      {/* contact form */}
      <section className="py-12 px-4  md:px-8 md:bg-gray-50">
        <div className="w-full md:max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>
        </section>


        {/* FAQ  */}
        <section className="py-12 px-4  md:px-8 md:bg-gray-50">
        <div className="w-full md:max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQ />
      </div>
        </section>

  {/* join the team */}
        <section className=" py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Main Card Container */}
        <div className="bg-[#1e1b4b] rounded-[40px] p-10 relative overflow-hidden">
          
          {/* Header */}
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          
          {/* Description */}
          <p className="text-white/70 text-base leading-relaxed mb-8">
            We recruit new members at the beginning of each semester. 
            Fill out the form or email us to learn about upcoming opportunities.
          </p>

          {/* Status Indicator */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            <span className="text-white text-lg font-medium">
              Currently accepting applications
            </span>
          </div>

          {/* Button - Aligned to bottom right like Figma */}
          <div className="flex justify-end">
            <button className="bg-[#fbbd08] hover:bg-[#eab308] text-[#1e1b4b] font-bold py-4 px-10 rounded-2xl transition-all active:scale-95 shadow-lg">
              Click Link
            </button>
          </div>

          {/* Optional: Subtle decorative element if seen in figma background */}
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default ContactUs

