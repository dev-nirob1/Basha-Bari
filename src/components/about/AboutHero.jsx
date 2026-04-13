import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-36 bg-white overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-[50%] top-0 w-[1px] h-32 bg-zinc-100 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start">
          {/* LEFT SIDE (Content) */}
          <div className="lg:col-span-6 pr-0 lg:pr-24 pt-8">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em]">
                Est. 2023
              </span>
              <span className="w-12 h-[1px] bg-zinc-200"></span>
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.4em]">
                Modern Living
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-zinc-950 tracking-tighter leading-[0.85] mb-12">
              The Art of <br />
              <span className="italic font-serif text-zinc-400 pl-4 lg:pl-12">
                Curated
              </span>{" "}
              <br />
              Spaces.
            </h1>

            <div className="max-w-md">
              <p className="text-lg text-zinc-500 font-light leading-relaxed mb-12 tracking-wide">
                BashaBari is more than a platform. It is a philosophy of living.
                We believe that architecture influences mood, and design
                dictates lifestyle.
              </p>

              <Link
                href="/properties"
                className="group inline-flex items-center gap-8 text-zinc-950 hover:text-emerald-600 transition-colors duration-500"
              >
                <span className="text-xs font-bold uppercase tracking-[0.3em] border-b-2 border-zinc-950 pb-1 group-hover:border-emerald-500 transition-colors">
                  Browse the Collection
                </span>
                <svg
                  className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="1.5"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE (Visual) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full bg-zinc-100 border border-zinc-200 p-4">
              <Image
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200"
                alt="Architectural detail"
                fill
                priority
                className="object-cover grayscale contrast-125"
              />
              {/* Overlapping metadata box */}
              <div className="absolute -bottom-6 -left-6 bg-zinc-950 text-white p-8 hidden lg:block border border-zinc-800">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-2">
                  Location Index
                </p>
                <p className="text-lg font-light tracking-tighter uppercase whitespace-nowrap">
                  23.8103° N, 90.4125° E
                </p>
              </div>
            </div>

            {/* Secondary floating image detail for depth */}
            <div className="absolute -top-12 -right-12 w-48 h-64 border border-zinc-200 p-2 bg-white hidden lg:block shadow-2xl">
              <div className="relative w-full h-full grayscale opacity-80">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600"
                  alt="Texture detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
