import OptimizedImage from '@/components/base/OptimizedImage';

const frameworkSteps = [
  {
    id: 1,
    icon: 'ri-file-text-line',
    title: 'Professional Resume Development',
    description:
      'Work with experienced advisors to create a results-driven resume that highlights your technical capabilities, project experience, and strengths.',
  },
  {
    id: 2,
    icon: 'ri-linkedin-box-line',
    title: 'LinkedIn Branding',
    description:
      'Recruiters actively search for candidates online. We help you build a compelling LinkedIn presence that enhances your professional visibility.',
  },
  {
    id: 3,
    icon: 'ri-folder-open-line',
    title: 'Portfolio & Project Guidance',
    description:
      'Demonstrate your readiness with practical work that reflects real-world problem solving. A strong portfolio can significantly improve employer confidence.',
  },
  {
    id: 4,
    icon: 'ri-chat-check-line',
    title: 'Mock Interviews With Expert Feedback',
    description:
      'Practice in simulated interview environments designed to mirror actual hiring conversations. Receive actionable feedback to refine your responses, improve communication, and strengthen your confidence.',
  },
  {
    id: 5,
    icon: 'ri-search-eye-line',
    title: 'Job Search Strategy',
    description:
      'A focused job search is far more effective than applying blindly. We guide you in identifying relevant roles, applying strategically, communicating professionally, and staying organized during your search.',
  },
  {
    id: 6,
    icon: 'ri-user-heart-line',
    title: 'Career Mentorship',
    description:
      'Benefit from insights that help you understand industry expectations, workplace dynamics, and growth pathways.',
  },
];

export default function CPSFramework() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">The PROITKEYS Framework</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-2 mb-4">
            A Structured Approach to{' '}
            <span className="text-brand">Career Readiness</span>
          </h2>
          <p className="text-dark/50 text-sm md:text-base max-w-2xl mx-auto">
            We follow a comprehensive support model that focuses on helping you become fully prepared for hiring processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworkSteps.map((step) => (
            <div
              key={step.id}
              className="group bg-light rounded-2xl p-6 border border-gray-100 hover:border-brand/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-5">
                <i className={`${step.icon} text-brand text-xl`} />
              </div>

              <h3 className="font-bold text-dark text-base mb-3">{step.title}</h3>
              <p className="text-dark/60 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-2xl h-64">
            <OptimizedImage
              src="https://readdy.ai/api/search-image?query=american%20professional%20woman%20practicing%20interview%20skills%20in%20modern%20office%2C%20confident%20body%20language%2C%20bright%20natural%20lighting%2C%20clean%20corporate%20setting%2C%20genuine%20professional%20development%20moment%2C%20high%20quality%20photography&width=500&height=340&seq=cpsfw1&orientation=landscape"
              alt="Interview preparation session"
              className="w-full h-64"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl h-64">
            <OptimizedImage
              src="https://readdy.ai/api/search-image?query=diverse%20american%20professionals%20collaborating%20in%20bright%20modern%20coworking%20space%2C%20reviewing%20projects%20on%20laptop%2C%20teamwork%20and%20mentorship%20atmosphere%2C%20warm%20natural%20light%2C%20clean%20minimalist%20office%20design%2C%20authentic%20professional%20interaction&width=500&height=340&seq=cpsfw2&orientation=landscape"
              alt="Professional collaboration"
              className="w-full h-64"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl h-64">
            <OptimizedImage
              src="https://readdy.ai/api/search-image?query=american%20career%20mentor%20having%20one%20on%20one%20coaching%20session%20with%20young%20professional%2C%20supportive%20genuine%20conversation%2C%20bright%20airy%20office%20with%20plants%2C%20warm%20natural%20window%20lighting%2C%20professional%20attire%2C%20authentic%20mentoring%20relationship&width=500&height=340&seq=cpsfw3&orientation=landscape"
              alt="Career mentorship session"
              className="w-full h-64"
            />
          </div>
        </div>

        <div className="mt-14 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold font-display text-dark mb-4">
            Built Around Your{' '}
            <span className="text-brand">Long-Term Success</span>
          </h3>
          <p className="text-dark/60 text-base leading-relaxed mb-4">
            At PROITKEYS, placement support is not treated as an afterthought — it is integrated into the learning journey.
          </p>
          <p className="text-dark/60 text-base leading-relaxed">
            We emphasize career readiness so that when opportunities arise, you are prepared to pursue them with confidence. Your progress is our priority.
          </p>
        </div>
      </div>
    </section>
  );
}