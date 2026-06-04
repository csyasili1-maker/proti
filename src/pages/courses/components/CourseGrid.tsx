import { useMemo, useState, useEffect } from 'react';
import { courses } from '@/mocks/coursesData';
import CourseCard from './CourseCard';

const COURSES_PER_PAGE = 24;

interface CourseGridProps {
  searchQuery: string;
  selectedCategory: string;
  selectedLevel: string;
  selectedDuration: string;
  onClearAll: () => void;
}

export default function CourseGrid({
  searchQuery,
  selectedCategory,
  selectedLevel,
  selectedDuration,
  onClearAll,
}: CourseGridProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All' || course.level.toLowerCase().includes(selectedLevel.toLowerCase());
      const matchesDuration = selectedDuration === 'All' || course.duration === parseInt(selectedDuration);
      const matchesSearch = searchQuery === '' ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesLevel && matchesDuration && matchesSearch;
    });
  }, [selectedCategory, selectedLevel, selectedDuration, searchQuery]);

  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedLevel, selectedDuration, searchQuery]);

  const paginatedCourses = useMemo(() => {
    const start = (currentPage - 1) * COURSES_PER_PAGE;
    return filteredCourses.slice(start, start + COURSES_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const startResult = filteredCourses.length === 0 ? 0 : (currentPage - 1) * COURSES_PER_PAGE + 1;
  const endResult = Math.min(currentPage * COURSES_PER_PAGE, filteredCourses.length);

  return (
    <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto">
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-foreground-950">
            {searchQuery
              ? `Results for "${searchQuery}"`
              : selectedCategory !== 'All'
                ? selectedCategory
                : 'All Programs'}
          </h2>
          <p className="text-sm text-foreground-500 mt-1">
            {filteredCourses.length > 0
              ? `Showing ${startResult}-${endResult} of ${filteredCourses.length} ${filteredCourses.length === 1 ? 'course' : 'courses'}`
              : 'No courses found'}
          </p>
        </div>

        {/* Sort - desktop */}
        <div className="relative hidden sm:block">
          <select className="appearance-none bg-gray-100 border-0 rounded-xl px-4 py-2.5 pr-10 text-sm font-medium text-foreground-700 focus:outline-none focus:ring-2 focus:ring-foreground-200 cursor-pointer">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Duration: Short to Long</option>
            <option>Duration: Long to Short</option>
          </select>
          <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-foreground-400 text-sm pointer-events-none" />
        </div>
      </div>

      {filteredCourses.length === 0 ? (
        <div className="text-center py-24">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gray-100 flex items-center justify-center">
            <i className="ri-search-line text-3xl text-gray-300" />
          </div>
          <p className="text-lg text-foreground-500 font-medium mb-2">No courses match your criteria</p>
          <p className="text-sm text-foreground-400 mb-6">Try adjusting your search or filter settings</p>
          <button
            onClick={onClearAll}
            className="inline-flex items-center gap-2 bg-foreground-950 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-foreground-800 transition-colors whitespace-nowrap"
          >
            <i className="ri-refresh-line" />
            Reset All Filters
          </button>
        </div>
      ) : (
        <>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-product-shop>
            {paginatedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-14">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-foreground-600 hover:text-foreground-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-xl"
              >
                <i className="ri-arrow-left-s-line" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              <div className="flex items-center gap-1.5">
                {getPageNumbers().map((page, idx) => (
                  page === '...' ? (
                    <span key={`dots-${idx}`} className="px-2 py-2 text-sm text-foreground-400">...</span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page as number)}
                      className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-semibold transition-all ${
                        currentPage === page
                          ? 'bg-foreground-950 text-white shadow-sm'
                          : 'text-foreground-600 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  )
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-foreground-600 hover:text-foreground-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-xl"
              >
                <span className="hidden sm:inline">Next</span>
                <i className="ri-arrow-right-s-line" />
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}