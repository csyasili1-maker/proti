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
import { useSeo } from '@/hooks/useSeo';
import { useMemo } from 'react';

export default function ContactPage() {
  const schemas = useMemo(() => [
    {
      '@type': 'ContactPage',
      '@id': 'https://proitkeys.com/contact/#webpage',
      'name': 'Contact Us — PROITKEYS',
      'description': 'Get in touch with PROITKEYS for training enquiries or booking career consultations.',
      'publisher': {
        '@type': 'Organization',
        'name': 'PROITKEYS',
        'url': 'https://proitkeys.com'
      }
    }
  ], []);

  useSeo({
    title: 'Contact Us — Book a Free Career Consultation',
    description: 'Have questions about our training programs or placement support? Get in touch with our advisors or book a free career consultation today.',
    keywords: 'contact PROITKEYS, IT course support, book career consultation, corporate training enquiry, US IT training phone number',
    canonicalUrl: 'https://proitkeys.com/contact',
    schemas
  });

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