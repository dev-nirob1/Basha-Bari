import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Layer */}
      <div className="absolute top-8 left-8 lg:left-12 z-50">
        <Link 
          href="/" 
          className="group flex items-center gap-4 text-zinc-400 hover:text-zinc-950 transition-colors duration-500"
        >
          <div className="w-10 h-10 border border-zinc-200 flex items-center justify-center bg-white group-hover:border-zinc-950 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
            Back to Home
          </span>
        </Link>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>
    </div>
  );
}
