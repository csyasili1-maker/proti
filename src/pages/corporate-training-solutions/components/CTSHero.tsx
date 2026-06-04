import OptimizedImage from '@/components/base/OptimizedImage';

export default function CTSHero() {
  return (
    <section className="relative w-full min-h-[620px] md:min-h-[720px] overflow-hidden pt-20">
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10 w-full px-6 lg:px-10 py-16 md:py-24 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <i className="ri-building-4-line" />
              <span>Corporate Training Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-display text-dark leading-[1.15] mb-6">
              Empower Your Workforce With{' '}
              <span className="text-brand">Future-Ready</span> Technology Skills
            </h1>

            <p className="text-dark/60 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              PROITKEYS partners with organizations to deliver customized, results-driven training that equips teams with the capabilities needed to thrive in a rapidly evolving digital landscape.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
              >
                Speak With a Corporate Training Advisor
                <i className="ri-arrow-right-line" />
              </a>
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-brand text-dark hover:text-brand px-8 py-4 rounded-full text-sm font-semibold transition-all whitespace-nowrap"
              >
                <i className="ri-file-list-3-line" />
                Request a Custom Training Plan
              </a>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="relative">
              <OptimizedImage
                src="https://readdy.ai/api/search-image?query=diverse%20corporate%20professionals%20in%20modern%20bright%20training%20room%2C%20instructor%20leading%20technology%20workshop%20with%20large%20screen%20display%2C%20engaged%20american%20business%20team%20learning%20together%2C%20clean%20modern%20office%20setting%2C%20warm%20natural%20lighting%2C%20professional%20corporate%20atmosphere%2C%20high%20quality%20business%20photography&width=700&height=520&seq=ctshero1&orientation=landscape"
                alt="Corporate training session"
                className="relative z-10 w-full max-w-[580px] mx-auto"
                rounded
              />

              <div className="absolute left-0 sm:-left-4 md:left-4 bottom-6 md:bottom-10 bg-white rounded-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 z-20 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                  <i className="ri-building-line text-brand text-xl" />
                </div>
                <div>
                  <p className="text-xs text-dark/50">Trusted By</p>
                  <p className="text-sm font-bold text-dark">100+ Organizations</p>
                </div>
              </div>

              <div className="absolute right-0 sm:-right-4 md:right-6 top-8 md:top-12 bg-white rounded-2xl p-3 sm:p-4 z-20 border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <i className="ri-star-fill text-amber-400 text-sm" />
                  <span className="text-sm font-bold text-dark">4.9/5</span>
                </div>
                <p className="text-xs text-dark/50">Enterprise Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}