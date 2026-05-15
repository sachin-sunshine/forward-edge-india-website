const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Policy Design & Analysis",
    description:
      "Rigorous, evidence-based policy development grounded in data, stakeholder consultation, and comparative research. We translate complex policy challenges into actionable frameworks.",
    tags: ["Research", "Frameworks", "Legislative Support"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Governance Reform",
    description:
      "Supporting structural and institutional reform processes across Central and State governments — from administrative reorganisation to service delivery transformation.",
    tags: ["Institutional Design", "Process Reform", "Accountability"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Capacity Building & Training",
    description:
      "Customised learning programmes for IAS officers, frontline officials, and elected representatives — building the skills needed to lead complex reform agendas.",
    tags: ["Training", "Leadership", "IAS/IPS", "Elected Bodies"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "Digital Public Infrastructure",
    description:
      "Advisory on design and deployment of DPI — from beneficiary registries and digital identity systems to interoperable data platforms for government service delivery.",
    tags: ["DPI", "Data Systems", "Digital India", "Interoperability"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Public Finance Management",
    description:
      "Strengthening budget formulation, expenditure management, and fiscal transparency at State and local levels — enabling governments to align spending with development outcomes.",
    tags: ["Budgeting", "Fiscal Policy", "PFM Systems", "Transparency"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Stakeholder Engagement & Research",
    description:
      "Multi-level consultation design, civil society engagement, and applied research — ensuring government initiatives are grounded in field realities and citizen perspectives.",
    tags: ["Community Outreach", "Research", "M&E", "Civil Society"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-[#FF8C00]" />
            <span className="text-[#FF8C00] text-xs font-semibold tracking-[0.2em] uppercase">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#14213D] leading-tight mb-4">
            Our Services
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We offer a comprehensive suite of consulting services designed for the complexity and
            scale of the Indian public sector — from national ministries to district administrations.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group relative bg-slate-50 border border-slate-200 rounded-sm p-6 md:p-7 hover:border-[#FF8C00] hover:shadow-lg hover:shadow-[#FF8C00]/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Number */}
              <span className="absolute top-5 right-6 text-4xl font-bold text-slate-100 group-hover:text-[#FF8C00]/10 transition-colors select-none">
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-sm bg-[#14213D] text-[#FF8C00] flex items-center justify-center mb-5 group-hover:bg-[#FF8C00] group-hover:text-[#14213D] transition-colors duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-[#14213D] mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-sm group-hover:border-[#FF8C00]/30 group-hover:text-[#FF8C00] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">
            Have a specific requirement not listed above?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#FF8C00] font-semibold text-sm hover:underline underline-offset-4"
          >
            Talk to our team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
