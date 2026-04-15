"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MOCK_USER } from "@/data/dashboard";

function getPageTitle(pathname) {
  const map = {
    "/admin": "Dashboard Overview",
    "/admin/blog": "Blog Management",
    "/admin/blog/new": "New Blog Post",
    "/admin/messages": "Messages",
    "/admin/properties": "All Properties",
    "/owner": "Dashboard Overview",
    "/owner/listings": "My Listings",
    "/owner/add-property": "Add New Property",
    "/owner/profile": "My Profile",
    "/renter": "Dashboard Overview",
    "/renter/saved": "Saved Homes",
    "/renter/profile": "My Profile",
  };
  if (map[pathname]) return map[pathname];
  if (pathname.startsWith("/admin/blog/")) return "Edit Blog Post";
  return "Dashboard";
}

const ROLE_COLORS = {
  admin: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  owner: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  renter: "bg-sky-500/20 text-sky-300 border-sky-500/30",
};

export default function Topbar({ collapsed, role }) {
  const pathname = usePathname();
  const title = getPageTitle(pathname);
  const user = MOCK_USER;

  return (
    <header
      className={`fixed top-0 right-0 h-20 bg-zinc-900 border-b border-zinc-800 z-30 flex items-center justify-between px-6 transition-all duration-300 ${
        collapsed ? "left-20" : "left-64"
      }`}
    >
      {/* Left: Page Title + Breadcrumb */}
      <div>
        <h1 className="text-sm font-bold text-white tracking-wide">{title}</h1>
        <div className="flex items-center gap-2 mt-0.5">
          <Link href="/" className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest hover:text-emerald-400 transition-colors">
            BashaBari
          </Link>
          <span className="text-zinc-700">/</span>
          <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{title}</span>
        </div>
      </div>

      {/* Right: User Info */}
      <div className="flex items-center gap-4">
        {/* Role Badge */}
        <span className={`hidden sm:inline-flex text-[9px] font-bold uppercase tracking-[0.3em] px-3 py-1.5 border ${ROLE_COLORS[user.role]}`}>
          {user.role}
        </span>

        {/* View Site link */}
        <Link
          href="/"
          className="hidden sm:flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest hover:text-white transition-colors border border-zinc-700 px-4 py-2 hover:border-zinc-500"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="square" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          View Site
        </Link>

        {/* Divider */}
        <div className="w-px h-8 bg-zinc-800" />

        {/* Avatar + Name */}
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 overflow-hidden border border-zinc-700">
            <Image src={user.avatar} alt={user.name} fill className="object-cover" />
          </div>
          <div className="hidden md:block">
            <p className="text-xs font-bold text-white leading-none mb-0.5">{user.name}</p>
            <p className="text-[9px] text-zinc-500 font-medium">{user.email}</p>
          </div>
        </div>

        {/* Logout */}
        <button className="text-zinc-500 hover:text-rose-400 transition-colors" title="Logout">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="square" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </header>
  );
}
