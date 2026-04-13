import SectionHeader from "@/components/ui/SectionHeader";

export default function OurValues() {
  const values = [
    {
      title: "Trust First",
      desc: "We ensure every listing is verified so you can rent with confidence.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Simplicity",
      desc: "Our platform is designed to make finding a home fast and effortless.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Transparency",
      desc: "No hidden fees, no confusion — everything is clear and upfront.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Reliability",
      desc: "We provide a consistent and dependable experience for all users.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Our Values"
          subtitle="What drives us to build a better rental experience"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center flex flex-col items-center"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-zinc-50 flex items-center justify-center text-zinc-950 mb-8 border border-zinc-100">
                {value.icon}
              </div>

              <h3 className="text-xl font-bold text-zinc-950 uppercase tracking-widest mb-4">
                {value.title}
              </h3>
              
              <p className="text-zinc-500 font-light leading-relaxed tracking-wide text-sm">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
