import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutMission() {
  const points = [
    { title: "VERIFIED CONTENT", desc: "Every listing is manually inspected by our team." },
    { title: "ARCHITECTURAL FOCUS", desc: "We prioritize spaces with light and structural integrity." },
    { title: "TOTAL TRANSPARENCY", desc: "Explicit pricing with zero brokerage or hidden fees." },
    { title: "DIRECT ACCESS", desc: "Direct communication between owners and verified renters." },
  ];

  return (
    <section className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Our Mission"
          subtitle="Vision & Purpose"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT SIDE (Content) */}
          <div className="lg:col-span-6">
            <h3 className="text-3xl md:text-5xl font-light text-zinc-950 tracking-tighter leading-[1.1] mb-10">
              Removing friction from <br />
              <span className="italic font-serif opacity-90 text-zinc-700">the rental process</span>.
            </h3>
            
            <p className="text-lg text-zinc-500 font-light leading-relaxed mb-12 max-w-xl">
              Our mission is to build the world's most trusted rental ecosystem, where modern design meets radical transparency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {points.map((point, idx) => (
                <div key={idx} className="group border-l border-zinc-200 pl-6 hover:border-zinc-950 transition-colors duration-500">
                  <h4 className="text-xs font-bold text-zinc-950 uppercase tracking-widest mb-3">
                    {point.title}
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light tracking-wide">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE (Visual) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full bg-zinc-100">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200"
                alt="Community and Trust"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
