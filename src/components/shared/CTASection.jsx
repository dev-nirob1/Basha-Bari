import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative w-full mt-32 py-32 overflow-hidden">
      {/* Background Image with Fixed Position feeling */}
      <div className="absolute inset-0 z-0 w-full">
        <Image
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1920"
          alt="Architectural background"
          fill
          className="object-cover w-full"
        />
        {/* Dark Editorial Overlay */}
        <div className="absolute inset-0 bg-zinc-950/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
          Didn't find what you're looking for?
        </h2>
        <p className="text-zinc-300 mb-12 max-w-2xl mx-auto text-xl font-light leading-relaxed">
          Our advisors are available 24/7 to help you find the perfect
          architectural home for your lifestyle.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-zinc-950 px-14 py-5 font-bold uppercase tracking-[0.3em] text-xs hover:bg-emerald-700 hover:text-white transition-all duration-700 shadow-2xl"
        >
          Contact Advisor
        </Link>
      </div>
    </section>
  );
}
