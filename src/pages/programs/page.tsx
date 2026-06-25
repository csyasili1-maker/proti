import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import ProgramHero from './components/ProgramHero';
import ProgramIntro from './components/ProgramIntro';
import ProgramAuthority from './components/ProgramAuthority';
import ProgramCategories from './components/ProgramCategories';
import ProgramDifferentiator from './components/ProgramDifferentiator';
import ProgramDecisionStage from './components/ProgramDecisionStage';
import ProgramTrust from './components/ProgramTrust';
import ProgramCTA from './components/ProgramCTA';
import { useSeo } from '@/hooks/useSeo';
import { useMemo } from 'react';

export default function ProgramsPage() {
  const schemas = useMemo(() => [
    {
      '@type': 'ItemList',
      '@id': 'https://proitkeys.com/programs/#itemlist',
      'name': 'PROITKEYS Training Programs',
      'description': 'Catalog of career-oriented live technical training bootcamps.',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Software Testing & QA Engineering Bootcamp',
          'url': 'https://proitkeys.com/qa-testing'
        }
      ]
    }
  ], []);

  useSeo({
    title: 'Comprehensive Tech Training Programs & Bootcamps',
    description: 'Explore PROITKEYS\' catalog of live instructor-led bootcamps. Build high-demand skills in QA Engineering, DevOps, Cloud Computing, and Software Testing.',
    keywords: 'tech training programs, coding bootcamps, online IT courses, software testing training, learn devops online',
    canonicalUrl: 'https://proitkeys.com/programs',
    schemas
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <ProgramHero />
      <ProgramIntro />
      <ProgramAuthority />
      <ProgramCategories />
      <ProgramDifferentiator />
      <ProgramDecisionStage />
      <ProgramTrust />
      <ProgramCTA />
      <Footer />
    </div>
  );
}