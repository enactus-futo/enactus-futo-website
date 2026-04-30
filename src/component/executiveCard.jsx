import { useState } from "react";
import tl from "../assets/executive/tl.png";

import smo from "../assets/executive/smo.jpeg";
import fd from "../assets/executive/fd.jpeg";
import td from "../assets/executive/td.jpeg";
import sec from "../assets/executive/sec.jpg";
import hr from "../assets/executive/hr.png";
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

  return (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 w-full aspect-[3/4]">

      {image && !imgError ? (
        <img
          src={image}
          alt={name}
          onError={() => setImgError(true)}
          style={{ objectPosition: "center 15%" }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full bg-[#1e1b4b] flex items-center justify-center">
          <span className="font-bold text-[#F5A623] text-4xl">
            {getInitials(name)}
          </span>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-[#F5A623] px-3 py-1.5">
          <p className="text-[#1e1b4b] font-bold text-md md:text-lgleading-tight">{name}</p>
        </div>
        <div className="bg-black/70 px-3 py-1">
          <p className="text-white/90 text-md md:text-lg">{position}</p>
        </div>
      </div>
    </div>
  );
};

const ExecutivesSection = () => {
  const firstFour = executives.slice(0, 4);
  const lastThree = executives.slice(4);

  return (
    <section className="py-14 pt-2 px-4 md:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Row 1: 1 col mobile → 4 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 mb-10 md:mb-6 px-10 ">
          {firstFour.map((exec) => (
            <ExecCard
              key={exec.id}
              name={exec.name}
              position={exec.position}
              image={exec.image}
            />
          ))}
        </div>

        {/* Row 2: 1 col mobile → 3 col desktop, centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-6 md:max-w-[75%] md:mx-auto px-10">
          {lastThree.map((exec) => (
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






