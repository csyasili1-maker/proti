import OptimizedImage from '@/components/base/OptimizedImage';

const audiences = [
  {
    icon: 'ri-exchange-line',
    title: 'Career Switchers',
    description: 'Transitioning into IT from a different field? Get structured guidance for a smooth career change.',
    image: 'https://readdy.ai/api/search-image?query=confident%20American%20professional%20man%20considering%20career%20change%2C%20modern%20office%20lobby%20setting%20with%20natural%20light%2C%20determined%20yet%20thoughtful%20expression%2C%20professional%20attire%2C%20clean%20corporate%20environment%2C%20authentic%20career%20transition%20moment%2C%20high%20quality%20editorial%20photography&width=400&height=300&seq=csswho_new1&orientation=landscape',
  },
  {
    icon: 'ri-graduation-cap-line',
    title: 'Recent Graduates',
    description: 'Bridge the gap between academics and your first professional role with hands-on support.',
    image: 'https://readdy.ai/api/search-image?query=young%20American%20college%20graduate%20woman%20in%20modern%20office%2C%20confident%20and%20optimistic%20expression%2C%20professional%20blazer%2C%20bright%20natural%20lighting%20through%20windows%2C%20clean%20contemporary%20workspace%2C%20fresh%20career%20start%20concept%2C%20authentic%20professional%20photography&width=400&height=300&seq=csswho_new2&orientation=landscape',
  },
  {
    icon: 'ri-bar-chart-grouped-line',
    title: 'Professionals Upskilling',
    description: 'Stay competitive by adding in-demand technology skills and certifications to your toolkit.',
    image: 'https://readdy.ai/api/search-image?query=American%20professional%20man%20working%20on%20laptop%20in%20modern%20coworking%20space%2C%20focused%20on%20learning%20new%20skills%2C%20clean%20contemporary%20environment%20with%20plants%20and%20natural%20light%2C%20casual%20professional%20attire%2C%20authentic%20upskilling%20moment%2C%20high%20quality%20editorial%20style&width=400&height=300&seq=csswho_new3&orientation=landscape',
  },
  {
    icon: 'ri-restart-line',
    title: 'Returning to Workforce',
    description: 'Re-enter the professional world with confidence after a career break with updated guidance.',
    image: 'https://readdy.ai/api/search-image?query=American%20woman%20returning%20to%20professional%20work%20after%20career%20break%2C%20confident%20and%20empowered%20expression%2C%20modern%20bright%20office%20environment%2C%20fresh%20start%20new%20beginning%20concept%2C%20warm%20natural%20lighting%2C%20authentic%20career%20comeback%20moment%2C%20high%20quality%20editorial%20photography&width=400&height=300&seq=csswho_new4&orientation=landscape',
  },
];

export default function CSSWhoBenefits() {
  return (
    <section className="w-full py-20 md:py-28 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-dark/50 uppercase tracking-wider">
            Who We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold font-display text-dark mt-3 mb-4 leading-tight">
            Career support for{' '}
            <span className="text-brand">every stage</span>
          </h2>
          <p className="text-dark/45 text-sm max-w-md">
            Wherever you are in your professional journey, we have services designed to help you take the next step.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-brand/20 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <OptimizedImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full"
                  objectFit="cover"
                />
              </div>
              <div className="p-5">
                <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center mb-3">
                  <i className={`${item.icon} text-brand text-base`} />
                </div>
                <h4 className="font-bold text-dark text-sm mb-1.5">{item.title}</h4>
                <p className="text-dark/45 text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}