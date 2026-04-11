import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center pt-24">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury modern home exterior"
          fill
          priority
          className="object-cover"
        />
        {/* Soft Dark Vignette Overlay for moody aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/60 via-zinc-900/40 to-zinc-900/80"></div>
      </div>

      {/* Editorial Content Container */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <p className="text-white/70 uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-8 border-b border-white/20 pb-2">
          Exclusive Residences
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-white tracking-tighter mb-8">
          Uncover your <br className="hidden sm:block" />
          <span className="italic font-serif opacity-90 text-zinc-200">
            true home
          </span>
          .
        </h1>

        <p className="text-lg md:text-xl text-white/80 font-light tracking-wide max-w-2xl mx-auto mb-8 leading-relaxed">
          Curated living spaces for those who appreciate magnificent design,
          seamless architecture, and uncompromising quality.
        </p>

        {/* Unique Architectural Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center justify-center">
          <button className="cursor-pointer group flex items-center gap-6 bg-white text-zinc-950 px-10 py-5 hover:bg-zinc-200 transition-colors duration-500 min-w-[240px] justify-between">
            <span className="uppercase tracking-[0.2em] text-xs font-bold">
              Browse Collection
            </span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth="1.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>

          <button className="cursor-pointer group flex items-center gap-4 bg-transparent border border-white/30 text-white px-10 py-5 hover:border-white transition-colors duration-500 hover:bg-white/5 backdrop-blur-sm min-w-[240px] justify-center">
            <span className="uppercase tracking-[0.2em] text-xs font-bold">
              List a property
            </span>
            <svg
              className="w-4 h-4 transform group-hover:rotate-90 transition-transform duration-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth="1.5"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
