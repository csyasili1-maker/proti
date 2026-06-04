export default function CTSCta() {
  return (
    <section id="consultation" className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-brand p-10 md:p-16 flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Let&apos;s Build a Future-Ready Workforce — <span className="text-white/90">Together</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
              Connect with our corporate training specialists to design a program aligned with your organization&apos;s vision.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/15313954129?text=Hi%20PROITKEYS!%20I'm%20interested%20in%20corporate%20training%20solutions%20for%20my%20organization."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-brand px-8 py-4 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                Speak With a Corporate Training Advisor
                <i className="ri-whatsapp-line" />
              </a>
              <a
                href="https://wa.me/15313954129?text=Hi%20PROITKEYS!%20I'd%20like%20to%20request%20a%20custom%20corporate%20training%20plan."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-red text-white border border-white/20 hover:bg-white/10 px-8 py-4 rounded-full text-sm font-semibold transition-all whitespace-nowrap"
              >
                <i className="ri-file-list-3-line" />
                Request Your Custom Training Plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}