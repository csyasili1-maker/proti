import OptimizedImage from '@/components/base/OptimizedImage';

export default function CSSIntro() {
  return (
    <section className="w-full py-20 md:py-28 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Image */}
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-[4/3] max-w-[520px] mx-auto rounded-2xl overflow-hidden bg-gray-100">
              <OptimizedImage
                src="https://readdy.ai/api/search-image?query=American%20career%20coach%20mentoring%20a%20young%20professional%20in%20bright%20modern%20office%2C%20two%20people%20sitting%20at%20wooden%20table%20having%20genuine%20conversation%2C%20warm%20natural%20sunlight%20through%20windows%2C%20plants%20in%20background%2C%20authentic%20professional%20relationship%2C%20editorial%20photography%20style%2C%20clean%20and%20fresh%20atmosphere&width=600&height=450&seq=cssintro_new1&orientation=landscape"
                alt="Career mentoring session"
                className="w-full aspect-[4/3]"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 w-full">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-dark/50 uppercase tracking-wider">
              How We Support You
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold font-display text-dark mt-4 mb-6 leading-tight">
              A complete support system for your{' '}
              <span className="text-brand">career journey</span>
            </h2>
            <p className="text-dark/55 text-base leading-relaxed mb-5">
              Learning a skill is just the beginning. What truly matters is having the right guidance to turn that knowledge into a fulfilling career. Our Career Success Services bridge the gap between learning and landing.
            </p>
            <p className="text-dark/55 text-base leading-relaxed mb-8">
              From resume optimization to interview preparation and job search strategy, we provide end-to-end support designed around your goals.
            </p>

            <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                <i className="ri-heart-line text-brand text-xl" />
              </div>
              <p className="text-dark/60 text-sm leading-relaxed">
                <strong className="text-dark">With PROITKEYS,</strong> you are never navigating your career alone. We are with you at every step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}