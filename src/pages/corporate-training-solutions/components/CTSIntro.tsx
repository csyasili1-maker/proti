import OptimizedImage from '@/components/base/OptimizedImage';

export default function CTSIntro() {
  return (
    <section className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <OptimizedImage
              src="https://readdy.ai/api/search-image?query=american%20corporate%20trainers%20collaborating%20with%20business%20leaders%20in%20modern%20glass%20office%20conference%20room%2C%20reviewing%20training%20strategy%20on%20laptops%2C%20professional%20diverse%20team%2C%20bright%20natural%20lighting%20through%20floor%20to%20ceiling%20windows%2C%20genuine%20business%20discussion%2C%20high%20quality%20corporate%20photography&width=600&height=460&seq=ctsintro1&orientation=landscape"
              alt="Corporate training strategy session"
              className="w-full max-w-[520px]"
              rounded
            />
          </div>

          <div className="flex-1 w-full">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Enterprise Training</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3 mb-6 leading-tight">
              Training That Drives{' '}
              <span className="text-brand">Business Impact</span>
            </h2>

            <p className="text-dark/60 text-base leading-relaxed mb-4">
              In today&apos;s competitive environment, continuous learning is essential for organizational growth.
            </p>

            <p className="text-dark/60 text-base leading-relaxed mb-4">
              PROITKEYS Corporate Training Solutions are designed to help businesses upskill their workforce, close critical skill gaps, and improve team performance through practical, industry-aligned programs.
            </p>

            <p className="text-dark/60 text-base leading-relaxed">
              We collaborate closely with stakeholders to understand business objectives and deliver training that produces measurable value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}