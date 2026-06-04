const differentiators = [
  {
    icon: 'ri-focus-3-line',
    title: 'Expert Instruction',
    description: 'Learn from trainers with real corporate experience who understand what employers actually need.',
  },
  {
    icon: 'ri-projector-line',
    title: 'Practical Exposure',
    description: 'Work on live projects and real-world scenarios, not just theoretical exercises.',
  },
  {
    icon: 'ri-compass-line',
    title: 'Career-Focused Guidance',
    description: 'Every session is designed with your professional goals in mind, from day one to placement.',
  },
  {
    icon: 'ri-user-heart-line',
    title: 'Personalized Attention',
    description: 'We do not believe in one-size-fits-all training. We believe in building confident professionals.',
  },
];

export default function Differentiator() {
  return (
    <section className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <div className="flex-1">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3 leading-tight">
              Why Learners <span className="text-brand">Trust PROITKEYS</span>
            </h2>
            <p className="text-dark/60 text-base leading-relaxed mt-4 max-w-lg">
              What sets us apart is not just what we teach — but how deeply we invest in learner success. Our approach combines expert instruction, practical exposure, and career-focused guidance to create a learning experience that prepares you for real-world challenges.
            </p>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-brand/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-3">
                  <i className={`${item.icon} text-brand text-lg`} />
                </div>
                <h4 className="font-semibold text-dark text-sm mb-1">{item.title}</h4>
                <p className="text-dark/50 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}