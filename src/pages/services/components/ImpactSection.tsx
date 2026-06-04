import OptimizedImage from '@/components/base/OptimizedImage';

export default function ImpactSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full relative">
            <OptimizedImage
              src="https://readdy.ai/api/search-image?query=confident%20professional%20standing%20in%20modern%20corporate%20office%20looking%20toward%20bright%20future%2C%20warm%20lighting%20with%20orange%20and%20teal%20tones%2C%20career%20growth%20concept%2C%20clean%20minimal%20corporate%20photography%2C%20high%20quality&width=600&height=480&seq=csimpact1&orientation=landscape"
              alt="Career growth"
              className="w-full max-w-[520px] shadow-xl mx-auto"
              rounded
            />
          </div>

          <div className="flex-1 w-full">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-6 leading-tight">
              Designed Around Your <span className="text-brand">Career Growth</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              Every service at PROITKEYS is built with a single objective — helping you move forward with confidence. We focus on practical readiness, professional presentation, and strategic preparation so you are equipped to pursue meaningful opportunities.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              When you succeed, we succeed.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-lighter/60 backdrop-blur-sm rounded-2xl p-5 border border-white/5">
                <span className="text-3xl font-bold font-display text-brand">500+</span>
                <p className="text-white/50 text-sm mt-1">Students Trained</p>
              </div>
              <div className="bg-dark-lighter/60 backdrop-blur-sm rounded-2xl p-5 border border-white/5">
                <span className="text-3xl font-bold font-display text-brand">95%</span>
                <p className="text-white/50 text-sm mt-1">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}