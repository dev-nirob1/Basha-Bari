"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_GROUPS = {
  admin: [
    {
      label: "Overview",
      items: [{ href: "/admin", label: "Dashboard", icon: <GridIcon /> }],
    },
    {
      label: "Content",
      items: [
        { href: "/admin/blog", label: "Blog Posts", icon: <BookIcon /> },
        {
          href: "/admin/messages",
          label: "Messages",
          icon: <MailIcon />,
          badge: 2,
        },
      ],
    },
    {
      label: "Management",
      items: [
        {
          href: "/admin/properties",
          label: "All Properties",
          icon: <HomeIcon />,
        },
        { href: "/admin/users", label: "Users", icon: <UsersIcon /> },
      ],
    },
  ],
  owner: [
    {
      label: "Overview",
      items: [{ href: "/owner", label: "Dashboard", icon: <GridIcon /> }],
    },
    {
      label: "Properties",
      items: [
        { href: "/owner/listings", label: "My Listings", icon: <HomeIcon /> },
        {
          href: "/owner/add-property",
          label: "Add Property",
          icon: <PlusIcon />,
        },
      ],
    },
    {
      label: "Account",
      items: [{ href: "/owner/profile", label: "Profile", icon: <UserIcon /> }],
    },
  ],
  renter: [
    {
      label: "Overview",
      items: [{ href: "/renter", label: "Dashboard", icon: <GridIcon /> }],
    },
    {
      label: "Properties",
      items: [
        { href: "/renter/saved", label: "Saved Homes", icon: <HeartIcon /> },
        { href: "/properties", label: "Browse All", icon: <SearchIcon /> },
      ],
    },
    {
      label: "Account",
      items: [
        { href: "/renter/profile", label: "Profile", icon: <UserIcon /> },
      ],
    },
  ],
};

export default function Sidebar({ role = "owner", collapsed, onToggle }) {
  const pathname = usePathname();
  const navGroups = NAV_GROUPS[role] || NAV_GROUPS.admin;

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-zinc-950 border-r border-zinc-800 flex flex-col z-40 transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 p-6 border-b border-zinc-800 h-20 shrink-0">
        <div className="h-8 w-8 border-2 border-white flex items-center justify-center shrink-0">
          <div className="h-2.5 w-2.5 bg-emerald-500" />
        </div>
        {!collapsed && (
          <span className="text-sm font-bold tracking-[0.2em] text-white uppercase whitespace-nowrap">
            BashaBari
          </span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-6">
        {navGroups.map((group) => (
          <div key={group.label}>
            {!collapsed && (
              <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.4em] mb-2 px-3">
                {group.label}
              </p>
            )}
            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 transition-all duration-200 group relative ${
                      isActive
                        ? "bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-500"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-800 border-l-2 border-transparent"
                    }`}
                    title={collapsed ? item.label : undefined}
                  >
                    <span className="w-5 h-5 shrink-0">{item.icon}</span>
                    {!collapsed && (
                      <span className="text-xs font-semibold tracking-wide">
                        {item.label}
                      </span>
                    )}
                    {!collapsed && item.badge && (
                      <span className="ml-auto bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.5 min-w-[18px] text-center">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Toggle + Bottom */}
      <div className="border-t border-zinc-800 p-3">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center gap-2 p-2.5 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all duration-200"
        >
          <span className="w-4 h-4">
            {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </span>
          {!collapsed && (
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Collapse
            </span>
          )}
        </button>
      </div>
    </aside>
  );
}

// Icons
function GridIcon() {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="square"
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      />
    </svg>
  );
}
function BookIcon() {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="square"
        strokeLinejoin="miter"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="square"
        strokeLinejoin="miter"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="square"
        strokeLinejoin="miter"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="square"
        strokeLinejoin="miter"
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="square" strokeLinejoin="miter" d="M12 4v16m8-8H4" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="square"
        strokeLinejoin="miter"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="square"
        strokeLinejoin="miter"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="square"
        strokeLinejoin="miter"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
}
function ChevronLeftIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="square" strokeLinejoin="miter" d="M15 19l-7-7 7-7" />
    </svg>
  );
}
function ChevronRightIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="square" strokeLinejoin="miter" d="M9 5l7 7-7 7" />
    </svg>
  );
}
