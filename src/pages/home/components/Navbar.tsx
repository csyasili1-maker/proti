import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    { label: 'Certifications', href: '/certifications' },
    { label: 'Services', href: '/services', isDropdown: true },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const contactItems = [
    {
      label: '+1 (531) 395 4129',
      href: 'tel:+15313954129',
      icon: 'ri-phone-line',
    },
    {
      label: 'proitkeys@gmail.com',
      href: 'mailto:proitkeys@gmail.com',
      icon: 'ri-mail-line',
    },
    {
      label: 'United States',
      icon: 'ri-map-pin-line',
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#c81919] text-white transition-all duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="w-full px-6 lg:px-10">
        <div className="hidden md:flex items-center justify-between h-8 border-b border-white/15">
          <div className="flex items-center gap-5 min-w-0">
            {contactItems.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white/85 transition-colors hover:text-white whitespace-nowrap"
                >
                  <i className={`${item.icon} text-sm`} />
                  <span>{item.label}</span>
                </a>
              ) : (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white/85 whitespace-nowrap"
                >
                  <i className={`${item.icon} text-sm`} />
                  <span>{item.label}</span>
                </div>
              )
            )}
          </div>

          <a
            href="https://wa.me/15313954129"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white transition-colors hover:text-white/80 whitespace-nowrap"
          >
            <i className="ri-whatsapp-line text-sm" />
            WhatsApp Support
          </a>
        </div>

        <nav className="flex items-center justify-between h-20 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/images/brand/proitkeys-logo.png"
              alt="PROITKEYS"
              width={96}
              height={96}
              loading="eager"
              fetchPriority="high"
              className="h-16 md:h-14 w-auto object-contain brightness-0 invert transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isDropdown ? (
                <div key={link.label} className="group relative" ref={dropdownRef}>
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    onMouseDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation();
                      setServicesOpen((open) => !open);
                    }}
                    className="flex items-center gap-1.5 text-sm font-medium text-white/90 transition-colors hover:text-white whitespace-nowrap"
                  >
                    {link.label}
                    <i className={`ri-arrow-down-s-line text-xs transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div
                    className={`absolute top-full mt-2 left-0 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[240px] z-50 ${
                      servicesOpen ? 'block' : 'hidden'
                    } group-hover:block group-focus-within:block`}
                  >
                    <Link
                      to="/services"
                      onClick={() => setServicesOpen(false)}
                      className="block px-5 py-3 text-sm text-dark/70 hover:text-brand hover:bg-brand/5 transition-colors whitespace-nowrap"
                    >
                      <div className="flex items-center gap-2">
                        <i className="ri-service-line text-brand" />
                        <span>All Services</span>
                      </div>
                    </Link>
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
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-white/90 transition-colors hover:text-white whitespace-nowrap"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              aria-label="Search"
              className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm transition-colors hover:bg-white/25"
            >
              <i className="ri-search-line text-white/90" />
            </button>
            <button
              type="button"
              aria-label="Notifications"
              className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm transition-colors hover:bg-white/25"
            >
              <i className="ri-notification-3-line text-white/90" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className={`ri-${mobileOpen ? 'close-line' : 'menu-line'} text-2xl text-white`} />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6">
          <div className="grid gap-2 mb-5 pb-5 border-b border-gray-100">
            {contactItems.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 text-dark/70 hover:text-brand font-medium text-sm py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <i className={`${item.icon} text-brand text-base`} />
                  <span>{item.label}</span>
                </a>
              ) : (
                <div key={item.label} className="flex items-center gap-3 text-dark/70 font-medium text-sm py-2">
                  <i className={`${item.icon} text-brand text-base`} />
                  <span>{item.label}</span>
                </div>
              )
            )}
          </div>

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
