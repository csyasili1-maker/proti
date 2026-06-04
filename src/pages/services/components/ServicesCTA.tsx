export default function ServicesCTA() {
  return (
    <section id="consultation" className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-brand p-10 md:p-16 flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Your Career Deserves More Than Just Training
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
              Take advantage of a support system designed to help you grow, adapt, and thrive in today&apos;s competitive technology landscape. Schedule your free career consultation today and discover how PROITKEYS can support your professional goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/15313954129?text=Hi%20PROITKEYS!%20I'd%20like%20to%20book%20a%20free%20career%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-brand px-8 py-4 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                Book Consultation
                <i className="ri-whatsapp-line" />
              </a>
              <a
                href="https://wa.me/15313954129?text=Hi%20PROITKEYS!%20I'd%20like%20to%20talk%20to%20a%20career%20advisor."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full text-sm font-semibold hover:opacity-90 transition-colors whitespace-nowrap border border-white/20"
              >
                Talk to an Advisor
                <i className="ri-whatsapp-line" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}