import { Link } from 'react-router-dom';

export default function PlacementSupportBanner() {
  return (
    <div className="w-full bg-background-50">
      <div className="px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto py-10">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 hover:border-gray-200 transition-colors duration-300">
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center flex-shrink-0">
            <i className="ri-briefcase-4-line text-amber-600 text-2xl" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground-950 mb-2">
              Every Course Includes Career Placement Support
            </h3>
            <p className="text-foreground-500 text-sm leading-relaxed mb-3">
              All programs come with structured career services: resume building, interview prep, LinkedIn optimization, and job search strategy to help you land your next role.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Resume Assistance', icon: 'ri-file-text-line' },
                { label: 'Interview Preparation', icon: 'ri-mic-line' },
                { label: 'LinkedIn Guidance', icon: 'ri-linkedin-line' },
                { label: 'Job Search Strategy', icon: 'ri-search-eye-line' },
              ].map((item) => (
                <span key={item.label} className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground-600 bg-background-50 rounded-full px-3 py-1.5">
                  <i className={`${item.icon} text-amber-500 text-sm`} />
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/career-placement-support"
            className="inline-flex items-center gap-2 bg-foreground-950 hover:bg-foreground-800 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 hover:scale-105"
          >
            Learn More
            <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>
    </div>
  );
}