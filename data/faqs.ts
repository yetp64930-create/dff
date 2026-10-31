export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What does IG1 Paper Support cover?',
    answer:
      'We provide complete guidance for the NEBOSH IG1 open-book examination (OBE). Our trainers assist you in dissecting scenarios, technical command words, structuring high-scoring answers, and conducting mock paper reviews before submission. Closing Interview Guidance is also included free.',
  },
  {
    id: 'faq-2',
    question: 'How does the IG2 Report Support work?',
    answer:
      'You share your draft workplace risk assessment report with us. Our senior safety mentors review it against official NEBOSH marking criteria, checking hazard identification, risk ratings, prioritization, and the hierarchy of control measures, providing detailed line-by-line feedback. Closing Interview Guidance is also included free.',
  },
  {
    id: 'faq-3',
    question: 'Is Closing Interview Guidance really free?',
    answer:
      'Yes! Closing Interview Guidance is provided 100% free with our IG1 Paper Support or IG2 Report Support packages. We conduct 1-on-1 mock interviews via video call to test your comprehension of your submitted paper, prepare you for examiner questions, and build speaking confidence.',
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
