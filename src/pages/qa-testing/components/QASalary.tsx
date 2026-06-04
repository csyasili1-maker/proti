const salaryRows = [
  { level: 'Entry-Level QA Tester', range: '$65,000 – $85,000 / year' },
  { level: 'Mid-Level QA Engineer', range: '$85,000 – $105,000 / year' },
  { level: 'Automation Tester', range: '$95,000 – $120,000 / year' },
];

export default function QASalary() {
  return (
    <section id="salary" className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Earning Potential</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3 mb-6">
              Salary <span className="text-brand">Expectations</span>
            </h2>
            <p className="text-dark/60 text-base leading-relaxed mb-4">
              QA professionals are in high demand across industries. Here&apos;s what you can expect based on experience level and specialization.
            </p>
            <p className="text-dark/40 text-sm italic">Varies by location and prior experience.</p>
          </div>

          <div className="flex-1 w-full">
            <div className="bg-light rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2 bg-dark text-white text-xs font-semibold uppercase tracking-wider">
                <div className="px-5 py-3">Experience Level</div>
                <div className="px-5 py-3">Average Salary</div>
              </div>
              {salaryRows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-light'}`}
                >
                  <div className="px-5 py-4 text-dark font-medium border-r border-gray-100">{row.level}</div>
                  <div className="px-5 py-4 text-brand font-semibold">{row.range}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}