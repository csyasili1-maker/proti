import { whyChooseUsFeatures } from '@/mocks/homeData';
import { Link } from 'react-router-dom';

export default function WhyChooseUs() {
  const proofPoints = [
    { value: '100+', label: 'career-ready courses' },
    { value: 'Live', label: 'instructor-led training' },
    { value: '1:1', label: 'career support focus' },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#f8fafc] text-dark relative overflow-hidden">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.35fr] gap-8 lg:gap-10 items-stretch">
          <div className="relative overflow-hidden rounded-lg bg-dark p-7 md:p-9 text-white shadow-xl shadow-black/10 h-full flex flex-col justify-between">
            <div className="absolute inset-x-0 top-0 h-1 bg-brand" />

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-light">
                <i className="ri-shield-star-line text-sm" />
                Why Choose Us
              </span>

              <h2 className="mt-5 text-3xl md:text-5xl font-bold font-display leading-tight">
                Built For Serious
                <span className="block text-brand-light">Career Growth</span>
              </h2>

              <p className="mt-5 text-sm md:text-base leading-relaxed text-white/70">
                We combine live training, practical project work, expert mentorship, and placement-focused support so learners gain confidence with real-world tools and interview-ready skills.
              </p>
            </div>

            <div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {proofPoints.map((item) => (
                  <div key={item.label} className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <p className="text-xl md:text-2xl font-bold text-white">{item.value}</p>
                    <p className="mt-1 text-[11px] leading-snug text-white/55">{item.label}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/courses"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-dark hover:-translate-y-0.5"
              >
                View All Courses
                <i className="ri-arrow-right-line" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {whyChooseUsFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <i className={`${feature.icon} text-xl`} />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-brand/70">0{index + 1}</span>
                      <span className="h-px w-10 bg-brand/20" />
                    </div>
                    <h4 className="mt-2 text-base md:text-lg font-bold leading-snug text-dark">
                      {feature.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-dark/58">{feature.description}</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand transition-all duration-300 group-hover:w-full" />
              </div>
            ))}

            <div className="rounded-lg border border-brand/15 bg-brand/5 p-5 md:p-6 sm:col-span-2">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-brand shadow-sm">
                  <i className="ri-customer-service-2-line text-xl" />
                </div>
                <div
                  className="min-w-0"
                >
                  <h4 className="text-base md:text-lg font-bold text-dark">Need help choosing a path?</h4>
                  <p className="mt-2 text-sm leading-relaxed text-dark/60">
                    Talk to our advisors and match your background with the right course, timeline, and career goal.
                  </p>
                  <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark">
                    Book a consultation
                    <i className="ri-arrow-right-line" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
