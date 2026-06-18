import { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import { Link } from 'react-router-dom';

const BelowFoldHomeSections = lazy(() => import('./components/BelowFoldHomeSections'));

export default function Home() {
  const [loadBelowFold, setLoadBelowFold] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoadBelowFold(true), 120);
    return () => window.clearTimeout(timer);
  }, []);

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

      <Suspense fallback={<div className="min-h-[360px] bg-white" aria-hidden="true" />}>
        {loadBelowFold && <BelowFoldHomeSections />}
      </Suspense>
    </div>
  );
}
