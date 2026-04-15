import Link from "next/link";
import { ARTICLES } from "@/data/articles";

const CATEGORY_COLORS = {
  Architecture: "bg-sky-500/20 text-sky-400",
  Design: "bg-violet-500/20 text-violet-400",
  Heritage: "bg-amber-500/20 text-amber-400",
  Sustainability: "bg-emerald-500/20 text-emerald-400",
  Urbanism: "bg-rose-500/20 text-rose-400",
  Lifestyle: "bg-pink-500/20 text-pink-400",
};

export default function AdminBlogPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-white tracking-tighter">All Articles</h2>
          <p className="text-zinc-500 text-xs font-medium mt-1">{ARTICLES.length} articles published</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="square" d="M12 4v16m8-8H4" /></svg>
          New Article
        </Link>
      </div>

      {/* Table */}
      <div className="bg-zinc-800 border border-zinc-700 overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-zinc-700 bg-zinc-900">
          <div className="col-span-5 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Title</div>
          <div className="col-span-2 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Category</div>
          <div className="col-span-2 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Author</div>
          <div className="col-span-2 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Date</div>
          <div className="col-span-1 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Actions</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-zinc-700">
          {ARTICLES.map((article) => (
            <div key={article.slug} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-zinc-700/40 transition-colors group">
              {/* Title */}
              <div className="col-span-5 min-w-0">
                <p className="text-sm font-semibold text-white truncate group-hover:text-emerald-400 transition-colors">
                  {article.title}
                </p>
                <p className="text-[10px] text-zinc-500 mt-0.5 truncate">{article.excerpt}</p>
              </div>

              {/* Category */}
              <div className="col-span-2">
                <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 ${CATEGORY_COLORS[article.category] || "bg-zinc-700 text-zinc-400"}`}>
                  {article.category}
                </span>
              </div>

              {/* Author */}
              <div className="col-span-2">
                <p className="text-xs text-zinc-300 font-medium truncate">{article.author?.name || "—"}</p>
                <p className="text-[9px] text-zinc-600">{article.readTime}</p>
              </div>

              {/* Date */}
              <div className="col-span-2">
                <p className="text-xs text-zinc-400">{article.date}</p>
              </div>

              {/* Actions */}
              <div className="col-span-1 flex items-center gap-2">
                <Link
                  href={`/admin/blog/${article.slug}`}
                  className="text-zinc-600 hover:text-emerald-400 transition-colors"
                  title="Edit"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="square" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                </Link>
                <Link
                  href={`/journal/${article.slug}`}
                  className="text-zinc-600 hover:text-sky-400 transition-colors"
                  title="View"
                  target="_blank"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="square" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </Link>
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
