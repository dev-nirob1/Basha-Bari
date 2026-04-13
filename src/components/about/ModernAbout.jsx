import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ModernAbout() {
  const stats = [
    { number: "500+", label: "Properties Listed" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Trusted Owners" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: Content Area */}
          <div className="flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-950 tracking-tight mb-8">
              Helping people find the perfect place to live.
            </h2>

            <p className="text-lg text-zinc-600 font-light leading-relaxed tracking-wide mb-6 max-w-md">
              We connect renters with verified property owners, making the
              process simple, transparent, and stress-free.
            </p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full mb-6 border-y border-zinc-100 py-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-start">
                  <span className="text-4xl font-bold text-zinc-950 tracking-tighter mb-2">
                    {stat.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/about"
              className="group flex items-center justify-between gap-12 bg-zinc-950 text-white px-10 py-5 hover:bg-emerald-700 transition-all duration-500 min-w-[240px]"
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em]">
                Learn More
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

          {/* RIGHT SIDE: Visual/Image Area (Staggered 2-Column Grid) */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 items-start">
              {/* Left Column (Pushed down 5rem) */}
              <div className="flex flex-col gap-6 pt-20">
                {" "}
                {/* 5rem = pt-20 */}
                <div className="aspect-[3/4] relative bg-zinc-100 border border-zinc-200 shadow-xl overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600"
                    alt="Property 1"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square relative bg-zinc-100 border border-zinc-200 shadow-xl overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=600"
                    alt="Property 2"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-6">
                <div className="aspect-square relative bg-zinc-100 border border-zinc-200 shadow-xl overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=600"
                    alt="Property 3"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[3/4] relative bg-zinc-100 border border-zinc-200 shadow-xl overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600"
                    alt="Property 4"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Offset Element (Sharp Architectural Line) */}
            <div className="absolute top-0 right-0 w-48 h-48 border-t-2 border-r-2 border-zinc-100 -z-10 -mr-4 -mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
