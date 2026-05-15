const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Our Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const focusAreas = [
  "Policy Design & Analysis",
  "Governance Reform",
  "Capacity Building",
  "Digital Public Infrastructure",
  "Public Finance Management",
  "Stakeholder Engagement",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060e1a] text-slate-400">
      {/* Top border accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#C9952A] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-14 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
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
                <span className="text-white font-bold text-base tracking-wide">
                  Forward Edge
                </span>
                <span className="text-[#C9952A] font-semibold text-xs tracking-widest uppercase">
                  India
                </span>
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-xs">
              Public sector consulting for a better-governed India. We partner with governments at
              every level to strengthen institutions and serve citizens better.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-sm border border-white/10 hover:border-[#C9952A] hover:text-[#C9952A] text-slate-500 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a
                href="#"
                aria-label="X (formerly Twitter)"
                className="w-9 h-9 rounded-sm border border-white/10 hover:border-[#C9952A] hover:text-[#C9952A] text-slate-500 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-sm border border-white/10 hover:border-[#C9952A] hover:text-[#C9952A] text-slate-500 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-[#C9952A] text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="h-px w-3 bg-slate-700 group-hover:bg-[#C9952A] group-hover:w-5 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Focus Areas
            </h3>
            <ul className="space-y-3">
              {focusAreas.map((area) => (
                <li key={area}>
                  <span className="text-slate-500 text-sm flex items-center gap-1.5">
                    <span className="h-px w-3 bg-slate-700" />
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex gap-2.5">
                <svg className="w-4 h-4 text-[#C9952A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-slate-500 text-sm leading-relaxed">
                  4th Floor, Kailash Building<br />
                  26 KG Marg, Connaught Place<br />
                  New Delhi — 110 001
                </p>
              </div>
              <div className="flex gap-2.5">
                <svg className="w-4 h-4 text-[#C9952A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:contact@forwardedgeindia.com"
                  className="text-slate-500 hover:text-[#C9952A] text-sm transition-colors"
                >
                  contact@forwardedgeindia.com
                </a>
              </div>
            </div>

            {/* Accreditations / affiliations */}
            <div className="mt-6 pt-5 border-t border-white/5">
              <p className="text-slate-600 text-xs leading-relaxed">
                Member, Federation of Indian Chambers of Commerce & Industry (FICCI) Public Policy
                Council
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>
            &copy; {currentYear} Forward Edge India Consulting LLP. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Engagement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
