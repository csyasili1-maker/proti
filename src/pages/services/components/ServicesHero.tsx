import OptimizedImage from '@/components/base/OptimizedImage';

export default function ServicesHero() {
  return (
    <section className="relative w-full min-h-[620px] md:min-h-[720px] overflow-hidden pt-20">
      <div className="absolute inset-0 bg-light" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 w-full px-6 lg:px-10 py-16 md:py-24 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <i className="ri-briefcase-line" />
              <span>Career Success Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-display text-dark leading-[1.15] mb-6">
              Everything You Need to Succeed —{' '}
              <span className="text-brand">Beyond the Classroom</span>
            </h1>

            <p className="text-dark/60 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              At PROITKEYS, our commitment does not end with training. We provide a comprehensive suite of career-focused services designed to prepare you, support you, and position you for long-term professional success.
            </p>

            <a
              href="#consultation"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
            >
              Book a Free Career Consultation
              <i className="ri-arrow-right-line" />
            </a>
          </div>

          <div className="flex-1 w-full relative">
            <div className="relative">
              <OptimizedImage
                src="https://readdy.ai/api/search-image?query=professional%20diverse%20team%20collaborating%20in%20modern%20bright%20office%20workspace%2C%20career%20planning%20session%20with%20laptops%20and%20charts%2C%20warm%20orange%20and%20teal%20accent%20colors%2C%20clean%20minimal%20corporate%20photography%20style%2C%20high%20quality&width=700&height=520&seq=cshero1&orientation=landscape"
                alt="Career success team"
                className="relative z-10 w-full max-w-[580px] mx-auto shadow-xl"
                rounded
              />

              <div className="absolute left-0 sm:-left-4 md:left-4 bottom-6 md:bottom-10 bg-white rounded-2xl shadow-lg p-3 sm:p-4 flex items-center gap-2 sm:gap-3 z-20">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                  <i className="ri-user-star-line text-brand text-xl" />
                </div>
                <div>
                  <p className="text-xs text-dark/50">Students Placed</p>
                  <p className="text-sm font-bold text-dark">500+ Careers</p>
                </div>
              </div>

              <div className="absolute right-0 sm:-right-4 md:right-6 top-8 md:top-12 bg-white rounded-2xl shadow-lg p-3 sm:p-4 z-20">
                <div className="flex items-center gap-2 mb-1">
                  <i className="ri-star-fill text-amber-400 text-sm" />
                  <span className="text-sm font-bold text-dark">4.9/5</span>
                </div>
                <p className="text-xs text-dark/50">Career Support Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}