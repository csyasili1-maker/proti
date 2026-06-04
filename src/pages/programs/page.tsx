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

export default function ProgramsPage() {
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