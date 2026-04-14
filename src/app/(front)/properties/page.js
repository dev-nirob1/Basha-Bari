import PropertyCard from "@/components/property/PropertyCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/shared/CTASection";

// Mock data based on the PropertyCard props
const MOCK_PROPERTIES = [
  {
    id: "prop-1",
    title: "Modern Architectural Villa",
    location: "Gulshan 2, Dhaka",
    price: 150000,
    beds: 4,
    baths: 4,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "prop-2",
    title: "Luxury Penthouse",
    location: "Banani, Dhaka",
    price: 120000,
    beds: 3,
    baths: 3,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "prop-3",
    title: "Minimalist Smart Apartment",
    location: "Dhanmondi, Dhaka",
    price: 65000,
    beds: 3,
    baths: 2,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "prop-4",
    title: "Spacious Duplex",
    location: "Baridhara DOHS, Dhaka",
    price: 180000,
    beds: 5,
    baths: 5,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "prop-5",
    title: "Urban Studio Loft",
    location: "Bashundhara R/A, Dhaka",
    price: 35000,
    beds: 1,
    baths: 1,
    image:
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "prop-6",
    title: "Corporate Executive Suite",
    location: "Mohakhali DOHS, Dhaka",
    price: 85000,
    beds: 2,
    baths: 2,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "prop-7",
    title: "Lakeside Serenity House",
    location: "Uttara Sector 4, Dhaka",
    price: 95000,
    beds: 4,
    baths: 3,
    image:
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "prop-8",
    title: "Boutique Townhouse",
    location: "Mirpur DOHS, Dhaka",
    price: 70000,
    beds: 3,
    baths: 3,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1600",
  },
];

export default function PropertiesPage() {
  return (
    <div className="bg-zinc-50 min-h-screen pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumb items={[{ label: "Properties" }]} />
        </div>

        {/* Top Section */}
        <div className="mb-10 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-zinc-950 tracking-tight mb-3">
            Explore Properties
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl">
            Find your perfect rental home from our curated selection of premium
            properties.
          </p>
        </div>

        {/* Main Layout: 2 Columns */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Side: Filter Sidebar */}
          <aside className="w-full lg:w-80 shrink-0 sticky top-24">
            <div className="bg-white border border-zinc-200 p-6 space-y-8">
              <div className="border-b border-zinc-100 pb-4">
                <h2 className="text-xl font-semibold text-zinc-950 flex items-center justify-between">
                  Filters
                  <button className="text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors">
                    Clear all
                  </button>
                </h2>
              </div>

              {/* 1. Location Input */}
              <div className="space-y-3">
                <label
                  htmlFor="location"
                  className="block text-sm font-semibold text-zinc-900"
                >
                  Location
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="location"
                    placeholder="E.g. Gulshan, Banani..."
                    className="block w-full pl-10 pr-3 py-2.5 bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 transition-colors"
                  />
                </div>
              </div>

              {/* 2. Price Range */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-zinc-900">
                  Price Range (Monthly)
                </label>
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500 text-sm">
                      $
                    </span>
                    <input
                      type="number"
                      placeholder="Min"
                      className="block w-full pl-7 pr-3 py-2.5 bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 transition-colors"
                    />
                  </div>
                  <span className="text-zinc-400">-</span>
                  <div className="relative flex-1">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500 text-sm">
                      $
                    </span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="block w-full pl-7 pr-3 py-2.5 bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* 3. Property Type */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-zinc-900">
                  Property Type
                </label>
                <div className="space-y-2">
                  {["Apartment", "House", "Villa", "Studio"].map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          className="peer appearance-none w-5 h-5 border border-zinc-300 bg-white checked:bg-emerald-700 checked:border-emerald-700 transition-all cursor-pointer"
                        />
                        <svg
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 4. Bedrooms */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-zinc-900">
                  Bedrooms
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Any", "1", "2", "3", "4+"].map((bed) => (
                    <button
                      key={bed}
                      className={`px-4 py-2 text-sm font-medium border transition-colors ${
                        bed === "Any"
                          ? "bg-zinc-900 text-white border-zinc-900"
                          : "bg-white text-zinc-600 border-zinc-200 hover:border-emerald-600 hover:text-emerald-700"
                      }`}
                    >
                      {bed}
                    </button>
                  ))}
                </div>
              </div>

              {/* 5. Furnished */}
              <div className="space-y-3 pt-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      className="peer appearance-none w-5 h-5 border border-zinc-300 bg-white checked:bg-emerald-700 checked:border-emerald-700 transition-all cursor-pointer"
                    />
                    <svg
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-zinc-900 cursor-pointer">
                    Furnished Only
                  </span>
                </label>
              </div>

              {/* Apply Filters Mobile Button (Hidden on Desktop) */}
              <button className="w-full lg:hidden block bg-zinc-950 hover:bg-emerald-800 text-white py-3 font-semibold transition-colors mt-6 text-sm">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Right Side: Content Area */}
          <div className="flex-1 w-full flex flex-col min-w-0">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-200">
              <p className="text-zinc-600 font-medium">
                Showing{" "}
                <span className="text-zinc-950 font-bold">
                  {MOCK_PROPERTIES.length}
                </span>{" "}
                properties
              </p>

              <div className="flex items-center gap-3">
                <label
                  htmlFor="sort"
                  className="text-sm text-zinc-500 whitespace-nowrap"
                >
                  Sort by:
                </label>
                <div className="relative w-full sm:w-48">
                  <select
                    id="sort"
                    className="block w-full appearance-none bg-white border border-zinc-300 text-sm text-zinc-900 py-2.5 pl-3 pr-10 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 transition-colors cursor-pointer"
                  >
                    <option value="recommended">Recommended</option>
                    <option value="price-asc">Price (Low to High)</option>
                    <option value="price-desc">Price (High to Low)</option>
                    <option value="newest">Newest First</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-500">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {MOCK_PROPERTIES.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <button className="inline-flex items-center justify-center bg-white border border-zinc-300 text-zinc-900 hover:text-emerald-700 hover:border-emerald-700 font-semibold py-3 px-8 transition-colors">
                Load More Properties
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <CTASection />

      </div>
    </div>
  );
}
