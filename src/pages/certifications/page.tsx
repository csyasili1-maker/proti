import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import OptimizedImage from '@/components/base/OptimizedImage';
import { useEffect } from 'react';

const certificationBenefits = [
  'Validate your technical and professional skills',
  'Increase your earning potential',
  'Improve career growth opportunities',
  'Gain industry recognition',
  'Strengthen your professional credibility',
  'Stay competitive in the evolving technology landscape',
  'Demonstrate expertise to employers worldwide',
];

const assistanceServices = [
  {
    title: 'Certification Roadmap Planning',
    description: 'Identify the right certification path based on your experience, skills, and career objectives.',
    icon: 'ri-route-line',
  },
  {
    title: 'Certification Training',
    description: 'Instructor-led training programs aligned with current certification objectives.',
    icon: 'ri-presentation-line',
  },
  {
    title: 'Exam Preparation',
    description: 'Mock tests, practice questions, assessments, and exam readiness guidance.',
    icon: 'ri-file-list-3-line',
  },
  {
    title: 'Registration Assistance',
    description: 'Guidance on certification requirements and exam registration processes.',
    icon: 'ri-calendar-check-line',
  },
  {
    title: 'Resume & LinkedIn Optimization',
    description: 'Professional branding support to showcase your certifications effectively.',
    icon: 'ri-profile-line',
  },
  {
    title: 'Interview Preparation',
    description: 'Technical and behavioral interview coaching aligned with certification domains.',
    icon: 'ri-question-answer-line',
  },
];

const certificationGroups = [
  {
    title: 'Microsoft Certifications',
    icon: 'ri-microsoft-line',
    items: [
      'Azure Fundamentals (AZ-900)',
      'Azure Administrator (AZ-104)',
      'Azure Developer (AZ-204)',
      'Azure Solutions Architect (AZ-305)',
      'Azure Security Engineer (AZ-500)',
      'Azure Data Engineer (DP-203)',
      'Power BI Data Analyst (PL-300)',
      'Microsoft 365 Certifications',
      'Dynamics 365 Certifications',
      'AI & Data Certifications',
    ],
  },
  {
    title: 'AWS Certifications',
    icon: 'ri-cloud-line',
    items: [
      'AWS Certified Cloud Practitioner',
      'AWS Solutions Architect Associate',
      'AWS Solutions Architect Professional',
      'AWS Developer Associate',
      'AWS SysOps Administrator',
      'AWS DevOps Engineer Professional',
      'AWS Security Specialty',
      'AWS Data Engineer',
      'AWS Machine Learning Specialty',
    ],
  },
  {
    title: 'PMI Certifications',
    icon: 'ri-briefcase-4-line',
    items: ['PMP', 'CAPM', 'PMI-ACP', 'PMI-PBA', 'PgMP', 'PfMP'],
  },
  {
    title: 'Networking Certifications',
    icon: 'ri-node-tree',
    items: ['CCNA', 'CCNP', 'Cisco CyberOps', 'Cisco Security', 'CompTIA Network+', 'CompTIA Security+', 'Juniper Certifications'],
  },
  {
    title: 'Cybersecurity Certifications',
    icon: 'ri-shield-check-line',
    items: ['CEH', 'CISSP', 'Security+', 'Cloud Security Certifications', 'Security Operations Certifications'],
  },
  {
    title: 'Pearson VUE Certifications',
    icon: 'ri-global-line',
    items: ['Microsoft', 'AWS', 'Cisco', 'Oracle', 'VMware', 'Salesforce', 'Red Hat', 'PMI', 'ISC2', 'CompTIA', 'And many more'],
  },
  {
    title: 'Python Certifications',
    icon: 'ri-code-s-slash-line',
    items: ['PCEP', 'PCAP', 'PCPP'],
  },
  {
    title: 'Software Testing Certifications',
    icon: 'ri-bug-line',
    items: ['ISTQB Foundation', 'ISTQB Advanced', 'TOSCA Certifications', 'Automation Testing Certifications'],
  },
  {
    title: 'Business Analysis Certifications',
    icon: 'ri-bar-chart-box-line',
    items: ['ECBA', 'CCBA', 'CBAP', 'PMI-PBA'],
  },
  {
    title: 'Artificial Intelligence Certifications',
    icon: 'ri-brain-line',
    items: ['AI Engineering', 'Machine Learning', 'Generative AI', 'Agentic AI', 'Data Science'],
  },
];

const trainingPrograms = [
  'QA Testing',
  'BA cum PMP',
  'Tosca',
  'Full Stack Java',
  'Full Stack Web Development',
  'AI Engineering',
  'Data Engineering',
  'Azure Data Engineering',
  'DevOps on AWS',
  'DevOps on Azure',
  'Cybersecurity',
  'Data Analyst',
  'Data Science with Python',
  'Power BI',
  'Tableau',
  'Generative AI & Agentic AI',
];

const whyProitkeys = [
  {
    title: 'Industry Expert Trainers',
    description: 'Learn from professionals with real-world experience.',
    icon: 'ri-user-star-line',
  },
  {
    title: 'Hands-On Learning',
    description: 'Projects, labs, case studies, and practical assignments.',
    icon: 'ri-tools-line',
  },
  {
    title: 'Flexible Online Training',
    description: 'Weekend and weekday schedules available.',
    icon: 'ri-time-line',
  },
  {
    title: 'Career-Focused Approach',
    description: 'Training designed to support certification success and career growth.',
    icon: 'ri-focus-3-line',
  },
  {
    title: 'End-to-End Support',
    description: 'From learning to certification preparation and job readiness.',
    icon: 'ri-hand-heart-line',
  },
];

export default function CertificationsPage() {
  useEffect(() => {
    document.title = 'Authorized Certification Assistance | Microsoft, AWS, PMI, CCNA, Python & Cybersecurity Certifications | PROITKEYS';

    let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Get expert certification training and exam preparation for Microsoft Azure, AWS, PMI, CCNA, Cybersecurity, Python, ISTQB, TOSCA, Data Engineering, AI, DevOps, Power BI, Tableau, and more.';
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-dark pt-36 md:pt-40 pb-20 md:pb-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,25,25,0.35),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(13,148,136,0.18),transparent_28%)]" />
          <div className="relative w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <i className="ri-award-line text-brand" />
                  Authorized Certification Assistance & Exam Preparation Services
                </div>
                <h1 className="text-4xl md:text-6xl font-bold font-display text-white leading-tight mb-6">
                  Advance Your Career with Globally Recognized Certifications
                </h1>
                <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mb-8">
                  PROITKEYS provides professional certification training, exam preparation, certification guidance, and career support for leading technology and professional certifications.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/15313954129"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white px-7 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
                  >
                    <i className="ri-whatsapp-line" />
                    Start Certification Guidance
                  </a>
                  <a
                    href="tel:+15313954129"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white px-7 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
                  >
                    <i className="ri-phone-line" />
                    Call (531) 395 4129
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative">
                  <OptimizedImage
                    src="/images/courses/course-catalog-hero.jpg"
                    alt="Professional learners preparing for technology certification exams"
                    className="aspect-[4/3] shadow-2xl"
                    priority
                    rounded
                  />
                  <div className="absolute left-4 right-4 bottom-4 rounded-2xl bg-white/95 backdrop-blur-sm p-4 shadow-lg">
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <p className="text-lg font-bold text-brand">10+</p>
                        <p className="text-[11px] font-medium text-dark/55">Tracks</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-brand">50+</p>
                        <p className="text-[11px] font-medium text-dark/55">Cert Paths</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-brand">1:1</p>
                        <p className="text-[11px] font-medium text-dark/55">Guidance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-light">
          <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4">
                <span className="text-sm font-semibold text-brand uppercase tracking-wider">Why Certifications Matter</span>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3">
                  Why Earn Professional Certifications?
                </h2>
                <p className="text-dark/55 text-base leading-relaxed mt-4">
                  Certifications help learners prove capability, build credibility, and compete with confidence in a fast-moving technology market.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificationBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 bg-white border border-gray-100 rounded-2xl p-5">
                    <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <i className="ri-check-line text-brand" />
                    </div>
                    <p className="text-sm font-medium text-dark/75 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-white">
          <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold text-brand uppercase tracking-wider">Our Certification Services</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3">
                End-to-End Certification Assistance
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {assistanceServices.map((service) => (
                <div key={service.title} className="bg-light border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-5">
                    <i className={`${service.icon} text-brand text-xl`} />
                  </div>
                  <h3 className="text-lg font-bold font-display text-dark mb-2">{service.title}</h3>
                  <p className="text-dark/55 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-light">
          <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="text-sm font-semibold text-brand uppercase tracking-wider">Certifications We Support</span>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3">
                  Preparation Across Leading Certification Tracks
                </h2>
              </div>
              <p className="text-dark/55 text-sm leading-relaxed max-w-md">
                Broad support across cloud, project management, networking, cybersecurity, Python, testing, business analysis, AI, and Pearson VUE-aligned certifications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {certificationGroups.map((group) => (
                <div key={group.title} className="bg-white border border-gray-100 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center">
                      <i className={`${group.icon} text-brand text-lg`} />
                    </div>
                    <h3 className="text-lg font-bold font-display text-dark">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="inline-flex rounded-full bg-light border border-gray-100 px-3 py-1.5 text-xs font-medium text-dark/65">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-white">
          <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <span className="text-sm font-semibold text-brand uppercase tracking-wider">Training Programs</span>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3">
                  Certification-Oriented Training Programs
                </h2>
                <p className="text-dark/55 text-base leading-relaxed mt-4">
                  Structured programs designed to combine exam readiness with practical, job-focused skill development.
                </p>
                <OptimizedImage
                  src="/images/courses/aws-certified-developer-associate.jpg"
                  alt="Cloud certification training session with hands-on lab practice"
                  className="mt-8 aspect-[16/10] shadow-lg"
                  priority
                  rounded
                />
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trainingPrograms.map((program) => (
                  <div key={program} className="flex items-center gap-3 bg-light rounded-xl border border-gray-100 px-4 py-3">
                    <i className="ri-book-open-line text-brand" />
                    <span className="text-sm font-semibold text-dark/75">{program}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-light">
          <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold text-brand uppercase tracking-wider">Why PROITKEYS</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3">
                Built for Certification Success and Career Growth
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {whyProitkeys.map((item) => (
                <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                    <i className={`${item.icon} text-brand text-lg`} />
                  </div>
                  <h3 className="font-bold font-display text-dark text-base mb-2">{item.title}</h3>
                  <p className="text-dark/55 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-dark">
          <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-semibold text-brand uppercase tracking-wider">Ready to Get Certified?</span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-white mt-3 mb-5">
                Start Your Certification Journey With PROITKEYS
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-8">
                Whether you are pursuing Microsoft, AWS, PMI, Networking, Cybersecurity, Python, Business Analysis, DevOps, Data Engineering, AI, or Software Testing certifications, our advisors are here to support your next step.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href="tel:+15313954129"
                  className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  <i className="ri-phone-line" />
                  Call (531) 395 4129
                </a>
                <a
                  href="https://wa.me/15313954129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  <i className="ri-whatsapp-line" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-10 bg-white">
          <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
            <div className="bg-light border border-gray-100 rounded-2xl p-6 md:p-8">
              <h2 className="text-lg font-bold font-display text-dark mb-3">Disclaimer</h2>
              <div className="space-y-3 text-xs md:text-sm text-dark/55 leading-relaxed">
                <p>
                  PROITKEYS is an independent training and consulting organization that provides certification training, exam preparation assistance, mentoring, and career support services.
                </p>
                <p>
                  PROITKEYS is not affiliated with, endorsed by, sponsored by, or authorized by Microsoft Corporation, Amazon Web Services (AWS), Pearson VUE, Project Management Institute (PMI), Cisco Systems, CompTIA, ISC2, Oracle, Salesforce, VMware, Red Hat, Python Institute, IIBA, Scrum Alliance, or any other certification provider unless explicitly stated.
                </p>
                <p>
                  All trademarks, logos, certification names, and product names are the property of their respective owners. Certification examinations and credentials are administered solely by the respective certification organizations. PROITKEYS does not issue third-party certifications and does not guarantee certification success, employment, salary increases, or career outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
