import type { Header } from '@/types/headerSection';

interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

interface TestimonyData {
  header: Header;
  testimonials: Testimonial[];
}

export const testimonialData: TestimonyData = {
  header: {
    title: 'What They Say About Working With Me',
    subtitle:
      "Real words from clients, teammates, and mentors I've collaborated with on various projects.",
  },
  testimonials: [
    {
      id: '1',
      rating: 5,
      quote:
        "Working with Hary was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn't thought of. Highly recommended!",
      name: 'Sarah Tan',
      role: 'Product Manager at Finovate',
      avatar: 'https://i.pravatar.cc/150?img=47',
    },
    {
      id: '2',
      rating: 5,
      quote:
        'Exceptional frontend skill set! He transformed our complex Figma mockups into a blazingly fast React application with pixel-perfect accuracy. Communication was top-tier throughout.',
      name: 'Michael Chen',
      role: 'Tech Lead at Nexus Studio',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      id: '3',
      rating: 5,
      quote:
        'He is a rare developer who truly understands UI/UX design. The animations and responsive layouts he delivered exceeded our initial expectations.',
      name: 'Jessica Lopez',
      role: 'Senior UI/UX Designer',
      avatar: 'https://i.pravatar.cc/150?img=32',
    },
    {
      id: '4',
      rating: 5,
      quote:
        'Delivered our Next.js web application ahead of schedule without sacrificing code quality. His attention to performance optimization made a huge difference.',
      name: 'David Miller',
      role: 'Founder at Craftify',
      avatar: 'https://i.pravatar.cc/150?img=53',
    },
    {
      id: '5',
      rating: 5,
      quote:
        'Super reliable and proactive! He picked up our TypeScript codebase effortlessly and refactored several components to be significantly more maintainable.',
      name: 'Amanda Wright',
      role: 'Engineering Manager at DataPulse',
      avatar: 'https://i.pravatar.cc/150?img=44',
    },
  ],
};
