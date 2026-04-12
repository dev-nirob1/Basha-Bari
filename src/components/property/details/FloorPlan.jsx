import Image from "next/image";

export default function FloorPlan({ floorPlan }) {
  if (!floorPlan) return null;

  return (
    <div className="pb-8 border-b border-zinc-200">
      <h2 className="text-2xl font-bold text-zinc-950 mb-6 font-display uppercase tracking-tight">Floor Plans</h2>
      
      <div className="bg-white border border-zinc-200 p-4 md:p-8">
        <div className="relative aspect-video w-full bg-zinc-50 overflow-hidden mb-8">
          <Image
            src={floorPlan.image}
            alt="Property Floor Plan"
            fill
            className="object-contain"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {floorPlan.rooms.map((room, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">{room.label}</span>
              <span className="text-lg font-bold text-zinc-900 leading-tight">{room.dimensions}</span>
              <span className="text-xs text-zinc-500 font-medium">{room.area} sqft</span>
            </div>
          ))}
        </div>
      </div>
      
      <p className="mt-6 text-zinc-500 text-sm italic">
        * Dimensions are approximate and may vary slightly from actual measurements.
      </p>
    </div>
  );
}
