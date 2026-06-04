export default function CoursesCTA() {
  return (
    <section className="py-20 md:py-28 bg-dark relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] bg-brand-light/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-light mb-4">
            Need Help Choosing?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-4">
            Not sure which course is right for you?
          </h2>
          <p className="text-base md:text-lg text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Our career advisors will help you find the perfect program based on your experience, interests, and career goals. It takes just 5 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/15313954129?text=Hi%20PROITKEYS!%20I'd%20like%20help%20finding%20the%20right%20IT%20course%20for%20my%20career%20goals."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-xl text-base font-bold transition-all whitespace-nowrap hover:scale-105"
            >
              <i className="ri-whatsapp-line text-lg" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+15313954129"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all whitespace-nowrap border border-white/15"
            >
              <i className="ri-phone-line" />
              Call (531) 395 4129
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}