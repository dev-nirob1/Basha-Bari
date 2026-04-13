import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-24 lg:py-48 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-zinc-950 p-12 lg:p-32 text-center group overflow-hidden">
          {/* Architectural Background Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] transition-opacity duration-1000 group-hover:opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(zinc-500 1px, transparent 1px), linear-gradient(90deg, zinc-500 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          ></div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <div className="w-12 h-12 border border-zinc-700 p-2 mb-12">
              <div className="w-full h-full bg-emerald-500"></div>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-8xl font-light text-white tracking-tighter mb-12 leading-[0.9]">
              Ready to find your <br />
              <span className="italic font-serif text-zinc-500">
                perfect space?
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-8 items-center justify-center w-full">
              <Link
                href="/properties"
                className="group flex items-center justify-between gap-12 bg-white text-zinc-950 px-12 py-6 hover:bg-emerald-500 hover:text-white transition-all duration-700 min-w-[280px]"
              >
                <span className="text-xs font-bold uppercase tracking-[0.4em]">
                  Explore Library
                </span>
                <svg
                  className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-500"
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
              </Link>

              <Link
                href="/contact"
                className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500 hover:text-white transition-colors duration-500 border-b border-zinc-800 pb-2"
              >
                Inquire Directly
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
