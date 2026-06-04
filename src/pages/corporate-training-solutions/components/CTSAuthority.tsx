const strengths = [
  { icon: 'ri-user-star-line', title: 'Industry-Experienced Trainers' },
  { icon: 'ri-settings-3-line', title: 'Customized Learning Paths' },
  { icon: 'ri-tools-line', title: 'Hands-On Practical Training' },
  { icon: 'ri-refresh-line', title: 'Flexible Delivery Models' },
  { icon: 'ri-stack-line', title: 'Scalable Programs' },
  { icon: 'ri-focus-3-line', title: 'Outcome-Oriented Approach' },
];

export default function CTSAuthority() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Why Organizations Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-2 mb-4">
            Why Organizations Choose{' '}
            <span className="text-brand">PROITKEYS</span>
          </h2>
          <p className="text-dark/50 text-sm md:text-base max-w-2xl mx-auto">
            Our enterprise training approach combines expert instruction with real-world relevance to ensure teams gain skills they can apply immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 bg-light rounded-2xl p-5 border border-gray-100 hover:border-brand/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                <i className={`${item.icon} text-brand text-lg`} />
              </div>
              <span className="font-semibold text-dark text-sm">{item.title}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-dark/60 text-sm mt-8 max-w-2xl mx-auto">
          We focus on building capabilities — not just delivering sessions.
        </p>
      </div>
    </section>
  );
}