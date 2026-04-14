import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article, isFeatured = false }) {
  return (
    <Link href={`/journal/${article.slug}`} className="group block h-full">
      <div
        className={`relative flex flex-col h-full bg-white border border-zinc-100 shadow-sm transition-all duration-700 hover:shadow-2xl hover:shadow-zinc-200/50 overflow-hidden ${isFeatured ? "min-h-[500px]" : ""}`}
      >
        {/* IMAGE */}
        <div
          className={`relative overflow-hidden transition-all duration-1000 ${isFeatured ? "absolute inset-0 h-full" : "h-64"}`}
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient Overlay for Featured Only */}
          {isFeatured && (
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
          )}

          <div className="absolute top-6 left-6 bg-zinc-950/80 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-[0.3em] px-3 py-1.5 border border-zinc-800 z-20">
            {article.category}
          </div>
        </div>

        {/* CONTENT */}
        <div
          className={`flex flex-col flex-1 z-20 p-6 ${isFeatured ? "absolute bottom-0 left-0 right-0 text-white" : " text-zinc-950"}`}
        >
          <div
            className={`flex items-center gap-4 mb-6 ${isFeatured ? "text-zinc-300" : "text-zinc-400"}`}
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
              {article.date}
            </span>
            <div
              className={`w-[1px] h-3 ${isFeatured ? "bg-zinc-700" : "bg-zinc-200"}`}
            ></div>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
              {article.readTime}
            </span>
          </div>

          <h3
            className={`font-semibold leading-tight mb-4 transition-colors duration-500 ${isFeatured ? "text-4xl md:text-5xl lg:text-3xl max-w-3xl group-hover:text-white" : "text-lg group-hover:text-emerald-700"}`}
          >
            {article.title}
          </h3>

          <p
            className={`font-light text-sm leading-relaxed tracking-wide mb-4 line-clamp-3 max-w-xl ${isFeatured ? "text-zinc-300" : "text-zinc-500"}`}
          >
            {article.excerpt}
          </p>

          <div
            className={`mt-auto pt-6 border-t flex items-center justify-between ${isFeatured ? "border-zinc-800" : "border-zinc-50"}`}
          >
            <span
              className={`text-[10px] font-bold uppercase tracking-[0.4em] group-hover:translate-x-2 transition-transform duration-500 ${isFeatured ? "text-white" : "text-zinc-950"}`}
            >
              Read More
            </span>
            <svg
              className={`w-4 h-4 transition-colors duration-500 ${isFeatured ? "text-zinc-500 group-hover:text-white" : "text-zinc-300 group-hover:text-zinc-950"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth="1.5"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
