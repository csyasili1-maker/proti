const outcomes = [
  { icon: 'ri-rocket-line', title: 'Strengthen technical capabilities' },
  { icon: 'ri-speed-up-line', title: 'Improve team efficiency' },
  { icon: 'ri-cpu-line', title: 'Accelerate digital transformation' },
  { icon: 'ri-emotion-happy-line', title: 'Increase employee confidence' },
  { icon: 'ri-lightbulb-flash-line', title: 'Support innovation' },
  { icon: 'ri-heart-line', title: 'Enhance retention through professional development' },
];

export default function CTSBusinessOutcomes() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Business Outcomes</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-2 mb-4">
            Focused on{' '}
            <span className="text-brand">Measurable Impact</span>
          </h2>
          <p className="text-dark/50 text-sm md:text-base max-w-xl mx-auto">
            Effective training should contribute directly to organizational success. Our programs help businesses:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 bg-light rounded-2xl p-5 border border-gray-100 hover:border-brand/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                <i className={`${item.icon} text-brand text-lg`} />
              </div>
              <span className="font-medium text-dark text-sm">{item.title}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-dark/60 text-sm mt-8">
          We align learning with outcomes that matter.
        </p>
      </div>
    </section>
  );
}