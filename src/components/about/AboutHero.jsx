import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE (Content) */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-emerald-600 font-bold uppercase tracking-[0.2em] mb-4 text-xs">
              Who we are
            </h2>
            <h1 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight mb-6 uppercase">
              Finding perfect rental homes made <span className="text-emerald-500">simple</span>.
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Our platform connects renters with trusted property owners, making the process simple, fast, and reliable. We prioritize architectural excellence and seamless experiences in every listing.
            </p>
            <div>
              <Link 
                href="/properties" 
                className="inline-block px-10 py-5 bg-zinc-950 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors duration-300"
              >
                Explore Properties
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE (Visual) */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full bg-zinc-100 overflow-hidden shadow-2xl">
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
