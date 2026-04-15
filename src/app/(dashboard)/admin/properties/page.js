import Link from "next/link";

// Reusing the existing properties mock data structure
const ALL_PROPERTIES = [
  { id: "prop-1", title: "Modern Architectural Villa", location: "Gulshan 2", price: 150000, beds: 4, type: "Villa", status: "active", owner: "Ahmed Raza" },
  { id: "prop-2", title: "Luxury Penthouse", location: "Banani", price: 120000, beds: 3, type: "Penthouse", status: "active", owner: "Ahmed Raza" },
  { id: "prop-3", title: "Minimalist Smart Apartment", location: "Dhanmondi", price: 65000, beds: 3, type: "Apartment", status: "inactive", owner: "Sarah Kabir" },
  { id: "prop-4", title: "Spacious Duplex", location: "Baridhara DOHS", price: 180000, beds: 5, type: "Duplex", status: "active", owner: "Ahmed Raza" },
  { id: "prop-5", title: "Urban Studio Loft", location: "Bashundhara R/A", price: 35000, beds: 1, type: "Studio", status: "active", owner: "Zayn Miah" },
  { id: "prop-6", title: "Corporate Executive Suite", location: "Mohakhali DOHS", price: 85000, beds: 2, type: "Apartment", status: "active", owner: "Naila Jahan" },
  { id: "prop-7", title: "Lakeside Serenity House", location: "Uttara Sector 4", price: 95000, beds: 4, type: "House", status: "active", owner: "Sarah Kabir" },
  { id: "prop-8", title: "Boutique Townhouse", location: "Mirpur DOHS", price: 70000, beds: 3, type: "House", status: "active", owner: "Naila Jahan" },
];

const TYPE_COLORS = {
  Villa: "text-violet-400 bg-violet-500/10",
  Penthouse: "text-amber-400 bg-amber-500/10",
  Apartment: "text-sky-400 bg-sky-500/10",
  Duplex: "text-rose-400 bg-rose-500/10",
  Studio: "text-pink-400 bg-pink-500/10",
  House: "text-emerald-400 bg-emerald-500/10",
};

export default function AdminPropertiesPage() {
  const active = ALL_PROPERTIES.filter((p) => p.status === "active").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-white tracking-tighter">All Properties</h2>
          <p className="text-zinc-500 text-xs font-medium mt-1">
            {active} active · {ALL_PROPERTIES.length} total listings on the platform
          </p>
        </div>
        <Link
          href="/owner/add-property"
          className="flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="square" d="M12 4v16m8-8H4"/></svg>
          Add Listing
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total", value: ALL_PROPERTIES.length, color: "text-white" },
          { label: "Active", value: active, color: "text-emerald-400" },
          { label: "Inactive", value: ALL_PROPERTIES.length - active, color: "text-rose-400" },
          { label: "Avg. Rent", value: `৳${Math.round(ALL_PROPERTIES.reduce((s, p) => s + p.price, 0) / ALL_PROPERTIES.length / 1000)}k`, color: "text-amber-400" },
        ].map((s) => (
          <div key={s.label} className="bg-zinc-800 border border-zinc-700 p-5">
            <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-2">{s.label}</p>
            <p className={`text-3xl font-black tracking-tighter ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-zinc-800 border border-zinc-700 overflow-hidden">
        <div className="grid grid-cols-12 gap-3 px-6 py-3 border-b border-zinc-700 bg-zinc-900">
          <div className="col-span-4 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Property</div>
          <div className="col-span-2 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Type</div>
          <div className="col-span-2 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Owner</div>
          <div className="col-span-2 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Rent</div>
          <div className="col-span-1 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Status</div>
          <div className="col-span-1 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Act.</div>
        </div>
        <div className="divide-y divide-zinc-700">
          {ALL_PROPERTIES.map((p) => (
            <div key={p.id} className="grid grid-cols-12 gap-3 px-6 py-4 items-center hover:bg-zinc-700/30 transition-colors group">
              <div className="col-span-4 min-w-0">
                <p className="text-xs font-bold text-white truncate">{p.title}</p>
                <p className="text-[10px] text-zinc-500">{p.location}, Dhaka</p>
              </div>
              <div className="col-span-2">
                <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 ${TYPE_COLORS[p.type] || "text-zinc-400 bg-zinc-700"}`}>
                  {p.type}
                </span>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-zinc-300 font-medium truncate">{p.owner}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs font-bold text-white">৳{p.price.toLocaleString()}</p>
              </div>
              <div className="col-span-1">
                <span className={`text-[9px] font-bold uppercase px-2 py-1 border ${
                  p.status === "active"
                    ? "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
                    : "border-zinc-700 text-zinc-500"
                }`}>{p.status}</span>
              </div>
              <div className="col-span-1 flex gap-2">
                <Link href={`/properties/${p.id}`} target="_blank" className="text-zinc-600 hover:text-sky-400 transition-colors" title="View">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="square" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </Link>
                <button className="text-zinc-600 hover:text-rose-400 transition-colors" title="Delete">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="square" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
