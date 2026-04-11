import Link from "next/link";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const LOCATIONS = [
  {
    name: "Dhaka",
    slug: "dhaka",
    properties: "320+ properties",
    image:
      "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Chittagong",
    slug: "chittagong",
    properties: "145+ properties",
    image:
      "https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Sylhet",
    slug: "sylhet",
    properties: "80+ properties",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Cox's Bazar",
    slug: "coxs-bazar",
    properties: "110+ properties",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function PopularLocations() {
  return (
    <section className="bg-zinc-50 py-20 lg:py-28 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Popular Locations"
          subtitle="Explore homes in top cities"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCATIONS.map((location) => (
            <Link
              key={location.slug}
              href={`/search?location=${location.slug}`}
              className="group relative h-[450px] sm:h-[500px] w-full overflow-hidden flex items-end p-8 transition-colors duration-500 bg-zinc-900 shadow-sm hover:shadow-2xl"
            >
              {/* Background Image Setup */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={location.image}
                  alt={`Real estate in ${location.name}`}
                  fill
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-all duration-1200 ease-in-out opacity-80 group-hover:opacity-100"
                />
                {/* Dark gradient mapping for high-contrast legibility */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-zinc-950/10 to-transparent"></div>
              </div>

              {/* Text Focus Layer */}
              <div className="relative z-10 w-full transform transition-transform duration-700 ease-in-out group-hover:-translate-y-2">
                <h3 className="text-3xl md:text-4xl font-light tracking-tighter text-white mb-4 drop-shadow-md">
                  {location.name}
                </h3>
                <p className="text-xs font-bold text-white/80 uppercase tracking-[0.2em] flex items-center gap-3">
                  <span className="w-8 h-px bg-emerald-500 transition-all duration-500 group-hover:w-12"></span>
                  {location.properties}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
