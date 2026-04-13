import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutMission() {
  const points = [
    {
      title: "Verification",
      desc: "Every square inch is manually inspected for structural and legal integrity.",
    },
    {
      title: "Curation",
      desc: "We only list spaces that exhibit architectural soul and exceptional design.",
    },
    {
      title: "Radical Clarity",
      desc: "No hidden layers. Deeply transparent pricing and direct-owner access.",
    },
  ];

  return (
    <section className="py-24 lg:py-48 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Our Radical Vision" subtitle="Vision & Mission" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          {/* LEFT SIDE (Layered Imagery) */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-start">
            {/* Background Image */}
            <div className="relative w-full max-w-[440px] aspect-[3/4] border border-zinc-100 p-2 lg:-translate-x-12">
              <div className="relative w-full h-full overflow-hidden bg-zinc-50">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200"
                  alt="Team and Vision"
                  fill
                  className="object-cover grayscale transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Floating Top Image */}
            <div className="absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 w-48 lg:w-72 aspect-[3/4] border-4 border-white shadow-2xl z-10 hidden sm:block">
              <div className="relative w-full h-full overflow-hidden bg-zinc-100">
                <Image
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=800"
                  alt="Architectural detail"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (Columnar Points) */}
          <div className="lg:col-span-6">
            <h3 className="text-3xl lg:text-5xl font-light text-zinc-950 tracking-tighter leading-tight mb-16">
              Simplifying the rental process through{" "}
              <span className="italic font-serif text-zinc-400">
                architectural
              </span>{" "}
              and digital clarity.
            </h3>

            <div className="grid grid-cols-1 gap-12">
              {points.map((point, idx) => (
                <div
                  key={idx}
                  className="group relative pl-10 border-l border-zinc-100 hover:border-zinc-950 transition-colors duration-700"
                >
                  <span className="absolute -left-[1px] top-0 w-[1px] h-0 bg-emerald-500 transition-all duration-700 group-hover:h-full"></span>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-3">
                    0{idx + 1} / Strategy
                  </p>
                  <h4 className="text-xl font-light text-zinc-950 tracking-tighter uppercase mb-2">
                    {point.title}
                  </h4>
                  <p className="text-zinc-500 font-light leading-relaxed max-w-sm">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
