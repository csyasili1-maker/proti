import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import QAHero from './components/QAHero';
import QAOverview from './components/QAOverview';
import QADescription from './components/QADescription';
import QACurriculum from './components/QACurriculum';
import QADurationCapstone from './components/QADurationCapstone';
import QAJobs from './components/QAJobs';
import QASalary from './components/QASalary';
import QAWhyChoose from './components/QAWhyChoose';
import QAFaq from './components/QAFaq';
import QACTA from './components/QACTA';
import { useSeo } from '@/hooks/useSeo';
import { useMemo } from 'react';

export default function QATestingPage() {
  const schemas = useMemo(() => [
    {
      '@type': 'Course',
      '@id': 'https://proitkeys.com/qa-testing/#course',
      'name': 'Software Testing & QA Engineering Bootcamp',
      'description': 'Comprehensive QA training program covering manual testing, Selenium automation testing, API testing, SQL, and Agile methodologies.',
      'provider': {
        '@type': 'Organization',
        'name': 'PROITKEYS',
        'url': 'https://proitkeys.com'
      }
    }
  ], []);

  useSeo({
    title: 'Software Testing & QA Engineering Bootcamp',
    description: 'Master manual and automation testing with our Software Testing & QA Engineering Bootcamp. Live instructor-led sessions, hands-on capstone projects, and direct placement support.',
    keywords: 'software testing bootcamp, QA engineering course, learn automation testing, manual testing classes, selenium QA training',
    canonicalUrl: 'https://proitkeys.com/qa-testing',
    schemas
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <QAHero />
      <QAOverview />
      <QADescription />
      <QACurriculum />
      <QADurationCapstone />
      <QAJobs />
      <QASalary />
      <QAWhyChoose />
      <QAFaq />
      <QACTA />
      <Footer />
    </div>
  );
}