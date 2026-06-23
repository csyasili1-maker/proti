import { lazy, Suspense, useEffect, useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import { useSeo } from '@/hooks/useSeo';

const BelowFoldHomeSections = lazy(() => import('./components/BelowFoldHomeSections'));

export default function Home() {
  const [loadBelowFold, setLoadBelowFold] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoadBelowFold(true), 120);
    return () => window.clearTimeout(timer);
  }, []);

  const schemas = useMemo(() => [
    {
      '@type': 'Organization',
      '@id': 'https://proitkeys.com/#organization',
      'name': 'PROITKEYS',
      'url': 'https://proitkeys.com',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://proitkeys.com/favicon.png',
        'caption': 'PROITKEYS'
      },
      'sameAs': [
        'https://linkedin.com/company/proitkeys',
        'https://facebook.com/proitkeys',
        'https://instagram.com/proitkeys',
        'https://youtube.com/@proitkeys3148'
      ],
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'telephone': '+1-531-395-4129',
          'contactType': 'customer support',
          'areaServed': 'US'
        },
        {
          '@type': 'ContactPoint',
          'telephone': '+91-94928-76779',
          'contactType': 'admissions',
          'areaServed': 'IN'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://proitkeys.com/#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Who can enroll in PROITKEYS training programs?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Our programs are designed for students, recent graduates, working professionals, career changers, and IT professionals looking to upgrade their skills in AI, Cloud Computing, Data Science, DevOps, Software Development, Cybersecurity, and Business Intelligence.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Are the classes live or pre-recorded?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'All our programs are delivered through live instructor-led sessions conducted by experienced industry professionals. Recorded sessions may also be provided for revision and self-paced learning.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do I need prior IT experience to join?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Not necessarily. We offer beginner, intermediate, and advanced-level programs. Our advisors can help you choose the right learning path based on your background and career goals.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Will I work on real-time projects?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. Every program includes hands-on labs, assignments, case studies, and industry-relevant projects designed to provide practical experience and help you build a strong portfolio.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you provide certification assistance?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. We provide guidance, study materials, practice tests, and mentorship for leading industry certifications including Microsoft, AWS, Databricks, Salesforce, Kubernetes, Google Cloud, and more.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you offer placement assistance?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. Our career support services include resume building, LinkedIn profile optimization, mock interviews, interview preparation, job search strategies, and placement assistance.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Are the trainers industry experts?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. Our trainers are experienced industry professionals, architects, consultants, and technical leaders who bring real-world expertise and practical insights into every training session.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you provide internship opportunities?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Selected programs include virtual internship opportunities, project-based learning experiences, and internship experience letters to strengthen your professional profile.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What makes PROITKEYS different from other training providers?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'PROITKEYS combines live instructor-led training, real-world projects, industry mentorship, certification guidance, career coaching, and placement-focused support to help learners become job-ready and confident professionals.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you offer corporate training programs?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. We provide customized corporate training solutions for organizations looking to upskill their workforce in AI, Cloud Computing, Data Engineering, DevOps, Software Development, and Data Analytics.'
          }
        }
      ]
    }
  ], []);

  useSeo({
    title: 'PROITKEYS — Industry-Oriented IT Training & Career Development Platform',
    description: 'PROITKEYS offers live instructor-led IT training in AI, Cloud Computing, Data Engineering, DevOps, Java, and Salesforce with real-time projects and placement support.',
    keywords: 'PROITKEYS, IT training, AI training, cloud computing bootcamps, DevOps course, Salesforce training, data engineering training, placement assistance, career development',
    canonicalUrl: 'https://proitkeys.com/',
    schemas
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <HeroSection />



      <Suspense fallback={<div className="min-h-[360px] bg-white" aria-hidden="true" />}>
        {loadBelowFold && <BelowFoldHomeSections />}
      </Suspense>
    </div>
  );
}
