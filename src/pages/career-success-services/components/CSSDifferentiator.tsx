const differentiators = [
  {
    icon: 'ri-focus-3-line',
    title: 'Expert Instruction',
    description: 'Learn from trainers with real corporate experience who understand what employers need.',
  },
  {
    icon: 'ri-projector-line',
    title: 'Practical Exposure',
    description: 'Work on live projects that build a portfolio demonstrating your real capabilities.',
  },
  {
    icon: 'ri-compass-line',
    title: 'Career-Focused Guidance',
    description: 'Every session is designed with your professional goals in mind from day one.',
  },
  {
    icon: 'ri-user-heart-line',
    title: 'Personalized Attention',
    description: 'We do not believe in one-size-fits-all. Every learner gets tailored support.',
  },
];

export default function CSSDifferentiator() {
  return (
    <section className="w-full py-20 md:py-28 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-dark/50 uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold font-display text-dark mt-3 mb-4 leading-tight">
            Why learners{' '}
            <span className="text-brand">trust PROITKEYS</span>
          </h2>
          <p className="text-dark/45 text-sm max-w-lg mx-auto">
            What sets us apart is not just what we teach — it is how deeply we invest in your success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand/20 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-5 mx-auto">
                <i className={`${item.icon} text-brand text-xl`} />
              </div>
              <h3 className="font-bold text-dark text-sm mb-2">{item.title}</h3>
              <p className="text-dark/45 text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}