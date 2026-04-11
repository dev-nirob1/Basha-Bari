import Link from "next/link";

export default function SectionHeader({ title, subtitle, linkText, linkHref }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-8">
      <div>
        {subtitle && (
          <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-4">
            {subtitle}
          </p>
        )}
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-light text-zinc-950 tracking-tighter">
          {title}
        </h2>
      </div>
      
      {linkText && linkHref && (
        <Link 
          href={linkHref} 
          className="group flex items-center justify-between gap-6 bg-transparent border border-zinc-200 text-zinc-950 px-8 py-4 hover:border-zinc-950 transition-colors duration-500 min-w-[200px]"
        >
          <span className="uppercase tracking-[0.2em] text-xs font-bold">
            {linkText}
          </span>
          <svg 
            className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      )}
    </div>
  );
}
