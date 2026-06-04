import { generateJobRoles, generateHiringCompanies } from '@/utils/courseDetailUtils';
import type { Course } from '@/mocks/coursesData';

interface CourseJobsProps {
  course: Course;
}

const companyLogoFiles: Record<string, string> = {
  Amazon: 'amazon.svg',
  Accenture: 'accenture.svg',
  Cognizant: 'cognizant.svg',
  Capgemini: 'capgemini.svg',
  Infosys: 'infosys.svg',
  TCS: 'tcs.svg',
  Deloitte: 'deloitte.svg',
  Wipro: 'wipro.svg',
  HCL: 'hcl.svg',
  'Tech Mahindra': 'tech-mahindra.svg',
  LTIMindtree: 'ltimindtree.svg',
  Mphasis: 'mphasis.svg',
  'Publicis Sapient': 'publicis-sapient.svg',
  'Persistent Systems': 'persistent-systems.svg',
  LTI: 'lti.svg',
};

function getLogoSrc(company: string) {
  const file = companyLogoFiles[company];
  return file ? `/images/company-logos/${file}` : '';
}

export default function CourseJobs({ course }: CourseJobsProps) {
  const roles = generateJobRoles(course);
  const hiringCompanies = generateHiringCompanies(course);
  const scrollingCompanies = [...hiringCompanies, ...hiringCompanies];

  return (
    <section id="career" className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Career Outcomes</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3">
            Job Roles <span className="text-brand">After Completion</span>
          </h2>
          <p className="text-dark/50 text-base mt-4 max-w-2xl mx-auto">
            Our graduates are hired into these roles across top companies in the United States and globally.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {roles.map((role, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 text-center border border-gray-100 hover:border-brand/20 transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-3">
                <i className="ri-briefcase-4-line text-brand text-lg" />
              </div>
              <span className="text-dark/80 text-sm font-medium leading-snug">{role}</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
          <h3 className="text-lg font-bold font-display text-dark mb-5 text-center">
            Companies That Hire {course.category} Professionals
          </h3>
          <div className="company-logo-marquee" aria-label={`Companies that hire ${course.category} professionals`}>
            <div className="company-logo-track">
              {scrollingCompanies.map((company, index) => {
                const logoSrc = getLogoSrc(company);
                return (
                  <div
                    key={`${company}-${index}`}
                    className="company-logo-tile"
                    aria-hidden={index >= hiringCompanies.length}
                  >
                    <img
                      src={logoSrc}
                      alt={`${company} logo`}
                      className="company-logo-img"
                      loading="eager"
                      decoding="async"
                      draggable={false}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <p className="text-center text-dark/40 text-xs mt-4">
            and hundreds of fast-growing startups
          </p>
        </div>
      </div>
    </section>
  );
}
