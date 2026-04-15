import Link from "next/link";
import { MOCK_USER, MOCK_MESSAGES, MOCK_OWNER_LISTINGS } from "@/data/dashboard";
import { ARTICLES } from "@/data/articles";

function StatCard({ label, value, change, icon, accent = "emerald" }) {
  const colors = {
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    sky: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  };
  return (
    <div className="bg-zinc-800 border border-zinc-700 p-6 flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] mb-2">{label}</p>
          <p className="text-4xl font-black text-white tracking-tighter">{value}</p>
        </div>
        <div className={`w-10 h-10 border flex items-center justify-center ${colors[accent]}`}>
          {icon}
        </div>
      </div>
      {change && (
        <p className="text-[10px] text-zinc-500 font-medium">{change}</p>
      )}
    </div>
  );
}

export default function AdminPage() {
  const unreadMessages = MOCK_MESSAGES.filter((m) => !m.read);
  const totalListings = MOCK_OWNER_LISTINGS.length;

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-zinc-800 to-zinc-800/50 border border-zinc-700 p-8 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.4em] mb-2">
            Welcome Back
          </p>
          <h2 className="text-2xl font-black text-white tracking-tighter">
            {MOCK_USER.name}
          </h2>
          <p className="text-zinc-400 text-sm font-light mt-1">
            Here&apos;s what&apos;s happening on the platform today.
          </p>
        </div>
        <div className="hidden md:flex gap-3">
          <Link
            href="/admin/blog/new"
            className="flex items-center gap-3 bg-emerald-500 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-emerald-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="square" d="M12 4v16m8-8H4" /></svg>
            New Post
          </Link>
          <Link
            href="/admin/messages"
            className="flex items-center gap-3 bg-zinc-700 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-zinc-600 transition-colors"
          >
            Messages
            {unreadMessages.length > 0 && (
              <span className="bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.5 min-w-[18px] text-center">
                {unreadMessages.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard label="Total Articles" value={ARTICLES.length} change="↑ 2 this month" accent="emerald" icon={<BookSvg />} />
        <StatCard label="Total Listings" value={totalListings} change="↑ 1 this week" accent="sky" icon={<HomeSvg />} />
        <StatCard label="New Messages" value={unreadMessages.length} change={`${MOCK_MESSAGES.length} total`} accent="amber" icon={<MailSvg />} />
        <StatCard label="Active Users" value="248" change="↑ 12 this week" accent="violet" icon={<UsersSvg />} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Recent Messages */}
        <div className="bg-zinc-800 border border-zinc-700">
          <div className="flex items-center justify-between p-6 border-b border-zinc-700">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Recent Messages</h3>
            <Link href="/admin/messages" className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest hover:text-emerald-300 transition-colors">
              View All
            </Link>
          </div>
          <div className="divide-y divide-zinc-700">
            {MOCK_MESSAGES.slice(0, 4).map((msg) => (
              <div key={msg.id} className="flex items-start gap-4 p-5 hover:bg-zinc-700/50 transition-colors cursor-pointer group">
                <div className="w-8 h-8 bg-zinc-700 border border-zinc-600 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-zinc-300">{msg.name.charAt(0)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-xs font-bold text-white truncate">{msg.name}</p>
                    {!msg.read && <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0" />}
                  </div>
                  <p className="text-[10px] text-zinc-400 truncate">{msg.subject}</p>
                </div>
                <p className="text-[9px] text-zinc-600 shrink-0 font-medium">{msg.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Blog Posts */}
        <div className="bg-zinc-800 border border-zinc-700">
          <div className="flex items-center justify-between p-6 border-b border-zinc-700">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Blog Posts</h3>
            <Link href="/admin/blog" className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest hover:text-emerald-300 transition-colors">
              View All
            </Link>
          </div>
          <div className="divide-y divide-zinc-700">
            {ARTICLES.slice(0, 4).map((article) => (
              <div key={article.slug} className="flex items-center gap-4 p-5 hover:bg-zinc-700/50 transition-colors group">
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-white truncate mb-0.5">{article.title}</p>
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 ${
                      article.category === "Architecture" ? "bg-sky-500/20 text-sky-400" :
                      article.category === "Design" ? "bg-violet-500/20 text-violet-400" :
                      article.category === "Heritage" ? "bg-amber-500/20 text-amber-400" :
                      "bg-emerald-500/20 text-emerald-400"
                    }`}>{article.category}</span>
                    <span className="text-[9px] text-zinc-500">{article.date}</span>
                  </div>
                </div>
                <Link href={`/admin/blog/${article.slug}`} className="text-zinc-600 hover:text-emerald-400 transition-colors opacity-0 group-hover:opacity-100">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="square" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BookSvg() { return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="square" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>; }
function HomeSvg() { return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="square" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>; }
function MailSvg() { return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="square" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>; }
function UsersSvg() { return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="square" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>; }
