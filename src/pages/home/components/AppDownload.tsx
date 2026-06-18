import { Link } from 'react-router-dom';
import { courses } from '@/mocks/coursesData';
import OptimizedImage from '@/components/base/OptimizedImage';

const featuredProgramSlugs = [
  'full-stack-ai-development',
  'full-stack-data-science',
  'full-stack-cloud-engineering',
  'full-stack-java-development',
  'full-stack-data-analytics',
  'sap-ai-intelligent-enterprise',
];

const categoryStyles: Record<string, string> = {
  'AI & Machine Learning': 'bg-violet-50 text-violet-700 border-violet-100',
  'Data Analytics & Science': 'bg-teal-50 text-teal-700 border-teal-100',
  'Cloud Computing': 'bg-sky-50 text-sky-700 border-sky-100',
  'Software Development': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'ERP & Business Apps': 'bg-orange-50 text-orange-700 border-orange-100',
};

export default function AppDownload() {
  const programs = featuredProgramSlugs.flatMap((slug) => {
    const course = courses.find((item) => item.slug === slug);
    return course ? [course] : [];
  });

  return (
    <section className="w-full py-16 md:py-24 bg-[#f8fafc] text-dark relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-10 md:mb-12">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Featured Courses</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 text-dark">
              Future-Ready Tech Career Programs
            </h2>
          </div>
          <p className="text-dark/60 text-sm md:text-base max-w-xl">
            Master Full Stack Development, AI & Machine Learning, Data Analytics, and Cloud Technologies through live instructor-led training, hands-on projects, industry mentorship, and placement-focused career support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7">
          {programs.map((course) => {
            const categoryClass = categoryStyles[course.category] || 'bg-gray-50 text-gray-700 border-gray-100';
            const visibleTools = course.tools?.slice(0, 3) || [];

            return (
              <Link
                key={course.id}
                to={`/courses/${course.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <OptimizedImage
                    src={course.image}
                    alt={`${course.title} training`}
                    className="w-full h-48 transition-transform duration-500 group-hover:scale-105"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                  <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-dark shadow-sm">
                      <i className="ri-time-line text-brand" />
                      {course.duration} Weeks
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-dark shadow-sm">
                      <i className="ri-star-fill text-amber-400" />
                      {course.rating.toFixed(1)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${categoryClass}`}>
                      {course.category}
                    </span>
                    <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-dark leading-snug group-hover:text-brand transition-colors">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-dark/60 line-clamp-3">
                    {course.description}
                  </p>

                  {visibleTools.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {visibleTools.map((tool) => (
                        <span key={tool} className="rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-semibold text-brand">
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-100">
                    <span className="text-xs font-semibold uppercase tracking-wider text-dark/40">
                      {course.reviewCount} Reviews
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                      View Details
                      <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
