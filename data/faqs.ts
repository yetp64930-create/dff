export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What support do you provide for IG1?',
    answer:
      'We provide complete guidance for the NEBOSH IG1 open-book examination (OBE). Our trainers assist you in understanding the scenario, dissecting technical command words, structuring your answers effectively, and conducting mock paper reviews before submission.',
  },
  {
    id: 'faq-2',
    question: 'How does the IG2 report feedback work?',
    answer:
      'You share your draft workplace risk assessment report with us. Our senior safety mentors review it against official NEBOSH criteria, checking hazard identification, risk ratings, prioritization, and the hierarchy of control measures, providing detailed line-by-line feedback.',
  },
  {
    id: 'faq-3',
    question: 'Do you provide help with the closing interview?',
    answer:
      'Yes! The student must attend the official closing interview personally. We provide 1-on-1 mock interviews via video call to test your understanding of your submitted paper, prepare you for unexpected assessor questions, and build your speaking confidence.',
  },
  {
    id: 'faq-4',
    question: 'Is this support suitable for self-study students?',
    answer:
      'Absolutely. A large portion of our students are self-study learners who need structured clarity on difficult concepts, validation of their risk assessments, and targeted exam techniques without paying exorbitant institute fees.',
  },
  {
    id: 'faq-5',
    question: 'How can I book a free consultation?',
    answer:
      'Simply fill out the quick consultation form on our website or click any WhatsApp button to message us directly. Our safety advisor will discuss your qualification unit, exam timeline, and recommend the best support package for you.',
  },
];
