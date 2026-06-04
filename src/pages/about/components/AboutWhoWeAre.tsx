import OptimizedImage from '@/components/base/OptimizedImage';

export default function AboutWhoWeAre() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <div className="relative">
              <OptimizedImage
                src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20american%20professionals%20collaborating%20in%20bright%20modern%20coworking%20space%2C%20engaged%20discussion%20around%20laptops%2C%20genuine%20smiles%20and%20teamwork%2C%20clean%20white%20walls%20with%20natural%20lighting%20from%20floor%20to%20ceiling%20windows%2C%20professional%20business%20casual%20attire%2C%20authentic%20candid%20moment%2C%20high%20quality%20corporate%20photography&width=600&height=500&seq=aboutwho1&orientation=landscape"
                alt="PROITKEYS team collaboration"
                className="w-full max-w-[540px]"
                rounded
              />
              <div className="absolute -bottom-5 -right-5 md:-right-8 bg-dark rounded-2xl p-5 hidden md:block">
                <div className="flex items-center gap-2 mb-1">
                  <i className="ri-star-fill text-brand text-sm" />
                  <i className="ri-star-fill text-brand text-sm" />
                  <i className="ri-star-fill text-brand text-sm" />
                  <i className="ri-star-fill text-brand text-sm" />
                  <i className="ri-star-half-fill text-brand text-sm" />
                </div>
                <p className="text-white text-sm font-semibold">4.9 / 5</p>
                <p className="text-white/50 text-xs">Student Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3 mb-6 leading-tight">
              Bridging the Gap Between{' '}
              <span className="text-brand">Learning</span> and{' '}
              <span className="text-brand">Industry</span>
            </h2>

            <p className="text-dark/60 text-base leading-relaxed mb-4">
              PROITKEYS was founded with a clear purpose — to bridge the gap between traditional learning and real industry expectations.
            </p>

            <p className="text-dark/60 text-base leading-relaxed mb-4">
              In today&apos;s rapidly evolving technology landscape, employers seek professionals who can contribute from day one. That&apos;s why our programs emphasize practical skills, real-time projects, and scenario-based learning that mirrors workplace environments.
            </p>

            <p className="text-dark/60 text-base leading-relaxed">
              Whether you are starting your career, transitioning into technology, or advancing toward higher-paying roles, PROITKEYS provides the guidance, expertise, and support needed to help you move forward with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}