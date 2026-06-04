const deliveryModels = [
  {
    icon: 'ri-live-line',
    title: 'Live Virtual Instructor-Led Training',
    description:
      'Interactive remote sessions led by industry experts, enabling teams to learn from anywhere without compromising on engagement or quality.',
  },
  {
    icon: 'ri-building-line',
    title: 'Onsite Training Programs',
    description:
      'In-person training delivered at your location, fostering direct collaboration and hands-on learning within your team environment.',
  },
  {
    icon: 'ri-git-merge-line',
    title: 'Hybrid Learning Models',
    description:
      'A blend of virtual and in-person sessions tailored to your team&apos;s preferences, combining flexibility with face-to-face interaction.',
  },
];

export default function CTSDeliveryModels() {
  return (
    <section className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Delivery Models</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-2 mb-4">
            Flexible{' '}
            <span className="text-brand">Training Formats</span>
          </h2>
          <p className="text-dark/50 text-sm md:text-base max-w-xl mx-auto">
            We provide multiple delivery options to suit your operational needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deliveryModels.map((model) => (
            <div
              key={model.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand/30 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-4">
                <i className={`${model.icon} text-brand text-2xl`} />
              </div>
              <h3 className="font-bold text-dark text-base mb-3">{model.title}</h3>
              <p className="text-dark/60 text-sm leading-relaxed">{model.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-dark/60 text-sm mt-8">
          Our flexible approach ensures minimal disruption while maximizing learning effectiveness.
        </p>
      </div>
    </section>
  );
}