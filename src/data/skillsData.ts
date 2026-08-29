import html from '@/assets/icons/tech/html.png';
import css from '@/assets/icons/tech/css.png';
import js from '@/assets/icons/tech/javascript.png';
import react from '@/assets/icons/tech/react.png';
import reactNative from '@/assets/icons/tech/reactNative.png';
import docker from '@/assets/icons/tech/docker.png';
import express from '@/assets/icons/tech/express.png';
import mongodb from '@/assets/icons/tech/mongodb.png';
import next from '@/assets/icons/tech/next.png';
import postgre from '@/assets/icons/tech/postgre.png';
import sequalizer from '@/assets/icons/tech/sequalize.png';
import ts from '@/assets/icons/tech/typescript.png';
import type { Header } from '@/types/headerSection';

interface Skill {
  id: string;
  name: string;
  description: string;
  icon: string;
}

interface SkillsData {
  header: Header;
  skills: Skill[];
}

export const techStackData: SkillsData = {
  header: {
    title: 'Code, Design, and Everything in Between',
    subtitle:
      'These are the technologies that power my workflow and bring ideas to life.',
  },
  skills: [
    {
      id: 'html',
      name: 'HTML',
      description: 'Crafting semantic, accessible HTML structures.',
      icon: html,
    },
    {
      id: 'css',
      name: 'CSS',
      description: 'Styling responsive, modern, and pixel-perfect layouts.',
      icon: css,
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      description: 'Building interactive, dynamic logic for web apps.',
      icon: js,
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      description: 'Enhancing code reliability with strong type-checking.',
      icon: ts,
    },
    {
      id: 'react',
      name: 'React',
      description: 'Developing scalable, component-based user interfaces.',
      icon: react,
    },
    {
      id: 'next',
      name: 'Next.js',
      description: 'Building fast, SEO-friendly SSR and full-stack web apps.',
      icon: next,
    },
    {
      id: 'react-native',
      name: 'React Native',
      description: 'Creating cross-platform mobile apps for iOS and Android.',
      icon: reactNative,
    },
    {
      id: 'express',
      name: 'Express.js',
      description: 'Structuring fast, minimalist RESTful APIs on Node.js.',
      icon: express,
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      description: 'Managing flexible, high-performance NoSQL databases.',
      icon: mongodb,
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      description: 'Designing reliable, complex relational database systems.',
      icon: postgre,
    },
    {
      id: 'sequelize',
      name: 'Sequelize',
      description: 'Simplifying SQL database operations with a powerful ORM.',
      icon: sequalizer,
    },
    {
      id: 'docker',
      name: 'Docker',
      description: 'Containerizing applications for consistent deployment.',
      icon: docker,
    },
  ],
};
