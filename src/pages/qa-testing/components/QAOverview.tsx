export default function QAOverview() {
  return (
    <section id="overview" className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">About the Course</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3 mb-6 leading-tight">
              Built to Match <span className="text-brand">Industry Hiring Standards</span>
            </h2>

            <p className="text-dark/60 text-base leading-relaxed mb-4">
              The QA Testing program at PROITKEYS is designed around what employers actually need — not outdated theory. You will learn how modern software teams ensure product quality, prevent costly bugs, and deliver flawless user experiences.
            </p>

            <p className="text-dark/60 text-base leading-relaxed mb-6">
              By the end of this training, you will be able to:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Design test strategies',
                'Identify critical software defects',
                'Execute manual and automated tests',
                'Work in Agile environments',
                'Collaborate with developers and product teams',
                'Deploy industry testing tools with confidence',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3">
                  <i className="ri-checkbox-circle-fill text-brand text-base" />
                  <span className="text-dark/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-dark/50 text-sm mt-6 italic">No prior coding experience required.</p>
          </div>

          <div className="flex-1 w-full lg:max-w-md">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-lg font-bold font-display text-dark mb-5">Program Highlights</h3>
              <div className="space-y-4">
                {[
                  { icon: 'ri-time-line', label: 'Duration', value: '6–8 Weeks' },
                  { icon: 'ri-live-line', label: 'Format', value: 'Live Instructor-Led' },
                  { icon: 'ri-group-line', label: 'Batch Size', value: 'Small (Personal Attention)' },
                  { icon: 'ri-tools-line', label: 'Tools Covered', value: 'Selenium, Postman, Jira, SQL' },
                  { icon: 'ri-briefcase-4-line', label: 'Placement Support', value: 'Resume, Mock Interviews, Job Assistance' },
                  { icon: 'ri-award-line', label: 'Certificate', value: 'Industry-Recognized' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-brand text-sm`} />
                    </div>
                    <div>
                      <p className="text-dark/40 text-xs uppercase tracking-wider">{item.label}</p>
                      <p className="text-dark font-semibold text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}