export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
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
    rating: 5,
    course: 'NEBOSH IG1 & IG2 Support',
    feedback:
      'The IG1 coaching was excellent. The explanation of command words and mock questions really helped me pass on my first attempt. Highly recommended!',
  },
  {
    id: 'muhammad-asif',
    name: 'Muhammad Asif',
    role: 'Civil Engineer & HSE Aspirant',
    location: 'Lahore, Pakistan',
    avatar: '/images/avatar-ali.jpg',
    rating: 5,
    course: 'Closing Interview Coaching',
    feedback:
      'I was very anxious about the closing interview, but the mock session gave me the confidence to explain my exam submission clearly. Passed smoothly!',
  },
  {
    id: 'zeeshan-tariq',
    name: 'Zeeshan Tariq',
    role: 'Site Safety Supervisor',
    location: 'Islamabad, Pakistan',
    avatar: '/images/avatar-ali.jpg',
    rating: 5,
    course: 'IG2 Risk Assessment Report',
    feedback:
      'The IG2 feedback was spot on. They helped me organize the hazard identification and hierarchy of controls according to NEBOSH marking criteria.',
  },
  {
    id: 'kamran-ali',
    name: 'Kamran Ali',
    role: 'Mechanical Project Engineer',
    location: 'Overseas Student (Saudi Arabia)',
    avatar: '/images/avatar-ali.jpg',
    rating: 5,
    course: 'Comprehensive NEBOSH Package',
    feedback:
      'Professional, fast, and structured mentoring via WhatsApp. The trainers know exactly where students lose marks and guide you step by step.',
  },
];
