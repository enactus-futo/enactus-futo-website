import React from "react";
import { useState, useEffect } from "react";

import ContactForm from "../component/contactForm";
import FAQ from "../component/FAQ";
import Hero from "../component/hero";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../component/SEO.jsx";
import LazyImage from "../component/LazyImage";

const ContactUs = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Enactus FUTO , for partnerships, inquiries, or to join our team of student entrepreneurs."
        url="https://enactusfuto.org/contact"
      />

      <div className="w-full bg-gray-100">
        {/* hero section */}

        <section
          className="relative w-full overflow-hidden"
          style={{ height: "100dvh" }}
        >
          <Hero
            tag="Get In Touch"
            headline="Let's Build Something"
            highlight="Together"
            subtext="Whether you want to join, partner, or learn more  we'd love to hear from you."
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />

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
                We recruit new members at the beginning of each semester. Fill
                out the form or email us to learn about upcoming opportunities.
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
                <button className="bg-[#F5A623] hover:bg-[#eab308] text-[#1e1b4b] font-bold py-4 px-10 rounded-2xl transition-all active:scale-95 shadow-lg">
                  Click Link
                </button>
              </div>

              {/* Optional: Subtle decorative element if seen in figma background */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
