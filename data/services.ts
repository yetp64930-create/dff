export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  color: string;
  lightBg: string;
  text: string;
  linkText: string;
  bullets: string[];
}

export const services: ServiceItem[] = [
  {
    id: 'ig1-exam-coaching',
    title: 'IG1 Exam Coaching',
    subtitle: 'Open-Book Examination Mentorship',
    tag: 'IG1 SUPPORT',
    image: '/images/service-ig1.jpg',
    color: '#0284c7', // Sky Blue
    lightBg: 'rgba(2, 132, 199, 0.08)',
    text: 'Topic-wise guidance, key concepts, exam technique and answer structuring to tackle complex scenario questions.',
    linkText: 'Learn More →',
    bullets: [
      'Structured Topic Guidance',
      'Answer Writing Techniques',
      'Mock Practice & Feedback',
    ],
  },
  {
    id: 'closing-interview',
    title: 'Closing Interview Practice',
    subtitle: 'Confidential 1-on-1 Coaching',
    tag: 'INTERVIEW PREP',
    image: '/images/service-interview.jpg',
    color: '#f97316', // Vibrant Orange
    lightBg: 'rgba(249, 115, 22, 0.08)',
    text: 'One-to-one mock interviews with personalized feedback to help you confidently face your closing interview.',
    linkText: 'Learn More →',
    bullets: [
      'Realistic Interview Practice',
      'Common Questions & Answers',
      'Detailed Feedback & Tips',
    ],
  },
  {
    id: 'ig2-report-feedback',
    title: 'IG2 Report Feedback',
    subtitle: 'Workplace Risk Assessment Review',
    tag: 'IG2 REPORT',
    image: '/images/service-ig2.jpg',
    color: '#10b981', // Emerald Green
    lightBg: 'rgba(16, 185, 129, 0.08)',
    text: 'Detailed review of your risk assessment report with practical improvements and guidance based on NEBOSH marking criteria.',
    linkText: 'Learn More →',
    bullets: [
      'Report Structure Guidance',
      'Risk Assessment Support',
      'Detailed Review & Suggestions',
    ],
  },
];
