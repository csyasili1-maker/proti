import { useState } from 'react';
import OptimizedImage from '@/components/base/OptimizedImage';

export default function QAHero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const links = [
    { label: 'Overview', id: 'overview' },
    { label: 'Curriculum', id: 'curriculum' },
    { label: 'Career', id: 'career' },
    { label: 'Salary', id: 'salary' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[680px] overflow-hidden pt-20 bg-white">
      <div className="relative z-10 w-full px-6 lg:px-10 py-16 md:py-24 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <i className="ri-bug-line" />
              <span>QA Testing Program</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold font-display text-dark leading-[1.12] mb-6">
              Become a Job-Ready{' '}
              <span className="text-brand">QA Engineer</span> in Just Weeks
            </h1>

            <p className="text-dark/60 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Even if you&apos;re starting from scratch. Step into the fast-growing world of software quality assurance with industry-focused training designed by working professionals.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full mb-8">
              <button
                onClick={() => scrollTo('enroll')}
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
              >
                Enroll Now
                <i className="ri-arrow-right-line" />
              </button>
              <a
                href="https://wa.me/919492876779"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-brand text-dark hover:text-brand px-8 py-4 rounded-full text-sm font-semibold transition-all whitespace-nowrap"
              >
                <i className="ri-whatsapp-line" />
                Chat With Advisor
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center">
                  <i className="ri-time-line text-brand text-sm" />
                </div>
                <span className="text-dark/70 text-sm font-medium">6–8 Weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center">
                  <i className="ri-live-line text-brand text-sm" />
                </div>
                <span className="text-dark/70 text-sm font-medium">Live Online</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center">
                  <i className="ri-user-star-line text-brand text-sm" />
                </div>
                <span className="text-dark/70 text-sm font-medium">Placement Support</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="relative">
              <div className="relative z-10 w-full max-w-[560px] mx-auto rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto">
                <OptimizedImage
                  src="https://readdy.ai/api/search-image?query=professional%20american%20woman%20software%20quality%20assurance%20tester%20working%20at%20modern%20bright%20office%20desk%20with%20multiple%20monitors%20showing%20test%20cases%20and%20bug%20tracking%20dashboards%2C%20confident%20focused%20expression%2C%20clean%20minimal%20workspace%20with%20natural%20daylight%2C%20professional%20business%20casual%20attire%2C%20high%20quality%20corporate%20photography%2C%20authentic%20testing%20work%20environment&width=560&height=420&seq=1&orientation=landscape"
                  alt="QA Testing professional at work"
                  width={560}
                  height={420}
                  className="w-full h-full md:h-[420px]"
                />
              </div>

              <div className="absolute left-0 sm:-left-4 md:left-4 bottom-4 md:bottom-8 bg-white rounded-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 z-20 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                  <i className="ri-graduation-cap-line text-brand text-xl" />
                </div>
                <div>
                  <p className="text-xs text-dark/50">Success Rate</p>
                  <p className="text-sm font-bold text-dark">92% Placement</p>
                </div>
              </div>

              <div className="absolute right-0 sm:-right-4 md:right-6 top-6 md:top-10 bg-white rounded-2xl p-3 sm:p-4 z-20 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <i className="ri-star-fill text-amber-400 text-sm" />
                  <span className="text-sm font-bold text-dark">4.9/5</span>
                </div>
                <p className="text-xs text-dark/50">Student Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky sub-nav */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 hidden lg:block">
        <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-1 py-3">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-4 py-2 rounded-full text-sm font-medium text-dark/60 hover:text-brand hover:bg-brand/5 transition-all whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}