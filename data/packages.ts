export interface PackageItem {
  id: string;
  name: string;
  price: string;
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
    id: 'ig1-coaching',
    name: 'IG1 Exam Coaching',
    price: '$50',
    description: 'Complete coaching for open-book scenario papers and technical structuring.',
    color: '#0284c7', // Sky blue
    features: [
      'Topic-wise concept guidance',
      'Mock practice & feedback',
      'Answer writing techniques',
      'Doubt clearing sessions on WhatsApp',
    ],
    ctaText: 'Get Started →',
  },
  {
    id: 'interview-practice',
    name: 'Closing Interview Practice',
    price: '$40',
    description: 'One-to-one coaching and mock assessments to help you pass without anxiety.',
    featured: true,
    badge: 'Most Popular',
    color: '#f97316', // Orange
    features: [
      '1-to-1 realistic mock interviews',
      'Common assessor questions & answers',
      'Personalized review & feedback',
      'Confidence building & body language tips',
    ],
    ctaText: 'Get Started →',
  },
  {
    id: 'ig2-feedback',
    name: 'IG2 Report Feedback',
    price: '$60',
    description: 'Thorough review of your workplace risk assessment draft against NEBOSH criteria.',
    color: '#10b981', // Emerald
    features: [
      'Detailed report structure review',
      'Risk assessment methodology guidance',
      'Actionable improvement suggestions',
      'Marking criteria & compliance alignment',
    ],
    ctaText: 'Get Started →',
  },
];

