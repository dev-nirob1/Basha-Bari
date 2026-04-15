import Link from "next/link";
import { MOCK_OWNER_LISTINGS } from "@/data/dashboard";

function StatCard({ label, value, sub, accent = "emerald" }) {
  const colors = { emerald: "text-emerald-400", sky: "text-sky-400", amber: "text-amber-400", violet: "text-violet-400" };
  return (
    <div className="bg-zinc-800 border border-zinc-700 p-6">
      <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-3">{label}</p>
      <p className={`text-4xl font-black tracking-tighter ${colors[accent]}`}>{value}</p>
      {sub && <p className="text-[10px] text-zinc-600 mt-2">{sub}</p>}
    </div>
  );
}

export default function OwnerDashboardPage() {
  const active = MOCK_OWNER_LISTINGS.filter((l) => l.status === "active").length;
  const totalViews = MOCK_OWNER_LISTINGS.reduce((s, l) => s + l.views, 0);
  const totalInquiries = MOCK_OWNER_LISTINGS.reduce((s, l) => s + l.inquiries, 0);

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-zinc-800 to-zinc-800/50 border border-zinc-700 p-8 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.4em] mb-2">Owner Dashboard</p>
          <h2 className="text-2xl font-black text-white tracking-tighter">My Properties</h2>
          <p className="text-zinc-400 text-sm font-light mt-1">
            Manage your listings and track performance.
          </p>
        </div>
        <Link
          href="/owner/add-property"
          className="flex items-center gap-3 bg-emerald-500 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-emerald-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="square" d="M12 4v16m8-8H4" /></svg>
          Add Property
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard label="Total Listings" value={MOCK_OWNER_LISTINGS.length} sub="All time" accent="emerald" />
        <StatCard label="Active Listings" value={active} sub={`${MOCK_OWNER_LISTINGS.length - active} inactive`} accent="sky" />
        <StatCard label="Total Views" value={totalViews} sub="Across all listings" accent="violet" />
        <StatCard label="Total Inquiries" value={totalInquiries} sub="From interested renters" accent="amber" />
      </div>

      {/* Listings Preview */}
      <div className="bg-zinc-800 border border-zinc-700">
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-700">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest">Recent Listings</h3>
          <Link href="/owner/listings" className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest hover:text-emerald-300 transition-colors">
            View All
          </Link>
        </div>
        <div className="divide-y divide-zinc-700">
          {MOCK_OWNER_LISTINGS.map((l) => (
            <div key={l.id} className="flex items-center gap-5 px-6 py-4 hover:bg-zinc-700/40 transition-colors group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={l.image} alt={l.title} className="w-14 h-14 object-cover shrink-0 border border-zinc-700" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate">{l.title}</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">{l.location}</p>
              </div>
              <div className="hidden md:flex items-center gap-6 text-center shrink-0">
                <div>
                  <p className="text-sm font-bold text-white">{l.views}</p>
                  <p className="text-[9px] text-zinc-600 uppercase tracking-widest">Views</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{l.inquiries}</p>
                  <p className="text-[9px] text-zinc-600 uppercase tracking-widest">Inquiries</p>
                </div>
              </div>
              <span className={`shrink-0 text-[9px] font-bold uppercase tracking-widest px-2 py-1 border ${
                l.status === "active"
                  ? "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
                  : "border-zinc-700 text-zinc-500"
              }`}>
                {l.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
