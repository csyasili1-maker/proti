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

export default function CorporateTrainingSolutionsPage() {
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