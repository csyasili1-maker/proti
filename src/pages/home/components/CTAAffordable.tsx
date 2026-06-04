import OptimizedImage from '@/components/base/OptimizedImage';

export default function CTAAffordable() {
  return (
    <section className="w-full py-12 md:py-16 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-teal-500 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[260px]">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
              Affordable Career-Focused Training &<br />
              Placement Support For You
            </h3>
            <p className="text-white/80 text-sm max-w-md">
              Access industry-oriented courses at budget-friendly prices. Your career transformation starts here.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <a
              href="https://wa.me/15313954129?text=Hi%20PROITKEYS!%20I'm%20interested%20in%20enrolling%20in%20your%20career-focused%20training%20programs.%20Please%20share%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-teal-600 px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              Enroll Now
              <i className="ri-whatsapp-line" />
            </a>
          </div>

          <OptimizedImage
            src="https://readdy.ai/api/search-image?query=happy%20young%20woman%20student%20with%20headphones%20and%20laptop%20studying%2C%20teal%20mint%20green%20background%2C%20modern%20clean%20style%2C%20professional%20portrait%2C%20warm%20smile&width=320&height=260&seq=affordable&orientation=landscape"
            alt="Student learning"
            className="hidden md:block absolute right-0 bottom-0 w-72 h-auto opacity-90 rounded-bl-3xl"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}