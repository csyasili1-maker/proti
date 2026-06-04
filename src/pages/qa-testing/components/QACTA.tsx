export default function QACTA() {
  return (
    <section id="enroll" className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="bg-dark rounded-3xl overflow-hidden relative py-14 md:py-20 px-6 md:px-16">
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand/10 rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand/5 rounded-tr-full" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <i className="ri-rocket-line text-brand text-4xl mb-6 block" />

            <h2 className="text-3xl md:text-4xl font-bold font-display text-white leading-tight mb-6">
              Ready to Launch Your <span className="text-brand-light">QA Career</span>?
            </h2>

            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Your first step is a conversation. Talk to an advisor about batch schedules, payment options, and how this program fits your goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/15313954129"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <i className="ri-whatsapp-line" />
                Enroll via WhatsApp
              </a>
              <a
                href="tel:+15313954129"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all whitespace-nowrap"
              >
                <i className="ri-phone-line" />
                Call (531) 395 4129
              </a>
            </div>

            <p className="text-white/40 text-xs mt-8">
              Next batch starts soon. Limited seats available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}