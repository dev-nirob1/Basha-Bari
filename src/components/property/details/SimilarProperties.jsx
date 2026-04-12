import Link from "next/link";
import PropertyCard from "@/components/property/PropertyCard";

export default function SimilarProperties({ properties }) {
  if (!properties || properties.length === 0) return null;

  return (
    <div className="mt-24">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-zinc-950 tracking-tight">Similar Properties</h2>
        <Link href="/properties" className="hidden sm:block text-emerald-700 font-medium hover:text-emerald-800 transition-colors">
          View all listings &rarr;
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      
      <div className="mt-8 sm:hidden">
        <Link href="/properties" className="block text-center w-full py-4 border border-zinc-300 font-medium text-zinc-900">
          View all listings
        </Link>
      </div>
    </div>
  );
}
