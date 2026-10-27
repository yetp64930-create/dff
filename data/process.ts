export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 'STEP 01',
    title: 'Initial Consultation',
    description: 'Reach out via WhatsApp or phone. Discuss your specific qualification unit, deadlines, and current preparation level.',
  },
  {
    step: 'STEP 02',
    title: 'IG1 Paper Mentorship',
    description: 'Our experienced safety tutors guide you through exam scenarios, command words, marking schemes, and standard formatting.',
  },
  {
    step: 'STEP 03',
    title: 'Closing Interview Coaching',
    description: 'Practice one-on-one mock interview sessions. Understand every part of your paper so you can comfortably explain your answers.',
  },
  {
    step: 'STEP 04',
    title: 'IG2 Report Guidance',
    description: 'Structured review and feedback on your workplace risk assessment drafts to ensure alignment with NEBOSH marking criteria.',
  },
];

