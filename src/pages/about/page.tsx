import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import AboutHero from './components/AboutHero';
import AboutWhoWeAre from './components/AboutWhoWeAre';
import AboutMissionVision from './components/AboutMissionVision';
import AboutDifferentiators from './components/AboutDifferentiators';
import AboutPhilosophy from './components/AboutPhilosophy';
import AboutPrograms from './components/AboutPrograms';
import AboutCTA from './components/AboutCTA';
import { useSeo } from '@/hooks/useSeo';
import { useMemo } from 'react';

export default function AboutPage() {
  const schemas = useMemo(() => [
    {
      '@type': 'AboutPage',
      '@id': 'https://proitkeys.com/about/#webpage',
      'name': 'About Us — PROITKEYS',
      'description': 'Learn about our mission, vision, philosophy, and tech career training programs.',
      'publisher': {
        '@type': 'Organization',
        'name': 'PROITKEYS',
        'url': 'https://proitkeys.com'
      }
    }
  ], []);

  useSeo({
    title: 'About Us — Career Growth Partner in Tech',
    description: 'Learn about PROITKEYS\' mission to bridge the gap between classroom learning and real-world tech careers with industry expert trainers and dedicated support.',
    keywords: 'about PROITKEYS, IT training mission, expert tech instructors, online career bootcamp history, career placement helper USA',
    canonicalUrl: 'https://proitkeys.com/about',
    schemas
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <AboutWhoWeAre />
      <AboutMissionVision />
      <AboutDifferentiators />
      <AboutPhilosophy />
      <AboutPrograms />
      <AboutCTA />
      <Footer />
    </div>
  );
}