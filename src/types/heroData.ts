import type { IconType } from 'react-icons';

export interface HeroProfile {
  name: string;
  level: string;
  role: string;
  status: string;
  greeting: string;
  bio: string;
  devImage: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroSkill {
  name: string;
  icon: string;
}

export interface HeroActions {
  contactText: string;
  scrollText: string;
}

export interface HeroIcon {
  microphone: IconType;
  mouse: IconType;
}

export interface HeroData {
  profile: HeroProfile;
  stats: HeroStat[];
  skills: HeroSkill[];
  actions: HeroActions;
  icon: HeroIcon;
  background: {
    pattern: string;
    pinWheel: string;
  };
}
