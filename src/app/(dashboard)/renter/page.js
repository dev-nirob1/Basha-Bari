import Link from "next/link";
import { MOCK_USER, MOCK_SAVED_PROPERTIES } from "@/data/dashboard";

export default function RenterDashboardPage() {
  const completion = 70; // mock profile completion

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-zinc-800 to-zinc-800/50 border border-zinc-700 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-[10px] font-bold text-sky-400 uppercase tracking-[0.4em] mb-2">Renter Dashboard</p>
          <h2 className="text-2xl font-black text-white tracking-tighter">Hello, {MOCK_USER.name.split(" ")[0]} 👋</h2>
          <p className="text-zinc-400 text-sm font-light mt-1">Find your perfect space and manage your saved homes.</p>
        </div>
        <Link
          href="/properties"
          className="flex items-center gap-3 bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="square" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          Browse Properties
        </Link>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-zinc-800 border border-zinc-700 p-6">
          <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-3">Saved Homes</p>
          <p className="text-4xl font-black text-sky-400 tracking-tighter">{MOCK_SAVED_PROPERTIES.length}</p>
          <Link href="/renter/saved" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest hover:text-sky-400 transition-colors mt-2 inline-block">
            View all →
          </Link>
        </div>
        <div className="bg-zinc-800 border border-zinc-700 p-6">
          <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-3">Profile Completion</p>
          <p className="text-4xl font-black text-emerald-400 tracking-tighter">{completion}%</p>
          <div className="h-1 bg-zinc-700 mt-3">
            <div className="h-full bg-emerald-500 transition-all" style={{ width: `${completion}%` }} />
          </div>
        </div>
        <div className="bg-zinc-800 border border-zinc-700 p-6">
          <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-3">Member Since</p>
          <p className="text-4xl font-black text-violet-400 tracking-tighter">2026</p>
          <p className="text-[10px] text-zinc-600 font-medium mt-2">April 1, 2026</p>
        </div>
      </div>

      {/* Saved Properties Preview */}
      <div className="bg-zinc-800 border border-zinc-700">
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-700">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest">Saved Homes</h3>
          <Link href="/renter/saved" className="text-[10px] font-bold text-sky-400 uppercase tracking-widest hover:text-sky-300 transition-colors">
            View All
          </Link>
        </div>
        <div className="divide-y divide-zinc-700">
          {MOCK_SAVED_PROPERTIES.map((p) => (
            <div key={p.id} className="flex items-center gap-4 px-6 py-4 hover:bg-zinc-700/30 transition-colors group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.title} className="w-14 h-14 object-cover shrink-0 border border-zinc-700" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate">{p.title}</p>
                <p className="text-[10px] text-zinc-500">{p.location}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-bold text-emerald-400">৳{p.price.toLocaleString()}</p>
                <p className="text-[9px] text-zinc-600">/ month</p>
              </div>
              <Link href={`/properties/${p.id}`} className="text-zinc-600 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="square" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
