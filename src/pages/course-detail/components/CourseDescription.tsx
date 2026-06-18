import OptimizedImage from '@/components/base/OptimizedImage';
import { generateFeatures } from '@/utils/courseDetailUtils';
import type { Course } from '@/mocks/coursesData';

interface CourseDescriptionProps {
  course: Course;
}

function getWhatsAppMessage(course: Course) {
  return encodeURIComponent(
    [
      'Hi PROITKEYS Team,',
      '',
      `I want to apply for the ${course.title} course.`,
      '',
      'Course Details:',
      `- Course: ${course.title}`,
      `- Category: ${course.category}`,
      `- Level: ${course.level}`,
      `- Duration: ${course.duration} Weeks`,
      '',
      'Please guide me through the enrollment process.',
      '',
      'Thank you!',
    ].join('\n'),
  );
}

export default function CourseDescription({ course }: CourseDescriptionProps) {
  const features = generateFeatures(course).slice(0, 6);
  const levelPhrase = course.level === 'Beginner'
    ? 'from fundamentals to guided practice'
    : course.level === 'Intermediate'
    ? 'from working knowledge to confident implementation'
    : 'from advanced concepts to architecture-level decision making';
  const descriptionParagraphs = course.detailDescription && course.detailDescription.length > 0
    ? course.detailDescription
    : [
        `The ${course.title} program is built for learners who want practical, job-ready capability in ${course.category}. Over ${course.duration} weeks, the course takes you ${levelPhrase} through live instruction, guided labs, tool-based exercises, and project work tied to real IT delivery scenarios.`,
        `You will practice the workflows, terminology, troubleshooting patterns, and interview-ready skills expected from professionals working with ${course.title}. The focus stays on usable knowledge: what to configure, what to build, what to monitor, and how to explain your decisions in a hiring conversation.`,
      ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Image */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="w-full max-w-[540px] rounded-3xl overflow-hidden" style={{ height: '405px' }}>
              <OptimizedImage
                src={course.image}
                alt={`${course.title} training at PROITKEYS`}
                width={540}
                height={405}
                className="w-full h-[405px]"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 w-full order-1 lg:order-2">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Course Description</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3 mb-6 leading-tight">
              Immersive Training That <span className="text-brand">Prepares You for Real Work</span>
            </h2>

            {descriptionParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-dark/60 text-base leading-relaxed ${index === descriptionParagraphs.length - 1 ? 'mb-6' : 'mb-4'}`}
              >
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <i className="ri-check-line text-brand text-lg flex-shrink-0" />
                  <span className="text-dark/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/919492876779?text=${getWhatsAppMessage(course)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
            >
              <i className="ri-whatsapp-line" />
              Ask About This Program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
