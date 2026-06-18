import { getWhatsAppUrl, indiaPhoneNumber } from '@/config/contact';

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-6 z-40 flex flex-col gap-3">
      <a
        href={`tel:${indiaPhoneNumber.tel}`}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand hover:bg-brand-dark text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all group"
        aria-label="Call Now"
      >
        <i className="ri-phone-line text-lg md:text-xl" />
        <span className="absolute right-full mr-3 bg-dark text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
          Call Now
        </span>
      </a>

      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all group"
        aria-label="WhatsApp"
      >
        <i className="ri-whatsapp-line text-lg md:text-xl" />
        <span className="absolute right-full mr-3 bg-dark text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
