"use client";

import { useState } from "react";
import Link from "next/link";
import { MOCK_OWNER_LISTINGS } from "@/data/dashboard";

export default function OwnerListingsPage() {
  const [listings, setListings] = useState(MOCK_OWNER_LISTINGS);

  const toggleStatus = (id) => {
    setListings((prev) =>
      prev.map((l) =>
        l.id === id
          ? { ...l, status: l.status === "active" ? "inactive" : "active" }
          : l
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-white tracking-tighter">My Listings</h2>
          <p className="text-zinc-500 text-xs font-medium mt-1">
            {listings.filter((l) => l.status === "active").length} active ·{" "}
            {listings.length} total
          </p>
        </div>
        <Link
          href="/owner/add-property"
          className="flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="square" d="M12 4v16m8-8H4" /></svg>
          Add New
        </Link>
      </div>

      {/* Table */}
      <div className="bg-zinc-800 border border-zinc-700 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-zinc-700 bg-zinc-900">
          <div className="col-span-4 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Property</div>
          <div className="col-span-2 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Price / mo</div>
          <div className="col-span-1 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Views</div>
          <div className="col-span-1 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Leads</div>
          <div className="col-span-2 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Status</div>
          <div className="col-span-2 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Actions</div>
        </div>

        <div className="divide-y divide-zinc-700">
          {listings.map((l) => (
            <div key={l.id} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-zinc-700/30 transition-colors group">
              {/* Property */}
              <div className="col-span-4 flex items-center gap-4 min-w-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.image} alt={l.title} className="w-12 h-12 object-cover shrink-0 border border-zinc-700" />
                <div className="min-w-0">
                  <p className="text-xs font-bold text-white truncate">{l.title}</p>
                  <p className="text-[10px] text-zinc-500 truncate">{l.location}</p>
                  <p className="text-[9px] text-zinc-600 mt-0.5">{l.type} · {l.beds} beds</p>
                </div>
              </div>

              {/* Price */}
              <div className="col-span-2">
                <p className="text-sm font-bold text-white">৳{l.price.toLocaleString()}</p>
              </div>

              {/* Views */}
              <div className="col-span-1">
                <p className="text-sm text-zinc-300 font-medium">{l.views}</p>
              </div>

              {/* Leads */}
              <div className="col-span-1">
                <p className="text-sm text-zinc-300 font-medium">{l.inquiries}</p>
              </div>

              {/* Status Toggle */}
              <div className="col-span-2">
                <button
                  onClick={() => toggleStatus(l.id)}
                  className={`flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 border transition-all duration-300 ${
                    l.status === "active"
                      ? "border-emerald-500/40 text-emerald-400 bg-emerald-500/10 hover:bg-rose-500/10 hover:text-rose-400 hover:border-rose-500/40"
                      : "border-zinc-700 text-zinc-500 hover:border-emerald-500/40 hover:text-emerald-400 hover:bg-emerald-500/10"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${l.status === "active" ? "bg-emerald-400" : "bg-zinc-600"}`} />
                  {l.status}
                </button>
              </div>

              {/* Actions */}
              <div className="col-span-2 flex items-center gap-3">
                <Link
                  href={`/properties/${l.id}`}
                  className="text-zinc-600 hover:text-sky-400 transition-colors"
                  title="View"
                  target="_blank"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="square" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </Link>
                <button className="text-zinc-600 hover:text-emerald-400 transition-colors" title="Edit">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="square" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                </button>
                <button className="text-zinc-600 hover:text-rose-400 transition-colors" title="Delete">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="square" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
