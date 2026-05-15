const team = [
  {
    initials: "PM",
    name: "Priya Mehta",
    title: "Founder & Managing Director",
    bio: "A former IAS officer (2001 batch) with over 22 years in public administration across Rajasthan, the Planning Commission, and NITI Aayog. Priya founded Forward Edge India to embed rigorous analysis into government decision-making at every level.",
    expertise: ["Policy Architecture", "Centre-State Relations", "Governance Strategy"],
    avatarBg: "bg-[#14213D]",
    avatarText: "text-[#FF8C00]",
    border: "border-[#FF8C00]",
  },
  {
    initials: "AS",
    name: "Arjun Sharma",
    title: "Director – Policy & Research",
    bio: "Holds a DPhil in Development Economics from Oxford and previously led the public governance practice at a leading Delhi-based think tank. Arjun brings deep expertise in evidence synthesis, regulatory impact assessment, and legislative drafting.",
    expertise: ["Regulatory Policy", "Economic Analysis", "Legislative Drafting"],
    avatarBg: "bg-slate-800",
    avatarText: "text-[#FF8C00]",
    border: "border-slate-600",
  },
  {
    initials: "KN",
    name: "Kavita Nair",
    title: "Senior Consultant – Governance",
    bio: "A specialist in decentralised governance and Panchayati Raj institutions with 14 years of field experience across Kerala, Odisha, and Tamil Nadu. Kavita has led participatory reform processes for the Ministry of Panchayati Raj and multiple State Finance Commissions.",
    expertise: ["Decentralisation", "Local Governance", "Social Audit"],
    avatarBg: "bg-[#14213D]",
    avatarText: "text-amber-400",
    border: "border-amber-600",
  },
  {
    initials: "RD",
    name: "Rahul Desai",
    title: "Head – Digital Transformation",
    bio: "An IIT-Bombay and IIM-Ahmedabad alumnus with 16 years spanning government technology projects, NeGP, and digital public infrastructure design. Rahul has led technology strategy for MeitY, the UIDAI ecosystem, and state-level e-Governance programmes.",
    expertise: ["DPI Architecture", "e-Governance", "Data Systems"],
    avatarBg: "bg-slate-700",
    avatarText: "text-[#FF8C00]",
    border: "border-slate-500",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-[#FF8C00]" />
            <span className="text-[#FF8C00] text-xs font-semibold tracking-[0.2em] uppercase">
              Our People
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#14213D] leading-tight mb-4">
            The Team
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Our consultants combine insider knowledge of government with the analytical rigour of
            top-tier research institutions. We understand the constraints you operate under — and
            how to work within them.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col bg-slate-50 border border-slate-200 rounded-sm p-6 hover:border-[#FF8C00]/50 hover:shadow-lg hover:shadow-slate-200 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="mb-5">
                <div
                  className={`w-16 h-16 rounded-full ${member.avatarBg} ${member.avatarText} border-2 ${member.border} flex items-center justify-center text-xl font-bold tracking-wider shadow-md group-hover:scale-105 transition-transform duration-300`}
                >
                  {member.initials}
                </div>
              </div>

              {/* Name & title */}
              <div className="mb-3">
                <h3 className="text-[#14213D] font-bold text-base leading-tight">
                  {member.name}
                </h3>
                <p className="text-[#FF8C00] text-xs font-semibold mt-0.5 leading-tight">
                  {member.title}
                </p>
              </div>

              {/* Bio */}
              <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">
                {member.bio}
              </p>

              {/* Expertise tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {member.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Advisory note */}
        <div className="mt-12 border border-slate-200 bg-slate-50 rounded-sm p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[#14213D] text-[#FF8C00] flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-[#14213D] font-bold text-sm mb-1">Advisory Board & Associates</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Forward Edge India is supported by a distinguished advisory board of retired
              secretaries, former chief ministers&rsquo; advisors, and senior academics. We also
              maintain a network of 20+ associate consultants across disciplines for larger
              multi-state engagements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
