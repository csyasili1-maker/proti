import { Link } from 'react-router-dom';
import { getWhatsAppUrl, indiaPhoneNumber, usPhoneNumber, supportEmail } from '@/config/contact';

export default function Footer() {
  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Services', href: '/services' },
      { label: 'Career Placement', href: '/career-placement-support' },
      { label: 'Corporate Training', href: '/corporate-training-solutions' },
      { label: 'Certifications', href: '/certifications' },
    ],
    programs: [
      { label: 'All Courses', href: '/courses' },
      { label: 'Certification Assistance', href: '/certifications' },
      { label: 'AI Engineering', href: '/courses' },
      { label: 'DevOps & Cloud', href: '/courses' },
      { label: 'Data Science', href: '/courses' },
      { label: 'Cybersecurity', href: '/courses' },
    ],
    support: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Book Consultation', href: getWhatsAppUrl() },
      { label: 'Blog', href: '/blog' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
    ],
  };

  return (
    <footer className="w-full bg-dark text-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[minmax(220px,1.35fr)_minmax(100px,0.7fr)_minmax(130px,0.8fr)_minmax(130px,0.8fr)_minmax(160px,0.95fr)] gap-10 lg:gap-6 xl:gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <img
                src="/images/brand/proitkeys-logo-footer-small.png"
                alt="PROITKEYS"
                width={112}
                height={112}
                loading="lazy"
                className="h-28 w-auto object-contain"
              />
            </div>

            <h4 className="font-bold text-base text-white mb-2">PROITKEYS – Your Career Growth Partner</h4>
            <p className="text-white/50 text-xs leading-relaxed mb-6 max-w-xs">
              From beginner to professional, we provide structured learning paths, expert mentorship, real-world projects, and placement-focused support to help you succeed in today's competitive technology landscape.
            </p>

            <div className="space-y-3 mb-6">
              <a
                href={`tel:${usPhoneNumber.tel}`}
                className="flex items-center gap-3 text-white/50 text-sm hover:text-brand transition-colors"
              >
                <i className="ri-phone-line text-brand" />
                <span>US: {usPhoneNumber.display}</span>
              </a>
              <a
                href={`tel:${indiaPhoneNumber.tel}`}
                className="flex items-center gap-3 text-white/50 text-sm hover:text-brand transition-colors"
              >
                <i className="ri-phone-line text-brand" />
                <span>WhatsApp / Call: {indiaPhoneNumber.display}</span>
              </a>
              <a
                href={`mailto:${supportEmail}`}
                className="flex items-center gap-3 text-white/50 text-sm hover:text-brand transition-colors"
              >
                <i className="ri-mail-line text-brand" />
                <span>{supportEmail}</span>
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbCNshgEquiWToNeUV1f"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 text-sm hover:text-brand transition-colors"
              >
                <i className="ri-whatsapp-line text-brand" />
                <span>WhatsApp Channel</span>
              </a>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <i className="ri-map-pin-line text-brand" />
                <span>United States</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/proitkeys"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-lighter hover:bg-brand flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill text-sm" />
              </a>
              <a
                href="https://facebook.com/proitkeys"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-lighter hover:bg-brand flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-sm" />
              </a>
              <a
                href="https://instagram.com/proitkeys"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-lighter hover:bg-brand flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-sm" />
              </a>
              <a
                href="https://youtube.com/@proitkeys3148"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-lighter hover:bg-brand flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <i className="ri-youtube-fill text-sm" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/50 text-sm hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-sm mb-5">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/50 text-sm hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-sm mb-5">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) =>
                link.href.startsWith('http') ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 text-sm hover:text-brand transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/50 text-sm hover:text-brand transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h4 className="font-semibold text-sm mb-5">Ready to Start?</h4>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Take the first step toward a career in technology. Our advisors are here to guide you.
            </p>
            <a
              href={`tel:${indiaPhoneNumber.tel}`}
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-5 py-3 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
            >
              <i className="ri-phone-line" />
              Call {indiaPhoneNumber.display}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; 2026 PROITKEYS. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
