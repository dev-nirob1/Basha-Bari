import Image from "next/image";
import Link from "next/link";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Login | BashaBari",
  description: "Access your BashaBari account to manage your properties and favorites.",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* LEFT SIDE: Cinematic Visual */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-zinc-950 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
          alt="Architectural structure"
          fill
          priority
          className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
        
        <div className="absolute bottom-20 left-20 max-w-md">
          <div className="w-12 h-12 border border-zinc-700 p-2 mb-8">
            <div className="w-full h-full bg-emerald-500"></div>
          </div>
          <h2 className="text-5xl font-light text-white tracking-tighter leading-[0.9] mb-6">
            WELCOME <br />
            <span className="italic font-serif text-zinc-500">Back.</span>
          </h2>
          <p className="text-zinc-400 font-light leading-relaxed tracking-wide">
            Continuing the journey of curated living and architectural excellence.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-4 sm:px-12 lg:px-24 bg-white relative">
        <div className="max-w-[440px] w-full">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-black text-zinc-950 tracking-tighter uppercase mb-2">
              Sign In
            </h1>
            <p className="text-zinc-500 font-light text-sm">
              Enter your credentials to access your dashboard.
            </p>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <button className="flex items-center justify-center gap-3 py-4 border border-zinc-200 hover:border-zinc-950 transition-colors duration-500 group">
              <svg className="w-4 h-4 grayscale group-hover:grayscale-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-950 transition-colors">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-4 border border-zinc-200 hover:border-zinc-950 transition-colors duration-500 group">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05 1.78-3.1 1.78-1.05 0-1.42-.64-2.68-.64-1.25 0-1.68.62-2.65.64-1.12.02-2.15-.83-3.18-1.84-2.14-2.08-3.7-5.98-3.7-9.35 0-5.18 3.35-7.9 6.55-7.9 1.1 0 2.13.4 2.82.88 1.08.75 1.92.75 2.9.02.8-.58 1.95-1.02 3.15-1.02 1.35 0 2.58.45 3.52 1.25-.13.1-.28.22-.42.34-1.08.92-1.92 2.38-1.92 4.02 0 2.05 1.25 3.65 2.95 4.6-.22.45-.48.9-.78 1.35zM12.03 7.25c-.13-2.22 1.27-4.18 3.22-4.9 0 0 .1.8.02 1.22-.18 2.22-1.45 4.08-3.24 4.8-.02-1.12 0-1.12 0-1.12z"/>
              </svg>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-950 transition-colors">Apple</span>
            </button>
          </div>

          <div className="relative mb-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-100"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-[0.4em]">
              <span className="bg-white px-4 text-zinc-300">Or email</span>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="name@example.com" 
              id="email"
            />
            
            <div className="space-y-1">
              <Input 
                label="Password" 
                type="password" 
                placeholder="••••••••" 
                id="password"
              />
              <div className="flex justify-end">
                <Link href="/forgot" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest hover:text-emerald-600 transition-colors">
                  Forgot Password?
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3 py-2 cursor-pointer group">
              <div className="relative w-4 h-4">
                <input type="checkbox" id="remember" className="peer absolute inset-0 opacity-0 cursor-pointer z-10" />
                <div className="w-full h-full border border-zinc-200 peer-checked:bg-zinc-950 peer-checked:border-zinc-950 transition-all"></div>
                <svg className="absolute inset-0 w-full h-full text-white scale-0 peer-checked:scale-100 transition-transform pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <label htmlFor="remember" className="text-xs font-medium text-zinc-500 group-hover:text-zinc-950 cursor-pointer transition-colors">
                Keep me signed in
              </label>
            </div>

            <Button className="w-full justify-center">
              Sign Into Account
              <svg className="w-4 h-4 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </form>

          {/* Footer */}
          <p className="mt-12 text-center text-xs text-zinc-500">
            New to BashaBari? {" "}
            <Link href="/register" className="font-bold text-zinc-950 hover:text-emerald-700 transition-colors">
              Create an account
            </Link>
          </p>
        </div>

        {/* Bottom Metadata (Sharp aesthetic) */}
        <div className="absolute bottom-10 left-10 lg:left-24 hidden md:block">
           <p className="text-[9px] font-bold text-zinc-300 uppercase tracking-[0.5em]">SYSTEM ACCESS LEVEL 01</p>
        </div>
      </div>
    </div>
  );
}
