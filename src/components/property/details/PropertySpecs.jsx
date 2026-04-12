export default function PropertySpecs({ specs }) {
  if (!specs) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
      <div className="flex flex-col items-center justify-center p-6 bg-white border border-zinc-200">
        <svg className="w-8 h-8 text-zinc-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span className="text-2xl font-bold text-zinc-950">{specs.type}</span>
        <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider mt-1">Property Type</span>
      </div>
      <div className="flex flex-col items-center justify-center p-6 bg-white border border-zinc-200">
        <svg className="w-8 h-8 text-zinc-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
        <span className="text-2xl font-bold text-zinc-950">{specs.area.toLocaleString()}</span>
        <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider mt-1">Square Ft</span>
      </div>
      <div className="flex flex-col items-center justify-center p-6 bg-white border border-zinc-200">
        <svg className="w-8 h-8 text-zinc-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4v10l8 4 8-4V7z" />
        </svg>
        <span className="text-2xl font-bold text-zinc-950">{specs.beds}</span>
        <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider mt-1">Bedrooms</span>
      </div>
      <div className="flex flex-col items-center justify-center p-6 bg-white border border-zinc-200">
        <svg className="w-8 h-8 text-zinc-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 12H4M4 12l4-4m-4 4l4 4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2.693C12 2.693 6 8.32 6 12.864c0 3.328 2.686 6.027 6 6.027s6-2.699 6-6.027c0-4.544-6-10.171-6-10.171z" />
        </svg>
        <span className="text-2xl font-bold text-zinc-950">{specs.baths}</span>
        <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider mt-1">Bathrooms</span>
      </div>
    </div>
  );
}
