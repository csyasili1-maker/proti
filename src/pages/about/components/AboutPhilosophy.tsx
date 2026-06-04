import OptimizedImage from '@/components/base/OptimizedImage';

export default function AboutPhilosophy() {
  const pillars = [
    { icon: 'ri-building-4-line', text: 'Build strong technical foundations' },
    { icon: 'ri-tools-line', text: 'Develop practical, job-ready skills' },
    { icon: 'ri-global-line', text: 'Gain exposure to real-world tools and workflows' },
    { icon: 'ri-emotion-line', text: 'Improve professional confidence' },
    { icon: 'ri-line-chart-line', text: 'Prepare for evolving industry demands' },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-dark">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <span className="text-sm font-semibold text-brand-light uppercase tracking-wider">Our Training Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mt-3 mb-6 leading-tight">
              Education Should Lead to{' '}
              <span className="text-brand-light">Opportunity</span>
            </h2>

            <p className="text-white/60 text-base leading-relaxed mb-6">
              We believe that education should lead to opportunity. Our programs are carefully structured to help learners build practical capabilities that translate directly into career success.
            </p>

            <div className="space-y-4">
              {pillars.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className={`${item.icon} text-brand-light text-lg`} />
                  </div>
                  <p className="text-white/75 text-base leading-relaxed pt-1.5">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-white/60 text-base leading-relaxed mt-6">
              At PROITKEYS, success is measured by the progress our learners make toward their career goals.
            </p>
          </div>

          <div className="flex-1 w-full">
            <OptimizedImage
              src="https://readdy.ai/api/search-image?query=american%20professional%20woman%20instructor%20teaching%20diverse%20adult%20students%20in%20bright%20modern%20classroom%2C%20students%20working%20on%20laptops%20with%20engaged%20focused%20expressions%2C%20clean%20white%20walls%20with%20large%20windows%2C%20professional%20casual%20attire%2C%20warm%20natural%20lighting%2C%20authentic%20learning%20environment%2C%20high%20quality%20corporate%20photography&width=600&height=500&seq=aboutphil1&orientation=landscape"
              alt="PROITKEYS training philosophy in action"
              className="w-full max-w-[540px] mx-auto"
              rounded
            />
          </div>
        </div>
      </div>
    </section>
  );
}