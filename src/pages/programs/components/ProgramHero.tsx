import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/base/OptimizedImage';

export default function ProgramHero() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden pt-20 bg-white">
      <div className="relative z-10 w-full px-6 lg:px-10 py-16 md:py-24 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <i className="ri-stack-line" />
              <span>Programs</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-display text-dark leading-[1.15] mb-6">
              Future-Proof Your Career With{' '}
              <span className="text-brand">Industry-Relevant</span> Programs
            </h1>

            <p className="text-dark/60 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Gain the skills employers are actively seeking through immersive, expert-led training designed to prepare you for real-world technology roles.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
              >
                Explore Programs
                <i className="ri-arrow-right-line" />
              </Link>
              <a
                href="https://wa.me/15313954129"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-brand text-dark hover:text-brand px-8 py-4 rounded-full text-sm font-semibold transition-all whitespace-nowrap"
              >
                <i className="ri-calendar-check-line" />
                Book a Free Career Consultation
              </a>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="relative">
              <OptimizedImage
                src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20american%20tech%20professionals%20collaborating%20in%20modern%20bright%20office%20workspace%20around%20large%20screen%20showing%20code%20and%20data%20dashboards%2C%20professional%20business%20casual%20attire%2C%20confident%20engaged%20expressions%2C%20natural%20daylight%20from%20large%20windows%2C%20clean%20minimal%20white%20walls%2C%20high%20quality%20corporate%20photography%2C%20authentic%20teamwork%20moment%20in%20technology%20training%20environment&width=700&height=520&seq=programhero1&orientation=landscape"
                alt="PROITKEYS training programs"
                className="relative z-10 w-full max-w-[580px] mx-auto"
                rounded
              />

              <div className="absolute left-0 sm:-left-4 md:left-4 bottom-6 md:bottom-10 bg-white rounded-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 z-20 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                  <i className="ri-graduation-cap-line text-brand text-xl" />
                </div>
                <div>
                  <p className="text-xs text-dark/50">Programs Offered</p>
                  <p className="text-sm font-bold text-dark">15+ Specializations</p>
                </div>
              </div>

              <div className="absolute right-0 sm:-right-4 md:right-6 top-8 md:top-12 bg-white rounded-2xl p-3 sm:p-4 z-20 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <i className="ri-star-fill text-amber-400 text-sm" />
                  <span className="text-sm font-bold text-dark">4.9/5</span>
                </div>
                <p className="text-xs text-dark/50">Program Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}