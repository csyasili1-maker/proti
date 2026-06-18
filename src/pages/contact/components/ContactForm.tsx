import { useState } from 'react';

const programs = [
  'QA Testing',
  'BA cum PMP',
  'Tosca',
  'Full Stack Java',
  'Full Stack Web',
  'AI Engineering',
  'Data Engineering',
  'Azure Data Engineering',
  'DevOps on AWS',
  'DevOps on Azure',
  'Cybersecurity',
  'Data Analyst',
  'Data Science with Python',
  'Power BI',
  'Tableau',
  'General Inquiry',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    fetch('https://readdy.ai/api/form/d8cpt1klhp0cimum0pdg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as any).toString(),
    }).then(() => setSubmitted(true));
  };

  return (
    <section id="contact-form" className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <div className="flex-1 w-full lg:max-w-md">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Send Us a Message</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3 mb-4">
              Get in <span className="text-brand">Touch</span>
            </h2>
            <p className="text-dark/50 text-base leading-relaxed mb-8">
              Interested in learning more? Fill out the form, and a member of our team will connect with you shortly.
            </p>

            <div className="space-y-5 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-brand text-xl" />
                </div>
                <div>
                  <p className="text-dark font-semibold text-sm">Privacy Guaranteed</p>
                  <p className="text-dark/50 text-xs">We respect your privacy. Your information is never shared.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <i className="ri-flashlight-line text-brand text-xl" />
                </div>
                <div>
                  <p className="text-dark font-semibold text-sm">Fast Response</p>
                  <p className="text-dark/50 text-xs">Our team typically responds within one business day.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <i className="ri-customer-service-2-line text-brand text-xl" />
                </div>
                <div>
                  <p className="text-dark font-semibold text-sm">Personalized Guidance</p>
                  <p className="text-dark/50 text-xs">Every inquiry is handled with care and attention to your goals.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            {submitted ? (
              <div className="bg-light rounded-3xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-6">
                  <i className="ri-check-line text-brand text-3xl" />
                </div>
                <h3 className="text-2xl font-bold font-display text-dark mb-3">Message Received!</h3>
                <p className="text-dark/60 text-base max-w-md mx-auto">
                  Thank you for reaching out. A member of our team will connect with you shortly — typically within one business day.
                </p>
              </div>
            ) : (
              <form
                data-readdy-form
                id="contact-inquiry"
                onSubmit={handleSubmit}
                className="bg-light rounded-3xl p-6 md:p-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-dark mb-2">
                      Full Name <span className="text-brand">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="John Smith"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/10 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                      Email Address <span className="text-brand">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/10 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 94928 76779"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/10 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-dark mb-2">
                      Program of Interest
                    </label>
                    <select
                      id="program"
                      name="program"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-dark focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/10 transition-all appearance-none"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                    >
                      <option value="">Select a program</option>
                      {programs.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={500}
                    placeholder="Tell us about your career goals and how we can help..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/10 transition-all resize-none"
                  />
                  <p className="text-dark/40 text-xs mt-1">Maximum 500 characters</p>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  <i className="ri-send-plane-line" />
                  Request Information
                </button>

                <p className="text-dark/40 text-xs mt-4">
                  <i className="ri-shield-check-line mr-1" />
                  We respect your privacy. Your information is never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
