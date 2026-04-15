"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import { MOCK_USER } from "@/data/dashboard";

const ROLE_REDIRECTS = {
  admin: "/admin",
  owner: "/owner",
  renter: "/renter",
};

const ROLE_STYLES = {
  admin: "bg-violet-500 hover:bg-violet-600",
  owner: "bg-emerald-500 hover:bg-emerald-600",
  renter: "bg-sky-500 hover:bg-sky-600",
};

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [role, setRole] = useState(MOCK_USER.role);
  const router = useRouter();

  const switchRole = (newRole) => {
    setRole(newRole);
    router.push(ROLE_REDIRECTS[newRole]);
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex">
      <Sidebar
        role={role}
        collapsed={collapsed}
        onToggle={() => setCollapsed((v) => !v)}
      />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          collapsed ? "ml-20" : "ml-64"
        }`}
      >
        <Topbar collapsed={collapsed} role={role} />

        {/* Role Switcher Bar — DEV ONLY */}
        <div className="fixed top-20 right-0 z-20 flex items-center gap-0 border-l border-b border-zinc-800 bg-zinc-950 transition-all duration-300"
          style={{ right: 0, left: collapsed ? "5rem" : "16rem" }}
        >
          <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-[0.4em] px-4 py-2.5 border-r border-zinc-800">
            Dev: Switch Role
          </span>
          {(["admin", "owner", "renter"]).map((r) => (
            <button
              key={r}
              onClick={() => switchRole(r)}
              className={`px-5 py-2.5 text-[9px] font-black uppercase tracking-widest transition-all border-r border-zinc-800 ${
                role === r
                  ? `${ROLE_STYLES[r]} text-white`
                  : "text-zinc-500 hover:text-white hover:bg-zinc-800"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Extra top spacing for the dev bar */}
        <main className="flex-1 mt-[84px] p-6 bg-zinc-900 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
