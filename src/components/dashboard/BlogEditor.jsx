"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CATEGORIES = ["Architecture", "Design", "Heritage", "Sustainability", "Urbanism", "Lifestyle"];
const BLOCK_TYPES = ["paragraph", "heading", "blockquote", "image"];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function BlogEditorPage({ article = null }) {
  const isEditing = !!article;
  const router = useRouter();

  const [form, setForm] = useState({
    title: article?.title || "",
    slug: article?.slug || "",
    category: article?.category || "Architecture",
    excerpt: article?.excerpt || "",
    image: article?.image || "",
    readTime: article?.readTime || "5 MIN READ",
    authorName: article?.author?.name || "",
    authorRole: article?.author?.role || "",
  });

  const [content, setContent] = useState(
    article?.content || [{ type: "paragraph", text: "" }]
  );

  const field = (key) => (e) => {
    const val = e.target.value;
    setForm((prev) => ({
      ...prev,
      [key]: val,
      ...(key === "title" && !isEditing ? { slug: slugify(val) } : {}),
    }));
  };

  const updateBlock = (idx, key, val) => {
    setContent((prev) => {
      const updated = [...prev];
      updated[idx] = { ...updated[idx], [key]: val };
      return updated;
    });
  };

  const addBlock = () => setContent((prev) => [...prev, { type: "paragraph", text: "" }]);
  const removeBlock = (idx) => setContent((prev) => prev.filter((_, i) => i !== idx));
  const moveBlock = (idx, dir) => {
    setContent((prev) => {
      const arr = [...prev];
      const target = idx + dir;
      if (target < 0 || target >= arr.length) return arr;
      [arr[idx], arr[target]] = [arr[target], arr[idx]];
      return arr;
    });
  };

  const inputCls = "w-full bg-zinc-900 border border-zinc-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-zinc-600";
  const labelCls = "block text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-2";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-black text-white tracking-tighter">
          {isEditing ? "Edit Article" : "New Article"}
        </h2>
        <div className="flex gap-3">
          <button onClick={() => router.back()} className="px-5 py-2.5 text-xs font-bold text-zinc-400 uppercase tracking-widest border border-zinc-700 hover:border-zinc-500 hover:text-white transition-colors">
            Cancel
          </button>
          <button className="px-5 py-2.5 text-xs font-bold text-white uppercase tracking-widest bg-zinc-700 hover:bg-zinc-600 transition-colors">
            Save Draft
          </button>
          <button className="px-5 py-2.5 text-xs font-bold text-white uppercase tracking-widest bg-emerald-500 hover:bg-emerald-600 transition-colors">
            {isEditing ? "Update & Publish" : "Publish Article"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* LEFT: Content Builder */}
        <div className="xl:col-span-2 space-y-6">
          {/* Title */}
          <div className="bg-zinc-800 border border-zinc-700 p-6 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest border-b border-zinc-700 pb-3">Article Info</h3>
            <div>
              <label className={labelCls}>Title</label>
              <input value={form.title} onChange={field("title")} placeholder="Enter article title..." className={inputCls} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Slug (URL)</label>
                <input value={form.slug} onChange={field("slug")} placeholder="article-slug" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Read Time</label>
                <input value={form.readTime} onChange={field("readTime")} placeholder="8 MIN READ" className={inputCls} />
              </div>
            </div>
            <div>
              <label className={labelCls}>Excerpt (max 200 chars)</label>
              <textarea
                value={form.excerpt}
                onChange={field("excerpt")}
                maxLength={200}
                rows={2}
                placeholder="Brief article description..."
                className={`${inputCls} resize-none`}
              />
              <p className="text-[9px] text-zinc-600 mt-1 text-right">{form.excerpt.length}/200</p>
            </div>
            <div>
              <label className={labelCls}>Cover Image URL</label>
              <input value={form.image} onChange={field("image")} placeholder="https://images.unsplash.com/..." className={inputCls} />
            </div>
          </div>

          {/* Content Blocks */}
          <div className="bg-zinc-800 border border-zinc-700 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-700 pb-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest">Content Blocks</h3>
              <button onClick={addBlock} className="flex items-center gap-2 text-[10px] font-bold text-emerald-400 uppercase tracking-widest hover:text-emerald-300 transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="square" d="M12 4v16m8-8H4" /></svg>
                Add Block
              </button>
            </div>

            <div className="space-y-4">
              {content.map((block, idx) => (
                <div key={idx} className="border border-zinc-700 bg-zinc-900 p-4 space-y-3">
                  {/* Block Header */}
                  <div className="flex items-center gap-3">
                    <select
                      value={block.type}
                      onChange={(e) => updateBlock(idx, "type", e.target.value)}
                      className="bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 focus:outline-none focus:border-emerald-500"
                    >
                      {BLOCK_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <div className="flex gap-1 ml-auto">
                      <button onClick={() => moveBlock(idx, -1)} className="p-1.5 text-zinc-600 hover:text-white transition-colors" title="Move Up">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="square" d="M5 15l7-7 7 7" /></svg>
                      </button>
                      <button onClick={() => moveBlock(idx, 1)} className="p-1.5 text-zinc-600 hover:text-white transition-colors" title="Move Down">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="square" d="M19 9l-7 7-7-7" /></svg>
                      </button>
                      <button onClick={() => removeBlock(idx)} className="p-1.5 text-zinc-600 hover:text-rose-400 transition-colors" title="Remove">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="square" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                  </div>

                  {/* Block Content Input */}
                  {block.type === "image" ? (
                    <div className="space-y-2">
                      <input
                        value={block.src || ""}
                        onChange={(e) => updateBlock(idx, "src", e.target.value)}
                        placeholder="Image URL..."
                        className={`${inputCls} text-xs`}
                      />
                      <input
                        value={block.caption || ""}
                        onChange={(e) => updateBlock(idx, "caption", e.target.value)}
                        placeholder="Image caption..."
                        className={`${inputCls} text-xs`}
                      />
                    </div>
                  ) : block.type === "blockquote" ? (
                    <div className="space-y-2">
                      <textarea
                        value={block.text || ""}
                        onChange={(e) => updateBlock(idx, "text", e.target.value)}
                        placeholder="Quote text..."
                        rows={2}
                        className={`${inputCls} text-xs resize-none`}
                      />
                      <input
                        value={block.author || ""}
                        onChange={(e) => updateBlock(idx, "author", e.target.value)}
                        placeholder="— Author name, Title"
                        className={`${inputCls} text-xs`}
                      />
                    </div>
                  ) : (
                    <textarea
                      value={block.text || ""}
                      onChange={(e) => updateBlock(idx, "text", e.target.value)}
                      placeholder={block.type === "heading" ? "Section heading..." : "Paragraph text..."}
                      rows={block.type === "heading" ? 1 : 4}
                      className={`${inputCls} text-xs resize-none`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Sidebar Settings */}
        <div className="space-y-6">
          {/* Category & Author */}
          <div className="bg-zinc-800 border border-zinc-700 p-6 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest border-b border-zinc-700 pb-3">Settings</h3>
            <div>
              <label className={labelCls}>Category</label>
              <select value={form.category} onChange={field("category")} className={inputCls}>
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Author Name</label>
              <input value={form.authorName} onChange={field("authorName")} placeholder="Jane Smith" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Author Role</label>
              <input value={form.authorRole} onChange={field("authorRole")} placeholder="Architecture Editor" className={inputCls} />
            </div>
          </div>

          {/* Preview Card */}
          <div className="bg-zinc-800 border border-zinc-700 p-6 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest border-b border-zinc-700 pb-3">Preview Info</h3>
            {form.image && (
              <div className="aspect-[16/9] bg-zinc-700 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={form.image} alt="preview" className="w-full h-full object-cover" />
              </div>
            )}
            <p className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">{form.category}</p>
            <p className="text-sm font-bold text-white leading-tight">{form.title || "Article Title"}</p>
            <p className="text-xs text-zinc-500 font-light line-clamp-2">{form.excerpt || "Article excerpt will appear here."}</p>
            <div className="flex items-center gap-2 text-[9px] text-zinc-600 font-bold uppercase tracking-widest">
              <span>{form.authorName || "Author"}</span>
              <span>·</span>
              <span>{form.readTime}</span>
            </div>
          </div>

          <button className="w-full py-3 text-xs font-bold text-white uppercase tracking-widest bg-emerald-500 hover:bg-emerald-600 transition-colors">
            {isEditing ? "Update & Publish" : "Publish Article"}
          </button>
        </div>
      </div>
    </div>
  );
}
