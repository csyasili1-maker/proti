import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { Course } from '@/mocks/coursesData';
import { searchCourses } from '@/utils/courseSearch';

const trendingSearches = [
  { label: 'AWS', icon: 'ri-cloud-line' },
  { label: 'Python', icon: 'ri-code-s-slash-line' },
  { label: 'Salesforce', icon: 'ri-customer-service-2-line' },
  { label: 'Azure', icon: 'ri-microsoft-line' },
  { label: 'Data Science', icon: 'ri-bar-chart-grouped-line' },
  { label: 'Cybersecurity', icon: 'ri-shield-check-line' },
];

const heroHighlights = [
  { icon: 'ri-user-star-line', title: 'Expert Trainers', text: 'Learn from industry professionals' },
  { icon: 'ri-code-box-line', title: 'Hands-on Learning', text: 'Work on real-world projects' },
  { icon: 'ri-award-line', title: 'Certification', text: 'Industry-recognized training' },
  { icon: 'ri-briefcase-4-line', title: 'Placement Support', text: 'Resume, interview prep and job assistance' },
];

const heroStats = [
  { icon: 'ri-group-line', value: '10,000+', label: 'Students Trained' },
  { icon: 'ri-graduation-cap-line', value: '150+', label: 'Expert Trainers' },
  { icon: 'ri-building-4-line', value: '500+', label: 'Hiring Partners' },
  { icon: 'ri-thumb-up-line', value: '4.8/5', label: 'Student Rating' },
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
      resultItemRefs.current[highlightedIndex]?.scrollIntoView({ block: 'nearest' });
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
    <section className="relative w-full overflow-hidden bg-white pt-20">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="relative z-10 w-full">
            <div className="w-full">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand">
                  <i className="ri-star-smile-line" />
                  <span>Learn Today. Lead Tomorrow.</span>
                </div>

                <h1 className="mb-6 text-4xl font-bold leading-[1.08] text-dark sm:text-5xl lg:text-[58px]">
                  Future-Ready Skills,{' '}
                  <span className="block text-brand">Limitless Opportunities</span>
                </h1>

                <p className="mb-8 max-w-2xl text-base leading-relaxed text-dark/70 md:text-lg">
                  Master in-demand technologies through expert-led training, hands-on projects, certifications, and career support that helps you get hired faster.
                </p>

                <div ref={containerRef} className="relative mb-4 max-w-2xl">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="relative flex-1">
                      <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-lg text-dark/40" />
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
                        className="h-14 w-full rounded-full border border-gray-200 bg-white/95 pl-12 pr-4 text-sm text-dark shadow-sm outline-none backdrop-blur transition-all focus:border-brand focus:ring-2 focus:ring-brand/20 lg:bg-white"
                      />
                    </div>
                    <button
                      onClick={handleSearchClick}
                      className="flex h-14 w-full items-center justify-center rounded-full bg-brand px-8 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-colors hover:bg-brand-dark sm:w-auto sm:min-w-[128px]"
                    >
                      Search
                    </button>
                  </div>

                  {showDropdown && isLoading && (
                    <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-gray-100 bg-white" style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}>
                      <div className="p-2">
                        <SkeletonItem />
                        <SkeletonItem />
                        <SkeletonItem />
                        <SkeletonItem />
                      </div>
                    </div>
                  )}

                  {showDropdown && !isLoading && results.length > 0 && (
                    <div ref={dropdownRef} className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-gray-100 bg-white" style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}>
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
                            className={`flex cursor-pointer items-start gap-3 rounded-xl px-3 py-2.5 transition-colors ${index === highlightedIndex ? 'bg-brand/5' : 'hover:bg-gray-50'}`}
                          >
                            <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand/10">
                              <i className="ri-book-open-line text-sm text-brand" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-medium text-dark">{highlightMatch(course.title)}</p>
                              <p className="mt-0.5 text-xs text-dark/40">{course.category} - {course.duration} Weeks</p>
                            </div>
                            <i className="ri-arrow-right-up-line mt-1 flex-shrink-0 text-sm text-dark/20" />
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-gray-50 px-3 py-2.5">
                        <button onClick={handleSearchClick} className="w-full py-1 text-center text-sm font-medium text-brand transition-colors hover:text-brand-dark">
                          View all results for &quot;{searchQuery.trim()}&quot;
                        </button>
                      </div>
                    </div>
                  )}

                  {showDropdown && !isLoading && searchQuery.trim() && results.length === 0 && (
                    <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border border-gray-100 bg-white p-6 text-center" style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}>
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                        <i className="ri-search-line text-xl text-dark/30" />
                      </div>
                      <p className="text-sm text-dark/60">No courses found for &quot;{searchQuery.trim()}&quot;</p>
                      <p className="mt-1 text-xs text-dark/40">Try a different search term</p>
                    </div>
                  )}
                </div>

                <div className="max-w-2xl">
                  <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-dark/45">Popular Searches</p>
                  <div className="flex flex-wrap gap-2">
                    {trendingSearches.map((item) => (
                      <button key={item.label} onClick={() => handleTrendingClick(item.label)} className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/95 px-3.5 py-2 text-sm text-dark/70 shadow-sm transition-all hover:border-brand/40 hover:bg-white hover:text-brand lg:bg-white">
                        <i className={`${item.icon} text-xs`} />
                        <span className="whitespace-nowrap">{item.label}</span>
                      </button>
                    ))}
                    <Link to="/courses" className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark">
                      Browse all <i className="ri-arrow-right-line text-xs" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          <div className="relative w-full h-[320px] sm:h-[400px] md:h-[440px] lg:h-[500px] rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden bg-[#eef5ff] shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="/images/hero/proitkeys-hero-tech-banner.jpg"
              alt="Technology learner working on cloud, AI, data analytics, and full stack skills"
              width={1792}
              height={1024}
              loading="eager"
              fetchPriority="high"
              decoding="sync"
              className="absolute inset-0 h-full w-full object-cover object-[65%_center] md:object-right"
            />
          </div>
        </div>
      </div>

      <div className="w-full border-t border-b border-gray-100 bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 lg:p-5">
          {heroHighlights.map((item, index) => (
            <div key={item.title} className={`flex items-center gap-4 p-3 ${index !== 0 ? 'border-t border-gray-100 md:border-l md:border-t-0' : ''}`}>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <i className={`${item.icon} text-2xl`} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-dark">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-dark/60">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-dark text-white py-6 sm:py-8">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((item, index) => (
              <div key={item.label} className={`flex items-center gap-4 ${index !== 0 ? 'lg:border-l lg:border-white/15 lg:pl-7' : ''}`}>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                  <i className={`${item.icon} text-2xl`} />
                </div>
                <div>
                  <p className="text-2xl font-bold leading-none">{item.value}</p>
                  <p className="mt-1 text-xs text-white/70">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}