export default function CPSCTA() {
  return (
    <section id="consultation" className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-dark p-10 md:p-16 flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand/20 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/5 rounded-full" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Your Next Opportunity Starts{' '}
              <span className="text-brand">With Preparation</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
              The technology job market rewards candidates who are skilled, prepared, and professionally positioned. Let PROITKEYS support your journey toward meaningful career growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/15313954129?text=Hi%20PROITKEYS!%20I'm%20interested%20in%20career%20placement%20support.%20Can%20we%20schedule%20a%20consultation?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
              >
                Book Consultation
                <i className="ri-whatsapp-line" />
              </a>
              <a
                href="https://wa.me/15313954129?text=Hi%20PROITKEYS!%20I'd%20like%20to%20speak%20with%20a%20placement%20advisor."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-full text-sm font-semibold transition-all whitespace-nowrap"
              >
                <i className="ri-whatsapp-line" />
                Talk to an Advisor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}