"use client";

import { useState } from "react";
import Link from "next/link";
import { MOCK_SAVED_PROPERTIES } from "@/data/dashboard";

export default function RenterSavedPage() {
  const [saved, setSaved] = useState(MOCK_SAVED_PROPERTIES);

  const remove = (id) => setSaved((p) => p.filter((s) => s.id !== id));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-white tracking-tighter">Saved Homes</h2>
          <p className="text-zinc-500 text-xs font-medium mt-1">{saved.length} properties in your collection</p>
        </div>
        {saved.length > 0 && (
          <button
            onClick={() => setSaved([])}
            className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest hover:text-rose-400 transition-colors border border-zinc-700 px-4 py-2"
          >
            Clear All
          </button>
        )}
      </div>

      {saved.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {saved.map((p) => (
            <div key={p.id} className="bg-zinc-800 border border-zinc-700 overflow-hidden group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <button
                  onClick={() => remove(p.id)}
                  className="absolute top-3 right-3 w-8 h-8 bg-zinc-950/80 backdrop-blur-sm border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-rose-400 hover:border-rose-500/40 transition-all"
                  title="Remove from saved"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="square" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-sm font-bold text-white mb-1">{p.title}</p>
                <p className="text-[10px] text-zinc-500 mb-3">{p.location}</p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-700">
                  <div>
                    <p className="text-lg font-black text-emerald-400 tracking-tighter">৳{p.price.toLocaleString()}</p>
                    <p className="text-[9px] text-zinc-600">/month</p>
                  </div>
                  <Link
                    href={`/properties/${p.id}`}
                    className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest border border-zinc-700 px-4 py-2 hover:border-emerald-500 hover:text-emerald-400 transition-all"
                  >
                    View →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-zinc-800 border border-zinc-700 py-24 flex flex-col items-center text-center gap-6">
          <div className="w-16 h-16 border border-zinc-700 flex items-center justify-center text-zinc-600">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="square" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-white mb-1">No saved properties yet</p>
            <p className="text-zinc-600 text-xs">Browse our listings and save the ones you love.</p>
          </div>
          <Link href="/properties" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest transition-colors">
            Browse Properties
          </Link>
        </div>
      )}
    </div>
  );
}
