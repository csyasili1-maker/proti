import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import CPSHero from './components/CPSHero';
import CPSIntro from './components/CPSIntro';
import CPSFramework from './components/CPSFramework';
import CPSWhoBenefits from './components/CPSWhoBenefits';
import CPSDifferentiator from './components/CPSDifferentiator';
import CPSCTA from './components/CPSCTA';

export default function CareerPlacementSupportPage() {
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