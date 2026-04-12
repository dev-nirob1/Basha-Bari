export default function AboutStats() {
  const stats = [
    { label: "Properties Listed", value: "10K+", suffix: "" },
    { label: "Happy Households", value: "50K+", suffix: "" },
    { label: "Cities covered", value: "12", suffix: "" },
    { label: "Award Wins", value: "08", suffix: "" },
  ];

  return (
    <section className="py-24 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-x-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-5xl md:text-7xl font-black text-zinc-950 tracking-tighter mb-2">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
