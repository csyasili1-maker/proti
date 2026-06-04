import { whyChooseUsFeatures } from '@/mocks/homeData';

export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 md:py-24 bg-dark text-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 leading-tight">
              Why Choose<br />
              <span className="text-brand">PROITKEYS</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mt-4 max-w-lg">
              We focus on real-time industry exposure, practical projects, expert mentorship, and interactive learning experiences to ensure every learner gains both theoretical and hands-on expertise.
            </p>
            <button className="mt-8 inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-colors">
              View All Courses
              <i className="ri-arrow-right-line" />
            </button>
          </div>

          {/* Right Features Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUsFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-dark-lighter/60 backdrop-blur-sm rounded-2xl p-5 border border-white/5 hover:border-brand/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-3 group-hover:bg-brand/20 transition-colors">
                    <i className={`${feature.icon} text-brand text-lg`} />
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{feature.title}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}