import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import Picture1 from "../assets/pics1.jpeg";
import Picture2 from "../assets/pics2.jpeg";
import Picture3 from "../assets/pics3.jpeg";
import Picture4 from "../assets/pics4.jpeg";
import Picture5 from "../assets/pics5.jpeg";
import logo from "../assets/logo.png";

const heroSlides = [Picture1, Picture2, Picture3];

const Hero = ({
  tag,
  headline,
  highlight,
  subtext,
  primaryLink,
  primaryLabel,
  secondaryLink,
  secondaryLabel,
}) => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [direction, setDirection] = useState("next"); // "next" | "prev"
  const [animating, setAnimating] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(
    new Array(heroSlides.length).fill(false),
  );
  const timerRef = useRef(null);

  // Preload images
  useEffect(() => {
    heroSlides.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () =>
        setImagesLoaded((p) => {
          const u = [...p];
          u[i] = true;
          return u;
        });
    });
  }, []);

  const goTo = (index, dir = "next") => {
    if (animating || index === current) return;
    setDirection(dir);
    setPrev(current);
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, 900);
  };

  const goNext = () => goTo((current + 1) % heroSlides.length, "next");
  const goPrev = () =>
    goTo((current - 1 + heroSlides.length) % heroSlides.length, "prev");

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(goNext, 5000);
    return () => clearInterval(timerRef.current);
  }, [current, animating]);

  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&display=swap');
       .hero-font { font-family: 'Plus Jakarta Sans', sans-serif; }
         .body-font { font-family: 'DM Sans', sans-serif; }
      
 
       .hero-slide-enter-next { animation: slideInRight 0.9s cubic-bezier(0.77, 0, 0.175, 1) forwards; }
       .hero-slide-enter-prev { animation: slideInLeft 0.9s cubic-bezier(0.77, 0, 0.175, 1) forwards; }
       .hero-slide-exit-next  { animation: slideOutLeft 0.9s cubic-bezier(0.77, 0, 0.175, 1) forwards; }
       .hero-slide-exit-prev  { animation: slideOutRight 0.9s cubic-bezier(0.77, 0, 0.175, 1) forwards; }
 
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
        @keyframes slideOutLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); }
          to   { transform: translateX(100%); }
        }
 
        .hero-text-enter {
          animation: textUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;
        }
        @keyframes textUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
 
        .hero-tag-enter {
          animation: textUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
        }
        .hero-btn-enter {
          animation: textUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.55s both;
        }
 
     
     
 
        .progress-bar {
          animation: progress 5s linear forwards;
        }
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>

      <section
        className="relative w-full overflow-hidden body-font"
        style={{ height: "100dvh" }}
      >
        {/*Slides */}
        {heroSlides.map((src, i) => {
          const isActive = i === current;
          const isPrev = i === prev;

          if (!isActive && !isPrev) return null;

          return (
            <div
              key={i}
              className={`absolute inset-0 ${
                isActive
                  ? direction === "next"
                    ? "hero-slide-enter-next"
                    : "hero-slide-enter-prev"
                  : direction === "next"
                    ? "hero-slide-exit-next"
                    : "hero-slide-exit-prev"
              }`}
              style={{ zIndex: isActive ? 2 : 1 }}
            >
              {/* Loading placeholder */}
              {!imagesLoaded[i] && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
                  <img
                    src={logo}
                    alt="Loading"
                    className="w-14 h-14 object-contain animate-pulse"
                  />
                  <div className="flex gap-1.5">
                    {[0, 150, 300].map((d) => (
                      <span
                        key={d}
                        className="w-2 h-2 bg-[#F5A623] rounded-full animate-bounce"
                        style={{ animationDelay: `${d}ms` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <img
                src={src}
                alt={`slide ${i + 1}`}
                className={`w-full h-full object-cover transition-opacity duration-500 ${imagesLoaded[i] ? "opacity-100" : "opacity-0"}`}
              />
            </div>
          );
        })}

        {/* Overlays*/}
        {/* Dark gradient from left */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.1) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 z-10"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
          }}
        />
        <button
          onClick={goPrev}
          className="hidden lg:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-white/30 items-center justify-center text-white hover:border-[#F5a623] hover:text-[#F5A623] transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronRight size={20} className="rotate-180" />
        </button>

        {/*  RIGHT Arrow */}

        <button
          onClick={goNext}
          className="hidden lg:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-white/30 items-center justify-center text-white hover:border-[#F5A623] hover:text-[#F5a623] transition-all duration-200 backdrop-blur-sm "
        >
          <ChevronRight size={20} />
        </button>

        {/*  Content*/}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
            <div className="max-w-2xl">
              {/* Tag pill */}
              <div
                key={`tag-${current}`}
                className="hero-tag-enter inline-flex items-center gap-2 mb-5"
              >
                <span className="w-6 h-px bg-[#F5A623]" />
                <span className="text-[#F5A623] text-xs font-semibold uppercase tracking-[0.2em]">
                  {tag}
                </span>
              </div>

              {/* Headline */}
              <div key={`h-${current}`} className="hero-text-enter mb-6">
                <h1 className="hero-font text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-none mb-2">
                  {headline}
                </h1>
                <h1 className="hero-font text-3xl sm:text-4xl lg:text-6xl font-extrabold text-[#F5A623] leading-none">
                  {highlight}
                </h1>
              </div>

              {/* Sub */}
              <p
                key={`p-${current}`}
                className="hero-text-enter text-white/70 text-base sm:text-lg leading-relaxed max-w-md mb-10"
                style={{ animationDelay: "0.45s" }}
              >
                {subtext}
              </p>

              {/* Buttons */}
              <div
                key={`btn-${current}`}
                className="hero-btn-enter flex flex-col sm:flex-row gap-3"
              >
                <Link
                  to="/team"
                  className="group inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#1B1464] font-bold px-7 py-3.5 rounded-xl hover:bg-white transition-colors duration-200 text-sm"
                >
                  Join Our Team
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
                {/* <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-7 py-3.5 rounded-xl hover:border-white hover:bg-white/10 transition-all duration-200 text-sm backdrop-blur-sm"
                >
                  View Our Projects
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        {/*  Bottom Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
            {/* Slide counter */}
            {/* <div className="flex items-center gap-3">
              <span className="hero-font text-white text-2xl font-bold tabular-nums">
                0{current + 1}
              </span>
              <div className="w-16 h-px bg-white/20 relative overflow-hidden">
                <div key={current} className="progress-bar absolute top-0 left-0 h-full bg-[#F5A623]" />
              </div>
              <span className="hero-font text-white/40 text-sm tabular-nums">
                0{heroSlides.length}
              </span>
            </div> */}

            {/* Nav arrows */}
            <div className="flex lg:hidden gap-2 ">
              <button
                onClick={goPrev}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-[#F5A623] hover:text-[#F5A623] transition-all duration-200 backdrop-blur-sm"
              >
                <ChevronRight size={18} className="rotate-180" />
              </button>
              <button
                onClick={goNext}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-[#F5A623] hover:text-[#F5A623] transition-all duration-200 backdrop-blur-sm"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/*Vertical slide dots (right side) */}
        <div className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-[#F5A623] h-8 w-1.5"
                  : "bg-white/30 h-1.5 w-1.5 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
