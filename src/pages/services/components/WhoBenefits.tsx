const audiences = [
  {
    icon: 'ri-exchange-line',
    title: 'Career Switchers',
    description: 'Entering the IT industry from a different background and need structured guidance.',
  },
  {
    icon: 'ri-graduation-cap-line',
    title: 'Recent Graduates',
    description: 'Seeking structured guidance to transition from academics to professional roles.',
  },
  {
    icon: 'ri-bar-chart-grouped-line',
    title: 'Professionals Upskilling',
    description: 'Aiming to advance their current career with in-demand technology skills.',
  },
  {
    icon: 'ri-restart-line',
    title: 'Returning to Workforce',
    description: 'Individuals re-entering the professional world after a career break.',
  },
  {
    icon: 'ri-arrow-up-circle-line',
    title: 'Advanced Roles',
    description: 'Learners preparing for senior and specialized positions in technology.',
  },
];

export default function WhoBenefits() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Who We Serve</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-2">
            Who Benefits From Our <span className="text-brand">Services</span>
          </h2>
          <p className="text-dark/50 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Our Career Success Services are ideal for anyone looking to grow, transition, or advance in the technology industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 bg-light rounded-2xl p-6 border border-gray-100 hover:border-brand/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                <i className={`${item.icon} text-brand text-xl`} />
              </div>
              <div>
                <h4 className="font-semibold text-dark text-sm mb-1">{item.title}</h4>
                <p className="text-dark/50 text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-dark/60 text-sm mt-10">
          Wherever you are in your journey, PROITKEYS is here to support your next step.
        </p>
      </div>
    </section>
  );
}