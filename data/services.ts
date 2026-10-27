export interface ServiceItem {
  icon: string;
  title: string;
  text: string;
  link: string;
  badge?: string;
}

export const services: ServiceItem[] = [
  {
    icon: '✎',
    title: 'NEBOSH IG1 Paper Support',
    text: 'Comprehensive guidance from experienced safety tutors on IG1 open-book examination questions, scenario analysis, and technical structuring.',
    link: 'Ask about IG1',
    badge: 'Popular',
  },
  {
    icon: '☏',
    title: 'Closing Interview Preparation',
    text: 'Mock interview practice and detailed coaching so you can confidently articulate and defend your exam submission before the assessor.',
    link: 'Ask about interviews',
  },
  {
    icon: '▤',
    title: 'IG2 Risk Assessment Report',
    text: 'End-to-end guidance for your workplace risk assessment project, hazard identification, hierarchy of control measures, and report documentation.',
    link: 'Ask about IG2',
    badge: 'Comprehensive',
  },
];

