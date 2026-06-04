const roles = [
  'QA Tester',
  'Software Test Engineer',
  'Manual Tester',
  'Automation Test Engineer',
  'Quality Assurance Analyst',
  'SDET (entry-level)',
];

export default function QAJobs() {
  return (
    <section id="career" className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Career Outcomes</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3">
            Job Roles <span className="text-brand">After Completion</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {roles.map((role, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 text-center border border-gray-100 hover:border-brand/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-3">
                <i className="ri-briefcase-4-line text-brand text-lg" />
              </div>
              <span className="text-dark/80 text-sm font-medium leading-snug">{role}</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
          <h3 className="text-lg font-bold font-display text-dark mb-5 text-center">
            Companies That Hire QA Professionals
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-dark/40 text-sm font-medium">
            {['Amazon', 'Accenture', 'Cognizant', 'Capgemini', 'Infosys', 'TCS', 'Deloitte', 'Wipro', 'HCL', 'Tech Mahindra'].map((company) => (
              <span key={company} className="whitespace-nowrap">{company}</span>
            ))}
          </div>
          <p className="text-center text-dark/40 text-xs mt-4">
            and hundreds of fast-growing startups
          </p>
        </div>
      </div>
    </section>
  );
}