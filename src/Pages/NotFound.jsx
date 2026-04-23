import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#1B1464] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em] mb-4">
        Error 404
      </p>
      <h1 className="text-white text-6xl sm:text-8xl font-black mb-4"
        style={{ fontFamily: "'Syne', sans-serif" }}>
        Lost?
      </h1>
      <p className="text-white/50 text-base max-w-md mb-10">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/"
        className="inline-flex items-center gap-2 bg-[#F5A623] text-[#1B1464] font-bold px-6 py-3 rounded-xl hover:bg-white transition-colors duration-200">
        Back to Home <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default NotFound;