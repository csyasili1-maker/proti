import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import FloatingContactButtons from "./pages/contact/components/FloatingContactButtons";
import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function SitePreloader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const startedAt = Date.now();
    const minDuration = 900;
    let fadeTimer: ReturnType<typeof setTimeout>;
    let removeTimer: ReturnType<typeof setTimeout>;

    const hide = () => {
      const remaining = Math.max(0, minDuration - (Date.now() - startedAt));
      fadeTimer = setTimeout(() => {
        setLeaving(true);
        removeTimer = setTimeout(() => setVisible(false), 420);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide, { once: true });
    }

    return () => {
      window.removeEventListener('load', hide);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`site-preloader ${leaving ? 'site-preloader--leaving' : ''}`}>
      <div className="site-preloader__panel" role="status" aria-live="polite" aria-label="Loading PROITKEYS">
        <img
          src="/images/brand/proitkeys-logo.png"
          alt="PROITKEYS"
          width={112}
          height={112}
          className="site-preloader__logo"
        />
        <div className="site-preloader__bar" aria-hidden="true">
          <span />
        </div>
        <p>Preparing your learning experience</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <ScrollToTop />
        <AppRoutes />
        <FloatingContactButtons />
        <SitePreloader />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
