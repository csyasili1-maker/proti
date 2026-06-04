import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import ServicesHero from './components/ServicesHero';
import ServicesIntro from './components/ServicesIntro';
import CoreServices from './components/CoreServices';
import ImpactSection from './components/ImpactSection';
import WhoBenefits from './components/WhoBenefits';
import Differentiator from './components/Differentiator';
import ServicesCTA from './components/ServicesCTA';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <ServicesHero />
      <ServicesIntro />

      {/* Placement Support Banner */}
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto pb-4">
        <Link
          to="/career-placement-support"
          className="group flex items-center gap-5 bg-brand/5 hover:bg-brand/10 border border-brand/20 rounded-2xl p-5 transition-all duration-300"
        >
          <div className="w-11 h-11 rounded-xl bg-brand flex items-center justify-center flex-shrink-0">
            <i className="ri-briefcase-line text-white text-lg" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-dark text-sm group-hover:text-brand transition-colors">
              Career Placement Support
            </h4>
            <p className="text-dark/50 text-xs mt-0.5">
              Structured career services: resume assistance, interview prep, LinkedIn guidance, and job search strategy.
            </p>
          </div>
          <i className="ri-arrow-right-line text-brand text-lg group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Corporate Training Banner */}
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto pb-8">
        <Link
          to="/corporate-training-solutions"
          className="group flex items-center gap-5 bg-brand/5 hover:bg-brand/10 border border-brand/20 rounded-2xl p-5 transition-all duration-300"
        >
          <div className="w-11 h-11 rounded-xl bg-brand flex items-center justify-center flex-shrink-0">
            <i className="ri-building-4-line text-white text-lg" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-dark text-sm group-hover:text-brand transition-colors">
              Corporate Training Solutions
            </h4>
            <p className="text-dark/50 text-xs mt-0.5">
              Customized enterprise training: Cloud, AI, Data, Cybersecurity, and more — delivered flexibly for teams.
            </p>
          </div>
          <i className="ri-arrow-right-line text-brand text-lg group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <CoreServices />
      <ImpactSection />
      <WhoBenefits />
      <Differentiator />
      <ServicesCTA />
      <Footer />
    </div>
  );
}