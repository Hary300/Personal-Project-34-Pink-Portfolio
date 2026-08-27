import { type IconType } from 'react-icons';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa';

interface SocialMediaLink {
  id: number;
  name: string;
  url: string;
  icon: IconType;
}

export const socialMediaLinks: SocialMediaLink[] = [
  {
    id: 1,
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: FaFacebookF,
  },
  {
    id: 2,
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: FaInstagram,
  },
  {
    id: 3,
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: FaLinkedinIn,
  },
  {
    id: 4,
    name: 'TikTok',
    url: 'https://tiktok.com',
    icon: FaTiktok,
  },
];
