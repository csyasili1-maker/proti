import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { services } from '@/mocks/homeData';
import type { Course } from '@/mocks/coursesData';
import OptimizedImage from '@/components/base/OptimizedImage';
import { searchCourses } from '@/utils/courseSearch';

const trendingSearches = [
  { label: 'AWS', icon: 'ri-cloud-line' },
  { label: 'Python', icon: 'ri-code-s-slash-line' },
  { label: 'Salesforce', icon: 'ri-customer-service-2-line' },
  { label: 'Azure', icon: 'ri-microsoft-line' },
  { label: 'Data Science', icon: 'ri-bar-chart-grouped-line' },
  { label: 'Cybersecurity', icon: 'ri-shield-check-line' },
];

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Course[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const resultItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchRequestRef = useRef(0);

  const filterCourses = useCallback((query: string) => {
    if (!query.trim()) {
      searchRequestRef.current += 1;
      setResults([]);
      setShowDropdown(false);
      setIsLoading(false);
      return;
    }

    // Simulate API loading for skeleton demo
    setIsLoading(true);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    const requestId = searchRequestRef.current + 1;
    searchRequestRef.current = requestId;

    debounceRef.current = setTimeout(() => {
      searchCourses(query, 8)
        .then((matched) => {
          if (requestId !== searchRequestRef.current) return;
          setResults(matched);
          setShowDropdown(matched.length > 0);
          setHighlightedIndex(-1);
          setIsLoading(false);
        })
        .catch(() => {
          if (requestId !== searchRequestRef.current) return;
          setResults([]);
          setShowDropdown(false);
          setHighlightedIndex(-1);
          setIsLoading(false);
        });
    }, 350);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    filterCourses(value);
  };

  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      setShowDropdown(false);
      navigate(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/courses');
    }
  };

  const handleResultClick = () => {
    setShowDropdown(false);
    setSearchQuery('');
  };

  const openCourse = (slug: string) => {
    handleResultClick();
    navigate(`/courses/${slug}`);
  };

  const handleTrendingClick = (term: string) => {
    setSearchQuery(term);
    filterCourses(term);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown || results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < results.length) {
        openCourse(results[highlightedIndex].slug);
      }
    } else if (e.key === 'Escape') {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  useEffect(() => {
    if (highlightedIndex >= 0 && resultItemRefs.current[highlightedIndex]) {
      resultItemRefs.current[highlightedIndex]?.scrollIntoView({
        block: 'nearest',
      });
    }
  }, [highlightedIndex]);

  const highlightMatch = (text: string) => {
    if (!searchQuery.trim()) return text;
    const q = searchQuery.trim();
    const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-brand/20 text-brand rounded-sm px-0.5">{part}</mark>
      ) : (
        part
      ),
    );
  };

  const SkeletonItem = () => (
    <div className="flex items-start gap-3 px-3 py-2.5 animate-pulse">
      <div className="w-9 h-9 rounded-lg bg-gray-100 flex-shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <div className="h-4 bg-gray-100 rounded w-3/4 mb-2" />
        <div className="h-3 bg-gray-50 rounded w-1/2" />
      </div>
    </div>
  );

  return (
    <section className="relative w-full min-h-[580px] md:min-h-[800px] bg-light overflow-hidden pt-20">
      <div className="w-full px-6 lg:px-10 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-[1440px] mx-auto">
          {/* Left Content */}
          <div className="flex-1 w-full">
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <i className="ri-award-line" />
              <span>100+ Professional Courses</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-display text-dark leading-[1.15] mb-6">
              Where Learning{' '}
              <span className="text-brand">Unlocks Opportunities</span>
            </h1>

            <p className="text-dark/60 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              PROITKEYS offers practical, career-focused training in Cloud Computing, AI, Data Science, Cybersecurity, and more. Transform into a confident, job-ready professional.
            </p>

            {/* Search Bar */}
            <div ref={containerRef} className="relative max-w-xl mb-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-dark/40 text-lg" />
                  <input
                    type="text"
                    placeholder="What do you want to learn today?"
                    value={searchQuery}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => {
                      if (searchQuery.trim() && results.length > 0) {
                        setShowDropdown(true);
                      }
                    }}
                    className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-sm text-dark bg-white"
                  />
                </div>
                <button
                  onClick={handleSearchClick}
                  className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  Search
                </button>
              </div>

              {/* Dropdown Results - Loading Skeleton */}
              {showDropdown && isLoading && (
                <div
                  className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-gray-100 overflow-hidden z-50"
                  style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}
                >
                  <div className="p-2">
                    <SkeletonItem />
                    <SkeletonItem />
                    <SkeletonItem />
                    <SkeletonItem />
                  </div>
                </div>
              )}

              {/* Dropdown Results - Loaded */}
              {showDropdown && !isLoading && results.length > 0 && (
                <div
                  ref={dropdownRef}
                  className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-gray-100 overflow-hidden z-50"
                  style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}
                >
                  <div className="p-2">
                    {results.map((course, index) => (
                      <Link
                        key={course.id}
                        ref={(el) => { resultItemRefs.current[index] = el; }}
                        to={`/courses/${course.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          openCourse(course.slug);
                        }}
                        className={`flex items-start gap-3 px-3 py-2.5 rounded-xl transition-colors cursor-pointer ${
                          index === highlightedIndex
                            ? 'bg-brand/5'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <i className="ri-book-open-line text-brand text-sm" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-dark truncate">
                            {highlightMatch(course.title)}
                          </p>
                          <p className="text-xs text-dark/40 mt-0.5">
                            {course.category} · {course.duration} Weeks
                          </p>
                        </div>
                        <i className="ri-arrow-right-up-line text-dark/20 text-sm mt-1 flex-shrink-0" />
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-50 px-3 py-2.5">
                    <button
                      onClick={handleSearchClick}
                      className="w-full text-center text-sm text-brand font-medium hover:text-brand-dark transition-colors py-1"
                    >
                      View all results for &quot;{searchQuery.trim()}&quot;
                    </button>
                  </div>
                </div>
              )}

              {/* No Results */}
              {showDropdown && !isLoading && searchQuery.trim() && results.length === 0 && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-gray-100 p-6 text-center z-50" style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}>
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                    <i className="ri-search-line text-dark/30 text-xl" />
                  </div>
                  <p className="text-sm text-dark/60">No courses found for &quot;{searchQuery.trim()}&quot;</p>
                  <p className="text-xs text-dark/40 mt-1">Try a different search term</p>
                </div>
              )}
            </div>

            {/* Trending Searches */}
            <div className="max-w-xl mb-10">
              <p className="text-xs text-dark/40 mb-2.5 font-medium uppercase tracking-wide">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {trendingSearches.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleTrendingClick(item.label)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-gray-200 hover:border-brand/40 hover:bg-brand/[0.03] transition-all text-sm text-dark/60 hover:text-brand"
                  >
                    <i className={`${item.icon} text-xs`} />
                    <span className="whitespace-nowrap">{item.label}</span>
                  </button>
                ))}
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full text-sm text-brand/70 hover:text-brand font-medium transition-colors"
                >
                  Browse all <i className="ri-arrow-right-line text-xs" />
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="text-sm text-dark/50 mb-4 font-medium">Our Services</p>
              <div className="flex flex-wrap gap-3">
                {services.map((srv) => (
                  <button
                    key={srv.id}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-gray-200 hover:border-brand hover:shadow-sm transition-all text-sm text-dark/80"
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${srv.color}15` }}
                    >
                      <i className={`${srv.icon} text-sm`} style={{ color: srv.color }} />
                    </div>
                    <span className="font-medium whitespace-nowrap">{srv.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full relative">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl" />
              <OptimizedImage
                src="https://readdy.ai/api/search-image?query=happy%20diverse%20group%20of%20students%20studying%20together%20with%20laptops%20and%20books%20in%20a%20modern%20bright%20classroom%20with%20warm%20natural%20lighting%2C%20warm%20orange%20and%20teal%20color%20tones%2C%20professional%20educational%20photography%2C%20high%20quality%2C%20clean%20background%20with%20bokeh&width=700&height=550&seq=hero1&orientation=landscape"
                alt="Students learning together"
                className="relative z-10 w-full max-w-[600px] mx-auto shadow-xl"
                priority
                rounded
              />

              {/* Floating Card */}
              <div className="absolute -left-2 sm:-left-4 md:left-4 bottom-6 md:bottom-10 bg-white rounded-2xl shadow-lg p-3 sm:p-4 flex items-center gap-2 sm:gap-3 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                  <i className="ri-user-star-line text-brand text-xl" />
                </div>
                <div>
                  <p className="text-xs text-dark/50">Expert Trainers</p>
                  <p className="text-sm font-bold text-dark">50+ Mentors</p>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -right-2 sm:-right-4 md:right-8 top-8 md:top-16 bg-white rounded-2xl shadow-lg p-3 sm:p-4 z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="flex items-center gap-2 mb-1">
                  <i className="ri-star-fill text-amber-400 text-sm" />
                  <span className="text-sm font-bold text-dark">4.9/5</span>
                </div>
                <p className="text-xs text-dark/50">Student Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
