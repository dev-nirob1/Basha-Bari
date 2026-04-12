export default function AboutValues() {
  const values = [
    {
      title: "Radical Integrity",
      description: "We verify every single listing manually. If it's on BashaBari, it's real, it's safe, and it's verified. No brokers, no hidden fees.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Elevated Design",
      description: "We believe architecture influences mood. Our platform and our curated listings prioritize clean lines, light, and architectural excellence.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h14a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Client Centricity",
      description: "Our technology is built to save you time. From 3D tours to instant booking, we put the user back in control of their property search.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-4">Our DNA</h2>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight">THE PILLARS OF BASHABARI.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, idx) => (
            <div key={idx} className="bg-white p-10 border border-zinc-200 group hover:border-zinc-950 transition-all duration-500">
              <div className="w-12 h-12 text-zinc-950 mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                {value.icon}
              </div>
              <h4 className="text-2xl font-bold text-zinc-950 mb-4 uppercase tracking-tighter">
                {value.title}
              </h4>
              <p className="text-zinc-600 leading-relaxed font-light">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
