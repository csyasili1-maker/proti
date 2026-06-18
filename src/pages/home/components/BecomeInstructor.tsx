import { learningJourney } from '@/mocks/homeData';

export default function BecomeInstructor() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Learning Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-2">
            Your Path To <span className="text-brand">Career Success</span>
          </h2>
          <p className="text-dark/50 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Follow our structured 8-step journey from enrollment to landing your dream job.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {learningJourney.map((item, i) => (
            <div
              key={item.step}
              className="group relative bg-light rounded-2xl p-6 border border-gray-100 hover:border-brand/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {item.step}
                </div>
                <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center">
                  <i className={`${item.icon} text-brand`} />
                </div>
              </div>
              <h4 className="font-semibold text-dark text-sm mb-1">{item.title}</h4>
              <p className="text-dark/50 text-xs leading-relaxed">{item.description}</p>

              {i < learningJourney.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
                    <i className="ri-arrow-right-s-line text-brand text-sm" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/919492876779?text=Hi%20PROITKEYS!%20I%20want%20to%20start%20my%20learning%20journey%20with%20your%20programs.%20Please%20guide%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-colors"
          >
            Start Your Journey Today
            <i className="ri-whatsapp-line" />
          </a>
        </div>
      </div>
    </section>
  );
}