import { useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import CoursesHero from './components/CoursesHero';
import PlacementSupportBanner from './components/PlacementSupportBanner';
import CourseFilters from './components/CourseFilters';
import CourseGrid from './components/CourseGrid';
import CoursesCTA from './components/CoursesCTA';

export default function CoursesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const currentSearchParam = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [isFilterSticky, setIsFilterSticky] = useState(false);

  const filterSentinelRef = useRef<HTMLDivElement>(null);

  // Sync search to URL
  useEffect(() => {
    if (searchQuery && searchQuery !== currentSearchParam) {
      setSearchParams({ search: searchQuery }, { replace: true });
    } else if (!searchQuery && currentSearchParam) {
      setSearchParams({}, { replace: true });
    }
  }, [searchQuery, currentSearchParam, setSearchParams]);

  // Track when filters should become sticky
  useEffect(() => {
    const sentinel = filterSentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFilterSticky(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '-96px 0px 0px 0px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const clearAll = useCallback(() => {
    setSelectedCategory('All');
    setSelectedLevel('All');
    setSelectedDuration('All');
    setSearchQuery('');
  }, []);

  // Set search from category chip click
  const handleSearchChange = useCallback((q: string) => {
    setSearchQuery(q);
    // If it matches a category name, also set the category filter
    const catMatch = ['Cloud Computing', 'Cybersecurity', 'AI & Machine Learning', 'Data Engineering',
      'Software Development', 'Data Analytics & Science', 'BI & Visualization', 'CRM / Salesforce',
      'ITSM / ServiceNow', 'DevOps & Automation', 'ERP & Business Apps', 'Project Management',
      'Database Technologies', 'Emerging Technologies', 'Full Stack Programs', 'Business Analysis'
    ].find(c => c.toLowerCase() === q.toLowerCase());

    if (catMatch) {
      setSelectedCategory(catMatch);
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-background-50">
      <Navbar />

      {/* Hero with search */}
      <CoursesHero searchQuery={searchQuery} setSearchQuery={handleSearchChange} />

      {/* Placement Banner */}
      <PlacementSupportBanner />

      {/* Sentinel for sticky detection */}
      <div ref={filterSentinelRef} className="h-px" />

      {/* Sticky Filters - at page level so it can stick properly */}
      <CourseFilters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
        selectedDuration={selectedDuration}
        setSelectedDuration={setSelectedDuration}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isSticky={isFilterSticky}
      />

      {/* Course Grid */}
      <CourseGrid
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        selectedLevel={selectedLevel}
        selectedDuration={selectedDuration}
        onClearAll={clearAll}
      />

      <CoursesCTA />
      <Footer />
    </div>
  );
}
