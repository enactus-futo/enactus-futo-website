import { useState } from "react";
import tl from "../assets/executive/tl.jpg";

import smo from "../assets/executive/smo.jpg";
import fd from "../assets/executive/fd.jpeg";
import td from "../assets/executive/td.jpg";
import sec from "../assets/executive/sec.jpeg";
import hr from "../assets/executive/hr.jpg";
import pm from "../assets/executive/pm.png";




const executives = [
  { id: 1, name: " Ebere Ndukwu", position: "Team Leader", image: tl, isLeader: true },
  { id: 2, name: "Johnpaul Anyanwu", position: "Project Manager", image: pm},
  { id: 3, name: "Praise Godwin", position: "Human Resource", image: hr },
  { id: 4, name: "Nmesoma Nnopu", position: "Team Secretary", image: sec },
  { id: 5, name: "Munachi Anyanwu", position: "Financial Director", image: fd },
  { id: 6, name: "Chiamaka Obasi", position: "Social Media Officer", image: smo },
  { id: 7, name: "Kingsley Okoronkwo", position: "Technical Director", image: td },
];

const ExecCard = ({ name, position, image }) => {
  const [imgError, setImgError] = useState(false);

  const getInitials = (fullName) => {
    return fullName.trim().split(/\s+/).map(n => n[0]).join("").toUpperCase();
  };

  return (
 
    <div className="relative rounded-[28px] overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-70 mx-auto aspect-3/4">
      {image && !imgError ? (
        <img
          src={image}
          alt={name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full bg-[#1e1b4b] flex items-center justify-center">
          <span className="font-bold text-[#F5A623] text-4xl">
            {getInitials(name)}
          </span>
        </div>
      )}

      {/* The Figma-style Plate */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-[#F5A623] px-4 py-2">
          <p className="text-[#1e1b4b] font-black text-base md:text-lg leading-tight uppercase tracking-tighter italic">
            {name}
          </p>
        </div>
        <div className="bg-[#1e1b4b] px-4 py-1.5">
          <p className="text-white/90 text-xs md:text-sm font-semibold">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};

const ExecutivesSection = () => {
  return (
    <section className="pb-20 bg-gray-100 px-6">
      <div className="max-w-7xl mx-auto">
       

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6 justify-items-center">
          {executives.map((exec) => (
            <ExecCard
              key={exec.id}
              name={exec.name}
              position={exec.position}
              image={exec.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutivesSection;






