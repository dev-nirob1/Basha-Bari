import Image from "next/image";

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
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT SIDE (Layered Imagery) */}
          <div className="relative flex items-center justify-center lg:justify-start">
            {/* Background Image */}
            <div className="relative w-full max-w-[440px] aspect-[3/4] border border-zinc-100 p-2">
              <div className="relative w-full h-full overflow-hidden bg-zinc-50">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200"
                  alt="Team and Vision"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Floating Top Image */}
            <div className="absolute top-1/2 -right-4 lg:-right-16 -translate-y-1/2 w-48 lg:w-72 aspect-[3/4] border-4 border-white shadow-2xl z-10 hidden sm:block">
              <div className="relative w-full h-full overflow-hidden bg-zinc-100">
                <Image
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=800"
                  alt="Architectural detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (Columnar Points) */}
          <div className="">
            <h3 className="text-3xl lg:text-5xl font-light text-zinc-950  mb-16">
              Simplifying the rental process through architectural and digital
              clarity.
            </h3>

            <div className="grid grid-cols-1 gap-12">
              {points.map((point, idx) => (
                <div key={idx} className="group">
                  <h4 className="text-xl font-bold text-zinc-950 uppercase tracking-widest mb-4 flex items-center gap-4">
                    <span className="text-emerald-600">0{idx + 1}.</span>
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
