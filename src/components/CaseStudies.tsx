const caseStudies = [
  {
    tag: "Land Records & Digitisation",
    state: "Rajasthan",
    title: "Streamlining Land Records in Rajasthan",
    summary:
      "Partnered with the Government of Rajasthan to redesign and digitise land record management across 33 districts, covering over 7.2 crore land parcels. The project involved end-to-end process reengineering, integration with the national Bhu-Naksha system, and capacity building for over 4,000 patwaris.",
    outcomes: [
      "93% reduction in land dispute resolution time",
      "12 lakh farmers received digitised khataunis",
      "Integration with PM-KISAN database for direct benefit transfer",
    ],
    partners: ["GoR Revenue Department", "NIC", "World Bank"],
    year: "2020–2023",
    color: "from-amber-900/20 to-orange-900/10",
    accentColor: "bg-amber-600",
  },
  {
    tag: "Urban Governance",
    state: "Pune, Maharashtra",
    title: "Urban Governance Reform in Pune",
    summary:
      "Commissioned by the Pune Municipal Corporation and supported by the Ministry of Housing and Urban Affairs, this engagement redesigned citizen service delivery across 15 wards. Forward Edge India led process audits, co-designed the Integrated Municipal Platform, and restructured the ward-level administrative hierarchy.",
    outcomes: [
      "Average service request turnaround reduced from 18 days to 4 days",
      "Citizen satisfaction index rose from 38% to 71%",
      "Served as model for AMRUT 2.0 urban reform toolkit",
    ],
    partners: ["PMC", "MoHUA", "Janaagraha"],
    year: "2021–2024",
    color: "from-blue-900/20 to-indigo-900/10",
    accentColor: "bg-blue-600",
  },
  {
    tag: "Public Health Policy",
    state: "Northeast India",
    title: "Public Health Policy Framework for Northeast States",
    summary:
      "A multi-state initiative spanning Assam, Meghalaya, Manipur, and Mizoram to develop a regionally appropriate public health governance framework. The project included epidemiological mapping, district health systems assessments, cross-state policy harmonisation, and the design of a regional disease surveillance protocol.",
    outcomes: [
      "Joint policy compact signed by 4 state health ministries",
      "District health index scores improved across 22 districts",
      "Framework adopted as basis for NHM state PIPs",
    ],
    partners: ["NHM", "MoHFW", "NHSRC", "WHO India"],
    year: "2022–2025",
    color: "from-emerald-900/20 to-teal-900/10",
    accentColor: "bg-emerald-600",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#C9952A]" />
              <span className="text-[#C9952A] text-xs font-semibold tracking-[0.2em] uppercase">
                Our Work
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight mb-3">
              Case Studies
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              A selection of engagements where our work has translated into measurable improvements
              in governance and citizen welfare.
            </p>
          </div>
          <a
            href="#contact"
            className="self-start md:self-auto inline-flex items-center gap-2 text-[#C9952A] border border-[#C9952A] hover:bg-[#C9952A] hover:text-[#0A1628] font-semibold text-sm px-5 py-2.5 rounded-sm transition-all duration-200 whitespace-nowrap"
          >
            Discuss a Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs, idx) => (
            <div
              key={cs.title}
              className="group flex flex-col bg-white border border-slate-200 rounded-sm overflow-hidden hover:border-[#C9952A]/40 hover:shadow-xl hover:shadow-slate-200/80 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${cs.color} bg-[#0A1628] px-6 pt-6 pb-5 border-b border-slate-100`}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="inline-block bg-[#C9952A]/15 border border-[#C9952A]/30 text-[#C9952A] text-xs font-semibold px-2.5 py-1 rounded-sm tracking-wide">
                    {cs.tag}
                  </span>
                  <span className="text-slate-400 text-xs font-medium whitespace-nowrap">
                    {cs.year}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-3">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {cs.state}
                </div>
                <h3 className="text-[#0A1628] font-bold text-lg leading-snug group-hover:text-[#0A1628] transition-colors">
                  {cs.title}
                </h3>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6">
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{cs.summary}</p>

                {/* Outcomes */}
                <div className="mb-5">
                  <h4 className="text-xs font-bold text-[#0A1628] uppercase tracking-wider mb-3">
                    Key Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {cs.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-[#C9952A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Partners */}
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-400 font-medium">Partners: </span>
                  <span className="text-xs text-slate-500">{cs.partners.join(", ")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-8 text-center text-slate-400 text-xs">
          Case studies are representative of our engagements. Client names and sensitive details
          shared with institutional permission.
        </p>
      </div>
    </section>
  );
}
