export default function PropertyHeader({ property }) {
  return (
    <div className="pb-8 border-b border-zinc-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            {property.status}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-950 tracking-tight mb-2">
            {property.title}
          </h1>
          <p className="text-lg text-zinc-600 flex items-center gap-2">
            <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {property.location}
          </p>
        </div>
        <div className="text-left md:text-right">
          <p className="text-4xl font-bold text-zinc-950">
            ${property.price.toLocaleString()}
          </p>
          <p className="text-zinc-500 font-medium">/ month</p>
        </div>
      </div>
    </div>
  );
}
