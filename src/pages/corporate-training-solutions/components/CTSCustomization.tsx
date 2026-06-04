import OptimizedImage from '@/components/base/OptimizedImage';

const customSteps = [
  { icon: 'ri-search-eye-line', title: 'Assess skill gaps' },
  { icon: 'ri-focus-3-line', title: 'Define learning objectives' },
  { icon: 'ri-compass-line', title: 'Design targeted training paths' },
  { icon: 'ri-projector-line', title: 'Align programs with project demands' },
  { icon: 'ri-user-settings-line', title: 'Deliver role-specific learning' },
];

export default function CTSCustomization() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <OptimizedImage
              src="https://readdy.ai/api/search-image?query=american%20business%20strategy%20meeting%20focused%20on%20workforce%20development%2C%20corporate%20leaders%20reviewing%20training%20plans%20on%20whiteboard%20in%20modern%20office%2C%20professional%20diverse%20team%2C%20warm%20natural%20lighting%2C%20clean%20corporate%20environment%2C%20genuine%20collaboration%20moment%2C%20high%20quality%20business%20photography&width=600&height=460&seq=ctscust1&orientation=landscape"
              alt="Corporate training strategy"
              className="w-full max-w-[520px]"
              rounded
            />
          </div>

          <div className="flex-1 w-full">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Customization</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3 mb-6 leading-tight">
              Built Around Your{' '}
              <span className="text-brand">Organization&apos;s Needs</span>
            </h2>

            <p className="text-dark/60 text-base leading-relaxed mb-6">
              No two organizations are alike — and neither are their training requirements.
            </p>

            <p className="text-dark/60 text-base leading-relaxed mb-6">
              Our team works with you to:
            </p>

            <div className="space-y-3">
              {customSteps.map((step) => (
                <div key={step.title} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <i className={`${step.icon} text-brand text-sm`} />
                  </div>
                  <span className="text-dark/70 text-sm font-medium">{step.title}</span>
                </div>
              ))}
            </div>

            <p className="text-dark/60 text-sm leading-relaxed mt-6">
              The result is a training experience that supports both immediate productivity and long-term capability building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}