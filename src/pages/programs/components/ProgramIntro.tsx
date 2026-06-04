import OptimizedImage from '@/components/base/OptimizedImage';

export default function ProgramIntro() {
  return (
    <section className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <OptimizedImage
              src="https://readdy.ai/api/search-image?query=professional%20american%20software%20developer%20working%20at%20modern%20desk%20with%20multiple%20monitors%20showing%20code%20and%20data%20visualizations%2C%20bright%20clean%20office%20environment%2C%20natural%20daylight%2C%20focused%20confident%20expression%2C%20professional%20casual%20attire%2C%20modern%20tech%20workspace%20with%20plants%2C%20high%20quality%20corporate%20photography%2C%20authentic%20real%20work%20moment&width=600&height=460&seq=programintro1&orientation=landscape"
              alt="PROITKEYS program student learning"
              className="w-full max-w-[520px]"
              rounded
            />
          </div>

          <div className="flex-1 w-full">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Built for Results</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3 mb-6 leading-tight">
              Designed for Today&apos;s{' '}
              <span className="text-brand">Competitive Job Market</span>
            </h2>

            <p className="text-dark/60 text-base leading-relaxed mb-4">
              Technology is evolving rapidly, and organizations are looking for professionals who can contribute with confidence from day one. PROITKEYS programs emphasize practical learning, real-world exposure, and structured career support so you can build capabilities that align with modern industry expectations.
            </p>

            <p className="text-dark/60 text-base leading-relaxed mb-4">
              Whether you are starting fresh, transitioning into IT, or advancing your expertise, our programs are built to support your long-term growth.
            </p>

            <p className="text-dark/60 text-base leading-relaxed">
              Each curriculum is developed with input from industry practitioners and regularly updated to reflect current market demands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}