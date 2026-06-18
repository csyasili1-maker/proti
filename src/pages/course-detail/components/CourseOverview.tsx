import OptimizedImage from '@/components/base/OptimizedImage';
import { generateFeatures } from '@/utils/courseDetailUtils';
import type { Course } from '@/mocks/coursesData';

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

interface CourseOverviewProps {
  course: Course;
}

export default function CourseOverview({ course }: CourseOverviewProps) {
  const features = generateFeatures(course);
  const overviewParagraphs = course.overviewDescription && course.overviewDescription.length > 0
    ? course.overviewDescription
    : [];

  const highlights = [
    { icon: 'ri-time-line', label: 'Duration', value: `${course.duration} Weeks` },
    { icon: 'ri-live-line', label: 'Format', value: 'Live Instructor-Led' },
    { icon: 'ri-group-line', label: 'Batch Size', value: 'Small (Personal Attention)' },
    { icon: 'ri-book-open-line', label: 'Category', value: course.category },
    { icon: 'ri-bar-chart-box-line', label: 'Level', value: course.level },
    { icon: 'ri-briefcase-4-line', label: 'Placement Support', value: 'Resume, Mock Interviews, Job Assistance' },
    { icon: 'ri-award-line', label: 'Certificate', value: 'Industry-Recognized' },
  ];

  return (
    <section id="overview" className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-8">
          {/* Left: About the Course */}
          <div className="w-full lg:flex-[0.55]">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">About the Course</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3 mb-6 leading-tight">
              Built to Match <span className="text-brand">Industry Hiring Standards</span>
            </h2>

            {overviewParagraphs.map((paragraph, index) => (
              <p key={index} className="text-dark/60 text-base leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}

            <p className={`text-dark/60 text-base leading-relaxed mb-4 ${overviewParagraphs.length > 0 ? 'hidden' : ''}`}>
              The {course.title} program at PROITKEYS is designed around what employers actually need — not outdated theory. You will learn how modern {course.category} teams operate, the tools they use, and the skills they value most.
            </p>

            <p className="text-dark/60 text-base leading-relaxed mb-6">
              By the end of this training, you will be able to:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {features.slice(0, 6).map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-white rounded-lg px-4 py-3">
                  <i className="ri-checkbox-circle-fill text-brand text-base flex-shrink-0" />
                  <span className="text-dark/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {course.level.includes('Beginner') && (
              <p className="text-dark/50 text-sm mt-6 italic">No prior experience required.</p>
            )}
          </div>

          {/* Right: Program Highlights */}
          <div className="w-full lg:flex-[0.45]">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-lg font-bold font-display text-dark mb-5">Program Highlights</h3>
              <div className="space-y-4">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-brand text-sm`} />
                    </div>
                    <div>
                      <p className="text-dark/40 text-xs uppercase tracking-wider">{item.label}</p>
                      <p className="text-dark font-semibold text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${getWhatsAppMessage(course)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-brand hover:bg-brand-dark text-white px-6 py-3.5 rounded-full text-sm font-semibold transition-colors whitespace-nowrap mt-6"
              >
                <i className="ri-whatsapp-line" />
                Apply for This Course
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
