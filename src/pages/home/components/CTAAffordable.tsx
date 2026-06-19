import { Link } from 'react-router-dom';

const supportHighlights = [
  {
    icon: 'ri-wallet-3-line',
    title: 'Affordable Plans',
    text: 'Career-focused programs with flexible pricing for serious learners.',
  },
  {
    icon: 'ri-user-star-line',
    title: 'Mentor Guidance',
    text: 'Instructor support, project reviews, and practical career direction.',
  },
  {
    icon: 'ri-briefcase-4-line',
    title: 'Placement Support',
    text: 'Resume help, interview readiness, and job-search preparation.',
  },
];

export default function CTAAffordable() {
  return (
    <section className="w-full py-12 md:py-16 bg-light">
      <div className="w-full px-5 sm:px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-brand/10 bg-white shadow-[0_24px_70px_rgba(15,49,96,0.08)]">
          <div className="absolute -right-28 -top-32 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
          <div className="absolute -left-20 -bottom-28 h-72 w-72 rounded-full bg-dark/10 blur-3xl" />
          <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-brand/10 to-transparent lg:block" />

          <div className="relative z-10 grid gap-8 p-6 sm:p-8 md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand">
                <i className="ri-graduation-cap-line text-base" />
                Career Growth Support
              </span>

              <h3 className="mt-5 max-w-3xl text-2xl font-bold leading-tight text-dark sm:text-3xl md:text-4xl">
                Affordable Career-Focused Training & Placement Support For You
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-dark/65 md:text-base">
                Build job-ready skills through live training, hands-on projects, and focused career support designed to help you move confidently toward better IT opportunities.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/919492876779?text=Hi%20PROITKEYS!%20I'm%20interested%20in%20enrolling%20in%20your%20career-focused%20training%20programs.%20Please%20share%20more%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-dark hover:-translate-y-0.5"
                >
                  Enroll Now
                  <i className="ri-whatsapp-line text-base" />
                </a>
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-dark/15 bg-white px-7 py-3.5 text-sm font-semibold text-dark transition-all hover:border-brand/40 hover:text-brand"
                >
                  Browse Courses
                  <i className="ri-arrow-right-line text-base" />
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {supportHighlights.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-gray-100 bg-light/70 p-5 transition-all hover:-translate-y-1 hover:border-brand/25 hover:bg-white hover:shadow-lg"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <i className={`${item.icon} text-xl`} />
                  </div>
                  <h4 className="text-base font-bold text-dark">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-dark/60">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
