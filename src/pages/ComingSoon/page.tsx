import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const pageInfo: Record<string, { title: string; icon: string; description: string }> = {
  '/courses': {
    title: 'Courses',
    icon: 'ri-book-open-line',
    description: 'Our expert-led training programs are being carefully curated. Soon you\'ll find detailed course listings across Salesforce, Data Engineering, Cybersecurity, AI, SAP, and more.',
  },
  '/services': {
    title: 'Services',
    icon: 'ri-service-line',
    description: 'From industry-oriented training to placement assistance, our complete career development services are being documented. Stay tuned for the full service portfolio.',
  },
  '/about': {
    title: 'About Us',
    icon: 'ri-building-line',
    description: 'The PROITKEYS story — our mission, team, and commitment to transforming careers through practical tech education — is coming together beautifully.',
  },
  '/blog': {
    title: 'Blog',
    icon: 'ri-article-line',
    description: 'Insights, tutorials, industry trends, and career tips from our expert trainers are being written. A knowledge hub for aspiring tech professionals.',
  },
  '/contact': {
    title: 'Contact Us',
    icon: 'ri-customer-service-2-line',
    description: 'Our comprehensive contact and support page is being finalized. In the meantime, reach us at proitkeys@gmail.com, +1 (531) 395 4129, or +91 94928 76779.',
  },
};

export default function ComingSoon() {
  const location = useLocation();
  const info = pageInfo[location.pathname] || {
    title: 'Page',
    icon: 'ri-tools-line',
    description: 'Our team is hard at work building this page. Check back soon!',
  };

  return (
    <div className="min-h-screen bg-light flex flex-col">
      {/* Minimal Top Bar */}
      <header className="w-full px-6 lg:px-10 py-5 bg-white/80 backdrop-blur-sm">
        <Link to="/" className="flex items-center gap-2 w-fit">
          <div className="w-9 h-9 rounded-lg bg-brand flex items-center justify-center">
            <i className="ri-key-2-line text-white text-lg" />
          </div>
          <span className="text-xl font-bold font-display tracking-tight text-dark">
            PROIT<span className="text-brand">KEYS</span>
          </span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="text-center max-w-lg mx-auto">
          {/* Icon */}
          <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-brand/10 flex items-center justify-center">
            <i className={`${info.icon} text-brand text-4xl`} />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <i className="ri-time-line" />
            <span>Coming Soon</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold font-display text-dark mb-5">
            {info.title}
          </h1>

          {/* Description */}
          <p className="text-dark/50 text-base leading-relaxed mb-8">
            {info.description}
          </p>

          {/* Team Message */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    style={{
                      backgroundColor: i === 1 ? '#BD2928' : i === 2 ? '#0D9488' : '#1F2937',
                    }}
                  >
                    {i === 1 ? 'A' : i === 2 ? 'R' : 'V'}
                  </div>
                ))}
              </div>
              <span className="text-sm font-semibold text-dark">PROITKEYS Team</span>
            </div>
            <p className="text-dark/50 text-sm leading-relaxed">
              Our team is actively working on this page. We're putting together something amazing for you — stay tuned for the launch!
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors whitespace-nowrap w-full sm:w-auto"
            >
              <i className="ri-arrow-left-line mr-2" />
              Back to Home
            </Link>
            <a
              href="mailto:proitkeys@gmail.com"
              className="border border-gray-200 hover:border-brand bg-white text-dark/80 hover:text-brand px-8 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap w-full sm:w-auto"
            >
              <i className="ri-mail-line mr-2" />
              Contact Team
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 py-6 text-center border-t border-gray-100">
        <p className="text-dark/30 text-xs">
          &copy; 2026 PROITKEYS. All Rights Reserved. | United States
        </p>
      </footer>
    </div>
  );
}
