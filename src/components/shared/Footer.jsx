import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION: NEWSLETTER / MAGAZINE SUBSCRIPTION */}
        <div className="py-20 border-b border-zinc-900 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">The BashaBari Dispatch</h3>
            <p className="text-zinc-500 font-light leading-relaxed">
              Subscribe to our monthly architectural digest. Get curated listings, design perspectives, and urban lifestyle insights delivered to your inbox.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS" 
                className="bg-zinc-900 border border-zinc-800 text-white px-6 py-4 text-xs font-bold tracking-widest focus:outline-none focus:border-emerald-700 min-w-[300px] transition-colors"
                required
              />
              <button className="bg-white text-zinc-950 px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-emerald-700 hover:text-white transition-all duration-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* MIDDLE SECTION: MAIN FOOTER CONTENT */}
        <div className="pt-20 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
            
            {/* Column 1: Brand (Spans 2 columns) */}
            <div className="flex flex-col lg:col-span-2">
              <Link href="/" className="flex items-center gap-4 text-2xl font-bold tracking-tighter text-white mb-8 w-fit group">
                <div className="h-6 w-6 border-2 border-white flex items-center justify-center group-hover:border-emerald-500 transition-colors">
                  <div className="h-2 w-2 bg-white group-hover:bg-emerald-500 transition-colors"></div>
                </div>
                <span className="uppercase tracking-[0.2em] text-lg">Basha<span className="text-zinc-600 group-hover:text-white transition-colors">Bari</span></span>
              </Link>
              <p className="text-sm leading-relaxed mb-8 max-w-sm font-light text-zinc-500">
                A premium editorial platform for high-end real estate in Dhaka. We curate masterpieces, not just listings. Find your architectural home with us.
              </p>
              
              {/* Social Channels */}
              <div className="flex gap-6">
                {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                  <a key={social} href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="flex flex-col">
              <h4 className="text-white font-bold tracking-widest mb-8 uppercase text-[10px]">Navigation</h4>
              <div className="flex flex-col gap-4 text-sm font-light">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <Link href="/properties" className="hover:text-white transition-colors">Properties</Link>
                <Link href="/journal" className="hover:text-white transition-colors">The Journal</Link>
                <Link href="/about" className="hover:text-white transition-colors">Our Story</Link>
              </div>
            </div>

            {/* Column 3: Legal & Help */}
            <div className="flex flex-col">
              <h4 className="text-white font-bold tracking-widest mb-8 uppercase text-[10px]">Support</h4>
              <div className="flex flex-col gap-4 text-sm font-light">
                <Link href="/help" className="hover:text-white transition-colors">Help Center</Link>
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
              </div>
            </div>

            {/* Column 4: Representative Offices */}
            <div className="flex flex-col">
              <h4 className="text-white font-bold tracking-widest mb-8 uppercase text-[10px]">HQ Office</h4>
              <div className="flex flex-col gap-4 text-sm font-light">
                <p>Gulshan Avenue, Dhaka 1212</p>
                <p>+880 123 456 7890</p>
                <p>concierge@bashabari.com</p>
                <p className="mt-4 text-[10px] font-bold text-zinc-600">OPEN 24/7 FOR ADVISORY</p>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION: COPYRIGHT & MARKERS */}
          <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
            <div className="flex items-center gap-12">
              <p>© 2026 BashaBari Editorial</p>
              <div className="hidden md:flex items-center gap-4">
                <span className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full"></span>
                <p>Verified Collection</p>
              </div>
            </div>
            <div className="flex gap-8">
              <span>Dhaka</span>
              <span>•</span>
              <span>London</span>
              <span>•</span>
              <span>Dubai</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
