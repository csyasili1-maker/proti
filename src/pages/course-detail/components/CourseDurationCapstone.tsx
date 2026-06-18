import type { Course } from '@/mocks/coursesData';

interface CourseDurationCapstoneProps {
  course: Course;
}

export default function CourseDurationCapstone({ course }: CourseDurationCapstoneProps) {
  const capstoneItems = course.capstoneProjects && course.capstoneProjects.length > 0
    ? course.capstoneProjects.slice(0, 4)
    : [
        'End-to-end project implementation',
        'Requirement analysis and planning',
        'Documentation and delivery',
        'Final portfolio presentation',
      ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Duration Card */}
          <div className="bg-light rounded-2xl p-8 md:p-10">
            <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mb-5">
              <i className="ri-time-line text-brand text-2xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-display text-dark mb-3">
              Duration: <span className="text-brand">{course.duration} Weeks</span>
            </h3>
            <p className="text-dark/60 text-base leading-relaxed mb-4">
              Fast-track learning designed for working professionals and graduates. Each week builds on the previous one, moving from foundations to real-world application in {course.category}.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-dark/70 text-sm">
                <i className="ri-check-line text-brand flex-shrink-0" />
                Live online sessions (weekdays/weekends available)
              </li>
              <li className="flex items-center gap-2 text-dark/70 text-sm">
                <i className="ri-check-line text-brand flex-shrink-0" />
                Hands-on assignments after each module
              </li>
              <li className="flex items-center gap-2 text-dark/70 text-sm">
                <i className="ri-check-line text-brand flex-shrink-0" />
                Recorded sessions for revision
              </li>
            </ul>
          </div>

          {/* Capstone Card */}
          <div className="bg-dark rounded-2xl p-8 md:p-10">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
              <i className="ri-trophy-line text-brand-light text-2xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-3">
              Capstone Project
            </h3>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              You will complete a real-world {course.category} project from planning to execution. This project becomes a powerful addition to your portfolio and helps you stand out during interviews with potential employers.
            </p>
            <ul className="space-y-2">
              {capstoneItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                  <i className="ri-check-line text-brand-light flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
