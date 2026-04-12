export default function NearbyPlaces({ places }) {
  if (!places) return null;

  return (
    <div className="pb-8 border-b border-zinc-200">
      <h2 className="text-2xl font-bold text-zinc-950 mb-6 font-display uppercase tracking-tight">Neighborhood</h2>
      <div className="space-y-4">
        {places.map((place, idx) => (
          <div key={idx} className="flex items-center justify-between py-3 border-b border-zinc-50 last:border-0 group hover:bg-zinc-50 transition-colors px-2 -mx-2">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <div>
                <p className="text-zinc-900 font-bold">{place.name}</p>
                <p className="text-xs text-zinc-400 font-medium uppercase tracking-widest">{place.type}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-zinc-900 font-bold">{place.distance}</p>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-widest">{place.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
