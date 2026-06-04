import OptimizedImage from '@/components/base/OptimizedImage';

export default function AboutTeaching() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <div className="flex-1 w-full relative">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-brand/5 rounded-full" />
              <OptimizedImage
                src="https://readdy.ai/api/search-image?query=professional%20Indian%20male%20tech%20instructor%20teaching%20in%20a%20modern%20corporate%20training%20classroom%20with%20students%20on%20laptops%2C%20large%20screen%20showing%20code%20and%20cloud%20architecture%20diagrams%2C%20warm%20ambient%20lighting%20with%20orange%20and%20teal%20accents%2C%20professional%20corporate%20photography%20style%2C%20clean%20modern%20workspace%20environment%2C%20confident%20mentor%20guiding%20learners&width=500&height=600&seq=aboutproit1&orientation=portrait"
                alt="PROITKEYS instructor guiding students in a modern tech training environment"
                className="relative z-10 w-full max-w-[480px] shadow-lg mx-auto"
                rounded
              />

              {/* Floating badge */}
              <div className="absolute right-0 sm:-right-2 md:right-8 bottom-12 md:bottom-20 bg-white rounded-2xl shadow-xl p-3 sm:p-4 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-lime-100 flex items-center justify-center">
                    <i className="ri-shield-check-line text-lime-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-dark/50">Success Rate</p>
                    <p className="text-lg font-bold text-dark">95%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 w-full">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">About PROITKEYS</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3 leading-tight">
              We Are Committed To Helping Students And Professionals Build Successful Careers.
            </h2>

            <p className="text-dark/60 text-base leading-relaxed mt-6">
              PROITKEYS is a modern online training and career development platform offering high-quality courses across multiple domains including Cloud Computing, Artificial Intelligence, Data Science, Machine Learning, Cybersecurity, Software Testing, Programming, and Business Intelligence.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-check-line text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark">Real-Time Industry Exposure</h4>
                  <p className="text-dark/60 text-sm mt-1">Work on live projects that simulate actual industry scenarios and challenges.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-check-line text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark">Expert Mentorship & Support</h4>
                  <p className="text-dark/60 text-sm mt-1">Learn from industry professionals with years of real-world corporate experience.</p>
                </div>
              </div>
            </div>

            <button className="mt-8 inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-colors">
              Know More About Us
              <i className="ri-arrow-right-line" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}