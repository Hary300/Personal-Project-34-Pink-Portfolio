import gear from '@/assets/icons/aboutMe/gear.png';
import colorPalette from '@/assets/icons/aboutMe/colorPalette.png';
import smartPhone from '@/assets/icons/aboutMe/smartPhone.png';

interface Heading {
  start: string;
  highlight: string;
  end: string;
}

interface Item {
  id: number;
  icon: string;
  title: string;
  description: string;
}
interface AboutMeData {
  heading: Heading;
  items: Item[];
}

export const aboutMeData: AboutMeData = {
  heading: {
    start: 'As frontend developers , we bring designs to life with ',
    highlight: 'clean, responsive code',
    end: ' that blends creativity 🎨 with usability 🌟.',
  },
  items: [
    {
      id: 1,
      icon: gear,
      title: 'COMPONENT-BASED DEVELOPMENT',
      description:
        'Reusable, scalable code built with modern frameworks like React or Vue.',
    },
    {
      id: 2,
      icon: colorPalette,
      title: 'PIXEL-PERFECT UI IMPLEMENTATION',
      description:
        'Translating design into high-fidelity user interfaces with attention to detail.',
    },
    {
      id: 3,
      icon: smartPhone,
      title: 'RESPONSIVE & ACCESSIBLE DESIGN',
      description:
        'Optimized layouts that work seamlessly across all screen sizes and devices.',
    },
  ],
};
