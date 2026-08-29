import type { Header } from '@/types/headerSection';

interface Faq {
  value: string;
  trigger: string;
  content: string;
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
      value: 'faq-1',

      trigger: 'What technologies do you work with?',
      content:
        'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
    },
    {
      value: 'faq-2',

      trigger: 'Do you work on freelance or remote projects?',
      content:
        'Yes, I am open to both freelance projects and remote full-time or contract roles depending on the project requirements.',
    },
    {
      value: 'faq-3',

      trigger: 'Can you convert Figma or Sketch designs into code?',
      content:
        'Absolutely! I specialize in translating UI/UX designs from Figma, Sketch, or Adobe XD into pixel-perfect, responsive, and clean frontend code.',
    },
    {
      value: 'faq-4',

      trigger: 'Do you collaborate with backend developers or teams?',
      content:
        'Yes, I am experienced in working closely with backend developers, UI/UX designers, and product managers to integrate RESTful APIs and build smooth web applications.',
    },
    {
      value: 'faq-5',

      trigger: 'Are you available for full-time roles?',
      content:
        'Yes, I am currently open to full-time remote or hybrid opportunities as a Frontend Developer.',
    },
  ],
};
