import OptimizedImage from '@/components/base/OptimizedImage';

export default function ProgramDecisionStage() {
  return (
    <section className="w-full py-16 md:py-24 bg-dark">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <OptimizedImage
              src="https://readdy.ai/api/search-image?query=friendly%20american%20career%20advisor%20explaining%20program%20options%20to%20thoughtful%20adult%20student%20at%20modern%20bright%20office%20desk%20with%20laptop%20showing%20program%20comparison%2C%20warm%20natural%20lighting%2C%20both%20engaged%20in%20conversation%2C%20professional%20casual%20attire%2C%20clean%20white%20minimal%20workspace%2C%20high%20quality%20corporate%20photography%2C%20authentic%20mentoring%20consultation%20moment&width=600&height=460&seq=programdec1&orientation=landscape"
              alt="Career program consultation"
              className="w-full max-w-[540px]"
              rounded
            />
          </div>

          <div className="flex-1 w-full">
            <span className="text-sm font-semibold text-brand-light uppercase tracking-wider">Need Guidance?</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mt-3 mb-6 leading-tight">
              Not Sure Which Program Is{' '}
              <span className="text-brand-light">Right for You?</span>
            </h2>

            <p className="text-white/60 text-base leading-relaxed mb-6">
              Choosing the right path can shape your professional future. Our advisors help you evaluate your background, goals, and market opportunities to recommend a program aligned with your ambitions.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { icon: 'ri-user-line', text: 'Assess your background and experience' },
                { icon: 'ri-bar-chart-grouped-line', text: 'Analyze current market demand and salary trends' },
                { icon: 'ri-route-line', text: 'Define your career timeline and goals' },
                { icon: 'ri-settings-3-line', text: 'Match you with the best-fit program' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-brand-light text-sm`} />
                  </div>
                  <span className="text-white/70 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919492876779"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
            >
              <i className="ri-calendar-check-line" />
              Schedule a Free Career Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}