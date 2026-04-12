"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "About", href: "/about" },
    { name: "Journal", href: "/journal" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-zinc-950/90 backdrop-blur-lg border-b border-white/10 font-sans transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          
          {/* Logo Section */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-6 w-6 border-2 border-white flex items-center justify-center">
                <div className="h-2 w-2 bg-white"></div>
              </div>
              <span className="text-xl font-medium tracking-[0.2em] text-white uppercase">
                BashaBari
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-12">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-xs uppercase tracking-[0.15em] transition-opacity duration-300 ${
                      active ? "text-white opacity-100 font-bold" : "text-white opacity-60 hover:opacity-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <button className="text-xs uppercase tracking-[0.15em] text-white opacity-70 hover:opacity-100 transition-opacity">
              Sign In
            </button>
            <button className="text-xs uppercase tracking-[0.15em] text-zinc-950 bg-white px-6 py-3 font-semibold hover:bg-zinc-200 transition-colors duration-300">
              Menu
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-white opacity-80 hover:opacity-100 transition-opacity"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] border-b border-white/10" : "max-h-0"
        } bg-zinc-950/95 backdrop-blur-xl absolute w-full`}
        id="mobile-menu"
      >
        <div className="space-y-6 px-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-lg tracking-[0.2em] font-light text-white uppercase hover:text-white/60 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
             <button className="text-left text-sm tracking-[0.2em] text-white opacity-70 uppercase hover:opacity-100">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
