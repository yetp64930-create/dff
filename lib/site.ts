export const site = {
  name: 'SafetyScript',
  tagline: 'Study Smart. Succeed Safer.',
  title: 'SafetyScript | Premium NEBOSH IG1 Coaching & IG2 Report Mentorship',
  description:
    'Expert NEBOSH IG1 open-book paper guidance, closing interview mock preparation, and IG2 practical risk assessment report feedback in Pakistan & worldwide.',
  phoneDisplay: '0327 8090456',
  phoneInternational: '+923278090456',
  whatsappNumber: '923278090456',
  email: 'support@safetyscript.pk',
  hours: 'Mon - Sat (9:00 AM – 9:00 PM PKT)',
  whatsappMessage: 'Hello SafetyScript, I would like more information on NEBOSH guidance.',
};

export const whatsappLink = (message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://safetyscript.vercel.app';
