import devCloseUp from '@/assets/images/devs/devCloseUp.png';
import { FaMicrophone } from 'react-icons/fa';
import { CiDesktopMouse2 } from 'react-icons/ci';
import type { HeroData } from '@/types/heroData';
import pattern from '@/assets/images/pattern.webp';
import pinWheel from '@/assets/images/pinWheel.png';
import js from '@/assets/icons/tech/javascript.png';
import css from '@/assets/icons/tech/css.png';
import html from '@/assets/icons/tech/html.png';
import react from '@/assets/icons/tech/react.png';

export const heroData: HeroData = {
  profile: {
    name: 'Hary300',
    level: 'Junior',
    role: 'FRONTEND DEVELOPER',
    status: 'Available for Hire',
    greeting: "Hi, I'm Hary",
    bio: 'a frontend developer passionate about creating seamless digital experiences that are fast, responsive, and user-friendly.',
    devImage: devCloseUp,
  },
  stats: [
    {
      value: '2+',
      label: 'Years Experience',
    },
    {
      value: '99%',
      label: 'Client Satisfaction',
    },
    {
      value: '3',
      label: 'Project Delivered',
    },
    {
      value: '50',
      label: 'Clients Worldwide',
    },
  ],
  skills: [
    { name: 'JavaScript', icon: js },
    { name: 'CSS3', icon: css },
    { name: 'HTML5', icon: html },
    { name: 'React', icon: react },
  ],
  actions: {
    contactText: 'Contact Me',
    scrollText: 'Scroll Down',
  },
  icon: {
    microphone: FaMicrophone,
    mouse: CiDesktopMouse2,
  },
  background: {
    pattern: pattern,
    pinWheel: pinWheel,
  },
};
