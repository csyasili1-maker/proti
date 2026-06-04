import { useMemo, useRef, useEffect, useState, useCallback } from 'react';
import { courses, categories, levels, durations } from '@/mocks/coursesData';

interface CourseFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  selectedDuration: string;
  setSelectedDuration: (dur: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  isSticky: boolean;
}

export default function CourseFilters({
  selectedCategory,
  setSelectedCategory,
  selectedLevel,
  setSelectedLevel,
  selectedDuration,
  setSelectedDuration,
  searchQuery,
  setSearchQuery,
  isSticky,
}: CourseFiltersProps) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const displayCategories = useMemo(() => categories.filter(c => c !== 'All'), []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    displayCategories.forEach((cat) => {
      counts[cat] = courses.filter((c) => c.category === cat).length;
    });
    return counts;
  }, [displayCategories]);

  const hasActiveFilters = selectedCategory !== 'All' || selectedLevel !== 'All' || selectedDuration !== 'All' || searchQuery !== '';

  const activeFilterCount = [
    selectedCategory !== 'All' ? 1 : 0,
    selectedLevel !== 'All' ? 1 : 0,
    selectedDuration !== 'All' ? 1 : 0,
  ].reduce((a, b) => a + b, 0);

  const clearAll = useCallback(() => {
    setSelectedCategory('All');
    setSelectedLevel('All');
    setSelectedDuration('All');
    setSearchQuery('');
  }, [setSelectedCategory, setSelectedLevel, setSelectedDuration, setSearchQuery]);

  // Animate underline indicator
  useEffect(() => {
    const allCats = ['All', ...displayCategories];
    const idx = allCats.indexOf(selectedCategory);
    const tab = tabRefs.current[idx];
    if (tab) {
      const nextStyle = { left: tab.offsetLeft, width: tab.offsetWidth };
      setIndicatorStyle((prev) =>
        prev.left === nextStyle.left && prev.width === nextStyle.width ? prev : nextStyle
      );
    }
  }, [selectedCategory, displayCategories]);

  const levelOptions = levels.filter(l => l !== 'All');
  const durationOptions = durations.filter(d => d !== 'All');

  const filtersContent = (
    <div className="space-y-4">
      {/* Category Tabs with animated underline */}
      <div className="relative">
        <div
          ref={tabsContainerRef}
          className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-hide -mx-1 px-1"
        >
          <button
            ref={(el) => { tabRefs.current[0] = el; }}
            onClick={() => setSelectedCategory('All')}
            className={`relative px-4 py-2.5 text-sm font-semibold whitespace-nowrap rounded-lg transition-colors ${
              selectedCategory === 'All'
                ? 'text-foreground-950'
                : 'text-foreground-500 hover:text-foreground-700'
            }`}
          >
            All Courses
            <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
              selectedCategory === 'All'
                ? 'bg-foreground-950/10 text-foreground-700'
                : 'bg-gray-100 text-foreground-400'
            }`}>
              {courses.length}
            </span>
          </button>

          {displayCategories.map((cat, i) => (
            <button
              key={cat}
              ref={(el) => { tabRefs.current[i + 1] = el; }}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-4 py-2.5 text-sm font-medium whitespace-nowrap rounded-lg transition-colors ${
                selectedCategory === cat
                  ? 'text-foreground-950'
                  : 'text-foreground-500 hover:text-foreground-700'
              }`}
            >
              {cat}
              <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
                selectedCategory === cat
                  ? 'bg-foreground-950/10 text-foreground-700'
                  : 'bg-gray-100 text-foreground-400 hidden sm:inline'
              }`}>
                {categoryCounts[cat]}
              </span>
            </button>
          ))}
        </div>

        {/* Animated underline */}
        <div
          className="absolute bottom-1 h-0.5 bg-foreground-950 rounded-full transition-all duration-300 ease-out"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        />
      </div>

      {/* Quick Filter Chips */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Level chips */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-medium text-foreground-400 mr-1 hidden sm:inline">Level:</span>
          {levelOptions.map(lvl => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(selectedLevel === lvl ? 'All' : lvl)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap ${
                selectedLevel === lvl
                  ? 'bg-foreground-950 text-white'
                  : 'bg-gray-100 text-foreground-500 hover:bg-gray-200 hover:text-foreground-700'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>

        <div className="w-px h-5 bg-gray-200 hidden sm:block" />

        {/* Duration chips */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-medium text-foreground-400 mr-1 hidden sm:inline">Duration:</span>
          {['4-8 Weeks', '10-12 Weeks', '14+ Weeks'].map(range => {
            const isActive = (() => {
              if (selectedDuration === 'All') return false;
              const dur = parseInt(selectedDuration);
              if (range === '4-8 Weeks') return dur >= 4 && dur <= 8;
              if (range === '10-12 Weeks') return dur >= 10 && dur <= 12;
              return dur >= 14;
            })();
            return (
              <button
                key={range}
                onClick={() => {
                  if (isActive) {
                    setSelectedDuration('All');
                  } else {
                    const firstDur = range === '4-8 Weeks' ? '4 Weeks' : range === '10-12 Weeks' ? '10 Weeks' : '14 Weeks';
                    setSelectedDuration(firstDur);
                  }
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-foreground-950 text-white'
                    : 'bg-gray-100 text-foreground-500 hover:bg-gray-200 hover:text-foreground-700'
                }`}
              >
                {range}
              </button>
            );
          })}
        </div>

        {/* Active filters indicator */}
        {hasActiveFilters && (
          <>
            <div className="w-px h-5 bg-gray-200 hidden sm:block" />
            <button
              onClick={clearAll}
              className="flex items-center gap-1.5 text-xs font-medium text-red-500 hover:text-red-600 transition-colors whitespace-nowrap"
            >
              <i className="ri-close-circle-line" />
              Clear {activeFilterCount > 0 ? `(${activeFilterCount})` : ''}
            </button>
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop/Tablet Filter Bar - sticky */}
      <div className={`hidden md:block bg-white border-b border-gray-100 transition-shadow duration-300 ${
        isSticky ? 'sticky top-24 z-40 shadow-sm' : ''
      }`}>
        <div className="px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto py-4">
          {filtersContent}
        </div>
      </div>

      {/* Mobile Filter Bar */}
      <div className={`md:hidden bg-white border-b border-gray-100 transition-shadow duration-300 ${
        isSticky ? 'sticky top-24 z-40 shadow-sm' : ''
      }`}>
        <div className="px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gray-100 rounded-xl text-sm font-semibold text-foreground-700 hover:bg-gray-200 transition-colors"
          >
            <i className="ri-equalizer-line" />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-foreground-950 text-white text-xs flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          <div className="relative flex-1">
            <select className="appearance-none w-full py-2.5 pl-3 pr-8 bg-gray-100 rounded-xl text-sm font-semibold text-foreground-700 focus:outline-none cursor-pointer">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Duration: Short to Long</option>
              <option>Duration: Long to Short</option>
            </select>
            <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-foreground-400 text-sm pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer (Bottom Sheet) */}
      {mobileDrawerOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 animate-fade-in"
            onClick={() => setMobileDrawerOpen(false)}
          />

          {/* Drawer */}
          <div className="relative bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto animate-slide-up">
            {/* Handle */}
            <div className="sticky top-0 bg-white pt-4 pb-2 px-4 z-10">
              <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground-950">Filters</h3>
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  <i className="ri-close-line" />
                </button>
              </div>
            </div>

            <div className="px-4 pb-8 space-y-6">
              {/* Category */}
              <div>
                <h4 className="text-sm font-semibold text-foreground-400 uppercase tracking-wider mb-3">Category</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                      selectedCategory === 'All'
                        ? 'bg-foreground-950 text-white'
                        : 'bg-gray-100 text-foreground-600'
                    }`}
                  >
                    All ({courses.length})
                  </button>
                  {displayCategories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                        selectedCategory === cat
                          ? 'bg-foreground-950 text-white'
                          : 'bg-gray-100 text-foreground-600'
                      }`}
                    >
                      {cat} ({categoryCounts[cat]})
                    </button>
                  ))}
                </div>
              </div>

              {/* Level */}
              <div>
                <h4 className="text-sm font-semibold text-foreground-400 uppercase tracking-wider mb-3">Level</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedLevel('All')}
                    className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                      selectedLevel === 'All'
                        ? 'bg-foreground-950 text-white'
                        : 'bg-gray-100 text-foreground-600'
                    }`}
                  >
                    All Levels
                  </button>
                  {levelOptions.map(lvl => (
                    <button
                      key={lvl}
                      onClick={() => setSelectedLevel(lvl)}
                      className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                        selectedLevel === lvl
                          ? 'bg-foreground-950 text-white'
                          : 'bg-gray-100 text-foreground-600'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <h4 className="text-sm font-semibold text-foreground-400 uppercase tracking-wider mb-3">Duration</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedDuration('All')}
                    className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                      selectedDuration === 'All'
                        ? 'bg-foreground-950 text-white'
                        : 'bg-gray-100 text-foreground-600'
                    }`}
                  >
                    Any Duration
                  </button>
                  {durationOptions.map(dur => (
                    <button
                      key={dur}
                      onClick={() => setSelectedDuration(dur)}
                      className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                        selectedDuration === dur
                          ? 'bg-foreground-950 text-white'
                          : 'bg-gray-100 text-foreground-600'
                      }`}
                    >
                      {dur}
                    </button>
                  ))}
                </div>
              </div>

              {/* Apply Button */}
              <div className="flex gap-3 pt-4 border-t border-gray-100">
                {hasActiveFilters && (
                  <button
                    onClick={clearAll}
                    className="flex-1 py-3 text-sm font-semibold text-red-500 bg-red-50 rounded-xl hover:bg-red-100 transition-colors"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="flex-1 py-3 text-sm font-semibold text-white bg-foreground-950 rounded-xl hover:bg-foreground-800 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
