import OptimizedImage from '@/components/base/OptimizedImage';

const roles = [
  'Cloud Engineer',
  'DevOps Engineer',
  'Data Engineer',
  'AI Specialist',
  'Full Stack Developer',
  'Cybersecurity Analyst',
  'Automation Tester',
  'Business Analyst',
];

export default function ProgramDifferentiator() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Career Focused</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3 mb-6 leading-tight">
              More Than Learning —{' '}
              <span className="text-brand">Career Preparation</span>
            </h2>

            <p className="text-dark/60 text-base leading-relaxed mb-6">
              At PROITKEYS, education is aligned with opportunity. Our programs focus on practical readiness so you can confidently pursue roles such as:
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {roles.map((role, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-light rounded-xl px-4 py-3">
                  <i className="ri-checkbox-circle-fill text-brand text-base" />
                  <span className="text-dark/80 text-sm font-medium">{role}</span>
                </div>
              ))}
            </div>

            <p className="text-dark/60 text-base leading-relaxed">
              We prepare you not just to understand technology — but to apply it effectively.
            </p>
          </div>

          <div className="flex-1 w-full">
            <OptimizedImage
              src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20young%20Indian%20tech%20professionals%20standing%20together%20confidently%20in%20a%20modern%20corporate%20office%20lobby%2C%20each%20representing%20different%20tech%20careers%20like%20cloud%20engineer%20data%20scientist%20and%20developer%2C%20warm%20orange%20and%20teal%20lighting%2C%20professional%20corporate%20photography%2C%20career%20success%20and%20teamwork%20concept%2C%20glass%20office%20interior%20with%20city%20skyline%20visible%2C%20clean%20minimal%20aesthetic%2C%20high%20quality%20editorial%20style&width=540&height=680&seq=careerprep2&orientation=portrait"
              alt="PROITKEYS career-ready professionals prepared for multiple tech roles"
              className="w-full max-w-[540px] mx-auto"
              rounded
            />
          </div>
        </div>
      </div>
    </section>
  );
}