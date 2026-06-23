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



      <Suspense fallback={<div className="min-h-[360px] bg-white" aria-hidden="true" />}>
        {loadBelowFold && <BelowFoldHomeSections />}
      </Suspense>
    </div>
  );
}
