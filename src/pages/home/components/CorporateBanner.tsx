export default function CorporateBanner() {
  return (
    <section className="w-full py-10 md:py-14 bg-light">
      <div className="w-full px-5 sm:px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-dark to-[#15325b] p-8 sm:p-10 md:p-12 text-white shadow-xl shadow-dark/10">
          {/* Decorative shapes */}
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/10 blur-2xl" />
          <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-light">
                <i className="ri-building-line text-sm" />
                B2B Upskilling Solutions
              </span>
              
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Corporate Upskilling Solutions
              </h2>
              
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/70">
                Train your workforce in AI, Cloud, Data Engineering, DevOps, and Software Development. Empower your team with the skills to drive innovation and success.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <a
                href="https://wa.me/919492876779?text=Hi%20PROITKEYS!%20I'm%20interested%20in%20corporate%20upskilling%20solutions%20for%20our%20workforce.%20Please%20share%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-dark hover:-translate-y-0.5 whitespace-nowrap"
              >
                Request Corporate Training
                <i className="ri-arrow-right-line" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
