const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Integrity",
    description:
      "We hold ourselves to the highest standards of professional conduct. Our advice is independent, evidence-based, and free from vested interest.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Impact",
    description:
      "Every engagement is measured by real-world outcomes — improved service delivery, strengthened institutions, and measurable benefits for citizens.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Inclusion",
    description:
      "We believe that sound governance must work for every citizen. We centre the voices of the marginalised in every policy and programme we support.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#14213D] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 hero-grid-pattern opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8C00]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8C00]/40 to-transparent" />

      {/* Decorative parliament silhouette SVG — bottom right */}
      <div className="absolute bottom-0 right-0 opacity-[0.04] pointer-events-none hidden lg:block">
        <svg
          viewBox="0 0 400 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[480px] h-auto"
        >
          {/* Parliament of India stylized outline */}
          {/* Main dome */}
          <ellipse cx="200" cy="80" rx="80" ry="75" stroke="#FF8C00" strokeWidth="1.5" fill="none" />
          <ellipse cx="200" cy="88" rx="55" ry="55" stroke="#FF8C00" strokeWidth="1" fill="none" />
          <ellipse cx="200" cy="96" rx="30" ry="30" stroke="#FF8C00" strokeWidth="1" fill="none" />
          {/* Spire */}
          <line x1="200" y1="5" x2="200" y2="25" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="200" cy="7" rx="4" ry="4" fill="#FF8C00" />
          {/* Colonnaded wings */}
          <rect x="100" y="120" width="200" height="60" stroke="#FF8C00" strokeWidth="1" fill="none" />
          {/* Columns */}
          {[115, 130, 145, 160, 175, 195, 215, 230, 245, 260, 275, 290].map((x) => (
            <line key={x} x1={x} y1="120" x2={x} y2="180" stroke="#FF8C00" strokeWidth="0.75" />
          ))}
          {/* Steps */}
          <rect x="80" y="180" width="240" height="8" stroke="#FF8C00" strokeWidth="0.75" fill="none" />
          <rect x="60" y="188" width="280" height="8" stroke="#FF8C00" strokeWidth="0.75" fill="none" />
          <rect x="40" y="196" width="320" height="10" stroke="#FF8C00" strokeWidth="0.75" fill="none" />
          <rect x="20" y="206" width="360" height="12" stroke="#FF8C00" strokeWidth="1" fill="none" />
          {/* Side wings */}
          <rect x="20" y="140" width="80" height="40" stroke="#FF8C00" strokeWidth="0.75" fill="none" />
          <rect x="300" y="140" width="80" height="40" stroke="#FF8C00" strokeWidth="0.75" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Mission & Story */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#FF8C00]" />
              <span className="text-[#FF8C00] text-xs font-semibold tracking-[0.2em] uppercase">
                About Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Bridging the Gap Between Policy Intent and Implementation
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Forward Edge India was founded on a conviction that India&rsquo;s governance
                challenges are not primarily problems of policy design — they are problems of
                implementation, institutional capacity, and coordination. Too often, well-crafted
                legislation and programmes fail to reach those who need them most.
              </p>
              <p>
                Established to serve as a bridge between the world of ideas and the world of
                administration, we bring together seasoned practitioners — former IAS officers,
                development economists, legal experts, and technology specialists — who understand
                how government actually works from the inside.
              </p>
              <p>
                We are headquartered in New Delhi with active engagements across 12 states and the
                central government, and we maintain strong ties with academic institutions,
                multilateral organisations, and civil society groups across the subcontinent.
              </p>
            </div>

            {/* Mission callout */}
            <div className="mt-8 border-l-4 border-[#FF8C00] pl-5 bg-white/5 py-4 pr-4 rounded-r-sm">
              <p className="text-white font-medium text-base italic leading-relaxed">
                &ldquo;Our mission is to make Indian governments more capable, more accountable,
                and more responsive to the needs of every citizen — especially those at the
                margins.&rdquo;
              </p>
              <p className="text-[#FF8C00] text-sm mt-2 font-semibold">
                — Priya Mehta, Founder & Managing Director
              </p>
            </div>
          </div>

          {/* Right: Core Values */}
          <div>
            <h3 className="text-xl font-bold text-white mb-7">Our Core Values</h3>
            <div className="space-y-6">
              {values.map((value, idx) => (
                <div
                  key={value.title}
                  className="flex gap-4 p-5 rounded-sm border border-white/10 bg-white/5 hover:border-[#FF8C00]/50 hover:bg-white/8 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-sm bg-[#FF8C00]/15 border border-[#FF8C00]/30 text-[#FF8C00] flex items-center justify-center">
                    {value.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[#FF8C00] text-xs font-bold">0{idx + 1}</span>
                      <h4 className="text-white font-bold text-base">{value.title}</h4>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Presence indicators */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { num: "12+", label: "States" },
                { num: "4", label: "Countries" },
                { num: "2006", label: "Founded" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="text-center py-4 px-2 border border-white/10 rounded-sm bg-white/5"
                >
                  <div className="text-2xl font-bold text-[#FF8C00]">{item.num}</div>
                  <div className="text-slate-400 text-xs mt-0.5 tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
