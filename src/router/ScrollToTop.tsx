import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const SCROLL_STORAGE_KEY = 'proitkeys_scroll_positions';

function getSavedPositions(): Record<string, number> {
  try {
    const raw = sessionStorage.getItem(SCROLL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function savePosition(pathname: string, scrollY: number) {
  try {
    const positions = getSavedPositions();
    positions[pathname] = scrollY;
    sessionStorage.setItem(SCROLL_STORAGE_KEY, JSON.stringify(positions));
  } catch {
    // sessionStorage unavailable, ignore
  }
}

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const pathRef = useRef(pathname);

  useEffect(() => {
    const prevPath = pathRef.current;
    pathRef.current = pathname;

    if (navigationType === 'PUSH' || navigationType === 'REPLACE') {
      savePosition(prevPath, window.scrollY);
      // Defer scroll to ensure new page DOM is painted first
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    } else if (navigationType === 'POP') {
      const saved = getSavedPositions()[pathname];
      if (saved && saved > 0) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            window.scrollTo({ top: saved, behavior: 'auto' as const });
          });
        });
      }
    }
  }, [pathname, navigationType]);

  // Periodically save scroll position for the current page
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          savePosition(pathname, window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return null;
}