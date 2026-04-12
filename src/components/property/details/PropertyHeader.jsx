export default function PropertyHeader({ property }) {
  return (
    <div className="pb-8 border-b border-zinc-200">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-6">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              {property.status}
            </div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest bg-zinc-100 px-3 py-1">
              ID: {property.id || "BB-102"}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-950 tracking-tight mb-3">
            {property.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-zinc-500">
            <p className="text-lg flex items-center gap-2">
              <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {property.location}
            </p>
            <span className="hidden sm:block text-zinc-300">|</span>
            <p className="text-sm font-medium uppercase tracking-wider flex items-center gap-2">
              Listed on: {property.listedAt || "Oct 12, 2023"}
            </p>
          </div>
        </div>

        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-end gap-6 border-t md:border-t-0 pt-6 md:pt-0">
          <div className="text-left md:text-right">
            <p className="text-4xl font-bold text-zinc-950">
              ${property.price.toLocaleString()}
            </p>
            <p className="text-zinc-500 font-medium uppercase tracking-widest text-xs mt-1">/ month</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="p-3 border border-zinc-200 hover:border-zinc-950 hover:bg-zinc-50 transition-all group" title="Save to Favorites">
              <svg className="w-5 h-5 text-zinc-600 group-hover:text-zinc-950 group-hover:fill-zinc-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="p-3 border border-zinc-200 hover:border-zinc-950 hover:bg-zinc-50 transition-all group" title="Share Listing">
              <svg className="w-5 h-5 text-zinc-600 group-hover:text-zinc-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
