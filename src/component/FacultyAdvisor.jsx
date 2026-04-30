import React, { useState } from "react";
import fa from "../assets/executive/fa.jpeg";


const FacultyAdvisor = () => {
  const [imgError, setImgError] = useState(false);
  const photo = fa;

  return (
    <>
      {/* Faculty Advisor horizontal card */}
      <div className="max-w-5xl mx-auto mb-14 px-2">
         <div className="mb-10 text-center">
          <h2 className="text-[#1e1b4b] text-4xl md:text-5xl font-black leading-[1.05] uppercase">
            Meet The<br />
            <span className="text-[#F5A623]">2025 / 2026</span><br />
            Enactus FUTO<br />
            Team
          </h2>
          <p className="text-center text-gray-500 text-md md:text-lg leading-relaxed max-w-2xl mx-auto mt-10">
          Dedicated leaders driving innovation, impact, and sustainable change on campus and beyond.
        </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-gray-100 border border-gray-200 rounded-2xl p-5 sm:p-6">
          
          
          {/* Photo */}
          <div className=" w-50 h-58 md:w-70 md:h-74 shrink-0 rounded-xl overflow-hidden border border-gray-100">
            {photo && !imgError ? (
              <img
                src={photo}
                alt="Prof. Thaddues Ebringa"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full bg-[#1e1b4b] flex items-center justify-center">
                <span className="text-[#F5A623] text-2xl font-bold">FA</span>
              </div>
            )}
          </div>

          {/* Text */}
          <div className="text-center sm:text-left">
            <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[#F5A623] border border-[#F5A623] rounded px-2 py-0.5 mb-2">
              Faculty Advisor
            </span>
            <h3 className="text-[#1e1b4b] text-lg font-bold leading-snug">
              Prof. Thaddues Ebringa
            </h3>
            <p className="text-gray-500 text-md leading-relaxed mt-2 max-w-xl">
              A guiding force behind Enactus FUTO — providing mentorship, strategic direction,
              and unwavering support to shape our projects and keep us aligned with our mission of impact.
            </p>
          </div>
        </div>
      </div>

      {/* Divider with "Executive Team" label */}
      <div className="flex items-center gap-4 max-w-5xl mx-auto  px-2">
        <hr className="flex-1 border-t border-gray-200" />
        <span className="text-md font-semibold uppercase tracking-widest text-gray-400 whitespace-nowrap">
          Executive Team
        </span>
        <hr className="flex-1 border-t border-gray-200" />
      </div>
    </>
  );
};

export default FacultyAdvisor;