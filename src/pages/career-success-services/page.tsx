import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import CSSHero from './components/CSSHero';
import CSSIntro from './components/CSSIntro';
import CSSCoreServices from './components/CSSCoreServices';
import CSSImpactSection from './components/CSSImpactSection';
import CSSWhoBenefits from './components/CSSWhoBenefits';
import CSSDifferentiator from './components/CSSDifferentiator';
import CSSCta from './components/CSSCta';
import { useSeo } from '@/hooks/useSeo';
import { useMemo } from 'react';

export default function CareerSuccessServicesPage() {
  const schemas = useMemo(() => [
    {
      '@type': 'Service',
      '@id': 'https://proitkeys.com/career-success-services/#service',
      'name': 'IT Career Success Framework',
      'description': 'Comprehensive career mentoring, portfolios, and certification preparation.',
      'provider': {
        '@type': 'Organization',
        'name': 'PROITKEYS',
        'url': 'https://proitkeys.com'
      }
    }
  ], []);

  useSeo({
    title: 'IT Career Success Framework & Career Mentoring',
    description: 'Accelerate your professional growth in IT. Our Career Success Services include technical skills development, project portfolios, certification readiness, and structured job-placement strategies.',
    keywords: 'career success framework, IT mentoring program, professional portfolio building, tech career advisor, placement services USA',
    canonicalUrl: 'https://proitkeys.com/career-success-services',
    schemas
  });
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <CSSHero />
      <CSSIntro />
      <CSSCoreServices />
      <CSSImpactSection />
      <CSSWhoBenefits />
      <CSSDifferentiator />
      <CSSCta />
      <Footer />
    </div>
  );
}