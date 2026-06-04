import { useState } from 'react';

const faqs = [
  {
    q: 'Do I need an IT background?',
    a: 'No. Many of our learners successfully transition from non-technical careers. Our curriculum starts from the fundamentals and builds up step-by-step.',
  },
  {
    q: 'Is coding required?',
    a: 'Manual testing requires minimal coding. Automation basics are taught step-by-step, so you will be guided through every line of code.',
  },
  {
    q: 'Will I receive placement support?',
    a: 'Yes — we provide structured job assistance, mock interviews with hiring experts, resume optimization, and LinkedIn guidance.',
  },
  {
    q: 'Are classes recorded?',
    a: 'Yes. You get lifetime access to recorded sessions for revision, so you never miss a concept even if you miss a live class.',
  },
  {
    q: 'What tools will I learn?',
    a: 'Industry-standard tools including Selenium, Postman, Jira, and SQL — the exact tools that employers expect you to know.',
  },
  {
    q: 'How long is the program?',
    a: 'The program runs for 6–8 weeks with live online sessions. Weekend batches are available for working professionals.',
  },
];

export default function QAFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
              Everything you need to know before starting your QA Testing journey.
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