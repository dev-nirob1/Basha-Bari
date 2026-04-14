export default function JournalHero() {
  return (
    <section className="pt-40 pb-20 bg-[#faf9f6] border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-zinc-400 uppercase tracking-[0.6em] text-[10px] font-bold mb-10 flex items-center gap-6">
            <span className="w-12 h-[1px] bg-zinc-200"></span>
            The Editorial
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-light text-zinc-950 tracking-tighter leading-[0.8] mb-12">
            The <br />
            <span className="italic font-serif text-zinc-300">Journal</span>.
          </h1>

          <div className="max-w-2xl">
            <p className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed tracking-wide italic font-serif">
              Perspectives on modern architecture, curated living, and the evolving soul of the city's finest residences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
