import { useState } from 'react';
import { generateFaqs } from '@/utils/courseDetailUtils';
import type { Course } from '@/mocks/coursesData';

interface CourseFaqProps {
  course: Course;
}

export default function CourseFaq({ course }: CourseFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = generateFaqs(course);

  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <div className="lg:w-1/3">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3 mb-4">
              Frequently Asked <span className="text-brand">Questions</span>
            </h2>
            <p className="text-dark/50 text-base leading-relaxed">
              Everything you need to know before starting your {course.title} journey with PROITKEYS.
            </p>
          </div>

          <div className="flex-1 w-full space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-light rounded-2xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-dark font-semibold text-sm">{faq.q}</span>
                  <i
                    className={`ri-arrow-down-s-line text-dark/40 text-xl flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-dark/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}