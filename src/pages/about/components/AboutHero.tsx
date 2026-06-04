import OptimizedImage from '@/components/base/OptimizedImage';

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden pt-20 bg-white">
      <div className="relative z-10 w-full px-6 lg:px-10 py-16 md:py-24 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <i className="ri-flag-line" />
              <span>About PROITKEYS</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-display text-dark leading-[1.15] mb-6">
              Building Careers.{' '}
              <span className="text-brand">Transforming Futures.</span>
            </h1>

            <p className="text-dark/60 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              PROITKEYS is a career-focused learning platform dedicated to helping aspiring professionals and experienced learners step confidently into high-demand IT roles through real-world training and structured career support.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
              >
                Explore Our Programs
                <i className="ri-arrow-right-line" />
              </a>
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-brand text-dark hover:text-brand px-8 py-4 rounded-full text-sm font-semibold transition-all whitespace-nowrap"
              >
                <i className="ri-phone-line" />
                Book a Free Career Consultation
              </a>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="relative">
              <OptimizedImage
                src="https://readdy.ai/api/search-image?query=modern%20bright%20american%20corporate%20training%20classroom%20with%20diverse%20professionals%20collaborating%20around%20laptops%2C%20large%20windows%20with%20natural%20daylight%20streaming%20in%2C%20clean%20minimal%20interior%20design%20white%20walls%2C%20professional%20business%20casual%20attire%2C%20confident%20focused%20expressions%2C%20realistic%20high%20quality%20corporate%20photography%2C%20inspiring%20and%20forward-looking%20atmosphere&width=700&height=520&seq=abouthero2&orientation=landscape"
                alt="PROITKEYS training environment"
                className="relative z-10 w-full max-w-[580px] mx-auto"
                rounded
              />

              <div className="absolute left-0 sm:-left-4 md:left-4 bottom-6 md:bottom-10 bg-white rounded-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 z-20 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                  <i className="ri-user-star-line text-brand text-xl" />
                </div>
                <div>
                  <p className="text-xs text-dark/50">Careers Transformed</p>
                  <p className="text-sm font-bold text-dark">500+ Success Stories</p>
                </div>
              </div>

              <div className="absolute right-0 sm:-right-4 md:right-6 top-8 md:top-12 bg-white rounded-2xl p-3 sm:p-4 z-20 border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <i className="ri-star-fill text-amber-400 text-sm" />
                  <span className="text-sm font-bold text-dark">4.9/5</span>
                </div>
                <p className="text-xs text-dark/50">Learner Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-10 border-t border-gray-100">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold font-display text-dark">500+</p>
            <p className="text-sm text-dark/50 mt-1">Careers Transformed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold font-display text-dark">15+</p>
            <p className="text-sm text-dark/50 mt-1">Training Programs</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold font-display text-dark">4.9</p>
            <p className="text-sm text-dark/50 mt-1">Learner Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold font-display text-dark">100+</p>
            <p className="text-sm text-dark/50 mt-1">Corporate Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}