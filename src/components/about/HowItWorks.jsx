import SectionHeader from "@/components/ui/SectionHeader";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Search Properties",
      description: "Browse through thousands of rental homes using filters like location, price, and type.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Compare & Shortlist",
      description: "Compare properties, view details, and save your favorite homes.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Contact Owner",
      description: "Connect directly with property owners and book visits easily.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="How It Works"
          subtitle="The Process"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group p-10 bg-white border border-zinc-200 hover:border-zinc-950 transition-all duration-500 rounded-none overflow-hidden">
              <div className="absolute -top-4 -right-4 text-8xl font-black text-zinc-950 opacity-[0.02] select-none">
                {step.number}
              </div>

              <div className="w-12 h-12 text-zinc-950 mb-8 border-b-2 border-emerald-500 pb-2">
                {step.icon}
              </div>

              <h4 className="text-xl font-light text-zinc-950 tracking-tighter mb-4 uppercase">
                {step.title}
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed font-light tracking-wide">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
