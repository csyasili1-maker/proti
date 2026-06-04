import { useState, useEffect } from 'react';

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (docHeight <= 0) {
        setProgress(0);
        return;
      }

      const scrolled = Math.min((scrollTop / docHeight) * 100, 100);
      setProgress(scrolled);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-20 left-0 w-full h-[3px] z-50 pointer-events-none">
      <div
        className="h-full bg-brand transition-[width] duration-150 ease-out rounded-r-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}