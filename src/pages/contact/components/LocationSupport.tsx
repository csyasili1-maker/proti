import OptimizedImage from '@/components/base/OptimizedImage';

export default function LocationSupport() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full order-2 lg:order-1">
            <OptimizedImage
              src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20online%20learners%20participating%20in%20virtual%20training%20from%20different%20locations%20around%20the%20world%2C%20grid%20of%20video%20call%20screens%20on%20modern%20display%2C%20american%20and%20international%20professionals%20engaged%20in%20digital%20classroom%2C%20bright%20clean%20tech%20workspace%2C%20modern%20laptop%20and%20monitors%2C%20global%20connected%20community%20feel%2C%20high%20quality%20corporate%20photography&width=600&height=460&seq=location1&orientation=landscape"
              alt="Global learner community"
              className="w-full max-w-[540px]"
              rounded
            />
          </div>

          <div className="flex-1 w-full order-1 lg:order-2">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Global Reach</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3 mb-6 leading-tight">
              Supporting Learners{' '}
              <span className="text-brand">Across</span> Locations
            </h2>

            <p className="text-dark/60 text-base leading-relaxed mb-6">
              PROITKEYS proudly supports a diverse community of learners through flexible online training designed to make high-quality education accessible wherever you are.
            </p>

            <p className="text-dark/60 text-base leading-relaxed mb-6">
              Distance should never limit opportunity. Our live instructor-led sessions, recorded resources, and dedicated support channels ensure you get the same quality experience regardless of your location.
            </p>

            <div className="flex items-center gap-3 bg-light rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                <i className="ri-global-line text-brand text-lg" />
              </div>
              <p className="text-dark/70 text-sm font-medium">
                Online training available to learners worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}