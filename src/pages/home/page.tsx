import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedCourses from './components/FeaturedCourses';
import CTABanners from './components/CTABanners';
import PricingPlans from './components/PricingPlans';
import AboutTeaching from './components/AboutTeaching';
import Partners from './components/Partners';
import CareerSuccessFramework from './components/CareerSuccessFramework';
import WhyChooseUs from './components/WhyChooseUs';
import Instructors from './components/Instructors';
import CTAAffordable from './components/CTAAffordable';
import BecomeInstructor from './components/BecomeInstructor';
import Testimonials from './components/Testimonials';
import EnquiryForm from './components/EnquiryForm';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <HeroSection />

      {/* Corporate Training Trust Banner */}
      <div className="w-full bg-dark">
        <div className="px-6 lg:px-10 max-w-[1440px] mx-auto py-3 flex items-center justify-center gap-3">
          <i className="ri-building-4-line text-brand text-sm" />
          <span className="text-white/80 text-xs md:text-sm font-medium">Trusted Corporate Training Partner</span>
          <Link
            to="/corporate-training-solutions"
            className="text-brand hover:text-brand/80 text-xs md:text-sm font-semibold hover:underline transition-all whitespace-nowrap"
          >
            Explore Solutions
            <i className="ri-arrow-right-line ml-1 text-xs" />
          </Link>
        </div>
      </div>

      <FeaturedCourses />
      <CTABanners />
      <PricingPlans />
      <AboutTeaching />
      <Partners />
      <CareerSuccessFramework />
      <WhyChooseUs />
      <Instructors />
      <CTAAffordable />
      <BecomeInstructor />
      <Testimonials />
      <EnquiryForm />
      <AppDownload />
      <Footer />
    </div>
  );
}