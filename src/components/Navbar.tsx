"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1628]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
            aria-label="Forward Edge India home"
          >
            <div className="w-9 h-9 rounded-sm bg-[#C9952A] flex items-center justify-center flex-shrink-0">
              <svg
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M6 28 L18 8 L30 28"
                  stroke="#0A1628"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 21 L25 21"
                  stroke="#0A1628"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-base tracking-wide group-hover:text-[#C9952A] transition-colors">
                Forward Edge
              </span>
              <span className="text-[#C9952A] font-semibold text-xs tracking-widest uppercase">
                India
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-300 hover:text-[#C9952A] px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#C9952A] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="ml-4 bg-[#C9952A] hover:bg-[#e0aa40] text-[#0A1628] font-semibold text-sm px-5 py-2.5 rounded-sm transition-colors duration-200 tracking-wide"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded-sm hover:bg-white/10 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="flex flex-col gap-1.5 w-6">
              <span
                className={`h-0.5 bg-current rounded-full transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 bg-current rounded-full transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`h-0.5 bg-current rounded-full transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#0A1628]/98 backdrop-blur-sm border-t border-white/10 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-300 hover:text-[#C9952A] hover:bg-white/5 px-4 py-3 text-sm font-medium text-left transition-colors tracking-wide"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full bg-[#C9952A] hover:bg-[#e0aa40] text-[#0A1628] font-semibold text-sm px-5 py-3 rounded-sm transition-colors tracking-wide"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
