import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Only use white logo on the Courses page
  const isCoursesPage = location.pathname === '/courses';
  const useWhiteLogo = isCoursesPage && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Programs', href: '/programs' },
    { label: 'Courses', href: '/courses' },
    { label: 'Services', href: '/services', isDropdown: true },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : isCoursesPage
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="w-full px-6 lg:px-10">
        <nav className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/images/brand/proitkeys-logo.png"
              alt="PROITKEYS"
              width={96}
              height={96}
              loading="eager"
              fetchPriority="high"
              className={`h-20 w-auto object-contain transition-all duration-300 ${useWhiteLogo ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isDropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`flex items-center gap-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                      scrolled || !isCoursesPage
                        ? 'text-dark/80 hover:text-brand'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <i className={`ri-arrow-down-s-line text-xs transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {servicesOpen && (
                    <div className="absolute top-full mt-2 left-0 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[240px] z-50">
                      <Link
                        to="/career-success-services"
                        onClick={() => setServicesOpen(false)}
                        className="block px-5 py-3 text-sm text-dark/70 hover:text-brand hover:bg-brand/5 transition-colors whitespace-nowrap"
                      >
                        <div className="flex items-center gap-2">
                          <i className="ri-briefcase-line text-brand" />
                          <span>Career Success Services</span>
                        </div>
                      </Link>
                      <Link
                        to="/career-placement-support"
                        onClick={() => setServicesOpen(false)}
                        className="block px-5 py-3 text-sm text-dark/70 hover:text-brand hover:bg-brand/5 transition-colors whitespace-nowrap"
                      >
                        <div className="flex items-center gap-2">
                          <i className="ri-user-star-line text-brand" />
                          <span>Career Placement Support</span>
                        </div>
                      </Link>
                      <Link
                        to="/corporate-training-solutions"
                        onClick={() => setServicesOpen(false)}
                        className="block px-5 py-3 text-sm text-dark/70 hover:text-brand hover:bg-brand/5 transition-colors whitespace-nowrap"
                      >
                        <div className="flex items-center gap-2">
                          <i className="ri-building-4-line text-brand" />
                          <span>Corporate Training Solutions</span>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-colors whitespace-nowrap ${
                    scrolled || !isCoursesPage
                      ? 'text-dark/80 hover:text-brand'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${scrolled || !isCoursesPage ? 'bg-light hover:bg-gray-200' : 'bg-white/15 hover:bg-white/25 backdrop-blur-sm'}`}>
              <i className={`ri-search-line ${scrolled || !isCoursesPage ? 'text-dark/70' : 'text-white/90'}`} />
            </button>
            <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${scrolled || !isCoursesPage ? 'bg-light hover:bg-gray-200' : 'bg-white/15 hover:bg-white/25 backdrop-blur-sm'}`}>
              <i className={`ri-notification-3-line ${scrolled || !isCoursesPage ? 'text-dark/70' : 'text-white/90'}`} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className={`ri-${mobileOpen ? 'close-line' : 'menu-line'} text-2xl text-dark`} />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) =>
              link.isDropdown ? (
                <div key={link.label} className="flex flex-col">
                  <span className="text-dark/40 text-xs font-semibold uppercase tracking-wider px-4 py-2">
                    Services
                  </span>
                  <Link
                    to="/career-success-services"
                    className="text-dark/70 hover:text-brand font-medium text-base py-3 px-4 rounded-xl hover:bg-brand/5 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <i className="ri-briefcase-line text-brand text-base" />
                      <span>Career Success Services</span>
                    </div>
                  </Link>
                  <Link
                    to="/career-placement-support"
                    className="text-dark/70 hover:text-brand font-medium text-base py-3 px-4 rounded-xl hover:bg-brand/5 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <i className="ri-user-star-line text-brand text-base" />
                      <span>Career Placement Support</span>
                    </div>
                  </Link>
                  <Link
                    to="/corporate-training-solutions"
                    className="text-dark/70 hover:text-brand font-medium text-base py-3 px-4 rounded-xl hover:bg-brand/5 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <i className="ri-building-4-line text-brand text-base" />
                      <span>Corporate Training Solutions</span>
                    </div>
                  </Link>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-dark/80 hover:text-brand font-semibold text-base py-3 px-4 rounded-xl hover:bg-brand/5 transition-colors flex items-center gap-3"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
