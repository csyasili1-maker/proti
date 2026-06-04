const programs = [
  { icon: 'ri-bug-line', name: 'QA Testing' },
  { icon: 'ri-bar-chart-box-line', name: 'BA cum PMP' },
  { icon: 'ri-robot-2-line', name: 'Tosca' },
  { icon: 'ri-code-s-slash-line', name: 'Full Stack Java' },
  { icon: 'ri-window-line', name: 'Full Stack Web' },
  { icon: 'ri-brain-line', name: 'AI Engineering' },
  { icon: 'ri-database-2-line', name: 'Data Engineering' },
  { icon: 'ri-cloud-line', name: 'Azure Data Engineering' },
  { icon: 'ri-cloud-windy-line', name: 'DevOps on AWS' },
  { icon: 'ri-cloudy-2-line', name: 'DevOps on Azure' },
  { icon: 'ri-shield-check-line', name: 'Cybersecurity' },
  { icon: 'ri-pie-chart-2-line', name: 'Data Analyst' },
  { icon: 'ri-bubble-chart-line', name: 'Data Science with Python' },
  { icon: 'ri-dashboard-line', name: 'Power BI' },
  { icon: 'ri-table-line', name: 'Tableau' },
];

export default function AboutPrograms() {
  return (
    <section className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Our Programs</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3">
            Designed for Today&apos;s{' '}
            <span className="text-brand">Job Market</span>
          </h2>
          <p className="text-dark/50 text-base mt-4 max-w-2xl mx-auto">
            We offer comprehensive training across some of the most in-demand technology domains. Each program is aligned with current industry needs to help learners stay relevant in a competitive marketplace.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {programs.map((program, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:bg-brand/[0.02] hover:border-brand/20 border border-transparent transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-dark/5 flex items-center justify-center">
                <i className={`${program.icon} text-dark text-xl`} />
              </div>
              <span className="text-sm font-medium text-dark/70 whitespace-nowrap">{program.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <span className="text-dark/40 text-sm italic">And more programs being added regularly</span>
        </div>
      </div>
    </section>
  );
}