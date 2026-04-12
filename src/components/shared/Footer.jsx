import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-8">
        
        {/* Switched to lg:grid-cols-5 so brand can symmetrically span 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand (Spans 2 columns) */}
          <div className="flex flex-col lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-white mb-6 w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="text-emerald-500 hover:text-emerald-400 transition-colors">
                <path d="M3 10V22H21V10L12 2L3 10Z"/>
                <path d="M9 22V12H15V22"/>
              </svg>
              <span>Basha<span className="text-zinc-600 hover:text-white transition-colors">Bari</span></span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Find your perfect rental home securely and effortlessly. The modern way to discover real estate in Bangladesh.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-zinc-950 transition-colors duration-300" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-zinc-950 transition-colors duration-300" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-zinc-950 transition-colors duration-300" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold tracking-tight mb-6 uppercase text-sm">Quick Links</h4>
            <div className="flex flex-col gap-4">
              <Link href="/" className="hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">Home</Link>
              <Link href="/properties" className="hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">Explore Properties</Link>
              <Link href="/favorites" className="hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">Favorites</Link>
              <Link href="/contact" className="hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">Contact</Link>
            </div>
          </div>

          {/* Column 3: Support */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold tracking-tight mb-6 uppercase text-sm">Support</h4>
            <div className="flex flex-col gap-4">
              <Link href="/help" className="hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">Help Center</Link>
              <Link href="/terms" className="hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">Terms & Conditions</Link>
              <Link href="/privacy" className="hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">Privacy Policy</Link>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold tracking-tight mb-6 uppercase text-sm">Contact Info</h4>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="text-zinc-500 mt-0.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:support@bashabari.com" className="hover:text-white transition-colors">support@bashabari.com</a>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="text-zinc-500 mt-0.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+8801234567890" className="hover:text-white transition-colors">+880 123 456 7890</a>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="text-zinc-500 mt-0.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
          <p>© 2026 BashaBari. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
