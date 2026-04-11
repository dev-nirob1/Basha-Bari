import Link from "next/link";
import Image from "next/image";

export default function PropertyCard({ property }) {
  return (
    <div className="group relative flex flex-col bg-white border border-zinc-200 overflow-hidden hover:shadow-2xl transition-all duration-500">
      {/* Full card clickable link wrapper (positioned underneath favorite button) */}
      <Link
        href={`/properties/${property.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View details for ${property.title}`}
      />

      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 z-0">
        <Image 
          src={property.image} 
          alt={property.title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        {/* Favorite Icon - needs higher z-index to sit on top of the link overlay */}
        <button
          className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-md hover:bg-white text-zinc-400 hover:text-rose-600 transition-colors z-20 focus:outline-none border border-transparent hover:border-zinc-200"
          aria-label="Add to favorites"
        >
          <svg
            className="w-5 h-5 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      <div className="p-4 flex flex-col flex-1 relative z-0">
        <div className="flex items-end justify-between gap-2 mb-2">
          <p className="text-2xl font-bold text-zinc-950">
            ${property.price.toLocaleString()}{" "}
            <span className="text-sm font-medium text-zinc-500 tracking-wide">
              / month
            </span>
          </p>
        </div>

        <h3 className="text-lg font-semibold text-zinc-900 mb-1.5 truncate group-hover:text-emerald-700 transition-colors">
          {property.title}
        </h3>

        <p className="text-sm text-zinc-600 mb-4 flex items-center gap-1.5 truncate">
          <svg
            className="w-4 h-4 text-zinc-400 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {property.location}
        </p>

        <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center gap-5 text-sm text-zinc-600 font-medium">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-400"
            >
              <path d="M2 4v16" />
              <path d="M2 8h18a2 2 0 0 1 2 2v10" />
              <path d="M2 17h20" />
              <path d="M6 8v9" />
            </svg>
            {property.beds} Beds
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-400"
            >
              <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
              <line x1="10" x2="8" y1="5" y2="7" />
              <line x1="2" x2="22" y1="12" y2="12" />
              <line x1="7" x2="7" y1="19" y2="21" />
              <line x1="17" x2="17" y1="19" y2="21" />
            </svg>
            {property.baths} Baths
          </div>
        </div>
      </div>
    </div>
  );
}
