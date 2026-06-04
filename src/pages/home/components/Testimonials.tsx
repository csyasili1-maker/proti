import { useState } from 'react';
import { testimonials } from '@/mocks/homeData';
import OptimizedImage from '@/components/base/OptimizedImage';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Student Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-2">
            What Our Students Say<br />
            About <span className="text-brand">PROITKEYS</span>
          </h2>
          <p className="text-dark/50 text-sm md:text-base mt-4 max-w-lg mx-auto">
            Real stories from real students who transformed their careers with our industry-oriented training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 ${
                i === current ? 'ring-2 ring-brand/20 shadow-lg' : ''
              }`}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <i key={s} className={`ri-star-fill text-xs ${s < Math.floor(t.rating) ? 'text-amber-400' : 'text-gray-200'}`} />
                ))}
                <span className="text-xs text-dark/40 ml-1">{t.rating}/5</span>
              </div>

              <p className="text-dark/70 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <OptimizedImage src={t.avatar} alt={t.name} className="w-10 h-10 !rounded-full" objectFit="cover" width={40} height={40} />
                <div>
                  <h4 className="font-semibold text-dark text-sm">{t.name}</h4>
                  <p className="text-dark/40 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:bg-dark hover:text-white hover:border-dark transition-colors text-dark"
          >
            <i className="ri-arrow-left-line" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-xl bg-dark flex items-center justify-center hover:bg-dark/80 transition-colors text-white"
          >
            <i className="ri-arrow-right-line" />
          </button>
        </div>
      </div>
    </section>
  );
}