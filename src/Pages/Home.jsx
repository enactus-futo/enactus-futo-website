import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import ScrollToTop from "../component/ScrollToTop";
import Bulb from "../assets/bulb.png";
import Icon from "../assets/icon.png";
import Quote from "../assets/quoteIcon.png";

import People from "../assets/people.png";
import SDG from "../assets/sdg.png";
import logo from "../assets/logo.png";
import EcoFuel from "../assets/ecofuel.png";
import RunAm from "../assets/runam.png";
import Hero from "../component/hero";

import Praise from "../assets/praise.png";

const stats = [
  { target: 50, suffix: "+", label: "Active Members", icon: People },
  { target: 7, suffix: "", label: "Social Impact Projects", icon: Bulb },
  { target: 5000, suffix: "+", label: "Lives Impacted", icon: Icon },
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
  return (
    <div className="w-full">
      {/* hero section */}

      <section
        className="relative w-full overflow-hidden"
        style={{ height: "100dvh" }}
      >
        {" "}
        <Hero />
      </section>

      {/* Stats Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 ">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* about us */}
      <section className="w-full bg-yellow-100 py-12 md:py-16">
        <div className=" mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1B1464] mb-6">
              About Us
            </h2>
            <p className="text-gray-600 text-lg md:text-2xl leading-relaxed mb-8">
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
      <section className="w-full  mx-auto  py-16 px-6 md:px-12 lg:px-24 bg-white font-sans">
        {/* Header Section */}
        <div className="mb-3">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1B1464]">
              Our Projects
            </h2>
            <a
              href="#"
              className="text-sm font-medium text-orange-500 hover:underline flex items-center gap-2"
            >
              View All Projects <span className="text-lg">→</span>
            </a>
          </div>
          <p className="text-gray-600 text-lg md:text-2xl  mt-4 max-w-2xl leading-relaxed text-center mx-auto">
            Explore our Enactus FUTO projects, where ideas are transformed into
            impactful solutions that address real world problems and empower
            communities.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stack-container">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer stack-card md:static md:mb-0"
              style={{
                top: `calc(80px + ${index * 200}px)`,
                zIndex: index + 1,
              }}
            >
              {/* Wrap the inner content in a div with a solid background 
          to hide the card underneath it properly. 
      */}
              <div className="bg-white rounded-2xl overflow-hidden mb-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 min-h-150 ">
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="space-y-4 p-4 md:p-6 bg-white">
                  <span
                    className={`${project.badgeColor} text-white text-xs px-4 py-1 rounded-full font-medium inline-block`}
                  >
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold text-gray-800">
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-lg text-gray-500 leading-relaxed">
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
            </div>
          ))}
        </div>
      </section>
      {/* upcoming event */}
      <section className="bg-[#1e1b4b] py-16 px-6 md:px-12 lg:px-24">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
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

                <p className="text-gray-600 leading-relaxed text-sm md:text-lg">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-center font-bold text-[#1B1464]">
            Testimonials
          </h2>
          <p className="text-gray-600  m-4 text-lg md:text-2xl  leading-relaxed text-center mx-auto">
            Explore our Enactus FUTO projects, where ideas are transformed into
            impactful solutions that address real world problems and empower
            communities.
          </p>

          {/* Grid Layout: 1 col on mobile, 2 cols on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="relative bg-white border border-gray-100 rounded-[40px] p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center gap-6"
              >
                {/* Quote Icon (Top Right) */}
                <div className="absolute top-6 md:top-2 right-8   h-8 w-8 opacity-60">
                  <img src={Quote} alt="" />
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
                <div className="flex-1  md:px-4 ">
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
      <section className="bg-white ">
        <div className="w-full py-16 px-6 md:px-18 lg:px-24 mx-auto">
          {/* The CTA Card */}
          <div className="bg-[#1e1b4b] rounded-[48px] p-12 md:p-24 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Ready to Make an Impact?
            </h2>

            <p className="text-white/90 text-sm md:text-lg max-w-xl mx-auto leading-relaxed mb-12 font-light">
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
