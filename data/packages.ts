export interface PackageItem {
  id: string;
  name: string;
  pricePrefix?: string;
  price: string;
  priceNote?: string;
  period?: string;
  description: string;
  badge?: string;
  featured?: boolean;
  color: string;
  features: string[];
  ctaText: string;
}

export const packages: PackageItem[] = [
  {
    id: 'ig1-paper-support',
    name: 'IG1 Paper Support',
    pricePrefix: 'Starting From',
    price: 'PKR 15,000',
    description: 'Complete guidance for open-book scenario papers, command words dissection, and structured answers.',
    color: '#0284c7', // Sky blue
    features: [
      'Topic-wise concept guidance',
      'Scenario analysis & technique',
      'Mock paper practice & feedback',
      'Answer writing techniques',
      'Closing Interview Guidance included FREE',
      'WhatsApp doubt clearing sessions',
    ],
    ctaText: 'Get Started →',
  },
  {
    id: 'closing-interview-guidance',
    name: 'Closing Interview Guidance',
    pricePrefix: 'Special Offer',
    price: 'FREE',
    priceNote: 'Free with Other Services',
    description: '1-on-1 mock interviews and personalized feedback to help you confidently face your assessor.',
    featured: true,
    badge: 'Free with Other Services',
    color: '#f97316', // Orange
    features: [
      '1-to-1 realistic mock interviews',
      'Common assessor questions & answers',
      'Personalized review & feedback',
      'Body language & confidence tips',
      '100% Free with IG1 or IG2 Support',
    ],
    ctaText: 'Claim Free Guidance →',
  },
  {
    id: 'ig2-report-support',
    name: 'IG2 Report Support',
    pricePrefix: 'Starting From',
    price: 'PKR 10,000',
    description: 'Thorough review of your workplace risk assessment draft against official NEBOSH marking criteria.',
    color: '#10b981', // Emerald
    features: [
      'Detailed report structure review',
      'Risk assessment methodology guidance',
      'Hazard identification check',
      'Actionable improvement suggestions',
      'Closing Interview Guidance included FREE',
      'Marking criteria compliance alignment',
    ],
    ctaText: 'Get Started →',
  },
];

