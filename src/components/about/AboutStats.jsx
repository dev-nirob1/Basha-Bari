export default function AboutStats() {
  const stats = [
    { label: "PROPERTIES", value: "850", suffix: "+" },
    { label: "SATISFACTION", value: "98", suffix: "%" },
    { label: "CITY INDEX", value: "12", suffix: "" },
    { label: "EXPERIENCE", value: "05", suffix: "Y" },
  ];

  return (
    <section className="py-32 bg-white container-border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-20 lg:gap-y-0 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="relative mb-6">
                <span className="text-8xl md:text-9xl lg:text-[10rem] font-extralight text-zinc-950 tracking-tighter leading-none block transition-transform duration-700 group-hover:-translate-y-2">
                  {stat.value}
                </span>
                <span className="absolute -top-4 -right-8 text-2xl font-serif italic text-zinc-300">
                  {stat.suffix}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-2">
                  Analytics index
                </span>
                <span className="text-sm font-bold text-zinc-950 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
