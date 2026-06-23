import { Link } from 'react-router-dom';
import { courses } from '@/mocks/homeData';
import { courses as courseCatalog } from '@/mocks/coursesData';
import OptimizedImage from '@/components/base/OptimizedImage';

export default function FeaturedCourses() {
  const catalogByTitle = new Map(courseCatalog.map((course) => [course.title, course]));

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Top Trending Courses</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-2">
            Explore Our Most <em className="not-italic text-brand">In-Demand</em> Programs
          </h2>
          <p className="text-dark/60 text-sm md:text-base mt-4">
            Industry-oriented training programs designed to make you job-ready with hands-on projects and expert mentorship.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course) => {
            const catalogCourse = catalogByTitle.get(course.title);
            return (
              <Link
                key={course.id}
                to={catalogCourse ? `/courses/${catalogCourse.slug}` : '/courses'}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300"
              >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <OptimizedImage
                  src={catalogCourse?.image || course.image}
                  alt={course.title}
                  className="w-full h-52"
                  objectFit="cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    course.badge === 'Bestseller'
                      ? 'bg-amber-100 text-amber-700'
                      : course.badge === 'New'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-brand/10 text-brand'
                  }`}>
                    {course.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:bg-white transition-colors">
                    <i className="ri-heart-line text-dark/60 group-hover:text-red-500 transition-colors" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="inline-block px-3 py-1 rounded-full bg-lime-100 text-lime-700 text-xs font-semibold mb-3">
                  {course.category}
                </span>

                <h3 className="text-base font-bold text-dark leading-snug mb-3 line-clamp-2 group-hover:text-brand transition-colors">
                  {course.title}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <OptimizedImage src={course.avatar} alt={course.instructor} className="w-7 h-7 !rounded-full" objectFit="cover" width={28} height={28} />
                  <span className="text-sm text-dark/70 font-medium">{course.instructor}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-xs text-dark/50">
                    <span className="flex items-center gap-1">
                      <i className="ri-book-open-line" />
                      {course.lessons} Lessons
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-user-line" />
                      {course.students.toLocaleString()}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-dark/50">
                    <i className="ri-time-line" />
                    {course.duration}
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
