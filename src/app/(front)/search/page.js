import PropertyCard from "@/components/property/PropertyCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/shared/CTASection";

// Mock results for the search page
const SEARCH_RESULTS = [
  {
    id: "prop-1",
    title: "Modern Architectural Villa",
    location: "Gulshan 2, Dhaka",
    price: 150000,
    beds: 4,
    baths: 4,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "prop-4",
    title: "Spacious Duplex",
    location: "Baridhara DOHS, Dhaka",
    price: 180000,
    beds: 5,
    baths: 5,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "prop-2",
    title: "Luxury Penthouse",
    location: "Banani, Dhaka",
    price: 120000,
    beds: 3,
    baths: 3,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600",
  },
];

export default function SearchPage({ searchParams }) {
  // In a real app, logic to fetch results based on searchParams would go here
  const query = "Gulshan"; // Example query

  return (
    <div className="bg-zinc-50 min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-8 font-sans">
          <Breadcrumb items={[{ label: "Search Results" }]} />
        </div>

        {/* Search Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-zinc-200 pb-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-950 tracking-tight">
              Search Results
            </h1>
            <p className="text-lg text-zinc-500 font-medium">
              Showing outcomes for <span className="text-emerald-700 italic">"{query}"</span>
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
              {SEARCH_RESULTS.length} Properties Found
            </p>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SEARCH_RESULTS.map((property) => (
            <div key={property.id} className="group">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        {/* Call to Action for more search */}
        <CTASection />

      </div>
    </div>
  );
}