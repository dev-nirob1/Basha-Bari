import Image from "next/image";

export default function PropertySidebar({ property }) {
  if (!property) return null;

  return (
    <div className="w-full lg:w-96 shrink-0 lg:sticky lg:top-32 space-y-6">
      <div className="bg-white border border-zinc-200 p-8 shadow-xl shadow-zinc-200/40">
        <p className="text-3xl font-bold text-zinc-950 mb-1">
          ${property.price.toLocaleString()}
          <span className="text-base font-normal text-zinc-500 ml-1">/ month</span>
        </p>
        
        {/* CTA BUTTONS */}
        <div className="mt-8 space-y-4">
          <button className="w-full py-4 bg-zinc-950 text-white font-semibold uppercase tracking-wider text-sm hover:bg-zinc-800 transition-colors">
            Book a Visit
          </button>
          <button className="w-full py-4 bg-white text-zinc-950 border border-zinc-200 font-semibold uppercase tracking-wider text-sm hover:border-zinc-950 transition-colors">
            Contact Agent
          </button>
        </div>

        {/* OWNER CARD */}
        <div className="mt-8 pt-8 border-t border-zinc-100 flex items-center gap-4">
          <div className="relative w-14 h-14 bg-zinc-200 overflow-hidden">
            <Image
              src={property.owner.image}
              alt={property.owner.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-zinc-950 font-bold">{property.owner.name}</h4>
            <p className="text-sm text-zinc-500">Property Owner</p>
          </div>
        </div>
      </div>

      <div className="bg-zinc-100 p-6 border border-zinc-200">
        <div className="flex items-start gap-4">
          <svg className="w-6 h-6 text-zinc-950 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h5 className="font-semibold text-zinc-950 mb-1">BashaBari Guarantee</h5>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Every property is verified by our team. No hidden fees or fraudulent listings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
