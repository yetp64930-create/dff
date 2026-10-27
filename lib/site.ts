export const site = {
  name: 'SafetyScript',
  title: 'NEBOSH Paper & Report Help Pakistan | SafetyScript',
  description: 'NEBOSH IG1 paper support, closing interview preparation and IG2 risk assessment guidance in Pakistan.',
  phoneDisplay: '0327 8090456',
  phoneInternational: '+923278090456',
  whatsappNumber: '923278090456',
  whatsappMessage: 'Can I get more information on this?',
};

export const whatsappLink = (message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

// example.com is a placeholder; replace before production.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
