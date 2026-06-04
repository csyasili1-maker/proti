import { useState } from 'react';
import OptimizedImage from '@/components/base/OptimizedImage';

export default function CSSHero() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const params = new URLSearchParams();
      params.append('name', name);
      params.append('email', email);
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
    <section className="w-full pt-28 pb-20 md:pt-36 md:pb-28 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text Content */}
          <div className="flex-1 w-full">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-dark/50 uppercase tracking-wider mb-4">
              Career Success Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-display text-dark leading-[1.08] mb-6">
              Your career deserves more than{' '}
              <span className="text-brand">just training</span>
            </h1>
            <p className="text-dark/55 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              We go beyond the classroom with dedicated career services that prepare you, position you, and connect you to real opportunities.
            </p>

            {!submitted ? (
              <form
                id="css-hero-form"
                data-readdy-form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md"
              >
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="flex-1 px-5 py-3.5 rounded-xl bg-light border border-gray-200 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-brand transition-all"
                />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 px-5 py-3.5 rounded-xl bg-light border border-gray-200 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-brand transition-all"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap disabled:opacity-60"
                >
                  {submitting ? 'Sending...' : 'Get Started'}
                  <i className="ri-arrow-right-line" />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-3 bg-green-50 text-green-700 px-5 py-4 rounded-xl border border-green-200 max-w-md">
                <i className="ri-checkbox-circle-fill text-xl" />
                <span className="text-sm font-medium">Thanks! We&apos;ll reach out to schedule your consultation.</span>
              </div>
            )}
          </div>

          {/* Right: Image */}
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-[4/3] max-w-[560px] mx-auto rounded-2xl overflow-hidden bg-gray-100">
              <OptimizedImage
                src="https://readdy.ai/api/search-image?query=confident%20American%20business%20professional%20woman%20in%20modern%20bright%20office%2C%20warm%20natural%20lighting%2C%20clean%20white%20desk%20with%20laptop%2C%20genuine%20friendly%20expression%2C%20professional%20corporate%20setting%2C%20high%20quality%20editorial%20photography%2C%20simple%20uncluttered%20background&width=600&height=450&seq=csshero_new1&orientation=landscape"
                alt="Career success professional"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}