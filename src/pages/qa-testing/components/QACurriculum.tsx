import { useState } from 'react';

const modules = [
  {
    title: 'QA Foundations',
    icon: 'ri-building-4-line',
    topics: [
      'Software Development Life Cycle (SDLC)',
      'Software Testing Life Cycle (STLC)',
      'Testing methodologies & principles',
      'Defect lifecycle',
    ],
  },
  {
    title: 'Manual Testing Mastery',
    icon: 'ri-hand-coin-line',
    topics: [
      'Test case design',
      'Requirement analysis',
      'Functional testing',
      'Regression testing',
      'Integration testing',
      'User Acceptance Testing (UAT)',
    ],
  },
  {
    title: 'Automation Basics',
    icon: 'ri-robot-2-line',
    topics: [
      'Introduction to Selenium',
      'WebDriver architecture',
      'Test automation frameworks',
      'Cross-browser testing',
    ],
  },
  {
    title: 'API & Database Testing',
    icon: 'ri-database-2-line',
    topics: [
      'API testing fundamentals',
      'Postman basics',
      'SQL for testers',
      'Backend validation techniques',
    ],
  },
  {
    title: 'Agile & DevOps Testing',
    icon: 'ri-refresh-line',
    topics: [
      'Agile framework',
      'Scrum ceremonies',
      'Continuous testing approach',
    ],
  },
  {
    title: 'Real-Time Capstone Project',
    icon: 'ri-trophy-line',
    topics: [
      'Work on a live application from requirement analysis to defect reporting',
      'This project becomes a powerful addition to your portfolio',
      'Helps you stand out during interviews',
    ],
  },
];

export default function QACurriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="curriculum" className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Course Content</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3">
            What You Will <span className="text-brand">Learn</span>
          </h2>
          <p className="text-dark/50 text-base mt-4 max-w-2xl mx-auto">
            A structured curriculum designed to take you from beginner to job-ready QA professional.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <i className={`${mod.icon} text-brand text-lg`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold font-display text-dark">{mod.title}</h3>
                  <p className="text-dark/40 text-xs">{mod.topics.length} topics</p>
                </div>
                <i
                  className={`ri-arrow-down-s-line text-dark/40 text-xl transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5 pt-1">
                  <ul className="space-y-2 pl-14">
                    {mod.topics.map((topic, ti) => (
                      <li key={ti} className="flex items-start gap-2.5">
                        <i className="ri-check-line text-brand text-sm mt-0.5" />
                        <span className="text-dark/70 text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}