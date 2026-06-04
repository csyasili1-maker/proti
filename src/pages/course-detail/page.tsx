import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '@/mocks/coursesData';
import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import ScrollReveal from '@/components/base/ScrollReveal';
import ScrollProgressBar from './components/ScrollProgressBar';
import CourseDetailHero from './components/CourseDetailHero';
import CourseOverview from './components/CourseOverview';
import CourseDescription from './components/CourseDescription';
import CourseDetailContent from './components/CourseDetailContent';
import CourseDurationCapstone from './components/CourseDurationCapstone';
import CourseJobs from './components/CourseJobs';
import CourseSalary from './components/CourseSalary';
import CourseWhyChoose from './components/CourseWhyChoose';
import CourseFaq from './components/CourseFaq';
import CourseCompare from './components/CourseCompare';
import CourseCTA from './components/CourseCTA';
import RecentlyViewed from './components/RecentlyViewed';
import { trackRecentlyViewed } from '@/utils/recentlyViewedCourses';
import { useCourseSeo } from '@/hooks/useCourseSeo';

export default function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const course = courses.find((c) => c.slug === slug);
  useCourseSeo(course);

  useEffect(() => {
    if (course) {
      trackRecentlyViewed(course.slug);
    }
  }, [course]);

  if (!course) {
    return (
      <div className="w-full min-h-screen bg-light">
        <Navbar />
        <div className="pt-28 pb-20 text-center">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
            <i className="ri-emotion-sad-line text-4xl text-dark/30" />
          </div>
          <h1 className="text-2xl font-bold text-dark mb-3">Course Not Found</h1>
          <p className="text-dark/50 mb-8 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the course you&apos;re looking for. It may have been removed or the link might be incorrect.
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-full text-base font-semibold transition-colors"
          >
            <i className="ri-arrow-left-line" />
            Browse All Courses
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div key={slug} className="w-full min-h-screen bg-white">
      <Navbar />
      <ScrollProgressBar />
      <CourseDetailHero course={course} />
      <ScrollReveal>
        <CourseOverview course={course} />
      </ScrollReveal>
      <ScrollReveal>
        <CourseDescription course={course} />
      </ScrollReveal>
      <ScrollReveal>
        <CourseDetailContent course={course} />
      </ScrollReveal>
      <ScrollReveal>
        <CourseDurationCapstone course={course} />
      </ScrollReveal>
      <ScrollReveal>
        <CourseJobs course={course} />
      </ScrollReveal>
      <ScrollReveal>
        <CourseSalary course={course} />
      </ScrollReveal>
      <ScrollReveal>
        <CourseWhyChoose />
      </ScrollReveal>
      <ScrollReveal>
        <CourseFaq course={course} />
      </ScrollReveal>
      <ScrollReveal>
        <CourseCompare course={course} />
      </ScrollReveal>
      <ScrollReveal>
        <CourseCTA course={course} />
      </ScrollReveal>
      <ScrollReveal>
        <RecentlyViewed />
      </ScrollReveal>
      <Footer />
    </div>
  );
}
