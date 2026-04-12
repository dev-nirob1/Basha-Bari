export default function PropertyAmenities({ amenities }) {
  if (!amenities || amenities.length === 0) return null;

  return (
    <div className="pb-8 border-b border-zinc-200">
      <h2 className="text-2xl font-bold text-zinc-950 mb-6">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {amenities.map((amenity, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-zinc-700 font-medium">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
