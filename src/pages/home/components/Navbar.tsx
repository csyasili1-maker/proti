import { useState, useEffect, useRef, useCallback } from 'react';
import type { ChangeEvent, KeyboardEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { Course } from '@/mocks/coursesData';
import { getWhatsAppUrl, indiaPhoneNumber, usPhoneNumber } from '@/config/contact';
import { searchCourses } from '@/utils/courseSearch';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Course[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchRequestRef = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setShowSearchResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
    };
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Programs', href: '/programs' },
    { label: 'Courses', href: '/courses' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Services', href: '/services', isDropdown: true },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const contactItems = [
    {
      label: usPhoneNumber.display,
      href: `tel:${usPhoneNumber.tel}`,
      icon: 'ri-phone-line',
    },
    {
      label: indiaPhoneNumber.display,
      href: `tel:${indiaPhoneNumber.tel}`,
      icon: 'ri-phone-line',
    },
    {
      label: 'proitkeys@gmail.com',
      href: 'mailto:proitkeys@gmail.com',
      icon: 'ri-mail-line',
    },
    {
      label: 'United States',
      icon: 'ri-map-pin-line',
    },
  ];

  const filterCourses = useCallback((query: string) => {
    if (!query.trim()) {
      searchRequestRef.current += 1;
      if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
      setSearchResults([]);
      setShowSearchResults(false);
      setHighlightedIndex(-1);
      setIsSearchLoading(false);
      return;
    }

    setShowSearchResults(true);
    setIsSearchLoading(true);
    if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
    const requestId = searchRequestRef.current + 1;
    searchRequestRef.current = requestId;

    searchDebounceRef.current = setTimeout(() => {
      searchCourses(query, 6)
        .then((matched) => {
          if (requestId !== searchRequestRef.current) return;
          setSearchResults(matched);
          setShowSearchResults(true);
          setHighlightedIndex(-1);
          setIsSearchLoading(false);
        })
        .catch(() => {
          if (requestId !== searchRequestRef.current) return;
          setSearchResults([]);
          setShowSearchResults(true);
          setHighlightedIndex(-1);
          setIsSearchLoading(false);
        });
    }, 350);
  }, []);

  useEffect(() => {
    if (!searchOpen) return;
    const focusTimer = setTimeout(() => searchInputRef.current?.focus(), 0);
    return () => clearTimeout(focusTimer);
  }, [searchOpen]);

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
    setShowSearchResults(false);
    setHighlightedIndex(-1);
  }, []);

  const submitSearch = useCallback(() => {
    const term = searchQuery.trim();
    closeSearch();
    navigate(term ? `/courses?search=${encodeURIComponent(term)}` : '/courses');
  }, [closeSearch, navigate, searchQuery]);

  const openCourse = (slug: string) => {
    setSearchQuery('');
    setSearchResults([]);
    closeSearch();
    navigate(`/courses/${slug}`);
  };

  const handleSearchToggle = () => {
    if (searchOpen) {
      closeSearch();
      return;
    }

    setSearchOpen(true);
    if (searchQuery.trim()) {
      setShowSearchResults(true);
      if (searchResults.length === 0) filterCourses(searchQuery);
    }
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    filterCourses(value);
  };

  const handleSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      closeSearch();
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < searchResults.length) {
        openCourse(searchResults[highlightedIndex].slug);
      } else {
        submitSearch();
      }
      return;
    }

    if (!showSearchResults || searchResults.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev < searchResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : searchResults.length - 1));
    }
  };

  const SearchSkeletonItem = () => (
    <div className="flex items-start gap-3 px-3 py-2.5 animate-pulse">
      <div className="w-9 h-9 rounded-lg bg-gray-100 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="h-4 bg-gray-100 rounded w-3/4 mb-2" />
        <div className="h-3 bg-gray-50 rounded w-1/2" />
      </div>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white text-dark transition-all duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="hidden md:block bg-[#c81919] text-white">
        <div className="w-full px-6 lg:px-10 flex items-center justify-between h-8">
          <div className="flex items-center gap-5 min-w-0">
            {contactItems.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white/85 transition-colors hover:text-white whitespace-nowrap"
                >
                  <i className={`${item.icon} text-sm`} />
                  <span>{item.label}</span>
                </a>
              ) : (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white/85 whitespace-nowrap"
                >
                  <i className={`${item.icon} text-sm`} />
                  <span>{item.label}</span>
                </div>
              )
            )}
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white transition-colors hover:text-white/80 whitespace-nowrap"
          >
            <i className="ri-whatsapp-line text-sm" />
            WhatsApp Support
          </a>
        </div>
      </div>

      <div className="w-full px-6 lg:px-10 bg-white">
        <nav className="flex items-center justify-between gap-4 h-20 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/images/brand/proitkeys-logo-nav.png"
              alt="PROITKEYS"
              width={96}
              height={96}
              loading="eager"
              fetchPriority="high"
              className="h-16 md:h-14 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isDropdown ? (
                <div key={link.label} className="group relative" ref={dropdownRef}>
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    onMouseDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation();
                      setServicesOpen((open) => !open);
                    }}
                    className="flex items-center gap-1.5 text-sm font-semibold text-dark/75 transition-colors hover:text-brand-red whitespace-nowrap"
                  >
                    {link.label}
                    <i className={`ri-arrow-down-s-line text-xs transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div
                    className={`absolute top-full mt-3 left-0 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[240px] z-50 ${
                      servicesOpen ? 'block' : 'hidden'
                    } group-hover:block group-focus-within:block`}
                  >
                    <Link
                      to="/services"
                      onClick={() => setServicesOpen(false)}
                      className="block px-5 py-3 text-sm text-dark/70 hover:text-brand hover:bg-brand/5 transition-colors whitespace-nowrap"
                    >
                      <div className="flex items-center gap-2">
                        <i className="ri-service-line text-brand" />
                        <span>All Services</span>
                      </div>
                    </Link>
                    <Link
                      to="/career-success-services"
                      onClick={() => setServicesOpen(false)}
                      className="block px-5 py-3 text-sm text-dark/70 hover:text-brand hover:bg-brand/5 transition-colors whitespace-nowrap"
                    >
                      <div className="flex items-center gap-2">
                        <i className="ri-briefcase-line text-brand" />
                        <span>Career Success Services</span>
                      </div>
                    </Link>
                    <Link
                      to="/career-placement-support"
                      onClick={() => setServicesOpen(false)}
                      className="block px-5 py-3 text-sm text-dark/70 hover:text-brand hover:bg-brand/5 transition-colors whitespace-nowrap"
                    >
                      <div className="flex items-center gap-2">
                        <i className="ri-user-star-line text-brand" />
                        <span>Career Placement Support</span>
                      </div>
                    </Link>
                    <Link
                      to="/corporate-training-solutions"
                      onClick={() => setServicesOpen(false)}
                      className="block px-5 py-3 text-sm text-dark/70 hover:text-brand hover:bg-brand/5 transition-colors whitespace-nowrap"
                    >
                      <div className="flex items-center gap-2">
                        <i className="ri-building-4-line text-brand" />
                        <span>Corporate Training Solutions</span>
                      </div>
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-semibold text-dark/75 transition-colors hover:text-brand-red whitespace-nowrap"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center relative" ref={searchRef}>
            <button
              type="button"
              aria-label="Search"
              aria-expanded={searchOpen}
              onClick={handleSearchToggle}
              className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center transition-colors hover:bg-brand-red/15"
            >
              <i className="ri-search-line text-brand-red" />
            </button>

            {searchOpen && (
              <div className="absolute right-0 top-full mt-3 w-[380px] bg-white rounded-2xl border border-gray-100 shadow-xl z-50 p-3">
                <div className="relative">
                  <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-dark/35 text-base" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    onKeyDown={handleSearchKeyDown}
                    onFocus={() => {
                      if (searchQuery.trim()) setShowSearchResults(true);
                    }}
                    placeholder="Search courses, skills, or keywords..."
                    className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-11 text-sm text-dark outline-none transition-all placeholder:text-dark/35 focus:border-brand focus:ring-2 focus:ring-brand/15"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      aria-label="Clear search"
                      onClick={() => {
                        if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
                        setSearchQuery('');
                        setSearchResults([]);
                        setShowSearchResults(false);
                        setHighlightedIndex(-1);
                        searchInputRef.current?.focus();
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                      <i className="ri-close-line text-dark/45 text-sm" />
                    </button>
                  )}
                </div>

                {!searchQuery.trim() && (
                  <div className="px-2 py-4 text-center">
                    <p className="text-sm font-medium text-dark/70">Search the course catalog</p>
                    <p className="text-xs text-dark/40 mt-1">Try AWS, Python, Salesforce, or Cybersecurity.</p>
                  </div>
                )}

                {showSearchResults && searchQuery.trim() && (
                  <div className="mt-2 max-h-[360px] overflow-y-auto">
                    {isSearchLoading ? (
                      <div className="p-1">
                        <SearchSkeletonItem />
                        <SearchSkeletonItem />
                        <SearchSkeletonItem />
                      </div>
                    ) : searchResults.length > 0 ? (
                      <div className="p-1">
                        {searchResults.map((course, index) => (
                          <button
                            key={course.id}
                            type="button"
                            onClick={() => openCourse(course.slug)}
                            className={`w-full flex items-start gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${
                              index === highlightedIndex ? 'bg-brand/5' : 'hover:bg-gray-50'
                            }`}
                          >
                            <span className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                              <i className="ri-book-open-line text-brand text-sm" />
                            </span>
                            <span className="flex-1 min-w-0">
                              <span className="block text-sm font-semibold text-dark truncate">{course.title}</span>
                              <span className="block text-xs text-dark/40 mt-0.5">
                                {course.category} - {course.duration} Weeks
                              </span>
                            </span>
                            <i className="ri-arrow-right-up-line text-dark/25 text-sm mt-1 flex-shrink-0" />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="px-4 py-6 text-center">
                        <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                          <i className="ri-search-line text-dark/30 text-lg" />
                        </div>
                        <p className="text-sm text-dark/60">No courses found for &quot;{searchQuery.trim()}&quot;</p>
                        <p className="text-xs text-dark/40 mt-1">Try a different search term.</p>
                      </div>
                    )}
                  </div>
                )}

                <div className="border-t border-gray-100 pt-3 mt-2">
                  <button
                    type="button"
                    onClick={submitSearch}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand hover:bg-brand-dark px-4 py-2.5 text-sm font-semibold text-white transition-colors"
                  >
                    {searchQuery.trim() ? `View all results for "${searchQuery.trim()}"` : 'Browse all courses'}
                    <i className="ri-arrow-right-line text-sm" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden w-10 h-10 rounded-xl bg-white border border-brand-red/20 flex items-center justify-center shadow-sm transition-colors hover:bg-brand-red/5"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className={`ri-${mobileOpen ? 'close-line' : 'menu-line'} text-2xl text-brand-red`} />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6">
          <div className="grid gap-2 mb-5 pb-5 border-b border-gray-100">
            {contactItems.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 text-dark/70 hover:text-brand font-medium text-sm py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <i className={`${item.icon} text-brand text-base`} />
                  <span>{item.label}</span>
                </a>
              ) : (
                <div key={item.label} className="flex items-center gap-3 text-dark/70 font-medium text-sm py-2">
                  <i className={`${item.icon} text-brand text-base`} />
                  <span>{item.label}</span>
                </div>
              )
            )}
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) =>
              link.isDropdown ? (
                <div key={link.label} className="flex flex-col">
                  <span className="text-dark/40 text-xs font-semibold uppercase tracking-wider px-4 py-2">
                    Services
                  </span>
                  <Link
                    to="/career-success-services"
                    className="text-dark/70 hover:text-brand font-medium text-base py-3 px-4 rounded-xl hover:bg-brand/5 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <i className="ri-briefcase-line text-brand text-base" />
                      <span>Career Success Services</span>
                    </div>
                  </Link>
                  <Link
                    to="/career-placement-support"
                    className="text-dark/70 hover:text-brand font-medium text-base py-3 px-4 rounded-xl hover:bg-brand/5 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <i className="ri-user-star-line text-brand text-base" />
                      <span>Career Placement Support</span>
                    </div>
                  </Link>
                  <Link
                    to="/corporate-training-solutions"
                    className="text-dark/70 hover:text-brand font-medium text-base py-3 px-4 rounded-xl hover:bg-brand/5 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <i className="ri-building-4-line text-brand text-base" />
                      <span>Corporate Training Solutions</span>
                    </div>
                  </Link>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-dark/80 hover:text-brand font-semibold text-base py-3 px-4 rounded-xl hover:bg-brand/5 transition-colors flex items-center gap-3"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
