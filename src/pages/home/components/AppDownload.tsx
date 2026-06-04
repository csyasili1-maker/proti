import { sapCourses } from '@/mocks/homeData';
import OptimizedImage from '@/components/base/OptimizedImage';

export default function AppDownload() {
  return (
    <section className="w-full py-16 md:py-24 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Featured Courses</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-2">
              SAP <span className="text-brand">Professional Programs</span>
            </h2>
          </div>
          <p className="text-white/60 text-sm md:text-base max-w-md">
            Specialized SAP training programs to accelerate your enterprise technology career with hands-on projects.
          </p>
        </div>

        {/* SAP Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sapCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-dark-lighter rounded-2xl border border-white/10 overflow-hidden hover:border-brand/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48"
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
              </div>

              <div className="p-5">
                <span className="inline-block px-3 py-1 rounded-full bg-brand/20 text-brand text-xs font-semibold mb-3">
                  {course.category}
                </span>

                <h3 className="text-base font-bold text-white leading-snug mb-3 line-clamp-2 group-hover:text-brand transition-colors">
                  {course.title}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <OptimizedImage src={course.avatar} alt={course.instructor} className="w-7 h-7 !rounded-full" objectFit="cover" width={28} height={28} />
                  <span className="text-sm text-white/60 font-medium">{course.instructor}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 text-xs text-white/40">
                    <span className="flex items-center gap-1">
                      <i className="ri-book-open-line" />
                      {course.lessons} Lessons
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-user-line" />
                      {course.students.toLocaleString()}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-white/40">
                    <i className="ri-time-line" />
                    {course.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}