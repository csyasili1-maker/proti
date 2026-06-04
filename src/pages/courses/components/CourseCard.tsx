import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Course } from '@/mocks/coursesData';
import OptimizedImage from '@/components/base/OptimizedImage';

interface CourseCardProps {
  course: Course;
}

const categoryAccent: Record<string, string> = {
  'Cloud Computing': 'bg-sky-100 text-sky-800',
  'Cybersecurity': 'bg-rose-100 text-rose-800',
  'AI & Machine Learning': 'bg-violet-100 text-violet-800',
  'Data Engineering': 'bg-amber-100 text-amber-800',
  'Software Development': 'bg-emerald-100 text-emerald-800',
  'Data Analytics & Science': 'bg-teal-100 text-teal-800',
  'BI & Visualization': 'bg-green-100 text-green-800',
  'CRM / Salesforce': 'bg-sky-100 text-sky-800',
  'ITSM / ServiceNow': 'bg-lime-100 text-lime-800',
  'DevOps & Automation': 'bg-indigo-100 text-indigo-800',
  'ERP & Business Apps': 'bg-orange-100 text-orange-800',
  'Project Management': 'bg-purple-100 text-purple-800',
  'Database Technologies': 'bg-blue-100 text-blue-800',
  'Emerging Technologies': 'bg-fuchsia-100 text-fuchsia-800',
  'Full Stack Programs': 'bg-cyan-100 text-cyan-800',
  'Business Analysis': 'bg-green-100 text-green-800',
};

const levelColors: Record<string, string> = {
  'Beginner': 'bg-green-100 text-green-700',
  'Intermediate': 'bg-amber-100 text-amber-700',
  'Advanced': 'bg-rose-100 text-rose-700',
};

function getBadge(course: Course): { text: string; style: string } | null {
  if (course.rating >= 4.8 && course.reviewCount >= 80) {
    return { text: 'Popular', style: 'bg-amber-400 text-amber-900' };
  }
  if (course.id >= 90) {
    return { text: 'New', style: 'bg-emerald-400 text-emerald-900' };
  }
  return null;
}

export default function CourseCard({ course }: CourseCardProps) {
  const [saved, setSaved] = useState(false);
  const accent = categoryAccent[course.category] || 'bg-gray-100 text-gray-800';
  const lvlColors = levelColors[course.level] || 'bg-gray-100 text-gray-700';
  const badge = getBadge(course);

  const courseUrl = `/courses/${course.slug}`;

  return (
    <Link
      to={courseUrl}
      className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer block"
    >
      {/* Image Area */}
      <div className="relative h-56 overflow-hidden">
        <OptimizedImage
          src={course.image}
          alt={course.title}
          className="w-full h-56"
          objectFit="cover"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge - top left */}
        <span className={`absolute top-3 left-3 inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${accent}`}>
          {course.category}
        </span>

        {/* Level Badge - top right */}
        <span className={`absolute top-3 right-3 inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${lvlColors}`}>
          {course.level}
        </span>

        {/* Duration & Quick Preview - bottom, visible on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <span className="text-white text-sm font-semibold flex items-center gap-1.5">
              <i className="ri-time-line" />
              {course.duration} Weeks
            </span>
            <span className="text-white/80 text-xs flex items-center gap-1">
              View Details
              <i className="ri-arrow-right-line" />
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Badge row */}
        <div className="flex items-center gap-2 mb-2 min-h-[22px]">
          {badge && (
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${badge.style}`}>
              {badge.text}
            </span>
          )}
        </div>

        <h3 className="text-base md:text-lg font-bold text-foreground-950 mb-2 leading-snug line-clamp-2 group-hover:text-foreground-700 transition-colors">
          {course.title}
        </h3>

        <p className="text-foreground-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1.5">
            <i className="ri-star-fill text-amber-400 text-xs" />
            <span className="text-sm font-semibold text-foreground-900">{course.rating}</span>
            <span className="text-xs text-foreground-400">({course.reviewCount})</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-foreground-400 flex items-center gap-1">
              <i className="ri-time-line text-xs" />
              {course.duration}w
            </span>
            <button
              data-save-btn
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSaved(!saved);
              }}
              className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                saved
                  ? 'bg-rose-50 text-rose-500'
                  : 'text-gray-300 hover:text-rose-400 hover:bg-rose-50'
              }`}
              title={saved ? 'Remove from saved' : 'Save course'}
            >
              <i className={`${saved ? 'ri-heart-fill' : 'ri-heart-line'} text-sm`} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
