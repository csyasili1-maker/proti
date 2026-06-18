export default function CTABanners() {
  return (
    <section className="w-full py-8 md:py-12 bg-light">
      <div className="w-full px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="overflow-hidden rounded-3xl bg-brand p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[240px] sm:min-h-[320px] md:min-h-[380px]">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5 md:mb-6">
                <i className="ri-rocket-line text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-3 md:mb-4">
                Launch Your Career<br />With PROITKEYS
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-sm">
                Industry-oriented training with real-time projects, expert mentorship, and dedicated placement assistance.
              </p>
            </div>
            <div className="mt-5 md:mt-6">
              <a
                href="https://wa.me/919492876779?text=Hi%20PROITKEYS!%20I%20want%20to%20launch%20my%20career%20with%20your%20training%20programs.%20Please%20share%20the%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-brand px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                Let&apos;s Get Started
                <i className="ri-whatsapp-line" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden rounded-3xl bg-[#15325b] p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[240px] sm:min-h-[320px] md:min-h-[380px]">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5 md:mb-6">
                <i className="ri-live-line text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-3 md:mb-4">
                Live Interactive Classes<br />With Industry Experts
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-sm">
                Engage directly with professional trainers in real-time sessions. Get your doubts cleared instantly.
              </p>
            </div>
            <div className="mt-5 md:mt-6">
              <a
                href="https://wa.me/919492876779?text=Hi%20PROITKEYS!%20I'm%20interested%20in%20your%20live%20interactive%20training%20classes.%20Please%20share%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#15325b] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                Explore Courses
                <i className="ri-whatsapp-line" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}