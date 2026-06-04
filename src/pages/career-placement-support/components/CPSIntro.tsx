import OptimizedImage from '@/components/base/OptimizedImage';

export default function CPSIntro() {
  return (
    <section className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <OptimizedImage
              src="https://readdy.ai/api/search-image?query=american%20career%20advisor%20and%20young%20professional%20reviewing%20resume%20together%20at%20clean%20modern%20office%20desk%2C%20warm%20natural%20lighting%2C%20collaborative%20genuine%20interaction%2C%20professional%20attire%2C%20bright%20airy%20workspace%20with%20plants%2C%20high%20quality%20corporate%20photography%2C%20authentic%20mentoring%20moment&width=600&height=460&seq=cpsintro1&orientation=landscape"
              alt="Career advisor mentoring session"
              className="w-full max-w-[520px]"
              rounded
            />
          </div>

          <div className="flex-1 w-full">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Our Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3 mb-6 leading-tight">
              Turning Skills Into{' '}
              <span className="text-brand">Career Opportunities</span>
            </h2>

            <p className="text-dark/60 text-base leading-relaxed mb-4">
              Learning technical skills is only part of the journey — successfully navigating the job market requires preparation, strategy, and confidence.
            </p>

            <p className="text-dark/60 text-base leading-relaxed mb-4">
              Our Career Placement Support framework equips you with the tools and guidance needed to approach your job search with clarity and professionalism.
            </p>

            <p className="text-dark/60 text-base leading-relaxed">
              From personal branding to interview readiness, we support you at every stage of your career transition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}