import Link from "next/link";
import PropertyCard from "@/components/property/PropertyCard";
import SectionHeader from "@/components/ui/SectionHeader";

// Using real high-quality real estate mock imagery from Unsplash for realistic SaaS look
const MOCK_PROPERTIES = [
  {
    id: 1,
    title: "Modern Apartment in Gulshan",
    location: "Gulshan, Dhaka",
    price: 1200,
    beds: 3,
    baths: 2,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Luxury Villa in Banani",
    location: "Banani, Dhaka",
    price: 3500,
    beds: 5,
    baths: 4,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Cozy Studio in Dhanmondi",
    location: "Dhanmondi, Dhaka",
    price: 600,
    beds: 1,
    baths: 1,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1e52db06ac?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Spacious Duplex with Garden",
    location: "Baridhara, Dhaka",
    price: 2500,
    beds: 4,
    baths: 3,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "High-rise Condo View",
    location: "Bashundhara R/A, Dhaka",
    price: 1800,
    beds: 3,
    baths: 3,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Minimalist Loft Design",
    location: "Uttara, Dhaka",
    price: 900,
    beds: 2,
    baths: 2,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Premium Penthouse Sublet",
    location: "Mirpur DOHS, Dhaka",
    price: 1400,
    beds: 3,
    baths: 2,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Quiet Suburb Townhouse",
    location: "Purbachal, Dhaka",
    price: 2100,
    beds: 4,
    baths: 3,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="bg-zinc-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title Area */}
        <SectionHeader 
          title="Featured Properties"
          subtitle="Explore our handpicked rental homes"
          linkText="View All"
          linkHref="/properties"
        />

        {/* Grid Layout (4 desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
