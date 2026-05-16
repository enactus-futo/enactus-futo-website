import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import Picture1 from "../assets/gallery/pics1.jpeg";
import Picture2 from "../assets/gallery/pics2.jpeg";
import Picture3 from "../assets/gallery/pics3.jpeg";
import Picture4 from "../assets/gallery/pics4.jpeg";
import Picture5 from "../assets/gallery/pics5.jpeg";
import Picture7 from "../assets/gallery/pics7.jpeg";
import Picture8 from "../assets/gallery/pics8.jpeg";



import LazyImage from "./LazyImage";


// Replace with your actual Enactus FUTO images
// import Img1 from "../assets/gallery/img1.jpg";
// For now using placeholders — swap src values with your imports

const galleryItems = [
  {
    id: 1,
    src: Picture1,
    caption: "Team Meeting",
    span: "col-span-2 row-span-2", // large feature
  },
  {
    id: 2,
    src: Picture2,
    caption: "ACT Foundation award",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: Picture3,
    caption: "Nationals Presentation",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: Picture4,
    caption: "Schneider Electric Challenge winner",
    span: "col-span-1 row-span-2",
  },
  {
    id: 5,
    src: Picture8,
    caption: "Enactus Summit",
    span: "col-span-2 row-span-1",
  },
  {
    id: 6,
    src: Picture7,
    caption: "2024 World Cup",
    span: "col-span-1 row-span-1",
  },
];

const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [loaded, setLoaded] = useState({});

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () =>
    setLightboxIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  const next = () =>
    setLightboxIndex((i) => (i + 1) % galleryItems.length);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0f0e17]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-[#F5A623] text-s font-bold uppercase tracking-[0.3em] mb-2">
              Our Moments
            </p>
            <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
              The Team in <span className="text-[#F5A623]">Action</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm md:text-md max-w-xs leading-relaxed sm:text-right">
            Snapshots of the people, projects, and passion that drive Enactus FUTO forward.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-4 grid-rows-3 gap-3 h-150">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`${item.span} relative overflow-hidden rounded-2xl cursor-pointer group`}
            >
              {/* Shimmer loader */}
              {!loaded[item.id] && (
                <div className="absolute inset-0 bg-white/5 animate-pulse rounded-2xl" />
              )}

              <img
                src={item.src}
                alt={item.caption}
                onLoad={() => setLoaded((p) => ({ ...p, [item.id]: true }))}
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                  loaded[item.id] ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white font-semibold text-sm">{item.caption}</span>
              </div>

              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#F5A623] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* ── MOBILE */}
        <div className="md:hidden">
          {/* Featured image */}
          <div
            onClick={() => openLightbox(0)}
            className="relative rounded-2xl overflow-hidden h-64 mb-3 cursor-pointer group"
          >
            <LazyImage
              src={galleryItems[0].src}
              alt={galleryItems[0].caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-wider">Featured</span>
              <p className="text-white font-bold text-lg">{galleryItems[0].caption}</p>
            </div>
          </div>

          {/* Horizontal scroll row */}
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar snap-x snap-mandatory">
            {galleryItems.slice(1).map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index + 1)}
                className="relative flex-none w-44 h-44 rounded-xl overflow-hidden cursor-pointer snap-start group"
              >
                < img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-white text-xs font-medium truncate block">{item.caption}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <p className="text-white/30 text-xs text-center mt-3">← swipe to explore →</p>
        </div>

        {/* Photo count badge */}
        {/* <div className="mt-6 flex items-center justify-center gap-2">
          <div className="h-px bg-white/10 flex-1" />
          <span className="text-white/30 text-xs font-mono px-4">
            {galleryItems.length} photos
          </span>
          <div className="h-px bg-white/10 flex-1" />
        </div> */}
      </div>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10 p-2"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white/60 hover:text-white transition-colors z-10 p-2 bg-white/10 rounded-full hover:bg-white/20"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <div
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].caption}
              className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
            />
            <div className="flex items-center gap-4">
              <span className="text-white font-semibold">
                {galleryItems[lightboxIndex].caption}
              </span>
              <span className="text-white/30 text-sm font-mono">
                {lightboxIndex + 1} / {galleryItems.length}
              </span>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {galleryItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                    i === lightboxIndex ? "bg-[#F5A623] w-4" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white/60 hover:text-white transition-colors z-10 p-2 bg-white/10 rounded-full hover:bg-white/20"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;