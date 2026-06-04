import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import CSSHero from './components/CSSHero';
import CSSIntro from './components/CSSIntro';
import CSSCoreServices from './components/CSSCoreServices';
import CSSImpactSection from './components/CSSImpactSection';
import CSSWhoBenefits from './components/CSSWhoBenefits';
import CSSDifferentiator from './components/CSSDifferentiator';
import CSSCta from './components/CSSCta';

export default function CareerSuccessServicesPage() {
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