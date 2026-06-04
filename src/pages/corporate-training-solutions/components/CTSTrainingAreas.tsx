const trainingDomains = [
  {
    title: 'Cloud & DevOps',
    icon: 'ri-cloud-line',
    items: ['DevOps on AWS', 'DevOps on Azure'],
    color: '#0EA5E9',
  },
  {
    title: 'Data, AI & Analytics',
    icon: 'ri-bar-chart-grouped-line',
    items: ['Data Engineering', 'Azure Data Engineering', 'AI Engineering', 'Data Science with Python', 'Power BI', 'Tableau'],
    color: '#10B981',
  },
  {
    title: 'Software Development',
    icon: 'ri-code-s-slash-line',
    items: ['Full Stack Java', 'Full Stack Web'],
    color: '#F59E0B',
  },
  {
    title: 'Cybersecurity',
    icon: 'ri-shield-check-line',
    items: ['Cybersecurity'],
    color: '#EF4444',
  },
  {
    title: 'Quality Assurance',
    icon: 'ri-bug-line',
    items: ['QA Testing', 'Tosca'],
    color: '#8B5CF6',
  },
  {
    title: 'Project & Business Mgmt',
    icon: 'ri-task-line',
    items: ['BA cum PMP'],
    color: '#EC4899',
  },
];

export default function CTSTrainingAreas() {
  return (
    <section className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Training Areas</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-2 mb-4">
            High-Demand{' '}
            <span className="text-brand">Technology Domains</span>
          </h2>
          <p className="text-dark/50 text-sm md:text-base max-w-2xl mx-auto">
            PROITKEYS provides corporate training across a wide spectrum of modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingDomains.map((domain) => (
            <div
              key={domain.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand/30 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${domain.color}15` }}
              >
                <i className={`${domain.icon} text-xl`} style={{ color: domain.color }} />
              </div>

              <h3 className="font-bold text-dark text-base mb-3">{domain.title}</h3>

              <ul className="space-y-2">
                {domain.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-dark/60 text-sm">
                    <i className="ri-arrow-right-s-line text-brand text-sm flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-dark/50 text-sm mb-4">
            Need something tailored? We can design programs aligned specifically with your technology stack and business goals.
          </p>
          <a
            href="#consultation"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
          >
            Request Custom Training
            <i className="ri-arrow-right-line" />
          </a>
        </div>
      </div>
    </section>
  );
}