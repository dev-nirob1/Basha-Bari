const USERS = [
  { id: 1, name: "Ahmed Raza", email: "ahmed.raza@gmail.com", role: "owner", listings: 3, joined: "Apr 01, 2026", status: "active" },
  { id: 2, name: "Sarah Kabir", email: "sarah.k@outlook.com", role: "owner", listings: 2, joined: "Apr 02, 2026", status: "active" },
  { id: 3, name: "Zayn Miah", email: "zayn.m@gmail.com", role: "owner", listings: 1, joined: "Apr 04, 2026", status: "active" },
  { id: 4, name: "Naila Jahan", email: "naila.j@yahoo.com", role: "owner", listings: 2, joined: "Apr 05, 2026", status: "active" },
  { id: 5, name: "Tanvir Hossain", email: "tanvir@gmail.com", role: "renter", listings: 0, joined: "Apr 06, 2026", status: "active" },
  { id: 6, name: "Sadia Islam", email: "sadia.islam@outlook.com", role: "renter", listings: 0, joined: "Apr 07, 2026", status: "active" },
  { id: 7, name: "Karim Hossain", email: "k.hossain@company.bd", role: "renter", listings: 0, joined: "Apr 08, 2026", status: "active" },
  { id: 8, name: "Nasrin Begum", email: "nasrin.b@yahoo.com", role: "renter", listings: 0, joined: "Apr 09, 2026", status: "inactive" },
  { id: 9, name: "Rahim Ahmed", email: "rahim.a@gmail.com", role: "renter", listings: 0, joined: "Apr 10, 2026", status: "active" },
  { id: 10, name: "Al Hasan Nirob", email: "nirob@bashabari.com", role: "admin", listings: 0, joined: "Apr 01, 2026", status: "active" },
];

const ROLE_STYLES = {
  admin: "text-violet-400 bg-violet-500/10 border-violet-500/30",
  owner: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  renter: "text-sky-400 bg-sky-500/10 border-sky-500/30",
};

export default function AdminUsersPage() {
  const owners = USERS.filter((u) => u.role === "owner").length;
  const renters = USERS.filter((u) => u.role === "renter").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-white tracking-tighter">Users</h2>
          <p className="text-zinc-500 text-xs font-medium mt-1">
            {USERS.length} total — {owners} owners · {renters} renters
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total Users", value: USERS.length, color: "text-white" },
          { label: "Owners", value: owners, color: "text-emerald-400" },
          { label: "Renters", value: renters, color: "text-sky-400" },
          { label: "Admins", value: USERS.filter((u) => u.role === "admin").length, color: "text-violet-400" },
        ].map((s) => (
          <div key={s.label} className="bg-zinc-800 border border-zinc-700 p-5">
            <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-2">{s.label}</p>
            <p className={`text-3xl font-black tracking-tighter ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Users Table */}
      <div className="bg-zinc-800 border border-zinc-700 overflow-hidden">
        <div className="grid grid-cols-12 gap-3 px-6 py-3 border-b border-zinc-700 bg-zinc-900">
          <div className="col-span-4 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">User</div>
          <div className="col-span-2 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Role</div>
          <div className="col-span-2 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Listings</div>
          <div className="col-span-2 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Joined</div>
          <div className="col-span-1 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Status</div>
          <div className="col-span-1 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Act.</div>
        </div>
        <div className="divide-y divide-zinc-700">
          {USERS.map((u) => (
            <div key={u.id} className="grid grid-cols-12 gap-3 px-6 py-4 items-center hover:bg-zinc-700/30 transition-colors group">
              <div className="col-span-4 min-w-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-zinc-700 border border-zinc-600 flex items-center justify-center shrink-0 text-xs font-bold text-zinc-300">
                    {u.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-white truncate">{u.name}</p>
                    <p className="text-[10px] text-zinc-500 truncate">{u.email}</p>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 border ${ROLE_STYLES[u.role]}`}>
                  {u.role}
                </span>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-zinc-300 font-medium">{u.listings}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-zinc-400">{u.joined}</p>
              </div>
              <div className="col-span-1">
                <span className={`text-[9px] font-bold uppercase px-2 py-1 border ${
                  u.status === "active"
                    ? "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
                    : "border-zinc-700 text-zinc-500"
                }`}>{u.status}</span>
              </div>
              <div className="col-span-1">
                <button className="text-zinc-600 hover:text-rose-400 transition-colors" title="Suspend User">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="square" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
