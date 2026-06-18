import { useState } from 'react';
import {
  generateCurriculumModules,
  generatePrerequisites,
  generateTargetAudience,
} from '@/utils/courseDetailUtils';
import type { Course } from '@/mocks/coursesData';

interface CourseDetailContentProps {
  course: Course;
}

export default function CourseDetailContent({ course }: CourseDetailContentProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const modules = generateCurriculumModules(course);
  const prerequisites = generatePrerequisites(course);
  const targetAudience = generateTargetAudience(course);
  const levelStartingPoint = course.level.includes('Beginner')
    ? 'foundational skills'
    : course.level.includes('Intermediate')
    ? 'intermediate knowledge'
    : 'advanced expertise';

  return (
    <>
      {/* Curriculum Section */}
      <section id="curriculum" className="w-full py-16 md:py-24 bg-light">
        <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Course Content</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3">
              What You Will <span className="text-brand">Learn</span>
            </h2>
            <p className="text-dark/50 text-base mt-4 max-w-2xl mx-auto">
              A structured curriculum designed to take you from {levelStartingPoint} to job-ready professional in {course.category}.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {modules.map((mod, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden h-fit"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <i className={`${mod.icon} text-brand text-lg`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold font-display text-dark">{mod.title}</h3>
                    <p className="text-dark/40 text-xs">{mod.topics.length} topics</p>
                  </div>
                  <i
                    className={`ri-arrow-down-s-line text-dark/40 text-xl flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>

                {openIndex === i && (
                  <div className="px-6 pb-5 pt-1">
                    <ul className="space-y-2 pl-14">
                      {mod.topics.map((topic, ti) => (
                        <li key={ti} className="flex items-start gap-2.5">
                          <i className="ri-check-line text-brand text-sm mt-0.5 flex-shrink-0" />
                          <span className="text-dark/70 text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prerequisites Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                <i className="ri-error-warning-line text-amber-600 text-lg" />
              </div>
              <h2 className="text-2xl font-bold font-display text-dark">Prerequisites</h2>
            </div>
            <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-100">
              <p className="text-dark/70 text-base leading-relaxed">{prerequisites}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="w-full pb-16 md:pb-24 bg-white">
        <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                <i className="ri-user-star-line text-emerald-600 text-lg" />
              </div>
              <h2 className="text-2xl font-bold font-display text-dark">Who Should Enroll</h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {targetAudience.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-emerald-50/30 rounded-xl p-4 border border-emerald-100"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-emerald-600 text-sm" />
                  </div>
                  <p className="text-dark/70 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
