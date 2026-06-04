import OptimizedImage from '@/components/base/OptimizedImage';

const services = [
  {
    icon: 'ri-live-line',
    title: 'Live Instructor-Led Training',
    description: 'Interactive sessions led by industry professionals who bring practical, real-world insights to every class.',
  },
  {
    icon: 'ri-projector-line',
    title: 'Real-Time Industry Projects',
    description: 'Work on projects that mirror actual business scenarios to bridge the gap between theory and practice.',
  },
  {
    icon: 'ri-file-text-line',
    title: 'Resume Optimization',
    description: 'Get a professional, achievement-focused resume tailored to what hiring managers look for.',
  },
  {
    icon: 'ri-linkedin-box-line',
    title: 'LinkedIn Profile Enhancement',
    description: 'Strengthen your professional presence so recruiters can easily recognize your potential.',
  },
  {
    icon: 'ri-chat-check-line',
    title: 'Interview Preparation',
    description: 'Build confidence through mock interviews, technical guidance, and behavioral strategy sessions.',
  },
  {
    icon: 'ri-briefcase-line',
    title: 'Job Search Strategy',
    description: 'Develop a focused approach to identify and pursue the right opportunities for your career.',
  },
  {
    icon: 'ri-user-star-line',
    title: 'Career Mentorship',
    description: 'Get personalized guidance from experienced mentors who understand your industry.',
  },
  {
    icon: 'ri-calendar-schedule-line',
    title: 'Flexible Scheduling',
    description: 'Balance learning with your personal and professional commitments at your own pace.',
  },
  {
    icon: 'ri-refresh-line',
    title: 'Continuous Skill Development',
    description: 'Stay competitive with ongoing learning opportunities in emerging technologies.',
  },
];

export default function CSSCoreServices() {
  return (
    <section className="w-full py-20 md:py-28 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-dark/50 uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold font-display text-dark mt-3 mb-4 leading-tight">
            Comprehensive{' '}
            <span className="text-brand">career services</span>
          </h2>
          <p className="text-dark/45 text-sm max-w-md">
            Nine dedicated services designed to guide you through every stage of your professional journey.
          </p>
        </div>

        {/* Simple uniform grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand/20 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center mb-5">
                <i className={`${service.icon} text-brand text-lg`} />
              </div>
              <h3 className="font-bold text-dark text-base mb-2">{service.title}</h3>
              <p className="text-dark/45 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom images row — real training environment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-gray-100">
            <OptimizedImage
              src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20American%20professionals%20attending%20a%20modern%20corporate%20training%20workshop%2C%20engaged%20and%20interactive%20session%20in%20bright%20conference%20room%2C%20natural%20light%20from%20large%20windows%2C%20professional%20yet%20relaxed%20atmosphere%2C%20real%20authentic%20workplace%20training%2C%20high%20quality%20editorial%20photography&width=600&height=375&seq=csstrain1_new&orientation=landscape"
              alt="Corporate training session"
              className="w-full aspect-[16/10]"
            />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-gray-100">
            <OptimizedImage
              src="https://readdy.ai/api/search-image?query=American%20job%20interview%20preparation%20session%2C%20career%20coach%20conducting%20mock%20interview%20with%20young%20professional%20in%20clean%20modern%20office%2C%20confident%20body%20language%2C%20focused%20expressions%2C%20professional%20setting%20with%20natural%20light%2C%20authentic%20career%20development%20moment%2C%20high%20quality%20photography&width=600&height=375&seq=csstrain2_new&orientation=landscape"
              alt="Interview preparation"
              className="w-full aspect-[16/10]"
            />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-gray-100">
            <OptimizedImage
              src="https://readdy.ai/api/search-image?query=American%20professionals%20collaborating%20on%20laptops%20in%20modern%20coworking%20space%2C%20focused%20on%20career%20development%20and%20skill%20building%2C%20bright%20airy%20environment%20with%20plants%20and%20natural%20light%2C%20genuine%20teamwork%20and%20learning%20atmosphere%2C%20clean%20contemporary%20design%2C%20high%20quality%20editorial%20style&width=600&height=375&seq=csstrain3_new&orientation=landscape"
              alt="Professional collaboration"
              className="w-full aspect-[16/10]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}