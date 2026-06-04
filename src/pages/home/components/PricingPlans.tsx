import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  accentColor: string;
  accentLight: string;
  accentGlow: string;
  borderColor: string;
  btnBg: string;
  btnHover: string;
  features: string[];
  popular?: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    id: 'professional',
    name: 'Professional Plan',
    price: 99,
    period: '/month',
    description: 'Perfect for beginners starting their IT journey',
    accentColor: '#BD2928',
    accentLight: 'bg-[#BD2928]/10',
    accentGlow: 'shadow-[#BD2928]/20',
    borderColor: 'border-[#BD2928]/30',
    btnBg: 'bg-[#BD2928]',
    btnHover: 'hover:bg-[#a32221]',
    features: [
      'Access to 1 Live Course',
      'Live Instructor-Led Training',
      'Resume & Interview Preparation',
      'Certification Assistance',
    ],
  },
  {
    id: 'career',
    name: 'Career Accelerator',
    price: 149,
    period: '/month',
    description: 'Most popular choice for serious career growth',
    accentColor: '#15325b',
    accentLight: 'bg-[#15325b]/10',
    accentGlow: 'shadow-[#15325b]/30',
    borderColor: 'border-[#15325b]/40',
    btnBg: 'bg-[#15325b]',
    btnHover: 'hover:bg-[#0f2645]',
    popular: true,
    badge: 'Most Popular',
    features: [
      'Multiple Course Access',
      'Real-Time Projects',
      'Capstone Project',
      'Internship Experience Letter',
      'Placement Assistance',
    ],
  },
  {
    id: 'elite',
    name: 'Elite Tech Membership',
    price: 199,
    period: '/month',
    description: 'Unlimited access for maximum career acceleration',
    accentColor: '#d97706',
    accentLight: 'bg-[#d97706]/10',
    accentGlow: 'shadow-[#d97706]/20',
    borderColor: 'border-[#d97706]/30',
    btnBg: 'bg-[#d97706]',
    btnHover: 'hover:bg-[#b45309]',
    features: [
      'Unlimited Course Access',
      '1-on-1 Mentorship',
      'AI Workshops & Premium Sessions',
      'Premium Career Guidance',
      'Placement Referrals',
    ],
  },
];

const whatsappNumber = '15313954129';

function getWhatsAppLink(planName: string, planPrice: number): string {
  const message = `Hi PROITKEYS team! I'm interested in the ${planName} pricing plan at $${planPrice}/month. Please share more details about enrollment and benefits.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function AnimatedCheck({ color }: { color: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="flex-shrink-0"
    >
      <circle cx="10" cy="10" r="10" fill={color} fillOpacity="0.15" />
      <path
        d="M6 10L9 13L14 7"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingPlans() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>('career');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0e17 0%, #0f1729 50%, #0a0e17 100%)',
      }}
    >
      {/* Animated background mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, #BD2928 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, #15325b 0%, transparent 70%)',
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="px-4 md:px-6 lg:px-10 max-w-[1440px] mx-auto relative z-10 py-20 md:py-28">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
            <i className="ri-vip-crown-line text-[#d97706] text-sm" />
            <span className="text-white/70 text-xs font-medium tracking-wide uppercase">
              Flexible Pricing
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
            Choose Your{' '}
            <span
              className="font-extrabold"
              style={{
                background: 'linear-gradient(135deg, #BD2928 0%, #d97706 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Pricing Plan
            </span>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Invest in your future with plans designed for every stage of your IT
            career journey. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => {
            const delay = index * 150;
            const isHovered = hoveredPlan === plan.id;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                } ${
                  isHovered || isPopular
                    ? 'scale-[1.02] lg:scale-[1.03]'
                    : 'scale-100'
                }`}
                style={{
                  transitionDelay: `${delay}ms`,
                }}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan('career')}
              >
                {/* Glow effect for popular card */}
                {isPopular && (
                  <div
                    className="absolute -inset-[1px] rounded-2xl opacity-60 blur-sm transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${plan.accentColor}40, transparent 50%, ${plan.accentColor}20)`,
                    }}
                  />
                )}

                {/* Card */}
                <div
                  className={`relative rounded-2xl border backdrop-blur-sm overflow-hidden transition-all duration-500 ${
                    plan.borderColor
                  } ${
                    isHovered || isPopular
                      ? `shadow-2xl ${plan.accentGlow}`
                      : 'shadow-xl shadow-black/20'
                  }`}
                  style={{
                    background:
                      'linear-gradient(145deg, rgba(17,24,39,0.95) 0%, rgba(11,16,29,0.98) 100%)',
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="h-1 w-full transition-all duration-500"
                    style={{
                      background: isHovered
                        ? `linear-gradient(90deg, ${plan.accentColor}, ${plan.accentColor}80)`
                        : `${plan.accentColor}40`,
                      opacity: isPopular ? 1 : isHovered ? 0.8 : 0.4,
                    }}
                  />

                  {/* Most Popular Badge */}
                  {plan.badge && (
                    <div className="absolute top-4 right-4 z-20">
                      <div
                        className="text-white text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg flex items-center gap-1.5 tracking-wider uppercase"
                        style={{ backgroundColor: plan.accentColor }}
                      >
                        <i className="ri-fire-fill text-[10px]" />
                        {plan.badge}
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-6 md:p-8">
                    {/* Plan Icon & Name */}
                    <div className="mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300"
                        style={{
                          backgroundColor: `${plan.accentColor}15`,
                          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                        }}
                      >
                        <i
                          className={`${
                            plan.id === 'professional'
                              ? 'ri-user-line'
                              : plan.id === 'career'
                              ? 'ri-award-line'
                              : 'ri-vip-crown-line'
                          } text-xl`}
                          style={{ color: plan.accentColor }}
                        />
                      </div>
                      <h3 className="text-white font-bold text-lg tracking-tight">
                        {plan.name}
                      </h3>
                      <p className="text-white/40 text-sm mt-1">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-8 pb-6 border-b border-white/5">
                      <div className="flex items-baseline gap-1">
                        <span
                          className="text-2xl font-bold"
                          style={{ color: plan.accentColor }}
                        >
                          $
                        </span>
                        <span className="text-white text-5xl md:text-6xl font-extrabold tracking-tighter">
                          {plan.price}
                        </span>
                        <span className="text-white/40 text-sm font-medium ml-1">
                          {plan.period}
                        </span>
                      </div>
                      <p className="text-white/30 text-xs mt-2">
                        Billed monthly. Cancel anytime.
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-4">
                        What's Included
                      </p>
                      <ul className="space-y-3.5">
                        {plan.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 group"
                          >
                            <span className="mt-0.5 transition-transform duration-300 group-hover:scale-110">
                              <AnimatedCheck color={plan.accentColor} />
                            </span>
                            <span className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={getWhatsAppLink(plan.name, plan.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full block text-center py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${plan.btnBg} ${plan.btnHover} text-white shadow-lg`}
                      style={{
                        boxShadow: isHovered
                          ? `0 8px 30px -6px ${plan.accentColor}40`
                          : 'none',
                        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                      }}
                    >
                      <span className="flex items-center justify-center gap-2">
                        Get Started
                        <i className="ri-arrow-right-line text-sm transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-16 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <i className="ri-shield-check-line text-[#22c55e]" />
            <span>Secure Payment</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <i className="ri-time-line text-[#d97706]" />
            <span>7-Day Money Back Guarantee</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <i className="ri-customer-service-2-line text-[#2563eb]" />
            <span>24/7 Expert Support</span>
          </div>
        </div>

        {/* Bottom Note */}
        <div
          className={`text-center mt-8 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-white/30 text-sm">
            Need a custom plan for your team?{' '}
            <Link
              to="/contact"
              className="text-white/60 hover:text-white font-medium underline underline-offset-4 transition-colors duration-300"
            >
              Contact us for enterprise pricing
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}