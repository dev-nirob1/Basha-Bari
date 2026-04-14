import Image from "next/image";
import Link from "next/link";

export default function JournalArticleContent({ article }) {
  return (
    <article className="bg-white">
      {/* Hero Banner */}
      <div className="relative w-full aspect-[21/9] overflow-hidden bg-zinc-100">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-4 pt-12 pb-8 border-b border-zinc-100">
          <Link
            href="/journal"
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 hover:text-zinc-950 transition-colors"
          >
            Journal
          </Link>
          <span className="w-8 h-px bg-zinc-200" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600">
            {article.category}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-16">
          {/* LEFT: Sticky Meta Sidebar */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-32 flex flex-col gap-8">
              <div>
                <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-2">
                  Written By
                </p>
                <p className="text-sm font-bold text-zinc-950">
                  {article.author.name}
                </p>
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">
                  {article.author.role}
                </p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-2">
                  Published
                </p>
                <p className="text-sm font-medium text-zinc-950">{article.date}</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-2">
                  Reading Time
                </p>
                <p className="text-sm font-medium text-zinc-950">{article.readTime}</p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-zinc-100" />

              {/* Share */}
              <div>
                <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-4">
                  Share
                </p>
                <div className="flex gap-3">
                  {["Twitter", "LinkedIn", "Copy"].map((s) => (
                    <button
                      key={s}
                      className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest border border-zinc-200 px-3 py-2 hover:border-zinc-950 hover:text-zinc-950 transition-all duration-300"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT: Article Body */}
          <div className="lg:col-span-9">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tighter leading-[0.9] mb-12">
              {article.title}
            </h1>

            {/* Content blocks */}
            <div className="space-y-8">
              {article.content.map((block, idx) => {
                if (block.type === "lead") {
                  return (
                    <p
                      key={idx}
                      className="text-xl md:text-2xl font-light text-zinc-600 leading-relaxed tracking-wide border-l-4 border-emerald-500 pl-8"
                    >
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "paragraph") {
                  return (
                    <p
                      key={idx}
                      className="text-base md:text-lg text-zinc-700 font-light leading-relaxed tracking-wide"
                    >
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "heading") {
                  return (
                    <h2
                      key={idx}
                      className="text-2xl md:text-3xl font-bold text-zinc-950 tracking-tighter uppercase pt-6"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "blockquote") {
                  return (
                    <blockquote
                      key={idx}
                      className="border-l-2 border-zinc-950 pl-8 py-4 my-12"
                    >
                      <p className="text-xl md:text-2xl font-light text-zinc-950 tracking-tight italic mb-4">
                        &ldquo;{block.text}&rdquo;
                      </p>
                      <cite className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] not-italic">
                        — {block.author}
                      </cite>
                    </blockquote>
                  );
                }
                if (block.type === "image") {
                  return (
                    <figure key={idx} className="my-12">
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
                        <Image
                          src={block.src}
                          alt={block.caption}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="mt-4 text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em]">
                        {block.caption}
                      </figcaption>
                    </figure>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
