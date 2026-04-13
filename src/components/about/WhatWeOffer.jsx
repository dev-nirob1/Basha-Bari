import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

export default function WhatWeOffer() {
  const features = [
    {
      title: "Smart Property Search",
      desc: "Find homes quickly using powerful filters like location, price, and type.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Verified Listings",
      desc: "Every property is checked to ensure authenticity and reliability.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Easy Communication",
      desc: "Connect directly with property owners without unnecessary steps.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Save & Compare",
      desc: "Shortlist your favorite properties and compare them easily.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: Content (Feature List) */}
          <div className="flex flex-col items-start pr-0 lg:pr-12">
            <SectionHeader 
              title="What We Offer"
              subtitle="Everything you need to find your next home easily"
            />

            <div className="space-y-10 mt-6 overflow-hidden">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-950 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-zinc-950 uppercase tracking-widest mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-500 font-light leading-relaxed tracking-wide text-sm max-w-sm">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Visual/Image */}
          <div className="relative">
             <div className="relative aspect-[4/5] w-full bg-zinc-100 border border-zinc-200 shadow-2xl group overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200"
                  alt="High-quality property visual"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Metadata (Consistent with architectural theme) */}
                <div className="absolute top-8 left-8 bg-zinc-950/80 backdrop-blur-sm text-white px-6 py-4 border border-zinc-800 hidden md:block">
                   <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-1">Index Reference</p>
                   <p className="text-lg font-light tracking-tighter uppercase whitespace-nowrap leading-none">BSB-Offer-01</p>
                </div>
             </div>
             
             {/* Decorative Background Offset */}
             <div className="absolute -bottom-6 -right-6 w-48 h-48 border-b-2 border-r-2 border-zinc-100 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
