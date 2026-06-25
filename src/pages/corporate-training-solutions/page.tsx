import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import CTSHero from './components/CTSHero';
import CTSIntro from './components/CTSIntro';
import CTSAuthority from './components/CTSAuthority';
import CTSTrainingAreas from './components/CTSTrainingAreas';
import CTSCustomization from './components/CTSCustomization';
import CTSDeliveryModels from './components/CTSDeliveryModels';
import CTSBusinessOutcomes from './components/CTSBusinessOutcomes';
import CTSWhoSupport from './components/CTSWhoSupport';
import CTSTrust from './components/CTSTrust';
import CTSCta from './components/CTSCta';
import { useSeo } from '@/hooks/useSeo';
import { useMemo } from 'react';

export default function CorporateTrainingSolutionsPage() {
  const schemas = useMemo(() => [
    {
      '@type': 'Service',
      '@id': 'https://proitkeys.com/corporate-training-solutions/#service',
      'name': 'Corporate Training Solutions',
      'description': 'Tailored training programs, virtual labs, and instructor-led workshops for enterprise teams.',
      'provider': {
        '@type': 'Organization',
        'name': 'PROITKEYS',
        'url': 'https://proitkeys.com'
      }
    }
  ], []);

  useSeo({
    title: 'Corporate Training Solutions & Workforce Upskilling',
    description: 'Scale your team\'s technical capabilities with customized corporate training solutions from PROITKEYS. Hands-on labs, custom curricula, and expert trainers in Cloud, DevOps, QA, and Data Engineering.',
    keywords: 'corporate training solutions, workforce upskilling, corporate IT workshops, tech team training, corporate tech bootcamps',
    canonicalUrl: 'https://proitkeys.com/corporate-training-solutions',
    schemas
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <CTSHero />
      <CTSIntro />
      <CTSAuthority />
      <CTSTrainingAreas />
      <CTSCustomization />
      <CTSDeliveryModels />
      <CTSBusinessOutcomes />
      <CTSWhoSupport />
      <CTSTrust />
      <CTSCta />
      <Footer />
    </div>
  );
}