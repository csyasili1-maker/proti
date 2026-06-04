import { instructors } from '@/mocks/homeData';
import OptimizedImage from '@/components/base/OptimizedImage';

export default function Instructors() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Expert Trainers</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-2">
              Learn From The <span className="text-brand">Industry Best</span>
            </h2>
          </div>
          <p className="text-dark/60 text-sm md:text-base max-w-md">
            Our trainers bring years of real-world corporate experience to help you master in-demand skills with practical insights.
          </p>
        </div>

        {/* Instructor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="group relative bg-light rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <OptimizedImage
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-48 sm:h-56 md:h-64"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social icons on hover */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <button className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-brand hover:text-white transition-colors text-dark text-sm">
                    <i className="ri-facebook-fill" />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-brand hover:text-white transition-colors text-dark text-sm">
                    <i className="ri-twitter-x-fill" />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-brand hover:text-white transition-colors text-dark text-sm">
                    <i className="ri-linkedin-fill" />
                  </button>
                </div>
              </div>

              <div className="p-5 text-center">
                <h3 className="font-bold text-dark text-base">{instructor.name}</h3>
                <p className="text-brand text-sm mt-1">{instructor.role}</p>
                <div className="flex items-center justify-center gap-4 mt-3 text-xs text-dark/50">
                  <span className="flex items-center gap-1">
                    <i className="ri-user-line" />
                    {instructor.students.toLocaleString()} Students
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="ri-book-open-line" />
                    {instructor.courses} Courses
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