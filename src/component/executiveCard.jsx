import { useState } from "react";
import nmeso from "../assets/nmeso.jpg";
import pm from "../assets/pm.png";
import smo from "../assets/smo.jpeg";



const executives = [
  { id: 1, name: " Ebere Ndukwu", position: "Team Leader", image: nmeso, isLeader: true },
  { id: 2, name: "Johnpaul Anyanwu", position: "Project Manager", image: pm },
  { id: 3, name: "Praise Godwin", position: "Human Resource", image: nmeso },
  { id: 4, name: "Nmesoma Nnopu", position: "Team Secretary", image: nmeso },
  { id: 5, name: "Munachi Anyanwu", position: "Financial Director", image: nmeso },
  { id: 6, name: "Chiamaka Obasi", position: "Social Media Officer", image: smo },
  { id: 7, name: "Kingsley Okoronkwo", position: "Technical Director", image: nmeso },
];

const getInitials = (name) =>
  name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

const ExecCard = ({ name, position, image, size = "normal" }) => {
  const [imgError, setImgError] = useState(false);
  const isLarge = size === "large";

  return (
    <div className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 ${
      isLarge ? "h-64 md:h-72"   : "h-52 sm:h-56 md:h-60"
    }`}>
      {image && !imgError ? (
        <img
          src={image}
          alt={name}
          onError={() => setImgError(true)}
        style={{ objectPosition: "center 22%" }}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full bg-[#1e1b4b] flex items-center justify-center">
          <span className={`font-bold text-[#F5A623] ${isLarge ? "text-5xl" : "text-4xl"}`}>
            {getInitials(name)}
          </span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-[#F5A623] px-3 py-1.5">
          <p className={`text-[#1e1b4b] font-bold leading-tight ${isLarge ? "text-lg" : "text-md"}`}>
            {name}
          </p>
        </div>
        <div className="bg-black/70 px-3 py-1">
          <p className="text-white/90 text-s">{position}</p>
        </div>
      </div>
    </div>
  );
};

const ExecutivesSection = () => {
  const leader = executives[0];
  const rest = executives.slice(1);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Row 1: Title + Leader */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 items-end">
          <div className="flex flex-col justify-end pb-2">
            
            <h2 className="text-[#1e1b4b] text-4xl md:text-6xl font-black leading-[1.05] uppercase">
              Meet The<br />
              <span className="text-[#F5A623]">2025 / 2026</span><br />
             Enactus  FUTO<br />
              Executives
            </h2>
          </div>
          <ExecCard name={leader.name} position={leader.position} image={leader.image} size="large" />
        </div>

        {/* Rows 2 & 3: 3+3 grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {rest.map((exec) => (
            <ExecCard key={exec.id} name={exec.name} position={exec.position} image={exec.image} />
          ))}
        </div>

        <p className="text-center text-gray-500 text-md md:text-lg leading-relaxed max-w-2xl mx-auto mt-10">
          Meet the current Enactus FUTO Executive Team  dedicated student leaders driving innovation,
          impact, and sustainable change. Guided by passion and teamwork, they coordinate initiatives
          that empower communities and strengthen the Enactus vision on campus and beyond.
        </p>
      </div>
    </section>
  );
};

export default ExecutivesSection;
