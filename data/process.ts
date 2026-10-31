export interface ProcessStep {
  step: string;
  stepNumber: string;
  title: string;
  description: string;
  color: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    stepNumber: 'STEP 01',
    title: 'Free Consultation',
    description: 'Share your goals and requirements on WhatsApp to get expert initial guidance.',
    color: '#06b6d4', // Cyan
  },
  {
    step: '02',
    stepNumber: 'STEP 02',
    title: 'Choose Your Support',
    description: 'Select IG1 paper support, IG2 report support, or closing interview guidance based on your need.',
    color: '#3b82f6', // Blue
  },
  {
    step: '03',
    stepNumber: 'STEP 03',
    title: 'Personalized Mentoring',
    description: 'Receive tailored 1-on-1 feedback, mock sessions, and actionable recommendations.',
    color: '#f97316', // Orange
  },
  {
    step: '04',
    stepNumber: 'STEP 04',
    title: 'Practice & Succeed',
    description: 'Apply improvements, clear your assessments, and secure your NEBOSH qualification.',
    color: '#8b5cf6', // Purple
  },
];
