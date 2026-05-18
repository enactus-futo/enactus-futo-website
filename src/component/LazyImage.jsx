import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";

const LazyImage = ({ src, alt, className = "", style = {} }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);

  // Intersection Observer — only loads image when it enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // stop watching once visible
        }
      },
      { threshold: 0.1, rootMargin: "100px" } // start loading 100px before visible
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} style={style}>

      {/* Shimmer placeholder — shows while loading */}
      {!loaded && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
          <div className="absolute inset-0 bg-linear-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
          <img
            src={logo}
            alt="loading"
            className="w-10 h-10 object-contain opacity-30 animate-pulse relative z-10"
          />
        </div>
      )}

      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center gap-2">
          <img src={logo} alt="error" className="w-10 h-10 object-contain opacity-30" />
          <span className="text-gray-400 text-xs">Image unavailable</span>
        </div>
      )}

      {/* Actual image — only loads src when visible */}
      {isVisible && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full  transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${className}`}
        />
      )}
    </div>
  );
};

export default LazyImage;