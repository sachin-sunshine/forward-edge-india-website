export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#14213D]"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 hero-grid-pattern opacity-100" />

      {/* Radial gradient center glow */}
      <div className="absolute inset-0 bg-radial-[ellipse_80%_60%_at_50%_60%] from-[#1E3056] via-[#14213D] to-transparent" />

      {/* Top-right decorative arc */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 384 384" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="384" cy="0" r="300" stroke="#FF8C00" strokeWidth="0.75" fill="none" />
          <circle cx="384" cy="0" r="220" stroke="#FF8C00" strokeWidth="0.5" fill="none" />
          <circle cx="384" cy="0" r="140" stroke="#FF8C00" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      {/* Bottom-left decorative element */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="0" cy="256" r="200" stroke="#FF8C00" strokeWidth="0.75" fill="none" />
          <circle cx="0" cy="256" r="130" stroke="#FF8C00" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      {/* India silhouette — abstract geometric SVG */}
      <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden lg:block">
        <svg
          viewBox="0 0 280 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-64 h-auto"
        >
          {/* Stylized India map outline */}
          <path
            d="M120 10 L180 10 L210 30 L230 60 L240 100 L235 140 L250 170 L255 200 L240 230 L220 260 L200 285 L175 305 L155 325 L140 340 L130 330 L110 310 L90 285 L70 260 L55 230 L45 200 L35 170 L30 140 L40 110 L50 80 L70 50 L95 25 Z"
            stroke="#FF8C00"
            strokeWidth="2"
            fill="rgba(201,149,42,0.15)"
          />
          {/* Kashmir region */}
          <path
            d="M120 10 L140 2 L165 5 L180 10 L175 25 L160 18 L145 15 L130 18 Z"
            stroke="#FF8C00"
            strokeWidth="1.5"
            fill="rgba(201,149,42,0.1)"
          />
          {/* Peninsular tip */}
          <path
            d="M120 325 L140 340 L160 325 L150 345 L140 355 L130 345 Z"
            stroke="#FF8C00"
            strokeWidth="1.5"
            fill="rgba(201,149,42,0.2)"
          />
          {/* Grid dots */}
          {[60, 100, 140, 180, 220].map((y) =>
            [80, 120, 160, 200].map((x) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill="#FF8C00" opacity="0.5" />
            ))
          )}
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2 mb-6 md:mb-8">
            <span className="h-px w-8 bg-[#FF8C00]" />
            <span className="text-[#FF8C00] text-xs font-semibold tracking-[0.2em] uppercase">
              Public Sector Consulting
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8">
            Empowering{" "}
            <span className="text-[#FF8C00]">Governments.</span>
            <br />
            Strengthening{" "}
            <span className="relative inline-block">
              Governance.
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF8C00] opacity-60" />
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 md:mb-12 max-w-2xl">
            We partner with public institutions across India and South Asia to
            design evidence-based policy, strengthen institutional capacity, and
            drive lasting governance reform — bridging the gap between policy
            intent and on-the-ground implementation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-[#FF8C00] hover:bg-[#FFA333] text-[#14213D] font-bold text-sm px-8 py-4 rounded-sm transition-all duration-200 tracking-wide shadow-lg shadow-[#FF8C00]/20 hover:shadow-[#FF8C00]/40 hover:-translate-y-0.5"
            >
              Our Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#FF8C00] text-white hover:text-[#FF8C00] font-semibold text-sm px-8 py-4 rounded-sm transition-all duration-200 tracking-wide hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-16 md:mt-20 pt-10 border-t border-white/10 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { value: "12+", label: "State Governments" },
              { value: "40+", label: "Projects Delivered" },
              { value: "18", label: "Years Combined Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-[#FF8C00]">{stat.value}</div>
                <div className="text-slate-400 text-xs mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-slate-400 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-[#FF8C00] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
