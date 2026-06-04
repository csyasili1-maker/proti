import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Course } from '@/mocks/coursesData';
import { getRecentCourses } from '@/utils/recentlyViewedCourses';

export default function RecentlyViewed() {
  const [recentCourses, setRecentCourses] = useState<Course[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setRecentCourses(getRecentCourses());
    setHydrated(true);
  }, []);

  if (!hydrated || recentCourses.length <= 1) return null;

  return (
    <section className="w-full py-16 md:py-24 bg-background-50">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-900 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <i className="ri-history-line" />
            Jump Back In
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground-950 mb-4">
            Recently Viewed Courses
          </h2>
          <p className="text-foreground-600 text-base max-w-xl mx-auto leading-relaxed">
            Pick up right where you left off. Continue exploring the programs that caught your eye.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {recentCourses.slice(0, 4).map((course) => {
            const courseUrl = `/courses/${course.slug}`;
            return (
              <Link
                key={course.slug}
                to={courseUrl}
                className="group bg-white rounded-2xl border border-background-200/70 hover:border-brand/30 overflow-hidden transition-all duration-300 cursor-pointer block"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block bg-brand/10 text-brand text-xs font-medium px-2.5 py-1 rounded-full mb-2">
                    {course.category}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground-950 leading-snug mb-2 group-hover:text-brand transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-foreground-500">
                    <span className="flex items-center gap-1">
                      <i className="ri-time-line" />
                      {course.duration} Weeks
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-bar-chart-box-line" />
                      {course.level}
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
