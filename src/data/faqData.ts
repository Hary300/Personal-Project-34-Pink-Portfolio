import type { Header } from '@/types/headerSection';

interface Faq {
  id: string;
  question: string;
  answer: string;
}

interface FaqData {
  header: Header;
  faqs: Faq[];
}

export const faqData: FaqData = {
  header: {
    title: 'Let’s Clear Things Up',
    subtitle:
      'I’ve answered a few questions that usually come up when working with a frontend developer like me.',
  },
  faqs: [
    {
      id: 'faq-1',

      question: 'What technologies do you work with?',
      answer:
        'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
    },
    {
      id: 'faq-2',

      question: 'Do you work on freelance or remote projects?',
      answer:
        'Yes, I am open to both freelance projects and remote full-time or contract roles depending on the project requirements.',
    },
    {
      id: 'faq-3',

      question: 'Can you convert Figma or Sketch designs into code?',
      answer:
        'Absolutely! I specialize in translating UI/UX designs from Figma, Sketch, or Adobe XD into pixel-perfect, responsive, and clean frontend code.',
    },
    {
      id: 'faq-4',

      question: 'Do you collaborate with backend developers or teams?',
      answer:
        'Yes, I am experienced in working closely with backend developers, UI/UX designers, and product managers to integrate RESTful APIs and build smooth web applications.',
    },
    {
      id: 'faq-5',

      question: 'Are you available for full-time roles?',
      answer:
        'Yes, I am currently open to full-time remote or hybrid opportunities as a Frontend Developer.',
    },
  ],
};
