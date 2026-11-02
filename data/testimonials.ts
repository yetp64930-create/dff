export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  initials: string;
  color: string;
  gradient: string;
  rating: number;
  course: string;
  feedback: string;
}

export const testimonials: TestimonialItem[] = [
  {
    id: 'ali-raza',
    name: 'Ali Raza',
    role: 'HSE Safety Officer',
    location: 'Karachi, Pakistan',
    avatar: '/images/avatar-ali.jpg',
    initials: 'AR',
    color: '#0284c7', // Sky Blue
    gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    rating: 5,
    course: 'IG1 Paper Support & IG2',
    feedback:
      'The IG1 paper support was excellent. The explanation of command words and mock questions really helped me pass on my first attempt. Highly recommended!',
  },
  {
    id: 'muhammad-asif',
    name: 'Muhammad Asif',
    role: 'Civil Engineer & HSE Aspirant',
    location: 'Lahore, Pakistan',
    avatar: '/images/avatar-asif.jpg',
    initials: 'MA',
    color: '#f97316', // Orange
    gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    rating: 5,
    course: 'Closing Interview Guidance',
    feedback:
      'I was very anxious about the closing interview, but the mock session gave me the confidence to explain my exam submission clearly. Passed smoothly!',
  },
  {
    id: 'zeeshan-tariq',
    name: 'Zeeshan Tariq',
    role: 'Site Safety Supervisor',
    location: 'Islamabad, Pakistan',
    avatar: '/images/avatar-zeeshan.jpg',
    initials: 'ZT',
    color: '#10b981', // Emerald
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    rating: 5,
    course: 'IG2 Report Support',
    feedback:
      'The IG2 feedback was spot on. They helped me organize the hazard identification and hierarchy of controls according to NEBOSH marking criteria.',
  },
  {
    id: 'kamran-ali',
    name: 'Kamran Ali',
    role: 'Mechanical Project Engineer',
    location: 'Overseas Student (Saudi Arabia)',
    avatar: '/images/avatar-kamran.jpg',
    initials: 'KA',
    color: '#8b5cf6', // Purple
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    rating: 5,
    course: 'Complete NEBOSH Mentorship',
    feedback:
      'Professional, fast, and structured mentoring via WhatsApp. The trainers know exactly where students lose marks and guide you step by step.',
  },
];
