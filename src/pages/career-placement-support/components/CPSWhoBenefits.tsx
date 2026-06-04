const audiences = [
  {
    icon: 'ri-exchange-line',
    title: 'Career Switchers',
    description: 'Entering the IT industry from a different background and looking for structured placement guidance.',
  },
  {
    icon: 'ri-arrow-up-circle-line',
    title: 'Professionals Seeking Advancement',
    description: 'Experienced individuals aiming to move into higher-level or specialized technology roles.',
  },
  {
    icon: 'ri-restart-line',
    title: 'Returning to the Workforce',
    description: 'Learners re-entering the professional world after a career break, seeking refreshed preparation.',
  },
  {
    icon: 'ri-graduation-cap-line',
    title: 'Recent Graduates',
    description: 'Preparing to enter their first technology role with confidence and professional readiness.',
  },
  {
    icon: 'ri-bar-chart-grouped-line',
    title: 'Structured Career Growth Seekers',
    description: 'Individuals who want a clear, guided approach to building a long-term technology career.',
  },
];

export default function CPSWhoBenefits() {
  return (
    <section className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Who This Is For</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-2 mb-4">
            Career Placement Support{' '}
            <span className="text-brand">For Every Stage</span>
          </h2>
          <p className="text-dark/50 text-sm md:text-base max-w-xl mx-auto">
            Our Career Placement Support is ideal for anyone looking to grow, transition, or advance in the technology industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand/30 transition-all duration-300"
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

        <p className="text-center text-dark/60 text-sm mt-10 font-medium">
          No matter your starting point, preparation creates opportunity.
        </p>
      </div>
    </section>
  );
}