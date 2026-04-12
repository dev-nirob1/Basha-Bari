import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-white pt-24 border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE (Content) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-6 border-b border-zinc-200 pb-2 inline-block">
              Our Identity
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-zinc-950 tracking-tighter mb-8 leading-[1.1]">
              Redefining the <br />
              <span className="italic font-serif opacity-90 text-zinc-700">Standard</span> <br />
              of Modern Living.
            </h1>

            <p className="text-lg md:text-xl text-zinc-500 font-light tracking-wide max-w-xl mb-10 leading-relaxed">
              We curate high-end rental experiences by bridging the gap between architectural excellence and effortless digital accessibility.
            </p>

            <Link 
              href="/properties" 
              className="cursor-pointer group flex items-center gap-6 bg-zinc-950 text-white px-10 py-5 hover:bg-zinc-800 transition-colors duration-500 min-w-[240px] justify-between"
            >
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
            </Link>
          </div>

          {/* RIGHT SIDE (Visual) */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-square w-full bg-zinc-100 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200"
                alt="Modern Architecture"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
