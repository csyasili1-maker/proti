import { Link } from 'react-router-dom';

export default function AboutCTA() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="bg-dark rounded-3xl overflow-hidden relative py-14 md:py-20 px-6 md:px-16">
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand/10 rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand/5 rounded-tr-full" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <i className="ri-heart-pulse-line text-brand text-4xl mb-6 block" />
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white leading-tight mb-4">
              A Partner in Your{' '}
              <span className="text-brand-light">Career Journey</span>
            </h2>

            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              Choosing the right training provider can shape your professional future. At PROITKEYS, we take that responsibility seriously. From your first session to your career advancement, our team is committed to supporting your growth with practical learning experiences and career-focused guidance.
            </p>

            <p className="text-white/65 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
              Your goals become our mission.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
              >
                Explore Training Programs
                <i className="ri-arrow-right-line" />
              </Link>
              <a
                href="https://wa.me/15313954129?text=Hi%20PROITKEYS!%20I'd%20like%20to%20book%20a%20free%20career%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all whitespace-nowrap"
              >
                <i className="ri-whatsapp-line" />
                Book a Free Career Consultation
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/80 text-xl md:text-2xl font-bold font-display">
                Your Future Starts With the Right Skills — And the Right Support.
              </p>
              <p className="text-white/50 text-sm mt-3">
                Join a growing community of learners who are investing in themselves and preparing for the opportunities of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}