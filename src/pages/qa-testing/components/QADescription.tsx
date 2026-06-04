import OptimizedImage from '@/components/base/OptimizedImage';

export default function QADescription() {
  const features = [
    'Trainer-led live sessions',
    'Real-time project work',
    'Resume + LinkedIn optimization',
    'Mock interviews with hiring experts',
    'Placement assistance',
    'Lifetime learning resources',
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="w-full max-w-[540px] rounded-3xl overflow-hidden" style={{ height: '405px' }}>
              <OptimizedImage
                src="https://readdy.ai/api/search-image?query=american%20professional%20software%20testing%20team%20reviewing%20test%20results%20on%20large%20screen%20in%20modern%20bright%20office%2C%20collaborative%20discussion%20around%20table%20with%20laptops%20and%20documents%2C%20diverse%20team%20members%2C%20professional%20business%20casual%20attire%2C%20natural%20daylight%2C%20clean%20white%20minimal%20workspace%2C%20high%20quality%20corporate%20photography%2C%20authentic%20team%20collaboration%20moment&width=540&height=405&seq=2&orientation=landscape"
                alt="QA testing team collaboration"
                width={540}
                height={405}
                className="w-full h-[405px]"
              />
            </div>
          </div>

          <div className="flex-1 w-full order-1 lg:order-2">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Course Description</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3 mb-6 leading-tight">
              Immersive Training That <span className="text-brand">Prepares You for Real Work</span>
            </h2>

            <p className="text-dark/60 text-base leading-relaxed mb-4">
              This immersive training combines manual testing + automation fundamentals, preparing you for real-world QA responsibilities from day one. You won&apos;t just watch lectures — you&apos;ll actively test applications, simulate production scenarios, and solve real business problems.
            </p>

            <p className="text-dark/60 text-base leading-relaxed mb-6">
              What makes this program different?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <i className="ri-check-line text-brand text-lg" />
                  <span className="text-dark/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/15313954129"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
            >
              <i className="ri-whatsapp-line" />
              Ask About This Program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}