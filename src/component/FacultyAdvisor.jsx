import React, { useState } from "react";
import fa from "../assets/executive/fa.jpeg";


const FacultyAdvisor = () => {
  const [imgError, setImgError] = useState(false);
 
  const photo = fa; 

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-lg mx-auto">

        <h2 className="text-[#1e1b4b] text-3xl font-bold text-center mb-8">
          Faculty Advisor
        </h2>

        {/* Card */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 text-center">

          {/* Photo */}
          <div className="w-48 h-56 mx-auto rounded-2xl overflow-hidden border-2 border-gray-100 mb-6">
            {photo && !imgError ? (
              <img
                src={photo}
                alt="Faculty Advisor"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full bg-[#1e1b4b] flex items-center justify-center">
                <span className="text-[#F5A623] text-4xl font-bold">FA</span>
              </div>
            )}
          </div>

          {/* Name & title — update when you have the details */}
          <h3 className="text-[#1e1b4b] text-xl font-bold">Prof. Thaddues Ebringa</h3>
          <p className="text-[#F5A623] text-sm font-semibold uppercase tracking-wider mt-1 mb-6">
            Faculty Advisor
          </p>

          {/* Divider */}
          <div className="w-12 h-0.5 bg-[#F5A623] mx-auto mb-6" />

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-3">
            Meet our Faculty Advisor, a guiding force behind Enactus FUTO who provides
            mentorship, strategic direction, and unwavering support to our team.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            With a wealth of experience and insight, helps shape our projects and ensure
            we stay aligned with our mission of impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FacultyAdvisor;