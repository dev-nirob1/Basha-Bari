import PropertyCard from "@/components/property/PropertyCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Link from "next/link";

// Mock saved properties
const FAVORITE_PROPERTIES = [
  {
    id: "prop-3",
    title: "Minimalist Smart Apartment",
    location: "Dhanmondi, Dhaka",
    price: 65000,
    beds: 3,
    baths: 2,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "prop-6",
    title: "Corporate Executive Suite",
    location: "Mohakhali DOHS, Dhaka",
    price: 85000,
    beds: 2,
    baths: 2,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1600",
  },
];

export default function FavoritesPage() {
  const hasFavorites = FAVORITE_PROPERTIES.length > 0;

  return (
    <div className="bg-zinc-50 min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-8 font-sans">
          <Breadcrumb items={[{ label: "Your Selection" }]} />
        </div>

        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-950 tracking-tighter mb-4">
            Curated Selection
          </h1>
          <p className="text-xl text-zinc-500 font-light max-w-2xl leading-relaxed">
            Your personal collection of architectural masterpieces and premium residences in Dhaka.
          </p>
        </div>

        {hasFavorites ? (
          <div className="space-y-12">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-6">
              <p className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em]">
                {FAVORITE_PROPERTIES.length} Saved Properties
              </p>
              <button className="text-xs font-bold text-emerald-700 uppercase tracking-widest hover:text-zinc-950 transition-colors">
                Clear All
              </button>
            </div>

            {/* Favorites Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {FAVORITE_PROPERTIES.map((property) => (
                <div key={property.id} className="relative group">
                  <PropertyCard property={property} />
                  {/* Remove button overlay */}
                  <button className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm text-zinc-900 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-zinc-950 hover:text-white border border-zinc-100 shadow-xl">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-32 text-center border-2 border-dashed border-zinc-200 bg-white">
            <div className="max-w-md mx-auto space-y-8 px-6">
              <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mx-auto text-zinc-300">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-zinc-950 uppercase tracking-tight">Your gallery is empty</h3>
                <p className="text-zinc-500">Explore our curated listings and save the ones that resonate with your architectural vision.</p>
              </div>
              <Link 
                href="/properties"
                className="inline-block bg-zinc-950 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-emerald-800 transition-colors"
              >
                Start Exploring
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}