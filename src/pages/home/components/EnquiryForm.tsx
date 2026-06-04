import { useState } from 'react';
import { services } from '@/mocks/homeData';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('https://readdy.ai/api/form/d8aoisj4d0b9ronr92mg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Form submission error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const courseOptions = [
    'Salesforce Training',
    'Data Engineering',
    'Cybersecurity',
    'Software Testing & QA',
    'Data Analytics',
    'Microsoft Power BI',
    'Artificial Intelligence',
    'Azure DevOps',
    'AWS DevOps',
    'Tableau',
    'Data Science with Python',
    'SAP Programs',
    'Other',
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left */}
          <div className="flex-1">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3 leading-tight">
              Request A <span className="text-brand">Demo / Enquiry</span>
            </h2>
            <p className="text-dark/60 text-base leading-relaxed mt-4 max-w-md">
              Interested in our courses? Fill out the form and our team will get back to you with all the details you need to get started.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-brand" />
                </div>
                <div>
                  <p className="text-sm text-dark/50">Phone</p>
                  <p className="font-semibold text-dark text-sm">(531) 395 4129</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-brand" />
                </div>
                <div>
                  <p className="text-sm text-dark/50">Email</p>
                  <p className="font-semibold text-dark text-sm">proitkeys@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-brand" />
                </div>
                <div>
                  <p className="text-sm text-dark/50">Address</p>
                  <p className="font-semibold text-dark text-sm">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-4">
                    <i className="ri-check-line text-emerald-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">Enquiry Submitted!</h3>
                  <p className="text-dark/60 text-sm">Thank you for your interest. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form data-readdy-form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-dark mb-1.5">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-sm text-dark bg-light"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-sm text-dark bg-light"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-sm text-dark bg-light"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark mb-1.5">Course Interested In</label>
                    <select
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-sm text-dark bg-light appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a course</option>
                      {courseOptions.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your learning goals..."
                      maxLength={500}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-sm text-dark bg-light resize-none"
                    />
                    <p className="text-xs text-dark/40 mt-1">{formData.message.length}/500 characters</p>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-brand hover:bg-brand-dark text-white px-6 py-3.5 rounded-full text-sm font-semibold transition-colors disabled:opacity-50 whitespace-nowrap"
                  >
                    {submitting ? 'Submitting...' : 'Submit Enquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}