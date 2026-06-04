import OptimizedImage from '@/components/base/OptimizedImage';

const audiences = [
  { icon: 'ri-team-line', title: 'Upskill technical teams' },
  { icon: 'ri-cpu-line', title: 'Prepare employees for new technologies' },
  { icon: 'ri-stack-line', title: 'Support digital initiatives' },
  { icon: 'ri-tools-line', title: 'Improve project readiness' },
  { icon: 'ri-arrow-up-circle-line', title: 'Build future leadership pipelines' },
];

export default function CTSWhoSupport() {
  return (
    <section className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Who We Support</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3 mb-6 leading-tight">
              Ideal for Organizations{' '}
              <span className="text-brand">That Want To</span>
            </h2>

            <div className="space-y-3 mb-6">
              {audiences.map((item) => (
                <div key={item.title} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-brand text-sm`} />
                  </div>
                  <span className="text-dark/70 text-sm font-medium">{item.title}</span>
                </div>
              ))}
            </div>

            <p className="text-dark/60 text-sm leading-relaxed">
              Whether you are training a small team or scaling learning across departments, PROITKEYS is prepared to support your goals.
            </p>
          </div>

          <div className="flex-1 w-full">
            <OptimizedImage
              src="https://readdy.ai/api/search-image?query=diverse%20american%20corporate%20team%20in%20modern%20bright%20office%20engaged%20in%20professional%20development%20workshop%2C%20collaborative%20learning%20atmosphere%2C%20large%20windows%20natural%20light%2C%20business%20casual%20attire%2C%20genuine%20interaction%2C%20high%20quality%20corporate%20photography&width=600&height=460&seq=ctssupport1&orientation=landscape"
              alt="Corporate team development"
              className="w-full max-w-[520px]"
              rounded
            />
          </div>
        </div>
      </div>
    </section>
  );
}