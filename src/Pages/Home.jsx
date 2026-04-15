import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Picture1 from "../assets/pics1.png";
import Picture2 from "../assets/pics2.png";
import Picture3 from "../assets/pics3.png";
import ScrollToTop from "../component/ScrollToTop";
import Bulb from "../assets/bulb.png";
import Icon from "../assets/icon.png";

import People from "../assets/people.png";
import SDG from "../assets/sdg.png";
import logo from "../assets/logo.png";
import EcoFuel from "../assets/ecofuel.png";
import RunAm from "../assets/runam.png";

import Praise from "../assets/praise.png";

const heroImages = [Picture1, Picture2, Picture3];

const stats = [
  { target: 50, suffix: "+", label: "Active Members", icon: People },
  { target: 7, suffix: "", label: "Social Impact Projects", icon: Icon },
  { target: 5000, suffix: "+", label: "Lives Impacted", icon: Bulb },
  { target: 7, suffix: "", label: "SDGs Addressed", icon: SDG },
];

// Count-up logic lives here — no separate file needed
const StatCard = ({ target, suffix, label, icon }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const duration = 2000;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };

    requestAnimationFrame(animate);
  }, [started, target]);

  return (
    <div ref={ref} className="flex flex-col items-center  gap-2 p-6">
      <img src={icon} alt={label} className="w-10 h-10 mb-1" />
      <span className="text-3xl md:text-4xl font-bold text-[#1B1464]">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="text-gray-500 text-sm text-center">{label}</span>
    </div>
  );
};

// Enactus FUTO projects
const projects = [
  {
    id: 1,
    title: "EcoFuel",
    category: "Environment",
    description:
      "EcoFuel is an innovative Enactus FUTO project aimed at addressing waste management and energy challenges by converting waste into eco-friendly fuel. The project promotes sustainability, reduces environmental pollution, and creates a cost-effective energy solution for local communities.",
    metric: "130kg waste recycled weekly",
    image: EcoFuel,
    badgeColor: "bg-orange-400",
  },
  {
    id: 2,
    title: "RunAm",
    category: "Environment",
    description:
      "RunAm is a technology-based logistics platform designed to transform transportation systems by improving efficiency, reducing costs, and promoting environmentally sustainable delivery solutions.",
    metric: "0.2CO2 per km saved",
    image: RunAm,
    badgeColor: "bg-orange-400",
  },
  {
    id: 3,
    title: "UniClear",
    category: "Education",
    description:
      "Uniclear is a clearance studio designed specifically for students and universities, providing structured solutions for decluttering, item clearance, and sustainable disposal of unwanted belongings in campus environments.",
    metric: "500 students reached",
    image: "https://via.placeholder.com/400x300?text=Project+3",
    badgeColor: "bg-blue-400",
  },
];

// Enactus FUTO events
const events = [
  {
    id: 1,
    date: "Anticipate...",
    title: "Enactus Week 2026",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    date: "FAnticipate...",
    title: "Enactus National Competition",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    date: "March 20, 2026",
    title: "Social Innovation Hub",
    description: "Learning the ropes of social business and impact assessment.",
  },
  {
    id: 4,
    date: "March 20, 2026",
    title: "Social Innovation Hub",
    description: "Learning the ropes of social business and impact assessment.",
  },
];

// testimonials
const testimonials = [
  {
    id: 1,
    name: "Praise Godwin",
    role: "PEOPLE MANAGER, WINICH FARMS.",
    quote:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: Praise,
  },
  {
    id: 2,
    name: "Praise Godwin",
    role: "PEOPLE MANAGER, WINICH FARMS.",
    quote:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: Praise,
  },
  {
    id: 3,
    name: "Praise Godwin",
    role: "PEOPLE MANAGER, WINICH FARMS.",
    quote:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: Praise,
  },
  {
    id: 4,
    name: "Praise Godwin",
    role: "PEOPLE MANAGER, WINICH FARMS.",
    quote:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: Praise,
  },
];

const Home = () => {
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
    <div className="w-full">
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

      {/* Stats Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* about us */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className=" mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B1464] mb-6">
              About Us
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Enactus FUTO is part of a global network of student, academic, and
              business leaders committed to using the power of entrepreneurial
              action to transform lives and shape a better, more sustainable
              world.
              <span>
                {" "}
                <br />
                We enable students to develop innovative solutions to real-world
                challenges while building essential leadership, teamwork, and
                business skills.
              </span>
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#1B1464] font-semibold px-6 py-3 rounded-md hover:bg-[#e09415] transition-colors duration-200"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="w-full mx-auto p-6 md:p-12 bg-white font-sans">
        {/* Header Section */}
        <div className="mb-3">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b]">
              Our Projects
            </h2>
            <a
              href="#"
              className="text-sm font-medium text-orange-500 hover:underline flex items-center gap-2"
            >
              View All Projects <span className="text-lg">→</span>
            </a>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed text-center mx-auto">
            Explore our Enactus FUTO projects, where ideas are transformed into
            impactful solutions that address real world problems and empower
            communities.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Card Image Container */}
              <div className="rounded-2xl overflow-hidden mb-4 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                {/* Content */}

                <div className="space-y-3 p-3 md:p-6">
                  <span
                    className={`${project.badgeColor} text-white text-xs px-4 py-1 rounded-full font-medium inline-block`}
                  >
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold text-gray-800">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-tight">
                      {project.metric}
                    </span>
                    <div className="text-gray-400 group-hover:translate-x-1 transition-transform">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming events */}
            </div>
          ))}
        </div>
      </section>
       {/* upcoming event */}
      <section className="bg-[#1e1b4b] py-16 px-6 md:px-12 lg:px-24">
        <div className="w-full mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10">
            Upcoming Events
          </h2>

          {/* Horizontal Scroll Container 
            'overflow-x-auto' enables scrolling.
            'scrollbar-hide' is a custom utility .
        */}
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar">
            {events.map((event) => (
              <div
                key={event.id}
                className="min-w-[85%] md:min-w-100 bg-white rounded-4xl p-8 md:p-10 snap-start flex flex-col justify-center min-h-55"
              >
                <span className="text-indigo-900/60 font-medium mb-4 block">
                  {event.date}
                </span>

                <h3 className="text-2xl font-bold text-[#1e1b4b] mb-4">
                  {event.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Grid Layout: 1 col on mobile, 2 cols on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="relative bg-white border border-gray-100 rounded-[40px] p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center gap-6"
              >
                {/* Quote Icon (Top Right) */}
                <div className="absolute top-6 right-8 text-yellow-200 opacity-60">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H4.017V21H6.017Z" />
                  </svg>
                </div>

                {/* Profile Image */}
                <div className="shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-[#1e1b4b] text-lg leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pt-10 pb-20 px-4 md:px-10">
        <div className="max-w-5xl mx-auto">
          {/* The CTA Card */}
          <div className="bg-[#1e1b4b] rounded-[48px] p-12 md:p-24 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Ready to Make an Impact?
            </h2>

            <p className="text-white/90 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-12 font-light">
              Join our team of passionate students working to create positive
              change in our community through entrepreneurial action.
            </p>

            {/* The Button - Matches Figma's gold and rounded style */}
            <button className="bg-[#FFB800] hover:bg-[#e6a600] text-[#1e1b4b] font-bold py-4 px-8 rounded-2xl flex items-center gap-2 mx-auto transition-transform active:scale-95">
              Get Involved
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
