const reasons = [
  { icon: 'ri-award-line', title: 'Industry-designed curriculum', desc: 'Built with input from working professionals' },
  { icon: 'ri-user-star-line', title: 'Trainers with real corporate experience', desc: 'Learn from those who have hired and managed QA teams' },
  { icon: 'ri-tools-line', title: 'Hands-on project exposure', desc: 'Work on real applications, not mock exercises' },
  { icon: 'ri-customer-service-2-line', title: 'Interview preparation program', desc: 'Mock interviews with hiring experts' },
  { icon: 'ri-briefcase-4-line', title: 'Strong placement support network', desc: 'Resume, LinkedIn, and job search guidance included' },
  { icon: 'ri-heart-pulse-line', title: 'Beginner-friendly structure', desc: 'No prior IT experience required' },
  { icon: 'ri-group-line', title: 'Small batch sizes', desc: 'Personal attention for every learner' },
];

export default function QAWhyChoose() {
  return (
    <section className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Why PROITKEYS?</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3">
            We Don&apos;t Just <span className="text-brand">Train</span> You — We <span className="text-brand">Prepare</span> You for Employment
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                <i className={`${item.icon} text-brand text-xl`} />
              </div>
              <h3 className="text-base font-bold font-display text-dark mb-1">{item.title}</h3>
              <p className="text-dark/50 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}