import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const CATEGORIES = [
  {
    name: "Apartment",
    type: "apartment",
    listings: "120+ listings",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="4" y="2" width="16" height="20"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/>
      </svg>
    )
  },
  {
    name: "House",
    type: "house",
    listings: "85+ listings",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M3 10l9-7 9 7v11h-18z"/><path d="M9 21v-6h6v6"/>
      </svg>
    )
  },
  {
    name: "Villa",
    type: "villa",
    listings: "32+ listings",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M22 10v11h-20v-11"/><path d="M2 10l10-7 10 7"/><path d="M14 21v-5"/><path d="M10 4V2h4v2"/>
      </svg>
    )
  },
  {
    name: "Studio",
    type: "studio",
    listings: "54+ listings",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <rect width="18" height="18" x="3" y="3"/><path d="M9 3v18"/><path d="M3 9h18"/>
      </svg>
    )
  },
  {
    name: "Office",
    type: "office",
    listings: "24+ listings",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="2" y="7" width="20" height="14"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    )
  }
];

export default function BrowseByCategory() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          title="Browse by Category"
          subtitle="Find homes by property type"
        />

        {/* Horizontal scroll on mobile, Grid on desktop */}
        <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-6 overflow-x-auto snap-x snap-mandatory pb-6 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {CATEGORIES.map((category) => (
            <Link 
              key={category.type}
              href={`/properties?type=${category.type}`}
              className="group min-w-[220px] sm:min-w-0 snap-center flex flex-col items-center justify-center p-8 bg-zinc-50 border border-zinc-200 hover:border-zinc-950 hover:bg-zinc-950 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="h-16 w-16 flex items-center justify-center bg-white border border-zinc-200 text-zinc-900 mb-6 group-hover:bg-zinc-800 group-hover:border-zinc-700 group-hover:text-white transition-colors duration-500">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-950 group-hover:text-white transition-colors duration-500 mb-2">
                {category.name}
              </h3>
              <p className="text-sm font-medium text-zinc-500 group-hover:text-zinc-400 transition-colors duration-500">
                {category.listings}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
