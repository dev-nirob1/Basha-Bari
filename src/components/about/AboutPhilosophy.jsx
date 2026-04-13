export default function AboutPhilosophy() {
  return (
    <section className="py-32 lg:py-48 bg-zinc-50 border-y border-zinc-100 relative overflow-hidden">
      {/* Background large decorative text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="text-[25vw] font-black tracking-tighter leading-none">
          PHILOSOPHY
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex flex-col items-center">
          <span className="w-16 h-[1px] bg-zinc-950 mb-12"></span>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-light text-zinc-950 tracking-tighter leading-[1.1] max-w-5xl mx-auto">
            We believe that finding a home should be an <br />
            <span className="italic font-serif text-zinc-400">
              architectural journey
            </span>
            , <br />
            not just a financial transaction.
          </h2>
          <span className="w-16 h-[1px] bg-zinc-950 mt-12"></span>
        </div>
      </div>
    </section>
  );
}
