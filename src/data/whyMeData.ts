import devImage from '@/assets/images/devs/devCloseUp.webp';
import type { Header } from '@/types/headerSection';
import type { IconType } from 'react-icons';
import { FaUser } from 'react-icons/fa';

interface Feature {
  text: string;
  isPositive: boolean;
}

interface Card {
  id: string;
  title: string;
  avatar: string | IconType;
  isHighlighted: boolean;
  features: Feature[];
}

interface WhyMeData {
  header: Header;
  cards: Card[];
}

export const whyMeData: WhyMeData = {
  header: {
    title: 'More Than Just Code',
    subtitle:
      'We care about design, performance, and user experience all in one.',
  },
  cards: [
    {
      id: 'with-me',
      title: 'With Me',
      avatar: devImage,
      isHighlighted: true,
      features: [
        { text: 'React Expert', isPositive: true },
        { text: 'Precise Website Implementation', isPositive: true },
        { text: 'TypeScript Proficiency', isPositive: true },
        { text: 'Clean, Maintainable Code', isPositive: true },
        { text: 'Responsive Website Development', isPositive: true },
        { text: 'Performance Optimization', isPositive: true },
        { text: 'UI Design Proficiency (Figma)', isPositive: true },
      ],
    },
    {
      id: 'another-talent',
      title: 'Another Talent',
      avatar: FaUser,
      isHighlighted: false,
      features: [
        { text: 'Basic React Knowledge', isPositive: false },
        { text: 'Inconsistent Design Translation', isPositive: false },
        { text: 'Little to No TypeScript Knowledge', isPositive: false },
        { text: 'Unstructured Code', isPositive: false },
        { text: 'Inconsistent Responsiveness', isPositive: false },
        { text: 'Slow and Heavy Websites', isPositive: false },
        { text: 'No Design Skills', isPositive: false },
      ],
    },
  ],
};
