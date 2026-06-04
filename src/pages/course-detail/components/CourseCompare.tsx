import { Link } from 'react-router-dom';
import type { Course } from '@/mocks/coursesData';
import { courses } from '@/mocks/coursesData';

interface CourseCompareProps {
  course: Course;
}

const whatsappNumber = '+15313954129';

function getCompareWhatsAppMessage(c: Course): string {
  const lines = [
    '👋 Hi PROITKEYS Team,',
    '',
    `I'm comparing courses and I'm interested in the *${c.title}* program.`,
    '',
    '📋 Course Details:',
    `   • Course: ${c.title}`,
    `   • Category: ${c.category}`,
    `   • Level: ${c.level}`,
    `   • Duration: ${c.duration} Weeks`,
    '',
    'Could you share more details about this course — upcoming batches, pricing, and how it compares to other options?',
    '',
    'Thank you!',
  ];
  return encodeURIComponent(lines.join('\n'));
}

function renderStars(rating: number) {
  const stars: React.ReactNode[] = [];
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;

  for (let i = 0; i < full; i++) {
    stars.push(<i key={`f-${i}`} className="ri-star-fill text-amber-400 text-xs" />);
  }
  if (hasHalf) {
    stars.push(<i key="h" className="ri-star-half-fill text-amber-400 text-xs" />);
  }
  const remaining = 5 - full - (hasHalf ? 1 : 0);
  for (let i = 0; i < remaining; i++) {
    stars.push(<i key={`e-${i}`} className="ri-star-line text-amber-400 text-xs" />);
  }
  return stars;
}

export default function CourseCompare({ course }: CourseCompareProps) {
  const similarCourses = courses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 4);

  const allToCompare = [course, ...similarCourses];

  if (allToCompare.length <= 1) {
    return null;
  }

  return (
    <section id="compare" className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Compare Courses</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3">
            Compare with <span className="text-brand">Similar Courses</span>
          </h2>
          <p className="text-dark/50 text-base mt-4 max-w-2xl mx-auto">
            See how this course stacks up against other {course.category} programs. Find the one that best fits your career goals.
          </p>
        </div>

        {/* Desktop: Table View */}
        <div className="hidden lg:block bg-white rounded-2xl overflow-hidden border border-gray-100">
          {/* Header Row */}
          <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] bg-dark text-white">
            <div className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">Course</div>
            <div className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-center">Duration</div>
            <div className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-center">Level</div>
            <div className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-center">Rating</div>
            <div className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-center">Action</div>
          </div>

          {allToCompare.map((c, i) => {
            const isCurrent = c.id === course.id;
            return (
              <div
                key={c.id}
                className={`grid grid-cols-[1.4fr_repeat(4,1fr)] items-center transition-colors ${
                  isCurrent
                    ? 'bg-brand/5 border-l-[3px] border-l-brand'
                    : 'hover:bg-gray-50 border-l-[3px] border-l-transparent'
                } ${i % 2 === 0 && !isCurrent ? 'bg-white' : !isCurrent ? 'bg-gray-50/50' : ''} ${i < allToCompare.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                {/* Course Info */}
                <div className="px-5 py-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <Link
                      to={`/courses/${c.slug}`}
                      className={`text-sm font-semibold hover:text-brand transition-colors block truncate ${
                        isCurrent ? 'text-brand' : 'text-dark'
                      }`}
                    >
                      {c.title}
                      {isCurrent && (
                        <span className="ml-2 text-[10px] font-medium bg-brand/15 text-brand px-2 py-0.5 rounded-full whitespace-nowrap">
                          Current
                        </span>
                      )}
                    </Link>
                    <p className="text-dark/40 text-xs mt-0.5 line-clamp-1">{c.description}</p>
                  </div>
                </div>

                {/* Duration */}
                <div className="px-5 py-4 text-center">
                  <span className={`text-sm font-medium ${isCurrent ? 'text-brand' : 'text-dark/70'}`}>
                    {c.duration} Weeks
                  </span>
                </div>

                {/* Level */}
                <div className="px-5 py-4 text-center">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                    c.level === 'Beginner'
                      ? 'bg-green-50 text-green-700'
                      : c.level === 'Intermediate'
                      ? 'bg-amber-50 text-amber-700'
                      : 'bg-rose-50 text-rose-700'
                  }`}>
                    {c.level}
                  </span>
                </div>

                {/* Rating */}
                <div className="px-5 py-4 flex flex-col items-center gap-1">
                  <div className="flex items-center gap-0.5">
                    {renderStars(c.rating)}
                  </div>
                  <span className="text-xs text-dark/50">
                    {c.rating.toFixed(1)} ({c.reviewCount})
                  </span>
                </div>

                {/* Action */}
                <div className="px-5 py-4 text-center">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${getCompareWhatsAppMessage(c)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                      isCurrent
                        ? 'bg-brand text-white hover:bg-brand-dark'
                        : 'bg-white border border-gray-200 text-dark hover:border-brand hover:text-brand'
                    }`}
                  >
                    <i className="ri-whatsapp-line" />
                    Apply
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Card View */}
        <div className="lg:hidden space-y-4">
          {allToCompare.map((c) => {
            const isCurrent = c.id === course.id;
            return (
              <div
                key={c.id}
                className={`bg-white rounded-2xl p-5 border ${
                  isCurrent ? 'border-brand ring-1 ring-brand/20' : 'border-gray-100'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <Link
                      to={`/courses/${c.slug}`}
                      className={`text-sm font-bold hover:text-brand transition-colors block ${
                        isCurrent ? 'text-brand' : 'text-dark'
                      }`}
                    >
                      {c.title}
                      {isCurrent && (
                        <span className="ml-2 text-[10px] font-medium bg-brand/15 text-brand px-2 py-0.5 rounded-full whitespace-nowrap">
                          Current
                        </span>
                      )}
                    </Link>
                    <p className="text-dark/40 text-xs mt-0.5 line-clamp-1">{c.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs text-dark/50 flex items-center gap-1">
                    <i className="ri-time-line text-dark/30" /> {c.duration} Weeks
                  </span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium ${
                    c.level === 'Beginner'
                      ? 'bg-green-50 text-green-700'
                      : c.level === 'Intermediate'
                      ? 'bg-amber-50 text-amber-700'
                      : 'bg-rose-50 text-rose-700'
                  }`}>
                    {c.level}
                  </span>
                  <span className="flex items-center gap-0.5 text-xs text-dark/50">
                    {renderStars(c.rating)}
                    <span className="ml-1 font-medium text-dark/70">{c.rating.toFixed(1)}</span>
                  </span>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${getCompareWhatsAppMessage(c)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 w-full justify-center px-4 py-2.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                    isCurrent
                      ? 'bg-brand text-white hover:bg-brand-dark'
                      : 'bg-white border border-gray-200 text-dark hover:border-brand hover:text-brand'
                  }`}
                >
                  <i className="ri-whatsapp-line" />
                  Apply for This Course
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}