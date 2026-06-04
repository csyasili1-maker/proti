export default function QADurationCapstone() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-light rounded-2xl p-8 md:p-10">
            <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mb-5">
              <i className="ri-time-line text-brand text-2xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-display text-dark mb-3">
              Duration: <span className="text-brand">6–8 Weeks</span>
            </h3>
            <p className="text-dark/60 text-base leading-relaxed mb-4">
              Fast-track learning designed for working professionals and graduates. Each week builds on the previous one, moving from foundations to real-world application.
            </p>
            <ul className="space-y-2">
              {['Live online sessions (weekdays/weekends available)', 'Hands-on assignments after each module', 'Recorded sessions for revision'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-dark/70 text-sm">
                  <i className="ri-check-line text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-dark rounded-2xl p-8 md:p-10">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
              <i className="ri-trophy-line text-brand-light text-2xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-3">
              Capstone Project
            </h3>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              You will test a real-world application from requirement analysis to defect reporting. This project becomes a powerful addition to your portfolio and helps you stand out during interviews.
            </p>
            <ul className="space-y-2">
              {['End-to-end testing on a live application', 'Requirement analysis and test planning', 'Defect reporting and tracking', 'Final portfolio presentation'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                  <i className="ri-check-line text-brand-light" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}