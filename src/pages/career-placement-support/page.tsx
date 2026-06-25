import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import CPSHero from './components/CPSHero';
import CPSIntro from './components/CPSIntro';
import CPSFramework from './components/CPSFramework';
import CPSWhoBenefits from './components/CPSWhoBenefits';
import CPSDifferentiator from './components/CPSDifferentiator';
import CPSCTA from './components/CPSCTA';
import { useSeo } from '@/hooks/useSeo';
import { useMemo } from 'react';

export default function CareerPlacementSupportPage() {
  const schemas = useMemo(() => [
    {
      '@type': 'Service',
      '@id': 'https://proitkeys.com/career-placement-support/#service',
      'name': 'Tech Career Placement Support',
      'description': 'Dedicated job placement assistance, resume reviews, mock interviews, and career coaching.',
      'provider': {
        '@type': 'Organization',
        'name': 'PROITKEYS',
        'url': 'https://proitkeys.com'
      }
    }
  ], []);

  useSeo({
    title: 'Tech Career Placement Support & Resume Optimization',
    description: 'Get hired faster in tech. PROITKEYS provides placement-focused career support including resume writing, LinkedIn optimization, mock interviews, and strategic job search coaching.',
    keywords: 'placement support, resume optimization, mock interviews, job search coach, tech hiring support, placement help USA',
    canonicalUrl: 'https://proitkeys.com/career-placement-support',
    schemas
  });
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <CPSHero />
      <CPSIntro />
      <CPSFramework />
      <CPSWhoBenefits />
      <CPSDifferentiator />
      <CPSCTA />
      <Footer />
    </div>
  );
}