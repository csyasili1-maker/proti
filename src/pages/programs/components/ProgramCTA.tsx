export default function ProgramCTA() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="bg-brand rounded-3xl overflow-hidden relative py-14 md:py-20 px-6 md:px-16">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-tr-full" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <i className="ri-rocket-line text-white text-4xl mb-6 block" />

            <h2 className="text-3xl md:text-4xl font-bold font-display text-white leading-tight mb-6">
              Your Career Upgrade Starts Today
            </h2>

            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              The future belongs to professionals who adapt, learn, and evolve. Take the next step toward expanding your opportunities with PROITKEYS.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/919492876779"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-dark px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <i className="ri-calendar-check-line" />
                Book Your Free Career Consultation
              </a>
              <a
                href="tel:+919492876779"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all whitespace-nowrap"
              >
                <i className="ri-phone-line" />
                Speak With a Program Advisor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
