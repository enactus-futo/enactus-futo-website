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
import EcoFuel from "../assets/ecoFuel.png";
import RunAm from "../assets/runAm.png";
import UniClear from "../assets/uniclear.jpeg";
import Hero from "../component/Hero";
import SEO from "../component/SEO.jsx";
import LazyImage from "../component/LazyImage";


import testimonials1 from "../assets/testimonial1.jpeg";
import testimonials2 from "../assets/testimonial2.jpeg";
import testimonials3 from "../assets/testimonial3.jpeg";


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
    image: UniClear,
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
      "A week of celebration of innovation, leadership, and impact bringing students together through projects, outreach, and activities focused on creating sustainable change in our community.",
  },
  {
    id: 2,
    date: "Anticipate...",
    title: "Enactus National Competition",
    description:
      "Representing our institution at the Enactus National Competition, where our projects were showcased on a national stage, demonstrating real impact and sustainable solutions.",
  },
  {
    id: 3,
    date: "Anticipate",
    title: "Clean Up drive",
    description:
      "A community driven environmental initiative focused on promoting cleanliness, sustainability, and awareness through active participation and responsible waste management.",
  },
];

// testimonials
const testimonials = [
  {
    id: 1,
    name: "Chidum Vitus Obinwa",
    role: "FOUNDER, CHIDUM TECH.",
   quote: [
  "Enactus is one of the best societies at FUTO, and it taught me how to run a business the right way.After working with a few failed startups, Enactus showed me the full process — from ideation and feasibility studies, all the way to marketing across B2B, B2C, and even B2G channels — giving any venture a much stronger chance of succeeding in the market.",
  "My time with Enactus was all about learning what I actually needed to know. I'm proud to have been part of a community of brilliant minds, and I got the most out of it by participating actively."
],
    image: testimonials2,
  },
  {
    id: 2,
    name: "Gennersaret Adaeze Ajuka",
    role: "PEOPLE MANAGER, WINICH FARMS.",
    quote: [
    "Enactus refined me into a problem-solver with a strong bias for action and social impact. Through collaborative projects like the eco-friendly briquettes initiative, \"Becoming a Fisher,\" and my brainchild, Switch360, I learned to apply business thinking to real community challenges while building leadership, communication, and resilience.",
    "These experiences now shape my work as Founder of NextGen Digital Foundation, where I focus on providing practical, execution-driven digital education and real-world problem solving for African youths.",
    "Enactus taught me that disciplined teamwork, anchored in clear purpose and consistent execution, is what transforms ideas into real, measurable impact — and this principle underpins everything we are building at NextGen."
  ],
    image: testimonials3,
  },
  {
    id: 3,
    name: "Chidiebere Ikenna Ernest",
    role: "PEOPLE MANAGER, WINICH FARMS.",
   quote: [
  "Enactus FUTO shaped me and prepared me for the interesting world of corporate business.",
  "My first sale to a real customer was as an Enactus Marketing team member. Today, I have sold and built valuable relationships with over 10,000 retail and enterprise clients interested in using services in the financial technology sector.",
  "When I look back, I remember that Enactus FUTO was the springboard that set me in motion."
],
    image: testimonials1,
  },
    

];

const Home = () => {
  return (
    <>
      <SEO
      title="Home"
      description="Enactus FUTO ,empowering students at Federal University of Technology Owerri to create positive change through entrepreneurial action."
      keywords="Enactus FUTO, FUTO student organizations, FUTO clubs, Federal University Technology Owerri, Enactus Nigeria, student entrepreneurship FUTO Owerri"
      url="https://enactusfuto.org"
    />
    <div className="w-full bg-gray-100">
      {/* hero section */}

      <section
        className="relative w-full overflow-hidden"
        style={{ height: "100dvh" }}
      >
        {" "}
        <Hero
          tag="Community Impact"
          headline="Creating Positive Change"
          highlight="Through Entrepreneurial Action"
          subtext="We're a community of student leaders committed to using business principles to create sustainable social impact in FUTO and beyond."
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        />
      </section>

      {/* Stats Section */}
      <section className="w-full  py-12 md:py-16">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 ">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* about */}
      <section className="w-full  py-12 md:py-16">
        <div className="mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em] mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Who We Are
            </p>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-[#1B1464] mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              About Us
            </h2>
            <p
              className="text-[#4a4a6a] text-lg md:text-xl leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
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
              className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#1B1464] font-bold px-6 py-3 rounded-md hover:bg-[#e09415] transition-colors duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-24 ">
        {/* Header — fully centered */}
        <div className="text-center mb-12">
          <p className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.25em] mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1B1464] mb-4">
            Our Projects
          </h2>
          <div className="w-12 h-1 bg-[#F5A623] mx-auto mb-6 rounded-full" />
          <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed mx-auto">
            Explore our Enactus FUTO projects, where ideas are transformed into
            impactful solutions that address real world problems and empower
            communities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer  md:static md:mb-0 flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{
                top: `calc(80px + ${index * 200}px)`,
                zIndex: index + 1,
              }}
            >
              {/* Image with overlay on hover */}
              <div className="relative overflow-hidden h-56">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category badge over image */}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 gap-2">
                <span
                  className={`  ${project.badgeColor}  text-white text-xs px-3 py-1 rounded-full font-medium inline-block w-fit`}
                >
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-[#1B1464] leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center pt-3 border-t border-gray-100 mt-2">
                  <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-wide">
                    {project.metric}
                  </span>
                  {/* <div className="w-8 h-8 rounded-full bg-[#1B1464]/5 flex items-center justify-center group-hover:bg-[#F5A623] transition-colors duration-300">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#1B1464] group-hover:text-white transition-colors duration-300"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* upcoming event */}
      <section className="bg-[#1e1b4b] py-16 px-6 md:px-12 lg:px-24">
        <div className="w-full mx-auto">
          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-10"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Upcoming Events
          </h2>

          
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar">
            {events.map((event) => (
              <div
                key={event.id}
                className="min-w-[85%] md:min-w-100 bg-white rounded-4xl p-8 md:p-10 snap-start flex flex-col justify-center min-h-55"
              >
                <span className="text-indigo-900/60 font-medium mb-4 block">
                  {event.date}
                </span>

                <h3
                  className="text-2xl font-bold text-[#1e1b4b] mb-4"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {event.title}
                </h3>

                <p
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-gray-600 leading-relaxed text-sm md:text-lg"
                >
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="text-3xl md:text-5xl text-center font-bold text-[#1B1464] pb-20"
          >
            Testimonials
          </h2>

          {/* Grid Layout: 1 col on mobile, 2 cols on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="relative bg-white border border-gray-100 rounded-[40px] p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center gap-6"
              >
                {/* Quote Icon (Top Right) */}
                <div className="absolute top-6 md:top-2 right-8   h-8 w-8 opacity-60">
                  <LazyImage src={Quote} alt="" />
                </div>

                {/* Profile Image */}
                <div className="shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden ">
                    <LazyImage
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="mb-6 space-y-3">
 {Array.isArray(t.quote)
  ? t.quote.map((para, i) => (
      <p key={i} className="text-gray-600 text-[15px] leading-relaxed italic">
        {para}
      </p>
    ))
  : (
    <p className="text-gray-600 text-[15px] leading-relaxed italic">
      {t.quote}
    </p>
  )
}
</div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section >
        <div className="w-full py-16 px-6 md:px-18 lg:px-24 mx-auto">
          {/* The CTA Card */}
          <div className="bg-[#1e1b4b] rounded-[48px] p-12 md:p-24 text-center">
            <h2
              style={{ fontFamily: "'Syne', sans-serif" }}
              className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight"
            >
              Ready to Make an Impact?
            </h2>

            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-white/90 text-sm md:text-lg max-w-xl mx-auto leading-relaxed mb-12 font-light"
            >
              Join our team of passionate students working to create positive
              change in our community through entrepreneurial action.
            </p>

            {/* The Button - Matches Figma's gold and rounded style */}
            <button className="bg-[#FFB800] hover:bg-[#e6a600] text-[#1e1b4b] font-bold py-4 px-8 rounded-2xl flex items-center gap-2 mx-auto transition-transform active:scale-95">
              <Link to="/team">
                Get Involved
                <span className="text-xl">→</span>
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
    </>
    
  );
};

export default Home;
