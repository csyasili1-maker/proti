export const usPhoneNumber = {
  display: '+1 (531) 395 4129',
  shortDisplay: '(531) 395 4129',
  tel: '+15313954129',
};

export const indiaPhoneNumber = {
  display: '+91 94928 76779',
  shortDisplay: '94928 76779',
  tel: '+919492876779',
  whatsapp: '919492876779',
};

export function getWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${indiaPhoneNumber.whatsapp}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}

export const supportEmail = 'training@proitkeys.com';
