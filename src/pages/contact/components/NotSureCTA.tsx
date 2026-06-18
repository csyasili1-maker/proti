import OptimizedImage from '@/components/base/OptimizedImage';

export default function NotSureCTA() {
  return (
    <section className="w-full py-16 md:py-24 bg-dark">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <span className="text-sm font-semibold text-brand-light uppercase tracking-wider">Not Sure Where to Start?</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mt-3 mb-6 leading-tight">
              Choosing a Program Can Feel{' '}
              <span className="text-brand-light">Overwhelming</span> — But You Don&apos;t Have to Decide Alone
            </h2>

            <p className="text-white/60 text-base leading-relaxed mb-6">
              Schedule a free consultation and receive personalized guidance based on your unique situation. Our advisors take the time to understand where you are and where you want to go.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { icon: 'ri-user-line', text: 'Your background and experience' },
                { icon: 'ri-crosshair-line', text: 'Your career goals and timeline' },
                { icon: 'ri-line-chart-line', text: 'Current market demand and trends' },
                { icon: 'ri-settings-3-line', text: 'Your learning preferences and schedule' },
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
              Schedule Your Free Consultation
            </a>
          </div>

          <div className="flex-1 w-full">
            <OptimizedImage
              src="https://readdy.ai/api/search-image?query=professional%20american%20career%20counselor%20having%20friendly%20one-on-one%20consultation%20with%20diverse%20adult%20student%20in%20modern%20bright%20office%2C%20warm%20natural%20lighting%2C%20both%20smiling%20engaged%20in%20discussion%2C%20laptop%20showing%20career%20roadmap%20on%20desk%2C%20clean%20white%20minimal%20workspace%2C%20high%20quality%20corporate%20photography%2C%20authentic%20genuine%20mentoring%20moment&width=600&height=460&seq=notsure1&orientation=landscape"
              alt="Career consultation session"
              className="w-full max-w-[540px] mx-auto"
              rounded
            />
          </div>
        </div>
      </div>
    </section>
  );
}