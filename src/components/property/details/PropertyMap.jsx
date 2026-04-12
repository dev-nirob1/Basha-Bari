export default function PropertyMap() {
  return (
    <div className="pb-8 border-b border-zinc-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-zinc-950">Location</h2>
        <a href="#" className="text-emerald-700 font-medium hover:underline">Get directions</a>
      </div>
      <div className="w-full aspect-[16/6] bg-zinc-200 flex items-center justify-center overflow-hidden relative">
        {/* Temporary Map Placeholder */}
        <span className="text-zinc-500 font-semibold tracking-widest uppercase z-10">Map View Embed</span>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
      </div>
    </div>
  );
}
