import { getWhatsAppUrl, indiaPhoneNumber, usPhoneNumber } from '@/config/contact';

export default function ContactInfo() {
  return (
    <section className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3">
            Speak With a <span className="text-brand">Career Advisor</span>
          </h2>
          <p className="text-dark/50 text-base mt-4 max-w-2xl mx-auto">
            Taking the next step in your professional journey begins with the right guidance. Our advisors are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-5">
              <i className="ri-phone-line text-brand text-2xl" />
            </div>
            <h3 className="text-lg font-bold font-display text-dark mb-2">Call Us</h3>
            <p className="text-dark/50 text-sm mb-3">Speak directly with an advisor</p>
            <div className="flex flex-col items-center gap-1">
              <a
                href={`tel:${usPhoneNumber.tel}`}
                className="text-brand font-semibold text-base hover:text-brand-dark transition-colors whitespace-nowrap"
              >
                {usPhoneNumber.display}
              </a>
              <a
                href={`tel:${indiaPhoneNumber.tel}`}
                className="text-brand font-semibold text-base hover:text-brand-dark transition-colors whitespace-nowrap"
              >
                {indiaPhoneNumber.display}
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-5">
              <i className="ri-mail-line text-brand text-2xl" />
            </div>
            <h3 className="text-lg font-bold font-display text-dark mb-2">Email Us</h3>
            <p className="text-dark/50 text-sm mb-3">Send us your questions</p>
            <a
              href="mailto:proitkeys@gmail.com"
              className="text-brand font-semibold text-base hover:text-brand-dark transition-colors whitespace-nowrap"
            >
              proitkeys@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-5">
              <i className="ri-whatsapp-line text-brand text-2xl" />
            </div>
            <h3 className="text-lg font-bold font-display text-dark mb-2">WhatsApp</h3>
            <p className="text-dark/50 text-sm mb-3">Quick message support</p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand font-semibold text-base hover:text-brand-dark transition-colors whitespace-nowrap"
            >
              {indiaPhoneNumber.display}
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
          <h3 className="text-lg font-bold font-display text-dark mb-4 text-center">Our advisors are here to:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: 'ri-book-open-line', text: 'Help you choose the right program' },
              { icon: 'ri-question-answer-line', text: 'Answer training-related questions' },
              { icon: 'ri-route-line', text: 'Discuss career pathways' },
              { icon: 'ri-computer-line', text: 'Explain learning formats' },
              { icon: 'ri-file-list-3-line', text: 'Support your enrollment process' },
              { icon: 'ri-bar-chart-grouped-line', text: 'Review your background and goals' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <i className={`${item.icon} text-brand text-lg`} />
                <span className="text-dark/70 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
            >
              <i className="ri-calendar-check-line" />
              Book Your Free Career Consultation Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
