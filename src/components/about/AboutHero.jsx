import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-36 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <p className="text-sm font-bold text-emerald-700 uppercase tracking-[0.4em] mb-8">
            Established 2023
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-zinc-950 tracking-tighter leading-[0.9] mb-12">
            REDEFINING THE <br />
            <span className="text-zinc-400 font-light italic serif">Living Experience.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed max-w-2xl mb-12">
            BashaBari is an architectural-first real estate platform dedicated to connecting design-conscious individuals with curated living spaces in the heart of Dhaka.
          </p>

          <div className="w-full aspect-[21/9] relative bg-zinc-200 border border-zinc-200 overflow-hidden">
             <Image 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1920"
                alt="Modern Architecture"
                fill
                priority
                className="object-cover"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
