import SectionHeader from "@/components/ui/SectionHeader";

const FEATURES = [
  {
    title: "Verified Listings",
    description: "All properties are verified for authenticity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    )
  },
  {
    title: "Safe & Secure",
    description: "Your data and transactions are protected.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 3 0 5 1 7 2a1 1 0 0 1 1 1v7z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    )
  },
  {
    title: "Trusted Owners",
    description: "Connect directly with reliable property owners.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <polyline points="16 11 18 13 22 9"/>
      </svg>
    )
  },
  {
    title: "24/7 Support",
    description: "We're here to help anytime you need.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
      </svg>
    )
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          title="Why Choose Us"
          subtitle="Simple and secure."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="group flex flex-col p-6 sm:p-8 bg-zinc-50 border border-zinc-200 hover:bg-zinc-950 hover:border-zinc-950 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="h-12 w-12 mb-6 flex items-center justify-center bg-white border border-zinc-200 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-emerald-400 group-hover:border-zinc-800 transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-zinc-950 group-hover:text-white mb-2 transition-colors duration-500">
                {feature.title}
              </h3>
              <p className="text-xs text-zinc-600 group-hover:text-zinc-400 font-medium leading-relaxed transition-colors duration-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
