const differentiators = [
  {
    icon: 'ri-focus-3-line',
    title: 'Strategic Advantage',
    description:
      'We blend technical preparation with career strategy so you can move forward with greater clarity and confidence.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Professional Readiness',
    description:
      'Many providers focus only on coursework. We focus on helping you become professionally ready to compete.',
  },
  {
    icon: 'ri-lightbulb-line',
    title: 'Transparent Approach',
    description:
      'While no provider can guarantee employment, structured preparation significantly improves your readiness.',
  },
  {
    icon: 'ri-trophy-line',
    title: 'Employer-Ready Candidates',
    description:
      'Our goal is simple: help you become the kind of candidate employers want to hire.',
  },
];

export default function CPSDifferentiator() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <div className="flex-1">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Why PROITKEYS</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3 leading-tight">
              More Than Guidance —{' '}
              <span className="text-brand">A Strategic Advantage</span>
            </h2>
            <p className="text-dark/60 text-base leading-relaxed mt-4 max-w-lg">
              Many training providers focus only on delivering coursework. PROITKEYS focuses on helping you become professionally ready. Our approach blends technical preparation with career strategy so you can move forward with greater clarity and confidence.
            </p>
            <p className="text-dark/60 text-base leading-relaxed mt-4 max-w-lg">
              We don&apos;t just prepare you to learn — we prepare you to compete.
            </p>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-light rounded-2xl p-5 border border-gray-100 hover:border-brand/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-3">
                  <i className={`${item.icon} text-brand text-lg`} />
                </div>
                <h4 className="font-semibold text-dark text-sm mb-1">{item.title}</h4>
                <p className="text-dark/50 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}