import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Picture1 from "../assets/pics1.png";
import { Trophy, Medal, Award } from "lucide-react";

import Icon from "../assets/MissionIcon.png";

import { Frown } from "lucide-react";
import Hero from "../component/hero";
import GlobalImage from "../assets/pics1.png";



const About = () => {

  // core values data
  const coreValues = [
    {
      id: 1,
      title: "Integrity",
      desc: "Acting with honesty and transparency in all our endeavors",
      number: 1,
      pos: "left",
    },
    {
      id: 2,
      title: "Passion",
      desc: "Driven by our commitment to making a meaningful difference",
      number: 2,
      pos: "right",
    },
    {
      id: 3,
      title: "Innovation",
      desc: "Creating unique solutions to complex social challenges",
      number: 3,
      pos: "left",
    },
    {
      id: 4,
      title: "Collaboration",
      desc: "Working together to achieve greater impact",
      number: 4,
      pos: "right",
    },
  ];

const achievements = [
  {
    id: 1,
    title: "2nd Runner Up National Finale 2025",
    subtitle: "Competed at the Enactus Nigeria National Competition",
    icon: Medal,
    color: "text-gray-500",
    bg: "bg-gray-100",
  },
  {
    id: 2,
    title: "Schneider Champions 2024",
    subtitle: "Recognized for outstanding first-year performance",
    icon: Trophy,
    color: "text-yellow-500",
    bg: "bg-yellow-100",
  },
  {
    id: 3,
    title: "Action for Impact Award",
    subtitle: "Awarded for community development excellence",
    icon: Award,
    color: "text-green-500",
    bg: "bg-green-100",
  },
];
  return (
    <div className="w-full">
      {/* hero section */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "100dvh" }}
      >
        <Hero />
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {[
          {
            title: "Our Mission",
            content:
              "To enable progress through entrepreneurial action by empowering students to create community impact that improves quality of life and standard of living for people in need.\n\nWe develop the next generation of entrepreneurial leaders and social innovators through action-based learning and real-world project experience.",
          },
          {
            title: "Our Vision",
            content:
              "A world where students harness the power of entrepreneurial action to transform lives and shape a better, more sustainable future.\n\nThrough our projects and initiatives, we strive to create lasting positive change in FUTO and contribute to the global Enactus movement's impact.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="flex justify-center mb-5">
              <div className="w-12 h-12 md:w-20 md:h-20 bg-[#F5A623]/10 rounded-full flex items-center justify-center">
                <img src={Icon} alt="" className="w-6 h-6 object-contain" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B1464] mb-3">
              {item.title}
            </h2>

            {/* Content */}
            <p className="text-gray-500 text-sm md:text-lg leading-relaxed whitespace-pre-line max-w-md mx-auto">
              {item.content}
            </p>
          </div>
        ))}
      </section>

      {/*  OUR CORE VALUES SECTION */}
      <section className="bg-[#1e1b4b] py-16 px-6 rounded-[20px] max-w-6xl mx-auto mb-16">
        <h2 className="text-white text-center text-2xl md:text-3xl font-bold mb-12">
          Our Core Values
        </h2>
        <div className="max-w-xl mx-auto space-y-6">
          {coreValues.map((val) => (
            <div
              key={val.id}
              className="relative border border-white/20 rounded-2xl p-6 flex items-center gap-4"
            >
              {val.pos === "left" && (
                <div className="w-10 h-10 bg-yellow-500 rounded-full shrink-0 flex items-center justify-center text-[#1e1b4b] font-bold">
                  {val.number}
                </div>
              )}
              <div
                className={
                  val.pos === "right" ? "text-left pr-12" : "text-left"
                }
              >
                <h4 className="text-white font-bold text-xl md:text-2xl">{val.title}</h4>
                <p className="text-white/60 text-sm md:text-lg mt-1 leading-snug">
                  {val.desc}
                </p>
              </div>
              {val.pos === "right" && (
                <div className="absolute right-6 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-[#1e1b4b] font-bold">
                  {val.number}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/*  OUR ACHIEVEMENTS SECTION (Horizontal Scroll) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-[#1e1b4b] text-3xl md:text-4xl font-bold mb-8">
            Our Achievements
          </h2>

          {/* Scroll Container */}
          <div className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="min-w-55 sm:min-w-65 md:min-w-70 border border-gray-100 rounded-3xl p-6 sm:p-8 text-center snap-start shadow-sm flex flex-col items-center bg-white hover:shadow-md transition-all duration-300"
              >
                {/* Icon */}
                  <div className={`p-4 rounded-full ${ach.bg}`}>
        <ach.icon className={`w-5 h-5 md:w-8 md:h-8 ${ach.color}`} />
      </div>

                {/* Title */}
                <h4 className="text-[#1e1b4b] font-semibold text-lg md:text-xl leading-tight mb-2">
                  {ach.title}
                </h4>

                {/* Subtitle */}
                <p className="text-gray-400 text-sm  md:text-lg">
                  {ach.subtitle}
                </p>
              </div>
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
             Join Group
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
