import { useState } from 'react';

export default function CSSCta() {
  const [formData, setFormData] = useState({ name: '', email: '', interest: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const params = new URLSearchParams();
      params.append('name', formData.name);
      params.append('email', formData.email);
      params.append('interest', formData.interest);
      await fetch('https://readdy.ai/api/form/d8cnc4tpg3g3be9asbh0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      setSubmitted(true);
    } catch {
      // silently fail
    }
    setSubmitting(false);
  };

  return (
    <section className="w-full py-20 md:py-28 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Left: Content */}
          <div className="flex-1 w-full text-center lg:text-left">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-dark/50 uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold font-display text-dark mt-4 mb-6 leading-tight">
              Ready to take the{' '}
              <span className="text-brand">next step</span>?
            </h2>
            <p className="text-dark/50 text-base leading-relaxed max-w-md mb-8">
              Book a free consultation and let us help you create a personalized career success plan tailored to your goals.
            </p>

            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-100">
                <i className="ri-shield-check-line text-brand text-sm" />
                <span className="text-dark/50 text-xs">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-100">
                <i className="ri-time-line text-brand text-sm" />
                <span className="text-dark/50 text-xs">Response in 24hrs</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-100">
                <i className="ri-lock-line text-brand text-sm" />
                <span className="text-dark/50 text-xs">No Commitment</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex-1 w-full max-w-md">
            {!submitted ? (
              <form
                id="css-cta-form"
                data-readdy-form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 flex flex-col gap-5 border border-gray-100"
              >
                <h3 className="font-bold text-dark text-lg">Book Your Free Consultation</h3>
                <p className="text-dark/40 text-sm -mt-3">Fill in your details and we will get back within 24 hours.</p>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-dark/50">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-light border border-gray-200 text-sm text-dark placeholder:text-dark/25 focus:outline-none focus:border-brand transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-dark/50">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-light border border-gray-200 text-sm text-dark placeholder:text-dark/25 focus:outline-none focus:border-brand transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-dark/50">I am Interested In</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-light border border-gray-200 text-sm text-dark/50 focus:outline-none focus:border-brand transition-all"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="training">Live Instructor-Led Training</option>
                    <option value="resume">Resume Optimization</option>
                    <option value="linkedin">LinkedIn Profile Enhancement</option>
                    <option value="interview">Interview Preparation</option>
                    <option value="career">Career Guidance & Mentorship</option>
                    <option value="general">General Career Support</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap disabled:opacity-60 mt-2"
                >
                  {submitting ? 'Sending...' : 'Book Free Consultation'}
                  <i className="ri-arrow-right-line" />
                </button>

                <p className="text-dark/25 text-xs text-center">No spam, no commitment. Just career guidance.</p>
              </form>
            ) : (
              <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center gap-4 border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center">
                  <i className="ri-checkbox-circle-fill text-green-600 text-2xl" />
                </div>
                <h4 className="font-bold text-dark text-lg">All Set!</h4>
                <p className="text-dark/45 text-sm leading-relaxed">
                  We will reach out within 24 hours to schedule your free career consultation. Looking forward to helping you grow!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}