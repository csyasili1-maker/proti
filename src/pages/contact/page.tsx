import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import FloatingContactButtons from './components/FloatingContactButtons';
import ContactHero from './components/ContactHero';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import NotSureCTA from './components/NotSureCTA';
import TrustStrip from './components/TrustStrip';
import LocationSupport from './components/LocationSupport';
import PsychologicalCTA from './components/PsychologicalCTA';

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <NotSureCTA />
      <TrustStrip />
      <LocationSupport />
      <PsychologicalCTA />
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}