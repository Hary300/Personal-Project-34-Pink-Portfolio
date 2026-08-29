import portfolio1 from '@/assets/images/portfolio/portfolio1.webp';
import portfolio2 from '@/assets/images/portfolio/portfolio2.webp';
import portfolio3 from '@/assets/images/portfolio/portfolio3.webp';
import type { Header } from '@/types/headerSection';

interface Item {
  id: string;
  title: string;
  category: string;
  isBest: boolean;
  image: string;
  link: string;
}

interface PortfolioData {
  header: Header;
  items: Item[];
}

export const portfolioData: PortfolioData = {
  header: {
    title: 'Design to Code Accuracy',
    subtitle:
      'We translated design mockups into pixel-perfect, responsive components, ensuring a smooth user experience across all devices.',
  },
  items: [
    {
      id: 'portfolio-1',
      title: 'Portfolio 1',
      category: 'Web Development',
      isBest: true,
      image: portfolio1,
      link: '#',
    },
    {
      id: 'portfolio-2',
      title: 'Portfolio 2',
      category: 'Web Development',
      isBest: true,
      image: portfolio2,
      link: '#',
    },
    {
      id: 'portfolio-3',
      title: 'Portfolio 3',
      category: 'Web Development',
      isBest: true,
      image: portfolio3,
      link: '#',
    },
  ],
};
