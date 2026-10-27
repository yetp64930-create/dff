export interface TestimonialItem {
  name: string;
  role: string;
  feedback: string;
  rating: number;
  location: string;
}

export const testimonials: TestimonialItem[] = [
  {
    name: 'Muhammad Asif',
    role: 'HSE Officer Aspirant',
    location: 'Lahore, Pakistan',
    rating: 5,
    feedback: 'The IG1 scenario guidance was extremely helpful. The trainer broke down complex scenario questions into clear, actionable points.',
  },
  {
    name: 'Zeeshan Tariq',
    role: 'Site Safety Supervisor',
    location: 'Karachi, Pakistan',
    rating: 5,
    feedback: 'I was nervous about the closing interview, but the mock session gave me the confidence I needed to explain my paper naturally.',
  },
  {
    name: 'Kamran Ali',
    role: 'Mechanical Engineer',
    location: 'Islamabad, Pakistan',
    rating: 5,
    feedback: 'Structured and prompt support on the IG2 risk assessment format and control measures. Highly recommended for busy professionals.',
  },
];

