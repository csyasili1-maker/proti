import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import AboutHero from './components/AboutHero';
import AboutWhoWeAre from './components/AboutWhoWeAre';
import AboutMissionVision from './components/AboutMissionVision';
import AboutDifferentiators from './components/AboutDifferentiators';
import AboutPhilosophy from './components/AboutPhilosophy';
import AboutPrograms from './components/AboutPrograms';
import AboutCTA from './components/AboutCTA';

export default function AboutPage() {
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