const services = [
  {
    id: 1,
    icon: 'ri-live-line',
    title: 'Live Instructor-Led Training',
    description:
      'Experience interactive sessions led by industry professionals who bring practical insights from real workplace environments. Engage in discussions, ask questions in real time, and gain clarity on complex topics instantly.',
    color: '#BD2928',
  },
  {
    id: 2,
    icon: 'ri-projector-line',
    title: 'Real-Time Industry Projects',
    description:
      'Bridge the gap between theory and application by working on projects that reflect real business scenarios. Build a portfolio that demonstrates your capabilities to potential employers.',
    color: '#10B981',
  },
  {
    id: 3,
    icon: 'ri-file-text-line',
    title: 'Resume Optimization',
    description:
      'Your resume is often your first impression. Our experts help you craft a professional, achievement-oriented resume that effectively highlights your skills and aligns with current hiring trends.',
    color: '#F59E0B',
  },
  {
    id: 4,
    icon: 'ri-linkedin-box-line',
    title: 'LinkedIn Profile Enhancement',
    description:
      'Strengthen your professional presence with a well-structured LinkedIn profile. We guide you in presenting your expertise clearly so recruiters can easily recognize your value.',
    color: '#06B6D4',
  },
  {
    id: 5,
    icon: 'ri-chat-check-line',
    title: 'Interview Preparation',
    description:
      'Approach interviews with confidence through structured preparation sessions designed to simulate real hiring environments. Our support includes mock interviews, technical interview guidance, behavioral question strategies, and communication tips.',
    color: '#EC4899',
    highlights: ['Mock interviews', 'Technical guidance', 'Behavioral strategies', 'Communication tips'],
  },
  {
    id: 6,
    icon: 'ri-briefcase-line',
    title: 'Job Search Strategy Support',
    description:
      'Navigating the job market can feel overwhelming. We help you develop a focused and effective job search approach so you can identify relevant opportunities and apply strategically.',
    color: '#8B5CF6',
  },
  {
    id: 7,
    icon: 'ri-user-star-line',
    title: 'Career Guidance & Mentorship',
    description:
      'Whether you are transitioning into technology or aiming for career advancement, our mentors provide insight that help you make informed professional decisions.',
    color: '#BD2928',
  },
  {
    id: 8,
    icon: 'ri-calendar-schedule-line',
    title: 'Flexible Learning Experience',
    description:
      'We understand the demands of busy professionals. Our flexible training environment allows you to balance learning with your personal and professional commitments.',
    color: '#10B981',
  },
  {
    id: 9,
    icon: 'ri-refresh-line',
    title: 'Lifetime Learning Mindset',
    description:
      'Technology evolves rapidly — and continuous learning is key to staying competitive. We encourage ongoing skill development so you remain adaptable in a changing landscape.',
    color: '#06B6D4',
  },
];

export default function CoreServices() {
  return (
    <section className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Core Services</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-2">
            Your <span className="text-brand">Trust Builders</span>
          </h2>
          <p className="text-dark/50 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Comprehensive services designed to guide you through every stage of your professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand/30 hover:shadow-lg transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <i className={`${service.icon} text-xl`} style={{ color: service.color }} />
              </div>

              <h3 className="font-bold text-dark text-base mb-3">{service.title}</h3>
              <p className="text-dark/60 text-sm leading-relaxed mb-4">{service.description}</p>

              {service.highlights && (
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-medium"
                    >
                      <i className="ri-check-line" />
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}