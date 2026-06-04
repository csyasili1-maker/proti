export default function CareerSuccessFramework() {
  const steps = [
    { icon: 'ri-live-line', title: 'Live Training', desc: 'Expert-led interactive sessions' },
    { icon: 'ri-projector-line', title: 'Real Projects', desc: 'Hands-on industry exposure' },
    { icon: 'ri-file-text-line', title: 'Resume Build', desc: 'Professional optimization' },
    { icon: 'ri-chat-check-line', title: 'Mock Interviews', desc: 'Confident preparation' },
    { icon: 'ri-briefcase-line', title: 'Job Support', desc: 'Strategic placement help' },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Our Framework</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-2">
            The PROITKEYS <span className="text-brand">Career Success</span> Framework
          </h2>
          <p className="text-dark/50 text-sm md:text-base mt-4 max-w-xl mx-auto">
            A structured approach that takes you from learning to landing — every step designed for real professional success.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="group relative bg-light rounded-2xl p-6 text-center border border-gray-100 hover:border-brand/30 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand/20 transition-colors">
                <i className={`${step.icon} text-brand text-xl`} />
              </div>
              <h4 className="font-semibold text-dark text-sm mb-1">{step.title}</h4>
              <p className="text-dark/50 text-xs">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
                    <i className="ri-arrow-right-s-line text-brand text-sm" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/services"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-colors"
          >
            Explore Career Success Services
            <i className="ri-arrow-right-line" />
          </a>
        </div>
      </div>
    </section>
  );
}