const differentiators = [
  {
    icon: 'ri-user-star-line',
    title: 'Industry Expert Trainers',
    description: 'Learn directly from professionals with extensive real-world experience who bring practical insights to every session.',
  },
  {
    icon: 'ri-code-box-line',
    title: 'Hands-On Real-Time Projects',
    description: 'Work on practical assignments designed to simulate actual business challenges and build your professional portfolio.',
  },
  {
    icon: 'ri-live-line',
    title: 'Live Instructor-Led Training',
    description: 'Engage in interactive sessions that encourage collaboration, problem-solving, and deeper understanding.',
  },
  {
    icon: 'ri-briefcase-4-line',
    title: 'Structured Career Support',
    description: 'Benefit from resume guidance, interview preparation, and strategies that help you present your skills effectively.',
  },
  {
    icon: 'ri-calendar-check-line',
    title: 'Flexible Learning Environment',
    description: 'Access training that fits your schedule without compromising quality — learn at your own pace, on your own terms.',
  },
  {
    icon: 'ri-loop-left-line',
    title: 'Lifetime Learning Mindset',
    description: 'Technology evolves — and so should your skills. We encourage continuous growth to help you stay competitive.',
  },
];

export default function AboutDifferentiators() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">What Sets Us Apart</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3">
            What Makes PROITKEYS{' '}
            <span className="text-brand">Different</span>
          </h2>
          <p className="text-dark/50 text-base mt-4 max-w-2xl mx-auto">
            At PROITKEYS, we don&apos;t just prepare you to learn — we prepare you to succeed. Our training approach is built around outcomes, ensuring every learner gains the confidence and experience required to compete in today&apos;s job market.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => (
            <div
              key={i}
              className="bg-light rounded-2xl p-6 md:p-8 hover:bg-light/80 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-5">
                <i className={`${item.icon} text-brand text-xl`} />
              </div>
              <h3 className="text-lg font-bold font-display text-dark mb-3">{item.title}</h3>
              <p className="text-dark/50 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}