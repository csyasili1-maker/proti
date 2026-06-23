import { instructors } from '@/mocks/homeData';
import OptimizedImage from '@/components/base/OptimizedImage';

export default function Instructors() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-12 max-w-4xl">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Expert Trainers</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-2">
            Learn From <span className="text-brand">Practicing Industry Experts</span>
          </h2>
          <p className="text-dark/70 text-sm md:text-base mt-4 max-w-3xl leading-relaxed">
            Our trainers are working professionals, architects, consultants, and technology leaders who bring real-world experience directly into the classroom.
          </p>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 text-sm font-semibold text-dark/80">
            <div className="flex items-center gap-2.5">
              <i className="ri-checkbox-circle-line text-brand text-lg" />
              <span>50+ Years Combined Industry Experience</span>
            </div>
            <div className="flex items-center gap-2.5">
              <i className="ri-checkbox-circle-line text-brand text-lg" />
              <span>Microsoft, AWS & Databricks Certified Trainers</span>
            </div>
            <div className="flex items-center gap-2.5">
              <i className="ri-checkbox-circle-line text-brand text-lg" />
              <span>Corporate Training Experts</span>
            </div>
            <div className="flex items-center gap-2.5">
              <i className="ri-checkbox-circle-line text-brand text-lg" />
              <span>Real Project Mentors</span>
            </div>
            <div className="flex items-center gap-2.5">
              <i className="ri-checkbox-circle-line text-brand text-lg" />
              <span>Interview & Career Coaches</span>
            </div>
          </div>
        </div>

        {/* Instructor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="group relative bg-light rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50">
                {instructor.image ? (
                  <OptimizedImage
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full"
                    objectFit="cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand/10 via-white to-dark/10">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-3xl font-bold text-brand shadow-lg shadow-dark/10">
                      {instructor.name
                        .split(' ')
                        .map((part) => part[0])
                        .join('')
                        .slice(0, 2)}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-5 text-center">
                <h3 className="font-bold text-dark text-base">{instructor.name}</h3>
                <p className="text-brand text-sm mt-1">{instructor.role}</p>
                {instructor.showMetrics !== false && (
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
