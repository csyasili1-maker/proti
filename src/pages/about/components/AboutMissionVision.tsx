export default function AboutMissionVision() {
  return (
    <section className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Our Purpose</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3">
            What Drives Us <span className="text-brand">Forward</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand/5 rounded-bl-[100px]" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mb-6">
                <i className="ri-focus-3-line text-brand text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-dark mb-4">Our Mission</h3>
              <p className="text-dark/60 text-base leading-relaxed">
                To empower individuals with industry-relevant technology skills that unlock new career opportunities, financial growth, and long-term professional success. We are committed to delivering education that goes beyond theory — focusing on real capabilities that employers value.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-dark/5 rounded-bl-[100px]" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-dark/10 flex items-center justify-center mb-6">
                <i className="ri-eye-line text-dark text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-dark mb-4">Our Vision</h3>
              <p className="text-dark/60 text-base leading-relaxed">
                To become a globally trusted career transformation platform recognized for shaping the next generation of technology professionals. Our vision is rooted in innovation, accessibility, and learner success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}