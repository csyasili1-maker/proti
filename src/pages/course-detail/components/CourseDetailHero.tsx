import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/base/OptimizedImage';
import type { Course } from '@/mocks/coursesData';

interface CourseDetailHeroProps {
  course: Course;
}

const categoryDotColor: Record<string, string> = {
  'Cloud Computing': 'bg-sky-500',
  'Cybersecurity': 'bg-red-500',
  'Cloud Security': 'bg-blue-600',
  'AI & Machine Learning': 'bg-violet-500',
  'Data Engineering': 'bg-blue-500',
  'Software Development': 'bg-emerald-500',
  'Data Analytics & Science': 'bg-teal-500',
  'BI & Visualization': 'bg-green-600',
  'CRM / Salesforce': 'bg-sky-400',
  'ITSM / ServiceNow': 'bg-lime-600',
  'DevOps & Automation': 'bg-indigo-500',
  'ERP & Business Apps': 'bg-orange-400',
  'Project Management': 'bg-rose-500',
  'Database Technologies': 'bg-blue-700',
  'Emerging Technologies': 'bg-fuchsia-500',
  'Full Stack Programs': 'bg-cyan-600',
  'Business Analysis': 'bg-green-500',
};

function getCategoryDot(category: string): string {
  return categoryDotColor[category] || 'bg-gray-400';
}

function renderStars(rating: number) {
  const stars: React.ReactNode[] = [];
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;

  for (let i = 0; i < full; i++) {
    stars.push(<i key={`full-${i}`} className="ri-star-fill text-amber-400" />);
  }
  if (hasHalf) {
    stars.push(<i key="half" className="ri-star-half-fill text-amber-400" />);
  }
  const remaining = 5 - full - (hasHalf ? 1 : 0);
  for (let i = 0; i < remaining; i++) {
    stars.push(<i key={`empty-${i}`} className="ri-star-line text-amber-400" />);
  }
  return stars;
}

const whatsappNumber = '919492876779';

function getWhatsAppMessage(course: Course): string {
  const lines = [
    '👋 Hi PROITKEYS Team,',
    '',
    `I'm interested in the *${course.title}* course.`,
    '',
    '📋 Course Details:',
    `   • Course: ${course.title}`,
    `   • Category: ${course.category}`,
    `   • Level: ${course.level}`,
    `   • Duration: ${course.duration} Weeks`,
    '',
    'Could you please share more information about enrollment, upcoming batches, and pricing?',
    '',
    'Thank you!',
  ];
  return encodeURIComponent(lines.join('\n'));
}

const NAV_HEIGHT = 80;
const NAV_OFFSET = 100;

const navLinks = [
  { label: 'Overview', id: 'overview' },
  { label: 'Curriculum', id: 'curriculum' },
  { label: 'Career', id: 'career' },
  { label: 'Salary', id: 'salary' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Compare', id: 'compare' },
  { label: 'Enroll', id: 'enroll' },
];

export default function CourseDetailHero({ course }: CourseDetailHeroProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const heroTitle = course.heroTitle || `Become a Job-Ready ${course.title}`;
  const heroPrefix = 'Become a Job-Ready ';

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    setActiveSection(id);

    const rect = el.getBoundingClientRect();
    const absoluteTop = window.pageYOffset + rect.top;
    const targetPosition = absoluteTop - NAV_OFFSET;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${NAV_OFFSET}px 0px -40% 0px`,
        threshold: 0,
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[680px] overflow-hidden pt-20 bg-white">
        <div className="relative z-10 w-full px-6 lg:px-10 py-16 md:py-24 max-w-[1440px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-dark/40 mb-6">
            <Link to="/" className="hover:text-brand transition-colors">Home</Link>
            <i className="ri-arrow-right-s-line text-xs" />
            <Link to="/courses" className="hover:text-brand transition-colors">Courses</Link>
            <i className="ri-arrow-right-s-line text-xs" />
            <span className="text-dark/70 font-medium truncate max-w-[300px]">{course.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Text Content */}
            <div className="flex-1 w-full">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <span className={`w-2 h-2 rounded-full ${getCategoryDot(course.category)}`} />
                <span>{course.category}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold font-display text-dark leading-[1.12] mb-6">
                {heroTitle.startsWith(heroPrefix) ? (
                  <>
                    {heroPrefix}
                    <span className="text-brand">{heroTitle.slice(heroPrefix.length)}</span>
                  </>
                ) : (
                  <span className="text-brand">{heroTitle}</span>
                )}
              </h1>

              {/* Description */}
              <p className="text-dark/60 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                {course.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full mb-8">
                <button
                  onClick={() => scrollTo('enroll')}
                  className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer"
                >
                  Enroll Now
                  <i className="ri-arrow-right-line" />
                </button>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${getWhatsAppMessage(course)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-brand text-dark hover:text-brand px-8 py-4 rounded-full text-sm font-semibold transition-all whitespace-nowrap"
                >
                  <i className="ri-whatsapp-line" />
                  Chat With Advisor
                </a>
              </div>

              {/* Rating */}
              {course.rating > 0 && (
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-0.5 text-sm">
                    {renderStars(course.rating)}
                  </div>
                  <span className="text-sm font-semibold text-dark">{course.rating.toFixed(1)}</span>
                  <span className="text-sm text-dark/50">({course.reviewCount} reviews)</span>
                </div>
              )}

              {/* Quick Stats */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center">
                    <i className="ri-time-line text-brand text-sm" />
                  </div>
                  <span className="text-dark/70 text-sm font-medium">{course.duration} Weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center">
                    <i className="ri-live-line text-brand text-sm" />
                  </div>
                  <span className="text-dark/70 text-sm font-medium">Live Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center">
                    <i className="ri-user-star-line text-brand text-sm" />
                  </div>
                  <span className="text-dark/70 text-sm font-medium">Placement Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center">
                    <i className="ri-bar-chart-box-line text-brand text-sm" />
                  </div>
                  <span className="text-dark/70 text-sm font-medium">{course.level}</span>
                </div>
              </div>
            </div>

            {/* Right: Image with floating badges */}
            <div className="flex-1 w-full relative">
              <div className="relative">
                <div className="relative z-10 w-full max-w-[560px] mx-auto rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto">
                  <OptimizedImage
                    src={course.image}
                    alt={`${course.title} training at PROITKEYS`}
                    width={560}
                    height={420}
                    className="w-full h-full md:h-[420px]"
                  />
                </div>

                {/* Floating Badge 1: Duration */}
                <div className="absolute left-0 sm:-left-4 md:left-4 bottom-4 md:bottom-8 bg-white rounded-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 z-20 border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                    <i className="ri-time-line text-brand text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-dark/50">Duration</p>
                    <p className="text-sm font-bold text-dark">{course.duration} Weeks</p>
                  </div>
                </div>

                {/* Floating Badge 2: Rating */}
                <div className="absolute right-0 sm:-right-4 md:right-6 top-6 md:top-10 bg-white rounded-2xl p-3 sm:p-4 z-20 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <i className="ri-star-fill text-amber-400 text-sm" />
                    <span className="text-sm font-bold text-dark">{course.rating > 0 ? course.rating.toFixed(1) : '4.8'}/5</span>
                  </div>
                  <p className="text-xs text-dark/50">Student Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Sub-Navigation */}
        <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 hidden lg:block">
          <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
            <div className="flex items-center gap-1 py-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    activeSection === link.id
                      ? 'bg-brand/10 text-brand font-semibold'
                      : 'text-dark/60 hover:text-brand hover:bg-brand/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
