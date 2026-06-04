import OptimizedImage from '@/components/base/OptimizedImage';

export default function CSSImpactSection() {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src="https://readdy.ai/api/search-image?query=diverse%20American%20business%20team%20collaborating%20around%20modern%20conference%20table%2C%20bright%20clean%20corporate%20office%20with%20natural%20light%20through%20large%20windows%2C%20genuine%20professional%20interaction%2C%20warm%20and%20empowering%20atmosphere%2C%20soft%20focus%20background%2C%20high%20quality%20corporate%20photography%20with%20clean%20aesthetic&width=1600&height=700&seq=cssimpact_new1&orientation=landscape"
          alt="Professional team"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-dark/85" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-10 max-w-[1440px] mx-auto text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand/80 uppercase tracking-wider">
          Our Impact
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold font-display text-white mt-4 mb-4 leading-tight">
          Results that{' '}
          <span className="text-brand">speak for themselves</span>
        </h2>
        <p className="text-white/50 text-base max-w-lg mx-auto mb-12">
          Every service we offer is built around one goal — helping you move forward with confidence.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <span className="block text-4xl md:text-5xl font-bold font-display text-white mb-1">500+</span>
            <p className="text-white/40 text-xs md:text-sm">Careers Launched</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <span className="block text-4xl md:text-5xl font-bold font-display text-white mb-1">95%</span>
            <p className="text-white/40 text-xs md:text-sm">Success Rate</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <span className="block text-4xl md:text-5xl font-bold font-display text-white mb-1">200+</span>
            <p className="text-white/40 text-xs md:text-sm">Partner Companies</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <span className="block text-4xl md:text-5xl font-bold font-display text-white mb-1">9</span>
            <p className="text-white/40 text-xs md:text-sm">Career Services</p>
          </div>
        </div>
      </div>
    </section>
  );
}