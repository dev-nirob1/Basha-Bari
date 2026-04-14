"use client";

import { useState } from "react";
import Image from "next/image";

export default function PropertyGallery({ images, title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:h-[500px]">
          {/* Main Large Image (Left Side) */}
          <div 
            className="relative md:col-span-2 h-[300px] md:h-full w-full bg-zinc-200 cursor-pointer overflow-hidden group"
            onClick={() => openLightbox(0)}
          >
            <Image
              src={images[0]}
              alt={title}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* 4 Thumbnails (Right Side - Hidden on small mobile to save space) */}
          <div className="hidden md:grid col-span-2 grid-cols-2 grid-rows-2 gap-2 h-full">
            {images.slice(1, 4).map((img, idx) => (
              <div 
                key={idx} 
                className="relative w-full h-full bg-zinc-200 cursor-pointer overflow-hidden group"
                onClick={() => openLightbox(idx + 1)}
              >
                <Image 
                  src={img} 
                  alt={`Thumbnail ${idx + 2}`} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            ))}

            {/* "+ Photos" Overlay on the 5th spot */}
            <div 
              className="relative w-full h-full bg-zinc-900 cursor-pointer overflow-hidden group"
              onClick={() => openLightbox(0)}
            >
              <Image 
                src={images[0]} 
                alt="More photos" 
                fill 
                className="object-cover opacity-50 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-medium tracking-wide">VIEW ALL PHOTOS</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile-only view all button */}
        <div className="mt-4 md:hidden">
          <button 
            onClick={() => openLightbox(0)}
            className="w-full py-3 bg-zinc-100 border border-zinc-200 text-zinc-900 font-medium text-sm hover:bg-zinc-200 transition-colors"
          >
            View All Photos
          </button>
        </div>
      </div>

      {/* FULL SCREEN LIGHTBOX CAROUSEL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col">
          {/* Top Bar */}
          <div className="flex items-center justify-between p-6 z-10 w-full absolute top-0">
            <div className="text-zinc-400 font-medium tracking-widest text-sm bg-zinc-900/50 backdrop-blur-md px-4 py-2 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="p-2 text-white/50 hover:text-white bg-zinc-900/50 backdrop-blur-md rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Slider Content */}
          <div className="flex-1 relative flex items-center justify-center w-full h-full">
            {/* Prev Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 z-10 p-4 bg-zinc-900/50 text-white rounded-full hover:bg-zinc-800 backdrop-blur-md transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Current Image */}
            <div className="relative w-full h-full flex items-center justify-center p-4 md:p-16">
              <Image 
                src={images[currentIndex]} 
                alt={`${title} image ${currentIndex + 1}`} 
                fill 
                className="object-contain" 
              />
            </div>

            {/* Next Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 z-10 p-4 bg-zinc-900/50 text-white rounded-full hover:bg-zinc-800 backdrop-blur-md transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
