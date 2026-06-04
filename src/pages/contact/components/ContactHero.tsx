import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/base/OptimizedImage';

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-[560px] md:min-h-[640px] overflow-hidden pt-20 bg-white">
      <div className="relative z-10 w-full px-6 lg:px-10 py-16 md:py-24 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <i className="ri-phone-line" />
              <span>Contact Us</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-display text-dark leading-[1.15] mb-6">
              Let&apos;s Connect and{' '}
              <span className="text-brand">Support Your Career</span> Goals
            </h1>

            <p className="text-dark/60 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Whether you have questions about programs, need career guidance, or want help choosing the right path, the PROITKEYS team is ready to assist you. Your future starts with a conversation.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
              >
                Book Free Career Consultation
                <i className="ri-arrow-right-line" />
              </a>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-brand text-dark hover:text-brand px-8 py-4 rounded-full text-sm font-semibold transition-all whitespace-nowrap"
              >
                <i className="ri-mail-send-line" />
                Send Us a Message
              </a>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="relative">
              <OptimizedImage
                src="https://readdy.ai/api/search-image?query=friendly%20professional%20american%20male%20career%20advisor%20sitting%20at%20modern%20bright%20office%20desk%20smiling%20warmly%2C%20natural%20daylight%20from%20large%20windows%2C%20clean%20white%20minimal%20workspace%2C%20professional%20navy%20blazer%2C%20welcoming%20approachable%20expression%2C%20laptop%20and%20notebook%20on%20desk%2C%20high%20quality%20corporate%20photography%2C%20authentic%20genuine%20moment&width=700&height=520&seq=contacthero1&orientation=landscape"
                alt="PROITKEYS career advisor"
                className="relative z-10 w-full max-w-[580px] mx-auto"
                rounded
              />

              <div className="absolute left-0 sm:-left-4 md:left-4 bottom-6 md:bottom-10 bg-white rounded-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 z-20 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                  <i className="ri-time-line text-brand text-xl" />
                </div>
                <div>
                  <p className="text-xs text-dark/50">Response Time</p>
                  <p className="text-sm font-bold text-dark">Within 1 Business Day</p>
                </div>
              </div>

              <div className="absolute right-0 sm:-right-4 md:right-6 top-8 md:top-12 bg-white rounded-2xl p-3 sm:p-4 z-20 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <i className="ri-customer-service-2-line text-brand text-sm" />
                  <span className="text-sm font-bold text-dark">24/7 Support</span>
                </div>
                <p className="text-xs text-dark/50">Always here to help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}