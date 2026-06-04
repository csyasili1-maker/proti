const advantages = [
  { icon: 'ri-live-line', title: 'Live Instructor-Led Training', desc: 'Interactive sessions with real-time feedback and collaboration' },
  { icon: 'ri-code-box-line', title: 'Hands-On Real-Time Projects', desc: 'Build portfolio-worthy work that demonstrates your capabilities' },
  { icon: 'ri-window-line', title: 'Scenario-Based Learning', desc: 'Learn through real-world business cases and practical simulations' },
  { icon: 'ri-user-star-line', title: 'Industry Expert Trainers', desc: 'Learn from professionals with years of hands-on field experience' },
  { icon: 'ri-calendar-check-line', title: 'Flexible Learning Formats', desc: 'Choose schedules that work with your existing commitments' },
  { icon: 'ri-briefcase-4-line', title: 'Career Placement Support', desc: 'Resume, interview prep, and job search strategy included' },
];

export default function ProgramAuthority() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">The PROITKEYS Learning Advantage</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3">
            Every Program Is Built Around{' '}
            <span className="text-brand">Outcomes</span>
          </h2>
          <p className="text-dark/50 text-base mt-4 max-w-2xl mx-auto">
            Not just instruction — real results. We focus on what employers actually need so you can step into roles with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="bg-light rounded-2xl p-6 md:p-8 hover:bg-light/80 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-5">
                <i className={`${item.icon} text-brand text-xl`} />
              </div>
              <h3 className="text-lg font-bold font-display text-dark mb-2">{item.title}</h3>
              <p className="text-dark/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/services"
            className="inline-flex items-center gap-2 bg-dark hover:bg-dark-lighter text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
          >
            <i className="ri-arrow-right-line" />
            Includes Career Success Services
          </a>
        </div>
      </div>
    </section>
  );
}