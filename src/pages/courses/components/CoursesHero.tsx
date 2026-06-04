import { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { courses, categories } from '@/mocks/coursesData';

interface CoursesHeroProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export default function CoursesHero({ searchQuery, setSearchQuery }: CoursesHeroProps) {
  const [searchFocused, setSearchFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) return { courses: [], categories: [] };
    const q = searchQuery.toLowerCase();
    const courseMatches = courses
      .filter(c => c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q))
      .slice(0, 5);
    const catMatches = categories
      .filter(c => c !== 'All' && c.toLowerCase().includes(q))
      .slice(0, 3);
    return { courses: courseMatches, categories: catMatches };
  }, [searchQuery]);

  const hasSuggestions = suggestions.courses.length > 0 || suggestions.categories.length > 0;

  // Close suggestions on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.parentElement?.contains(e.target as Node)) {
        setSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const totalCourses = courses.length;
  const totalCategories = categories.filter(c => c !== 'All').length;

  return (
    <section className="relative min-h-[520px] md:min-h-[580px] overflow-hidden flex items-center">
      {/* Background Image */}
      <img
        src="/images/courses/course-catalog-hero.jpg"
        alt="PROITKEYS IT course catalog visual"
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="eager"
      />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70 animate-gradient-pulse" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto py-20 md:py-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/55 mb-6 justify-center">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <i className="ri-arrow-right-s-line text-xs" />
          <span className="text-white/80 font-medium">Courses</span>
        </nav>

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-4 leading-tight">
            Find Your <span className="text-brand">Perfect</span> Course
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Industry-aligned IT training programs designed to accelerate your career
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8" ref={inputRef as React.RefObject<HTMLDivElement>}>
            <div className={`relative transition-all duration-300 ${
              searchFocused ? 'scale-105 shadow-2xl shadow-black/30' : ''
            }`}>
              <input
                type="text"
                placeholder="Search courses, skills, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                className="w-full py-4 pl-14 pr-12 text-sm bg-white rounded-2xl focus:outline-none transition-all placeholder:text-gray-400"
              />
              <i className="ri-search-line absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              {searchQuery && (
                <button
                  onClick={() => { setSearchQuery(''); setSearchFocused(false); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                >
                  <i className="ri-close-line text-xs text-gray-500" />
                </button>
              )}
            </div>

            {/* Suggestions Dropdown */}
            {searchFocused && searchQuery && hasSuggestions && (
              <div className="absolute top-full mt-3 left-0 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-30 text-left">
                {suggestions.categories.length > 0 && (
                  <div className="px-4 pt-4 pb-2">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Categories</span>
                    {suggestions.categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => { setSearchQuery(cat); setSearchFocused(false); }}
                        className="flex items-center gap-2 w-full px-2 py-2.5 text-sm text-foreground-700 hover:bg-gray-50 rounded-lg transition-colors mt-1"
                      >
                        <i className="ri-folder-line text-gray-400" />
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
                {suggestions.courses.length > 0 && (
                  <div className={`px-4 pb-4 ${suggestions.categories.length > 0 ? 'pt-2 border-t border-gray-100' : 'pt-4'}`}>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Courses</span>
                    {suggestions.courses.map(course => (
                      <Link
                        key={course.id}
                        to={`/courses/${course.slug}`}
                        onClick={() => setSearchFocused(false)}
                        className="flex items-center gap-3 w-full px-2 py-2.5 text-sm text-foreground-700 hover:bg-gray-50 rounded-lg transition-colors mt-1"
                      >
                        <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <i className="ri-book-open-line text-gray-400 text-xs" />
                        </span>
                        <div className="text-left min-w-0">
                          <div className="font-medium truncate">{course.title}</div>
                          <div className="text-xs text-gray-400">{course.category}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Quick-category chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.filter(c => c !== 'All').slice(0, 6).map(cat => (
              <button
                key={cat}
                onClick={() => setSearchQuery(cat)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white/90 text-xs font-medium rounded-full transition-all whitespace-nowrap border border-white/10 hover:border-white/30"
              >
                {cat}
              </button>
            ))}
            <span className="text-white/40 text-xs">+{categories.length - 7} more</span>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="flex items-center justify-center gap-8 md:gap-14">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">{totalCourses}+</div>
            <div className="text-xs md:text-sm text-white/50 mt-1">Courses</div>
          </div>
          <div className="w-px h-10 bg-white/15" />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">{totalCategories}+</div>
            <div className="text-xs md:text-sm text-white/50 mt-1">Categories</div>
          </div>
          <div className="w-px h-10 bg-white/15" />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">Expert</div>
            <div className="text-xs md:text-sm text-white/50 mt-1">Instructors</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
          <span className="text-white/40 text-xs">Scroll to explore</span>
          <i className="ri-arrow-down-line text-white/40 text-sm" />
        </div>
      </div>
    </section>
  );
}
